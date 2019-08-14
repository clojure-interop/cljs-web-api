// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSNumericValue');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The add() method of the `css.CSSNumericValue` interface adds
 *   supplied number to the CSSNumericValue.
 * 
 *   `var cssMathSum = CSSNumericValue.add(double | CSSNumericValue);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/add`
 */
css.CSSNumericValue.add = (function css$CSSNumericValue$add(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48081 = arguments.length;
var i__42557__auto___48082 = (0);
while(true){
if((i__42557__auto___48082 < len__42556__auto___48081)){
args__42563__auto__.push((arguments[i__42557__auto___48082]));

var G__48083 = (i__42557__auto___48082 + (1));
i__42557__auto___48082 = G__48083;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSNumericValue.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSNumericValue.add.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.add,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSNumericValue.add.cljs$lang$maxFixedArity = (1);

css.CSSNumericValue.add.cljs$lang$applyTo = (function (seq48079){
var G__48080 = cljs.core.first.call(null,seq48079);
var seq48079__$1 = cljs.core.next.call(null,seq48079);
return css.CSSNumericValue.add.cljs$core$IFn$_invoke$arity$variadic(G__48080,seq48079__$1);
});

/**
 * Method.
 * 
 *   The div() method of the `css.CSSNumericValue` interface divides
 *   CSSNumericValue by the supplied value.
 * 
 *   `var cssNumericValue = CSSNumericValue.div(number);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/div`
 */
css.CSSNumericValue.div = (function css$CSSNumericValue$div(this$,number){
return this$.div(number);
});
/**
 * Method.
 * 
 *   The equals() method of the `css.CSSNumericValue` interface returns
 *   boolean indicating whether the passed value are strictly equal.
 *   return a value of true, all passed values must be of the same
 *   and value and must be in the same order. This allows structural
 *   to be tested quickly.
 * 
 *   `var boolean = CSSNumericValue.equals(number);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/equals`
 */
css.CSSNumericValue.equals = (function css$CSSNumericValue$equals(this$,number){
return this$.equals(number);
});
/**
 * Method.
 * 
 *   The max() method of the `css.CSSNumericValue` interface returns
 *   highest value from among the values passed. The passed values
 *   be of the same type.
 * 
 *   `var cssUnitValue = CSSNumericValue.man(number1 ... numbern);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/max`
 */
css.CSSNumericValue.max = (function css$CSSNumericValue$max(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48086 = arguments.length;
var i__42557__auto___48087 = (0);
while(true){
if((i__42557__auto___48087 < len__42556__auto___48086)){
args__42563__auto__.push((arguments[i__42557__auto___48087]));

var G__48088 = (i__42557__auto___48087 + (1));
i__42557__auto___48087 = G__48088;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSNumericValue.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSNumericValue.max.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.max,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSNumericValue.max.cljs$lang$maxFixedArity = (1);

css.CSSNumericValue.max.cljs$lang$applyTo = (function (seq48084){
var G__48085 = cljs.core.first.call(null,seq48084);
var seq48084__$1 = cljs.core.next.call(null,seq48084);
return css.CSSNumericValue.max.cljs$core$IFn$_invoke$arity$variadic(G__48085,seq48084__$1);
});

/**
 * Method.
 * 
 *   The min() method of the `css.CSSNumericValue` interface returns
 *   lowest value from among those values passed. The passed values
 *   be of the same type.
 * 
 *   `var cssUnitValue = CSSNumericValue.min(number1 ... numbern);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/min`
 */
css.CSSNumericValue.min = (function css$CSSNumericValue$min(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48091 = arguments.length;
var i__42557__auto___48092 = (0);
while(true){
if((i__42557__auto___48092 < len__42556__auto___48091)){
args__42563__auto__.push((arguments[i__42557__auto___48092]));

var G__48093 = (i__42557__auto___48092 + (1));
i__42557__auto___48092 = G__48093;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSNumericValue.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSNumericValue.min.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.min,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSNumericValue.min.cljs$lang$maxFixedArity = (1);

css.CSSNumericValue.min.cljs$lang$applyTo = (function (seq48089){
var G__48090 = cljs.core.first.call(null,seq48089);
var seq48089__$1 = cljs.core.next.call(null,seq48089);
return css.CSSNumericValue.min.cljs$core$IFn$_invoke$arity$variadic(G__48090,seq48089__$1);
});

/**
 * Method.
 * 
 *   The mul() method of the `css.CSSNumericValue` interface multiplies
 *   CSSNumericValue by the supplied value.
 * 
 *   `var cssMathProduct = CSSNumericValue.mul(number);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/mul`
 */
css.CSSNumericValue.mul = (function css$CSSNumericValue$mul(this$,number){
return this$.mul(number);
});
/**
 * Method.
 * 
 *   The parse() method of the `css.CSSNumericValue` interface converts
 *   value string into an object whose members are value and the units.
 * 
 *   `var cssNumericValue = CSSNumericValue.parse(cssText);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/parse`
 */
css.CSSNumericValue.parse = (function css$CSSNumericValue$parse(this$,css_text){
return this$.parse(css_text);
});
/**
 * Method.
 * 
 *   The sub() method of the `css.CSSNumericValue` interface subtracts
 *   supplied number from the CSSNumericValue.
 * 
 *   `var cssMathSum = CSSNumericValue.sub(number);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/sub`
 */
css.CSSNumericValue.sub = (function css$CSSNumericValue$sub(this$,number){
return this$.sub(number);
});
/**
 * Method.
 * 
 *   The sub() method of the `css.CSSNumericValue` interface subtracts
 *   supplied number from the CSSNumericValue.
 * 
 *   `var cssMathSum = CSSNumericValue.sub(number);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/sum`
 */
css.CSSNumericValue.sum = (function css$CSSNumericValue$sum(this$,number){
return this$.sum(number);
});
/**
 * Method.
 * 
 *   The to() method of the `css.CSSNumericValue` interface converts
 *   numberic value from one unit to another.
 * 
 *   `var cssUnitValue = CSSNumericVAlue.to(unit);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/to`
 */
css.CSSNumericValue.to = (function css$CSSNumericValue$to(this$,unit){
return this$.to(unit);
});
/**
 * Method.
 * 
 *   The toSum() method of the `css.CSSNumericValue` interface converts
 *   object's value to a `css.CSSMathSum` object to values of the
 *   unit.
 * 
 *   `var cssMathSum = CSSNumericValue.toSum(units);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/toSum`
 */
css.CSSNumericValue.to_sum = (function css$CSSNumericValue$to_sum(this$,units){
return this$.toSum(units);
});
/**
 * Method.
 * 
 *   The type() method of the `css.CSSNumericValue` interface returns
 *   type of CSSNumericValue, one of angle, flex, frequency, length,
 *   percent, percentHint, or time.
 * 
 *   `var cssNumericType = CSSNumericValue.type();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/type`
 */
css.CSSNumericValue.type = (function css$CSSNumericValue$type(this$){
return this$.type();
});

//# sourceMappingURL=CSSNumericValue.js.map?rel=1565798825575
