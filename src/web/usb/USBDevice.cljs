(ns web.usb.USBDevice
  "The USBDevice interface of the the WebUSB API provides access
  metadata about a paired USB device and methods for controlling"
  (:refer-clojure :exclude []))

(defn claim-interface
  "Method.

  The claimInterface() method of the `web.usb.USBDevice` interface
  a `promise` that resolves when the requested interface is claimed
  exclusive access.

  `var promise = USBDevice.claimInterface(interfaceNumber)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/claimInterface`"
  [this interface-number]
  (-> this (.claimInterface interface-number)))

(defn clear-halt
  "Method.

  The clearHalt() method of the `web.usb.USBDevice` interface returns
  `promise` that resolves when a halt condition is cleared. A halt
  is when a data tranfer to or from the device has a status of
  which requires the web page (the host system, in USB terminology)
  clear that condition. See the for details.

  `var promise = USBDevice.clearHalt(direction, endpointNumber)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/clearHalt`"
  [this direction endpoint-number]
  (-> this (.clearHalt direction endpoint-number)))

(defn control-transfer-in
  "Method.

  The controlTransferIn() method of the `web.usb.USBDevice` interface
  a `promise` that resolves with a `USBInTransferResult` when a
  or status operation has been transmitted to the USB device.

  `var promise = USBDevice.controlTransferIn(setup, length)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/controlTransferIn`"
  [this setup length]
  (-> this (.controlTransferIn setup length)))

(defn control-transfer-out
  "Method.

  The controlTransferOut() method of the `web.usb.USBDevice` interface
  a `promise` that resolves with a `USBOutTransferResult` when
  command or status operation has been transmitted from the USB

  `var promise = USBDevice.controlTransferOut(setup, data)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/controlTransferOut`"
  [this setup data]
  (-> this (.controlTransferOut setup data)))

(defn close
  "Method.

  The close() method of the `web.usb.USBDevice` interface returns
  `promise` that resolves when all open interfaces are released
  the device session has ended.

  `var promise = USBDevice.close()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/close`"
  [this ]
  (-> this (.close)))

(defn isochronous-transfer-in
  "Method.

  The isochronousTransferIn() method of the `web.usb.USBDevice`
  returns a `promise` that resolves with a `USBIsochronousInTransferResult`
  time sensitive information has been transmitted to the USB device.

  `var promise = USBDevice.isochronousTransferIn(endpointNumber, packetLengths)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/isochronousTransferIn`"
  [this endpoint-number packet-lengths]
  (-> this (.isochronousTransferIn endpoint-number packet-lengths)))

(defn isochronous-transfer-out
  "Method.

  The isochronousTransferOut() method of the `web.usb.USBDevice`
  returns a `promise` that resolves with a `USBIsochronousOutTransferResult`
  time sensitive information has been transmitted from the USB

  `var promise = USBDevice.isochronousTransferOut(endpointNumber, data, packetLengths)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/isochronousTransferOut`"
  [this endpoint-number data packet-lengths]
  (-> this (.isochronousTransferOut endpoint-number data packet-lengths)))

(defn open
  "Method.

  The open() method of the `web.usb.USBDevice` interface returns
  `promise` that resolves when a device session has started.

  `var promise = USBDevice.open()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/open`"
  [this ]
  (-> this (.open)))

(defn release-interface
  "Method.

  The releaseInterface() method of the `web.usb.USBDevice` interface
  a `promise` that resolves when a cliamed interface is released
  exclusive access.

  `var promise = USBDevice.releaseInterface(interfaceNumber)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/releaseInterface`"
  [this interface-number]
  (-> this (.releaseInterface interface-number)))

(defn reset
  "Method.

  The reset() method of the `web.usb.USBDevice` interface eturns
  `promise` that resolves when the device is reset and all app
  canceled and their promises rejected.

  `var promise = USBDevice.reset()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/reset`"
  [this ]
  (-> this (.reset)))

(defn select-alternate-interface
  "Method.

  The selectAlternateInterface() method of the `web.usb.USBDevice`
  returns a `promise` that resolves when the specified alternative
  is selected.

  `var promise = USBDevice.selectAlternateInterface(inerfaceNumber, alternateSetting)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/selectAlternateInterface`"
  [this inerface-number alternate-setting]
  (-> this (.selectAlternateInterface inerface-number alternate-setting)))

