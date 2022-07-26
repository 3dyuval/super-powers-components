import styled, { keyframes, createGlobalStyle } from 'styled-components'
import rotatingSVG from '../../assets/arrow_circle.svg'
import placeholder from '../../assets/img_placeholder.svg'

export const spin = keyframes`
    from { transform: rotate(0deg)}
    to { transform: rotate(360deg)}
`


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    padding: 8px;
  }
`

interface FlexBaseProps {
  alignItems?: string,
  justifyContent?: string,
}

export const FlexCol = styled.div<FlexBaseProps>`
   width: auto;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};
  justify-content: ${props => props.justifyContent ? props.justify : 'stretch'};
`;

export const FlexRow = styled.div<FlexBaseProps>`
 width: auto;
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'stretch'};
`;


export const Card = styled.div`
position: relative;
  width: auto;
  max-width: 100%;
  background-clip: padding-box;
  overflow: visible;
  flex: none;
  color: var(--figma-color-text);
  background: var(--figma-color-bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--figma-color-border);
  padding: 8px;
  margin-bottom: 8px;
  box-shadow: 6px 6px 3px 2px var(--figma-color-border);
`

interface CenteredSectionProps {
  rows: number;
}

export const CenteredSection = styled.div<CenteredSectionProps>`
  padding-top: ${props => props.rows ? (props.rows * 16 + 'px') : '16px'};
  padding-bottom: ${props => props.rows ? (props.rows * 16 + 'px') : '16px'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const StyledBox = styled.div`
    font-size: 18px;
    color: var(--figma-color-text);
    padding: 0.5em;
    outline-style: 1px solid;
    outline-width: 1px;
    outline-color: var(--figma-color-border);
    outline-offset : -0.5em ;
`


export const LoadingArrow = styled.img.attrs({
  src: rotatingSVG
})`
    height: 64px;
    width: 1em;
    height: 1em;
    animation: ${spin} 2s linear infinite;
    `


interface CircleProps {
  size?: 'normal' | 'small' | 'large';
  picture?: string;
  placeholder?: string;
}

export const Circle = styled.div.attrs<CircleProps>(props => ({
  placholder: placeholder,
  size: props.size || 'normal',
})) <CircleProps>`
    transition: all 200ms ease-in-out;
    transform-origin: center;
    border-radius: 50%;
    height: ${props =>
    (props.size === 'small') ? '32px'
      : (props.size === 'large') ? '128px'
        : (props.size === 'normal') ? '64px' : props.size};
    width: ${props =>
    (props.size === 'small') ? '32px'
      : (props.size === 'large') ? '128px'
        : (props.size === 'normal') ? '64px' : props.size};
background: url(${props => props.picture ? props.picture : 'none'}),
 url(${props => props.placeholder || placeholder});
background-size: contain;
position: relative;
    
`