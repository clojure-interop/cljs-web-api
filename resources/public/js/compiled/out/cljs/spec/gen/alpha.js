// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50727 = arguments.length;
var i__42557__auto___50728 = (0);
while(true){
if((i__42557__auto___50728 < len__42556__auto___50727)){
args__42563__auto__.push((arguments[i__42557__auto___50728]));

var G__50729 = (i__42557__auto___50728 + (1));
i__42557__auto___50728 = G__50729;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq50726){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50726));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50731 = arguments.length;
var i__42557__auto___50732 = (0);
while(true){
if((i__42557__auto___50732 < len__42556__auto___50731)){
args__42563__auto__.push((arguments[i__42557__auto___50732]));

var G__50733 = (i__42557__auto___50732 + (1));
i__42557__auto___50732 = G__50733;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq50730){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50730));
});

var g_QMARK__50734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_50735 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__50734){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__50734))
,null));
var mkg_50736 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__50734,g_50735){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__50734,g_50735))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__50734,g_50735,mkg_50736){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50734).call(null,x);
});})(g_QMARK__50734,g_50735,mkg_50736))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__50734,g_50735,mkg_50736){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_50736).call(null,gfn);
});})(g_QMARK__50734,g_50735,mkg_50736))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__50734,g_50735,mkg_50736){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_50735).call(null,generator);
});})(g_QMARK__50734,g_50735,mkg_50736))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42649__auto___50756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42649__auto___50756){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50757 = arguments.length;
var i__42557__auto___50758 = (0);
while(true){
if((i__42557__auto___50758 < len__42556__auto___50757)){
args__42563__auto__.push((arguments[i__42557__auto___50758]));

var G__50759 = (i__42557__auto___50758 + (1));
i__42557__auto___50758 = G__50759;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50756))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50756),args);
});})(g__42649__auto___50756))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42649__auto___50756){
return (function (seq50737){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50737));
});})(g__42649__auto___50756))
;


var g__42649__auto___50760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42649__auto___50760){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50761 = arguments.length;
var i__42557__auto___50762 = (0);
while(true){
if((i__42557__auto___50762 < len__42556__auto___50761)){
args__42563__auto__.push((arguments[i__42557__auto___50762]));

var G__50763 = (i__42557__auto___50762 + (1));
i__42557__auto___50762 = G__50763;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50760))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50760),args);
});})(g__42649__auto___50760))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42649__auto___50760){
return (function (seq50738){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50738));
});})(g__42649__auto___50760))
;


var g__42649__auto___50764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42649__auto___50764){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50765 = arguments.length;
var i__42557__auto___50766 = (0);
while(true){
if((i__42557__auto___50766 < len__42556__auto___50765)){
args__42563__auto__.push((arguments[i__42557__auto___50766]));

var G__50767 = (i__42557__auto___50766 + (1));
i__42557__auto___50766 = G__50767;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50764))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50764),args);
});})(g__42649__auto___50764))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42649__auto___50764){
return (function (seq50739){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50739));
});})(g__42649__auto___50764))
;


var g__42649__auto___50768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42649__auto___50768){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50769 = arguments.length;
var i__42557__auto___50770 = (0);
while(true){
if((i__42557__auto___50770 < len__42556__auto___50769)){
args__42563__auto__.push((arguments[i__42557__auto___50770]));

var G__50771 = (i__42557__auto___50770 + (1));
i__42557__auto___50770 = G__50771;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50768))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50768),args);
});})(g__42649__auto___50768))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42649__auto___50768){
return (function (seq50740){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50740));
});})(g__42649__auto___50768))
;


var g__42649__auto___50772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42649__auto___50772){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50773 = arguments.length;
var i__42557__auto___50774 = (0);
while(true){
if((i__42557__auto___50774 < len__42556__auto___50773)){
args__42563__auto__.push((arguments[i__42557__auto___50774]));

var G__50775 = (i__42557__auto___50774 + (1));
i__42557__auto___50774 = G__50775;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50772))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50772),args);
});})(g__42649__auto___50772))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42649__auto___50772){
return (function (seq50741){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50741));
});})(g__42649__auto___50772))
;


