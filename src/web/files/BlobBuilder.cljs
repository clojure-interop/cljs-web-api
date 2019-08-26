(ns web.files.BlobBuilder
  "The BlobBuilder interface provides an easy way to construct `web.files.Blob`
  Just create a BlobBuilder and append chunks of data to it by
  the append() method. When you're done building your blob, call
  to retrieve a `web.files.Blob` containing the data you sent into
  blob builder."
  (:refer-clojure :exclude [name]))

(defn data
  "Method.

  The data to append to the Blob being constructed."
  [this & args]
  (apply (-> this .-data) (concat [this] args)))

(defn endings
  "Method.

  Specifies how strings containing \\n are to be written out. This
  be \"transparent\" (endings unchanged) or \"native\" (endings changed
  match host OS filesystem convention). The default value is \"transparent\"."
  [this & args]
  (apply (-> this .-endings) (concat [this] args)))

(defn content-type
  "Method.

  The MIME type of the data to be returned in the Blob. This will
  the value of the Blob object's type property."
  [this & args]
  (apply (-> this .-contentType) (concat [this] args)))

(defn name
  "Method.

  The file name."
  [this & args]
  (apply (-> this .-name) (concat [this] args)))

