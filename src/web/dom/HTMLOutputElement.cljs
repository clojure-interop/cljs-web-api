(ns web.dom.HTMLOutputElement
  "The HTMLOutputElement interface provides properties and methods
  those inherited from `web.dom.HTMLElement`) for manipulating
  layout and presentation of `<output>` elements."
  (:refer-clojure :exclude []))

(defn check-validity
  "Method.

  Checks the validity of the element and returns a Boolean holding
  check result."
  [this & args]
  (apply (-> this .-checkValidity) (concat [this] args)))

(defn default-value
  "Property.

  A DOMString representing the default value of the element, initially
  empty string."
  [this]
  (-> this (.defaultValue)))

(defn set-default-value!
  "Property.

  A DOMString representing the default value of the element, initially
  empty string."
  [this val]
  (aset this "defaultValue" val))

(defn labels
  "Property.

  The HTMLOutputElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<output>` element.

  `var labelElements = output.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLOutputElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<output>` element.

  `var labelElements = output.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels`"
  [this val]
  (aset this "labels" val))

