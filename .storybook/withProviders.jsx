import { AuthProvider } from '../src/components/AuthContext'
import React from 'react'

export const withProviders = (Story, context) => {
    return (
        // value={{ auth: context.globals.auth }}
        <AuthProvider >
            <Story {...context} />
        </AuthProvider >

    )
}