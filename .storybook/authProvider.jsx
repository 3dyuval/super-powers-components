import react, { createContext } from 'react';
import { AuthProvider } from '../src/components/AuthContext'


export const withAuthProvider = (Story, context) => {
    return (
        // value={{ auth: context.globals.auth }}
        <AuthProvider >
            <Story {...context} />
        </AuthProvider >

    )
}