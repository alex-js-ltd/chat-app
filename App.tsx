import React, { FC } from 'react'
import { useAuth } from './context/auth-context'
import { SafeArea } from './comps/library'
import AuthenticatedApp from './authenticated-app'
import UnAuthenticatedApp from './unauthenticated-app'

const App: FC = () => {
    const { user } = useAuth()

    return (
        <SafeArea>
            {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </SafeArea>
    )
}

export default App
