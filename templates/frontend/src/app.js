"use strict";

export function startApp() {
  const app = document.querySelector("#app");

  if (!app) {
    throw new Error("No se encontró #app.");
  }

  app.innerHTML = `
    <main class="starter-shell">
      <section class="starter-card">
        <p class="starter-eyebrow">DevProject Starter Generator</p>

        <h1>__PROJECT_NAME__</h1>

        <p>
          Frontend starter generado correctamente. Ya podés empezar a construir tu proyecto.
        </p>

        <button type="button" class="starter-btn" data-action="test">
          Probar interacción
        </button>
      </section>
    </main>
  `;

  const button = document.querySelector("[data-action='test']");

  if (button) {
    button.addEventListener("click", () => {
      alert("Template funcionando correctamente.");
    });
  }
}