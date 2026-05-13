"use strict";

class BaseRepository {
  constructor(entityName) {
    this.entityName = entityName;
  }

  async list() {
    return [];
  }

  async findById(id) {
    return null;
  }

  async create(payload) {
    return {
      id: crypto.randomUUID(),
      ...payload,
      created_at: new Date().toISOString()
    };
  }

  async update(id, payload) {
    return {
      id,
      ...payload,
      updated_at: new Date().toISOString()
    };
  }

  async remove(id) {
    return {
      id,
      deleted: true
    };
  }
}

module.exports = {
  BaseRepository
};