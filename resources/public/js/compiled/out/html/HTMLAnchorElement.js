// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLAnchorElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLHyperlinkElementUtils.toString() stringifier method returns
 *   `web.USVString` containing the whole URL. It is a read-only version
 *   `html.HTMLHyperlinkElementUtils.href`.
 * 
 *   `string = object.toString();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/toString`
 */
html.HTMLAnchorElement.to_string = (function html$HTMLAnchorElement$to_string(this$){
return this$.toString();
});
/**
 * Method.
 * 
 *   The HTMLElement.blur() method removes keyboard focus from the
 *   element.
 * 
 *   `element.blur();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur`
 */
html.HTMLAnchorElement.blur = (function html$HTMLAnchorElement$blur(this$){
return this$.blur();
});
/**
 * Method.
 * 
 *   The HTMLElement.focus() method sets focus on the specified element,
 *   it can be focused. The focused element is the element which will
 *   keyboard and similar events by default.
 * 
 *   `element.focus(options); // Object parameter`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus`
 */
html.HTMLAnchorElement.focus = (function html$HTMLAnchorElement$focus(this$,options){
return this$.focus(options);
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.download property is a `dom.DOMString`
 *   that the linked resource is intended to be downloaded rather
 *   displayed in the browser. The value, if any, specifies the default
 *   name for use in labeling the resource in a local file system.
 *   the name is not a valid file name in the underlying OS, the browser
 *   adjust it.
 * 
 *   `var dnload = anchorElt.download;
 *   anchorElt.download = dnload;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download`
 */
html.HTMLAnchorElement.download = (function html$HTMLAnchorElement$download(this$){
return this$.download();
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.download property is a `dom.DOMString`
 *   that the linked resource is intended to be downloaded rather
 *   displayed in the browser. The value, if any, specifies the default
 *   name for use in labeling the resource in a local file system.
 *   the name is not a valid file name in the underlying OS, the browser
 *   adjust it.
 * 
 *   `var dnload = anchorElt.download;
 *   anchorElt.download = dnload;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download`
 */
html.HTMLAnchorElement.set_download_BANG_ = (function html$HTMLAnchorElement$set_download_BANG_(this$,val){
return (this$["download"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.hash property returns a `dom.DOMString`
 *   a '#' followed by the fragment identifier of the URL.
 * 
 *   `string = object.hash;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash`
 */
html.HTMLAnchorElement.hash = (function html$HTMLAnchorElement$hash(this$){
return this$.hash();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.hash property returns a `dom.DOMString`
 *   a '#' followed by the fragment identifier of the URL.
 * 
 *   `string = object.hash;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash`
 */
html.HTMLAnchorElement.set_hash_BANG_ = (function html$HTMLAnchorElement$set_hash_BANG_(this$,val){
return (this$["hash"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.host property is a `web.USVString`
 *   the host, that is the hostname, and then, if the port of the
 *   is nonempty, a ':', and the port of the URL.
 * 
 *   `string = object.host;
 *   object.host = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/host`
 */
html.HTMLAnchorElement.host = (function html$HTMLAnchorElement$host(this$){
return this$.host();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.host property is a `web.USVString`
 *   the host, that is the hostname, and then, if the port of the
 *   is nonempty, a ':', and the port of the URL.
 * 
 *   `string = object.host;
 *   object.host = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/host`
 */
html.HTMLAnchorElement.set_host_BANG_ = (function html$HTMLAnchorElement$set_host_BANG_(this$,val){
return (this$["host"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.hostname property is a `web.USVString`
 *   the domain of the URL.
 * 
 *   `string = object.hostname;
 *   object.hostname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname`
 */
html.HTMLAnchorElement.hostname = (function html$HTMLAnchorElement$hostname(this$){
return this$.hostname();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.hostname property is a `web.USVString`
 *   the domain of the URL.
 * 
 *   `string = object.hostname;
 *   object.hostname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname`
 */
html.HTMLAnchorElement.set_hostname_BANG_ = (function html$HTMLAnchorElement$set_hostname_BANG_(this$,val){
return (this$["hostname"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.href property is a `web.USVString`
 *   the whole URL.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href`
 */
html.HTMLAnchorElement.href = (function html$HTMLAnchorElement$href(this$){
return this$.href();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.href property is a `web.USVString`
 *   the whole URL.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href`
 */
html.HTMLAnchorElement.set_href_BANG_ = (function html$HTMLAnchorElement$set_href_BANG_(this$,val){
return (this$["href"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.origin read-only property is a
 *   containing the Unicode serialization of the origin of the represented
 * 
 *   `string = object.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/origin`
 */
html.HTMLAnchorElement.origin = (function html$HTMLAnchorElement$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.password property is a `web.USVString`
 *   the password specified before the domain name.
 * 
 *   `string = object.password;
 *   object.password = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password`
 */
html.HTMLAnchorElement.password = (function html$HTMLAnchorElement$password(this$){
return this$.password();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.pathname property is a `web.USVString`
 *   an initial '/' followed by the path of the URL (or the empty
 *   if there is no path).
 * 
 *   `string = object.pathname;
 *   object.pathname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname`
 */
html.HTMLAnchorElement.pathname = (function html$HTMLAnchorElement$pathname(this$){
return this$.pathname();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.pathname property is a `web.USVString`
 *   an initial '/' followed by the path of the URL (or the empty
 *   if there is no path).
 * 
 *   `string = object.pathname;
 *   object.pathname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname`
 */
html.HTMLAnchorElement.set_pathname_BANG_ = (function html$HTMLAnchorElement$set_pathname_BANG_(this$,val){
return (this$["pathname"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.port property is a `web.USVString`
 *   the port number of the URL. If the URL does not contain an explicit
 *   number, it will be set to ''.
 * 
 *   `string = object.port;
 *   object.port = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/port`
 */
html.HTMLAnchorElement.port = (function html$HTMLAnchorElement$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.port property is a `web.USVString`
 *   the port number of the URL. If the URL does not contain an explicit
 *   number, it will be set to ''.
 * 
 *   `string = object.port;
 *   object.port = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/port`
 */
html.HTMLAnchorElement.set_port_BANG_ = (function html$HTMLAnchorElement$set_port_BANG_(this$,val){
return (this$["port"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.protocol property is a `web.USVString`
 *   the protocol scheme of the URL, including the final ':'.
 * 
 *   `string = object.protocol;
 *   object.protocol = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/protocol`
 */
html.HTMLAnchorElement.protocol = (function html$HTMLAnchorElement$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.protocol property is a `web.USVString`
 *   the protocol scheme of the URL, including the final ':'.
 * 
 *   `string = object.protocol;
 *   object.protocol = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/protocol`
 */
html.HTMLAnchorElement.set_protocol_BANG_ = (function html$HTMLAnchorElement$set_protocol_BANG_(this$,val){
return (this$["protocol"] = val);
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.referrerPolicy property reflect the HTML
 *   attribute of the `web.<a>` element defining which referrer is
 *   when fetching the resource.
 * 
 *   `refStr = anchorElt.referrerPolicy;
 *   anchorElt.referrerPolicy = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/referrerPolicy`
 */
html.HTMLAnchorElement.referrer_policy = (function html$HTMLAnchorElement$referrer_policy(this$){
return this$.referrerPolicy();
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.referrerPolicy property reflect the HTML
 *   attribute of the `web.<a>` element defining which referrer is
 *   when fetching the resource.
 * 
 *   `refStr = anchorElt.referrerPolicy;
 *   anchorElt.referrerPolicy = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/referrerPolicy`
 */
html.HTMLAnchorElement.set_referrer_policy_BANG_ = (function html$HTMLAnchorElement$set_referrer_policy_BANG_(this$,val){
return (this$["referrerPolicy"] = val);
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.rel property reflects the rel attribute.
 *   is a `dom.DOMString` containing a space-separated list of link
 *   indicating the relationship between the resource represented
 *   the `web.<a>` element and the current document.
 * 
 *   `var relstr = anchorElt.rel;
 *   anchorElt.rel = relstr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/rel`
 */
html.HTMLAnchorElement.rel = (function html$HTMLAnchorElement$rel(this$){
return this$.rel();
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.rel property reflects the rel attribute.
 *   is a `dom.DOMString` containing a space-separated list of link
 *   indicating the relationship between the resource represented
 *   the `web.<a>` element and the current document.
 * 
 *   `var relstr = anchorElt.rel;
 *   anchorElt.rel = relstr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/rel`
 */
html.HTMLAnchorElement.set_rel_BANG_ = (function html$HTMLAnchorElement$set_rel_BANG_(this$,val){
return (this$["rel"] = val);
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.relList read-only property reflects the
 *   attribute. It is a live `dom.DOMTokenList` containing the set
 *   link types indicating the relationship between the resource represented
 *   the `web.<a>` element and the current document.
 * 
 *   `var relstr = anchorElt.relList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/relList`
 */
html.HTMLAnchorElement.rel_list = (function html$HTMLAnchorElement$rel_list(this$){
return this$.relList();
});
/**
 * Property.
 * 
 *   The HTMLAnchorElement.relList read-only property reflects the
 *   attribute. It is a live `dom.DOMTokenList` containing the set
 *   link types indicating the relationship between the resource represented
 *   the `web.<a>` element and the current document.
 * 
 *   `var relstr = anchorElt.relList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/relList`
 */
html.HTMLAnchorElement.set_rel_list_BANG_ = (function html$HTMLAnchorElement$set_rel_list_BANG_(this$,val){
return (this$["relList"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.search property is a search string,
 *   called a query string, that is `web.USVString` containing a '?'
 *   by the parameters of the URL.
 * 
 *   `string = object.search;
 *   object.search = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search`
 */
html.HTMLAnchorElement.search = (function html$HTMLAnchorElement$search(this$){
return this$.search();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.search property is a search string,
 *   called a query string, that is `web.USVString` containing a '?'
 *   by the parameters of the URL.
 * 
 *   `string = object.search;
 *   object.search = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search`
 */
html.HTMLAnchorElement.set_search_BANG_ = (function html$HTMLAnchorElement$set_search_BANG_(this$,val){
return (this$["search"] = val);
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.username property is a `web.USVString`
 *   the username specified before the domain name.
 * 
 *   `string = object.username;
 *   object.username = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username`
 */
html.HTMLAnchorElement.username = (function html$HTMLAnchorElement$username(this$){
return this$.username();
});
/**
 * Property.
 * 
 *   The HTMLHyperlinkElementUtils.username property is a `web.USVString`
 *   the username specified before the domain name.
 * 
 *   `string = object.username;
 *   object.username = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username`
 */
html.HTMLAnchorElement.set_username_BANG_ = (function html$HTMLAnchorElement$set_username_BANG_(this$,val){
return (this$["username"] = val);
});

//# sourceMappingURL=HTMLAnchorElement.js.map?rel=1565798862243
