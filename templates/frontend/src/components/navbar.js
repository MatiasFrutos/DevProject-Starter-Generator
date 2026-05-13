"use strict";

export function renderNavbar(options = {}) {
  const appName = options.appName || "__PROJECT_NAME__";
  const active = options.active || "home";

  return `
    <header class="dpsg-navbar">
      <button type="button" class="dpsg-navbar__brand" data-nav-action="home">
        <span class="dpsg-navbar__logo">D</span>

        <span class="dpsg-navbar__brand-text">
          <strong>${appName}</strong>
          <small>Frontend Starter</small>
        </span>
      </button>

      <nav class="dpsg-navbar__nav" aria-label="Main navigation">
        <button
          type="button"
          class="${active === "home" ? "is-active" : ""}"
          data-nav-action="home"
        >
          Home
        </button>

        <button
          type="button"
          data-nav-action="docs"
        >
          Docs
        </button>
      </nav>
    </header>
  `;
}

export function bindNavbarEvents() {
  const buttons = document.querySelectorAll("[data-nav-action]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.navAction;

      if (action === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      if (action === "docs") {
        console.log("Docs action clicked.");
      }
    });
  });
}