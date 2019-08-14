(ns web.OrientationSensor
  "The OrientationSensor interface of the the Sensor APIs is the
  class for orientation sensors. This interface cannot be used
  Instead it provides properties and methods accessed by interfaces
  inherit from it."
  (:refer-clojure :exclude []))

(defn populate-matrix
  "Method.

  The populateMatrix method of the `web.OrientationSensor` interface
  the given target matrix with the rotation matrix based on the
  sensor reading. The rotation matrix is shown below.

  `orientationInstance.populateMatrix(targetMatrix)

  Because `web.OrientationSensor` is a base class, populateMatrix may only be read from one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor/populateMatrix`"
  [this & args]
  (apply (-> this .-populateMatrix) (concat [this] args)))

(defn quaternion
  "Property.

  The quaternion read-only property of the `web.OrientationSensor`
  returns a four element `web.Array` whose elements contain the
  of the unit quaternion representing the device's orientation.

  `var quaternion = orientationInstance.quaternion

  Because `web.OrientationSensor` is a base class, quaternion may only be read from one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor/quaternion`"
  [this]
  (-> this (.quaternion)))

(defn set-quaternion!
  "Property.

  The quaternion read-only property of the `web.OrientationSensor`
  returns a four element `web.Array` whose elements contain the
  of the unit quaternion representing the device's orientation.

  `var quaternion = orientationInstance.quaternion

  Because `web.OrientationSensor` is a base class, quaternion may only be read from one of its derived classes.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor/quaternion`"
  [this val]
  (aset this "quaternion" val))

