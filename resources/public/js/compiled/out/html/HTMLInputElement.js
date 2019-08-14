// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLInputElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLInputElement.mozGetFileNameArray() method returns an
 *   of the names of the files that were selected by the user on an
 *   input element.
 * 
 *   `inputElement.mozGetFileNameArray(aLength, aFileNames);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/mozGetFileNameArray`
 */
html.HTMLInputElement.moz_get_file_name_array = (function html$HTMLInputElement$moz_get_file_name_array(this$,a_length,a_file_names){
return this$.mozGetFileNameArray(a_length,a_file_names);
});
/**
 * Method.
 * 
 *   The HTMLInputElement.mozSetFileNameArray() method sets the names
 *   the files that selected on an HTML input element.
 * 
 *   `inputElement.mozSetFileNameArray(aFileNames, aLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/mozSetFileNameArray`
 */
html.HTMLInputElement.moz_set_file_name_array = (function html$HTMLInputElement$moz_set_file_name_array(this$,a_file_names,a_length){
return this$.mozSetFileNameArray(a_file_names,a_length);
});
/**
 * Method.
 * 
 *   The HTMLInputElement.select() method selects all the text in
 *   `web.<textarea>` element or in an `web.<input>` element that
 *   a text field.
 * 
 *   `element.select();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select`
 */
html.HTMLInputElement.select = (function html$HTMLInputElement$select(this$){
return this$.select();
});
/**
 * Method.
 * 
 *   The HTMLInputElement.setRangeText() method replaces a range of
 *   in an `web.<input>` or `web.<textarea>` element with a new string.
 * 
 *   `element.setRangeText(replacement);
 *   element.setRangeText(replacement, start, end [, selectMode]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText`
 */
