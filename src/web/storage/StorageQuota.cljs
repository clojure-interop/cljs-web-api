(ns web.storage.StorageQuota
  "The storageQuota property of the `web.performance.Navigator`
  of the Quota Management API provides means to query and request
  usage and quota information."
  (:refer-clojure :exclude []))

(defn query-info
  "Method.

  The queryInfo() property of the `web.storage.StorageQuota` interface
  a `StorageInfo` object containting the current data usage and
  quota information for the application.

  `StorageQuota.queryInfo().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/queryInfo`"
  [this & args]
  (apply (-> this .-queryInfo) (concat [this] args)))

(defn supported-types
  "Property.

  The supportedTypes read-only property of the `web.storage.StorageQuota`
  returns a list of the available storage types.

  `var storageTypes = StorageQuota.supportedTypes`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`"
  [this]
  (-> this (.supportedTypes)))

(defn set-supported-types!
  "Property.

  The supportedTypes read-only property of the `web.storage.StorageQuota`
  returns a list of the available storage types.

  `var storageTypes = StorageQuota.supportedTypes`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`"
  [this val]
  (aset this "supportedTypes" val))

(defn request-persistent-quota
  "Property.

  The requestPersistentQuota() property of the `web.storage.StorageQuota`
  requests persistent storage for the requesting application and
  a `js.Promise` to an instance of `StorageInfo`.

  `StorageQuota.requestPersistentQuota().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/requestPersistentQuota`"
  [this]
  (-> this (.requestPersistentQuota)))

(defn set-request-persistent-quota!
  "Property.

  The requestPersistentQuota() property of the `web.storage.StorageQuota`
  requests persistent storage for the requesting application and
  a `js.Promise` to an instance of `StorageInfo`.

  `StorageQuota.requestPersistentQuota().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/requestPersistentQuota`"
  [this val]
  (aset this "requestPersistentQuota" val))

