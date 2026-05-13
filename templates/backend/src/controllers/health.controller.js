"use strict";

const healthService = require("../services/health.service");

function index(req, res) {
  res.json({
    ok: true,
    service: "__PROJECT_NAME__",
    message: "Base API route"
  });
}

function health(req, res) {
  const payload = healthService.getHealth();

  res.json(payload);
}

module.exports = {
  index,
  health
};