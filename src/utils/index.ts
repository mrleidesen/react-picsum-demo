
export const getClientWidthAndHeight = () => {
    const width = window.outerWidth
    const height = window.outerHeight
    
    return { width, height }
}

export const useQuery = (searchURL: string) => {
    return new URLSearchParams(searchURL)
}

/**
 * 得到一个两数之间的随机整数，包括两个数在内
 */
export const getRandomIntInclusive = (min=0, max=1000) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}