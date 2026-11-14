// ---------- SIDEBAR / PAGE ROUTER ----------
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('sideBackdrop');
const menuToggle = document.getElementById('menuToggle');
const scrollArea = document.getElementById('scrollArea');
const sideLinks = document.querySelectorAll('.side-nav a[data-page]');
const pages = document.querySelectorAll('.page');

const PAGE_TITLES = { home: 'Home', menu: 'The Steaks', sides: 'The Sides', story: 'Our Story', visit: 'Visit Us' };

function closeSidebar() {
  sidebar.classList.remove('open');
  backdrop.classList.remove('show');
  menuToggle.textContent = '☰';
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  backdrop.classList.toggle('show', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
backdrop.addEventListener('click', closeSidebar);

function goToPage(name, updateHash = true) {
  if (!PAGE_TITLES[name]) name = 'home';
  pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + name));
  sideLinks.forEach(l => l.classList.toggle('active', l.dataset.page === name));
  scrollArea.scrollTop = 0;
  document.title = 'Sunset & Sear · ' + PAGE_TITLES[name];
  if (updateHash) {
    try { history.replaceState(null, '', '#' + name); } catch (e) {}
  }
  closeSidebar();
}

document.querySelectorAll('a[data-page]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    goToPage(link.dataset.page);
  });
});

const startPage = (location.hash || '#home').replace('#', '');
goToPage(PAGE_TITLES[startPage] ? startPage : 'home', false);

// Scroll reveal animations
const revealEls = document.querySelectorAll(
  '.section-top, .menu-grid .steak-card, .sides-grid .side-card, .story-image, .story-copy, .visit > div, .sunset-banner > *, footer'
);

document.querySelectorAll('.menu-grid').forEach(grid => {
  [...grid.children].forEach((card, i) => card.style.setProperty('--rd', `${(i % 3) * 90}ms`));
});
document.querySelectorAll('.sides-grid').forEach(grid => {
  [...grid.children].forEach((card, i) => card.style.setProperty('--rd', `${(i % 4) * 80}ms`));
});
document.querySelectorAll('.sunset-banner').forEach(banner => {
  [...banner.children].forEach((el, i) => el.style.setProperty('--rd', `${i * 110}ms`));
});

const revealIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

revealEls.forEach(el => {
  el.classList.add('reveal');
  revealIO.observe(el);
});

