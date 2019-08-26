(ns web.sensors.Magnetometer
  "The Magnetometer interface of the Sensor APIs provides information
  the magnetic field as detected by the device’s primary magnetometer"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Magnetometer constructor creates a new `web.sensors.Magnetometer` object which returns information about the magnetic field as detected by a device’s primary magnetometer sensor.

  options Optional
  Options are as follows:

  frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends on device hardware and consequently may be less than requested.
  referenceFrame: Either 'device' or 'screen'. The default is 'device'.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/Magnetometer`"
  js/Magnetometer)

(defn x
  "Property.

  The x read-only property of the `web.sensors.Magnetometer` interface
  a double precision integer containing the magnetic field around
  device's x axis.

  `var magnetometerx = magnetometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/x`"
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  The x read-only property of the `web.sensors.Magnetometer` interface
  a double precision integer containing the magnetic field around
  device's x axis.

  `var magnetometerx = magnetometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The y read-only property of the `web.sensors.Magnetometer` interface
  a double precision integer containing the magnetic field around
  device's y axis.

  `var magnetometery = magnetometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/y`"
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  The y read-only property of the `web.sensors.Magnetometer` interface
  a double precision integer containing the magnetic field around
  device's y axis.

  `var magnetometery = magnetometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  The z read-only property of the `web.sensors.Magnetometer` interface
  a double-precision integer containing the magnetic field around
  device's z axis.

  `var magnetometerz = magnetometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/z`"
  [this]
  (-> this (.-z)))

(defn set-z!
  "Property.

  The z read-only property of the `web.sensors.Magnetometer` interface
  a double-precision integer containing the magnetic field around
  device's z axis.

  `var magnetometerz = magnetometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer/z`"
  [this val]
  (aset this "z" val))

