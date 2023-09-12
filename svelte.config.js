import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from 'svelte-adapter-bun';
import directives from './config/csp.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter(), csp: { directives, mode: 'hash' } },
};

export default config;
