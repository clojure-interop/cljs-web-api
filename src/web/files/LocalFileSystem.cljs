(ns web.files.LocalFileSystem
  "The LocalFileSystem interface of the File System API gives you
  to a sandboxed file system. The methods are implemented by window
  worker objects."
  (:refer-clojure :exclude [type]))

(defn type
  "Method.

  The storage type of the file system. The values can be either
  or PERSISTENT."
  [this & args]
  (apply (-> this .-type) (concat [this] args)))

(defn url
  "Method.

  The URL of a local file in the file system."
  [this & args]
  (apply (-> this .-url) (concat [this] args)))

