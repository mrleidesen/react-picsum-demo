import React from 'react'
import { getSpecificImage } from '@/api/images'
import { Image } from '@/types/image'

const ImageCard = (props: Image) => {
    const src = getSpecificImage({
        id: props.id,
    })

    return (
        <a href={props.url} target="_blank" className="w-full h-80 flex flex-col bg-white rounded-md shadow overflow-hidden hover:shadow-lg cursor-pointer transition-shadow">
            <div className="w-full h-64 bg-gray-200">
                <img className="object-cover w-full h-full" src={src} alt={props.url}/>
            </div>
            <div className="flex-1 box-border p-2 text-sm text-gray-700">
                <p className="truncate">图片ID：{props.id}</p>
                <p className="truncate">作者：{props.author}</p>
            </div>
        </a>
    )
}

export default ImageCard