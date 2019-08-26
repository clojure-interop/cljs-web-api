(ns web.device.DeviceOrientationEvent
  "The DeviceOrientationEvent provides web developers with information
  the physical orientation of the device running the web page."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DeviceOrientationEvent constructor creates a new `web.device.DeviceOrientationEvent`.

  type


  Either \\\"deviceorientation\\\" or \\\"deviceorientationabsolute\\\". If the later, then options.absolute should be true.
  options Optional
  Options are as follows:

  alpha: A number representing the motion of the device around the z axis, express in degrees with values ranging from 0 to 360.
  beta: A number representing the motion of the device around the x axis, express in degrees with values ranging from -180 to 180. This represents a front to back motion of the device.
  gamma: A number representing the motion of the device around the y axis, express in degrees with values ranging from -90 to 90. This represents a left to right motion of the device.
  absolute: A boolean that indicates whether or not the device is providing orientation data absolutely.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent`"
  js/DeviceOrientationEvent)

(defn absolute
  "Property.

  Indicates whether or not the device is providing orientation
  absolutely (that is, in reference to the Earth's coordinate frame)
  using some arbitrary frame determined by the device. See Orientation
  motion data explained for details.

  `var absolute = instanceOfDeviceOrientationEvent.absolute;

  On return, absolute is true if the orientation data in instanceOfDeviceOrientationEvent is provided as the difference between the Earth's coordinate frame and the device's coordinate frame, or false if the orientation data is being provided in reference to some arbitrary, device-determined coordinate frame.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/absolute`"
  [this]
  (-> this (.-absolute)))

(defn set-absolute!
  "Property.

  Indicates whether or not the device is providing orientation
  absolutely (that is, in reference to the Earth's coordinate frame)
  using some arbitrary frame determined by the device. See Orientation
  motion data explained for details.

  `var absolute = instanceOfDeviceOrientationEvent.absolute;

  On return, absolute is true if the orientation data in instanceOfDeviceOrientationEvent is provided as the difference between the Earth's coordinate frame and the device's coordinate frame, or false if the orientation data is being provided in reference to some arbitrary, device-determined coordinate frame.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/absolute`"
  [this val]
  (aset this "absolute" val))

(defn alpha
  "Property.

  Returns the rotation of the device around the Z axis; that is,
  number of degrees by which the device is being twisted around
  center of the screen. See Orientation and motion data explained
  details.

  `var alpha = instanceOfDeviceOrientationEvent.alpha;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/alpha`"
  [this]
  (-> this (.-alpha)))

(defn set-alpha!
  "Property.

  Returns the rotation of the device around the Z axis; that is,
  number of degrees by which the device is being twisted around
  center of the screen. See Orientation and motion data explained
  details.

  `var alpha = instanceOfDeviceOrientationEvent.alpha;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/alpha`"
  [this val]
  (aset this "alpha" val))

(defn beta
  "Property.

  Returns the rotation of the device around the X axis; that is,
  number of degrees, ranged between -180 and 180, by which the
  is tipped forward or backward. See Orientation and motion data
  for details.

  `var beta = instanceOfDeviceOrientationEvent.beta;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/beta`"
  [this]
  (-> this (.-beta)))

(defn set-beta!
  "Property.

  Returns the rotation of the device around the X axis; that is,
  number of degrees, ranged between -180 and 180, by which the
  is tipped forward or backward. See Orientation and motion data
  for details.

  `var beta = instanceOfDeviceOrientationEvent.beta;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/beta`"
  [this val]
  (aset this "beta" val))

(defn gamma
  "Property.

  Returns the rotation of the device around the Y axis; that is,
  number of degrees, ranged between -90 and 90, by which the device
  tilted left or right. See Orientation and motion data explained
  details.

  `var gamma = orientationEvent.gamma;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/gamma`"
  [this]
  (-> this (.-gamma)))

(defn set-gamma!
  "Property.

  Returns the rotation of the device around the Y axis; that is,
  number of degrees, ranged between -90 and 90, by which the device
  tilted left or right. See Orientation and motion data explained
  details.

  `var gamma = orientationEvent.gamma;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/gamma`"
  [this val]
  (aset this "gamma" val))

