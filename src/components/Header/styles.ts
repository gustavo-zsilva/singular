import { styled } from "@stitches/react";

export const Container = styled('header', {
    gridArea: 'Header',
    display: 'flex',
    width: '100%',
    padding: '1rem 0',
    
    'strong': {
        fontSize: '1.2rem',
    }
})