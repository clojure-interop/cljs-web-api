(ns web.dom.HTMLTableDataCellElement
  "Inherits properties from its parent, `web.dom.HTMLTableCellElement`,
  `web.dom.HTMLElement`."
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

