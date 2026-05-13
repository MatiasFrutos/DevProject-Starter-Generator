"use strict";

function ok(res, data = null, status = 200) {
  return res.status(status).json({
    ok: true,
    data
  });
}

function fail(res, error = "ERROR", message = "Request failed", status = 400) {
  return res.status(status).json({
    ok: false,
    error,
    message
  });
}

module.exports = {
  ok,
  fail
};