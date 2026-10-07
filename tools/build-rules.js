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

// 여러 주제의 글에 흔히 나오는 일반적인 단어. 앞에 ~를 붙이면 반만 센다(0.5점). 주제는 1점 이상이어야 정해지므로 혼자서는 주제를 못 정하고, 다른 단어와 함께 있거나 두 개가 겹쳐야 정한다.
const WEAK = {
  "사업/마케팅": "인사이트,브랜드,마인드,성공,부자,고객,수익,시장,구독자,유튜버,가게,차리,홍보",
  "IT/개발": "알고리즘,구글,타임라인,스킨,앱스토어",
  "커리어/성장": "직장인,습관,영어,english,업무,직장,글쓰기,전문가,프리랜서,팀원,productivity",
  "재테크": "경제,거래,계약,변호사,법률,로또,money,finance",
  "운동": "밴드,bands,dance,tutorial,chest,shoulders,엉덩이,근육,골반",
  "음악": "공연,band,cover,listen,duet,가사,라이",
  "요리": "소금,설탕,간장,소스,식감,구워,삶,볶,재료,연어",
  "맛집": "주소,메뉴,food,wine,beer,맥주,와인,막걸리,소주,만두,치킨",
  "카페": "디저트,케이크,식빵,아이스크림,자몽,망고,요거트,스무디,커스텀",
  "살림/꿀팁": "꿀팁,정리,포장,리본,hack",
  "여행": "일본,japan,europe,유럽,부산,대전,스파",
  "서울/나들이": "서울,성수,공원,문구,종로,스팟,꽃집,산책",
  "패션": "핏,바지,style,팬츠,목걸이,카고,shirt,pants",
  "쇼핑/소비": "가격,마트,이벤트,off,구매",
  "책": "작가",
  "영화/드라마": "kbs,sbs,jtbc,tvn,연기,감독,배우",
  "아트/디자인": "그림,카드,그릇",
  "사진": "사진,언스플래쉬,landscape,snap",
  "반려동물": "dog,cat,pet",
  "건강/웰빙": "건강,병원,허리,턱,영양,소화,멘탈,다이어트",
  "커플/가족": "아내,여보,오빠,엄마,아빠,아들,family,baby,kids,결혼",
  "유머/밈": "ㅋㅋㅋ,실화,짤,mbti",
  "심리/마음": "감정,스스로,기분,응원,편한,단단,상처,후회,화를,실망,짜증,위로,힘들,지친",
  "글귀/명언": "인생,행복,시간,당신,질문,존재,진심,믿음,용기,낭만,다정,공감,편지,말씀,법칙,서른,살아가,위로",
  "연애/관계": "관계,사랑,love,데이트",
};
const weak = Object.fromEntries(Object.entries(WEAK).map(([t, s]) => [t, new Set(s.split(","))]));
const unknown = Object.keys(WEAK).filter(t => !top.some(l => name(l) === t));
if (unknown.length) throw new Error("WEAK 의 주제가 규칙에 없습니다: " + unknown.join(","));
top = top.map(l => { const t = name(l), i = l.indexOf(":"); const w = weak[t]; if (!w) return l; return l.slice(0, i + 1) + " " + l.slice(i + 1).split(",").map(s => s.trim()).map(k => w.has(k) ? "~" + k : k).join(","); });

const rules = top.concat(SUB).join("\n");
if (/[`$]/.test(rules)) throw new Error("규칙에 백틱이나 $가 있으면 안 됩니다");
const p = path.join(root, "index.html");
let h = fs.readFileSync(p, "utf8");
const m = h.match(/DEFAULT_RULES=`([\s\S]*?)`;/);
if (!m) throw new Error("index.html 에 DEFAULT_RULES 가 없습니다");
h = h.replace(m[0], () => "DEFAULT_RULES=`" + rules + "`;");
fs.writeFileSync(p, h);
console.log("주제", top.length, "줄 + 세부", SUB.length, "줄 →", top.slice(0, 6).map(name).join(" > "), "...");
