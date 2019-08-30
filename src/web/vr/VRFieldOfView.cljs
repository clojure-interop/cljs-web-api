(ns web.vr.VRFieldOfView
  "The VRFieldOfView interface of the WebVR API represents a field
  view defined by 4 different degree values describing the view
  a center point."
  (:refer-clojure :exclude []))

(defn up-degrees
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The upDegrees read-only property of the `web.vr.VRFieldOfView`
  returns the number of degrees upwards that the field of view
  in.

  `var myUpDegrees = VRFieldOfView.upDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/upDegrees`"
  [this]
  (-> this (.-upDegrees)))

(defn right-degrees
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The rightDegrees read-only property of the `web.vr.VRFieldOfView`
  returns the number of degrees to the right that the field of
  extends in.

  `var myRightDegrees = VRFieldOfView.rightDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/rightDegrees`"
  [this]
  (-> this (.-rightDegrees)))

(defn down-degrees
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The downDegrees read-only property of the `web.vr.VRFieldOfView`
  returns the number of degrees downwards that the field of view
  in.

  `var myDownDegrees = VRFieldOfView.downDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/downDegrees`"
  [this]
  (-> this (.-downDegrees)))

(defn left-degrees
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The leftDegrees read-only property of the `web.vr.VRFieldOfView`
  returns the number of degrees to the left that the field of view
  in.

  `var myLeftDegrees = VRFieldOfView.leftDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/leftDegrees`"
  [this]
  (-> this (.-leftDegrees)))

