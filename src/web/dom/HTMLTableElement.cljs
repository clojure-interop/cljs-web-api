(ns web.dom.HTMLTableElement
  "The HTMLTableElement interface provides special properties and
  (beyond the regular `web.dom.HTMLElement` object interface it
  has available to it by inheritance) for manipulating the layout
  presentation of tables in an HTML document."
  (:refer-clojure :exclude []))

(defn create-t-head
  "Method.

  The HTMLTableElement.createTHead() method returns the `<thead>`
  associated with a given `<table>`. If no header exists in the
  this method creates it, and then returns it.

  `HTMLTableSectionElement = table.createTHead();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead`"
  [this ]
  (-> this (.createTHead)))

(defn delete-t-head
  "Method.

  The HTMLTableElement.deleteTHead() removes the `<thead>` element
  a given `<table>`.

  `HTMLTableElement.deleteTHead();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead`"
  [this ]
  (-> this (.deleteTHead)))

(defn create-t-foot
  "Method.

  The HTMLTableElement.createTFoot() method returns the `<tfoot>`
  associated with a given `<table>`. If no footer exists in the
  this methods creates it, and then returns it.

  `HTMLTableSectionElement = table.createTFoot();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot`"
  [this ]
  (-> this (.createTFoot)))

(defn delete-t-foot
  "Method.

  The HTMLTableElement.deleteTFoot() method removes the `<tfoot>`
  from a given `<table>`.

  `HTMLTableElement.deleteTFoot();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot`"
  [this ]
  (-> this (.deleteTFoot)))

(defn create-caption
  "Method.

  The HTMLTableElement.createCaption() method returns the `<caption>`
  associated with a given `<table>`. If no <caption> element exists
  the table, this method creates it, and then returns it.

  `HTMLTableElement = table.createCaption();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createCaption`"
  [this ]
  (-> this (.createCaption)))

(defn delete-caption
  "Method.

  The HTMLTableElement.deleteCaption() method removes the `<caption>`
  from a given `<table>`. If there is no <caption> element associated
  the table, this method does nothing.

  `HTMLTableElement.deleteCaption()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteCaption`"
  [this ]
  (-> this (.deleteCaption)))

(defn insert-row
  "Method.

  The HTMLTableElement.insertRow() method inserts a new row (`<tr>`)
  a given `<table>`, and returns a reference to the new row.

  `var newRow = HTMLTableElement.insertRow(index);

  `web.dom.HTMLTableElement` is a reference to an HTML `<table>` element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow`"
  [this & args]
  (-> this .-insertRow (.apply this (clj->js args))))

(defn delete-row
  "Method.

  The HTMLTableElement.deleteRow() method removes a specific row
  from a given `<table>`.

  `HTMLTableElement.deleteRow(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteRow`"
  [this index]
  (-> this (.deleteRow index)))

(defn stop-sorting
  "Method.

  Removes the sortable attribute to all <th> elements of the table."
  [this & args]
  (-> this .-stopSorting (.apply this (clj->js args))))

(defn caption
  "Property.

  The HTMLTableElement.caption property represents the table caption.
  no caption element is associated with the table, this property
  null.

  `var string = tableElement.caption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption`"
  [this]
  (-> this (.-caption)))

(defn set-caption!
  "Property.

  The HTMLTableElement.caption property represents the table caption.
  no caption element is associated with the table, this property
  null.

  `var string = tableElement.caption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption`"
  [this val]
  (aset this "caption" val))

(defn t-head
  "Property.

  The HTMLTableElement.tHead represents the `<thead>` element of
  `<table>` . Its value will be null if there is no such element.

  `thead_element = table.tHead;
  table.tHead = thead_element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead`"
  [this]
  (-> this (.-tHead)))

(defn set-t-head!
  "Property.

  The HTMLTableElement.tHead represents the `<thead>` element of
  `<table>` . Its value will be null if there is no such element.

  `thead_element = table.tHead;
  table.tHead = thead_element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead`"
  [this val]
  (aset this "tHead" val))

(defn t-foot
  "Property.

  The HTMLTableElement.tFoot property represents the `<tfoot>`
  of a `<table>`. Its value will be null if there is no such element.

  `HTMLTableSectionElementObject = table.tFoot
  table.tFoot = HTMLTableSectionElementObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot`"
  [this]
  (-> this (.-tFoot)))

(defn set-t-foot!
  "Property.

  The HTMLTableElement.tFoot property represents the `<tfoot>`
  of a `<table>`. Its value will be null if there is no such element.

  `HTMLTableSectionElementObject = table.tFoot
  table.tFoot = HTMLTableSectionElementObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot`"
  [this val]
  (aset this "tFoot" val))

