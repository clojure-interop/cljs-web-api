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

  Fired if the user agent detects that the drawing buffer associated
  a WebGLRenderingContext or WebGL2RenderingContext object has
  lost."

  "webglcontextlost")

(def webglcontextrestored
  "Event.

  Fired if the user agent restores the drawing buffer for a WebGLRenderingContext
  WebGL2RenderingContext object."

  "webglcontextrestored")

