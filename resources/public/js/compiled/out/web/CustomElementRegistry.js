// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CustomElementRegistry');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   In an HTML document, the document.createElement() method creates
 *   HTML element specified by tagName, or an `html.HTMLUnknownElement`
 *   tagName isn't recognized.
 * 
 *   `var element = document.createElement(tagName[, options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement`
 */
web.CustomElementRegistry.create_element = (function web$CustomElementRegistry$create_element(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52747 = arguments.length;
var i__42557__auto___52748 = (0);
while(true){
if((i__42557__auto___52748 < len__42556__auto___52747)){
args__42563__auto__.push((arguments[i__42557__auto___52748]));

var G__52749 = (i__42557__auto___52748 + (1));
i__42557__auto___52748 = G__52749;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CustomElementRegistry.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CustomElementRegistry.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createElement,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CustomElementRegistry.create_element.cljs$lang$maxFixedArity = (1);

web.CustomElementRegistry.create_element.cljs$lang$applyTo = (function (seq52745){
var G__52746 = cljs.core.first.call(null,seq52745);
var seq52745__$1 = cljs.core.next.call(null,seq52745);
return web.CustomElementRegistry.create_element.cljs$core$IFn$_invoke$arity$variadic(G__52746,seq52745__$1);
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
web.CustomElementRegistry.attach_shadow = (function web$CustomElementRegistry$attach_shadow(this$,shadow_root_init){
return this$.attachShadow(shadow_root_init);
});
/**
 * Method.
 * 
 *   The getRootNode() method of the `web.Node` interface returns
 *   context object's root, which optionally includes the shadow root
 *   it is available.
 * 
 *   `var root = node.getRootNode(options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode`
 */
web.CustomElementRegistry.get_root_node = (function web$CustomElementRegistry$get_root_node(this$,options){
return this$.getRootNode(options);
});
/**
 * Method.
 * 
 *   The define() method of the `web.CustomElementRegistry` interface
 *   a new custom element.
 * 
 *   `customElements.define(name, constructor, options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define`
 */
web.CustomElementRegistry.define = (function web$CustomElementRegistry$define(this$,name,constructor$,options){
return this$.define(name,constructor$,options);
});
/**
 * Method.
 * 
 *   The get() method of the `web.CustomElementRegistry` interface
 *   the constructor for a previously-defined custom element.
 * 
 *   `constructor = customElements.get(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/get`
 */
web.CustomElementRegistry.get = (function web$CustomElementRegistry$get(this$,name){
return this$.get(name);
});
/**
 * Method.
 * 
 *   The upgrade() method of the `web.CustomElementRegistry` interface
 *   all shadow-containing custom elements in a `web.Node` subtree,
 *   before they are connected to the main document.
 * 
 *   `customElements.upgrade(root);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade`
 */
web.CustomElementRegistry.upgrade = (function web$CustomElementRegistry$upgrade(this$,root){
return this$.upgrade(root);
});
/**
 * Method.
 * 
 *   The whenDefined() method of the `web.CustomElementRegistry` interface
 *   a `web.Promise` that resolves when the named element is defined.
 * 
 *   `Promise<> customElements.whenDefined(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined`
 */
web.CustomElementRegistry.when_defined = (function web$CustomElementRegistry$when_defined(this$,name){
return this$.whenDefined(name);
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
web.CustomElementRegistry.shadow_root = (function web$CustomElementRegistry$shadow_root(this$){
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
web.CustomElementRegistry.set_shadow_root_BANG_ = (function web$CustomElementRegistry$set_shadow_root_BANG_(this$,val){
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
web.CustomElementRegistry.slot = (function web$CustomElementRegistry$slot(this$){
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
web.CustomElementRegistry.set_slot_BANG_ = (function web$CustomElementRegistry$set_slot_BANG_(this$,val){
return (this$["slot"] = val);
});
/**
 * Property.
 * 
 *   The read-only composed property of the `web.Event` interface
 *   a `web.Boolean` which indicates whether or not the event will
 *   across the shadow DOM boundary into the standard DOM.
 * 
 *   `var composed = Event.composed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`
 */
web.CustomElementRegistry.composed = (function web$CustomElementRegistry$composed(this$){
return this$.composed();
});
/**
 * Property.
 * 
 *   The composedPath() method of the `web.Event` interface returns
 *   event’s path which is an array of the objects on which listeners
 *   be invoked. This does not include nodes in shadow trees if the
 *   root was created with its `web.ShadowRoot.mode` closed.
 * 
 *   `var composed = Event.composedPath();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`
 */
web.CustomElementRegistry.composed_path = (function web$CustomElementRegistry$composed_path(this$){
return this$.composedPath();
});
/**
 * Property.
 * 
 *   The composedPath() method of the `web.Event` interface returns
 *   event’s path which is an array of the objects on which listeners
 *   be invoked. This does not include nodes in shadow trees if the
 *   root was created with its `web.ShadowRoot.mode` closed.
 * 
 *   `var composed = Event.composedPath();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`
 */
web.CustomElementRegistry.set_composed_path_BANG_ = (function web$CustomElementRegistry$set_composed_path_BANG_(this$,val){
return (this$["composedPath"] = val);
});
/**
 * Property.
 * 
 *   The isConnected read-only property of the `web.Node` interface
 *   a boolean indicating whether the node is connected (directly
 *   indirectly) to the context object, for example the `web.Document`
 *   in the case of the normal DOM, or the `web.ShadowRoot` in the
 *   of a shadow DOM.
 * 
 *   `var isItConnected = nodeObjectInstance.isConnected`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`
 */
web.CustomElementRegistry.is_connected = (function web$CustomElementRegistry$is_connected(this$){
return this$.isConnected();
});
/**
 * Property.
 * 
 *   The isConnected read-only property of the `web.Node` interface
 *   a boolean indicating whether the node is connected (directly
 *   indirectly) to the context object, for example the `web.Document`
 *   in the case of the normal DOM, or the `web.ShadowRoot` in the
 *   of a shadow DOM.
 * 
 *   `var isItConnected = nodeObjectInstance.isConnected`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`
 */
web.CustomElementRegistry.set_is_connected_BANG_ = (function web$CustomElementRegistry$set_is_connected_BANG_(this$,val){
return (this$["isConnected"] = val);
});
/**
 * Property.
 * 
 *   The customElements read-only property of the `web.Window` interface
 *   a reference to the `web.CustomElementRegistry` object, which
 *   be used to register new custom elements and get information about
 *   registered custom elements.
 * 
 *   `let customElementRegistry = window.customElements;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`
 */
web.CustomElementRegistry.custom_elements = (function web$CustomElementRegistry$custom_elements(this$){
return this$.customElements();
});
/**
 * Property.
 * 
 *   The customElements read-only property of the `web.Window` interface
 *   a reference to the `web.CustomElementRegistry` object, which
 *   be used to register new custom elements and get information about
 *   registered custom elements.
 * 
 *   `let customElementRegistry = window.customElements;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`
 */
web.CustomElementRegistry.set_custom_elements_BANG_ = (function web$CustomElementRegistry$set_custom_elements_BANG_(this$,val){
return (this$["customElements"] = val);
});

//# sourceMappingURL=CustomElementRegistry.js.map?rel=1565798858277
