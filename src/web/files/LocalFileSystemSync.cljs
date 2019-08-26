(ns web.files.LocalFileSystemSync
  "The LocalFileSystemSync interface of the File System API gives
  access to a sandboxed file system. It is intended to be used
  WebWorkers. The methods are implemented by worker objects."
  (:refer-clojure :exclude [type]))

(defn type
  "Method.

  The storage type of the file system. The values can be either
  or PERSISTENT."
  [this & args]
  (apply (-> this .-type) (concat [this] args)))

(defn file-system-sync
  "Method.

  An object that represents the file system."
  [this & args]
  (apply (-> this .-FileSystemSync) (concat [this] args)))

(defn url
  "Method.

  The URL of a local file in the file system."
  [this & args]
  (apply (-> this .-url) (concat [this] args)))

(defn entry-sync
  "Method.

  An object that represents entries in the file system."
  [this & args]
  (apply (-> this .-EntrySync) (concat [this] args)))

