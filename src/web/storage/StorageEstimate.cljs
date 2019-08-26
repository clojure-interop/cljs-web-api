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
  (-> this (.quota)))

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

