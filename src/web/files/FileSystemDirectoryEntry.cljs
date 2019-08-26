(ns web.files.FileSystemDirectoryEntry
  "The FileSystemDirectoryEntry interface of the File and Directory
  API represents a directory in a file system. It provides methods
  make it possible to access and manipulate the files in a directory,
  well as to access the entries within the directory."
  (:refer-clojure :exclude []))

(defn create-reader
  "Method.

  The `web.files.FileSystemDirectoryEntry` interface's method createReader()
  a `web.files.FileSystemDirectoryReader` object which can be used
  read the entries in the directory.

  `directoryReader = FileSystemDirectoryEntry.createReader();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader`"
  [this ]
  (-> this (.createReader)))

(defn get-directory
  "Method.

  The `web.files.FileSystemDirectoryEntry` interface's method getDirectory()
  a `web.files.FileSystemDirectoryEntry` object corresponding to
  directory contained somewhere within the directory subtree rooted
  the directory on which it's called.

  `FileSystemDirectoryEntry.getDirectory([path][, options][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getDirectory`"
  [this & args]
  (apply (-> this .-getDirectory) (concat [this] args)))

(defn get-file
  "Method.

  The `web.files.FileSystemDirectoryEntry` interface's method getFile()
  a `web.files.FileSystemFileEntry` object corresponding to a file
  somewhere within the directory subtree rooted at the directory
  which it's called.

  `FileSystemDirectoryEntry.getFile([path][, options][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getFile`"
  [this & args]
  (apply (-> this .-getFile) (concat [this] args)))

(defn remove-recursively
  "Method.

  The `web.files.FileSystemDirectoryEntry` interface's method removeRecursively()
  the directory as well as all of its content, hierarchically iterating
  its entire subtree of descendant files and directories.

  `FileSystemDirectoryEntry.removeRecursively(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/removeRecursively`"
  [this & args]
  (apply (-> this .-removeRecursively) (concat [this] args)))

