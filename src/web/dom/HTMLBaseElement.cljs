(ns web.dom.HTMLBaseElement
  "The HTMLBaseElement interface contains the base URI for a document.
  object inherits all of the properties and methods as described
  the `web.dom.HTMLElement` interface."
  (:refer-clojure :exclude []))

(defn href
  "Property.

  Is a DOMString that reflects the href HTML attribute, containing
  base URL for relative URLs in the document."
  [this]
  (-> this (.href)))

(defn set-href!
  "Property.

  Is a DOMString that reflects the href HTML attribute, containing
  base URL for relative URLs in the document."
  [this val]
  (aset this "href" val))

