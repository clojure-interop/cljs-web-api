(ns vr.VRFieldOfView
  "The VRFieldOfView interface of the WebVR API represents a field
  view defined by 4 different degree values describing the view
  a center point."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The VRFieldOfView() constructor creates a new `vr.VRFieldOFView` object.

  Four argument version:


  upDegrees
  The number of degrees upwards that the field of view will extend in.
  rightDegrees
  The number of degrees to the right that the field of view will extend in.
  downDegrees
  The number of degrees downwards that the field of view will extend in.
  leftDegrees
  The number of degrees to the left that the field of view will extend in.



  One argument version:


  init
  A dictionary object containing the four degree values specified above.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/VRFieldOfView`"
  js/VRFieldOfView)

(defn down-degrees
  "Property.

  The downDegrees read-only property of the `vr.VRFieldOfView`
  returns the number of degrees downwards that the field of view
  in.

  `var myDownDegrees = VRFieldOfView.downDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/downDegrees`"
  [this]
  (-> this (.downDegrees)))

(defn set-down-degrees!
  "Property.

  The downDegrees read-only property of the `vr.VRFieldOfView`
  returns the number of degrees downwards that the field of view
  in.

  `var myDownDegrees = VRFieldOfView.downDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/downDegrees`"
  [this val]
  (aset this "downDegrees" val))

(defn left-degrees
  "Property.

  The leftDegrees read-only property of the `vr.VRFieldOfView`
  returns the number of degrees to the left that the field of view
  in.

  `var myLeftDegrees = VRFieldOfView.leftDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/leftDegrees`"
  [this]
  (-> this (.leftDegrees)))

(defn set-left-degrees!
  "Property.

  The leftDegrees read-only property of the `vr.VRFieldOfView`
  returns the number of degrees to the left that the field of view
  in.

  `var myLeftDegrees = VRFieldOfView.leftDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/leftDegrees`"
  [this val]
  (aset this "leftDegrees" val))

(defn right-degrees
  "Property.

  The rightDegrees read-only property of the `vr.VRFieldOfView`
  returns the number of degrees to the right that the field of
  extends in.

  `var myRightDegrees = VRFieldOfView.rightDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/rightDegrees`"
  [this]
  (-> this (.rightDegrees)))

(defn set-right-degrees!
  "Property.

  The rightDegrees read-only property of the `vr.VRFieldOfView`
  returns the number of degrees to the right that the field of
  extends in.

  `var myRightDegrees = VRFieldOfView.rightDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/rightDegrees`"
  [this val]
  (aset this "rightDegrees" val))

(defn up-degrees
  "Property.

  The upDegrees read-only property of the `vr.VRFieldOfView` interface
  the number of degrees upwards that the field of view extends

  `var myUpDegrees = VRFieldOfView.upDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/upDegrees`"
  [this]
  (-> this (.upDegrees)))

(defn set-up-degrees!
  "Property.

  The upDegrees read-only property of the `vr.VRFieldOfView` interface
  the number of degrees upwards that the field of view extends

  `var myUpDegrees = VRFieldOfView.upDegrees;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFieldOfView/upDegrees`"
  [this val]
  (aset this "upDegrees" val))

