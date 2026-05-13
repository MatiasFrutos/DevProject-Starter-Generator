# __PROJECT_NAME__

Backend Express starter generated with DevProject Starter Generator.

## Requirements

- Node.js 18+

## Install

```bash
npm install
npm run dev
http://localhost:3000/api/health

---

# 20. `templates/backend/src/server.js`

```js
"use strict";

require("dotenv").config();

const { createApp } = require("./app");
const { env } = require("./config/env");

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`[__PROJECT_NAME__] API running on http://localhost:${env.PORT}`);
});