// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Document');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Document constructor creates a new `web.Document` object that is a web page loaded in the browser and serving as an entry point into the page's content.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/Document`
 */
web.Document.constructor$ = Document;
/**
 * Method.
 * 
 *   Document.adoptNode() transfers a node from another document into
 *   method's document. The adopted node and its subtree is removed
 *   its original document (if any), and its `web.ownerDocument` is
 *   to the current document. The node can then be inserted into the
 *   document.
 * 
 *   `node = document.adoptNode(externalNode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode`
 */
web.Document.adopt_node = (function web$Document$adopt_node(this$,external_node){
return this$.adoptNode(external_node);
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
web.Document.append = (function web$Document$append(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47880 = arguments.length;
var i__42557__auto___47881 = (0);
while(true){
if((i__42557__auto___47881 < len__42556__auto___47880)){
args__42563__auto__.push((arguments[i__42557__auto___47881]));

var G__47882 = (i__42557__auto___47881 + (1));
i__42557__auto___47881 = G__47882;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.append.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.append,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.append.cljs$lang$maxFixedArity = (1);

web.Document.append.cljs$lang$applyTo = (function (seq47878){
var G__47879 = cljs.core.first.call(null,seq47878);
var seq47878__$1 = cljs.core.next.call(null,seq47878);
return web.Document.append.cljs$core$IFn$_invoke$arity$variadic(G__47879,seq47878__$1);
});

/**
 * Method.
 * 
 *   The caretRangeFromPoint() method of the `web.Document` interface
 *   a `web.Range` object for the document fragment under the specified
 * 
 *   `var range = document.caretRangeFromPoint(float x, float y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint`
 */
web.Document.caret_range_from_point = (function web$Document$caret_range_from_point(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47885 = arguments.length;
var i__42557__auto___47886 = (0);
while(true){
if((i__42557__auto___47886 < len__42556__auto___47885)){
args__42563__auto__.push((arguments[i__42557__auto___47886]));

var G__47887 = (i__42557__auto___47886 + (1));
i__42557__auto___47886 = G__47887;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.caret_range_from_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.caret_range_from_point.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.caretRangeFromPoint,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.caret_range_from_point.cljs$lang$maxFixedArity = (1);

web.Document.caret_range_from_point.cljs$lang$applyTo = (function (seq47883){
var G__47884 = cljs.core.first.call(null,seq47883);
var seq47883__$1 = cljs.core.next.call(null,seq47883);
return web.Document.caret_range_from_point.cljs$core$IFn$_invoke$arity$variadic(G__47884,seq47883__$1);
});

/**
 * Method.
 * 
 *   The Document.clear() method clears the whole specified document
 *   early (pre-1.0) versions of Mozilla.
 * 
 *   `document.clear();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/clear`
 */
web.Document.clear = (function web$Document$clear(this$){
return this$.clear();
});
/**
 * Method.
 * 
 *   The Document.close() method finishes writing to a document, opened
 *   `web.Document.open()`.
 * 
 *   `document.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/close`
 */
web.Document.close = (function web$Document$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The Document.createAttribute() method creates a new attribute
 *   and returns it. The object created a node implementing the `web.Attr`
 *   The DOM does not enforce what sort of attributes can be added
 *   a particular element in this manner.
 * 
 *   `attribute = document.createAttribute(name)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute`
 */
web.Document.create_attribute = (function web$Document$create_attribute(this$,name){
return this$.createAttribute(name);
});
/**
 * Method.
 * 
 *   createCDATASection() creates a new CDATA section node, and returns
 * 
 *   `var CDATASectionNode = document.createCDATASection(data);
 * 
 * 
 *   CDATASectionNode is a CDATA Section node.
 *   data is a string containing the data to be added to the CDATA Section.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection`
 */
web.Document.create_cdata_section = (function web$Document$create_cdata_section(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47890 = arguments.length;
var i__42557__auto___47891 = (0);
while(true){
if((i__42557__auto___47891 < len__42556__auto___47890)){
args__42563__auto__.push((arguments[i__42557__auto___47891]));

var G__47892 = (i__42557__auto___47891 + (1));
i__42557__auto___47891 = G__47892;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_cdata_section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_cdata_section.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createCDATASection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_cdata_section.cljs$lang$maxFixedArity = (1);

web.Document.create_cdata_section.cljs$lang$applyTo = (function (seq47888){
var G__47889 = cljs.core.first.call(null,seq47888);
var seq47888__$1 = cljs.core.next.call(null,seq47888);
return web.Document.create_cdata_section.cljs$core$IFn$_invoke$arity$variadic(G__47889,seq47888__$1);
});

/**
 * Method.
 * 
 *   createComment() creates a new comment node, and returns it.
 * 
 *   `CommentNode = document.createComment(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment`
 */
web.Document.create_comment = (function web$Document$create_comment(this$,data){
return this$.createComment(data);
});
/**
 * Method.
 * 
 *   Creates a new empty `web.DocumentFragment`.
 * 
 *   `var fragment = document.createDocumentFragment();
 * 
 *   fragment is a reference to an empty `web.DocumentFragment` object.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment`
 */
web.Document.create_document_fragment = (function web$Document$create_document_fragment(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47895 = arguments.length;
var i__42557__auto___47896 = (0);
while(true){
if((i__42557__auto___47896 < len__42556__auto___47895)){
args__42563__auto__.push((arguments[i__42557__auto___47896]));

var G__47897 = (i__42557__auto___47896 + (1));
i__42557__auto___47896 = G__47897;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_document_fragment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_document_fragment.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createDocumentFragment,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_document_fragment.cljs$lang$maxFixedArity = (1);

web.Document.create_document_fragment.cljs$lang$applyTo = (function (seq47893){
var G__47894 = cljs.core.first.call(null,seq47893);
var seq47893__$1 = cljs.core.next.call(null,seq47893);
return web.Document.create_document_fragment.cljs$core$IFn$_invoke$arity$variadic(G__47894,seq47893__$1);
});

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
web.Document.create_element = (function web$Document$create_element(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47900 = arguments.length;
var i__42557__auto___47901 = (0);
while(true){
if((i__42557__auto___47901 < len__42556__auto___47900)){
args__42563__auto__.push((arguments[i__42557__auto___47901]));

var G__47902 = (i__42557__auto___47901 + (1));
i__42557__auto___47901 = G__47902;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createElement,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_element.cljs$lang$maxFixedArity = (1);

web.Document.create_element.cljs$lang$applyTo = (function (seq47898){
var G__47899 = cljs.core.first.call(null,seq47898);
var seq47898__$1 = cljs.core.next.call(null,seq47898);
return web.Document.create_element.cljs$core$IFn$_invoke$arity$variadic(G__47899,seq47898__$1);
});

/**
 * Method.
 * 
 *   Creates an element with the specified namespace URI and qualified
 * 
 *   `var element = document.createElementNS(namespaceURI, qualifiedName[, options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS`
 */
web.Document.create_element_ns = (function web$Document$create_element_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47905 = arguments.length;
var i__42557__auto___47906 = (0);
while(true){
if((i__42557__auto___47906 < len__42556__auto___47905)){
args__42563__auto__.push((arguments[i__42557__auto___47906]));

var G__47907 = (i__42557__auto___47906 + (1));
i__42557__auto___47906 = G__47907;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_element_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_element_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createElementNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_element_ns.cljs$lang$maxFixedArity = (1);

web.Document.create_element_ns.cljs$lang$applyTo = (function (seq47903){
var G__47904 = cljs.core.first.call(null,seq47903);
var seq47903__$1 = cljs.core.next.call(null,seq47903);
return web.Document.create_element_ns.cljs$core$IFn$_invoke$arity$variadic(G__47904,seq47903__$1);
});

/**
 * Method.
 * 
 *   Prior to Gecko 7.0 this method showed up as present, due to bug
 *   9850, it always only returned null. The only workaround is to
 *   a text node, CDATA section, attribute node value, etc. which
 *   the value referred to by the entity, using Unicode escape sequences
 *   fromCharCode() as necessary.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createEntityReference`
 */
web.Document.create_entity_reference = (function web$Document$create_entity_reference(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47910 = arguments.length;
var i__42557__auto___47911 = (0);
while(true){
if((i__42557__auto___47911 < len__42556__auto___47910)){
args__42563__auto__.push((arguments[i__42557__auto___47911]));

var G__47912 = (i__42557__auto___47911 + (1));
i__42557__auto___47911 = G__47912;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_entity_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_entity_reference.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createEntityReference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_entity_reference.cljs$lang$maxFixedArity = (1);

web.Document.create_entity_reference.cljs$lang$applyTo = (function (seq47908){
var G__47909 = cljs.core.first.call(null,seq47908);
var seq47908__$1 = cljs.core.next.call(null,seq47908);
return web.Document.create_entity_reference.cljs$core$IFn$_invoke$arity$variadic(G__47909,seq47908__$1);
});

/**
 * Method.
 * 
 *   Creates an event of the type specified. The returned object should
 *   first initialized and can then be passed to `web.EventTarget.dispatchEvent`.
 * 
 *   `var event = document.createEvent(type);
 * 
 * 
 *   event is the created Event object.
 *   type is a string that represents the type of event to be created. Possible event types include \"UIEvents\", \"MouseEvents\", \"MutationEvents\", and \"HTMLEvents\". See Notes section for details.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent`
 */
web.Document.create_event = (function web$Document$create_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47915 = arguments.length;
var i__42557__auto___47916 = (0);
while(true){
if((i__42557__auto___47916 < len__42556__auto___47915)){
args__42563__auto__.push((arguments[i__42557__auto___47916]));

var G__47917 = (i__42557__auto___47916 + (1));
i__42557__auto___47916 = G__47917;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_event.cljs$lang$maxFixedArity = (1);

web.Document.create_event.cljs$lang$applyTo = (function (seq47913){
var G__47914 = cljs.core.first.call(null,seq47913);
var seq47913__$1 = cljs.core.next.call(null,seq47913);
return web.Document.create_event.cljs$core$IFn$_invoke$arity$variadic(G__47914,seq47913__$1);
});

/**
 * Method.
 * 
 *   This method compiles an `web.XPathExpression` which can then
 *   used for (repeated) evaluations.
 * 
 *   `xpathExpr = document.createExpression(xpathText, namespaceURLMapper);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createExpression`
 */
web.Document.create_expression = (function web$Document$create_expression(this$,xpath_text,namespace_url_mapper){
return this$.createExpression(xpath_text,namespace_url_mapper);
});
/**
 * Method.
 * 
 *   Returns a new NodeIterator object.
 * 
 *   `var nodeIterator = document.createNodeIterator(root, whatToShow, filter);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator`
 */
web.Document.create_node_iterator = (function web$Document$create_node_iterator(this$,root,what_to_show,filter){
return this$.createNodeIterator(root,what_to_show,filter);
});
/**
 * Method.
 * 
 *   This method adapts any DOM node to resolve namespaces so that
 *   XPath expression can be easily evaluated relative to the context
 *   the node where it appeared within the document.
 * 
 *   `XPathNSResolver XPathEvaluator.createNSResolver(nodeResolver);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createNSResolver`
 */
web.Document.create_ns_resolver = (function web$Document$create_ns_resolver(this$,node_resolver){
return this$.createNSResolver(node_resolver);
});
/**
 * Method.
 * 
 *   createProcessingInstruction() generates a new processing instruction
 *   and returns it.
 * 
 *   `piNode = document.createProcessingInstruction(target, data)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createProcessingInstruction`
 */
web.Document.create_processing_instruction = (function web$Document$create_processing_instruction(this$,target,data){
return this$.createProcessingInstruction(target,data);
});
/**
 * Method.
 * 
 *   The Document.createRange() method returns a new `web.Range` object.
 * 
 *   `range = document.createRange();
 * 
 *   range is the created `web.Range` object.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange`
 */
web.Document.create_range = (function web$Document$create_range(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47920 = arguments.length;
var i__42557__auto___47921 = (0);
while(true){
if((i__42557__auto___47921 < len__42556__auto___47920)){
args__42563__auto__.push((arguments[i__42557__auto___47921]));

var G__47922 = (i__42557__auto___47921 + (1));
i__42557__auto___47921 = G__47922;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_range.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createRange,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_range.cljs$lang$maxFixedArity = (1);

web.Document.create_range.cljs$lang$applyTo = (function (seq47918){
var G__47919 = cljs.core.first.call(null,seq47918);
var seq47918__$1 = cljs.core.next.call(null,seq47918);
return web.Document.create_range.cljs$core$IFn$_invoke$arity$variadic(G__47919,seq47918__$1);
});

/**
 * Method.
 * 
 *   Creates a new `web.Text` node. This method can be used to escape
 *   characters.
 * 
 *   `var text = document.createTextNode(data);
 * 
 * 
 *   text is a `web.Text` node.
 *   data is a string containing the data to be put in the text node.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode`
 */
web.Document.create_text_node = (function web$Document$create_text_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47925 = arguments.length;
var i__42557__auto___47926 = (0);
while(true){
if((i__42557__auto___47926 < len__42556__auto___47925)){
args__42563__auto__.push((arguments[i__42557__auto___47926]));

var G__47927 = (i__42557__auto___47926 + (1));
i__42557__auto___47926 = G__47927;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_text_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_text_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createTextNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_text_node.cljs$lang$maxFixedArity = (1);

web.Document.create_text_node.cljs$lang$applyTo = (function (seq47923){
var G__47924 = cljs.core.first.call(null,seq47923);
var seq47923__$1 = cljs.core.next.call(null,seq47923);
return web.Document.create_text_node.cljs$core$IFn$_invoke$arity$variadic(G__47924,seq47923__$1);
});

/**
 * Method.
 * 
 *   The Document.createTouch() method creates and returns a new `web.Touch`
 * 
 *   `var touch = DocumentTouch.createTouch(view, target, identifier, pageX, pageY,
 *   screenX, screenY);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTouch`
 */
web.Document.create_touch = (function web$Document$create_touch(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47930 = arguments.length;
var i__42557__auto___47931 = (0);
while(true){
if((i__42557__auto___47931 < len__42556__auto___47930)){
args__42563__auto__.push((arguments[i__42557__auto___47931]));

var G__47932 = (i__42557__auto___47931 + (1));
i__42557__auto___47931 = G__47932;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_touch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_touch.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createTouch,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_touch.cljs$lang$maxFixedArity = (1);

web.Document.create_touch.cljs$lang$applyTo = (function (seq47928){
var G__47929 = cljs.core.first.call(null,seq47928);
var seq47928__$1 = cljs.core.next.call(null,seq47928);
return web.Document.create_touch.cljs$core$IFn$_invoke$arity$variadic(G__47929,seq47928__$1);
});

/**
 * Method.
 * 
 *   The Document.createTouchList() method creates and returns a new
 *   object.
 * 
 *   `var list = DocumentTouch.createTouchList([touch1 [, touch2 [, ...]]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTouchList`
 */
web.Document.create_touch_list = (function web$Document$create_touch_list(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47935 = arguments.length;
var i__42557__auto___47936 = (0);
while(true){
if((i__42557__auto___47936 < len__42556__auto___47935)){
args__42563__auto__.push((arguments[i__42557__auto___47936]));

var G__47937 = (i__42557__auto___47936 + (1));
i__42557__auto___47936 = G__47937;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_touch_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_touch_list.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createTouchList,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_touch_list.cljs$lang$maxFixedArity = (1);

web.Document.create_touch_list.cljs$lang$applyTo = (function (seq47933){
var G__47934 = cljs.core.first.call(null,seq47933);
var seq47933__$1 = cljs.core.next.call(null,seq47933);
return web.Document.create_touch_list.cljs$core$IFn$_invoke$arity$variadic(G__47934,seq47933__$1);
});

/**
 * Method.
 * 
 *   The Document.createTreeWalker() creator method returns a newly
 *   `web.TreeWalker` object.
 * 
 *   `document.createTreeWalker(root, whatToShow[, filter[, entityReferenceExpansion]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker`
 */
web.Document.create_tree_walker = (function web$Document$create_tree_walker(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47940 = arguments.length;
var i__42557__auto___47941 = (0);
while(true){
if((i__42557__auto___47941 < len__42556__auto___47940)){
args__42563__auto__.push((arguments[i__42557__auto___47941]));

var G__47942 = (i__42557__auto___47941 + (1));
i__42557__auto___47941 = G__47942;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.create_tree_walker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.create_tree_walker.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createTreeWalker,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.create_tree_walker.cljs$lang$maxFixedArity = (1);

web.Document.create_tree_walker.cljs$lang$applyTo = (function (seq47938){
var G__47939 = cljs.core.first.call(null,seq47938);
var seq47938__$1 = cljs.core.next.call(null,seq47938);
return web.Document.create_tree_walker.cljs$core$IFn$_invoke$arity$variadic(G__47939,seq47938__$1);
});

/**
 * Method.
 * 
 *   Enables the style sheets matching the specified name in the current
 *   sheet set, and disables all other style sheets (except those
 *   a title, which are always enabled).
 * 
 *   `document.enableStyleSheetsForSet(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/enableStyleSheetsForSet`
 */
web.Document.enable_style_sheets_for_set = (function web$Document$enable_style_sheets_for_set(this$,name){
return this$.enableStyleSheetsForSet(name);
});
/**
 * Method.
 * 
 *   Returns an `web.XPathResult` based on an XPath expression and
 *   given parameters.
 * 
 *   `var xpathResult = document.evaluate(
 *   xpathExpression,
 *   contextNode,
 *   namespaceResolver,
 *   resultType,
 *   result
 *   );
 * 
 * 
 *   \txpathExpression is a string representing the XPath to be evaluated.
 *   \tcontextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 *   \tnamespaceResolver is a function that will be passed any namespace prefixes and should return a string representing the namespace URI associated with that prefix. It will be used to resolve prefixes within the XPath itself, so that they can be matched with the document. null is common for HTML documents or when no namespace prefixes are used.
 *   \tresultType is an integer that corresponds to the type of result XPathResult to return. Use named constant properties, such as XPathResult.ANY_TYPE, of the XPathResult constructor, which correspond to integers from 0 to 9.
 *   \tresult is an existing XPathResult to use for the results. null is the most common and will create a new XPathResult`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate`
 */
web.Document.evaluate = (function web$Document$evaluate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47945 = arguments.length;
var i__42557__auto___47946 = (0);
while(true){
if((i__42557__auto___47946 < len__42556__auto___47945)){
args__42563__auto__.push((arguments[i__42557__auto___47946]));

var G__47947 = (i__42557__auto___47946 + (1));
i__42557__auto___47946 = G__47947;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.evaluate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.evaluate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.evaluate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.evaluate.cljs$lang$maxFixedArity = (1);

web.Document.evaluate.cljs$lang$applyTo = (function (seq47943){
var G__47944 = cljs.core.first.call(null,seq47943);
var seq47943__$1 = cljs.core.next.call(null,seq47943);
return web.Document.evaluate.cljs$core$IFn$_invoke$arity$variadic(G__47944,seq47943__$1);
});

/**
 * Method.
 * 
 *   When an HTML document has been switched to designMode, its document
 *   exposes an execCommand method to run commands that manipulate
 *   current editable region, such as form inputs or contentEditable
 * 
 *   `document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand`
 */
web.Document.exec_command = (function web$Document$exec_command(this$,a_command_name,a_show_default_ui,a_value_argument){
return this$.execCommand(a_command_name,a_show_default_ui,a_value_argument);
});
/**
 * Method.
 * 
 *   The `web.Document` method exitFullscreen() requests that the
 *   on this document which is currently being presented in full-screen
 *   be taken out of full-screen mode, restoring the previous state
 *   the screen.
 * 
 *   `exitPromise = document.exitFullscreen();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen`
 */
web.Document.exit_fullscreen = (function web$Document$exit_fullscreen(this$){
return this$.exitFullscreen();
});
/**
 * Method.
 * 
 *   The exitPointerLock() method asynchronously releases a pointer
 *   previously requested through `web.Element.requestPointerLock`.
 * 
 *   `document.exitPointerLock();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/exitPointerLock`
 */
web.Document.exit_pointer_lock = (function web$Document$exit_pointer_lock(this$){
return this$.exitPointerLock();
});
/**
 * Method.
 * 
 *   The getAnimations() method of the `web.Document` interface returns
 *   array of all `web.Animation` objects currently in effect whose
 *   elements are descendants of the document. This array includes
 *   Animations, CSS Transitions, and Web Animations.
 * 
 *   `var allAnimations = Document.getAnimations();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getAnimations`
 */
web.Document.get_animations = (function web$Document$get_animations(this$){
return this$.getAnimations();
});
/**
 * Method.
 * 
 *   Returns a boxObject (x, y, width, height) for a specified element.
 * 
 *   `boxObject = document.getBoxObjectFor(element);
 * 
 * 
 *   boxObject is an nsIBoxObject.
 *   element is a `dom.DOMElement`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getBoxObjectFor`
 */
web.Document.get_box_object_for = (function web$Document$get_box_object_for(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47950 = arguments.length;
var i__42557__auto___47951 = (0);
while(true){
if((i__42557__auto___47951 < len__42556__auto___47950)){
args__42563__auto__.push((arguments[i__42557__auto___47951]));

var G__47952 = (i__42557__auto___47951 + (1));
i__42557__auto___47951 = G__47952;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.get_box_object_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.get_box_object_for.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getBoxObjectFor,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.get_box_object_for.cljs$lang$maxFixedArity = (1);

web.Document.get_box_object_for.cljs$lang$applyTo = (function (seq47948){
var G__47949 = cljs.core.first.call(null,seq47948);
var seq47948__$1 = cljs.core.next.call(null,seq47948);
return web.Document.get_box_object_for.cljs$core$IFn$_invoke$arity$variadic(G__47949,seq47948__$1);
});

/**
 * Method.
 * 
 *   The `web.Document` method getElementById() returns an `web.Element`
 *   representing the element whose `web.id` property matches the
 *   string. Since element IDs are required to be unique if specified,
 *   a useful way to get access to a specific element quickly.
 * 
 *   `var element = document.getElementById(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById`
 */
web.Document.get_element_by_id = (function web$Document$get_element_by_id(this$,id){
return this$.getElementById(id);
});
/**
 * Method.
 * 
 *   returns an array-like object of all child elements which have
 *   of the given class names.
 * 
 *   `var elements = document.getElementsByClassName(names); // or:
 *   var elements = rootElement.getElementsByClassName(names);
 * 
 * 
 *   elements is a live `html.HTMLCollection` of found elements.
 *   names is a string representing the list of class names to match; class names are separated by whitespace
 *   `web.getElementsByClassName` can be called on any element, not only on the `web.document`. The element on which it is called will be used as the root of the search.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName`
 */
web.Document.get_elements_by_class_name = (function web$Document$get_elements_by_class_name(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47955 = arguments.length;
var i__42557__auto___47956 = (0);
while(true){
if((i__42557__auto___47956 < len__42556__auto___47955)){
args__42563__auto__.push((arguments[i__42557__auto___47956]));

var G__47957 = (i__42557__auto___47956 + (1));
i__42557__auto___47956 = G__47957;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.get_elements_by_class_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.get_elements_by_class_name.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getElementsByClassName,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.get_elements_by_class_name.cljs$lang$maxFixedArity = (1);

web.Document.get_elements_by_class_name.cljs$lang$applyTo = (function (seq47953){
var G__47954 = cljs.core.first.call(null,seq47953);
var seq47953__$1 = cljs.core.next.call(null,seq47953);
return web.Document.get_elements_by_class_name.cljs$core$IFn$_invoke$arity$variadic(G__47954,seq47953__$1);
});

/**
 * Method.
 * 
 *   The getElementsByName() method of the `web.Document` object returns
 *   `web.NodeList` Collection of elements with a given `web.name`
 *   the document.
 * 
 *   `var elements = document.getElementsByName(name);
 * 
 * 
 *   elements is a live `web.NodeList` Collection, meaning it automatically updates as new elements with the same name are added to/removed from the document.
 *   name is the value of the name attribute of the element(s).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName`
 */
web.Document.get_elements_by_name = (function web$Document$get_elements_by_name(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47960 = arguments.length;
var i__42557__auto___47961 = (0);
while(true){
if((i__42557__auto___47961 < len__42556__auto___47960)){
args__42563__auto__.push((arguments[i__42557__auto___47961]));

var G__47962 = (i__42557__auto___47961 + (1));
i__42557__auto___47961 = G__47962;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.get_elements_by_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.get_elements_by_name.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getElementsByName,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.get_elements_by_name.cljs$lang$maxFixedArity = (1);

web.Document.get_elements_by_name.cljs$lang$applyTo = (function (seq47958){
var G__47959 = cljs.core.first.call(null,seq47958);
var seq47958__$1 = cljs.core.next.call(null,seq47958);
return web.Document.get_elements_by_name.cljs$core$IFn$_invoke$arity$variadic(G__47959,seq47958__$1);
});

/**
 * Method.
 * 
 *   returns an `html.HTMLCollection` of elements with the given tag
 * 
 *   `var elements = document.getElementsByTagName(name);
 * 
 * 
 *   elements is a live `html.HTMLCollection` (but see the note below) of found elements in the order they appear in the tree.
 *   name is a string representing the name of the elements. The special string \"*\" represents all elements.
 * 
 * 
 *   The latest W3C specification says elements is an HTMLCollection; however, this method returns a `web.NodeList` in WebKit browsers. See bug 14869 for details.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName`
 */
web.Document.get_elements_by_tag_name = (function web$Document$get_elements_by_tag_name(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47965 = arguments.length;
var i__42557__auto___47966 = (0);
while(true){
if((i__42557__auto___47966 < len__42556__auto___47965)){
args__42563__auto__.push((arguments[i__42557__auto___47966]));

var G__47967 = (i__42557__auto___47966 + (1));
i__42557__auto___47966 = G__47967;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.get_elements_by_tag_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.get_elements_by_tag_name.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getElementsByTagName,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.get_elements_by_tag_name.cljs$lang$maxFixedArity = (1);

web.Document.get_elements_by_tag_name.cljs$lang$applyTo = (function (seq47963){
var G__47964 = cljs.core.first.call(null,seq47963);
var seq47963__$1 = cljs.core.next.call(null,seq47963);
return web.Document.get_elements_by_tag_name.cljs$core$IFn$_invoke$arity$variadic(G__47964,seq47963__$1);
});

/**
 * Method.
 * 
 *   Returns a list of elements with the given tag name belonging
 *   the given namespace. The complete document is searched, including
 *   root node.
 * 
 *   `elements = document.getElementsByTagNameNS(namespace, name)
 * 
 * 
 *   elements is a live `web.NodeList` (but see the note below) of found elements in the order they appear in the tree.
 *   namespace is the namespace URI of elements to look for (see `web.element.namespaceURI`).
 *   name is either the local name of elements to look for or the special value *, which matches all elements (see `web.element.localName`).
 * 
 * 
 *   Note: While the W3C specification says elements is a NodeList, this method returns a `html.HTMLCollection` both in Gecko and Internet Explorer. Opera returns a NodeList, but with a namedItem method implemented, which makes it similar to a HTMLCollection. As of January 2012, only in WebKit browsers is the returned value a pure NodeList. See bug 14869 for details.
 * 
 *   Note: Currently parameters in this method are case-sensitive, but they were case-insensitive in Firefox 3.5 and before. See the developer release note for Firefox 3.6 and a note in Browser compatibility section in `web.Element.getElementsByTagNameNS` for details.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagNameNS`
 */
web.Document.get_elements_by_tag_name_ns = (function web$Document$get_elements_by_tag_name_ns(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47970 = arguments.length;
var i__42557__auto___47971 = (0);
while(true){
if((i__42557__auto___47971 < len__42556__auto___47970)){
args__42563__auto__.push((arguments[i__42557__auto___47971]));

var G__47972 = (i__42557__auto___47971 + (1));
i__42557__auto___47971 = G__47972;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.get_elements_by_tag_name_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.get_elements_by_tag_name_ns.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getElementsByTagNameNS,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.get_elements_by_tag_name_ns.cljs$lang$maxFixedArity = (1);

web.Document.get_elements_by_tag_name_ns.cljs$lang$applyTo = (function (seq47968){
var G__47969 = cljs.core.first.call(null,seq47968);
var seq47968__$1 = cljs.core.next.call(null,seq47968);
return web.Document.get_elements_by_tag_name_ns.cljs$core$IFn$_invoke$arity$variadic(G__47969,seq47968__$1);
});

/**
 * Method.
 * 
 *   The hasFocus() method of the `web.Document` interface returns
 *   `web.Boolean` value indicating whether the document or any element
 *   the document has focus. This method can be used to determine
 *   the active element in a document has focus.
 * 
 *   `var focused = document.hasFocus();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus`
 */
web.Document.has_focus = (function web$Document$has_focus(this$){
return this$.hasFocus();
});
/**
 * Method.
 * 
 *   The hasStorageAccess() method of the `web.Document` interface
 *   a `web.Promise` that resolves with a boolean value indicating
 *   the document has access to its first-party storage.
 * 
 *   `Promise<boolean> hasStorageAccess()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hasStorageAccess`
 */
web.Document.has_storage_access = (function web$Document$has_storage_access(this$){
return this$.hasStorageAccess();
});
/**
 * Method.
 * 
 *   The `web.Document` object's importNode() method creates a copy
 *   a `web.Node` or `web.DocumentFragment` from another document,
 *   be inserted into the current document later.
 * 
 *   `var node = document.importNode(externalNode, deep);
 * 
 * 
 *   node
 *   The copied node in the scope of the importing document. The new node's `web.Node.parentNode` is null, since it has not yet been inserted into the document tree.
 *   externalNode
 *   The external Node or DocumentFragment to import into the current document.
 *   deep
 *   A Boolean which controls whether or not to import the entire DOM subtree of the externalNode.
 * 
 *   If deep is set to true, then externalNode and all of its descendants are copied.
 *   If deep is set to false, then only externalNode is imported — the new node has no children.
 * 
 * 
 * 
 * 
 * 
 *   Note: In the DOM4 specification, deep was an optional argument with a default value of true.
 * 
 *   This default has changed in the latest spec — the new default value is false. Though it's still an optional argument, you should always provide the deep argument for backward and forward compatibility. With Gecko 28.0 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3), the console warns developers not to omit the argument. Starting with Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)), a shallow clone is defaulted instead of a deep clone.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode`
 */
web.Document.import_node = (function web$Document$import_node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47975 = arguments.length;
var i__42557__auto___47976 = (0);
while(true){
if((i__42557__auto___47976 < len__42556__auto___47975)){
args__42563__auto__.push((arguments[i__42557__auto___47976]));

var G__47977 = (i__42557__auto___47976 + (1));
i__42557__auto___47976 = G__47977;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.import_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.import_node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.importNode,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.import_node.cljs$lang$maxFixedArity = (1);

web.Document.import_node.cljs$lang$applyTo = (function (seq47973){
var G__47974 = cljs.core.first.call(null,seq47973);
var seq47973__$1 = cljs.core.next.call(null,seq47973);
return web.Document.import_node.cljs$core$IFn$_invoke$arity$variadic(G__47974,seq47973__$1);
});

/**
 * Method.
 * 
 *   The Document.mozSetImageElement() method changes the element
 *   used as the CSS background for a background with a given background
 *   ID.
 * 
 *   `document.mozSetImageElement(imageElementId, imageElement);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/mozSetImageElement`
 */
web.Document.moz_set_image_element = (function web$Document$moz_set_image_element(this$,image_element_id,image_element){
return this$.mozSetImageElement(image_element_id,image_element);
});
/**
 * Method.
 * 
 *   The Document.open() method opens a document for writing.
 * 
 *   `document.open();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/open`
 */
web.Document.open = (function web$Document$open(this$){
return this$.open();
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
web.Document.prepend = (function web$Document$prepend(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47980 = arguments.length;
var i__42557__auto___47981 = (0);
while(true){
if((i__42557__auto___47981 < len__42556__auto___47980)){
args__42563__auto__.push((arguments[i__42557__auto___47981]));

var G__47982 = (i__42557__auto___47981 + (1));
i__42557__auto___47981 = G__47982;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.prepend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.prepend,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.prepend.cljs$lang$maxFixedArity = (1);

web.Document.prepend.cljs$lang$applyTo = (function (seq47978){
var G__47979 = cljs.core.first.call(null,seq47978);
var seq47978__$1 = cljs.core.next.call(null,seq47978);
return web.Document.prepend.cljs$core$IFn$_invoke$arity$variadic(G__47979,seq47978__$1);
});

/**
 * Method.
 * 
 *   The Document.queryCommandEnabled() method reports whether or
 *   the specified editor command is enabled by the browser.
 * 
 *   `isEnabled = document.queryCommandEnabled(command);
 * 
 * 
 * 
 *   Parameters
 * 
 *   command
 *   The command for which to determine support.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandEnabled`
 */
web.Document.query_command_enabled = (function web$Document$query_command_enabled(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47985 = arguments.length;
var i__42557__auto___47986 = (0);
while(true){
if((i__42557__auto___47986 < len__42556__auto___47985)){
args__42563__auto__.push((arguments[i__42557__auto___47986]));

var G__47987 = (i__42557__auto___47986 + (1));
i__42557__auto___47986 = G__47987;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.query_command_enabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.query_command_enabled.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.queryCommandEnabled,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.query_command_enabled.cljs$lang$maxFixedArity = (1);

web.Document.query_command_enabled.cljs$lang$applyTo = (function (seq47983){
var G__47984 = cljs.core.first.call(null,seq47983);
var seq47983__$1 = cljs.core.next.call(null,seq47983);
return web.Document.query_command_enabled.cljs$core$IFn$_invoke$arity$variadic(G__47984,seq47983__$1);
});

/**
 * Method.
 * 
 *   The Document.queryCommandSupported() method reports whether or
 *   the specified editor command is supported by the browser.
 * 
 *   `isSupported = document.queryCommandSupported(command);
 * 
 * 
 * 
 *   Parameters
 * 
 *   command
 *   The command for which to determine support.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandSupported`
 */
web.Document.query_command_supported = (function web$Document$query_command_supported(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47990 = arguments.length;
var i__42557__auto___47991 = (0);
while(true){
if((i__42557__auto___47991 < len__42556__auto___47990)){
args__42563__auto__.push((arguments[i__42557__auto___47991]));

var G__47992 = (i__42557__auto___47991 + (1));
i__42557__auto___47991 = G__47992;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.query_command_supported.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.query_command_supported.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.queryCommandSupported,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.query_command_supported.cljs$lang$maxFixedArity = (1);

web.Document.query_command_supported.cljs$lang$applyTo = (function (seq47988){
var G__47989 = cljs.core.first.call(null,seq47988);
var seq47988__$1 = cljs.core.next.call(null,seq47988);
return web.Document.query_command_supported.cljs$core$IFn$_invoke$arity$variadic(G__47989,seq47988__$1);
});

/**
 * Method.
 * 
 *   The `web.ParentNode` mixin defines the querySelector() method
 *   returning an `web.Element` representing the first element matching
 *   specified group of selectors which are descendants of the object
 *   which the method was called.
 * 
 *   `element = parentNode.querySelector(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelector`
 */
web.Document.query_selector = (function web$Document$query_selector(this$,selectors){
return this$.querySelector(selectors);
});
/**
 * Method.
 * 
 *   The `web.Document` method querySelectorAll() returns a static
 *   live) `web.NodeList` representing a list of the document's elements
 *   match the specified group of selectors.
 * 
 *   `elementList = parentNode.querySelectorAll(selectors);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll`
 */
web.Document.query_selector_all = (function web$Document$query_selector_all(this$,selectors){
return this$.querySelectorAll(selectors);
});
/**
 * Method.
 * 
 *   The document.registerElement() method registers a new custom
 *   in the browser and returns a constructor for the new element.
 * 
 *   `var constructor = document.registerElement(tag-name, options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/registerElement`
 */
web.Document.register_element = (function web$Document$register_element(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47995 = arguments.length;
var i__42557__auto___47996 = (0);
while(true){
if((i__42557__auto___47996 < len__42556__auto___47995)){
args__42563__auto__.push((arguments[i__42557__auto___47996]));

var G__47997 = (i__42557__auto___47996 + (1));
i__42557__auto___47996 = G__47997;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.register_element.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.registerElement,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.register_element.cljs$lang$maxFixedArity = (1);

web.Document.register_element.cljs$lang$applyTo = (function (seq47993){
var G__47994 = cljs.core.first.call(null,seq47993);
var seq47993__$1 = cljs.core.next.call(null,seq47993);
return web.Document.register_element.cljs$core$IFn$_invoke$arity$variadic(G__47994,seq47993__$1);
});

/**
 * Method.
 * 
 *   The releaseCapture() method releases mouse capture if it's currently
 *   on an element within this document. Enabling mouse capture on
 *   element is done by calling `web.element.setCapture()`.
 * 
 *   `document.releaseCapture();
 * 
 *   Once mouse capture is released, mouse events will no longer all be directed to the element on which capture is enabled.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/releaseCapture`
 */
web.Document.release_capture = (function web$Document$release_capture(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48000 = arguments.length;
var i__42557__auto___48001 = (0);
while(true){
if((i__42557__auto___48001 < len__42556__auto___48000)){
args__42563__auto__.push((arguments[i__42557__auto___48001]));

var G__48002 = (i__42557__auto___48001 + (1));
i__42557__auto___48001 = G__48002;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.release_capture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.release_capture.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.releaseCapture,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.release_capture.cljs$lang$maxFixedArity = (1);

web.Document.release_capture.cljs$lang$applyTo = (function (seq47998){
var G__47999 = cljs.core.first.call(null,seq47998);
var seq47998__$1 = cljs.core.next.call(null,seq47998);
return web.Document.release_capture.cljs$core$IFn$_invoke$arity$variadic(G__47999,seq47998__$1);
});

/**
 * Method.
 * 
 *   The requestStorageAccess() method of the `web.Document` interface
 *   a `web.Promise` that resolves if the access to first-party storage
 *   granted, and rejects if access was denied.
 * 
 *   `Promise<void> requestStorageAccess()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess`
 */
web.Document.request_storage_access = (function web$Document$request_storage_access(this$){
return this$.requestStorageAccess();
});
/**
 * Method.
 * 
 *   The Document.write() method writes a string of text to a document
 *   opened by `web.document.open()`.
 * 
 *   `document.write(markup);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/write`
 */
web.Document.write = (function web$Document$write(this$,markup){
return this$.write(markup);
});
/**
 * Method.
 * 
 *   Writes a string of text followed by a newline character to a
 * 
 *   `document.writeln(line);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln`
 */
web.Document.writeln = (function web$Document$writeln(this$,line){
return this$.writeln(line);
});
/**
 * Method.
 * 
 *   The queryCommandState method will tell you if the current selection
 *   a certain `web.Document.execCommand()` command applied.
 * 
 *   `queryCommandState(String command)
 * 
 *   command is a command from `web.Document.execCommand()``
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandState`
 */
web.Document.query_command_state = (function web$Document$query_command_state(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48005 = arguments.length;
var i__42557__auto___48006 = (0);
while(true){
if((i__42557__auto___48006 < len__42556__auto___48005)){
args__42563__auto__.push((arguments[i__42557__auto___48006]));

var G__48007 = (i__42557__auto___48006 + (1));
i__42557__auto___48006 = G__48007;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.query_command_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.query_command_state.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.queryCommandState,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.query_command_state.cljs$lang$maxFixedArity = (1);

web.Document.query_command_state.cljs$lang$applyTo = (function (seq48003){
var G__48004 = cljs.core.first.call(null,seq48003);
var seq48003__$1 = cljs.core.next.call(null,seq48003);
return web.Document.query_command_state.cljs$core$IFn$_invoke$arity$variadic(G__48004,seq48003__$1);
});

/**
 * Method.
 * 
 *   The getSelection() property of the `web.DocumentOrShadowRoot`
 *   returns a `web.Selection` object representing the range of text
 *   by the user, or the current position of the caret.
 * 
 *   `var selection = documentOrShadowRootInstance.getSelection()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`
 */
web.Document.get_selection = (function web$Document$get_selection(this$){
return this$.getSelection();
});
/**
 * Method.
 * 
 *   The elementFromPoint() method—available on both the `web.Document`
 *   `web.ShadowRoot` objects—returns the topmost `web.Element` at
 *   specified coordinates (relative to the viewport).
 * 
 *   `var element = document.elementFromPoint(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint`
 */
web.Document.element_from_point = (function web$Document$element_from_point(this$,x,y){
return this$.elementFromPoint(x,y);
});
/**
 * Method.
 * 
 *   The elementsFromPoint() property of the `web.DocumentOrShadowRoot`
 *   returns an array of all elements at the specified coordinates
 *   to the viewport).
 * 
 *   `var elements = document.elementsFromPoint(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint`
 */
web.Document.elements_from_point = (function web$Document$elements_from_point(this$,x,y){
return this$.elementsFromPoint(x,y);
});
/**
 * Method.
 * 
 *   The caretPositionFromPoint() property of the `web.DocumentOrShadowRoot`
 *   returns a `web.CaretPosition` object, containing the DOM node,
 *   with the caret and caret's character offset within that node.
 * 
 *   `var caretPosition = document.caretPositionFromPoint(float x, float y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/caretPositionFromPoint`
 */
web.Document.caret_position_from_point = (function web$Document$caret_position_from_point(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48010 = arguments.length;
var i__42557__auto___48011 = (0);
while(true){
if((i__42557__auto___48011 < len__42556__auto___48010)){
args__42563__auto__.push((arguments[i__42557__auto___48011]));

var G__48012 = (i__42557__auto___48011 + (1));
i__42557__auto___48011 = G__48012;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Document.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Document.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.caretPositionFromPoint,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Document.caret_position_from_point.cljs$lang$maxFixedArity = (1);

web.Document.caret_position_from_point.cljs$lang$applyTo = (function (seq48008){
var G__48009 = cljs.core.first.call(null,seq48008);
var seq48008__$1 = cljs.core.next.call(null,seq48008);
return web.Document.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic(G__48009,seq48008__$1);
});

/**
 * Property.
 * 
 *   Returns or sets the color of an active link in the document body.
 *   link is active during the time between mousedown and mouseup
 * 
 *   `var color = document.alinkColor;
 *   document.alinkColor = color;
 * 
 *   color is a string containing the name of the color (e.g., blue, darkblue, etc.) or the hexadecimal value of the color (e.g., #0000FF)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/alinkColor`
 */
web.Document.alink_color = (function web$Document$alink_color(this$){
return this$.alinkColor();
});
/**
 * Property.
 * 
 *   Returns or sets the color of an active link in the document body.
 *   link is active during the time between mousedown and mouseup
 * 
 *   `var color = document.alinkColor;
 *   document.alinkColor = color;
 * 
 *   color is a string containing the name of the color (e.g., blue, darkblue, etc.) or the hexadecimal value of the color (e.g., #0000FF)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/alinkColor`
 */
web.Document.set_alink_color_BANG_ = (function web$Document$set_alink_color_BANG_(this$,val){
return (this$["alinkColor"] = val);
});
/**
 * Property.
 * 
 *   The `web.Document` interface's read-only all property returns
 *   `html.HTMLAllCollection` rooted at the document node. In other
 *   it returns the entire contents of the page.
 * 
 *   `var htmlAllCollection = document.all;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/all`
 */
web.Document.all = (function web$Document$all(this$){
return this$.all();
});
/**
 * Property.
 * 
 *   The `web.Document` interface's read-only all property returns
 *   `html.HTMLAllCollection` rooted at the document node. In other
 *   it returns the entire contents of the page.
 * 
 *   `var htmlAllCollection = document.all;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/all`
 */
web.Document.set_all_BANG_ = (function web$Document$set_all_BANG_(this$,val){
return (this$["all"] = val);
});
/**
 * Property.
 * 
 *   The anchors read-only property of the `web.Document` interface
 *   a list of all of the anchors in the document.
 * 
 *   `nodeList = document.anchors;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/anchors`
 */
web.Document.anchors = (function web$Document$anchors(this$){
return this$.anchors();
});
/**
 * Property.
 * 
 *   The anchors read-only property of the `web.Document` interface
 *   a list of all of the anchors in the document.
 * 
 *   `nodeList = document.anchors;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/anchors`
 */
web.Document.set_anchors_BANG_ = (function web$Document$set_anchors_BANG_(this$,val){
return (this$["anchors"] = val);
});
/**
 * Property.
 * 
 *   The applets property of the `web.Document` interface returns
 *   list of the applets within a document.
 * 
 *   `var nodeList = document.applets;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/applets`
 */
web.Document.applets = (function web$Document$applets(this$){
return this$.applets();
});
/**
 * Property.
 * 
 *   The applets property of the `web.Document` interface returns
 *   list of the applets within a document.
 * 
 *   `var nodeList = document.applets;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/applets`
 */
web.Document.set_applets_BANG_ = (function web$Document$set_applets_BANG_(this$,val){
return (this$["applets"] = val);
});
/**
 * Property.
 * 
 *   The deprecated bgColor property gets or sets the background color
 *   the current document.
 * 
 *   `color = document.bgColor
 *   document.bgColor =color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/bgColor`
 */
web.Document.bg_color = (function web$Document$bg_color(this$){
return this$.bgColor();
});
/**
 * Property.
 * 
 *   The deprecated bgColor property gets or sets the background color
 *   the current document.
 * 
 *   `color = document.bgColor
 *   document.bgColor =color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/bgColor`
 */
web.Document.set_bg_color_BANG_ = (function web$Document$set_bg_color_BANG_(this$,val){
return (this$["bgColor"] = val);
});
/**
 * Property.
 * 
 *   The Document.body property represents the `web.<body>` or `web.<frameset>`
 *   of the current document, or null if no such element exists.
 * 
 *   `var objRef = document.body;
 *   document.body = objRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/body`
 */
web.Document.body = (function web$Document$body(this$){
return this$.body();
});
/**
 * Property.
 * 
 *   The Document.body property represents the `web.<body>` or `web.<frameset>`
 *   of the current document, or null if no such element exists.
 * 
 *   `var objRef = document.body;
 *   document.body = objRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/body`
 */
web.Document.set_body_BANG_ = (function web$Document$set_body_BANG_(this$,val){
return (this$["body"] = val);
});
/**
 * Property.
 * 
 *   The Document.characterSet read-only property returns the character
 *   of the document that it's currently rendered with.
 * 
 *   `var string = document.characterSet;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/characterSet`
 */
web.Document.character_set = (function web$Document$character_set(this$){
return this$.characterSet();
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
web.Document.child_element_count = (function web$Document$child_element_count(this$){
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
web.Document.set_child_element_count_BANG_ = (function web$Document$set_child_element_count_BANG_(this$,val){
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
web.Document.children = (function web$Document$children(this$){
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
web.Document.set_children_BANG_ = (function web$Document$set_children_BANG_(this$,val){
return (this$["children"] = val);
});
/**
 * Property.
 * 
 *   The Document.compatMode property indicates whether the document
 *   rendered in Quirks mode or Standards mode.
 * 
 *   `mode = document.compatMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode`
 */
web.Document.compat_mode = (function web$Document$compat_mode(this$){
return this$.compatMode();
});
/**
 * Property.
 * 
 *   The Document.compatMode property indicates whether the document
 *   rendered in Quirks mode or Standards mode.
 * 
 *   `mode = document.compatMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode`
 */
web.Document.set_compat_mode_BANG_ = (function web$Document$set_compat_mode_BANG_(this$,val){
return (this$["compatMode"] = val);
});
/**
 * Property.
 * 
 *   The Document.contentType read-only property returns the MIME
 *   that the document is being rendered as. This may come from HTTP
 *   or other sources of MIME information, and might be affected by
 *   type conversions performed by either the browser or extensions.
 * 
 *   `contentType = document.contentType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/contentType`
 */
web.Document.content_type = (function web$Document$content_type(this$){
return this$.contentType();
});
/**
 * Property.
 * 
 *   The Document.currentScript property returns the `web.<script>`
 *   whose script is currently being processed and isn't a JavaScript
 *   for modules use instead import.meta.
 * 
 *   `var curScriptElement = document.currentScript;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript`
 */
web.Document.current_script = (function web$Document$current_script(this$){
return this$.currentScript();
});
/**
 * Property.
 * 
 *   The Document.currentScript property returns the `web.<script>`
 *   whose script is currently being processed and isn't a JavaScript
 *   for modules use instead import.meta.
 * 
 *   `var curScriptElement = document.currentScript;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript`
 */
web.Document.set_current_script_BANG_ = (function web$Document$set_current_script_BANG_(this$,val){
return (this$["currentScript"] = val);
});
/**
 * Property.
 * 
 *   In browsers, document.defaultView returns the `web.window` object
 *   with a document, or null if none is available.
 * 
 *   `var win = document.defaultView;
 * 
 *   This property is read-only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView`
 */
web.Document.default_view = (function web$Document$default_view(this$){
return this$.defaultView();
});
/**
 * Property.
 * 
 *   In browsers, document.defaultView returns the `web.window` object
 *   with a document, or null if none is available.
 * 
 *   `var win = document.defaultView;
 * 
 *   This property is read-only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView`
 */
web.Document.set_default_view_BANG_ = (function web$Document$set_default_view_BANG_(this$,val){
return (this$["defaultView"] = val);
});
/**
 * Property.
 * 
 *   document.designMode controls whether the entire document is editable.
 *   values are \"on\" and \"off\". According to the specification,
 *   property is meant to default to \"off\". Firefox follows this
 *   The earlier versions of Chrome and IE default to \"inherit\".
 *   in Chrome 43, the default is \"off\" and \"inherit\" is no longer
 *   In IE6-10, the value is capitalized.
 * 
 *   `var mode = document.designMode;
 *   document.designMode = \"on\" || \"off\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode`
 */
web.Document.design_mode = (function web$Document$design_mode(this$){
return this$.designMode();
});
/**
 * Property.
 * 
 *   document.designMode controls whether the entire document is editable.
 *   values are \"on\" and \"off\". According to the specification,
 *   property is meant to default to \"off\". Firefox follows this
 *   The earlier versions of Chrome and IE default to \"inherit\".
 *   in Chrome 43, the default is \"off\" and \"inherit\" is no longer
 *   In IE6-10, the value is capitalized.
 * 
 *   `var mode = document.designMode;
 *   document.designMode = \"on\" || \"off\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode`
 */
web.Document.set_design_mode_BANG_ = (function web$Document$set_design_mode_BANG_(this$,val){
return (this$["designMode"] = val);
});
/**
 * Property.
 * 
 *   The Document.dir property is a `dom.DOMString` representing the
 *   of the text of the document, whether left to right (default)
 *   right to left. Possible values are 'rtl', right to left, and
 *   left to right.
 * 
 *   `dirStr = document.dir;
 *   document.dir = dirStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dir`
 */
web.Document.dir = (function web$Document$dir(this$){
return this$.dir();
});
/**
 * Property.
 * 
 *   The Document.dir property is a `dom.DOMString` representing the
 *   of the text of the document, whether left to right (default)
 *   right to left. Possible values are 'rtl', right to left, and
 *   left to right.
 * 
 *   `dirStr = document.dir;
 *   document.dir = dirStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dir`
 */
web.Document.set_dir_BANG_ = (function web$Document$set_dir_BANG_(this$,val){
return (this$["dir"] = val);
});
/**
 * Property.
 * 
 *   Returns the Document Type Declaration (DTD) associated with current
 *   The returned object implements the `web.DocumentType` interface.
 *   `dom.DOMImplementation.createDocumentType()` to create a DocumentType.
 * 
 *   `doctype = document.doctype;
 * 
 * 
 *   doctype is a read-only property.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/doctype`
 */
web.Document.doctype = (function web$Document$doctype(this$){
return this$.doctype();
});
/**
 * Property.
 * 
 *   Returns the Document Type Declaration (DTD) associated with current
 *   The returned object implements the `web.DocumentType` interface.
 *   `dom.DOMImplementation.createDocumentType()` to create a DocumentType.
 * 
 *   `doctype = document.doctype;
 * 
 * 
 *   doctype is a read-only property.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/doctype`
 */
web.Document.set_doctype_BANG_ = (function web$Document$set_doctype_BANG_(this$,val){
return (this$["doctype"] = val);
});
/**
 * Property.
 * 
 *   Document.documentElement returns the `web.Element` that is the
 *   element of the `web.document` (for example, the `web.<html>`
 *   for HTML documents).
 * 
 *   `var element = document.documentElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement`
 */
web.Document.document_element = (function web$Document$document_element(this$){
return this$.documentElement();
});
/**
 * Property.
 * 
 *   Document.documentElement returns the `web.Element` that is the
 *   element of the `web.document` (for example, the `web.<html>`
 *   for HTML documents).
 * 
 *   `var element = document.documentElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement`
 */
web.Document.set_document_element_BANG_ = (function web$Document$set_document_element_BANG_(this$,val){
return (this$["documentElement"] = val);
});
/**
 * Property.
 * 
 *   The documentURI property of the `web.Document` interface returns
 *   document location as a string.
 * 
 *   `var string = document.documentURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURI`
 */
web.Document.document_uri = (function web$Document$document_uri(this$){
return this$.documentURI();
});
/**
 * Property.
 * 
 *   The documentURI property of the `web.Document` interface returns
 *   document location as a string.
 * 
 *   `var string = document.documentURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURI`
 */
web.Document.set_document_uri_BANG_ = (function web$Document$set_document_uri_BANG_(this$,val){
return (this$["documentURI"] = val);
});
/**
 * Property.
 * 
 *   The Document.documentURIObject read-only property returns an
 *   object representing the URI of the document.
 * 
 *   `var uri = document.documentURIObject;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURIObject`
 */
web.Document.document_uri_object = (function web$Document$document_uri_object(this$){
return this$.documentURIObject();
});
/**
 * Property.
 * 
 *   The Document.documentURIObject read-only property returns an
 *   object representing the URI of the document.
 * 
 *   `var uri = document.documentURIObject;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURIObject`
 */
web.Document.set_document_uri_object_BANG_ = (function web$Document$set_document_uri_object_BANG_(this$,val){
return (this$["documentURIObject"] = val);
});
/**
 * Property.
 * 
 *   The domain property of the `web.Document` interface gets/sets
 *   domain portion of the origin of the current document, as used
 *   the same origin policy.
 * 
 *   `var domainString = document.domain;
 *   document.domain = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domain`
 */
web.Document.domain = (function web$Document$domain(this$){
return this$.domain();
});
/**
 * Property.
 * 
 *   The domain property of the `web.Document` interface gets/sets
 *   domain portion of the origin of the current document, as used
 *   the same origin policy.
 * 
 *   `var domainString = document.domain;
 *   document.domain = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domain`
 */
web.Document.set_domain_BANG_ = (function web$Document$set_domain_BANG_(this$,val){
return (this$["domain"] = val);
});
/**
 * Property.
 * 
 *   This should return the DOMConfiguration for the document.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domConfig`
 */
web.Document.dom_config = (function web$Document$dom_config(this$){
return this$.domConfig();
});
/**
 * Property.
 * 
 *   This should return the DOMConfiguration for the document.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domConfig`
 */
web.Document.set_dom_config_BANG_ = (function web$Document$set_dom_config_BANG_(this$,val){
return (this$["domConfig"] = val);
});
/**
 * Property.
 * 
 *   The embeds read-only property of the `web.Document` interface
 *   a list of the embedded `web.<object>` elements within the current
 * 
 *   `nodeList = document.embeds`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/embeds`
 */
web.Document.embeds = (function web$Document$embeds(this$){
return this$.embeds();
});
/**
 * Property.
 * 
 *   The embeds read-only property of the `web.Document` interface
 *   a list of the embedded `web.<object>` elements within the current
 * 
 *   `nodeList = document.embeds`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/embeds`
 */
web.Document.set_embeds_BANG_ = (function web$Document$set_embeds_BANG_(this$,val){
return (this$["embeds"] = val);
});
/**
 * Property.
 * 
 *   fgColor gets/sets the foreground color, or text color, of the
 *   document.
 * 
 *   `var color = document.fgColor;
 *   document.fgColor = color;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fgColor`
 */
web.Document.fg_color = (function web$Document$fg_color(this$){
return this$.fgColor();
});
/**
 * Property.
 * 
 *   fgColor gets/sets the foreground color, or text color, of the
 *   document.
 * 
 *   `var color = document.fgColor;
 *   document.fgColor = color;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fgColor`
 */
web.Document.set_fg_color_BANG_ = (function web$Document$set_fg_color_BANG_(this$,val){
return (this$["fgColor"] = val);
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
web.Document.first_element_child = (function web$Document$first_element_child(this$){
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
web.Document.set_first_element_child_BANG_ = (function web$Document$set_first_element_child_BANG_(this$,val){
return (this$["firstElementChild"] = val);
});
/**
 * Property.
 * 
 *   The forms read-only property of the `web.Document` interface
 *   an `html.HTMLCollection` listing all the `web.<form>` elements
 *   in the document.
 * 
 *   `collection = document.forms;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/forms`
 */
web.Document.forms = (function web$Document$forms(this$){
return this$.forms();
});
/**
 * Property.
 * 
 *   The forms read-only property of the `web.Document` interface
 *   an `html.HTMLCollection` listing all the `web.<form>` elements
 *   in the document.
 * 
 *   `collection = document.forms;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/forms`
 */
web.Document.set_forms_BANG_ = (function web$Document$set_forms_BANG_(this$,val){
return (this$["forms"] = val);
});
/**
 * Property.
 * 
 *   The obsolete `web.Document` interface's fullscreen read-only
 *   reports whether or not the document is currently displaying content
 *   full-screen mode.
 * 
 *   `var isFullScreen = document.fullscreen;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreen`
 */
web.Document.fullscreen = (function web$Document$fullscreen(this$){
return this$.fullscreen();
});
/**
 * Property.
 * 
 *   The read-only fullscreenEnabled property on the `web.Document`
 *   indicates whether or not full-screen mode is available.
 * 
 *   `var isFullscreenAvailable = document.fullscreenEnabled;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled`
 */
web.Document.fullscreen_enabled = (function web$Document$fullscreen_enabled(this$){
return this$.fullscreenEnabled();
});
/**
 * Property.
 * 
 *   The head read-only property of the `web.Document` interface returns
 *   `web.<head>` element of the current document.
 * 
 *   `var objRef = document.head;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/head`
 */
web.Document.head = (function web$Document$head(this$){
return this$.head();
});
/**
 * Property.
 * 
 *   The head read-only property of the `web.Document` interface returns
 *   `web.<head>` element of the current document.
 * 
 *   `var objRef = document.head;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/head`
 */
web.Document.set_head_BANG_ = (function web$Document$set_head_BANG_(this$,val){
return (this$["head"] = val);
});
/**
 * Property.
 * 
 *   Returns the height of the `web.document` object. In most cases,
 *   is equal to the `web.<body>` element of the current document.
 * 
 *   `pixels = document.height`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/height`
 */
web.Document.height = (function web$Document$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   Returns the height of the `web.document` object. In most cases,
 *   is equal to the `web.<body>` element of the current document.
 * 
 *   `pixels = document.height`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/height`
 */
web.Document.set_height_BANG_ = (function web$Document$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The Document.hidden read-only property returns a Boolean value
 *   if the page is considered hidden or not.
 * 
 *   `var boolean = document.hidden`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden`
 */
web.Document.hidden = (function web$Document$hidden(this$){
return this$.hidden();
});
/**
 * Property.
 * 
 *   The images read-only property of the `web.Document` interface
 *   a collection of the images in the current HTML document.
 * 
 *   `var imageCollection = document.images;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/images`
 */
web.Document.images = (function web$Document$images(this$){
return this$.images();
});
/**
 * Property.
 * 
 *   The images read-only property of the `web.Document` interface
 *   a collection of the images in the current HTML document.
 * 
 *   `var imageCollection = document.images;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/images`
 */
web.Document.set_images_BANG_ = (function web$Document$set_images_BANG_(this$,val){
return (this$["images"] = val);
});
/**
 * Property.
 * 
 *   The Document.implementation property returns a `dom.DOMImplementation`
 *   associated with the current document.
 * 
 *   `DOMImpObj = document.implementation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/implementation`
 */
web.Document.implementation = (function web$Document$implementation(this$){
return this$.implementation();
});
/**
 * Property.
 * 
 *   The Document.implementation property returns a `dom.DOMImplementation`
 *   associated with the current document.
 * 
 *   `DOMImpObj = document.implementation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/implementation`
 */
web.Document.set_implementation_BANG_ = (function web$Document$set_implementation_BANG_(this$,val){
return (this$["implementation"] = val);
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
web.Document.last_element_child = (function web$Document$last_element_child(this$){
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
web.Document.set_last_element_child_BANG_ = (function web$Document$set_last_element_child_BANG_(this$,val){
return (this$["lastElementChild"] = val);
});
/**
 * Property.
 * 
 *   The lastModified property of the `web.Document` interface returns
 *   string containing the date and time on which the current document
 *   last modified.
 * 
 *   `var string = document.lastModified;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified`
 */
web.Document.last_modified = (function web$Document$last_modified(this$){
return this$.lastModified();
});
/**
 * Property.
 * 
 *   The lastModified property of the `web.Document` interface returns
 *   string containing the date and time on which the current document
 *   last modified.
 * 
 *   `var string = document.lastModified;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified`
 */
web.Document.set_last_modified_BANG_ = (function web$Document$set_last_modified_BANG_(this$,val){
return (this$["lastModified"] = val);
});
/**
 * Property.
 * 
 *   The Document.lastStyleSheetSet property returns the last enabled
 *   sheet set. This property's value changes whenever the `web.document.selectedStyleSheetSet`
 *   is changed.
 * 
 *   `var lastStyleSheetSet = document.lastStyleSheetSet
 * 
 *   On return, lastStyleSheetSet indicates the style sheet set that was most recently set. If the current style sheet set has not been changed by setting `web.document.selectedStyleSheetSet`, the returned value is null.
 * 
 *   Note: This value doesn't change when `web.document.enableStyleSheetsForSet()` is called.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lastStyleSheetSet`
 */
web.Document.last_style_sheet_set = (function web$Document$last_style_sheet_set(this$){
return this$.lastStyleSheetSet();
});
/**
 * Property.
 * 
 *   The Document.lastStyleSheetSet property returns the last enabled
 *   sheet set. This property's value changes whenever the `web.document.selectedStyleSheetSet`
 *   is changed.
 * 
 *   `var lastStyleSheetSet = document.lastStyleSheetSet
 * 
 *   On return, lastStyleSheetSet indicates the style sheet set that was most recently set. If the current style sheet set has not been changed by setting `web.document.selectedStyleSheetSet`, the returned value is null.
 * 
 *   Note: This value doesn't change when `web.document.enableStyleSheetsForSet()` is called.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lastStyleSheetSet`
 */
web.Document.set_last_style_sheet_set_BANG_ = (function web$Document$set_last_style_sheet_set_BANG_(this$,val){
return (this$["lastStyleSheetSet"] = val);
});
/**
 * Property.
 * 
 *   The Document.linkColor property gets/sets the color of links
 *   the document.
 * 
 *   `color = document.linkColor
 *   document.linkColor = color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/linkColor`
 */
web.Document.link_color = (function web$Document$link_color(this$){
return this$.linkColor();
});
/**
 * Property.
 * 
 *   The Document.linkColor property gets/sets the color of links
 *   the document.
 * 
 *   `color = document.linkColor
 *   document.linkColor = color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/linkColor`
 */
web.Document.set_link_color_BANG_ = (function web$Document$set_link_color_BANG_(this$,val){
return (this$["linkColor"] = val);
});
/**
 * Property.
 * 
 *   The links read-only property of the `web.Document` interface
 *   a collection of all `web.<area>` elements and `web.<a>` elements
 *   a document with a value for the href attribute.
 * 
 *   `nodeList = document.links`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/links`
 */
web.Document.links = (function web$Document$links(this$){
return this$.links();
});
/**
 * Property.
 * 
 *   The links read-only property of the `web.Document` interface
 *   a collection of all `web.<area>` elements and `web.<a>` elements
 *   a document with a value for the href attribute.
 * 
 *   `nodeList = document.links`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/links`
 */
web.Document.set_links_BANG_ = (function web$Document$set_links_BANG_(this$,val){
return (this$["links"] = val);
});
/**
 * Property.
 * 
 *   The Document.location read-only property returns a `web.Location`
 *   which contains information about the URL of the document and
 *   methods for changing that URL and loading another URL.
 * 
 *   `locationObj = document.location
 *   document.location = 'http://www.mozilla.org' // Equivalent to document.location.href = 'http://www.mozilla.org'`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/location`
 */
web.Document.location = (function web$Document$location(this$){
return this$.location();
});
/**
 * Property.
 * 
 *   The Document.mozSyntheticDocument property indicates whether
 *   not the document is a synthetic one; that is, a document representing
 *   standalone image, video, audio, or the like.
 * 
 *   `var isSynthetic = document.mozSyntheticDocument;
 * 
 *   On return, isSynthetic is true if the document is a synthetic one; otherwise it's false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/mozSyntheticDocument`
 */
web.Document.moz_synthetic_document = (function web$Document$moz_synthetic_document(this$){
return this$.mozSyntheticDocument();
});
/**
 * Property.
 * 
 *   The Document.mozSyntheticDocument property indicates whether
 *   not the document is a synthetic one; that is, a document representing
 *   standalone image, video, audio, or the like.
 * 
 *   `var isSynthetic = document.mozSyntheticDocument;
 * 
 *   On return, isSynthetic is true if the document is a synthetic one; otherwise it's false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/mozSyntheticDocument`
 */
web.Document.set_moz_synthetic_document_BANG_ = (function web$Document$set_moz_synthetic_document_BANG_(this$,val){
return (this$["mozSyntheticDocument"] = val);
});
/**
 * Property.
 * 
 *   The onabort property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing abort events sent to the window.
 * 
 *   `window.onabort = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`
 */
web.Document.onabort = (function web$Document$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   The onabort property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing abort events sent to the window.
 * 
 *   `window.onabort = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`
 */
web.Document.set_onabort_BANG_ = (function web$Document$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   The Document.onafterscriptexecute property references a function
 *   fires when a static `web.<script>` element finishes executing
 *   script. It does not fire if the element is added dynamically,
 *   as with `web.appendChild()`.
 * 
 *   `document.onafterscriptexecute = funcRef;
 * 
 *   funcRef is a function reference, called when the event is fired. The event's target attribute is set to the `web.<script>` element that just finished executing.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onafterscriptexecute`
 */
web.Document.onafterscriptexecute = (function web$Document$onafterscriptexecute(this$){
return this$.onafterscriptexecute();
});
/**
 * Property.
 * 
 *   The Document.onafterscriptexecute property references a function
 *   fires when a static `web.<script>` element finishes executing
 *   script. It does not fire if the element is added dynamically,
 *   as with `web.appendChild()`.
 * 
 *   `document.onafterscriptexecute = funcRef;
 * 
 *   funcRef is a function reference, called when the event is fired. The event's target attribute is set to the `web.<script>` element that just finished executing.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onafterscriptexecute`
 */
web.Document.set_onafterscriptexecute_BANG_ = (function web$Document$set_onafterscriptexecute_BANG_(this$,val){
return (this$["onafterscriptexecute"] = val);
});
/**
 * Property.
 * 
 *   The onanimationcancel property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationcancel events.
 * 
 *   `var animCancelHandler = target.onanimationcancel;
 * 
 *   target.onanimationcancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`
 */
web.Document.onanimationcancel = (function web$Document$onanimationcancel(this$){
return this$.onanimationcancel();
});
/**
 * Property.
 * 
 *   The onanimationcancel property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationcancel events.
 * 
 *   `var animCancelHandler = target.onanimationcancel;
 * 
 *   target.onanimationcancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`
 */
web.Document.set_onanimationcancel_BANG_ = (function web$Document$set_onanimationcancel_BANG_(this$,val){
return (this$["onanimationcancel"] = val);
});
/**
 * Property.
 * 
 *   The onanimationend property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationend events.
 * 
 *   `var animEndHandler = target.onanimationend;
 * 
 *   target.onanimationend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`
 */
web.Document.onanimationend = (function web$Document$onanimationend(this$){
return this$.onanimationend();
});
/**
 * Property.
 * 
 *   The onanimationend property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationend events.
 * 
 *   `var animEndHandler = target.onanimationend;
 * 
 *   target.onanimationend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`
 */
web.Document.set_onanimationend_BANG_ = (function web$Document$set_onanimationend_BANG_(this$,val){
return (this$["onanimationend"] = val);
});
/**
 * Property.
 * 
 *   The onanimationiteration property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationiteration events.
 * 
 *   `var animIterationHandler = target.onanimationiteration;
 * 
 *   target.onanimationiteration = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`
 */
web.Document.onanimationiteration = (function web$Document$onanimationiteration(this$){
return this$.onanimationiteration();
});
/**
 * Property.
 * 
 *   The onanimationiteration property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationiteration events.
 * 
 *   `var animIterationHandler = target.onanimationiteration;
 * 
 *   target.onanimationiteration = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`
 */
web.Document.set_onanimationiteration_BANG_ = (function web$Document$set_onanimationiteration_BANG_(this$,val){
return (this$["onanimationiteration"] = val);
});
/**
 * Property.
 * 
 *   The onauxclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing auxclick events.
 * 
 *   `target.onauxclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`
 */
web.Document.onauxclick = (function web$Document$onauxclick(this$){
return this$.onauxclick();
});
/**
 * Property.
 * 
 *   The onauxclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing auxclick events.
 * 
 *   `target.onauxclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`
 */
web.Document.set_onauxclick_BANG_ = (function web$Document$set_onauxclick_BANG_(this$,val){
return (this$["onauxclick"] = val);
});
/**
 * Property.
 * 
 *   Fired when the code in a `web.<script>` element declared in an
 *   document is about to start executing. Does not fire if the element
 *   added dynamically, eg with appendChild().
 * 
 *   `document.onbeforescriptexecute = funcRef;
 * 
 *   funcRef is a function reference, called when the event is fired. The event's target attribute is set to the script `web.Element` that is about to be executed.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onbeforescriptexecute`
 */
web.Document.onbeforescriptexecute = (function web$Document$onbeforescriptexecute(this$){
return this$.onbeforescriptexecute();
});
/**
 * Property.
 * 
 *   Fired when the code in a `web.<script>` element declared in an
 *   document is about to start executing. Does not fire if the element
 *   added dynamically, eg with appendChild().
 * 
 *   `document.onbeforescriptexecute = funcRef;
 * 
 *   funcRef is a function reference, called when the event is fired. The event's target attribute is set to the script `web.Element` that is about to be executed.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onbeforescriptexecute`
 */
web.Document.set_onbeforescriptexecute_BANG_ = (function web$Document$set_onbeforescriptexecute_BANG_(this$,val){
return (this$["onbeforescriptexecute"] = val);
});
/**
 * Property.
 * 
 *   The onblur property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing blur events. It's available
 *   `web.Element`, `web.Document`, and `web.Window`.
 * 
 *   `target.onblur = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`
 */
web.Document.onblur = (function web$Document$onblur(this$){
return this$.onblur();
});
/**
 * Property.
 * 
 *   The onblur property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing blur events. It's available
 *   `web.Element`, `web.Document`, and `web.Window`.
 * 
 *   `target.onblur = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`
 */
web.Document.set_onblur_BANG_ = (function web$Document$set_onblur_BANG_(this$,val){
return (this$["onblur"] = val);
});
/**
 * Property.
 * 
 *   The oncancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing cancel events sent to a
 *   element.
 * 
 *   `target.oncancel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`
 */
web.Document.oncancel = (function web$Document$oncancel(this$){
return this$.oncancel();
});
/**
 * Property.
 * 
 *   The oncancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing cancel events sent to a
 *   element.
 * 
 *   `target.oncancel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`
 */
web.Document.set_oncancel_BANG_ = (function web$Document$set_oncancel_BANG_(this$,val){
return (this$["oncancel"] = val);
});
/**
 * Property.
 * 
 *   The oncanplay property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing canplay events.
 * 
 *   `element.oncanplay = handlerFunction;
 *   var handlerFunction = element.oncanplay;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`
 */
web.Document.oncanplay = (function web$Document$oncanplay(this$){
return this$.oncanplay();
});
/**
 * Property.
 * 
 *   The oncanplay property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing canplay events.
 * 
 *   `element.oncanplay = handlerFunction;
 *   var handlerFunction = element.oncanplay;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`
 */
web.Document.set_oncanplay_BANG_ = (function web$Document$set_oncanplay_BANG_(this$,val){
return (this$["oncanplay"] = val);
});
/**
 * Property.
 * 
 *   The oncanplaythrough property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing canplaythrough events.
 * 
 *   `element.oncanplaythrough = handlerFunction;
 *   var handlerFunction = element.oncanplaythrough;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`
 */
web.Document.oncanplaythrough = (function web$Document$oncanplaythrough(this$){
return this$.oncanplaythrough();
});
/**
 * Property.
 * 
 *   The oncanplaythrough property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing canplaythrough events.
 * 
 *   `element.oncanplaythrough = handlerFunction;
 *   var handlerFunction = element.oncanplaythrough;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`
 */
web.Document.set_oncanplaythrough_BANG_ = (function web$Document$set_oncanplaythrough_BANG_(this$,val){
return (this$["oncanplaythrough"] = val);
});
/**
 * Property.
 * 
 *   The onchange property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing change events.
 * 
 *   `target.onchange = functionRef;
 * 
 *   functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`
 */
web.Document.onchange = (function web$Document$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The onchange property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing change events.
 * 
 *   `target.onchange = functionRef;
 * 
 *   functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`
 */
web.Document.set_onchange_BANG_ = (function web$Document$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The onclick property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing click events on a given element.
 * 
 *   `target.onclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`
 */
web.Document.onclick = (function web$Document$onclick(this$){
return this$.onclick();
});
/**
 * Property.
 * 
 *   The onclick property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing click events on a given element.
 * 
 *   `target.onclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`
 */
web.Document.set_onclick_BANG_ = (function web$Document$set_onclick_BANG_(this$,val){
return (this$["onclick"] = val);
});
/**
 * Property.
 * 
 *   The onclose property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing close events sent to a `web.<dialog>`
 * 
 *   `target.onclose = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`
 */
web.Document.onclose = (function web$Document$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The onclose property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing close events sent to a `web.<dialog>`
 * 
 *   `target.onclose = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`
 */
web.Document.set_onclose_BANG_ = (function web$Document$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The oncontextmenu property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes contextmenu events.
 * 
 *   `target.oncontextmenu = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`
 */
web.Document.oncontextmenu = (function web$Document$oncontextmenu(this$){
return this$.oncontextmenu();
});
/**
 * Property.
 * 
 *   The oncontextmenu property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes contextmenu events.
 * 
 *   `target.oncontextmenu = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`
 */
web.Document.set_oncontextmenu_BANG_ = (function web$Document$set_oncontextmenu_BANG_(this$,val){
return (this$["oncontextmenu"] = val);
});
/**
 * Property.
 * 
 *   The oncuechange property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing cuechange events.
 * 
 *   `element.oncuechange = handlerFunction;
 *   var handlerFunction = element.oncuechange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`
 */
web.Document.oncuechange = (function web$Document$oncuechange(this$){
return this$.oncuechange();
});
/**
 * Property.
 * 
 *   The oncuechange property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing cuechange events.
 * 
 *   `element.oncuechange = handlerFunction;
 *   var handlerFunction = element.oncuechange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`
 */
web.Document.set_oncuechange_BANG_ = (function web$Document$set_oncuechange_BANG_(this$,val){
return (this$["oncuechange"] = val);
});
/**
 * Property.
 * 
 *   The ondblclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes dblclick events on the given
 * 
 *   `target.ondblclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`
 */
web.Document.ondblclick = (function web$Document$ondblclick(this$){
return this$.ondblclick();
});
/**
 * Property.
 * 
 *   The ondblclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes dblclick events on the given
 * 
 *   `target.ondblclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`
 */
web.Document.set_ondblclick_BANG_ = (function web$Document$set_ondblclick_BANG_(this$,val){
return (this$["ondblclick"] = val);
});
/**
 * Property.
 * 
 *   The ondurationchange property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing durationchange events.
 * 
 *   `element.ondurationchange = handlerFunction;
 *   var handlerFunction = element.ondurationchange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`
 */
web.Document.ondurationchange = (function web$Document$ondurationchange(this$){
return this$.ondurationchange();
});
/**
 * Property.
 * 
 *   The ondurationchange property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing durationchange events.
 * 
 *   `element.ondurationchange = handlerFunction;
 *   var handlerFunction = element.ondurationchange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`
 */
web.Document.set_ondurationchange_BANG_ = (function web$Document$set_ondurationchange_BANG_(this$,val){
return (this$["ondurationchange"] = val);
});
/**
 * Property.
 * 
 *   The onended property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing ended events.
 * 
 *   `element.onended = handlerFunction;
 *   var handlerFunction = element.onended;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`
 */
web.Document.onended = (function web$Document$onended(this$){
return this$.onended();
});
/**
 * Property.
 * 
 *   The onended property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing ended events.
 * 
 *   `element.onended = handlerFunction;
 *   var handlerFunction = element.onended;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`
 */
web.Document.set_onended_BANG_ = (function web$Document$set_onended_BANG_(this$,val){
return (this$["onended"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes error events.
 * 
 *   `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`
 */
web.Document.onerror = (function web$Document$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes error events.
 * 
 *   `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`
 */
web.Document.set_onerror_BANG_ = (function web$Document$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onfocus property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes focus events on the given element.
 * 
 *   `target.onfocus = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`
 */
web.Document.onfocus = (function web$Document$onfocus(this$){
return this$.onfocus();
});
/**
 * Property.
 * 
 *   The onfocus property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes focus events on the given element.
 * 
 *   `target.onfocus = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`
 */
web.Document.set_onfocus_BANG_ = (function web$Document$set_onfocus_BANG_(this$,val){
return (this$["onfocus"] = val);
});
/**
 * Property.
 * 
 *   The `web.Document` interface's onfullscreenchange property is
 *   event handler for the fullscreenchange event that is fired immediately
 *   a document transitions into or out of full-screen mode.
 * 
 *   `targetDocument.onfullscreenchange = fullscreenChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenchange`
 */
web.Document.onfullscreenchange = (function web$Document$onfullscreenchange(this$){
return this$.onfullscreenchange();
});
/**
 * Property.
 * 
 *   The `web.Document` interface's onfullscreenchange property is
 *   event handler for the fullscreenchange event that is fired immediately
 *   a document transitions into or out of full-screen mode.
 * 
 *   `targetDocument.onfullscreenchange = fullscreenChangeHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenchange`
 */
web.Document.set_onfullscreenchange_BANG_ = (function web$Document$set_onfullscreenchange_BANG_(this$,val){
return (this$["onfullscreenchange"] = val);
});
/**
 * Property.
 * 
 *   The Document.onfullscreenerror property is an event handler for
 *   fullscreenerror event that is sent to the document when it fails
 *   transition into full-screen mode after a prior call to `web.Element.requestFullscreen()`.
 * 
 *   `targetDocument.onfullscreenerror = fullscreenErrorHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenerror`
 */
web.Document.onfullscreenerror = (function web$Document$onfullscreenerror(this$){
return this$.onfullscreenerror();
});
/**
 * Property.
 * 
 *   The Document.onfullscreenerror property is an event handler for
 *   fullscreenerror event that is sent to the document when it fails
 *   transition into full-screen mode after a prior call to `web.Element.requestFullscreen()`.
 * 
 *   `targetDocument.onfullscreenerror = fullscreenErrorHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenerror`
 */
web.Document.set_onfullscreenerror_BANG_ = (function web$Document$set_onfullscreenerror_BANG_(this$,val){
return (this$["onfullscreenerror"] = val);
});
/**
 * Property.
 * 
 *   The ongotpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes gotpointercapture events.
 * 
 *   `target.ongotpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`
 */
web.Document.ongotpointercapture = (function web$Document$ongotpointercapture(this$){
return this$.ongotpointercapture();
});
/**
 * Property.
 * 
 *   The ongotpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes gotpointercapture events.
 * 
 *   `target.ongotpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`
 */
web.Document.set_ongotpointercapture_BANG_ = (function web$Document$set_ongotpointercapture_BANG_(this$,val){
return (this$["ongotpointercapture"] = val);
});
/**
 * Property.
 * 
 *   The oninput property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes input events on the `web.<input>`,
 *   and `web.<textarea>` elements. It also handles these events on
 *   where `web.contenteditable` or `web.designMode` are turned on.
 * 
 *   `target.oninput = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`
 */
web.Document.oninput = (function web$Document$oninput(this$){
return this$.oninput();
});
/**
 * Property.
 * 
 *   The oninput property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes input events on the `web.<input>`,
 *   and `web.<textarea>` elements. It also handles these events on
 *   where `web.contenteditable` or `web.designMode` are turned on.
 * 
 *   `target.oninput = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`
 */
web.Document.set_oninput_BANG_ = (function web$Document$set_oninput_BANG_(this$,val){
return (this$["oninput"] = val);
});
/**
 * Property.
 * 
 *   The oninvalid property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes invalid events.
 * 
 *   `target.oninvalid = functionRef;
 *   var functionRef = target.oninvalid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`
 */
web.Document.oninvalid = (function web$Document$oninvalid(this$){
return this$.oninvalid();
});
/**
 * Property.
 * 
 *   The oninvalid property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes invalid events.
 * 
 *   `target.oninvalid = functionRef;
 *   var functionRef = target.oninvalid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`
 */
web.Document.set_oninvalid_BANG_ = (function web$Document$set_oninvalid_BANG_(this$,val){
return (this$["oninvalid"] = val);
});
/**
 * Property.
 * 
 *   The onkeydown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keydown events.
 * 
 *   `target.onkeydown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`
 */
web.Document.onkeydown = (function web$Document$onkeydown(this$){
return this$.onkeydown();
});
/**
 * Property.
 * 
 *   The onkeydown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keydown events.
 * 
 *   `target.onkeydown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`
 */
web.Document.set_onkeydown_BANG_ = (function web$Document$set_onkeydown_BANG_(this$,val){
return (this$["onkeydown"] = val);
});
/**
 * Property.
 * 
 *   The onkeypress property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keypress events.
 * 
 *   `target.onkeypress = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`
 */
web.Document.onkeypress = (function web$Document$onkeypress(this$){
return this$.onkeypress();
});
/**
 * Property.
 * 
 *   The onkeypress property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keypress events.
 * 
 *   `target.onkeypress = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`
 */
web.Document.set_onkeypress_BANG_ = (function web$Document$set_onkeypress_BANG_(this$,val){
return (this$["onkeypress"] = val);
});
/**
 * Property.
 * 
 *   The onkeyup property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes keyup events.
 * 
 *   `target.onkeyup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`
 */
web.Document.onkeyup = (function web$Document$onkeyup(this$){
return this$.onkeyup();
});
/**
 * Property.
 * 
 *   The onkeyup property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes keyup events.
 * 
 *   `target.onkeyup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`
 */
web.Document.set_onkeyup_BANG_ = (function web$Document$set_onkeyup_BANG_(this$,val){
return (this$["onkeyup"] = val);
});
/**
 * Property.
 * 
 *   The onload property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes load events on a `web.Window`,
 *   `web.<img>` element, etc.
 * 
 *   `target.onload = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`
 */
web.Document.onload = (function web$Document$onload(this$){
return this$.onload();
});
/**
 * Property.
 * 
 *   The onload property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes load events on a `web.Window`,
 *   `web.<img>` element, etc.
 * 
 *   `target.onload = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`
 */
web.Document.set_onload_BANG_ = (function web$Document$set_onload_BANG_(this$,val){
return (this$["onload"] = val);
});
/**
 * Property.
 * 
 *   The onloadeddata property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing loadeddata events.
 * 
 *   `element.onloadeddata = handlerFunction;
 *   var handlerFunction = element.onloadeddata;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`
 */
web.Document.onloadeddata = (function web$Document$onloadeddata(this$){
return this$.onloadeddata();
});
/**
 * Property.
 * 
 *   The onloadeddata property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing loadeddata events.
 * 
 *   `element.onloadeddata = handlerFunction;
 *   var handlerFunction = element.onloadeddata;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`
 */
web.Document.set_onloadeddata_BANG_ = (function web$Document$set_onloadeddata_BANG_(this$,val){
return (this$["onloadeddata"] = val);
});
/**
 * Property.
 * 
 *   The onloadedmetadata property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing loadedmetadata events.
 * 
 *   `element.onloadedmetadata = handlerFunction;
 *   var handlerFunction = element.onloadedmetadata;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`
 */
web.Document.onloadedmetadata = (function web$Document$onloadedmetadata(this$){
return this$.onloadedmetadata();
});
/**
 * Property.
 * 
 *   The onloadedmetadata property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing loadedmetadata events.
 * 
 *   `element.onloadedmetadata = handlerFunction;
 *   var handlerFunction = element.onloadedmetadata;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`
 */
web.Document.set_onloadedmetadata_BANG_ = (function web$Document$set_onloadedmetadata_BANG_(this$,val){
return (this$["onloadedmetadata"] = val);
});
/**
 * Property.
 * 
 *   The onloadend property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadend event is raised (when progress has stopped on the loading
 *   a resource.)
 * 
 *   `img.onloadend = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`
 */
web.Document.onloadend = (function web$Document$onloadend(this$){
return this$.onloadend();
});
/**
 * Property.
 * 
 *   The onloadend property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadend event is raised (when progress has stopped on the loading
 *   a resource.)
 * 
 *   `img.onloadend = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`
 */
web.Document.set_onloadend_BANG_ = (function web$Document$set_onloadend_BANG_(this$,val){
return (this$["onloadend"] = val);
});
/**
 * Property.
 * 
 *   The onloadstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadstart event is raised (when progress has begun on the loading
 *   a resource.)
 * 
 *   `img.onloadstart = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`
 */
web.Document.onloadstart = (function web$Document$onloadstart(this$){
return this$.onloadstart();
});
/**
 * Property.
 * 
 *   The onloadstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadstart event is raised (when progress has begun on the loading
 *   a resource.)
 * 
 *   `img.onloadstart = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`
 */
web.Document.set_onloadstart_BANG_ = (function web$Document$set_onloadstart_BANG_(this$,val){
return (this$["onloadstart"] = val);
});
/**
 * Property.
 * 
 *   The onlostpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes lostpointercapture events.
 * 
 *   `target.onlostpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`
 */
web.Document.onlostpointercapture = (function web$Document$onlostpointercapture(this$){
return this$.onlostpointercapture();
});
/**
 * Property.
 * 
 *   The onlostpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes lostpointercapture events.
 * 
 *   `target.onlostpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`
 */
web.Document.set_onlostpointercapture_BANG_ = (function web$Document$set_onlostpointercapture_BANG_(this$,val){
return (this$["onlostpointercapture"] = val);
});
/**
 * Property.
 * 
 *   The onmousedown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousedown events.
 * 
 *   `target.onmousedown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`
 */
web.Document.onmousedown = (function web$Document$onmousedown(this$){
return this$.onmousedown();
});
/**
 * Property.
 * 
 *   The onmousedown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousedown events.
 * 
 *   `target.onmousedown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`
 */
web.Document.set_onmousedown_BANG_ = (function web$Document$set_onmousedown_BANG_(this$,val){
return (this$["onmousedown"] = val);
});
/**
 * Property.
 * 
 *   The onmouseenter property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseenter events.
 * 
 *   `element.onmouseenter = handlerFunction;
 *   var handlerFunction = element.onmouseenter;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`
 */
web.Document.onmouseenter = (function web$Document$onmouseenter(this$){
return this$.onmouseenter();
});
/**
 * Property.
 * 
 *   The onmouseenter property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseenter events.
 * 
 *   `element.onmouseenter = handlerFunction;
 *   var handlerFunction = element.onmouseenter;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`
 */
web.Document.set_onmouseenter_BANG_ = (function web$Document$set_onmouseenter_BANG_(this$,val){
return (this$["onmouseenter"] = val);
});
/**
 * Property.
 * 
 *   The onmouseleave property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseleave events.
 * 
 *   `element.onmouseleave = handlerFunction;
 *   var handlerFunction = element.onmouseleave;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`
 */
web.Document.onmouseleave = (function web$Document$onmouseleave(this$){
return this$.onmouseleave();
});
/**
 * Property.
 * 
 *   The onmouseleave property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseleave events.
 * 
 *   `element.onmouseleave = handlerFunction;
 *   var handlerFunction = element.onmouseleave;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`
 */
web.Document.set_onmouseleave_BANG_ = (function web$Document$set_onmouseleave_BANG_(this$,val){
return (this$["onmouseleave"] = val);
});
/**
 * Property.
 * 
 *   The onmousemove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousemove events.
 * 
 *   `target.onmousemove = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`
 */
web.Document.onmousemove = (function web$Document$onmousemove(this$){
return this$.onmousemove();
});
/**
 * Property.
 * 
 *   The onmousemove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousemove events.
 * 
 *   `target.onmousemove = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`
 */
web.Document.set_onmousemove_BANG_ = (function web$Document$set_onmousemove_BANG_(this$,val){
return (this$["onmousemove"] = val);
});
/**
 * Property.
 * 
 *   The onmouseout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseout events.
 * 
 *   `element.onmouseout = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`
 */
web.Document.onmouseout = (function web$Document$onmouseout(this$){
return this$.onmouseout();
});
/**
 * Property.
 * 
 *   The onmouseout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseout events.
 * 
 *   `element.onmouseout = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`
 */
web.Document.set_onmouseout_BANG_ = (function web$Document$set_onmouseout_BANG_(this$,val){
return (this$["onmouseout"] = val);
});
/**
 * Property.
 * 
 *   The onmouseover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseover events.
 * 
 *   `element.onmouseover = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`
 */
web.Document.onmouseover = (function web$Document$onmouseover(this$){
return this$.onmouseover();
});
/**
 * Property.
 * 
 *   The onmouseover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseover events.
 * 
 *   `element.onmouseover = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`
 */
web.Document.set_onmouseover_BANG_ = (function web$Document$set_onmouseover_BANG_(this$,val){
return (this$["onmouseover"] = val);
});
/**
 * Property.
 * 
 *   The onmouseup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseup events.
 * 
 *   `target.onmouseup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`
 */
web.Document.onmouseup = (function web$Document$onmouseup(this$){
return this$.onmouseup();
});
/**
 * Property.
 * 
 *   The onmouseup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseup events.
 * 
 *   `target.onmouseup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`
 */
web.Document.set_onmouseup_BANG_ = (function web$Document$set_onmouseup_BANG_(this$,val){
return (this$["onmouseup"] = val);
});
/**
 * Property.
 * 
 *   The Document.onoffline event handler is called when an offline
 *   fired on the `web.<body>` element and bubbles up, when `web.navigator.onLine`
 *   changes and becomes false.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onoffline`
 */
web.Document.onoffline = (function web$Document$onoffline(this$){
return this$.onoffline();
});
/**
 * Property.
 * 
 *   The Document.onoffline event handler is called when an offline
 *   fired on the `web.<body>` element and bubbles up, when `web.navigator.onLine`
 *   changes and becomes false.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onoffline`
 */
web.Document.set_onoffline_BANG_ = (function web$Document$set_onoffline_BANG_(this$,val){
return (this$["onoffline"] = val);
});
/**
 * Property.
 * 
 *   The Document.online event is fired on the `web.<body>` of each
 *   when the browser switches between online and offline mode. Additionally,
 *   events bubble up from document.body, to document, ending at window.
 *   events are non-cancellable (you can't prevent the user from coming
 *   or going offline).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/ononline`
 */
web.Document.ononline = (function web$Document$ononline(this$){
return this$.ononline();
});
/**
 * Property.
 * 
 *   The Document.online event is fired on the `web.<body>` of each
 *   when the browser switches between online and offline mode. Additionally,
 *   events bubble up from document.body, to document, ending at window.
 *   events are non-cancellable (you can't prevent the user from coming
 *   or going offline).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/ononline`
 */
web.Document.set_ononline_BANG_ = (function web$Document$set_ononline_BANG_(this$,val){
return (this$["ononline"] = val);
});
/**
 * Property.
 * 
 *   The onpause property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing pause events.
 * 
 *   `element.onpause = handlerFunction;
 *   var handlerFunction = element.onpause;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`
 */
web.Document.onpause = (function web$Document$onpause(this$){
return this$.onpause();
});
/**
 * Property.
 * 
 *   The onpause property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing pause events.
 * 
 *   `element.onpause = handlerFunction;
 *   var handlerFunction = element.onpause;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`
 */
web.Document.set_onpause_BANG_ = (function web$Document$set_onpause_BANG_(this$,val){
return (this$["onpause"] = val);
});
/**
 * Property.
 * 
 *   The onplay property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing play events.
 * 
 *   `element.onplay = handlerFunction;
 *   var handlerFunction = element.onplay;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`
 */
web.Document.onplay = (function web$Document$onplay(this$){
return this$.onplay();
});
/**
 * Property.
 * 
 *   The onplay property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing play events.
 * 
 *   `element.onplay = handlerFunction;
 *   var handlerFunction = element.onplay;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`
 */
web.Document.set_onplay_BANG_ = (function web$Document$set_onplay_BANG_(this$,val){
return (this$["onplay"] = val);
});
/**
 * Property.
 * 
 *   The onpointercancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointercancel events.
 * 
 *   `targetElement.onpointercancel = cancelHandler;
 * 
 *   var cancelHandler = targetElement.onpointercancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`
 */
web.Document.onpointercancel = (function web$Document$onpointercancel(this$){
return this$.onpointercancel();
});
/**
 * Property.
 * 
 *   The onpointercancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointercancel events.
 * 
 *   `targetElement.onpointercancel = cancelHandler;
 * 
 *   var cancelHandler = targetElement.onpointercancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`
 */
web.Document.set_onpointercancel_BANG_ = (function web$Document$set_onpointercancel_BANG_(this$,val){
return (this$["onpointercancel"] = val);
});
/**
 * Property.
 * 
 *   The `web.GlobalEventHandlers` event handler onpointerdown is
 *   to specify the event handler for the pointerdown event, which
 *   fired when the pointing device is initially pressed. This event
 *   be sent to `web.Window`, `web.Document`, and `web.Element` objects.
 * 
 *   `target.onpointerdown = downHandler;
 * 
 *   var downHandler = target.onpointerdown;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`
 */
web.Document.onpointerdown = (function web$Document$onpointerdown(this$){
return this$.onpointerdown();
});
/**
 * Property.
 * 
 *   The `web.GlobalEventHandlers` event handler onpointerdown is
 *   to specify the event handler for the pointerdown event, which
 *   fired when the pointing device is initially pressed. This event
 *   be sent to `web.Window`, `web.Document`, and `web.Element` objects.
 * 
 *   `target.onpointerdown = downHandler;
 * 
 *   var downHandler = target.onpointerdown;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`
 */
web.Document.set_onpointerdown_BANG_ = (function web$Document$set_onpointerdown_BANG_(this$,val){
return (this$["onpointerdown"] = val);
});
/**
 * Property.
 * 
 *   The onpointerenter property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointerenter events.
 * 
 *   `targetElement.onpointerenter = enterHandler;
 * 
 *   var enterHandler = targetElement.onpointerenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`
 */
web.Document.onpointerenter = (function web$Document$onpointerenter(this$){
return this$.onpointerenter();
});
/**
 * Property.
 * 
 *   The onpointerenter property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointerenter events.
 * 
 *   `targetElement.onpointerenter = enterHandler;
 * 
 *   var enterHandler = targetElement.onpointerenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`
 */
web.Document.set_onpointerenter_BANG_ = (function web$Document$set_onpointerenter_BANG_(this$,val){
return (this$["onpointerenter"] = val);
});
/**
 * Property.
 * 
 *   The global event handler for the pointerleave event, which is
 *   to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
 *   its hit test area (for example, if the cursor exits an `web.Element`
 *   `web.Window`'s content area). This event is part of the Pointer
 *   API.
 * 
 *   `EventTarget.onpointerleave = leaveHandler;
 * 
 *   var leaveHandler = EventTarget.onpointerleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`
 */
web.Document.onpointerleave = (function web$Document$onpointerleave(this$){
return this$.onpointerleave();
});
/**
 * Property.
 * 
 *   The global event handler for the pointerleave event, which is
 *   to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
 *   its hit test area (for example, if the cursor exits an `web.Element`
 *   `web.Window`'s content area). This event is part of the Pointer
 *   API.
 * 
 *   `EventTarget.onpointerleave = leaveHandler;
 * 
 *   var leaveHandler = EventTarget.onpointerleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`
 */
web.Document.set_onpointerleave_BANG_ = (function web$Document$set_onpointerleave_BANG_(this$,val){
return (this$["onpointerleave"] = val);
});
/**
 * Property.
 * 
 *   The onpointermove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointermove events.
 * 
 *   `targetElement.onpointermove = moveHandler;
 * 
 *   var moveHandler = targetElement.onpointermove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`
 */
web.Document.onpointermove = (function web$Document$onpointermove(this$){
return this$.onpointermove();
});
/**
 * Property.
 * 
 *   The onpointermove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointermove events.
 * 
 *   `targetElement.onpointermove = moveHandler;
 * 
 *   var moveHandler = targetElement.onpointermove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`
 */
web.Document.set_onpointermove_BANG_ = (function web$Document$set_onpointermove_BANG_(this$,val){
return (this$["onpointermove"] = val);
});
/**
 * Property.
 * 
 *   The onpointerout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerout events.
 * 
 *   `targetElement.onpointerout = outHandler;
 * 
 *   var outHandler = targetElement.onpointerout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`
 */
web.Document.onpointerout = (function web$Document$onpointerout(this$){
return this$.onpointerout();
});
/**
 * Property.
 * 
 *   The onpointerout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerout events.
 * 
 *   `targetElement.onpointerout = outHandler;
 * 
 *   var outHandler = targetElement.onpointerout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`
 */
web.Document.set_onpointerout_BANG_ = (function web$Document$set_onpointerout_BANG_(this$,val){
return (this$["onpointerout"] = val);
});
/**
 * Property.
 * 
 *   The onpointerover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerover events.
 * 
 *   `targetElement.onpointerover = overHandler;
 * 
 *   var overHandler = targetElement.onpointerover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`
 */
web.Document.onpointerover = (function web$Document$onpointerover(this$){
return this$.onpointerover();
});
/**
 * Property.
 * 
 *   The onpointerover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerover events.
 * 
 *   `targetElement.onpointerover = overHandler;
 * 
 *   var overHandler = targetElement.onpointerover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`
 */
web.Document.set_onpointerover_BANG_ = (function web$Document$set_onpointerover_BANG_(this$,val){
return (this$["onpointerover"] = val);
});
/**
 * Property.
 * 
 *   The onpointerup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerup events.
 * 
 *   `targetElement.onpointerup = upHandler;
 * 
 *   var upHandler = targetElement.onpointerup;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`
 */
web.Document.onpointerup = (function web$Document$onpointerup(this$){
return this$.onpointerup();
});
/**
 * Property.
 * 
 *   The onpointerup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerup events.
 * 
 *   `targetElement.onpointerup = upHandler;
 * 
 *   var upHandler = targetElement.onpointerup;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`
 */
web.Document.set_onpointerup_BANG_ = (function web$Document$set_onpointerup_BANG_(this$,val){
return (this$["onpointerup"] = val);
});
/**
 * Property.
 * 
 *   The onreset property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes reset events.
 * 
 *   `target.onreset = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`
 */
web.Document.onreset = (function web$Document$onreset(this$){
return this$.onreset();
});
/**
 * Property.
 * 
 *   The onreset property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes reset events.
 * 
 *   `target.onreset = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`
 */
web.Document.set_onreset_BANG_ = (function web$Document$set_onreset_BANG_(this$,val){
return (this$["onreset"] = val);
});
/**
 * Property.
 * 
 *   The onresize property of the `web.GlobalEventHandlers` interface
 *   an `web.EventHandler` that processes resize events.
 * 
 *   `window.onresize = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`
 */
web.Document.onresize = (function web$Document$onresize(this$){
return this$.onresize();
});
/**
 * Property.
 * 
 *   The onresize property of the `web.GlobalEventHandlers` interface
 *   an `web.EventHandler` that processes resize events.
 * 
 *   `window.onresize = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`
 */
web.Document.set_onresize_BANG_ = (function web$Document$set_onresize_BANG_(this$,val){
return (this$["onresize"] = val);
});
/**
 * Property.
 * 
 *   The onscroll property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes scroll events.
 * 
 *   `target.onscroll = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`
 */
web.Document.onscroll = (function web$Document$onscroll(this$){
return this$.onscroll();
});
/**
 * Property.
 * 
 *   The onscroll property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes scroll events.
 * 
 *   `target.onscroll = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`
 */
web.Document.set_onscroll_BANG_ = (function web$Document$set_onscroll_BANG_(this$,val){
return (this$["onscroll"] = val);
});
/**
 * Property.
 * 
 *   The onselect property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes `web.select`.
 * 
 *   `target.onselect = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`
 */
web.Document.onselect = (function web$Document$onselect(this$){
return this$.onselect();
});
/**
 * Property.
 * 
 *   The onselect property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes `web.select`.
 * 
 *   `target.onselect = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`
 */
web.Document.set_onselect_BANG_ = (function web$Document$set_onselect_BANG_(this$,val){
return (this$["onselect"] = val);
});
/**
 * Property.
 * 
 *   The onselectionchange property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes selectionchange events.
 * 
 *   `object.onselectionchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`
 */
web.Document.onselectionchange = (function web$Document$onselectionchange(this$){
return this$.onselectionchange();
});
/**
 * Property.
 * 
 *   The onselectionchange property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes selectionchange events.
 * 
 *   `object.onselectionchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`
 */
web.Document.set_onselectionchange_BANG_ = (function web$Document$set_onselectionchange_BANG_(this$,val){
return (this$["onselectionchange"] = val);
});
/**
 * Property.
 * 
 *   The onselectstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes selectstart events.
 * 
 *   `object.onselectstart = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`
 */
web.Document.onselectstart = (function web$Document$onselectstart(this$){
return this$.onselectstart();
});
/**
 * Property.
 * 
 *   The onselectstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes selectstart events.
 * 
 *   `object.onselectstart = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`
 */
web.Document.set_onselectstart_BANG_ = (function web$Document$set_onselectstart_BANG_(this$,val){
return (this$["onselectstart"] = val);
});
/**
 * Property.
 * 
 *   The onsubmit property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes submit events.
 * 
 *   `target.onsubmit = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`
 */
web.Document.onsubmit = (function web$Document$onsubmit(this$){
return this$.onsubmit();
});
/**
 * Property.
 * 
 *   The onsubmit property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes submit events.
 * 
 *   `target.onsubmit = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`
 */
web.Document.set_onsubmit_BANG_ = (function web$Document$set_onsubmit_BANG_(this$,val){
return (this$["onsubmit"] = val);
});
/**
 * Property.
 * 
 *   The ontouchcancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchcancel events.
 * 
 *   `var cancelHandler = someElement.ontouchcancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`
 */
web.Document.ontouchcancel = (function web$Document$ontouchcancel(this$){
return this$.ontouchcancel();
});
/**
 * Property.
 * 
 *   The ontouchcancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchcancel events.
 * 
 *   `var cancelHandler = someElement.ontouchcancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`
 */
web.Document.set_ontouchcancel_BANG_ = (function web$Document$set_ontouchcancel_BANG_(this$,val){
return (this$["ontouchcancel"] = val);
});
/**
 * Property.
 * 
 *   The ontouchstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchstart events.
 * 
 *   `var startHandler = someElement.ontouchstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`
 */
web.Document.ontouchstart = (function web$Document$ontouchstart(this$){
return this$.ontouchstart();
});
/**
 * Property.
 * 
 *   The ontouchstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchstart events.
 * 
 *   `var startHandler = someElement.ontouchstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`
 */
web.Document.set_ontouchstart_BANG_ = (function web$Document$set_ontouchstart_BANG_(this$,val){
return (this$["ontouchstart"] = val);
});
/**
 * Property.
 * 
 *   The ontransitioncancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitioncancel events.
 * 
 *   `var transitionCancelHandler = target.ontransitioncancel;
 * 
 *   target.ontransitioncancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`
 */
web.Document.ontransitioncancel = (function web$Document$ontransitioncancel(this$){
return this$.ontransitioncancel();
});
/**
 * Property.
 * 
 *   The ontransitioncancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitioncancel events.
 * 
 *   `var transitionCancelHandler = target.ontransitioncancel;
 * 
 *   target.ontransitioncancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`
 */
web.Document.set_ontransitioncancel_BANG_ = (function web$Document$set_ontransitioncancel_BANG_(this$,val){
return (this$["ontransitioncancel"] = val);
});
/**
 * Property.
 * 
 *   The ontransitionend property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitionend events.
 * 
 *   `var transitionEndHandler = target.ontransitionend;
 * 
 *   target.ontransitionend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`
 */
web.Document.ontransitionend = (function web$Document$ontransitionend(this$){
return this$.ontransitionend();
});
/**
 * Property.
 * 
 *   The ontransitionend property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitionend events.
 * 
 *   `var transitionEndHandler = target.ontransitionend;
 * 
 *   target.ontransitionend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`
 */
web.Document.set_ontransitionend_BANG_ = (function web$Document$set_ontransitionend_BANG_(this$,val){
return (this$["ontransitionend"] = val);
});
/**
 * Property.
 * 
 *   The Document.onvisibilitychange property represents the event
 *   that is called when a visibilitychange event reaches this object.
 * 
 *   `obj.onvisibilitychange = function;
 * 
 * 
 *   function is the name of a user-defined function, without the () suffix or any parameters, or an anonymous function declaration.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onvisibilitychange`
 */
web.Document.onvisibilitychange = (function web$Document$onvisibilitychange(this$){
return this$.onvisibilitychange();
});
/**
 * Property.
 * 
 *   The Document.onvisibilitychange property represents the event
 *   that is called when a visibilitychange event reaches this object.
 * 
 *   `obj.onvisibilitychange = function;
 * 
 * 
 *   function is the name of a user-defined function, without the () suffix or any parameters, or an anonymous function declaration.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onvisibilitychange`
 */
web.Document.set_onvisibilitychange_BANG_ = (function web$Document$set_onvisibilitychange_BANG_(this$,val){
return (this$["onvisibilitychange"] = val);
});
/**
 * Property.
 * 
 *   The onwheel property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes wheel events.
 * 
 *   `target.onwheel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`
 */
web.Document.onwheel = (function web$Document$onwheel(this$){
return this$.onwheel();
});
/**
 * Property.
 * 
 *   The onwheel property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes wheel events.
 * 
 *   `target.onwheel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`
 */
web.Document.set_onwheel_BANG_ = (function web$Document$set_onwheel_BANG_(this$,val){
return (this$["onwheel"] = val);
});
/**
 * Property.
 * 
 *   The Document.origin read-only property returns the document's
 *   In most cases, this property is equivalent to document.defaultView.location.origin.
 * 
 *   `var origin = document.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/origin`
 */
web.Document.origin = (function web$Document$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The plugins read-only property of the `web.Document` interface
 *   an `html.HTMLCollection` object containing one or more `html.HTMLEmbedElement`s
 *   the `web.<embed>` elements in the current document.
 * 
 *   `embedArrayObj = document.plugins`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/plugins`
 */
web.Document.plugins = (function web$Document$plugins(this$){
return this$.plugins();
});
/**
 * Property.
 * 
 *   The plugins read-only property of the `web.Document` interface
 *   an `html.HTMLCollection` object containing one or more `html.HTMLEmbedElement`s
 *   the `web.<embed>` elements in the current document.
 * 
 *   `embedArrayObj = document.plugins`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/plugins`
 */
web.Document.set_plugins_BANG_ = (function web$Document$set_plugins_BANG_(this$,val){
return (this$["plugins"] = val);
});
/**
 * Property.
 * 
 *   When a popup attached via the popup or context attributes is
 *   the XUL document's popupNode property is set to the node that
 *   clicked on. This will be the target of the mouse event that activated
 *   popup. If the popup was opened via the keyboard, the popup node
 *   be set to null. Typically, this property will be checked during
 *   popupshowing event handler for a context menu to initialize the
 *   based on the context.
 * 
 *   `var node = document.popupNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/popupNode`
 */
web.Document.popup_node = (function web$Document$popup_node(this$){
return this$.popupNode();
});
/**
 * Property.
 * 
 *   When a popup attached via the popup or context attributes is
 *   the XUL document's popupNode property is set to the node that
 *   clicked on. This will be the target of the mouse event that activated
 *   popup. If the popup was opened via the keyboard, the popup node
 *   be set to null. Typically, this property will be checked during
 *   popupshowing event handler for a context menu to initialize the
 *   based on the context.
 * 
 *   `var node = document.popupNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/popupNode`
 */
web.Document.set_popup_node_BANG_ = (function web$Document$set_popup_node_BANG_(this$,val){
return (this$["popupNode"] = val);
});
/**
 * Property.
 * 
 *   The preferredStyleSheetSet property returns the preferred style
 *   set as set by the page author.
 * 
 *   `preferredStyleSheetSet = document.preferredStyleSheetSet
 * 
 *   On return, preferredStyleSheetSet indicates the author's preferred style sheet set. This is determined from the order of style sheet declarations and the Default-Style HTTP header.
 * 
 *   If there isn't a preferred style sheet set defined by the author, the empty string (\"\") is returned.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/preferredStyleSheetSet`
 */
web.Document.preferred_style_sheet_set = (function web$Document$preferred_style_sheet_set(this$){
return this$.preferredStyleSheetSet();
});
/**
 * Property.
 * 
 *   The preferredStyleSheetSet property returns the preferred style
 *   set as set by the page author.
 * 
 *   `preferredStyleSheetSet = document.preferredStyleSheetSet
 * 
 *   On return, preferredStyleSheetSet indicates the author's preferred style sheet set. This is determined from the order of style sheet declarations and the Default-Style HTTP header.
 * 
 *   If there isn't a preferred style sheet set defined by the author, the empty string (\"\") is returned.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/preferredStyleSheetSet`
 */
web.Document.set_preferred_style_sheet_set_BANG_ = (function web$Document$set_preferred_style_sheet_set_BANG_(this$,val){
return (this$["preferredStyleSheetSet"] = val);
});
/**
 * Property.
 * 
 *   The Document.readyState property describes the loading state
 *   the `web.document`.
 * 
 *   `var string = document.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState`
 */
web.Document.ready_state = (function web$Document$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The Document.readyState property describes the loading state
 *   the `web.document`.
 * 
 *   `var string = document.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState`
 */
web.Document.set_ready_state_BANG_ = (function web$Document$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   The Document.referrer property returns the URI of the page that
 *   to this page.
 * 
 *   `var referrer = document.referrer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer`
 */
web.Document.referrer = (function web$Document$referrer(this$){
return this$.referrer();
});
/**
 * Property.
 * 
 *   The Document.referrer property returns the URI of the page that
 *   to this page.
 * 
 *   `var referrer = document.referrer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer`
 */
web.Document.set_referrer_BANG_ = (function web$Document$set_referrer_BANG_(this$,val){
return (this$["referrer"] = val);
});
/**
 * Property.
 * 
 *   The scripts property of the `web.Document` interface returns
 *   list of the `web.<script>` elements in the document. The returned
 *   is an `html.HTMLCollection`.
 * 
 *   `var scriptList = document.scripts;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scripts`
 */
web.Document.scripts = (function web$Document$scripts(this$){
return this$.scripts();
});
/**
 * Property.
 * 
 *   The scripts property of the `web.Document` interface returns
 *   list of the `web.<script>` elements in the document. The returned
 *   is an `html.HTMLCollection`.
 * 
 *   `var scriptList = document.scripts;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scripts`
 */
web.Document.set_scripts_BANG_ = (function web$Document$set_scripts_BANG_(this$,val){
return (this$["scripts"] = val);
});
/**
 * Property.
 * 
 *   The scrollingElement read-only property of the `web.Document`
 *   returns a reference to the `web.Element` that scrolls the document.
 *   standards mode, this is the root element of the document, `web.document.documentElement`.
 * 
 *   `var element = document.scrollingElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement`
 */
web.Document.scrolling_element = (function web$Document$scrolling_element(this$){
return this$.scrollingElement();
});
/**
 * Property.
 * 
 *   The scrollingElement read-only property of the `web.Document`
 *   returns a reference to the `web.Element` that scrolls the document.
 *   standards mode, this is the root element of the document, `web.document.documentElement`.
 * 
 *   `var element = document.scrollingElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement`
 */
web.Document.set_scrolling_element_BANG_ = (function web$Document$set_scrolling_element_BANG_(this$,val){
return (this$["scrollingElement"] = val);
});
/**
 * Property.
 * 
 *   The selectedStyleSheetSet property indicates the name of the
 *   sheet set that's currently in use.
 * 
 *   `currentStyleSheetSet = document.selectedStyleSheetSet;
 * 
 *   document.selectedStyleSheet = newStyleSheetSet;
 * 
 *   On return, currentStyleSheetSet indicates the name of the style sheet set currently in use. You can also set the current style sheet set using this property.
 * 
 *   Setting the value of this property is equivalent to calling `web.document.enableStyleSheetsForSet()` with the value of currentStyleSheetSet, then setting the value of lastStyleSheetSet to that value as well.
 * 
 *   Note: This attribute's value is live; directly changing the disabled attribute on style sheets will affect the value of this attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectedStyleSheetSet`
 */
web.Document.selected_style_sheet_set = (function web$Document$selected_style_sheet_set(this$){
return this$.selectedStyleSheetSet();
});
/**
 * Property.
 * 
 *   The selectedStyleSheetSet property indicates the name of the
 *   sheet set that's currently in use.
 * 
 *   `currentStyleSheetSet = document.selectedStyleSheetSet;
 * 
 *   document.selectedStyleSheet = newStyleSheetSet;
 * 
 *   On return, currentStyleSheetSet indicates the name of the style sheet set currently in use. You can also set the current style sheet set using this property.
 * 
 *   Setting the value of this property is equivalent to calling `web.document.enableStyleSheetsForSet()` with the value of currentStyleSheetSet, then setting the value of lastStyleSheetSet to that value as well.
 * 
 *   Note: This attribute's value is live; directly changing the disabled attribute on style sheets will affect the value of this attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectedStyleSheetSet`
 */
web.Document.set_selected_style_sheet_set_BANG_ = (function web$Document$set_selected_style_sheet_set_BANG_(this$,val){
return (this$["selectedStyleSheetSet"] = val);
});
/**
 * Property.
 * 
 *   The styleSheetSets read-only property returns a live list of
 *   of the currently-available style sheet sets.
 * 
 *   `var sets = document.styleSheetSets;
 * 
 *   On return, sets is a list of style sheet sets that are available.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheetSets`
 */
web.Document.style_sheet_sets = (function web$Document$style_sheet_sets(this$){
return this$.styleSheetSets();
});
/**
 * Property.
 * 
 *   The styleSheetSets read-only property returns a live list of
 *   of the currently-available style sheet sets.
 * 
 *   `var sets = document.styleSheetSets;
 * 
 *   On return, sets is a list of style sheet sets that are available.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheetSets`
 */
web.Document.set_style_sheet_sets_BANG_ = (function web$Document$set_style_sheet_sets_BANG_(this$,val){
return (this$["styleSheetSets"] = val);
});
/**
 * Property.
 * 
 *   The timeline readonly property of the `web.Document` interface
 *   the default timeline of the current document. This timeline is
 *   special instance of `web.DocumentTimeline` that is automatically
 *   on page load.
 * 
 *   `var pageTimeline = document.timeline;
 *   var thisMoment = pageTimeline.currentTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/timeline`
 */
web.Document.timeline = (function web$Document$timeline(this$){
return this$.timeline();
});
/**
 * Property.
 * 
 *   The timeline readonly property of the `web.Document` interface
 *   the default timeline of the current document. This timeline is
 *   special instance of `web.DocumentTimeline` that is automatically
 *   on page load.
 * 
 *   `var pageTimeline = document.timeline;
 *   var thisMoment = pageTimeline.currentTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/timeline`
 */
web.Document.set_timeline_BANG_ = (function web$Document$set_timeline_BANG_(this$,val){
return (this$["timeline"] = val);
});
/**
 * Property.
 * 
 *   The document.title property gets or sets the current title of
 *   document.
 * 
 *   `var docTitle = document.title;
 * 
 *   docTitle is a string containing the document's title. If the title was overridden by setting document.title, it contains that value. Otherwise, it contains the title specified in the markup (see the Notes below).
 * 
 * 
 * 
 *   document.title = newTitle;
 * 
 *   newTitle is the new title of the document. The assignment affects the return value of document.title, the title displayed for the document (e.g. in the titlebar of the window or tab), and it also affects the DOM of the document (e.g. the content of the <title> element in an HTML document).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/title`
 */
web.Document.title = (function web$Document$title(this$){
return this$.title();
});
/**
 * Property.
 * 
 *   The document.title property gets or sets the current title of
 *   document.
 * 
 *   `var docTitle = document.title;
 * 
 *   docTitle is a string containing the document's title. If the title was overridden by setting document.title, it contains that value. Otherwise, it contains the title specified in the markup (see the Notes below).
 * 
 * 
 * 
 *   document.title = newTitle;
 * 
 *   newTitle is the new title of the document. The assignment affects the return value of document.title, the title displayed for the document (e.g. in the titlebar of the window or tab), and it also affects the DOM of the document (e.g. the content of the <title> element in an HTML document).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/title`
 */
web.Document.set_title_BANG_ = (function web$Document$set_title_BANG_(this$,val){
return (this$["title"] = val);
});
/**
 * Property.
 * 
 *   The Document.tooltipNode property returns the node which is the
 *   of the current <xul:tooltip>.
 * 
 *   `document.tooltipNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/tooltipNode`
 */
web.Document.tooltip_node = (function web$Document$tooltip_node(this$){
return this$.tooltipNode();
});
/**
 * Property.
 * 
 *   The Document.tooltipNode property returns the node which is the
 *   of the current <xul:tooltip>.
 * 
 *   `document.tooltipNode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/tooltipNode`
 */
web.Document.set_tooltip_node_BANG_ = (function web$Document$set_tooltip_node_BANG_(this$,val){
return (this$["tooltipNode"] = val);
});
/**
 * Property.
 * 
 *   The URL read-only property of the `web.Document` interface returns
 *   document location as a string.
 * 
 *   `var string = document.URL`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/URL`
 */
web.Document.url = (function web$Document$url(this$){
return this$.URL();
});
/**
 * Property.
 * 
 *   The URL read-only property of the `web.Document` interface returns
 *   document location as a string.
 * 
 *   `var string = document.URL`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/URL`
 */
web.Document.set_url_BANG_ = (function web$Document$set_url_BANG_(this$,val){
return (this$["URL"] = val);
});
/**
 * Property.
 * 
 *   The Document.visibilityState read-only property returns the visibility
 *   the `web.document`, that is in which context this element is
 *   visible. It is useful to know if the document is in the background
 *   an invisible tab, or only loaded for pre-rendering.
 * 
 *   `var string = document.visibilityState`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState`
 */
web.Document.visibility_state = (function web$Document$visibility_state(this$){
return this$.visibilityState();
});
/**
 * Property.
 * 
 *   The Document.vlinkColor property gets/sets the color of links
 *   the user has visited in the document.
 * 
 *   `color = document.vlinkColor
 *   document.vlinkColor = color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/vlinkColor`
 */
web.Document.vlink_color = (function web$Document$vlink_color(this$){
return this$.vlinkColor();
});
/**
 * Property.
 * 
 *   The Document.vlinkColor property gets/sets the color of links
 *   the user has visited in the document.
 * 
 *   `color = document.vlinkColor
 *   document.vlinkColor = color`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/vlinkColor`
 */
web.Document.set_vlink_color_BANG_ = (function web$Document$set_vlink_color_BANG_(this$,val){
return (this$["vlinkColor"] = val);
});
/**
 * Property.
 * 
 *   Returns the width of the `web.<body>` element of the current
 *   in pixels.
 * 
 *   `pixels = document.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/width`
 */
web.Document.width = (function web$Document$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   Returns the width of the `web.<body>` element of the current
 *   in pixels.
 * 
 *   `pixels = document.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/width`
 */
web.Document.set_width_BANG_ = (function web$Document$set_width_BANG_(this$,val){
return (this$["width"] = val);
});
/**
 * Property.
 * 
 *   Returns the encoding as determined by the XML declaration. Should
 *   null if unspecified or unknown.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlEncoding`
 */
web.Document.xml_encoding = (function web$Document$xml_encoding(this$){
return this$.xmlEncoding();
});
/**
 * Property.
 * 
 *   Returns the encoding as determined by the XML declaration. Should
 *   null if unspecified or unknown.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlEncoding`
 */
web.Document.set_xml_encoding_BANG_ = (function web$Document$set_xml_encoding_BANG_(this$,val){
return (this$["xmlEncoding"] = val);
});
/**
 * Property.
 * 
 *   Returns the version number as specified in the XML declaration
 *   <?xml version=\"1.0\"?>) or \"1.0\" if the declaration is absent.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlVersion`
 */
web.Document.xml_version = (function web$Document$xml_version(this$){
return this$.xmlVersion();
});
/**
 * Property.
 * 
 *   Returns the version number as specified in the XML declaration
 *   <?xml version=\"1.0\"?>) or \"1.0\" if the declaration is absent.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlVersion`
 */
web.Document.set_xml_version_BANG_ = (function web$Document$set_xml_version_BANG_(this$,val){
return (this$["xmlVersion"] = val);
});
/**
 * Property.
 * 
 *   The fonts property of the `web.Document` interface returns the
 *   interface of the document.
 * 
 *   `let fontFaceSet = document.fonts;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts`
 */
web.Document.fonts = (function web$Document$fonts(this$){
return this$.fonts();
});
/**
 * Property.
 * 
 *   The fonts property of the `web.Document` interface returns the
 *   interface of the document.
 * 
 *   `let fontFaceSet = document.fonts;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts`
 */
web.Document.set_fonts_BANG_ = (function web$Document$set_fonts_BANG_(this$,val){
return (this$["fonts"] = val);
});
/**
 * Property.
 * 
 *   The featurePolicy read-only property of the `web.Document` interface
 *   the `web.FeaturePolicy` interface which provides a simple API
 *   inspecting the feature policies applied to a specific document.
 * 
 *   `var policy = iframeElement.featurePolicy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/featurePolicy`
 */
web.Document.feature_policy = (function web$Document$feature_policy(this$){
return this$.featurePolicy();
});
/**
 * Property.
 * 
 *   The featurePolicy read-only property of the `web.Document` interface
 *   the `web.FeaturePolicy` interface which provides a simple API
 *   inspecting the feature policies applied to a specific document.
 * 
 *   `var policy = iframeElement.featurePolicy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/featurePolicy`
 */
web.Document.set_feature_policy_BANG_ = (function web$Document$set_feature_policy_BANG_(this$,val){
return (this$["featurePolicy"] = val);
});
/**
 * Property.
 * 
 *   The `web.Document` property cookie lets you read and write cookies
 *   with the document. It serves as a getter and setter for the actual
 *   of the cookies.
 * 
 *   ``
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie`
 */
web.Document.cookie = (function web$Document$cookie(this$){
return this$.cookie();
});
/**
 * Property.
 * 
 *   The `web.Document` property cookie lets you read and write cookies
 *   with the document. It serves as a getter and setter for the actual
 *   of the cookies.
 * 
 *   ``
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie`
 */
web.Document.set_cookie_BANG_ = (function web$Document$set_cookie_BANG_(this$,val){
return (this$["cookie"] = val);
});
/**
 * Property.
 * 
 *   The activeElement read-only property of the `web.Document` and
 *   interfaces returns the `web.Element` within the DOM or shadow
 *   tree that currently has focus.
 * 
 *   `var element = DocumentOrShadowRoot.activeElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`
 */
web.Document.active_element = (function web$Document$active_element(this$){
return this$.activeElement();
});
/**
 * Property.
 * 
 *   The activeElement read-only property of the `web.Document` and
 *   interfaces returns the `web.Element` within the DOM or shadow
 *   tree that currently has focus.
 * 
 *   `var element = DocumentOrShadowRoot.activeElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`
 */
web.Document.set_active_element_BANG_ = (function web$Document$set_active_element_BANG_(this$,val){
return (this$["activeElement"] = val);
});
/**
 * Property.
 * 
 *   The pointerLockElement property of the `web.Document` and `web.ShadowRoot`
 *   provides the element set as the target for mouse events while
 *   pointer is locked. It is null if lock is pending, pointer is
 *   or the target is in another document.
 * 
 *   `var element = document.pointerLockElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`
 */
web.Document.pointer_lock_element = (function web$Document$pointer_lock_element(this$){
return this$.pointerLockElement();
});
/**
 * Property.
 * 
 *   The pointerLockElement property of the `web.Document` and `web.ShadowRoot`
 *   provides the element set as the target for mouse events while
 *   pointer is locked. It is null if lock is pending, pointer is
 *   or the target is in another document.
 * 
 *   `var element = document.pointerLockElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`
 */
web.Document.set_pointer_lock_element_BANG_ = (function web$Document$set_pointer_lock_element_BANG_(this$,val){
return (this$["pointerLockElement"] = val);
});
/**
 * Property.
 * 
 *   The styleSheets read-only property of the `web.DocumentOrShadowRoot`
 *   returns a `web.StyleSheetList` of `css.CSSStyleSheet` objects,
 *   stylesheets explicitly linked into or embedded in a document.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`
 */
web.Document.style_sheets = (function web$Document$style_sheets(this$){
return this$.styleSheets();
});
/**
 * Property.
 * 
 *   The styleSheets read-only property of the `web.DocumentOrShadowRoot`
 *   returns a `web.StyleSheetList` of `css.CSSStyleSheet` objects,
 *   stylesheets explicitly linked into or embedded in a document.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`
 */
web.Document.set_style_sheets_BANG_ = (function web$Document$set_style_sheets_BANG_(this$,val){
return (this$["styleSheets"] = val);
});
/**
 * Property.
 * 
 *   An event handler for the animationstart event. This event is
 *   when a CSS Animation starts to play.
 * 
 *   `var animStartHandler = target.onanimationstart;
 * 
 *   target.onanimationstart = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart`
 */
web.Document.onanimationstart = (function web$Document$onanimationstart(this$){
return this$.onanimationstart();
});
/**
 * Property.
 * 
 *   An event handler for the animationstart event. This event is
 *   when a CSS Animation starts to play.
 * 
 *   `var animStartHandler = target.onanimationstart;
 * 
 *   target.onanimationstart = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart`
 */
web.Document.set_onanimationstart_BANG_ = (function web$Document$set_onanimationstart_BANG_(this$,val){
return (this$["onanimationstart"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the drag event.
 * 
 *   `var dragHandler = targetElement.ondrag;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrag`
 */
web.Document.ondrag = (function web$Document$ondrag(this$){
return this$.ondrag();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the drag event.
 * 
 *   `var dragHandler = targetElement.ondrag;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrag`
 */
web.Document.set_ondrag_BANG_ = (function web$Document$set_ondrag_BANG_(this$,val){
return (this$["ondrag"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragend event.
 * 
 *   `var dragendHandler = targetElement.ondragend;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragend`
 */
web.Document.ondragend = (function web$Document$ondragend(this$){
return this$.ondragend();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragend event.
 * 
 *   `var dragendHandler = targetElement.ondragend;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragend`
 */
web.Document.set_ondragend_BANG_ = (function web$Document$set_ondragend_BANG_(this$,val){
return (this$["ondragend"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragenter event.
 * 
 *   `var dragenterHandler = targetElement.ondragenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragenter`
 */
web.Document.ondragenter = (function web$Document$ondragenter(this$){
return this$.ondragenter();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragenter event.
 * 
 *   `var dragenterHandler = targetElement.ondragenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragenter`
 */
web.Document.set_ondragenter_BANG_ = (function web$Document$set_ondragenter_BANG_(this$,val){
return (this$["ondragenter"] = val);
});
/**
 * Property.
 * 
 *   The GlobalEventHandler.ondragexit property is an event handler
 *   the dragexit event.
 * 
 *   `var dragexitHandler = targetElement.ondragexit;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragexit`
 */
web.Document.ondragexit = (function web$Document$ondragexit(this$){
return this$.ondragexit();
});
/**
 * Property.
 * 
 *   The GlobalEventHandler.ondragexit property is an event handler
 *   the dragexit event.
 * 
 *   `var dragexitHandler = targetElement.ondragexit;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragexit`
 */
web.Document.set_ondragexit_BANG_ = (function web$Document$set_ondragexit_BANG_(this$,val){
return (this$["ondragexit"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragleave event.
 * 
 *   `var dragleaveHandler = targetElement.ondragleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave`
 */
web.Document.ondragleave = (function web$Document$ondragleave(this$){
return this$.ondragleave();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragleave event.
 * 
 *   `var dragleaveHandler = targetElement.ondragleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave`
 */
web.Document.set_ondragleave_BANG_ = (function web$Document$set_ondragleave_BANG_(this$,val){
return (this$["ondragleave"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragover event.
 * 
 *   `var dragoverHandler = targetElement.ondragover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover`
 */
web.Document.ondragover = (function web$Document$ondragover(this$){
return this$.ondragover();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragover event.
 * 
 *   `var dragoverHandler = targetElement.ondragover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover`
 */
web.Document.set_ondragover_BANG_ = (function web$Document$set_ondragover_BANG_(this$,val){
return (this$["ondragover"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragstart event.
 * 
 *   `var dragstartHandler = targetElement.ondragstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart`
 */
web.Document.ondragstart = (function web$Document$ondragstart(this$){
return this$.ondragstart();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the dragstart event.
 * 
 *   `var dragstartHandler = targetElement.ondragstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart`
 */
web.Document.set_ondragstart_BANG_ = (function web$Document$set_ondragstart_BANG_(this$,val){
return (this$["ondragstart"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the drop event.
 * 
 *   `var dropHandler = targetElement.ondrop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop`
 */
web.Document.ondrop = (function web$Document$ondrop(this$){
return this$.ondrop();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the drop event.
 * 
 *   `var dropHandler = targetElement.ondrop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop`
 */
web.Document.set_ondrop_BANG_ = (function web$Document$set_ondrop_BANG_(this$,val){
return (this$["ondrop"] = val);
});
/**
 * Property.
 * 
 *   The onemptied property sets and returns the event handler for
 *   emptied event.
 * 
 *   `element.onemptied = handlerFunction;
 *   var handlerFunction = element.onemptied;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onemptied`
 */
web.Document.onemptied = (function web$Document$onemptied(this$){
return this$.onemptied();
});
/**
 * Property.
 * 
 *   The onemptied property sets and returns the event handler for
 *   emptied event.
 * 
 *   `element.onemptied = handlerFunction;
 *   var handlerFunction = element.onemptied;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onemptied`
 */
web.Document.set_onemptied_BANG_ = (function web$Document$set_onemptied_BANG_(this$,val){
return (this$["onemptied"] = val);
});
/**
 * Property.
 * 
 *   The onmousewheel property sets and returns the event handler
 *   the mousewheel event.
 * 
 *   `element.onmousewheel = handlerFunction;
 *   var handlerFunction = element.onmousewheel;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousewheel`
 */
web.Document.onmousewheel = (function web$Document$onmousewheel(this$){
return this$.onmousewheel();
});
/**
 * Property.
 * 
 *   The onmousewheel property sets and returns the event handler
 *   the mousewheel event.
 * 
 *   `element.onmousewheel = handlerFunction;
 *   var handlerFunction = element.onmousewheel;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousewheel`
 */
web.Document.set_onmousewheel_BANG_ = (function web$Document$set_onmousewheel_BANG_(this$,val){
return (this$["onmousewheel"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the touchend event.
 * 
 *   `var endHandler = targetElement.ontouchend;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchend`
 */
web.Document.ontouchend = (function web$Document$ontouchend(this$){
return this$.ontouchend();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the touchend event.
 * 
 *   `var endHandler = targetElement.ontouchend;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchend`
 */
web.Document.set_ontouchend_BANG_ = (function web$Document$set_ontouchend_BANG_(this$,val){
return (this$["ontouchend"] = val);
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the touchmove event.
 * 
 *   `var moveHandler = someElement.ontouchmove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchmove`
 */
web.Document.ontouchmove = (function web$Document$ontouchmove(this$){
return this$.ontouchmove();
});
/**
 * Property.
 * 
 *   A `web.global event handler` for the touchmove event.
 * 
 *   `var moveHandler = someElement.ontouchmove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchmove`
 */
web.Document.set_ontouchmove_BANG_ = (function web$Document$set_ontouchmove_BANG_(this$,val){
return (this$["ontouchmove"] = val);
});

//# sourceMappingURL=Document.js.map?rel=1565798824930
