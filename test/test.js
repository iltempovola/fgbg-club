'use strict';
(async()=>{
 const select=document.querySelector('#locale'), instruction=document.querySelector('#instructions'), feedback=document.querySelector('#feedback'), form=document.querySelector('#form'), status=document.querySelector('#status');
 let all, current;
 try { const r=await fetch('/test/translations.json'); if(!r.ok)throw Error('translation unavailable'); all=await r.json(); } catch(e) { console.error(e); document.querySelector('#open').disabled=true; return; }
 function apply(code){
  current=Object.hasOwn(all,code)?code:'en'; const t=all[current]; select.value=current;
  document.documentElement.lang=current; document.documentElement.dir=current==='ur'?'rtl':'ltr';
  document.title=t.title+' — FGBG'; document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=t[el.dataset.t]});
  document.querySelector('#apk').href='/download?lang='+current;
  const params=new URLSearchParams(location.search);params.set('lang',current);history.replaceState(null,'',location.pathname+'?'+params.toString());
  const q=document.querySelector('#questions');
  if(!q.children.length){for(const key of ['q1','q2','q3','q4','phone','appLanguage']){let label=document.createElement('label');label.className='question';let text=document.createElement('span');text.dataset.question=key;let field=document.createElement('textarea');field.name=key;field.required=true;label.append(text,field);q.append(label)}}
  q.querySelectorAll('[data-question]').forEach(el=>{el.textContent=t[el.dataset.question]}); status.textContent='';
 }
 select.addEventListener('change',()=>apply(select.value));
 document.querySelector('#open').addEventListener('click',()=>{instruction.hidden=true;feedback.hidden=false;window.scrollTo(0,0);feedback.querySelector('h1').setAttribute('tabindex','-1');feedback.querySelector('h1').focus()});
 document.querySelector('#back').addEventListener('click',()=>{feedback.hidden=true;instruction.hidden=false;window.scrollTo(0,0);document.querySelector('#open').focus()});
 form.addEventListener('submit',async e=>{e.preventDefault();const t=all[current];const answer=Array.from(form.querySelectorAll('textarea')).map(el=>t[el.name]+'\n'+el.value.trim()).join('\n\n');try{await navigator.clipboard.writeText(answer);status.textContent=t.copied}catch(_){status.textContent=answer;status.tabIndex=-1;status.focus()}});
 apply(new URLSearchParams(location.search).get('lang')||'en');
})();
