// 공개 임베드 페이지(로그인 불필요)에서 작성자·캡션 전문을 가져와 saved_posts 에 채움. 이어하기 지원.
const fs=require("fs");
const SRC=process.argv[2],CACHE="crawl_cache.json",OUT="saved_posts_enriched.json";
if(!SRC){console.log("사용법: node tools/crawl.js <saved_posts.json>");process.exit(1)}
const LIMIT=+(process.env.LIMIT||1e9);
const get=(x,l)=>(x.label_values.find(v=>v.label===l)||{}).value||"";
const weak=t=>!t||t.startsWith("Photo by")||t.startsWith("Video by")||t.startsWith("May be")||t.startsWith("tagging");
const ent=s=>s.replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#([0-9]+);/g,(_,n)=>String.fromCodePoint(+n))
  .replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
function parse(h){
  const a=h.indexOf('class="CaptionUsername"');if(a<0)return null;
  const gt=h.indexOf(">",a),end=h.indexOf("</a>",gt),user=ent(h.slice(gt+1,end));
  const s=end+4;let e=h.indexOf('<div class="CaptionComments"',s);if(e<0)e=h.indexOf("</div>",s);
  const cap=ent(h.slice(s,e).replace(/<br ?\/?>/g,"\n").replace(/<[^>]*>/g,"")).replace(/\n{3,}/g,"\n\n").trim();
  return {user,caption:cap};
}
(async()=>{
  const data=JSON.parse(fs.readFileSync(SRC,"utf8"));
  let cache={};try{cache=JSON.parse(fs.readFileSync(CACHE,"utf8"))}catch{}
  const todo=data.filter(x=>(x.timestamp===0||weak(get(x,"캡션")))&&!cache[get(x,"URL")]);
  console.log("대상",todo.length,"/",data.length);
  let n=0,bad=0;
  for(const x of todo){
    if(n>=LIMIT)break;n++;
    const url=get(x,"URL");
    try{
      const r=await fetch(url+"embed/captioned/",{headers:{"user-agent":"Mozilla/5.0"}});
      if(r.status===429){console.log("429 — 중단. 잠시 후 다시 실행하면 이어서 진행");break}
      const p=r.ok?parse(await r.text()):null;
      cache[url]=p||{fail:r.status};bad=p?0:bad+1;
      if(n<=8||n%50===0)console.log(n,url.slice(26),p?p.user+" | "+p.caption.replace(/\s+/g," ").slice(0,40):"실패 "+r.status);
    }catch(err){console.log("오류",err.message);bad++}
    if(bad>=15){console.log("연속 실패 15회 — 중단");break}
    if(n%20===0)fs.writeFileSync(CACHE,JSON.stringify(cache));
    await new Promise(s=>setTimeout(s,1500+Math.random()*1500));
  }
  fs.writeFileSync(CACHE,JSON.stringify(cache));
  let ok=0;
  for(const x of data){const p=cache[get(x,"URL")];if(!p||p.fail)continue;ok++;
    const am=get(x,"캡션").match(/^(?:Photo|Video|Reel)?\s*(?:by|shared by)\s+(.+?)\s+on\s+([A-Z][a-z]+ [0-9]{1,2}, [0-9]{4})/); // 캡션을 덮어쓰기 전에 설명 문구의 게시일을 챙긴다
    if(am){const t=Date.parse(am[2]);if(t)x.timestamp=t/1000}
    for(const l of x.label_values){if(l.label==="제목")l.value=p.user;if(l.label==="캡션"&&p.caption)l.value=p.caption}}
  fs.writeFileSync(OUT,JSON.stringify(data));
  console.log("완료: 채워진 항목",ok,"실패",Object.values(cache).filter(v=>v.fail).length);
})();
