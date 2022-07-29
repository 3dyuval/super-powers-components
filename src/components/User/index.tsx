import { ReactNode } from 'react'
import { Circle, Spin } from '../Globals'
import placeholder from '../../assets/user.jpg'
import { StatusPill } from './styles'
import { useAuth, User } from '../AuthContext'
import { useActor } from '@xstate/react'
import { FiUserCheck } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

const UserAvatarWrapper = ({ size = 'small' }) => {

    const authService = useAuth()
    const [state] = useActor(authService)
    const currentPluginId = import.meta.env.VITE_SUPER_PLUGIN_META_ID
    const navigate = useNavigate()

    const isVerified = ({ context }) => {
        return context.currentUser.plugins.find(i => i.id === currentPluginId).verified
    }

    const isPro = ({ context }) => {
        return context.currentUser.plugins.find(i => i.id === currentPluginId).purchased
    }


    if (state.matches('loading'))
        return <UserAvatar
            currentUser={state.context.currentUser}
            size={size}
        >
            <StatusPill size={size}>
                <Spin><VscLoading /></Spin>
            </StatusPill>
        </UserAvatar>

    return <UserAvatar
        currentUser={state.context.currentUser}
        size={size}
        onClick={() => state.matches('loggedIn') ?
            // TODO (loggedIn) -> Context Menu
            authService.send('LOGOUT')
            : navigate('/account')}
    >
        {(state.matches('loggedIn')) &&
            <StatusPill
                size={size}
                color=""
            >
                {isPro(state) ? 'PRO'
                    : isVerified(state) ? <FiUserCheck />
                        : 'Please Verify...'}
            </StatusPill>}
    </UserAvatar>
}

interface Props {
    currentUser: User,
    size: 'normal' | 'small' | 'large',
    children?: ReactNode,
    onClick?: () => void,
    onHover?: () => void,
}

const UserAvatar = (props: Props) => {

    return (
        <Circle
            onClick={props.onClick && props.onClick}
            onHover={props.onHover && props.onHover}
            placeholder={placeholder}
            size={props.size}
            picture={props.currentUser.picture || placeholder}
        >
            {props.children}
        </Circle >
    )
}


export { UserAvatarWrapper as UserAvatar }