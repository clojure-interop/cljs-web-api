// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSStyleSheet');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The obsolete `css.CSSStyleSheet` interface's addRule() legacy
 *   adds a new rule to the stylesheet. You should avoid using this
 *   and should instead use the more standard `web.insertRule()` method.
 * 
 *   `var result = cssStyleSheet.addRule(selector, styleBlock, index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/addRule`
 */
css.CSSStyleSheet.add_rule = (function css$CSSStyleSheet$add_rule(this$,selector,style_block,index){
return this$.addRule(selector,style_block,index);
});
/**
 * Method.
 * 
 *   The `css.CSSStyleSheet` method deleteRule() removes a rule from
 *   stylesheet object.
 * 
 *   `cssStyleSheet.deleteRule(index)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule`
 */
css.CSSStyleSheet.delete_rule = (function css$CSSStyleSheet$delete_rule(this$,index){
return this$.deleteRule(index);
});
/**
 * Method.
 * 
 *   The CSSStyleSheet.insertRule() method inserts a new CSS rule
 *   the current style sheet, with some restrictions.
 * 
 *   `stylesheet.insertRule(rule [, index])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule`
 */
css.CSSStyleSheet.insert_rule = (function css$CSSStyleSheet$insert_rule(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52443 = arguments.length;
var i__42557__auto___52444 = (0);
while(true){
if((i__42557__auto___52444 < len__42556__auto___52443)){
args__42563__auto__.push((arguments[i__42557__auto___52444]));

var G__52445 = (i__42557__auto___52444 + (1));
i__42557__auto___52444 = G__52445;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSStyleSheet.insert_rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSStyleSheet.insert_rule.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.insertRule,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSStyleSheet.insert_rule.cljs$lang$maxFixedArity = (1);

css.CSSStyleSheet.insert_rule.cljs$lang$applyTo = (function (seq52441){
var G__52442 = cljs.core.first.call(null,seq52441);
var seq52441__$1 = cljs.core.next.call(null,seq52441);
return css.CSSStyleSheet.insert_rule.cljs$core$IFn$_invoke$arity$variadic(G__52442,seq52441__$1);
});

/**
 * Method.
 * 
 *   The obsolete `css.CSSStyleSheet` method removeRule() removes
 *   rule from the stylesheet object.
 * 
 *   `cssStyleSheet.removeRule(index)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/removeRule`
 */
css.CSSStyleSheet.remove_rule = (function css$CSSStyleSheet$remove_rule(this$,index){
return this$.removeRule(index);
});
/**
 * Property.
 * 
 *   The read-only `css.CSSStyleSheet` property cssRules returns a
 *   `css.CSSRuleList` which provides a real-time, up-to-date list
 *   every CSS rule which comprises the stylesheet.
 * 
 *   `var rules = cssStyleSheet.cssRules;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/cssRules`
 */
css.CSSStyleSheet.css_rules = (function css$CSSStyleSheet$css_rules(this$){
return this$.cssRules();
});
/**
 * Property.
 * 
 *   The read-only `css.CSSStyleSheet` property ownerRule returns
 *   `css.CSSImportRule` corresponding to the `web.@import` at-rule
 *   imported the stylesheet into the document.
 * 
 *   `var ownerRule = cssStyleSheet.ownerRule;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/ownerRule`
 */
css.CSSStyleSheet.owner_rule = (function css$CSSStyleSheet$owner_rule(this$){
return this$.ownerRule();
});
/**
 * Property.
 * 
 *   rules is a deprecated legacy property of the `css.CSSStyleSheet`
 *   Functionally identical to the preferred `web.cssRules` property,
 *   provides access to a live-updating list of the CSS rules comprising
 *   stylesheet.
 * 
 *   `var rules = cssStyleSheet.rules;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/rules`
 */
css.CSSStyleSheet.rules = (function css$CSSStyleSheet$rules(this$){
return this$.rules();
});

//# sourceMappingURL=CSSStyleSheet.js.map?rel=1565798853631
