(ns web.DeviceMotionEvent
  "The DeviceMotionEvent provides web developers with information
  the speed of changes for the device's position and orientation."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DeviceMotionEvent constructor creates a new `web.DeviceMotionEvent`.

  type
  Must be \\\"devicemotion\\\".
  optionsOptional
  Options are as follows:

  acceleration: An object giving the acceleration of the device on the three axis X, Y and Z. Acceleration is expressed in m/s2.
  accelerationIncludingGravity: An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity. Acceleration is expressed in m/s2.
  rotationRate: An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. Rotation rate is express in degrees per seconds.
  interval: A number representing the interval of time, in milliseconds, at which data is obtained from the device.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent`"
  js/DeviceMotionEvent)

(defn acceleration
  "Property.

  The acceleration property returns the amount of acceleration
  by the device, in meters per second squared (m/s2).

  `var acceleration = deviceMotionEvent.acceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/acceleration`"
  [this]
  (-> this (.acceleration)))

(defn set-acceleration!
  "Property.

  The acceleration property returns the amount of acceleration
  by the device, in meters per second squared (m/s2).

  `var acceleration = deviceMotionEvent.acceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/acceleration`"
  [this val]
  (aset this "acceleration" val))

(defn acceleration-including-gravity
  "Property.

  The accelerationIncludingGravity property returns the amount
  acceleration recorded by the device, in meters per second squared
  Unlike `web.DeviceMotionEvent.acceleration` which compensates
  the influence of gravity, its value is the sum of the acceleration
  the device as induced by the user and the acceleration caused
  gravity.

  `var acceleration = deviceMotionEvent.accelerationIncludingGravity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity`"
  [this]
  (-> this (.accelerationIncludingGravity)))

(defn set-acceleration-including-gravity!
  "Property.

  The accelerationIncludingGravity property returns the amount
  acceleration recorded by the device, in meters per second squared
  Unlike `web.DeviceMotionEvent.acceleration` which compensates
  the influence of gravity, its value is the sum of the acceleration
  the device as induced by the user and the acceleration caused
  gravity.

  `var acceleration = deviceMotionEvent.accelerationIncludingGravity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity`"
  [this val]
  (aset this "accelerationIncludingGravity" val))

(defn interval
  "Property.

  Returns the interval, in milliseconds, at which data is obtained
  the underlaying hardware. You can use this to determine the granularity
  motion events.

  `var interval = deviceMotionEvent.interval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/interval`"
  [this]
  (-> this (.interval)))

(defn set-interval!
  "Property.

  Returns the interval, in milliseconds, at which data is obtained
  the underlaying hardware. You can use this to determine the granularity
  motion events.

  `var interval = deviceMotionEvent.interval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/interval`"
  [this val]
  (aset this "interval" val))

(defn rotation-rate
  "Property.

  Returns the rate at which the device is rotating around each
  its axes in degrees per second.

  `var rotationRate = deviceMotionEvent.rotationRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/rotationRate`"
  [this]
  (-> this (.rotationRate)))

(defn set-rotation-rate!
  "Property.

  Returns the rate at which the device is rotating around each
  its axes in degrees per second.

  `var rotationRate = deviceMotionEvent.rotationRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/rotationRate`"
  [this val]
  (aset this "rotationRate" val))

