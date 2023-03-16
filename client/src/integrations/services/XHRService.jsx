import { log, danger } from './LoggerService';

const post = async (url, data={}, headers=[]) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const json = await response.json();
    if(!response.ok) {
        danger('XHRService: post', { url, response, json });
        throw json
    }
    log('XHRService: post', url, json);
    return json;
}

export default { post };
