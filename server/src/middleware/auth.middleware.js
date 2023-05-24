import { base64 } from '../utils/core.utils.js'
import createLoggers from '../utils/logger.utils.js'
import UnauthorizedError from '../utils/errors/unauthorized.error.js'
import ForbiddenError from '../utils/errors/forbidden.error.js'

const { error } = createLoggers('braintree.utils.js')

const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        res.set('WWW-Authenticate', 'Basic realm="401"')
        error('Missing auth header')
        throw new UnauthorizedError('Missing authentication')
    }

    const basicAuth = (req.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = base64.decode(basicAuth).split(':')

    const isValidAuth = !!(
        username &&
        password &&
        username === process.env.SERVER_API_USERNAME &&
        password === process.env.SERVER_API_PASSWORD
    )

    if (!isValidAuth) {
        error('Invalid authentication')
        throw new ForbiddenError('Invalid authentication')
    }

    return next()
}

export default authMiddleware
