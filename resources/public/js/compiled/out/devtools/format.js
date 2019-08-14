// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__42068__auto__ = (((value == null))?null:value);
var m__42069__auto__ = (devtools.format._header[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,value);
} else {
var m__42069__auto____$1 = (devtools.format._header["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__42068__auto__ = (((value == null))?null:value);
var m__42069__auto__ = (devtools.format._has_body[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,value);
} else {
var m__42069__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__42068__auto__ = (((value == null))?null:value);
var m__42069__auto__ = (devtools.format._body[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,value);
} else {
var m__42069__auto____$1 = (devtools.format._body["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53366 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53366["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53367 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53367["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53368 = temp__4655__auto____$2;
return (o53368["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53369 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53369["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53370 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53370["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53371 = temp__4655__auto____$2;
return (o53371["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53372 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53372["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53373 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53373["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53374 = temp__4655__auto____$2;
return (o53374["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53375 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53375["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53376 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53376["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53377 = temp__4655__auto____$2;
return (o53377["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53378 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53378["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53379 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53379["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53380 = temp__4655__auto____$2;
return (o53380["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53381 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53381["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53382 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53382["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53383 = temp__4655__auto____$2;
return (o53383["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53384 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53384["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53385 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53385["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53386 = temp__4655__auto____$2;
return (o53386["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53388 = arguments.length;
var i__42557__auto___53389 = (0);
while(true){
if((i__42557__auto___53389 < len__42556__auto___53388)){
args__42563__auto__.push((arguments[i__42557__auto___53389]));

var G__53390 = (i__42557__auto___53389 + (1));
i__42557__auto___53389 = G__53390;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq53387){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53387));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53392 = arguments.length;
var i__42557__auto___53393 = (0);
while(true){
if((i__42557__auto___53393 < len__42556__auto___53392)){
args__42563__auto__.push((arguments[i__42557__auto___53393]));

var G__53394 = (i__42557__auto___53393 + (1));
i__42557__auto___53393 = G__53394;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq53391){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53391));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53396 = arguments.length;
var i__42557__auto___53397 = (0);
while(true){
if((i__42557__auto___53397 < len__42556__auto___53396)){
args__42563__auto__.push((arguments[i__42557__auto___53397]));

var G__53398 = (i__42557__auto___53397 + (1));
i__42557__auto___53397 = G__53398;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq53395){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53395));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53400 = arguments.length;
var i__42557__auto___53401 = (0);
while(true){
if((i__42557__auto___53401 < len__42556__auto___53400)){
args__42563__auto__.push((arguments[i__42557__auto___53401]));

var G__53402 = (i__42557__auto___53401 + (1));
i__42557__auto___53401 = G__53402;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq53399){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53399));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53404 = arguments.length;
var i__42557__auto___53405 = (0);
while(true){
if((i__42557__auto___53405 < len__42556__auto___53404)){
args__42563__auto__.push((arguments[i__42557__auto___53405]));

var G__53406 = (i__42557__auto___53405 + (1));
i__42557__auto___53405 = G__53406;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq53403){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53403));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53408 = arguments.length;
var i__42557__auto___53409 = (0);
while(true){
if((i__42557__auto___53409 < len__42556__auto___53408)){
args__42563__auto__.push((arguments[i__42557__auto___53409]));

var G__53410 = (i__42557__auto___53409 + (1));
i__42557__auto___53409 = G__53410;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq53407){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53407));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53412 = arguments.length;
var i__42557__auto___53413 = (0);
while(true){
if((i__42557__auto___53413 < len__42556__auto___53412)){
args__42563__auto__.push((arguments[i__42557__auto___53413]));

var G__53414 = (i__42557__auto___53413 + (1));
i__42557__auto___53413 = G__53414;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq53411){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53411));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53422 = arguments.length;
var i__42557__auto___53423 = (0);
while(true){
if((i__42557__auto___53423 < len__42556__auto___53422)){
args__42563__auto__.push((arguments[i__42557__auto___53423]));

var G__53424 = (i__42557__auto___53423 + (1));
i__42557__auto___53423 = G__53424;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__53418){
var vec__53419 = p__53418;
var state_override = cljs.core.nth.call(null,vec__53419,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__53419,state_override){
return (function (p1__53415_SHARP_){
return cljs.core.merge.call(null,p1__53415_SHARP_,state_override);
});})(vec__53419,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq53416){
var G__53417 = cljs.core.first.call(null,seq53416);
var seq53416__$1 = cljs.core.next.call(null,seq53416);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__53417,seq53416__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53426 = arguments.length;
var i__42557__auto___53427 = (0);
while(true){
if((i__42557__auto___53427 < len__42556__auto___53426)){
args__42563__auto__.push((arguments[i__42557__auto___53427]));

var G__53428 = (i__42557__auto___53427 + (1));
i__42557__auto___53427 = G__53428;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq53425){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53425));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53431 = arguments.length;
var i__42557__auto___53432 = (0);
while(true){
if((i__42557__auto___53432 < len__42556__auto___53431)){
args__42563__auto__.push((arguments[i__42557__auto___53432]));

var G__53433 = (i__42557__auto___53432 + (1));
i__42557__auto___53432 = G__53433;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq53429){
var G__53430 = cljs.core.first.call(null,seq53429);
var seq53429__$1 = cljs.core.next.call(null,seq53429);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__53430,seq53429__$1);
});


//# sourceMappingURL=format.js.map?rel=1565798864412
