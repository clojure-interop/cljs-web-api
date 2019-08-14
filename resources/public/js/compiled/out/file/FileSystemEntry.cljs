(ns file.FileSystemEntry
  "The FileSystemEntry interface of the File and Directory Entries
  represents a single in a file system. The entry can be a file
  a directory (directories are represented by the `web.DirectoryEntry`
  It includes methods for working with files—including copying,
  removing, and reading files—as well as information about a file
  points to—including the file name and its path from the root
  the entry."
  (:refer-clojure :exclude [name remove]))

(defn copy-to
  "Method.

  The `file.FileSystemEntry` interface's method copyTo() copies
  file specified by the entry to a new location on the file system.

  `FileSystemEntry.copyTo(newParent[, newName][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/copyTo`"
  [this & args]
  (apply (-> this .-copyTo) (concat [this] args)))

(defn get-metadata
  "Method.

  The `file.FileSystemEntry` interface's method getMetadata() obtains
  `web.Metadata` object with information about the file system
  such as its modification date and time and its size.

  `FileSystemEntry.getMetadata(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/getMetadata`"
  [this & args]
  (apply (-> this .-getMetadata) (concat [this] args)))

(defn get-parent
  "Method.

  The `file.FileSystemEntry` interface's method getParent() obtains
  `file.FileSystemDirectoryEntry`.

  `FileSystemEntry.getParent(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/getParent`"
  [this & args]
  (apply (-> this .-getParent) (concat [this] args)))

(defn move-to
  "Method.

  The `file.FileSystemEntry` interface's method moveTo() moves
  file specified by the entry to a new location on the file system,
  renames the file if the destination directory is the same as
  source.

  `FileSystemEntry.moveTo(newParent[, newName][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/moveTo`"
  [this & args]
  (apply (-> this .-moveTo) (concat [this] args)))

(defn remove
  "Method.

  The `file.FileSystemEntry` interface's method remove() deletes
  file or directory from the file system. Directories must be empty
  they can be removed.

  `FileSystemEntry.remove(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/remove`"
  [this & args]
  (apply (-> this .-remove) (concat [this] args)))

(defn to-url
  "Method.

  The `file.FileSystemEntry` interface's method toURL() creates
  returns a string containing a URL which can be used to identify
  file system entry. This is done by exposing a new URL scheme—filesystem:—that
  be used as the value of src and href attributes.

  `FileSystemEntry.toURL([mimeType]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/toURL`"
  [this & args]
  (apply (-> this .-toURL) (concat [this] args)))

(defn filesystem
  "Property.

  The read-only filesystem property of the `file.FileSystemEntry`
  contains a `file.FileSystem` object that represents the file
  on which the entry resides.

  `var filesystem = FileSystemEntry.filesystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/filesystem`"
  [this]
  (-> this (.filesystem)))

(defn set-filesystem!
  "Property.

  The read-only filesystem property of the `file.FileSystemEntry`
  contains a `file.FileSystem` object that represents the file
  on which the entry resides.

  `var filesystem = FileSystemEntry.filesystem;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/filesystem`"
  [this val]
  (aset this "filesystem" val))

(defn full-path
  "Property.

  The read-only fullPath property of the `file.FileSystemEntry`
  returns a `web.USVString` specifying the full, absolute path
  the file system's root to the file represented by the entry.

  `var fullPath = FileSystemEntry.fullPath;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/fullPath`"
  [this]
  (-> this (.fullPath)))

(defn set-full-path!
  "Property.

  The read-only fullPath property of the `file.FileSystemEntry`
  returns a `web.USVString` specifying the full, absolute path
  the file system's root to the file represented by the entry.

  `var fullPath = FileSystemEntry.fullPath;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/fullPath`"
  [this val]
  (aset this "fullPath" val))

(defn is-directory
  "Property.

  The read-only isDirectory property of the `file.FileSystemEntry`
  is true if the entry represents a directory (meaning it's a `file.FileSystemDirectoryEntry`)
  false if it's not.

  `var isDirectory = FileSystemEntry.isDirectory;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isDirectory`"
  [this]
  (-> this (.isDirectory)))

(defn set-is-directory!
  "Property.

  The read-only isDirectory property of the `file.FileSystemEntry`
  is true if the entry represents a directory (meaning it's a `file.FileSystemDirectoryEntry`)
  false if it's not.

  `var isDirectory = FileSystemEntry.isDirectory;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isDirectory`"
  [this val]
  (aset this "isDirectory" val))

(defn is-file
  "Property.

  The read-only isFile property of the `file.FileSystemEntry` interface
  true if the entry represents a file (meaning it's a `file.FileSystemFileEntry`)
  false if it's not.

  `var isFile = FileSystemEntry.isFile;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isFile`"
  [this]
  (-> this (.isFile)))

(defn set-is-file!
  "Property.

  The read-only isFile property of the `file.FileSystemEntry` interface
  true if the entry represents a file (meaning it's a `file.FileSystemFileEntry`)
  false if it's not.

  `var isFile = FileSystemEntry.isFile;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/isFile`"
  [this val]
  (aset this "isFile" val))

(defn name
  "Property.

  The read-only name property of the `file.FileSystemEntry` interface
  a `web.USVString` specifying the entry's name; this is the entry
  its parent directory (the last component of the path as indicated
  the `web.fullPath` property).

  `var name = FileSystemEntry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The read-only name property of the `file.FileSystemEntry` interface
  a `web.USVString` specifying the entry's name; this is the entry
  its parent directory (the last component of the path as indicated
  the `web.fullPath` property).

  `var name = FileSystemEntry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/name`"
  [this val]
  (aset this "name" val))

