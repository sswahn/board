const Jobs = require('../models/Jobs')

function JobsController() {

  async function read(ctx) {
    try {
      // await validateUser(ctx.cookies.get('token'))
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

  async function readOne(ctx) {
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

  async function create(ctx) {
    try {
      const model = Jobs()
      const data = await model.create(ctx.request.body)
      ctx.response.body = {
        status: 201,
        message: 'Item successfully created.'
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function update(ctx) {
    try {
      const model = Jobs()
      const data = await model.update(
        ctx.request.body,
        ctx.params.id
      )
      ctx.response.body = {
        status: 201,
        message: 'Item successfully updated.'
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function remove(ctx) {
    try {
      const model = Jobs()
      const data = await model.remove(ctx.params.id)
      ctx.response.body = {
        status: 200,
        message: 'Item successfully deleted.'
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