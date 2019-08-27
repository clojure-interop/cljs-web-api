(ns web.bluetooth.Bluetooth
  "The Bluetooth interface of the Web Bluetooth API returns a `js.Promise`
  a `web.bluetooth.BluetoothDevice` object with the specified options."
  (:refer-clojure :exclude []))

(defn get-availability
  "Method.

  Returns a Promise that resolved to a Boolean indicating whether
  user-agent has the ability to support Bluetooth. Some user-agents
  the user configure an option that affects what is returned by
  value. If this option is set, that is the value returned by this"
  [this & args]
  (-> this .-getAvailability (.apply this (clj->js args))))

(defn request-device
  "Method.

  The Bluetooth.requestDevice() method of the `web.bluetooth.Bluetooth`
  returns a `js.Promise` to a `web.bluetooth.BluetoothDevice` object
  the specified options. If there is no chooser UI, this method
  the first device matching the criteria.

  `Bluetooth.requestDevice([options])
  .then(function(bluetoothDevice) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice`"
  [this & args]
  (-> this .-requestDevice (.apply this (clj->js args))))

(defn referring-device
  "Property.

  Returns a reference to the device, if any, from which the user
  the current page. For example, an Eddystone beacon might advertise
  URL, which the user agent allows the user to open. A BluetoothDevice
  the beacon would be available through navigator.bluetooth.referringDevice."
  [this]
  (-> this (.-referringDevice)))

(defn set-referring-device!
  "Property.

  Returns a reference to the device, if any, from which the user
  the current page. For example, an Eddystone beacon might advertise
  URL, which the user agent allows the user to open. A BluetoothDevice
  the beacon would be available through navigator.bluetooth.referringDevice."
  [this val]
  (aset this "referringDevice" val))

(defn onavailabilitychanged
  "Property.

  An event handler that runs when an event of type availabilitychanged
  fired."
  [this]
  (-> this (.-onavailabilitychanged)))

(defn set-onavailabilitychanged!
  "Property.

  An event handler that runs when an event of type availabilitychanged
  fired."
  [this val]
  (aset this "onavailabilitychanged" val))

