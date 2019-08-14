// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLSelectElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLSelectElement.add() method adds an element to the collection
 *   option elements for this select element.
 * 
 *   `collection.add(item[, before]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add`
 */
html.HTMLSelectElement.add = (function html$HTMLSelectElement$add(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52586 = arguments.length;
var i__42557__auto___52587 = (0);
while(true){
if((i__42557__auto___52587 < len__42556__auto___52586)){
args__42563__auto__.push((arguments[i__42557__auto___52587]));

var G__52588 = (i__42557__auto___52587 + (1));
i__42557__auto___52587 = G__52588;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLSelectElement.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLSelectElement.add.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.add,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLSelectElement.add.cljs$lang$maxFixedArity = (1);

html.HTMLSelectElement.add.cljs$lang$applyTo = (function (seq52584){
var G__52585 = cljs.core.first.call(null,seq52584);
var seq52584__$1 = cljs.core.next.call(null,seq52584);
return html.HTMLSelectElement.add.cljs$core$IFn$_invoke$arity$variadic(G__52585,seq52584__$1);
});

/**
 * Method.
 * 
 *   The HTMLSelectElement.checkValidity() method checks whether the
 *   has any constraints and whether it satisfies them. If the element
 *   its constraints, the browser fires a cancelable invalid event
 *   the element, and then returns false.
 * 
 *   `var result = selectElt.checkValidity();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity`
 */
html.HTMLSelectElement.check_validity = (function html$HTMLSelectElement$check_validity(this$){
return this$.checkValidity();
});
/**
 * Method.
 * 
 *   The HTMLSelectElement.item() method returns the `web.Element`
 *   to the `html.HTMLOptionElement` whose position in the options
 *   corresponds to the index given in the parameter, or null if there
 *   none.
 * 
 *   `var item = collection.item(index);
 *   var item = collection[index];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/item`
 */
html.HTMLSelectElement.item = (function html$HTMLSelectElement$item(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52591 = arguments.length;
var i__42557__auto___52592 = (0);
while(true){
if((i__42557__auto___52592 < len__42556__auto___52591)){
args__42563__auto__.push((arguments[i__42557__auto___52592]));

var G__52593 = (i__42557__auto___52592 + (1));
i__42557__auto___52592 = G__52593;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLSelectElement.item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLSelectElement.item.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.item,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLSelectElement.item.cljs$lang$maxFixedArity = (1);

html.HTMLSelectElement.item.cljs$lang$applyTo = (function (seq52589){
var G__52590 = cljs.core.first.call(null,seq52589);
var seq52589__$1 = cljs.core.next.call(null,seq52589);
return html.HTMLSelectElement.item.cljs$core$IFn$_invoke$arity$variadic(G__52590,seq52589__$1);
});

/**
 * Method.
 * 
 *   The HTMLSelectElement.namedItem() method returns the `html.HTMLOptionElement`
 *   to the `html.HTMLOptionElement` whose name or id match the specified
 *   or null if no option matches.
 * 
 *   `var item = collection.namedItem(str);
 *   var item = collection[str];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/namedItem`
 */
html.HTMLSelectElement.named_item = (function html$HTMLSelectElement$named_item(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52596 = arguments.length;
var i__42557__auto___52597 = (0);
while(true){
if((i__42557__auto___52597 < len__42556__auto___52596)){
args__42563__auto__.push((arguments[i__42557__auto___52597]));

var G__52598 = (i__42557__auto___52597 + (1));
i__42557__auto___52597 = G__52598;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLSelectElement.named_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLSelectElement.named_item.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.namedItem,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLSelectElement.named_item.cljs$lang$maxFixedArity = (1);

html.HTMLSelectElement.named_item.cljs$lang$applyTo = (function (seq52594){
var G__52595 = cljs.core.first.call(null,seq52594);
var seq52594__$1 = cljs.core.next.call(null,seq52594);
return html.HTMLSelectElement.named_item.cljs$core$IFn$_invoke$arity$variadic(G__52595,seq52594__$1);
});

/**
 * Method.
 * 
 *   The HTMLSelectElement.remove() method removes the element at
 *   specified index from the options collection for this select element.
 * 
 *   `collection.remove(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/remove`
 */
html.HTMLSelectElement.remove = (function html$HTMLSelectElement$remove(this$,index){
return this$.remove(index);
});
/**
 * Method.
 * 
 *   The HTMLSelectElement.setCustomValidity() method sets the custom
 *   message for the selection element to the specified message. Use
 *   empty string to indicate that the element does not have a custom
 *   error.
 * 
 *   `selectElt.setCustomValidity(string);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity`
 */
html.HTMLSelectElement.set_custom_validity = (function html$HTMLSelectElement$set_custom_validity(this$,string){
return this$.setCustomValidity(string);
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.autofocus property is a `web.Boolean` that
 *   the autofocus HTML attribute, which indicates whether the associated
 *   element will get input focus when the page loads, unless the
 *   overrides it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus`
 */
html.HTMLSelectElement.autofocus = (function html$HTMLSelectElement$autofocus(this$){
return this$.autofocus();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.autofocus property is a `web.Boolean` that
 *   the autofocus HTML attribute, which indicates whether the associated
 *   element will get input focus when the page loads, unless the
 *   overrides it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus`
 */
html.HTMLSelectElement.set_autofocus_BANG_ = (function html$HTMLSelectElement$set_autofocus_BANG_(this$,val){
return (this$["autofocus"] = val);
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.disabled Is a Boolean that reflects the
 *   HTML attribute, which indicates whether the control is disabled.
 *   it is disabled, it does not accept clicks. A disabled element
 *   unusable and un-clickable.
 * 
 *   `Edit
 * 
 * 
 * 
 *   aSelectElement.disabled = aBool;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled`
 */
html.HTMLSelectElement.disabled = (function html$HTMLSelectElement$disabled(this$){
return this$.disabled();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.disabled Is a Boolean that reflects the
 *   HTML attribute, which indicates whether the control is disabled.
 *   it is disabled, it does not accept clicks. A disabled element
 *   unusable and un-clickable.
 * 
 *   `Edit
 * 
 * 
 * 
 *   aSelectElement.disabled = aBool;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled`
 */
html.HTMLSelectElement.set_disabled_BANG_ = (function html$HTMLSelectElement$set_disabled_BANG_(this$,val){
return (this$["disabled"] = val);
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.form read-only property returns a `html.HTMLFormElement`
 *   the form that this element is associated with. If the element
 *   not associated with of a `web.<form>` element, then it returns
 * 
 *   `Edit
 * 
 * 
 * 
 *   aForm = aSelectElement.form.selectname;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/form`
 */
html.HTMLSelectElement.form = (function html$HTMLSelectElement$form(this$){
return this$.form();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.labels read-only property returns a `web.NodeList`
 *   the `web.<label>` elements associated with the `web.<select>`
 * 
 *   `var labelElements = select.labels;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels`
 */
html.HTMLSelectElement.labels = (function html$HTMLSelectElement$labels(this$){
return this$.labels();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.labels read-only property returns a `web.NodeList`
 *   the `web.<label>` elements associated with the `web.<select>`
 * 
 *   `var labelElements = select.labels;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels`
 */
html.HTMLSelectElement.set_labels_BANG_ = (function html$HTMLSelectElement$set_labels_BANG_(this$,val){
return (this$["labels"] = val);
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.options read-only property returns a `html.HTMLOptionsCollection`
 *   the `web.<option>` elements contained by the `web.<select>` element.
 * 
 *   `var options = select.options;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options`
 */
html.HTMLSelectElement.options = (function html$HTMLSelectElement$options(this$){
return this$.options();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.selectedIndex is a long that reflects the
 *   of the first or last selected `web.<option>` element, depending
 *   the value of multiple. The value -1 indicates that no element
 *   selected.
 * 
 *   `var index = selectElem.selectedIndex;
 *   selectElem.selectedIndex = index;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex`
 */
html.HTMLSelectElement.selected_index = (function html$HTMLSelectElement$selected_index(this$){
return this$.selectedIndex();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.selectedIndex is a long that reflects the
 *   of the first or last selected `web.<option>` element, depending
 *   the value of multiple. The value -1 indicates that no element
 *   selected.
 * 
 *   `var index = selectElem.selectedIndex;
 *   selectElem.selectedIndex = index;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex`
 */
html.HTMLSelectElement.set_selected_index_BANG_ = (function html$HTMLSelectElement$set_selected_index_BANG_(this$,val){
return (this$["selectedIndex"] = val);
});
/**
 * Property.
 * 
 *   The read-only `html.HTMLSelectElement` property selectedOptions
 *   a list of the `web.<option>` elements contained within the `web.<select>`
 *   that are currently selected. The list of selected options is
 *   `html.HTMLCollection` object with one entry per currently selected
 * 
 *   `var selectedCollection = HTMLSelectElement.selectedOptions;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions`
 */
html.HTMLSelectElement.selected_options = (function html$HTMLSelectElement$selected_options(this$){
return this$.selectedOptions();
});
/**
 * Property.
 * 
 *   The HTMLSelectElement.type read-only property returns the form
 *   type.
 * 
 *   `var str = selectElt.type;
 * 
 *   The possible values are:
 * 
 * 
 *   \"select-multiple\" if multiple values can be selected.
 *   \"select-one\" if only one value can be selected.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/type`
 */
html.HTMLSelectElement.type = (function html$HTMLSelectElement$type(this$){
return this$.type();
});

//# sourceMappingURL=HTMLSelectElement.js.map?rel=1565798856838
