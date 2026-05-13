"use strict";

import { showToast } from "../components/toast.js";

export function renderHomePage(options = {}) {
  const appName = options.appName || "__PROJECT_NAME__";

  return `
    <main class="dpsg-shell">
      <section class="dpsg-hero">
        <div class="dpsg-hero__content">
          <p class="dpsg-eyebrow">DevProject Starter Generator</p>

          <h1>${appName}</h1>

          <p>
            Frontend starter ready to build clean, modular and scalable interfaces.
          </p>

          <div class="dpsg-actions">
            <button type="button" class="dpsg-btn dpsg-btn--primary" data-home-action="start">
              Start building
            </button>

            <button type="button" class="dpsg-btn dpsg-btn--ghost" data-home-action="structure">
              View structure
            </button>
          </div>
        </div>

        <aside class="dpsg-panel">
          <span class="dpsg-panel__label">Generated stack</span>

          <ul>
            <li>HTML</li>
            <li>CSS modular</li>
            <li>Vanilla JavaScript</li>
            <li>Component-based structure</li>
          </ul>
        </aside>
      </section>

      <section class="dpsg-section" id="structure">
        <div>
          <p class="dpsg-eyebrow">Structure</p>
          <h2>Clean project layout</h2>
        </div>

        <pre class="dpsg-code">src/
  main.js
  app.js
  core/
    api.js
    router.js
    storage.js
  components/
    navbar.js
    footer.js
    toast.js
  pages/
    home.page.js
  styles/
    base.css
    theme.css
  utils/
    dom.js
    format.js</pre>
      </section>
    </main>
  `;
}

export function bindHomePageEvents() {
  const startButton = document.querySelector("[data-home-action='start']");
  const structureButton = document.querySelector("[data-home-action='structure']");
  const structureSection = document.querySelector("#structure");

  if (startButton) {
    startButton.addEventListener("click", () => {
      showToast("Project ready to build.", "success");
    });
  }

  if (structureButton && structureSection) {
    structureButton.addEventListener("click", () => {
      structureSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}