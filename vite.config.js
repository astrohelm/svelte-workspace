import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import tsconfig from './tsconfig.json';
import { loadEnv } from 'vite';
import path from 'node:path';
import fs from 'node:fs';

const alias = Object.entries(tsconfig.compilerOptions.paths)
  .map(([find, to]) => ({
    find,
    replacement: fileURLToPath(new URL(to[0], import.meta.url)),
  }))
  .filter(alias => !alias.find.includes('*'));

let httpsConfig = false;

if (process.env['NODE_ENV'] === 'development') {
  httpsConfig = {
    key: fs.readFileSync('./config/cert/local.key.pem'),
    cert: fs.readFileSync('./config/cert/local.cert.pem'),
  };
}

export default ({ mode }) => {
  const envDir = './config/env';
  const dir = path.join(process.cwd(), envDir);
  Object.assign(process.env, loadEnv(mode, dir, ''));
  return defineConfig({
    server: { host: '0.0.0.0', strictPort: true, https: httpsConfig, port: parseInt(process.env['PORT'] ?? '3000') },
    preview: { host: '0.0.0.0', strictPort: true, https: httpsConfig, port: parseInt(process.env['PORT'] ?? '3000') },
    define: { 'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()) },
    build: { target: ['es2015'], minify: true, sourcemap: true },
    plugins: [sveltekit()],
    resolve: { alias },
    envDir,
  });
};
