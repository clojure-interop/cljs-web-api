(ns web.other.FileReaderSync
  "The FileReaderSync interface allows to read File or Blob objects
  a synchronous way."
  (:refer-clojure :exclude []))

(defn blob
  "Method.

  The DOM Blob or File to read into the ArrayBuffer."
  [this & args]
  (apply (-> this .-blob) (concat [this] args)))

(defn not-found-error
  "Method.

  is raised when the resource represented by the DOM Blob or File
  be found, e. g. because it has been erased."
  [this & args]
  (apply (-> this .-NotFoundError) (concat [this] args)))

(defn security-error
  "Method.

  is raised when one of the following problematic situation is
  the resource has been modified by a third party;
  too many read are performed simultaneously;
  the file pointed by the resource is unsafe for a use from the
  (like it is a system file)."
  [this & args]
  (apply (-> this .-SecurityError) (concat [this] args)))

(defn not-readable-error
  "Method.

  is raised when the resource cannot be read due to a permission
  like a concurrent lock."
  [this & args]
  (apply (-> this .-NotReadableError) (concat [this] args)))

(defn encoding-error
  "Method.

  is raised when the resource is a data URL and exceed the limit
  defined by each browser."
  [this & args]
  (apply (-> this .-EncodingError) (concat [this] args)))

(defn encoding
  "Method.

  Optional. A string representing the encoding to be used, like
  or UTF-8."
  [this & args]
  (apply (-> this .-encoding) (concat [this] args)))

