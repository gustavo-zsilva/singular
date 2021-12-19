import { useButton } from '@react-aria/button'
import { useRef } from 'react'

import { FiArrowRight } from 'react-icons/fi'
import { Container } from './styles'

export function Header() {

    const buttonRef = useRef()
    const { buttonProps } = useButton({}, buttonRef)

    function handleSendToGithub() {
        window.open('https://github.com/gustavo-zsilva/singular')
    }

    return (
        <Container>
            <strong>singular</strong>
            <button
                {...buttonProps}
                ref={buttonRef}
                onClick={handleSendToGithub}
            >
                Apoie esta ideia
                <FiArrowRight size={22} />
            </button>
        </Container>
    )
}