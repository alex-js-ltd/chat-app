import React, { useState, FC, useEffect } from 'react'
import { useAuth } from './context/auth-context'

import { ErrorMessage, Button, Container, Input } from './comps/library'

const PhoneNumberSignIn: FC<{
    run: Function
    signInWithPhoneNumber: Function
    error: Error
    isError: boolean
}> = ({ run, signInWithPhoneNumber, error, isError }) => {
    const [phoneNum, setPhoneNum] = useState<string>('')

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

const Confirmation: FC<{
    data: any
    run: Function
    error: Error
    isError: boolean
    reset: Function
}> = ({ run, data, error, isError, reset }) => {
    const [code, setCode] = useState('')

    return (
        <>
            <Input value={code} onChangeText={(text) => setCode(text)} />
            <Button
                title="Confirm Code"
                onPress={() => run(data?.confirm(code))}
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

const UnAuthenticatedApp = () => {
    const { data, signInWithPhoneNumber, run, error, isError, reset } =
        useAuth()

    useEffect(() => {
        console.log('data', data?.confirm)
    }, [data])

    return (
        <Container>
            {data?.confirm ? (
                <Confirmation
                    run={run}
                    data={data}
                    error={error}
                    isError={isError}
                    reset={reset}
                />
            ) : (
                <PhoneNumberSignIn
                    run={run}
                    signInWithPhoneNumber={signInWithPhoneNumber}
                    error={error}
                    isError={isError}
                />
            )}
        </Container>
    )
}

export default UnAuthenticatedApp
