(ns web.geolocation.PositionOptions
  "The PositionOptions interface describes an object containing
  properties to pass as a parameter of `Geolocation.getCurrentPosition()`
  `Geolocation.watchPosition()`."
  (:refer-clojure :exclude []))

(defn enable-high-accuracy
  "Property.

  The PositionOptions.enableHighAccuracy property is a `js.Boolean`
  indicates the application would like to receive the best possible
  If true and if the device is able to provide a more accurate
  it will do so. Note that this can result in slower response times
  increased power consumption (with a GPS chip on a mobile device
  example). On the other hand, if false (the default value), the
  can take the liberty to save resources by responding more quickly
  using less power.

  `positionOptions.enableHighAccuracy = booleanValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy`"
  [this]
  (-> this (.-enableHighAccuracy)))

(defn set-enable-high-accuracy!
  "Property.

  The PositionOptions.enableHighAccuracy property is a `js.Boolean`
  indicates the application would like to receive the best possible
  If true and if the device is able to provide a more accurate
  it will do so. Note that this can result in slower response times
  increased power consumption (with a GPS chip on a mobile device
  example). On the other hand, if false (the default value), the
  can take the liberty to save resources by responding more quickly
  using less power.

  `positionOptions.enableHighAccuracy = booleanValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy`"
  [this val]
  (aset this "enableHighAccuracy" val))

(defn timeout
  "Property.

  The PositionOptions.timeout property is a positive long value
  the maximum length of time (in milliseconds) the device is allowed
  take in order to return a position. The default value is Infinity,
  that getCurrentPosition() won't return until the position is

  `positionOptions.timeout = timeLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/timeout`"
  [this]
  (-> this (.-timeout)))

(defn set-timeout!
  "Property.

  The PositionOptions.timeout property is a positive long value
  the maximum length of time (in milliseconds) the device is allowed
  take in order to return a position. The default value is Infinity,
  that getCurrentPosition() won't return until the position is

  `positionOptions.timeout = timeLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/timeout`"
  [this val]
  (aset this "timeout" val))

(defn maximum-age
  "Property.

  The PositionOptions.maximumAge property is a positive long value
  the maximum age in milliseconds of a possible cached position
  is acceptable to return. If set to 0, it means that the device
  use a cached position and must attempt to retrieve the real current
  If set to Infinity the device must return a cached position regardless
  its age.

  `positionOptions.maximumAge = timeLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/maximumAge`"
  [this]
  (-> this (.-maximumAge)))

(defn set-maximum-age!
  "Property.

  The PositionOptions.maximumAge property is a positive long value
  the maximum age in milliseconds of a possible cached position
  is acceptable to return. If set to 0, it means that the device
  use a cached position and must attempt to retrieve the real current
  If set to Infinity the device must return a cached position regardless
  its age.

  `positionOptions.maximumAge = timeLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/maximumAge`"
  [this val]
  (aset this "maximumAge" val))

