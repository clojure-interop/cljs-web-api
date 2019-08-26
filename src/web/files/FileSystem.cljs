(ns web.files.FileSystem
  "The File and Directory Entries API interface FileSystem is used
  represent a file system. These objects can be obtained from the
  property on any file system entry. Some browsers offer additional
  to create and manage file systems, such as Chrome's `requestFileSystem()`"
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  The read-only name property of the `web.files.FileSystem` interface
  the file system's name. This `web.USVString` is unique among
  file systems currently exposed by the File and Directory Entries

  `var fsName = FileSystem.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystem/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The read-only name property of the `web.files.FileSystem` interface
  the file system's name. This `web.USVString` is unique among
  file systems currently exposed by the File and Directory Entries

  `var fsName = FileSystem.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystem/name`"
  [this val]
  (aset this "name" val))

(defn root
  "Property.

  The read-only root property of the `web.files.FileSystem` interface
  a `web.files.FileSystemDirectoryEntry` object representing the
  directory of the file system, for use with the File and Directory
  API.

  `var rootDirEnt = FileSystem.root;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystem/root`"
  [this]
  (-> this (.root)))

(defn set-root!
  "Property.

  The read-only root property of the `web.files.FileSystem` interface
  a `web.files.FileSystemDirectoryEntry` object representing the
  directory of the file system, for use with the File and Directory
  API.

  `var rootDirEnt = FileSystem.root;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystem/root`"
  [this val]
  (aset this "root" val))

