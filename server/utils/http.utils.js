import http from 'https'
import createLoggers from './logger.utils.js'

const { log } = createLoggers('http.utils.js')

const generateLog = (options) => `${options.method} - ${options.host}/${options.path}
Time: ${new Date().toUTCString()}
User-Agent: ${options.headers['User-Agent']}
`

const wrapHttp = () => {
    const original = http.request
    http.request = (options, callback) => {
        log(generateLog(options))
        return original(options, callback)
    }
}

export default wrapHttp
