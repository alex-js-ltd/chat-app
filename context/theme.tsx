import { createTheme, spacing } from '@shopify/restyle'

const baseTheme = {
    colors: {
        backgroundColor: '#0a2540',
        buttonBackground: '#02bcf5',
        buttonColor: '#0A2540',
        textColor: '#adbdcc',
        inputBackground: '#0c2e4e',
        inputBackgroundAlt: '#274869',
        inputPlaceHolderColor: '#b6c2cd',
        inputErrorAccentColor: '#ff5996',
        inputTextColor: '#fff',
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
    ...baseTheme,
    buttonVariants: {
        defaults: {},
        signIn: {
            color: 'buttonColor',
            paddingHorizontal: 'm',
            paddingVertical: 's',
            backgroundColor: 'buttonBackground',
            borderRadius: 4,
        },
    },
    textVariants: {
        body: {
            color: 'textColor',
        },
        button: {
            color: 'buttonColor',
        },
        error: {
            color: 'inputErrorAccentColor',
        },
    },
})

export type Theme = typeof theme
export default theme
