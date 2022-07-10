import React from 'react'

const Button = ({ label = 'Button', ...rest }) => {
    return (
        <div {...rest}>{label}</div>
    )
}

export { Button }