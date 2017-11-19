var assets = [];

/**
	@method add
	@param {string} path - relative path to an asset, like `'./images/rubber_ducky.png'`
	@param {string} src - base64-encoded asset, optional
	@desc Add a path to a component asset. Update a path with a data-src.
*/
export function add(path, src) {
	var asset = getAsset(path);
	if (asset) {
		asset.src = src || null;
	}
	else {
		this.assets.push({
			path: path,
			src: src || null
		});
	}
}

/**
	@method get
	@param {string} path - relative path to an asset, like `'./images/rubber_ducky.png'`
	@desc 
		If the asset path has been declared, and:
		 - if a src has been provided, the asset data will be returned.
		 - if a src has NOT been provided, the asset path will be returned. 

		If the asset path has NOT been declared:
		 - the path will be returned.
*/
export function get(path) {
	var asset = getAsset(path);
	if (asset) {
		return asset.src || asset.path;
	} 
	else {
		return path;
	}
}


// internal
function getAsset(path) {
	for (var i in this.assets) {
		if (this.assets[i].path == path) {
			return this.assets[i];
		}
	}	
}


