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

const PhoneNumberSignIn: FC = () => {
    const { signInWithPhoneNumber, run } = useAuth()

    const [countryCode, setCountryCode] = useState<string>('+44')
    const [phoneNum, setPhoneNum] = useState<string>('')

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

const UnAuthenticatedApp = () => {
    const { data, error, isError } = useAuth()

    return (
        <Container>
            {data?.confirm ? <Step /> : <PhoneNumberSignIn />}
            {isError ? <ErrorMessage error={error} /> : null}
        </Container>
    )
}

export default UnAuthenticatedApp
