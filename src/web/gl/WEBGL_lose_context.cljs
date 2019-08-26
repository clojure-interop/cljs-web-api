(ns web.gl.WEBGL_lose_context
  "The WEBGL_lose_context extension is part of the WebGL API and
  functions to simulate losing and restoring a `web.gl.WebGLRenderingContext`."
  (:refer-clojure :exclude []))

(defn lose-context
  "Method.

  The WEBGL_lose_context.loseContext() method is part of the WebGL
  and allows you to simulate losing the context of a `web.gl.WebGLRenderingContext`

  `gl.getExtension('WEBGL_lose_context').loseContext();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context/loseContext`"
  [this & args]
  (apply (-> this .-loseContext) (concat [this] args)))

(defn restore-context
  "Method.

  The WEBGL_lose_context.restoreContext() method is part of the
  API and allows you to simulate restoring the context of a `web.gl.WebGLRenderingContext`

  `gl.getExtension('WEBGL_lose_context').restoreContext();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context/restoreContext`"
  [this & args]
  (apply (-> this .-restoreContext) (concat [this] args)))

