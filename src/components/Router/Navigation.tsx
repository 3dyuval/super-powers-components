import React, { Ref } from 'react'
import { FlexCol, FlexRow, StyledBox } from '../Globals'
import { RouterProps, RouteProps } from './'
import { NavigationMenuItem } from './NavItem'
import { IoMenuOutline, IoMenu } from 'react-icons/io5'
import styled from 'styled-components'
import { useClickOutside } from '../../Hooks/useClickoutside'

// interface NavigationProps extends RouterProps {
//     //TODO lift this state up
//     // look @ https://towardsdev.com/passing-ref-to-another-component-react-typescript-a9abcbcb8fe6
//     ref: React.Ref<HTMLDivElement>;
//     closeNav: (value: boolean) => void;
// }

export const Navigation = (props: RouterProps) => {


    const [toggleNav, setToggleNav] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>()
    const closeNav = () => setToggleNav(false)
    const openNav = () => setToggleNav(true)
    useClickOutside(ref, closeNav)

    return (<FlexRow
        onMouseOver={openNav}
        onMouseLeave={() => setTimeout(closeNav, 500)}
    >
        {toggleNav ?
            <IoMenu onClick={() => setToggleNav((prev) => !prev)} />
            :
            <IoMenuOutline onClick={() => setToggleNav((prev) => !prev)} />
        }
        <StyledOverlayedNavigation ref={ref}>{toggleNav && props?.routes ?
            props.routes.map(i => <NavigationMenuItem {...i}
                closeNav={closeNav}
            />)
            : null}
        </StyledOverlayedNavigation >
    </FlexRow>
    )
}


const StyledOverlayedNavigation = styled(FlexCol)`
    z-index: 100;
    position: absolute;
    width: 100%;
    top: 32px;
    left: 0px;
`