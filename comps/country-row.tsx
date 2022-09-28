import React, { FC } from 'react'
import { Text, ButtonContainer } from './library'
import { ModalButton } from './modal'

const CountryRow: FC<{
    iso: string
    code: string
    setCountryCode: Function
}> = ({ iso, code, setCountryCode }) => {
    return (
        <ModalButton>
            <ButtonContainer
                variant="countryRow"
                onPress={() => setCountryCode(code)}
            >
                <Text>{iso}</Text>
                <Text>{code}</Text>
            </ButtonContainer>
        </ModalButton>
    )
}

export { CountryRow }
