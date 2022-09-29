import React, { useState, FC, useEffect } from 'react'
import { useAuth } from './context/auth-context'

import { ErrorMessage, Button, Container, Input, Box } from './comps/library'
import { ModalProvider, ModalButton, ModalContentsBase } from './comps/modal'

import { countryCodes } from './utils/countryCodes'
import { FlatList } from 'react-native'
import { CountryRow } from './comps/country-row'

import { Step } from './comps/step'

const CountryCodes: FC<{ code: string; setCountryCode: Function }> = ({
    code,
    setCountryCode,
}) => (
    <ModalProvider>
        <ModalButton>
            <Button title={code} variant="modalOpenButton" />
        </ModalButton>
        <ModalContentsBase>
            <ModalButton>
                <Button title="close" variant="modalCloseButton" />
            </ModalButton>
            <FlatList
                data={countryCodes}
                renderItem={({ item }) => (
                    <CountryRow
                        iso={item.country}
                        code={item.code}
                        setCountryCode={setCountryCode}
                    />
                )}
            />
        </ModalContentsBase>
    </ModalProvider>
)

const PhoneNumberSignIn: FC<{
    run: Function
    signInWithPhoneNumber: Function
}> = ({ run, signInWithPhoneNumber }) => {
    const [countryCode, setCountryCode] = useState<string>('+1')
    const [phoneNum, setPhoneNum] = useState<string>('6505553434')

    const handleSubmit = () => {
        const fullPhoneNum = countryCode.concat(phoneNum)
        run(signInWithPhoneNumber(fullPhoneNum))
    }

    return (
        <>
            <Box flexDirection="row">
                <CountryCodes
                    code={countryCode}
                    setCountryCode={setCountryCode}
                />
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
                variant="signIn"
            />
        </>
    )
}

const UnAuthenticatedApp = () => {
    const { data, signInWithPhoneNumber, run, error, isError, reset } =
        useAuth()

    return (
        <Container>
            {/* {data?.confirm ? (
                <Confirmation run={run} data={data} />
            ) : (
                <PhoneNumberSignIn
                    run={run}
                    signInWithPhoneNumber={signInWithPhoneNumber}
                />
            )}

            {isError ? <ErrorMessage error={error} /> : null} */}

            <Step />
        </Container>
    )
}

export default UnAuthenticatedApp
