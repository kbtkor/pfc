(function(){
function $(i){return document.getElementById(i)}
var IC={
home:'<path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>',
calc:'<path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"/><path d="M8 14l0 .01"/><path d="M12 14l0 .01"/><path d="M16 14l0 .01"/><path d="M8 17l0 .01"/><path d="M12 17l0 .01"/><path d="M16 17l0 .01"/>',
clip:'<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/><path d="M9 12l.01 0"/><path d="M13 12l2 0"/><path d="M9 16l.01 0"/><path d="M13 16l2 0"/>',
cal:'<path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M15 19l2 2l4 -4"/>',
chart:'<path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M4 20l14 0"/>',
target:'<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>',
edit:'<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/>',
scan:'<path d="M4 7v-1a2 2 0 0 1 2 -2h2"/><path d="M4 17v1a2 2 0 0 0 2 2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v1"/><path d="M16 20h2a2 2 0 0 0 2 -2v-1"/><path d="M5 12l14 0"/>',
cloud:'<path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"/><path d="M9 15l3 -3l3 3"/><path d="M12 12l0 9"/>',
list:'<path d="M9 6l11 0"/><path d="M9 12l11 0"/><path d="M9 18l11 0"/><path d="M5 6l0 .01"/><path d="M5 12l0 .01"/><path d="M5 18l0 .01"/>',
tag:'<path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"/>',
heartbeat:'<path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572"/><path d="M3 13h2l2 3l2 -6l1 3h3"/>'
};
function svg(n){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>'}
[].forEach.call(document.querySelectorAll("[data-ic]"),function(e){e.innerHTML=svg(e.dataset.ic)});
var KEY="claude_pfc_v1",CATS=["朝食","昼食","夕食","補食"],K4=["p","f","c","k"],TABS=["today","calc","my","hist","data"],curTab="today";
try{screen.orientation.lock("portrait").catch(function(){})}catch(e){}
function fix(d){
  d.goal=d.goal||{};d.goalHist=d.goalHist||{};d.entries=d.entries||{};d.my=d.my||[];d.sent=d.sent||{};
  Object.keys(d.entries).forEach(function(k){(d.entries[k]||[]).forEach(function(e){if(e.cat==="間食")e.cat="補食"})});
  return d;
}
function load(){try{var s=localStorage.getItem(KEY);if(s){var d=JSON.parse(s);if(d&&typeof d==="object")return fix(d)}}catch(e){}return fix({})}
var D=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(D))}catch(x){$("warn").hidden=false}}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
function half(s){return String(s).replace(/[０-９]/g,function(c){return String.fromCharCode(c.charCodeAt(0)-65248)}).replace(/[．]/g,".").replace(/[，]/g,",")}
function num(s){s=half(s).replace(/,/g,"").trim();if(s==="")return null;var n=Number(s);return isFinite(n)&&n>=0?n:NaN}
function fmt(n){return String(Math.round(n*10)/10)}
function f1(n){return(Math.round(n*10)/10).toFixed(1)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function p2(n){return n<10?"0"+n:""+n}
function ymd(d){return d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate())}
function shift(s,n){var a=s.split("-");return ymd(new Date(+a[0],+a[1]-1,+a[2]+n))}
function lab(s){var a=s.split("-"),d=new Date(+a[0],+a[1]-1,+a[2]);return(+a[1])+"月"+(+a[2])+"日("+"日月火水木金土"[d.getDay()]+")"}
function say(id,t,e){var s=$(id);s.textContent=t;s.className=e?"bad":"rem"}
var HC={};
function nthMon(y,m,n){var wd=new Date(y,m-1,1).getDay();return 1+((8-wd)%7)+7*(n-1)}
function holidays(y){
  if(HC[y])return HC[y];
  var H={},b=[],dy=y-1980,ex=Math.floor(dy/4);
  function a(m,d){b.push(new Date(y,m-1,d))}
  a(1,1);a(1,nthMon(y,1,2));a(2,11);
  if(y>=2020)a(2,23);else if(y>=1989&&y!==2019)a(12,23);
  a(3,Math.floor(20.8431+0.242194*dy-ex));
  a(4,29);a(5,3);a(5,4);a(5,5);
  if(y===2020){a(7,23);a(7,24);a(8,10)}
  else if(y===2021){a(7,22);a(7,23);a(8,8)}
  else{a(7,nthMon(y,7,3));a(8,11);a(10,nthMon(y,10,2))}
  a(9,nthMon(y,9,3));
  a(9,Math.floor(23.2488+0.242194*dy-ex));
  a(11,3);a(11,23);
  if(y===2019){a(4,30);a(5,1);a(5,2);a(10,22)}
  b.forEach(function(d){H[ymd(d)]=true});
  b.sort(function(p,q){return p-q});
  b.forEach(function(d){
    if(d.getDay()===0){var n=new Date(d.getFullYear(),d.getMonth(),d.getDate()+1);while(H[ymd(n)])n.setDate(n.getDate()+1);H[ymd(n)]=true}
  });
  for(var i=1;i<364;i++){
    var t=new Date(y,0,1+i),k=ymd(t);
    if(!H[k]&&t.getDay()!==0&&H[ymd(new Date(y,0,i))]&&H[ymd(new Date(y,0,2+i))])H[k]=true;
  }
  HC[y]=H;return H;
}
function isHol(d){return !!holidays(d.getFullYear())[ymd(d)]}
var cur=ymd(new Date());
var vy=+cur.slice(0,4),vm=+cur.slice(5,7);
var sortE=false,sortM=false,editE=null,editM=null,cat="";
function goalFor(d){var best=null,k;for(k in D.goalHist){if(k<=d&&(best===null||k>best))best=k}return best===null?D.goal:D.goalHist[best]}
function tot(l){var t={p:0,f:0,c:0,k:0};l.forEach(function(e){for(var k in t)t[k]+=e[k]});return t}
function uid(){return Date.now()+"_"+Math.floor(Math.random()*1e4)}
function add(date,e){e.id=uid();(D.entries[date]=D.entries[date]||[]).push(e);save()}
function mv(arr,id,dir){var i=-1,j,t;arr.forEach(function(x,n){if(String(x.id)===id)i=n});j=i+dir;if(i<0||j<0||j>=arr.length)return false;t=arr[i];arr[i]=arr[j];arr[j]=t;return true}
function solve(v,m){
  if(m==="k")return v.p*4+v.f*9+v.c*4;
  if(m==="p")return(v.k-v.f*9-v.c*4)/4;
  if(m==="f")return(v.k-v.p*4-v.c*4)/9;
  return(v.k-v.p*4-v.f*9)/4;
}
function read4(get){
  var v={},em=[],bad=false;
  K4.forEach(function(k){var n=num(get(k));if(n===null)em.push(k);else if(isNaN(n))bad=true;v[k]=n});
  return{v:v,em:em,bad:bad};
}
function form(e,isRec){
  var sel="";
  if(isRec){
    sel='<select class="fi" data-k="cat" style="margin-top:8px"><option value="">未分類</option>'
    +CATS.map(function(c){return'<option value="'+c+'"'+(e.cat===c?" selected":"")+'>'+c+'</option>'}).join("")+'</select>';
  }
  return'<div class="item edit"><div class="n"><input class="fi" data-k="name" placeholder="名前" value="'+esc(e.name||"")+'">'+sel
  +'<div class="eg"><label>たんぱく質(g)<input class="fi" data-k="p" inputmode="decimal" value="'+fmt(e.p)+'"></label>'
  +'<label>脂質(g)<input class="fi" data-k="f" inputmode="decimal" value="'+fmt(e.f)+'"></label>'
  +'<label>炭水化物(g)<input class="fi" data-k="c" inputmode="decimal" value="'+fmt(e.c)+'"></label>'
  +'<label>カロリー(kcal)<input class="fi" data-k="k" inputmode="decimal" value="'+fmt(e.k)+'"></label></div>'
  +'<div class="ea"><button data-save="'+e.id+'">保存</button>'+(isRec?'<button data-add="'+e.id+'">追加</button>':'')+'<button data-cancel="1">キャンセル</button></div>'
  +'<div class="bad emsg"></div></div></div>';
}
function fv(box,k){return box.querySelector('[data-k="'+k+'"]')}
function calcForm(box,from){
  var a=box.dataset.auto;
  if(a){
    var ai=fv(box,a);
    if(from!==a)ai.value="";
    ai.classList.remove("auto");
    delete box.dataset.auto;
  }
  var msg=box.querySelector(".emsg"),r4=read4(function(k){return fv(box,k).value});
  msg.textContent="";
  if(r4.bad||r4.em.length!==1)return;
  var r=solve(r4.v,r4.em[0]);
  if(r<0){msg.textContent="計算結果がマイナスになります。入力値を確認してください。";return}
  var inp=fv(box,r4.em[0]);inp.value=fmt(r);inp.classList.add("auto");box.dataset.auto=r4.em[0];
}
function fchange(e){
  var t=e.target,box=t.closest?t.closest(".edit"):null;
  if(box&&t.dataset.k&&t.dataset.k!=="name"&&t.dataset.k!=="cat")calcForm(box,t.dataset.k);
}
function readForm(box){
  var o={name:fv(box,"name").value.trim()},msg=box.querySelector(".emsg"),ce=fv(box,"cat");
  if(ce)o.cat=ce.value;
  var r4=read4(function(k){return fv(box,k).value}),v=r4.v;
  if(r4.bad){msg.textContent="数字(0以上)で入力してください。";return null}
  if(r4.em.length>=2){msg.textContent="P・F・C・カロリーのうち、3つ以上を入力してください。";return null}
  if(r4.em.length===1){
    var r=solve(v,r4.em[0]);
    if(r<0){msg.textContent="計算結果がマイナスになります。入力値を確認してください。";return null}
    v[r4.em[0]]=Math.round(r*10)/10;
  }else{
    var t=v.p*4+v.f*9+v.c*4,d=v.k-t;
    if(Math.abs(d)>=1){msg.textContent="P・F・Cから計算すると "+fmt(t)+" kcal です(入力との差 "+(d>0?"+":"")+fmt(d)+" kcal)。入力値を確認してください。";return null}
  }
  o.p=v.p;o.f=v.f;o.c=v.c;o.k=v.k;
  return o;
}

