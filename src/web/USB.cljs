(ns web.USB
  "The USB interface of the WebUSB API provides attributes and methods
  finding and connecting USB devices from a web page."
  (:refer-clojure :exclude []))

(defn get-devices
  "Method.

  The getDevices method of the `web.USB` interface returns a `web.Promise`
  resolves with an array of `web.USBDevice` objects for paired
  devices. For information on pairing devices, see `web.USB.requestDevice()`.

  `var promise[] = USB.getDevices();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/getDevices`"
  [this ]
  (-> this (.getDevices)))

(defn onconnect
  "Method.

  The onconnect property of the `web.USB` interface is an event
  called whenever a paired device is connected.

  `USB.onconnect = connectFunction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/onconnect`"
  [this ]
  (-> this (.onconnect)))

(defn ondisconnect
  "Method.

  The ondisconnect property of the `web.USB` is an event handler
  whenever a paired device is disconnected.

  `USB.ondisconnect = disconnectFunction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/ondisconnect`"
  [this ]
  (-> this (.ondisconnect)))

(defn request-device
  "Method.

  The requestDevice() method of the `web.USB` interface returns
  `web.Promise` that resolves with an instance of `web.USBDevice`
  the specified device is found. Calling this function triggers
  user agent's pairing flow.

  `var promise = USB.requestDevice([filters])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/requestDevice`"
  [this & args]
  (apply (-> this .-requestDevice) (concat [this] args)))

