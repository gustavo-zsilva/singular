import { styled } from "@stitches/react";

export const Container = styled('header', {
    gridArea: 'Header',
    display: 'flex',
    width: '100%',
    padding: '1rem 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    'strong': {
        fontSize: '1.2rem',
    },

    'button': {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',

        border: 0,
        borderRadius: '.2rem',
        padding: '.6rem .8rem',

        background: '$primaryColor',
        color: 'inherit',
        fontSize: '1.1rem',
        cursor: 'pointer',
        boxShadow: '0 0 3px 5px rgba(0, 0, 0, 0.03)',
        transition: '.2s',

        '&:hover': {
            background: '$secondaryColor',
            color: '#000',
        }
    }
})