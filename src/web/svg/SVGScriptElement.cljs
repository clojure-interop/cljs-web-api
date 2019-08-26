(ns web.svg.SVGScriptElement
  "The SVGScriptElement interface corresponds to the SVG `<script>`"
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  A DOMString corresponding to the type attribute of the given
  element. A DOMException is raised with the code NO_MODIFICATION_ALLOWED_ERR
  an attempt to change the value of a read only attribut."
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  A DOMString corresponding to the type attribute of the given
  element. A DOMException is raised with the code NO_MODIFICATION_ALLOWED_ERR
  an attempt to change the value of a read only attribut."
  [this val]
  (aset this "type" val))

