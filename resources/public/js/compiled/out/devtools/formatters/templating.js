// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x55385_55386 = value;
x55385_55386.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x55388_55389 = value;
x55388_55389.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x55391_55392 = value;
x55391_55392.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__41373__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__41373__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__41373__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__42563__auto__ = [];
var len__42556__auto___55399 = arguments.length;
var i__42557__auto___55400 = (0);
while(true){
if((i__42557__auto___55400 < len__42556__auto___55399)){
args__42563__auto__.push((arguments[i__42557__auto___55400]));

var G__55401 = (i__42557__auto___55400 + (1));
i__42557__auto___55400 = G__55401;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__55395_55402 = cljs.core.seq.call(null,items);
var chunk__55396_55403 = null;
var count__55397_55404 = (0);
var i__55398_55405 = (0);
while(true){
if((i__55398_55405 < count__55397_55404)){
var item_55406 = cljs.core._nth.call(null,chunk__55396_55403,i__55398_55405);
if(!((item_55406 == null))){
if(cljs.core.coll_QMARK_.call(null,item_55406)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55406)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55406));
}
} else {
}

var G__55407 = seq__55395_55402;
var G__55408 = chunk__55396_55403;
var G__55409 = count__55397_55404;
var G__55410 = (i__55398_55405 + (1));
seq__55395_55402 = G__55407;
chunk__55396_55403 = G__55408;
count__55397_55404 = G__55409;
i__55398_55405 = G__55410;
continue;
} else {
var temp__4657__auto___55411 = cljs.core.seq.call(null,seq__55395_55402);
if(temp__4657__auto___55411){
var seq__55395_55412__$1 = temp__4657__auto___55411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55395_55412__$1)){
var c__42224__auto___55413 = cljs.core.chunk_first.call(null,seq__55395_55412__$1);
var G__55414 = cljs.core.chunk_rest.call(null,seq__55395_55412__$1);
var G__55415 = c__42224__auto___55413;
var G__55416 = cljs.core.count.call(null,c__42224__auto___55413);
var G__55417 = (0);
seq__55395_55402 = G__55414;
chunk__55396_55403 = G__55415;
count__55397_55404 = G__55416;
i__55398_55405 = G__55417;
continue;
} else {
var item_55418 = cljs.core.first.call(null,seq__55395_55412__$1);
if(!((item_55418 == null))){
if(cljs.core.coll_QMARK_.call(null,item_55418)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55418)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55418));
}
} else {
}

var G__55419 = cljs.core.next.call(null,seq__55395_55412__$1);
var G__55420 = null;
var G__55421 = (0);
var G__55422 = (0);
seq__55395_55402 = G__55419;
chunk__55396_55403 = G__55420;
count__55397_55404 = G__55421;
i__55398_55405 = G__55422;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq55394){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55394));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__42563__auto__ = [];
var len__42556__auto___55430 = arguments.length;
var i__42557__auto___55431 = (0);
while(true){
if((i__42557__auto___55431 < len__42556__auto___55430)){
args__42563__auto__.push((arguments[i__42557__auto___55431]));

var G__55432 = (i__42557__auto___55431 + (1));
i__42557__auto___55431 = G__55432;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((2) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42564__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__55426_55433 = cljs.core.seq.call(null,children);
var chunk__55427_55434 = null;
var count__55428_55435 = (0);
var i__55429_55436 = (0);
while(true){
if((i__55429_55436 < count__55428_55435)){
var child_55437 = cljs.core._nth.call(null,chunk__55427_55434,i__55429_55436);
if(!((child_55437 == null))){
if(cljs.core.coll_QMARK_.call(null,child_55437)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55437))));
} else {
var temp__4655__auto___55438 = devtools.formatters.helpers.pref.call(null,child_55437);
if(cljs.core.truth_(temp__4655__auto___55438)){
var child_value_55439 = temp__4655__auto___55438;
template.push(child_value_55439);
} else {
}
}
} else {
}

var G__55440 = seq__55426_55433;
var G__55441 = chunk__55427_55434;
var G__55442 = count__55428_55435;
var G__55443 = (i__55429_55436 + (1));
seq__55426_55433 = G__55440;
chunk__55427_55434 = G__55441;
count__55428_55435 = G__55442;
i__55429_55436 = G__55443;
continue;
} else {
var temp__4657__auto___55444 = cljs.core.seq.call(null,seq__55426_55433);
if(temp__4657__auto___55444){
var seq__55426_55445__$1 = temp__4657__auto___55444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55426_55445__$1)){
var c__42224__auto___55446 = cljs.core.chunk_first.call(null,seq__55426_55445__$1);
var G__55447 = cljs.core.chunk_rest.call(null,seq__55426_55445__$1);
var G__55448 = c__42224__auto___55446;
var G__55449 = cljs.core.count.call(null,c__42224__auto___55446);
var G__55450 = (0);
seq__55426_55433 = G__55447;
chunk__55427_55434 = G__55448;
count__55428_55435 = G__55449;
i__55429_55436 = G__55450;
continue;
} else {
var child_55451 = cljs.core.first.call(null,seq__55426_55445__$1);
if(!((child_55451 == null))){
if(cljs.core.coll_QMARK_.call(null,child_55451)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55451))));
} else {
var temp__4655__auto___55452 = devtools.formatters.helpers.pref.call(null,child_55451);
if(cljs.core.truth_(temp__4655__auto___55452)){
var child_value_55453 = temp__4655__auto___55452;
template.push(child_value_55453);
} else {
}
}
} else {
}

