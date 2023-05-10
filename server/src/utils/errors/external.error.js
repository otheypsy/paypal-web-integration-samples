import ApplicationError from './application.error.js'

class ExternalError extends ApplicationError {
    constructor(message, external) {
        super(message, 'external')
        this.name = this.constructor.name
        this.status = 400
        this.external = external
    }
}

export default ExternalError
