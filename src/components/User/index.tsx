import { LoadingArrow, Circle } from '../Globals'
import userimg from '../../assets/user.jpg'
import styled from 'styled-components'
import { StatusPill } from './styles'

interface Props {
    picture?: string;
    loading?: boolean;
    pro?: boolean;
    size?: string;
    state: {
        loggedIn?: boolean;
    }
}

export const UserAvatar = ({
    loading = false,
    pro = false,
    picture = '',
    state = { loggedIn: false },
    size,
}: Props) => {

    return (
        <Circle placeholder={userimg} size={size} picture={picture} className="user-avatar">
            {pro ? <StatusPill id="pro" color="var(--super-color-bg-purple)" size={size}>PRO</StatusPill> :
                state.loggedIn ? <StatusPill size={size} >FREE</StatusPill>
                    : loading ? <StatusPill ><LoadingArrow /></StatusPill> : ''
            }
        </Circle >
    )
}

