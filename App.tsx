import { SafeAreaView } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useAuth } from './context/auth-context'

import AuthenticatedApp from './authenticated-app'
import UnAuthenticatedApp from './unauthenticated-app'

const App: FC = () => {
    const { user, logout } = useAuth()

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </SafeAreaView>
    )
}

export default App
