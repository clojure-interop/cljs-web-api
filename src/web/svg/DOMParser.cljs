(ns web.svg.DOMParser
  "The DOMParser interface provides the ability to parse XML or
  source code from a string into a DOM `web.Document`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMParser() constructor creates a new DOMParser object.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/DOMParser`"
  js/DOMParser)

(defn string
  "Method.

  The DOMString to be parsed. It must contain either HTML, xml,
  or svg document."
  [this & args]
  (apply (-> this .-string) (concat [this] args)))

