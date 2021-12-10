import Head from 'next/head'
import { Main } from '../components/Main'
import { About } from '../components/About'
import { Container } from '../styles/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Yeah, Its Big Brain Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
    </Container>
  )
}