var g__42649__auto___50776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42649__auto___50776){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50777 = arguments.length;
var i__42557__auto___50778 = (0);
while(true){
if((i__42557__auto___50778 < len__42556__auto___50777)){
args__42563__auto__.push((arguments[i__42557__auto___50778]));

var G__50779 = (i__42557__auto___50778 + (1));
i__42557__auto___50778 = G__50779;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50776))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50776),args);
});})(g__42649__auto___50776))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42649__auto___50776){
return (function (seq50742){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50742));
});})(g__42649__auto___50776))
;


var g__42649__auto___50780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42649__auto___50780){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50781 = arguments.length;
var i__42557__auto___50782 = (0);
while(true){
if((i__42557__auto___50782 < len__42556__auto___50781)){
args__42563__auto__.push((arguments[i__42557__auto___50782]));

var G__50783 = (i__42557__auto___50782 + (1));
i__42557__auto___50782 = G__50783;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50780))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50780),args);
});})(g__42649__auto___50780))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42649__auto___50780){
return (function (seq50743){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50743));
});})(g__42649__auto___50780))
;


var g__42649__auto___50784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42649__auto___50784){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50785 = arguments.length;
var i__42557__auto___50786 = (0);
while(true){
if((i__42557__auto___50786 < len__42556__auto___50785)){
args__42563__auto__.push((arguments[i__42557__auto___50786]));

var G__50787 = (i__42557__auto___50786 + (1));
i__42557__auto___50786 = G__50787;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50784))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50784),args);
});})(g__42649__auto___50784))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42649__auto___50784){
return (function (seq50744){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50744));
});})(g__42649__auto___50784))
;


var g__42649__auto___50788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42649__auto___50788){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50789 = arguments.length;
var i__42557__auto___50790 = (0);
while(true){
if((i__42557__auto___50790 < len__42556__auto___50789)){
args__42563__auto__.push((arguments[i__42557__auto___50790]));

var G__50791 = (i__42557__auto___50790 + (1));
i__42557__auto___50790 = G__50791;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50788))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50788),args);
});})(g__42649__auto___50788))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42649__auto___50788){
return (function (seq50745){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50745));
});})(g__42649__auto___50788))
;


var g__42649__auto___50792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42649__auto___50792){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50793 = arguments.length;
var i__42557__auto___50794 = (0);
while(true){
if((i__42557__auto___50794 < len__42556__auto___50793)){
args__42563__auto__.push((arguments[i__42557__auto___50794]));

var G__50795 = (i__42557__auto___50794 + (1));
i__42557__auto___50794 = G__50795;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50792))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50792),args);
});})(g__42649__auto___50792))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42649__auto___50792){
return (function (seq50746){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50746));
});})(g__42649__auto___50792))
;


var g__42649__auto___50796 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42649__auto___50796){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50797 = arguments.length;
var i__42557__auto___50798 = (0);
while(true){
if((i__42557__auto___50798 < len__42556__auto___50797)){
args__42563__auto__.push((arguments[i__42557__auto___50798]));

var G__50799 = (i__42557__auto___50798 + (1));
i__42557__auto___50798 = G__50799;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50796))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50796),args);
});})(g__42649__auto___50796))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42649__auto___50796){
return (function (seq50747){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50747));
});})(g__42649__auto___50796))
;


var g__42649__auto___50800 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42649__auto___50800){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50801 = arguments.length;
var i__42557__auto___50802 = (0);
while(true){
if((i__42557__auto___50802 < len__42556__auto___50801)){
args__42563__auto__.push((arguments[i__42557__auto___50802]));

var G__50803 = (i__42557__auto___50802 + (1));
i__42557__auto___50802 = G__50803;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50800))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50800){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50800),args);
});})(g__42649__auto___50800))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42649__auto___50800){
return (function (seq50748){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50748));
});})(g__42649__auto___50800))
;


