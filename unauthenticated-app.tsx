// @ts-nocheck
import React, { useState } from 'react'
import { Button, TextInput, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'

const UnAuthenticatedApp = () => {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null)

    const [code, setCode] = useState('')

    // Handle the button press
    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
        setConfirm(confirmation)
    }

    const confirmCode = async () => {
        try {
            await confirm.confirm(code)
            console.log('User signed in')
        } catch (error) {
            console.log('Invalid code.')
        }
    }

    if (!confirm) {
        return (
            <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+49 1512-367-6818')}
            />
        )
    }

    return (
        <>
            <TextInput
                style={styles.input}
                value={code}
                onChangeText={(text) => setCode(text)}
            />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default UnAuthenticatedApp