var el={},auto=null;
K4.forEach(function(i){el[i]=$(i)});
var msg=$("msg"),bar=$("bar"),ratio=$("ratio"),scan=$("scan"),scanmsg=$("scanmsg");
function setMsg(t,e){msg.textContent=t;msg.className=e?"err":""}
function draw(p,f,c){
  var kp=p*4,kf=f*9,kc=c*4,t=kp+kf+kc;
  if(!(t>0)){bar.innerHTML="";ratio.textContent="";return}
  var a=kp/t*100,b=kf/t*100,d=kc/t*100;
  bar.innerHTML='<i style="width:'+a+'%;background:var(--p)"></i><i style="width:'+b+'%;background:var(--f)"></i><i style="width:'+d+'%;background:var(--c)"></i>';
  ratio.textContent="カロリー比 P "+fmt(a)+"% / F "+fmt(b)+"% / C "+fmt(d)+"%";
}
function calc(from){
  if(auto){el[auto].classList.remove("auto");if(from!==auto)el[auto].value="";auto=null}
  var r4=read4(function(k){return el[k].value}),v=r4.v,empty=r4.em;
  bar.innerHTML="";ratio.textContent="";
  if(r4.bad){setMsg("数字(0以上)で入力してください。",true);return}
  if(empty.length>=2){setMsg(empty.length===4?"":"あと"+(empty.length-1)+"項目入力すると計算します。",false);return}
  if(empty.length===0){
    var t=v.p*4+v.f*9+v.c*4,d=v.k-t;
    setMsg(Math.abs(d)<0.5?"4項目は一致しています。":"P・F・Cから計算すると "+fmt(t)+" kcal です(入力との差 "+(d>0?"+":"")+fmt(d)+" kcal)。",false);
    draw(v.p,v.f,v.c);return}
  var m=empty[0],r=solve(v,m),name={p:"たんぱく質",f:"脂質",c:"炭水化物",k:"カロリー"}[m];
  if(r<0){setMsg("計算結果がマイナスになります。入力値がカロリーと合っているか確認してください。",true);return}
  el[m].value=fmt(r);el[m].classList.add("auto");auto=m;
  setMsg(name+"は "+fmt(r)+(m==="k"?" kcal":" g")+" です。",false);
  draw(m==="p"?r:v.p,m==="f"?r:v.f,m==="c"?r:v.c);
}
var NUM="([0-9]+(?:\\.[0-9]+)?)";
var KEYS={
  p:new RegExp("(?:たんぱく質|タンパク質|蛋白質|たん白質)[^0-9\\n]{0,8}?"+NUM),
  f:new RegExp("脂質[^0-9\\n]{0,8}?"+NUM),
  c:new RegExp("炭水化物[^0-9\\n]{0,8}?"+NUM)
};
function parse(){
  var t=half(scan.value).replace(/\s+/g," ").replace(/\s?\.\s?/g,".");
  if(t.replace(/\s/g,"")===""){scanmsg.textContent="";scanmsg.className="";return}
  var got={},n=0,m;
  var km=t.match(/([0-9]+(?:\.[0-9]+)?)\s*(?:kcal|Kcal|KCAL|キロカロリー)/);
  if(km){got.k=Number(km[1]);n++}
  else{m=t.match(new RegExp("(?:エネルギー|熱量|カロリー)[^0-9\\n]{0,8}?"+NUM));if(m){got.k=Number(m[1]);n++}}
  ["p","f","c"].forEach(function(k){var r=t.match(KEYS[k]);if(r){got[k]=Number(r[1]);n++}});
  if(n===0){scanmsg.textContent="数値を読み取れませんでした。たんぱく質・脂質・炭水化物などの文字が入っているか確認してください。";scanmsg.className="err";return}
  K4.forEach(function(i){el[i].value="";el[i].classList.remove("auto")});auto=null;
  K4.forEach(function(i){if(got[i]!==undefined)el[i].value=fmt(got[i])});
  var names={k:"カロリー",p:"P",f:"F",c:"C"},found=[];
  ["k","p","f","c"].forEach(function(i){if(got[i]!==undefined)found.push(names[i])});
  scanmsg.textContent="読み取れた項目: "+found.join("・")+"。数値がラベルと合っているか確認してください(1食分か100gあたりかにも注意)。";scanmsg.className="";
  calc(null);
}
scan.addEventListener("input",parse);
$("scanbtn").onclick=function(){
  var b=$("scanbox");b.hidden=!b.hidden;
  this.setAttribute("aria-expanded",b.hidden?"false":"true");
  if(!b.hidden)scan.focus();
};
K4.forEach(function(i){el[i].addEventListener("input",function(){calc(i)})});
function clr(){K4.forEach(function(i){el[i].value="";el[i].classList.remove("auto")});auto=null;scan.value="";scanmsg.textContent="";scanmsg.className="";setMsg("",false);bar.innerHTML="";ratio.textContent=""}
function csync(){
  [].forEach.call(document.querySelectorAll(".crow button"),function(b){
    b.setAttribute("aria-pressed",b.dataset.c===cat?"true":"false");
  });
}
[].forEach.call(document.querySelectorAll(".crow"),function(row){
  row.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;cat=(cat===b.dataset.c)?"":b.dataset.c;csync()});
});
function qs(inp,row){
  var m=num($(inp).value);
  [].forEach.call(document.querySelectorAll("#"+row+" button"),function(b){
    b.setAttribute("aria-pressed",(m!==null&&!isNaN(m)&&Number(b.dataset.q)===m)?"true":"false");
  });
}
function qsync(){qs("mult","mq");qs("cmult","cmq")}
[["mq","mult"],["cmq","cmult"]].forEach(function(p){
  $(p[0]).addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;$(p[1]).value=b.dataset.q;qsync()});
  $(p[1]).addEventListener("input",qsync);
});
function sm(t,e){say("savemsg",t,e)}
$("clear").onclick=function(){clr();$("ename").value="";cat="";csync();$("cmult").value="1";qsync();sm("")};
function vals(){var r4=read4(function(k){return el[k].value});return(r4.bad||r4.em.length)?null:r4.v}
function recTo(date){
  var v=vals();if(!v){sm("P・F・C・カロリーの4項目がそろうと記録できます。",1);return false}
  var m=num($("cmult").value);if(!m||isNaN(m))m=1;
  var nm0=$("ename").value.trim();
  if(m!==1){
    K4.forEach(function(k){v[k]=Math.round(v[k]*m*10)/10});
    nm0=(nm0?nm0+" ":"")+"×"+m;
  }
  v.name=nm0;if(cat)v.cat=cat;add(date,v);$("ename").value="";clr();$("cmult").value="1";qsync();sm(lab(date)+"に記録しました。「ホーム」で確認できます。");
  return true;
}
$("addlog").onclick=function(){recTo(cur)};
$("addother").onclick=function(){
  var b=$("odbox");b.hidden=!b.hidden;
  if(!b.hidden&&!$("odate").value)$("odate").value=cur;
};
$("odgo").onclick=function(){
  var d=$("odate").value;
  if(!d){sm("日付を選択してください。",1);return}
  if(recTo(d))$("odbox").hidden=true;
};
$("addmy").onclick=function(){
  var v=vals(),nm=$("ename").value.trim();
  if(!v||!nm){sm("名前と4項目を入力してください。",1);return}
  v.name=nm;v.id=uid();D.my.push(v);save();$("ename").value="";sm("Myリストに登録しました。");
};

