(ns web.ar.XRInputSource
  "The XRInputSource interface of the WebXR Device API returns information
  the Web AR/VR control device being used. The control device is
  and defines a primary action. A primary action is a trigger,
  button, spoken command, or hand gesture that when performed produces
  `selectend`, and `select` events."
  (:refer-clojure :exclude []))

(defn grip-space
  "Property.

  [Read Only]
  [Draft]

  The XRInputSource.gripSpace read-only property of the `web.ar.XRInputSource`
  returns an `XRSpace` whose native origin tracks the pose that
  be used to render virtual objects such that they appear to be
  in the user's hand. For example, if a user were holding a virtual
  rod, the native origin of this XRSpace would be the approximate
  of the user's curled fingers.

  `var xrSpace = XRInputSource.gripSpace;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/gripSpace`"
  [this]
  (-> this (.-gripSpace)))

(defn handedness
  "Property.

  Describes which hand the XRInputSource is associates with, if
  This will be one of \"left\", \"right\", or \"none\"."
  [this]
  (-> this (.-handedness)))

(defn set-handedness!
  "Property.

  Describes which hand the XRInputSource is associates with, if
  This will be one of \"left\", \"right\", or \"none\"."
  [this val]
  (aset this "handedness" val))

(defn profiles
  "Property.

  Returns an array of input profile names indicating both the preferred
  representation and behavior of the input source."
  [this]
  (-> this (.-profiles)))

(defn set-profiles!
  "Property.

  Returns an array of input profile names indicating both the preferred
  representation and behavior of the input source."
  [this val]
  (aset this "profiles" val))

(defn target-ray-mode
  "Property.

  Returns the method used to produce the target ray. This will
  one of \"gaze\", \"tracked-pointer\", or \"screen\"."
  [this]
  (-> this (.-targetRayMode)))

(defn set-target-ray-mode!
  "Property.

  Returns the method used to produce the target ray. This will
  one of \"gaze\", \"tracked-pointer\", or \"screen\"."
  [this val]
  (aset this "targetRayMode" val))

(defn target-ray-space
  "Property.

  Returns an XRSpace with a native origin tracking the position
  orientation of the preferred point ray as defined by XRInputSource.targetRayMode."
  [this]
  (-> this (.-targetRaySpace)))

(defn set-target-ray-space!
  "Property.

  Returns an XRSpace with a native origin tracking the position
  orientation of the preferred point ray as defined by XRInputSource.targetRayMode."
  [this val]
  (aset this "targetRaySpace" val))

