"use strict";

import { Command } from "commander";
import inquirer from "inquirer";

import { createProject } from "./generator.js";
import { TEMPLATE_REGISTRY } from "./template-registry.js";
import { logError, logInfo, logTitle } from "./logger.js";

const VALID_TEMPLATES = TEMPLATE_REGISTRY.map((template) => template.key);

export function runCli() {
  const program = new Command();

  program
    .name("dpsg")
    .description("DevProject Starter Generator - Generate clean project starters from the terminal.")
    .version("1.0.0");

  program
    .command("create")
    .description("Create a new project starter.")
    .argument("[template]", "Project template: frontend, backend, fullstack, erp-module")
    .argument("[projectName]", "Project folder name")
    .action(async (template, projectName) => {
      try {
        const answers = await resolveCreateOptions(template, projectName);

        await createProject({
          template: answers.template,
          projectName: answers.projectName
        });
      } catch (error) {
        logError(error.message || "Unexpected error while creating the project.");
        process.exit(1);
      }
    });

  program
    .command("list")
    .description("List available templates.")
    .action(() => {
      logTitle("Available templates");

      TEMPLATE_REGISTRY.forEach((template) => {
        logInfo(`- ${template.key}: ${template.name}`);
      });
    });

  program.action(async () => {
    try {
      const answers = await resolveCreateOptions();

      await createProject({
        template: answers.template,
        projectName: answers.projectName
      });
    } catch (error) {
      logError(error.message || "Unexpected error while running the CLI.");
      process.exit(1);
    }
  });

  program.parse(process.argv);
}

async function resolveCreateOptions(template, projectName) {
  const questions = [];

  if (!template) {
    questions.push({
      type: "list",
      name: "template",
      message: "What do you want to create?",
      choices: TEMPLATE_REGISTRY.map((item) => {
        return {
          name: `${item.name} - ${item.description}`,
          value: item.key
        };
      })
    });
  }

  if (!projectName) {
    questions.push({
      type: "input",
      name: "projectName",
      message: "Project name:",
      validate(value) {
        const normalized = String(value || "").trim();

        if (!normalized) {
          return "Project name is required.";
        }

        if (!/^[a-zA-Z0-9-_ ]+$/.test(normalized)) {
          return "Use only letters, numbers, spaces, hyphens or underscores.";
        }

        return true;
      }
    });
  }

  const answers = questions.length ? await inquirer.prompt(questions) : {};

  const resolvedTemplate = template || answers.template;
  const resolvedProjectName = projectName || answers.projectName;

  if (!VALID_TEMPLATES.includes(resolvedTemplate)) {
    throw new Error(
      `Invalid template "${resolvedTemplate}". Available templates: ${VALID_TEMPLATES.join(", ")}.`
    );
  }

  return {
    template: resolvedTemplate,
    projectName: resolvedProjectName
  };
}