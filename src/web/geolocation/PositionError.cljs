(ns web.geolocation.PositionError
  "The PositionError interface represents the reason of an error
  when using the geolocating device."
  (:refer-clojure :exclude []))

(defn code
  "Property.

  The PositionError.code read-only property is an unsigned short
  the error code. The following values are possible:

  `typeErr = poserr.code`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionError/code`"
  [this]
  (-> this (.code)))

(defn set-code!
  "Property.

  The PositionError.code read-only property is an unsigned short
  the error code. The following values are possible:

  `typeErr = poserr.code`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionError/code`"
  [this val]
  (aset this "code" val))

(defn message
  "Property.

  The PositionError.message read-only property returns a human-readable
  describing the details of the error.

  `msg = positionError.message`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionError/message`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The PositionError.message read-only property returns a human-readable
  describing the details of the error.

  `msg = positionError.message`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionError/message`"
  [this val]
  (aset this "message" val))

