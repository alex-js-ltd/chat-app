import React, { FC } from 'react'
import { Container, Text } from './library'

const CountryRow: FC<{ iso: string; code: string }> = ({ iso, code }) => (
    <Container variant="countryRow">
        <Text>{iso}</Text>
        <Text>{code}</Text>
    </Container>
)

export { CountryRow }
