import React from 'react'
import { ButtonProps } from './components'

export default function Button({ type, ...rest }: ButtonProps) {
    const btnColor = type || 'primary'
    const btnClass = `btn btn--${btnColor}`

    return (
        <button className={btnClass} {...rest}></button>
    )
}