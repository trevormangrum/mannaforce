import type { AppProps /*, AppContext */ } from 'next/app'
import '../../styles/main.scss';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
  )
}

export default MyApp
