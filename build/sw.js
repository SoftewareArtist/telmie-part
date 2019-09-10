"use strict";var precacheConfig=[["/006cf3b7c239a0b2845c25e7665b4fbb.ttf","006cf3b7c239a0b2845c25e7665b4fbb"],["/0145959f8f52958cf24da0eb15b7cd38.woff","0145959f8f52958cf24da0eb15b7cd38"],["/03e67a20f133f8e37095cc9f988e51a4.ttf","03e67a20f133f8e37095cc9f988e51a4"],["/12c6ff700b23c72480819b939a40198c.ttf","12c6ff700b23c72480819b939a40198c"],["/2ef6d99e18876b039be154afdedabf01.eot","2ef6d99e18876b039be154afdedabf01"],["/5b1536b4f63d819f8fa413917073926f.svg","5b1536b4f63d819f8fa413917073926f"],["/5cea46da0b5bdbea3a0503ec0f55a06e.woff","5cea46da0b5bdbea3a0503ec0f55a06e"],["/5f838fc8f38524d4b71adedfaddb2ede.woff2","5f838fc8f38524d4b71adedfaddb2ede"],["/6065203719447e8246b86d2d849821b4.woff","6065203719447e8246b86d2d849821b4"],["/6e684aa45636f8af27fa3d6db3bcd246.woff","6e684aa45636f8af27fa3d6db3bcd246"],["/759ed07eb34028d659e7e52934affebb.eot","759ed07eb34028d659e7e52934affebb"],["/81e35852f1c74faa7c66b4762a109d8c.woff2","81e35852f1c74faa7c66b4762a109d8c"],["/9760d404c933f832702cd784072b5925.svg","9760d404c933f832702cd784072b5925"],["/99fb42ae2d1caeeef928b88e424b02ab.eot","99fb42ae2d1caeeef928b88e424b02ab"],["/assets/avatar/avatar_mask.png","317a27809742d8c6117999dea28857fc"],["/assets/avatar/nouserimage.jpg","995f9654b3b9891589bab910b1c7df1e"],["/assets/avatar/untitled1.jpg","d414883ac8a858f69ebe142fee35aa9d"],["/assets/avatar/untitled1.png","1b2253593721626c07c3ba6adaeea115"],["/assets/avatar/untitled1@2x.jpg","af58b7a02e49bb110e447bc927eb643b"],["/assets/avatar/untitled1@2x.png","c9637ac652c80f7dabefdf6d6fa95ebc"],["/assets/avatar/untitled1@3x.jpg","b60200591164cc5c7f40e6b395683b2f"],["/assets/avatar/untitled1@3x.png","636865a92e32add269eb097c3f18ced8"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/icons/android-chrome-192x192.png","59e221032ab061cad83b6ce2bcddbde8"],["/assets/icons/android-chrome-512x512.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/icons/apple-touch-icon.png","a0e46feb3cc577478b127936e739dd08"],["/assets/icons/f-19x19.png","1b929f5a285397511df21de1ff71bfb9"],["/assets/icons/favicon-16x16.png","d712b605ed58419c7e6d4ab885d147b7"],["/assets/icons/favicon-32x32.png","2f7ce797cf8f198dedb9a9f38b7ef13b"],["/assets/icons/in-19x19.png","879efc7b9a15116e44b5f2d45066e2e3"],["/assets/icons/inst-20x20.png","e7be6c7895b90eb052e6ac924131efd5"],["/assets/icons/mstile-150x150.png","ba817517b2c4e1ba1ce802c4d4fafdb4"],["/assets/icons/tw-38×32.png","967cd2d60f141e576d67fb0b7d61d439"],["/assets/icons/yt-46×34.png","7b9bb6a5a65f7870270bda4fd12adce7"],["/assets/logo/logoMini.png","177762a84bf26e58919cef2d84668787"],["/assets/logo/logoMini@2x.png","fb23c5402d6056646dd7d3db9b54ca2f"],["/assets/logo/logoMini@3x.png","810baa0b46e2a1191ee63b79add9b03b"],["/b1c71dc4022e5dd80f01fa23658cc003.svg","b1c71dc4022e5dd80f01fa23658cc003"],["/bundle.0fc40.js","ca0d46b4225058b771d1b061886ba7e8"],["/ca3a3491ce9b0c4028f7bb97510dfc0b.woff2","ca3a3491ce9b0c4028f7bb97510dfc0b"],["/cd7b4e46cd06a6dcaf787a454c71fc02.ttf","cd7b4e46cd06a6dcaf787a454c71fc02"],["/d92b387165a85a5861108075d1595357.eot","d92b387165a85a5861108075d1595357"],["/dea6e2053ba43b37f5d29daf544a0973.woff2","dea6e2053ba43b37f5d29daf544a0973"],["/e935c1861b8602b2dc6c669c42cf83ac.svg","e935c1861b8602b2dc6c669c42cf83ac"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/index.html","76b3e18ccbf1793abf05c2d9ba21721b"],["/manifest.json","7d2ca604700860cdde350582fb0889b0"],["/route-activity.chunk.7e7fb.js","a3201acfd9a22573464bddcc4af1622c"],["/route-errorRoute.chunk.7699a.js","634dde38e224f4ebff8e2c0a67c4ecdb"],["/route-log-in.chunk.34721.js","b6484085b63ea829bfc5ec944fdabc05"],["/style.70c08.css","157b6804bceb14d31612fd417d3939e1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});