const koaRouter = require('koa-router')
const router = koaRouter()

const JobsController = require('../controllers/JobsController')
const controller = JobsController()

router.get('/api/v1/jobs', controller.read)
router.get('/api/v1/jobs/:id', controller.readOne)
router.post('/api/v1/jobs', controller.create)
router.put('/api/v1/jobs/:id', controller.update)
router.delete('/api/v1/jobs/:id', controller.remove)

module.exports = router