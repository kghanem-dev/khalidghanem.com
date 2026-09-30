(function () {
  'use strict';
  const currentYear = String(new Date().getUTCFullYear());
  const endpoint = 'https://github-contributions-api.jogruber.de/v4/kghanem-dev?y=' + currentYear;
  const charts = document.getElementById('activityCalendars');
  const summary = document.getElementById('activitySummary');
  const source = document.getElementById('activitySource');
  const detail = document.getElementById('activityDayDetail');
  const refresh = document.getElementById('activityRefresh');
  if (!charts) return;
  const today = new Date().toISOString().slice(0, 10);
  const format = new Intl.NumberFormat('en-US');
  const dateText = value => new Date(value + 'T12:00:00Z').toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' });
  const create = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined) el.textContent = text; return el; };
  let history = null;
  let lastSelected = null;
  let lastLoadedAt = null;

  // Validate public data before rendering; never treat missing dates as zero activity.
  function validate(raw) {
    if (!raw || !Array.isArray(raw.contributions) || !raw.total || typeof raw.total !== 'object') throw Error('Invalid calendar response');
    if (raw.contributions.length > 40000) throw Error('Calendar response too large');
    const seen = new Set();
    const days = raw.contributions.map(day => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isInteger(day.count) || day.count < 0 || !Number.isInteger(day.level) || day.level < 0 || day.level > 4 || seen.has(day.date)) throw Error('Invalid contribution day');
      if (new Date(day.date + 'T12:00:00Z').toISOString().slice(0, 10) !== day.date) throw Error('Invalid date');
      seen.add(day.date);
      return { date: day.date, count: day.count, level: day.level };
    }).filter(day => day.date <= today && day.date.startsWith(currentYear)).sort((a, b) => a.date.localeCompare(b.date));
    if (!days.length) throw Error('Current-year contribution history unavailable');
    return { days };
  }

  function describe(day, button) {
    detail.textContent = `${format.format(day.count)} contribution${day.count === 1 ? '' : 's'} on ${dateText(day.date)}.`;
    if (lastSelected) lastSelected.removeAttribute('data-selected');
    button.dataset.selected = 'true';
    lastSelected = button;
  }

  function makeCalendar(year) {
    const days = history.days.filter(day => day.date.startsWith(year));
    const section = create('section', 'contribution-year');
    const total = days.reduce((sum, day) => sum + day.count, 0);
    const heading = create('h3', '', `${year} · ${format.format(total)} contribution${total === 1 ? '' : 's'}`);
    heading.id = 'contribution-year-' + year;
    section.append(heading);
    const scroll = create('div', 'contribution-scroll');
    const grid = create('div', 'contribution-grid');
    grid.setAttribute('role', 'group');
    grid.setAttribute('aria-labelledby', heading.id);
    const yearStart = new Date(year + '-01-01T12:00:00Z');
    const weekdayOffset = yearStart.getUTCDay();
    const buttons = [];
    let previousMonth = -1;
    [['Mon', 3], ['Wed', 5], ['Fri', 7]].forEach(([label, row]) => {
      const el = create('span', 'contribution-weekday', label); el.style.gridColumn = 1; el.style.gridRow = row; grid.append(el);
    });
    days.forEach((day, index) => {
      const date = new Date(day.date + 'T12:00:00Z');
      const dayOffset = Math.round((date - yearStart) / 86400000);
      const column = Math.floor((dayOffset + weekdayOffset) / 7) + 2;
      if (date.getUTCMonth() !== previousMonth) {
        const month = create('span', 'contribution-month', date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }));
        month.style.gridColumn = column; month.style.gridRow = 1; grid.append(month); previousMonth = date.getUTCMonth();
      }
      const button = create('button', 'contribution-day');
      button.type = 'button'; button.tabIndex = index === days.length - 1 ? 0 : -1;
      button.dataset.level = day.level; button.dataset.date = day.date;
      button.style.gridColumn = column; button.style.gridRow = date.getUTCDay() + 2;
      const label = `${format.format(day.count)} contribution${day.count === 1 ? '' : 's'} on ${dateText(day.date)}`;
      button.setAttribute('aria-label', label); button.title = label;
      button.addEventListener('mouseenter', () => describe(day, button));
      button.addEventListener('focus', () => describe(day, button));
      button.addEventListener('click', () => { buttons.forEach(b => b.tabIndex = -1); button.tabIndex = 0; describe(day, button); });
      button.addEventListener('keydown', event => {
        const delta = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 }[event.key];
        if (delta === undefined && event.key !== 'Home' && event.key !== 'End') return;
        event.preventDefault();
        const target = event.key === 'Home' ? 0 : event.key === 'End' ? days.length - 1 : Math.max(0, Math.min(days.length - 1, index + delta));
        buttons.forEach(b => b.tabIndex = -1); buttons[target].tabIndex = 0; buttons[target].focus();
      });
      buttons.push(button); grid.append(button);
    });
    scroll.append(grid); section.append(scroll);
    return section;
  }

  function render() {
    const total = history.days.reduce((sum, day) => sum + day.count, 0);
    summary.textContent = `${format.format(total)} contribution${total === 1 ? '' : 's'} in ${currentYear}`;
    charts.replaceChildren(makeCalendar(currentYear));
    lastSelected = null;
    detail.textContent = 'Hover or tap a day for details. Use arrow keys when a day is focused.';
  }

  function load(raw, fetchedAt, live) {
    const next = validate(raw);
    const unchanged = history && history.days.length === next.days.length && history.days.every((day, index) => day.date === next.days[index].date && day.count === next.days[index].count && day.level === next.days[index].level);
    history = next;
    lastLoadedAt = fetchedAt;
    if (unchanged) {
      source.textContent = `${live ? "Public GitHub data refreshed" : "Saved public GitHub data"} ${dateText(fetchedAt.slice(0, 10))}. Source may cache results for up to an hour.`;
      return;
    }
    render();
    source.textContent = `${live ? 'Public GitHub data refreshed' : 'Saved public GitHub data'} ${dateText(fetchedAt.slice(0, 10))}. Source may cache results for up to an hour.`;
  }

  async function refreshHistory() {
    refresh.disabled = true; refresh.textContent = 'Refreshing…';
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(endpoint, { signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer' });
      if (!response.ok) throw Error('Contribution service unavailable');
      load(await response.json(), new Date().toISOString(), true);
    } catch {
      if (history) source.textContent = `Saved public GitHub data from ${dateText(lastLoadedAt.slice(0, 10))}. Live refresh unavailable; the calendar remains interactive.`;
      else { source.textContent = 'Contribution history is unavailable. View GitHub or the original snapshot below.'; document.getElementById('activityOriginal').open = true; }
    } finally { clearTimeout(timeout); refresh.disabled = false; refresh.textContent = 'Refresh'; }
  }
  refresh.addEventListener('click', refreshHistory);
  try { load(window.PortfolioContributions, window.PortfolioContributions.fetchedAt, false); } catch { source.textContent = 'Loading current-year contribution history…'; }
  refreshHistory();
})();
