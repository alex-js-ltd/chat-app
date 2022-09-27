import React, { FC } from 'react'
import { useAuth } from './context/auth-context'
import { Container, Button } from './comps/library'

const AuthenticatedApp: FC = () => {
    const { logout } = useAuth()

    return (
        <Container>
            <Button title="log out" onPress={() => logout()} variant="signIn" />
        </Container>
    )
}

export default AuthenticatedApp
