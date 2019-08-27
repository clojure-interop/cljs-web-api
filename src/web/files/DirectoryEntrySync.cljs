(ns web.files.DirectoryEntrySync
  "The DirectoryEntrySync interface of the File System API represents
  directory in a file system. It includes methods for creating,
  looking up, and recursively removing files in a directory."
  (:refer-clojure :exclude []))

(defn directory-reader-sync
  "Method.

  Represents a directory in a file system."
  [this & args]
  (-> this .-DirectoryReaderSync (.apply this (clj->js args))))

(defn file-entry-sync
  "Method.

  Represents a file in a file system."
  [this & args]
  (-> this .-FileEntrySync (.apply this (clj->js args))))

(defn directory-entry-sync
  "Method.

  Represents a directory in a file system."
  [this & args]
  (-> this .-DirectoryEntrySync (.apply this (clj->js args))))

