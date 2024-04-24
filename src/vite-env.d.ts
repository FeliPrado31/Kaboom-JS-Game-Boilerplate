/// <reference types="vite/client" />

import 'kaboom/global';

declare module '*.png' {
  const src: string;
  export default src;
}
