import { styled } from '../../styles/theme'

export const Container = styled('footer', {
    display: 'flex',

    padding: '2rem 0',
    width: '100%',
    justifyContent: 'space-between',

    'section:first-child': {
        display: 'flex',
        flexDirection: 'column',
        gap: '.4rem',

        'strong': {
            fontSize: '1.2rem',
        }
    },

    'section:last-child': {
        display: 'flex',
        gap: '.6rem',

        'a': {
            display: 'flex',
            textDecoration: 'none',
            background: '#ECEDEE',
            borderRadius: '50%',
            padding: '1rem',

            '&:hover': {
                filter: 'brightness(0.9)',
            }
        }
    }
})