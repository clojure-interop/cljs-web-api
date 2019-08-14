(ns html.HTMLHtmlElement
  "The HTMLHtmlElement interface serves as the root node for a given
  document. This object inherits the properties and methods described
  the `html.HTMLElement` interface."
  (:refer-clojure :exclude []))

(defn version
  "Property.

  Returns version information about the document type definition
  of a document. While this property is recognized by Mozilla,
  return value for this property is always an empty string.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement/version`"
  [this]
  (-> this (.version)))

(defn set-version!
  "Property.

  Returns version information about the document type definition
  of a document. While this property is recognized by Mozilla,
  return value for this property is always an empty string.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement/version`"
  [this val]
  (aset this "version" val))

