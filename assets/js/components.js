const PAGES = [
  { href: 'index.html', label: 'Home' },
  { href: 'pages/what-we-offer.html', label: 'What We Offer' },
  { href: 'pages/team.html', label: 'Team' },
  { href: 'pages/testimonials.html', label: 'Testimonials' },
  { href: 'pages/resources.html', label: 'Resources' },
  { href: 'pages/book.html', label: 'Book' },
  { href: 'pages/contact.html', label: 'Contact' }
];

function resolvePath(path) {
  return location.pathname.includes('/pages/') ? `../${path}` : path;
}

function renderShell() {
  const current = location.pathname.split('/').pop() || 'index.html';
  const navItems = PAGES.map((page) => {
    const here = page.href.split('/').pop() === current;
    return `<li><a href="${resolvePath(page.href)}" ${here ? 'aria-current="page"' : ''}>${page.label}</a></li>`;
  }).join('');

  const header = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="${resolvePath('index.html')}">Kibble Ferrier Consulting</a>
        <nav class="site-nav" aria-label="Main">
          <button class="nav-toggle" aria-expanded="false" aria-controls="menu">Menu</button>
          <ul class="nav-list" id="menu">${navItems}</ul>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <strong>Kibble Ferrier Consulting</strong>
        <p>Calm, practical support for adults, families, and professionals.</p>
        <div class="footer-links">
          <a href="${resolvePath('pages/book.html')}">Book</a>
          <a href="${resolvePath('pages/resources.html')}">Resources</a>
          <a href="${resolvePath('pages/contact.html')}">Contact</a>
        </div>
        <small>© 2026 Kibble Ferrier Consulting. Prototype concept.</small>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-list');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

renderShell();
