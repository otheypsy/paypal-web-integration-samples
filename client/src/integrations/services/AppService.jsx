const _time = {
    get: () => {
        const dateObj = new Date()
        return '[' + dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds() + ']'
    },
}

const uuid = () => {
    return crypto.randomUUID() || Date.now()
}

const logger = {
    log: (...args) => console.log(_time.get(), ...args),
    error: (...args) => console.error(_time.get(), ...args),
    warn: (...args) => console.warn(_time.get(), ...args),
}

const scripts = {
    paypal: {
        jsv5: (queryParams, dataAttributes) =>
            new Promise((resolve, reject) => {
                const script = document.createElement('script')
                const url = new URL('https://www.paypal.com/sdk/js')

                for (const key in queryParams) {
                    url.searchParams.append(key, queryParams[key])
                }

                for (const key in dataAttributes) {
                    script.setAttribute(key, dataAttributes[key])
                }

                script.src = url.href
                script.async = true
                document.body.appendChild(script)

                script.addEventListener('load', resolve)
                script.addEventListener('error', reject)
            }),
    },
}

const checkActiveLink = (active, mount = '', path) => {
    return active.startsWith(mount + '/' + path)
}

const hocCompose = (BaseComponent, ...hocs) => {
    return hocs.reduce((Component, withHoc) => {
        return withHoc(Component)
    }, BaseComponent)
}

export { logger, scripts, checkActiveLink, hocCompose, uuid }
export default { logger, scripts, checkActiveLink, hocCompose, uuid }
