import styled from 'styled-components'

interface Props {
    size?: string;
    className: string;
}

export const Pill = styled.div.attrs<Props>(props => ({
    size: props.size === 'small' ? '8px' :
        props.size === 'large' ? '16px'
            : '12px',
    className: 'pill'
})) <Props>`
    display: flex;
    align-items: center;
    border-radius: 50px;
    width: max-content;
    padding: 0.2em 0.6em;
    background-color: ${props => (!props.color) ? 'var(--figma-color-bg-brand)' : props.color};
    font-size: ${props => props.size}
`