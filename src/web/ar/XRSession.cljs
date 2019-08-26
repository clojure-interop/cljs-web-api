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

