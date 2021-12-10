import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
})

export const Text = styled('strong', {
    fontSize: '1.2rem'
})

export const LinearGradient = styled('div', {
    width: '4px',
    height: '100%',
    background: 'linear-gradient(#FF3366, #20A4F3)'
})

export const Section = styled('section', {
    display: 'flex',
    gap: '1rem',
    padding: '.8rem'
})