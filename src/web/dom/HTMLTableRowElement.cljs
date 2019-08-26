(ns web.dom.HTMLTableRowElement
  "The HTMLTableRowElement interface provides special properties
  methods (beyond the `web.dom.HTMLElement` interface it also has
  to it by inheritance) for manipulating the layout and presentation
  rows in an HTML table."
  (:refer-clojure :exclude []))

(defn delete-cell
  "Method.

  Removes the cell at the given position in the row. If the given
  is greater (or equal as it starts at zero) than the amount of
  in the row, or is smaller than 0, it raises a DOMException with
  IndexSizeError value."
  [this & args]
  (apply (-> this .-deleteCell) (concat [this] args)))

(defn insert-cell
  "Method.

  The HTMLTableRowElement.insertCell() method inserts a new cell
  into a table row (`<tr>`) and returns a reference to the cell.

  `var newCell = HTMLTableRowElement.insertCell(index);

  `web.dom.HTMLTableRowElement` is a reference to an HTML `<tr>` element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell`"
  [this & args]
  (apply (-> this .-insertCell) (concat [this] args)))

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

(defn row-index
  "Property.

  The HTMLTableRowElement.rowIndex read-only property represents
  position of a row in relation to the whole `<table>`.

  `var index = HTMLTableRowElement.rowIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`"
  [this]
  (-> this (.rowIndex)))

(defn set-row-index!
  "Property.

  The HTMLTableRowElement.rowIndex read-only property represents
  position of a row in relation to the whole `<table>`.

  `var index = HTMLTableRowElement.rowIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`"
  [this val]
  (aset this "rowIndex" val))

