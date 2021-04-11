import React, { useState, useEffect } from 'react'

import ImageCard from '@/components/ImageCard'

import { getListImages } from '@/api/images'
import { Image } from '@/types/image'


export default function List() {
    const limit =  12
    const [list, setList] = useState<Image[]>([])
    const [page, setPage] = useState(1)
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        !isDone && loadImageList()
    }, [page])

    const loadImageList = async () => {
        const [res, _err] = await getListImages({
            page, limit
        })

        if (res) {
            const $_list: Image[] = res.data
            if ($_list.length < limit) {
                setIsDone(true)
            }
            setList([...list, ...$_list])
        }
    }

    const btnLoadMore = () => {
        !isDone && setPage(page + 1)
    }


    return (
        <div className="flex flex-col items-center">
            <div className="w-full grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 mb-5">
                {list.map(item => <ImageCard key={item.id} {...item} />)}
            </div>
            <button className="bg-blue-500 px-6 py-2 text-white rounded-sm mx-auto hover:bg-blue-700" onClick={btnLoadMore}>加载更多</button>
        </div>
    )
}


