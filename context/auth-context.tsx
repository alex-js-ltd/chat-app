import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { useAsync } from '../utils/useAsync'

type User = FirebaseAuthTypes.User | null
type AuthProviderProps = { children: ReactNode }

const AuthContext = createContext<
    | {
          user: User
          data: FirebaseAuthTypes.ConfirmationResult | null
          run: Function
          error: Error
          isError: boolean
          reset: Function

          signInWithPhoneNumber: Function

          logout: Function
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

    const {
        data,
        status,
        error,
        isLoading,
        isIdle,
        isError,
        isSuccess,
        run,
        setData,
        reset,
    } = useAsync()

    const signInWithPhoneNumber = async (
        phoneNumber: any
    ): Promise<FirebaseAuthTypes.ConfirmationResult> => {
        return auth().signInWithPhoneNumber(phoneNumber)
    }

    const logout = async () => {
        return await auth()
            .signOut()
            .then(() => reset())
    }

    const value = {
        user,

        data,
        run,
        error,
        isError,
        reset,

        // sign in
        signInWithPhoneNumber,

        // logout
        logout,
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
