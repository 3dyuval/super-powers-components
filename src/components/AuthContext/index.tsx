import React, { createContext, useContext } from 'react'
import { createMachine, assign, InterpreterFrom } from 'xstate'
import { useInterpret } from "@xstate/react"
import { faker } from '@faker-js/faker'

const useFaker = () => {
    return {
        userName: faker.internet.userName(),
        accountType: 'free',
        picture: faker.internet.avatar(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        plugins: [{ plugin1: true }, { plugin2: false }, { plugin3: false }, { plugin4: true }],
    }
}

const authMachine = createMachine({
    id: 'authMachine',
    context: {
        currentUser: {
            userName: '',
            accountType: '',
            picture: '',
            fullName: '',
            plugins: [],
        },
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
                src: () => new Promise((resolve, reject) => {
                    setTimeout(() => resolve(useFaker()), 2000)
                }),
                onDone: {
                    target: 'loggedIn',
                    actions: assign({ currentUser: (_, e) => e.data }),
                },
                onError: {
                    target: 'failure',
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
        failure: {
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