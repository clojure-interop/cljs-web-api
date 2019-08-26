(ns web.dom.HTMLFieldSetElement
  "The HTMLFieldSetElement interface provides special properties
  methods (beyond the regular `web.dom.HTMLElement` interface it
  has available to it by inheritance) for manipulating the layout
  presentation of `<fieldset>` elements."
  (:refer-clojure :exclude []))

(defn check-validity
  "Method.

  Always returns true because <fieldset> objects are never candidates
  constraint validation."
  [this & args]
  (apply (-> this .-checkValidity) (concat [this] args)))

(defn disabled
  "Property.

  A Boolean reflecting the disabled HTML attribute, indicating
  the user can interact with the control."
  [this]
  (-> this (.disabled)))

(defn set-disabled!
  "Property.

  A Boolean reflecting the disabled HTML attribute, indicating
  the user can interact with the control."
  [this val]
  (aset this "disabled" val))

