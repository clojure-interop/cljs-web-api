// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41385__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41385__auto__){
return or__41385__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41385__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
var or__41385__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__41385__auto____$1)){
return or__41385__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49417_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49417_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49418 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49419 = null;
var count__49420 = (0);
var i__49421 = (0);
while(true){
if((i__49421 < count__49420)){
var n = cljs.core._nth.call(null,chunk__49419,i__49421);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49422 = seq__49418;
var G__49423 = chunk__49419;
var G__49424 = count__49420;
var G__49425 = (i__49421 + (1));
seq__49418 = G__49422;
chunk__49419 = G__49423;
count__49420 = G__49424;
i__49421 = G__49425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49418);
if(temp__4657__auto__){
var seq__49418__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49418__$1)){
var c__42224__auto__ = cljs.core.chunk_first.call(null,seq__49418__$1);
var G__49426 = cljs.core.chunk_rest.call(null,seq__49418__$1);
var G__49427 = c__42224__auto__;
var G__49428 = cljs.core.count.call(null,c__42224__auto__);
var G__49429 = (0);
seq__49418 = G__49426;
chunk__49419 = G__49427;
count__49420 = G__49428;
i__49421 = G__49429;
continue;
} else {
var n = cljs.core.first.call(null,seq__49418__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49430 = cljs.core.next.call(null,seq__49418__$1);
var G__49431 = null;
var G__49432 = (0);
var G__49433 = (0);
seq__49418 = G__49430;
chunk__49419 = G__49431;
count__49420 = G__49432;
i__49421 = G__49433;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__49434){
var vec__49435 = p__49434;
var _ = cljs.core.nth.call(null,vec__49435,(0),null);
var v = cljs.core.nth.call(null,vec__49435,(1),null);
var and__41373__auto__ = v;
if(cljs.core.truth_(and__41373__auto__)){
return v.call(null,dep);
} else {
return and__41373__auto__;
}
}),cljs.core.filter.call(null,(function (p__49438){
var vec__49439 = p__49438;
var k = cljs.core.nth.call(null,vec__49439,(0),null);
var v = cljs.core.nth.call(null,vec__49439,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49451_49459 = cljs.core.seq.call(null,deps);
var chunk__49452_49460 = null;
var count__49453_49461 = (0);
var i__49454_49462 = (0);
while(true){
if((i__49454_49462 < count__49453_49461)){
var dep_49463 = cljs.core._nth.call(null,chunk__49452_49460,i__49454_49462);
if(cljs.core.truth_((function (){var and__41373__auto__ = dep_49463;
if(cljs.core.truth_(and__41373__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49463));
} else {
return and__41373__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49463,(depth + (1)),state);
} else {
}

var G__49464 = seq__49451_49459;
var G__49465 = chunk__49452_49460;
var G__49466 = count__49453_49461;
var G__49467 = (i__49454_49462 + (1));
seq__49451_49459 = G__49464;
chunk__49452_49460 = G__49465;
count__49453_49461 = G__49466;
i__49454_49462 = G__49467;
continue;
} else {
var temp__4657__auto___49468 = cljs.core.seq.call(null,seq__49451_49459);
if(temp__4657__auto___49468){
var seq__49451_49469__$1 = temp__4657__auto___49468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49451_49469__$1)){
var c__42224__auto___49470 = cljs.core.chunk_first.call(null,seq__49451_49469__$1);
var G__49471 = cljs.core.chunk_rest.call(null,seq__49451_49469__$1);
var G__49472 = c__42224__auto___49470;
var G__49473 = cljs.core.count.call(null,c__42224__auto___49470);
var G__49474 = (0);
seq__49451_49459 = G__49471;
chunk__49452_49460 = G__49472;
count__49453_49461 = G__49473;
i__49454_49462 = G__49474;
continue;
} else {
var dep_49475 = cljs.core.first.call(null,seq__49451_49469__$1);
if(cljs.core.truth_((function (){var and__41373__auto__ = dep_49475;
if(cljs.core.truth_(and__41373__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49475));
} else {
return and__41373__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49475,(depth + (1)),state);
} else {
}

var G__49476 = cljs.core.next.call(null,seq__49451_49469__$1);
var G__49477 = null;
var G__49478 = (0);
var G__49479 = (0);
seq__49451_49459 = G__49476;
chunk__49452_49460 = G__49477;
count__49453_49461 = G__49478;
i__49454_49462 = G__49479;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49455){
var vec__49456 = p__49455;
var seq__49457 = cljs.core.seq.call(null,vec__49456);
var first__49458 = cljs.core.first.call(null,seq__49457);
var seq__49457__$1 = cljs.core.next.call(null,seq__49457);
var x = first__49458;
var xs = seq__49457__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49456,seq__49457,first__49458,seq__49457__$1,x,xs,get_deps__$1){
return (function (p1__49442_SHARP_){
return clojure.set.difference.call(null,p1__49442_SHARP_,x);
});})(vec__49456,seq__49457,first__49458,seq__49457__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49480 = cljs.core.seq.call(null,provides);
var chunk__49481 = null;
var count__49482 = (0);
var i__49483 = (0);
while(true){
if((i__49483 < count__49482)){
var prov = cljs.core._nth.call(null,chunk__49481,i__49483);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49484_49492 = cljs.core.seq.call(null,requires);
var chunk__49485_49493 = null;
var count__49486_49494 = (0);
var i__49487_49495 = (0);
while(true){
if((i__49487_49495 < count__49486_49494)){
var req_49496 = cljs.core._nth.call(null,chunk__49485_49493,i__49487_49495);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49496,prov);

var G__49497 = seq__49484_49492;
var G__49498 = chunk__49485_49493;
var G__49499 = count__49486_49494;
var G__49500 = (i__49487_49495 + (1));
seq__49484_49492 = G__49497;
chunk__49485_49493 = G__49498;
count__49486_49494 = G__49499;
i__49487_49495 = G__49500;
continue;
} else {
var temp__4657__auto___49501 = cljs.core.seq.call(null,seq__49484_49492);
if(temp__4657__auto___49501){
var seq__49484_49502__$1 = temp__4657__auto___49501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49484_49502__$1)){
var c__42224__auto___49503 = cljs.core.chunk_first.call(null,seq__49484_49502__$1);
var G__49504 = cljs.core.chunk_rest.call(null,seq__49484_49502__$1);
var G__49505 = c__42224__auto___49503;
var G__49506 = cljs.core.count.call(null,c__42224__auto___49503);
var G__49507 = (0);
seq__49484_49492 = G__49504;
chunk__49485_49493 = G__49505;
count__49486_49494 = G__49506;
i__49487_49495 = G__49507;
continue;
} else {
var req_49508 = cljs.core.first.call(null,seq__49484_49502__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49508,prov);

var G__49509 = cljs.core.next.call(null,seq__49484_49502__$1);
var G__49510 = null;
var G__49511 = (0);
var G__49512 = (0);
seq__49484_49492 = G__49509;
chunk__49485_49493 = G__49510;
count__49486_49494 = G__49511;
i__49487_49495 = G__49512;
continue;
}
} else {
}
}
break;
}

var G__49513 = seq__49480;
var G__49514 = chunk__49481;
var G__49515 = count__49482;
var G__49516 = (i__49483 + (1));
seq__49480 = G__49513;
chunk__49481 = G__49514;
count__49482 = G__49515;
i__49483 = G__49516;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49480);
if(temp__4657__auto__){
var seq__49480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49480__$1)){
var c__42224__auto__ = cljs.core.chunk_first.call(null,seq__49480__$1);
var G__49517 = cljs.core.chunk_rest.call(null,seq__49480__$1);
var G__49518 = c__42224__auto__;
var G__49519 = cljs.core.count.call(null,c__42224__auto__);
var G__49520 = (0);
seq__49480 = G__49517;
chunk__49481 = G__49518;
count__49482 = G__49519;
i__49483 = G__49520;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49480__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49488_49521 = cljs.core.seq.call(null,requires);
var chunk__49489_49522 = null;
var count__49490_49523 = (0);
var i__49491_49524 = (0);
while(true){
if((i__49491_49524 < count__49490_49523)){
var req_49525 = cljs.core._nth.call(null,chunk__49489_49522,i__49491_49524);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49525,prov);

var G__49526 = seq__49488_49521;
var G__49527 = chunk__49489_49522;
var G__49528 = count__49490_49523;
var G__49529 = (i__49491_49524 + (1));
seq__49488_49521 = G__49526;
chunk__49489_49522 = G__49527;
count__49490_49523 = G__49528;
i__49491_49524 = G__49529;
continue;
} else {
var temp__4657__auto___49530__$1 = cljs.core.seq.call(null,seq__49488_49521);
if(temp__4657__auto___49530__$1){
var seq__49488_49531__$1 = temp__4657__auto___49530__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49488_49531__$1)){
var c__42224__auto___49532 = cljs.core.chunk_first.call(null,seq__49488_49531__$1);
var G__49533 = cljs.core.chunk_rest.call(null,seq__49488_49531__$1);
var G__49534 = c__42224__auto___49532;
var G__49535 = cljs.core.count.call(null,c__42224__auto___49532);
var G__49536 = (0);
seq__49488_49521 = G__49533;
chunk__49489_49522 = G__49534;
count__49490_49523 = G__49535;
i__49491_49524 = G__49536;
continue;
} else {
var req_49537 = cljs.core.first.call(null,seq__49488_49531__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49537,prov);

var G__49538 = cljs.core.next.call(null,seq__49488_49531__$1);
var G__49539 = null;
var G__49540 = (0);
var G__49541 = (0);
seq__49488_49521 = G__49538;
chunk__49489_49522 = G__49539;
count__49490_49523 = G__49540;
i__49491_49524 = G__49541;
continue;
}
} else {
}
}
break;
}

var G__49542 = cljs.core.next.call(null,seq__49480__$1);
var G__49543 = null;
var G__49544 = (0);
var G__49545 = (0);
seq__49480 = G__49542;
chunk__49481 = G__49543;
count__49482 = G__49544;
i__49483 = G__49545;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49546_49550 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49547_49551 = null;
var count__49548_49552 = (0);
var i__49549_49553 = (0);
while(true){
if((i__49549_49553 < count__49548_49552)){
var ns_49554 = cljs.core._nth.call(null,chunk__49547_49551,i__49549_49553);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49554);

var G__49555 = seq__49546_49550;
var G__49556 = chunk__49547_49551;
var G__49557 = count__49548_49552;
var G__49558 = (i__49549_49553 + (1));
seq__49546_49550 = G__49555;
chunk__49547_49551 = G__49556;
count__49548_49552 = G__49557;
i__49549_49553 = G__49558;
continue;
} else {
var temp__4657__auto___49559 = cljs.core.seq.call(null,seq__49546_49550);
if(temp__4657__auto___49559){
var seq__49546_49560__$1 = temp__4657__auto___49559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49546_49560__$1)){
var c__42224__auto___49561 = cljs.core.chunk_first.call(null,seq__49546_49560__$1);
var G__49562 = cljs.core.chunk_rest.call(null,seq__49546_49560__$1);
var G__49563 = c__42224__auto___49561;
var G__49564 = cljs.core.count.call(null,c__42224__auto___49561);
var G__49565 = (0);
seq__49546_49550 = G__49562;
chunk__49547_49551 = G__49563;
count__49548_49552 = G__49564;
i__49549_49553 = G__49565;
continue;
} else {
var ns_49566 = cljs.core.first.call(null,seq__49546_49560__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49566);

var G__49567 = cljs.core.next.call(null,seq__49546_49560__$1);
var G__49568 = null;
var G__49569 = (0);
var G__49570 = (0);
seq__49546_49550 = G__49567;
chunk__49547_49551 = G__49568;
count__49548_49552 = G__49569;
i__49549_49553 = G__49570;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41385__auto__ = goog.require__;
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49571__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49572__i = 0, G__49572__a = new Array(arguments.length -  0);
while (G__49572__i < G__49572__a.length) {G__49572__a[G__49572__i] = arguments[G__49572__i + 0]; ++G__49572__i;}
  args = new cljs.core.IndexedSeq(G__49572__a,0,null);
} 
return G__49571__delegate.call(this,args);};
G__49571.cljs$lang$maxFixedArity = 0;
G__49571.cljs$lang$applyTo = (function (arglist__49573){
var args = cljs.core.seq(arglist__49573);
return G__49571__delegate(args);
});
G__49571.cljs$core$IFn$_invoke$arity$variadic = G__49571__delegate;
return G__49571;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49574_SHARP_,p2__49575_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49574_SHARP_)].join('')),p2__49575_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49576_SHARP_,p2__49577_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49576_SHARP_)].join(''),p2__49577_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49578 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49578.addCallback(((function (G__49578){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49578))
);

G__49578.addErrback(((function (G__49578){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49578))
);

return G__49578;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49579){if((e49579 instanceof Error)){
var e = e49579;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49579;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49580){if((e49580 instanceof Error)){
var e = e49580;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49580;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49581 = cljs.core._EQ_;
var expr__49582 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49581.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49582))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__49581.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49582))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__49581.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49582))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__49581,expr__49582){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49581,expr__49582))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49584,callback){
var map__49585 = p__49584;
var map__49585__$1 = ((((!((map__49585 == null)))?((((map__49585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49585):map__49585);
var file_msg = map__49585__$1;
var request_url = cljs.core.get.call(null,map__49585__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__41385__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__49585,map__49585__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49585,map__49585__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__){
return (function (state_49625){
var state_val_49626 = (state_49625[(1)]);
if((state_val_49626 === (7))){
var inst_49621 = (state_49625[(2)]);
var state_49625__$1 = state_49625;
var statearr_49627_49654 = state_49625__$1;
(statearr_49627_49654[(2)] = inst_49621);

(statearr_49627_49654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (1))){
var state_49625__$1 = state_49625;
var statearr_49628_49655 = state_49625__$1;
(statearr_49628_49655[(2)] = null);

(statearr_49628_49655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (4))){
var inst_49589 = (state_49625[(7)]);
var inst_49589__$1 = (state_49625[(2)]);
var state_49625__$1 = (function (){var statearr_49629 = state_49625;
(statearr_49629[(7)] = inst_49589__$1);

return statearr_49629;
})();
if(cljs.core.truth_(inst_49589__$1)){
var statearr_49630_49656 = state_49625__$1;
(statearr_49630_49656[(1)] = (5));

} else {
var statearr_49631_49657 = state_49625__$1;
(statearr_49631_49657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (15))){
var inst_49606 = (state_49625[(8)]);
var inst_49603 = (state_49625[(9)]);
var inst_49608 = inst_49606.call(null,inst_49603);
var state_49625__$1 = state_49625;
var statearr_49632_49658 = state_49625__$1;
(statearr_49632_49658[(2)] = inst_49608);

(statearr_49632_49658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (13))){
var inst_49615 = (state_49625[(2)]);
var state_49625__$1 = state_49625;
var statearr_49633_49659 = state_49625__$1;
(statearr_49633_49659[(2)] = inst_49615);

(statearr_49633_49659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (6))){
var state_49625__$1 = state_49625;
var statearr_49634_49660 = state_49625__$1;
(statearr_49634_49660[(2)] = null);

(statearr_49634_49660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (17))){
var inst_49612 = (state_49625[(2)]);
var state_49625__$1 = state_49625;
var statearr_49635_49661 = state_49625__$1;
(statearr_49635_49661[(2)] = inst_49612);

(statearr_49635_49661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (3))){
var inst_49623 = (state_49625[(2)]);
var state_49625__$1 = state_49625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49625__$1,inst_49623);
} else {
if((state_val_49626 === (12))){
var state_49625__$1 = state_49625;
var statearr_49636_49662 = state_49625__$1;
(statearr_49636_49662[(2)] = null);

(statearr_49636_49662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (2))){
var state_49625__$1 = state_49625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49625__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49626 === (11))){
var inst_49594 = (state_49625[(10)]);
var inst_49601 = figwheel.client.file_reloading.blocking_load.call(null,inst_49594);
var state_49625__$1 = state_49625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49625__$1,(14),inst_49601);
} else {
if((state_val_49626 === (9))){
var inst_49594 = (state_49625[(10)]);
var state_49625__$1 = state_49625;
if(cljs.core.truth_(inst_49594)){
var statearr_49637_49663 = state_49625__$1;
(statearr_49637_49663[(1)] = (11));

} else {
var statearr_49638_49664 = state_49625__$1;
(statearr_49638_49664[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (5))){
var inst_49589 = (state_49625[(7)]);
var inst_49595 = (state_49625[(11)]);
var inst_49594 = cljs.core.nth.call(null,inst_49589,(0),null);
var inst_49595__$1 = cljs.core.nth.call(null,inst_49589,(1),null);
var state_49625__$1 = (function (){var statearr_49639 = state_49625;
(statearr_49639[(10)] = inst_49594);

(statearr_49639[(11)] = inst_49595__$1);

return statearr_49639;
})();
if(cljs.core.truth_(inst_49595__$1)){
var statearr_49640_49665 = state_49625__$1;
(statearr_49640_49665[(1)] = (8));

} else {
var statearr_49641_49666 = state_49625__$1;
(statearr_49641_49666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (14))){
var inst_49594 = (state_49625[(10)]);
var inst_49606 = (state_49625[(8)]);
var inst_49603 = (state_49625[(2)]);
var inst_49604 = console.log("Loading!",inst_49594);
var inst_49605 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49606__$1 = cljs.core.get.call(null,inst_49605,inst_49594);
var state_49625__$1 = (function (){var statearr_49642 = state_49625;
(statearr_49642[(8)] = inst_49606__$1);

(statearr_49642[(12)] = inst_49604);

(statearr_49642[(9)] = inst_49603);

return statearr_49642;
})();
if(cljs.core.truth_(inst_49606__$1)){
var statearr_49643_49667 = state_49625__$1;
(statearr_49643_49667[(1)] = (15));

} else {
var statearr_49644_49668 = state_49625__$1;
(statearr_49644_49668[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (16))){
var inst_49603 = (state_49625[(9)]);
var inst_49610 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49603);
var state_49625__$1 = state_49625;
var statearr_49645_49669 = state_49625__$1;
(statearr_49645_49669[(2)] = inst_49610);

(statearr_49645_49669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (10))){
var inst_49617 = (state_49625[(2)]);
var state_49625__$1 = (function (){var statearr_49646 = state_49625;
(statearr_49646[(13)] = inst_49617);

return statearr_49646;
})();
var statearr_49647_49670 = state_49625__$1;
(statearr_49647_49670[(2)] = null);

(statearr_49647_49670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (8))){
var inst_49595 = (state_49625[(11)]);
var inst_49597 = console.log("Evaling!",inst_49595);
var inst_49598 = eval(inst_49595);
var state_49625__$1 = (function (){var statearr_49648 = state_49625;
(statearr_49648[(14)] = inst_49597);

return statearr_49648;
})();
var statearr_49649_49671 = state_49625__$1;
(statearr_49649_49671[(2)] = inst_49598);

(statearr_49649_49671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto__))
;
return ((function (switch__45820__auto__,c__45908__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45821__auto__ = null;
var figwheel$client$file_reloading$state_machine__45821__auto____0 = (function (){
var statearr_49650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49650[(0)] = figwheel$client$file_reloading$state_machine__45821__auto__);

(statearr_49650[(1)] = (1));

return statearr_49650;
});
var figwheel$client$file_reloading$state_machine__45821__auto____1 = (function (state_49625){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_49625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e49651){if((e49651 instanceof Object)){
var ex__45824__auto__ = e49651;
var statearr_49652_49672 = state_49625;
(statearr_49652_49672[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49673 = state_49625;
state_49625 = G__49673;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45821__auto__ = function(state_49625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45821__auto____1.call(this,state_49625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45821__auto____0;
figwheel$client$file_reloading$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45821__auto____1;
return figwheel$client$file_reloading$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__))
})();
var state__45910__auto__ = (function (){var statearr_49653 = f__45909__auto__.call(null);
(statearr_49653[(6)] = c__45908__auto__);

return statearr_49653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__))
);

return c__45908__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__49675 = arguments.length;
switch (G__49675) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49677,callback){
var map__49678 = p__49677;
var map__49678__$1 = ((((!((map__49678 == null)))?((((map__49678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49678):map__49678);
var file_msg = map__49678__$1;
var namespace = cljs.core.get.call(null,map__49678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49678,map__49678__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49678,map__49678__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49680){
var map__49681 = p__49680;
var map__49681__$1 = ((((!((map__49681 == null)))?((((map__49681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49681):map__49681);
var file_msg = map__49681__$1;
var namespace = cljs.core.get.call(null,map__49681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49683){
var map__49684 = p__49683;
var map__49684__$1 = ((((!((map__49684 == null)))?((((map__49684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49684):map__49684);
var file_msg = map__49684__$1;
var namespace = cljs.core.get.call(null,map__49684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41373__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41373__auto__){
var or__41385__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
var or__41385__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41385__auto____$1)){
return or__41385__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41373__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49686,callback){
var map__49687 = p__49686;
var map__49687__$1 = ((((!((map__49687 == null)))?((((map__49687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49687):map__49687);
var file_msg = map__49687__$1;
var request_url = cljs.core.get.call(null,map__49687__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__45908__auto___49737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___49737,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___49737,out){
return (function (state_49722){
var state_val_49723 = (state_49722[(1)]);
if((state_val_49723 === (1))){
var inst_49696 = cljs.core.seq.call(null,files);
var inst_49697 = cljs.core.first.call(null,inst_49696);
var inst_49698 = cljs.core.next.call(null,inst_49696);
var inst_49699 = files;
var state_49722__$1 = (function (){var statearr_49724 = state_49722;
(statearr_49724[(7)] = inst_49699);

(statearr_49724[(8)] = inst_49698);

(statearr_49724[(9)] = inst_49697);

return statearr_49724;
})();
var statearr_49725_49738 = state_49722__$1;
(statearr_49725_49738[(2)] = null);

(statearr_49725_49738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49723 === (2))){
var inst_49699 = (state_49722[(7)]);
var inst_49705 = (state_49722[(10)]);
var inst_49704 = cljs.core.seq.call(null,inst_49699);
var inst_49705__$1 = cljs.core.first.call(null,inst_49704);
var inst_49706 = cljs.core.next.call(null,inst_49704);
var inst_49707 = (inst_49705__$1 == null);
var inst_49708 = cljs.core.not.call(null,inst_49707);
var state_49722__$1 = (function (){var statearr_49726 = state_49722;
(statearr_49726[(10)] = inst_49705__$1);

(statearr_49726[(11)] = inst_49706);

return statearr_49726;
})();
if(inst_49708){
var statearr_49727_49739 = state_49722__$1;
(statearr_49727_49739[(1)] = (4));

} else {
var statearr_49728_49740 = state_49722__$1;
(statearr_49728_49740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49723 === (3))){
var inst_49720 = (state_49722[(2)]);
var state_49722__$1 = state_49722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49722__$1,inst_49720);
} else {
if((state_val_49723 === (4))){
var inst_49705 = (state_49722[(10)]);
var inst_49710 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49705);
var state_49722__$1 = state_49722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49722__$1,(7),inst_49710);
} else {
if((state_val_49723 === (5))){
var inst_49716 = cljs.core.async.close_BANG_.call(null,out);
var state_49722__$1 = state_49722;
var statearr_49729_49741 = state_49722__$1;
(statearr_49729_49741[(2)] = inst_49716);

(statearr_49729_49741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49723 === (6))){
var inst_49718 = (state_49722[(2)]);
var state_49722__$1 = state_49722;
var statearr_49730_49742 = state_49722__$1;
(statearr_49730_49742[(2)] = inst_49718);

(statearr_49730_49742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49723 === (7))){
var inst_49706 = (state_49722[(11)]);
var inst_49712 = (state_49722[(2)]);
var inst_49713 = cljs.core.async.put_BANG_.call(null,out,inst_49712);
var inst_49699 = inst_49706;
var state_49722__$1 = (function (){var statearr_49731 = state_49722;
(statearr_49731[(12)] = inst_49713);

(statearr_49731[(7)] = inst_49699);

return statearr_49731;
})();
var statearr_49732_49743 = state_49722__$1;
(statearr_49732_49743[(2)] = null);

(statearr_49732_49743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__45908__auto___49737,out))
;
return ((function (switch__45820__auto__,c__45908__auto___49737,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto____0 = (function (){
var statearr_49733 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49733[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto__);

(statearr_49733[(1)] = (1));

return statearr_49733;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto____1 = (function (state_49722){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_49722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e49734){if((e49734 instanceof Object)){
var ex__45824__auto__ = e49734;
var statearr_49735_49744 = state_49722;
(statearr_49735_49744[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49745 = state_49722;
state_49722 = G__49745;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto__ = function(state_49722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto____1.call(this,state_49722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___49737,out))
})();
var state__45910__auto__ = (function (){var statearr_49736 = f__45909__auto__.call(null);
(statearr_49736[(6)] = c__45908__auto___49737);

return statearr_49736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___49737,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49746,opts){
var map__49747 = p__49746;
var map__49747__$1 = ((((!((map__49747 == null)))?((((map__49747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49747):map__49747);
var eval_body = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file__$1 = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41373__auto__ = eval_body;
if(cljs.core.truth_(and__41373__auto__)){
return typeof eval_body === 'string';
} else {
return and__41373__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file__$1)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49749){var e = e49749;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file__$1)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49750_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49751){
var vec__49752 = p__49751;
var k = cljs.core.nth.call(null,vec__49752,(0),null);
var v = cljs.core.nth.call(null,vec__49752,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49755){
var vec__49756 = p__49755;
var k = cljs.core.nth.call(null,vec__49756,(0),null);
var v = cljs.core.nth.call(null,vec__49756,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49762,p__49763){
var map__49764 = p__49762;
var map__49764__$1 = ((((!((map__49764 == null)))?((((map__49764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49764):map__49764);
var opts = map__49764__$1;
var before_jsload = cljs.core.get.call(null,map__49764__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49764__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49764__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49765 = p__49763;
var map__49765__$1 = ((((!((map__49765 == null)))?((((map__49765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49765):map__49765);
var msg = map__49765__$1;
var files = cljs.core.get.call(null,map__49765__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49765__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49765__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49919){
var state_val_49920 = (state_49919[(1)]);
if((state_val_49920 === (7))){
var inst_49782 = (state_49919[(7)]);
var inst_49779 = (state_49919[(8)]);
var inst_49781 = (state_49919[(9)]);
var inst_49780 = (state_49919[(10)]);
var inst_49787 = cljs.core._nth.call(null,inst_49780,inst_49782);
var inst_49788 = figwheel.client.file_reloading.eval_body.call(null,inst_49787,opts);
var inst_49789 = (inst_49782 + (1));
var tmp49921 = inst_49779;
var tmp49922 = inst_49781;
var tmp49923 = inst_49780;
var inst_49779__$1 = tmp49921;
var inst_49780__$1 = tmp49923;
var inst_49781__$1 = tmp49922;
var inst_49782__$1 = inst_49789;
var state_49919__$1 = (function (){var statearr_49924 = state_49919;
(statearr_49924[(7)] = inst_49782__$1);

(statearr_49924[(8)] = inst_49779__$1);

(statearr_49924[(11)] = inst_49788);

(statearr_49924[(9)] = inst_49781__$1);

(statearr_49924[(10)] = inst_49780__$1);

return statearr_49924;
})();
var statearr_49925_50008 = state_49919__$1;
(statearr_49925_50008[(2)] = null);

(statearr_49925_50008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (20))){
var inst_49822 = (state_49919[(12)]);
var inst_49830 = figwheel.client.file_reloading.sort_files.call(null,inst_49822);
var state_49919__$1 = state_49919;
var statearr_49926_50009 = state_49919__$1;
(statearr_49926_50009[(2)] = inst_49830);

(statearr_49926_50009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (27))){
var state_49919__$1 = state_49919;
var statearr_49927_50010 = state_49919__$1;
(statearr_49927_50010[(2)] = null);

(statearr_49927_50010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (1))){
var inst_49771 = (state_49919[(13)]);
var inst_49768 = before_jsload.call(null,files);
var inst_49769 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49770 = (function (){return ((function (inst_49771,inst_49768,inst_49769,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49759_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49759_SHARP_);
});
;})(inst_49771,inst_49768,inst_49769,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49771__$1 = cljs.core.filter.call(null,inst_49770,files);
var inst_49772 = cljs.core.not_empty.call(null,inst_49771__$1);
var state_49919__$1 = (function (){var statearr_49928 = state_49919;
(statearr_49928[(14)] = inst_49769);

(statearr_49928[(13)] = inst_49771__$1);

(statearr_49928[(15)] = inst_49768);

return statearr_49928;
})();
if(cljs.core.truth_(inst_49772)){
var statearr_49929_50011 = state_49919__$1;
(statearr_49929_50011[(1)] = (2));

} else {
var statearr_49930_50012 = state_49919__$1;
(statearr_49930_50012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (24))){
var state_49919__$1 = state_49919;
var statearr_49931_50013 = state_49919__$1;
(statearr_49931_50013[(2)] = null);

(statearr_49931_50013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (39))){
var inst_49872 = (state_49919[(16)]);
var state_49919__$1 = state_49919;
var statearr_49932_50014 = state_49919__$1;
(statearr_49932_50014[(2)] = inst_49872);

(statearr_49932_50014[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (46))){
var inst_49914 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
var statearr_49933_50015 = state_49919__$1;
(statearr_49933_50015[(2)] = inst_49914);

(statearr_49933_50015[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (4))){
var inst_49816 = (state_49919[(2)]);
var inst_49817 = cljs.core.List.EMPTY;
var inst_49818 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49817);
var inst_49819 = (function (){return ((function (inst_49816,inst_49817,inst_49818,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49760_SHARP_){
var and__41373__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49760_SHARP_);
if(cljs.core.truth_(and__41373__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49760_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49760_SHARP_)));
} else {
return and__41373__auto__;
}
});
;})(inst_49816,inst_49817,inst_49818,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49820 = cljs.core.filter.call(null,inst_49819,files);
var inst_49821 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49822 = cljs.core.concat.call(null,inst_49820,inst_49821);
var state_49919__$1 = (function (){var statearr_49934 = state_49919;
(statearr_49934[(12)] = inst_49822);

(statearr_49934[(17)] = inst_49818);

(statearr_49934[(18)] = inst_49816);

return statearr_49934;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49935_50016 = state_49919__$1;
(statearr_49935_50016[(1)] = (16));

} else {
var statearr_49936_50017 = state_49919__$1;
(statearr_49936_50017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (15))){
var inst_49806 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
var statearr_49937_50018 = state_49919__$1;
(statearr_49937_50018[(2)] = inst_49806);

(statearr_49937_50018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (21))){
var inst_49832 = (state_49919[(19)]);
var inst_49832__$1 = (state_49919[(2)]);
var inst_49833 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49832__$1);
var state_49919__$1 = (function (){var statearr_49938 = state_49919;
(statearr_49938[(19)] = inst_49832__$1);

return statearr_49938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49919__$1,(22),inst_49833);
} else {
if((state_val_49920 === (31))){
var inst_49917 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49919__$1,inst_49917);
} else {
if((state_val_49920 === (32))){
var inst_49872 = (state_49919[(16)]);
var inst_49877 = inst_49872.cljs$lang$protocol_mask$partition0$;
var inst_49878 = (inst_49877 & (64));
var inst_49879 = inst_49872.cljs$core$ISeq$;
var inst_49880 = (cljs.core.PROTOCOL_SENTINEL === inst_49879);
var inst_49881 = (inst_49878) || (inst_49880);
var state_49919__$1 = state_49919;
if(cljs.core.truth_(inst_49881)){
var statearr_49939_50019 = state_49919__$1;
(statearr_49939_50019[(1)] = (35));

} else {
var statearr_49940_50020 = state_49919__$1;
(statearr_49940_50020[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (40))){
var inst_49894 = (state_49919[(20)]);
var inst_49893 = (state_49919[(2)]);
var inst_49894__$1 = cljs.core.get.call(null,inst_49893,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49895 = cljs.core.get.call(null,inst_49893,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49896 = cljs.core.not_empty.call(null,inst_49894__$1);
var state_49919__$1 = (function (){var statearr_49941 = state_49919;
(statearr_49941[(21)] = inst_49895);

(statearr_49941[(20)] = inst_49894__$1);

return statearr_49941;
})();
if(cljs.core.truth_(inst_49896)){
var statearr_49942_50021 = state_49919__$1;
(statearr_49942_50021[(1)] = (41));

} else {
var statearr_49943_50022 = state_49919__$1;
(statearr_49943_50022[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (33))){
var state_49919__$1 = state_49919;
var statearr_49944_50023 = state_49919__$1;
(statearr_49944_50023[(2)] = false);

(statearr_49944_50023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (13))){
var inst_49792 = (state_49919[(22)]);
var inst_49796 = cljs.core.chunk_first.call(null,inst_49792);
var inst_49797 = cljs.core.chunk_rest.call(null,inst_49792);
var inst_49798 = cljs.core.count.call(null,inst_49796);
var inst_49779 = inst_49797;
var inst_49780 = inst_49796;
var inst_49781 = inst_49798;
var inst_49782 = (0);
var state_49919__$1 = (function (){var statearr_49945 = state_49919;
(statearr_49945[(7)] = inst_49782);

(statearr_49945[(8)] = inst_49779);

(statearr_49945[(9)] = inst_49781);

(statearr_49945[(10)] = inst_49780);

return statearr_49945;
})();
var statearr_49946_50024 = state_49919__$1;
(statearr_49946_50024[(2)] = null);

(statearr_49946_50024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (22))){
var inst_49835 = (state_49919[(23)]);
var inst_49840 = (state_49919[(24)]);
var inst_49832 = (state_49919[(19)]);
var inst_49836 = (state_49919[(25)]);
var inst_49835__$1 = (state_49919[(2)]);
var inst_49836__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49835__$1);
var inst_49837 = (function (){var all_files = inst_49832;
var res_SINGLEQUOTE_ = inst_49835__$1;
var res = inst_49836__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49835,inst_49840,inst_49832,inst_49836,inst_49835__$1,inst_49836__$1,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49761_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49761_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49835,inst_49840,inst_49832,inst_49836,inst_49835__$1,inst_49836__$1,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49838 = cljs.core.filter.call(null,inst_49837,inst_49835__$1);
var inst_49839 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49840__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49839);
var inst_49841 = cljs.core.not_empty.call(null,inst_49840__$1);
var state_49919__$1 = (function (){var statearr_49947 = state_49919;
(statearr_49947[(23)] = inst_49835__$1);

(statearr_49947[(24)] = inst_49840__$1);

(statearr_49947[(26)] = inst_49838);

(statearr_49947[(25)] = inst_49836__$1);

return statearr_49947;
})();
if(cljs.core.truth_(inst_49841)){
var statearr_49948_50025 = state_49919__$1;
(statearr_49948_50025[(1)] = (23));

} else {
var statearr_49949_50026 = state_49919__$1;
(statearr_49949_50026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (36))){
var state_49919__$1 = state_49919;
var statearr_49950_50027 = state_49919__$1;
(statearr_49950_50027[(2)] = false);

(statearr_49950_50027[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (41))){
var inst_49894 = (state_49919[(20)]);
var inst_49898 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49899 = cljs.core.map.call(null,inst_49898,inst_49894);
var inst_49900 = cljs.core.pr_str.call(null,inst_49899);
var inst_49901 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49900)].join('');
var inst_49902 = figwheel.client.utils.log.call(null,inst_49901);
var state_49919__$1 = state_49919;
var statearr_49951_50028 = state_49919__$1;
(statearr_49951_50028[(2)] = inst_49902);

(statearr_49951_50028[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (43))){
var inst_49895 = (state_49919[(21)]);
var inst_49905 = (state_49919[(2)]);
var inst_49906 = cljs.core.not_empty.call(null,inst_49895);
var state_49919__$1 = (function (){var statearr_49952 = state_49919;
(statearr_49952[(27)] = inst_49905);

return statearr_49952;
})();
if(cljs.core.truth_(inst_49906)){
var statearr_49953_50029 = state_49919__$1;
(statearr_49953_50029[(1)] = (44));

} else {
var statearr_49954_50030 = state_49919__$1;
(statearr_49954_50030[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (29))){
var inst_49835 = (state_49919[(23)]);
var inst_49840 = (state_49919[(24)]);
var inst_49838 = (state_49919[(26)]);
var inst_49832 = (state_49919[(19)]);
var inst_49872 = (state_49919[(16)]);
var inst_49836 = (state_49919[(25)]);
var inst_49868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49871 = (function (){var all_files = inst_49832;
var res_SINGLEQUOTE_ = inst_49835;
var res = inst_49836;
var files_not_loaded = inst_49838;
var dependencies_that_loaded = inst_49840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49872,inst_49836,inst_49868,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49870){
var map__49955 = p__49870;
var map__49955__$1 = ((((!((map__49955 == null)))?((((map__49955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49955):map__49955);
var namespace = cljs.core.get.call(null,map__49955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49872,inst_49836,inst_49868,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49872__$1 = cljs.core.group_by.call(null,inst_49871,inst_49838);
var inst_49874 = (inst_49872__$1 == null);
var inst_49875 = cljs.core.not.call(null,inst_49874);
var state_49919__$1 = (function (){var statearr_49957 = state_49919;
(statearr_49957[(28)] = inst_49868);

(statearr_49957[(16)] = inst_49872__$1);

return statearr_49957;
})();
if(inst_49875){
var statearr_49958_50031 = state_49919__$1;
(statearr_49958_50031[(1)] = (32));

} else {
var statearr_49959_50032 = state_49919__$1;
(statearr_49959_50032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (44))){
var inst_49895 = (state_49919[(21)]);
var inst_49908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49895);
var inst_49909 = cljs.core.pr_str.call(null,inst_49908);
var inst_49910 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49909)].join('');
var inst_49911 = figwheel.client.utils.log.call(null,inst_49910);
var state_49919__$1 = state_49919;
var statearr_49960_50033 = state_49919__$1;
(statearr_49960_50033[(2)] = inst_49911);

(statearr_49960_50033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (6))){
var inst_49813 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
var statearr_49961_50034 = state_49919__$1;
(statearr_49961_50034[(2)] = inst_49813);

(statearr_49961_50034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (28))){
var inst_49838 = (state_49919[(26)]);
var inst_49865 = (state_49919[(2)]);
var inst_49866 = cljs.core.not_empty.call(null,inst_49838);
var state_49919__$1 = (function (){var statearr_49962 = state_49919;
(statearr_49962[(29)] = inst_49865);

return statearr_49962;
})();
if(cljs.core.truth_(inst_49866)){
var statearr_49963_50035 = state_49919__$1;
(statearr_49963_50035[(1)] = (29));

} else {
var statearr_49964_50036 = state_49919__$1;
(statearr_49964_50036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (25))){
var inst_49836 = (state_49919[(25)]);
var inst_49852 = (state_49919[(2)]);
var inst_49853 = cljs.core.not_empty.call(null,inst_49836);
var state_49919__$1 = (function (){var statearr_49965 = state_49919;
(statearr_49965[(30)] = inst_49852);

return statearr_49965;
})();
if(cljs.core.truth_(inst_49853)){
var statearr_49966_50037 = state_49919__$1;
(statearr_49966_50037[(1)] = (26));

} else {
var statearr_49967_50038 = state_49919__$1;
(statearr_49967_50038[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (34))){
var inst_49888 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
if(cljs.core.truth_(inst_49888)){
var statearr_49968_50039 = state_49919__$1;
(statearr_49968_50039[(1)] = (38));

} else {
var statearr_49969_50040 = state_49919__$1;
(statearr_49969_50040[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (17))){
var state_49919__$1 = state_49919;
var statearr_49970_50041 = state_49919__$1;
(statearr_49970_50041[(2)] = recompile_dependents);

(statearr_49970_50041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (3))){
var state_49919__$1 = state_49919;
var statearr_49971_50042 = state_49919__$1;
(statearr_49971_50042[(2)] = null);

(statearr_49971_50042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (12))){
var inst_49809 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
var statearr_49972_50043 = state_49919__$1;
(statearr_49972_50043[(2)] = inst_49809);

(statearr_49972_50043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (2))){
var inst_49771 = (state_49919[(13)]);
var inst_49778 = cljs.core.seq.call(null,inst_49771);
var inst_49779 = inst_49778;
var inst_49780 = null;
var inst_49781 = (0);
var inst_49782 = (0);
var state_49919__$1 = (function (){var statearr_49973 = state_49919;
(statearr_49973[(7)] = inst_49782);

(statearr_49973[(8)] = inst_49779);

(statearr_49973[(9)] = inst_49781);

(statearr_49973[(10)] = inst_49780);

return statearr_49973;
})();
var statearr_49974_50044 = state_49919__$1;
(statearr_49974_50044[(2)] = null);

(statearr_49974_50044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (23))){
var inst_49835 = (state_49919[(23)]);
var inst_49840 = (state_49919[(24)]);
var inst_49838 = (state_49919[(26)]);
var inst_49832 = (state_49919[(19)]);
var inst_49836 = (state_49919[(25)]);
var inst_49843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49845 = (function (){var all_files = inst_49832;
var res_SINGLEQUOTE_ = inst_49835;
var res = inst_49836;
var files_not_loaded = inst_49838;
var dependencies_that_loaded = inst_49840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49836,inst_49843,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49844){
var map__49975 = p__49844;
var map__49975__$1 = ((((!((map__49975 == null)))?((((map__49975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49975):map__49975);
var request_url = cljs.core.get.call(null,map__49975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49836,inst_49843,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49846 = cljs.core.reverse.call(null,inst_49840);
var inst_49847 = cljs.core.map.call(null,inst_49845,inst_49846);
var inst_49848 = cljs.core.pr_str.call(null,inst_49847);
var inst_49849 = figwheel.client.utils.log.call(null,inst_49848);
var state_49919__$1 = (function (){var statearr_49977 = state_49919;
(statearr_49977[(31)] = inst_49843);

return statearr_49977;
})();
var statearr_49978_50045 = state_49919__$1;
(statearr_49978_50045[(2)] = inst_49849);

(statearr_49978_50045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (35))){
var state_49919__$1 = state_49919;
var statearr_49979_50046 = state_49919__$1;
(statearr_49979_50046[(2)] = true);

(statearr_49979_50046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (19))){
var inst_49822 = (state_49919[(12)]);
var inst_49828 = figwheel.client.file_reloading.expand_files.call(null,inst_49822);
var state_49919__$1 = state_49919;
var statearr_49980_50047 = state_49919__$1;
(statearr_49980_50047[(2)] = inst_49828);

(statearr_49980_50047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (11))){
var state_49919__$1 = state_49919;
var statearr_49981_50048 = state_49919__$1;
(statearr_49981_50048[(2)] = null);

(statearr_49981_50048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (9))){
var inst_49811 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
var statearr_49982_50049 = state_49919__$1;
(statearr_49982_50049[(2)] = inst_49811);

(statearr_49982_50049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (5))){
var inst_49782 = (state_49919[(7)]);
var inst_49781 = (state_49919[(9)]);
var inst_49784 = (inst_49782 < inst_49781);
var inst_49785 = inst_49784;
var state_49919__$1 = state_49919;
if(cljs.core.truth_(inst_49785)){
var statearr_49983_50050 = state_49919__$1;
(statearr_49983_50050[(1)] = (7));

} else {
var statearr_49984_50051 = state_49919__$1;
(statearr_49984_50051[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (14))){
var inst_49792 = (state_49919[(22)]);
var inst_49801 = cljs.core.first.call(null,inst_49792);
var inst_49802 = figwheel.client.file_reloading.eval_body.call(null,inst_49801,opts);
var inst_49803 = cljs.core.next.call(null,inst_49792);
var inst_49779 = inst_49803;
var inst_49780 = null;
var inst_49781 = (0);
var inst_49782 = (0);
var state_49919__$1 = (function (){var statearr_49985 = state_49919;
(statearr_49985[(7)] = inst_49782);

(statearr_49985[(8)] = inst_49779);

(statearr_49985[(9)] = inst_49781);

(statearr_49985[(10)] = inst_49780);

(statearr_49985[(32)] = inst_49802);

return statearr_49985;
})();
var statearr_49986_50052 = state_49919__$1;
(statearr_49986_50052[(2)] = null);

(statearr_49986_50052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (45))){
var state_49919__$1 = state_49919;
var statearr_49987_50053 = state_49919__$1;
(statearr_49987_50053[(2)] = null);

(statearr_49987_50053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (26))){
var inst_49835 = (state_49919[(23)]);
var inst_49840 = (state_49919[(24)]);
var inst_49838 = (state_49919[(26)]);
var inst_49832 = (state_49919[(19)]);
var inst_49836 = (state_49919[(25)]);
var inst_49855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49857 = (function (){var all_files = inst_49832;
var res_SINGLEQUOTE_ = inst_49835;
var res = inst_49836;
var files_not_loaded = inst_49838;
var dependencies_that_loaded = inst_49840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49836,inst_49855,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49856){
var map__49988 = p__49856;
var map__49988__$1 = ((((!((map__49988 == null)))?((((map__49988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49988):map__49988);
var namespace = cljs.core.get.call(null,map__49988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file__$1 = cljs.core.get.call(null,map__49988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file__$1;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49836,inst_49855,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49858 = cljs.core.map.call(null,inst_49857,inst_49836);
var inst_49859 = cljs.core.pr_str.call(null,inst_49858);
var inst_49860 = figwheel.client.utils.log.call(null,inst_49859);
var inst_49861 = (function (){var all_files = inst_49832;
var res_SINGLEQUOTE_ = inst_49835;
var res = inst_49836;
var files_not_loaded = inst_49838;
var dependencies_that_loaded = inst_49840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49836,inst_49855,inst_49857,inst_49858,inst_49859,inst_49860,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49835,inst_49840,inst_49838,inst_49832,inst_49836,inst_49855,inst_49857,inst_49858,inst_49859,inst_49860,state_val_49920,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49862 = setTimeout(inst_49861,(10));
var state_49919__$1 = (function (){var statearr_49990 = state_49919;
(statearr_49990[(33)] = inst_49855);

(statearr_49990[(34)] = inst_49860);

return statearr_49990;
})();
var statearr_49991_50054 = state_49919__$1;
(statearr_49991_50054[(2)] = inst_49862);

(statearr_49991_50054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (16))){
var state_49919__$1 = state_49919;
var statearr_49992_50055 = state_49919__$1;
(statearr_49992_50055[(2)] = reload_dependents);

(statearr_49992_50055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (38))){
var inst_49872 = (state_49919[(16)]);
var inst_49890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49872);
var state_49919__$1 = state_49919;
var statearr_49993_50056 = state_49919__$1;
(statearr_49993_50056[(2)] = inst_49890);

(statearr_49993_50056[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (30))){
var state_49919__$1 = state_49919;
var statearr_49994_50057 = state_49919__$1;
(statearr_49994_50057[(2)] = null);

(statearr_49994_50057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (10))){
var inst_49792 = (state_49919[(22)]);
var inst_49794 = cljs.core.chunked_seq_QMARK_.call(null,inst_49792);
var state_49919__$1 = state_49919;
if(inst_49794){
var statearr_49995_50058 = state_49919__$1;
(statearr_49995_50058[(1)] = (13));

} else {
var statearr_49996_50059 = state_49919__$1;
(statearr_49996_50059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (18))){
var inst_49826 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
if(cljs.core.truth_(inst_49826)){
var statearr_49997_50060 = state_49919__$1;
(statearr_49997_50060[(1)] = (19));

} else {
var statearr_49998_50061 = state_49919__$1;
(statearr_49998_50061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (42))){
var state_49919__$1 = state_49919;
var statearr_49999_50062 = state_49919__$1;
(statearr_49999_50062[(2)] = null);

(statearr_49999_50062[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (37))){
var inst_49885 = (state_49919[(2)]);
var state_49919__$1 = state_49919;
var statearr_50000_50063 = state_49919__$1;
(statearr_50000_50063[(2)] = inst_49885);

(statearr_50000_50063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49920 === (8))){
var inst_49779 = (state_49919[(8)]);
var inst_49792 = (state_49919[(22)]);
var inst_49792__$1 = cljs.core.seq.call(null,inst_49779);
var state_49919__$1 = (function (){var statearr_50001 = state_49919;
(statearr_50001[(22)] = inst_49792__$1);

return statearr_50001;
})();
if(inst_49792__$1){
var statearr_50002_50064 = state_49919__$1;
(statearr_50002_50064[(1)] = (10));

} else {
var statearr_50003_50065 = state_49919__$1;
(statearr_50003_50065[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45820__auto__,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto____0 = (function (){
var statearr_50004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50004[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto__);

(statearr_50004[(1)] = (1));

return statearr_50004;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto____1 = (function (state_49919){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_49919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e50005){if((e50005 instanceof Object)){
var ex__45824__auto__ = e50005;
var statearr_50006_50066 = state_49919;
(statearr_50006_50066[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50067 = state_49919;
state_49919 = G__50067;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto__ = function(state_49919){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto____1.call(this,state_49919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45910__auto__ = (function (){var statearr_50007 = f__45909__auto__.call(null);
(statearr_50007[(6)] = c__45908__auto__);

return statearr_50007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__,map__49764,map__49764__$1,opts,before_jsload,on_jsload,reload_dependents,map__49765,map__49765__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45908__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50070,link){
var map__50071 = p__50070;
var map__50071__$1 = ((((!((map__50071 == null)))?((((map__50071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50071):map__50071);
var file__$1 = cljs.core.get.call(null,map__50071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50071,map__50071__$1,file__$1){
return (function (p1__50068_SHARP_,p2__50069_SHARP_){
if(cljs.core._EQ_.call(null,p1__50068_SHARP_,p2__50069_SHARP_)){
return p1__50068_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50071,map__50071__$1,file__$1))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file__$1,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file__$1,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50074){
var map__50075 = p__50074;
var map__50075__$1 = ((((!((map__50075 == null)))?((((map__50075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50075):map__50075);
var match_length = cljs.core.get.call(null,map__50075__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50075__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50073_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50073_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50077_SHARP_,p2__50078_SHARP_){
return cljs.core.assoc.call(null,p1__50077_SHARP_,cljs.core.get.call(null,p2__50078_SHARP_,key),p2__50078_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50079 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50079);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50079);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50080,p__50081){
var map__50082 = p__50080;
var map__50082__$1 = ((((!((map__50082 == null)))?((((map__50082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50082):map__50082);
var on_cssload = cljs.core.get.call(null,map__50082__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50083 = p__50081;
var map__50083__$1 = ((((!((map__50083 == null)))?((((map__50083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50083):map__50083);
var files_msg = map__50083__$1;
var files = cljs.core.get.call(null,map__50083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1565798835730
