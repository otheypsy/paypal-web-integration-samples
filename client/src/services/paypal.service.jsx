import { loadScript } from '../utils/dom.utils'
import { jsonRequest } from '../utils/http.utils.jsx'

const loadPPScript = async (options = {}, dataAttributes = {}) => {
    const queryParams = {
        components: 'buttons,funding-eligibility',
        'client-id': 'test',
        'disable-funding': 'card',
        ...options,
    }
    return await loadScript('https://www.paypal.com/sdk/js', queryParams, dataAttributes)
}

const restInterface = async (uri, method, body = {}, apiHeaders = {}) => {
    const url = '/api/paypal/rest/interface'
    const authHeaders = localStorage.getItem('authHeader')
        ? {
              authorization: 'Basic ' + localStorage.getItem('authHeader'),
          }
        : {}
    const postData = {
        uri: uri,
        headers: apiHeaders,
        body: body,
    }

    return await jsonRequest(url, method, postData, authHeaders)
}

export { loadPPScript, restInterface }
