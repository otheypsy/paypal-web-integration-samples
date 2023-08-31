import ApplicationError from './application.error.js'

class ForbiddenError extends ApplicationError {
    constructor(message) {
        super(message, 'client')
        this.name = this.constructor.name
        this.status = 403
    }
}

export default ForbiddenError
