// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLIFrameElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The setNfcFocus() method of the `html.HTMLIFrameElement` interface
 *   whether an `web.<iframe>` can receive an NFC event.
 * 
 *   `myIFrame.setNfcFocus(true);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/setNfcFocus`
 */
html.HTMLIFrameElement.set_nfc_focus = (function html$HTMLIFrameElement$set_nfc_focus(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44204 = arguments.length;
var i__42557__auto___44205 = (0);
while(true){
if((i__42557__auto___44205 < len__42556__auto___44204)){
args__42563__auto__.push((arguments[i__42557__auto___44205]));

var G__44206 = (i__42557__auto___44205 + (1));
i__42557__auto___44205 = G__44206;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLIFrameElement.set_nfc_focus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLIFrameElement.set_nfc_focus.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setNfcFocus,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLIFrameElement.set_nfc_focus.cljs$lang$maxFixedArity = (1);

html.HTMLIFrameElement.set_nfc_focus.cljs$lang$applyTo = (function (seq44202){
var G__44203 = cljs.core.first.call(null,seq44202);
var seq44202__$1 = cljs.core.next.call(null,seq44202);
return html.HTMLIFrameElement.set_nfc_focus.cljs$core$IFn$_invoke$arity$variadic(G__44203,seq44202__$1);
});

/**
 * Property.
 * 
 *   The allowPaymentRequest property of the `html.HTMLIFrameElement`
 *   returns a `web.Boolean` indicating whether the Payment Request
 *   may be invoked on a cross-origin iframe.
 * 
 *   `var allow = htmlIFrameElement.allowPaymentRequest`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`
 */
html.HTMLIFrameElement.allow_payment_request = (function html$HTMLIFrameElement$allow_payment_request(this$){
return this$.allowPaymentRequest();
});
/**
 * Property.
 * 
 *   The allowPaymentRequest property of the `html.HTMLIFrameElement`
 *   returns a `web.Boolean` indicating whether the Payment Request
 *   may be invoked on a cross-origin iframe.
 * 
 *   `var allow = htmlIFrameElement.allowPaymentRequest`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`
 */
html.HTMLIFrameElement.set_allow_payment_request_BANG_ = (function html$HTMLIFrameElement$set_allow_payment_request_BANG_(this$,val){
return (this$["allowPaymentRequest"] = val);
});
/**
 * Property.
 * 
 *   The contentWindow property returns the Window object of an <iframe>
 *   You can use this Window object to access the iframe's document
 *   its internal DOM. This attribute is read-only, but its properties
 *   be manipulated like the global Window object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow`
 */
html.HTMLIFrameElement.content_window = (function html$HTMLIFrameElement$content_window(this$){
return this$.contentWindow();
});
/**
 * Property.
 * 
 *   The csp property of the `html.HTMLIFrameElement` interface specifies
 *   Content Security Policy that an embedded document must agree
 *   enforce upon itself.
 * 
 *   `var csp = HTMLIFrameElement.csp
 *   HTMLIFrameElement.csp = csp`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`
 */
html.HTMLIFrameElement.csp = (function html$HTMLIFrameElement$csp(this$){
return this$.csp();
});
/**
 * Property.
 * 
 *   The csp property of the `html.HTMLIFrameElement` interface specifies
 *   Content Security Policy that an embedded document must agree
 *   enforce upon itself.
 * 
 *   `var csp = HTMLIFrameElement.csp
 *   HTMLIFrameElement.csp = csp`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`
 */
html.HTMLIFrameElement.set_csp_BANG_ = (function html$HTMLIFrameElement$set_csp_BANG_(this$,val){
return (this$["csp"] = val);
});
/**
 * Property.
 * 
 *   The featurePolicy read-only property of the `html.HTMLIFrameElement`
 *   returns the `web.FeaturePolicy` interface which provides a simple
 *   for introspecting the feature policies applied to a specific
 * 
 *   `var policy = HTMLIFrameElement.featurePolicy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`
 */
html.HTMLIFrameElement.feature_policy = (function html$HTMLIFrameElement$feature_policy(this$){
return this$.featurePolicy();
});
/**
 * Property.
 * 
 *   The featurePolicy read-only property of the `html.HTMLIFrameElement`
 *   returns the `web.FeaturePolicy` interface which provides a simple
 *   for introspecting the feature policies applied to a specific
 * 
 *   `var policy = HTMLIFrameElement.featurePolicy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`
 */
html.HTMLIFrameElement.set_feature_policy_BANG_ = (function html$HTMLIFrameElement$set_feature_policy_BANG_(this$,val){
return (this$["featurePolicy"] = val);
});
/**
 * Property.
 * 
 *   The HTMLIFrameElement.referrerPolicy property reflects the HTML
 *   attribute of the `web.<iframe>` element defining which referrer
 *   sent when fetching the resource.
 * 
 *   `refStr = iframeElt.referrerPolicy;
 *   iframeElt.referrerPolicy = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`
 */
html.HTMLIFrameElement.referrer_policy = (function html$HTMLIFrameElement$referrer_policy(this$){
return this$.referrerPolicy();
});
/**
 * Property.
 * 
 *   The HTMLIFrameElement.referrerPolicy property reflects the HTML
 *   attribute of the `web.<iframe>` element defining which referrer
 *   sent when fetching the resource.
 * 
 *   `refStr = iframeElt.referrerPolicy;
 *   iframeElt.referrerPolicy = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`
 */
html.HTMLIFrameElement.set_referrer_policy_BANG_ = (function html$HTMLIFrameElement$set_referrer_policy_BANG_(this$,val){
return (this$["referrerPolicy"] = val);
});
/**
 * Property.
 * 
 *   If the iframe and the iframe's parent document are Same Origin,
 *   a Document (that is, the active document in the inline frame's
 *   browsing context), else returns null.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument`
 */
html.HTMLIFrameElement.content_document = (function html$HTMLIFrameElement$content_document(this$){
return this$.contentDocument();
});
/**
 * Property.
 * 
 *   If the iframe and the iframe's parent document are Same Origin,
 *   a Document (that is, the active document in the inline frame's
 *   browsing context), else returns null.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument`
 */
html.HTMLIFrameElement.set_content_document_BANG_ = (function html$HTMLIFrameElement$set_content_document_BANG_(this$,val){
return (this$["contentDocument"] = val);
});
/**
 * Property.
 * 
 *   The HTMLIFrameElement.src property reflects the HTML referrerpolicy
 *   of the `web.<iframe>` element defining which referrer is sent
 *   fetching the resource.
 * 
 *   `refStr = iframeElt.src;
 *   iframeElt.src= refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/src`
 */
html.HTMLIFrameElement.src = (function html$HTMLIFrameElement$src(this$){
return this$.src();
});
/**
 * Property.
 * 
 *   The HTMLIFrameElement.src property reflects the HTML referrerpolicy
 *   of the `web.<iframe>` element defining which referrer is sent
 *   fetching the resource.
 * 
 *   `refStr = iframeElt.src;
 *   iframeElt.src= refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/src`
 */
html.HTMLIFrameElement.set_src_BANG_ = (function html$HTMLIFrameElement$set_src_BANG_(this$,val){
return (this$["src"] = val);
});
/**
 * Property.
 * 
 *   The srcdoc property of the `html.HTMLIFrameElement` specifies
 *   content of the page.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc`
 */
html.HTMLIFrameElement.srcdoc = (function html$HTMLIFrameElement$srcdoc(this$){
return this$.srcdoc();
});
/**
 * Property.
 * 
 *   The srcdoc property of the `html.HTMLIFrameElement` specifies
 *   content of the page.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc`
 */
html.HTMLIFrameElement.set_srcdoc_BANG_ = (function html$HTMLIFrameElement$set_srcdoc_BANG_(this$,val){
return (this$["srcdoc"] = val);
});

//# sourceMappingURL=HTMLIFrameElement.js.map?rel=1565798812588
