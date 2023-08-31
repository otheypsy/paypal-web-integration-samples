import { describe, expect, it } from 'vitest'
import { jsonRequest } from '../../../src/utils/http.utils.js'

const mockBody = {
    foo: {
        bar: 'baz',
    },
}

describe('jsonRequest - Success', () => {
    it('should run http GET', async () => {
        expect.assertions(2)

        const response = await jsonRequest('https://httpbin.org/get', 'GET')

        expect(response.ok).toBeTruthy()
        expect(response.status).toBe(200)
    })

    it('should run http POST', async () => {
        expect.assertions(3)

        const response = await jsonRequest('https://httpbin.org/post', 'POST', mockBody)
        const json = await response.json()

        expect(response.ok).toBeTruthy()
        expect(json.json).toEqual(mockBody)
        expect(response.status).toBe(200)
    })

    it('should run http PATCH', async () => {
        expect.assertions(3)

        const response = await jsonRequest('https://httpbin.org/patch', 'PATCH', mockBody)
        const json = await response.json()

        expect(response.ok).toBeTruthy()
        expect(json.json).toEqual(mockBody)
        expect(response.status).toBe(200)
    })
})

describe('jsonRequest - Failed', () => {
    it('should throw error', async () => {
        expect.assertions(1)

        const request = jsonRequest('https://httpbin.org/status/400', 'GET')
        await expect(request).rejects.toThrow('HTTP Fetch Failed')
    })
})
