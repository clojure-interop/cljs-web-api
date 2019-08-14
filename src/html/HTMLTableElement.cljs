(ns html.HTMLTableElement
  "The HTMLTableElement interface provides special properties and
  (beyond the regular `html.HTMLElement` object interface it also
  available to it by inheritance) for manipulating the layout and
  of tables in an HTML document."
  (:refer-clojure :exclude []))

(defn create-caption
  "Method.

  The HTMLTableElement.createCaption() method returns the `web.<caption>`
  associated with a given `web.<table>`. If no <caption> element
  on the table, this method creates it, and then returns it.

  `HTMLTableElement = table.createCaption();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createCaption`"
  [this ]
  (-> this (.createCaption)))

(defn create-t-foot
  "Method.

  The HTMLTableElement.createTFoot() method returns the `web.<tfoot>`
  associated with a given `web.<table>`. If no footer exists in
  table, this methods creates it, and then returns it.

  `HTMLTableSectionElement = table.createTFoot();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot`"
  [this ]
  (-> this (.createTFoot)))

(defn create-t-head
  "Method.

  The HTMLTableElement.createTHead() method returns the `web.<thead>`
  associated with a given `web.<table>`. If no header exists in
  table, this method creates it, and then returns it.

  `HTMLTableSectionElement = table.createTHead();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead`"
  [this ]
  (-> this (.createTHead)))

(defn delete-caption
  "Method.

  The HTMLTableElement.deleteCaption() method removes the `web.<caption>`
  from a given `web.<table>`. If there is no <caption> element
  with the table, this method does nothing.

  `HTMLTableElement.deleteCaption()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteCaption`"
  [this ]
  (-> this (.deleteCaption)))

(defn delete-row
  "Method.

  The HTMLTableElement.deleteRow() method removes a specific row
  from a given `web.<table>`.

  `HTMLTableElement.deleteRow(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteRow`"
  [this index]
  (-> this (.deleteRow index)))

(defn delete-t-foot
  "Method.

  The HTMLTableElement.deleteTFoot() method removes the `web.<tfoot>`
  from a given `web.<table>`.

  `HTMLTableElement.deleteTFoot();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot`"
  [this ]
  (-> this (.deleteTFoot)))

(defn delete-t-head
  "Method.

  The HTMLTableElement.deleteTHead() removes the `web.<thead>`
  from a given `web.<table>`.

  `HTMLTableElement.deleteTHead();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead`"
  [this ]
  (-> this (.deleteTHead)))

(defn insert-row
  "Method.

  The HTMLTableElement.insertRow() method inserts a new row (`web.<tr>`)
  a given `web.<table>`, and returns a reference to the new row.

  `var newRow = HTMLTableElement.insertRow(index);

  `html.HTMLTableElement` is a reference to an HTML `web.<table>` element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow`"
  [this & args]
  (apply (-> this .-insertRow) (concat [this] args)))

(defn align
  "Property.

  The HTMLTableElement.align property represents the alignment
  the table.

  `HTMLTableElement.align = alignment;
  var alignment = HTMLTableElement.align;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/align`"
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  The HTMLTableElement.align property represents the alignment
  the table.

  `HTMLTableElement.align = alignment;
  var alignment = HTMLTableElement.align;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/align`"
  [this val]
  (aset this "align" val))

(defn bg-color
  "Property.

  The HTMLTableElement.bgcolor property represents the background
  of the table.

  `color = table.bgColor
  table.bgColor = color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/bgColor`"
  [this]
  (-> this (.bgColor)))

(defn set-bg-color!
  "Property.

  The HTMLTableElement.bgcolor property represents the background
  of the table.

  `color = table.bgColor
  table.bgColor = color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/bgColor`"
  [this val]
  (aset this "bgColor" val))

(defn border
  "Property.

  The HTMLTableElement.border property represents the border width
  the `web.<table>` element.

  `HTMLTableElement.border = border;
  var border = HTMLTableElement.border;


  border is a string representing the width of the border in pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/border`"
  [this]
  (-> this (.border)))

(defn set-border!
  "Property.

  The HTMLTableElement.border property represents the border width
  the `web.<table>` element.

  `HTMLTableElement.border = border;
  var border = HTMLTableElement.border;


  border is a string representing the width of the border in pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/border`"
  [this val]
  (aset this "border" val))

(defn caption
  "Property.

  The HTMLTableElement.caption property represents the table caption.
  no caption element is associated with the table, this property
  null.

  `var string = tableElement.caption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption`"
  [this]
  (-> this (.caption)))

(defn set-caption!
  "Property.

  The HTMLTableElement.caption property represents the table caption.
  no caption element is associated with the table, this property
  null.

  `var string = tableElement.caption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption`"
  [this val]
  (aset this "caption" val))

