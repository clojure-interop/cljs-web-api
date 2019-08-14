(ns file.FileSystemDirectoryEntry
  "The FileSystemDirectoryEntry interface of the File and Directory
  API represents a directory in a file system. It provides methods
  make it possible to access and manipulate the files in a directory,
  well as to access the entries within the directory."
  (:refer-clojure :exclude []))

(defn create-reader
  "Method.

  The `file.FileSystemDirectoryEntry` interface's method createReader()
  a `file.FileSystemDirectoryReader` object which can be used to
  the entries in the directory.

  `directoryReader = FileSystemDirectoryEntry.createReader();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader`"
  [this ]
  (-> this (.createReader)))

(defn get-directory
  "Method.

  The `file.FileSystemDirectoryEntry` interface's method getDirectory()
  a `file.FileSystemDirectoryEntry` object corresponding to a directory
  somewhere within the directory subtree rooted at the directory
  which it's called.

  `FileSystemDirectoryEntry.getDirectory([path][, options][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getDirectory`"
  [this & args]
  (apply (-> this .-getDirectory) (concat [this] args)))

(defn get-file
  "Method.

  The `file.FileSystemDirectoryEntry` interface's method getFile()
  a `file.FileSystemFileEntry` object corresponding to a file contained
  within the directory subtree rooted at the directory on which
  called.

  `FileSystemDirectoryEntry.getFile([path][, options][, successCallback][, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getFile`"
  [this & args]
  (apply (-> this .-getFile) (concat [this] args)))

(defn remove-recursively
  "Method.

  The `file.FileSystemDirectoryEntry` interface's method removeRecursively()
  the directory as well as all of its content, hierarchically iterating
  its entire subtree of descendant files and directories.

  `FileSystemDirectoryEntry.removeRecursively(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/removeRecursively`"
  [this & args]
  (apply (-> this .-removeRecursively) (concat [this] args)))

