// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FormData');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FormData() constructor creates a new `web.FormData` object.
 * 
 *   form Optional
 *   An HTML `web.<form>` element — when specified, the `web.FormData` object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData`
 */
web.FormData.constructor$ = FormData;
/**
 * Method.
 * 
 *   The append() method of the `web.FormData` interface appends a
 *   value onto an existing key inside a FormData object, or adds
 *   key if it does not already exist.
 * 
 *   `There are two versions of this method: a two and a three parameter version:
 * 
 * 
 * 
 *   formData.append(name, value);
 *   formData.append(name, value, filename);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/append`
 */
web.FormData.append = (function web$FormData$append(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50581 = arguments.length;
var i__42557__auto___50582 = (0);
while(true){
if((i__42557__auto___50582 < len__42556__auto___50581)){
args__42563__auto__.push((arguments[i__42557__auto___50582]));

var G__50583 = (i__42557__auto___50582 + (1));
i__42557__auto___50582 = G__50583;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.FormData.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.FormData.append.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.append,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.FormData.append.cljs$lang$maxFixedArity = (1);

web.FormData.append.cljs$lang$applyTo = (function (seq50579){
var G__50580 = cljs.core.first.call(null,seq50579);
var seq50579__$1 = cljs.core.next.call(null,seq50579);
return web.FormData.append.cljs$core$IFn$_invoke$arity$variadic(G__50580,seq50579__$1);
});

/**
 * Method.
 * 
 *   The delete() method of the `web.FormData` interface deletes a
 *   and its value(s) from a FormData object.
 * 
 *   `formData.delete(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete`
 */
web.FormData.delete$ = (function web$FormData$delete(this$,name){
return this$.delete(name);
});
/**
 * Method.
 * 
 *   The FormData.entries() method returns an `web.iterator` allowing
 *   go through all key/value pairs contained in this object. The
 *   of each pair is a `web.USVString` object; the value either a
 *   or a `web.Blob`.
 * 
 *   `formData.entries();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries`
 */
web.FormData.entries = (function web$FormData$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The get() method of the `web.FormData` interface returns the
 *   value associated with a given key from within a FormData object.
 *   you expect multiple values and want all of them, use the `web.getAll()`
 *   instead.
 * 
 *   `formData.get(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/get`
 */
web.FormData.get = (function web$FormData$get(this$,name){
return this$.get(name);
});
/**
 * Method.
 * 
 *   The getAll() method of the `web.FormData` interface returns all
 *   values associated with a given key from within a FormData object.
 * 
 *   `formData.getAll(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll`
 */
web.FormData.get_all = (function web$FormData$get_all(this$,name){
return this$.getAll(name);
});
/**
 * Method.
 * 
 *   The has() method of the `web.FormData` interface returns a boolean
 *   whether a FormData object contains a certain key.
 * 
 *   `formData.has(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/has`
 */
web.FormData.has = (function web$FormData$has(this$,name){
return this$.has(name);
});
/**
 * Method.
 * 
 *   The FormData.keys() method returns an `web.iterator` allowing
 *   go through all keys contained in this object. The keys are `web.USVString`
 * 
 *   `formData.keys();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys`
 */
web.FormData.keys = (function web$FormData$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The set() method of the `web.FormData` interface sets a new value
 *   an existing key inside a FormData object, or adds the key/value
 *   it does not already exist.
 * 
 *   `There are two versions of this method: a two and a three parameter version:
 * 
 * 
 * 
 *   formData.set(name, value);
 *   formData.set(name, value, filename);
 * 
 *   Parameters
 * 
 * 
 *   name
 *   The name of the field whose data is contained in value.
 *   value
 *   The field's value. In the two parameter version this is a `web.USVString`, or if it is not, it is converted to a string. In the three parameter version this can be a `web.Blob`, `file.File`, or a `web.USVString`. If none of these are specified the value is converted to a string.
 *   filename Optional
 *   The filename reported to the server (a `web.USVString`), when a `web.Blob` or `file.File` is passed as the second parameter. The default filename for `web.Blob` objects is \"blob\".
 * 
 * 
 * 
 *   Note: If you specify a `web.Blob` as the data to append to the FormData object, the filename that will be reported to the server in the \"Content-Disposition\" header used to vary from browser to browser.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/set`
 */
web.FormData.set = (function web$FormData$set(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50586 = arguments.length;
var i__42557__auto___50587 = (0);
while(true){
if((i__42557__auto___50587 < len__42556__auto___50586)){
args__42563__auto__.push((arguments[i__42557__auto___50587]));

var G__50588 = (i__42557__auto___50587 + (1));
i__42557__auto___50587 = G__50588;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.FormData.set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.FormData.set.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.set,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.FormData.set.cljs$lang$maxFixedArity = (1);

web.FormData.set.cljs$lang$applyTo = (function (seq50584){
var G__50585 = cljs.core.first.call(null,seq50584);
var seq50584__$1 = cljs.core.next.call(null,seq50584);
return web.FormData.set.cljs$core$IFn$_invoke$arity$variadic(G__50585,seq50584__$1);
});

/**
 * Method.
 * 
 *   The FormData.values() method returns an `web.iterator` allowing
 *   go through all values contained in this object. The values are
 *   or `web.Blob` objects.
 * 
 *   `formData.values();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/values`
 */
web.FormData.values = (function web$FormData$values(this$){
return this$.values();
});

//# sourceMappingURL=FormData.js.map?rel=1565798840946
