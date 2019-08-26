(ns web.files.IDBMutableFile
  "The IDBMutableFile interface provides access in read or write
  to a file, dealing with all the necessary locks."
  (:refer-clojure :exclude [name type]))

(defn open
  "Method.

  Returns a LockedFile object to read or write the associated file"
  [this & args]
  (apply (-> this .-open) (concat [this] args)))

(defn get-file
  "Method.

  Returns a DOMRequest object. In case of success, the request's
  is a File object representing a snapshot of the handled file."
  [this & args]
  (apply (-> this .-getFile) (concat [this] args)))

(defn name
  "Property.

  The name of the handled file."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The name of the handled file."
  [this val]
  (aset this "name" val))

(defn type
  "Property.

  The MIME type of the handled file."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The MIME type of the handled file."
  [this val]
  (aset this "type" val))

(defn onabort
  "Property.

  The abort event is triggered each time the handled file is aborted."
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  The abort event is triggered each time the handled file is aborted."
  [this val]
  (aset this "onabort" val))

(defn onerror
  "Property.

  The error event is triggered each time something goes wrong."
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The error event is triggered each time something goes wrong."
  [this val]
  (aset this "onerror" val))

