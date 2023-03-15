const responderMiddleware = (req, res, next) => {
    if (res.locals.response) res.status(200).json(res.locals.response)
    next()
}

export default responderMiddleware
