# ⚡ DevProject Starter Generator

<p align="center">
  <strong>A lightweight CLI tool to generate clean frontend, backend and fullstack project starters in seconds.</strong>
</p>

<p align="center">
  <span>🚀 Fast setup</span> ·
  <span>🧩 Reusable templates</span> ·
  <span>🛠️ Developer friendly</span> ·
  <span>📦 CLI powered</span>
</p>

---

## ✨ Overview

**DevProject Starter Generator** is a small but powerful project scaffolder built for developers who want to start faster and keep their project structure clean from day one.

Instead of manually creating folders, files, base configuration and starter code every time, you can generate a ready-to-use project with a single command.

Think of it as a simple custom starter generator for modern JavaScript projects.

---

## 🚀 What can it generate?

```txt
frontend    -> Vanilla JavaScript frontend starter
backend     -> Node.js + Express backend API starter
fullstack   -> Vanilla JavaScript frontend + Express backend starter
erp-module  -> ERP/CRM module scaffold
```

---

## 🧠 Why this project exists

Starting new projects often means repeating the same setup again and again:

```txt
Create folders
Create base files
Set up package.json
Create app entry points
Create routes
Create services
Create styles
Create README files
```

This CLI helps reduce that repetitive work.

The goal is simple:

> Generate clean starter projects quickly, consistently and with a scalable structure.

---

## 🖥️ CLI command

```bash
dpsg
```

---

## 📋 Requirements

```txt
Node.js 18+
npm
Git
```

---

## 📦 Installation for local development

Clone the repository:

```bash
git clone https://github.com/MatiasFrutos/DevProject-Starter-Generator.git
```

Enter the project folder:

```bash
cd DevProject-Starter-Generator
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Run locally

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

---

## 🌍 Optional global command

You can register the CLI locally using:

```bash
npm link
```

Then you can run it as a real terminal command:

```bash
dpsg list
```

Create projects faster:

```bash
dpsg create frontend my-frontend
dpsg create backend my-api
dpsg create fullstack my-system
dpsg create erp-module proveedores
```

---

## 🧱 Project structure

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

---

## 🔄 How it works

When you run:

```bash
dpsg create backend demo-api
```

The CLI performs the following steps:

```txt
1. Validates the selected template.
2. Normalizes the project name.
3. Copies the selected template folder.
4. Replaces dynamic tokens such as __PROJECT_NAME__.
5. Creates the final project folder.
```

---

## 🧬 Dynamic template tokens

Templates can use dynamic tokens that are automatically replaced during generation.

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

Becomes:

```txt
demo-api
```

---

## 🎨 Frontend starter

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

Generated structure:

```txt
my-frontend/
  index.html
  package.json
  README.md
  src/
    main.js
    app.js
    core/
    components/
    pages/
    styles/
    utils/
```

Run it:

```bash
cd my-frontend
npm install
npm run dev
```

---

## 🧩 Backend starter

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

Generated structure:

```txt
my-api/
  package.json
  README.md
  .env.example
  src/
    server.js
    app.js
    config/
    controllers/
    middlewares/
    repositories/
    routes/
    services/
    utils/
```

Run it:

```bash
cd my-api
npm install
npm run dev
```

Healthcheck:

```txt
http://localhost:3000/api/health
```

Expected response:

```json
{
  "ok": true,
  "service": "my-api",
  "status": "online",
  "timestamp": "2026-05-13T22:00:00.000Z"
}
```

---

## 🏗️ Fullstack starter

The fullstack template includes:

```txt
frontend/
backend/
README.md
```

Ideal for:

```txt
Internal tools
Dashboards
Admin panels
ERP systems
CRM systems
Fullstack prototypes
```

Run backend:

```bash
cd backend
npm install
npm run dev
```

Run frontend in another terminal:

```bash
cd frontend
npm install
npm run dev
```

---

## 🧾 ERP module starter

The ERP module template is designed to generate a base scaffold for business modules.

Example:

```bash
dpsg create erp-module proveedores
```

It can generate files for:

```txt
Frontend page
Frontend styles
Frontend service
Frontend components
Backend routes
Backend controller
Backend service
Backend repository
SQL schema
```

Useful for projects like:

```txt
ERP systems
CRM systems
Admin dashboards
Internal management platforms
Business tools
```

---

## 📜 Available scripts

Run CLI:

```bash
npm run start
```

Development mode:

```bash
npm run dev
```

Create frontend test project:

```bash
npm run test:create:frontend
```

Create backend test project:

```bash
npm run test:create:backend
```

Create fullstack test project:

```bash
npm run test:create:fullstack
```

---

## 🧹 Clean generated demos

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

---

## 🛣️ Roadmap

```txt
Add React starter
Add Angular starter
Add PostgreSQL starter
Add Prisma starter
Add JWT auth template
Add Docker template
Add interactive prompts
Add custom template configuration
Add testing templates
Publish package to npm
```

---

## 💡 Future ideas

```txt
Template presets
Custom user templates
Configuration file support
Automatic README generator
Module generator for dashboards
Database schema generator
Auth-ready backend starter
CLI update command
```

---

## 📌 Status

```txt
MVP working
Frontend template tested
Backend template tested
CLI command validated
Ready for GitHub
```

---

## 👨‍💻 Author

Developed by **Matias Frutos**.

---

## 📄 License

MIT License.

---

<p align="center">
  <strong>Build faster. Start cleaner. Ship smarter. 🚀</strong>
</p>
