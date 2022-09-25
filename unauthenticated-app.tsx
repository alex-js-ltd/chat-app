import React, { useState, FC, Fragment } from 'react'
import { Button, TextInput, StyleSheet } from 'react-native'
import { useAuth } from './context/auth-context'

const PhoneNumberSignIn: FC = () => {
    const { signInWithPhoneNumber, confirm } = useAuth()

    if (confirm) {
        return null
    }

    return (
        <Button
            title="Phone Number Sign In"
            onPress={() => signInWithPhoneNumber('+49 1512-367-6818')}
        />
    )
}

const Confirmation: FC = () => {
    const { confirm, confirmCode } = useAuth()

    const [code, setCode] = useState('')

    if (!confirm) {
        return null
    }

    return (
        <Fragment>
            <TextInput
                style={styles.input}
                value={code}
                onChangeText={(text) => setCode(text)}
            />
            <Button title="Confirm Code" onPress={() => confirmCode(code)} />
        </Fragment>
    )
}

const UnAuthenticatedApp = () => (
    <Fragment>
        <PhoneNumberSignIn />
        <Confirmation />
    </Fragment>
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
