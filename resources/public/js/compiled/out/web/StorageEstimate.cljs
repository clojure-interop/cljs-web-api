(ns web.StorageEstimate
  "The StorageEstimate dictionary is used by the `web.StorageManager`
  provide estimates of the size of a site's or application's data
  and how much of it is in use. The `web.estimate()` method returns
  object that conforms to this dictionary when its `web.Promise`"
  (:refer-clojure :exclude []))

(defn quota
  "Property.

  The `web.StorageEstimate` dictionary's quota property is a conservative
  of how much storage is allotted to the origin or Web app that
  `web.StorageManager.estimate()`; there may be more space available,
  there will not be less. This value is an estimate to help prevent
  use for fingerprinting—that is, identifying a device using an
  of the values of seemingly innocuous properties.

  `quota = StorageEstimate.quota;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/quota`"
  [this]
  (-> this (.quota)))

(defn set-quota!
  "Property.

  The `web.StorageEstimate` dictionary's quota property is a conservative
  of how much storage is allotted to the origin or Web app that
  `web.StorageManager.estimate()`; there may be more space available,
  there will not be less. This value is an estimate to help prevent
  use for fingerprinting—that is, identifying a device using an
  of the values of seemingly innocuous properties.

  `quota = StorageEstimate.quota;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/quota`"
  [this val]
  (aset this "quota" val))

(defn usage
  "Property.

  The `web.StorageEstimate` dictionary's usage property is a conservative
  of how much storage is allotted to the origin or Web app that
  `web.StorageManager.estimate()`; there may be more space available,
  there will not be less. The value is an estimate because the
  agent may use compression, duplication prevention techniques,
  other methods to improve storage efficiency.

  `usage = StorageEstimate.usage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/usage`"
  [this]
  (-> this (.usage)))

(defn set-usage!
  "Property.

  The `web.StorageEstimate` dictionary's usage property is a conservative
  of how much storage is allotted to the origin or Web app that
  `web.StorageManager.estimate()`; there may be more space available,
  there will not be less. The value is an estimate because the
  agent may use compression, duplication prevention techniques,
  other methods to improve storage efficiency.

  `usage = StorageEstimate.usage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/usage`"
  [this val]
  (aset this "usage" val))

