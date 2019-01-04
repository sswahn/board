const Koa = require('koa')
const crypto = require('crypto')
const uuid = require('uuid/v4')
const bodyParser = require('koa-bodyparser')
const registerCompanyRouter = require('./routes/registerCompany')
const jobsRouter = require('./routes/jobs')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  ctx.crypto = crypto
  await next()
})

app.use(registerCompanyRouter.routes())

app.use(jobsRouter.routes())

app.listen(3000)