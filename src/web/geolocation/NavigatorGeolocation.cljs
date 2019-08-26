(ns web.geolocation.NavigatorGeolocation
  "NavigatorGeolocation contains a creation method allowing objects
  it to obtain a `web.geolocation.Geolocation` instance."
  (:refer-clojure :exclude []))

(defn geolocation
  "Property.

  Returns a Geolocation object allowing accessing the location
  the device."
  [this]
  (-> this (.geolocation)))

(defn set-geolocation!
  "Property.

  Returns a Geolocation object allowing accessing the location
  the device."
  [this val]
  (aset this "geolocation" val))

