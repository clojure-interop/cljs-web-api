(ns web.files.FileSystemFileEntry
  "The FileSystemFileEntry interface of the File System API represents
  file in a file system. It offers properties describing the file's
  as well as the `file()` method, which creates a `web.files.File`
  that can be used to read the file."
  (:refer-clojure :exclude []))

(defn file
  "Method.

  [Non Standard]
  [Experimental]

  The `web.files.FileSystemFileEntry` interface's method file()
  a `web.files.File` object which can be used to read data from
  file represented by the directory entry.

  `FileSystemFileEntry.file(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/file`"
  [this & args]
  (-> this .-file (.apply this (clj->js args))))

(defn create-writer
  "Method.

  [Non Standard]
  [Experimental]
  [Obsolute]

  The `web.files.FileSystemFileEntry` interface's method createWriter()
  a `FileWriter` object which can be used to write data into the
  represented by the directory entry.

  `FileSystemFileEntry.createWriter(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/createWriter`"
  [this & args]
  (-> this .-createWriter (.apply this (clj->js args))))

