import { FC } from 'react'
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

const ErrorMessage: FC<{ error: Error }> = ({ error }) => (
    <Text variant="error">{error.message}</Text>
)

const buttonVariant = createVariant({ themeKey: 'buttonVariants' })
const ButtonContainer = createRestyleComponent<
    VariantProps<Theme, 'buttonVariants'> &
        React.ComponentProps<typeof Pressable>,
    Theme
>([buttonVariant], Pressable)

const Button: FC<{
    onPress: any
    title: string
    variant: any
}> = ({ onPress, title, variant }) => (
    <ButtonContainer variant={variant} onPress={onPress}>
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

export { ErrorMessage, Button, Container, SafeArea, Input, Box, Text }
