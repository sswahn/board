const Jobs = require('../models/Jobs')

function JobsController() {

  async function read(ctx, next) {
    try {
      const model = Jobs()
      ctx.body = await model.get()
    } catch (error) {
      console.log('error:', error.message)
    }
  }

  async function readOne(ctx, next) {
    try {
      const model = Jobs()
      ctx.body = await model.getOne(ctx.params.id)
    } catch (error) {
      console.log('error: failed.')
    }
  }

  async function create(ctx, next) {
    try {
      const model = Jobs()
      ctx.body = await model.create(ctx.request.body)
    } catch (error) {
      console.log('error: failed.')
    }
  }

  async function update(ctx, next) {
    try {
      const model = Jobs()
      ctx.body = await model.create(
        ctx.request.body,
        ctx.params.id
      )
    } catch (error) {
      console.log('error: failed.')
    }
  }

  async function remove(ctx, next) {
    try {
      const model = Jobs()
      ctx.body = await model.create(ctx.params.id)
    } catch (error) {
      console.log('error: failed.')
    }
  }

  return { read, readOne, create, update, remove }
}

module.exports = JobsController