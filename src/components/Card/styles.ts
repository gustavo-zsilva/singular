import { styled } from '../../styles/theme'

export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem',

    border: '3px solid $primaryColor',
    padding: '0 1rem 3rem 1rem',
    borderRadius: '.2rem',
    position: 'relative',

    cursor: 'pointer',
    transition: '.2s',

    'span': {
        position: 'absolute',
        top: 0,
        left: 0,

        padding: '1rem .8rem',
        border: 'inherit',
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
        border: 'inherit',
        borderTop: 'none',
        
        padding: '3rem 1.5rem',
        borderRadius: '0 0 999px 999px',
        lineHeight: '0',
    },

    'p': {
        lineHeight: '1.5rem',
        fontSize: '1.2rem'
    },

    '&:hover': {
        border: '3px solid $secondaryColor',
        background: '$baseColor',
    }
}) 