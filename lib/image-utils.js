export const generateImageId = (path) => {
	let ext = path.lastIndexOf('.')
	let dir = path.lastIndexOf('/') + 1
	return url.substring(dir, dir < ext ? ext : undefined)
}

export const isAvailable = (imageId) => {
	return store[imageId] !== undefined
}

export const isImageElement = (obj) => {
	return obj instanceof Image || obj instanceof SVGElement
}
