(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#site-nav');
  const closeMenu = () => { menu?.setAttribute('aria-expanded','false'); nav?.classList.remove('open'); };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded',String(open)); nav.classList.toggle('open',open);
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape' && menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();} });
  nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
  window.addEventListener('resize',()=>{if(window.innerWidth>850)closeMenu();});
  document.querySelector('#print-overview')?.addEventListener('click',()=>window.print());
  const brief = 'Opportunity brief for Tola\n\nAgency / organization:\nPoint of contact:\nSolicitation reference (if available):\nMission need / problem:\nExpected deliverables:\nRequired expertise:\nProposed role (consulting / prime / subcontractor):\nTimeline and key dates:\nSecurity / accessibility / licensing requirements:\nNext step:\n';
  document.querySelector('#copy-brief')?.addEventListener('click',async()=>{
    const status=document.querySelector('#copy-status');
    try {
      if(!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(brief);
      status.textContent='Outline copied. Paste it into your notes or preferred writing app. Nothing was submitted.';
    } catch {
      const fallback=document.querySelector('#brief-fallback');
      fallback.value=brief;fallback.hidden=false;fallback.focus();fallback.select();
      status.textContent='Copy the selected outline below. Nothing was submitted.';
    }
  });
  const search=document.querySelector('#work-search');
  if(!search)return;
  const cards=[...document.querySelectorAll('[data-project]')];
  const filters=[...document.querySelectorAll('[data-filter]')];
  const industry=document.querySelector('#industry-filter');
  const reset=document.querySelector('#reset-filters');
  const normalize=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  let active='all';
  const incoming=new URLSearchParams(location.search).get('service');
  if(filters.some(b=>b.dataset.filter===incoming))active=incoming;
  const update=()=>{
    const query=normalize(search.value.trim()),words=query.split(/\s+/).filter(Boolean);let count=0;
    for(const card of cards){const show=(active==='all'||card.dataset.services.split(' ').includes(active))&&(industry.value==='all'||card.dataset.industry===industry.value)&&words.every(w=>normalize(card.dataset.search).includes(w));card.hidden=!show;if(show)count++;}
    filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===active)));
    const filtered=active!=='all'||industry.value!=='all'||query!=='';
    document.querySelector('#result-count').textContent=filtered?`Showing ${count} of ${cards.length} portfolios`:`Showing all ${cards.length} portfolios`;
    document.querySelector('#empty-state').hidden=count!==0;reset.hidden=!filtered;
  };
  const clear=()=>{active='all';search.value='';industry.value='all';update();search.focus();};
  filters.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;update();}));
  search.addEventListener('input',update);industry.addEventListener('change',update);
  reset.addEventListener('click',clear);document.querySelector('#empty-reset').addEventListener('click',clear);update();
})();
