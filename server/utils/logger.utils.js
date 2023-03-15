import Debug from 'debug'
import Chalk from 'chalk'

const createLoggers = (label) => {
    const logger = Debug(Chalk.dim(label))

    if (process.env.NODE_ENV === 'development') logger.enabled = true
    const log = (...args) => logger(Chalk.cyan(...args))
    const success = (...args) => logger(Chalk.green(...args))
    const error = (...args) => logger(Chalk.red(...args))

    return { log, success, error }
}

export default createLoggers
