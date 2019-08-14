(ns bluetooth.BluetoothRemoteGATTService
  "The BluetoothRemoteGATTService interface of the Web Bluetooth
  represents a service provided by a GATT server, including a device,
  list of referenced services, and a list of the characteristics
  this service."
  (:refer-clojure :exclude [uuid]))

(defn get-characteristic
  "Method.

  The BluetoothGATTService.getCharacteristic() method returns a
  to an instance of `bluetooth.BluetoothGATTCharacteristic` for
  given universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getCharacteristic(characteristic).then(function(BluetoothGATTCharacteristic) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristic`"
  [this characteristic]
  (-> this (.getCharacteristic characteristic)))

(defn get-characteristics
  "Method.

  The BluetoothGATTService.getCharacteristics() method returns
  `web.Promise` to a list of `bluetooth.BluetoothGATTCharacteristic`
  for a given universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getCharacteristics(characteristics).then(function(BluetoothGATTCharacteristic[]) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristics`"
  [this characteristics]
  (-> this (.getCharacteristics characteristics)))

(defn get-included-service
  "Method.

  The BluetoothGATTService.getIncludedService() method returns
  `web.Promise` to an instance of `bluetooth.BluetoothGATTService`
  a given universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedService`"
  [this service]
  (-> this (.getIncludedService service)))

(defn get-included-services
  "Method.

  The BluetoothGATTService.getIncludedServices() method returns
  `web.Promise` to an `web.Array` of `bluetooth.BluetoothGATTService`
  for an optional universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedServices`"
  [this service]
  (-> this (.getIncludedServices service)))

(defn device
  "Property.

  The BluetoothGATTService.device read-only property returns information
  a Bluetooth device through an instance of `bluetooth.BluetoothDevice`.

  `var bluetoothDeviceInstance = BluetoothGATTService.device`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/device`"
  [this]
  (-> this (.device)))

(defn set-device!
  "Property.

  The BluetoothGATTService.device read-only property returns information
  a Bluetooth device through an instance of `bluetooth.BluetoothDevice`.

  `var bluetoothDeviceInstance = BluetoothGATTService.device`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/device`"
  [this val]
  (aset this "device" val))

(defn is-primary
  "Property.

  The BluetoothGATTService.isPrimary read-only property returns
  `web.Boolean` that indicates whether this is a primary service.
  it is not a primary service, it is a secondary service.

  `var isPrimary = BluetoothGATTService.isPrimary`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/isPrimary`"
  [this]
  (-> this (.isPrimary)))

(defn set-is-primary!
  "Property.

  The BluetoothGATTService.isPrimary read-only property returns
  `web.Boolean` that indicates whether this is a primary service.
  it is not a primary service, it is a secondary service.

  `var isPrimary = BluetoothGATTService.isPrimary`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/isPrimary`"
  [this val]
  (aset this "isPrimary" val))

(defn uuid
  "Property.

  The BluetoothGATTService.uuid read-only property returns a `dom.DOMString`
  the UUID of this service.

  `var uuid = BluetoothGATTService.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid`"
  [this]
  (-> this (.uuid)))

(defn set-uuid!
  "Property.

  The BluetoothGATTService.uuid read-only property returns a `dom.DOMString`
  the UUID of this service.

  `var uuid = BluetoothGATTService.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid`"
  [this val]
  (aset this "uuid" val))

