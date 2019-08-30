(ns web.vr.VRDisplayCapabilities
  "The VRDisplayCapabilities interface of the WebVR API describes
  capabilities of a `web.media.VRDisplay` — its features can be
  to perform VR device capability tests, for example can it return
  information."
  (:refer-clojure :exclude []))

(defn can-present
  "Property.

  [Read Only]
  [Experimental]

  The canPresent read-only property of the `web.vr.VRDisplayCapabilities`
  returns a `js.Boolean` stating whether the VR display is capable
  presenting content (e.g. through an HMD).

  `var canIPresent = vrDisplayCapabilitiesInstance.canPresent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities/canPresent`"
  [this]
  (-> this (.-canPresent)))

(defn has-external-display
  "Property.

  [Read Only]
  [Experimental]

  The hasExternalDisplay read-only property of the `web.vr.VRDisplayCapabilities`
  returns a `js.Boolean` stating whether the VR display is separate
  the device's primary display.

  `var hasAnExternalDisplay = vrDisplayCapabilitiesInstance.hasExternalDisplay;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities/hasExternalDisplay`"
  [this]
  (-> this (.-hasExternalDisplay)))

(defn has-orientation
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The hasOrientation read-only property of the `web.vr.VRDisplayCapabilities`
  returns a `js.Boolean` stating whether the VR display can track
  return orientation information.

  `var hasItGotOrientation = vrDisplayCapabilitiesInstance.hasOrientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities/hasOrientation`"
  [this]
  (-> this (.-hasOrientation)))

(defn has-position
  "Property.

  [Read Only]
  [Experimental]

  The hasPosition read-only property of the `web.vr.VRDisplayCapabilities`
  returns a `js.Boolean` stating whether the VR display can track
  return position information.

  `var hasItGotPosition = vrDisplayCapabilitiesInstance.hasPosition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities/hasPosition`"
  [this]
  (-> this (.-hasPosition)))

(defn max-layers
  "Property.

  [Read Only]
  [Experimental]

  The maxLayers read-only property of the `web.vr.VRDisplayCapabilities`
  returns a number indicating the maximum number of `VRLayer`s
  the VR display can present at once (e.g. the maximum length of
  array that `Display.requestPresent()` can accept.)

  `var maximumLayers = vrDisplayCapabilitiesInstance.maxLayers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplayCapabilities/maxLayers`"
  [this]
  (-> this (.-maxLayers)))

