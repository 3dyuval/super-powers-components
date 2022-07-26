import React from 'react'
import { Button } from '../../Button'
import { UserAvatar } from '../../User'

interface Props {
    state: any;
    authService: any;
}

export const LoggedIn = ({ state, authService }: Props) => {

    const userName = state.context.currentUser.userName
    const picture = state.context.currentUser.picture
    const accountType = state.context.currentUser.accountType
    const fullName = state.context.currentUser.fullName

    return (<>
        <UserAvatar picture={picture} size='large' ></UserAvatar>
        <div>Hey {fullName}👋</div>
        <Button label="Log Out" onClick={() => authService.send('LOGOUT')}></Button>
    </>
    )
}
