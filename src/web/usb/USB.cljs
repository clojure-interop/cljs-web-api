(ns web.usb.USB
  "The USB interface of the WebUSB API provides attributes and methods
  finding and connecting USB devices from a web page."
  (:refer-clojure :exclude []))

(defn get-devices
  "Method.

  The getDevices method of the `web.usb.USB` interface returns
  `js.Promise` that resolves with an array of `web.usb.USBDevice`
  for paired attached devices. For information on pairing devices,
  `USB.requestDevice()`.

  `var promise[] = USB.getDevices();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/getDevices`"
  [this ]
  (-> this (.getDevices)))

(defn request-device
  "Method.

  The requestDevice() method of the `web.usb.USB` interface returns
  `js.Promise` that resolves with an instance of `web.usb.USBDevice`
  the specified device is found. Calling this function triggers
  user agent's pairing flow.

  `var promise = USB.requestDevice([filters])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/requestDevice`"
  [this & args]
  (-> this .-requestDevice (.apply this (clj->js args))))

(defn onconnect
  "Method.

  The onconnect property of the `web.usb.USB` interface is an event
  called whenever a paired device is connected.

  `USB.onconnect = connectFunction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/onconnect`"
  [this ]
  (-> this (.onconnect)))

(defn ondisconnect
  "Method.

  The ondisconnect property of the `web.usb.USB` is an event handler
  whenever a paired device is disconnected.

  `USB.ondisconnect = disconnectFunction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/ondisconnect`"
  [this ]
  (-> this (.ondisconnect)))

