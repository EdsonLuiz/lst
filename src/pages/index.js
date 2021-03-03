import Head from 'next/head'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LST record - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta>
        </meta>
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  )
}
