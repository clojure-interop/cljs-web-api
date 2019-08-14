(ns web.XR
  "The XR interface acts as the gateway interface for WebXR API."
  (:refer-clojure :exclude []))

(defn supports-session
  "Method.

  The supportsSession method of `web.XR` interface of WebXR API
  whether or not the device and User agent support a specific `web.XRSessionMode`.

  `XR.supportsSession(XRSessionMode)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XR/supportsSession`"
  [this xr-session-mode]
  (-> this (.supportsSession xr-session-mode)))

(defn request-session
  "Method.

  The requestSession method of `web.XR` interface of WebXR API
  requests a new `web.XRSession` with a specific `web.XRSessionMode`
  is used for all interaction with WebXR environment.

  `XR.requestSession(XRSessionMode)
  XR.requestSession(XRSessionMode, XRSessionInit)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XR/requestSession`"
  [this & args]
  (apply (-> this .-requestSession) (concat [this] args)))

