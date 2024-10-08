import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
    refresh: true,
    server: {
        host: 'students-management.test',
    },
    plugins: [
        mkcert(),
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),

    ],
});
