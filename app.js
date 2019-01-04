const Koa = require('koa')
const crypto = require('crypto')
const uuid = require('uuid/v4')
const bodyParser = require('koa-bodyparser')
const jobsRouter = require('./routes/jobs')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  ctx.crypto = crypto
  next()
})

app.use(jobsRouter.routes())

app.listen(3000)