const responderMiddleware = (req, res, next) => {
    if (res.locals.response) return res.status(200).json(res.locals.response)
    return next()
}

export default responderMiddleware
