if (typeof globalThis.structuredClone !== "function") {
  globalThis.structuredClone = function <T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  };
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
