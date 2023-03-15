import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'

const config = defineConfig({
    build: {
        outDir: 'build',
    },

    plugins: [
        react(),
        svgrPlugin(),
        {
            // default settings on build (i.e. fail on error)
            ...eslint({
                failOnWarning: false,
                failOnError: false,
            }),
            apply: 'build',
        },
        {
            // do not fail on serve (i.e. local development)
            ...eslint({
                failOnWarning: false,
                failOnError: false,
            }),
            apply: 'serve',
            enforce: 'post',
        },
    ],

    server: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8000',
        },
    },
})

export default config
