(function () {
  function bindCTAFormspree() {
    const modal = document.getElementById("cta-modal");
    const form = document.getElementById("cta-form");
    const typeField = document.getElementById("cta-type");
    const closeBtn = document.getElementById("cta-close");

    if (!modal || !form || !typeField || !closeBtn) return false;

    // Submit handler — send to Formspree
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const res = await fetch("https://formspree.io/f/mnnyakkv", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });

        if (res.ok) {
          alert("Thanks for reaching out! We'll be in touch.");
          form.reset();
          modal.classList.add("hidden");
        } else {
          alert("Submission failed. Please try again.", res.ok);
        }
      } catch (err) {
        alert("Network error. Please try again later.", res.ok);
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
  if (bindCTAFormspree()) return;

  // Fallback: wait for injected modal
  document.addEventListener("modalReady", () => {
    bindCTAFormspree();
  });

  const placeholder = document.getElementById("modal-placeholder");
  if (placeholder) {
    const mo = new MutationObserver(() => {
      if (bindCTAFormspree()) mo.disconnect();
    });
    mo.observe(placeholder, { childList: true, subtree: true });
  }
})();
