// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLTableElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLTableElement.createCaption() method returns the `web.<caption>`
 *   associated with a given `web.<table>`. If no <caption> element
 *   on the table, this method creates it, and then returns it.
 * 
 *   `HTMLTableElement = table.createCaption();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createCaption`
 */
html.HTMLTableElement.create_caption = (function html$HTMLTableElement$create_caption(this$){
return this$.createCaption();
});
/**
 * Method.
 * 
 *   The HTMLTableElement.createTFoot() method returns the `web.<tfoot>`
 *   associated with a given `web.<table>`. If no footer exists in
 *   table, this methods creates it, and then returns it.
 * 
 *   `HTMLTableSectionElement = table.createTFoot();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot`
 */
html.HTMLTableElement.create_t_foot = (function html$HTMLTableElement$create_t_foot(this$){
return this$.createTFoot();
});
/**
 * Method.
 * 
 *   The HTMLTableElement.createTHead() method returns the `web.<thead>`
 *   associated with a given `web.<table>`. If no header exists in
 *   table, this method creates it, and then returns it.
 * 
 *   `HTMLTableSectionElement = table.createTHead();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead`
 */
html.HTMLTableElement.create_t_head = (function html$HTMLTableElement$create_t_head(this$){
return this$.createTHead();
});
/**
 * Method.
 * 
 *   The HTMLTableElement.deleteCaption() method removes the `web.<caption>`
 *   from a given `web.<table>`. If there is no <caption> element
 *   with the table, this method does nothing.
 * 
 *   `HTMLTableElement.deleteCaption()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteCaption`
 */
html.HTMLTableElement.delete_caption = (function html$HTMLTableElement$delete_caption(this$){
return this$.deleteCaption();
});
/**
 * Method.
 * 
 *   The HTMLTableElement.deleteRow() method removes a specific row
 *   from a given `web.<table>`.
 * 
 *   `HTMLTableElement.deleteRow(index)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteRow`
 */
html.HTMLTableElement.delete_row = (function html$HTMLTableElement$delete_row(this$,index){
return this$.deleteRow(index);
});
/**
 * Method.
 * 
 *   The HTMLTableElement.deleteTFoot() method removes the `web.<tfoot>`
 *   from a given `web.<table>`.
 * 
 *   `HTMLTableElement.deleteTFoot();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot`
 */
html.HTMLTableElement.delete_t_foot = (function html$HTMLTableElement$delete_t_foot(this$){
return this$.deleteTFoot();
});
/**
 * Method.
 * 
 *   The HTMLTableElement.deleteTHead() removes the `web.<thead>`
 *   from a given `web.<table>`.
 * 
 *   `HTMLTableElement.deleteTHead();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead`
 */
html.HTMLTableElement.delete_t_head = (function html$HTMLTableElement$delete_t_head(this$){
return this$.deleteTHead();
});
/**
 * Method.
 * 
 *   The HTMLTableElement.insertRow() method inserts a new row (`web.<tr>`)
 *   a given `web.<table>`, and returns a reference to the new row.
 * 
 *   `var newRow = HTMLTableElement.insertRow(index);
 * 
 *   `html.HTMLTableElement` is a reference to an HTML `web.<table>` element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow`
 */
