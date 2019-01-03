const Koa = require('koa')
const jobsRouter = require('./routes/jobs')

const app = new Koa()

app.use(jobsRouter.routes())

app.listen(3000)