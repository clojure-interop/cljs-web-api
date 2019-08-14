(ns web.Position
  "The Position interface represents the position of the concerned
  at a given time. The position, represented by a `web.Coordinates`
  comprehends the 2D position of the device, on a spheroid representing
  Earth, but also its altitude and its speed."
  (:refer-clojure :exclude []))

(defn coords
  "Property.

  The Position.coords read-only property, a `web.Coordinates` object,
  a geographic attitude: it contains the location, that is longitude
  latitude on the Earth, the altitude, and the speed of the object
  regrouped inside the returned value. It also contains accuracy
  about these values.

  `coord = position.coords`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/coords`"
  [this]
  (-> this (.coords)))

(defn set-coords!
  "Property.

  The Position.coords read-only property, a `web.Coordinates` object,
  a geographic attitude: it contains the location, that is longitude
  latitude on the Earth, the altitude, and the speed of the object
  regrouped inside the returned value. It also contains accuracy
  about these values.

  `coord = position.coords`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/coords`"
  [this val]
  (aset this "coords" val))

(defn timestamp
  "Property.

  The Position.timestamp read-only property, a `dom.DOMTimeStamp`
  represents the date and the time of the creation of the `web.Position`
  it belongs to. The precision is to the millisecond.

  `var timestamp = position.timestamp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/timestamp`"
  [this]
  (-> this (.timestamp)))

(defn set-timestamp!
  "Property.

  The Position.timestamp read-only property, a `dom.DOMTimeStamp`
  represents the date and the time of the creation of the `web.Position`
  it belongs to. The precision is to the millisecond.

  `var timestamp = position.timestamp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Position/timestamp`"
  [this val]
  (aset this "timestamp" val))

