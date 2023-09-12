export const isDev = () => import.meta.env.MODE === 'development';
export * from './widgets/index';
export * from './interface/index';
export { default as store } from './store';
