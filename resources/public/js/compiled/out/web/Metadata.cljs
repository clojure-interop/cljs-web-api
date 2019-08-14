(ns web.Metadata
  "The Metadata interface is used by the File and Directory Entries
  to contain information about a file system entry. This metadata
  the file's size and modification date and time."
  (:refer-clojure :exclude []))

(defn modification-time
  "Property.

  The read-only modificationTime property of the `web.Metadata`
  is a `web.Date` object which specifies the date and time the
  system entry (or the data referenced by the entry) was last modified.

  `var modificationTime = Metadata.modificationTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Metadata/modificationTime`"
  [this]
  (-> this (.modificationTime)))

(defn set-modification-time!
  "Property.

  The read-only modificationTime property of the `web.Metadata`
  is a `web.Date` object which specifies the date and time the
  system entry (or the data referenced by the entry) was last modified.

  `var modificationTime = Metadata.modificationTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Metadata/modificationTime`"
  [this val]
  (aset this "modificationTime" val))

(defn size
  "Property.

  The read-only size property of the `web.Metadata` interface specifies
  size, in bytes, of the referenced file or other file system object
  disk.

  `var size = Metadata.size;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Metadata/size`"
  [this]
  (-> this (.size)))

(defn set-size!
  "Property.

  The read-only size property of the `web.Metadata` interface specifies
  size, in bytes, of the referenced file or other file system object
  disk.

  `var size = Metadata.size;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Metadata/size`"
  [this val]
  (aset this "size" val))

