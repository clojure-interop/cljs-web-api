// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51522){
var map__51523 = p__51522;
var map__51523__$1 = ((((!((map__51523 == null)))?((((map__51523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51523):map__51523);
var m = map__51523__$1;
var n = cljs.core.get.call(null,map__51523__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51525_51547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51526_51548 = null;
var count__51527_51549 = (0);
var i__51528_51550 = (0);
while(true){
if((i__51528_51550 < count__51527_51549)){
var f_51551 = cljs.core._nth.call(null,chunk__51526_51548,i__51528_51550);
cljs.core.println.call(null,"  ",f_51551);

var G__51552 = seq__51525_51547;
var G__51553 = chunk__51526_51548;
var G__51554 = count__51527_51549;
var G__51555 = (i__51528_51550 + (1));
seq__51525_51547 = G__51552;
chunk__51526_51548 = G__51553;
count__51527_51549 = G__51554;
i__51528_51550 = G__51555;
continue;
} else {
var temp__4657__auto___51556 = cljs.core.seq.call(null,seq__51525_51547);
if(temp__4657__auto___51556){
var seq__51525_51557__$1 = temp__4657__auto___51556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51525_51557__$1)){
var c__42224__auto___51558 = cljs.core.chunk_first.call(null,seq__51525_51557__$1);
var G__51559 = cljs.core.chunk_rest.call(null,seq__51525_51557__$1);
var G__51560 = c__42224__auto___51558;
var G__51561 = cljs.core.count.call(null,c__42224__auto___51558);
var G__51562 = (0);
seq__51525_51547 = G__51559;
chunk__51526_51548 = G__51560;
count__51527_51549 = G__51561;
i__51528_51550 = G__51562;
continue;
} else {
var f_51563 = cljs.core.first.call(null,seq__51525_51557__$1);
cljs.core.println.call(null,"  ",f_51563);

var G__51564 = cljs.core.next.call(null,seq__51525_51557__$1);
var G__51565 = null;
var G__51566 = (0);
var G__51567 = (0);
seq__51525_51547 = G__51564;
chunk__51526_51548 = G__51565;
count__51527_51549 = G__51566;
i__51528_51550 = G__51567;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51568 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41385__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51568);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51568)))?cljs.core.second.call(null,arglists_51568):arglists_51568));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51529_51569 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51530_51570 = null;
var count__51531_51571 = (0);
var i__51532_51572 = (0);
while(true){
if((i__51532_51572 < count__51531_51571)){
var vec__51533_51573 = cljs.core._nth.call(null,chunk__51530_51570,i__51532_51572);
var name_51574 = cljs.core.nth.call(null,vec__51533_51573,(0),null);
var map__51536_51575 = cljs.core.nth.call(null,vec__51533_51573,(1),null);
var map__51536_51576__$1 = ((((!((map__51536_51575 == null)))?((((map__51536_51575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51536_51575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51536_51575):map__51536_51575);
var doc_51577 = cljs.core.get.call(null,map__51536_51576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51578 = cljs.core.get.call(null,map__51536_51576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51574);

cljs.core.println.call(null," ",arglists_51578);

if(cljs.core.truth_(doc_51577)){
cljs.core.println.call(null," ",doc_51577);
} else {
}

var G__51579 = seq__51529_51569;
var G__51580 = chunk__51530_51570;
var G__51581 = count__51531_51571;
var G__51582 = (i__51532_51572 + (1));
seq__51529_51569 = G__51579;
chunk__51530_51570 = G__51580;
count__51531_51571 = G__51581;
i__51532_51572 = G__51582;
continue;
} else {
var temp__4657__auto___51583 = cljs.core.seq.call(null,seq__51529_51569);
if(temp__4657__auto___51583){
var seq__51529_51584__$1 = temp__4657__auto___51583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51529_51584__$1)){
var c__42224__auto___51585 = cljs.core.chunk_first.call(null,seq__51529_51584__$1);
var G__51586 = cljs.core.chunk_rest.call(null,seq__51529_51584__$1);
var G__51587 = c__42224__auto___51585;
var G__51588 = cljs.core.count.call(null,c__42224__auto___51585);
var G__51589 = (0);
seq__51529_51569 = G__51586;
chunk__51530_51570 = G__51587;
count__51531_51571 = G__51588;
i__51532_51572 = G__51589;
continue;
} else {
var vec__51538_51590 = cljs.core.first.call(null,seq__51529_51584__$1);
var name_51591 = cljs.core.nth.call(null,vec__51538_51590,(0),null);
var map__51541_51592 = cljs.core.nth.call(null,vec__51538_51590,(1),null);
var map__51541_51593__$1 = ((((!((map__51541_51592 == null)))?((((map__51541_51592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51541_51592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51541_51592):map__51541_51592);
var doc_51594 = cljs.core.get.call(null,map__51541_51593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51595 = cljs.core.get.call(null,map__51541_51593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51591);

cljs.core.println.call(null," ",arglists_51595);

if(cljs.core.truth_(doc_51594)){
cljs.core.println.call(null," ",doc_51594);
} else {
}

var G__51596 = cljs.core.next.call(null,seq__51529_51584__$1);
var G__51597 = null;
var G__51598 = (0);
var G__51599 = (0);
seq__51529_51569 = G__51596;
chunk__51530_51570 = G__51597;
count__51531_51571 = G__51598;
i__51532_51572 = G__51599;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__51543 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51544 = null;
var count__51545 = (0);
var i__51546 = (0);
while(true){
if((i__51546 < count__51545)){
var role = cljs.core._nth.call(null,chunk__51544,i__51546);
var temp__4657__auto___51600__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51600__$1)){
var spec_51601 = temp__4657__auto___51600__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51601));
} else {
}

var G__51602 = seq__51543;
var G__51603 = chunk__51544;
var G__51604 = count__51545;
var G__51605 = (i__51546 + (1));
seq__51543 = G__51602;
chunk__51544 = G__51603;
count__51545 = G__51604;
i__51546 = G__51605;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51543);
if(temp__4657__auto____$1){
var seq__51543__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51543__$1)){
var c__42224__auto__ = cljs.core.chunk_first.call(null,seq__51543__$1);
var G__51606 = cljs.core.chunk_rest.call(null,seq__51543__$1);
var G__51607 = c__42224__auto__;
var G__51608 = cljs.core.count.call(null,c__42224__auto__);
var G__51609 = (0);
seq__51543 = G__51606;
chunk__51544 = G__51607;
count__51545 = G__51608;
i__51546 = G__51609;
continue;
} else {
var role = cljs.core.first.call(null,seq__51543__$1);
var temp__4657__auto___51610__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51610__$2)){
var spec_51611 = temp__4657__auto___51610__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51611));
} else {
}

var G__51612 = cljs.core.next.call(null,seq__51543__$1);
var G__51613 = null;
var G__51614 = (0);
var G__51615 = (0);
seq__51543 = G__51612;
chunk__51544 = G__51613;
count__51545 = G__51614;
i__51546 = G__51615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1565798848815
