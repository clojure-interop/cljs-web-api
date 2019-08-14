(ns web.Gyroscope
  "The Gyroscope interface of the Sensor APIs provides on each reading
  angular velocity of the device along all three axes."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Gyroscope constructor creates a new `web.Gyroscope` object which provides on each reading the angular velocity of the device along all three axes.

  options Optional
  Options are as follows:

  frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
  referenceFrame: Either 'device' or 'screen'. The default is 'device'.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/Gyroscope`"
  js/Gyroscope)

(defn x
  "Property.

  The x read-only property of the `web.Gyroscope` interface returns
  double precision integer containing the angular velocity of the
  along the its x axis.

  `var x = gyroscope.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/x`"
  [this]
  (-> this (.x)))

(defn set-x!
  "Property.

  The x read-only property of the `web.Gyroscope` interface returns
  double precision integer containing the angular velocity of the
  along the its x axis.

  `var x = gyroscope.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The y read-only property of the `web.Gyroscope` interface returns
  double precision integer containing the angular velocity of the
  along the its y axis.

  `var y = gyroscope.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/y`"
  [this]
  (-> this (.y)))

(defn set-y!
  "Property.

  The y read-only property of the `web.Gyroscope` interface returns
  double precision integer containing the angular velocity of the
  along the its y axis.

  `var y = gyroscope.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  The z read-only property of the `web.Gyroscope` interface returns
  double precision integer containing the angular velocity of the
  along the its z axis.

  `var z = gyroscope.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/z`"
  [this]
  (-> this (.z)))

(defn set-z!
  "Property.

  The z read-only property of the `web.Gyroscope` interface returns
  double precision integer containing the angular velocity of the
  along the its z axis.

  `var z = gyroscope.z`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/z`"
  [this val]
  (aset this "z" val))

