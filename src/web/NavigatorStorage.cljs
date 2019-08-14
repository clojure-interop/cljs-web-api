(ns web.NavigatorStorage
  "The NavigatorStorage mixin adds to the `web.Navigator` and `web.WorkerNavigator`
  the `web.Navigator.storage` property, which provides access to
  `web.StorageManager` singleton used for controlling the persistence
  data stores as well as obtaining information"
  (:refer-clojure :exclude []))

(defn storage
  "Property.

  The NavigatorStorage.storage read-only property returns the singleton
  object used to access the overall storage capabilities of the
  for the current site or app.

  `var storageManager = navigator.storage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorStorage/storage`"
  [this]
  (-> this (.storage)))

(defn set-storage!
  "Property.

  The NavigatorStorage.storage read-only property returns the singleton
  object used to access the overall storage capabilities of the
  for the current site or app.

  `var storageManager = navigator.storage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorStorage/storage`"
  [this val]
  (aset this "storage" val))

