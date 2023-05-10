import ApplicationError from './application.error.js'

class InternalServerError extends ApplicationError {
    constructor(message) {
        super(message, 'internal')
        this.name = this.constructor.name
        this.status = 500
    }
}

export default InternalServerError
