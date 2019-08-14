// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e51810){if((e51810 instanceof Error)){
var e = e51810;
return "Error: Unable to stringify";
} else {
throw e51810;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51813 = arguments.length;
switch (G__51813) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51811_SHARP_){
if(typeof p1__51811_SHARP_ === 'string'){
return p1__51811_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51811_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__42563__auto__ = [];
var len__42556__auto___51816 = arguments.length;
var i__42557__auto___51817 = (0);
while(true){
if((i__42557__auto___51817 < len__42556__auto___51816)){
args__42563__auto__.push((arguments[i__42557__auto___51817]));

var G__51818 = (i__42557__auto___51817 + (1));
i__42557__auto___51817 = G__51818;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51815){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51815));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42563__auto__ = [];
var len__42556__auto___51820 = arguments.length;
var i__42557__auto___51821 = (0);
while(true){
if((i__42557__auto___51821 < len__42556__auto___51820)){
args__42563__auto__.push((arguments[i__42557__auto___51821]));

var G__51822 = (i__42557__auto___51821 + (1));
i__42557__auto___51821 = G__51822;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51819){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51819));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51823){
var map__51824 = p__51823;
var map__51824__$1 = ((((!((map__51824 == null)))?((((map__51824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51824):map__51824);
var message = cljs.core.get.call(null,map__51824__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51824__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41385__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41373__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41373__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41373__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__45908__auto___51903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___51903,ch){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___51903,ch){
return (function (state_51875){
var state_val_51876 = (state_51875[(1)]);
if((state_val_51876 === (7))){
var inst_51871 = (state_51875[(2)]);
var state_51875__$1 = state_51875;
var statearr_51877_51904 = state_51875__$1;
(statearr_51877_51904[(2)] = inst_51871);

(statearr_51877_51904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (1))){
var state_51875__$1 = state_51875;
var statearr_51878_51905 = state_51875__$1;
(statearr_51878_51905[(2)] = null);

(statearr_51878_51905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (4))){
var inst_51828 = (state_51875[(7)]);
var inst_51828__$1 = (state_51875[(2)]);
var state_51875__$1 = (function (){var statearr_51879 = state_51875;
(statearr_51879[(7)] = inst_51828__$1);

return statearr_51879;
})();
if(cljs.core.truth_(inst_51828__$1)){
var statearr_51880_51906 = state_51875__$1;
(statearr_51880_51906[(1)] = (5));

} else {
var statearr_51881_51907 = state_51875__$1;
(statearr_51881_51907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (15))){
var inst_51835 = (state_51875[(8)]);
var inst_51850 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51835);
var inst_51851 = cljs.core.first.call(null,inst_51850);
var inst_51852 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51851);
var inst_51853 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51852)].join('');
var inst_51854 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51853);
var state_51875__$1 = state_51875;
var statearr_51882_51908 = state_51875__$1;
(statearr_51882_51908[(2)] = inst_51854);

(statearr_51882_51908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (13))){
var inst_51859 = (state_51875[(2)]);
var state_51875__$1 = state_51875;
var statearr_51883_51909 = state_51875__$1;
(statearr_51883_51909[(2)] = inst_51859);

(statearr_51883_51909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (6))){
var state_51875__$1 = state_51875;
var statearr_51884_51910 = state_51875__$1;
(statearr_51884_51910[(2)] = null);

(statearr_51884_51910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (17))){
var inst_51857 = (state_51875[(2)]);
var state_51875__$1 = state_51875;
var statearr_51885_51911 = state_51875__$1;
(statearr_51885_51911[(2)] = inst_51857);

(statearr_51885_51911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (3))){
var inst_51873 = (state_51875[(2)]);
var state_51875__$1 = state_51875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51875__$1,inst_51873);
} else {
if((state_val_51876 === (12))){
var inst_51834 = (state_51875[(9)]);
var inst_51848 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51834,opts);
var state_51875__$1 = state_51875;
if(cljs.core.truth_(inst_51848)){
var statearr_51886_51912 = state_51875__$1;
(statearr_51886_51912[(1)] = (15));

} else {
var statearr_51887_51913 = state_51875__$1;
(statearr_51887_51913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (2))){
var state_51875__$1 = state_51875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51875__$1,(4),ch);
} else {
if((state_val_51876 === (11))){
var inst_51835 = (state_51875[(8)]);
var inst_51840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51841 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51835);
var inst_51842 = cljs.core.async.timeout.call(null,(1000));
var inst_51843 = [inst_51841,inst_51842];
var inst_51844 = (new cljs.core.PersistentVector(null,2,(5),inst_51840,inst_51843,null));
var state_51875__$1 = state_51875;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51875__$1,(14),inst_51844);
} else {
if((state_val_51876 === (9))){
var inst_51835 = (state_51875[(8)]);
var inst_51861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51862 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51835);
var inst_51863 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51862);
var inst_51864 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51863)].join('');
var inst_51865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51864);
var state_51875__$1 = (function (){var statearr_51888 = state_51875;
(statearr_51888[(10)] = inst_51861);

return statearr_51888;
})();
var statearr_51889_51914 = state_51875__$1;
(statearr_51889_51914[(2)] = inst_51865);

(statearr_51889_51914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (5))){
var inst_51828 = (state_51875[(7)]);
var inst_51830 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51831 = (new cljs.core.PersistentArrayMap(null,2,inst_51830,null));
var inst_51832 = (new cljs.core.PersistentHashSet(null,inst_51831,null));
var inst_51833 = figwheel.client.focus_msgs.call(null,inst_51832,inst_51828);
var inst_51834 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51833);
var inst_51835 = cljs.core.first.call(null,inst_51833);
var inst_51836 = figwheel.client.autoload_QMARK_.call(null);
var state_51875__$1 = (function (){var statearr_51890 = state_51875;
(statearr_51890[(9)] = inst_51834);

(statearr_51890[(8)] = inst_51835);

return statearr_51890;
})();
if(cljs.core.truth_(inst_51836)){
var statearr_51891_51915 = state_51875__$1;
(statearr_51891_51915[(1)] = (8));

} else {
var statearr_51892_51916 = state_51875__$1;
(statearr_51892_51916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (14))){
var inst_51846 = (state_51875[(2)]);
var state_51875__$1 = state_51875;
var statearr_51893_51917 = state_51875__$1;
(statearr_51893_51917[(2)] = inst_51846);

(statearr_51893_51917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (16))){
var state_51875__$1 = state_51875;
var statearr_51894_51918 = state_51875__$1;
(statearr_51894_51918[(2)] = null);

(statearr_51894_51918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (10))){
var inst_51867 = (state_51875[(2)]);
var state_51875__$1 = (function (){var statearr_51895 = state_51875;
(statearr_51895[(11)] = inst_51867);

return statearr_51895;
})();
var statearr_51896_51919 = state_51875__$1;
(statearr_51896_51919[(2)] = null);

(statearr_51896_51919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51876 === (8))){
var inst_51834 = (state_51875[(9)]);
var inst_51838 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51834,opts);
var state_51875__$1 = state_51875;
if(cljs.core.truth_(inst_51838)){
var statearr_51897_51920 = state_51875__$1;
(statearr_51897_51920[(1)] = (11));

} else {
var statearr_51898_51921 = state_51875__$1;
(statearr_51898_51921[(1)] = (12));

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
});})(c__45908__auto___51903,ch))
;
return ((function (switch__45820__auto__,c__45908__auto___51903,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45821__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45821__auto____0 = (function (){
var statearr_51899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51899[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45821__auto__);

(statearr_51899[(1)] = (1));

return statearr_51899;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45821__auto____1 = (function (state_51875){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_51875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e51900){if((e51900 instanceof Object)){
var ex__45824__auto__ = e51900;
var statearr_51901_51922 = state_51875;
(statearr_51901_51922[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51923 = state_51875;
state_51875 = G__51923;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45821__auto__ = function(state_51875){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45821__auto____1.call(this,state_51875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45821__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45821__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___51903,ch))
})();
var state__45910__auto__ = (function (){var statearr_51902 = f__45909__auto__.call(null);
(statearr_51902[(6)] = c__45908__auto___51903);

return statearr_51902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___51903,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51924_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51924_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51926 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51926){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51925){if((e51925 instanceof Error)){
var e = e51925;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51926], null));
} else {
var e = e51925;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51926))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51927){
var map__51928 = p__51927;
var map__51928__$1 = ((((!((map__51928 == null)))?((((map__51928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51928):map__51928);
var opts = map__51928__$1;
var build_id = cljs.core.get.call(null,map__51928__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51928,map__51928__$1,opts,build_id){
return (function (p__51930){
var vec__51931 = p__51930;
var seq__51932 = cljs.core.seq.call(null,vec__51931);
var first__51933 = cljs.core.first.call(null,seq__51932);
var seq__51932__$1 = cljs.core.next.call(null,seq__51932);
var map__51934 = first__51933;
var map__51934__$1 = ((((!((map__51934 == null)))?((((map__51934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51934):map__51934);
var msg = map__51934__$1;
var msg_name = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51932__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51931,seq__51932,first__51933,seq__51932__$1,map__51934,map__51934__$1,msg,msg_name,_,map__51928,map__51928__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51931,seq__51932,first__51933,seq__51932__$1,map__51934,map__51934__$1,msg,msg_name,_,map__51928,map__51928__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51928,map__51928__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51936){
var vec__51937 = p__51936;
var seq__51938 = cljs.core.seq.call(null,vec__51937);
var first__51939 = cljs.core.first.call(null,seq__51938);
var seq__51938__$1 = cljs.core.next.call(null,seq__51938);
var map__51940 = first__51939;
var map__51940__$1 = ((((!((map__51940 == null)))?((((map__51940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51940):map__51940);
var msg = map__51940__$1;
var msg_name = cljs.core.get.call(null,map__51940__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51938__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51942){
var map__51943 = p__51942;
var map__51943__$1 = ((((!((map__51943 == null)))?((((map__51943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51943):map__51943);
var on_compile_warning = cljs.core.get.call(null,map__51943__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51943__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51943,map__51943__$1,on_compile_warning,on_compile_fail){
return (function (p__51945){
var vec__51946 = p__51945;
var seq__51947 = cljs.core.seq.call(null,vec__51946);
var first__51948 = cljs.core.first.call(null,seq__51947);
var seq__51947__$1 = cljs.core.next.call(null,seq__51947);
var map__51949 = first__51948;
var map__51949__$1 = ((((!((map__51949 == null)))?((((map__51949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51949):map__51949);
var msg = map__51949__$1;
var msg_name = cljs.core.get.call(null,map__51949__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51947__$1;
var pred__51951 = cljs.core._EQ_;
var expr__51952 = msg_name;
if(cljs.core.truth_(pred__51951.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51952))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51951.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51952))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51943,map__51943__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__,msg_hist,msg_names,msg){
return (function (state_52041){
var state_val_52042 = (state_52041[(1)]);
if((state_val_52042 === (7))){
var inst_51961 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_51961)){
var statearr_52043_52090 = state_52041__$1;
(statearr_52043_52090[(1)] = (8));

} else {
var statearr_52044_52091 = state_52041__$1;
(statearr_52044_52091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (20))){
var inst_52035 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52045_52092 = state_52041__$1;
(statearr_52045_52092[(2)] = inst_52035);

(statearr_52045_52092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (27))){
var inst_52031 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52046_52093 = state_52041__$1;
(statearr_52046_52093[(2)] = inst_52031);

(statearr_52046_52093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (1))){
var inst_51954 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_51954)){
var statearr_52047_52094 = state_52041__$1;
(statearr_52047_52094[(1)] = (2));

} else {
var statearr_52048_52095 = state_52041__$1;
(statearr_52048_52095[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (24))){
var inst_52033 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52049_52096 = state_52041__$1;
(statearr_52049_52096[(2)] = inst_52033);

(statearr_52049_52096[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (4))){
var inst_52039 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52041__$1,inst_52039);
} else {
if((state_val_52042 === (15))){
var inst_52037 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52050_52097 = state_52041__$1;
(statearr_52050_52097[(2)] = inst_52037);

(statearr_52050_52097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (21))){
var inst_51990 = (state_52041[(2)]);
var inst_51991 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51992 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51991);
var state_52041__$1 = (function (){var statearr_52051 = state_52041;
(statearr_52051[(7)] = inst_51990);

return statearr_52051;
})();
var statearr_52052_52098 = state_52041__$1;
(statearr_52052_52098[(2)] = inst_51992);

(statearr_52052_52098[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (31))){
var inst_52020 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_52020)){
var statearr_52053_52099 = state_52041__$1;
(statearr_52053_52099[(1)] = (34));

} else {
var statearr_52054_52100 = state_52041__$1;
(statearr_52054_52100[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (32))){
var inst_52029 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52055_52101 = state_52041__$1;
(statearr_52055_52101[(2)] = inst_52029);

(statearr_52055_52101[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (33))){
var inst_52016 = (state_52041[(2)]);
var inst_52017 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52018 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52017);
var state_52041__$1 = (function (){var statearr_52056 = state_52041;
(statearr_52056[(8)] = inst_52016);

return statearr_52056;
})();
var statearr_52057_52102 = state_52041__$1;
(statearr_52057_52102[(2)] = inst_52018);

(statearr_52057_52102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (13))){
var inst_51975 = figwheel.client.heads_up.clear.call(null);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(16),inst_51975);
} else {
if((state_val_52042 === (22))){
var inst_51996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51997 = figwheel.client.heads_up.append_warning_message.call(null,inst_51996);
var state_52041__$1 = state_52041;
var statearr_52058_52103 = state_52041__$1;
(statearr_52058_52103[(2)] = inst_51997);

(statearr_52058_52103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (36))){
var inst_52027 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52059_52104 = state_52041__$1;
(statearr_52059_52104[(2)] = inst_52027);

(statearr_52059_52104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (29))){
var inst_52007 = (state_52041[(2)]);
var inst_52008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52009 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52008);
var state_52041__$1 = (function (){var statearr_52060 = state_52041;
(statearr_52060[(9)] = inst_52007);

return statearr_52060;
})();
var statearr_52061_52105 = state_52041__$1;
(statearr_52061_52105[(2)] = inst_52009);

(statearr_52061_52105[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (6))){
var inst_51956 = (state_52041[(10)]);
var state_52041__$1 = state_52041;
var statearr_52062_52106 = state_52041__$1;
(statearr_52062_52106[(2)] = inst_51956);

(statearr_52062_52106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (28))){
var inst_52003 = (state_52041[(2)]);
var inst_52004 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52005 = figwheel.client.heads_up.display_warning.call(null,inst_52004);
var state_52041__$1 = (function (){var statearr_52063 = state_52041;
(statearr_52063[(11)] = inst_52003);

return statearr_52063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(29),inst_52005);
} else {
if((state_val_52042 === (25))){
var inst_52001 = figwheel.client.heads_up.clear.call(null);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(28),inst_52001);
} else {
if((state_val_52042 === (34))){
var inst_52022 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(37),inst_52022);
} else {
if((state_val_52042 === (17))){
var inst_51981 = (state_52041[(2)]);
var inst_51982 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51983 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51982);
var state_52041__$1 = (function (){var statearr_52064 = state_52041;
(statearr_52064[(12)] = inst_51981);

return statearr_52064;
})();
var statearr_52065_52107 = state_52041__$1;
(statearr_52065_52107[(2)] = inst_51983);

(statearr_52065_52107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (3))){
var inst_51973 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_51973)){
var statearr_52066_52108 = state_52041__$1;
(statearr_52066_52108[(1)] = (13));

} else {
var statearr_52067_52109 = state_52041__$1;
(statearr_52067_52109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (12))){
var inst_51969 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52068_52110 = state_52041__$1;
(statearr_52068_52110[(2)] = inst_51969);

(statearr_52068_52110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (2))){
var inst_51956 = (state_52041[(10)]);
var inst_51956__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52041__$1 = (function (){var statearr_52069 = state_52041;
(statearr_52069[(10)] = inst_51956__$1);

return statearr_52069;
})();
if(cljs.core.truth_(inst_51956__$1)){
var statearr_52070_52111 = state_52041__$1;
(statearr_52070_52111[(1)] = (5));

} else {
var statearr_52071_52112 = state_52041__$1;
(statearr_52071_52112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (23))){
var inst_51999 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_51999)){
var statearr_52072_52113 = state_52041__$1;
(statearr_52072_52113[(1)] = (25));

} else {
var statearr_52073_52114 = state_52041__$1;
(statearr_52073_52114[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (35))){
var state_52041__$1 = state_52041;
var statearr_52074_52115 = state_52041__$1;
(statearr_52074_52115[(2)] = null);

(statearr_52074_52115[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (19))){
var inst_51994 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_51994)){
var statearr_52075_52116 = state_52041__$1;
(statearr_52075_52116[(1)] = (22));

} else {
var statearr_52076_52117 = state_52041__$1;
(statearr_52076_52117[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (11))){
var inst_51965 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52077_52118 = state_52041__$1;
(statearr_52077_52118[(2)] = inst_51965);

(statearr_52077_52118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (9))){
var inst_51967 = figwheel.client.heads_up.clear.call(null);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(12),inst_51967);
} else {
if((state_val_52042 === (5))){
var inst_51958 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52041__$1 = state_52041;
var statearr_52078_52119 = state_52041__$1;
(statearr_52078_52119[(2)] = inst_51958);

(statearr_52078_52119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (14))){
var inst_51985 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_51985)){
var statearr_52079_52120 = state_52041__$1;
(statearr_52079_52120[(1)] = (18));

} else {
var statearr_52080_52121 = state_52041__$1;
(statearr_52080_52121[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (26))){
var inst_52011 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_52011)){
var statearr_52081_52122 = state_52041__$1;
(statearr_52081_52122[(1)] = (30));

} else {
var statearr_52082_52123 = state_52041__$1;
(statearr_52082_52123[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (16))){
var inst_51977 = (state_52041[(2)]);
var inst_51978 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51979 = figwheel.client.heads_up.display_exception.call(null,inst_51978);
var state_52041__$1 = (function (){var statearr_52083 = state_52041;
(statearr_52083[(13)] = inst_51977);

return statearr_52083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(17),inst_51979);
} else {
if((state_val_52042 === (30))){
var inst_52013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52014 = figwheel.client.heads_up.display_warning.call(null,inst_52013);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(33),inst_52014);
} else {
if((state_val_52042 === (10))){
var inst_51971 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52084_52124 = state_52041__$1;
(statearr_52084_52124[(2)] = inst_51971);

(statearr_52084_52124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (18))){
var inst_51987 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51988 = figwheel.client.heads_up.display_exception.call(null,inst_51987);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(21),inst_51988);
} else {
if((state_val_52042 === (37))){
var inst_52024 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52085_52125 = state_52041__$1;
(statearr_52085_52125[(2)] = inst_52024);

(statearr_52085_52125[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (8))){
var inst_51963 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(11),inst_51963);
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
});})(c__45908__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45820__auto__,c__45908__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto____0 = (function (){
var statearr_52086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52086[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto__);

(statearr_52086[(1)] = (1));

return statearr_52086;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto____1 = (function (state_52041){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_52041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e52087){if((e52087 instanceof Object)){
var ex__45824__auto__ = e52087;
var statearr_52088_52126 = state_52041;
(statearr_52088_52126[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52127 = state_52041;
state_52041 = G__52127;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto__ = function(state_52041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto____1.call(this,state_52041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__,msg_hist,msg_names,msg))
})();
var state__45910__auto__ = (function (){var statearr_52089 = f__45909__auto__.call(null);
(statearr_52089[(6)] = c__45908__auto__);

return statearr_52089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__,msg_hist,msg_names,msg))
);

return c__45908__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45908__auto___52156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___52156,ch){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___52156,ch){
return (function (state_52142){
var state_val_52143 = (state_52142[(1)]);
if((state_val_52143 === (1))){
var state_52142__$1 = state_52142;
var statearr_52144_52157 = state_52142__$1;
(statearr_52144_52157[(2)] = null);

(statearr_52144_52157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (2))){
var state_52142__$1 = state_52142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52142__$1,(4),ch);
} else {
if((state_val_52143 === (3))){
var inst_52140 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52142__$1,inst_52140);
} else {
if((state_val_52143 === (4))){
var inst_52130 = (state_52142[(7)]);
var inst_52130__$1 = (state_52142[(2)]);
var state_52142__$1 = (function (){var statearr_52145 = state_52142;
(statearr_52145[(7)] = inst_52130__$1);

return statearr_52145;
})();
if(cljs.core.truth_(inst_52130__$1)){
var statearr_52146_52158 = state_52142__$1;
(statearr_52146_52158[(1)] = (5));

} else {
var statearr_52147_52159 = state_52142__$1;
(statearr_52147_52159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (5))){
var inst_52130 = (state_52142[(7)]);
var inst_52132 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52130);
var state_52142__$1 = state_52142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52142__$1,(8),inst_52132);
} else {
if((state_val_52143 === (6))){
var state_52142__$1 = state_52142;
var statearr_52148_52160 = state_52142__$1;
(statearr_52148_52160[(2)] = null);

(statearr_52148_52160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (7))){
var inst_52138 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52149_52161 = state_52142__$1;
(statearr_52149_52161[(2)] = inst_52138);

(statearr_52149_52161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (8))){
var inst_52134 = (state_52142[(2)]);
var state_52142__$1 = (function (){var statearr_52150 = state_52142;
(statearr_52150[(8)] = inst_52134);

return statearr_52150;
})();
var statearr_52151_52162 = state_52142__$1;
(statearr_52151_52162[(2)] = null);

(statearr_52151_52162[(1)] = (2));


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
});})(c__45908__auto___52156,ch))
;
return ((function (switch__45820__auto__,c__45908__auto___52156,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45821__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45821__auto____0 = (function (){
var statearr_52152 = [null,null,null,null,null,null,null,null,null];
(statearr_52152[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45821__auto__);

(statearr_52152[(1)] = (1));

return statearr_52152;
});
var figwheel$client$heads_up_plugin_$_state_machine__45821__auto____1 = (function (state_52142){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_52142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e52153){if((e52153 instanceof Object)){
var ex__45824__auto__ = e52153;
var statearr_52154_52163 = state_52142;
(statearr_52154_52163[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52164 = state_52142;
state_52142 = G__52164;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45821__auto__ = function(state_52142){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45821__auto____1.call(this,state_52142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45821__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45821__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___52156,ch))
})();
var state__45910__auto__ = (function (){var statearr_52155 = f__45909__auto__.call(null);
(statearr_52155[(6)] = c__45908__auto___52156);

return statearr_52155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___52156,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__){
return (function (state_52170){
var state_val_52171 = (state_52170[(1)]);
if((state_val_52171 === (1))){
var inst_52165 = cljs.core.async.timeout.call(null,(3000));
var state_52170__$1 = state_52170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52170__$1,(2),inst_52165);
} else {
if((state_val_52171 === (2))){
var inst_52167 = (state_52170[(2)]);
var inst_52168 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52170__$1 = (function (){var statearr_52172 = state_52170;
(statearr_52172[(7)] = inst_52167);

return statearr_52172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52170__$1,inst_52168);
} else {
return null;
}
}
});})(c__45908__auto__))
;
return ((function (switch__45820__auto__,c__45908__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45821__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45821__auto____0 = (function (){
var statearr_52173 = [null,null,null,null,null,null,null,null];
(statearr_52173[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45821__auto__);

(statearr_52173[(1)] = (1));

return statearr_52173;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45821__auto____1 = (function (state_52170){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_52170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e52174){if((e52174 instanceof Object)){
var ex__45824__auto__ = e52174;
var statearr_52175_52177 = state_52170;
(statearr_52175_52177[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52178 = state_52170;
state_52170 = G__52178;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45821__auto__ = function(state_52170){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45821__auto____1.call(this,state_52170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45821__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45821__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__))
})();
var state__45910__auto__ = (function (){var statearr_52176 = f__45909__auto__.call(null);
(statearr_52176[(6)] = c__45908__auto__);

return statearr_52176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__))
);

return c__45908__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52185){
var state_val_52186 = (state_52185[(1)]);
if((state_val_52186 === (1))){
var inst_52179 = cljs.core.async.timeout.call(null,(2000));
var state_52185__$1 = state_52185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52185__$1,(2),inst_52179);
} else {
if((state_val_52186 === (2))){
var inst_52181 = (state_52185[(2)]);
var inst_52182 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_52183 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52182);
var state_52185__$1 = (function (){var statearr_52187 = state_52185;
(statearr_52187[(7)] = inst_52181);

return statearr_52187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52185__$1,inst_52183);
} else {
return null;
}
}
});})(c__45908__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__45820__auto__,c__45908__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto____0 = (function (){
var statearr_52188 = [null,null,null,null,null,null,null,null];
(statearr_52188[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto__);

(statearr_52188[(1)] = (1));

return statearr_52188;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto____1 = (function (state_52185){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_52185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e52189){if((e52189 instanceof Object)){
var ex__45824__auto__ = e52189;
var statearr_52190_52192 = state_52185;
(statearr_52190_52192[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52193 = state_52185;
state_52185 = G__52193;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto__ = function(state_52185){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto____1.call(this,state_52185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__,figwheel_version,temp__4657__auto__))
})();
var state__45910__auto__ = (function (){var statearr_52191 = f__45909__auto__.call(null);
(statearr_52191[(6)] = c__45908__auto__);

return statearr_52191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__,figwheel_version,temp__4657__auto__))
);

return c__45908__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52194){
var map__52195 = p__52194;
var map__52195__$1 = ((((!((map__52195 == null)))?((((map__52195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52195):map__52195);
var file__$1 = cljs.core.get.call(null,map__52195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52197 = "";
var G__52197__$1 = (cljs.core.truth_(file__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52197),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file__$1)].join(''):G__52197);
var G__52197__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52197__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__52197__$1);
if(cljs.core.truth_((function (){var and__41373__auto__ = line;
if(cljs.core.truth_(and__41373__auto__)){
return column;
} else {
return and__41373__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52197__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__52197__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52198){
var map__52199 = p__52198;
var map__52199__$1 = ((((!((map__52199 == null)))?((((map__52199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52199):map__52199);
var ed = map__52199__$1;
var formatted_exception = cljs.core.get.call(null,map__52199__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52199__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52199__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52201_52205 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52202_52206 = null;
var count__52203_52207 = (0);
var i__52204_52208 = (0);
while(true){
if((i__52204_52208 < count__52203_52207)){
var msg_52209 = cljs.core._nth.call(null,chunk__52202_52206,i__52204_52208);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52209);

var G__52210 = seq__52201_52205;
var G__52211 = chunk__52202_52206;
var G__52212 = count__52203_52207;
var G__52213 = (i__52204_52208 + (1));
seq__52201_52205 = G__52210;
chunk__52202_52206 = G__52211;
count__52203_52207 = G__52212;
i__52204_52208 = G__52213;
continue;
} else {
var temp__4657__auto___52214 = cljs.core.seq.call(null,seq__52201_52205);
if(temp__4657__auto___52214){
var seq__52201_52215__$1 = temp__4657__auto___52214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52201_52215__$1)){
var c__42224__auto___52216 = cljs.core.chunk_first.call(null,seq__52201_52215__$1);
var G__52217 = cljs.core.chunk_rest.call(null,seq__52201_52215__$1);
var G__52218 = c__42224__auto___52216;
var G__52219 = cljs.core.count.call(null,c__42224__auto___52216);
var G__52220 = (0);
seq__52201_52205 = G__52217;
chunk__52202_52206 = G__52218;
count__52203_52207 = G__52219;
i__52204_52208 = G__52220;
continue;
} else {
var msg_52221 = cljs.core.first.call(null,seq__52201_52215__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52221);

var G__52222 = cljs.core.next.call(null,seq__52201_52215__$1);
var G__52223 = null;
var G__52224 = (0);
var G__52225 = (0);
seq__52201_52205 = G__52222;
chunk__52202_52206 = G__52223;
count__52203_52207 = G__52224;
i__52204_52208 = G__52225;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52226){
var map__52227 = p__52226;
var map__52227__$1 = ((((!((map__52227 == null)))?((((map__52227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52227):map__52227);
var w = map__52227__$1;
var message = cljs.core.get.call(null,map__52227__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41373__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41373__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41373__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__52229 = cljs.core.seq.call(null,plugins);
var chunk__52230 = null;
var count__52231 = (0);
var i__52232 = (0);
while(true){
if((i__52232 < count__52231)){
var vec__52233 = cljs.core._nth.call(null,chunk__52230,i__52232);
var k = cljs.core.nth.call(null,vec__52233,(0),null);
var plugin = cljs.core.nth.call(null,vec__52233,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52229,chunk__52230,count__52231,i__52232,pl_52239,vec__52233,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52239.call(null,msg_hist);
});})(seq__52229,chunk__52230,count__52231,i__52232,pl_52239,vec__52233,k,plugin))
);
} else {
}

var G__52240 = seq__52229;
var G__52241 = chunk__52230;
var G__52242 = count__52231;
var G__52243 = (i__52232 + (1));
seq__52229 = G__52240;
chunk__52230 = G__52241;
count__52231 = G__52242;
i__52232 = G__52243;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52229);
if(temp__4657__auto__){
var seq__52229__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52229__$1)){
var c__42224__auto__ = cljs.core.chunk_first.call(null,seq__52229__$1);
var G__52244 = cljs.core.chunk_rest.call(null,seq__52229__$1);
var G__52245 = c__42224__auto__;
var G__52246 = cljs.core.count.call(null,c__42224__auto__);
var G__52247 = (0);
seq__52229 = G__52244;
chunk__52230 = G__52245;
count__52231 = G__52246;
i__52232 = G__52247;
continue;
} else {
var vec__52236 = cljs.core.first.call(null,seq__52229__$1);
var k = cljs.core.nth.call(null,vec__52236,(0),null);
var plugin = cljs.core.nth.call(null,vec__52236,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52248 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52229,chunk__52230,count__52231,i__52232,pl_52248,vec__52236,k,plugin,seq__52229__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52248.call(null,msg_hist);
});})(seq__52229,chunk__52230,count__52231,i__52232,pl_52248,vec__52236,k,plugin,seq__52229__$1,temp__4657__auto__))
);
} else {
}

var G__52249 = cljs.core.next.call(null,seq__52229__$1);
var G__52250 = null;
var G__52251 = (0);
var G__52252 = (0);
seq__52229 = G__52249;
chunk__52230 = G__52250;
count__52231 = G__52251;
i__52232 = G__52252;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__52254 = arguments.length;
switch (G__52254) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__52255_52260 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52256_52261 = null;
var count__52257_52262 = (0);
var i__52258_52263 = (0);
while(true){
if((i__52258_52263 < count__52257_52262)){
var msg_52264 = cljs.core._nth.call(null,chunk__52256_52261,i__52258_52263);
figwheel.client.socket.handle_incoming_message.call(null,msg_52264);

var G__52265 = seq__52255_52260;
var G__52266 = chunk__52256_52261;
var G__52267 = count__52257_52262;
var G__52268 = (i__52258_52263 + (1));
seq__52255_52260 = G__52265;
chunk__52256_52261 = G__52266;
count__52257_52262 = G__52267;
i__52258_52263 = G__52268;
continue;
} else {
var temp__4657__auto___52269 = cljs.core.seq.call(null,seq__52255_52260);
if(temp__4657__auto___52269){
var seq__52255_52270__$1 = temp__4657__auto___52269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52255_52270__$1)){
var c__42224__auto___52271 = cljs.core.chunk_first.call(null,seq__52255_52270__$1);
var G__52272 = cljs.core.chunk_rest.call(null,seq__52255_52270__$1);
var G__52273 = c__42224__auto___52271;
var G__52274 = cljs.core.count.call(null,c__42224__auto___52271);
var G__52275 = (0);
seq__52255_52260 = G__52272;
chunk__52256_52261 = G__52273;
count__52257_52262 = G__52274;
i__52258_52263 = G__52275;
continue;
} else {
var msg_52276 = cljs.core.first.call(null,seq__52255_52270__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52276);

var G__52277 = cljs.core.next.call(null,seq__52255_52270__$1);
var G__52278 = null;
var G__52279 = (0);
var G__52280 = (0);
seq__52255_52260 = G__52277;
chunk__52256_52261 = G__52278;
count__52257_52262 = G__52279;
i__52258_52263 = G__52280;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52285 = arguments.length;
var i__42557__auto___52286 = (0);
while(true){
if((i__42557__auto___52286 < len__42556__auto___52285)){
args__42563__auto__.push((arguments[i__42557__auto___52286]));

var G__52287 = (i__42557__auto___52286 + (1));
i__42557__auto___52286 = G__52287;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((0) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42564__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52282){
var map__52283 = p__52282;
var map__52283__$1 = ((((!((map__52283 == null)))?((((map__52283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52283):map__52283);
var opts = map__52283__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52281){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52281));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52288){if((e52288 instanceof Error)){
var e = e52288;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52288;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__52289){
var map__52290 = p__52289;
var map__52290__$1 = ((((!((map__52290 == null)))?((((map__52290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52290):map__52290);
var msg_name = cljs.core.get.call(null,map__52290__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1565798850781
