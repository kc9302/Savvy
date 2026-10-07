// index.html 의 기본 규칙(주제 + 세부 태그)을 다시 넣는다. 주제 규칙은 백업본에서 가져와 순서를 조정하고, 세부 규칙은 아래 SUB 에서 고친다.
// 사용법: node tools/build-rules.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const base = fs.readFileSync(path.join(root, "docs/backup/index-v0.1-baseline.html"), "utf8");
let top = base.match(/DEFAULT_RULES=`([\s\S]*?)`;/)[1].split("\r").join("").split("\n").filter(l => l.includes(":") && !l.includes(">"));

// 어휘가 뚜렷한 주제를 운동보다 앞에 둔다. "러닝" 한 단어 때문에 경제 글이 운동으로 가는 일을 줄인다.
const FIRST = ["사업/마케팅", "IT/개발", "재테크", "커리어/성장"];
const name = l => l.split(":")[0].trim();
top = [...top.filter(l => FIRST.includes(name(l))), ...top.filter(l => !FIRST.includes(name(l)))];
// 이모지 키워드는 아무 글에나 걸린다
top = top.map(l => { const i = l.indexOf(":"); return l.slice(0, i + 1) + " " + l.slice(i + 1).split(",").map(s => s.trim()).filter(k => k && !/^[\p{Extended_Pictographic}]+$/u.test(k)).join(","); });

const SUB = `
운동 > 목·거북목: 거북목,일자목,목 스트레칭,목통증,목 뒤,승모근,turtle neck,neck
운동 > 어깨: 어깨,견갑,라운드숄더,회전근,shoulder,shoulders
운동 > 허리·코어: 허리,요통,척추,코어,복근,플랭크,lower back,core,plank
운동 > 골반·고관절: 골반,고관절,엉덩이,둔근,pelvic,hip,glute
운동 > 무릎·발목: 무릎,발목,종아리,knee,ankle
운동 > 스트레칭·폼롤러: 스트레칭,폼롤러,이완,유연,stretch,stretching,mobility,foam roller
운동 > 근력(상체): 가슴,등운동,팔운동,푸쉬업,턱걸이,벤치,덤벨,chest,back day,push up,pull up,bench
운동 > 근력(하체): 하체,스쿼트,런지,허벅지,데드리프트,squat,lunge,deadlift,leg day
운동 > 러닝: 러닝,달리기,마라톤,조깅,러닝화,running,marathon,jogging
운동 > 필라테스·요가: 필라테스,요가,pilates,yoga
운동 > 자세 교정: 자세,교정,체형,재활,posture,tilt,rehab
운동 > 홈트·맨몸: 홈트,맨몸,밴드,miniband,bands,bodyweight,home workout
운동 > 다이어트: 다이어트,체지방,감량,diet,fat loss
커리어/성장 > 자격증·공부: 자격증,토익,공부법,시험,certificate,toeic
커리어/성장 > 면접·자소서: 면접,자소서,자기소개서,이력서,포트폴리오,interview,resume
커리어/성장 > 이직·직장생활: 이직,연봉,직장인,퇴사,사직서,팀원,업무,career
커리어/성장 > 습관·동기부여: 습관,동기부여,루틴,아침,motivation,habit,routine
재테크 > 예적금·절약: 예적금,적금,절약,저축,saving
재테크 > 세금·연말정산: 세금,연말정산,소득공제,환급,tax
재테크 > 부동산·전월세: 부동산,전세,월세,청약,보증금,아파트,임차인
재테크 > 주식·투자: 주식,투자,etf,배당,stock,invest
맛집 > 서울: 서울,성수,연남,망원,홍대,강남,을지로,종로,용산,마포,영등포,문래
맛집 > 지방: 부산,대전,대구,광주,제주,강릉,전주,경주,인천,수원
맛집 > 해외: 일본,오사카,도쿄,후쿠오카,fukuoka,tokyo,osaka,대만,타이베이,방콕,유럽
맛집 > 술집·바: 술집,바,칵테일,와인,맥주,막걸리,포차,wine,beer,bar
요리 > 레시피: 레시피,만드는 법,만드는법,재료,2인분,1인분,recipe
요리 > 베이킹·디저트: 베이킹,빵,케이크,쿠키,디저트,baking,bread,cake
요리 > 간편식·자취: 간편,자취,에어프라이어,에프,전자레인지,10분,초간단
살림/꿀팁 > 청소·정리: 청소,정리,수납,하수구,싱크대,욕실
살림/꿀팁 > 자취·생활: 자취,원룸,생활용품,다이소
커플/가족 > 육아: 육아,아기,아이,엄마,아빠,키즈,어린이
커플/가족 > 커플·부부: 커플,남친,여친,남편,아내,부부,데이트
커플/가족 > 결혼·웨딩: 결혼,웨딩,청혼,신혼,wedding
여행 > 국내: 제주,강릉,부산,속초,경주,전주,여수,캠핑,한옥
여행 > 해외: 일본,오사카,도쿄,유럽,발리,방콕,대만,파리,italy,europe,japan
심리/마음 > 위로·번아웃: 위로,지쳐,번아웃,힘들,쉬어
심리/마음 > 자존감·불안: 자존감,자신감,불안,예민,멘탈
`.trim().split("\n");

const rules = top.concat(SUB).join("\n");
if (/[`$]/.test(rules)) throw new Error("규칙에 백틱이나 $가 있으면 안 됩니다");
const p = path.join(root, "index.html");
let h = fs.readFileSync(p, "utf8");
const m = h.match(/DEFAULT_RULES=`([\s\S]*?)`;/);
if (!m) throw new Error("index.html 에 DEFAULT_RULES 가 없습니다");
h = h.replace(m[0], () => "DEFAULT_RULES=`" + rules + "`;");
fs.writeFileSync(p, h);
console.log("주제", top.length, "줄 + 세부", SUB.length, "줄 →", top.slice(0, 6).map(name).join(" > "), "...");
