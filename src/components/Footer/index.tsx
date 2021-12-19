import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Container } from './styles'

export function Footer() {
    return (
        <Container>
            <section>
                <strong>singular</strong>
                <span>Feito por Gustavo Silva</span>
            </section>
            <section>
                <a
                    href="https://github.com/gustavo-zsilva/singular"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FiGithub color="#000" size={32} />
                </a>
                <a
                    href="https://www.linkedin.com/in/gustavo-silva-47b3a21b1/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FiLinkedin color="#000" size={32} />
                </a>
            </section>
        </Container>
    )
}