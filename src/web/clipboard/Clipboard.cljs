(ns web.clipboard.Clipboard
  "The Clipboard interface implements the Clipboard API, providing—if
  user grants permission—both read and write access to the contents
  the system clipboard."
  (:refer-clojure :exclude []))

(defn read
  "Method.

  The read() method of the `web.clipboard.Clipboard` interface
  a copy of the clipboard's contents, delivering the data to the
  `js.Promise` when the promise is resolved. Unlike `readText()`,
  read() method can return arbitrary data, such as images.

  `var promise = navigator.clipboard.read();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read`"
  [this ]
  (-> this (.read)))

(defn read-text
  "Method.

  The `web.clipboard.Clipboard` interface's readText() method returns
  `js.Promise` which resolves with a copy of the textual contents
  the system clipboard.

  `var promise = navigator.clipboard.readText()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText`"
  [this ]
  (-> this (.readText)))

(defn write
  "Method.

  The `web.clipboard.Clipboard` method write() writes arbitrary
  such as images, to the clipboard.

  `var promise = navigator.clipboard.write(dataTransfer)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write`"
  [this data-transfer]
  (-> this (.write data-transfer)))

(defn write-text
  "Method.

  The `web.clipboard.Clipboard` interface's writeText() property
  the specified text string to the system clipboard.

  `var promise = navigator.clipboard.writeText(newClipText)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText`"
  [this new-clip-text]
  (-> this (.writeText new-clip-text)))

