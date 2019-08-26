(ns web.dom.HTMLDetailsElement
  "The HTMLDetailsElement interface provides special properties
  the regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<details>` elements."
  (:refer-clojure :exclude []))

(defn open
  "Property.

  Is a boolean reflecting the open HTML attribute, indicating whether
  not the element’s contents (not counting the <summary>) is to
  shown to the user."
  [this]
  (-> this (.open)))

(defn set-open!
  "Property.

  Is a boolean reflecting the open HTML attribute, indicating whether
  not the element’s contents (not counting the <summary>) is to
  shown to the user."
  [this val]
  (aset this "open" val))

