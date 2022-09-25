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
          reset: Function
      }
    | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

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

    const signInWithPhoneNumber = async (phoneNumber: any) => {
        return auth()
            .signInWithPhoneNumber(phoneNumber)
            .then((c) => setConfirm(c))
    }

    const confirmCode = async (code: any) => {
        return await confirm?.confirm(code)
    }

    const reset = () => setConfirm(null)

    const logout = async () => {
        return await auth()
            .signOut()
            .then(() => reset())
    }

    const value = {
        user,
        logout,
        signInWithPhoneNumber,
        confirm,
        confirmCode,
        reset,
    }

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
