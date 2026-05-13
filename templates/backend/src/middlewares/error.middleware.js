"use strict";

function errorMiddleware(error, req, res, next) {
  console.error("[API_ERROR]", error);

  res.status(error.status || 500).json({
    ok: false,
    error: error.code || "INTERNAL_SERVER_ERROR",
    message: error.message || "Unexpected server error"
  });
}

module.exports = {
  errorMiddleware
};