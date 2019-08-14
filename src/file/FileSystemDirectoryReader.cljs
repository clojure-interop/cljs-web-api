(ns file.FileSystemDirectoryReader
  "The FileSystemDirectoryReader interface of the File and Directory
  API lets you access the `file.FileEntry`-based objects (generally
  or `file.FileSystemDirectoryEntry`) representing each entry in
  directory."
  (:refer-clojure :exclude []))

(defn read-entries
  "Method.

  The `file.FileSystemDirectoryReader` interface's readEntries()
  retrieves the directory entries within the directory being read
  delivers them in an array to a provided callback function.

  `readEntries(successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries`"
  [this & args]
  (apply (-> this .-readEntries) (concat [this] args)))

