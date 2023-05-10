import btService from '../services/braintree.service.js'

const sdkInterface = async (req, res, next) => {
    res.locals.response = await btService.sdk.interface(req.body)
    next()
}

const sdkSearch = async (req, res, next) => {
    res.locals.response = await btService.sdk.search(req.body)
    next()
}

const gqlInterface = async (req, res, next) => {
    res.locals.response = await btService.gql.interface(req.body.query, req.body.variables)
    next()
}

const gqlPLFR = async (req, res, next) => {
    const query = `
        query MyPLFR($date: Date!, $merchantAccountID: ID!) {
          report {
            paymentLevelFees(date: $date, merchantAccountId: $merchantAccountID) {
              url
            }
          }
        }
    `
    const variables = {
        date: '2021-06-11',
        merchantAccountID: 'odesai_USD',
    }
    res.locals.response = await btService.gql.interface(query, variables)
    next()
}

export default {
    sdk: {
        interface: sdkInterface,
        search: sdkSearch,
    },
    gql: {
        interface: gqlInterface,
        plfr: gqlPLFR,
    },
}
