import React, { useState, FC, useEffect } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { useAuth } from './context/auth-context'
import { useAsync } from './utils/useAsync'
import { Button, ErrorMessage } from './comps/lib'

const PhoneNumberSignIn: FC = () => {
    const { signInWithPhoneNumber, confirm } = useAuth()
    const { run, isError, error, isLoading } = useAsync()

    if (confirm || isLoading) {
        return null
    }

    return (
        <>
            <Button
                title="Phone Number Sign In"
                onPress={() => run(signInWithPhoneNumber('+1 650-555-3434'))}
            />

            {isError ? <ErrorMessage error={error} /> : null}
        </>
    )
}

const Confirmation: FC = () => {
    const [code, setCode] = useState('')

    const { confirm, confirmCode, reset } = useAuth()
    const { run, isError, error } = useAsync()

    if (!confirm) {
        return null
    }

    return (
        <>
            <TextInput
                style={styles.input}
                value={code}
                onChangeText={(text) => setCode(text)}
            />
            <Button
                title="Confirm Code"
                onPress={() => run(confirmCode(code))}
            />
            {isError ? (
                <>
                    <ErrorMessage error={error} />
                    <Button title="resend" onPress={() => reset()} />
                </>
            ) : null}
        </>
    )
}

const UnAuthenticatedApp = () => (
    <View style={styles.container}>
        <PhoneNumberSignIn />
        <Confirmation />
    </View>
)

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#00d4ff',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a2540',
    },
})

export default UnAuthenticatedApp
