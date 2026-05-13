"use strict";

import path from "path";
import fs from "fs-extra";
import ora from "ora";

import { fileURLToPath } from "url";

import {
  normalizeProjectName,
  toCamelCase,
  toPascalCase,
  toTitleCase
} from "./naming.js";

import { logError, logSuccess, logText, logTitle } from "./logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(options) {
  const template = String(options.template || "").trim();
  const projectName = normalizeProjectName(options.projectName);

  if (!template) {
    throw new Error("Template is required.");
  }

  if (!projectName) {
    throw new Error("Project name is required.");
  }

  const rootDir = path.resolve(__dirname, "..");
  const templateDir = path.join(rootDir, "templates", template);
  const targetDir = path.join(process.cwd(), projectName);

  const templateExists = await fs.pathExists(templateDir);

  if (!templateExists) {
    throw new Error(`Template "${template}" does not exist.`);
  }

  const targetExists = await fs.pathExists(targetDir);

  if (targetExists) {
    throw new Error(`Folder "${projectName}" already exists.`);
  }

  const spinner = ora(`Creating ${template} project "${projectName}"...`).start();

  try {
    await fs.copy(templateDir, targetDir);

    await renameTokenFiles(targetDir, projectName);

    await replaceProjectTokens(targetDir, {
      projectName,
      template,
      moduleName: projectName,
      moduleCamel: toCamelCase(projectName),
      modulePascal: toPascalCase(projectName),
      moduleTitle: toTitleCase(projectName)
    });

    spinner.succeed("Project created successfully.");

    printSuccessMessage({
      projectName,
      template
    });
  } catch (error) {
    spinner.fail("Project creation failed.");

    await fs.remove(targetDir).catch(() => null);

    logError(error.message || "Could not create project.");

    throw error;
  }
}

async function renameTokenFiles(targetDir, projectName) {
  const files = await getAllFiles(targetDir);

  await Promise.all(
    files.map(async (filePath) => {
      const dirname = path.dirname(filePath);
      const basename = path.basename(filePath);

      if (!basename.includes("__MODULE_NAME__")) {
        return;
      }

      const newBasename = basename.replaceAll("__MODULE_NAME__", projectName);
      const newPath = path.join(dirname, newBasename);

      await fs.rename(filePath, newPath);
    })
  );
}

async function replaceProjectTokens(targetDir, context) {
  const files = await getAllFiles(targetDir);

  await Promise.all(
    files.map(async (filePath) => {
      const buffer = await fs.readFile(filePath);

      if (isBinary(buffer)) {
        return;
      }

      const content = buffer.toString("utf8");

      const replaced = content
        .replaceAll("__PROJECT_NAME__", context.projectName)
        .replaceAll("__TEMPLATE__", context.template)
        .replaceAll("__MODULE_NAME__", context.moduleName)
        .replaceAll("__MODULE_CAMEL__", context.moduleCamel)
        .replaceAll("__MODULE_PASCAL__", context.modulePascal)
        .replaceAll("__MODULE_TITLE__", context.moduleTitle);

      if (replaced !== content) {
        await fs.writeFile(filePath, replaced, "utf8");
      }
    })
  );
}

async function getAllFiles(dir) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getAllFiles(fullPath);
      }

      return fullPath;
    })
  );

  return files.flat();
}

function isBinary(buffer) {
  const sampleSize = Math.min(buffer.length, 8000);

  for (let i = 0; i < sampleSize; i += 1) {
    if (buffer[i] === 0) {
      return true;
    }
  }

  return false;
}

function printSuccessMessage({ projectName, template }) {
  logTitle("Next steps");

  logText(`cd ${projectName}`);

  if (template === "frontend") {
    logText("npm install");
    logText("npm run dev");
  }

  if (template === "backend") {
    logText("npm install");
    logText("npm run dev");
  }

  if (template === "fullstack") {
    logText("cd frontend && npm install");
    logText("cd ../backend && npm install");
  }

  if (template === "erp-module") {
    logText("Copy the generated module files into your ERP/CRM project.");
  }

  logSuccess("Done. Starter ready for development.");
}