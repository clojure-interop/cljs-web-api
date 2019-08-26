(ns web.ar.XRSession
  "The XRSession of the WebXR Device API provides the means to interact
  an AR/VR device, providing features such as polling the viewer
  (viewer pose), getting information about the user's environment,
  presenting imagery to the user. To get an XRSession call XR.requestSession()."
  (:refer-clojure :exclude []))

(defn update-render-state
  "Method.

  The updateRenderState method of `web.ar.XRSession` interface
  WebXR API submits a new `web.other.XRRenderState`.

  `XRSession.updateRenderState(...)


  Note: Set `inlineVerticalFieldOfView` if and only if the `web.ar.XRSession` is \\\"inline\\\".`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/updateRenderState`"
  [this & args]
  (apply (-> this .-updateRenderState) (concat [this] args)))

(defn request-reference-space
  "Method.

  The requestReferenceSpace() method of the `web.ar.XRSession`
  returns a `js.Promise` that resolves with either an instance
  `XRReferenceSpace` or of `XRBoundedReferenceSpace` which contains
  about the current session tracking behavior.

  `var promise = XRSession.requestReferenceSpace(type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/requestReferenceSpace`"
  [this type]
  (-> this (.requestReferenceSpace type)))

(defn request-animation-frame
  "Method.

  The requestAnimationFrame() method of the `web.ar.XRSession`
  Tells the browser to paint one frame of an animation at which
  the browser will call the supplied callback function. The callback
  be run once before the next repaint.

  `XRSession.requestAnimationFrame(onXRAnimationFrame);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/requestAnimationFrame`"
  [this on-xr-animation-frame]
  (-> this (.requestAnimationFrame on-xr-animation-frame)))

(defn cancel-animation-frame
  "Method.

  The cancelAnimationFrame() method of the `web.ar.XRSession` interface
  an animation frame previously requested via a call to `XRSession.requestAnimationFrame`.

  `XRSession.cancelAnimationFrame(handle);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/cancelAnimationFrame`"
  [this handle]
  (-> this (.cancelAnimationFrame handle)))

(defn end
  "Method.

  The end() method of the `web.ar.XRSession` interface requests
  the current XR session and returns a promise that resolves when
  session ends.

  `XRSession.end();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/end`"
  [this ]
  (-> this (.end)))

