import * as dotenv from 'dotenv'

const run = async () => {
    dotenv.config()
    const { app } = await import('./app.js')
    await app()
}

run().then()
