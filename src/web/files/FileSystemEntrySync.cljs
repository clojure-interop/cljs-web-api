(ns web.files.FileSystemEntrySync
  "The FileSystemEntrySync interface of the File and Directory Entries
  represents an entry in a file system; it can be either a `web.files.FileEntrySync`
  `DirectoryEntry`."
  (:refer-clojure :exclude []))

(defn metadata
  "Method."
  [this & args]
  (apply (-> this .-Metadata) (concat [this] args)))

(defn file-system-entry-sync
  "Method.

  An object that represents an entry in the file system."
  [this & args]
  (apply (-> this .-FileSystemEntrySync) (concat [this] args)))

(defn dom-string
  "Method."
  [this & args]
  (apply (-> this .-DOMString) (concat [this] args)))

(defn directory-entry-sync
  "Method.

  An object that represents a directory in the file system."
  [this & args]
  (apply (-> this .-DirectoryEntrySync) (concat [this] args)))

