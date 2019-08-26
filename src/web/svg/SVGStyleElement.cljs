(ns web.svg.SVGStyleElement
  "The SVGStyleElement interface corresponds to the SVG `<style>`"
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  A DOMString corresponding to the type attribute of the given
  SVG 1.1 defined that a DOMException is raised with code NO_MODIFICATION_ALLOWED_ERR
  an attempt to change the value of a read-only attribute. This
  was removed in SVG 2."
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  A DOMString corresponding to the type attribute of the given
  SVG 1.1 defined that a DOMException is raised with code NO_MODIFICATION_ALLOWED_ERR
  an attempt to change the value of a read-only attribute. This
  was removed in SVG 2."
  [this val]
  (aset this "type" val))

