(ns web.storage.NavigatorStorage
  "The NavigatorStorage mixin adds to the `web.performance.Navigator`
  `web.workers.WorkerNavigator` interfaces the `Navigator.storage`
  which provides access to the `web.storage.StorageManager` singleton
  for controlling the persistence of data stores as well as obtaining"
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

