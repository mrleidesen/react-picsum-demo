import React, { useEffect, useState } from 'react'

import ImageCard from '@/components/ImageCard'
import Button from '@/components/Button'

import { getRandomIntInclusive } from '@/utils'
import { getImageDetails } from '@/api/images'
import { Image } from '@/types/image'

export default function Random() {
    const [randomId, setRandomId] = useState(getRandomIntInclusive(0, 1000))
    const [imageDetail, setImageDetail] = useState<Image>({})

    useEffect(() => {
        loadImageDetail()
    }, [randomId])

    const loadImageDetail = async () => {
        const [res, _err] = await getImageDetails({ id: randomId })
        if (res) {
            setImageDetail(res.data)
        } else {
            getRandomId()
        }
    }

    const getRandomId = () => {
        setRandomId(getRandomIntInclusive(0, 1000))
    }

    return (
        <div className="flex flex-col items-center">
            <Button className="mb-10" onClick={getRandomId}>随机一张图片</Button>
            <div className="w-80">
                { imageDetail.id && <ImageCard {...imageDetail} /> }
            </div>
        </div>
    )
}