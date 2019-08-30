(ns web.storage.IDBVersionChangeEvent
  "The IDBVersionChangeEvent interface of the IndexedDB API indicates
  the version of the database has changed, as the result of an
  event handler function."
  (:refer-clojure :exclude []))

(defn old-version
  "Property.

  [Read Only]

  The oldVersion read-only property of the `web.storage.IDBVersionChangeEvent`
  returns the old version number of the database.

  `var oldVersion = IDBVersionChangeEvent.oldVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/oldVersion`"
  [this]
  (-> this (.-oldVersion)))

(defn new-version
  "Property.

  [Read Only]

  A 64-bit integer.

  `var newVersion = IDBVersionChangeEvent.newVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/newVersion`"
  [this]
  (-> this (.-newVersion)))

(defn version
  "Property.

  [Read Only]

  The version property of the `web.storage.IDBVersionChangeEvent`
  returns The new version of the database in a versionchange transaction.

  `readonly    attribute unsigned long long? version;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/version`"
  [this]
  (-> this (.-version)))

