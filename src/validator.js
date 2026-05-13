"use strict";

export function isValidProjectName(value) {
  const normalized = String(value || "").trim();

  if (!normalized) {
    return false;
  }

  return /^[a-zA-Z0-9-_ ]+$/.test(normalized);
}

export function assertValidProjectName(value) {
  if (!isValidProjectName(value)) {
    throw new Error("Invalid project name. Use only letters, numbers, spaces, hyphens or underscores.");
  }
}