(ns web.gl.WEBGL_draw_buffers
  "The WEBGL_draw_buffers extension is part of the WebGL API and
  a fragment shader to write to several textures, which is useful
  deferred shading, for example."
  (:refer-clojure :exclude []))

(defn draw-buffers-webgl
  "Method.

  The WEBGL_draw_buffers.drawBuffersWEBGL() method is part of the
  API and allows you to define the draw buffers to which all fragment
  are written.

  `void gl.getExtension('WEBGL_draw_buffers').drawBuffersWEBGL(buffers);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL`"
  [this & args]
  (apply (-> this .-drawBuffersWEBGL) (concat [this] args)))

