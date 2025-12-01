fetch('/partials/header.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('#header-placeholder').innerHTML = html;

    // Attach hamburger toggle logic after header is injected
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle?.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Dispatch event so other scripts can hook in if needed
    document.dispatchEvent(new Event('headerReady'));
  });
