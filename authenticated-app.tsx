import React, { FC } from 'react'
import { useAuth } from './context/auth-context'
import { Button } from './comps/library'

const AuthenticatedApp: FC = () => {
    const { logout } = useAuth()

    return <Button title="log out" onPress={() => logout()} />
}

export default AuthenticatedApp
