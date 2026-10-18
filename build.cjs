const fs = require('node:fs');
const path = require('node:path');
const {projects, services, redirects} = require('./content.cjs');
const companyPage = require('./company-page.cjs');
const dist = path.join(__dirname, 'dist');
// Pages may report HTTP when HTTPS enforcement is off; use secure public metadata.
const siteUrl = (process.env.SITE_URL || 'https://tolaunited.com').replace(/^http:\/\//i, 'https://').replace(/\/+$/, '');
if (!/^https:\/\/[^\s<>"']+$/.test(siteUrl)) throw new Error('SITE_URL must be an HTTPS website URL');
fs.mkdirSync(path.join(dist, 'projects'), {recursive:true});
fs.mkdirSync(path.join(dist, 'services'), {recursive:true});
fs.mkdirSync(path.join(dist, 'assets'), {recursive:true});
fs.copyFileSync(path.join(__dirname, 'brand/tola-logo-v2.png'), path.join(dist, 'assets/tola-logo.png'));
for (const name of ['styles.css','app.js']) fs.copyFileSync(path.join(__dirname,name),path.join(dist,name));
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<span aria-hidden="true">↗</span>';
const phones = ['2345643336','9133130208','2345640006'];
const phoneText = n => `(${n.slice(0,3)}) ${n.slice(3,6)}-${n.slice(6)}`;
const link = (href,label,cls='text-link') => `<a class="${cls}" href="${href}">${label}${arrow}</a>`;
const project = id => projects.find(p=>p.id===id);
const badge = p => p.experienceType || 'Team experience';
const logo = base => `<a class="brand" href="${base}index.html" aria-label="Tola home"><img src="${base}assets/tola-logo.png" width="1774" height="887" alt="Tola"></a>`;
function header(active,base) {
 return `<a class="skip" href="#main">Skip to content</a><div class="utility"><div class="container"><span>TOLA LLC · BUSINESS & HEALTHCARE SOLUTIONS</span><a href="${base}government.html">For agencies &amp; prime contractors ${arrow}</a></div></div><header class="site-header"><div class="container header-inner">${logo(base)}<button class="menu-button" aria-controls="site-nav" aria-expanded="false">Menu <span aria-hidden="true">☰</span></button><nav id="site-nav" aria-label="Main navigation">${[['services','Capabilities'],['work','Experience'],['government','Government'],['about','About']].map(([id,title])=>`<a href="${base}${id}.html"${(active===id)?' aria-current="page"':''}>${title}</a>`).join('')}${link(base+'contact.html','Discuss an opportunity','button button-small')}</nav></div></header>`;
}
function footer(base) {
 return `<footer class="site-footer"><div class="container footer-top"><div>${logo(base)}<p>Specialist knowledge.<br>Practical delivery.</p></div><div class="footer-links"><span class="eyebrow">Explore Tola</span><a href="${base}services.html">Capabilities</a><a href="${base}work.html">Project experience</a><a href="${base}government.html">Government &amp; teaming</a><a href="${base}capabilities.html">Capability overview</a></div><div class="footer-links"><span class="eyebrow">Start a conversation</span><a href="mailto:info@tolaunited.com">info@tolaunited.com</a>${phones.map(n=>`<a href="tel:+1${n}">${phoneText(n)}</a>`).join('')}<a href="${base}contact.html">Prepare an opportunity brief ${arrow}</a></div></div><div class="container footer-bottom"><span>© 2026 Tola LLC</span><span>Independent consulting &amp; specialist services</span><a href="${base}privacy.html">Privacy &amp; accessibility</a></div></footer>`;
}
function layout(title,description,body,{active='',base='',bodyClass=''}={}) {
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#142b3b"><meta name="description" content="${esc(description)}"><meta property="og:title" content="${esc(title)} | Tola"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><title>${esc(title)} | Tola</title><link rel="icon" type="image/svg+xml" href="${base}assets/favicon.svg"><link rel="stylesheet" href="${base}styles.css"><script src="${base}app.js" defer></script></head><body class="${bodyClass}">${header(active,base)}<main id="main" tabindex="-1">${body}</main>${footer(base)}</body></html>`;
}
const intro=(kicker,title,copy,extra='')=>`<section class="container page-intro"><span class="eyebrow red">${kicker}</span><h1>${title}</h1><p class="lead">${copy}</p>${extra}</section>`;
function cta(base='') {
 return `<section class="cta"><div class="container cta-inner"><div><span class="eyebrow">Let’s define the work</span><h2>Bring the requirement.<br>Build the right approach.</h2></div><div><p>Discuss the scope, specialist expertise and delivery responsibilities your initiative needs.</p>${link(base+'contact.html','Discuss an opportunity','button button-light')}</div></div></section>`;
}
const practiceNames = {technology:'Technology & IT supply',operations:'Operations improvement',clinical:'Healthcare solutions'};
function projectServices(p, engagement) {
 const categories = engagement ? engagement.categories : p.categories;
 return services.filter(s => (categories || []).includes(s.id) || s.evidence.some(e => e.project === p.id && (!engagement || e.anchor === engagement.id)));
}
function relatedProjects(p) {
 const ids=projectServices(p).map(s=>s.id);
 return projects.filter(x=>x.id!==p.id).map(x=>({p:x,score:projectServices(x).filter(s=>ids.includes(s.id)).length})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.p);
}
function evidenceCard(ref,base='') {
 const p=project(ref.project);
 const record=ref.anchor?p.engagements.find(e=>e.id===ref.anchor):p;
 return `<article class="evidence-card"><span class="eyebrow red">${esc(p.industry)}</span><h3>${link(base+'projects/'+p.id+'.html'+(ref.anchor?'#'+ref.anchor:''),esc(ref.label))}</h3><span class="experience-label">${esc(badge(record))}</span><p>${esc(ref.context)}</p></article>`;
}
function serviceCard(s,base='') {
 return `<article class="capability-card practice-${s.practice}" id="${s.id}"><div class="capability-card-top"><span class="row-index">${s.number}</span><span class="eyebrow">${practiceNames[s.practice]}</span></div><h2><a href="${base}services/${s.id}.html">${esc(s.title)}</a></h2><p>${esc(s.summary)}</p><div class="capability-card-footer">${link(base+'services/'+s.id+'.html','Scope & relevant experience')}</div></article>`;
}
function relatedCapabilities(p,base='../',engagement) {
 const choices=projectServices(p,engagement);
 const primaryCategory=(engagement?.categories||p.categories)[0];
 const curated=choices.find(s=>s.id===primaryCategory) || choices.find(s=>s.evidence.some(e=>e.project===p.id && (!engagement||e.anchor===engagement.id))) || choices[0];
 const context=p.client+(engagement?' — '+engagement.label:'');
 return `<div class="${engagement?'':'container '}case-capabilities"><div><span class="eyebrow red">Explore related capabilities</span><div class="capability-chips">${choices.map(s=>`<a href="${base}services/${s.id}.html">${esc(s.short)} <span aria-hidden="true">↗</span></a>`).join('')}</div></div><div class="case-inquiry">${link(base+'contact.html?service='+curated.id+'&amp;project='+encodeURIComponent(context),'Discuss a similar requirement')}</div></div>`;
}
function matchedEvidence(p,base) {
 const refs = new Map();
 for (const s of projectServices(p)) {
  const curated=s.evidence.filter(e=>e.project===p.id);
  const fallback=p.engagements?p.engagements.filter(e=>(e.categories||[]).includes(s.id)).map(e=>({project:p.id,anchor:e.id,label:e.label})): [{project:p.id,label:p.client}];
  for (const e of curated.length?curated:fallback) {
   const key=s.id+':'+(e.anchor||p.id);
   const item=refs.get(key)||{...e,services:[]};
   item.services.push(s.id);
   refs.set(key,item);
  }
 }
 return `<div class="matched-evidence" data-matched-evidence hidden><span class="eyebrow">Relevant contribution</span>${[...refs.values()].map(e=>{const record=e.anchor?p.engagements.find(x=>x.id===e.anchor):p;return `<a data-evidence-service="${e.services.join(' ')}" href="${base}projects/${p.id}.html${e.anchor?'#'+e.anchor:''}"><strong>${esc(e.label)}</strong><small>${esc(badge(record))} <span aria-hidden="true">↗</span></small></a>`;}).join('')}</div>`;
}
function card(p,base='') {
 const related=projectServices(p);
 return `<article class="project-card tone-${p.categories[0]}" data-project data-services="${related.map(s=>s.id).join(' ')}" data-industry="${esc(p.industry)}" data-search="${esc([p.client,p.industry,p.summary,p.scope,...p.tags,...p.work.map(w=>w[0]),...related.map(s=>s.title)].join(' ').toLowerCase())}"><div class="card-link"><a class="card-main" href="${base}projects/${p.id}.html"><div class="card-top"><span class="eyebrow">${esc(p.industry)}</span>${arrow}</div><div class="card-client">${esc(p.client)}</div><div class="card-copy"><span class="experience-label">${esc(badge(p))}</span><h3>${esc(p.headline)}</h3><p>${esc(p.summary)}</p></div></a>${matchedEvidence(p,base)}<div class="card-bottom"><span>${esc(services.find(s=>s.id===p.categories[0]).short)}</span>${link(base+'projects/'+p.id+'.html','View portfolio')}</div></div></article>`;
}

const steps=`<ol class="steps"><li><span>01</span><div><h3>Define the requirement</h3><p>Align the problem, scope, responsibilities and acceptance criteria before delivery begins.</p></div></li><li><span>02</span><div><h3>Deliver with your team</h3><p>Connect specialist expertise with the people, systems and constraints of the operating environment.</p></div></li><li><span>03</span><div><h3>Prepare for ownership</h3><p>Plan documentation, knowledge transfer and ongoing responsibilities as part of the work.</p></div></li></ol>`;
function privacyPage() {
 return layout('Privacy & accessibility','Information about this website’s data handling and accessibility features.',`${intro('Website information','Privacy &amp;<br><em>accessibility.</em>','A straightforward overview of how this website works.')}<section class="container policy-copy"><h2>Information on this site</h2><p>This site does not include advertising trackers, analytics scripts, accounts or a contact submission form. Its search, filters and inquiry brief run in your browser. You can copy the brief or open a draft in your email application. The site does not submit or store the brief; you decide whether to send the email. Filter choices may appear in the page URL so you can share a specific view.</p><h2>Contacting Tola</h2><p>Email links open your email application and telephone links open your device’s calling service. Information you choose to send by email is handled through your and Tola’s email providers. That service and your communications provider handle the call under their own terms. Please begin with general project information and arrange an appropriate channel before sharing confidential material.</p><h2>Hosting</h2><p>This website is hosted on GitHub Pages. GitHub may process connection information, including IP addresses, to provide and secure the service. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub’s privacy statement</a> for details.</p><h2>Accessibility</h2><p>The site includes keyboard navigation, visible focus indicators, a skip-to-content link, labeled search controls and layouts that adapt to smaller screens. These features do not constitute a compliance certification.</p><p>If you encounter a barrier or need project information in another format, email <a href="mailto:support@tolaunited.com">support@tolaunited.com</a> or call <a href="tel:+12345643336">(234) 564-3336</a>.</p><p class="small-copy">Last updated October 18, 2026.</p></section>`);
}
function projectPage(p) {
 if(p.engagements) return companyPage(p,{projects,layout,esc,badge,card,link,cta,relatedCapabilities,relatedProjects});
 const related=relatedProjects(p).slice(0,2);
 return layout(p.client+' — Experience',p.summary,`<div class="container breadcrumb"><a href="../work.html">Experience</a><span aria-hidden="true">/</span><span>${esc(p.client)}</span></div><section class="container case-hero"><div><span class="eyebrow red">${esc(p.industry)}</span><h1>${esc(p.headline)}</h1><p class="lead">${esc(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></div><aside class="case-identity"><span class="eyebrow">Experience profile</span><h2>${esc(p.client)}</h2><span class="experience-label">${esc(badge(p))}</span><p>${p.work.length} areas of contribution</p></aside></section>${relatedCapabilities(p,'../')}<section class="case-overview"><div class="container overview-grid"><div><span class="eyebrow red">Role &amp; contribution</span><p class="large-copy">${esc(p.role)}</p></div><dl><dt>Scope</dt><dd>${esc(p.scope)}</dd><dt>Engagement context</dt><dd>${esc(p.status)}</dd></dl></div></section>${p.metrics?.length?`<section class="section container"><span class="eyebrow red">Reported results</span><div class="case-metrics">${p.metrics.map(m=>`<article><strong>${esc(m[0])}</strong><h2>${esc(m[1])}</h2><p>${esc(m[2])}</p></article>`).join('')}</div><p class="small-copy">Results are reported in owner-supplied records and have not been independently audited.</p></section>`:''}<section class="section container"><div class="section-heading"><div><span class="eyebrow red">Inside the work</span><h2>Scope, contribution<br>and approach.</h2></div><p>Expand each area for a concise description of the work.</p></div><div class="workstream-list">${p.work.map((w,i)=>`<details${i===0?' open':''}><summary><span class="row-index">${String(i+1).padStart(2,'0')}</span><h3>${esc(w[0])}</h3><span class="expand" aria-hidden="true">+</span></summary><div class="workstream-content"><div><span class="eyebrow">Contribution</span><p>${esc(w[1])}</p></div><div><span class="eyebrow">Approach</span><p>${esc(w[2])}</p></div></div></details>`).join('')}</div><p class="case-note">Based on owner-supplied experience records. Organization names identify the context of the work and do not imply endorsement. The role described above should be read separately from any claim of corporate contract performance.</p></section><section class="section wash"><div class="container"><div class="section-heading"><h2>Related experience</h2>${link('../work.html','All experience')}</div><div class="featured-grid">${related.map(r=>card(r,'../')).join('')}</div></div></section>${cta('../')}`,{base:'../',active:'work'});
}
const {home,servicesPage,servicePage,workPage,governmentPage,aboutPage,contactPage,capabilitiesPage}=require('./page-templates.cjs')({projects,services,esc,link,layout,intro,cta,card,project,badge,evidenceCard,serviceCard,steps,phones,phoneText,siteUrl});
const pages={'index.html':home(),'services.html':servicesPage(),'work.html':workPage(),'government.html':governmentPage(),'about.html':aboutPage(),'contact.html':contactPage(),'capabilities.html':capabilitiesPage(),'privacy.html':privacyPage()};
for(const p of projects) pages['projects/'+p.id+'.html']=projectPage(p);
for(const s of services) pages['services/'+s.id+'.html']=servicePage(s);
const canonicalPages=Object.keys(pages);
for(const [old,target] of Object.entries(redirects)) {
 const [company,anchor]=target.split('#');
 const href=company+'.html#'+anchor;
 pages['projects/'+old+'.html']=layout('Project location updated','Continue to the consolidated company portfolio.',intro('Company experience','This project has a new home.','All engagement details are available on the company page.',link(href,'View '+esc(project(company).client),'button')),{base:'../',active:'work'}).replace('</head>','<meta http-equiv="refresh" content="0; url='+href+'"></head>');
}
for(const [file,html] of Object.entries(pages)) {
 const old=path.basename(file,'.html');
 const canonical=redirects[old]?'projects/'+redirects[old].split('#')[0]+'.html':file;
 const url=siteUrl+'/'+(canonical==='index.html'?'':canonical);
 const metadata='<link rel="canonical" href="'+url+'"><meta property="og:url" content="'+url+'"><meta property="og:site_name" content="Tola"><meta property="og:image" content="'+siteUrl+'/assets/tola-logo.png">';
 fs.writeFileSync(path.join(dist,file),html.replace('</head>',metadata+'</head>'));
}
fs.writeFileSync(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+canonicalPages.map(file=>'<url><loc>'+siteUrl+'/'+(file==='index.html'?'':file)+'</loc></url>').join('')+'</urlset>');
fs.writeFileSync(path.join(dist,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+siteUrl+'/sitemap.xml\n');
fs.writeFileSync(path.join(dist,'assets/favicon.svg'),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#142b3b"/><path d="M14 16h36v9H37v26H27V25H14z" fill="#fff"/><path d="M14 8h36v4H14z" fill="#ba2b2d"/></svg>');
console.log(`Built ${Object.keys(pages).length} pages with ${projects.length} experience portfolios.`);
