import Head from 'next/head'
import Layout from '../styles/Layout.module.css'
import Algorithms from '../components/Algorithms.js'


export default function Algos() {
  return (
    <div className={Layout.container}>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="icon" href="/logo-dark.png" />
        <meta name="keywords" content="web development, programming" />
      </Head>
      <main className={Layout.main}>
        <Algorithms />
      </main>
    </div>
  )
}

