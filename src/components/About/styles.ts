import { styled } from "../../styles/theme";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',

    padding: '2rem 0',

    'main': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'fit-content',

        gap: '2rem',
        
        background: '$tertiaryColor',
        border: '3px solid $primaryColor',
        padding: '1rem 2rem',
        borderRadius: '.2rem',
        position: 'relative',

        'div': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',

            'strong': {
                fontSize: '1.5rem',
            },
    
            'span': {
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
    
                lineHeight: '1.6rem',
                fontSize: '1.2rem',
    
                maxWidth: '60rem',
                paddingLeft: '1.2rem',
                borderLeft: '4px solid $secondaryColor',

                '@sm': {
                    fontSize: '1rem',
                },
                '@md': {
                    fontSize: '1.2rem'
                }
            }
        },

        'picture': {
            '@sm': {
                width: 0,
            },
            '@md': {
                width: 'initial'
            }
        }
    },
    
})

export const CardGroup = styled('div', {
    
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '6rem',
    height: '100%',

    backgroundImage: 'url(/wave.svg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    '@sm': {
        display: 'flex',
        flexDirection: 'column',
    },
    '@media (min-width: 1430px)': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    }
})