var g__42649__auto___50804 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42649__auto___50804){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50805 = arguments.length;
var i__42557__auto___50806 = (0);
while(true){
if((i__42557__auto___50806 < len__42556__auto___50805)){
args__42563__auto__.push((arguments[i__42557__auto___50806]));

var G__50807 = (i__42557__auto___50806 + (1));
i__42557__auto___50806 = G__50807;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50804))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50804){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50804),args);
});})(g__42649__auto___50804))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42649__auto___50804){
return (function (seq50749){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50749));
});})(g__42649__auto___50804))
;


var g__42649__auto___50808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42649__auto___50808){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50809 = arguments.length;
var i__42557__auto___50810 = (0);
while(true){
if((i__42557__auto___50810 < len__42556__auto___50809)){
args__42563__auto__.push((arguments[i__42557__auto___50810]));

var G__50811 = (i__42557__auto___50810 + (1));
i__42557__auto___50810 = G__50811;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50808))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50808){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50808),args);
});})(g__42649__auto___50808))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42649__auto___50808){
return (function (seq50750){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50750));
});})(g__42649__auto___50808))
;


var g__42649__auto___50812 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42649__auto___50812){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50813 = arguments.length;
var i__42557__auto___50814 = (0);
while(true){
if((i__42557__auto___50814 < len__42556__auto___50813)){
args__42563__auto__.push((arguments[i__42557__auto___50814]));

var G__50815 = (i__42557__auto___50814 + (1));
i__42557__auto___50814 = G__50815;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50812))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50812){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50812),args);
});})(g__42649__auto___50812))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42649__auto___50812){
return (function (seq50751){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50751));
});})(g__42649__auto___50812))
;


var g__42649__auto___50816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42649__auto___50816){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50817 = arguments.length;
var i__42557__auto___50818 = (0);
while(true){
if((i__42557__auto___50818 < len__42556__auto___50817)){
args__42563__auto__.push((arguments[i__42557__auto___50818]));

var G__50819 = (i__42557__auto___50818 + (1));
i__42557__auto___50818 = G__50819;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50816))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50816),args);
});})(g__42649__auto___50816))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42649__auto___50816){
return (function (seq50752){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50752));
});})(g__42649__auto___50816))
;


var g__42649__auto___50820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42649__auto___50820){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50821 = arguments.length;
var i__42557__auto___50822 = (0);
while(true){
if((i__42557__auto___50822 < len__42556__auto___50821)){
args__42563__auto__.push((arguments[i__42557__auto___50822]));

var G__50823 = (i__42557__auto___50822 + (1));
i__42557__auto___50822 = G__50823;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50820))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50820),args);
});})(g__42649__auto___50820))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42649__auto___50820){
return (function (seq50753){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50753));
});})(g__42649__auto___50820))
;


var g__42649__auto___50824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42649__auto___50824){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50825 = arguments.length;
var i__42557__auto___50826 = (0);
while(true){
if((i__42557__auto___50826 < len__42556__auto___50825)){
args__42563__auto__.push((arguments[i__42557__auto___50826]));

var G__50827 = (i__42557__auto___50826 + (1));
i__42557__auto___50826 = G__50827;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50824))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50824),args);
});})(g__42649__auto___50824))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42649__auto___50824){
return (function (seq50754){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50754));
});})(g__42649__auto___50824))
;


var g__42649__auto___50828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42649__auto___50828){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50829 = arguments.length;
var i__42557__auto___50830 = (0);
while(true){
if((i__42557__auto___50830 < len__42556__auto___50829)){
args__42563__auto__.push((arguments[i__42557__auto___50830]));

var G__50831 = (i__42557__auto___50830 + (1));
i__42557__auto___50830 = G__50831;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42649__auto___50828))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42649__auto___50828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42649__auto___50828),args);
});})(g__42649__auto___50828))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42649__auto___50828){
return (function (seq50755){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50755));
});})(g__42649__auto___50828))
;

