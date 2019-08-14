(ns web.ProgressEvent
  "The ProgressEvent interface represents events measuring progress
  an underlying process, like an HTTP request (for an XMLHttpRequest,
  the loading of the underlying resource of an `web.<img>`, `web.<audio>`,
  `web.<style>` or `web.<link>`)."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ProgressEvent() constructor returns a newly created `web.ProgressEvent`, representing the current completion of a long process.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/ProgressEvent`"
  js/ProgressEvent)

(defn init-progress-event
  "Method.

  The ProgressEvent.initProgressEvent() method Initializes an animation
  created using the deprecated `web.Document.createEvent(\\\"ProgressEvent\\\")`

  `Progress.initProgressEvent(typeArg, canBubbleArg, cancelableArg, lengthComputable, loaded, total);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/initProgressEvent`"
  [this type-arg can-bubble-arg cancelable-arg length-computable loaded total]
  (-> this (.initProgressEvent type-arg can-bubble-arg cancelable-arg length-computable loaded total)))

(defn length-computable
  "Property.

  The ProgressEvent.lengthComputable read-only property is a `web.Boolean`
  indicating if the resource concerned by the `web.ProgressEvent`
  a length that can be calculated. If not, the `web.ProgressEvent.total`
  has no significant value.

  `flag = ProgressEvent.lengthComputable`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable`"
  [this]
  (-> this (.lengthComputable)))

(defn set-length-computable!
  "Property.

  The ProgressEvent.lengthComputable read-only property is a `web.Boolean`
  indicating if the resource concerned by the `web.ProgressEvent`
  a length that can be calculated. If not, the `web.ProgressEvent.total`
  has no significant value.

  `flag = ProgressEvent.lengthComputable`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable`"
  [this val]
  (aset this "lengthComputable" val))

(defn loaded
  "Property.

  The ProgressEvent.loaded read-only property is an integer representing
  amount of work already performed by the underlying process. The
  of work done can be calculated with the property and ProgressEvent.total.
  downloading a resource using HTTP, this only represent the part
  the content itself, not headers and other overhead.

  `value = ProgressEvent.loaded`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded`"
  [this]
  (-> this (.loaded)))

(defn set-loaded!
  "Property.

  The ProgressEvent.loaded read-only property is an integer representing
  amount of work already performed by the underlying process. The
  of work done can be calculated with the property and ProgressEvent.total.
  downloading a resource using HTTP, this only represent the part
  the content itself, not headers and other overhead.

  `value = ProgressEvent.loaded`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded`"
  [this val]
  (aset this "loaded" val))

(defn total
  "Property.

  The ProgressEvent.total read-only property is an integer representing
  total amount of work that the underlying process is in the progress
  performing. When downloading a resource using HTTP, this only
  the content itself, not headers and other overhead.

  `value = ProgressEvent.total`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total`"
  [this]
  (-> this (.total)))

(defn set-total!
  "Property.

  The ProgressEvent.total read-only property is an integer representing
  total amount of work that the underlying process is in the progress
  performing. When downloading a resource using HTTP, this only
  the content itself, not headers and other overhead.

  `value = ProgressEvent.total`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total`"
  [this val]
  (aset this "total" val))

