import { PropsWithChildren } from 'react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryCLient } from '@/libs/query-client'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'


function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryCLient}>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default Providers