(ns web.mobile.DeviceMotionEvent
  "The DeviceMotionEvent provides web developers with information
  the speed of changes for the device's position and orientation."
  (:refer-clojure :exclude []))

(defn acceleration
  "Property.

  [Read Only]

  The acceleration property returns the amount of acceleration
  by the device, in meters per second squared (m/s2).

  `var acceleration = deviceMotionEvent.acceleration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/acceleration`"
  [this]
  (-> this (.-acceleration)))

(defn acceleration-including-gravity
  "Property.

  [Read Only]

  The accelerationIncludingGravity property returns the amount
  acceleration recorded by the device, in meters per second squared
  Unlike `DeviceMotionEvent.acceleration` which compensates for
  influence of gravity, its value is the sum of the acceleration
  the device as induced by the user and the acceleration caused
  gravity.

  `var acceleration = deviceMotionEvent.accelerationIncludingGravity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity`"
  [this]
  (-> this (.-accelerationIncludingGravity)))

(defn rotation-rate
  "Property.

  [Read Only]

  Returns the rate at which the device is rotating around each
  its axes in degrees per second.

  `var rotationRate = deviceMotionEvent.rotationRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/rotationRate`"
  [this]
  (-> this (.-rotationRate)))

(defn interval
  "Property.

  [Read Only]

  Returns the interval, in milliseconds, at which data is obtained
  the underlaying hardware. You can use this to determine the granularity
  motion events.

  `var interval = deviceMotionEvent.interval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/interval`"
  [this]
  (-> this (.-interval)))

