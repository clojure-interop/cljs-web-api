(ns web.dom.HTMLHeadElement
  "The HTMLHeadElement interface contains the descriptive information,
  metadata, for a document. This object inherits all of the properties
  methods described in the `web.dom.HTMLElement` interface."
  (:refer-clojure :exclude []))

(defn profile
  "Property.

  Is a DOMString representing the URIs of one or more metadata
  (white space separated)."
  [this]
  (-> this (.profile)))

(defn set-profile!
  "Property.

  Is a DOMString representing the URIs of one or more metadata
  (white space separated)."
  [this val]
  (aset this "profile" val))

