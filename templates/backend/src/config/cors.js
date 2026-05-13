"use strict";

const cors = require("cors");
const { env } = require("./env");

const corsMiddleware = cors({
  origin: env.CORS_ORIGIN === "*" ? true : env.CORS_ORIGIN,
  credentials: true
});

module.exports = {
  corsMiddleware
};