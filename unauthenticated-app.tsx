import React, { useState, FC, useEffect } from 'react'
import { useAuth } from './context/auth-context'

import { ErrorMessage, Button, Container, Input } from './comps/library'

const PhoneNumberSignIn: FC<{
    run: Function
    signInWithPhoneNumber: Function
}> = ({ run, signInWithPhoneNumber }) => {
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
        </>
    )
}

const Confirmation: FC<{
    data: any
    run: Function
}> = ({ run, data }) => {
    const [code, setCode] = useState('')

    return (
        <>
            <Input value={code} onChangeText={(text) => setCode(text)} />
            <Button
                title="Confirm Code"
                onPress={() => run(data?.confirm(code))}
            />
        </>
    )
}

const UnAuthenticatedApp = () => {
    const { data, signInWithPhoneNumber, run, error, isError, reset } =
        useAuth()

    useEffect(() => {
        if (isError) {
            setTimeout(() => {
                reset()
            }, 2000)
        }
    }, [isError])

    return (
        <Container>
            {data?.confirm ? (
                <Confirmation run={run} data={data} />
            ) : (
                <PhoneNumberSignIn
                    run={run}
                    signInWithPhoneNumber={signInWithPhoneNumber}
                />
            )}

            {isError ? <ErrorMessage error={error} /> : null}
        </Container>
    )
}

export default UnAuthenticatedApp
