/// <reference types="react-scripts" />
// Extending ProcessEnv to have autocompletion of .env variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_API_KEY: string;
    REACT_APP_BASE_URL: string;
    REACT_APP_API_URL: string;
  }
}
