const koaRouter = require('koa-router')
const router = koaRouter()

const RegisterCompanyController = require('../controllers/RegisterCompanyController')
const controller = RegisterCompanyController()

router.post('/api/v1/register-company', controller.create)
router.put('/api/v1/register-company/:id', controller.update)
router.put('/api/v1/activate/:token', controller.activate)

module.exports = router