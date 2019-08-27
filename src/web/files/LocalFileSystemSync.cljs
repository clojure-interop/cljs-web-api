(ns web.files.LocalFileSystemSync
  "The LocalFileSystemSync interface of the File System API gives
  access to a sandboxed file system. It is intended to be used
  WebWorkers. The methods are implemented by worker objects."
  (:refer-clojure :exclude []))

(defn file-system-sync
  "Method.

  An object that represents the file system."
  [this & args]
  (-> this .-FileSystemSync (.apply this (clj->js args))))

(defn entry-sync
  "Method.

  An object that represents entries in the file system."
  [this & args]
  (-> this .-EntrySync (.apply this (clj->js args))))

