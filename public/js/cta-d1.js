(function () {
  function bindCTAD1() {
    const modal = document.getElementById("cta-modal");
    const form = document.getElementById("cta-form");
    const typeField = document.getElementById("cta-type");
    const closeBtn = document.getElementById("cta-close");

    if (!modal || !form || !typeField || !closeBtn) return false;

    // Submit handler — send to D1 Worker
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: data
        });

        if (res.ok) {
          alert("Thanks for reaching out! We'll be in touch.");
          form.reset();
          modal.classList.add("hidden");
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (err) {
        alert("Network error. Please try again later.");
      }
    });

    // Hero CTA clicks (delegated)
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "cta-professional") {
        typeField.value = "professional";
        modal.classList.remove("hidden");
      }
      if (e.target && e.target.id === "cta-business") {
        typeField.value = "business";
        modal.classList.remove("hidden");
      }
      if (e.target && e.target.id === "cta-close") {
        modal.classList.add("hidden");
      }
    });

    return true;
  }

  // Try immediate bind first
  if (bindCTAD1()) return;

  // Fallback: wait for injected modal
  document.addEventListener("modalReady", () => {
    bindCTAD1();
  });

  const placeholder = document.getElementById("modal-placeholder");
  if (placeholder) {
    const mo = new MutationObserver(() => {
      if (bindCTAD1()) mo.disconnect();
    });
    mo.observe(placeholder, { childList: true, subtree: true });
  }
})();
