// /js/inject-footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <p>&copy; 2025 Old Pros. All rights reserved. Email Us: info@old-pros.co.uk</p>
        <p>Flipping the script on age bias. Because experience isn’t old news — it’s your next advantage.</p>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
