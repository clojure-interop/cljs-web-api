(ns web.ar.XRInputSource
  "The XRInputSource interface of the WebXR Device API returns information
  the Web AR/VR control device being used. The control device is
  and defines a primary action. A primary action is a trigger,
  button, spoken command, or hand gesture that when performed produces
  `selectend`, and `select` events."
  (:refer-clojure :exclude []))

(defn grip-space
  "Property.

  The XRInputSource.gripSpace read-only property of the `web.ar.XRInputSource`
  returns an `XRSpace` whose native origin tracks the pose that
  be used to render virtual objects such that they appear to be
  in the user's hand. For example, if a user were holding a virtual
  rod, the native origin of this XRSpace would be the approximate
  of the user's curled fingers.

  `var xrSpace = XRInputSource.gripSpace;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/gripSpace`"
  [this]
  (-> this (.gripSpace)))

(defn set-grip-space!
  "Property.

  The XRInputSource.gripSpace read-only property of the `web.ar.XRInputSource`
  returns an `XRSpace` whose native origin tracks the pose that
  be used to render virtual objects such that they appear to be
  in the user's hand. For example, if a user were holding a virtual
  rod, the native origin of this XRSpace would be the approximate
  of the user's curled fingers.

  `var xrSpace = XRInputSource.gripSpace;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/gripSpace`"
  [this val]
  (aset this "gripSpace" val))

