import Head from 'next/head'

import { Main } from '../components/Main'
import { About } from '../components/About'
import { Footer } from '../components/Footer'

import { Container } from '../styles/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Singular</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Footer />
    </Container>
  )
}
