import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

const ErrorMessage: FC<{ error: Error }> = ({ error }) => (
    <Text style={styles.error}>{error.message}</Text>
)

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
    },
})

export { ErrorMessage }
