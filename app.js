const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const jobsRouter = require('./routes/jobs')

const app = new Koa()

app.use(bodyParser())

app.use(jobsRouter.routes())

app.listen(3000)