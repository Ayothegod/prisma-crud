import '@/styles/globals.css'
import { UserContextProvider } from '../hooks/hooks'

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
