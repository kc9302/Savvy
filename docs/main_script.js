
(()=>{
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DEFAULT_RULES=`사업/마케팅: 사업,창업,마케팅,매출,~인사이트,~브랜드,사업가,~고객,~수익,~시장,~마인드,~성공,~부자,브랜딩,business,marketing,startup,founder,~홍보,스타트업,이커머스,shopify,~구독자,~유튜버,삼성전자,~가게,~차리,창업가
IT/개발: 코딩,개발자,개발,배포,웹사이트,프로그래밍,~알고리즘,노션,자동화,ai,gpt,chatgpt,llm,coding,developer,programming,python,javascript,react,github,algorithm,algorithms,notion,automation,ppt,피피티,powerpoint,motiongraphics,rainmeter,macos,~타임라인,~구글,~앱스토어,~스킨
커리어/성장: 이력서,포트폴리오,취업,신입,주니어,면접,커리어,~직장인,퇴사,~습관,공부법,자기계발,~영어,동기부여,career,~productivity,~english,motivation,사직서,이직,~팀원,~업무,~글쓰기,routine,keepgoing,멘땅,연봉,~직장,~전문가,~프리랜서,n잡,hbr,지원자,일잘
재테크: 재테크,투자,~경제,주식,부동산,소득공제,연말정산,청약,적금,절약,월세,invest,stock,~finance,~money,전세,보증금,임차인,집주인,~변호사,세입자,~법률,~계약,등기,~로또,아파트,하이닉스,~거래
수영: 수영,접영,평영,자유형,배영,스컬링,물잡기,swim,swimming,butterfly,breaststroke,freestyle,synchronisedswimming,泳法,nefes
운동: 운동,헬스,필라테스,요가,클라이밍,등산,러닝,달리기,스트레칭,~골반,자세교정,코어,gym,fitness,workout,yoga,pilates,running,crossfit,golf,골프,mobility,stretching,treino,entreno,miniband,minibands,~bands,~chest,~shoulders,reps,calisthenics,bodybuilding,physique,폼롤러,~근육,전거근,~엉덩이,~밴드,어질리티,breakdance,~dance,~tutorial,тренировка,pelvic,entrenamiento,dorsal,hombro,trapecios
스포츠: 야구,kbo,ssg,랜더스,baseball,pitcher,축구,손흥민,투수,선발,농구
음악: 음악,노래,가수,보컬,피아노,기타,~공연,콘서트,music,song,singer,vocal,piano,guitar,concert,~band,jazz,kpop,멜로디,lyrics,~가사,플리,플레이리스트,playlist,추천곡,명곡,발라드,앨범,발매,셋리스트,재즈,페스티벌,히게단,혁오,잔나비,너드커넥션,카더가든,호피폴라,쌈디,사이먼도미닉,~duet,~cover,~listen,lullaby,mkgee,박지윤,피처링,라이브,ライブ,曲,팟캐스트,스무스톡,엑소,exo,아이유,도경수,팔레트
요리: 요리,레시피,만드는 법,만드는법,만들어봤,~재료,2인분,1인분,~소금,~설탕,~간장,에어프라이어,에프,~구워,~삶,~볶,수육,덮밥,파스타,베이킹,recipe,cook,cooking,chef,baking,집밥,홈쿡,kfood,koreanfood,샐러드,새우까는법,대하구이,簡単,作ろ,食パン,~연어,구성은,마파,레토르트,~소스,~식감
맛집: 맛집,식당,레스토랑,~메뉴,국밥,술집,노포,일식집,고깃집,돈까스,초밥,오마카세,브런치,restaurant,~food,gourmet,sushi,ramen,pizza,burger,~wine,~beer,~맥주,~와인,~막걸리,~주소,영업시간,~치킨,~만두,칵테일,~소주,김치찌개,분식,갈비,폴라포,맛있
카페: 카페,커피,~디저트,베이커리,~케이크,~식빵,빵집,cafe,coffee,dessert,bakery,latte,~아이스크림,~자몽,~망고,~요거트,보바,밀크폼,~스무디,~커스텀,フルーツ
살림/꿀팁: ~꿀팁,살림,자취,~정리,수납,청소,하수구,싱크대,음쓰,음식물,다이소,생활용품,원룸,신혼집,diy,~hack,~포장,~리본,클리커
여행: 여행,호텔,관광,항공,캠핑,제주,오사카,도쿄,~일본,~유럽,~스파,찜질방,사우나,travel,trip,tour,hotel,camp,~japan,~europe,italy,~부산,~대전,fukuoka,busan,gwangalli,광안리,후쿠오카,바르셀로나,barcelona
서울/나들이: 한강,~성수,연희동,서울시,~서울,망원동,건대,안국,~꽃집,벚꽃,~산책,관악산,연주대,나들이,~스팟,~공원,무료 프로그램,~문구,편집샵,칵테일바,행궁동,~종로
패션: 패션,코디,옷장,스타일링,~바지,~핏,무인양품,유니클로,fashion,ootd,outfit,~style,sneaker,vintage,lookbook,착용정보,~shirt,~pants,bandana,bandanas,반다나,accessory,~목걸이,~카고,~팬츠,button-up
쇼핑/소비: 할인,세일,sale,~이벤트,예약판매,완판,~구매,~가격,~마트,이마트,장보기,쿠폰,공구,득템,언박싱,unboxing,~off
뷰티: 뷰티,메이크업,화장품,피부관리,스킨케어,헤어스타일,네일,향수,beauty,makeup,skincare,cosmetic,perfume,미용실,헤어컷,다운펌,남자머리
인테리어: 인테리어,가구,집꾸미기,홈데코,플랜테리어,욕실,interior,furniture,decor,ikea
책: 책추천,책읽,독서,서점,~작가,에세이,문학,소설,좋은글,book,reading,essay,novel,시집,신간,poem,poemmag,heungeul,mugglinghaus
영감/크리에이터: ourexpresso,번역 및 자막,인터뷰,창작,창작자,관객,아티스트,예술,예술가,작업공간,취향 수집,journaling,그랜드마스터클래스,신해철,양동근,빈지노,mtv,noisey,david bowie,데이비드 보위
영화/드라마: 영화,드라마,넷플릭스,애니,~tvn,~kbs,~sbs,~jtbc,tving,예능,movie,film,cinema,drama,netflix,anime,~감독,~배우,~연기,연기자,박정민,박보영,유퀴즈,무한도전,바람난 가족,홍상수,키에슬로프스키,마이크 밀스,컴온 컴온,박근영,쿵푸팬더
아트/디자인: 디자인,일러스트,~그림,전시,공예,종이접기,design,illust,illustration,drawing,painting,gallery,exhibition,craft,watercolor,acrylic,canvas,artreels,papercrafts,papercraft,diycrafts,도안,인스타툰,웹툰,~카드,~그릇,streetphotography,목업,mockup,croquis
사진: ~사진,카메라,필름카메라,디카,photo,photography,camera,phototricks,photohacks,igphoto,~언스플래쉬,~landscape,~snap,indies_gram
반려동물: 강아지,고양이,반려,댕댕,냥이,~dog,~cat,~pet,puppy,kitten,sheltie,셀티,셔틀랜드,리트리버,retriever,골든리트리버,doggie
건강/웰빙: ~건강,명상,수면,~다이어트,~영양,~멘탈,~병원,wellness,meditation,sleep,diet,nutrition,mental,통증,~허리,~턱,관절,~소화,소화제,약사,생리,지압,항바이러스,뻐근,앉아있,리햅,정형외과,재활,asmr,임신,임산부,임밍아웃,혀에
커플/가족: 커플,남친,여친,남편,~아내,신혼,부부,럽스타그램,육아,아기,~결혼,couple,~baby,~kids,parenting,~family,wedding,~엄마,~아빠,~아들,양육,웨딩,청혼,~여보,~오빠,이상형,로마가족,유튜브_로마가족
유머/밈: 밈,개그,~짤,웃긴,~실화,유머,~mbti,~ㅋㅋㅋ,meme,funny,humor,comedy,재롱,사투리,루팡,경상도,충청도,과장하노,문화차이,좀비
게임: 게임,game,gaming,nintendo,steam,playstation,스팀,슬더슬
심리/마음: 심리,불안,~감정,치유,힐링,healing,~위로,지쳐,자신감,자존감,예민,~상처,~후회,~스스로,~화를,멘탈,트라우마,~실망,~짜증,숨이 찬,~지친,우울,~힘들,~단단,~기분,~편한,울컥,찌질,~응원
글귀/명언: 명언,글귀,문장,~위로,~행복,~인생,조언,철학,쇼펜하우어,니체,quote,~낭만,~다정,명대사,귀인,~존재,~진심,~용기,나다워,~믿음,괜찮아,토닥,찬란,한 발자국,좋아하는 일,생각을 달리,이유 없이,최고의 조합,~시간,꽃은 피고,positivity,strong,just do it,30일,~편지,~공감,~말씀,~당신,~질문,한 줄,~서른,~살아가,짧은 시,~법칙
연애/관계: 연애,이별,~관계,안정형,회피형,relationship,~love,~데이트,~사랑,좋아하는 사람,싸울일,소통법,첫사랑,보고싶,든든한 사람,웃게 만드는 사람,함께 나이,나를 좋아해,남자친구,여자친구,그런 우리
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
심리/마음 > 자존감·불안: 자존감,자신감,불안,예민,멘탈`;
const store=new Map();let items=[],filter=null,sub=null,q='',shown=60,mode='m',isSample=false,RULES=[],SUBS={},NONE='태그 없음';
let ov={},ovt={};try{ov=JSON.parse(localStorage.getItem('ov')||'{}');ovt=JSON.parse(localStorage.getItem('ovt')||'{}')}catch(e){}
let rulesText=DEFAULT_RULES;try{rulesText=localStorage.getItem('rules_v2')||DEFAULT_RULES}catch(e){}
const pad=n=>String(n).padStart(2,'0');
const dstr=ts=>{const d=new Date(ts*1000);return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};

/* ---------- 읽기 ---------- */
const fixEnc=s=>{try{return decodeURIComponent(escape(s))}catch(e){return s}}; // 인스타 JSON은 한글이 latin1로 깨져 있다
function walk(o,title,out){
  if(!o||typeof o!=='object')return;
  if(Array.isArray(o.label_values)&&o.timestamp!=null){
    const lv={};o.label_values.forEach(l=>{if(l.href)lv.href=l.href;lv[fixEnc(l.label||'')]=fixEnc(l.value||'')});
    if(lv.href)out.push({href:lv.href,ts:o.timestamp,title:lv['제목']||lv['Title']||'',text:lv['캡션']||lv['Caption']||'',hintTopic:lv['추천주제']||'',hintTags:(lv['추천태그']||'').split('|').filter(Boolean)});
    return}
  if(o.href&&o.timestamp!=null){out.push({href:o.href,ts:o.timestamp,title:fixEnc(title||''),text:''});return}
  const t=o.title||o.value||title;
  for(const k in o)walk(o[k],typeof o[k]==='object'?t:title,out);
}
const parseJSON=t=>{const out=[];walk(JSON.parse(t),'',out);return out};
function guessTs(text){const m=text.match(/(\d{4})\D{1,3}(\d{1,2})\D{1,3}(\d{1,2})/);return m?Date.UTC(+m[1],+m[2]-1,+m[3])/1000:0}
function parseHTML(txt){ // 미검증: 실제 HTML 내보내기 구조를 확인하지 못했다
  const d=new DOMParser().parseFromString(txt,'text/html'),out=[],seen=new Set();
  d.querySelectorAll('a[href*="instagram.com/p/"],a[href*="instagram.com/reel/"],a[href*="instagram.com/tv/"]').forEach(a=>{
    const href=a.href.split('?')[0];if(seen.has(href))return;seen.add(href);
    let box=a.parentElement;
    for(let i=0;i<3&&box&&box.textContent.trim().length<=a.textContent.trim().length+2;i++)box=box.parentElement;
    const text=(box?box.textContent:'').replace(/\s+/g,' ').trim();
    const h=box&&box.querySelector('h2,h3');
    out.push({href,ts:guessTs(text),title:h?h.textContent.trim():'',text:text.split(href).join('').slice(0,400)});
  });
  return out;
}
async function fromZip(f){
  if(!window.JSZip)throw new Error('ZIP을 읽는 기능을 쓸 수 없습니다. ZIP 안의 saved_posts.json을 풀어서 직접 고르세요.');
  const z=await JSZip.loadAsync(f),list=[],notes=[],read=[];let noData=false,found=0;
  for(const [p,e] of Object.entries(z.files)){
    if(e.dir)continue;
    const lp=p.split('\\').join('/').toLowerCase(),inSaved=lp.startsWith('saved/')||lp.includes('/saved/');
    if(inSaved&&lp.endsWith('no-data.txt'))noData=true;
    if(!inSaved||!(lp.endsWith('.json')||lp.endsWith('.html')))continue;
    found++;read.push(p);const t=await e.async('string');
    try{list.push(...(lp.endsWith('.json')?parseJSON(t):parseHTML(t)))}catch(err){notes.push(p+' 을(를) 읽지 못했습니다.')}
  }
  if(!found)notes.push(noData?'이 내보내기에는 저장됨 데이터가 없습니다. 저장한 계정과 같은 계정인지, 기간이 전체 기간인지, 저장됨을 선택했는지 확인하세요.':'ZIP 안에서 저장됨 파일을 찾지 못했습니다. 요청할 때 저장됨을 골랐는지, 형식이 JSON인지 확인하세요.');
  return {list,notes,read};
}
async function readFile(f){
  const n=f.name.toLowerCase();
  if(n.endsWith('.zip'))return fromZip(f);
  const t=await f.text();
  if(n.endsWith('.json'))return {list:parseJSON(t),notes:[]};
  if(n.endsWith('.html')||n.endsWith('.htm'))return {list:parseHTML(t),notes:[]};
  return {list:[],notes:[f.name+' 은(는) 지원하지 않는 형식입니다. 인스타에서 받은 ZIP이나 saved_posts.json을 고르세요.']};
}

/* ---------- 합치기 ---------- */
const weak=t=>!t||t.startsWith('Photo by')||t.startsWith('Video by')||t.startsWith('May be')||t.startsWith('tagging');
function norm(x){
  x.title=x.title||'';x.text=(x.text||'').replace(/\s+/g,' ').trim();
  const m=x.text.match(/^(?:Photo|Video|Reel)?\s*(?:by|shared by)\s+(.+?)\s+on\s+([A-Z][a-z]+ \d{1,2}, \d{4})/);
  if(m){x.title=x.title||m[1];const t=Date.parse(m[2]);if(t)x.ts=t/1000;x.text=x.text.slice(m[0].length).replace(/^[.\s]+/,'')}
  // 이미지 설명문 속 인용 글("text that says '...'")은 실제 본문이므로 살린다
  const qm=x.text.match(/text that says\s+['"](.+)['"]\.?\s*$/i);
  if(qm)x.text=qm[1];
  return x;
}
function add(list){
  for(const x0 of list){
    const x=norm(x0),k=x.href.split('?')[0].replace(/\/$/,''),o=store.get(k);
    if(!o){x.href=k+'/';store.set(k,x);continue}
    if(!o.ts&&x.ts)o.ts=x.ts;
    if(!o.title&&x.title)o.title=x.title;
    if(!o.hintTopic&&x.hintTopic){o.hintTopic=x.hintTopic;o.hintTags=x.hintTags}
    if(!weak(x.text)&&x.text.length>o.text.length)o.text=x.text;
  }
}
function rebuild(){items=[...store.values()];if(items.length&&items.every(x=>x.ts))items.sort((a,b)=>b.ts-a.ts);items.forEach(x=>{x.date=x.ts?dstr(x.ts):''})}

/* ---------- 분류 ---------- */
function parseRules(){
  RULES=[];SUBS={};
  for(const l of rulesText.split('\n')){
    const i=l.indexOf(':');if(i<0)continue;
    const name=l.slice(0,i).trim(),ks=l.slice(i+1).split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);
    if(!name||!ks.length)continue;
    const j=name.indexOf('>');
    if(j>0){const p=name.slice(0,j).trim(),c=name.slice(j+1).trim();(SUBS[p]=SUBS[p]||[]).push([c,ks])}
    else RULES.push([name,ks]);
  }
}
const reCache=new Map();
function hit(s,k){
  if(/^[a-z0-9_]+$/.test(k)){let r=reCache.get(k);if(!r){r=new RegExp('(^|[^a-z0-9])'+k+'([^a-z0-9]|$)');reCache.set(k,r)}return r.test(s)}
  return s.includes(k);
}
// 해시태그, 계정 태그, 링크, 이미지 설명 문구를 빼고 남는 글자가 6자 미만이면 글이 없는 것으로 본다
const thin=t=>t.replace(/(tagging [^.]*\.|may be (an? )?(image|illustration|graphic|text)[^.]*\.|photo by [^.]*\.|캡션 없음)/gi,' ').replace(/#[^\s#]+/g,' ').replace(/@[a-z0-9._]+/gi,' ').replace(/https?:\/\/\S+/g,' ').replace(/[^\p{L}\p{N}]/gu,'').length<6;
// 주제마다 맞은 키워드 점수를 더해 가장 높은 주제를 고른다(동점이면 위쪽 주제). ~로 시작하는 키워드는 0.5점이다.
// 1점 미만이면 원칙적으로 정하지 않되, 맞은 주제가 그 하나뿐이면 그것을 쓴다(다른 주제와 겹치면 미분류)
function pickTopic(x,s){
  let best=0,hits=0,only=null;
  for(const [c,ks] of RULES){
    let sc=0,why='',weakWhy='';
    for(const k0 of ks){const w=k0[0]==='~',k=w?k0.slice(1):k0;if(!hit(s,k))continue;sc+=w?0.5:1;if(w){if(!weakWhy)weakWhy=k}else if(!why)why=k}
    if(!sc)continue;
    hits++;only=[c,why||weakWhy];
    if(sc>=1&&sc>best){best=sc;x.cat=c;x.why=why||weakWhy}
  }
  if(!best&&hits===1){x.cat=only[0];x.why=only[1]}
}
function classify(x){
  // 다른 계정을 태그한 문구와 이미지 설명 문구는 글의 주제가 아니므로 키워드 맞추기에서 뺀다
  const s=(x.title+' '+x.text.replace(/tagging [^.]*(\.|$)/gi,' ').replace(/may be (an? )?(image|illustration|graphic|text)[^.]*\./gi,' ').replace(/@[a-z0-9._]+/gi,' ')).toLowerCase();x.why='';
  if(ov[x.href])x.cat=ov[x.href];
  else{x.cat='미분류';if(!thin(x.text)||!thin(x.title))pickTopic(x,s)}
  // 규칙으로 주제를 못 정했고 이미지에서 읽은 추천 주제가 있으면 그것을 쓴다
  if(!ov[x.href]&&x.cat==='미분류'&&x.hintTopic&&x.hintTopic!=='미분류'){x.cat=x.hintTopic;x.why='이미지에서 읽은 글'}
  const autos=[];for(const [c,ks] of (SUBS[x.cat]||[])){if(ks.some(k=>hit(s,k.replace(/^~/,''))))autos.push(c)}
  for(const t of (x.hintTags||[])){if(!autos.includes(t)&&(SUBS[x.cat]||[]).some(r=>r[0]===t))autos.push(t)}
  const o=ovt[x.href];x.tags=o?o.filter(t=>(SUBS[x.cat]||[]).some(r=>r[0]===t)):autos; // 수동 태그는 그 주제 안에서만 유효
}

/* ---------- 찾기 탭 ---------- */
const qHit=x=>!q||(x.text+' '+x.title).toLowerCase().includes(q);
function visible(){return items.filter(x=>(!filter||x.cat===filter)&&(!sub||(sub===NONE?!x.tags.length:x.tags.includes(sub)))&&qHit(x))}
function renderFind(){
  if(!items.length){
    $('#topChips').innerHTML='';
    $('#subChips').hidden=true;$('#subChips').innerHTML='';
    $('#lead').textContent='아직 불러온 저장 목록이 없습니다.';
    $('#leadHint').textContent='';
    $('#list').innerHTML='<p class="hint">위에서 내보내기 파일(ZIP 권장)을 선택하면 여기에 내 저장 목록이 보입니다.</p>';
    $('#more').hidden=true;return;
  }
  const cnt={},found=items.filter(qHit);found.forEach(x=>cnt[x.cat]=(cnt[x.cat]||0)+1);
  const names=RULES.map(r=>r[0]).concat('미분류').filter(c=>cnt[c]||c===filter).sort((a,b)=>(a==='미분류')-(b==='미분류')||(cnt[b]||0)-(cnt[a]||0));
  $('#topChips').innerHTML=`<button class="chip" type="button" data-c="" aria-pressed="${!filter}">전체 <b>${found.length.toLocaleString()}</b></button>`
    +names.map(c=>`<button class="chip" type="button" data-c="${esc(c)}" aria-pressed="${filter===c}">${esc(c)} <b>${(cnt[c]||0).toLocaleString()}</b></button>`).join('');
  const subs=filter?(SUBS[filter]||[]):[];
  $('#subChips').hidden=!subs.length;
  if(subs.length){
    const inCat=found.filter(x=>x.cat===filter),sc={};let none=0;
    inCat.forEach(x=>{if(!x.tags.length)none++;x.tags.forEach(t=>sc[t]=(sc[t]||0)+1)});
    const order=subs.map(r=>r[0]).filter(t=>sc[t]||t===sub).sort((a,b)=>(sc[b]||0)-(sc[a]||0));
    $('#subChips').innerHTML=order.map(t=>`<button class="chip sub" type="button" data-s="${esc(t)}" aria-pressed="${sub===t}">${esc(t)} <b>${sc[t]||0}</b></button>`).join('')
      +(none||sub===NONE?`<button class="chip sub" type="button" data-s="${NONE}" aria-pressed="${sub===NONE}">${NONE} <b>${none}</b></button>`:'');
  }
  list();
}
function list(){
  const v=visible();
  $('#lead').textContent=`${v.length.toLocaleString()}개`+(filter?` · ${filter}`:'')+(sub?` › ${sub}`:'')+(q?` · "${q}"`:'');
  $('#leadHint').textContent=v.length?'캡션을 누르면 전체가 보입니다.':'';
  const names=RULES.map(r=>r[0]).concat('미분류');
  $('#list').innerHTML=v.slice(0,shown).map(x=>{
    const subs=(SUBS[x.cat]||[]).map(r=>r[0]),rest=subs.filter(t=>!x.tags.includes(t));
    return `<article class="item" data-h="${esc(x.href)}"><div class="meta"><span>${x.date||'날짜 모름'}</span>${x.title?`<span>@${esc(x.title)}</span>`:''}</div>`
    +`<p class="cap">${esc(x.text)||'<span class="hint">캡션 없음</span>'}</p>`
    +(subs.length?`<div class="tags">${x.tags.map(t=>`<button class="tag on" type="button" data-t="${esc(t)}" title="누르면 뗍니다">${esc(t)} ✕</button>`).join('')}${rest.length?`<button class="tag add" type="button" data-add="1">+ 태그</button><span class="tags" data-pool hidden>${rest.map(t=>`<button class="tag" type="button" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</span>`:''}</div>`:'')
    +`<div class="act"><select data-h="${esc(x.href)}" aria-label="주제">${names.map(c=>`<option${c===x.cat?' selected':''}>${esc(c)}</option>`).join('')}</select><a class="go" href="${esc(x.href)}" target="_blank" rel="noopener">인스타에서 열기</a></div>`
    +(x.why?`<div class="why">"${esc(x.why)}" 때문에 ${esc(x.cat)}으로 분류됨</div>`:'')+`</article>`}).join('')
    +(v.length?'':'<p class="hint">조건에 맞는 항목이 없습니다.</p>');
  $('#more').hidden=v.length<=shown;$('#more').textContent=`더 보기 (${Math.min(60,v.length-shown)}개)`;
}

/* ---------- 취향 탭 ---------- */
let bars=[];
function typeName(top,total){
  if(!top.length)return '아직 저장이 없는';
  const a=top[0][0],b=top[1]?top[1][0]:null,share=top[0][1]/total;
  const map={'운동':'몸부터 챙기는','사업/마케팅':'사업 감각 있는','요리':'집밥 연구하는','맛집':'동네 맛집 지도 그리는','커리어/성장':'커리어 설계하는','음악':'플레이리스트 쌓는','글귀/명언':'문장 수집하는','여행':'다음 여행 꿈꾸는','심리/마음':'마음 돌보는','IT/개발':'만드는 걸 좋아하는','살림/꿀팁':'살림 고수 되어가는','재테크':'돈 공부하는','책':'책 사이에 사는','영화/드라마':'장면 모으는','아트/디자인':'감각 수집하는','수영':'물속이 편한','커플/가족':'함께하는 날 기록하는','카페':'카페 지도 그리는','패션':'옷장 고민하는','사진':'프레임 찾는'};
  const pre=map[a]||(a+' 좋아하는');
  const suf=b?(share>0.3?b+' 겸업러':b+' 수집가'):'수집가';
  return pre+' '+suf;
}
function periodLabel(dated){
  if(!dated.length)return null;
  const a=new Date(dated[0]+'T00:00:00'),b=new Date(dated.at(-1)+'T00:00:00');
  const days=Math.max(1,Math.round((b-a)/86400000)+1);
  const months=(b.getFullYear()-a.getFullYear())*12+(b.getMonth()-a.getMonth())+1;
  const range=`${a.getFullYear()}년 ${a.getMonth()+1}월 ~ ${b.getFullYear()}년 ${b.getMonth()+1}월`;
  if(days<=45)return {short:'최근 한 달',range};
  if(months<12)return {short:`최근 ${months}개월`,range};
  if(a.getFullYear()===b.getFullYear())return {short:`${a.getFullYear()}년 한 해`,range};
  const y=Math.floor(months/12),m=months%12;
  return {short:`전체 기간 (약 ${y}년${m?' '+m+'개월':''})`,range};
}
function cardFacts(top,total,cnt){
  if(!top.length)return {ev:'',sp:''};
  const [c,n]=top[0];
  const sc={};items.forEach(x=>{if(x.cat===c)x.tags.forEach(t=>sc[t]=(sc[t]||0)+1)});
  const st=Object.entries(sc).sort((a,b)=>b[1]-a[1])[0];
  const ev=st?`${c} ${n.toLocaleString()}개 중 ${st[0]}가 ${st[1].toLocaleString()}개`:`${c} ${n.toLocaleString()}개`;
  let sp='';
  const dated=items.filter(x=>x.ts);
  if(dated.length>=20){
    const cut=Date.now()/1000-90*86400,rec=dated.filter(x=>x.ts>=cut);
    if(rec.length>=5){
      const rc={};rec.forEach(x=>rc[x.cat]=(rc[x.cat]||0)+1);
      let bk=null,bd=0;
      for(const k in rc){
        if(k==='미분류'||rc[k]<3)continue;
        const diff=rc[k]/rec.length-(cnt[k]||0)/total;
        if(diff>bd){bd=diff;bk=k}
      }
      if(bk&&bd>0.05)sp=`최근 3개월엔 ${bk} ${Math.round(rc[bk]/rec.length*100)}%로 급증`;
    }
  }
  if(!sp){
    const cands=top.filter(e=>e[0]!==c&&e[1]>=3&&e[1]<n).sort((a,b)=>a[1]-b[1]);
    if(cands.length)sp=`남몰래 모은 ${cands[0][0]} ${cands[0][1].toLocaleString()}개`;
    else if(top.length>1){
      if(top[1][1]>=n)sp=`${c}·${top[1][0]} 공동 1위`;
      else if(n>=top[1][1]*2)sp=`2위 ${top[1][0]}의 ${Math.round(n/top[1][1])}배`;
    }
  }
  return {ev,sp};
}
let cardShare='';
function renderTaste(){
  if(!items.length){
    $('#sum').innerHTML='<div class="big">0<span>개 저장</span></div><p class="hint">내보내기 파일을 선택하면 여기에 요약이 보입니다.</p>';
    $('#cats').innerHTML='<p class="hint">아직 분류할 항목이 없습니다.</p>';
    $('#tcard').innerHTML='<div class="k">저장 목록을 불러오면</div><div class="type">내 유형이 여기에</div><div class="one"></div>';
    chart();return;
  }
  const cnt={};items.forEach(x=>cnt[x.cat]=(cnt[x.cat]||0)+1);
  const ranked=Object.entries(cnt).filter(e=>e[0]!=='미분류').sort((a,b)=>b[1]-a[1]);
  const total=items.length,dated=items.filter(x=>x.date).map(x=>x.date).sort();
  const top=ranked.slice(0,3),per=periodLabel(dated);
  const perShort=per?per.short:'';
  $('#sum').innerHTML=`<div class="big">${total.toLocaleString()}<span>개 저장</span></div>`
    +(dated.length?`<p class="hint">${per.range}${dated.length<total?`, 날짜를 아는 항목 ${dated.length.toLocaleString()}개`:''}</p>`:'<p class="hint">저장 날짜 정보가 없는 파일입니다.</p>')
    +(top.length?`<p>${perShort?esc(perShort)+'에 ':''}가장 많이 모은 주제는 <b>${esc(top[0][0])}</b> ${top[0][1].toLocaleString()}개(${Math.round(top[0][1]/total*100)}%)${top.length>1?'이고, 이어서 '+top.slice(1).map(c=>'<b>'+esc(c[0])+'</b>').join(', ')+' 순입니다.':'입니다.'}</p>`:'');
  const all=ranked.concat(cnt['미분류']?[['미분류',cnt['미분류']]]:[]),mx=Math.max(1,...all.map(e=>e[1]));
  $('#cats').innerHTML=all.map(([c,n])=>`<button class="cat" type="button" data-c="${esc(c)}"><span class="nm">${esc(c)}</span><span class="b"><i style="width:${n/mx*100}%"></i></span><span class="n">${n.toLocaleString()}</span></button>`).join('');
  const nm=typeName(top,total),fc=cardFacts(top,total,cnt);
  cardShare=!top.length?'저장 목록이 비어 있습니다. - 저장됨 취향 지도'
    :`${perShort?perShort+' ':''}저장 ${total.toLocaleString()}개로 본 나는 "${nm}". 1위 ${top[0][0]} ${Math.round(top[0][1]/total*100)}%${fc.ev?', '+fc.ev:''}${fc.sp?', '+fc.sp:''} - 저장됨 취향 지도`;
  $('#tcard').innerHTML=`<div class="k">${perShort?esc(perShort)+' ':''}저장 ${total.toLocaleString()}개로 본 나는</div><div class="type">${esc(nm)}</div><div class="top">${top.map(([c,n])=>`<div><span>${esc(c)}</span><span>${Math.round(n/total*100)}%</span></div>`).join('')}</div><div class="one">${esc(fc.ev)}</div><div class="one">${esc(fc.sp)}</div>`;
  chart();
}
function chart(){
  const src=items.filter(x=>x.date),by={};src.forEach(x=>{const k=mode==='m'?x.date.slice(0,7):x.date;by[k]=(by[k]||0)+1});
  const keys=Object.keys(by).sort();bars=[];
  $('#mM').setAttribute('aria-pressed',mode==='m');$('#mD').setAttribute('aria-pressed',mode==='d');
  if(!keys.length){$('#chart').innerHTML='';$('#r0').textContent='';$('#r1').textContent='';$('#chartInfo').textContent=!items.length?'내보내기 파일을 선택하면 여기에 그래프가 그려집니다.':'날짜를 아는 항목이 없어서 그래프를 그릴 수 없습니다.';return}
  if(mode==='m'){let y=+keys[0].slice(0,4),m=+keys[0].slice(5);const ey=+keys.at(-1).slice(0,4),em=+keys.at(-1).slice(5);while(y<ey||(y===ey&&m<=em)){const k=y+'-'+pad(m);bars.push([k,by[k]||0]);if(++m>12){m=1;y++}}}
  else{const end=new Date(keys.at(-1)+'T00:00:00');for(let i=179;i>=0;i--){const d=new Date(end);d.setDate(d.getDate()-i);const k=dstr(d.getTime()/1000);bars.push([k,by[k]||0])}}
  const mx=Math.max(1,...bars.map(b=>b[1]));
  $('#chart').innerHTML=bars.map((b,i)=>`<i data-i="${i}" style="height:${Math.max(b[1]?4:0,b[1]/mx*100)}%"></i>`).join('');
  $('#r0').textContent=bars[0][0];$('#r1').textContent=bars.at(-1)[0];
  const nd=items.length-src.length;
  $('#chartInfo').textContent='막대를 눌러 보세요.'+(nd?` 날짜를 모르는 ${nd.toLocaleString()}개는 제외했습니다.`:'');
}
function render(){parseRules();items.forEach(classify);$('#banner').hidden=items.length>0;renderFind();renderTaste();fitType()}
function fitType(){const el=document.querySelector('#tcard .type');if(!el)return;let s=30;el.style.fontSize=s+'px';while(s>15&&el.scrollWidth>el.clientWidth){s--;el.style.fontSize=s+'px'}}

/* ---------- 카드 이미지 ---------- */
async function saveFile(filename,data,type){
  try{const dl=window.claude&&window.claude.use?await window.claude.use('downloads'):null;if(dl){await dl.save({filename,data});return}}
  catch(e){if(e&&e.code==='declined')return}
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type}));a.download=filename;a.click();
}
function cardImage(){
  const cs=getComputedStyle(document.documentElement),c=document.createElement('canvas');c.width=1080;c.height=1080;const g=c.getContext('2d');
  const col=n=>cs.getPropertyValue(n).trim();
  g.fillStyle=col('--surface');g.fillRect(0,0,1080,1080);
  const cnt={};items.forEach(x=>cnt[x.cat]=(cnt[x.cat]||0)+1);
  const top=Object.entries(cnt).filter(e=>e[0]!=='미분류').sort((a,b)=>b[1]-a[1]).slice(0,3),total=items.length;
  const fc=cardFacts(top,total,cnt);
  g.fillStyle=col('--mut');g.font='400 36px sans-serif';g.fillText(`저장 ${total.toLocaleString()}개로 본 나는`,80,150);
  g.fillStyle=col('--ink');g.font='400 96px sans-serif';
  const words=typeName(top,total).split(' ');let line='',y=300;
  for(const w of words){const t=line?line+' '+w:w;if(g.measureText(t).width>920&&line){g.fillText(line,80,y);y+=110;line=w}else line=t}
  g.fillText(line,80,y);
  g.font='400 44px sans-serif';let yy=660;
  for(const [n,v] of top){g.fillStyle=col('--ink');g.fillText(n,80,yy);g.textAlign='right';g.fillText(Math.round(v/total*100)+'%',1000,yy);g.textAlign='left';
    g.fillStyle=col('--track');g.fillRect(80,yy+18,920,14);g.fillStyle=col('--accent');g.fillRect(80,yy+18,920*v/total,14);yy+=100}
  g.fillStyle=col('--mut');g.font='400 32px sans-serif';
  if(fc.ev)g.fillText(fc.ev.slice(0,40),80,930);
  if(fc.sp)g.fillText(fc.sp.slice(0,40),80,968);
  g.font='400 30px sans-serif';g.fillText('저장됨 취향 지도',80,1010);
  return new Promise(r=>c.toBlob(b=>r(b),'image/png'));
}

/* ---------- 불러오기 ---------- */
function loadEmpty(){store.clear();isSample=false;rebuild()}
async function load(files){
  const msg=$('#msg');msg.textContent='읽는 중입니다...';
  try{
    const prev=new Map(store);store.clear();let got=0;const notes=[],read=[];
    for(const f of files){const r=await readFile(f);got+=r.list.length;notes.push(...r.notes);read.push(...(r.read||[f.name]));add(r.list)}
    if(!got){store.clear();for(const [k,v] of prev)store.set(k,v);render();msg.textContent=(notes.join(' ')||'저장된 게시물을 찾지 못했습니다.');return}
    isSample=false;filter=null;sub=null;shown=60;rebuild();render();
    msg.textContent=`${store.size.toLocaleString()}개를 불러왔습니다. 읽은 파일: ${read.slice(0,5).join(', ')}${read.length>5?' 외 '+(read.length-5)+'개':''}. ${notes.join(' ')}`;
  }catch(e){msg.textContent='읽지 못했습니다. '+(e&&e.message||e)}
}
function exportCSV(){
  const qt=s=>'"'+String(s).replace(/"/g,'""')+'"';
  const rows=items.map(x=>[x.date,x.title,x.cat,x.tags.join(' / '),x.text.slice(0,300),x.href].map(qt).join(','));
  saveFile('saved_posts_taste.csv','\ufeff날짜,계정,주제,세부,캡션,링크\n'+rows.join('\n'),'text/csv');
}

/* ---------- 이벤트 ---------- */
function showTab(t){const f=t==='find';$('#tabFind').setAttribute('aria-selected',f);$('#tabTaste').setAttribute('aria-selected',!f);$('#paneFind').hidden=!f;$('#paneTaste').hidden=f;if(!f)requestAnimationFrame(fitType);try{localStorage.setItem('tab',t)}catch(e){}}
$('#tabFind').onclick=()=>showTab('find');$('#tabTaste').onclick=()=>showTab('taste');
$('#pick').onclick=()=>$('#file').click();
$('#file').onchange=e=>{const fs=[...e.target.files];e.target.value='';if(fs.length)load(fs)};
const drop=$('#drop');
drop.ondragover=e=>{e.preventDefault();drop.classList.add('over')};drop.ondragleave=()=>drop.classList.remove('over');
drop.ondrop=e=>{e.preventDefault();drop.classList.remove('over');if(e.dataTransfer.files.length)load([...e.dataTransfer.files])};
$('#topChips').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const c=b.dataset.c||null;filter=c===filter?null:c;sub=null;shown=60;renderFind()};
$('#subChips').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;sub=sub===b.dataset.s?null:b.dataset.s;shown=60;renderFind()};
$('#cats').onclick=e=>{const b=e.target.closest('.cat');if(!b)return;filter=b.dataset.c;sub=null;shown=60;renderFind();showTab('find');window.scrollTo({top:0})};
$('#q').oninput=e=>{q=e.target.value.trim().toLowerCase();shown=60;renderFind();$('#lead').scrollIntoView({block:'nearest'})};
$('#mM').onclick=()=>{mode='m';chart()};$('#mD').onclick=()=>{mode='d';chart()};
$('#chart').onclick=e=>{if(!bars.length)return;const r=e.currentTarget.getBoundingClientRect();const i=Math.min(bars.length-1,Math.max(0,Math.floor((e.clientX-r.left)/r.width*bars.length)));e.currentTarget.querySelectorAll('i').forEach((el,j)=>el.classList.toggle('on',j===i));$('#chartInfo').textContent=`${bars[i][0]}: ${bars[i][1]}개`};
$('#more').onclick=()=>{shown+=60;list()};
$('#list').onclick=e=>{
  const cap=e.target.closest('.cap');if(cap){cap.classList.toggle('open');return}
  const art=e.target.closest('.item');if(!art)return;const h=art.dataset.h;
  if(e.target.closest('[data-add]')){const p=art.querySelector('[data-pool]');p.hidden=!p.hidden;return}
  const tg=e.target.closest('.tag[data-t]');if(!tg)return;
  const x=store.get(h.replace(/\/$/,''));if(!x)return;
  const t=tg.dataset.t,cur=new Set(x.tags);cur.has(t)?cur.delete(t):cur.add(t);
  ovt[h]=[...cur];save('ovt',ovt);render();
};
$('#list').onchange=e=>{if(e.target.tagName!=='SELECT')return;ov[e.target.dataset.h]=e.target.value;delete ovt[e.target.dataset.h];save('ov',ov);save('ovt',ovt);render()};
$('#csv').onclick=exportCSV;
$('#saveCard').onclick=async()=>{const b=await cardImage();saveFile('my-taste-card.png',b,'image/png')};
function buildAIBrief(){
  if(!items.length)return '저장 목록이 비어 있습니다. - 저장됨 취향 지도';
  const cnt={};items.forEach(x=>cnt[x.cat]=(cnt[x.cat]||0)+1);
  const ranked=Object.entries(cnt).sort((a,b)=>b[1]-a[1]);
  const dated=items.filter(x=>x.date).map(x=>x.date).sort(),per=periodLabel(dated);
  const L=['[저장됨 취향 지도 정리본]'];
  L.push(`- 기간: ${dated.length?per.range+' (날짜 아는 항목 '+dated.length.toLocaleString()+'개)':'날짜 정보 없음'} / 전체 ${items.length.toLocaleString()}개`);
  L.push('- 주제별 개수: '+ranked.map(([c,n])=>`${c} ${n.toLocaleString()}`).join(', '));
  for(const [c] of ranked){
    if(c==='미분류')continue;
    const sc={};items.forEach(x=>{if(x.cat===c)x.tags.forEach(t=>sc[t]=(sc[t]||0)+1)});
    const sts=Object.entries(sc).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>`${e[0]} ${e[1]}`).join(', ');
    L.push(`[${c}]${sts?' 세부: '+sts:''}`);
    items.filter(x=>x.cat===c).slice(0,2).forEach(x=>{const t=x.text.slice(0,150).replace(/\s+/g,' ').trim();if(t)L.push('  - '+t)});
  }
  const un=[];items.forEach(x=>{if(x.cat==='미분류'&&un.length<5){const t=x.text.slice(0,150).replace(/\s+/g,' ').trim();if(t)un.push(t)}});
  if(un.length){L.push('[미분류 예시]');un.forEach(t=>L.push('  - '+t))}
  L.push('위 목록을 바탕으로 내 취향을 분석해줘.');
  return L.join('\n');
}
async function doCopy(t,b){
  try{await navigator.clipboard.writeText(t)}
  catch(e){const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(_){} ta.remove()}
  const o=b.textContent;b.textContent='복사됨';setTimeout(()=>b.textContent=o,1500);
}
$('#copyCard').onclick=()=>doCopy(cardShare,$('#copyCard'));
$('#aiCopy').onclick=()=>doCopy(buildAIBrief(),$('#aiCopy'));

const pre=document.getElementById('preload');
if(pre){try{add(parseJSON(pre.textContent));isSample=false;rebuild();$('#msg').textContent=store.size.toLocaleString()+'개가 미리 담겨 있습니다. 다른 파일을 고르면 그 파일로 바뀝니다.'}catch(e){loadEmpty()}}
else loadEmpty();
if(/Instagram|FBAN|FBAV/.test(navigator.userAgent))$('#inapp').hidden=false;
render();
let tab='find';try{tab=localStorage.getItem('tab')||'find'}catch(e){}showTab(tab);
})();
