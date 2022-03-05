import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import GlobalContextProvider from '../providers/GlobalContextProvider'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
