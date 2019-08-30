(ns web.ar.XRFrame
  "The XRFrame interface of the WebXR Device API provides information
  to render a single frame of an AR/VR scene to the display. An
  of this object is passed to each call of the callback provided
  `XRSession.requestAnimationFrame`."
  (:refer-clojure :exclude []))

(defn get-pose
  "Method.

  [Draft]

  The getPose() method of the `web.ar.XRFrame` interface turns
  `web.other.XRPose` object representing the relative relationship
  any two `XRSpace` objects.

  `var xrPose = XRFrame.getPose(space, baseSpace);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRFrame/getPose`"
  [this space base-space]
  (-> this (.getPose space base-space)))

(defn get-viewer-pose
  "Method.

  [Draft]

  The XRFrame.getViewerPose() method of the `web.ar.XRFrame` interface
  an `XRViewerPose` corresponding to the viewer's pose in a given

  `var xrViewerPose = XRFrame.getViewerPose(referenceSpace);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRFrame/getViewerPose`"
  [this reference-space]
  (-> this (.getViewerPose reference-space)))

(defn session
  "Property.

  [Read Only]

  The session readonly property of `web.ar.XRFrame` interface references
  `web.ar.XRSession` that produced it.

  `var xrSession = XRFrame.session`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRFrame/session`"
  [this]
  (-> this (.-session)))

