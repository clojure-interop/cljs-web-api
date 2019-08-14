// Compiled by ClojureScript 1.9.946 {}
goog.provide('xml.XMLHttpRequest');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The XMLHttpRequest() constructor creates a new `xml.XMLHttpRequest`.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/XMLHttpRequest`
 */
xml.XMLHttpRequest.constructor$ = XMLHttpRequest;
/**
 * Method.
 * 
 *   The XMLHttpRequest.abort() method aborts the request if it has
 *   been sent. When a request is aborted, its `web.readyState` is
 *   to `xml.XMLHttpRequest.UNSENT` (0) and the request's `web.status`
 *   is set to 0.
 * 
 *   `XMLHttpRequest.abort()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort`
 */
xml.XMLHttpRequest.abort = (function xml$XMLHttpRequest$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   The `xml.XMLHttpRequest` method getAllResponseHeaders() returns
 *   the response headers, separated by CRLF, as a string, or returns
 *   if no response has been received.
 * 
 *   `var headers = XMLHttpRequest.getAllResponseHeaders();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders`
 */
xml.XMLHttpRequest.get_all_response_headers = (function xml$XMLHttpRequest$get_all_response_headers(this$){
return this$.getAllResponseHeaders();
});
/**
 * Method.
 * 
 *   The `xml.XMLHttpRequest` method getResponseHeader() returns the
 *   containing the text of a particular header's value.
 * 
 *   `var myHeader = XMLHttpRequest.getResponseHeader(headerName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader`
 */
xml.XMLHttpRequest.get_response_header = (function xml$XMLHttpRequest$get_response_header(this$,header_name){
return this$.getResponseHeader(header_name);
});
/**
 * Method.
 * 
 *   The `xml.XMLHttpRequest` method open() initializes a newly-created
 *   or re-initializes an existing one.
 * 
 *   `XMLHttpRequest.open(method, url)
 *   XMLHttpRequest.open(method, url, async)
 *   XMLHttpRequest.open(method, url, async, user)
 *   XMLHttpRequest.open(method, url, async, user, password)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open`
 */
xml.XMLHttpRequest.open = (function xml$XMLHttpRequest$open(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47868 = arguments.length;
var i__42557__auto___47869 = (0);
while(true){
if((i__42557__auto___47869 < len__42556__auto___47868)){
args__42563__auto__.push((arguments[i__42557__auto___47869]));

var G__47870 = (i__42557__auto___47869 + (1));
i__42557__auto___47869 = G__47870;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return xml.XMLHttpRequest.open.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

xml.XMLHttpRequest.open.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.open,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

xml.XMLHttpRequest.open.cljs$lang$maxFixedArity = (1);

xml.XMLHttpRequest.open.cljs$lang$applyTo = (function (seq47866){
var G__47867 = cljs.core.first.call(null,seq47866);
var seq47866__$1 = cljs.core.next.call(null,seq47866);
return xml.XMLHttpRequest.open.cljs$core$IFn$_invoke$arity$variadic(G__47867,seq47866__$1);
});

/**
 * Method.
 * 
 *   The `xml.XMLHttpRequest` method overrideMimeType() specifies
 *   MIME type other than the one provided by the server to be used
 *   when interpreting the data being transferred in a request.
 * 
 *   `XMLHttpRequest.overrideMimeType(mimeType)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/overrideMimeType`
 */
xml.XMLHttpRequest.override_mime_type = (function xml$XMLHttpRequest$override_mime_type(this$,mime_type){
return this$.overrideMimeType(mime_type);
});
/**
 * Method.
 * 
 *   The `xml.XMLHttpRequest` method send() sends the request to the
 * 
 *   `XMLHttpRequest.send(body)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send`
 */
xml.XMLHttpRequest.send = (function xml$XMLHttpRequest$send(this$,body){
return this$.send(body);
});
/**
 * Method.
 * 
 *   The `xml.XMLHttpRequest` method setRequestHeader() sets the value
 *   an HTTP request header. When using setRequestHeader(), you must
 *   it after calling `web.open()`, but before calling `web.send()`.
 *   this method is called several times with the same header, the
 *   are merged into one single request header.
 * 
 *   `XMLHttpRequest.setRequestHeader(header, value)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader`
 */
xml.XMLHttpRequest.set_request_header = (function xml$XMLHttpRequest$set_request_header(this$,header,value){
return this$.setRequestHeader(header,value);
});
/**
 * Method.
 * 
 *   This Mozilla-specific method is available only from within privileged
 *   and is only called from a C++ context in order to initialize
 *   XMLHttpRequest.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/openRequest`
 */
xml.XMLHttpRequest.open_request = (function xml$XMLHttpRequest$open_request(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47873 = arguments.length;
var i__42557__auto___47874 = (0);
while(true){
if((i__42557__auto___47874 < len__42556__auto___47873)){
args__42563__auto__.push((arguments[i__42557__auto___47874]));

var G__47875 = (i__42557__auto___47874 + (1));
i__42557__auto___47874 = G__47875;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return xml.XMLHttpRequest.open_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

xml.XMLHttpRequest.open_request.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openRequest,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

xml.XMLHttpRequest.open_request.cljs$lang$maxFixedArity = (1);

xml.XMLHttpRequest.open_request.cljs$lang$applyTo = (function (seq47871){
var G__47872 = cljs.core.first.call(null,seq47871);
var seq47871__$1 = cljs.core.next.call(null,seq47871);
return xml.XMLHttpRequest.open_request.cljs$core$IFn$_invoke$arity$variadic(G__47872,seq47871__$1);
});

/**
 * Method.
 * 
 *   The obsolete `xml.XMLHttpRequest` method sendAsBinary() is a
 *   of the `web.send()` method that sends binary data. The send()
 *   now supports binary data and should now be used instead.
 * 
 *   `XMLHttpRequest.sendAsBinary(binaryString);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/sendAsBinary`
 */
xml.XMLHttpRequest.send_as_binary = (function xml$XMLHttpRequest$send_as_binary(this$,binary_string){
return this$.sendAsBinary(binary_string);
});
/**
 * Property.
 * 
 *   An `web.EventHandler` that is called whenever the readyState
 *   changes. The callback is called from the user interface thread.
 *   XMLHttpRequest.onreadystatechange property contains the event
 *   to be called when the readystatechange event is fired, that is
 *   time the `web.readyState` property of the `xml.XMLHttpRequest`
 * 
 *   `XMLHttpRequest.onreadystatechange = callback;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`
 */
xml.XMLHttpRequest.onreadystatechange = (function xml$XMLHttpRequest$onreadystatechange(this$){
return this$.onreadystatechange();
});
/**
 * Property.
 * 
 *   An `web.EventHandler` that is called whenever the readyState
 *   changes. The callback is called from the user interface thread.
 *   XMLHttpRequest.onreadystatechange property contains the event
 *   to be called when the readystatechange event is fired, that is
 *   time the `web.readyState` property of the `xml.XMLHttpRequest`
 * 
 *   `XMLHttpRequest.onreadystatechange = callback;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`
 */
xml.XMLHttpRequest.set_onreadystatechange_BANG_ = (function xml$XMLHttpRequest$set_onreadystatechange_BANG_(this$,val){
return (this$["onreadystatechange"] = val);
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.readyState property returns the state an XMLHttpRequest
 *   is in. An XHR client exists in one of the following states:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState`
 */
xml.XMLHttpRequest.ready_state = (function xml$XMLHttpRequest$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.readyState property returns the state an XMLHttpRequest
 *   is in. An XHR client exists in one of the following states:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState`
 */
xml.XMLHttpRequest.set_ready_state_BANG_ = (function xml$XMLHttpRequest$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   The `xml.XMLHttpRequest` response property returns the response's
 *   content as an `web.ArrayBuffer`, `web.Blob`, `web.Document`,
 *   `web.Object`, or `dom.DOMString`, depending on the value of the
 *   `web.responseType` property.
 * 
 *   `var body = XMLHttpRequest.response;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response`
 */
xml.XMLHttpRequest.response = (function xml$XMLHttpRequest$response(this$){
return this$.response();
});
/**
 * Property.
 * 
 *   The read-only `xml.XMLHttpRequest` property responseText returns
 *   text received from a server following a request being sent.
 * 
 *   `var resultText = XMLHttpRequest.responseText;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText`
 */
xml.XMLHttpRequest.response_text = (function xml$XMLHttpRequest$response_text(this$){
return this$.responseText();
});
/**
 * Property.
 * 
 *   The `xml.XMLHttpRequest` property responseType is an enumerated
 *   value specifying the type of data contained in the response.
 * 
 *   `var type = XMLHttpRequest.responseType;
 * 
 *   XMLHttpRequest.responseType = type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType`
 */
xml.XMLHttpRequest.response_type = (function xml$XMLHttpRequest$response_type(this$){
return this$.responseType();
});
/**
 * Property.
 * 
 *   The `xml.XMLHttpRequest` property responseType is an enumerated
 *   value specifying the type of data contained in the response.
 * 
 *   `var type = XMLHttpRequest.responseType;
 * 
 *   XMLHttpRequest.responseType = type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType`
 */
xml.XMLHttpRequest.set_response_type_BANG_ = (function xml$XMLHttpRequest$set_response_type_BANG_(this$,val){
return (this$["responseType"] = val);
});
/**
 * Property.
 * 
 *   The read-only XMLHttpRequest.responseURL property returns the
 *   URL of the response or the empty string if the URL is null. If
 *   URL is returned, any URL fragment present in the URL will be
 *   away. The value of responseURL will be the final URL obtained
 *   any redirects.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseURL`
 */
xml.XMLHttpRequest.response_url = (function xml$XMLHttpRequest$response_url(this$){
return this$.responseURL();
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.responseXML read-only property returns a `web.Document`
 *   the HTML or XML retrieved by the request; or null if the request
 *   unsuccessful, has not yet been sent, or if the data can't be
 *   as XML or HTML.
 * 
 *   `var data = XMLHttpRequest.responseXML;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML`
 */
xml.XMLHttpRequest.response_xml = (function xml$XMLHttpRequest$response_xml(this$){
return this$.responseXML();
});
/**
 * Property.
 * 
 *   The read-only XMLHttpRequest.status property returns the numerical
 *   status code of the XMLHttpRequest's response.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status`
 */
xml.XMLHttpRequest.status = (function xml$XMLHttpRequest$status(this$){
return this$.status();
});
/**
 * Property.
 * 
 *   The read-only XMLHttpRequest.status property returns the numerical
 *   status code of the XMLHttpRequest's response.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status`
 */
xml.XMLHttpRequest.set_status_BANG_ = (function xml$XMLHttpRequest$set_status_BANG_(this$,val){
return (this$["status"] = val);
});
/**
 * Property.
 * 
 *   The read-only XMLHttpRequest.statusText property returns a DOMString
 *   the response's status message as returned by the HTTP server.
 *   XMLHTTPRequest.status which indicates a numerical status code,
 *   property contains the text of the response status, such as \"OK\"
 *   \"Not Found\". If the request's readyState is in UNSENT or OPENED
 *   the value of statusText will be an empty string.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText`
 */
xml.XMLHttpRequest.status_text = (function xml$XMLHttpRequest$status_text(this$){
return this$.statusText();
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.timeout property is an unsigned long representing
 *   number of milliseconds a request can take before automatically
 *   terminated. The default value is 0, which means there is no timeout.
 *   shouldn't be used for synchronous XMLHttpRequests requests used
 *   a document environment or it will throw an InvalidAccessError
 *   When a timeout happens, a timeout event is fired.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout`
 */
xml.XMLHttpRequest.timeout = (function xml$XMLHttpRequest$timeout(this$){
return this$.timeout();
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.timeout property is an unsigned long representing
 *   number of milliseconds a request can take before automatically
 *   terminated. The default value is 0, which means there is no timeout.
 *   shouldn't be used for synchronous XMLHttpRequests requests used
 *   a document environment or it will throw an InvalidAccessError
 *   When a timeout happens, a timeout event is fired.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout`
 */
xml.XMLHttpRequest.set_timeout_BANG_ = (function xml$XMLHttpRequest$set_timeout_BANG_(this$,val){
return (this$["timeout"] = val);
});
/**
 * Property.
 * 
 *   The `xml.XMLHttpRequest` upload property returns an `xml.XMLHttpRequestUpload`
 *   that can be observed to monitor an upload's progress.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload`
 */
xml.XMLHttpRequest.upload = (function xml$XMLHttpRequest$upload(this$){
return this$.upload();
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.withCredentials property is a `web.Boolean`
 *   indicates whether or not cross-site Access-Control requests should
 *   made using credentials such as cookies, authorization headers
 *   TLS client certificates. Setting withCredentials has no effect
 *   same-site requests.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials`
 */
xml.XMLHttpRequest.with_credentials = (function xml$XMLHttpRequest$with_credentials(this$){
return this$.withCredentials();
});
/**
 * Property.
 * 
 *   The XMLHttpRequest.withCredentials property is a `web.Boolean`
 *   indicates whether or not cross-site Access-Control requests should
 *   made using credentials such as cookies, authorization headers
 *   TLS client certificates. Setting withCredentials has no effect
 *   same-site requests.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials`
 */
xml.XMLHttpRequest.set_with_credentials_BANG_ = (function xml$XMLHttpRequest$set_with_credentials_BANG_(this$,val){
return (this$["withCredentials"] = val);
});
/**
 * Property.
 * 
 *   XMLHttpRequest.channel is an nsIChannel that used by the object
 *   performing the request. This is null if the channel hasn't been
 *   yet. In the case of a multi-part request, this is the initial
 *   not the different parts in the multi-part request. Requires elevated
 *   to access.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/channel`
 */
xml.XMLHttpRequest.channel = (function xml$XMLHttpRequest$channel(this$){
return this$.channel();
});
/**
 * Property.
 * 
 *   XMLHttpRequest.channel is an nsIChannel that used by the object
 *   performing the request. This is null if the channel hasn't been
 *   yet. In the case of a multi-part request, this is the initial
 *   not the different parts in the multi-part request. Requires elevated
 *   to access.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/channel`
 */
xml.XMLHttpRequest.set_channel_BANG_ = (function xml$XMLHttpRequest$set_channel_BANG_(this$,val){
return (this$["channel"] = val);
});
/**
 * Property.
 * 
 *   XMLHttpRequest.mozAnon is a boolean. If true, the request will
 *   sent without cookies or authentication headers.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozAnon`
 */
xml.XMLHttpRequest.moz_anon = (function xml$XMLHttpRequest$moz_anon(this$){
return this$.mozAnon();
});
/**
 * Property.
 * 
 *   XMLHttpRequest.mozAnon is a boolean. If true, the request will
 *   sent without cookies or authentication headers.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozAnon`
 */
xml.XMLHttpRequest.set_moz_anon_BANG_ = (function xml$XMLHttpRequest$set_moz_anon_BANG_(this$,val){
return (this$["mozAnon"] = val);
});
/**
 * Property.
 * 
 *   mozSystem is a boolean. If true, the same origin policy is not
 *   on the request.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozSystem`
 */
xml.XMLHttpRequest.moz_system = (function xml$XMLHttpRequest$moz_system(this$){
return this$.mozSystem();
});
/**
 * Property.
 * 
 *   mozSystem is a boolean. If true, the same origin policy is not
 *   on the request.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozSystem`
 */
xml.XMLHttpRequest.set_moz_system_BANG_ = (function xml$XMLHttpRequest$set_moz_system_BANG_(this$,val){
return (this$["mozSystem"] = val);
});
/**
 * Property.
 * 
 *   XMLHttpRequest.mozBackgroundRequest is a Boolean, indicating
 *   the object represents a background service request.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozBackgroundRequest`
 */
xml.XMLHttpRequest.moz_background_request = (function xml$XMLHttpRequest$moz_background_request(this$){
return this$.mozBackgroundRequest();
});
/**
 * Property.
 * 
 *   XMLHttpRequest.mozBackgroundRequest is a Boolean, indicating
 *   the object represents a background service request.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozBackgroundRequest`
 */
xml.XMLHttpRequest.set_moz_background_request_BANG_ = (function xml$XMLHttpRequest$set_moz_background_request_BANG_(this$,val){
return (this$["mozBackgroundRequest"] = val);
});
/**
 * Property.
 * 
 *   Is an ArrayBuffer response to the request, written as a JavaScript
 *   array.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozResponseArrayBuffer`
 */
xml.XMLHttpRequest.moz_response_array_buffer = (function xml$XMLHttpRequest$moz_response_array_buffer(this$){
return this$.mozResponseArrayBuffer();
});
/**
 * Property.
 * 
 *   Is an ArrayBuffer response to the request, written as a JavaScript
 *   array.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozResponseArrayBuffer`
 */
xml.XMLHttpRequest.set_moz_response_array_buffer_BANG_ = (function xml$XMLHttpRequest$set_moz_response_array_buffer_BANG_(this$,val){
return (this$["mozResponseArrayBuffer"] = val);
});
/**
 * Property.
 * 
 *   This boolean indicates if the response is expected to be a stream
 *   possibly multiple XML documents.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/multipart`
 */
xml.XMLHttpRequest.multipart = (function xml$XMLHttpRequest$multipart(this$){
return this$.multipart();
});
/**
 * Property.
 * 
 *   This boolean indicates if the response is expected to be a stream
 *   possibly multiple XML documents.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/multipart`
 */
xml.XMLHttpRequest.set_multipart_BANG_ = (function xml$XMLHttpRequest$set_multipart_BANG_(this$,val){
return (this$["multipart"] = val);
});

//# sourceMappingURL=XMLHttpRequest.js.map?rel=1565798823782
