import { loadScript } from '../utils/dom.utils'

const loadPPScript = async (options = {}, dataAttributes = {}) => {
    const queryParams = {
        components: 'buttons,funding-eligibility',
        'client-id': 'test',
        'disable-funding': 'card',
        ...options,
    }
    return await loadScript('https://www.paypal.com/sdk/js', queryParams, dataAttributes)
}

export { loadPPScript }
