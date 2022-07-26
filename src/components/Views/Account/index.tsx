import React from 'react'
import { useAuth } from '../../AuthContext'
import { useActor } from '@xstate/react'
import { SignIn } from './SignIn'
import { LoggedIn } from './LoggedIn'

export const Account = () => {

    const authService = useAuth()
    const [state] = useActor(authService)

    if (state.matches('loggedOut')) {
        return (<>
            <SignIn
                authService={authService}
                loading={state.matches('loading')}
            />
        </>)
    } if (state.matches('loggedIn')) {
        return <LoggedIn
            state={state}
            authService={authService}

        />
    }
    return state.value
}
