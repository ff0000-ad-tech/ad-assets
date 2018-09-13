##### RED Interactive Agency - Ad Technology

# Ad Assets

This class is used by https://github.com/ff0000-ad-tech/wp-plugin-assets to inline assets.  

Most of our asset-bundling happens in fba-payload, as part of the polite load. However, some assets (like preloaders, for example) need to be available up-front, in the index. This module is what makes that bundle available to the framework. In the case of preloader: https://github.com/ff0000-ad-tech/ad-entry/blob/master/lib/preloader.js#L52

