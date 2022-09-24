import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'

type User = any | null
type AuthProviderProps = { children: ReactNode }

const AuthContext = createContext<{ user: User } | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>(null)

    useEffect(() => {}, [])

    const value = { user }

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