(defn select-configuration
  "Method.

  The selectConfiguration() method of the `web.usb.USBDevice` interface
  a `promise` that resolves when the specified configuration is

  `var promise = USBDevice.selectConfiguration(configurationValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/selectConfiguration`"
  [this configuration-value]
  (-> this (.selectConfiguration configuration-value)))

(defn transfer-in
  "Method.

  The transferIn() method of the `web.usb.USBDevice` interface
  a `promise` that resolves with a `USBTransferInResult` when bulk
  interrupt data is transmitted to the USB device.

  `var promise = USBDevice.transferIn(endpointNumber, length)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/transferIn`"
  [this endpoint-number length]
  (-> this (.transferIn endpoint-number length)))

(defn transfer-out
  "Method.

  The transferOut() method of the `web.usb.USBDevice` interface
  a `promise` that resolves with a `USBTransferOutResult` when
  or interrupt data is transmitted from the USB device.

  `var promise = USBDevice.transferOut(endpointNumber, data)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/transferOut`"
  [this endpoint-number data]
  (-> this (.transferOut endpoint-number data)))

(defn configuration
  "Property.

  The configuration read only property of the `web.usb.USBDevice`
  returns a `USBConfiguration` object for the currently selected
  for a paired USB device.

  `var USBConfiguration = USBDevice.configuration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configuration`"
  [this]
  (-> this (.-configuration)))

(defn set-configuration!
  "Property.

  The configuration read only property of the `web.usb.USBDevice`
  returns a `USBConfiguration` object for the currently selected
  for a paired USB device.

  `var USBConfiguration = USBDevice.configuration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configuration`"
  [this val]
  (aset this "configuration" val))

(defn configurations
  "Property.

  The configurations read only property of the `web.usb.USBDevice`
  an `array` of device-specific interfaces for controlling a paired
  device.

  `var USBConfiguration[] = USBDevice.configurations`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configurations`"
  [this]
  (-> this (.-configurations)))

(defn set-configurations!
  "Property.

  The configurations read only property of the `web.usb.USBDevice`
  an `array` of device-specific interfaces for controlling a paired
  device.

  `var USBConfiguration[] = USBDevice.configurations`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configurations`"
  [this val]
  (aset this "configurations" val))

(defn device-class
  "Property.

  The deviceClass read only property of the `web.usb.USBDevice`
  one of three properties that identify USB devices for the purpose
  loading a USB driver that will work with that device. The other
  properties are USBDevice.deviceSubclass and USBDevice.deviceprotocol.

  `var number = USBDevice.deviceClass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceClass`"
  [this]
  (-> this (.-deviceClass)))

(defn set-device-class!
  "Property.

  The deviceClass read only property of the `web.usb.USBDevice`
  one of three properties that identify USB devices for the purpose
  loading a USB driver that will work with that device. The other
  properties are USBDevice.deviceSubclass and USBDevice.deviceprotocol.

  `var number = USBDevice.deviceClass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceClass`"
  [this val]
  (aset this "deviceClass" val))

(defn device-protocol
  "Property.

  The deviceProtocol read only property of the `web.usb.USBDevice`
  one of three properties that identify USB devices for the purpose
  loading a USB driver that will work with that device. The other
  properties are USBDevice.deviceClass and USBDevice.deviceSubclass.

  `var number = USBDevice.deviceProtocol`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceProtocol`"
  [this]
  (-> this (.-deviceProtocol)))

(defn set-device-protocol!
  "Property.

  The deviceProtocol read only property of the `web.usb.USBDevice`
  one of three properties that identify USB devices for the purpose
  loading a USB driver that will work with that device. The other
  properties are USBDevice.deviceClass and USBDevice.deviceSubclass.

  `var number = USBDevice.deviceProtocol`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceProtocol`"
  [this val]
  (aset this "deviceProtocol" val))

