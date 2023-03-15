import express from 'express'
import testbedController from '../controllers/testbed.controller.js'

const router = express.Router()

router.use('/', testbedController.root)

export default router
