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
  (-> this .-deleteRow (.apply this (clj->js args))))

(defn insert-row
  "Method.

  Inserts a new row just before the given position in the section.
  the given position is not given or is -1, it appends the row
  the end of section. If the given position is greater (or equal
  it starts at zero) than the amount of rows in the section, or
  smaller than -1, it raises a DOMException with the IndexSizeError"
  [this & args]
  (-> this .-insertRow (.apply this (clj->js args))))

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

(defn rows
  "Property.

  Returns a live HTMLCollection containing the rows in the section.
  HTMLCollection is live and is automatically updated when rows
  added or removed."
  [this]
  (-> this (.-rows)))

(defn set-rows!
  "Property.

  Returns a live HTMLCollection containing the rows in the section.
  HTMLCollection is live and is automatically updated when rows
  added or removed."
  [this val]
  (aset this "rows" val))

(defn ch
  "Property.

  Is a DOMString containing one single chararcter. This character
  the one to align all the cell of a column on. It reflects the
  and default to the decimal points associated with the language,
  '.' for English, or ',' for French. This property was optional
  was not very well supported."
  [this]
  (-> this (.-ch)))

(defn set-ch!
  "Property.

  Is a DOMString containing one single chararcter. This character
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

