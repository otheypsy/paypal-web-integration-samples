import btService from '../services/braintree.service.js'

const root = async (req, res, next) => {
    res.locals.response = await btService.sdk.testbed()
    next()
}

export default {
    root,
}
