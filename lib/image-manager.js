import * as imageLoader from './image-loader.js'
import * as imageUtils from './image-utils.js'

const store = {}
const requests = []

/**
 * Adds an image request to the the preload queue.
 * load() must be subsequently called to fulfill the request.
 *
 * @param {string} src required
 * @param {string} imageId optional, if not provided, the filename will be used to generate
 * @param {boolean} forCanvas optional, if image is to be rendered/manipulated in canvas
 *
 */
export const addImageRequest = ({ src, imageId, forCanvas } = {}) => {
	// null src requests happen if dynamic dps-images have been bundled in fba-payload
	if (!src) {
		return
	}
	if (!imageId) {
		imageId = getImageId(src)
	}
	requests.push({ imageId, src, forCanvas })
	return imageId
}

/**
 * Generate an image-id from a file-path.
 *
 */
export const getImageId = src => {
	return imageUtils.generateImageId(src)
}

/**
 * Loads all of the image-requests
 *
 */
export const load = async () => {
	add(
		await Promise.all(
			requests.map(async req => {
				const opts = req.forCanvas ? { crossOrigin: 'anonymous' } : {}
				return await imageLoader.load(req, opts)
			})
		)
	)
}
/**
 */
export function add(ressOrEls) {
	ressOrEls.forEach(resOrEl => {
		const res = imageUtils.isImageElement(resOrEl) ? { imageId: resOrEl.id, img: resOrEl } : resOrEl
		if (imageUtils.isImageElement(res.img)) {
			store[res.imageId] = res.img
		}
	})
}

/**
 * Returns Image (or SVGElement) element for use in the build.
 *
 */
export const get = imageId => {
	if (!store[imageId]) {
		throw new Error(`No image-id ${imageId} has been loaded.`)
	}
	return store[imageId]
}
