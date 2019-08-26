(ns web.deprecated.SVGColorProfileElement
  "The SVGColorProfileElement interface corresponds to the `<color-profile>`"
  (:refer-clojure :exclude []))

(defn local
  "Property.

  A DOMString corresponding to the local attribute of the given"
  [this]
  (-> this (.local)))

(defn set-local!
  "Property.

  A DOMString corresponding to the local attribute of the given"
  [this val]
  (aset this "local" val))

