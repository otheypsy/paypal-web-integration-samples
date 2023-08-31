const express = require('express')
const paypal = require('../../../services/PayPalService.js')

const router = express.Router()

router.post('/order/create', async (req, res, next) => {
    res.locals.response = await paypal.order.create(req.body)
    next()
})

router.post('/order/execute', async (req, res, next) => {
    res.locals.response = await paypal.order.execute(req.body.orderID)
    next()
})

router.post('/identity/generate-token', async (req, res, next) => {
    res.locals.response = await paypal.identity.generateToken()
    next()
})

module.exports = router
