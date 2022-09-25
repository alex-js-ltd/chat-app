import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

type User = FirebaseAuthTypes.User | null
type AuthProviderProps = { children: ReactNode }

const AuthContext = createContext<
    | {
          user: User
          logout: Function
          signInWithPhoneNumber: Function
          confirm: FirebaseAuthTypes.ConfirmationResult | null
          confirmCode: Function
      }
    | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

const logout = async () => {
    return await auth().signOut()
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>(null)

    useEffect(() => {
        // Auth listener
        const unsubscribe = auth().onAuthStateChanged((user) => {
            user ? setUser(user) : setUser(null)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // If null, no SMS has been sent
    const [confirm, setConfirm] =
        useState<FirebaseAuthTypes.ConfirmationResult | null>(null)

    // Handle the button press
    const signInWithPhoneNumber = async (phoneNumber: any) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
        setConfirm(confirmation)
    }

    const confirmCode = async (code: any) => {
        try {
            await confirm?.confirm(code)
            console.log('User signed in')
        } catch (error) {
            console.log('Invalid code.')
        }
    }

    const value = { user, logout, signInWithPhoneNumber, confirm, confirmCode }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthContext provider`)
    }
    return context
}

export { AuthProvider, useAuth }
