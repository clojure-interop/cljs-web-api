(ns web.svg.SVGNumber
  "The SVGNumber interface corresponds to the `<number>` basic data"
  (:refer-clojure :exclude []))

(defn value
  "Property.

  A float representing the number.
  Note: If the SVGNumber is read-only, a DOMException with the
  NO_MODIFICATION_ALLOWED_ERR is raised on an attempt to change
  value."
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  A float representing the number.
  Note: If the SVGNumber is read-only, a DOMException with the
  NO_MODIFICATION_ALLOWED_ERR is raised on an attempt to change
  value."
  [this val]
  (aset this "value" val))

