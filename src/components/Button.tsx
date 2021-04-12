import React from 'react'
import { ButtonProps } from '@/types/components'

export default function Button({ type, className, ...rest }: ButtonProps) {
    const btnColor = type || 'primary'
    const btnClass = `btn btn--${btnColor} ${className}`

    return (
        <button className={btnClass} {...rest}></button>
    )
}