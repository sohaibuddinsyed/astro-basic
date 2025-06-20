// @ts-check
import { defineConfig } from 'astro/config';
import amplify from '@craftlions/astro-adapter';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    adapter: amplify(),
    integrations: [react(), svelte()],
});
