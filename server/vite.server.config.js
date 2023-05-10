import { defineConfig } from 'vite'
export default defineConfig({
    test: {
        include: ['./server/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        setupFiles: './server/test/setup.js',
    },
})
