(ns html.HTMLTableRowElement
  "The HTMLTableRowElement interface provides special properties
  methods (beyond the `html.HTMLElement` interface it also has
  to it by inheritance) for manipulating the layout and presentation
  rows in an HTML table."
  (:refer-clojure :exclude []))

(defn insert-cell
  "Method.

  The HTMLTableRowElement.insertCell() method inserts a new cell
  into a table row (`web.<tr>`) and returns a reference to the

  `var newCell = HTMLTableRowElement.insertCell(index);

  `html.HTMLTableRowElement` is a reference to an HTML `web.<tr>` element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell`"
  [this & args]
  (apply (-> this .-insertCell) (concat [this] args)))

(defn row-index
  "Property.

  The HTMLTableRowElement.rowIndex read-only property represents
  position of a row in relation to the whole `web.<table>`.

  `var index = HTMLTableRowElement.rowIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`"
  [this]
  (-> this (.rowIndex)))

(defn set-row-index!
  "Property.

  The HTMLTableRowElement.rowIndex read-only property represents
  position of a row in relation to the whole `web.<table>`.

  `var index = HTMLTableRowElement.rowIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`"
  [this val]
  (aset this "rowIndex" val))

