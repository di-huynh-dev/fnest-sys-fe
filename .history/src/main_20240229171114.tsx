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

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
       <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
    </Provider>,
  </React.StrictMode>,
)
