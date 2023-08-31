const jsonRequest = async (url, method = 'GET', body = undefined, headers = {}) => {
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
    if (!response.ok) throw new Error('HTTP Fetch Failed', { cause: response })
    return response
}

export { jsonRequest }
