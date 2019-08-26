(ns web.vr.VRFrameData
  "The VRFrameData interface of the WebVR API represents all the
  needed to render a single frame of a VR scene; constructed by"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The `web.vr.VRFrameData` constructor creates a VRFrameData object instance.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/VRFrameData`"
  js/VRFrameData)

(defn left-projection-matrix
  "Property.

  The leftProjectionMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  projection to be used for the left eye’s rendering.

  `var myLPM = vrFrameDataInstance.leftProjectionMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftProjectionMatrix`"
  [this]
  (-> this (.leftProjectionMatrix)))

(defn set-left-projection-matrix!
  "Property.

  The leftProjectionMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  projection to be used for the left eye’s rendering.

  `var myLPM = vrFrameDataInstance.leftProjectionMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftProjectionMatrix`"
  [this val]
  (aset this "leftProjectionMatrix" val))

(defn left-view-matrix
  "Property.

  The leftViewMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  view transform to be used for the left eye’s rendering.

  `var myLVM = vrFrameDataInstance.leftViewMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftViewMatrix`"
  [this]
  (-> this (.leftViewMatrix)))

(defn set-left-view-matrix!
  "Property.

  The leftViewMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  view transform to be used for the left eye’s rendering.

  `var myLVM = vrFrameDataInstance.leftViewMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftViewMatrix`"
  [this val]
  (aset this "leftViewMatrix" val))

(defn pose
  "Property.

  The pose read-only property of the `web.vr.VRFrameData` interface
  the `web.vr.VRPose` of the `web.media.VRDisplay` at the current

  `var myPose = vrFrameDataInstance.pose;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/pose`"
  [this]
  (-> this (.pose)))

(defn set-pose!
  "Property.

  The pose read-only property of the `web.vr.VRFrameData` interface
  the `web.vr.VRPose` of the `web.media.VRDisplay` at the current

  `var myPose = vrFrameDataInstance.pose;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/pose`"
  [this val]
  (aset this "pose" val))

(defn right-projection-matrix
  "Property.

  The rightProjectionMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  projection to be used for the right eye’s rendering.

  `var myRPM = vrFrameDataInstance.rightProjectionMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightProjectionMatrix`"
  [this]
  (-> this (.rightProjectionMatrix)))

(defn set-right-projection-matrix!
  "Property.

  The rightProjectionMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  projection to be used for the right eye’s rendering.

  `var myRPM = vrFrameDataInstance.rightProjectionMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightProjectionMatrix`"
  [this val]
  (aset this "rightProjectionMatrix" val))

(defn right-view-matrix
  "Property.

  The rightViewMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  view transform to be used for the right eye’s rendering.

  `var myRVM = vrFrameDataInstance.rightViewMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightViewMatrix`"
  [this]
  (-> this (.rightViewMatrix)))

(defn set-right-view-matrix!
  "Property.

  The rightViewMatrix read-only property of the `web.vr.VRFrameData`
  returns a `js.Float32Array` representing a 4x4 matrix that describes
  view transform to be used for the right eye’s rendering.

  `var myRVM = vrFrameDataInstance.rightViewMatrix;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightViewMatrix`"
  [this val]
  (aset this "rightViewMatrix" val))

(defn timestamp
  "Property.

  The timestamp read-only property of the `web.vr.VRFrameData`
  returns a constantly increasing timestamp value representing
  time a frame update occurred.

  `var myTimestamp = vrFrameDataInstance.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/timestamp`"
  [this]
  (-> this (.timestamp)))

(defn set-timestamp!
  "Property.

  The timestamp read-only property of the `web.vr.VRFrameData`
  returns a constantly increasing timestamp value representing
  time a frame update occurred.

  `var myTimestamp = vrFrameDataInstance.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/timestamp`"
  [this val]
  (aset this "timestamp" val))

