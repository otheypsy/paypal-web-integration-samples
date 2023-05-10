import morgan from 'morgan'
import createLoggers from '../utils/logger.utils.js'

const { log } = createLoggers('incoming.middleware.js')

const format = `:method - :url HTTP/:http-version
Time: :date[web]
Referrer: :referrer
User-Agent: :user-agent`

const incomingMiddleware = () =>
    morgan(format, {
        immediate: true,
        stream: {
            write: log,
        },
    })

export default incomingMiddleware
