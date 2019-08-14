(ns web.XRSession
  "The XRSession is a WebVR API interface that enables interactions
  XR hardware."
  (:refer-clojure :exclude []))

(defn update-render-state
  "Method.

  The updateRenderState method of `web.XRSession` interface of
  API submits a new `web.XRRenderState`.

  `XRSession.updateRenderState(...)


  Note: Set `web.inlineVerticalFieldOfView` if and only if the `web.XRSession` is \\\"inline\\\".`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/updateRenderState`"
  [this & args]
  (apply (-> this .-updateRenderState) (concat [this] args)))

(defn request-animation-frame
  "Method.

  The requestAnimationFrame method of `web.XRSession` is the primary
  to run the application logic to update the scene during the XR
  The method will take a callback you provide and schedule it to
  run before the next repaint (once).

  `function onXRAnimationFrame(DOMHighResTimeStamp, XRFrame) { ... }
  XRSession.requestAnimationFrame(onXRAnimationFrame)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/requestAnimationFrame`"
  [this & args]
  (apply (-> this .-requestAnimationFrame) (concat [this] args)))

(defn cancel-animation-frame
  "Method.

  The XRSession.cancelAnimationFrame method cancels an animation
  previously requested via a call to `web.XRSession.requestAnimationFrame`.

  `XRSession.cancelAnimationFrame(handle)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/cancelAnimationFrame`"
  [this handle]
  (-> this (.cancelAnimationFrame handle)))

(defn end
  "Method.

  The end method of `web.XRSession` shuts down the XR session that
  is invoked on and returns a promise.

  `XRSession.end()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/end`"
  [this ]
  (-> this (.end)))

