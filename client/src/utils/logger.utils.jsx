import Debug from 'debug'
import Chalk from 'chalk'

const colors = {
    log: 'cyan',
    success: 'green',
    warn: 'yellow',
    error: 'red',
}

const generateFinalOutput = (args, type = 'log') => {
    const colorFn = Chalk[colors[type]]
    return args.map((arg) => (typeof arg === 'string' && colorFn ? colorFn(arg) : arg))
}

const createLoggers = (label) => {
    const logger = Debug(Chalk.dim(label))

    const log = (...args) => {
        const finalOutput = generateFinalOutput(args, 'log')
        logger(...finalOutput)
    }

    const success = (...args) => {
        const finalOutput = generateFinalOutput(args, 'success')
        logger(...finalOutput)
    }

    const warn = (...args) => {
        const finalOutput = generateFinalOutput(args, 'error')
        logger(...finalOutput)
    }
    const error = (...args) => {
        const finalOutput = generateFinalOutput(args, 'warn')
        logger(...finalOutput)
    }

    return { log, success, error, warn }
}

export default createLoggers
