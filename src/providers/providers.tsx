import { PropsWithChildren } from 'react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryCLient } from '@/libs/query-client'


function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryCLient}>
      <Provider store={store}>{children}</Provider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default Providers