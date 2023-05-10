import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'

const config = defineConfig({
    build: {
        // Enable Rollup watcher @see https://vitejs.dev/config/#build-watch
        watch: {},

        // Opt for the fastest build
        target: 'esnext',
        minify: true,
        sourcemap: true,
        rollupOptions: { treeshake: false },

        outDir: 'build',
    },

    test: {
        root: 'client',
        /*
        browser: {
            enabled: true,
            name: 'chrome', // browser name is required
        },
         */
        environment: 'jsdom',
        // include: ['./client/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        testTimeout: 20000,
        setupFiles: './test/setup.js',
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
