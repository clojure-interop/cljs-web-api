(ns web.bluetooth.BluetoothRemoteGATTService
  "The BluetoothRemoteGATTService interface of the Web Bluetooth
  represents a service provided by a GATT server, including a device,
  list of referenced services, and a list of the characteristics
  this service."
  (:refer-clojure :exclude [uuid]))

(defn get-characteristic
  "Method.

  The BluetoothGATTService.getCharacteristic() method returns a
  to an instance of `BluetoothGATTCharacteristic` for a given universally
  identifier (UUID).

  `bluetoothGATTServiceInstance.getCharacteristic(characteristic).then(function(BluetoothGATTCharacteristic) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristic`"
  [this characteristic]
  (-> this (.getCharacteristic characteristic)))

(defn device
  "Property.

  The BluetoothGATTService.device read-only property returns information
  a Bluetooth device through an instance of `web.bluetooth.BluetoothDevice`.

  `var bluetoothDeviceInstance = BluetoothGATTService.device`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/device`"
  [this]
  (-> this (.device)))

(defn set-device!
  "Property.

  The BluetoothGATTService.device read-only property returns information
  a Bluetooth device through an instance of `web.bluetooth.BluetoothDevice`.

  `var bluetoothDeviceInstance = BluetoothGATTService.device`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/device`"
  [this val]
  (aset this "device" val))

(defn get-characteristics
  "Property.

  The BluetoothGATTService.getCharacteristics() method returns
  `js.Promise` to a list of `BluetoothGATTCharacteristic` instances
  a given universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getCharacteristics(characteristics).then(function(BluetoothGATTCharacteristic[]) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristics`"
  [this]
  (-> this (.getCharacteristics)))

(defn set-get-characteristics!
  "Property.

  The BluetoothGATTService.getCharacteristics() method returns
  `js.Promise` to a list of `BluetoothGATTCharacteristic` instances
  a given universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getCharacteristics(characteristics).then(function(BluetoothGATTCharacteristic[]) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristics`"
  [this val]
  (aset this "getCharacteristics" val))

(defn get-included-service
  "Property.

  The BluetoothGATTService.getIncludedService() method returns
  `js.Promise` to an instance of `BluetoothGATTService` for a given
  unique identifier (UUID).

  `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedService`"
  [this]
  (-> this (.getIncludedService)))

(defn set-get-included-service!
  "Property.

  The BluetoothGATTService.getIncludedService() method returns
  `js.Promise` to an instance of `BluetoothGATTService` for a given
  unique identifier (UUID).

  `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedService`"
  [this val]
  (aset this "getIncludedService" val))

(defn get-included-services
  "Property.

  The BluetoothGATTService.getIncludedServices() method returns
  `js.Promise` to an `js.Array` of `BluetoothGATTService` instances
  an optional universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedServices`"
  [this]
  (-> this (.getIncludedServices)))

(defn set-get-included-services!
  "Property.

  The BluetoothGATTService.getIncludedServices() method returns
  `js.Promise` to an `js.Array` of `BluetoothGATTService` instances
  an optional universally unique identifier (UUID).

  `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedServices`"
  [this val]
  (aset this "getIncludedServices" val))

(defn is-primary
  "Property.

  The BluetoothGATTService.isPrimary read-only property returns
  `js.Boolean` that indicates whether this is a primary service.
  it is not a primary service, it is a secondary service.

  `var isPrimary = BluetoothGATTService.isPrimary`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/isPrimary`"
  [this]
  (-> this (.isPrimary)))

(defn set-is-primary!
  "Property.

  The BluetoothGATTService.isPrimary read-only property returns
  `js.Boolean` that indicates whether this is a primary service.
  it is not a primary service, it is a secondary service.

  `var isPrimary = BluetoothGATTService.isPrimary`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/isPrimary`"
  [this val]
  (aset this "isPrimary" val))

(defn uuid
  "Property.

  The BluetoothGATTService.uuid read-only property returns a `web.dom.DOMString`
  the UUID of this service.

  `var uuid = BluetoothGATTService.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid`"
  [this]
  (-> this (.uuid)))

(defn set-uuid!
  "Property.

  The BluetoothGATTService.uuid read-only property returns a `web.dom.DOMString`
  the UUID of this service.

  `var uuid = BluetoothGATTService.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid`"
  [this val]
  (aset this "uuid" val))

