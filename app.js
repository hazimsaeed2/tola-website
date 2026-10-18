(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#site-nav');
  const closeMenu = () => {
    menu?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('open');
  };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeMenu();
  });
  document.querySelector('#print-overview')?.addEventListener('click', () => window.print());

  const singleLine = (value, length = 120) => String(value || '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, length);
  const service = document.querySelector('#brief-service');
  const project = document.querySelector('#brief-project');
  const scope = document.querySelector('#brief-scope');
  const locationField = document.querySelector('#brief-location');
  const timeline = document.querySelector('#brief-timeline');
  const briefStatus = document.querySelector('#copy-status');
  const fallback = document.querySelector('#brief-fallback');
  const emailBrief = document.querySelector('#email-brief');
  const prompts = document.querySelector('#service-prompts');
  const inquiryContext = document.querySelector('#inquiry-context');
  const incoming = new URLSearchParams(window.location.search);
  if (service) {
    const requested = incoming.get('service');
    if ([...service.options].some(option => option.value === requested)) service.value = requested;
  }
  if (project && incoming.has('project')) project.value = singleLine(incoming.get('project'));
  const selectedService = () => service?.selectedOptions?.[0];
  const serviceLabel = () => selectedService()?.textContent.trim() || 'General inquiry';
  const fieldValue = field => field?.value.trim() || '';
  const makeBrief = () => [
    'Opportunity brief for Tola',
    '',
    `Service / capability: ${serviceLabel()}`,
    `Relevant experience / project: ${singleLine(fieldValue(project))}`,
    'Agency / organization:',
    'Point of contact:',
    'Solicitation reference (if available):',
    `Mission need / expected scope: ${fieldValue(scope)}`,
    'Expected deliverables:',
    'Required skills / personnel:',
    `Location / remote or on-site requirements: ${fieldValue(locationField)}`,
    `Timeline and key dates: ${fieldValue(timeline)}`,
    'Proposed role (consulting / prime / subcontractor):',
    'Security / accessibility / licensing requirements:',
    'Next step:',
    ''
  ].join('\n');
  const updateBrief = (changed = false) => {
    const label = serviceLabel();
    if (inquiryContext) inquiryContext.textContent = service?.value && service.value !== 'general'
      ? `Selected capability: ${label}. Add the scope, location and timing below.`
      : 'Tell us about the requirement and the support you need.';
    if (prompts) {
      let items = [];
      try {
        const parsed = JSON.parse(selectedService()?.dataset.prompts || '[]');
        if (Array.isArray(parsed)) items = parsed.filter(item => typeof item === 'string').slice(0, 2);
      } catch { /* An optional prompt must not prevent preparing an inquiry. */ }
      prompts.replaceChildren();
      prompts.hidden = items.length === 0;
      if (items.length) {
        const list = document.createElement('ul');
        for (const item of items) {
          const entry = document.createElement('li');
          entry.textContent = item;
          list.append(entry);
        }
        prompts.append(list);
      }
    }
    const brief = makeBrief();
    if (emailBrief) emailBrief.href = `mailto:info@tolaunited.com?subject=${encodeURIComponent('Tola inquiry: ' + singleLine(label))}&body=${encodeURIComponent(brief)}`;
    if (fallback && !fallback.hidden) fallback.value = brief;
    if (changed && briefStatus) briefStatus.textContent = 'Brief updated. Copy the outline or open it in your email app. Nothing has been submitted.';
  };
  service?.addEventListener('change', () => updateBrief(true));
  [project, scope, locationField, timeline].forEach(field => field?.addEventListener('input', () => updateBrief(true)));
  if (service || emailBrief || document.querySelector('#copy-brief')) updateBrief();
  document.querySelector('#copy-brief')?.addEventListener('click', async () => {
    const brief = makeBrief();
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(brief);
      if (briefStatus) briefStatus.textContent = 'Outline copied. Paste it into your notes or email. Nothing has been submitted.';
    } catch {
      if (fallback) {
        fallback.value = brief;
        fallback.hidden = false;
        fallback.focus();
        fallback.select();
      }
      if (briefStatus) briefStatus.textContent = fallback
        ? 'Copy the selected outline below. Nothing has been submitted.'
        : 'Clipboard access is unavailable. Use the email link to open the outline in your email app.';
    }
  });

  const search = document.querySelector('#work-search');
  if (!search) return;
  const cards = [...document.querySelectorAll('[data-project]')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const industry = document.querySelector('#industry-filter');
  const reset = document.querySelector('#reset-filters');
  const countLabel = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  const context = document.querySelector('#filter-context');
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const tokens = value => String(value || '').trim().split(/\s+/).filter(Boolean);
  let active = 'all';
  const saveFilters = () => {
    const url = new URL(window.location.href);
    const values = { service: active === 'all' ? '' : active, q: search.value.trim(), industry: industry?.value === 'all' ? '' : industry?.value || '' };
    for (const [key, value] of Object.entries(values)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    try { window.history.replaceState(window.history.state, '', url); }
    catch { /* Filtering also works in local file previews without history access. */ }
  };
  const updateFilters = (save = true) => {
    const query = normalize(search.value.trim());
    const words = tokens(query);
    const chosenIndustry = industry?.value || 'all';
    let count = 0;
    for (const card of cards) {
      const show = (active === 'all' || tokens(card.dataset.services).includes(active))
        && (chosenIndustry === 'all' || card.dataset.industry === chosenIndustry)
        && words.every(word => normalize(card.dataset.search).includes(word));
      card.hidden = !show;
      if (show) count++;
      for (const wrapper of card.querySelectorAll('[data-matched-evidence]')) {
        let matches = 0;
        for (const evidence of wrapper.querySelectorAll('[data-evidence-service]')) {
          const matching = active !== 'all' && tokens(evidence.dataset.evidenceService).includes(active);
          evidence.hidden = !matching;
          evidence.classList.toggle('is-matched', matching);
          if (matching) matches++;
        }
        wrapper.hidden = !show || matches === 0;
      }
    }
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === active)));
    const filtered = active !== 'all' || chosenIndustry !== 'all' || query !== '';
    if (countLabel) countLabel.textContent = filtered ? `Showing ${count} of ${cards.length} portfolios` : `Showing all ${cards.length} portfolios`;
    if (empty) empty.hidden = count !== 0;
    if (reset) reset.hidden = !filtered;
    if (context) {
      const note = filters.find(button => button.dataset.filter === active)?.dataset.context || '';
      context.textContent = note;
      context.hidden = !note;
    }
    if (save) saveFilters();
  };
  const restoreFilters = () => {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get('service');
    active = filters.some(button => button.dataset.filter === requestedService) ? requestedService : 'all';
    search.value = params.get('q') || '';
    if (industry) {
      const requestedIndustry = params.get('industry');
      industry.value = [...industry.options].some(option => option.value === requestedIndustry) ? requestedIndustry : 'all';
    }
    updateFilters(false);
  };
  const clearFilters = () => {
    active = 'all';
    search.value = '';
    if (industry) industry.value = 'all';
    updateFilters();
    search.focus();
  };
  filters.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    updateFilters();
  }));
  search.addEventListener('input', () => updateFilters());
  industry?.addEventListener('change', () => updateFilters());
  reset?.addEventListener('click', clearFilters);
  document.querySelector('#empty-reset')?.addEventListener('click', clearFilters);
  window.addEventListener('popstate', restoreFilters);
  restoreFilters();
})();
