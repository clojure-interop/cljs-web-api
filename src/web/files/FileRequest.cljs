(ns web.files.FileRequest
  "The FileRequest interface extends the `DOMRequest` interface
  provide some extra properties necessary for the `web.files.LockedFile`"
  (:refer-clojure :exclude []))

(defn locked-file
  "Property.

  The lockedFile property represents the `web.files.LockedFile`
  from which the request was started.

  `var lockedFile = instanceOfFileRequest.lockedFile`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/lockedFile`"
  [this]
  (-> this (.lockedFile)))

(defn set-locked-file!
  "Property.

  The lockedFile property represents the `web.files.LockedFile`
  from which the request was started.

  `var lockedFile = instanceOfFileRequest.lockedFile`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/lockedFile`"
  [this val]
  (aset this "lockedFile" val))

(defn onsuccess
  "Property.

  A callback handler called when the operation represented by the
  is completed."
  [this]
  (-> this (.onsuccess)))

(defn set-onsuccess!
  "Property.

  A callback handler called when the operation represented by the
  is completed."
  [this val]
  (aset this "onsuccess" val))

(defn onprogress
  "Property.

  This property specifies a callback function to be run repeatedly
  the operation represented by a `web.files.FileRequest` object
  in progress.

  `instanceOfFileRequest.onprogress = function;

  Where instanceOfFileRequest is a `web.files.FileRequest` object and function is the JavaScript function to execute.

  Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:


  loaded
  A number representing the current amount of bytes processed by the operation.
  total
  A number representing the total amount of bytes that will be processed by the operation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/onprogress`"
  [this]
  (-> this (.onprogress)))

(defn set-onprogress!
  "Property.

  This property specifies a callback function to be run repeatedly
  the operation represented by a `web.files.FileRequest` object
  in progress.

  `instanceOfFileRequest.onprogress = function;

  Where instanceOfFileRequest is a `web.files.FileRequest` object and function is the JavaScript function to execute.

  Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:


  loaded
  A number representing the current amount of bytes processed by the operation.
  total
  A number representing the total amount of bytes that will be processed by the operation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/onprogress`"
  [this val]
  (aset this "onprogress" val))

