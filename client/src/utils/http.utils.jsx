import createLoggers from './logger.utils.jsx'

const { log, error } = createLoggers('http.utils.jsx')

const jsonRequest = {
    _request: async (url, method, body, headers) => {
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
        if (!response.ok) {
            error({ url, method, response })
            throw new Error('HTTP Fetch Failed', { cause: response })
        }
        log(url, method, response)
        return response
    },

    get: (url, body = undefined, headers = []) => jsonRequest._request(url, 'GET', body, headers),
    post: (url, body = undefined, headers = []) => jsonRequest._request(url, 'POST', body, headers),
    patch: (url, body = undefined, headers = []) => jsonRequest._request(url, 'PATCH', body, headers),
    delete: (url, body = undefined, headers = []) => jsonRequest._request(url, 'DELETE', body, headers),
}

export { jsonRequest }
