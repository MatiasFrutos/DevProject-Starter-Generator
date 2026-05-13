"use strict";

const routes = new Map();

export function registerRoute(path, handler) {
  routes.set(path, handler);
}

export function goTo(path) {
  window.location.hash = path;
}

export function startRouter(fallbackPath = "/") {
  window.addEventListener("hashchange", () => {
    resolveRoute(fallbackPath);
  });

  resolveRoute(fallbackPath);
}

function resolveRoute(fallbackPath) {
  const path = window.location.hash.replace("#", "") || fallbackPath;
  const handler = routes.get(path) || routes.get(fallbackPath);

  if (typeof handler === "function") {
    handler();
  }
}