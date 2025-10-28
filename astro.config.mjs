// @ts-check
import { defineConfig } from 'astro/config';
import amplify from '@craftlions/astro-adapter';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
inport vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [react(), svelte()],
});
