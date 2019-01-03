const Jobs = require('../models/Jobs')

function JobsController() {

  async function read(ctx, next) {
    try {
      const model = Jobs()
      const data = await model.read()
      ctx.response.body = {
        status: 200,
        data
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function readOne(ctx, next) {
    try {
      const model = Jobs()
      const data = await model.readOne(ctx.params.id)
      ctx.response.body = {
        status: 200,
        data
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function create(ctx, next) {
    try {
      const model = Jobs()
      const data = await model.create(ctx.request.body)
      ctx.response.body = {
        status: 201,
        data
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function update(ctx, next) {
    try {
      const model = Jobs()
      const data = await model.update(
        ctx.request.body,
        ctx.params.id
      )
      ctx.response.body = {
        status: 201,
        data
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function remove(ctx, next) {
    try {
      const model = Jobs()
      const data = await model.remove(ctx.params.id)
      ctx.response.body = {
        status: 200,
        data
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  return { read, readOne, create, update, remove }
}

module.exports = JobsController