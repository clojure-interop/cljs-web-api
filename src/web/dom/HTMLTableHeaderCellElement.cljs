(ns web.dom.HTMLTableHeaderCellElement
  "The HTMLTableHeaderCellElement interface provides special properties
  methods (beyond the regular `web.dom.HTMLTableCellElement` and
  interfaces it also has available to it by inheritance) for manipulating
  layout and presentation of table header cells in an HTML document."
  (:refer-clojure :exclude []))

(defn abbr
  "Property.

  Is a DOMString containing a name used to refer to this cell in
  context. It reflects the abbr attribute."
  [this]
  (-> this (.abbr)))

(defn set-abbr!
  "Property.

  Is a DOMString containing a name used to refer to this cell in
  context. It reflects the abbr attribute."
  [this val]
  (aset this "abbr" val))

