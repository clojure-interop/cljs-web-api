// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMTokenList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The add() method of the `dom.DOMTokenList` interface adds the
 *   token to the list.
 * 
 *   `tokenList.add(token1[, token2[, ...]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add`
 */
dom.DOMTokenList.add = (function dom$DOMTokenList$add(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52492 = arguments.length;
var i__42557__auto___52493 = (0);
while(true){
if((i__42557__auto___52493 < len__42556__auto___52492)){
args__42563__auto__.push((arguments[i__42557__auto___52493]));

var G__52494 = (i__42557__auto___52493 + (1));
i__42557__auto___52493 = G__52494;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return dom.DOMTokenList.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

dom.DOMTokenList.add.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.add,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

dom.DOMTokenList.add.cljs$lang$maxFixedArity = (1);

dom.DOMTokenList.add.cljs$lang$applyTo = (function (seq52490){
var G__52491 = cljs.core.first.call(null,seq52490);
var seq52490__$1 = cljs.core.next.call(null,seq52490);
return dom.DOMTokenList.add.cljs$core$IFn$_invoke$arity$variadic(G__52491,seq52490__$1);
});

/**
 * Method.
 * 
 *   The contains() method of the `dom.DOMTokenList` interface returns
 *   `web.Boolean` — true if the underlying list contains the given
 *   otherwise false.
 * 
 *   `tokenList.contains(token);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains`
 */
dom.DOMTokenList.contains = (function dom$DOMTokenList$contains(this$,token){
return this$.contains(token);
});
/**
 * Method.
 * 
 *   The DOMTokenList.entries() method returns an `web.iterator` allowing
 *   to go through all key/value pairs contained in this object. The
 *   are `dom.DOMString` objects, each representing a single token.
 * 
 *   `tokenList.entries();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/entries`
 */
dom.DOMTokenList.entries = (function dom$DOMTokenList$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The forEach() method of the `dom.DOMTokenList` interface calls
 *   callback given in parameter once for each value pair in the list,
 *   insertion order.
 * 
 *   `tokenList.forEach(callback);
 *   tokenList.forEach(callback, argument);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/forEach`
 */
dom.DOMTokenList.for_each = (function dom$DOMTokenList$for_each(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52497 = arguments.length;
var i__42557__auto___52498 = (0);
while(true){
if((i__42557__auto___52498 < len__42556__auto___52497)){
args__42563__auto__.push((arguments[i__42557__auto___52498]));

var G__52499 = (i__42557__auto___52498 + (1));
i__42557__auto___52498 = G__52499;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return dom.DOMTokenList.for_each.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

dom.DOMTokenList.for_each.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.forEach,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

dom.DOMTokenList.for_each.cljs$lang$maxFixedArity = (1);

dom.DOMTokenList.for_each.cljs$lang$applyTo = (function (seq52495){
var G__52496 = cljs.core.first.call(null,seq52495);
var seq52495__$1 = cljs.core.next.call(null,seq52495);
return dom.DOMTokenList.for_each.cljs$core$IFn$_invoke$arity$variadic(G__52496,seq52495__$1);
});

/**
 * Method.
 * 
 *   The item() method of the `dom.DOMTokenList` interface returns
 *   item in the list by its index.
 * 
 *   `tokenList.item(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/item`
 */
dom.DOMTokenList.item = (function dom$DOMTokenList$item(this$,index){
return this$.item(index);
});
/**
 * Method.
 * 
 *   The keys() method of the `dom.DOMTokenList` interface returns
 *   `web.iterator` allowing to go through all keys contained in this
 *   The keys are of type unsigned integer.
 * 
 *   `tokenList.keys();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/keys`
 */
dom.DOMTokenList.keys = (function dom$DOMTokenList$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The remove() method of the `dom.DOMTokenList` interface removes
 *   specified tokens from the list.
 * 
 *   `tokenList.remove(token1[, token2[, ...]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove`
 */
dom.DOMTokenList.remove = (function dom$DOMTokenList$remove(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52502 = arguments.length;
var i__42557__auto___52503 = (0);
while(true){
if((i__42557__auto___52503 < len__42556__auto___52502)){
args__42563__auto__.push((arguments[i__42557__auto___52503]));

var G__52504 = (i__42557__auto___52503 + (1));
i__42557__auto___52503 = G__52504;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return dom.DOMTokenList.remove.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

dom.DOMTokenList.remove.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.remove,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

dom.DOMTokenList.remove.cljs$lang$maxFixedArity = (1);

dom.DOMTokenList.remove.cljs$lang$applyTo = (function (seq52500){
var G__52501 = cljs.core.first.call(null,seq52500);
var seq52500__$1 = cljs.core.next.call(null,seq52500);
return dom.DOMTokenList.remove.cljs$core$IFn$_invoke$arity$variadic(G__52501,seq52500__$1);
});

/**
 * Method.
 * 
 *   The replace() method of the `dom.DOMTokenList` interface replaces
 *   existing token with a new token.
 * 
 *   `tokenList.replace(oldToken,newToken);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace`
 */
dom.DOMTokenList.replace = (function dom$DOMTokenList$replace(this$,old_token,new_token){
return this$.replace(old_token,new_token);
});
/**
 * Method.
 * 
 *   The supports() method of the `dom.DOMTokenList` interface returns
 *   if a given token is in the associated attribute's supported tokens.
 *   method is intended to support feature detection.
 * 
 *   `var boolean = element.supports(token)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/supports`
 */
dom.DOMTokenList.supports = (function dom$DOMTokenList$supports(this$,token){
return this$.supports(token);
});
/**
 * Method.
 * 
 *   The toggle() method of the `dom.DOMTokenList` interface removes
 *   given token from the list and returns false. If token doesn't
 *   it's added and the function returns true.
 * 
 *   `tokenList.toggle(token, force);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle`
 */
dom.DOMTokenList.toggle = (function dom$DOMTokenList$toggle(this$,token,force){
return this$.toggle(token,force);
});
/**
 * Method.
 * 
 *   The value property of the `dom.DOMTokenList` interface returns
 *   value of the list as a `dom.DOMString`, or clears and sets the
 *   to the given value.
 * 
 *   `tokenList.value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value`
 */
dom.DOMTokenList.value = (function dom$DOMTokenList$value(this$){
return this$.value();
});
/**
 * Method.
 * 
 *   The values() method of the `dom.DOMTokenList` interface returns
 *   `web.iterator` allowing developers to go through all values contained
 *   the DOMTokenList. The individual values are `dom.DOMString` objects.
 * 
 *   `tokenList.values();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/values`
 */
dom.DOMTokenList.values = (function dom$DOMTokenList$values(this$){
return this$.values();
});
/**
 * Property.
 * 
 *   The length read-only property of the `dom.DOMTokenList` interface
 *   an integer representing the number of objects stored in the object.
 * 
 *   `tokenList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length`
 */
dom.DOMTokenList.length = (function dom$DOMTokenList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length read-only property of the `dom.DOMTokenList` interface
 *   an integer representing the number of objects stored in the object.
 * 
 *   `tokenList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length`
 */
dom.DOMTokenList.set_length_BANG_ = (function dom$DOMTokenList$set_length_BANG_(this$,val){
return (this$["length"] = val);
});

//# sourceMappingURL=DOMTokenList.js.map?rel=1565798854686