var KS=[["p","たんぱく質(P)","g","--p"],["f","脂質(F)","g","--f"],["c","炭水化物(C)","g","--c"],["k","カロリー","kcal","--k"]];
function dest(){$("dest").textContent=lab(cur)}
function nm(v){var s=f1(v),i=s.indexOf(".");return'<span class="i">'+s.slice(0,i)+'</span><span class="d">'+s.slice(i)+'</span>'}
function catHtml(l){
  var h="",any=false;
  CATS.concat([""]).forEach(function(c){
    var sub=l.filter(function(e){return(e.cat||"")===c});
    if(!sub.length)return;
    var t=tot(sub);
    if(!any){h+='<span class="h"></span><span class="h i">P</span><span class="h"></span><span class="h i">F</span><span class="h"></span><span class="h i">C</span><span class="h"></span><span class="h i k">kcal</span><span class="h"></span>';any=true}
    h+='<span class="l"><i class="tag" data-c="'+esc(c)+'">'+(c||"未分類")+'</i></span>'+nm(t.p)+nm(t.f)+nm(t.c)+nm(t.k);
  });
  return any?'<div class="cg">'+h+'</div>':"";
}
function sortBtn(id,on,len){var b=$(id);if(len<2)on=false;b.hidden=len<2;b.textContent=on?"完了":"並び替え";b.setAttribute("aria-pressed",on?"true":"false");return on}
function btns(e,i,len,on,extra,del){
  return on?'<button class="mv" data-up="'+e.id+'" aria-label="上へ"'+(i===0?" disabled":"")+'>↑</button><button class="mv" data-dn="'+e.id+'" aria-label="下へ"'+(i===len-1?" disabled":"")+'>↓</button>'
  :extra+'<button data-edit="'+e.id+'">編集</button><button data-'+del+'="'+e.id+'">削除</button>';
}
function info(e){return'<span>P '+fmt(e.p)+" / F "+fmt(e.f)+" / C "+fmt(e.c)+" / "+fmt(e.k)+' kcal</span>'}
var gShown=null;
function rToday(){
  dest();$("dlabel").textContent=lab(cur)+(cur===ymd(new Date())?" 今日":"");
  if(gShown!==cur){setGoals();gShown=cur}
  var G=goalFor(cur),l=D.entries[cur]||[],t=tot(l),h="";
  KS.forEach(function(s){var g=G[s[0]]||0,v=t[s[0]],th=s[0]==="k"?250:25;
    h+='<div class="srow"><div class="shead"><b>'+s[1]+'</b><span><b class="cv">'+f1(v)+'</b><i class="un">'+s[2]+'</i></span></div>';
    if(g){var d=v-g,a=Math.abs(d),cl=a>=th?"er":(a<=th*.4?"bl":"");
      h+='<div class="pb"><i style="width:'+Math.min(100,v/g*100)+'%;background:var('+(d>=th?"--err":s[3])+')"></i></div><div class="rem frow"><span'+(cl?' class="'+cl+'"':'')+'>'+(d>0?fmt(d)+s[2]+" 超過":"あと "+fmt(-d)+s[2])+'</span><span class="tg"><span>目標 '+fmt(g)+'</span><i class="un">'+s[2]+'</i></span></div>'}
    h+='</div>'});
  if(!G.k&&!G.p&&!G.f&&!G.c)h+='<div class="rem">「目標設定」を開くと、残りが表示されます。</div>';
  $("sum").innerHTML=h;
  var ch=catHtml(l),cb=$("cats");cb.innerHTML=ch;cb.hidden=!ch;
  sortE=sortBtn("esort",sortE,l.length);
  $("elist").innerHTML=l.length?l.map(function(e,i){
    if(editE===String(e.id))return form(e,true);
    return'<div class="item"><div class="n"><b>'+(e.cat?'<i class="tag" data-c="'+esc(e.cat)+'">'+esc(e.cat)+'</i>':'')+esc(e.name||"名称なし")+'</b>'+info(e)+'</div>'+btns(e,i,l.length,sortE,"","del")+'</div>'}).join(""):'<div class="rem">この日の記録はまだありません。「計算」または「Myリスト」から記録できます。</div>';
  rHk();
}
$("esort").onclick=function(){sortE=!sortE;editE=null;rToday()};
$("elist").addEventListener("change",fchange);
$("elist").addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  var l=D.entries[cur]||[];
  if(b.dataset.del){
    if(!confirm("削除しますか?"))return;
    D.entries[cur]=l.filter(function(x){return String(x.id)!==b.dataset.del});
    if(!D.entries[cur].length)delete D.entries[cur];save();rToday();return;
  }
  if(b.dataset.edit){editE=b.dataset.edit;rToday();return}
  if(b.dataset.cancel){editE=null;rToday();return}
  if(b.dataset.add){
    var a=readForm(b.closest(".edit"));if(!a)return;
    var mm=a.name.match(/\s*×([0-9]+(?:\.[0-9]+)?)$/);
    if(mm&&Number(mm[1])>0){
      var q=Number(mm[1]);
      a.name=a.name.slice(0,mm.index).trim();
      K4.forEach(function(k){a[k]=a[k]/q});
    }
    clr();K4.forEach(function(k){el[k].value=fmt(a[k])});
    $("ename").value=a.name;cat=a.cat||"";$("cmult").value="1";sm("");
    show("calc");calc(null);return;
  }
  if(b.dataset.save){
    var o=readForm(b.closest(".edit"));if(!o)return;
    l.forEach(function(x){if(String(x.id)===b.dataset.save){x.name=o.name;x.p=o.p;x.f=o.f;x.c=o.c;x.k=o.k;if(o.cat)x.cat=o.cat;else delete x.cat}});
    save();editE=null;rToday();return;
  }
  if(b.dataset.up||b.dataset.dn){
    if(mv(l,b.dataset.up||b.dataset.dn,b.dataset.up?-1:1)){save();rToday()}
  }
});
$("dprev").onclick=function(){cur=shift(cur,-1);editE=null;rToday()};
$("dnext").onclick=function(){cur=shift(cur,1);editE=null;rToday()};
$("dlabel").onclick=function(){cur=ymd(new Date());editE=null;rToday()};

