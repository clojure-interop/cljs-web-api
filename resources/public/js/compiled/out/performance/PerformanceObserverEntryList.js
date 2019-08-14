// Compiled by ClojureScript 1.9.946 {}
goog.provide('performance.PerformanceObserverEntryList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getEntries() method of the `performance.PerformanceObserverEntryList`
 *   returns a list of explicitly observed performance entry objects
 *   a given filter. The list's members are determined by the set
 *   entry types specified in the call to the `web.observe()` method.
 *   list is available in the observer's callback function (as the
 *   parameter in the callback).
 * 
 *   `General syntax:
 * 
 * 
 * 
 *   entries = list.getEntries();
 *   entries = list.getEntries(PerformanceEntryFilterOptions);
 * 
 *   Specific usage:
 * 
 * 
 * 
 *   entries = list.getEntries({name: \"entry_name\", entryType: \"mark\"});`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList/getEntries`
 */
performance.PerformanceObserverEntryList.get_entries = (function performance$PerformanceObserverEntryList$get_entries(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44262 = arguments.length;
var i__42557__auto___44263 = (0);
while(true){
if((i__42557__auto___44263 < len__42556__auto___44262)){
args__42563__auto__.push((arguments[i__42557__auto___44263]));

var G__44264 = (i__42557__auto___44263 + (1));
i__42557__auto___44263 = G__44264;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return performance.PerformanceObserverEntryList.get_entries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

performance.PerformanceObserverEntryList.get_entries.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getEntries,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

performance.PerformanceObserverEntryList.get_entries.cljs$lang$maxFixedArity = (1);

performance.PerformanceObserverEntryList.get_entries.cljs$lang$applyTo = (function (seq44260){
var G__44261 = cljs.core.first.call(null,seq44260);
var seq44260__$1 = cljs.core.next.call(null,seq44260);
return performance.PerformanceObserverEntryList.get_entries.cljs$core$IFn$_invoke$arity$variadic(G__44261,seq44260__$1);
});

/**
 * Method.
 * 
 *   The getEntriesByName() method of the `performance.PerformanceObserverEntryList`
 *   returns a list of explicitly observed performance entry objects
 *   a given `web.name` and `web.entry type`. The list's members are
 *   by the set of entry types specified in the call to the `web.observe()`
 *   The list is available in the observer's callback function (as
 *   first parameter in the callback).
 * 
 *   `entries = list.getEntriesByName(name, type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList/getEntriesByName`
 */
performance.PerformanceObserverEntryList.get_entries_by_name = (function performance$PerformanceObserverEntryList$get_entries_by_name(this$,name,type){
return this$.getEntriesByName(name,type);
});
/**
 * Method.
 * 
 *   The getEntriesByType() method of the `performance.PerformanceObserverEntryList`
 *   a list of explicitly observed performance entry objects for a
 *   performance entry type. The list's members are determined by
 *   set of entry types specified in the call to the `web.observe()`
 *   The list is available in the observer's callback function (as
 *   first parameter in the callback).
 * 
 *   `entries = list.getEntriesByType(type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList/getEntriesByType`
 */
performance.PerformanceObserverEntryList.get_entries_by_type = (function performance$PerformanceObserverEntryList$get_entries_by_type(this$,type){
return this$.getEntriesByType(type);
});

//# sourceMappingURL=PerformanceObserverEntryList.js.map?rel=1565798813069
