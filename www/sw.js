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
    "url": "build/oce-kanban.js",
    "revision": "a0591f86561f98b846b759bad96947f8"
  },
  {
    "url": "build/oce-kanban/7fyfw8mk.es5.js",
    "revision": "f2edd9e5b38fabc881d2cd700bb14f1c"
  },
  {
    "url": "build/oce-kanban/7fyfw8mk.js",
    "revision": "78fbc00c378e6ebd48e347ab6d372ded"
  },
  {
    "url": "build/oce-kanban/7fyfw8mk.sc.es5.js",
    "revision": "d161c8b8dd884f58279d932fc034032c"
  },
  {
    "url": "build/oce-kanban/7fyfw8mk.sc.js",
    "revision": "3e48ea7424d75469fc7270b8873194be"
  },
  {
    "url": "build/oce-kanban/oce-kanban.registry.json",
    "revision": "b431d76d114fc5e93985cc6fde09e95d"
  },
  {
    "url": "build/oce-kanban/oce-kanban.roqok5lx.js",
    "revision": "8a97ce1b0d01e63b67412e8037ded469"
  },
  {
    "url": "build/oce-kanban/oce-kanban.ta3kswmh.js",
    "revision": "83a524d3f4583320a1804c72a99f79e8"
  },
  {
    "url": "host.config.json",
    "revision": "81a28befdc200e66203b79e6e14ca7ef"
  },
  {
    "url": "index.html",
    "revision": "c1f40365f6c8d54ed56505b2711c2148"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
