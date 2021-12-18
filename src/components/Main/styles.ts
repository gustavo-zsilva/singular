import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `'Header Header' 'Message Hero'`,

    height: '100vh',
    width: '100%',
    paddingBottom: '10rem',

    'div': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

        'strong': {
            fontSize: '3.5rem',
        },

        'span': {
            fontWeight: 'bold',
            fontSize: '1.5rem',
        }
    },
})

export const LandingMessage = styled('div', {
    gridArea: 'Message',
    gap: '3rem',
})

export const Hero = styled('div', {
    gridArea: 'Hero',
})
