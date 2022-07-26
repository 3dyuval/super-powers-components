import React from 'react'
import { Button } from '../../../'
import { useAuth } from '../../AuthContext'

interface Props {
    loading: boolean;
    authService: any;
}

export const SignIn = ({
    loading,
    authService,
}: Props) => {

    return (
        <Button
            label="Sign In"
            disabled={loading}
            onClick={() => {
                authService.send('LOGIN')
            }}></Button>
    )
}