var g__42662__auto___50853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42662__auto___50853){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50854 = arguments.length;
var i__42557__auto___50855 = (0);
while(true){
if((i__42557__auto___50855 < len__42556__auto___50854)){
args__42563__auto__.push((arguments[i__42557__auto___50855]));

var G__50856 = (i__42557__auto___50855 + (1));
i__42557__auto___50855 = G__50856;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50853))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50853){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50853);
});})(g__42662__auto___50853))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42662__auto___50853){
return (function (seq50832){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50832));
});})(g__42662__auto___50853))
;


var g__42662__auto___50857 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42662__auto___50857){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50858 = arguments.length;
var i__42557__auto___50859 = (0);
while(true){
if((i__42557__auto___50859 < len__42556__auto___50858)){
args__42563__auto__.push((arguments[i__42557__auto___50859]));

var G__50860 = (i__42557__auto___50859 + (1));
i__42557__auto___50859 = G__50860;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50857))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50857){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50857);
});})(g__42662__auto___50857))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42662__auto___50857){
return (function (seq50833){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50833));
});})(g__42662__auto___50857))
;


var g__42662__auto___50861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42662__auto___50861){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50862 = arguments.length;
var i__42557__auto___50863 = (0);
while(true){
if((i__42557__auto___50863 < len__42556__auto___50862)){
args__42563__auto__.push((arguments[i__42557__auto___50863]));

var G__50864 = (i__42557__auto___50863 + (1));
i__42557__auto___50863 = G__50864;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50861))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50861){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50861);
});})(g__42662__auto___50861))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42662__auto___50861){
return (function (seq50834){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50834));
});})(g__42662__auto___50861))
;


var g__42662__auto___50865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42662__auto___50865){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50866 = arguments.length;
var i__42557__auto___50867 = (0);
while(true){
if((i__42557__auto___50867 < len__42556__auto___50866)){
args__42563__auto__.push((arguments[i__42557__auto___50867]));

var G__50868 = (i__42557__auto___50867 + (1));
i__42557__auto___50867 = G__50868;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50865))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50865){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50865);
});})(g__42662__auto___50865))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42662__auto___50865){
return (function (seq50835){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50835));
});})(g__42662__auto___50865))
;


var g__42662__auto___50869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42662__auto___50869){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50870 = arguments.length;
var i__42557__auto___50871 = (0);
while(true){
if((i__42557__auto___50871 < len__42556__auto___50870)){
args__42563__auto__.push((arguments[i__42557__auto___50871]));

var G__50872 = (i__42557__auto___50871 + (1));
i__42557__auto___50871 = G__50872;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50869))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50869){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50869);
});})(g__42662__auto___50869))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42662__auto___50869){
return (function (seq50836){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50836));
});})(g__42662__auto___50869))
;


var g__42662__auto___50873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42662__auto___50873){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50874 = arguments.length;
var i__42557__auto___50875 = (0);
while(true){
if((i__42557__auto___50875 < len__42556__auto___50874)){
args__42563__auto__.push((arguments[i__42557__auto___50875]));

var G__50876 = (i__42557__auto___50875 + (1));
i__42557__auto___50875 = G__50876;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50873))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50873){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50873);
});})(g__42662__auto___50873))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42662__auto___50873){
return (function (seq50837){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50837));
});})(g__42662__auto___50873))
;


var g__42662__auto___50877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42662__auto___50877){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50878 = arguments.length;
var i__42557__auto___50879 = (0);
while(true){
if((i__42557__auto___50879 < len__42556__auto___50878)){
args__42563__auto__.push((arguments[i__42557__auto___50879]));

var G__50880 = (i__42557__auto___50879 + (1));
i__42557__auto___50879 = G__50880;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50877))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50877){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50877);
});})(g__42662__auto___50877))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42662__auto___50877){
return (function (seq50838){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50838));
});})(g__42662__auto___50877))
;


