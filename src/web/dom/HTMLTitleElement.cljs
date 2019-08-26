(ns web.dom.HTMLTitleElement
  "The HTMLTitleElement interface contains the title for a document.
  element inherits all of the properties and methods of the `web.dom.HTMLElement`"
  (:refer-clojure :exclude []))

(defn text
  "Property.

  Is a DOMString representing the text of the document's title."
  [this]
  (-> this (.-text)))

(defn set-text!
  "Property.

  Is a DOMString representing the text of the document's title."
  [this val]
  (aset this "text" val))

