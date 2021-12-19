import Image from 'next/image'

import { FiShare2, FiCode, FiDownload } from 'react-icons/fi'
import { Card } from '../Card'
import { Container, CardGroup } from "./styles"

export function About() {
    return (
        <Container>
            
            <main>
                <div>
                    <strong>Motivação</strong>
                    <span>
                        Devido à pandemia muitas pessoas precisam e precisarão de reforço escolar.
                        É isso que o Singular procura resolver, por meio de uma plataforma onde se pode encontrar conteúdos escolares do ensino médio,
                        dando oportunidade a professores e alunos a compartilharem seus conhecimentos sobre cada matéria.
                    </span>
                </div>

                <picture>
                    <Image
                        width={300}
                        height={300}
                        src="/studying.svg"
                        alt="Studying"
                    />
                </picture>
            </main>

            <CardGroup>
                <Card icon={<FiShare2 size={42} />} keyword="Comunidade">
                    <p>
                        Singular conta com a comunidade para produzir conteúdos, compartilhar seu conhecimento e ajudar uns aos outros.
                    </p>
                    <p>
                        Tem algo que você sabe, que acha que seria útil para outros? Não precisa ser especialista em tudo para fazer a diferença.
                    </p>
                </Card>
                <Card icon={<FiCode size={42} />} keyword="Open-Source">
                    <p>
                        A plataforma será totalmente código aberto, e tudo o que faz o aplicativo funcionar por baixo dos panos estará disponível 
                        no Github.
                    </p>
                    <p>
                        Isso torna uma plataforma muito mais estável e com menos chance de haver vazamentos ou <i>hacks</i>, além de 
                        atualizações frequentes.
                    </p>
                </Card>
                <Card icon={<FiDownload size={42} />} keyword="Baixável">
                    <p>
                        As videoaulas, artigos, exercícios, etc... poderão ser baixados para serem utilizados.
                    </p>
                    <p>
                        Isso permite que as pessoas que têm uma conexão de internet instável 
                        possam aproveitar o conteúdo também.
                    </p>
                </Card>
            </CardGroup>
            
        </Container>
    )
}