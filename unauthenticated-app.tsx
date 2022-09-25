import React, { useState, FC } from 'react'
import { Button, TextInput, StyleSheet, Text } from 'react-native'
import { useAuth } from './context/auth-context'
import { useAsync } from './utils/useAsync'
import { ErrorMessage } from './comps/lib'

const PhoneNumberSignIn: FC = () => {
    const { signInWithPhoneNumber, confirm } = useAuth()
    const { run, isError, error } = useAsync()

    if (confirm) {
        return null
    }

    return (
        <>
            <Button
                title="Phone Number Sign In"
                onPress={() => run(signInWithPhoneNumber('+49 1512-367-6818'))}
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
    <>
        <PhoneNumberSignIn />
        <Confirmation />
    </>
)

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default UnAuthenticatedApp
