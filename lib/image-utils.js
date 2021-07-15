export const generateImageId = path => {
	let ext = path.lastIndexOf('.')
	let dir = path.lastIndexOf('/') + 1
	return path.substring(dir, dir < ext ? ext : undefined)
}

export const isImageElement = obj => {
	return obj instanceof Image || obj instanceof SVGElement
}
