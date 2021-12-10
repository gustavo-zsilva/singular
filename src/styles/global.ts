import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'body': {
        maxWidth: '100rem',
        margin: 'auto',
        backgroundColor: '#151718',
        color: '#ECEDEE',
        fontFamily: 'Ubuntu',
    }
})