import '@/styles/globals.css'
import { useCronitor } from '@cronitorio/cronitor-rum-nextjs'

export default function App({ Component, pageProps }) {
  useCronitor(process.env.CRONITOR_CLIENT_KEY)
  return <Component {...pageProps} />
}
