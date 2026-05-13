"use strict";

export function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(value));
}

export function formatNumber(value) {
  const number = Number(value || 0);

  return new Intl.NumberFormat("es-AR").format(number);
}