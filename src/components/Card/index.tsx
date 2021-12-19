import { ReactNode } from 'react'
import { Container } from './styles'

type CardProps = {
    icon: ReactNode,
    keyword: string,
    children: ReactNode,
}

export function Card({ icon, keyword, children }: CardProps) {
    return (
        <Container>
            <span>{keyword}</span>
            <picture>
                {icon}
            </picture>
            
            {children}
        </Container>
    )
}