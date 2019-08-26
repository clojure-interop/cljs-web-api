(ns web.dom.HTMLTableSectionElement
  "The HTMLTableSectionElement interface provides special properties
  methods (beyond the `web.dom.HTMLElement` interface it also has
  to it by inheritance) for manipulating the layout and presentation
  sections, that is headers, footers and bodies, in an HTML table."
  (:refer-clojure :exclude []))

(defn delete-row
  "Method.

  Removes the cell at the given position in the section. If the
  position is greater (or equal as it starts at zero) than the
  of rows in the section, or is smaller than 0, it raises a DOMException
  the IndexSizeError value."
  [this & args]
  (apply (-> this .-deleteRow) (concat [this] args)))

(defn align
  "Property.

  Is a DOMString containing an enumerated value reflecting the
  attribute. It indicates the alignment of the element's contents
  respect to the surrounding context. The possible values are \"left\",
  and \"center\"."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  Is a DOMString containing an enumerated value reflecting the
  attribute. It indicates the alignment of the element's contents
  respect to the surrounding context. The possible values are \"left\",
  and \"center\"."
  [this val]
  (aset this "align" val))

