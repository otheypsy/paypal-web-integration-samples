import express from 'express'
import { resolve } from 'path'

const assets = express.static('client/build')

const client = (req, res) => {
    res.sendFile('index.html', {
        root: resolve('./client/build'),
    })
}

export { client, assets }
