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
    | { user: User; register: Function; login: Function; logout: Function }
    | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

const register = async (email: string, password: string) => {
    if (!email || !password) return

    return await auth().createUserWithEmailAndPassword(email, password)
}

const login = async (email: string, password: string) => {
    if (!email || !password) return

    return await auth().signInWithEmailAndPassword(email, password)
}

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

    const value = { user, register, login, logout }

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
