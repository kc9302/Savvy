// 내 저장 데이터를 미리 담은 개인용 페이지를 만든다. 결과 파일에는 개인 데이터가 들어 있으니 올리지 말 것(.gitignore 처리됨).
// 사용법: node tools/build-personal.js <saved_posts.json> [crawl_cache.json|-] [출력.html]
const fs = require("fs"), path = require("path");
const [src, cachePath = "-", out = "my-saved-map.html", imgPath = "-"] = process.argv.slice(2);
if (!src) { console.log("사용법: node tools/build-personal.js <saved_posts.json> [crawl_cache.json|-] [출력.html]"); process.exit(1); }

const get = (x, l) => (x.label_values.find(v => v.label === l) || {}).value || "";
const ALT = /^(?:Photo|Video|Reel)?\s*(?:by|shared by)\s+(.+?)\s+on\s+([A-Z][a-z]+ \d{1,2}, \d{4})/;
const data = JSON.parse(fs.readFileSync(src, "utf8"));
let cache = {};
if (cachePath !== "-") cache = JSON.parse(fs.readFileSync(cachePath, "utf8"));
// 이미지에서 읽은 글(주소 → {text, summary, topic, tags, confidence}). 선택 입력.
let imgs = {};
if (imgPath !== "-") imgs = JSON.parse(fs.readFileSync(imgPath, "utf8"));

// 400자로 자를 때 이모지(서로게이트 쌍)가 반으로 잘려 깨진 글자가 되지 않게 한다
const clip = (s, n) => {
  let t = s.slice(0, n);
  const c = t.charCodeAt(t.length - 1);
  if (c >= 0xD800 && c <= 0xDBFF) t = t.slice(0, -1);
  return t.split("�").join("");
};
let withCaption = 0, dated = 0, imgUsed = 0;
const items = data.map(x => {
  const url = get(x, "URL");
  let user = get(x, "제목"), text = get(x, "캡션"), ts = x.timestamp || 0;
  const m = text.match(ALT); // 긁어온 설명 문구에서 게시일을 먼저 챙긴다(캡션을 덮어쓰기 전에)
  if (m) { const t = Date.parse(m[2]); if (t) ts = t / 1000; user = user || m[1]; }
  const p = cache[url];
  if (p && !p.fail) { user = p.user || user; if (p.caption) { text = p.caption; withCaption++; } }
  let hint = "", hintTags = "";
  const im = imgs[url];
  if (im) {
    const body = [im.summary, im.text].filter(Boolean).join(" ");
    // 캡션이 실제 글이면 뒤에 붙이고, 썸네일 설명뿐이면 이미지 글로 바꾼다
    if (body) text = (text && !/^(Photo|Video|Reel) (by|shared by)|^May be|^tagging/.test(text) ? text + " ▸ " : "") + body;
    if (im.confidence !== "낮음" && im.topic && im.topic !== "미분류") { hint = im.topic; hintTags = (im.tags || []).join("|"); imgUsed++; }
  }
  if (ts) dated++;
  return { timestamp: ts, label_values: [{ label: "URL", value: url, href: url }, { label: "제목", value: user }, { label: "캡션", value: clip(text, im ? 600 : 400) }, ...(hint ? [{ label: "추천주제", value: hint }, { label: "추천태그", value: hintTags }] : [])] };
});

let html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const json = JSON.stringify(items).replace(/</g, "\\u003c"); // </script> 방지
const marker = '<script>/* JSZip v3.10.1 (MIT) 내장';
if (!html.includes(marker)) throw new Error("index.html 구조가 바뀌었습니다");
html = html.replace(marker, () => '<script type="application/json" id="preload">' + json + "</script>\n" + marker);
html = html.replace("파일은 이 기기의 브라우저 안에서만 읽습니다. 어디로도 전송하지 않습니다.", "이 페이지에는 내 저장 목록이 들어 있습니다. 개인용이니 공개하지 마세요.");
fs.writeFileSync(out, html);
console.log(`항목 ${items.length}개, 캡션 채움 ${withCaption}개, 날짜 있음 ${dated}개, 이미지 추천 ${imgUsed}개 → ${out} (${Math.round(html.length / 1024)}KB)`);
