(ns web.bluetooth.BluetoothCharacteristicProperties
  "The BluetoothCharacteristicProperties interface of the the Web
  API provides an object provides propertieds of a particular BluetoothRemoteGATTCharacteristic."
  (:refer-clojure :exclude []))

(defn broadcast
  "Property.

  tbd"
  [this]
  (-> this (.-broadcast)))

(defn set-broadcast!
  "Property.

  tbd"
  [this val]
  (aset this "broadcast" val))

(defn read
  "Property.

  tbd"
  [this]
  (-> this (.-read)))

(defn set-read!
  "Property.

  tbd"
  [this val]
  (aset this "read" val))

(defn write-without-response
  "Property.

  tbd"
  [this]
  (-> this (.-writeWithoutResponse)))

(defn set-write-without-response!
  "Property.

  tbd"
  [this val]
  (aset this "writeWithoutResponse" val))

(defn write
  "Property.

  tbd"
  [this]
  (-> this (.-write)))

(defn set-write!
  "Property.

  tbd"
  [this val]
  (aset this "write" val))

(defn notify
  "Property.

  tbd"
  [this]
  (-> this (.-notify)))

(defn set-notify!
  "Property.

  tbd"
  [this val]
  (aset this "notify" val))

(defn indicate
  "Property.

  tbd"
  [this]
  (-> this (.-indicate)))

(defn set-indicate!
  "Property.

  tbd"
  [this val]
  (aset this "indicate" val))

(defn authenticated-signed-writes
  "Property.

  tbd"
  [this]
  (-> this (.-authenticatedSignedWrites)))

(defn set-authenticated-signed-writes!
  "Property.

  tbd"
  [this val]
  (aset this "authenticatedSignedWrites" val))

(defn reliable-write
  "Property.

  tbd"
  [this]
  (-> this (.-reliableWrite)))

(defn set-reliable-write!
  "Property.

  tbd"
  [this val]
  (aset this "reliableWrite" val))

(defn writable-auxiliaries
  "Property.

  tbd"
  [this]
  (-> this (.-writableAuxiliaries)))

(defn set-writable-auxiliaries!
  "Property.

  tbd"
  [this val]
  (aset this "writableAuxiliaries" val))