(defn rows
  "Property.

  The read-only `web.dom.HTMLTableElement` property rows returns
  live `web.dom.HTMLCollection` of all the rows in the table, including
  rows contained within any `<thead>`, `<tfoot>`, and `<tbody>`

  `HTMLCollectionObject = table.rows;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rows`"
  [this]
  (-> this (.-rows)))

(defn t-bodies
  "Property.

  The HTMLTableElement.tBodies read-only property returns a live
  of the bodies in a `<table>`.

  `HTMLCollectionObject = table.tBodies`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tBodies`"
  [this]
  (-> this (.-tBodies)))

(defn sortable
  "Property.

  Is a Boolean value indicating if the user agent is allowed to
  sorting mechanism for the table, if it supports such a feature.
  property reflects the sortable attribute."
  [this]
  (-> this (.-sortable)))

(defn set-sortable!
  "Property.

  Is a Boolean value indicating if the user agent is allowed to
  sorting mechanism for the table, if it supports such a feature.
  property reflects the sortable attribute."
  [this val]
  (aset this "sortable" val))

(defn align
  "Property.

  The HTMLTableElement.align property represents the alignment
  the table.

  `HTMLTableElement.align = alignment;
  var alignment = HTMLTableElement.align;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/align`"
  [this]
  (-> this (.-align)))

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
  (-> this (.-bgColor)))

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
  the `<table>` element.

  `HTMLTableElement.border = border;
  var border = HTMLTableElement.border;


  border is a string representing the width of the border in pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/border`"
  [this]
  (-> this (.-border)))

(defn set-border!
  "Property.

  The HTMLTableElement.border property represents the border width
  the `<table>` element.

  `HTMLTableElement.border = border;
  var border = HTMLTableElement.border;


  border is a string representing the width of the border in pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/border`"
  [this val]
  (aset this "border" val))

(defn cell-padding
  "Property.

  The HTMLTableElement.cellPadding property represents the padding
  the individual cells of the table.

  `HTMLTableElement.cellPadding = padding;
  var padding = HTMLTableElement.cellPadding;


  padding is either a number of pixels (e.g. \\\"10\\\") or a percentage value (e.g. \\\"10%\\\").`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellPadding`"
  [this]
  (-> this (.-cellPadding)))

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

  While you should instead use the CSS `border-spacing` property,
  obsolete `web.dom.HTMLTableElement` interface's cellSpacing property
  the spacing around the individual `<th>` and `<td>` elements
  a table's cells.

  `HTMLTableElement.cellSpacing = spacing;
  var spacing = HTMLTableElement.cellSpacing;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellSpacing`"
  [this]
  (-> this (.-cellSpacing)))

(defn set-cell-spacing!
  "Property.

  While you should instead use the CSS `border-spacing` property,
  obsolete `web.dom.HTMLTableElement` interface's cellSpacing property
  the spacing around the individual `<th>` and `<td>` elements
  a table's cells.

  `HTMLTableElement.cellSpacing = spacing;
  var spacing = HTMLTableElement.cellSpacing;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellSpacing`"
  [this val]
  (aset this "cellSpacing" val))

(defn frame
  "Property.

  The `web.dom.HTMLTableElement` interface's frame property is
  string that indicates which of the table's exterior borders should
  drawn.

  `HTMLTableElement.frame = frameSides;
  var frameSides = HTMLTableElement.frame;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/frame`"
  [this]
  (-> this (.-frame)))

(defn set-frame!
  "Property.

  The `web.dom.HTMLTableElement` interface's frame property is
  string that indicates which of the table's exterior borders should
  drawn.

  `HTMLTableElement.frame = frameSides;
  var frameSides = HTMLTableElement.frame;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/frame`"
  [this val]
  (aset this "frame" val))

(defn rules
  "Property.

  The HTMLTableElement.rules property indicates which cell borders
  render in the table.

  `HTMLTableElement.rules = rules;
  var rules = HTMLTableElement.rules;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rules`"
  [this]
  (-> this (.-rules)))

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
  (-> this (.-summary)))

(defn set-summary!
  "Property.

  The HTMLTableElement.summary property represents the table description.

  `HTMLTableElement.summary = string;
  varstring = HTMLTableElement.summary;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/summary`"
  [this val]
  (aset this "summary" val))

(defn width
  "Property.

  The HTMLTableElement.width property represents the desired width
  the table.

  `HTMLTableElement.width = width;
  var width = HTMLTableElement.width;

  Where width is a string representing the width in number of pixels or as a percentage value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/width`"
  [this]
  (-> this (.-width)))

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

