import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Main from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Thinh Ha | Back-end Developer</title>
        <meta
          name="description"
          content="Thinh Ha portfolio website using Next.js"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../assets/favicon/favicon-16x16.png"
        />
        <link rel="../assets/favicon/manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />

      <Main />
    </div>
  )
}
