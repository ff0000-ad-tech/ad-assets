export const load = async (req, { crossOrigin } = {}) => {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.id = req.imageId
		img.crossOrigin = crossOrigin
		img.onload = () => {
			resolve({
				imageId: req.imageId,
				src: req.src,
				img
			})
		}
		img.onerror = reject
		img.src = req.src
	})
}
