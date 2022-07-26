import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { RouteProps } from './'
import React from 'react'

export const isURL = (props: RouteProps) => Boolean(props.url)
export const isComponent = (props: RouteProps) => React.isValidElement(props.element)

interface NavigationMenuItemProps extends RouteProps {
    closeNav: () => void
}

export const NavigationMenuItem = (i: NavigationMenuItemProps, id) => (<>
    {isComponent(i) && <StyledNavItem onClick={i.closeNav} to={i.path} key={id} className={isActive => isActive && 'selected'} >{i.title}</StyledNavItem>}
    {isURL(i) && <StyledNavItemExternal key={id} href={i.url} alt={i.description}>{i.title}</StyledNavItemExternal>}
</>
)


const StyledNavItem = styled(NavLink)`
    background: var(--figma-color-bg);
width: 100%;
text-decoration: none;
font-size: 18px;
color: var(--figma-color-text-onselected-secondary);
 .selected {
    color: var(--figma-color-text-onselected);
}
&:hover {
cursor: default;
background-color: var(--figma-color-bg-brand-secondary);
}
padding: 0.5em;
`


export const StyledNavItemExternal = styled.a`
width: 100%;
text-decoration: none;
font-size: 18px;
background: var(--figma-color-bg-brand-tertiary);
color: var(--figma-color-text);
display: block;
padding: 0.5em;
cursor: default;
&:hover {
    background-color: var(--figma-color-bg-brand-hover);
    &::after {
        margin-right: 16px;
        float:right;
        content: 'Open in New Window';
        font-size: 12px;
        font-weight: bold;
    }
}
`
