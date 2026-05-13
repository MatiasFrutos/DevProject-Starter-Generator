"use strict";

function getHealth() {
  return {
    ok: true,
    service: "__PROJECT_NAME__",
    status: "online",
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  getHealth
};