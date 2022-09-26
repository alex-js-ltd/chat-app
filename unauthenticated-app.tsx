import React, { useState, FC } from 'react'
import { useAuth } from './context/auth-context'
import { useAsync } from './utils/useAsync'
import { ErrorMessage, Button, Container, Input } from './comps/library'

const PhoneNumberSignIn: FC = () => {
    const [phoneNum, setPhoneNum] = useState<string>('')

    const { signInWithPhoneNumber, confirm } = useAuth()
    const { run, isError, error, isLoading } = useAsync()

    if (confirm || isLoading) {
        return null
    }

    return (
        <>
            <Input
                value={phoneNum}
                onChangeText={(text) => setPhoneNum(text)}
                placeholder="+1 650-555-3434"
                keyboardType="numeric"
                placeholderTextColor="#b6c2cd"
            />
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
            <Input value={code} onChangeText={(text) => setCode(text)} />
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
    <Container>
        <PhoneNumberSignIn />
        <Confirmation />
    </Container>
)

export default UnAuthenticatedApp
