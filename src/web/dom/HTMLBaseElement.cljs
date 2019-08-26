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
  (-> this (.-href)))

(defn set-href!
  "Property.

  Is a DOMString that reflects the href HTML attribute, containing
  base URL for relative URLs in the document."
  [this val]
  (aset this "href" val))

(defn target
  "Property.

  Is a DOMString that reflects the target HTML attribute, containing
  default target browsing context or frame for elements that do
  have a target reference specified."
  [this]
  (-> this (.-target)))

(defn set-target!
  "Property.

  Is a DOMString that reflects the target HTML attribute, containing
  default target browsing context or frame for elements that do
  have a target reference specified."
  [this val]
  (aset this "target" val))

