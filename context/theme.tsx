import { createTheme, spacing } from '@shopify/restyle'

const palette = {
    backgroundColor: '#0a2540',
    buttonBackground: '#02bcf5',
    buttonColor: '#0A2540',
    textColor: '#adbdcc',
    inputBackground: '#0c2e4e',
    inputBackgroundAlt: '#274869',
    inputPlaceHolderColor: '#b6c2cd',
    inputErrorAccentColor: '#ff5996',
    inputTextColor: '#fff',
}

export const theme = createTheme({
    colors: {
        backgroundColor: palette.backgroundColor,
        buttonBackground: palette.buttonBackground,
        buttonColor: palette.buttonColor,
        textColor: palette.textColor,
        inputBackground: palette.inputBackground,
        inputBackgroundAlt: palette.inputBackgroundAlt,
        inputPlaceHolderColor: palette.inputPlaceHolderColor,
        inputErrorAccentColor: palette.inputErrorAccentColor,
        inputTextColor: palette.inputTextColor,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    buttonVariants: {
        defaults: {},
        signIn: {
            color: 'buttonColor',
            paddingVertical: 's',
            paddingHorizontal: 'm',
            backgroundColor: 'buttonBackground',
            borderRadius: 4,
        },
    },

    inputVariants: {
        defaults: {
            color: 'inputTextColor',
            paddingVertical: 's',
            paddingHorizontal: 's',
            backgroundColor: 'inputBackground',
            borderRadius: 4,
            marginBottom: 's',
        },
        signIn: {},
    },
    textVariants: {
        body: {
            color: 'textColor',
        },
        button: {
            color: 'buttonColor',
            textAlign: 'center',
        },
        error: {
            color: 'inputErrorAccentColor',
        },
    },
    containerVariants: {
        defaults: {
            margin: 'l',
            flex: 1,
            justifyContent: 'center',
        },
        signIn: {},
    },
    safeAreaVariants: {
        defaults: {
            flex: 1,
            backgroundColor: 'backgroundColor',
        },
        signIn: {},
    },
})

export type Theme = typeof theme
export default theme
