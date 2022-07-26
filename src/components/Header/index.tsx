import { FlexRow } from '../Globals'
import { UserAvatar, Navigation } from '../../'


export const Header = (props) => {

    return (
        <FlexRow justifyContent="space-between" style={{ paddingBottom: '8px' }}>
            <FlexRow>
                <Navigation {...props} />
            </FlexRow >
            <FlexRow justifyContent="flex-end">
                <UserAvatar {...props} size="small" />
            </FlexRow >
        </FlexRow >
    )
}

