(ns web.PushMessageData
  "The PushMessageData interface of the Push API provides methods
  let you retrieve the push data sent by a server in various formats."
  (:refer-clojure :exclude []))

(defn array-buffer
  "Method.

  The arrayBuffer()method of the `web.PushMessageData` interface
  push message data as an `web.ArrayBuffer` object.

  `var myArrayBuffer = PushEvent.data.arrayBuffer();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/arrayBuffer`"
  [this ]
  (-> this (.arrayBuffer)))

(defn blob
  "Method.

  The blob()method of the `web.PushMessageData` interface extracts
  message data as a `web.Blob` object.

  `var myBlob = PushEvent.data.blob();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/blob`"
  [this ]
  (-> this (.blob)))

(defn json
  "Method.

  The json()method of the `web.PushMessageData` interface extracts
  message data by parsing it as a JSON string and returning the

  `var myData = PushEvent.data.json();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/json`"
  [this ]
  (-> this (.json)))

(defn text
  "Method.

  The text()method of the `web.PushMessageData` interface extracts
  message data as a plain text string.

  `var myText = PushEvent.data.text();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/text`"
  [this ]
  (-> this (.text)))

