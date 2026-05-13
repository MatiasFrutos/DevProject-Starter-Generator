"use strict";

import path from "path";
import { fileURLToPath } from "url";

export function getDirname(importMetaUrl) {
  const filename = fileURLToPath(importMetaUrl);

  return path.dirname(filename);
}

export function resolveFromRoot(rootDir, ...segments) {
  return path.resolve(rootDir, ...segments);
}