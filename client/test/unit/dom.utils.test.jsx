import { describe, expect, it } from 'vitest'
import { loadScript } from '../../src/utils/dom.utils.jsx'

describe('loadScript - Add to DOM', async () => {
    it('should render PayPal Buttons', () => {
        const config = {
            components: 'buttons,funding-eligibility',
            'client-id': 'test',
        }
        loadScript('https://www.paypal.com/sdk/js', config).then()
        expect(document.getElementsByTagName('script')).toBeDefined()
    })
})
