(ns web.dom.HTMLButtonElement
  "The HTMLButtonElement interface provides properties and methods
  the regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<button>` elements."
  (:refer-clojure :exclude []))

(defn access-key
  "Property.

  Is a DOMString indicating the single-character keyboard key to
  access to the button."
  [this]
  (-> this (.accessKey)))

(defn set-access-key!
  "Property.

  Is a DOMString indicating the single-character keyboard key to
  access to the button."
  [this val]
  (aset this "accessKey" val))

(defn labels
  "Property.

  The HTMLButtonElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<button>` element.

  `var labelElements = button.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLButtonElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<button>` element.

  `var labelElements = button.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/labels`"
  [this val]
  (aset this "labels" val))

