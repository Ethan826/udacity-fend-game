/* Resources.js
 * This is simply an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * to load the same image multiple times.
 */

interface ResourceCache {
    [url: string]: HTMLImageElement | boolean;
}

class Resources {
    resourceCache: ResourceCache;
    // loading: Array;
    readyCallbacks: Function[];

    constructor() {
        this.resourceCache = {};
        // this.loading = [];
        this.readyCallbacks = [];
    }

    get(url: string): HTMLImageElement {
        return this.resourceCache[url] as HTMLImageElement;
    }

    load(urlOrArr: string[] | string) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                this.loadHelper(url);
            });
        } else if (urlOrArr instanceof String) {
            this.loadHelper(urlOrArr);
        }
    }

    private loadHelper(url: string) {
        if (this.resourceCache[url]) {
            return this.resourceCache[url];
        } else {
            let img = new Image();
            img.onload = function() {
                this.resourceCache[url] = img;
                if (this.isReady()) {
                    this.readyCallbacks.forEach(function(func: Function) { func(); });
                }
            };
            this.resourceCache[url] = false;
            img.src = url;
        }
    }

    private isReady(): boolean {
        let ready = true;
        for (let k in this.resourceCache) {
            if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    onReady(func: any) { // Fix this
        this.readyCallbacks.push(func);
    }
}