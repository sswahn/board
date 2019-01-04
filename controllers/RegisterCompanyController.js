const Jobs = require('../models/Jobs')

function RegisterCompanyController() {

  async function create(ctx) {
    try {
      const hash = ctx.crypto.randomBytes(20).toString('hex')
      const model = RegisterCompany()
      await model.create(ctx.request.body, hash)
      // Mail.send(hash)
      ctx.response.body = {
        status: 201,
        message: 'Account successfully created.'
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
      const model = RegisterCompany()
      await model.update(ctx.request.body, ctx.params.id)
      ctx.response.body = {
        status: 201,
        message: 'Account successfully updated.'
      }
    } catch (error) {
      ctx.response.body = {
        status: 400,
        message: error.message
      }
    }
  }

  async function activate(ctx) {
    try {
      const model = RegisterCompany()
      await model.activateAccount(ctx.params)
      ctx.response.body = {
        status: 200,
        message: 'Account successfully activated'
      }
    } catch (error) {
      ctx.response.body = {
        status: 500,
        message: error.message
      }
    }
  }

  return { create, update, activate }
}

module.exports = RegisterCompanyController