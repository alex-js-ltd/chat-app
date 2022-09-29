import React, { FC } from 'react'
import { useAuth } from './context/auth-context'
import { Container, Button, Text } from './comps/library'

const AuthenticatedApp: FC = () => {
    const { logout } = useAuth()

    return (
        <Container>
            <Text>Welcome to the epic chat app!</Text>
            <Button
                marginTop="auto"
                title="log out"
                onPress={() => logout()}
                variant="signIn"
            />
        </Container>
    )
}

export default AuthenticatedApp
