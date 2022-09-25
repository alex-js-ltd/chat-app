import { View, Text, Button } from 'react-native'
import React, { FC } from 'react'
import { useAuth } from './context/auth-context'

const AuthenticatedApp: FC = () => {
    const { logout } = useAuth()

    return (
        <View>
            <Text>AuthenticatedApp</Text>
            <Button title="log out" onPress={() => logout()} />
        </View>
    )
}

export default AuthenticatedApp