var PK="claude_pfc_pend",hk=document.createElement("div");
hk.className="card";hk.id="hk";
var hkp=$("elist").parentNode;hkp.parentNode.insertBefore(hk,hkp.nextSibling);
function r1(n){return Math.round(n*10)/10}
function hkTot(){var t=tot(D.entries[cur]||[]);K4.forEach(function(k){t[k]=r1(t[k])});return t}
function hkTxt(o,sg){
  return["p","f","c"].map(function(k){return k.toUpperCase()+" "+(sg&&o[k]>0?"+":"")+fmt(o[k])}).join(" / ")+" / "+(sg&&o.k>0?"+":"")+fmt(o.k)+" kcal";
}
var HKB='<button class="wide" type="button" data-hk="send" style="background:#fff;color:#c0392b">送信</button>';
function rHk(){
  var t=hkTot(),s=D.sent[cur],h='<b class="tt"><i class="ic">'+svg("heartbeat")+'</i>ヘルスケアへ送る</b>',has=t.p||t.f||t.c||t.k;
  if(!s){
    h+=has?'<div class="rem">未送信:'+hkTxt(t)+'</div>'+HKB
    :'<div class="rem">この日は記録がないため、送るものがありません。</div>';
  }else{
    var d={},dec=false,inc=false;
    K4.forEach(function(k){d[k]=r1(t[k]-s[k]);if(d[k]<0)dec=true;if(d[k]>0)inc=true});
    if(dec)h+='<div class="bad">送信後に、記録が減った項目があります。ヘルスケアアプリ側を現在の合計に合わせて修正してから、下のボタンを押してください。</div><div class="rem">送信済み:'+hkTxt(s)+'</div><button class="wide" type="button" data-hk="sync">送信済みを現在の合計に合わせる</button>';
    else if(inc)h+='<div class="rem">送信済み:'+hkTxt(s)+'</div><div class="rem">増えた分:'+hkTxt(d,1)+'</div>'+HKB;
    else h+='<div class="rem">送信済み:'+hkTxt(s)+'</div>';
    h+='<button type="button" data-hk="reset" style="width:100%;margin-top:8px">送信記録をリセット</button>';
  }
  hk.innerHTML=h;
}
function hkSend(){
  var t=hkTot(),s=D.sent[cur]||{p:0,f:0,c:0,k:0},o={},dec=false,inc=false;
  K4.forEach(function(k){o[k]=r1(t[k]-s[k]);if(o[k]<0)dec=true;if(o[k]>0)inc=true});
  if(dec||!inc)return;
  var now=new Date(),tm="12:00:00";
  if(cur===ymd(now)&&now.getHours()<12)tm=p2(now.getHours())+":"+p2(now.getMinutes())+":00";
  try{localStorage.setItem(PK,JSON.stringify({date:cur,t:t}))}catch(e){}
  var body={date:cur+"T"+tm,p:o.p,f:o.f,c:o.c,k:o.k};
  location.href="shortcuts://run-shortcut?name="+encodeURIComponent("PFC送信")+"&input=text&text="+encodeURIComponent(JSON.stringify(body));
}
function hkAsk(){
  var s=null,p;
  try{s=localStorage.getItem(PK)}catch(e){}
  if(!s)return;
  try{localStorage.removeItem(PK)}catch(e){}
  try{p=JSON.parse(s)}catch(e){return}
  if(!p||!p.date||!p.t)return;
  if(confirm(lab(p.date)+"の分を、ヘルスケアに送れましたか?\n「OK」=送れた / 「キャンセル」=送れていない")){
    D.sent[p.date]=p.t;save();
  }
  rHk();
}
hk.addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  var a=b.dataset.hk;
  if(a==="send")hkSend();
  else if(a==="sync"){D.sent[cur]=hkTot();save();rHk()}
  else if(a==="reset"){
    if(confirm("この日の送信記録を消します。ヘルスケアに入っているデータは消えません。よろしいですか?")){delete D.sent[cur];save();rHk()}
  }
});
document.addEventListener("visibilitychange",function(){if(!document.hidden)setTimeout(hkAsk,400)});

