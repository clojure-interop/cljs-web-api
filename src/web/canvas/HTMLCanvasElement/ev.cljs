(ns web.canvas.HTMLCanvasElement.ev
  "HTMLCanvasElement Events."
  (:refer-clojure :exclude []))

(def webglcontextcreationerror
  "Event.

  Fired if the user agent is unable to create a WebGLRenderingContext
  WebGL2RenderingContext context."

  "webglcontextcreationerror")

(def webglcontextlost
  "Event.

  With the help of the `web.gl.WEBGL_lose_context` extension, you
  simulate the webglcontextlost event:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event`"

  "webglcontextlost")

