import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'body': {
        maxWidth: '90rem',
        margin: 'auto',
        backgroundColor: '$baseColor',
        color: '#ECEDEE',
        fontFamily: 'Ubuntu',
    }
})