(defn device-subclass
  "Property.

  The deviceSubclass read only property of the `web.usb.USBDevice`
  one of three properties that identify USB devices for the purpose
  loading a USB driver that will work with that device. The other
  properties are USBDevice.deviceClass and USBDevice.deviceProtocol.

  `var serialNumber = USBDevice.deviceSubclass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceSubclass`"
  [this]
  (-> this (.-deviceSubclass)))

(defn set-device-subclass!
  "Property.

  The deviceSubclass read only property of the `web.usb.USBDevice`
  one of three properties that identify USB devices for the purpose
  loading a USB driver that will work with that device. The other
  properties are USBDevice.deviceClass and USBDevice.deviceProtocol.

  `var serialNumber = USBDevice.deviceSubclass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceSubclass`"
  [this val]
  (aset this "deviceSubclass" val))

(defn device-version-major
  "Property.

  The deviceVersionMajor read only property of the `web.usb.USBDevice`
  he major version number of the device in a semantic versioning

  `var serialNumber = USBDevice.deviceVersionMajor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMajor`"
  [this]
  (-> this (.-deviceVersionMajor)))

(defn set-device-version-major!
  "Property.

  The deviceVersionMajor read only property of the `web.usb.USBDevice`
  he major version number of the device in a semantic versioning

  `var serialNumber = USBDevice.deviceVersionMajor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMajor`"
  [this val]
  (aset this "deviceVersionMajor" val))

(defn device-version-minor
  "Property.

  The deviceVersionMinor read only property of the `web.usb.USBDevice`
  the minor version number of the device in a semantic versioning

  `var serialNumber = USBDevice.deviceVersionMinor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMinor`"
  [this]
  (-> this (.-deviceVersionMinor)))

(defn set-device-version-minor!
  "Property.

  The deviceVersionMinor read only property of the `web.usb.USBDevice`
  the minor version number of the device in a semantic versioning

  `var serialNumber = USBDevice.deviceVersionMinor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMinor`"
  [this val]
  (aset this "deviceVersionMinor" val))

(defn device-version-subminor
  "Property.

  The deviceVersionSubminor read only property of the `web.usb.USBDevice`
  the patch version number of the device in a semantic versioning

  `var serialNumber = USBDevice.deviceVersionSubminor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionSubminor`"
  [this]
  (-> this (.-deviceVersionSubminor)))

(defn set-device-version-subminor!
  "Property.

  The deviceVersionSubminor read only property of the `web.usb.USBDevice`
  the patch version number of the device in a semantic versioning

  `var serialNumber = USBDevice.deviceVersionSubminor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionSubminor`"
  [this val]
  (aset this "deviceVersionSubminor" val))

(defn manufacturer-name
  "Property.

  The manufacturerName read only property of the `web.usb.USBDevice`
  the of the organization that manufactured the USB device.

  `var serialNumber = USBDevice.manufacturerName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/manufacturerName`"
  [this]
  (-> this (.-manufacturerName)))

(defn set-manufacturer-name!
  "Property.

  The manufacturerName read only property of the `web.usb.USBDevice`
  the of the organization that manufactured the USB device.

  `var serialNumber = USBDevice.manufacturerName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/manufacturerName`"
  [this val]
  (aset this "manufacturerName" val))

(defn opened
  "Property.

  The opened read only property of the `web.usb.USBDevice` interface
  whether a session has been started with a paired USB device.
  device must be opened before it can conrolled by a web page.

  `var serialNumber = USBDevice.opened`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/opened`"
  [this]
  (-> this (.-opened)))

(defn set-opened!
  "Property.

  The opened read only property of the `web.usb.USBDevice` interface
  whether a session has been started with a paired USB device.
  device must be opened before it can conrolled by a web page.

  `var serialNumber = USBDevice.opened`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/opened`"
  [this val]
  (aset this "opened" val))

(defn product-id
  "Property.

  The productID read only property of the `web.usb.USBDevice` interface
  manufacturer-defined code that identifies a USB device.

  `var serialNumber = USBDevice.productID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productID`"
  [this]
  (-> this (.-productID)))

(defn set-product-id!
  "Property.

  The productID read only property of the `web.usb.USBDevice` interface
  manufacturer-defined code that identifies a USB device.

  `var serialNumber = USBDevice.productID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productID`"
  [this val]
  (aset this "productID" val))

