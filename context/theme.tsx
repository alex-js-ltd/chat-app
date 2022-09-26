import { createTheme } from '@shopify/restyle'

const BaseTheme = {
    colors: {
        text: '#252A31',
        background: 'white',
        primary: '#006CFF',
        black: '#252A31',
        white: 'white',
        red: '#FF3E5C',
        transparent: 'transparent',
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
}

export const theme = createTheme({
    ...BaseTheme,
    buttonVariants: {
        defaults: {},
        signIn: {
            color: 'white',
        },
    },
    textVariants: {
        body: {
            color: 'black',
        },
        button: {
            color: 'white',
        },
        error: {
            color: 'red',
        },
    },
})

export type Theme = typeof theme
export default theme
