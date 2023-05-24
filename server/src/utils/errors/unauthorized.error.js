import ApplicationError from './application.error.js'

class UnauthorizedError extends ApplicationError {
    constructor(message) {
        super(message, 'client')
        this.name = this.constructor.name
        this.status = 401
    }
}

export default UnauthorizedError
