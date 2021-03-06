(ns web.service-workers.PushMessageData
  "The PushMessageData interface of the Push API provides methods
  let you retrieve the push data sent by a server in various formats."
  (:refer-clojure :exclude []))

(defn array-buffer
  "Method.

  [Experimental]

  The arrayBuffer()method of the `web.service-workers.PushMessageData`
  extracts push message data as an `js.ArrayBuffer` object.

  `var myArrayBuffer = PushEvent.data.arrayBuffer();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/arrayBuffer`"
  [this ]
  (-> this (.arrayBuffer)))

(defn blob
  "Method.

  [Experimental]

  The blob()method of the `web.service-workers.PushMessageData`
  extracts push message data as a `web.files.Blob` object.

  `var myBlob = PushEvent.data.blob();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/blob`"
  [this ]
  (-> this (.blob)))

(defn json
  "Method.

  [Experimental]

  The json()method of the `web.service-workers.PushMessageData`
  extracts push message data by parsing it as a JSON string and
  the result.

  `var myData = PushEvent.data.json();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/json`"
  [this ]
  (-> this (.json)))

(defn text
  "Method.

  [Experimental]

  The text()method of the `web.service-workers.PushMessageData`
  extracts push message data as a plain text string.

  `var myText = PushEvent.data.text();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData/text`"
  [this ]
  (-> this (.text)))

