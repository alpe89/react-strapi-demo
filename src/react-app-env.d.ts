/// <reference types="react-scripts" />
// Extending ProcessEnv to have autocompletion of .env variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    API_KEY: string;
    BASE_URL: string;
  }
}
