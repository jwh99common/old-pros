fetch('/partials/footer.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('#footer-placeholder').innerHTML = html;

    // Dispatch event so other scripts can hook in if needed
    document.dispatchEvent(new Event('footerReady'));
  });
