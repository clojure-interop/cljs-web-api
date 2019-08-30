(ns web.ar.XRSession
  "The XRSession of the WebXR Device API provides the means to interact
  an AR/VR device, providing features such as polling the viewer
  (viewer pose), getting information about the user's environment,
  presenting imagery to the user. To get an XRSession call XR.requestSession()."
  (:refer-clojure :exclude []))

(defn update-render-state
  "Method.

  [Draft]

  The updateRenderState() method of the `web.ar.XRSession` interface
  WebXR API queues an update to the active render state which will
  applied on the next frame.

  `XRSession.updateRenderState([xrRenderStateInit])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/updateRenderState`"
  [this & args]
  (-> this .-updateRenderState (.apply this (clj->js args))))

(defn request-reference-space
  "Method.

  [Draft]

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

  [Draft]

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

  [Draft]

  The cancelAnimationFrame() method of the `web.ar.XRSession` interface
  an animation frame previously requested via a call to `XRSession.requestAnimationFrame`.

  `XRSession.cancelAnimationFrame(handle);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/cancelAnimationFrame`"
  [this handle]
  (-> this (.cancelAnimationFrame handle)))

(defn end
  "Method.

  [Draft]

  The end() method of the `web.ar.XRSession` interface requests
  the current XR session and returns a promise that resolves when
  session ends.

  `XRSession.end();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/end`"
  [this ]
  (-> this (.end)))