(defn cell-padding
  "Property.

  The HTMLTableElement.cellPadding property represents the padding
  the individual cells of the table.

  `HTMLTableElement.cellPadding = padding;
  var padding = HTMLTableElement.cellPadding;


  padding is either a number of pixels (e.g. \\\"10\\\") or a percentage value (e.g. \\\"10%\\\").`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellPadding`"
  [this]
  (-> this (.cellPadding)))

(defn set-cell-padding!
  "Property.

  The HTMLTableElement.cellPadding property represents the padding
  the individual cells of the table.

  `HTMLTableElement.cellPadding = padding;
  var padding = HTMLTableElement.cellPadding;


  padding is either a number of pixels (e.g. \\\"10\\\") or a percentage value (e.g. \\\"10%\\\").`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellPadding`"
  [this val]
  (aset this "cellPadding" val))

(defn cell-spacing
  "Property.

  While you should instead use the CSS `web.border-spacing` property,
  obsolete `html.HTMLTableElement` interface's cellSpacing property
  the spacing around the individual `web.<th>` and `web.<td>` elements
  a table's cells.

  `HTMLTableElement.cellSpacing = spacing;
  var spacing = HTMLTableElement.cellSpacing;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellSpacing`"
  [this]
  (-> this (.cellSpacing)))

(defn set-cell-spacing!
  "Property.

  While you should instead use the CSS `web.border-spacing` property,
  obsolete `html.HTMLTableElement` interface's cellSpacing property
  the spacing around the individual `web.<th>` and `web.<td>` elements
  a table's cells.

  `HTMLTableElement.cellSpacing = spacing;
  var spacing = HTMLTableElement.cellSpacing;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellSpacing`"
  [this val]
  (aset this "cellSpacing" val))

(defn frame
  "Property.

  The `html.HTMLTableElement` interface's frame property is a string
  indicates which of the table's exterior borders should be drawn.

  `HTMLTableElement.frame = frameSides;
  var frameSides = HTMLTableElement.frame;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/frame`"
  [this]
  (-> this (.frame)))

(defn set-frame!
  "Property.

  The `html.HTMLTableElement` interface's frame property is a string
  indicates which of the table's exterior borders should be drawn.

  `HTMLTableElement.frame = frameSides;
  var frameSides = HTMLTableElement.frame;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/frame`"
  [this val]
  (aset this "frame" val))

(defn rows
  "Property.

  The read-only `html.HTMLTableElement` property rows returns a
  `html.HTMLCollection` of all the rows in the table, including
  rows contained within any `web.<thead>`, `web.<tfoot>`, and `web.<tbody>`

  `HTMLCollectionObject = table.rows;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rows`"
  [this]
  (-> this (.rows)))

(defn rules
  "Property.

  The HTMLTableElement.rules property indicates which cell borders
  render in the table.

  `HTMLTableElement.rules = rules;
  var rules = HTMLTableElement.rules;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rules`"
  [this]
  (-> this (.rules)))

(defn set-rules!
  "Property.

  The HTMLTableElement.rules property indicates which cell borders
  render in the table.

  `HTMLTableElement.rules = rules;
  var rules = HTMLTableElement.rules;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rules`"
  [this val]
  (aset this "rules" val))

(defn summary
  "Property.

  The HTMLTableElement.summary property represents the table description.

  `HTMLTableElement.summary = string;
  varstring = HTMLTableElement.summary;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/summary`"
  [this]
  (-> this (.summary)))

(defn set-summary!
  "Property.

  The HTMLTableElement.summary property represents the table description.

  `HTMLTableElement.summary = string;
  varstring = HTMLTableElement.summary;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/summary`"
  [this val]
  (aset this "summary" val))

(defn t-bodies
  "Property.

  The HTMLTableElement.tBodies read-only property returns a live
  of the bodies in a `web.<table>`.

  `HTMLCollectionObject = table.tBodies`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tBodies`"
  [this]
  (-> this (.tBodies)))

(defn t-foot
  "Property.

  The HTMLTableElement.tFoot property represents the `web.<tfoot>`
  of a `web.<table>`. Its value will be null if there is no such

  `HTMLTableSectionElementObject = table.tFoot
  table.tFoot = HTMLTableSectionElementObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot`"
  [this]
  (-> this (.tFoot)))

(defn set-t-foot!
  "Property.

  The HTMLTableElement.tFoot property represents the `web.<tfoot>`
  of a `web.<table>`. Its value will be null if there is no such

  `HTMLTableSectionElementObject = table.tFoot
  table.tFoot = HTMLTableSectionElementObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot`"
  [this val]
  (aset this "tFoot" val))

(defn t-head
  "Property.

  The HTMLTableElement.tHead represents the `web.<thead>` element
  a `web.<table>` . Its value will be null if there is no such

  `thead_element = table.tHead;
  table.tHead = thead_element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead`"
  [this]
  (-> this (.tHead)))

(defn set-t-head!
  "Property.

  The HTMLTableElement.tHead represents the `web.<thead>` element
  a `web.<table>` . Its value will be null if there is no such

  `thead_element = table.tHead;
  table.tHead = thead_element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead`"
  [this val]
  (aset this "tHead" val))

(defn width
  "Property.

  The HTMLTableElement.width property represents the desired width
  the table.

  `HTMLTableElement.width = width;
  var width = HTMLTableElement.width;

  Where width is a string representing the width in number of pixels or as a percentage value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The HTMLTableElement.width property represents the desired width
  the table.

  `HTMLTableElement.width = width;
  var width = HTMLTableElement.width;

  Where width is a string representing the width in number of pixels or as a percentage value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/width`"
  [this val]
  (aset this "width" val))

