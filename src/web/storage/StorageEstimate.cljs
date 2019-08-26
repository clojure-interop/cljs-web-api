(ns web.storage.StorageEstimate
  "The StorageEstimate dictionary is used by the `web.storage.StorageManager`
  provide estimates of the size of a site's or application's data
  and how much of it is in use. The `estimate()` method returns
  object that conforms to this dictionary when its `js.Promise`"
  (:refer-clojure :exclude []))

(defn quota
  "Property.

  The `web.storage.StorageEstimate` dictionary's quota property
  a conservative approximation of how much storage is allotted
  the origin or Web app that called `StorageManager.estimate()`;
  may be more space available, but there will not be less. This
  is an estimate to help prevent its use for fingerprinting—that
  identifying a device using an amalgamation of the values of seemingly
  properties.

  `quota = StorageEstimate.quota;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/quota`"
  [this]
  (-> this (.-quota)))

(defn set-quota!
  "Property.

  The `web.storage.StorageEstimate` dictionary's quota property
  a conservative approximation of how much storage is allotted
  the origin or Web app that called `StorageManager.estimate()`;
  may be more space available, but there will not be less. This
  is an estimate to help prevent its use for fingerprinting—that
  identifying a device using an amalgamation of the values of seemingly
  properties.

  `quota = StorageEstimate.quota;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/quota`"
  [this val]
  (aset this "quota" val))

(defn usage
  "Property.

  The `web.storage.StorageEstimate` dictionary's usage property
  a conservative approximation of how much storage is allotted
  the origin or Web app that called `StorageManager.estimate()`;
  may be more space available, but there will not be less. The
  is an estimate because the user agent may use compression, duplication
  techniques, and other methods to improve storage efficiency.

  `usage = StorageEstimate.usage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/usage`"
  [this]
  (-> this (.-usage)))

(defn set-usage!
  "Property.

  The `web.storage.StorageEstimate` dictionary's usage property
  a conservative approximation of how much storage is allotted
  the origin or Web app that called `StorageManager.estimate()`;
  may be more space available, but there will not be less. The
  is an estimate because the user agent may use compression, duplication
  techniques, and other methods to improve storage efficiency.

  `usage = StorageEstimate.usage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/usage`"
  [this val]
  (aset this "usage" val))

(defn usage-details
  "Property.

  A dictionary containing a breakdown of usage by storage system.
  included members will have a usage greater than 0 and any storage
  with 0 usage will be excluded from the dictionary."
  [this]
  (-> this (.-usageDetails)))

(defn set-usage-details!
  "Property.

  A dictionary containing a breakdown of usage by storage system.
  included members will have a usage greater than 0 and any storage
  with 0 usage will be excluded from the dictionary."
  [this val]
  (aset this "usageDetails" val))

