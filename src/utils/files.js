"use strict";

import fs from "fs-extra";

export async function pathExists(targetPath) {
  return fs.pathExists(targetPath);
}

export async function ensureDir(targetPath) {
  return fs.ensureDir(targetPath);
}

export async function copyDir(sourcePath, targetPath) {
  return fs.copy(sourcePath, targetPath);
}

export async function removeDir(targetPath) {
  return fs.remove(targetPath);
}