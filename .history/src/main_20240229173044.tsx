import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/index.css'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Providers from './providers/providers.tsx'

const queryClient = new QueryClient(
  {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
}
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Providers>
  <App/>
</Providers>
  </React.StrictMode>,
)

