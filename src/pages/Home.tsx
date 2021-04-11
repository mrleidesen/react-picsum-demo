import { getRandomImage } from '@/api/images'
import { getClientWidthAndHeight } from '@/utils'
import React from 'react'

export default function Home() {
    const mediaQuery = getClientWidthAndHeight()

    return (
        <div className="">
            {mediaQuery.width} {mediaQuery.height}
        </div>
    )
}