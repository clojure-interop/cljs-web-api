(ns web.storage.StorageQuota
  "The storageQuota property of the `web.performance.Navigator`
  of the Quota Management API provides means to query and request
  usage and quota information."
  (:refer-clojure :exclude []))

(defn query-info
  "Method.

  [Experimental]

  The queryInfo() property of the `web.storage.StorageQuota` interface
  a `StorageInfo` object containting the current data usage and
  quota information for the application.

  `StorageQuota.queryInfo().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/queryInfo`"
  [this & args]
  (-> this .-queryInfo (.apply this (clj->js args))))

(defn request-persistent-quota
  "Method.

  [Experimental]

  The requestPersistentQuota() property of the `web.storage.StorageQuota`
  requests persistent storage for the requesting application and
  a `js.Promise` to an instance of `StorageInfo`.

  `StorageQuota.requestPersistentQuota().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/requestPersistentQuota`"
  [this & args]
  (-> this .-requestPersistentQuota (.apply this (clj->js args))))

(defn supported-types
  "Property.

  [Read Only]
  [Experimental]

  The supportedTypes read-only property of the `web.storage.StorageQuota`
  returns a list of the available storage types.

  `var storageTypes = StorageQuota.supportedTypes`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`"
  [this]
  (-> this (.-supportedTypes)))

