(ns web.dom.HTMLTableCellElement
  "The HTMLTableCellElement interface provides special properties
  methods (beyond the regular `web.dom.HTMLElement` interface it
  has available to it by inheritance) for manipulating the layout
  presentation of table cells, either header or data cells, in
  HTML document."
  (:refer-clojure :exclude []))

(defn abbr
  "Property.

  A DOMString which can be used on <th> elements (not on <td>),
  an alternative label for the header cell.. This alternate label
  be used in other contexts, such as when describing the headers
  apply to a data cell. This is used to offer a shorter term for
  by screen readers in particular, and is a valuable accessibility
  Usually the value of abbr is an abbreviation or acronym, but
  be any text that's appropriate contextually."
  [this]
  (-> this (.abbr)))

(defn set-abbr!
  "Property.

  A DOMString which can be used on <th> elements (not on <td>),
  an alternative label for the header cell.. This alternate label
  be used in other contexts, such as when describing the headers
  apply to a data cell. This is used to offer a shorter term for
  by screen readers in particular, and is a valuable accessibility
  Usually the value of abbr is an abbreviation or acronym, but
  be any text that's appropriate contextually."
  [this val]
  (aset this "abbr" val))

