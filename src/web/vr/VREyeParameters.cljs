(ns web.vr.VREyeParameters
  "The VREyeParameters interface of the WebVR API represents all
  information required to correctly render a scene for a given
  including field of view information."
  (:refer-clojure :exclude []))

(defn offset
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The offset read-only property of the `web.vr.VREyeParameters`
  represents the offset from the center point between the user's
  to the center of the eye, measured in meters.

  `var myOffset = eyeParametersInstance.offset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/offset`"
  [this]
  (-> this (.-offset)))

(defn field-of-view
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The fieldOfView read-only property of the `web.vr.VREyeParameters`
  returns a `web.vr.VRFieldOfView` object describing the current
  of view for the eye, which can vary as the user adjusts their
  distance (IPD).

  `var myFOV = eyeParametersInstance.fieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/fieldOfView`"
  [this]
  (-> this (.-fieldOfView)))

(defn render-width
  "Property.

  [Read Only]
  [Experimental]

  The renderWidth read-only property of the `web.vr.VREyeParameters`
  describes the recommended render target width of each eye viewport,
  pixels.

  `var myRenderWidth = eyeParametersInstance.renderWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderWidth`"
  [this]
  (-> this (.-renderWidth)))

(defn render-height
  "Property.

  [Read Only]
  [Experimental]

  The renderHeight read-only property of the `web.vr.VREyeParameters`
  describes the recommended render target height of each eye viewport,
  pixels.

  `var myRenderHeight = eyeParametersInstance.renderHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderHeight`"
  [this]
  (-> this (.-renderHeight)))

(defn maximum-field-of-view
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The maximumFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the maximum supported field of view for the current

  `var maxFOV = myEyeParameters.maximumFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/maximumFieldOfView`"
  [this]
  (-> this (.-maximumFieldOfView)))

(defn minimum-field-of-view
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The minimumFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the minimum supported field of view for the current

  `var minFOV = myEyeParameters.minimumFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/minimumFieldOfView`"
  [this]
  (-> this (.-minimumFieldOfView)))

(defn recommended-field-of-view
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The recommendedFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the recommended field of view for the current eye —
  based on user calibration.

  `var recFOV = myEyeParameters.recommendedFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/recommendedFieldOfView`"
  [this]
  (-> this (.-recommendedFieldOfView)))

(defn render-rect
  "Property.

  [Read Only]
  [Experimental]
  [Obsolute]

  The renderRect read-only property of the `web.vr.VREyeParameters`
  specifies the viewport of a canvas into which visuals for the
  eye should be rendered.

  `var myRenderRect = MyEyeParameters.renderRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderRect`"
  [this]
  (-> this (.-renderRect)))

