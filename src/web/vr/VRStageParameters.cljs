(ns web.vr.VRStageParameters
  "The VRStageParameters interface of the WebVR API represents the
  describing the the stage area for devices that support room-scale"
  (:refer-clojure :exclude []))

(defn sitting-to-standing-transform
  "Property.

  The sittingToStandingTransform read-only property of the `web.vr.VRStageParameters`
  contains a matrix that transforms the sitting-space view matrices
  `web.vr.VRFrameData` to standing-space.

  `var myTransform = vrStageParametersInstance.sittingToStandingTransform;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters/sittingToStandingTransform`"
  [this]
  (-> this (.-sittingToStandingTransform)))

(defn set-sitting-to-standing-transform!
  "Property.

  The sittingToStandingTransform read-only property of the `web.vr.VRStageParameters`
  contains a matrix that transforms the sitting-space view matrices
  `web.vr.VRFrameData` to standing-space.

  `var myTransform = vrStageParametersInstance.sittingToStandingTransform;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters/sittingToStandingTransform`"
  [this val]
  (aset this "sittingToStandingTransform" val))

(defn size-x
  "Property.

  The sizeX read-only property of the `web.vr.VRStageParameters`
  returns the width of the play-area bounds in meters.

  `var mySizeX = vrStageParametersInstance.sizeX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters/sizeX`"
  [this]
  (-> this (.-sizeX)))

(defn set-size-x!
  "Property.

  The sizeX read-only property of the `web.vr.VRStageParameters`
  returns the width of the play-area bounds in meters.

  `var mySizeX = vrStageParametersInstance.sizeX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters/sizeX`"
  [this val]
  (aset this "sizeX" val))

(defn size-y
  "Property.

  The sizeY read-only property of the `web.vr.VRStageParameters`
  returns the depth of the play-area bounds in meters.

  `var mySizeY = vrStageParametersInstance.sizeY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters/sizeY`"
  [this]
  (-> this (.-sizeY)))

(defn set-size-y!
  "Property.

  The sizeY read-only property of the `web.vr.VRStageParameters`
  returns the depth of the play-area bounds in meters.

  `var mySizeY = vrStageParametersInstance.sizeY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRStageParameters/sizeY`"
  [this val]
  (aset this "sizeY" val))

