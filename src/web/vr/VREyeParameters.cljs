(ns web.vr.VREyeParameters
  "The VREyeParameters interface of the WebVR API represents all
  information required to correctly render a scene for a given
  including field of view information."
  (:refer-clojure :exclude []))

(defn offset
  "Property.

  The offset read-only property of the `web.vr.VREyeParameters`
  represents the offset from the center point between the user's
  to the center of the eye, measured in meters.

  `var myOffset = eyeParametersInstance.offset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/offset`"
  [this]
  (-> this (.offset)))

(defn set-offset!
  "Property.

  The offset read-only property of the `web.vr.VREyeParameters`
  represents the offset from the center point between the user's
  to the center of the eye, measured in meters.

  `var myOffset = eyeParametersInstance.offset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/offset`"
  [this val]
  (aset this "offset" val))

(defn field-of-view
  "Property.

  The fieldOfView read-only property of the `web.vr.VREyeParameters`
  returns a `web.vr.VRFieldOfView` object describing the current
  of view for the eye, which can vary as the user adjusts their
  distance (IPD).

  `var myFOV = eyeParametersInstance.fieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/fieldOfView`"
  [this]
  (-> this (.fieldOfView)))

(defn set-field-of-view!
  "Property.

  The fieldOfView read-only property of the `web.vr.VREyeParameters`
  returns a `web.vr.VRFieldOfView` object describing the current
  of view for the eye, which can vary as the user adjusts their
  distance (IPD).

  `var myFOV = eyeParametersInstance.fieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/fieldOfView`"
  [this val]
  (aset this "fieldOfView" val))

(defn maximum-field-of-view
  "Property.

  The maximumFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the maximum supported field of view for the current

  `var maxFOV = myEyeParameters.maximumFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/maximumFieldOfView`"
  [this]
  (-> this (.maximumFieldOfView)))

(defn set-maximum-field-of-view!
  "Property.

  The maximumFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the maximum supported field of view for the current

  `var maxFOV = myEyeParameters.maximumFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/maximumFieldOfView`"
  [this val]
  (aset this "maximumFieldOfView" val))

(defn minimum-field-of-view
  "Property.

  The minimumFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the minimum supported field of view for the current

  `var minFOV = myEyeParameters.minimumFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/minimumFieldOfView`"
  [this]
  (-> this (.minimumFieldOfView)))

(defn set-minimum-field-of-view!
  "Property.

  The minimumFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the minimum supported field of view for the current

  `var minFOV = myEyeParameters.minimumFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/minimumFieldOfView`"
  [this val]
  (aset this "minimumFieldOfView" val))

(defn recommended-field-of-view
  "Property.

  The recommendedFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the recommended field of view for the current eye —
  based on user calibration.

  `var recFOV = myEyeParameters.recommendedFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/recommendedFieldOfView`"
  [this]
  (-> this (.recommendedFieldOfView)))

(defn set-recommended-field-of-view!
  "Property.

  The recommendedFieldOfView read-only property of the `web.vr.VREyeParameters`
  describes the recommended field of view for the current eye —
  based on user calibration.

  `var recFOV = myEyeParameters.recommendedFieldOfView;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/recommendedFieldOfView`"
  [this val]
  (aset this "recommendedFieldOfView" val))

(defn render-height
  "Property.

  The renderHeight read-only property of the `web.vr.VREyeParameters`
  describes the recommended render target height of each eye viewport,
  pixels.

  `var myRenderHeight = eyeParametersInstance.renderHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderHeight`"
  [this]
  (-> this (.renderHeight)))

(defn set-render-height!
  "Property.

  The renderHeight read-only property of the `web.vr.VREyeParameters`
  describes the recommended render target height of each eye viewport,
  pixels.

  `var myRenderHeight = eyeParametersInstance.renderHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderHeight`"
  [this val]
  (aset this "renderHeight" val))

(defn render-rect
  "Property.

  The renderRect read-only property of the `web.vr.VREyeParameters`
  specifies the viewport of a canvas into which visuals for the
  eye should be rendered.

  `var myRenderRect = MyEyeParameters.renderRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderRect`"
  [this]
  (-> this (.renderRect)))

(defn set-render-rect!
  "Property.

  The renderRect read-only property of the `web.vr.VREyeParameters`
  specifies the viewport of a canvas into which visuals for the
  eye should be rendered.

  `var myRenderRect = MyEyeParameters.renderRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderRect`"
  [this val]
  (aset this "renderRect" val))

(defn render-width
  "Property.

  The renderWidth read-only property of the `web.vr.VREyeParameters`
  describes the recommended render target width of each eye viewport,
  pixels.

  `var myRenderWidth = eyeParametersInstance.renderWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderWidth`"
  [this]
  (-> this (.renderWidth)))

(defn set-render-width!
  "Property.

  The renderWidth read-only property of the `web.vr.VREyeParameters`
  describes the recommended render target width of each eye viewport,
  pixels.

  `var myRenderWidth = eyeParametersInstance.renderWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderWidth`"
  [this val]
  (aset this "renderWidth" val))

