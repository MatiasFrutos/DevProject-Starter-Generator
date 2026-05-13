"use strict";

import chalk from "chalk";

export function logTitle(message) {
  console.log("");
  console.log(chalk.bold.cyan(message));
}

export function logInfo(message) {
  console.log(chalk.blue(message));
}

export function logSuccess(message) {
  console.log(chalk.green(`✔ ${message}`));
}

export function logError(message) {
  console.log(chalk.red(`✖ ${message}`));
}

export function logText(message) {
  console.log(chalk.white(`  ${message}`));
}