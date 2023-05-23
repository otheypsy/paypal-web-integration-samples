const _config = {
    base: ''
};

const _setHeaders = (http, headers) => {
    http.setRequestHeader('Content-type', 'application/json');
    headers.forEach((header) => {
        http.setRequestHeader(header.name, header.value);
    })
};

const _setResponseHandlers = (http, resolve) => {
    http.onload = () => {
        (http.status >= 200 && http.status < 300)
            ? resolve([undefined, JSON.parse(http.response)])
            : resolve([JSON.parse(http.response), undefined]);
        window.isBusy = false;
    };
    http.onerror = () => {
        resolve(['Client error', undefined]);
        window.isBusy = false;
    };
};

const _request = (method, uri, data, headers) => {
    return new Promise((resolve) => {
        window.isBusy = true;
        const http = new XMLHttpRequest(),
            url = _config.base + uri;
        http.open(method, url, true);
        _setHeaders(http, headers);
        _setResponseHandlers(http, resolve);
        http.send(JSON.stringify(data));
    });
};

const ApiService = {
    get: (uri, headers=[]) => {
        return _request('GET', uri, null, headers);
    },
    post: (uri, data={}, headers=[]) => {
        return _request('POST', uri, data, headers);
    },
    patch: (uri, data={}, headers=[]) => {
        return _request('PATCH', uri, data, headers);
    },
    delete: (uri, data={}, headers=[]) => {
        return _request('DELETE', uri, data, headers);
    }
};

export default ApiService;
