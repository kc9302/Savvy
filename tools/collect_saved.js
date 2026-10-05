// instagram.com/<내아이디>/saved/all-posts/ 페이지를 연 상태에서 F12 → Console 에 붙여넣고 Enter.
// 끝까지 자동 스크롤하며 게시물 링크·썸네일 설명(alt)을 모아 saved_posts.json 으로 내려받음.
(async()=>{
  if(!location.pathname.includes('/saved')){alert('저장됨 페이지(…/saved/all-posts/)에서 실행하세요');return}
  const seen=new Map();let idle=0;
  const grab=()=>{for(const a of document.querySelectorAll('a[href*="/p/"],a[href*="/reel/"]')){
    const href=a.href.split('?')[0];if(seen.has(href))continue;
    const img=a.querySelector('img');seen.set(href,img?.alt||'');}};
  while(idle<6){ // 6번 연속 새 항목 없으면 끝으로 판단. ponytail: 느린 회선이면 숫자 키우기
    const before=seen.size;grab();
    window.scrollTo(0,document.body.scrollHeight);
    await new Promise(s=>setTimeout(s,1500));
    grab();idle=seen.size>before?0:idle+1;console.log('수집',seen.size);
  }
  const out=[...seen].map(([href,alt])=>({timestamp:0,media:[],label_values:[ // 저장 날짜는 웹에서 제공 안 됨(0). 대시보드가 alt의 'Photo by … on 날짜'에서 게시일을 뽑음
    {label:'URL',value:href,href},{label:'제목',value:''},{label:'캡션',value:alt}]}));
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(out)],{type:'application/json'}));
  a.download='saved_posts.json';a.click();alert('완료: '+out.length+'개');
})();
