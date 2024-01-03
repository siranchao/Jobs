
export const checkImageURL = (url) => {

    if (!url) {
        return false
    }

    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|webp|gif|bmp|svg)$', 'i');

    return pattern.test(url)
}