var gAuto=null;
function gm(t,e){say("gmsg",t,e)}
function gclr(){if(gAuto){var a=$("g"+gAuto);a.value="";a.classList.remove("auto");gAuto=null}}
function setGoals(){gAuto=null;gm("");var G=goalFor(cur);K4.forEach(function(k){var i=$("g"+k);i.value=G[k]||"";i.classList.remove("auto")})}
K4.forEach(function(k){var i=$("g"+k);i.addEventListener("input",function(){
  gm("");
  if(gAuto&&gAuto!==k)gclr();
  if(gAuto===k){i.classList.remove("auto");gAuto=null}
  var r4=read4(function(x){return $("g"+x).value});
  if(r4.bad||r4.em.length!==1)return;
  var r=solve(r4.v,r4.em[0]);
  if(r<0){gm("計算結果がマイナスになります。入力値を確認してください。",1);return}
  var t=$("g"+r4.em[0]);t.value=fmt(r);t.classList.add("auto");gAuto=r4.em[0];
})});
$("gsave").onclick=function(){
  var g={},bad=false;
  K4.forEach(function(k){var n=num($("g"+k).value);if(n!==null&&isNaN(n))bad=true;g[k]=(n===null||isNaN(n))?0:n});
  if(bad){gm("数字(0以上)で入力してください。",1);return}
  D.goalHist[cur]=g;save();
  K4.forEach(function(k){$("g"+k).classList.remove("auto")});gAuto=null;
  rToday();gm(lab(cur)+"以降の目標を保存しました。");
};

