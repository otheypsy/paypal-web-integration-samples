class ApplicationError extends Error {
    constructor(message, source = 'internal') {
        super(message)
        this.name = this.constructor.name
        this.status = 500
        this.source = source
    }
}

export default ApplicationError
