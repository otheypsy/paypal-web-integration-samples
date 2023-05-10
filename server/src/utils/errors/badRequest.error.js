import ApplicationError from './application.error.js'

class BadRequestError extends ApplicationError {
    constructor(message) {
        super(message, 'client')
        this.name = this.constructor.name
        this.status = 400
    }
}

export default BadRequestError