function calHtml(y,m){
  var off=new Date(y,m-1,1).getDay();
  var rows=Math.ceil((off+new Date(y,m,0).getDate())/7);
  var today=ymd(new Date()),h="",i,d,s,has,dw,hc;
  for(i=0;i<rows*7;i++){
    d=new Date(y,m-1,1-off+i);s=ymd(d);has=(D.entries[s]||[]).length>0;
    dw=d.getDay();hc=(dw===0||isHol(d))?" sun":(dw===6?" sat":"");
    h+='<button class="day'+(d.getMonth()===m-1?"":" out")+hc+(s===today?" today":"")+(s===cur?" sel":"")+'" data-d="'+s+'" aria-label="'+lab(s)+(has?" 記録あり":"")+'"><span>'+d.getDate()+'</span><i class="dot'+(has?" on":"")+'"></i></button>';
  }
  return h;
}
function rCal(){
  $("mlabel").innerHTML='<i class="ic">'+svg("cal")+'</i>'+vy+"年"+vm+"月";
  $("cal").innerHTML=calHtml(vy,vm);
}
$("cal").addEventListener("click",function(e){var b=e.target.closest(".day");if(b){cur=b.dataset.d;show("today")}});
$("mprev").onclick=function(){vm--;if(vm<1){vm=12;vy--}rCal()};
$("mnext").onclick=function(){vm++;if(vm>12){vm=1;vy++}rCal()};
$("mtoday").onclick=function(){cur=ymd(new Date());vy=+cur.slice(0,4);vm=+cur.slice(5,7);rCal()};
function bm(t,e){say("bmsg",t,e)}
function copyBox(okMsg){
  var b=$("bbox"),ng=function(){b.focus();b.select();bm("枠内の文字を全選択してコピーし、メモアプリなどに保存してください。")};
  try{navigator.clipboard.writeText(b.value).then(function(){bm(okMsg)},ng)}catch(x){ng()}
}
$("bout").onclick=function(){$("bbox").value=JSON.stringify(D);copyBox("コピーしました。メモアプリなどに貼り付けて保存してください。")};
$("bcopy").onclick=function(){
  if(!$("bbox").value){bm("コピーする文字がありません。",1);return}
  copyBox("コピーしました。");
};
$("bclr").onclick=function(){$("bbox").value="";bm("")};
$("bin").onclick=function(){
  var s=$("bbox").value.trim();
  if(!s){bm("復元したい文字を、枠に貼り付けてください。",1);return}
  try{
    var o=JSON.parse(s);
    if(!o||typeof o!=="object"||(!o.entries&&!o.my&&!o.goal&&!o.goalHist))throw 0;
    if(!confirm("今のデータを、貼り付けた内容で置き換えます。よろしいですか?"))return;
    D=fix(o);save();gShown=null;rCal();bm("復元しました。");
  }catch(x){bm("読み込めませんでした。書き出した文字を、そのまま貼り付けてください。",1)}
};

function rMy(){
  var l=D.my;
  $("mdest").textContent=lab(cur);
  qsync();csync();
  sortM=sortBtn("msort",sortM,l.length);
  $("mylist").innerHTML=l.length?l.map(function(e,i){
    if(editM===String(e.id))return form(e,false);
    return'<div class="item"><div class="n"><b>'+esc(e.name)+'</b>'+info(e)+'</div>'+btns(e,i,l.length,sortM,'<button data-use="'+e.id+'">記録</button>',"mdel")+'</div>'}).join(""):'<div class="rem">Myリストは空です。「計算」で4項目を入れて名前を付け、「Myリストに登録」を押してください。</div>';
}
$("msort").onclick=function(){sortM=!sortM;editM=null;rMy()};
$("mylist").addEventListener("change",fchange);
$("mylist").addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  var it;
  if(b.dataset.use){
    D.my.forEach(function(y){if(String(y.id)===b.dataset.use)it=y});if(!it)return;
    var m=num($("mult").value);if(!m||isNaN(m))m=1;
    var r=function(v){return Math.round(v*m*10)/10};
    var ne={name:it.name+(m!==1?" ×"+m:""),p:r(it.p),f:r(it.f),c:r(it.c),k:r(it.k)};
    if(cat)ne.cat=cat;
    add(cur,ne);
    $("mult").value="1";cat="";csync();qsync();
    $("mymsg").textContent=lab(cur)+"に記録しました。";
  }else if(b.dataset.mdel){
    if(confirm("Myリストから削除しますか?")){D.my=D.my.filter(function(y){return String(y.id)!==b.dataset.mdel});save();rMy()}
  }else if(b.dataset.edit){
    editM=b.dataset.edit;rMy();
  }else if(b.dataset.cancel){
    editM=null;rMy();
  }else if(b.dataset.save){
    var box=b.closest(".edit"),o=readForm(box);if(!o)return;
    if(!o.name){box.querySelector(".emsg").textContent="名前を入力してください。";return}
    D.my.forEach(function(y){if(String(y.id)===b.dataset.save){y.name=o.name;y.p=o.p;y.f=o.f;y.c=o.c;y.k=o.k}});
    save();editM=null;rMy();
  }else if(b.dataset.up||b.dataset.dn){
    if(mv(D.my,b.dataset.up||b.dataset.dn,b.dataset.up?-1:1)){save();rMy()}
  }
});