html.HTMLInputElement.set_range_text = (function html$HTMLInputElement$set_range_text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50214 = arguments.length;
var i__42557__auto___50215 = (0);
while(true){
if((i__42557__auto___50215 < len__42556__auto___50214)){
args__42563__auto__.push((arguments[i__42557__auto___50215]));

var G__50216 = (i__42557__auto___50215 + (1));
i__42557__auto___50215 = G__50216;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLInputElement.set_range_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLInputElement.set_range_text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setRangeText,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLInputElement.set_range_text.cljs$lang$maxFixedArity = (1);

html.HTMLInputElement.set_range_text.cljs$lang$applyTo = (function (seq50212){
var G__50213 = cljs.core.first.call(null,seq50212);
var seq50212__$1 = cljs.core.next.call(null,seq50212);
return html.HTMLInputElement.set_range_text.cljs$core$IFn$_invoke$arity$variadic(G__50213,seq50212__$1);
});

/**
 * Method.
 * 
 *   The HTMLInputElement.setSelectionRange() method sets the start
 *   end positions of the current text selection in an `web.<input>`
 *   `web.<textarea>` element.
 * 
 *   `element.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange`
 */
html.HTMLInputElement.set_selection_range = (function html$HTMLInputElement$set_selection_range(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50219 = arguments.length;
var i__42557__auto___50220 = (0);
while(true){
if((i__42557__auto___50220 < len__42556__auto___50219)){
args__42563__auto__.push((arguments[i__42557__auto___50220]));

var G__50221 = (i__42557__auto___50220 + (1));
i__42557__auto___50220 = G__50221;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLInputElement.set_selection_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLInputElement.set_selection_range.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setSelectionRange,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLInputElement.set_selection_range.cljs$lang$maxFixedArity = (1);

html.HTMLInputElement.set_selection_range.cljs$lang$applyTo = (function (seq50217){
var G__50218 = cljs.core.first.call(null,seq50217);
var seq50217__$1 = cljs.core.next.call(null,seq50217);
return html.HTMLInputElement.set_selection_range.cljs$core$IFn$_invoke$arity$variadic(G__50218,seq50217__$1);
});

/**
 * Property.
 * 
 *   The HTMLInputElement.labels read-only property returns a `web.NodeList`
 *   the `web.<label>` elements associated with the `web.<input>`
 * 
 *   `var labelElements = input.labels;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels`
 */
html.HTMLInputElement.labels = (function html$HTMLInputElement$labels(this$){
return this$.labels();
});
/**
 * Property.
 * 
 *   The HTMLInputElement.labels read-only property returns a `web.NodeList`
 *   the `web.<label>` elements associated with the `web.<input>`
 * 
 *   `var labelElements = input.labels;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels`
 */
html.HTMLInputElement.set_labels_BANG_ = (function html$HTMLInputElement$set_labels_BANG_(this$,val){
return (this$["labels"] = val);
});
/**
 * Property.
 * 
 *   The HTMLInputElement.multiple property indicates if an input
 *   have more than one value. Firefox currently only supports multiple
 *   <input type=\"file\">.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/multiple`
 */
html.HTMLInputElement.multiple = (function html$HTMLInputElement$multiple(this$){
return this$.multiple();
});
/**
 * Property.
 * 
 *   The HTMLInputElement.multiple property indicates if an input
 *   have more than one value. Firefox currently only supports multiple
 *   <input type=\"file\">.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/multiple`
 */
html.HTMLInputElement.set_multiple_BANG_ = (function html$HTMLInputElement$set_multiple_BANG_(this$,val){
return (this$["multiple"] = val);
});
/**
 * Property.
 * 
 *   The HTMLInputElement.webkitdirectory is a property that reflects
 *   webkitdirectory HTML attribute and indicates that the `web.<input>`
 *   should let the user select directories instead of files. When
 *   directory is selected, the directory and its entire hierarchy
 *   contents are included in the set of selected items. The selected
 *   system entries can be obtained using the `web.webkitEntries`
 * 
 *   `HTMLInputElement.webkitdirectory = boolValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory`
 */
html.HTMLInputElement.webkitdirectory = (function html$HTMLInputElement$webkitdirectory(this$){
return this$.webkitdirectory();
});
/**
 * Property.
 * 
 *   The HTMLInputElement.webkitdirectory is a property that reflects
 *   webkitdirectory HTML attribute and indicates that the `web.<input>`
 *   should let the user select directories instead of files. When
 *   directory is selected, the directory and its entire hierarchy
 *   contents are included in the set of selected items. The selected
 *   system entries can be obtained using the `web.webkitEntries`
 * 
 *   `HTMLInputElement.webkitdirectory = boolValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory`
 */
html.HTMLInputElement.set_webkitdirectory_BANG_ = (function html$HTMLInputElement$set_webkitdirectory_BANG_(this$,val){
return (this$["webkitdirectory"] = val);
});
/**
 * Property.
 * 
 *   The read-only webkitEntries property of the `html.HTMLInputElement`
 *   contains an array of file system entries (as objects based on
 *   representing files and/or directories selected by the user using
 *   `web.<input>` element of type file, but only if that selection
 *   made using drag-and-drop: selecting a file in the dialog will
 *   the property empty (bug
 * 
 *   `var entries = HTMLInputElement.webkitEntries;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries`
 */
html.HTMLInputElement.webkit_entries = (function html$HTMLInputElement$webkit_entries(this$){
return this$.webkitEntries();
});
/**
 * Property.
 * 
 *   The read-only webkitEntries property of the `html.HTMLInputElement`
 *   contains an array of file system entries (as objects based on
 *   representing files and/or directories selected by the user using
 *   `web.<input>` element of type file, but only if that selection
 *   made using drag-and-drop: selecting a file in the dialog will
 *   the property empty (bug
 * 
 *   `var entries = HTMLInputElement.webkitEntries;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries`
 */
html.HTMLInputElement.set_webkit_entries_BANG_ = (function html$HTMLInputElement$set_webkit_entries_BANG_(this$,val){
return (this$["webkitEntries"] = val);
});

//# sourceMappingURL=HTMLInputElement.js.map?rel=1565798837017
