import service from './request'
import { Image, Page } from '@/types/image'


const GET = (url: string, params?: any) => {
    return service.get(url, { params })
        .then((res) => [res, null])
        .catch((err) => [null, err])
}

/**
 * 获取图片地址
 */
export const getSpecificImage = ({ id, width=300, height=300 }: Image) => `https://picsum.photos/id/${id}/${width}/${height}`

/**
 * 获取随机图片地址
 */
export const getRandomImage = ({ width=300, height=300 }: Image) => `https://picsum.photos/seed/picsum/${width}/${height}`

/**
 * 获取图片详情
 */
export const getImageDetails = ({ id }: Image) => GET(`/id/${id}/info`)

/**
 * 获取图片列表
 */
export const getListImages = (params: Page) => GET(`/v2/list`, params)