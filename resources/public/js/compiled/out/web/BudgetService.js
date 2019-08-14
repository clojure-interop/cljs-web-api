// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.BudgetService');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getBudget() property of the `web.BudgetService` interface
 *   a `web.Promise` that resolves to an array of BudgetState objects
 *   the expected state of the budget at times in the future.
 * 
 *   `var aPromise = BudgetService.getBudget();
 *   aPromise.then(function(budgetState[]){ ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetService/getBudget`
 */
web.BudgetService.get_budget = (function web$BudgetService$get_budget(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50529 = arguments.length;
var i__42557__auto___50530 = (0);
while(true){
if((i__42557__auto___50530 < len__42556__auto___50529)){
args__42563__auto__.push((arguments[i__42557__auto___50530]));

var G__50531 = (i__42557__auto___50530 + (1));
i__42557__auto___50530 = G__50531;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BudgetService.get_budget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BudgetService.get_budget.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getBudget,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BudgetService.get_budget.cljs$lang$maxFixedArity = (1);

web.BudgetService.get_budget.cljs$lang$applyTo = (function (seq50527){
var G__50528 = cljs.core.first.call(null,seq50527);
var seq50527__$1 = cljs.core.next.call(null,seq50527);
return web.BudgetService.get_budget.cljs$core$IFn$_invoke$arity$variadic(G__50528,seq50527__$1);
});

/**
 * Method.
 * 
 *   The getCost() property of the `web.BudgetService` interface returns
 *   `web.Promise` that resolves to a double indicating the worst-case
 *   operation cost of the provided background operation.
 * 
 *   `var aPromise = BudgetService.getCost(operation);
 *   aPromise.then(function(someDouble){ ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetService/getCost`
 */
web.BudgetService.get_cost = (function web$BudgetService$get_cost(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50534 = arguments.length;
var i__42557__auto___50535 = (0);
while(true){
if((i__42557__auto___50535 < len__42556__auto___50534)){
args__42563__auto__.push((arguments[i__42557__auto___50535]));

var G__50536 = (i__42557__auto___50535 + (1));
i__42557__auto___50535 = G__50536;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BudgetService.get_cost.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BudgetService.get_cost.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getCost,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BudgetService.get_cost.cljs$lang$maxFixedArity = (1);

web.BudgetService.get_cost.cljs$lang$applyTo = (function (seq50532){
var G__50533 = cljs.core.first.call(null,seq50532);
var seq50532__$1 = cljs.core.next.call(null,seq50532);
return web.BudgetService.get_cost.cljs$core$IFn$_invoke$arity$variadic(G__50533,seq50532__$1);
});

/**
 * Method.
 * 
 *   The reserve() property of the `web.BudgetService` interface returns
 *   `web.Promise` that resolves to a boolean indicating whether the
 *   budget operation can be reserved.
 * 
 *   `var aPromise = BudgetService.reserve(operation);
 *   aPromise.then(function(boolean){ ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BudgetService/reserve`
 */
web.BudgetService.reserve = (function web$BudgetService$reserve(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50539 = arguments.length;
var i__42557__auto___50540 = (0);
while(true){
if((i__42557__auto___50540 < len__42556__auto___50539)){
args__42563__auto__.push((arguments[i__42557__auto___50540]));

var G__50541 = (i__42557__auto___50540 + (1));
i__42557__auto___50540 = G__50541;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BudgetService.reserve.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BudgetService.reserve.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.reserve,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BudgetService.reserve.cljs$lang$maxFixedArity = (1);

web.BudgetService.reserve.cljs$lang$applyTo = (function (seq50537){
var G__50538 = cljs.core.first.call(null,seq50537);
var seq50537__$1 = cljs.core.next.call(null,seq50537);
return web.BudgetService.reserve.cljs$core$IFn$_invoke$arity$variadic(G__50538,seq50537__$1);
});


//# sourceMappingURL=BudgetService.js.map?rel=1565798840607
