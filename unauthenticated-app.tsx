import React, { useState, FC, useEffect } from 'react'
import { useAuth } from './context/auth-context'

import { ErrorMessage, Button, Container, Input, Box } from './comps/library'
import { ModalComp, ModalButton, ModalContentsBase } from './comps/modal'

const PhoneNumberSignIn: FC<{
    run: Function
    signInWithPhoneNumber: Function
}> = ({ run, signInWithPhoneNumber }) => {
    const [countryCode, setCountryCode] = useState<string>('+49')
    const [phoneNum, setPhoneNum] = useState<string>('')

    const handleSubmit = () => {
        let phoneNumber = countryCode.concat(phoneNum)
        run(signInWithPhoneNumber(phoneNumber))
    }

    return (
        <>
            <Box flexDirection="row">
                <ModalComp>
                    <>
                        <ModalButton>
                            <Button title="+49" variant="modalOpenButton" />
                        </ModalButton>

                        <ModalContentsBase>
                            <ModalButton>
                                <Button
                                    title="close"
                                    variant="modalCloseButton"
                                />
                            </ModalButton>
                        </ModalContentsBase>
                    </>
                </ModalComp>
                <Input
                    value={phoneNum}
                    onChangeText={(text) => setPhoneNum(text)}
                    placeholder="650-555-3434"
                    keyboardType="numeric"
                    placeholderTextColor="#b6c2cd"
                    variant="phoneNum"
                />
            </Box>
            <Button
                title="Phone Number Sign In"
                onPress={() => handleSubmit()}
                variant="signIn"
            />
        </>
    )
}

const Confirmation: FC<{
    confirm: Function
    run: Function
}> = ({ run, confirm }) => {
    const [code, setCode] = useState('')

    return (
        <>
            <Input value={code} onChangeText={(text) => setCode(text)} />
            <Button
                title="Confirm Code"
                onPress={() => run(confirm(code))}
                variant="signIn"
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
            }, 5000)
        }
    }, [isError])

    return (
        <Container>
            {data?.confirm ? (
                <Confirmation run={run} confirm={data?.confirm} />
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
