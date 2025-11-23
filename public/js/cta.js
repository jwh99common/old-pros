// js/cta.js
(function () {
  // Try to bind immediately if modal is already present
  function bindCTA() {
    const modal = document.getElementById("cta-modal");
    const form = document.getElementById("cta-form");
    const typeField = document.getElementById("cta-type");
    const closeBtn = document.getElementById("cta-close");

    if (!modal || !form || !typeField || !closeBtn) return false;

    // Submit handler — only submits via the submit button
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      alert(
        `CTA submission:\n\n` +
        `Name: ${data.name || "(none)"}\n` +
        `Email: ${data.email || "(none)"}\n` +
        `Phone: ${data.phone || "(none)"}\n` +
        `Type: ${data.type || "(none)"}\n` +
        `Note: ${data.note || "(none)"}`
      );
      form.reset();
      modal.classList.add("hidden");
    });

    // Hero CTA clicks (delegated)
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "cta-professional") {
        typeField.value = "professional";
        modal.classList.remove("hidden");
        //alert("Professional CTA clicked");
      }
      if (e.target && e.target.id === "cta-business") {
        typeField.value = "business";
        modal.classList.remove("hidden");
        //alert("Business CTA clicked");
      }
      if (e.target && e.target.id === "cta-close") {
        modal.classList.add("hidden");
        //alert("Modal closed");
      }
    });

    //alert("CTA.js bound to modal");
    return true;
  }

  // Try immediate bind first
  if (bindCTA()) return;

  // If immediate bind failed, listen for injected modal signal
  document.addEventListener("modalReady", () => {
    bindCTA();
  });

  // Final safety net: observe the placeholder for changes (in case the event is missed)
  const placeholder = document.getElementById("modal-placeholder");
  if (placeholder) {
    const mo = new MutationObserver(() => {
      if (bindCTA()) mo.disconnect();
    });
    mo.observe(placeholder, { childList: true, subtree: true });
  }
})();
