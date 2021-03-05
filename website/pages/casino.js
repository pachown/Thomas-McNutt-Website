import Head from 'next/head'
import Layout from '../styles/Layout.module.css'


export default function Casino() {
  return (
    <div className={Layout.container}>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming, portfolio, Thomas McNutt, thomas, mcnutt, software engineer, software, engineer, web, developer" />
      </Head>
      <main className={Layout.main}>
      </main>
    </div>
  )
}