function rData(){
  var today=ymd(new Date()),days=[],i;
  for(i=13;i>=0;i--)days.push(shift(today,-i));
  var W=360,H=240,L=36,R=32,T=10,B=24,pw=W-L-R,ph=H-T-B,sw=pw/14;
  var rows=days.map(function(d){var l=D.entries[d]||[];return{t:l.length?tot(l):null,g:goalFor(d)}});
  $("drange").textContent=(+days[0].slice(5,7))+"/"+(+days[0].slice(8))+" 〜 "+(+today.slice(5,7))+"/"+(+today.slice(8));
  if(!rows.some(function(x){return x.t})){$("dchart").innerHTML='<div class="rem">過去14日の記録がありません。</div>';return}
  var mk=0,mg=0;
  rows.forEach(function(x){
    if(x.t){mk=Math.max(mk,x.t.k);mg=Math.max(mg,x.t.p,x.t.f,x.t.c)}
    mk=Math.max(mk,x.g.k||0);mg=Math.max(mg,x.g.p||0,x.g.f||0,x.g.c||0);
  });
  var LM=Math.max(400,Math.ceil(mk/400)*400),RM=Math.max(40,Math.ceil(mg/40)*40);
  function r1(n){return Math.round(n*10)/10}
  function yl(v){return r1(T+ph*(1-v/LM))}
  function yr(v){return r1(T+ph*(1-v/RM))}
  function cx(n){return r1(L+sw*(n+.5))}
  var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="過去14日の推移">',gy;
  for(i=0;i<=4;i++){
    gy=r1(T+ph*(1-i/4));
    s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+gy+'" y2="'+gy+'" style="stroke:var(--line)"/>'
    +'<text x="'+(L-4)+'" y="'+(gy+4)+'" text-anchor="end">'+(LM/4*i)+'</text>'
    +'<text x="'+(W-R+4)+'" y="'+(gy+4)+'">'+(RM/4*i)+'</text>';
  }
  rows.forEach(function(x,n){
    if(x.t&&x.t.k>0){var y=yl(x.t.k);s+='<rect x="'+r1(cx(n)-5)+'" y="'+y+'" width="10" height="'+r1(T+ph-y)+'" rx="2" style="fill:var(--sub);opacity:.45"/>'}
    s+='<text x="'+cx(n)+'" y="'+(H-8)+'" text-anchor="middle">'+(+days[n].slice(8))+'</text>';
  });
  function step(vals,fn,c){
    var d="",py=null;
    vals.forEach(function(v,n){
      if(!(v>0)){py=null;return}
      var x0=r1(L+sw*n),x1=r1(L+sw*(n+1)),y=fn(v);
      d+=py===null?"M"+x0+" "+y+"H"+x1:"V"+y+"H"+x1;py=y;
    });
    return d?'<path d="'+d+'" fill="none" style="stroke:var('+c+');stroke-width:1.3;stroke-dasharray:4 3"/>':"";
  }
  function line(vals,fn,c){
    var d="",on=false,pts="";
    vals.forEach(function(v,n){
      if(v===null){on=false;return}
      var x=cx(n),y=fn(v);
      d+=(on?"L":"M")+x+" "+y;on=true;
      pts+='<circle cx="'+x+'" cy="'+y+'" r="2.4" style="fill:var('+c+')"/>';
    });
    return d?'<path d="'+d+'" fill="none" style="stroke:var('+c+');stroke-width:2;stroke-linejoin:round"/>'+pts:"";
  }
  var cfg=[["p","--p"],["f","--f"],["c","--c"]];
  s+=step(rows.map(function(x){return x.g.k}),yl,"--ink");
  cfg.forEach(function(q){s+=step(rows.map(function(x){return x.g[q[0]]}),yr,q[1])});
  cfg.forEach(function(q){s+=line(rows.map(function(x){return x.t?x.t[q[0]]:null}),yr,q[1])});
  $("dchart").innerHTML=s+'</svg>';
}
function rLog(){
  var ks=Object.keys(D.entries).filter(function(k){return D.entries[k].length}).sort().reverse();
  function c(v,g,hi,lo){var a=Math.abs(v-g),cl=g>0?(a>=hi?"er":(a<=lo?"bl":"")):"";return'<span'+(cl?' class="'+cl+'"':'')+'>'+f1(v)+'</span>'}
  function hc(t,w,cn){return'<span class="hc"><i class="kx'+cn+'"><small>'+w+'</small><b>'+t+'</b></i><i class="ph">.0</i></span>'}
  $("loghd").innerHTML=ks.length?'<div class="lr hd"><span></span>'+hc("P","0"," c")+hc("F","0"," c")+hc("C","0"," c")+hc("kcal","000"," kk")+'</div>':"";
  $("loglist").innerHTML=ks.length?ks.map(function(d){
    var t=tot(D.entries[d]),g=goalFor(d),a=d.split("-");
    return'<div class="lr"><span class="ld">'+a[0]+"年"+(+a[1])+"月"+(+a[2])+"日</span>"+c(t.p,g.p,25,10)+c(t.f,g.f,25,10)+c(t.c,g.c,25,10)+c(t.k,g.k,250,100)+'</div>'
  }).join(""):'<div class="rem" style="padding:16px 0">記録がありません。</div>';
}
function closeLog(){$("logv").hidden=true;document.body.style.overflow=""}
$("dlog").onclick=function(){rLog();var v=$("logv");v.hidden=false;v.scrollTop=0;document.body.style.overflow="hidden"};
$("lclose").onclick=closeLog;

