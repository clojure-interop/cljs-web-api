(ns xml.XMLHttpRequestEventTarget
  "XMLHttpRequestEventTarget is the interface that describes the
  handlers you can implement in an object that will handle events
  an `xml.XMLHttpRequest`."
  (:refer-clojure :exclude []))

(defn onabort
  "Property.

  The XMLHttpRequestEventTarget.onabort is the function called
  an `xml.XMLHttpRequest` transaction is aborted, such as when
  `xml.XMLHttpRequest.abort()` function is called.

  `XMLHttpRequest.onabort = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onabort`"
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  The XMLHttpRequestEventTarget.onabort is the function called
  an `xml.XMLHttpRequest` transaction is aborted, such as when
  `xml.XMLHttpRequest.abort()` function is called.

  `XMLHttpRequest.onabort = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onerror
  "Property.

  The XMLHttpRequestEventTarget.onerror is the function called
  an `xml.XMLHttpRequest` transaction fails due to an error.

  `XMLHttpRequest.onerror = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The XMLHttpRequestEventTarget.onerror is the function called
  an `xml.XMLHttpRequest` transaction fails due to an error.

  `XMLHttpRequest.onerror = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onload
  "Property.

  The XMLHttpRequestEventTarget.onload is the function called when
  `xml.XMLHttpRequest` transaction completes successfully.

  `XMLHttpRequest.onload = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload`"
  [this]
  (-> this (.onload)))

(defn set-onload!
  "Property.

  The XMLHttpRequestEventTarget.onload is the function called when
  `xml.XMLHttpRequest` transaction completes successfully.

  `XMLHttpRequest.onload = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload`"
  [this val]
  (aset this "onload" val))

(defn onloadstart
  "Property.

  The XMLHttpRequestEventTarget.onloadstart is the function called
  an `xml.XMLHttpRequest` transaction starts transferring data.

  `XMLHttpRequest.onloadstart = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onloadstart`"
  [this]
  (-> this (.onloadstart)))

(defn set-onloadstart!
  "Property.

  The XMLHttpRequestEventTarget.onloadstart is the function called
  an `xml.XMLHttpRequest` transaction starts transferring data.

  `XMLHttpRequest.onloadstart = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onloadstart`"
  [this val]
  (aset this "onloadstart" val))

(defn onprogress
  "Property.

  The XMLHttpRequestEventTarget.onprogress is the function called
  with information when an `xml.XMLHttpRequest` before success
  .

  `XMLHttpRequest.onprogress = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onprogress`"
  [this]
  (-> this (.onprogress)))

(defn set-onprogress!
  "Property.

  The XMLHttpRequestEventTarget.onprogress is the function called
  with information when an `xml.XMLHttpRequest` before success
  .

  `XMLHttpRequest.onprogress = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onprogress`"
  [this val]
  (aset this "onprogress" val))

