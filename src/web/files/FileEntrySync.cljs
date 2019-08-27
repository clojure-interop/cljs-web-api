(ns web.files.FileEntrySync
  "The FileEntrySync interface of the File System API represents
  file in a file system. It lets you write content to a file."
  (:refer-clojure :exclude []))

(defn file-writer-sync
  "Method."
  [this & args]
  (-> this .-FileWriterSync (.apply this (clj->js args))))

(defn file
  "Method."
  [this & args]
  (-> this .-File (.apply this (clj->js args))))

