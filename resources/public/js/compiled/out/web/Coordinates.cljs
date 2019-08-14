(ns web.Coordinates
  "The Coordinates interface represents the position and altitude
  the device on Earth, as well as the accuracy with which these
  are calculated."
  (:refer-clojure :exclude []))

(defn accuracy
  "Property.

  The Coordinates.accuracy read-only property is a strictly positive
  representing the accuracy, with a 95% confidence level, of the
  and `web.Coordinates.longitude` properties expressed in meters.

  `acc = coordinates.accuracy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/accuracy`"
  [this]
  (-> this (.accuracy)))

(defn set-accuracy!
  "Property.

  The Coordinates.accuracy read-only property is a strictly positive
  representing the accuracy, with a 95% confidence level, of the
  and `web.Coordinates.longitude` properties expressed in meters.

  `acc = coordinates.accuracy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/accuracy`"
  [this val]
  (aset this "accuracy" val))

(defn altitude
  "Property.

  The Coordinates.altitude read-only property is a double representing
  altitude of the position in meters, relative to sea level. This
  is null if the implementation cannot provide this data.

  `alt = coordinates.altitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitude`"
  [this]
  (-> this (.altitude)))

(defn set-altitude!
  "Property.

  The Coordinates.altitude read-only property is a double representing
  altitude of the position in meters, relative to sea level. This
  is null if the implementation cannot provide this data.

  `alt = coordinates.altitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitude`"
  [this val]
  (aset this "altitude" val))

(defn altitude-accuracy
  "Property.

  The Coordinates.altitudeAccuracy read-only property is a strictly
  double representing the accuracy, with a 95% confidence level,
  the altitude expressed in meters. This value is null if the implementation
  support measuring altitude.

  `altAcc = coordinates.altitudeAccuracy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitudeAccuracy`"
  [this]
  (-> this (.altitudeAccuracy)))

(defn set-altitude-accuracy!
  "Property.

  The Coordinates.altitudeAccuracy read-only property is a strictly
  double representing the accuracy, with a 95% confidence level,
  the altitude expressed in meters. This value is null if the implementation
  support measuring altitude.

  `altAcc = coordinates.altitudeAccuracy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitudeAccuracy`"
  [this val]
  (aset this "altitudeAccuracy" val))

(defn heading
  "Property.

  The Coordinates.heading read-only property is a double representing
  direction in which the device is traveling. This value, specified
  degrees, indicates how far off from heading due north the device
  Zero degrees represents true true north, and the direction is
  clockwise (which means that east is 90 degrees and west is 270
  If `web.Coordinates.speed` is 0, heading is NaN. If the device
  not able to provide heading information, this value is null.

  `heading = coordinates.heading`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/heading`"
  [this]
  (-> this (.heading)))

(defn set-heading!
  "Property.

  The Coordinates.heading read-only property is a double representing
  direction in which the device is traveling. This value, specified
  degrees, indicates how far off from heading due north the device
  Zero degrees represents true true north, and the direction is
  clockwise (which means that east is 90 degrees and west is 270
  If `web.Coordinates.speed` is 0, heading is NaN. If the device
  not able to provide heading information, this value is null.

  `heading = coordinates.heading`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/heading`"
  [this val]
  (aset this "heading" val))

(defn latitude
  "Property.

  The Coordinates.latitude read-only property is a double representing
  latitude of the position in decimal degrees.

  `lat = coordinates.latitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/latitude`"
  [this]
  (-> this (.latitude)))

(defn set-latitude!
  "Property.

  The Coordinates.latitude read-only property is a double representing
  latitude of the position in decimal degrees.

  `lat = coordinates.latitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/latitude`"
  [this val]
  (aset this "latitude" val))

(defn longitude
  "Property.

  The `web.Coordinates` interface's read-only longitude property
  a double-precision floating point value which represents the
  of a geographical position, specified in decimal degrees. Together
  a `dom.DOMTimeStamp` indicating a time of measurement, the Coordinates
  is part of the `web.Position` interface which is the object type
  by Geolocation API functions that obtain and return a geographical

  `longitude = coordinates.longitude`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/longitude`"
  [this]
  (-> this (.longitude)))

(defn speed
  "Property.

  The Coordinates.speed read-only property is a double representing
  velocity of the device in meters per second. This value is null
  the implementation is not able to measure it.

  `speed = coordinates.speed`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/speed`"
  [this]
  (-> this (.speed)))

(defn set-speed!
  "Property.

  The Coordinates.speed read-only property is a double representing
  velocity of the device in meters per second. This value is null
  the implementation is not able to measure it.

  `speed = coordinates.speed`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/speed`"
  [this val]
  (aset this "speed" val))

