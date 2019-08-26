(ns web.files.FileSystemFlags
  "The FileSystemFlags dictionary defines a set of values which
  used when specifying option flags when calling certain methods
  the File and Directory Entries API. Methods which accept an options
  of this type may specify zero or more of these flags as fields
  an object, like this:"
  (:refer-clojure :exclude [create]))

(defn create
  "Property.

  The create property on the `web.files.FileSystemFlags` dictionary
  used to indicate whether or not the file should be created if
  missing. FileSystemFlags is only used when calling `FileSystemDirectoryEntry.getFile()`
  `FileSystemDirectoryEntry.getDirectory()`.

  `fileSystemFlags.create = booleanValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/create`"
  [this]
  (-> this (.-create)))

(defn set-create!
  "Property.

  The create property on the `web.files.FileSystemFlags` dictionary
  used to indicate whether or not the file should be created if
  missing. FileSystemFlags is only used when calling `FileSystemDirectoryEntry.getFile()`
  `FileSystemDirectoryEntry.getDirectory()`.

  `fileSystemFlags.create = booleanValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/create`"
  [this val]
  (aset this "create" val))

(defn exclusive
  "Property.

  The exclusive property on the `web.files.FileSystemFlags` dictionary
  used in tandem with the create property to determine whether
  not it's acceptable to require that the file not already exist
  the reference to it is created by calling `FileSystemDirectoryEntry.getFile()`
  `FileSystemDirectoryEntry.getDirectory()`.

  `fileSystemFlags.exclusive = booleanValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/exclusive`"
  [this]
  (-> this (.-exclusive)))

(defn set-exclusive!
  "Property.

  The exclusive property on the `web.files.FileSystemFlags` dictionary
  used in tandem with the create property to determine whether
  not it's acceptable to require that the file not already exist
  the reference to it is created by calling `FileSystemDirectoryEntry.getFile()`
  `FileSystemDirectoryEntry.getDirectory()`.

  `fileSystemFlags.exclusive = booleanValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/exclusive`"
  [this val]
  (aset this "exclusive" val))

