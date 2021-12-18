import Image from 'next/image'

import { FiShare2, FiCode } from 'react-icons/fi'
import { Container } from "./styles"

export function About() {
    return (
        <Container>
            
            <main>
                <strong>Motivação</strong>
            
                <span>
                    Por causa da pandemia, muitas pessoas precisam e precisarão de reforço escolar.
                    É isso que o Singular procura resolver, por meio de uma plataforma onde se pode encontrar conteúdos escolares do ensino médio,
                    dando oportunidade de professores e alunos compartilharem seus conhecimentos sobre cada matéria.
                </span>

                <Image
                    width={300}
                    height={300}
                    src="/studying.svg"
                    alt="Studying"
                />
            </main>

            <section>
                <span>Comunidade</span>
                <picture>
                    <FiShare2 size={42} />
                </picture>
                <p>
                    Singular conta com a comunidade para produzir conteúdos, compartilhar seu conhecimento e ajudar uns aos outros.
                </p>
                <p>
                    Tem algo que você sabe, que acha que seria útil para outros? Não precisa ser especialista em tudo para fazer a diferença.
                </p>
            </section>
            <section>
                <span>Open-Source</span>
                <picture>
                    <FiCode size={42} />
                </picture>

                <p>
                    A plataforma será totalmente código aberto, e tudo o que faz o aplicativo funcionar por baixo dos panos estará disponível 
                    no Github.
                </p>
                <p>
                    Isso torna uma plataforma muito mais estável e com menos chance de haver vazamentos ou <i>hacks</i>, além de 
                    atualizações frequentes.
                </p>
            </section>
            <section>
                <picture>
                    <FiShare2 size={42} />
                </picture>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam maiores quas ea, sunt sit nemo expedita atque aliquam cumque! Est dolorem itaque saepe! Beatae quas voluptatem nesciunt autem voluptates accusamus!
                </p>
            </section>
            
        </Container>
    )
}