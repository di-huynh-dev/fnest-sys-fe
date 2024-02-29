import { PropsWithChildren } from 'react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
})

function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryCLient}>
      <Provider store={store}>{children}</Provider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default Providers