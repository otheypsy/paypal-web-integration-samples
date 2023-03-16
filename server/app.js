import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import compression from 'compression'
import methodOverride from 'method-override'
import favicon from 'serve-favicon'
import errorHandler from 'errorhandler'
import incomingMiddleware from './middleware/incoming.middleware.js'
import wrapHttp from './utils/http.utils.js'
import createLoggers from './utils/logger.utils.js'
import { setupSDK, setupGQL } from './utils/braintree.utils.js'
import router from './routes/main.router.js'

const { log, error } = createLoggers('app.js')
const config = {}

// TODO -- Production Build Tools
// TODO -- Upstart or SystemD
// TODO -- Handle errors when setting up services

const runServices = async () => {
    log('Starting Services')
    await setupSDK()
    await setupGQL()
}

const runApp = async () => {
    log('Starting Express Application')
    const app = express()

    // Pre-logic application-level middleware
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(compression())
    app.use(methodOverride('X-HTTP-Method-Override'))
    app.use(favicon('./client/build/favicon.ico'))
    app.use(incomingMiddleware())

    // Set application configurations
    app.disable('x-powered-by')
    app.set('title', process.env.npm_package_name)
    app.set('version', process.env.npm_package_version)
    app.use(router)

    // Post-logic application-level middleware
    if (process.env.NODE_ENV === 'development') app.use(errorHandler)

    // Start application
    config.port = process.env.PORT || 8000
    config.title = app.locals.settings.title
    config.version = app.locals.settings.title

    await app.listen({ port: config.port })

    log('title -->', config.title)
    log('version -->', config.version)
    log('port -->', config.port)
    log('link -->', `http://localhost:${config.port}`)
}

const app = async () => {
    try {
        await runServices()
        await runApp()
        wrapHttp()
    } catch (err) {
        error(err)
    }
}

export { app, config }
