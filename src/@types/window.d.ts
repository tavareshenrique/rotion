import { api } from '../preload';

declare global {
  export interface Window {
    api: typeof api;
  }
}
