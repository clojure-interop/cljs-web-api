(ns file.FileSystemFileEntry
  "The FileSystemFileEntry interface of the File System API represents
  file in a file system. It offers properties describing the file's
  as well as the `web.file()` method, which creates a `file.File`
  that can be used to read the file."
  (:refer-clojure :exclude []))

(defn create-writer
  "Method.

  The `file.FileSystemFileEntry` interface's method createWriter()
  a `file.FileWriter` object which can be used to write data into
  file represented by the directory entry.

  `FileSystemFileEntry.createWriter(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/createWriter`"
  [this & args]
  (apply (-> this .-createWriter) (concat [this] args)))

(defn file
  "Method.

  The `file.FileSystemFileEntry` interface's method file() returns
  `file.File` object which can be used to read data from the file
  by the directory entry.

  `FileSystemFileEntry.file(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/file`"
  [this & args]
  (apply (-> this .-file) (concat [this] args)))

