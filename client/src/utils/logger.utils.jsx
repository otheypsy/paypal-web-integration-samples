const getTimePrefix = () => {
    const dateObj = new Date()
    return '[' + dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds() + ']'
}

const createLoggers = (label) => {
    const log = (...args) => console.log(getTimePrefix(), label, ...args)
    const warn = (...args) => console.warn(getTimePrefix(), label, ...args)
    const error = (...args) => console.error(getTimePrefix(), label, ...args)

    return { log, warn, error }
}

export default createLoggers
