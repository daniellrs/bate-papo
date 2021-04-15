import { AppProps } from 'next/app'
import '../styles/colors.css'
import '../styles/general.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
