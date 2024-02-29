// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/index.css'
import Providers from './providers/providers'


const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Providers>
         <App/>
      </Providers>
    </React.StrictMode>
  )
}

