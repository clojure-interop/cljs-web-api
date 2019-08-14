// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Element');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The ChildNode.after() method inserts a set of `web.Node` or `dom.DOMString`
 *   in the children list of this ChildNode's parent, just after this
 *   `dom.DOMString` objects are inserted as equivalent `web.Text`
 * 
 *   `[Throws, Unscopable]
 *   void ChildNode.after((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after`
 */
web.Element.after = (function web$Element$after(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44273 = arguments.length;
var i__42557__auto___44274 = (0);
while(true){
if((i__42557__auto___44274 < len__42556__auto___44273)){
args__42563__auto__.push((arguments[i__42557__auto___44274]));

var G__44275 = (i__42557__auto___44274 + (1));
i__42557__auto___44274 = G__44275;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.after.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.after,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.after.cljs$lang$maxFixedArity = (1);

web.Element.after.cljs$lang$applyTo = (function (seq44271){
var G__44272 = cljs.core.first.call(null,seq44271);
var seq44271__$1 = cljs.core.next.call(null,seq44271);
return web.Element.after.cljs$core$IFn$_invoke$arity$variadic(G__44272,seq44271__$1);
});

/**
 * Method.
 * 
 *   The `web.Element` interface's animate() method is a shortcut
 *   which creates a new `web.Animation`, applies it to the element,
 *   plays the animation. It returns the created `web.Animation` object
 * 
 *   `var animation = element.animate(keyframes, options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/animate`
 */
web.Element.animate = (function web$Element$animate(this$,keyframes,options){
return this$.animate(keyframes,options);
});
/**
 * Method.
 * 
 *   The ParentNode.append() method inserts a set of `web.Node` objects
 *   `dom.DOMString` objects after the last child of the ParentNode.
 *   objects are inserted as equivalent `web.Text` nodes.
 * 
 *   `[Throws, Unscopable]
 *   void ParentNode.append((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append`
 */
web.Element.append = (function web$Element$append(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44278 = arguments.length;
var i__42557__auto___44279 = (0);
while(true){
if((i__42557__auto___44279 < len__42556__auto___44278)){
args__42563__auto__.push((arguments[i__42557__auto___44279]));

var G__44280 = (i__42557__auto___44279 + (1));
i__42557__auto___44279 = G__44280;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.append.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.append,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.append.cljs$lang$maxFixedArity = (1);

web.Element.append.cljs$lang$applyTo = (function (seq44276){
var G__44277 = cljs.core.first.call(null,seq44276);
var seq44276__$1 = cljs.core.next.call(null,seq44276);
return web.Element.append.cljs$core$IFn$_invoke$arity$variadic(G__44277,seq44276__$1);
});

/**
 * Method.
 * 
 *   The Element.attachShadow() method attaches a shadow DOM tree
 *   the specified element and returns a reference to its `web.ShadowRoot`.
 * 
 *   `var shadowroot = element.attachShadow(shadowRootInit);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow`
 */
web.Element.attach_shadow = (function web$Element$attach_shadow(this$,shadow_root_init){
return this$.attachShadow(shadow_root_init);
});
/**
 * Method.
 * 
 *   The ChildNode.before() method inserts a set of `web.Node` or
 *   objects in the children list of this ChildNode's parent, just
 *   this ChildNode. `dom.DOMString` objects are inserted as equivalent
 *   nodes.
 * 
 *   `[Throws, Unscopable]
 *   void ChildNode.before((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before`
 */
web.Element.before = (function web$Element$before(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44283 = arguments.length;
var i__42557__auto___44284 = (0);
while(true){
if((i__42557__auto___44284 < len__42556__auto___44283)){
args__42563__auto__.push((arguments[i__42557__auto___44284]));

var G__44285 = (i__42557__auto___44284 + (1));
i__42557__auto___44284 = G__44285;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.before.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.before,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.before.cljs$lang$maxFixedArity = (1);

web.Element.before.cljs$lang$applyTo = (function (seq44281){
var G__44282 = cljs.core.first.call(null,seq44281);
var seq44281__$1 = cljs.core.next.call(null,seq44281);
return web.Element.before.cljs$core$IFn$_invoke$arity$variadic(G__44282,seq44281__$1);
});

/**
 * Method.
 * 
 *   For browsers that do not support Element.closest(), but carry
 *   for element.matches() (or a prefixed equivalent, meaning IE9+),
 *   polyfill exists:
 * 
 *   `var closestElement = element.closest(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/closest`
 */
web.Element.closest = (function web$Element$closest(this$,selectors){
return this$.closest(selectors);
});
/**
 * Method.
 * 
 *   The computedStyleMap() method of the `web.Element` interface
 *   a `web.StylePropertyMapReadOnly` interface which provides a read-only
 *   of a CSS declaration block that is an alternative to `css.CSSStyleDeclaration`.
 * 
 *   `var stylePropertyMapReadOnly = Element.computedStyleMap()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/computedStyleMap`
 */
web.Element.computed_style_map = (function web$Element$computed_style_map(this$){
return this$.computedStyleMap();
});
/**
 * Method.
 * 
 *   Use Element.createShadowRoot to create an instance of shadow
 *   When shadow DOM is created, it is always attached to an existing
 *   After the shadow DOM is created, the element that it is attached
 *   is called the shadow root.
 * 
 *   `var shadowroot = element.createShadowRoot();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/createShadowRoot`
 */
web.Element.create_shadow_root = (function web$Element$create_shadow_root(this$){
return this$.createShadowRoot();
});
/**
 * Method.
 * 
 *   The getAnimations() method of the `web.Element` interface (specified
 *   the Animatable mixin) returns an array of all `web.Animation`
 *   affecting this element or which are scheduled to do so in future.
 *   can optionally return `web.Animation` objects for descendant
 *   too.
 * 
 *   `const animations = Element.getAnimations(options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAnimations`
 */
web.Element.get_animations = (function web$Element$get_animations(this$,options){
return this$.getAnimations(options);
});
/**
 * Method.
 * 
 *   The getAttribute() method of the `web.Element` interface returns
 *   value of a specified attribute on the element.
 * 
 *   `var attribute = element.getAttribute(attributeName);
 * 
 *   where
 * 
 * 
 *   attribute is a string containing the value of attributeName.
 *   attributeName is the name of the attribute whose value you want to get.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute`
 */
web.Element.get_attribute = (function web$Element$get_attribute(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44288 = arguments.length;
var i__42557__auto___44289 = (0);
while(true){
if((i__42557__auto___44289 < len__42556__auto___44288)){
args__42563__auto__.push((arguments[i__42557__auto___44289]));

var G__44290 = (i__42557__auto___44289 + (1));
i__42557__auto___44289 = G__44290;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.get_attribute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.get_attribute.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAttribute,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.get_attribute.cljs$lang$maxFixedArity = (1);

web.Element.get_attribute.cljs$lang$applyTo = (function (seq44286){
var G__44287 = cljs.core.first.call(null,seq44286);
var seq44286__$1 = cljs.core.next.call(null,seq44286);
return web.Element.get_attribute.cljs$core$IFn$_invoke$arity$variadic(G__44287,seq44286__$1);
});

/**
 * Method.
 * 
 *   The getAttributeNames() method of the `web.Element` interface
 *   the attribute names of the element as an `web.Array` of strings.
 *   the element has no attributes it returns an empty array.
 * 
 *   `let attributeNames = element.getAttributeNames();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames`
 */
web.Element.get_attribute_names = (function web$Element$get_attribute_names(this$){
return this$.getAttributeNames();
});
/**
 * Method.
 * 
 *   Returns the specified attribute of the specified element, as
 *   Attr node.
 * 
 *   `var attrNode = element.getAttributeNode(attrName);
 * 
 * 
 *   attrNode is an Attr node for the attribute.
 *   attrName is a string containing the name of the attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode`
 */
web.Element.get_attribute_node = (function web$Element$get_attribute_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44293 = arguments.length;
var i__42557__auto___44294 = (0);
while(true){
if((i__42557__auto___44294 < len__42556__auto___44293)){
args__42563__auto__.push((arguments[i__42557__auto___44294]));

var G__44295 = (i__42557__auto___44294 + (1));
i__42557__auto___44294 = G__44295;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.get_attribute_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.get_attribute_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAttributeNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.get_attribute_node.cljs$lang$maxFixedArity = (1);

web.Element.get_attribute_node.cljs$lang$applyTo = (function (seq44291){
var G__44292 = cljs.core.first.call(null,seq44291);
var seq44291__$1 = cljs.core.next.call(null,seq44291);
return web.Element.get_attribute_node.cljs$core$IFn$_invoke$arity$variadic(G__44292,seq44291__$1);
});

/**
 * Method.
 * 
 *   Returns the Attr node for the attribute with the given namespace
 *   name.
 * 
 *   `attributeNode = element.getAttributeNodeNS(namespace, nodeName)
 * 
 * 
 *   attributeNode is the node for specified attribute.
 *   namespace is a string specifying the namespace of the attribute.
 *   nodeName is a string specifying the name of the attribute.
 * 
 * 
 *   == Example == TBD The example needs to be fixed pre> // html: <div id=\"top\" /> t = document.getElementById(\"top\"); specialNode = t.getAttributeNodeNS( \"http://www.mozilla.org/ns/specialspace\", \"id\"); // iNode.value = \"full-top\" </pre`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNodeNS`
 */
web.Element.get_attribute_node_ns = (function web$Element$get_attribute_node_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44298 = arguments.length;
var i__42557__auto___44299 = (0);
while(true){
if((i__42557__auto___44299 < len__42556__auto___44298)){
args__42563__auto__.push((arguments[i__42557__auto___44299]));

var G__44300 = (i__42557__auto___44299 + (1));
i__42557__auto___44299 = G__44300;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.get_attribute_node_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.get_attribute_node_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAttributeNodeNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.get_attribute_node_ns.cljs$lang$maxFixedArity = (1);

web.Element.get_attribute_node_ns.cljs$lang$applyTo = (function (seq44296){
var G__44297 = cljs.core.first.call(null,seq44296);
var seq44296__$1 = cljs.core.next.call(null,seq44296);
return web.Element.get_attribute_node_ns.cljs$core$IFn$_invoke$arity$variadic(G__44297,seq44296__$1);
});

/**
 * Method.
 * 
 *   The getAttributeNS() method of the `web.Element` interface returns
 *   string value of the attribute with the specified namespace and
 *   If the named attribute does not exist, the value returned will
 *   be null or \"\" (the empty string); see Notes for details.
 * 
 *   `attrVal = element.getAttributeNS(namespace, name)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS`
 */
web.Element.get_attribute_ns = (function web$Element$get_attribute_ns(this$,namespace,name){
return this$.getAttributeNS(namespace,name);
});
/**
 * Method.
 * 
 *   The Element.getBoundingClientRect() method returns the size of
 *   element and its position relative to the viewport.
 * 
 *   `domRect = element.getBoundingClientRect();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect`
 */
web.Element.get_bounding_client_rect = (function web$Element$get_bounding_client_rect(this$){
return this$.getBoundingClientRect();
});
/**
 * Method.
 * 
 *   The getClientRects() method of the `web.Element` interface returns
 *   collection of `dom.DOMRect` objects that indicate the bounding
 *   for each CSS border box in a client.
 * 
 *   `let rectCollection = object.getClientRects();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects`
 */
web.Element.get_client_rects = (function web$Element$get_client_rects(this$){
return this$.getClientRects();
});
/**
 * Method.
 * 
 *   The `web.Element` method getElementsByClassName() returns a live
 *   which contains every descendant element which has the specified
 *   name or names.
 * 
 *   `var elements = element.getElementsByClassName(names);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName`
 */
web.Element.get_elements_by_class_name = (function web$Element$get_elements_by_class_name(this$,names){
return this$.getElementsByClassName(names);
});
/**
 * Method.
 * 
 *   The Element.getElementsByTagName() method returns a live `html.HTMLCollection`
 *   elements with the given tag name.
 * 
 *   `elements = element.getElementsByTagName(tagName)
 * 
 * 
 *   \telements is a live `html.HTMLCollection` of elements with a matching tag name, in the order they appear. If no elements are found, the HTMLCollection is empty.
 *   \telement is the element from where the search starts. Only the element's descendants are included, not the element itself.
 *   \ttagName is the qualified name to look for. The special string \"*\" represents all elements. For compatibility with XHTML, lower-case should be used.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName`
 */
web.Element.get_elements_by_tag_name = (function web$Element$get_elements_by_tag_name(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44303 = arguments.length;
var i__42557__auto___44304 = (0);
while(true){
if((i__42557__auto___44304 < len__42556__auto___44303)){
args__42563__auto__.push((arguments[i__42557__auto___44304]));

var G__44305 = (i__42557__auto___44304 + (1));
i__42557__auto___44304 = G__44305;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.get_elements_by_tag_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.get_elements_by_tag_name.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getElementsByTagName,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.get_elements_by_tag_name.cljs$lang$maxFixedArity = (1);

web.Element.get_elements_by_tag_name.cljs$lang$applyTo = (function (seq44301){
var G__44302 = cljs.core.first.call(null,seq44301);
var seq44301__$1 = cljs.core.next.call(null,seq44301);
return web.Element.get_elements_by_tag_name.cljs$core$IFn$_invoke$arity$variadic(G__44302,seq44301__$1);
});

/**
 * Method.
 * 
 *   The Element.getElementsByTagNameNS() method returns a live `html.HTMLCollection`
 *   elements with the given tag name belonging to the given namespace.
 *   is similar to `web.Document.getElementsByTagNameNS`, except that
 *   search is restricted to descendants of the specified element.
 * 
 *   `elements = element.getElementsByTagNameNS(namespaceURI, localName)
 * 
 * 
 *   elements is a live `html.HTMLCollection` of found elements in the order they appear in the tree.
 *   element is the element from where the search should start. Note that only the descendants of this element are included in the search, not the node itself.
 *   namespaceURI is the namespace URI of elements to look for (see `web.Element.namespaceURI` and `web.Attr.namespaceURI`). For example, if you need to look for XHTML elements, use the XHTML namespace URI, http://www.w3.org/1999/xhtml.
 *   localName is either the local name of elements to look for or the special value \"*\", which matches all elements (see `web.Element.localName` and `web.Attr.localName`).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagNameNS`
 */
web.Element.get_elements_by_tag_name_ns = (function web$Element$get_elements_by_tag_name_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44308 = arguments.length;
var i__42557__auto___44309 = (0);
while(true){
if((i__42557__auto___44309 < len__42556__auto___44308)){
args__42563__auto__.push((arguments[i__42557__auto___44309]));

var G__44310 = (i__42557__auto___44309 + (1));
i__42557__auto___44309 = G__44310;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.get_elements_by_tag_name_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.get_elements_by_tag_name_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getElementsByTagNameNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.get_elements_by_tag_name_ns.cljs$lang$maxFixedArity = (1);

web.Element.get_elements_by_tag_name_ns.cljs$lang$applyTo = (function (seq44306){
var G__44307 = cljs.core.first.call(null,seq44306);
var seq44306__$1 = cljs.core.next.call(null,seq44306);
return web.Element.get_elements_by_tag_name_ns.cljs$core$IFn$_invoke$arity$variadic(G__44307,seq44306__$1);
});

/**
 * Method.
 * 
 *   The Element.hasAttribute() method returns a Boolean value indicating
 *   the specified element has the specified attribute or not.
 * 
 *   `var result = element.hasAttribute(name);
 * 
 * 
 *   result
 *   holds the return value true or false.
 *   name
 *   is a string representing the name of the attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute`
 */
web.Element.has_attribute = (function web$Element$has_attribute(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44313 = arguments.length;
var i__42557__auto___44314 = (0);
while(true){
if((i__42557__auto___44314 < len__42556__auto___44313)){
args__42563__auto__.push((arguments[i__42557__auto___44314]));

var G__44315 = (i__42557__auto___44314 + (1));
i__42557__auto___44314 = G__44315;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.has_attribute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.has_attribute.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.hasAttribute,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.has_attribute.cljs$lang$maxFixedArity = (1);

web.Element.has_attribute.cljs$lang$applyTo = (function (seq44311){
var G__44312 = cljs.core.first.call(null,seq44311);
var seq44311__$1 = cljs.core.next.call(null,seq44311);
return web.Element.has_attribute.cljs$core$IFn$_invoke$arity$variadic(G__44312,seq44311__$1);
});

/**
 * Method.
 * 
 *   hasAttributeNS returns a boolean value indicating whether the
 *   element has the specified attribute.
 * 
 *   `result = element.hasAttributeNS(namespace,localName)
 * 
 * 
 *   result is the boolean value true or false.
 *   namespace is a string specifying the namespace of the attribute.
 *   localName is the name of the attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributeNS`
 */
web.Element.has_attribute_ns = (function web$Element$has_attribute_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44318 = arguments.length;
var i__42557__auto___44319 = (0);
while(true){
if((i__42557__auto___44319 < len__42556__auto___44318)){
args__42563__auto__.push((arguments[i__42557__auto___44319]));

var G__44320 = (i__42557__auto___44319 + (1));
i__42557__auto___44319 = G__44320;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.has_attribute_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.has_attribute_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.hasAttributeNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.has_attribute_ns.cljs$lang$maxFixedArity = (1);

web.Element.has_attribute_ns.cljs$lang$applyTo = (function (seq44316){
var G__44317 = cljs.core.first.call(null,seq44316);
var seq44316__$1 = cljs.core.next.call(null,seq44316);
return web.Element.has_attribute_ns.cljs$core$IFn$_invoke$arity$variadic(G__44317,seq44316__$1);
});

/**
 * Method.
 * 
 *   The hasAttributes() method of the `web.Element` interface returns
 *   `web.Boolean` indicating whether the current element has any
 *   or not.
 * 
 *   `var result = element.hasAttributes();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes`
 */
web.Element.has_attributes = (function web$Element$has_attributes(this$){
return this$.hasAttributes();
});
/**
 * Method.
 * 
 *   The hasPointerCapture() method of the `web.Element` interface
 *   whether the element on which it is invoked has pointer capture
 *   the pointer identified by the given pointer ID.
 * 
 *   `targetElement.hasPointerCapture(pointerId);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture`
 */
web.Element.has_pointer_capture = (function web$Element$has_pointer_capture(this$,pointer_id){
return this$.hasPointerCapture(pointer_id);
});
/**
 * Method.
 * 
 *   The insertAdjacentElement() method of the `web.Element` interface
 *   a given element node at a given position relative to the element
 *   is invoked upon.
 * 
 *   `targetElement.insertAdjacentElement(position, element);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement`
 */
web.Element.insert_adjacent_element = (function web$Element$insert_adjacent_element(this$,position,element){
return this$.insertAdjacentElement(position,element);
});
/**
 * Method.
 * 
 *   The insertAdjacentHTML() method of the `web.Element` interface
 *   the specified text as HTML or XML and inserts the resulting nodes
 *   the DOM tree at a specified position. It does not reparse the
 *   it is being used on, and thus it does not corrupt the existing
 *   inside that element. This avoids the extra step of serialization,
 *   it much faster than direct `web.innerHTML` manipulation.
 * 
 *   `element.insertAdjacentHTML(position, text);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML`
 */
web.Element.insert_adjacent_html = (function web$Element$insert_adjacent_html(this$,position,text){
return this$.insertAdjacentHTML(position,text);
});
/**
 * Method.
 * 
 *   The insertAdjacentText() method of the `web.Element` interface
 *   a given text node at a given position relative to the element
 *   is invoked upon.
 * 
 *   `element.insertAdjacentText(position, element);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText`
 */
web.Element.insert_adjacent_text = (function web$Element$insert_adjacent_text(this$,position,element){
return this$.insertAdjacentText(position,element);
});
/**
 * Method.
 * 
 *   selectorString is a string representing the selector to test.
 * 
 *   `var result = element.matches(selectorString);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/matches`
 */
web.Element.matches = (function web$Element$matches(this$,selector_string){
return this$.matches(selector_string);
});
/**
 * Method.
 * 
 *   The msZoomTo method scrolls and/or zooms an element to its specified
 *   with animation.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/msZoomTo`
 */
web.Element.ms_zoom_to = (function web$Element$ms_zoom_to(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44323 = arguments.length;
var i__42557__auto___44324 = (0);
while(true){
if((i__42557__auto___44324 < len__42556__auto___44323)){
args__42563__auto__.push((arguments[i__42557__auto___44324]));

var G__44325 = (i__42557__auto___44324 + (1));
i__42557__auto___44324 = G__44325;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.ms_zoom_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.ms_zoom_to.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.msZoomTo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.ms_zoom_to.cljs$lang$maxFixedArity = (1);

web.Element.ms_zoom_to.cljs$lang$applyTo = (function (seq44321){
var G__44322 = cljs.core.first.call(null,seq44321);
var seq44321__$1 = cljs.core.next.call(null,seq44321);
return web.Element.ms_zoom_to.cljs$core$IFn$_invoke$arity$variadic(G__44322,seq44321__$1);
});

/**
 * Method.
 * 
 *   The ParentNode.prepend() method inserts a set of `web.Node` objects
 *   `dom.DOMString` objects before the first child of the `web.ParentNode`.
 *   objects are inserted as equivalent `web.Text` nodes.
 * 
 *   `ParentNode.prepend(...nodesToPrepend);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend`
 */
web.Element.prepend = (function web$Element$prepend(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44328 = arguments.length;
var i__42557__auto___44329 = (0);
while(true){
if((i__42557__auto___44329 < len__42556__auto___44328)){
args__42563__auto__.push((arguments[i__42557__auto___44329]));

var G__44330 = (i__42557__auto___44329 + (1));
i__42557__auto___44329 = G__44330;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.prepend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.prepend,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.prepend.cljs$lang$maxFixedArity = (1);

web.Element.prepend.cljs$lang$applyTo = (function (seq44326){
var G__44327 = cljs.core.first.call(null,seq44326);
var seq44326__$1 = cljs.core.next.call(null,seq44326);
return web.Element.prepend.cljs$core$IFn$_invoke$arity$variadic(G__44327,seq44326__$1);
});

/**
 * Method.
 * 
 *   The querySelector() method of the `web.Element` interface returns
 *   first element that is a descendant of the element on which it
 *   invoked that matches the specified group of selectors.
 * 
 *   `element = baseElement.querySelector(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector`
 */
web.Element.query_selector = (function web$Element$query_selector(this$,selectors){
return this$.querySelector(selectors);
});
/**
 * Method.
 * 
 *   The `web.ParentNode` mixin defines the querySelectorAll() method
 *   returning a `web.NodeList` representing a list of elements matching
 *   specified group of selectors which are descendants of the object
 *   which the method was called.
 * 
 *   `elementList = parentNode.querySelectorAll(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll`
 */
web.Element.query_selector_all = (function web$Element$query_selector_all(this$,selectors){
return this$.querySelectorAll(selectors);
});
/**
 * Method.
 * 
 *   The releasePointerCapture() method of the `web.Element` interface
 *   (stops) pointer capture that was previously set for a specific
 *   pointer.
 * 
 *   `targetElement.releasePointerCapture(pointerId);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture`
 */
web.Element.release_pointer_capture = (function web$Element$release_pointer_capture(this$,pointer_id){
return this$.releasePointerCapture(pointer_id);
});
/**
 * Method.
 * 
 *   The ChildNode.remove() method removes the object from the tree
 *   belongs to.
 * 
 *   `node.remove();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`
 */
web.Element.remove = (function web$Element$remove(this$){
return this$.remove();
});
/**
 * Method.
 * 
 *   The `web.Element` method removeAttribute() removes the attribute
 *   the specified name from the element.
 * 
 *   `element.removeAttribute(attrName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute`
 */
web.Element.remove_attribute = (function web$Element$remove_attribute(this$,attr_name){
return this$.removeAttribute(attr_name);
});
/**
 * Method.
 * 
 *   The removeAttributeNode() method of the `web.Element` object
 *   the specified attribute from the current element.
 * 
 *   `removedAttr = element.removeAttributeNode(attributeNode)
 * 
 * 
 *   attributeNode is the Attr node that needs to be removed.
 *   removedAttr is the removed Attr node.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNode`
 */
web.Element.remove_attribute_node = (function web$Element$remove_attribute_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44333 = arguments.length;
var i__42557__auto___44334 = (0);
while(true){
if((i__42557__auto___44334 < len__42556__auto___44333)){
args__42563__auto__.push((arguments[i__42557__auto___44334]));

var G__44335 = (i__42557__auto___44334 + (1));
i__42557__auto___44334 = G__44335;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.remove_attribute_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.remove_attribute_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeAttributeNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.remove_attribute_node.cljs$lang$maxFixedArity = (1);

web.Element.remove_attribute_node.cljs$lang$applyTo = (function (seq44331){
var G__44332 = cljs.core.first.call(null,seq44331);
var seq44331__$1 = cljs.core.next.call(null,seq44331);
return web.Element.remove_attribute_node.cljs$core$IFn$_invoke$arity$variadic(G__44332,seq44331__$1);
});

/**
 * Method.
 * 
 *   The removeAttributeNS() method of the `web.Element` interface
 *   the specified attribute from an element.
 * 
 *   `element.removeAttributeNS(namespace, attrName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNS`
 */
web.Element.remove_attribute_ns = (function web$Element$remove_attribute_ns(this$,namespace,attr_name){
return this$.removeAttributeNS(namespace,attr_name);
});
/**
 * Method.
 * 
 *   The ChildNode.replaceWith() method replaces this ChildNode in
 *   children list of its parent with a set of `web.Node` or `dom.DOMString`
 *   `dom.DOMString` objects are inserted as equivalent `web.Text`
 * 
 *   `[Throws, Unscopable]
 *   void ChildNode.replaceWith((Node or DOMString)... nodes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith`
 */
web.Element.replace_with = (function web$Element$replace_with(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44338 = arguments.length;
var i__42557__auto___44339 = (0);
while(true){
if((i__42557__auto___44339 < len__42556__auto___44338)){
args__42563__auto__.push((arguments[i__42557__auto___44339]));

var G__44340 = (i__42557__auto___44339 + (1));
i__42557__auto___44339 = G__44340;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.replace_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.replace_with.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.replaceWith,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.replace_with.cljs$lang$maxFixedArity = (1);

web.Element.replace_with.cljs$lang$applyTo = (function (seq44336){
var G__44337 = cljs.core.first.call(null,seq44336);
var seq44336__$1 = cljs.core.next.call(null,seq44336);
return web.Element.replace_with.cljs$core$IFn$_invoke$arity$variadic(G__44337,seq44336__$1);
});

/**
 * Method.
 * 
 *   The Element.requestFullscreen() method issues an asynchronous
 *   to make the element be displayed in full-screen mode.
 * 
 *   `var Promise = Element.requestFullscreen(options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen`
 */
web.Element.request_fullscreen = (function web$Element$request_fullscreen(this$,options){
return this$.requestFullscreen(options);
});
/**
 * Method.
 * 
 *   The Element.requestPointerLock() method lets you asynchronously
 *   for the pointer to be locked on the given element.
 * 
 *   `instanceOfElement.requestPointerLock();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/requestPointerLock`
 */
web.Element.request_pointer_lock = (function web$Element$request_pointer_lock(this$){
return this$.requestPointerLock();
});
/**
 * Method.
 * 
 *   The scroll() method of the `web.Element` interface scrolls the
 *   to a particular set of coordinates inside a given element.
 * 
 *   `element.scroll(x-coord, y-coord)
 *   element.scroll(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll`
 */
web.Element.scroll = (function web$Element$scroll(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44343 = arguments.length;
var i__42557__auto___44344 = (0);
while(true){
if((i__42557__auto___44344 < len__42556__auto___44343)){
args__42563__auto__.push((arguments[i__42557__auto___44344]));

var G__44345 = (i__42557__auto___44344 + (1));
i__42557__auto___44344 = G__44345;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.scroll.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scroll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.scroll.cljs$lang$maxFixedArity = (1);

web.Element.scroll.cljs$lang$applyTo = (function (seq44341){
var G__44342 = cljs.core.first.call(null,seq44341);
var seq44341__$1 = cljs.core.next.call(null,seq44341);
return web.Element.scroll.cljs$core$IFn$_invoke$arity$variadic(G__44342,seq44341__$1);
});

/**
 * Method.
 * 
 *   The scrollBy() method of the `web.Element` interface scrolls
 *   element by the given amount.
 * 
 *   `element.scrollBy(x-coord, y-coord);
 *   element.scrollBy(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy`
 */
web.Element.scroll_by = (function web$Element$scroll_by(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44348 = arguments.length;
var i__42557__auto___44349 = (0);
while(true){
if((i__42557__auto___44349 < len__42556__auto___44348)){
args__42563__auto__.push((arguments[i__42557__auto___44349]));

var G__44350 = (i__42557__auto___44349 + (1));
i__42557__auto___44349 = G__44350;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.scroll_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.scroll_by.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scrollBy,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.scroll_by.cljs$lang$maxFixedArity = (1);

web.Element.scroll_by.cljs$lang$applyTo = (function (seq44346){
var G__44347 = cljs.core.first.call(null,seq44346);
var seq44346__$1 = cljs.core.next.call(null,seq44346);
return web.Element.scroll_by.cljs$core$IFn$_invoke$arity$variadic(G__44347,seq44346__$1);
});

/**
 * Method.
 * 
 *   The `web.Element` interface's scrollIntoView() method scrolls
 *   element's parent container such that the element on which scrollIntoView()
 *   called is visible to the user
 * 
 *   `element.scrollIntoView();
 *   element.scrollIntoView(alignToTop); // Boolean parameter
 *   element.scrollIntoView(scrollIntoViewOptions); // Object parameter`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView`
 */
web.Element.scroll_into_view = (function web$Element$scroll_into_view(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44353 = arguments.length;
var i__42557__auto___44354 = (0);
while(true){
if((i__42557__auto___44354 < len__42556__auto___44353)){
args__42563__auto__.push((arguments[i__42557__auto___44354]));

var G__44355 = (i__42557__auto___44354 + (1));
i__42557__auto___44354 = G__44355;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.scroll_into_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.scroll_into_view.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scrollIntoView,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.scroll_into_view.cljs$lang$maxFixedArity = (1);

web.Element.scroll_into_view.cljs$lang$applyTo = (function (seq44351){
var G__44352 = cljs.core.first.call(null,seq44351);
var seq44351__$1 = cljs.core.next.call(null,seq44351);
return web.Element.scroll_into_view.cljs$core$IFn$_invoke$arity$variadic(G__44352,seq44351__$1);
});

/**
 * Method.
 * 
 *   The Element.scrollIntoViewIfNeeded() method scrolls the current
 *   into the visible area of the browser window if it's not already
 *   the visible area of the browser window. If the element is already
 *   the visible area of the browser window, then no scrolling takes
 *   This method is a proprietary variation of the standard `web.Element.scrollIntoView()`
 * 
 *   `TODO`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded`
 */
web.Element.scroll_into_view_if_needed = (function web$Element$scroll_into_view_if_needed(this$){
return this$.scrollIntoViewIfNeeded();
});
/**
 * Method.
 * 
 *   The scrollTo() method of the `web.Element` interface scrolls
 *   a particular set of coordinates inside a given element.
 * 
 *   `element.scrollTo(x-coord, y-coord)
 *   element.scrollTo(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo`
 */
web.Element.scroll_to = (function web$Element$scroll_to(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44358 = arguments.length;
var i__42557__auto___44359 = (0);
while(true){
if((i__42557__auto___44359 < len__42556__auto___44358)){
args__42563__auto__.push((arguments[i__42557__auto___44359]));

var G__44360 = (i__42557__auto___44359 + (1));
i__42557__auto___44359 = G__44360;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.scroll_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.scroll_to.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scrollTo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.scroll_to.cljs$lang$maxFixedArity = (1);

web.Element.scroll_to.cljs$lang$applyTo = (function (seq44356){
var G__44357 = cljs.core.first.call(null,seq44356);
var seq44356__$1 = cljs.core.next.call(null,seq44356);
return web.Element.scroll_to.cljs$core$IFn$_invoke$arity$variadic(G__44357,seq44356__$1);
});

/**
 * Method.
 * 
 *   Sets the value of an attribute on the specified element. If the
 *   already exists, the value is updated; otherwise a new attribute
 *   added with the specified name and value.
 * 
 *   `Element.setAttribute(name, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute`
 */
web.Element.set_attribute = (function web$Element$set_attribute(this$,name,value){
return this$.setAttribute(name,value);
});
/**
 * Method.
 * 
 *   The setAttributeNode() method adds a new Attr node to the specified
 * 
 *   `var replacedAttr = element.setAttributeNode(attribute);
 * 
 * 
 *   attribute is the Attr node to set on the element.
 *   replacedAttr is the replaced attribute node, if any, returned by this function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode`
 */
web.Element.set_attribute_node = (function web$Element$set_attribute_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44363 = arguments.length;
var i__42557__auto___44364 = (0);
while(true){
if((i__42557__auto___44364 < len__42556__auto___44363)){
args__42563__auto__.push((arguments[i__42557__auto___44364]));

var G__44365 = (i__42557__auto___44364 + (1));
i__42557__auto___44364 = G__44365;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.set_attribute_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.set_attribute_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setAttributeNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.set_attribute_node.cljs$lang$maxFixedArity = (1);

web.Element.set_attribute_node.cljs$lang$applyTo = (function (seq44361){
var G__44362 = cljs.core.first.call(null,seq44361);
var seq44361__$1 = cljs.core.next.call(null,seq44361);
return web.Element.set_attribute_node.cljs$core$IFn$_invoke$arity$variadic(G__44362,seq44361__$1);
});

/**
 * Method.
 * 
 *   setAttributeNodeNS adds a new namespaced attribute node to an
 * 
 *   `replacedAttr = element.setAttributeNodeNS(attributeNode)
 * 
 * 
 *   replacedAttr is the replaced attribute node, if any, returned by this function.
 *   attributeNode is an Attr node.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNodeNS`
 */
web.Element.set_attribute_node_ns = (function web$Element$set_attribute_node_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44368 = arguments.length;
var i__42557__auto___44369 = (0);
while(true){
if((i__42557__auto___44369 < len__42556__auto___44368)){
args__42563__auto__.push((arguments[i__42557__auto___44369]));

var G__44370 = (i__42557__auto___44369 + (1));
i__42557__auto___44369 = G__44370;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.set_attribute_node_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.set_attribute_node_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setAttributeNodeNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.set_attribute_node_ns.cljs$lang$maxFixedArity = (1);

web.Element.set_attribute_node_ns.cljs$lang$applyTo = (function (seq44366){
var G__44367 = cljs.core.first.call(null,seq44366);
var seq44366__$1 = cljs.core.next.call(null,seq44366);
return web.Element.set_attribute_node_ns.cljs$core$IFn$_invoke$arity$variadic(G__44367,seq44366__$1);
});

/**
 * Method.
 * 
 *   setAttributeNS adds a new attribute or changes the value of an
 *   with the given namespace and name.
 * 
 *   `element.setAttributeNS(namespace, name, value)
 * 
 * 
 *   namespace is a string specifying the namespace of the attribute.
 *   name is a string identifying the attribute by its qualified name; that is, a namespace prefix followed by a colon followed by a local name.
 *   value is the desired string value of the new attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS`
 */
web.Element.set_attribute_ns = (function web$Element$set_attribute_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44373 = arguments.length;
var i__42557__auto___44374 = (0);
while(true){
if((i__42557__auto___44374 < len__42556__auto___44373)){
args__42563__auto__.push((arguments[i__42557__auto___44374]));

var G__44375 = (i__42557__auto___44374 + (1));
i__42557__auto___44374 = G__44375;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.set_attribute_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.set_attribute_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setAttributeNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.set_attribute_ns.cljs$lang$maxFixedArity = (1);

web.Element.set_attribute_ns.cljs$lang$applyTo = (function (seq44371){
var G__44372 = cljs.core.first.call(null,seq44371);
var seq44371__$1 = cljs.core.next.call(null,seq44371);
return web.Element.set_attribute_ns.cljs$core$IFn$_invoke$arity$variadic(G__44372,seq44371__$1);
});

/**
 * Method.
 * 
 *   Call this method during the handling of a mousedown event to
 *   all mouse events to this element until the mouse button is released
 *   `web.document.releaseCapture()` is called.
 * 
 *   `element.setCapture(retargetToElement);
 * 
 * 
 *   retargetToElement
 *   If true, all events are targeted directly to this element; if false, events can also fire at descendants of this element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setCapture`
 */
web.Element.set_capture = (function web$Element$set_capture(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44378 = arguments.length;
var i__42557__auto___44379 = (0);
while(true){
if((i__42557__auto___44379 < len__42556__auto___44378)){
args__42563__auto__.push((arguments[i__42557__auto___44379]));

var G__44380 = (i__42557__auto___44379 + (1));
i__42557__auto___44379 = G__44380;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.set_capture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.set_capture.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setCapture,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.set_capture.cljs$lang$maxFixedArity = (1);

web.Element.set_capture.cljs$lang$applyTo = (function (seq44376){
var G__44377 = cljs.core.first.call(null,seq44376);
var seq44376__$1 = cljs.core.next.call(null,seq44376);
return web.Element.set_capture.cljs$core$IFn$_invoke$arity$variadic(G__44377,seq44376__$1);
});

/**
 * Method.
 * 
 *   The setPointerCapture() method of the `web.Element` interface
 *   used to designate a specific element as the capture target of
 *   pointer events. Subsequent events for the pointer will be targeted
 *   the capture element until capture is released (via `web.Element.releasePointerCapture()`).
 * 
 *   `targetElement.setPointerCapture(pointerId);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture`
 */
web.Element.set_pointer_capture = (function web$Element$set_pointer_capture(this$,pointer_id){
return this$.setPointerCapture(pointer_id);
});
/**
 * Method.
 * 
 *   The toggleAttribute() method of the `web.Element` interface toggles
 *   Boolean attribute (removing it if it is present and adding it
 *   it is not present) on the given element.
 * 
 *   `Element.toggleAttribute(name [, force]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute`
 */
web.Element.toggle_attribute = (function web$Element$toggle_attribute(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44383 = arguments.length;
var i__42557__auto___44384 = (0);
while(true){
if((i__42557__auto___44384 < len__42556__auto___44383)){
args__42563__auto__.push((arguments[i__42557__auto___44384]));

var G__44385 = (i__42557__auto___44384 + (1));
i__42557__auto___44384 = G__44385;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.toggle_attribute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.toggle_attribute.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.toggleAttribute,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.toggle_attribute.cljs$lang$maxFixedArity = (1);

web.Element.toggle_attribute.cljs$lang$applyTo = (function (seq44381){
var G__44382 = cljs.core.first.call(null,seq44381);
var seq44381__$1 = cljs.core.next.call(null,seq44381);
return web.Element.toggle_attribute.cljs$core$IFn$_invoke$arity$variadic(G__44382,seq44381__$1);
});

/**
 * Method.
 * 
 *   The `web.EventTarget` method addEventListener() sets up a function
 *   will be called whenever the specified event is delivered to the
 * 
 *   `target.addEventListener(type, listener[, options]);
 *   target.addEventListener(type, listener[, useCapture]);
 *   target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`
 */
web.Element.add_event_listener = (function web$Element$add_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44388 = arguments.length;
var i__42557__auto___44389 = (0);
while(true){
if((i__42557__auto___44389 < len__42556__auto___44388)){
args__42563__auto__.push((arguments[i__42557__auto___44389]));

var G__44390 = (i__42557__auto___44389 + (1));
i__42557__auto___44389 = G__44390;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.add_event_listener.cljs$lang$maxFixedArity = (1);

web.Element.add_event_listener.cljs$lang$applyTo = (function (seq44386){
var G__44387 = cljs.core.first.call(null,seq44386);
var seq44386__$1 = cljs.core.next.call(null,seq44386);
return web.Element.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44387,seq44386__$1);
});

/**
 * Method.
 * 
 *   Dispatches an `web.Event` at the specified `web.EventTarget`,
 *   invoking the affected `web.EventListener`s in the appropriate
 *   The normal event processing rules (including the capturing and
 *   bubbling phase) also apply to events dispatched manually with
 * 
 *   `cancelled = !target.dispatchEvent(event)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`
 */
web.Element.dispatch_event = (function web$Element$dispatch_event(this$,event){
return this$.dispatchEvent(event);
});
/**
 * Method.
 * 
 *   The EventTarget.removeEventListener() method removes from the
 *   an event listener previously registered with `web.EventTarget.addEventListener()`.
 *   event listener to be removed is identified using a combination
 *   the event type, the event listener function itself, and various
 *   options that may affect the matching process; see Matching event
 *   for removal
 * 
 *   `target.removeEventListener(type, listener[, options]);
 *   target.removeEventListener(type, listener[, useCapture]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`
 */
web.Element.remove_event_listener = (function web$Element$remove_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44393 = arguments.length;
var i__42557__auto___44394 = (0);
while(true){
if((i__42557__auto___44394 < len__42556__auto___44393)){
args__42563__auto__.push((arguments[i__42557__auto___44394]));

var G__44395 = (i__42557__auto___44394 + (1));
i__42557__auto___44394 = G__44395;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Element.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Element.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Element.remove_event_listener.cljs$lang$maxFixedArity = (1);

web.Element.remove_event_listener.cljs$lang$applyTo = (function (seq44391){
var G__44392 = cljs.core.first.call(null,seq44391);
var seq44391__$1 = cljs.core.next.call(null,seq44391);
return web.Element.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44392,seq44391__$1);
});

/**
 * Property.
 * 
 *   The Element.accessKey property sets the keystroke which a user
 *   press to jump to a given element.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/accessKey`
 */
web.Element.access_key = (function web$Element$access_key(this$){
return this$.accessKey();
});
/**
 * Property.
 * 
 *   The Element.accessKey property sets the keystroke which a user
 *   press to jump to a given element.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/accessKey`
 */
web.Element.set_access_key_BANG_ = (function web$Element$set_access_key_BANG_(this$,val){
return (this$["accessKey"] = val);
});
/**
 * Property.
 * 
 *   The Element.attributes property returns a live collection of
 *   attribute nodes registered to the specified node. It is a `web.NamedNodeMap`,
 *   an Array, so it has no `web.Array` methods and the `web.Attr`
 *   indexes may differ among browsers. To be more specific, attributes
 *   a key/value pair of strings that represents any information regarding
 *   attribute.
 * 
 *   `var attr = element.attributes;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes`
 */
web.Element.attributes = (function web$Element$attributes(this$){
return this$.attributes();
});
/**
 * Property.
 * 
 *   The Element.attributes property returns a live collection of
 *   attribute nodes registered to the specified node. It is a `web.NamedNodeMap`,
 *   an Array, so it has no `web.Array` methods and the `web.Attr`
 *   indexes may differ among browsers. To be more specific, attributes
 *   a key/value pair of strings that represents any information regarding
 *   attribute.
 * 
 *   `var attr = element.attributes;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes`
 */
web.Element.set_attributes_BANG_ = (function web$Element$set_attributes_BANG_(this$,val){
return (this$["attributes"] = val);
});
/**
 * Property.
 * 
 *   The ParentNode.childElementCount read-only property returns an
 *   long representing the number of child elements of the given element.
 * 
 *   `var count = node.childElementCount;
 * 
 * 
 *   count
 *   The return value, which is an unsigned long (simply an integer) type.
 *   node
 *   An object representing a `web.Document`, `web.DocumentFragment`, or `web.Element`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`
 */
web.Element.child_element_count = (function web$Element$child_element_count(this$){
return this$.childElementCount();
});
/**
 * Property.
 * 
 *   The ParentNode.childElementCount read-only property returns an
 *   long representing the number of child elements of the given element.
 * 
 *   `var count = node.childElementCount;
 * 
 * 
 *   count
 *   The return value, which is an unsigned long (simply an integer) type.
 *   node
 *   An object representing a `web.Document`, `web.DocumentFragment`, or `web.Element`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`
 */
web.Element.set_child_element_count_BANG_ = (function web$Element$set_child_element_count_BANG_(this$,val){
return (this$["childElementCount"] = val);
});
/**
 * Property.
 * 
 *   The `web.ParentNode` property children is a read-only property
 *   returns a live `html.HTMLCollection` which contains all of the
 *   `web.elements` of the node upon which it was called.
 * 
 *   `var children = node.children;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`
 */
web.Element.children = (function web$Element$children(this$){
return this$.children();
});
/**
 * Property.
 * 
 *   The `web.ParentNode` property children is a read-only property
 *   returns a live `html.HTMLCollection` which contains all of the
 *   `web.elements` of the node upon which it was called.
 * 
 *   `var children = node.children;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`
 */
web.Element.set_children_BANG_ = (function web$Element$set_children_BANG_(this$,val){
return (this$["children"] = val);
});
/**
 * Property.
 * 
 *   The Element.classList is a read-only property that returns a
 *   `dom.DOMTokenList` collection of the class attributes of the
 * 
 *   `const elementClasses = elementNodeReference.classList;
 * 
 *   elementClasses is a `dom.DOMTokenList` representing the class attribute of elementNodeReference. If the class attribute was not set or is empty elementClasses.length returns 0. element.classList itself is read-only, although you can modify it using the add() and remove() methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/classList`
 */
web.Element.class_list = (function web$Element$class_list(this$){
return this$.classList();
});
/**
 * Property.
 * 
 *   The className property of the `web.Element` interface gets and
 *   the value of the `web.class` of the specified element.
 * 
 *   `var cName = elementNodeReference.className;
 *   elementNodeReference.className = cName;
 * 
 * 
 *   cName is a string variable representing the class or space-separated classes of the current element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/className`
 */
web.Element.class_name = (function web$Element$class_name(this$){
return this$.className();
});
/**
 * Property.
 * 
 *   The className property of the `web.Element` interface gets and
 *   the value of the `web.class` of the specified element.
 * 
 *   `var cName = elementNodeReference.className;
 *   elementNodeReference.className = cName;
 * 
 * 
 *   cName is a string variable representing the class or space-separated classes of the current element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/className`
 */
web.Element.set_class_name_BANG_ = (function web$Element$set_class_name_BANG_(this$,val){
return (this$["className"] = val);
});
/**
 * Property.
 * 
 *   The Element.clientHeight read-only property is zero for elements
 *   no CSS or inline layout boxes; otherwise, it's the inner height
 *   an element in pixels. It includes padding but excludes borders,
 *   and horizontal scrollbars (if present).
 * 
 *   `var intElemClientHeight = element.clientHeight;
 * 
 *   intElemClientHeight is an integer corresponding to the clientHeight of element in pixels. The clientHeight property is read–only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight`
 */
web.Element.client_height = (function web$Element$client_height(this$){
return this$.clientHeight();
});
/**
 * Property.
 * 
 *   The Element.clientHeight read-only property is zero for elements
 *   no CSS or inline layout boxes; otherwise, it's the inner height
 *   an element in pixels. It includes padding but excludes borders,
 *   and horizontal scrollbars (if present).
 * 
 *   `var intElemClientHeight = element.clientHeight;
 * 
 *   intElemClientHeight is an integer corresponding to the clientHeight of element in pixels. The clientHeight property is read–only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight`
 */
web.Element.set_client_height_BANG_ = (function web$Element$set_client_height_BANG_(this$,val){
return (this$["clientHeight"] = val);
});
/**
 * Property.
 * 
 *   The width of the left border of an element in pixels. It includes
 *   width of the vertical scrollbar if the text direction of the
 *   is right–to–left and if there is an overflow causing a left vertical
 *   to be rendered. clientLeft does not include the left margin or
 *   left padding. clientLeft is read-only.
 * 
 *   `var left = element.clientLeft;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft`
 */
web.Element.client_left = (function web$Element$client_left(this$){
return this$.clientLeft();
});
/**
 * Property.
 * 
 *   The width of the left border of an element in pixels. It includes
 *   width of the vertical scrollbar if the text direction of the
 *   is right–to–left and if there is an overflow causing a left vertical
 *   to be rendered. clientLeft does not include the left margin or
 *   left padding. clientLeft is read-only.
 * 
 *   `var left = element.clientLeft;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft`
 */
web.Element.set_client_left_BANG_ = (function web$Element$set_client_left_BANG_(this$,val){
return (this$["clientLeft"] = val);
});
/**
 * Property.
 * 
 *   The width of the top border of an element in pixels. It is a
 *   integer property of element.
 * 
 *   `var top = element.clientTop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop`
 */
web.Element.client_top = (function web$Element$client_top(this$){
return this$.clientTop();
});
/**
 * Property.
 * 
 *   The width of the top border of an element in pixels. It is a
 *   integer property of element.
 * 
 *   `var top = element.clientTop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop`
 */
web.Element.set_client_top_BANG_ = (function web$Element$set_client_top_BANG_(this$,val){
return (this$["clientTop"] = val);
});
/**
 * Property.
 * 
 *   The Element.clientWidth property is zero for inline elements
 *   elements with no CSS; otherwise, it's the inner width of an element
 *   pixels. It includes padding but excludes borders, margins, and
 *   scrollbars (if present).
 * 
 *   `var intElemClientWidth = element.clientWidth;
 * 
 *   intElemClientWidth is an integer corresponding to the clientWidth of element in pixels. The clientWidth property is read–only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`
 */
web.Element.client_width = (function web$Element$client_width(this$){
return this$.clientWidth();
});
/**
 * Property.
 * 
 *   The Element.clientWidth property is zero for inline elements
 *   elements with no CSS; otherwise, it's the inner width of an element
 *   pixels. It includes padding but excludes borders, margins, and
 *   scrollbars (if present).
 * 
 *   `var intElemClientWidth = element.clientWidth;
 * 
 *   intElemClientWidth is an integer corresponding to the clientWidth of element in pixels. The clientWidth property is read–only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`
 */
web.Element.set_client_width_BANG_ = (function web$Element$set_client_width_BANG_(this$,val){
return (this$["clientWidth"] = val);
});
/**
 * Property.
 * 
 *   Element.currentStyle is a proprietary property which is similar
 *   the standardized `web.window.getComputedStyle()` method.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/currentStyle`
 */
web.Element.current_style = (function web$Element$current_style(this$){
return this$.currentStyle();
});
/**
 * Property.
 * 
 *   Element.currentStyle is a proprietary property which is similar
 *   the standardized `web.window.getComputedStyle()` method.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/currentStyle`
 */
web.Element.set_current_style_BANG_ = (function web$Element$set_current_style_BANG_(this$,val){
return (this$["currentStyle"] = val);
});
/**
 * Property.
 * 
 *   The ParentNode.firstElementChild read-only property returns the
 *   first child `web.Element`, or null if there are no child elements.
 * 
 *   `var element = node.firstElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`
 */
web.Element.first_element_child = (function web$Element$first_element_child(this$){
return this$.firstElementChild();
});
/**
 * Property.
 * 
 *   The ParentNode.firstElementChild read-only property returns the
 *   first child `web.Element`, or null if there are no child elements.
 * 
 *   `var element = node.firstElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`
 */
web.Element.set_first_element_child_BANG_ = (function web$Element$set_first_element_child_BANG_(this$,val){
return (this$["firstElementChild"] = val);
});
/**
 * Property.
 * 
 *   The id property of the `web.Element` interface represents the
 *   identifier, reflecting the id global attribute.
 * 
 *   `var idStr = element.id; // Get the id
 *   element.id = idStr; // Set the id
 * 
 * 
 *   idStr is the identifier of the element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/id`
 */
web.Element.id = (function web$Element$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The id property of the `web.Element` interface represents the
 *   identifier, reflecting the id global attribute.
 * 
 *   `var idStr = element.id; // Get the id
 *   element.id = idStr; // Set the id
 * 
 * 
 *   idStr is the identifier of the element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/id`
 */
web.Element.set_id_BANG_ = (function web$Element$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The `web.Element` property innerHTML gets or sets the HTML or
 *   markup contained within the element.
 * 
 *   `const content = element.innerHTML;
 * 
 *   element.innerHTML = htmlString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML`
 */
web.Element.inner_html = (function web$Element$inner_html(this$){
return this$.innerHTML();
});
/**
 * Property.
 * 
 *   The `web.Element` property innerHTML gets or sets the HTML or
 *   markup contained within the element.
 * 
 *   `const content = element.innerHTML;
 * 
 *   element.innerHTML = htmlString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML`
 */
web.Element.set_inner_html_BANG_ = (function web$Element$set_inner_html_BANG_(this$,val){
return (this$["innerHTML"] = val);
});
/**
 * Property.
 * 
 *   The ParentNode.lastElementChild read-only property returns the
 *   last child `web.Element` or null if there are no child elements.
 * 
 *   `var element = node.lastElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`
 */
web.Element.last_element_child = (function web$Element$last_element_child(this$){
return this$.lastElementChild();
});
/**
 * Property.
 * 
 *   The ParentNode.lastElementChild read-only property returns the
 *   last child `web.Element` or null if there are no child elements.
 * 
 *   `var element = node.lastElementChild;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`
 */
web.Element.set_last_element_child_BANG_ = (function web$Element$set_last_element_child_BANG_(this$,val){
return (this$["lastElementChild"] = val);
});
/**
 * Property.
 * 
 *   The Element.localName read-only property returns the local part
 *   the qualified name of an element.
 * 
 *   `name = element.localName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/localName`
 */
web.Element.local_name = (function web$Element$local_name(this$){
return this$.localName();
});
/**
 * Property.
 * 
 *   The Element.localName read-only property returns the local part
 *   the qualified name of an element.
 * 
 *   `name = element.localName`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/localName`
 */
web.Element.set_local_name_BANG_ = (function web$Element$set_local_name_BANG_(this$,val){
return (this$["localName"] = val);
});
/**
 * Property.
 * 
 *   name gets or sets the name property of an element in the DOM.
 *   only applies to the following elements: `web.<a>`, `web.<applet>`,
 *   `web.<form>`, `web.<frame>`, `web.<iframe>`, `web.<img>`, `web.<input>`,
 *   `web.<meta>`, `web.<object>`, `web.<param>`, `web.<select>`,
 *   `web.<textarea>`.
 * 
 *   `HTMLElement.name = string;
 *   var elName = HTMLElement.name;
 * 
 *   var fControl = HTMLFormElement.elementName;
 *   var controlCollection = HTMLFormElement.elements.elementName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/name`
 */
web.Element.name = (function web$Element$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   name gets or sets the name property of an element in the DOM.
 *   only applies to the following elements: `web.<a>`, `web.<applet>`,
 *   `web.<form>`, `web.<frame>`, `web.<iframe>`, `web.<img>`, `web.<input>`,
 *   `web.<meta>`, `web.<object>`, `web.<param>`, `web.<select>`,
 *   `web.<textarea>`.
 * 
 *   `HTMLElement.name = string;
 *   var elName = HTMLElement.name;
 * 
 *   var fControl = HTMLFormElement.elementName;
 *   var controlCollection = HTMLFormElement.elements.elementName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/name`
 */
web.Element.set_name_BANG_ = (function web$Element$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The Element.namespaceURI read-only property returns the namespace
 *   of the element, or null if the element is not in a namespace.
 * 
 *   `namespace = element.namespaceURI`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI`
 */
web.Element.namespace_uri = (function web$Element$namespace_uri(this$){
return this$.namespaceURI();
});
/**
 * Property.
 * 
 *   The Element.namespaceURI read-only property returns the namespace
 *   of the element, or null if the element is not in a namespace.
 * 
 *   `namespace = element.namespaceURI`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI`
 */
web.Element.set_namespace_uri_BANG_ = (function web$Element$set_namespace_uri_BANG_(this$,val){
return (this$["namespaceURI"] = val);
});
/**
 * Property.
 * 
 *   The NonDocumentTypeChildNode.nextElementSibling read-only property
 *   the element immediately following the specified one in its parent's
 *   list, or null if the specified element is the last one in the
 * 
 *   `var nextNode = elementNodeReference.nextElementSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`
 */
web.Element.next_element_sibling = (function web$Element$next_element_sibling(this$){
return this$.nextElementSibling();
});
/**
 * Property.
 * 
 *   The NonDocumentTypeChildNode.nextElementSibling read-only property
 *   the element immediately following the specified one in its parent's
 *   list, or null if the specified element is the last one in the
 * 
 *   `var nextNode = elementNodeReference.nextElementSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`
 */
web.Element.set_next_element_sibling_BANG_ = (function web$Element$set_next_element_sibling_BANG_(this$,val){
return (this$["nextElementSibling"] = val);
});
/**
 * Property.
 * 
 *   The `web.Element` interface's onfullscreenchange property is
 *   event handler for the fullscreenchange event that is fired when
 *   element has transitioned into or out of full-screen mode.
 * 
 *   `targetDocument.onfullscreenchange = fullscreenChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange`
 */
web.Element.onfullscreenchange = (function web$Element$onfullscreenchange(this$){
return this$.onfullscreenchange();
});
/**
 * Property.
 * 
 *   The `web.Element` interface's onfullscreenchange property is
 *   event handler for the fullscreenchange event that is fired when
 *   element has transitioned into or out of full-screen mode.
 * 
 *   `targetDocument.onfullscreenchange = fullscreenChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange`
 */
web.Element.set_onfullscreenchange_BANG_ = (function web$Element$set_onfullscreenchange_BANG_(this$,val){
return (this$["onfullscreenchange"] = val);
});
/**
 * Property.
 * 
 *   The `web.Element` interface's onfullscreenerror property is an
 *   handler for the fullscreenerror event which is sent to the element
 *   an error occurs while attempting to transition into or out of
 *   mode.
 * 
 *   `targetElement.onfullscreenerror = fullscreenErrorHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror`
 */
web.Element.onfullscreenerror = (function web$Element$onfullscreenerror(this$){
return this$.onfullscreenerror();
});
/**
 * Property.
 * 
 *   The `web.Element` interface's onfullscreenerror property is an
 *   handler for the fullscreenerror event which is sent to the element
 *   an error occurs while attempting to transition into or out of
 *   mode.
 * 
 *   `targetElement.onfullscreenerror = fullscreenErrorHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror`
 */
web.Element.set_onfullscreenerror_BANG_ = (function web$Element$set_onfullscreenerror_BANG_(this$,val){
return (this$["onfullscreenerror"] = val);
});
/**
 * Property.
 * 
 *   The Element.openOrCloseShadowRoot read-only property represents
 *   shadow root hosted by the element, regardless if its `web.mode`
 *   open or closed.
 * 
 *   `var shadowroot = element.shadowRoot;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/openOrClosedShadowRoot`
 */
web.Element.open_or_closed_shadow_root = (function web$Element$open_or_closed_shadow_root(this$){
return this$.openOrClosedShadowRoot();
});
/**
 * Property.
 * 
 *   The Element.openOrCloseShadowRoot read-only property represents
 *   shadow root hosted by the element, regardless if its `web.mode`
 *   open or closed.
 * 
 *   `var shadowroot = element.shadowRoot;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/openOrClosedShadowRoot`
 */
web.Element.set_open_or_closed_shadow_root_BANG_ = (function web$Element$set_open_or_closed_shadow_root_BANG_(this$,val){
return (this$["openOrClosedShadowRoot"] = val);
});
/**
 * Property.
 * 
 *   The outerHTML attribute of the `web.Element` DOM interface gets
 *   serialized HTML fragment describing the element including its
 *   It can also be set to replace the element with nodes parsed from
 *   given string.
 * 
 *   `var content = element.outerHTML;
 * 
 *   element.outerHTML = htmlString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML`
 */
web.Element.outer_html = (function web$Element$outer_html(this$){
return this$.outerHTML();
});
/**
 * Property.
 * 
 *   The outerHTML attribute of the `web.Element` DOM interface gets
 *   serialized HTML fragment describing the element including its
 *   It can also be set to replace the element with nodes parsed from
 *   given string.
 * 
 *   `var content = element.outerHTML;
 * 
 *   element.outerHTML = htmlString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML`
 */
web.Element.set_outer_html_BANG_ = (function web$Element$set_outer_html_BANG_(this$,val){
return (this$["outerHTML"] = val);
});
/**
 * Property.
 * 
 *   The Element.prefix read-only property returns the namespace prefix
 *   the specified element, or null if no prefix is specified.
 * 
 *   `string = element.prefix`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/prefix`
 */
web.Element.prefix = (function web$Element$prefix(this$){
return this$.prefix();
});
/**
 * Property.
 * 
 *   The Element.prefix read-only property returns the namespace prefix
 *   the specified element, or null if no prefix is specified.
 * 
 *   `string = element.prefix`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/prefix`
 */
web.Element.set_prefix_BANG_ = (function web$Element$set_prefix_BANG_(this$,val){
return (this$["prefix"] = val);
});
/**
 * Property.
 * 
 *   The NonDocumentTypeChildNode.previousElementSibling read-only
 *   returns the `web.Element` immediately prior to the specified
 *   in its parent's children list, or null if the specified element
 *   the first one in the list.
 * 
 *   `prevNode = elementNodeReference.previousElementSibling;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling`
 */
web.Element.previous_element_sibling = (function web$Element$previous_element_sibling(this$){
return this$.previousElementSibling();
});
/**
 * Property.
 * 
 *   Element.runtimeStyle is a proprietary property similar to `html.HTMLElement.style`,
 *   its styles, that have higher precedence and modification.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/runtimeStyle`
 */
web.Element.runtime_style = (function web$Element$runtime_style(this$){
return this$.runtimeStyle();
});
/**
 * Property.
 * 
 *   Element.runtimeStyle is a proprietary property similar to `html.HTMLElement.style`,
 *   its styles, that have higher precedence and modification.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/runtimeStyle`
 */
web.Element.set_runtime_style_BANG_ = (function web$Element$set_runtime_style_BANG_(this$,val){
return (this$["runtimeStyle"] = val);
});
/**
 * Property.
 * 
 *   The Element.scrollHeight read-only property is a measurement
 *   the height of an element's content, including content not visible
 *   the screen due to overflow.
 * 
 *   `var intElemScrollHeight = element.scrollHeight;
 * 
 *   intElemScrollHeight is a variable storing an integer corresponding to the scrollHeight pixel value of the element. The scrollHeight property is read-only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight`
 */
web.Element.scroll_height = (function web$Element$scroll_height(this$){
return this$.scrollHeight();
});
/**
 * Property.
 * 
 *   The Element.scrollHeight read-only property is a measurement
 *   the height of an element's content, including content not visible
 *   the screen due to overflow.
 * 
 *   `var intElemScrollHeight = element.scrollHeight;
 * 
 *   intElemScrollHeight is a variable storing an integer corresponding to the scrollHeight pixel value of the element. The scrollHeight property is read-only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight`
 */
web.Element.set_scroll_height_BANG_ = (function web$Element$set_scroll_height_BANG_(this$,val){
return (this$["scrollHeight"] = val);
});
/**
 * Property.
 * 
 *   The Element.scrollLeft property gets or sets the number of pixels
 *   an element's content is scrolled from its left edge.
 * 
 *   ``
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft`
 */
web.Element.scroll_left = (function web$Element$scroll_left(this$){
return this$.scrollLeft();
});
/**
 * Property.
 * 
 *   The Element.scrollLeft property gets or sets the number of pixels
 *   an element's content is scrolled from its left edge.
 * 
 *   ``
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft`
 */
web.Element.set_scroll_left_BANG_ = (function web$Element$set_scroll_left_BANG_(this$,val){
return (this$["scrollLeft"] = val);
});
/**
 * Property.
 * 
 *   The Element.scrollLeftMax read-only property returns a `web.Number`
 *   the maximum left scroll offset possible for the element.
 * 
 *   `var pxl = element.scrollLeftMax;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeftMax`
 */
web.Element.scroll_left_max = (function web$Element$scroll_left_max(this$){
return this$.scrollLeftMax();
});
/**
 * Property.
 * 
 *   The Element.scrollTop property gets or sets the number of pixels
 *   an element's content is scrolled vertically.
 * 
 *   `// Get the number of pixels scrolled.
 *   var intElemScrollTop = someElement.scrollTop;
 * 
 *   After running this code, intElemScrollTop is an integer corresponding to the number of pixels that the `web.element`'s content has been scrolled upwards.
 * 
 * 
 * 
 *   // Set the number of pixels scrolled.
 *   element.scrollTop = intValue;
 * 
 *   scrollTop can be set to any integer value, with certain caveats:
 * 
 * 
 *   If the element can't be scrolled (e.g. it has no overflow or if the element has a property of \"non-scrollable\"), scrollTop is 0.
 *   scrollTop doesn't respond to negative values; instead, it sets itself back to 0.
 *   If set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum value.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop`
 */
web.Element.scroll_top = (function web$Element$scroll_top(this$){
return this$.scrollTop();
});
/**
 * Property.
 * 
 *   The Element.scrollTop property gets or sets the number of pixels
 *   an element's content is scrolled vertically.
 * 
 *   `// Get the number of pixels scrolled.
 *   var intElemScrollTop = someElement.scrollTop;
 * 
 *   After running this code, intElemScrollTop is an integer corresponding to the number of pixels that the `web.element`'s content has been scrolled upwards.
 * 
 * 
 * 
 *   // Set the number of pixels scrolled.
 *   element.scrollTop = intValue;
 * 
 *   scrollTop can be set to any integer value, with certain caveats:
 * 
 * 
 *   If the element can't be scrolled (e.g. it has no overflow or if the element has a property of \"non-scrollable\"), scrollTop is 0.
 *   scrollTop doesn't respond to negative values; instead, it sets itself back to 0.
 *   If set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum value.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop`
 */
web.Element.set_scroll_top_BANG_ = (function web$Element$set_scroll_top_BANG_(this$,val){
return (this$["scrollTop"] = val);
});
/**
 * Property.
 * 
 *   The Element.scrollTopMax read-only property returns a `web.Number`
 *   the maximum top scroll offset possible for the element.
 * 
 *   `var pxl = elt.scrollTopMax;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTopMax`
 */
web.Element.scroll_top_max = (function web$Element$scroll_top_max(this$){
return this$.scrollTopMax();
});
/**
 * Property.
 * 
 *   The Element.scrollWidth read-only property is a measurement of
 *   width of an element's content, including content not visible
 *   the screen due to overflow.
 * 
 *   `var xScrollWidth = element.scrollWidth;
 * 
 *   xScrollWidth is the width of the content of element in pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth`
 */
web.Element.scroll_width = (function web$Element$scroll_width(this$){
return this$.scrollWidth();
});
/**
 * Property.
 * 
 *   The Element.scrollWidth read-only property is a measurement of
 *   width of an element's content, including content not visible
 *   the screen due to overflow.
 * 
 *   `var xScrollWidth = element.scrollWidth;
 * 
 *   xScrollWidth is the width of the content of element in pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth`
 */
web.Element.set_scroll_width_BANG_ = (function web$Element$set_scroll_width_BANG_(this$,val){
return (this$["scrollWidth"] = val);
});
/**
 * Property.
 * 
 *   The Element.shadowRoot read-only property represents the shadow
 *   hosted by the element.
 * 
 *   `var shadowroot = element.shadowRoot;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot`
 */
web.Element.shadow_root = (function web$Element$shadow_root(this$){
return this$.shadowRoot();
});
/**
 * Property.
 * 
 *   The Element.shadowRoot read-only property represents the shadow
 *   hosted by the element.
 * 
 *   `var shadowroot = element.shadowRoot;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot`
 */
web.Element.set_shadow_root_BANG_ = (function web$Element$set_shadow_root_BANG_(this$,val){
return (this$["shadowRoot"] = val);
});
/**
 * Property.
 * 
 *   The slot property of the `web.Element` interface returns the
 *   of the shadow DOM slot the element is inserted in.
 * 
 *   `var aString = element.slot
 *   element.slot = aString`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/slot`
 */
web.Element.slot = (function web$Element$slot(this$){
return this$.slot();
});
/**
 * Property.
 * 
 *   The slot property of the `web.Element` interface returns the
 *   of the shadow DOM slot the element is inserted in.
 * 
 *   `var aString = element.slot
 *   element.slot = aString`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/slot`
 */
web.Element.set_slot_BANG_ = (function web$Element$set_slot_BANG_(this$,val){
return (this$["slot"] = val);
});
/**
 * Property.
 * 
 *   The tabStop property of the `web.Element` interface returns a
 *   indicating if the element can receive input focus via the tab
 *   If the specified element is a shadow host tab navigation is delegated
 *   its children.
 * 
 *   `var isTabStop = element.tabStop;
 *   element.tabStop = (true|false);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tabStop`
 */
web.Element.tab_stop = (function web$Element$tab_stop(this$){
return this$.tabStop();
});
/**
 * Property.
 * 
 *   The tabStop property of the `web.Element` interface returns a
 *   indicating if the element can receive input focus via the tab
 *   If the specified element is a shadow host tab navigation is delegated
 *   its children.
 * 
 *   `var isTabStop = element.tabStop;
 *   element.tabStop = (true|false);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tabStop`
 */
web.Element.set_tab_stop_BANG_ = (function web$Element$set_tab_stop_BANG_(this$,val){
return (this$["tabStop"] = val);
});
/**
 * Property.
 * 
 *   The tagName read-only property of the `web.Element` interface
 *   the tag name of the element on which it's called.
 * 
 *   `elementName = Element.tagName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName`
 */
web.Element.tag_name = (function web$Element$tag_name(this$){
return this$.tagName();
});
/**
 * Property.
 * 
 *   The assignedSlot read-only property of the `web.Slotable` interface
 *   an `html.HTMLSlotElement` representing the `web.<slot>` element
 *   node is inserted in.
 * 
 *   `var slotElement = elementInstance.assignedSlot`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`
 */
web.Element.assigned_slot = (function web$Element$assigned_slot(this$){
return this$.assignedSlot();
});
/**
 * Property.
 * 
 *   The assignedSlot read-only property of the `web.Slotable` interface
 *   an `html.HTMLSlotElement` representing the `web.<slot>` element
 *   node is inserted in.
 * 
 *   `var slotElement = elementInstance.assignedSlot`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`
 */
web.Element.set_assigned_slot_BANG_ = (function web$Element$set_assigned_slot_BANG_(this$,val){
return (this$["assignedSlot"] = val);
});

//# sourceMappingURL=Element.js.map?rel=1565798813713
