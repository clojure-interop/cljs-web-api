(ns web.svg.DOMParser
  "The DOMParser interface provides the ability to parse XML or
  source code from a string into a DOM `web.Document`."
  (:refer-clojure :exclude []))

(defn string
  "Method.

  The DOMString to be parsed. It must contain either HTML, xml,
  or svg document."
  [this & args]
  (-> this .-string (.apply this (clj->js args))))

