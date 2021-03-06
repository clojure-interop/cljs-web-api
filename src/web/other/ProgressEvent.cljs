(ns web.other.ProgressEvent
  "The ProgressEvent interface represents events measuring progress
  an underlying process, like an HTTP request (for an XMLHttpRequest,
  the loading of the underlying resource of an `<img>`, `<audio>`,
  `<style>` or `<link>`)."
  (:refer-clojure :exclude []))

(defn init-progress-event
  "Method.

  [Deprecated]
  [Non Standard]

  The ProgressEvent.initProgressEvent() method Initializes an animation
  created using the deprecated `Document.createEvent(\\\"ProgressEvent\\\")`

  `Progress.initProgressEvent(typeArg, canBubbleArg, cancelableArg, lengthComputable, loaded, total);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/initProgressEvent`"
  [this type-arg can-bubble-arg cancelable-arg length-computable loaded total]
  (-> this (.initProgressEvent type-arg can-bubble-arg cancelable-arg length-computable loaded total)))

(defn length-computable
  "Property.

  [Read Only]

  The ProgressEvent.lengthComputable read-only property is a `js.Boolean`
  indicating if the resource concerned by the `web.other.ProgressEvent`
  a length that can be calculated. If not, the `ProgressEvent.total`
  has no significant value.

  `flag = ProgressEvent.lengthComputable`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable`"
  [this]
  (-> this (.-lengthComputable)))

(defn loaded
  "Property.

  [Read Only]

  The ProgressEvent.loaded read-only property is an integer representing
  amount of work already performed by the underlying process. The
  of work done can be calculated with the property and ProgressEvent.total.
  downloading a resource using HTTP, this only represent the part
  the content itself, not headers and other overhead.

  `value = ProgressEvent.loaded`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded`"
  [this]
  (-> this (.-loaded)))

(defn total
  "Property.

  [Read Only]

  The ProgressEvent.total read-only property is an integer representing
  total amount of work that the underlying process is in the progress
  performing. When downloading a resource using HTTP, this only
  the content itself, not headers and other overhead.

  `value = ProgressEvent.total`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total`"
  [this]
  (-> this (.-total)))

