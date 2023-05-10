import { describe, expect, it } from 'vitest'
import { jsonRequest } from '../../src/utils/http.utils'

const mockBody = {
    foo: {
        bar: 'baz',
    },
}

describe('jsonRequest - Success', () => {
    it('should run http GET', async () => {
        expect.assertions(2)

        const response = await jsonRequest.get('https://httpbin.org/get')

        expect(response.ok).toBeTruthy()
        expect(response.status).toBe(200)
    })

    it('should run http POST', async () => {
        expect.assertions(3)

        const response = await jsonRequest.post('https://httpbin.org/post', mockBody)
        const json = await response.json()

        expect(response.ok).toBeTruthy()
        expect(json.json).toEqual(mockBody)
        expect(response.status).toBe(200)
    })

    it('should run http PATCH', async () => {
        expect.assertions(3)

        const response = await jsonRequest.patch('https://httpbin.org/patch', mockBody)
        const json = await response.json()

        expect(response.ok).toBeTruthy()
        expect(json.json).toEqual(mockBody)
        expect(response.status).toBe(200)
    })

    it('should run http DELETE', async () => {
        expect.assertions(3)

        const response = await jsonRequest.delete('https://httpbin.org/delete', mockBody)
        const json = await response.json()

        expect(response.ok).toBeTruthy()
        expect(json.json).toEqual(mockBody)
        expect(response.status).toBe(200)
    })
})

describe('jsonRequest - Failed', () => {
    it('should throw error', async () => {
        expect.assertions(1)

        const response = jsonRequest.get('https://httpbin.org/status/400')

        await expect(response).rejects.toThrow('HTTP Fetch Failed')
    })
})
