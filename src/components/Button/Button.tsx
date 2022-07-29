import React from 'react'
// import { Button as ChakraButton } from '@chakra-ui/react'

const Button = ({ label = 'Button', ...rest }) => {
    return (
        <button {...rest}>{label}</button>
    )
}

export { Button }