function prep(t){
  if(t==="today")rToday();
  if(t==="hist"){vy=+cur.slice(0,4);vm=+cur.slice(5,7);rCal();bm("")}
  if(t==="my"){rMy();$("mymsg").textContent=""}
  if(t==="calc"){dest();qsync();csync()}
  if(t==="data")rData();
}
function show(t){
  sortE=false;sortM=false;editE=null;editM=null;closeLog();curTab=t;
  TABS.forEach(function(x){$("t-"+x).hidden=x!==t});
  [].forEach.call(document.querySelectorAll("#tabs button"),function(b){b.setAttribute("aria-selected",b.dataset.t===t?"true":"false")});
  prep(t);
  window.scrollTo(0,0);
}
$("tabs").addEventListener("click",function(e){var b=e.target.closest("button");if(b)show(b.dataset.t)});

var sx=0,sy=0,st=0,sok=false,smo=false,busy=false,dg=null,nc=0;
function mkNb(dir){
  var i=TABS.indexOf(curTab)+dir;
  if(i<0||i>=TABS.length)return null;
  var t=TABS[i],n=$("t-"+t),c=$("t-"+curTab),m=document.querySelector("main");
  prep(t);
  n.hidden=false;
  n.style.cssText="position:absolute;left:16px;right:16px;top:"+Math.max(c.offsetTop,-m.getBoundingClientRect().top)+"px;transition:none";
  return t;
}
function clrNb(t){if(!t)return;var n=$("t-"+t);n.style.cssText="";n.hidden=true}
function mkMonth(dir){
  var y=vy,m=vm+dir;
  if(m<1){m=12;y--}
  if(m>12){m=1;y++}
  var n=document.createElement("div");
  n.className="cal";
  n.innerHTML=calHtml(y,m);
  n.style.cssText="position:absolute;left:0;right:0;top:0;transition:none";
  $("calwrap").appendChild(n);
  return{y:y,m:m,n:n};
}
function fin(go){
  $("t-"+curTab).style.cssText="";
  if(go){var t=dg.t;$("t-"+t).style.cssText="";show(t)}else clrNb(dg.t);
  dg=null;busy=false;
}
function endMonth(dx,v){
  var c=$("cal"),n=dg.nb.n,W=$("calwrap").offsetWidth;
  var go=Math.abs(dx)>60||(Math.abs(dx)>30&&v>.5);
  busy=true;
  c.style.transition="transform .22s ease-out";
  n.style.transition="transform .22s ease-out";
  c.style.transform="translateX("+(go?-dg.dir*W:0)+"px)";
  n.style.transform="translateX("+(go?0:dg.dir*W)+"px)";
  setTimeout(function(){
    n.remove();c.style.cssText="";
    if(go){vy=dg.nb.y;vm=dg.nb.m;rCal()}
    dg=null;busy=false;
  },230);
}
function endDrag(dx,dt){
  if(!dg)return;
  var v=Math.abs(dx)/Math.max(dt,1);
  nc=Date.now()+400;
  if(dg.m){endMonth(dx,v);return}
  var W=window.innerWidth,c=$("t-"+curTab),n=dg.t?$("t-"+dg.t):null;
  var go=!!n&&(Math.abs(dx)>80||(Math.abs(dx)>35&&v>.5));
  busy=true;
  c.style.transition="transform .22s ease-out";
  c.style.transform="translateX("+(go?-dg.dir*W:0)+"px)";
  if(n){n.style.transition="transform .22s ease-out";n.style.transform="translateX("+(go?0:dg.dir*W)+"px)"}
  setTimeout(function(){fin(go)},230);
}
document.addEventListener("click",function(e){
  if(Date.now()<nc){e.stopPropagation();e.preventDefault()}
},true);
document.addEventListener("touchstart",function(e){
  var t=e.touches[0];sx=t.clientX;sy=t.clientY;st=Date.now();
  sok=!busy&&e.touches.length===1&&$("logv").hidden&&!editE&&!editM&&!e.target.closest("input,textarea,select,#tabs");
  smo=curTab==="hist"&&!!e.target.closest("#calzone");
},{passive:true});
document.addEventListener("touchmove",function(e){
  if(!sok)return;
  var t=e.touches[0],dx=t.clientX-sx,dy=t.clientY-sy;
  if(!dg){
    if(Math.abs(dx)<10&&Math.abs(dy)<10)return;
    if(Math.abs(dx)<Math.abs(dy)*1.2){sok=false;return}
    dg={dir:0,t:null,m:smo,nb:null};
  }
  e.preventDefault();
  var dir=dx<0?1:-1;
  if(dg.m){
    var Wm=$("calwrap").offsetWidth;
    if(dir!==dg.dir){if(dg.nb)dg.nb.n.remove();dg.dir=dir;dg.nb=mkMonth(dir)}
    $("cal").style.transform="translateX("+dx+"px)";
    dg.nb.n.style.transform="translateX("+(dx+dir*Wm)+"px)";
    return;
  }
  var W=window.innerWidth;
  if(dir!==dg.dir){clrNb(dg.t);dg.dir=dir;dg.t=mkNb(dir)}
  $("t-"+curTab).style.transform="translateX("+(dg.t?dx:dx*.3)+"px)";
  if(dg.t)$("t-"+dg.t).style.transform="translateX("+(dx+dir*W)+"px)";
},{passive:false});
document.addEventListener("touchend",function(e){
  var t=e.changedTouches[0];sok=false;
  endDrag(t.clientX-sx,Date.now()-st);
},{passive:true});
document.addEventListener("touchcancel",function(){sok=false;endDrag(0,1)},{passive:true});
show("today");
hkAsk();
})();
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js").catch(function(){})})}
