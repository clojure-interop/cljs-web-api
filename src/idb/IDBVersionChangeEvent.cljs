(ns idb.IDBVersionChangeEvent
  "The IDBVersionChangeEvent interface of the IndexedDB API indicates
  the version of the database has changed, as the result of an
  event handler function."
  (:refer-clojure :exclude []))

(defn new-version
  "Property.

  A 64-bit integer.

  `var newVersion = IDBVersionChangeEvent.newVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/newVersion`"
  [this]
  (-> this (.newVersion)))

(defn set-new-version!
  "Property.

  A 64-bit integer.

  `var newVersion = IDBVersionChangeEvent.newVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/newVersion`"
  [this val]
  (aset this "newVersion" val))

(defn old-version
  "Property.

  The oldVersion read-only property of the `idb.IDBVersionChangeEvent`
  returns the old version number of the database.

  `var oldVersion = IDBVersionChangeEvent.oldVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/oldVersion`"
  [this]
  (-> this (.oldVersion)))

(defn set-old-version!
  "Property.

  The oldVersion read-only property of the `idb.IDBVersionChangeEvent`
  returns the old version number of the database.

  `var oldVersion = IDBVersionChangeEvent.oldVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/oldVersion`"
  [this val]
  (aset this "oldVersion" val))

(defn version
  "Property.

  The version property of the `idb.IDBVersionChangeEvent` interface
  The new version of the database in a versionchange transaction.

  `readonly    attribute unsigned long long? version;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/version`"
  [this]
  (-> this (.version)))

(defn set-version!
  "Property.

  The version property of the `idb.IDBVersionChangeEvent` interface
  The new version of the database in a versionchange transaction.

  `readonly    attribute unsigned long long? version;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/version`"
  [this val]
  (aset this "version" val))

