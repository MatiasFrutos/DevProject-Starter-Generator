"use strict";

let toastTimer = null;

export function showToast(message, type = "info") {
  const previousToast = document.querySelector(".dpsg-toast");

  if (previousToast) {
    previousToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = `dpsg-toast dpsg-toast--${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");

    setTimeout(() => {
      toast.remove();
    }, 220);
  }, 2600);
}