var g__42662__auto___50881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42662__auto___50881){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50882 = arguments.length;
var i__42557__auto___50883 = (0);
while(true){
if((i__42557__auto___50883 < len__42556__auto___50882)){
args__42563__auto__.push((arguments[i__42557__auto___50883]));

var G__50884 = (i__42557__auto___50883 + (1));
i__42557__auto___50883 = G__50884;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50881))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50881){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50881);
});})(g__42662__auto___50881))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42662__auto___50881){
return (function (seq50839){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50839));
});})(g__42662__auto___50881))
;


var g__42662__auto___50885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42662__auto___50885){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50886 = arguments.length;
var i__42557__auto___50887 = (0);
while(true){
if((i__42557__auto___50887 < len__42556__auto___50886)){
args__42563__auto__.push((arguments[i__42557__auto___50887]));

var G__50888 = (i__42557__auto___50887 + (1));
i__42557__auto___50887 = G__50888;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50885))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50885){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50885);
});})(g__42662__auto___50885))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42662__auto___50885){
return (function (seq50840){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50840));
});})(g__42662__auto___50885))
;


var g__42662__auto___50889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42662__auto___50889){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50890 = arguments.length;
var i__42557__auto___50891 = (0);
while(true){
if((i__42557__auto___50891 < len__42556__auto___50890)){
args__42563__auto__.push((arguments[i__42557__auto___50891]));

var G__50892 = (i__42557__auto___50891 + (1));
i__42557__auto___50891 = G__50892;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50889))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50889){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50889);
});})(g__42662__auto___50889))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42662__auto___50889){
return (function (seq50841){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50841));
});})(g__42662__auto___50889))
;


var g__42662__auto___50893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42662__auto___50893){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50894 = arguments.length;
var i__42557__auto___50895 = (0);
while(true){
if((i__42557__auto___50895 < len__42556__auto___50894)){
args__42563__auto__.push((arguments[i__42557__auto___50895]));

var G__50896 = (i__42557__auto___50895 + (1));
i__42557__auto___50895 = G__50896;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50893))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50893){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50893);
});})(g__42662__auto___50893))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42662__auto___50893){
return (function (seq50842){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50842));
});})(g__42662__auto___50893))
;


var g__42662__auto___50897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42662__auto___50897){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50898 = arguments.length;
var i__42557__auto___50899 = (0);
while(true){
if((i__42557__auto___50899 < len__42556__auto___50898)){
args__42563__auto__.push((arguments[i__42557__auto___50899]));

var G__50900 = (i__42557__auto___50899 + (1));
i__42557__auto___50899 = G__50900;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50897))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50897){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50897);
});})(g__42662__auto___50897))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42662__auto___50897){
return (function (seq50843){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50843));
});})(g__42662__auto___50897))
;


var g__42662__auto___50901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42662__auto___50901){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50902 = arguments.length;
var i__42557__auto___50903 = (0);
while(true){
if((i__42557__auto___50903 < len__42556__auto___50902)){
args__42563__auto__.push((arguments[i__42557__auto___50903]));

var G__50904 = (i__42557__auto___50903 + (1));
i__42557__auto___50903 = G__50904;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50901))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50901){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50901);
});})(g__42662__auto___50901))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42662__auto___50901){
return (function (seq50844){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50844));
});})(g__42662__auto___50901))
;


var g__42662__auto___50905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42662__auto___50905){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50906 = arguments.length;
var i__42557__auto___50907 = (0);
while(true){
if((i__42557__auto___50907 < len__42556__auto___50906)){
args__42563__auto__.push((arguments[i__42557__auto___50907]));

var G__50908 = (i__42557__auto___50907 + (1));
i__42557__auto___50907 = G__50908;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50905))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50905){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50905);
});})(g__42662__auto___50905))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42662__auto___50905){
return (function (seq50845){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50845));
});})(g__42662__auto___50905))
;


var g__42662__auto___50909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42662__auto___50909){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50910 = arguments.length;
var i__42557__auto___50911 = (0);
while(true){
if((i__42557__auto___50911 < len__42556__auto___50910)){
args__42563__auto__.push((arguments[i__42557__auto___50911]));

var G__50912 = (i__42557__auto___50911 + (1));
i__42557__auto___50911 = G__50912;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50909))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50909){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50909);
});})(g__42662__auto___50909))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42662__auto___50909){
return (function (seq50846){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50846));
});})(g__42662__auto___50909))
;


