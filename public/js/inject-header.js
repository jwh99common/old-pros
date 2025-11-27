fetch('/partials/header.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('#header-placeholder').innerHTML = html;

    // Dispatch event so other scripts can hook in if needed
    document.dispatchEvent(new Event('headerReady'));
  });

  