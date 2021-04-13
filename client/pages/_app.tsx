import type { AppProps } from 'next/app'
import Provider from 'store'
import '../styles/index.less'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
