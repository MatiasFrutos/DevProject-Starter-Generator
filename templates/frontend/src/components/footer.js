"use strict";

export function renderFooter(options = {}) {
  const appName = options.appName || "__PROJECT_NAME__";
  const year = new Date().getFullYear();

  return `
    <footer class="dpsg-footer">
      <span>${appName}</span>
      <span>${year}</span>
    </footer>
  `;
}