var g__42662__auto___50913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42662__auto___50913){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50914 = arguments.length;
var i__42557__auto___50915 = (0);
while(true){
if((i__42557__auto___50915 < len__42556__auto___50914)){
args__42563__auto__.push((arguments[i__42557__auto___50915]));

var G__50916 = (i__42557__auto___50915 + (1));
i__42557__auto___50915 = G__50916;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50913))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50913){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50913);
});})(g__42662__auto___50913))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42662__auto___50913){
return (function (seq50847){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50847));
});})(g__42662__auto___50913))
;


var g__42662__auto___50917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42662__auto___50917){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50918 = arguments.length;
var i__42557__auto___50919 = (0);
while(true){
if((i__42557__auto___50919 < len__42556__auto___50918)){
args__42563__auto__.push((arguments[i__42557__auto___50919]));

var G__50920 = (i__42557__auto___50919 + (1));
i__42557__auto___50919 = G__50920;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50917))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50917){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50917);
});})(g__42662__auto___50917))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42662__auto___50917){
return (function (seq50848){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50848));
});})(g__42662__auto___50917))
;


var g__42662__auto___50921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42662__auto___50921){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50922 = arguments.length;
var i__42557__auto___50923 = (0);
while(true){
if((i__42557__auto___50923 < len__42556__auto___50922)){
args__42563__auto__.push((arguments[i__42557__auto___50923]));

var G__50924 = (i__42557__auto___50923 + (1));
i__42557__auto___50923 = G__50924;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50921))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50921){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50921);
});})(g__42662__auto___50921))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42662__auto___50921){
return (function (seq50849){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50849));
});})(g__42662__auto___50921))
;


var g__42662__auto___50925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42662__auto___50925){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50926 = arguments.length;
var i__42557__auto___50927 = (0);
while(true){
if((i__42557__auto___50927 < len__42556__auto___50926)){
args__42563__auto__.push((arguments[i__42557__auto___50927]));

var G__50928 = (i__42557__auto___50927 + (1));
i__42557__auto___50927 = G__50928;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50925))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50925){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50925);
});})(g__42662__auto___50925))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42662__auto___50925){
return (function (seq50850){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50850));
});})(g__42662__auto___50925))
;


var g__42662__auto___50929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42662__auto___50929){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50930 = arguments.length;
var i__42557__auto___50931 = (0);
while(true){
if((i__42557__auto___50931 < len__42556__auto___50930)){
args__42563__auto__.push((arguments[i__42557__auto___50931]));

var G__50932 = (i__42557__auto___50931 + (1));
i__42557__auto___50931 = G__50932;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50929))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50929){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50929);
});})(g__42662__auto___50929))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42662__auto___50929){
return (function (seq50851){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50851));
});})(g__42662__auto___50929))
;


var g__42662__auto___50933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42662__auto___50933){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50934 = arguments.length;
var i__42557__auto___50935 = (0);
while(true){
if((i__42557__auto___50935 < len__42556__auto___50934)){
args__42563__auto__.push((arguments[i__42557__auto___50935]));

var G__50936 = (i__42557__auto___50935 + (1));
i__42557__auto___50935 = G__50936;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});})(g__42662__auto___50933))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42662__auto___50933){
return (function (args){
return cljs.core.deref.call(null,g__42662__auto___50933);
});})(g__42662__auto___50933))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42662__auto___50933){
return (function (seq50852){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50852));
});})(g__42662__auto___50933))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50939 = arguments.length;
var i__42557__auto___50940 = (0);
while(true){
if((i__42557__auto___50940 < len__42556__auto___50939)){
args__42563__auto__.push((arguments[i__42557__auto___50940]));

var G__50941 = (i__42557__auto___50940 + (1));
i__42557__auto___50940 = G__50941;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__50937_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50937_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq50938){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50938));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__50942_SHARP_){
return (new Date(p1__50942_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1565798844316
