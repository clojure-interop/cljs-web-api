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
  (-> this (.-abbr)))

(defn set-abbr!
  "Property.

  Is a DOMString containing a name used to refer to this cell in
  context. It reflects the abbr attribute."
  [this val]
  (aset this "abbr" val))

(defn scope
  "Property.

  Is a DOMString representing an enumerated value indicating which
  the header cell applies to. It reflects the scope attribute and
  one of the following values: \"row\", \"col\", \"colgroup\", or \"rowgroup\".
  the attribute is in the auto state, or if an invalid value is
  for the attribute, scope will be returns the empty string, \"\"."
  [this]
  (-> this (.-scope)))

(defn set-scope!
  "Property.

  Is a DOMString representing an enumerated value indicating which
  the header cell applies to. It reflects the scope attribute and
  one of the following values: \"row\", \"col\", \"colgroup\", or \"rowgroup\".
  the attribute is in the auto state, or if an invalid value is
  for the attribute, scope will be returns the empty string, \"\"."
  [this val]
  (aset this "scope" val))

(defn sorted
  "Property.

  Is a Boolean value indicating if the table is sorted by the scope
  with this header cell. It reflects the sorted attribute."
  [this]
  (-> this (.-sorted)))

(defn set-sorted!
  "Property.

  Is a Boolean value indicating if the table is sorted by the scope
  with this header cell. It reflects the sorted attribute."
  [this val]
  (aset this "sorted" val))

