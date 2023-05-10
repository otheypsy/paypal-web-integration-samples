import { beforeEach, afterAll, expect, describe, it } from 'vitest'
import { render, cleanup, screen } from '@testing-library/react'
import HelloWorld from '../../src/features/HelloWorld.jsx'

describe('HelloWorld Component', async () => {
    beforeEach(() => {
        render(<HelloWorld />)
    })

    it('should have H1 Header', () => {
        expect(screen.getByRole('heading').innerHTML).toBe('Hello World')
    })

    afterAll(() => {
        cleanup()
    })
})
