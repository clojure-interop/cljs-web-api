// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.USBDevice');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The claimInterface() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves when the requested interface is
 *   for exclusive access.
 * 
 *   `var promise = USBDevice.claimInterface(interfaceNumber)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/claimInterface`
 */
web.USBDevice.claim_interface = (function web$USBDevice$claim_interface(this$,interface_number){
return this$.claimInterface(interface_number);
});
/**
 * Method.
 * 
 *   The clearHalt() method of the `web.USBDevice` interface returns
 *   `web.promise` that resolves when a halt condition is cleared.
 *   halt condition is when a data tranfer to or from the device has
 *   status of 'stall', which requires the web page (the host system,
 *   USB terminology) to clear that condition. See the for details.
 * 
 *   `var promise = USBDevice.clearHalt(direction, endpointNumber)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/clearHalt`
 */
web.USBDevice.clear_halt = (function web$USBDevice$clear_halt(this$,direction,endpoint_number){
return this$.clearHalt(direction,endpoint_number);
});
/**
 * Method.
 * 
 *   The close() method of the `web.USBDevice` interface returns a
 *   that resolves when all open interfaces are released and the device
 *   has ended.
 * 
 *   `var promise = USBDevice.close()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/close`
 */
web.USBDevice.close = (function web$USBDevice$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The controlTransferIn() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves with a `web.USBInTransferResult`
 *   a command or status operation has been transmitted to the USB
 * 
 *   `var promise = USBDevice.controlTransferIn(setup, length)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/controlTransferIn`
 */
web.USBDevice.control_transfer_in = (function web$USBDevice$control_transfer_in(this$,setup,length){
return this$.controlTransferIn(setup,length);
});
/**
 * Method.
 * 
 *   The controlTransferOut() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves with a `web.USBOutTransferResult`
 *   a command or status operation has been transmitted from the USB
 * 
 *   `var promise = USBDevice.controlTransferOut(setup, data)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/controlTransferOut`
 */
web.USBDevice.control_transfer_out = (function web$USBDevice$control_transfer_out(this$,setup,data){
return this$.controlTransferOut(setup,data);
});
/**
 * Method.
 * 
 *   The isochronousTransferIn() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves with a `web.USBIsochronousInTransferResult`
 *   time sensitive information has been transmitted to the USB device.
 * 
 *   `var promise = USBDevice.isochronousTransferIn(endpointNumber, packetLengths)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/isochronousTransferIn`
 */
web.USBDevice.isochronous_transfer_in = (function web$USBDevice$isochronous_transfer_in(this$,endpoint_number,packet_lengths){
return this$.isochronousTransferIn(endpoint_number,packet_lengths);
});
/**
 * Method.
 * 
 *   The isochronousTransferOut() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves with a `web.USBIsochronousOutTransferResult`
 *   time sensitive information has been transmitted from the USB
 * 
 *   `var promise = USBDevice.isochronousTransferOut(endpointNumber, data, packetLengths)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/isochronousTransferOut`
 */
web.USBDevice.isochronous_transfer_out = (function web$USBDevice$isochronous_transfer_out(this$,endpoint_number,data,packet_lengths){
return this$.isochronousTransferOut(endpoint_number,data,packet_lengths);
});
/**
 * Method.
 * 
 *   The open() method of the `web.USBDevice` interface returns a
 *   that resolves when a device session has started.
 * 
 *   `var promise = USBDevice.open()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/open`
 */
web.USBDevice.open = (function web$USBDevice$open(this$){
return this$.open();
});
/**
 * Method.
 * 
 *   The releaseInterface() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves when a cliamed interface is released
 *   exclusive access.
 * 
 *   `var promise = USBDevice.releaseInterface(interfaceNumber)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/releaseInterface`
 */
web.USBDevice.release_interface = (function web$USBDevice$release_interface(this$,interface_number){
return this$.releaseInterface(interface_number);
});
/**
 * Method.
 * 
 *   The reset() method of the `web.USBDevice` interface eturns a
 *   that resolves when the device is reset and all app operations
 *   and their promises rejected.
 * 
 *   `var promise = USBDevice.reset()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/reset`
 */
web.USBDevice.reset = (function web$USBDevice$reset(this$){
return this$.reset();
});
/**
 * Method.
 * 
 *   The selectAlternateInterface() method of the `web.USBDevice`
 *   returns a `web.promise` that resolves when the specified alternative
 *   is selected.
 * 
 *   `var promise = USBDevice.selectAlternateInterface(inerfaceNumber, alternateSetting)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/selectAlternateInterface`
 */
web.USBDevice.select_alternate_interface = (function web$USBDevice$select_alternate_interface(this$,inerface_number,alternate_setting){
return this$.selectAlternateInterface(inerface_number,alternate_setting);
});
/**
 * Method.
 * 
 *   The selectConfiguration() method of the `web.USBDevice` interface
 *   a `web.promise` that resolves when the specified configuration
 *   selected.
 * 
 *   `var promise = USBDevice.selectConfiguration(configurationValue)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/selectConfiguration`
 */
web.USBDevice.select_configuration = (function web$USBDevice$select_configuration(this$,configuration_value){
return this$.selectConfiguration(configuration_value);
});
/**
 * Method.
 * 
 *   The transferIn() method of the `web.USBDevice` interface returns
 *   `web.promise` that resolves with a `web.USBTransferInResult`
 *   bulk or interrupt data is transmitted to the USB device.
 * 
 *   `var promise = USBDevice.transferIn(endpointNumber, length)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/transferIn`
 */
web.USBDevice.transfer_in = (function web$USBDevice$transfer_in(this$,endpoint_number,length){
return this$.transferIn(endpoint_number,length);
});
/**
 * Method.
 * 
 *   The transferOut() method of the `web.USBDevice` interface returns
 *   `web.promise` that resolves with a `web.USBTransferOutResult`
 *   bulk or interrupt data is transmitted from the USB device.
 * 
 *   `var promise = USBDevice.transferOut(endpointNumber, data)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/transferOut`
 */
web.USBDevice.transfer_out = (function web$USBDevice$transfer_out(this$,endpoint_number,data){
return this$.transferOut(endpoint_number,data);
});
/**
 * Property.
 * 
 *   The configuration read only property of the `web.USBDevice` interface
 *   a `web.USBConfiguration` object for the currently selected interface
 *   a paired USB device.
 * 
 *   `var USBConfiguration = USBDevice.configuration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configuration`
 */
web.USBDevice.configuration = (function web$USBDevice$configuration(this$){
return this$.configuration();
});
/**
 * Property.
 * 
 *   The configuration read only property of the `web.USBDevice` interface
 *   a `web.USBConfiguration` object for the currently selected interface
 *   a paired USB device.
 * 
 *   `var USBConfiguration = USBDevice.configuration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configuration`
 */
web.USBDevice.set_configuration_BANG_ = (function web$USBDevice$set_configuration_BANG_(this$,val){
return (this$["configuration"] = val);
});
/**
 * Property.
 * 
 *   The configurations read only property of the `web.USBDevice`
 *   an `web.array` of device-specific interfaces for controlling
 *   paired USB device.
 * 
 *   `var USBConfiguration[] = USBDevice.configurations`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configurations`
 */
web.USBDevice.configurations = (function web$USBDevice$configurations(this$){
return this$.configurations();
});
/**
 * Property.
 * 
 *   The configurations read only property of the `web.USBDevice`
 *   an `web.array` of device-specific interfaces for controlling
 *   paired USB device.
 * 
 *   `var USBConfiguration[] = USBDevice.configurations`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/configurations`
 */
web.USBDevice.set_configurations_BANG_ = (function web$USBDevice$set_configurations_BANG_(this$,val){
return (this$["configurations"] = val);
});
/**
 * Property.
 * 
 *   The deviceClass read only property of the `web.USBDevice` interface
 *   of three properties that identify USB devices for the purpose
 *   loading a USB driver that will work with that device. The other
 *   properties are USBDevice.deviceSubclass and USBDevice.deviceprotocol.
 * 
 *   `var number = USBDevice.deviceClass`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/USBDevice.deviceClass`
 */
web.USBDevice.device_class = (function web$USBDevice$device_class(this$){
return this$.deviceClass();
});
/**
 * Property.
 * 
 *   The deviceClass read only property of the `web.USBDevice` interface
 *   of three properties that identify USB devices for the purpose
 *   loading a USB driver that will work with that device. The other
 *   properties are USBDevice.deviceSubclass and USBDevice.deviceprotocol.
 * 
 *   `var number = USBDevice.deviceClass`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/USBDevice.deviceClass`
 */
web.USBDevice.set_device_class_BANG_ = (function web$USBDevice$set_device_class_BANG_(this$,val){
return (this$["deviceClass"] = val);
});
/**
 * Property.
 * 
 *   The deviceProtocol read only property of the `web.USBDevice`
 *   one of three properties that identify USB devices for the purpose
 *   loading a USB driver that will work with that device. The other
 *   properties are USBDevice.deviceClass and USBDevice.deviceSubclass.
 * 
 *   `var number = USBDevice.deviceProtocol`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceProtocol`
 */
web.USBDevice.device_protocol = (function web$USBDevice$device_protocol(this$){
return this$.deviceProtocol();
});
/**
 * Property.
 * 
 *   The deviceProtocol read only property of the `web.USBDevice`
 *   one of three properties that identify USB devices for the purpose
 *   loading a USB driver that will work with that device. The other
 *   properties are USBDevice.deviceClass and USBDevice.deviceSubclass.
 * 
 *   `var number = USBDevice.deviceProtocol`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceProtocol`
 */
web.USBDevice.set_device_protocol_BANG_ = (function web$USBDevice$set_device_protocol_BANG_(this$,val){
return (this$["deviceProtocol"] = val);
});
/**
 * Property.
 * 
 *   The deviceSubclass read only property of the `web.USBDevice`
 *   one of three properties that identify USB devices for the purpose
 *   loading a USB driver that will work with that device. The other
 *   properties are USBDevice.deviceClass and USBDevice.deviceProtocol.
 * 
 *   `var serialNumber = USBDevice.deviceSubclass`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceSubclass`
 */
web.USBDevice.device_subclass = (function web$USBDevice$device_subclass(this$){
return this$.deviceSubclass();
});
/**
 * Property.
 * 
 *   The deviceSubclass read only property of the `web.USBDevice`
 *   one of three properties that identify USB devices for the purpose
 *   loading a USB driver that will work with that device. The other
 *   properties are USBDevice.deviceClass and USBDevice.deviceProtocol.
 * 
 *   `var serialNumber = USBDevice.deviceSubclass`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceSubclass`
 */
web.USBDevice.set_device_subclass_BANG_ = (function web$USBDevice$set_device_subclass_BANG_(this$,val){
return (this$["deviceSubclass"] = val);
});
/**
 * Property.
 * 
 *   The deviceVersionMajor read only property of the `web.USBDevice`
 *   he major version number of the device in a semantic versioning
 * 
 *   `var serialNumber = USBDevice.deviceVersionMajor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMajor`
 */
web.USBDevice.device_version_major = (function web$USBDevice$device_version_major(this$){
return this$.deviceVersionMajor();
});
/**
 * Property.
 * 
 *   The deviceVersionMajor read only property of the `web.USBDevice`
 *   he major version number of the device in a semantic versioning
 * 
 *   `var serialNumber = USBDevice.deviceVersionMajor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMajor`
 */
web.USBDevice.set_device_version_major_BANG_ = (function web$USBDevice$set_device_version_major_BANG_(this$,val){
return (this$["deviceVersionMajor"] = val);
});
/**
 * Property.
 * 
 *   The deviceVersionMinor read only property of the `web.USBDevice`
 *   the minor version number of the device in a semantic versioning
 * 
 *   `var serialNumber = USBDevice.deviceVersionMinor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMinor`
 */
web.USBDevice.device_version_minor = (function web$USBDevice$device_version_minor(this$){
return this$.deviceVersionMinor();
});
/**
 * Property.
 * 
 *   The deviceVersionMinor read only property of the `web.USBDevice`
 *   the minor version number of the device in a semantic versioning
 * 
 *   `var serialNumber = USBDevice.deviceVersionMinor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionMinor`
 */
web.USBDevice.set_device_version_minor_BANG_ = (function web$USBDevice$set_device_version_minor_BANG_(this$,val){
return (this$["deviceVersionMinor"] = val);
});
/**
 * Property.
 * 
 *   The deviceVersionSubminor read only property of the `web.USBDevice`
 *   the patch version number of the device in a semantic versioning
 * 
 *   `var serialNumber = USBDevice.deviceVersionSubminor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionSubminor`
 */
web.USBDevice.device_version_subminor = (function web$USBDevice$device_version_subminor(this$){
return this$.deviceVersionSubminor();
});
/**
 * Property.
 * 
 *   The deviceVersionSubminor read only property of the `web.USBDevice`
 *   the patch version number of the device in a semantic versioning
 * 
 *   `var serialNumber = USBDevice.deviceVersionSubminor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/deviceVersionSubminor`
 */
web.USBDevice.set_device_version_subminor_BANG_ = (function web$USBDevice$set_device_version_subminor_BANG_(this$,val){
return (this$["deviceVersionSubminor"] = val);
});
/**
 * Property.
 * 
 *   The manufacturerName read only property of the `web.USBDevice`
 *   the of the organization that manufactured the USB device.
 * 
 *   `var serialNumber = USBDevice.manufacturerName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/manufacturerName`
 */
web.USBDevice.manufacturer_name = (function web$USBDevice$manufacturer_name(this$){
return this$.manufacturerName();
});
/**
 * Property.
 * 
 *   The manufacturerName read only property of the `web.USBDevice`
 *   the of the organization that manufactured the USB device.
 * 
 *   `var serialNumber = USBDevice.manufacturerName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/manufacturerName`
 */
web.USBDevice.set_manufacturer_name_BANG_ = (function web$USBDevice$set_manufacturer_name_BANG_(this$,val){
return (this$["manufacturerName"] = val);
});
/**
 * Property.
 * 
 *   The opened read only property of the `web.USBDevice` interface
 *   whether a session has been started with a paired USB device.
 *   device must be opened before it can conrolled by a web page.
 * 
 *   `var serialNumber = USBDevice.opened`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/opened`
 */
web.USBDevice.opened = (function web$USBDevice$opened(this$){
return this$.opened();
});
/**
 * Property.
 * 
 *   The opened read only property of the `web.USBDevice` interface
 *   whether a session has been started with a paired USB device.
 *   device must be opened before it can conrolled by a web page.
 * 
 *   `var serialNumber = USBDevice.opened`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/opened`
 */
web.USBDevice.set_opened_BANG_ = (function web$USBDevice$set_opened_BANG_(this$,val){
return (this$["opened"] = val);
});
/**
 * Property.
 * 
 *   The productID read only property of the `web.USBDevice` interface
 *   manufacturer-defined code that identifies a USB device.
 * 
 *   `var serialNumber = USBDevice.productID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productID`
 */
web.USBDevice.product_id = (function web$USBDevice$product_id(this$){
return this$.productID();
});
/**
 * Property.
 * 
 *   The productID read only property of the `web.USBDevice` interface
 *   manufacturer-defined code that identifies a USB device.
 * 
 *   `var serialNumber = USBDevice.productID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productID`
 */
web.USBDevice.set_product_id_BANG_ = (function web$USBDevice$set_product_id_BANG_(this$,val){
return (this$["productID"] = val);
});
/**
 * Property.
 * 
 *   The productName read only property of the `web.USBDevice` interface
 *   manufacturer-defined name that identifies a USB device.
 * 
 *   `var serialNumber = USBDevice.productName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productName`
 */
web.USBDevice.product_name = (function web$USBDevice$product_name(this$){
return this$.productName();
});
/**
 * Property.
 * 
 *   The productName read only property of the `web.USBDevice` interface
 *   manufacturer-defined name that identifies a USB device.
 * 
 *   `var serialNumber = USBDevice.productName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/productName`
 */
web.USBDevice.set_product_name_BANG_ = (function web$USBDevice$set_product_name_BANG_(this$,val){
return (this$["productName"] = val);
});
/**
 * Property.
 * 
 *   The serialNumber read only property of the `web.USBDevice` interface
 *   the manufacturer-defined serial number for the specific USB device.
 * 
 *   `var serialNumber = USBDevice.serialNumber`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/serialNumber`
 */
web.USBDevice.serial_number = (function web$USBDevice$serial_number(this$){
return this$.serialNumber();
});
/**
 * Property.
 * 
 *   The serialNumber read only property of the `web.USBDevice` interface
 *   the manufacturer-defined serial number for the specific USB device.
 * 
 *   `var serialNumber = USBDevice.serialNumber`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/serialNumber`
 */
web.USBDevice.set_serial_number_BANG_ = (function web$USBDevice$set_serial_number_BANG_(this$,val){
return (this$["serialNumber"] = val);
});
/**
 * Property.
 * 
 *   The usbVersionMajor read only property of the `web.USBDevice`
 *   is one of three properties that declare the USB protocol version
 *   by the device. The other two properties are USBDevice.usbVersionMinor
 *   USBDevice.usbVersionSubminor.
 * 
 *   `var serialNumber = USBDevice.usbVersionMajor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMajor`
 */
web.USBDevice.usb_version_major = (function web$USBDevice$usb_version_major(this$){
return this$.usbVersionMajor();
});
/**
 * Property.
 * 
 *   The usbVersionMajor read only property of the `web.USBDevice`
 *   is one of three properties that declare the USB protocol version
 *   by the device. The other two properties are USBDevice.usbVersionMinor
 *   USBDevice.usbVersionSubminor.
 * 
 *   `var serialNumber = USBDevice.usbVersionMajor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMajor`
 */
web.USBDevice.set_usb_version_major_BANG_ = (function web$USBDevice$set_usb_version_major_BANG_(this$,val){
return (this$["usbVersionMajor"] = val);
});
/**
 * Property.
 * 
 *   The usbVersionMinor read only property of the `web.USBDevice`
 *   is one of three properties that declare the USB protocol version
 *   by the device. The other two properties are USBDevice.usbVersionMajor
 *   USBDevice.usbVersionSubminor.
 * 
 *   `var serialNumber = USBDevice.usbVersionMinor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMinor`
 */
web.USBDevice.usb_version_minor = (function web$USBDevice$usb_version_minor(this$){
return this$.usbVersionMinor();
});
/**
 * Property.
 * 
 *   The usbVersionMinor read only property of the `web.USBDevice`
 *   is one of three properties that declare the USB protocol version
 *   by the device. The other two properties are USBDevice.usbVersionMajor
 *   USBDevice.usbVersionSubminor.
 * 
 *   `var serialNumber = USBDevice.usbVersionMinor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionMinor`
 */
web.USBDevice.set_usb_version_minor_BANG_ = (function web$USBDevice$set_usb_version_minor_BANG_(this$,val){
return (this$["usbVersionMinor"] = val);
});
/**
 * Property.
 * 
 *   The usbVersionSubminor read only property of the `web.USBDevice`
 *   is one of three properties that declare the USB protocol version
 *   by the device. The other two properties are USBDevice.usbVersionMajor
 *   USBDevice.usbVersionMinor.
 * 
 *   `var serialNumber = USBDevice.usbVersionSubminor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionSubminor`
 */
web.USBDevice.usb_version_subminor = (function web$USBDevice$usb_version_subminor(this$){
return this$.usbVersionSubminor();
});
/**
 * Property.
 * 
 *   The usbVersionSubminor read only property of the `web.USBDevice`
 *   is one of three properties that declare the USB protocol version
 *   by the device. The other two properties are USBDevice.usbVersionMajor
 *   USBDevice.usbVersionMinor.
 * 
 *   `var serialNumber = USBDevice.usbVersionSubminor`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/usbVersionSubminor`
 */
web.USBDevice.set_usb_version_subminor_BANG_ = (function web$USBDevice$set_usb_version_subminor_BANG_(this$,val){
return (this$["usbVersionSubminor"] = val);
});
/**
 * Property.
 * 
 *   The vendorID read only property of the `web.USBDevice` interface
 *   the official usg.org-assigned vendor ID.
 * 
 *   `var serialNumber = USBDevice.vendorID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/vendorID`
 */
web.USBDevice.vendor_id = (function web$USBDevice$vendor_id(this$){
return this$.vendorID();
});
/**
 * Property.
 * 
 *   The vendorID read only property of the `web.USBDevice` interface
 *   the official usg.org-assigned vendor ID.
 * 
 *   `var serialNumber = USBDevice.vendorID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USBDevice/vendorID`
 */
web.USBDevice.set_vendor_id_BANG_ = (function web$USBDevice$set_vendor_id_BANG_(this$,val){
return (this$["vendorID"] = val);
});

//# sourceMappingURL=USBDevice.js.map?rel=1565798841278
