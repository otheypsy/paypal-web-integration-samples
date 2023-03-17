import express from 'express'
import { client, assets } from '../controllers/client.controller.js'
import btRouter from './braintree.router.js'
import testbedRouter from './testbed.router.js'
import notFoundMiddleware from '../middleware/notFound.middleware.js'
import responderMiddleware from '../middleware/responder.middleware.js'
import errorMiddleware from '../middleware/error.middleware.js'
import { resolve } from 'path'

const root = resolve('./client/build')
const router = express.Router()

// Pre-logic router-level middleware

// API entry-point
router.use('/api', (req, res, next) => {
    res.locals.response = {
        message: 'API',
        base: '/api',
        resources: {
            braintree: ['/braintree/sdk', '/braintree/gql'],
            paypal: '/paypal',
        },
    }
    next()
})

// Feature based routers
router.use('/api/braintree', btRouter)
// mainRouter.use('/api/paypal/rest', paypal)
router.use('/api/testbed', testbedRouter)

// React Front-End
router.use(assets)
router.use('/', client)

// Post-logic router-level middleware
router.use(responderMiddleware)
router.use(notFoundMiddleware)
router.use(errorMiddleware)

export default router
