(ns web.XMLDocument
  "The XMLDocument interface represents an XML document. It inherits
  the generic `web.Document` and does not add any specific methods
  properties to it: nevertheless, several algorithms behave differently
  the two types of documents."
  (:refer-clojure :exclude [load]))

(defn load
  "Method.

  document.load() is a part of an old version of the W3C DOM Level
  Load & Save module. Can be used with `document.async` to indicate
  the request is synchronous or asynchronous (the default). As
  at least Gecko 1.9, this no longer supports cross-site loading
  documents (Use `web.XMLHttpRequest` or `fetch()` instead).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument/load`"
  [this & args]
  (apply (-> this .-load) (concat [this] args)))

(defn async
  "Property.

  document.async can be set to indicate whether a `XMLDocument.load()`
  should be an asynchronous or synchronous request. true is the
  value, indicating that documents should be loaded asynchronously.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument/async`"
  [this]
  (-> this (.async)))

(defn set-async!
  "Property.

  document.async can be set to indicate whether a `XMLDocument.load()`
  should be an asynchronous or synchronous request. true is the
  value, indicating that documents should be loaded asynchronously.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument/async`"
  [this val]
  (aset this "async" val))

