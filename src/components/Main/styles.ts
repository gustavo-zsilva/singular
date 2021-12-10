import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
})

export const Heading = styled('h1', {
    fontSize: '5rem',
    fontWeight: 'bold',
    letterSpacing: '2rem',
})

export const TopHeading = styled('h3', {
    fontSize: '3rem',
    letterSpacing: '1rem'
})

export const LinearGradient = styled('div', {
    padding: '.2rem',
    background: 'linear-gradient(90deg, #FF3366, #20A4F3)',
    marginTop: '3rem',
    borderRadius: '.2rem',
})

export const OverviewText = styled('div', {
    fontWeight: '300',
    fontSize: '1.4rem',
    background: '#151718',
    padding: '1rem',
    borderRadius: '.2rem',
})

export const ScrollIndicator = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    height: '4px',
    width: '100%',
    background: 'linear-gradient(90deg, #FF3366, #20A4F3)',
    borderRadius: '.2rem',
    marginBottom: '2rem'
})