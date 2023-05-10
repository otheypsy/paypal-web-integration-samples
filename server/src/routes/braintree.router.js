import express from 'express'
import btController from '../controllers/braintee.controller.js'

const router = express.Router()

router.post('/sdk/interface', btController.sdk.interface)
router.post('/sdk/search', btController.sdk.search)

router.post('/gql/interface', btController.gql.interface)
router.use('/gql/plfr', btController.gql.plfr)

export default router
