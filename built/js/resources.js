/* Resources.js
 * This is simply an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * to load the same image multiple times.
 */
var Resources = (function () {
    function Resources() {
        this.resourceCache = {};
        // this.loading = [];
        this.readyCallbacks = [];
    }
    Resources.prototype.get = function (url) {
        return this.resourceCache[url];
    };
    Resources.prototype.load = function (urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function (url) {
                this.loadHelper(url);
            });
        }
        else if (urlOrArr instanceof String) {
            this.loadHelper(urlOrArr);
        }
    };
    Resources.prototype.loadHelper = function (url) {
        if (this.resourceCache[url]) {
            return this.resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function () {
                this.resourceCache[url] = img;
                if (this.isReady()) {
                    this.readyCallbacks.forEach(function (func) { func(); });
                }
            };
            this.resourceCache[url] = false;
            img.src = url;
        }
    };
    Resources.prototype.isReady = function () {
        var ready = true;
        for (var k in this.resourceCache) {
            if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    };
    Resources.prototype.onReady = function (func) {
        this.readyCallbacks.push(func);
    };
    return Resources;
})();
