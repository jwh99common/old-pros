fetch('/partials/hero.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('#hero-placeholder').innerHTML = html;
    document.dispatchEvent(new Event('heroReady'));
  });