var G__55454 = cljs.core.next.call(null,seq__55426_55445__$1);
var G__55455 = null;
var G__55456 = (0);
var G__55457 = (0);
seq__55426_55433 = G__55454;
chunk__55427_55434 = G__55455;
count__55428_55435 = G__55456;
i__55429_55436 = G__55457;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq55423){
var G__55424 = cljs.core.first.call(null,seq55423);
var seq55423__$1 = cljs.core.next.call(null,seq55423);
var G__55425 = cljs.core.first.call(null,seq55423__$1);
var seq55423__$2 = cljs.core.next.call(null,seq55423__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__55424,G__55425,seq55423__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___55460 = arguments.length;
var i__42557__auto___55461 = (0);
while(true){
if((i__42557__auto___55461 < len__42556__auto___55460)){
args__42563__auto__.push((arguments[i__42557__auto___55461]));

var G__55462 = (i__42557__auto___55461 + (1));
i__42557__auto___55461 = G__55462;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq55458){
var G__55459 = cljs.core.first.call(null,seq55458);
var seq55458__$1 = cljs.core.next.call(null,seq55458);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55459,seq55458__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___55465 = arguments.length;
var i__42557__auto___55466 = (0);
while(true){
if((i__42557__auto___55466 < len__42556__auto___55465)){
args__42563__auto__.push((arguments[i__42557__auto___55466]));

var G__55467 = (i__42557__auto___55466 + (1));
i__42557__auto___55466 = G__55467;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq55463){
var G__55464 = cljs.core.first.call(null,seq55463);
var seq55463__$1 = cljs.core.next.call(null,seq55463);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55464,seq55463__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__55469 = arguments.length;
switch (G__55469) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj55471 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__41385__auto__ = start_index;
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return (0);
}
})()};
return obj55471;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__42563__auto__ = [];
var len__42556__auto___55479 = arguments.length;
var i__42557__auto___55480 = (0);
while(true){
if((i__42557__auto___55480 < len__42556__auto___55479)){
args__42563__auto__.push((arguments[i__42557__auto___55480]));

var G__55481 = (i__42557__auto___55480 + (1));
i__42557__auto___55480 = G__55481;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__55475){
var vec__55476 = p__55475;
var state_override_fn = cljs.core.nth.call(null,vec__55476,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq55473){
var G__55474 = cljs.core.first.call(null,seq55473);
var seq55473__$1 = cljs.core.next.call(null,seq55473);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__55474,seq55473__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_55482 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55482;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__55483 = name;
switch (G__55483) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__55485 = tag;
var html_tag = cljs.core.nth.call(null,vec__55485,(0),null);
var style = cljs.core.nth.call(null,vec__55485,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_55488 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55488;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_55489 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_55490 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55490;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_55489;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__55491 = initial_value;
var G__55492 = value.call(null);
initial_value = G__55491;
value = G__55492;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__55493 = initial_value;
var G__55494 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__55493;
value = G__55494;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__55495 = initial_value;
var G__55496 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__55495;
value = G__55496;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1565798875638
