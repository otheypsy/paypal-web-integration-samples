import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        include: ['./server/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        testTimeout: 20000,
        setupFiles: './server/test/setup.js',
    },
})
