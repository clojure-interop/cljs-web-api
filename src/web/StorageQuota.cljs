(ns web.StorageQuota
  "The storageQuota property of the `web.Navigator` interface of
  Quota Management API provides means to query and request storage
  and quota information."
  (:refer-clojure :exclude []))

(defn query-info
  "Method.

  The queryInfo() property of the `web.StorageQuota` interface
  a `web.StorageInfo` object containting the current data usage
  available quota information for the application.

  `StorageQuota.queryInfo().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/queryInfo`"
  [this & args]
  (apply (-> this .-queryInfo) (concat [this] args)))

(defn request-persistent-quota
  "Method.

  The requestPersistentQuota() property of the `web.StorageQuota`
  requests persistent storage for the requesting application and
  a `web.Promise` to an instance of `web.StorageInfo`.

  `StorageQuota.requestPersistentQuota().then(function(storageInfo) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/requestPersistentQuota`"
  [this & args]
  (apply (-> this .-requestPersistentQuota) (concat [this] args)))

(defn supported-types
  "Property.

  The supportedTypes read-only property of the `web.StorageQuota`
  returns a list of the available storage types.

  `var storageTypes = StorageQuota.supportedTypes`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`"
  [this]
  (-> this (.supportedTypes)))

(defn set-supported-types!
  "Property.

  The supportedTypes read-only property of the `web.StorageQuota`
  returns a list of the available storage types.

  `var storageTypes = StorageQuota.supportedTypes`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`"
  [this val]
  (aset this "supportedTypes" val))

