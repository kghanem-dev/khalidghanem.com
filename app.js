(() => {
  'use strict';
  const engine = window.PortfolioQuery;
  const $ = id => document.getElementById(id);
  const dialog = $('searchDialog'), input = $('queryInput'), output = $('queryOutput');
  const mode = $('queryMode'), count = $('resultCount');
  let returnFocus = $('searchTrigger'), history = [], historyIndex = 0, jumping = false;
  const make = (tag, cls, value) => { const el = document.createElement(tag); if (cls) el.className = cls; if (value !== undefined) el.textContent = String(value); return el; };
  function openSearch(source) { returnFocus = source || document.activeElement || $('searchTrigger'); if (!dialog.open) dialog.showModal(); requestAnimationFrame(() => input.focus()); }
  function closeSearch() { if (dialog.open) dialog.close(); }
  $('searchTrigger').addEventListener('click', () => openSearch($('searchTrigger')));
  $('searchClose').addEventListener('click', closeSearch);
  dialog.addEventListener('close', () => { if (jumping) { jumping = false; return; } if (returnFocus?.isConnected) returnFocus.focus(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) closeSearch(); });
  dialog.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closeSearch(); } });
  document.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); dialog.open ? input.focus() : openSearch(document.activeElement); } });

  function clearResults() { input.value = ''; output.replaceChildren(make('p', 'idle-output', 'Try a question or choose an example. Results come from Khalid’s portfolio content.')); mode.textContent = 'SEARCH'; count.textContent = ''; input.focus(); }
  function renderHelp() {
    output.replaceChildren();
    output.append(make('p', 'result-answer', 'Searches run locally over the portfolio content. Advanced syntax is read-only and never executes code.'));
    const examples = [
      ['Plain English', 'Which projects use AWS? · What is in production? · What skills do you have?'],
      ['Python-style', 'profile.location · projects() · projects(status="Production") · projects(tech="AWS") · skills(category="Cloud") · experience(company="IBM") · education() · certifications() · contact() · search("Python")'],
      ['SQL-style', "SELECT * FROM projects; · SELECT title, status FROM projects WHERE status = 'Production'; · SELECT * FROM skills WHERE category = 'Cloud'; · SELECT * FROM experience WHERE company LIKE '%IBM%';"]
    ];
    examples.forEach(([title, description]) => { const group = make('div', 'help-group'); group.append(make('h3', '', title), make('p', '', description)); output.append(group); });
    output.append(make('p', 'help-note', 'SQL supports one table and at most one = or LIKE condition. LIKE uses % and _ wildcards.'));
    mode.textContent = 'HELP'; count.textContent = '';
  }
  function navigateTo(id, section) {
    const target = $(id) || $(section); if (!target) return;
    let ancestor = target.parentElement; while (ancestor) { if (ancestor.tagName === 'DETAILS') ancestor.open = true; ancestor = ancestor.parentElement; }
    jumping = true; closeSearch();
    requestAnimationFrame(() => { target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' }); target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); target.classList.add('focus-target'); setTimeout(() => target.classList.remove('focus-target'), 2200); });
  }
  function renderResult(result) {
    if (result.help) return renderHelp(); if (result.clear) return clearResults();
    output.replaceChildren(); mode.textContent = result.mode.toUpperCase(); count.textContent = result.error ? 'Query error' : result.count > 8 ? `8 of ${result.count} results` : `${result.count} result${result.count === 1 ? '' : 's'}`;
    if (result.error) { output.append(make('p', 'query-error', result.error)); const help = make('button', 'inline-help', 'See supported queries'); help.type = 'button'; help.addEventListener('click', renderHelp); output.append(help); return; }
    output.append(make('p', 'result-answer', result.answer));
    if (!result.results.length) { const help = make('button', 'inline-help', 'See supported queries'); help.type = 'button'; help.addEventListener('click', renderHelp); output.append(help); return; }
    const list = make('div', 'result-list');
    result.results.forEach(row => { const card = make('div', 'result-card'), top = make('div', 'result-top'); top.append(make('strong', '', row.title), make('span', 'result-type', engine.sectionNames[row.section] || 'Portfolio')); card.append(top); const description = result.columns ? result.columns.map(key => `${key}: ${row[key] || '—'}`).join(' · ') : row.description || row.value || ''; card.append(make('p', 'result-description', description)); const link = make('button', 'result-link', 'View in portfolio ↗'); link.type = 'button'; link.addEventListener('click', () => navigateTo(row.id, row.section)); card.append(link); list.append(card); });
    output.append(list);
  }
  function runQuery(value) { input.value = value; if (value.trim()) { if (history.at(-1) !== value.trim()) history.push(value.trim()); history = history.slice(-30); historyIndex = history.length; } renderResult(engine.query(value)); }
  $('searchForm').addEventListener('submit', event => { event.preventDefault(); runQuery(input.value); });
  document.querySelectorAll('[data-query]').forEach(button => button.addEventListener('click', () => { runQuery(button.dataset.query); input.focus(); }));
  $('queryHelp').addEventListener('click', renderHelp); $('queryClear').addEventListener('click', clearResults);
  input.addEventListener('keydown', event => { if (event.key === 'ArrowUp' && history.length) { event.preventDefault(); historyIndex = Math.max(0, historyIndex - 1); input.value = history[historyIndex]; } if (event.key === 'ArrowDown' && history.length) { event.preventDefault(); historyIndex = Math.min(history.length, historyIndex + 1); input.value = historyIndex === history.length ? '' : history[historyIndex]; } });

  const navLinks = [...document.querySelectorAll('.top-nav a')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealItems = [...document.querySelectorAll('.section-intro,.project,.experience-row,.skill-group,.activity-card,.repo-list,.credentials-grid,.contact-section > *,.proof-strip,.founder-section,.delivery-approach,.personal-feature')];
    revealItems.forEach(item => item.classList.add('reveal'));
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
    revealItems.forEach(item => observer.observe(item)); document.documentElement.classList.add('reveal-ready');
  }
  // Section position remains reliable for long work stories and the mobile profile above the hero.
  const navTargets = navLinks.map(link => document.querySelector(link.hash));
  function setActiveNavigation(id) {
    navLinks.forEach(link => { const active = link.hash === '#' + id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }
  function updateNavigation() {
    const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
    let active = navTargets[0];
    navTargets.forEach(target => { if (target && target.getBoundingClientRect().top <= headerBottom + 80) active = target; });
    if (active) setActiveNavigation(active.id);
  }
  let navigationFrame = false;
  function queueNavigationUpdate() {
    if (navigationFrame) return;
    navigationFrame = true;
    requestAnimationFrame(() => { navigationFrame = false; updateNavigation(); });
  }
  window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
  window.addEventListener('resize', queueNavigationUpdate);
  navLinks.forEach(link => link.addEventListener('click', () => setActiveNavigation(link.hash.slice(1))));
  updateNavigation();
  $('copyEmail').addEventListener('click', async () => { try { await navigator.clipboard.writeText('ghanemkhal@gmail.com'); $('copyStatus').textContent = 'Copied.'; } catch { $('copyStatus').textContent = 'Copy unavailable. Address: ghanemkhal@gmail.com'; } });

})();
