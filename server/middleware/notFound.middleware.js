import NotFoundError from '../utils/errors/notFound.error.js'

const notFoundMiddleware = (req) => {
    const message = `${req.method} ${req.url} not found`
    throw new NotFoundError(message)
}

export default notFoundMiddleware
