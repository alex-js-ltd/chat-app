import { FC, useEffect } from 'react'
import {
    createText,
    createBox,
    createVariant,
    VariantProps,
    createRestyleComponent,
} from '@shopify/restyle'
import { Theme } from '../context/theme'

import {
    Pressable,
    SafeAreaView,
    TextInput,
    GestureResponderEvent,
} from 'react-native'

const Text = createText<Theme>()
const Box = createBox<Theme>()

const buttonVariant = createVariant({ themeKey: 'buttonVariants' })
const ButtonContainer = createRestyleComponent<
    VariantProps<Theme, 'buttonVariants'> &
        React.ComponentProps<typeof Pressable>,
    Theme
>([buttonVariant], Pressable)

const Button: FC<{
    onPress?: (event: GestureResponderEvent) => void
    title: string
    [rest: string]: any
}> = ({ onPress, title, ...rest }) => (
    <ButtonContainer onPress={onPress} {...rest}>
        <Text variant="button">{title}</Text>
    </ButtonContainer>
)

const containerVariant = createVariant({ themeKey: 'containerVariants' })
const Container = createRestyleComponent<
    VariantProps<Theme, 'containerVariants'> & React.ComponentProps<typeof Box>,
    Theme
>([containerVariant], Box)

const safeAreaVariant = createVariant({ themeKey: 'safeAreaVariants' })
const SafeArea = createRestyleComponent<
    VariantProps<Theme, 'safeAreaVariants'> &
        React.ComponentProps<typeof SafeAreaView>,
    Theme
>([safeAreaVariant], SafeAreaView)

const inputVariant = createVariant({ themeKey: 'inputVariants' })
const Input = createRestyleComponent<
    VariantProps<Theme, 'inputVariants'> &
        React.ComponentProps<typeof TextInput>,
    Theme
>([inputVariant], TextInput)

const ErrorMessage: FC<{ error: Error; reset: Function }> = ({
    error,
    reset,
}) => {
    useEffect(() => {
        if (
            error?.message ===
            `[auth/code-expired] The SMS code has expired. Please re-send the verification code to try again.`
        ) {
            setTimeout(() => {
                reset()
            }, 2000)
        }
        console.log(error.message)
    }, [error])

    return (
        <Container variant="error">
            <Text variant="error">{error.message}</Text>
        </Container>
    )
}

export {
    ErrorMessage,
    Button,
    Container,
    SafeArea,
    Input,
    Box,
    Text,
    ButtonContainer,
}
