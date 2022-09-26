import { FC } from 'react'
import {
    createText,
    createBox,
    createVariant,
    VariantProps,
    createRestyleComponent,
} from '@shopify/restyle'
import { Theme } from '../context/theme'

import { Pressable } from 'react-native'

const Text = createText<Theme>()
const Box = createBox<Theme>()

const ErrorMessage: FC<{ error: Error }> = ({ error }) => (
    <Text variant="error">{error.message}</Text>
)

const buttonVariant = createVariant({ themeKey: 'buttonVariants' })
const ButtonContainer = createRestyleComponent<
    VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>,
    Theme
>([buttonVariant], Box)

const Button: FC<{ onPress: any; title: string }> = ({ onPress, title }) => (
    <Pressable onPress={onPress}>
        <ButtonContainer variant="signIn">
            <Text variant="button">{title}</Text>
        </ButtonContainer>
    </Pressable>
)

export { ErrorMessage, Button }
