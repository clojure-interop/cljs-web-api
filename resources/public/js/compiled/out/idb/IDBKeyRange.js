// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBKeyRange');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   `idb.IDBKeyRange`: The newly created key range.
 * 
 *   `var myIDBKeyRange = IDBKeyRange.bound(lower, upper);
 *   var myIDBKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen);
 *   var myIDBKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/bound`
 */
idb.IDBKeyRange.bound = (function idb$IDBKeyRange$bound(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43287 = arguments.length;
var i__42557__auto___43288 = (0);
while(true){
if((i__42557__auto___43288 < len__42556__auto___43287)){
args__42563__auto__.push((arguments[i__42557__auto___43288]));

var G__43289 = (i__42557__auto___43288 + (1));
i__42557__auto___43288 = G__43289;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBKeyRange.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBKeyRange.bound.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.bound,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBKeyRange.bound.cljs$lang$maxFixedArity = (1);

idb.IDBKeyRange.bound.cljs$lang$applyTo = (function (seq43285){
var G__43286 = cljs.core.first.call(null,seq43285);
var seq43285__$1 = cljs.core.next.call(null,seq43285);
return idb.IDBKeyRange.bound.cljs$core$IFn$_invoke$arity$variadic(G__43286,seq43285__$1);
});

/**
 * Method.
 * 
 *   key The key you want to check for in your key range. This can
 *   any type.
 * 
 *   `var isIncluded = myKeyRange.includes(key)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/includes`
 */
idb.IDBKeyRange.includes = (function idb$IDBKeyRange$includes(this$,key){
return this$.includes(key);
});
/**
 * Method.
 * 
 *   `idb.IDBKeyRange`: The newly created key range.
 * 
 *   `var myIDBKeyRange = IDBKeyRange.lowerBound(lower);
 *   var myIDBKeyRange = IDBKeyRange.lowerBound(lower, open);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lowerBound`
 */
idb.IDBKeyRange.lower_bound = (function idb$IDBKeyRange$lower_bound(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43292 = arguments.length;
var i__42557__auto___43293 = (0);
while(true){
if((i__42557__auto___43293 < len__42556__auto___43292)){
args__42563__auto__.push((arguments[i__42557__auto___43293]));

var G__43294 = (i__42557__auto___43293 + (1));
i__42557__auto___43293 = G__43294;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBKeyRange.lower_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBKeyRange.lower_bound.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.lowerBound,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBKeyRange.lower_bound.cljs$lang$maxFixedArity = (1);

idb.IDBKeyRange.lower_bound.cljs$lang$applyTo = (function (seq43290){
var G__43291 = cljs.core.first.call(null,seq43290);
var seq43290__$1 = cljs.core.next.call(null,seq43290);
return idb.IDBKeyRange.lower_bound.cljs$core$IFn$_invoke$arity$variadic(G__43291,seq43290__$1);
});

/**
 * Method.
 * 
 *   value is the value for the new key range.
 * 
 *   `var myIDBKeyRange = IDBKeyRange.only(value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/only`
 */
idb.IDBKeyRange.only = (function idb$IDBKeyRange$only(this$,value){
return this$.only(value);
});
/**
 * Method.
 * 
 *   `idb.IDBKeyRange`: The newly created key range.
 * 
 *   `var myIDBKeyRange = IDBKeyRange.upperBound(upper[, open=false])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upperBound`
 */
idb.IDBKeyRange.upper_bound = (function idb$IDBKeyRange$upper_bound(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43297 = arguments.length;
var i__42557__auto___43298 = (0);
while(true){
if((i__42557__auto___43298 < len__42556__auto___43297)){
args__42563__auto__.push((arguments[i__42557__auto___43298]));

var G__43299 = (i__42557__auto___43298 + (1));
i__42557__auto___43298 = G__43299;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBKeyRange.upper_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBKeyRange.upper_bound.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.upperBound,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBKeyRange.upper_bound.cljs$lang$maxFixedArity = (1);

idb.IDBKeyRange.upper_bound.cljs$lang$applyTo = (function (seq43295){
var G__43296 = cljs.core.first.call(null,seq43295);
var seq43295__$1 = cljs.core.next.call(null,seq43295);
return idb.IDBKeyRange.upper_bound.cljs$core$IFn$_invoke$arity$variadic(G__43296,seq43295__$1);
});

/**
 * Property.
 * 
 *   The lower bound of the key range (can be any type.)
 * 
 *   `var lower = myKeyRange.lower`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lower`
 */
idb.IDBKeyRange.lower = (function idb$IDBKeyRange$lower(this$){
return this$.lower();
});
/**
 * Property.
 * 
 *   The lower bound of the key range (can be any type.)
 * 
 *   `var lower = myKeyRange.lower`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lower`
 */
idb.IDBKeyRange.set_lower_BANG_ = (function idb$IDBKeyRange$set_lower_BANG_(this$,val){
return (this$["lower"] = val);
});
/**
 * Property.
 * 
 *   A `web.boolean`:
 * 
 *   `var lowerOpen = myKeyRange.lowerOpen`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lowerOpen`
 */
idb.IDBKeyRange.lower_open = (function idb$IDBKeyRange$lower_open(this$){
return this$.lowerOpen();
});
/**
 * Property.
 * 
 *   A `web.boolean`:
 * 
 *   `var lowerOpen = myKeyRange.lowerOpen`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/lowerOpen`
 */
idb.IDBKeyRange.set_lower_open_BANG_ = (function idb$IDBKeyRange$set_lower_open_BANG_(this$,val){
return (this$["lowerOpen"] = val);
});
/**
 * Property.
 * 
 *   The upper bound of the key range (can be any type.)
 * 
 *   `var upper = myKeyRange.upper`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upper`
 */
idb.IDBKeyRange.upper = (function idb$IDBKeyRange$upper(this$){
return this$.upper();
});
/**
 * Property.
 * 
 *   The upper bound of the key range (can be any type.)
 * 
 *   `var upper = myKeyRange.upper`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upper`
 */
idb.IDBKeyRange.set_upper_BANG_ = (function idb$IDBKeyRange$set_upper_BANG_(this$,val){
return (this$["upper"] = val);
});
/**
 * Property.
 * 
 *   A `web.boolean`:
 * 
 *   `var upperOpen = myKeyRange.upperOpen`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upperOpen`
 */
idb.IDBKeyRange.upper_open = (function idb$IDBKeyRange$upper_open(this$){
return this$.upperOpen();
});
/**
 * Property.
 * 
 *   A `web.boolean`:
 * 
 *   `var upperOpen = myKeyRange.upperOpen`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/upperOpen`
 */
idb.IDBKeyRange.set_upper_open_BANG_ = (function idb$IDBKeyRange$set_upper_open_BANG_(this$,val){
return (this$["upperOpen"] = val);
});

//# sourceMappingURL=IDBKeyRange.js.map?rel=1565798805374
