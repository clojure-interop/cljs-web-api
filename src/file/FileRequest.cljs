(ns file.FileRequest
  "The FileRequest interface extends the `dom.DOMRequest` interface
  provide some extra properties necessary for the `web.LockedFile`"
  (:refer-clojure :exclude []))

(defn locked-file
  "Property.

  The lockedFile property represents the `web.LockedFile` object
  which the request was started.

  `var lockedFile = instanceOfFileRequest.lockedFile`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/lockedFile`"
  [this]
  (-> this (.lockedFile)))

(defn set-locked-file!
  "Property.

  The lockedFile property represents the `web.LockedFile` object
  which the request was started.

  `var lockedFile = instanceOfFileRequest.lockedFile`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/lockedFile`"
  [this val]
  (aset this "lockedFile" val))

(defn onprogress
  "Property.

  This property specifies a callback function to be run repeatedly
  the operation represented by a `file.FileRequest` object is in

  `instanceOfFileRequest.onprogress = function;

  Where instanceOfFileRequest is a `file.FileRequest` object and function is the JavaScript function to execute.

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
  the operation represented by a `file.FileRequest` object is in

  `instanceOfFileRequest.onprogress = function;

  Where instanceOfFileRequest is a `file.FileRequest` object and function is the JavaScript function to execute.

  Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:


  loaded
  A number representing the current amount of bytes processed by the operation.
  total
  A number representing the total amount of bytes that will be processed by the operation.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileRequest/onprogress`"
  [this val]
  (aset this "onprogress" val))

