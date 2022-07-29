import React, { createContext, useContext } from 'react'
import { createMachine, assign, InterpreterFrom } from 'xstate'
import { useInterpret } from "@xstate/react"
import { faker } from '@faker-js/faker'

export type User = {
    userName: string,
    fullName: string,
    picture: string,
    plugins: Plugin[],
}

type Plugin = {
    id: string,
    name: string,
    verified: boolean,
    purchased: boolean
}

const login = (): Promise<User> => {
    return new Promise(resolve => resolve({
        userName: faker.internet.userName(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        picture: faker.internet.avatar(),
        plugins: [
            { id: '1', name: 'rick and morty', purchased: true, verified: false },
            { id: '2', name: 'suepr color', purchased: false, verified: true },
            { id: '3', name: 'suepr color pro', purchased: false, verified: false },
        ],
    }))
}


const authMachine = createMachine({
    id: 'authMachine',
    context: {
        currentUser: {
            userName: '',
            fullName: '',
            picture: '',
            plugins: [],
        } as User,
        errorMessage: '',
    },
    initial: 'loggedOut',
    states: {
        loggedOut: {
            on: {
                LOGIN: { target: 'loading' }
            }
        },
        loading: {
            invoke: {
                id: 'logIn',
                src: login,
                onDone: {
                    target: 'loggedIn',
                    actions: assign({ currentUser: (_, e) => e.data }),
                },
                onError: {
                    target: 'fail',
                    actions: assign({ errorMessage: (_, e) => e.data })
                }
            },
        },
        loggedIn: {
            entry: assign({ errorMessage: '' }),
            on: {
                LOGOUT: 'loggedOut'
            },
            exit: assign({ currentUser: '' }),
        },
        fail: {
            on: {
                LOGIN: 'loading',
            }
        }
    }
})

const AuthContext = createContext({} as InterpreterFrom<typeof authMachine>)
const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {

    const authService = useInterpret(authMachine)

    return (
        <AuthContext.Provider value={authService}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }