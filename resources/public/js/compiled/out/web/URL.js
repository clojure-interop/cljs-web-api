// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.URL');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The URL() constructor returns a newly created `web.URL` object representing the URL defined by the parameters.
 * 
 *   url
 *   \tA `web.USVString` representing an absolute or relative URL. If url is a relative URL, base is required, and will be used as the base URL. If url is an absolute URL, a given base will be ignored.
 *   \tbase Optional
 *   \tA `web.USVString` representing the base URL to use in case url is a relative URL. If not specified, it defaults to ''.
 * 
 * 
 * 
 *   Note: You can still use an existing `web.URL` object for the base, which stringifies itself to the object's `web.href` attribute.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/URL`
 */
web.URL.constructor$ = URL;
/**
 * Method.
 * 
 *   The URL.createObjectURL() static method creates a `dom.DOMString`
 *   a URL representing the object given in the parameter. The URL
 *   is tied to the `web.document` in the window on which it was created.
 *   new object URL represents the specified `file.File` object or
 *   object.
 * 
 *   `objectURL = URL.createObjectURL(object);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL`
 */
web.URL.create_object_url = (function web$URL$create_object_url(this$,object){
return this$.createObjectURL(object);
});
/**
 * Method.
 * 
 *   The URL.revokeObjectURL() static method releases an existing
 *   URL which was previously created by calling `web.URL.createObjectURL()`.
 * 
 *   `window.URL.revokeObjectURL(objectURL);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL`
 */
web.URL.revoke_object_url = (function web$URL$revoke_object_url(this$,object_url){
return this$.revokeObjectURL(object_url);
});
/**
 * Method.
 * 
 *   The toJSON() method of the `web.URL` interface returns a `web.USVString`
 *   a serialized version of the URL, although in practice it seems
 *   have the same effect as `web.URL.toString()`.
 * 
 *   `json = url.toJSON();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/toJSON`
 */
web.URL.to_json = (function web$URL$to_json(this$){
return this$.toJSON();
});
/**
 * Method.
 * 
 *   The URL.toString() stringifier method returns a `web.USVString`
 *   the whole URL. It is effectively a read-only version of `web.URL.href`.
 * 
 *   `string = url.toString();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/toString`
 */
web.URL.to_string = (function web$URL$to_string(this$){
return this$.toString();
});
/**
 * Property.
 * 
 *   The hash property of the `web.URL` interface returns a `web.USVString`
 *   a '#' followed by the fragment identifier of the URL.
 * 
 *   `string = object.hash;
 *   object.hash = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hash`
 */
web.URL.hash = (function web$URL$hash(this$){
return this$.hash();
});
/**
 * Property.
 * 
 *   The hash property of the `web.URL` interface returns a `web.USVString`
 *   a '#' followed by the fragment identifier of the URL.
 * 
 *   `string = object.hash;
 *   object.hash = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hash`
 */
web.URL.set_hash_BANG_ = (function web$URL$set_hash_BANG_(this$,val){
return (this$["hash"] = val);
});
/**
 * Property.
 * 
 *   The host property of the `web.URL` interface is a `web.USVString`
 *   the host, that is the hostname, and then, if the port of the
 *   is nonempty, a ':', and the port of the URL.
 * 
 *   `string = object.host;
 *   object.host = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/host`
 */
web.URL.host = (function web$URL$host(this$){
return this$.host();
});
/**
 * Property.
 * 
 *   The host property of the `web.URL` interface is a `web.USVString`
 *   the host, that is the hostname, and then, if the port of the
 *   is nonempty, a ':', and the port of the URL.
 * 
 *   `string = object.host;
 *   object.host = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/host`
 */
web.URL.set_host_BANG_ = (function web$URL$set_host_BANG_(this$,val){
return (this$["host"] = val);
});
/**
 * Property.
 * 
 *   The hostname property of the `web.URL` interface is a `web.USVString`
 *   the domain of the URL.
 * 
 *   `string = object.hostname;
 *   object.hostname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname`
 */
web.URL.hostname = (function web$URL$hostname(this$){
return this$.hostname();
});
/**
 * Property.
 * 
 *   The hostname property of the `web.URL` interface is a `web.USVString`
 *   the domain of the URL.
 * 
 *   `string = object.hostname;
 *   object.hostname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname`
 */
web.URL.set_hostname_BANG_ = (function web$URL$set_hostname_BANG_(this$,val){
return (this$["hostname"] = val);
});
/**
 * Property.
 * 
 *   The href property of the `web.URL` interface is a `web.USVString`
 *   the whole URL.
 * 
 *   `string = object.href;
 *   object.href = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/href`
 */
web.URL.href = (function web$URL$href(this$){
return this$.href();
});
/**
 * Property.
 * 
 *   The href property of the `web.URL` interface is a `web.USVString`
 *   the whole URL.
 * 
 *   `string = object.href;
 *   object.href = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/href`
 */
