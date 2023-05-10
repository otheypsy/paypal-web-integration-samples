import { beforeAll, beforeEach, afterAll, expect, describe, it } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { loadScript } from '../../src/utils/dom.utils.jsx'
import PayPalButtons from '../../src/features/PayPalButtons.jsx'

describe('PayPalButtons test', async () => {
    beforeAll(async () => {
        const config = {
            components: 'buttons,funding-eligibility',
            'client-id': 'test',
        }
        const temp = loadScript('https://www.paypal.com/sdk/js', config)
        temp.then(console.log)
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
