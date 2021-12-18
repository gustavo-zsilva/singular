import { styled } from "../../styles/theme";

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto 1fr',
    gap: '4rem 6rem',

    height: '100vh',
    width: '100%',
    padding: '2rem 0',

    backgroundImage: 'url(/wave.svg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',

    'main': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'fit-content',

        gap: '2rem',
        gridColumn: 'span 3',
        
        background: '$primaryColor',
        padding: '1rem 2rem',
        borderRadius: '.2rem',
        position: 'relative',

        'strong': {
            position: 'absolute',
            top: '0',
            paddingTop: '1rem',
            
            fontSize: '1.5rem',
        },

        'span': {
            display: 'flex',
            flexDirection: 'column',

            lineHeight: '1.6rem',
            fontSize: '1.2rem',

            maxWidth: '60rem',
            paddingLeft: '1.2rem',
            borderLeft: '4px solid $baseColor',
        }
    },

    'section': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem',

        border: '3px solid $primaryColor',
        padding: '0 1rem 2rem 1rem',
        borderRadius: '.2rem',
        position: 'relative',

        cursor: 'pointer',

        'span': {
            position: 'absolute',
            top: 0,
            left: 0,

            padding: '1rem .8rem',
            border: '3px solid $primaryColor',
            borderTop: 'none',
            borderRadius: '0 0 .8rem .8rem',

            background: '$baseColor',
            transform: 'translateY(-3px)',
            marginLeft: '.8rem',

            fontWeight: 'bold',
        },

        'picture': {
            background: '$baseColor',
            transform: 'translateY(-3px)',
            border: '3px solid $primaryColor',
            borderTop: 'none',
            
            padding: '3rem 1.5rem',
            borderRadius: '0 0 999px 999px',
            lineHeight: '0',

            '&:hover': {

            }
        },

        'p': {
            lineHeight: '1.5rem',
            fontSize: '1.2rem'
        },

        '&:focus-within': {
            border: '3px solid $secondaryColor',
        }
    }
})
