# DevProject Starter Generator

DevProject Starter Generator is a lightweight CLI tool for generating clean frontend, backend and fullstack project starters from the terminal.

It helps developers create organized project structures quickly using reusable templates for modern JavaScript applications.

## Overview

This project works like a small project scaffolder.

Instead of manually creating folders, files, base configuration and starter code every time, you can run one command and generate a ready-to-use starter project.

## Available templates

```txt
frontend    -> Vanilla JavaScript frontend starter
backend     -> Node.js + Express backend API starter
fullstack   -> Vanilla JavaScript frontend + Express backend starter
erp-module  -> ERP/CRM module scaffold
```

## CLI command

```bash
dpsg
```

## Requirements

```txt
Node.js 18+
npm
Git
```

## Installation for local development

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/devproject-starter-generator.git
```

Enter the project folder:

```bash
cd devproject-starter-generator
```

Install dependencies:

```bash
npm install
```

## Run locally

List available templates:

```bash
node ./bin/index.js list
```

Create a frontend project:

```bash
node ./bin/index.js create frontend demo-front
```

Create a backend project:

```bash
node ./bin/index.js create backend demo-api
```

Create a fullstack project:

```bash
node ./bin/index.js create fullstack demo-fullstack
```

Create an ERP module scaffold:

```bash
node ./bin/index.js create erp-module clientes
```

## Optional local global command

You can register the CLI locally using:

```bash
npm link
```

Then you can use:

```bash
dpsg list
dpsg create frontend my-frontend
dpsg create backend my-api
dpsg create fullstack my-system
dpsg create erp-module proveedores
```

## Project structure

```txt
devproject-starter-generator/
  bin/
    index.js
  src/
    cli.js
    generator.js
    logger.js
    naming.js
    template-registry.js
    validator.js
    utils/
      files.js
      paths.js
  templates/
    frontend/
    backend/
    fullstack/
    erp-module/
  package.json
  README.md
```

## How it works

The CLI receives a template name and a project name.

Example:

```bash
dpsg create backend demo-api
```

Then it:

```txt
1. Validates the selected template.
2. Normalizes the project name.
3. Copies the selected template folder.
4. Replaces dynamic tokens such as __PROJECT_NAME__.
5. Creates the final project folder.
```

## Dynamic tokens

Templates can use tokens that are replaced during generation.

```txt
__PROJECT_NAME__   -> generated project name
__TEMPLATE__       -> selected template name
__MODULE_NAME__    -> module folder/name
__MODULE_CAMEL__   -> camelCase module name
__MODULE_PASCAL__  -> PascalCase module name
__MODULE_TITLE__   -> readable module title
```

Example:

```txt
__PROJECT_NAME__
```

becomes:

```txt
demo-api
```

## Generated frontend starter

The frontend template includes:

```txt
HTML entry point
Vanilla JavaScript app
Component structure
Base styles
Theme styles
Core utilities
Reusable helpers
```

## Generated backend starter

The backend template includes:

```txt
Express server
CORS configuration
Environment config
Health endpoint
Routes folder
Controllers folder
Services folder
Middlewares folder
Utilities folder
```

## Backend healthcheck

After creating and running a backend project:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000/api
```

or:

```txt
http://localhost:3000/api/health
```

## Scripts

```bash
npm run start
```

Runs the CLI entry file.

```bash
npm run dev
```

Runs the CLI entry file in development mode.

```bash
npm run test:create:frontend
```

Creates a frontend test project.

```bash
npm run test:create:backend
```

Creates a backend test project.

```bash
npm run test:create:fullstack
```

Creates a fullstack test project.

## Clean generated demos

PowerShell:

```powershell
Remove-Item -Recurse -Force .\demo-front -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\demo-api -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\demo-fullstack -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .\prueba-cli-front -ErrorAction SilentlyContinue
```

Bash:

```bash
rm -rf demo-front demo-api demo-fullstack prueba-cli-front
```

## Roadmap

```txt
Add React starter
Add Angular starter
Add PostgreSQL starter
Add JWT auth template
Add Docker template
Add interactive prompts
Add custom template configuration
Publish package to npm
```

## Author

Developed by Matias Frutos.

## License

MIT
