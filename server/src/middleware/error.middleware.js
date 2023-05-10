const errorMiddleware = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }

    const json = {
        statusCode: error.status || 500,
        message: error.message,
        source: error.source || 'internal',
        ...(error.external && { external: error.external }),
    }

    return res.status(error.status || 500).json(json)
}

export default errorMiddleware
