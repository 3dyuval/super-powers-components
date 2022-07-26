import React from 'react'

const Button = ({ label = 'Button', ...rest }) => {
    return (
        <button {...rest}>{label}</button>
    )
}

export { Button }