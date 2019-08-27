(ns web.files.FileSystemEntrySync
  "The FileSystemEntrySync interface of the File and Directory Entries
  represents an entry in a file system; it can be either a `web.files.FileEntrySync`
  `DirectoryEntry`."
  (:refer-clojure :exclude []))

(defn metadata
  "Method."
  [this & args]
  (-> this .-Metadata (.apply this (clj->js args))))

(defn file-system-entry-sync
  "Method.

  An object that represents an entry in the file system."
  [this & args]
  (-> this .-FileSystemEntrySync (.apply this (clj->js args))))

(defn dom-string
  "Method."
  [this & args]
  (-> this .-DOMString (.apply this (clj->js args))))

(defn directory-entry-sync
  "Method.

  An object that represents a directory in the file system."
  [this & args]
  (-> this .-DirectoryEntrySync (.apply this (clj->js args))))

