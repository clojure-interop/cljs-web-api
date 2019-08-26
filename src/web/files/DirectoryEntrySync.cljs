(ns web.files.DirectoryEntrySync
  "The DirectoryEntrySync interface of the File System API represents
  directory in a file system. It includes methods for creating,
  looking up, and recursively removing files in a directory."
  (:refer-clojure :exclude []))

(defn directory-reader-sync
  "Method.

  Represents a directory in a file system."
  [this & args]
  (apply (-> this .-DirectoryReaderSync) (concat [this] args)))

(defn file-entry-sync
  "Method.

  Represents a file in a file system."
  [this & args]
  (apply (-> this .-FileEntrySync) (concat [this] args)))

(defn directory-entry-sync
  "Method.

  Represents a directory in a file system."
  [this & args]
  (apply (-> this .-DirectoryEntrySync) (concat [this] args)))

