"use strict";

require("dotenv").config();

const { createApp } = require("./app");
const { env } = require("./config/env");

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`[__PROJECT_NAME__] API running on http://localhost:${env.PORT}`);
});