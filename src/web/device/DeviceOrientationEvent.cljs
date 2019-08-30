(ns web.device.DeviceOrientationEvent
  "The DeviceOrientationEvent provides web developers with information
  the physical orientation of the device running the web page."
  (:refer-clojure :exclude []))

(defn absolute
  "Property.

  [Read Only]

  Indicates whether or not the device is providing orientation
  absolutely (that is, in reference to the Earth's coordinate frame)
  using some arbitrary frame determined by the device. See Orientation
  motion data explained for details.

  `var absolute = instanceOfDeviceOrientationEvent.absolute;

  On return, absolute is true if the orientation data in instanceOfDeviceOrientationEvent is provided as the difference between the Earth's coordinate frame and the device's coordinate frame, or false if the orientation data is being provided in reference to some arbitrary, device-determined coordinate frame.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/absolute`"
  [this]
  (-> this (.-absolute)))

(defn alpha
  "Property.

  [Read Only]

  Returns the rotation of the device around the Z axis; that is,
  number of degrees by which the device is being twisted around
  center of the screen. See Orientation and motion data explained
  details.

  `var alpha = instanceOfDeviceOrientationEvent.alpha;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/alpha`"
  [this]
  (-> this (.-alpha)))

(defn beta
  "Property.

  [Read Only]

  Returns the rotation of the device around the X axis; that is,
  number of degrees, ranged between -180 and 180, by which the
  is tipped forward or backward. See Orientation and motion data
  for details.

  `var beta = instanceOfDeviceOrientationEvent.beta;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/beta`"
  [this]
  (-> this (.-beta)))

(defn gamma
  "Property.

  [Read Only]

  Returns the rotation of the device around the Y axis; that is,
  number of degrees, ranged between -90 and 90, by which the device
  tilted left or right. See Orientation and motion data explained
  details.

  `var gamma = orientationEvent.gamma;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/gamma`"
  [this]
  (-> this (.-gamma)))

