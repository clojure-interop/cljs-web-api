(ns html.HTMLAudioElement
  "The HTMLAudioElement interface provides access to the properties
  `web.<audio>` elements, as well as methods to manipulate them.
  derives from the `html.HTMLMediaElement` interface."
  (:refer-clojure :exclude []))

(defn dom-string
  "Method.

  DOMString is a UTF-16 String. As JavaScript already uses such
  DOMString is mapped directly to a `web.String`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMString`"
  [this & args]
  (apply (-> this .-DOMString) (concat [this] args)))

