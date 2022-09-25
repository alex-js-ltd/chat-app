import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { FC } from 'react'

const ErrorMessage: FC<{ error: Error }> = ({ error }) => (
    <Text style={styles.error}>{error.message}</Text>
)

const Button: FC<{ onPress: any; title: string }> = ({ onPress, title }) => (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#00d4ff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },

    text: {
        color: '#0a2540',
    },
})

export { ErrorMessage, Button }
