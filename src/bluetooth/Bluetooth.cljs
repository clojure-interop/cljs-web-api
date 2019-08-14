(ns bluetooth.Bluetooth
  "The Bluetooth interface of the Web Bluetooth API returns a `web.Promise`
  a `bluetooth.BluetoothDevice` object with the specified options."
  (:refer-clojure :exclude []))

(defn request-device
  "Method.

  The Bluetooth.requestDevice() method of the `bluetooth.Bluetooth`
  returns a `web.Promise` to a `bluetooth.BluetoothDevice` object
  the specified options. If there is no chooser UI, this method
  the first device matching the criteria.

  `Bluetooth.requestDevice([options])
  .then(function(bluetoothDevice) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice`"
  [this & args]
  (apply (-> this .-requestDevice) (concat [this] args)))

