// js/inject-modal.js
fetch('partials/modal.html') // use relative path if index.html is at root
  .then((res) => res.text())
  .then((html) => {
    const host = document.querySelector('#modal-placeholder');
    host.innerHTML = html;
    // Dispatch after DOM is updated; a tiny timeout avoids microtask ordering surprises
    setTimeout(() => {
      document.dispatchEvent(new Event('modalReady'));
    }, 0);
  })
  .catch((err) => {
    alert("Failed to inject modal");
    console.error("Failed to inject modal:", err);
  });
