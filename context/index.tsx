import React, { FC, ReactNode } from 'react'
import { AuthProvider } from './auth-context'
import { ThemeProvider } from '@shopify/restyle'
import theme from './theme'

const AppProviders: FC<{ children: ReactNode }> = ({ children }) => (
    <AuthProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
)

export { AppProviders }
