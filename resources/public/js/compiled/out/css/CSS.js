// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSS');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The CSS.escape() static method returns a `css.CSSOMString` containing
 *   escaped string passed as parameter, mostly for use as part of
 *   CSS selector.
 * 
 *   `escapedStr = CSS.escape(str);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape`
 */
css.CSS.escape = (function css$CSS$escape(this$,str){
return this$.escape(str);
});
/**
 * Method.
 * 
 *   The CSS.supports() method returns a `web.Boolean` value indicating
 *   the browser supports a given CSS feature, or not.
 * 
 *   `CSS.supports(propertyName, value);
 *   CSS.supports(supportCondition);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports`
 */
css.CSS.supports = (function css$CSS$supports(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43572 = arguments.length;
var i__42557__auto___43573 = (0);
while(true){
if((i__42557__auto___43573 < len__42556__auto___43572)){
args__42563__auto__.push((arguments[i__42557__auto___43573]));

var G__43574 = (i__42557__auto___43573 + (1));
i__42557__auto___43573 = G__43574;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSS.supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSS.supports.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.supports,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSS.supports.cljs$lang$maxFixedArity = (1);

css.CSS.supports.cljs$lang$applyTo = (function (seq43570){
var G__43571 = cljs.core.first.call(null,seq43570);
var seq43570__$1 = cljs.core.next.call(null,seq43570);
return css.CSS.supports.cljs$core$IFn$_invoke$arity$variadic(G__43571,seq43570__$1);
});

/**
 * Property.
 * 
 *   paintWorklet is a static, read-only property of the `css.CSS`
 *   that provides access to the `web.PaintWorklet`, which programmatically
 *   an image where a CSS property expects a file.
 * 
 *   `var worklet = CSS.paintWorklet;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/paintWorklet`
 */
css.CSS.paint_worklet = (function css$CSS$paint_worklet(this$){
return this$.paintWorklet();
});
/**
 * Property.
 * 
 *   paintWorklet is a static, read-only property of the `css.CSS`
 *   that provides access to the `web.PaintWorklet`, which programmatically
 *   an image where a CSS property expects a file.
 * 
 *   `var worklet = CSS.paintWorklet;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/paintWorklet`
 */
css.CSS.set_paint_worklet_BANG_ = (function css$CSS$set_paint_worklet_BANG_(this$,val){
return (this$["paintWorklet"] = val);
});

//# sourceMappingURL=CSS.js.map?rel=1565798808094
