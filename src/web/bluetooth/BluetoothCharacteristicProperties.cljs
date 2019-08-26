(ns web.bluetooth.BluetoothCharacteristicProperties
  "The BluetoothCharacteristicProperties interface of the the Web
  API provides an object provides propertieds of a particular BluetoothRemoteGATTCharacteristic."
  (:refer-clojure :exclude []))

(defn broadcast-read
  "Property.

  tbd"
  [this]
  (-> this (.broadcastRead)))

(defn set-broadcast-read!
  "Property.

  tbd"
  [this val]
  (aset this "broadcastRead" val))

