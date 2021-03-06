(ns web.geolocation.Coordinates
  "The Coordinates interface represents the position and altitude
  the device on Earth, as well as the accuracy with which these
  are calculated."
  (:refer-clojure :exclude []))

(defn latitude
  "Property.

  [Read Only]

  The Coordinates.latitude read-only property is a double representing
  latitude of the position in decimal degrees.

  `lat = coordinates.latitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/latitude`"
  [this]
  (-> this (.-latitude)))

(defn longitude
  "Property.

  [Read Only]

  The `web.geolocation.Coordinates` interface's read-only longitude
  is a double-precision floating point value which represents the
  of a geographical position, specified in decimal degrees. Together
  a `web.dom.DOMTimeStamp` indicating a time of measurement, the
  object is part of the `web.geolocation.Position` interface which
  the object type returned by Geolocation API functions that obtain
  return a geographical position.

  `longitude = coordinates.longitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/longitude`"
  [this]
  (-> this (.-longitude)))

(defn altitude
  "Property.

  [Read Only]

  The Coordinates.altitude read-only property is a double representing
  altitude of the position in meters, relative to sea level. This
  is null if the implementation cannot provide this data.

  `alt = coordinates.altitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitude`"
  [this]
  (-> this (.-altitude)))

(defn accuracy
  "Property.

  [Read Only]

  The Coordinates.accuracy read-only property is a strictly positive
  representing the accuracy, with a 95% confidence level, of the
  and `Coordinates.longitude` properties expressed in meters.

  `acc = coordinates.accuracy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/accuracy`"
  [this]
  (-> this (.-accuracy)))

(defn altitude-accuracy
  "Property.

  [Read Only]

  The Coordinates.altitudeAccuracy read-only property is a strictly
  double representing the accuracy, with a 95% confidence level,
  the altitude expressed in meters. This value is null if the implementation
  support measuring altitude.

  `altAcc = coordinates.altitudeAccuracy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitudeAccuracy`"
  [this]
  (-> this (.-altitudeAccuracy)))

(defn heading
  "Property.

  [Read Only]

  The Coordinates.heading read-only property is a double representing
  direction in which the device is traveling. This value, specified
  degrees, indicates how far off from heading due north the device
  Zero degrees represents true true north, and the direction is
  clockwise (which means that east is 90 degrees and west is 270
  If `Coordinates.speed` is 0, heading is NaN. If the device is
  able to provide heading information, this value is null.

  `heading = coordinates.heading`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/heading`"
  [this]
  (-> this (.-heading)))

(defn speed
  "Property.

  [Read Only]

  The Coordinates.speed read-only property is a double representing
  velocity of the device in meters per second. This value is null
  the implementation is not able to measure it.

  `speed = coordinates.speed`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/speed`"
  [this]
  (-> this (.-speed)))

