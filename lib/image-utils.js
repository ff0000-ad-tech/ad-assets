export const generateImageId = (path, { store, requests }) => {
	let ext = path.lastIndexOf('.')
	let dir = path.lastIndexOf('/') + 1
	let imageId = path.substring(dir, dir < ext ? ext : undefined)
	if (!isAvailable(imageId, store)) {
		return incrementImageId(imageId)
	}
	return imageId
}
export const isAvailable = (imageId, { store, requests }) => {
	if (store || requests) {
		const inStore = store && store[imageId] === undefined
		const inRequests = requests && requests.find(request => request.imageId === imageId)
		return inStore || inRequests
	}
	return true
}
const incrementImageId = imageId => {
	const incrementRegex = /-(\d+)$/
	const match = imageId.match(incrementRegex)
	if (match) {
		return imageId.replace(incrementRegex, `-${parseInt(match[1]) + 1}`)
	}
	return `${imageId}-1`
}

export const isImageElement = obj => {
	return obj instanceof Image || obj instanceof SVGElement
}
