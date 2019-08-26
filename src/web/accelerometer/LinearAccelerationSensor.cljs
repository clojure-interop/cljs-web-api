(ns web.accelerometer.LinearAccelerationSensor
  "The LinearAccelerationSensor interface of the Sensor APIs provides
  each reading the acceleration applied to the device along all
  axes, but without the contribution of gravity."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The LinearAccelerationSensor constructor creates a new `web.accelerometer.LinearAccelerationSensor` object which provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.

  options Optional
  Options are as follows:

  frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
  referenceFrame: Either 'device' or 'screen'. The default is 'device'.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/LinearAccelerationSensor`"
  js/LinearAccelerationSensor)

(defn x
  "Property.

  The x read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the linear acceleration
  the device along the device's x axis.

  `var xLinearAccelerationSensor = linearAccelerationSensor.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/x`"
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  The x read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the linear acceleration
  the device along the device's x axis.

  `var xLinearAccelerationSensor = linearAccelerationSensor.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The y read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the acceleration
  the device along the device's y axis.

  `var yAcceleration = accelerometer.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/y`"
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  The y read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the acceleration
  the device along the device's y axis.

  `var yAcceleration = accelerometer.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  The z read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the acceleration
  the device along the device's z axis.

  `var zAcceleration = accelerometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/z`"
  [this]
  (-> this (.-z)))

(defn set-z!
  "Property.

  The z read-only property of the `web.accelerometer.LinearAccelerationSensor`
  returns a double precision integer containing the acceleration
  the device along the device's z axis.

  `var zAcceleration = accelerometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor/z`"
  [this val]
  (aset this "z" val))