(defn product-name
  "Property.

  The productName read only property of the `web.usb.USBDevice`
  the manufacturer-defined name that identifies a USB device.

  `var serialNumber = USBDevice.productName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productName`"
  [this]
  (-> this (.-productName)))

(defn set-product-name!
  "Property.

  The productName read only property of the `web.usb.USBDevice`
  the manufacturer-defined name that identifies a USB device.

  `var serialNumber = USBDevice.productName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productName`"
  [this val]
  (aset this "productName" val))

(defn serial-number
  "Property.

  The serialNumber read only property of the `web.usb.USBDevice`
  is the manufacturer-defined serial number for the specific USB

  `var serialNumber = USBDevice.serialNumber`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/serialNumber`"
  [this]
  (-> this (.-serialNumber)))

(defn set-serial-number!
  "Property.

  The serialNumber read only property of the `web.usb.USBDevice`
  is the manufacturer-defined serial number for the specific USB

  `var serialNumber = USBDevice.serialNumber`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/serialNumber`"
  [this val]
  (aset this "serialNumber" val))

(defn usb-version-major
  "Property.

  The usbVersionMajor read only property of the `web.usb.USBDevice`
  is one of three properties that declare the USB protocol version
  by the device. The other two properties are USBDevice.usbVersionMinor
  USBDevice.usbVersionSubminor.

  `var serialNumber = USBDevice.usbVersionMajor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMajor`"
  [this]
  (-> this (.-usbVersionMajor)))

(defn set-usb-version-major!
  "Property.

  The usbVersionMajor read only property of the `web.usb.USBDevice`
  is one of three properties that declare the USB protocol version
  by the device. The other two properties are USBDevice.usbVersionMinor
  USBDevice.usbVersionSubminor.

  `var serialNumber = USBDevice.usbVersionMajor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMajor`"
  [this val]
  (aset this "usbVersionMajor" val))

(defn usb-version-minor
  "Property.

  The usbVersionMinor read only property of the `web.usb.USBDevice`
  is one of three properties that declare the USB protocol version
  by the device. The other two properties are USBDevice.usbVersionMajor
  USBDevice.usbVersionSubminor.

  `var serialNumber = USBDevice.usbVersionMinor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMinor`"
  [this]
  (-> this (.-usbVersionMinor)))

(defn set-usb-version-minor!
  "Property.

  The usbVersionMinor read only property of the `web.usb.USBDevice`
  is one of three properties that declare the USB protocol version
  by the device. The other two properties are USBDevice.usbVersionMajor
  USBDevice.usbVersionSubminor.

  `var serialNumber = USBDevice.usbVersionMinor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMinor`"
  [this val]
  (aset this "usbVersionMinor" val))

(defn usb-version-subminor
  "Property.

  The usbVersionSubminor read only property of the `web.usb.USBDevice`
  is one of three properties that declare the USB protocol version
  by the device. The other two properties are USBDevice.usbVersionMajor
  USBDevice.usbVersionMinor.

  `var serialNumber = USBDevice.usbVersionSubminor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionSubminor`"
  [this]
  (-> this (.-usbVersionSubminor)))

(defn set-usb-version-subminor!
  "Property.

  The usbVersionSubminor read only property of the `web.usb.USBDevice`
  is one of three properties that declare the USB protocol version
  by the device. The other two properties are USBDevice.usbVersionMajor
  USBDevice.usbVersionMinor.

  `var serialNumber = USBDevice.usbVersionSubminor`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionSubminor`"
  [this val]
  (aset this "usbVersionSubminor" val))

(defn vendor-id
  "Property.

  The vendorID read only property of the `web.usb.USBDevice` interface
  the official usg.org-assigned vendor ID.

  `var serialNumber = USBDevice.vendorID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/vendorID`"
  [this]
  (-> this (.-vendorID)))

(defn set-vendor-id!
  "Property.

  The vendorID read only property of the `web.usb.USBDevice` interface
  the official usg.org-assigned vendor ID.

  `var serialNumber = USBDevice.vendorID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/vendorID`"
  [this val]
  (aset this "vendorID" val))

