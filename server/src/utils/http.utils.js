import http from 'https'
import createLoggers from './logger.utils.js'
import ExternalError from './errors/external.error.js'

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

const jsonRequest = async (url, method = 'GET', body = undefined, headers = {}) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(body),
        redirect: 'follow',
    }

    const response = await fetch(url, options)
    if (!response.ok) throw new ExternalError('HTTP Fetch Failed', response)
    return response
}

export { wrapHttp, jsonRequest }
