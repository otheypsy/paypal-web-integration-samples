const _time = {
    get: () => {
        const dateObj = new Date()
        return '[' + dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds() + ']'
    },
}

const log = (...args) => console.log(_time.get(), ...args)
const danger = (...args) => console.error(_time.get(), ...args)
const warning = (...args) => console.warn(_time.get(), ...args)

export { log, danger, warning }
export default { log, danger, warning }
