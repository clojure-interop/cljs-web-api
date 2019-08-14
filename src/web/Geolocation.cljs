(ns web.Geolocation
  "The Geolocation interface represents an object able to programmatically
  the position of the device. It gives Web content access to the
  of the device. This allows a Web site or app to offer customized
  based on the user's location."
  (:refer-clojure :exclude []))

(defn clear-watch
  "Method.

  The Geolocation.clearWatch() method is used to unregister location/error
  handlers previously installed using `web.Geolocation.watchPosition()`.

  `navigator.geolocation.clearWatch(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch`"
  [this id]
  (-> this (.clearWatch id)))

(defn get-current-position
  "Method.

  The Geolocation.getCurrentPosition() method is used to get the
  position of the device.

  `navigator.geolocation.getCurrentPosition(success[, error[, [options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition`"
  [this & args]
  (apply (-> this .-getCurrentPosition) (concat [this] args)))

(defn watch-position
  "Method.

  The `web.Geolocation` method watchPosition() method is used to
  a handler function that will be called automatically each time
  position of the device changes.

  `navigator.geolocation.watchPosition(success[, error[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition`"
  [this & args]
  (apply (-> this .-watchPosition) (concat [this] args)))

