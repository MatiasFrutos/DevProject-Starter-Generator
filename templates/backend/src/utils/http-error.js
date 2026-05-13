"use strict";

class HttpError extends Error {
  constructor(status, code, message) {
    super(message);

    this.name = "HttpError";
    this.status = status;
    this.code = code;
  }
}

function createHttpError(status, code, message) {
  return new HttpError(status, code, message);
}

module.exports = {
  HttpError,
  createHttpError
};