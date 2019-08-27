(ns web.gl.WEBGL_debug_shaders
  "The WEBGL_debug_shaders extension is part of the WebGL API and
  a method to debug shaders from privileged contexts."
  (:refer-clojure :exclude []))

(defn get-translated-shader-source
  "Method.

  The WEBGL_debug_shaders.getTranslatedShaderSource() method is
  of the WebGL API and allows you to debug a translated shader.

  `gl.getExtension('WEBGL_debug_shaders').getTranslatedShaderSource(shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource`"
  [this & args]
  (-> this .-getTranslatedShaderSource (.apply this (clj->js args))))

