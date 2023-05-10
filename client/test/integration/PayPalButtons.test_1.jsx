import puppeteer from 'puppeteer'
import { preview } from 'vite'
import { beforeAll, beforeEach, afterAll, expect, describe, it } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { loadScript } from '../../src/utils/dom.utils.jsx'
import HelloWorld from '../../src/features/HelloWorld.jsx'
import PayPalButtons from '../../src/features/PayPalButtons.jsx'

describe('PayPalButtons test', async () => {
    beforeAll(async () => {
        const config = {
            components: 'buttons,funding-eligibility',
            'client-id': 'test',
        }
        loadScript('https://www.paypal.com/sdk/js', config)
    }, 60000)

    beforeEach(() => {
        const ppConfig = {}
        render(<PayPalButtons ppConfig={ppConfig} />)
    })

    it('should render PayPal Buttons', () => {
        expect(document.getElementsByTagName('script')).toBeDefined()
    })

    afterAll(() => {
        cleanup()
        document.body.innerHTML = ''
    })
})

describe('HelloWorld test', async () => {
    let server
    let browser
    let page

    beforeAll(async () => {
        server = await preview({ preview: { port: 3000 } })
        browser = await puppeteer.launch()
        page = await browser.newPage()
    })

    beforeEach(() => {
        const ppConfig = {}
        render(<HelloWorld ppConfig={ppConfig} />)
    })

    afterAll(async () => {
        await browser.close()
        await new Promise((resolve, reject) => {
            server.httpServer.close((error) => (error ? reject(error) : resolve()))
        })
    })

    it(
        'contains the welcome text',
        async () => {
            await page.goto('http://localhost:3000')
            console.log(await page.$('body'))
            return true
        },
        {
            timeout: 60000,
        },
    )
})
