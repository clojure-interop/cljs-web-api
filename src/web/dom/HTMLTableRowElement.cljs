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
  (-> this .-deleteCell (.apply this (clj->js args))))

(defn insert-cell
  "Method.

  The HTMLTableRowElement.insertCell() method inserts a new cell
  into a table row (`<tr>`) and returns a reference to the cell.

  `var newCell = HTMLTableRowElement.insertCell(index);

  `web.dom.HTMLTableRowElement` is a reference to an HTML `<tr>` element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell`"
  [this & args]
  (-> this .-insertCell (.apply this (clj->js args))))

(defn align
  "Property.

  Is a DOMString containing an enumerated value reflecting the
  attribute. It indicates the alignment of the element's contents
  respect to the surrounding context. The possible values are \"left\",
  and \"center\"."
  [this]
  (-> this (.-align)))

(defn set-align!
  "Property.

  Is a DOMString containing an enumerated value reflecting the
  attribute. It indicates the alignment of the element's contents
  respect to the surrounding context. The possible values are \"left\",
  and \"center\"."
  [this val]
  (aset this "align" val))

(defn bg-color
  "Property.

  Is a DOMString containing the background color of the cells.
  reflects the obsolete bgcolor attribute."
  [this]
  (-> this (.-bgColor)))

(defn set-bg-color!
  "Property.

  Is a DOMString containing the background color of the cells.
  reflects the obsolete bgcolor attribute."
  [this val]
  (aset this "bgColor" val))

(defn cells
  "Property.

  Returns a live HTMLCollection containing the cells in the row.
  HTMLCollection is live and is automatically updated when cells
  added or removed."
  [this]
  (-> this (.-cells)))

(defn set-cells!
  "Property.

  Returns a live HTMLCollection containing the cells in the row.
  HTMLCollection is live and is automatically updated when cells
  added or removed."
  [this val]
  (aset this "cells" val))

(defn ch
  "Property.

  Is a DOMString containing one single character. This character
  the one to align all the cell of a column on. It reflects the
  and default to the decimal points associated with the language,
  '.' for English, or ',' for French. This property was optional
  was not very well supported."
  [this]
  (-> this (.-ch)))

(defn set-ch!
  "Property.

  Is a DOMString containing one single character. This character
  the one to align all the cell of a column on. It reflects the
  and default to the decimal points associated with the language,
  '.' for English, or ',' for French. This property was optional
  was not very well supported."
  [this val]
  (aset this "ch" val))

(defn ch-off
  "Property.

  Is a DOMString containing a integer indicating how many characters
  be left at the right (for left-to-right scripts; or at the left
  right-to-left scripts) of the character defined by HTMLTableRowElement.ch.
  property was optional and was not very well supported."
  [this]
  (-> this (.-chOff)))

(defn set-ch-off!
  "Property.

  Is a DOMString containing a integer indicating how many characters
  be left at the right (for left-to-right scripts; or at the left
  right-to-left scripts) of the character defined by HTMLTableRowElement.ch.
  property was optional and was not very well supported."
  [this val]
  (aset this "chOff" val))

(defn row-index
  "Property.

  [Read Only]

  The HTMLTableRowElement.rowIndex read-only property represents
  position of a row in relation to the whole `<table>`.

  `var index = HTMLTableRowElement.rowIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/rowIndex`"
  [this]
  (-> this (.-rowIndex)))

(defn section-row-index
  "Property.

  Returns a long value which gives the logical position of the
  within the table section it belongs to. If the row is not part
  a section, returns -1."
  [this]
  (-> this (.-sectionRowIndex)))

(defn set-section-row-index!
  "Property.

  Returns a long value which gives the logical position of the
  within the table section it belongs to. If the row is not part
  a section, returns -1."
  [this val]
  (aset this "sectionRowIndex" val))

(defn v-align
  "Property.

  Is a DOMString representing an enumerated value indicating how
  content of the cell must be vertically aligned. It reflects the
  attribute and can have one of the following values: \"top\", \"middle\",
  or \"baseline\"."
  [this]
  (-> this (.-vAlign)))

(defn set-v-align!
  "Property.

  Is a DOMString representing an enumerated value indicating how
  content of the cell must be vertically aligned. It reflects the
  attribute and can have one of the following values: \"top\", \"middle\",
  or \"baseline\"."
  [this val]
  (aset this "vAlign" val))

