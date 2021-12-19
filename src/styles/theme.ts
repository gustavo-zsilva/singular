import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    theme: {
        colors: {
            baseColor: '#544179',
            primaryColor: '#6166B3',
            secondaryColor: '#61E786',
            tertiaryColor: '#6166b396',
        },
    },
    media: {
        sm: '(min-width: 0px)',
        md: '(min-width: 900px)',
        lg: '(min-width: 1600px)',
        xl: '(min-width: 1900px)',
    }
})

// #FF7070
// #FF5B5B