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
  (-> this (.-abbr)))

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

(defn cell-index
  "Property.

  A long integer representing the cell's position in the cells
  of the <tr> the cell is contained within. If the cell doesn't
  to a <tr>, it returns -1."
  [this]
  (-> this (.-cellIndex)))

(defn set-cell-index!
  "Property.

  A long integer representing the cell's position in the cells
  of the <tr> the cell is contained within. If the cell doesn't
  to a <tr>, it returns -1."
  [this val]
  (aset this "cellIndex" val))

(defn col-span
  "Property.

  An unsigned long integer indicating the number of columns this
  must span; this lets the cell occupy space across multiple columns
  the table. It reflects the colspan attribute."
  [this]
  (-> this (.-colSpan)))

(defn set-col-span!
  "Property.

  An unsigned long integer indicating the number of columns this
  must span; this lets the cell occupy space across multiple columns
  the table. It reflects the colspan attribute."
  [this val]
  (aset this "colSpan" val))

(defn headers
  "Property.

  Is a DOMSettableTokenList describing a list of id of <th> elements
  represents headers associated with the cell. It reflects the
  attribute."
  [this]
  (-> this (.-headers)))

(defn set-headers!
  "Property.

  Is a DOMSettableTokenList describing a list of id of <th> elements
  represents headers associated with the cell. It reflects the
  attribute."
  [this val]
  (aset this "headers" val))

(defn row-span
  "Property.

  An unsigned long integer indicating the number of rows this cell
  span; this lets a cell occupy space across multiple rows of the
  It reflects the rowspan attribute."
  [this]
  (-> this (.-rowSpan)))

(defn set-row-span!
  "Property.

  An unsigned long integer indicating the number of rows this cell
  span; this lets a cell occupy space across multiple rows of the
  It reflects the rowspan attribute."
  [this val]
  (aset this "rowSpan" val))

(defn scope
  "Property.

  A DOMString indicating the scope of a <th> cell. Header cells
  be configured, using the scope property, the apply to a specified
  or column, or to the not-yet-scoped cells within the current
  group (that is, the same ancestor <thead>, <tbody>, or <tfoot>
  If no value is specified for scope, the header is not associated
  with cells in this way. Permitted values for scope are:
  col
  The header cell applies to the following cells in the same column
  columns, if colspan is used as well), until either the end of
  column or another <th> in the column establishes a new scope.
  colgroup
  The header cell applies to all cells in the current column group
  do not already have a scope applied to them. This value is only
  if the cell is in a column group.
  row
  The header cell applies to the following cells in the same row
  rows, if rowspan is used as well), until either the end of the
  or another <th> in the same row establishes a new scope.
  rowgroup
  The header cell applies to all cells in the current row group
  do not already have a scope applied to them. This value is only
  if the cell is in a row group.
  The empty string (\"\")
  The header cell has no predefined scope; the user agent will
  the scope based on contextual clues."
  [this]
  (-> this (.-scope)))

(defn set-scope!
  "Property.

  A DOMString indicating the scope of a <th> cell. Header cells
  be configured, using the scope property, the apply to a specified
  or column, or to the not-yet-scoped cells within the current
  group (that is, the same ancestor <thead>, <tbody>, or <tfoot>
  If no value is specified for scope, the header is not associated
  with cells in this way. Permitted values for scope are:
  col
  The header cell applies to the following cells in the same column
  columns, if colspan is used as well), until either the end of
  column or another <th> in the column establishes a new scope.
  colgroup
  The header cell applies to all cells in the current column group
  do not already have a scope applied to them. This value is only
  if the cell is in a column group.
  row
  The header cell applies to the following cells in the same row
  rows, if rowspan is used as well), until either the end of the
  or another <th> in the same row establishes a new scope.
  rowgroup
  The header cell applies to all cells in the current row group
  do not already have a scope applied to them. This value is only
  if the cell is in a row group.
  The empty string (\"\")
  The header cell has no predefined scope; the user agent will
  the scope based on contextual clues."
  [this val]
  (aset this "scope" val))

