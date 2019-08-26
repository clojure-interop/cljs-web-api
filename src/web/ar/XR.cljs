(ns web.ar.XR
  "The XR interface of the WebXR Device API provides methods for
  an `web.ar.XRSession` object. Once a session is obtained, subsequent
  or VR interactions with the hardware are done through it."
  (:refer-clojure :exclude []))

(defn request-session
  "Method.

  The XR.requestSession() method of the `web.ar.XR` interface returns
  `js.Promise` that resolves with an `web.ar.XRSession` object
  the requested XRSessionMode, one of \\\"inline\\\" or \\\"immersive-vr\\\".

  `var promise = XR.requestSession(XRSessionMode)
  var promise = XR.requestSession(XRSessionMode, XRSessionInit)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XR/requestSession`"
  [this & args]
  (apply (-> this .-requestSession) (concat [this] args)))

(defn supports-session
  "Method.

  The supportsSession() method of the `web.ar.XR` interface returns
  empty `js.Promise` that resolves if the requested session mode
  available from the device. Supprted session modes include \\\"inline\\\"
  \\\"immersive-vr\\\".

  `var promise = XR.supportsSession(xrSessionMode)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XR/supportsSession`"
  [this xr-session-mode]
  (-> this (.supportsSession xr-session-mode)))

