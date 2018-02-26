/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/resources-flow.js",
    "revision": "e04b8bbf981558e07d8711002dd0696a"
  },
  {
    "url": "build/resources-flow/es5-build-disabled.js",
    "revision": "c217fb3295b332d2d72f9af061d4c380"
  },
  {
    "url": "build/resources-flow/resources-flow.aykoxjao.js",
    "revision": "769eabf71cbf0b39db2dfadd936ec157"
  },
  {
    "url": "build/resources-flow/resources-flow.registry.json",
    "revision": "29ef6831748eee9726f5236b1027383a"
  },
  {
    "url": "build/resources-flow/trsxbix3.js",
    "revision": "8df89d6af9c1b24c6bb408aef01d13ab"
  },
  {
    "url": "build/resources-flow/trsxbix3.sc.js",
    "revision": "daf2f83ab73ea54b6636a86f13ef278c"
  },
  {
    "url": "host.config.json",
    "revision": "1bddca57f771ba2330cb86c81eb3b9b1"
  },
  {
    "url": "index.html",
    "revision": "dd2699461d4c3a414a109df222936c75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
