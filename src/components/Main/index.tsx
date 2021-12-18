import Image from 'next/image'
import { Header } from '../Header'
import { Container, LandingMessage, Hero } from "./styles"

export function Main() {
    return (
        <Container>
            <Header />

            <LandingMessage>
                <strong>
                    priorize seus estudos,
                    controle sua rotina
                </strong>
                <span>
                    e consiga boas notas.
                </span>
            </LandingMessage>

            <Hero>
                <Image
                    width={500}
                    height={500}
                    src="/hero.svg"
                    alt="Hero"
                />
            </Hero>
        </Container>
    )
}