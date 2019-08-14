// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DataTransfer');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DataTransfer constructor creates a new `web.DataTransfer` object instance.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/DataTransfer`
 */
web.DataTransfer.constructor$ = DataTransfer;
/**
 * Method.
 * 
 *   The DataTransfer.addElement() method sets the drag source to
 *   given element. This element will be the element to which drag
 *   dragend events are fired, and not the defaut target (the node
 *   was dragged).
 * 
 *   `void dataTransfer.addElement(el);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/addElement`
 */
web.DataTransfer.add_element = (function web$DataTransfer$add_element(this$,el){
return this$.addElement(el);
});
/**
 * Method.
 * 
 *   The DataTransfer.clearData() method removes the drag operation's
 *   data` for the given type. If data for the given type does not
 *   this method does nothing.
 * 
 *   `DataTransfer.clearData([format]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/clearData`
 */
web.DataTransfer.clear_data = (function web$DataTransfer$clear_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44418 = arguments.length;
var i__42557__auto___44419 = (0);
while(true){
if((i__42557__auto___44419 < len__42556__auto___44418)){
args__42563__auto__.push((arguments[i__42557__auto___44419]));

var G__44420 = (i__42557__auto___44419 + (1));
i__42557__auto___44419 = G__44420;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DataTransfer.clear_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DataTransfer.clear_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DataTransfer.clear_data.cljs$lang$maxFixedArity = (1);

web.DataTransfer.clear_data.cljs$lang$applyTo = (function (seq44416){
var G__44417 = cljs.core.first.call(null,seq44416);
var seq44416__$1 = cljs.core.next.call(null,seq44416);
return web.DataTransfer.clear_data.cljs$core$IFn$_invoke$arity$variadic(G__44417,seq44416__$1);
});

/**
 * Method.
 * 
 *   The DataTransfer.getData() method retrieves drag data (as a `dom.DOMString`)
 *   the specified type. If the drag operation does not include data,
 *   method returns an empty string.
 * 
 *   `dataTransfer.getData(format);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData`
 */
web.DataTransfer.get_data = (function web$DataTransfer$get_data(this$,format){
return this$.getData(format);
});
/**
 * Method.
 * 
 *   The DataTransfer.mozClearDataAt() method removes the data associated
 *   the given format for an item at the specified index. The index
 *   be in the range from zero to the number of items minus one.
 * 
 *   `void dataTransfer.mozClearDataAt([type], index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozClearDataAt`
 */
web.DataTransfer.moz_clear_data_at = (function web$DataTransfer$moz_clear_data_at(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44423 = arguments.length;
var i__42557__auto___44424 = (0);
while(true){
if((i__42557__auto___44424 < len__42556__auto___44423)){
args__42563__auto__.push((arguments[i__42557__auto___44424]));

var G__44425 = (i__42557__auto___44424 + (1));
i__42557__auto___44424 = G__44425;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DataTransfer.moz_clear_data_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DataTransfer.moz_clear_data_at.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.mozClearDataAt,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DataTransfer.moz_clear_data_at.cljs$lang$maxFixedArity = (1);

web.DataTransfer.moz_clear_data_at.cljs$lang$applyTo = (function (seq44421){
var G__44422 = cljs.core.first.call(null,seq44421);
var seq44421__$1 = cljs.core.next.call(null,seq44421);
return web.DataTransfer.moz_clear_data_at.cljs$core$IFn$_invoke$arity$variadic(G__44422,seq44421__$1);
});

/**
 * Method.
 * 
 *   The DataTransfer.mozGetDataAt() method is used to retrieve an
 *   in the drag event's `web.data transfer` object, based on a given
 *   and index. This method returns null if the specified item does
 *   exist or if the index is not in the range from zero to the number
 *   items minus one.
 * 
 *   `nsIVariant dataTransfer.mozGetDataAt([type], index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozGetDataAt`
 */
web.DataTransfer.moz_get_data_at = (function web$DataTransfer$moz_get_data_at(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44428 = arguments.length;
var i__42557__auto___44429 = (0);
while(true){
if((i__42557__auto___44429 < len__42556__auto___44428)){
args__42563__auto__.push((arguments[i__42557__auto___44429]));

var G__44430 = (i__42557__auto___44429 + (1));
i__42557__auto___44429 = G__44430;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DataTransfer.moz_get_data_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DataTransfer.moz_get_data_at.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.mozGetDataAt,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DataTransfer.moz_get_data_at.cljs$lang$maxFixedArity = (1);

web.DataTransfer.moz_get_data_at.cljs$lang$applyTo = (function (seq44426){
var G__44427 = cljs.core.first.call(null,seq44426);
var seq44426__$1 = cljs.core.next.call(null,seq44426);
return web.DataTransfer.moz_get_data_at.cljs$core$IFn$_invoke$arity$variadic(G__44427,seq44426__$1);
});

/**
 * Method.
 * 
 *   The DataTransfer.mozSetDataAt() method is used to add data to
 *   specific index in the drag event's `web.data transfer` object.
 * 
 *   `void dataTransfer.mozSetDataAt([type], data, index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozSetDataAt`
 */
web.DataTransfer.moz_set_data_at = (function web$DataTransfer$moz_set_data_at(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44433 = arguments.length;
var i__42557__auto___44434 = (0);
while(true){
if((i__42557__auto___44434 < len__42556__auto___44433)){
args__42563__auto__.push((arguments[i__42557__auto___44434]));

var G__44435 = (i__42557__auto___44434 + (1));
i__42557__auto___44434 = G__44435;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DataTransfer.moz_set_data_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DataTransfer.moz_set_data_at.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.mozSetDataAt,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DataTransfer.moz_set_data_at.cljs$lang$maxFixedArity = (1);

web.DataTransfer.moz_set_data_at.cljs$lang$applyTo = (function (seq44431){
var G__44432 = cljs.core.first.call(null,seq44431);
var seq44431__$1 = cljs.core.next.call(null,seq44431);
return web.DataTransfer.moz_set_data_at.cljs$core$IFn$_invoke$arity$variadic(G__44432,seq44431__$1);
});

/**
 * Method.
 * 
 *   The DataTransfer.mozTypesAt() method returns a list of the format
 *   that are stored for an item at the specified index. If the index
 *   not in the range from 0 to the number of items minus one, an
 *   string list is returned.
 * 
 *   `nsIVariant dataTransfer.mozTypesAt(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozTypesAt`
 */
web.DataTransfer.moz_types_at = (function web$DataTransfer$moz_types_at(this$,index){
return this$.mozTypesAt(index);
});
/**
 * Method.
 * 
 *   The DataTransfer.setData() method sets the drag operation's `web.drag
 *   to the specified data and type. If data for the given type does
 *   exist, it is added at the end of the drag data store, such that
 *   last item in the `web.types` list will be the new type. If data
 *   the given type already exists, the existing data is replaced
 *   the same position. That is, the order of the `web.types` list
 *   not changed when replacing data of the same type.
 * 
 *   `void dataTransfer.setData(format, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData`
 */
web.DataTransfer.set_data = (function web$DataTransfer$set_data(this$,format,data){
return this$.setData(format,data);
});
/**
 * Method.
 * 
 *   When a drag occurs, a translucent image is generated from the
 *   target (the element the dragstart event is fired at), and follows
 *   mouse pointer during the drag. This image is created automatically,
 *   you do not need to create it yourself. However, if a custom image
 *   desired, the DataTransfer.setDragImage() method can be used to
 *   the custom image to be used. The image will typically be an `web.<image>`
 *   but it can also be a `web.<canvas>` or any other image element.
 * 
 *   `void dataTransfer.setDragImage(img, xOffset, yOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage`
 */
web.DataTransfer.set_drag_image = (function web$DataTransfer$set_drag_image(this$,img,x_offset,y_offset){
return this$.setDragImage(img,x_offset,y_offset);
});
/**
 * Property.
 * 
 *   The DataTransfer.dropEffect property controls the feedback (typically
 *   the user is given during a drag and drop operation. It will affect
 *   cursor is displayed while dragging. For example, when the user
 *   over a target drop element, the browser's cursor may indicate
 *   type of operation will occur.
 * 
 *   `dataTransfer.dropEffect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect`
 */
web.DataTransfer.drop_effect = (function web$DataTransfer$drop_effect(this$){
return this$.dropEffect();
});
/**
 * Property.
 * 
 *   The DataTransfer.dropEffect property controls the feedback (typically
 *   the user is given during a drag and drop operation. It will affect
 *   cursor is displayed while dragging. For example, when the user
 *   over a target drop element, the browser's cursor may indicate
 *   type of operation will occur.
 * 
 *   `dataTransfer.dropEffect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect`
 */
web.DataTransfer.set_drop_effect_BANG_ = (function web$DataTransfer$set_drop_effect_BANG_(this$,val){
return (this$["dropEffect"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.effectAllowed property specifies the effect
 *   is allowed for a drag operation. The copy operation is used to
 *   that the data being dragged will be copied from its present location
 *   the drop location. The move operation is used to indicate that
 *   data being dragged will be moved, and the link operation is used
 *   indicate that some form of relationship or connection will be
 *   between the source and drop locations.
 * 
 *   `dataTransfer.effectAllowed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed`
 */
web.DataTransfer.effect_allowed = (function web$DataTransfer$effect_allowed(this$){
return this$.effectAllowed();
});
/**
 * Property.
 * 
 *   The DataTransfer.effectAllowed property specifies the effect
 *   is allowed for a drag operation. The copy operation is used to
 *   that the data being dragged will be copied from its present location
 *   the drop location. The move operation is used to indicate that
 *   data being dragged will be moved, and the link operation is used
 *   indicate that some form of relationship or connection will be
 *   between the source and drop locations.
 * 
 *   `dataTransfer.effectAllowed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed`
 */
web.DataTransfer.set_effect_allowed_BANG_ = (function web$DataTransfer$set_effect_allowed_BANG_(this$,val){
return (this$["effectAllowed"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.files property is a `web.list of the files`
 *   the drag operation. If the operation includes no files, the list
 *   empty.
 * 
 *   `dataTransfer.files;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files`
 */
web.DataTransfer.files = (function web$DataTransfer$files(this$){
return this$.files();
});
/**
 * Property.
 * 
 *   The DataTransfer.files property is a `web.list of the files`
 *   the drag operation. If the operation includes no files, the list
 *   empty.
 * 
 *   `dataTransfer.files;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files`
 */
web.DataTransfer.set_files_BANG_ = (function web$DataTransfer$set_files_BANG_(this$,val){
return (this$["files"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.DataTransfer` property items property is a
 *   of the `web.data transfer items` in a drag operation. The list
 *   one item for each item in the operation and if the operation
 *   no items, the list is empty.
 * 
 *   `itemList = dataTransfer.items;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items`
 */
web.DataTransfer.items = (function web$DataTransfer$items(this$){
return this$.items();
});
/**
 * Property.
 * 
 *   The read-only `web.DataTransfer` property items property is a
 *   of the `web.data transfer items` in a drag operation. The list
 *   one item for each item in the operation and if the operation
 *   no items, the list is empty.
 * 
 *   `itemList = dataTransfer.items;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items`
 */
web.DataTransfer.set_items_BANG_ = (function web$DataTransfer$set_items_BANG_(this$,val){
return (this$["items"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.mozCursor property returns or sets the drag
 *   state. This is primarily used to control the cursor during tab
 * 
 *   `dataTransfer.mozCursor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozCursor`
 */
web.DataTransfer.moz_cursor = (function web$DataTransfer$moz_cursor(this$){
return this$.mozCursor();
});
/**
 * Property.
 * 
 *   The DataTransfer.mozCursor property returns or sets the drag
 *   state. This is primarily used to control the cursor during tab
 * 
 *   `dataTransfer.mozCursor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozCursor`
 */
web.DataTransfer.set_moz_cursor_BANG_ = (function web$DataTransfer$set_moz_cursor_BANG_(this$,val){
return (this$["mozCursor"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.mozItemCount property returns the number of
 *   being dragged. This can be used, for example, to get the number
 *   files being dragged.
 * 
 *   `dataTransfer.mozItemCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozItemCount`
 */
web.DataTransfer.moz_item_count = (function web$DataTransfer$moz_item_count(this$){
return this$.mozItemCount();
});
/**
 * Property.
 * 
 *   The DataTransfer.mozItemCount property returns the number of
 *   being dragged. This can be used, for example, to get the number
 *   files being dragged.
 * 
 *   `dataTransfer.mozItemCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozItemCount`
 */
web.DataTransfer.set_moz_item_count_BANG_ = (function web$DataTransfer$set_moz_item_count_BANG_(this$,val){
return (this$["mozItemCount"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.mozSourceNode property is used to determine
 *   `web.Node` over which the mouse cursor was located when the the
 *   operation was initiated (for example, when a `web.<button>` was
 *   For external drags or if the calling function cannot reach the
 *   null is returned.
 * 
 *   `dataTransfer.mozSourceNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozSourceNode`
 */
web.DataTransfer.moz_source_node = (function web$DataTransfer$moz_source_node(this$){
return this$.mozSourceNode();
});
/**
 * Property.
 * 
 *   The DataTransfer.mozSourceNode property is used to determine
 *   `web.Node` over which the mouse cursor was located when the the
 *   operation was initiated (for example, when a `web.<button>` was
 *   For external drags or if the calling function cannot reach the
 *   null is returned.
 * 
 *   `dataTransfer.mozSourceNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozSourceNode`
 */
web.DataTransfer.set_moz_source_node_BANG_ = (function web$DataTransfer$set_moz_source_node_BANG_(this$,val){
return (this$["mozSourceNode"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.mozUserCancelled property is used in the dragend
 *   handler to determine if the user canceled the drag or not. If
 *   user canceled the event, the property returns true and returns
 *   otherwise. This property only applies to the dragend event.
 * 
 *   `dataTransfer.mozUserCancelled;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozUserCancelled`
 */
web.DataTransfer.moz_user_cancelled = (function web$DataTransfer$moz_user_cancelled(this$){
return this$.mozUserCancelled();
});
/**
 * Property.
 * 
 *   The DataTransfer.mozUserCancelled property is used in the dragend
 *   handler to determine if the user canceled the drag or not. If
 *   user canceled the event, the property returns true and returns
 *   otherwise. This property only applies to the dragend event.
 * 
 *   `dataTransfer.mozUserCancelled;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozUserCancelled`
 */
web.DataTransfer.set_moz_user_cancelled_BANG_ = (function web$DataTransfer$set_moz_user_cancelled_BANG_(this$,val){
return (this$["mozUserCancelled"] = val);
});
/**
 * Property.
 * 
 *   The DataTransfer.types read-only property returns an array of
 *   drag data formats (as `web.strings`) that were set in the dragstart
 *   The order of the formats is the same order as the data included
 *   the drag operation.
 * 
 *   `dataTransfer.types;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types`
 */
web.DataTransfer.types = (function web$DataTransfer$types(this$){
return this$.types();
});
/**
 * Property.
 * 
 *   The DataTransfer.types read-only property returns an array of
 *   drag data formats (as `web.strings`) that were set in the dragstart
 *   The order of the formats is the same order as the data included
 *   the drag operation.
 * 
 *   `dataTransfer.types;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types`
 */
web.DataTransfer.set_types_BANG_ = (function web$DataTransfer$set_types_BANG_(this$,val){
return (this$["types"] = val);
});

//# sourceMappingURL=DataTransfer.js.map?rel=1565798814071
