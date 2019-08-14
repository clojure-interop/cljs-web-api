(ns web.Accelerometer
  "The Accelerometer interface of the Sensor APIs provides on each
  the acceleration applied to the device along all three axes."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Accelerometer constructor creates a new `web.Accelerometer` object which returns the acceleration of the device along all three axes at the time it is read.

  options Optional
  Options are as follows:

  frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onerror` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
  referenceFrame: Either 'device' or 'screen'. The default is 'device'.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/Accelerometer`"
  js/Accelerometer)

(defn x
  "Property.

  The x read-only property of the `web.Accelerometer` interface
  a double precision integer containing the acceleration of the
  along the its x axis.

  `var xAcceleration = accelerometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/x`"
  [this]
  (-> this (.x)))

(defn set-x!
  "Property.

  The x read-only property of the `web.Accelerometer` interface
  a double precision integer containing the acceleration of the
  along the its x axis.

  `var xAcceleration = accelerometer.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The y read-only property of the `web.Accelerometer` interface
  a double precision integer containing the acceleration of the
  along the its y axis.

  `var yAcceleration = accelerometer.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/y`"
  [this]
  (-> this (.y)))

(defn set-y!
  "Property.

  The y read-only property of the `web.Accelerometer` interface
  a double precision integer containing the acceleration of the
  along the its y axis.

  `var yAcceleration = accelerometer.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  The z read-only property of the `web.Accelerometer` interface
  a double precision integer containing the acceleration of the
  along the its z axis.

  `var zAcceleration = accelerometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/z`"
  [this]
  (-> this (.z)))

(defn set-z!
  "Property.

  The z read-only property of the `web.Accelerometer` interface
  a double precision integer containing the acceleration of the
  along the its z axis.

  `var zAcceleration = accelerometer.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer/z`"
  [this val]
  (aset this "z" val))

