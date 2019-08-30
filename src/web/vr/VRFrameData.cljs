(ns web.vr.VRFrameData
  "The VRFrameData interface of the WebVR API represents all the
  needed to render a single frame of a VR scene; constructed by"
  (:refer-clojure :exclude []))

(defn left-projection-matrix
  "Property.

  [Read Only]
  [Experimental]

  The leftProjectionMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  projection to be used for the left eye’s rendering.

  `var myLPM = vrFrameDataInstance.leftProjectionMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftProjectionMatrix`"
  [this]
  (-> this (.-leftProjectionMatrix)))

(defn left-view-matrix
  "Property.

  [Read Only]
  [Experimental]

  The leftViewMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  view transform to be used for the left eye’s rendering.

  `var myLVM = vrFrameDataInstance.leftViewMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftViewMatrix`"
  [this]
  (-> this (.-leftViewMatrix)))

(defn pose
  "Property.

  [Read Only]
  [Experimental]

  The pose read-only property of the `web.vr.VRFrameData` interface
  the `web.vr.VRPose` of the `web.media.VRDisplay` at the current

  `var myPose = vrFrameDataInstance.pose;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/pose`"
  [this]
  (-> this (.-pose)))

(defn right-projection-matrix
  "Property.

  [Read Only]
  [Experimental]

  The rightProjectionMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  projection to be used for the right eye’s rendering.

  `var myRPM = vrFrameDataInstance.rightProjectionMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightProjectionMatrix`"
  [this]
  (-> this (.-rightProjectionMatrix)))

(defn right-view-matrix
  "Property.

  [Read Only]
  [Experimental]

  The rightViewMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  view transform to be used for the right eye’s rendering.

  `var myRVM = vrFrameDataInstance.rightViewMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightViewMatrix`"
  [this]
  (-> this (.-rightViewMatrix)))

(defn timestamp
  "Property.

  [Read Only]
  [Experimental]

  The timestamp read-only property of the `web.vr.VRFrameData`
  returns a constantly increasing timestamp value representing
  time a frame update occurred.

  `var myTimestamp = vrFrameDataInstance.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/timestamp`"
  [this]
  (-> this (.-timestamp)))