web.URL.set_href_BANG_ = (function web$URL$set_href_BANG_(this$,val){
return (this$["href"] = val);
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.URL` interface returns
 *   `web.USVString` containing the Unicode serialization of the origin
 *   the represented URL. The exact structure varies depending on
 *   type of URL:
 * 
 *   `string = URLObject.origin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/origin`
 */
web.URL.origin = (function web$URL$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The password property of the `web.URL` interface is a `web.USVString`
 *   the password specified before the domain name.
 * 
 *   `string = object.password;
 *   object.password = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/password`
 */
web.URL.password = (function web$URL$password(this$){
return this$.password();
});
/**
 * Property.
 * 
 *   The password property of the `web.URL` interface is a `web.USVString`
 *   the password specified before the domain name.
 * 
 *   `string = object.password;
 *   object.password = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/password`
 */
web.URL.set_password_BANG_ = (function web$URL$set_password_BANG_(this$,val){
return (this$["password"] = val);
});
/**
 * Property.
 * 
 *   The pathname property of the `web.URL` interface is a `web.USVString`
 *   an initial '/' followed by the path of the URL (or the empty
 *   if there is no path).
 * 
 *   `string = object.pathname;
 *   object.pathname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname`
 */
web.URL.pathname = (function web$URL$pathname(this$){
return this$.pathname();
});
/**
 * Property.
 * 
 *   The pathname property of the `web.URL` interface is a `web.USVString`
 *   an initial '/' followed by the path of the URL (or the empty
 *   if there is no path).
 * 
 *   `string = object.pathname;
 *   object.pathname = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname`
 */
web.URL.set_pathname_BANG_ = (function web$URL$set_pathname_BANG_(this$,val){
return (this$["pathname"] = val);
});
/**
 * Property.
 * 
 *   The port property of the `web.URL` interface is a `web.USVString`
 *   the port number of the URL. If the URL does not contain an explicit
 *   number, it will be set to ''.
 * 
 *   `string = object.port;
 *   object.port = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/port`
 */
web.URL.port = (function web$URL$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The port property of the `web.URL` interface is a `web.USVString`
 *   the port number of the URL. If the URL does not contain an explicit
 *   number, it will be set to ''.
 * 
 *   `string = object.port;
 *   object.port = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/port`
 */
web.URL.set_port_BANG_ = (function web$URL$set_port_BANG_(this$,val){
return (this$["port"] = val);
});
/**
 * Property.
 * 
 *   The protocol property of the `web.URL` interface is a `web.USVString`
 *   the protocol scheme of the URL, including the final ':'.
 * 
 *   `string = object.protocol;
 *   object.protocol = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol`
 */
web.URL.protocol = (function web$URL$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The protocol property of the `web.URL` interface is a `web.USVString`
 *   the protocol scheme of the URL, including the final ':'.
 * 
 *   `string = object.protocol;
 *   object.protocol = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol`
 */
web.URL.set_protocol_BANG_ = (function web$URL$set_protocol_BANG_(this$,val){
return (this$["protocol"] = val);
});
/**
 * Property.
 * 
 *   The search property of the `web.URL` interface is a search string,
 *   called a query string, that is a `web.USVString` containing a
 *   followed by the parameters of the URL.
 * 
 *   `string = object.search;
 *   object.search = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/search`
 */
web.URL.search = (function web$URL$search(this$){
return this$.search();
});
/**
 * Property.
 * 
 *   The search property of the `web.URL` interface is a search string,
 *   called a query string, that is a `web.USVString` containing a
 *   followed by the parameters of the URL.
 * 
 *   `string = object.search;
 *   object.search = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/search`
 */
web.URL.set_search_BANG_ = (function web$URL$set_search_BANG_(this$,val){
return (this$["search"] = val);
});
/**
 * Property.
 * 
 *   The searchParams readonly property of the `web.URL` interface
 *   a `web.URLSearchParams` object allowing access to the GET decoded
 *   arguments contained in the URL.
 * 
 *   `var urlSearchParams = URL.searchParams;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams`
 */
web.URL.search_params = (function web$URL$search_params(this$){
return this$.searchParams();
});
/**
 * Property.
 * 
 *   The username property of the `web.URL` interface is a `web.USVString`
 *   the username specified before the domain name.
 * 
 *   `string = object.username;
 *   object.username = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/username`
 */
web.URL.username = (function web$URL$username(this$){
return this$.username();
});
/**
 * Property.
 * 
 *   The username property of the `web.URL` interface is a `web.USVString`
 *   the username specified before the domain name.
 * 
 *   `string = object.username;
 *   object.username = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/username`
 */
web.URL.set_username_BANG_ = (function web$URL$set_username_BANG_(this$,val){
return (this$["username"] = val);
});

//# sourceMappingURL=URL.js.map?rel=1565798817729
