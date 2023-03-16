import ApplicationError from './application.error.js'

class NotFoundError extends ApplicationError {
    constructor(message) {
        super(message, 'client')
        this.name = this.constructor.name
        this.status = 404
    }
}

export default NotFoundError
