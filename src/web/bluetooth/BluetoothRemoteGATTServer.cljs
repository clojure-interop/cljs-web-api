(ns web.bluetooth.BluetoothRemoteGATTServer
  "The BluetoothRemoteGATTServer interface of the Web Bluetooth
  represents a GATT Server on a remote device."
  (:refer-clojure :exclude []))

(defn connect
  "Method.

  The BluetoothRemoteGATTServer.connect() method causes the script
  environment to connect to this.device.

  `BluetoothRemoteGATTServer.connect()
  .then(function(bluetoothRemoteGATTServer) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/connect`"
  [this & args]
  (apply (-> this .-connect) (concat [this] args)))

(defn disconnect
  "Method.

  The BluetoothRemoteGATTServer.disconnect() method causes the
  execution environment to disconnect from this.device.

  `BluetoothRemoteGATTServer.disconnect()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn get-primary-service
  "Method.

  The BluetoothRemoteGATTServer.getPrimaryService() method returns
  promise to the primary `BluetoothGATTService` offered by the
  device for a specified `BluetoothServiceUUID`.

  `BluetoothRemoteGATTServer.getPrimaryService(bluetoothServiceUUID).then(function(bluetoothGATTService) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/getPrimaryService`"
  [this bluetooth-service-uuid]
  (-> this (.getPrimaryService bluetooth-service-uuid)))

(defn get-primary-services
  "Method.

  The BluetoothRemoteGATTServer.getPrimaryServices() method returns
  promise to a list of primary `BluetoothGATTService` objects offered
  the bluetooth device for a specified BluetoothServiceUUID.

  `BluetoothRemoteGATTServer.getPrimaryServices(bluetoothServiceUUID).then(function(bluetoothGATTServices) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/getPrimaryServices`"
  [this bluetooth-service-uuid]
  (-> this (.getPrimaryServices bluetooth-service-uuid)))

(defn connected
  "Property.

  The BluetoothRemoteGATTServer.connected read-only property returns
  boolean value that returns true while this script execution environment
  connected to this.device. It can be false while the user agent
  physically connected.

  `var connected = BluetoothRemoteGATTServer.connected`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/connected`"
  [this]
  (-> this (.-connected)))

(defn set-connected!
  "Property.

  The BluetoothRemoteGATTServer.connected read-only property returns
  boolean value that returns true while this script execution environment
  connected to this.device. It can be false while the user agent
  physically connected.

  `var connected = BluetoothRemoteGATTServer.connected`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/connected`"
  [this val]
  (aset this "connected" val))

(defn device
  "Property.

  The BluetoothRemoteGATTServer.device read-only property returns
  reference to the `web.bluetooth.BluetoothDevice` running the

  `var device = BluetoothRemoteGATTServer.device`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/device`"
  [this]
  (-> this (.-device)))

(defn set-device!
  "Property.

  The BluetoothRemoteGATTServer.device read-only property returns
  reference to the `web.bluetooth.BluetoothDevice` running the

  `var device = BluetoothRemoteGATTServer.device`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/device`"
  [this val]
  (aset this "device" val))

