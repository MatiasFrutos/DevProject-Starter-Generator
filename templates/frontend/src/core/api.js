"use strict";

const DEFAULT_API_URL = "http://localhost:3000/api";

export async function apiFetch(path, options = {}) {
  const baseUrl = options.baseUrl || DEFAULT_API_URL;

  const response = await fetch(`${baseUrl}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof data === "object" && data !== null
      ? data.message || data.error || "Request failed"
      : "Request failed";

    throw new Error(message);
  }

  return data;
}