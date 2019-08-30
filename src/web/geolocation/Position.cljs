(ns web.geolocation.Position
  "The Position interface represents the position of the concerned
  at a given time. The position, represented by a `web.geolocation.Coordinates`
  comprehends the 2D position of the device, on a spheroid representing
  Earth, but also its altitude and its speed."
  (:refer-clojure :exclude []))

(defn coords
  "Property.

  [Read Only]

  The Position.coords read-only property, a `web.geolocation.Coordinates`
  represents a geographic attitude: it contains the location, that
  longitude and latitude on the Earth, the altitude, and the speed
  the object concerned, regrouped inside the returned value. It
  contains accuracy information about these values.

  `coord = position.coords`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/coords`"
  [this]
  (-> this (.-coords)))

(defn timestamp
  "Property.

  [Read Only]

  The Position.timestamp read-only property, a `web.dom.DOMTimeStamp`
  represents the date and the time of the creation of the `web.geolocation.Position`
  it belongs to. The precision is to the millisecond.

  `var timestamp = position.timestamp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/timestamp`"
  [this]
  (-> this (.-timestamp)))