html.HTMLTableElement.insert_row = (function html$HTMLTableElement$insert_row(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44814 = arguments.length;
var i__42557__auto___44815 = (0);
while(true){
if((i__42557__auto___44815 < len__42556__auto___44814)){
args__42563__auto__.push((arguments[i__42557__auto___44815]));

var G__44816 = (i__42557__auto___44815 + (1));
i__42557__auto___44815 = G__44816;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLTableElement.insert_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLTableElement.insert_row.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.insertRow,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLTableElement.insert_row.cljs$lang$maxFixedArity = (1);

html.HTMLTableElement.insert_row.cljs$lang$applyTo = (function (seq44812){
var G__44813 = cljs.core.first.call(null,seq44812);
var seq44812__$1 = cljs.core.next.call(null,seq44812);
return html.HTMLTableElement.insert_row.cljs$core$IFn$_invoke$arity$variadic(G__44813,seq44812__$1);
});

/**
 * Property.
 * 
 *   The HTMLTableElement.align property represents the alignment
 *   the table.
 * 
 *   `HTMLTableElement.align = alignment;
 *   var alignment = HTMLTableElement.align;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/align`
 */
html.HTMLTableElement.align = (function html$HTMLTableElement$align(this$){
return this$.align();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.align property represents the alignment
 *   the table.
 * 
 *   `HTMLTableElement.align = alignment;
 *   var alignment = HTMLTableElement.align;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/align`
 */
html.HTMLTableElement.set_align_BANG_ = (function html$HTMLTableElement$set_align_BANG_(this$,val){
return (this$["align"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.bgcolor property represents the background
 *   of the table.
 * 
 *   `color = table.bgColor
 *   table.bgColor = color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/bgColor`
 */
html.HTMLTableElement.bg_color = (function html$HTMLTableElement$bg_color(this$){
return this$.bgColor();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.bgcolor property represents the background
 *   of the table.
 * 
 *   `color = table.bgColor
 *   table.bgColor = color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/bgColor`
 */
html.HTMLTableElement.set_bg_color_BANG_ = (function html$HTMLTableElement$set_bg_color_BANG_(this$,val){
return (this$["bgColor"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.border property represents the border width
 *   the `web.<table>` element.
 * 
 *   `HTMLTableElement.border = border;
 *   var border = HTMLTableElement.border;
 * 
 * 
 *   border is a string representing the width of the border in pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/border`
 */
html.HTMLTableElement.border = (function html$HTMLTableElement$border(this$){
return this$.border();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.border property represents the border width
 *   the `web.<table>` element.
 * 
 *   `HTMLTableElement.border = border;
 *   var border = HTMLTableElement.border;
 * 
 * 
 *   border is a string representing the width of the border in pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/border`
 */
html.HTMLTableElement.set_border_BANG_ = (function html$HTMLTableElement$set_border_BANG_(this$,val){
return (this$["border"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.caption property represents the table caption.
 *   no caption element is associated with the table, this property
 *   null.
 * 
 *   `var string = tableElement.caption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption`
 */
html.HTMLTableElement.caption = (function html$HTMLTableElement$caption(this$){
return this$.caption();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.caption property represents the table caption.
 *   no caption element is associated with the table, this property
 *   null.
 * 
 *   `var string = tableElement.caption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption`
 */
html.HTMLTableElement.set_caption_BANG_ = (function html$HTMLTableElement$set_caption_BANG_(this$,val){
return (this$["caption"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.cellPadding property represents the padding
 *   the individual cells of the table.
 * 
 *   `HTMLTableElement.cellPadding = padding;
 *   var padding = HTMLTableElement.cellPadding;
 * 
 * 
 *   padding is either a number of pixels (e.g. \"10\") or a percentage value (e.g. \"10%\").`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellPadding`
 */
html.HTMLTableElement.cell_padding = (function html$HTMLTableElement$cell_padding(this$){
return this$.cellPadding();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.cellPadding property represents the padding
 *   the individual cells of the table.
 * 
 *   `HTMLTableElement.cellPadding = padding;
 *   var padding = HTMLTableElement.cellPadding;
 * 
 * 
 *   padding is either a number of pixels (e.g. \"10\") or a percentage value (e.g. \"10%\").`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellPadding`
 */
html.HTMLTableElement.set_cell_padding_BANG_ = (function html$HTMLTableElement$set_cell_padding_BANG_(this$,val){
return (this$["cellPadding"] = val);
});
/**
 * Property.
 * 
 *   While you should instead use the CSS `web.border-spacing` property,
 *   obsolete `html.HTMLTableElement` interface's cellSpacing property
 *   the spacing around the individual `web.<th>` and `web.<td>` elements
 *   a table's cells.
 * 
 *   `HTMLTableElement.cellSpacing = spacing;
 *   var spacing = HTMLTableElement.cellSpacing;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellSpacing`
 */
html.HTMLTableElement.cell_spacing = (function html$HTMLTableElement$cell_spacing(this$){
return this$.cellSpacing();
});
/**
 * Property.
 * 
 *   While you should instead use the CSS `web.border-spacing` property,
 *   obsolete `html.HTMLTableElement` interface's cellSpacing property
 *   the spacing around the individual `web.<th>` and `web.<td>` elements
 *   a table's cells.
 * 
 *   `HTMLTableElement.cellSpacing = spacing;
 *   var spacing = HTMLTableElement.cellSpacing;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/cellSpacing`
 */
html.HTMLTableElement.set_cell_spacing_BANG_ = (function html$HTMLTableElement$set_cell_spacing_BANG_(this$,val){
return (this$["cellSpacing"] = val);
});
/**
 * Property.
 * 
 *   The `html.HTMLTableElement` interface's frame property is a string
 *   indicates which of the table's exterior borders should be drawn.
 * 
 *   `HTMLTableElement.frame = frameSides;
 *   var frameSides = HTMLTableElement.frame;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/frame`
 */
html.HTMLTableElement.frame = (function html$HTMLTableElement$frame(this$){
return this$.frame();
});
/**
 * Property.
 * 
 *   The `html.HTMLTableElement` interface's frame property is a string
 *   indicates which of the table's exterior borders should be drawn.
 * 
 *   `HTMLTableElement.frame = frameSides;
 *   var frameSides = HTMLTableElement.frame;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/frame`
 */
html.HTMLTableElement.set_frame_BANG_ = (function html$HTMLTableElement$set_frame_BANG_(this$,val){
return (this$["frame"] = val);
});
/**
 * Property.
 * 
 *   The read-only `html.HTMLTableElement` property rows returns a
 *   `html.HTMLCollection` of all the rows in the table, including
 *   rows contained within any `web.<thead>`, `web.<tfoot>`, and `web.<tbody>`
 * 
 *   `HTMLCollectionObject = table.rows;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rows`
 */
html.HTMLTableElement.rows = (function html$HTMLTableElement$rows(this$){
return this$.rows();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.rules property indicates which cell borders
 *   render in the table.
 * 
 *   `HTMLTableElement.rules = rules;
 *   var rules = HTMLTableElement.rules;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rules`
 */
html.HTMLTableElement.rules = (function html$HTMLTableElement$rules(this$){
return this$.rules();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.rules property indicates which cell borders
 *   render in the table.
 * 
 *   `HTMLTableElement.rules = rules;
 *   var rules = HTMLTableElement.rules;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rules`
 */
html.HTMLTableElement.set_rules_BANG_ = (function html$HTMLTableElement$set_rules_BANG_(this$,val){
return (this$["rules"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.summary property represents the table description.
 * 
 *   `HTMLTableElement.summary = string;
 *   varstring = HTMLTableElement.summary;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/summary`
 */
html.HTMLTableElement.summary = (function html$HTMLTableElement$summary(this$){
return this$.summary();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.summary property represents the table description.
 * 
 *   `HTMLTableElement.summary = string;
 *   varstring = HTMLTableElement.summary;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/summary`
 */
html.HTMLTableElement.set_summary_BANG_ = (function html$HTMLTableElement$set_summary_BANG_(this$,val){
return (this$["summary"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.tBodies read-only property returns a live
 *   of the bodies in a `web.<table>`.
 * 
 *   `HTMLCollectionObject = table.tBodies`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tBodies`
 */
html.HTMLTableElement.t_bodies = (function html$HTMLTableElement$t_bodies(this$){
return this$.tBodies();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.tFoot property represents the `web.<tfoot>`
 *   of a `web.<table>`. Its value will be null if there is no such
 * 
 *   `HTMLTableSectionElementObject = table.tFoot
 *   table.tFoot = HTMLTableSectionElementObject`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot`
 */
html.HTMLTableElement.t_foot = (function html$HTMLTableElement$t_foot(this$){
return this$.tFoot();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.tFoot property represents the `web.<tfoot>`
 *   of a `web.<table>`. Its value will be null if there is no such
 * 
 *   `HTMLTableSectionElementObject = table.tFoot
 *   table.tFoot = HTMLTableSectionElementObject`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot`
 */
html.HTMLTableElement.set_t_foot_BANG_ = (function html$HTMLTableElement$set_t_foot_BANG_(this$,val){
return (this$["tFoot"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.tHead represents the `web.<thead>` element
 *   a `web.<table>` . Its value will be null if there is no such
 * 
 *   `thead_element = table.tHead;
 *   table.tHead = thead_element;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead`
 */
html.HTMLTableElement.t_head = (function html$HTMLTableElement$t_head(this$){
return this$.tHead();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.tHead represents the `web.<thead>` element
 *   a `web.<table>` . Its value will be null if there is no such
 * 
 *   `thead_element = table.tHead;
 *   table.tHead = thead_element;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead`
 */
html.HTMLTableElement.set_t_head_BANG_ = (function html$HTMLTableElement$set_t_head_BANG_(this$,val){
return (this$["tHead"] = val);
});
/**
 * Property.
 * 
 *   The HTMLTableElement.width property represents the desired width
 *   the table.
 * 
 *   `HTMLTableElement.width = width;
 *   var width = HTMLTableElement.width;
 * 
 *   Where width is a string representing the width in number of pixels or as a percentage value.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/width`
 */
html.HTMLTableElement.width = (function html$HTMLTableElement$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The HTMLTableElement.width property represents the desired width
 *   the table.
 * 
 *   `HTMLTableElement.width = width;
 *   var width = HTMLTableElement.width;
 * 
 *   Where width is a string representing the width in number of pixels or as a percentage value.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/width`
 */
html.HTMLTableElement.set_width_BANG_ = (function html$HTMLTableElement$set_width_BANG_(this$,val){
return (this$["width"] = val);
});

//# sourceMappingURL=HTMLTableElement.js.map?rel=1565798816808
