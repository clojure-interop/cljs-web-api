(ns web.files.FileSystemEntry
  "The FileSystemEntry interface of the File and Directory Entries
  represents a single in a file system. The entry can be a file
  a directory (directories are represented by the `DirectoryEntry`
  It includes methods for working with files—including copying,
  removing, and reading files—as well as information about a file
  points to—including the file name and its path from the root
  the entry."
  (:refer-clojure :exclude [name remove]))

(defn copy-to
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemEntry` interface's method copyTo() copies
  file specified by the entry to a new location on the file system.

  `FileSystemEntry.copyTo(newParent[, newName][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/copyTo`"
  [this & args]
  (-> this .-copyTo (.apply this (clj->js args))))

(defn get-metadata
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemEntry` interface's method getMetadata()
  a `web.files.Metadata` object with information about the file
  entry, such as its modification date and time and its size.

  `FileSystemEntry.getMetadata(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/getMetadata`"
  [this & args]
  (-> this .-getMetadata (.apply this (clj->js args))))

(defn get-parent
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemEntry` interface's method getParent()
  a `web.files.FileSystemDirectoryEntry`.

  `FileSystemEntry.getParent(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/getParent`"
  [this & args]
  (-> this .-getParent (.apply this (clj->js args))))

(defn move-to
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemEntry` interface's method moveTo() moves
  file specified by the entry to a new location on the file system,
  renames the file if the destination directory is the same as
  source.

  `FileSystemEntry.moveTo(newParent[, newName][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/moveTo`"
  [this & args]
  (-> this .-moveTo (.apply this (clj->js args))))

(defn remove
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemEntry` interface's method remove() deletes
  file or directory from the file system. Directories must be empty
  they can be removed.

  `FileSystemEntry.remove(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/remove`"
  [this & args]
  (-> this .-remove (.apply this (clj->js args))))

(defn to-url
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemEntry` interface's method toURL() creates
  returns a string containing a URL which can be used to identify
  file system entry. This is done by exposing a new URL scheme—filesystem:—that
  be used as the value of src and href attributes.

  `FileSystemEntry.toURL([mimeType]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/toURL`"
  [this & args]
  (-> this .-toURL (.apply this (clj->js args))))

(defn filesystem
  "Property.

  [Read Only]
  [Non Standard]
  [Experimental]

  The read-only filesystem property of the `web.files.FileSystemEntry`
  contains a `web.files.FileSystem` object that represents the
  system on which the entry resides.

  `var filesystem = FileSystemEntry.filesystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/filesystem`"
  [this]
  (-> this (.-filesystem)))

(defn full-path
  "Property.

  [Read Only]
  [Non Standard]
  [Experimental]

  The read-only fullPath property of the `web.files.FileSystemEntry`
  returns a `web.USVString` specifying the full, absolute path
  the file system's root to the file represented by the entry.

  `var fullPath = FileSystemEntry.fullPath;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/fullPath`"
  [this]
  (-> this (.-fullPath)))

(defn is-directory
  "Property.

  [Read Only]
  [Non Standard]
  [Experimental]

  The read-only isDirectory property of the `web.files.FileSystemEntry`
  is true if the entry represents a directory (meaning it's a `web.files.FileSystemDirectoryEntry`)
  false if it's not.

  `var isDirectory = FileSystemEntry.isDirectory;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isDirectory`"
  [this]
  (-> this (.-isDirectory)))

(defn is-file
  "Property.

  [Read Only]
  [Non Standard]
  [Experimental]

  The read-only isFile property of the `web.files.FileSystemEntry`
  is true if the entry represents a file (meaning it's a `web.files.FileSystemFileEntry`)
  false if it's not.

  `var isFile = FileSystemEntry.isFile;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isFile`"
  [this]
  (-> this (.-isFile)))

(defn name
  "Property.

  [Read Only]
  [Non Standard]
  [Experimental]

  The read-only name property of the `web.files.FileSystemEntry`
  returns a `web.USVString` specifying the entry's name; this is
  entry within its parent directory (the last component of the
  as indicated by the `fullPath` property).

  `var name = FileSystemEntry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/name`"
  [this]
  (-> this (.-name)))

