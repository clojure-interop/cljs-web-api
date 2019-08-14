// Compiled by ClojureScript 1.9.946 {}
goog.provide('performance.PerformanceResourceTiming');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The toJSON() method is a serializer that returns a JSON representation
 *   the `performance.PerformanceResourceTiming` object.
 * 
 *   `json = resourcePerfEntry.toJSON();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/toJSON`
 */
performance.PerformanceResourceTiming.to_json = (function performance$PerformanceResourceTiming$to_json(this$){
return this$.toJSON();
});
/**
 * Property.
 * 
 *   The connectEnd read-only property returns the `web.timestamp`
 *   after the browser finishes establishing the connection to the
 *   to retrieve the resource. The timestamp value includes the time
 *   to establish the transport connection, as well as other time
 *   such as SSL handshake and SOCKS authentication.
 * 
 *   `resource.connectEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectEnd`
 */
performance.PerformanceResourceTiming.connect_end = (function performance$PerformanceResourceTiming$connect_end(this$){
return this$.connectEnd();
});
/**
 * Property.
 * 
 *   The connectEnd read-only property returns the `web.timestamp`
 *   after the browser finishes establishing the connection to the
 *   to retrieve the resource. The timestamp value includes the time
 *   to establish the transport connection, as well as other time
 *   such as SSL handshake and SOCKS authentication.
 * 
 *   `resource.connectEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectEnd`
 */
performance.PerformanceResourceTiming.set_connect_end_BANG_ = (function performance$PerformanceResourceTiming$set_connect_end_BANG_(this$,val){
return (this$["connectEnd"] = val);
});
/**
 * Property.
 * 
 *   The connectStart read-only property returns the `web.timestamp`
 *   before the user agent starts establishing the connection to the
 *   to retrieve the resource.
 * 
 *   `resource.connectStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectStart`
 */
performance.PerformanceResourceTiming.connect_start = (function performance$PerformanceResourceTiming$connect_start(this$){
return this$.connectStart();
});
/**
 * Property.
 * 
 *   The connectStart read-only property returns the `web.timestamp`
 *   before the user agent starts establishing the connection to the
 *   to retrieve the resource.
 * 
 *   `resource.connectStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectStart`
 */
performance.PerformanceResourceTiming.set_connect_start_BANG_ = (function performance$PerformanceResourceTiming$set_connect_start_BANG_(this$,val){
return (this$["connectStart"] = val);
});
/**
 * Property.
 * 
 *   The decodedBodySize read-only property returns the size (in octets)
 *   from the fetch (HTTP or cache) of the message body, after removing
 *   applied content-codings. If the resource is retrieved from an
 *   cache or local resources, it returns the size of the payload
 *   removing any applied content-codings.
 * 
 *   `resource.decodedBodySize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/decodedBodySize`
 */
performance.PerformanceResourceTiming.decoded_body_size = (function performance$PerformanceResourceTiming$decoded_body_size(this$){
return this$.decodedBodySize();
});
/**
 * Property.
 * 
 *   The decodedBodySize read-only property returns the size (in octets)
 *   from the fetch (HTTP or cache) of the message body, after removing
 *   applied content-codings. If the resource is retrieved from an
 *   cache or local resources, it returns the size of the payload
 *   removing any applied content-codings.
 * 
 *   `resource.decodedBodySize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/decodedBodySize`
 */
performance.PerformanceResourceTiming.set_decoded_body_size_BANG_ = (function performance$PerformanceResourceTiming$set_decoded_body_size_BANG_(this$,val){
return (this$["decodedBodySize"] = val);
});
/**
 * Property.
 * 
 *   The domainLookupEnd read-only property returns the `web.timestamp`
 *   after the browser finishes the domain name lookup for the resource.
 * 
 *   `resource.domainLookupEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupEnd`
 */
performance.PerformanceResourceTiming.domain_lookup_end = (function performance$PerformanceResourceTiming$domain_lookup_end(this$){
return this$.domainLookupEnd();
});
/**
 * Property.
 * 
 *   The domainLookupEnd read-only property returns the `web.timestamp`
 *   after the browser finishes the domain name lookup for the resource.
 * 
 *   `resource.domainLookupEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupEnd`
 */
performance.PerformanceResourceTiming.set_domain_lookup_end_BANG_ = (function performance$PerformanceResourceTiming$set_domain_lookup_end_BANG_(this$,val){
return (this$["domainLookupEnd"] = val);
});
/**
 * Property.
 * 
 *   The domainLookupStart read-only property returns the `web.timestamp`
 *   before the browser starts the domain name lookup for the resource.
 * 
 *   `resource.domainLookupStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupStart`
 */
performance.PerformanceResourceTiming.domain_lookup_start = (function performance$PerformanceResourceTiming$domain_lookup_start(this$){
return this$.domainLookupStart();
});
/**
 * Property.
 * 
 *   The domainLookupStart read-only property returns the `web.timestamp`
 *   before the browser starts the domain name lookup for the resource.
 * 
 *   `resource.domainLookupStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupStart`
 */
performance.PerformanceResourceTiming.set_domain_lookup_start_BANG_ = (function performance$PerformanceResourceTiming$set_domain_lookup_start_BANG_(this$,val){
return (this$["domainLookupStart"] = val);
});
/**
 * Property.
 * 
 *   The encodedBodySize read-only property represents the size (in
 *   received from the fetch (HTTP or cache), of the payload body,
 *   removing any applied content-codings.
 * 
 *   `resource.encodedBodySize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/encodedBodySize`
 */
performance.PerformanceResourceTiming.encoded_body_size = (function performance$PerformanceResourceTiming$encoded_body_size(this$){
return this$.encodedBodySize();
});
/**
 * Property.
 * 
 *   The encodedBodySize read-only property represents the size (in
 *   received from the fetch (HTTP or cache), of the payload body,
 *   removing any applied content-codings.
 * 
 *   `resource.encodedBodySize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/encodedBodySize`
 */
performance.PerformanceResourceTiming.set_encoded_body_size_BANG_ = (function performance$PerformanceResourceTiming$set_encoded_body_size_BANG_(this$,val){
return (this$["encodedBodySize"] = val);
});
/**
 * Property.
 * 
 *   The fetchStart read-only property represents a `web.timestamp`
 *   before the browser starts to fetch the resource.
 * 
 *   `resource.fetchStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/fetchStart`
 */
performance.PerformanceResourceTiming.fetch_start = (function performance$PerformanceResourceTiming$fetch_start(this$){
return this$.fetchStart();
});
/**
 * Property.
 * 
 *   The fetchStart read-only property represents a `web.timestamp`
 *   before the browser starts to fetch the resource.
 * 
 *   `resource.fetchStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/fetchStart`
 */
performance.PerformanceResourceTiming.set_fetch_start_BANG_ = (function performance$PerformanceResourceTiming$set_fetch_start_BANG_(this$,val){
return (this$["fetchStart"] = val);
});
/**
 * Property.
 * 
 *   The initiatorType read-only property is a `web.string` that represents
 *   type of resource that initiated the performance event.
 * 
 *   `resource.initiatorType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`
 */
performance.PerformanceResourceTiming.initiator_type = (function performance$PerformanceResourceTiming$initiator_type(this$){
return this$.initiatorType();
});
/**
 * Property.
 * 
 *   The initiatorType read-only property is a `web.string` that represents
 *   type of resource that initiated the performance event.
 * 
 *   `resource.initiatorType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`
 */
performance.PerformanceResourceTiming.set_initiator_type_BANG_ = (function performance$PerformanceResourceTiming$set_initiator_type_BANG_(this$,val){
return (this$["initiatorType"] = val);
});
/**
 * Property.
 * 
 *   The nextHopProtocol read-only property is a `web.string` representing
 *   network protocol used to fetch the resource, as identified by
 *   ALPN Protocol ID (RFC7301).
 * 
 *   `resource.nextHopProtocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/nextHopProtocol`
 */
performance.PerformanceResourceTiming.next_hop_protocol = (function performance$PerformanceResourceTiming$next_hop_protocol(this$){
return this$.nextHopProtocol();
});
/**
 * Property.
 * 
 *   The nextHopProtocol read-only property is a `web.string` representing
 *   network protocol used to fetch the resource, as identified by
 *   ALPN Protocol ID (RFC7301).
 * 
 *   `resource.nextHopProtocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/nextHopProtocol`
 */
performance.PerformanceResourceTiming.set_next_hop_protocol_BANG_ = (function performance$PerformanceResourceTiming$set_next_hop_protocol_BANG_(this$,val){
return (this$["nextHopProtocol"] = val);
});
/**
 * Property.
 * 
 *   The redirectEnd read-only property returns a `web.timestamp`
 *   after receiving the last byte of the response of the last redirect.
 * 
 *   `resource.redirectEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectEnd`
 */
performance.PerformanceResourceTiming.redirect_end = (function performance$PerformanceResourceTiming$redirect_end(this$){
return this$.redirectEnd();
});
/**
 * Property.
 * 
 *   The redirectEnd read-only property returns a `web.timestamp`
 *   after receiving the last byte of the response of the last redirect.
 * 
 *   `resource.redirectEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectEnd`
 */
performance.PerformanceResourceTiming.set_redirect_end_BANG_ = (function performance$PerformanceResourceTiming$set_redirect_end_BANG_(this$,val){
return (this$["redirectEnd"] = val);
});
/**
 * Property.
 * 
 *   The redirectStart read-only property returns a `web.timestamp`
 *   the start time of the fetch which that initiates the redirect.
 * 
 *   `resource.redirectStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart`
 */
performance.PerformanceResourceTiming.redirect_start = (function performance$PerformanceResourceTiming$redirect_start(this$){
return this$.redirectStart();
});
/**
 * Property.
 * 
 *   The redirectStart read-only property returns a `web.timestamp`
 *   the start time of the fetch which that initiates the redirect.
 * 
 *   `resource.redirectStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart`
 */
performance.PerformanceResourceTiming.set_redirect_start_BANG_ = (function performance$PerformanceResourceTiming$set_redirect_start_BANG_(this$,val){
return (this$["redirectStart"] = val);
});
/**
 * Property.
 * 
 *   The requestStart read-only property returns a `web.timestamp`
 *   the time immediately before the browser starts requesting the
 *   from the server, cache, or local resource. If the transport connection
 *   and the browser retires the request, the value returned will
 *   the start of the retry request.
 * 
 *   `resource.requestStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/requestStart`
 */
performance.PerformanceResourceTiming.request_start = (function performance$PerformanceResourceTiming$request_start(this$){
return this$.requestStart();
});
/**
 * Property.
 * 
 *   The requestStart read-only property returns a `web.timestamp`
 *   the time immediately before the browser starts requesting the
 *   from the server, cache, or local resource. If the transport connection
 *   and the browser retires the request, the value returned will
 *   the start of the retry request.
 * 
 *   `resource.requestStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/requestStart`
 */
performance.PerformanceResourceTiming.set_request_start_BANG_ = (function performance$PerformanceResourceTiming$set_request_start_BANG_(this$,val){
return (this$["requestStart"] = val);
});
/**
 * Property.
 * 
 *   The responseEnd read-only property returns a `web.timestamp`
 *   after the browser receives the last byte of the resource or immediately
 *   the transport connection is closed, whichever comes first.
 * 
 *   `resource.responseEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseEnd`
 */
performance.PerformanceResourceTiming.response_end = (function performance$PerformanceResourceTiming$response_end(this$){
return this$.responseEnd();
});
/**
 * Property.
 * 
 *   The responseEnd read-only property returns a `web.timestamp`
 *   after the browser receives the last byte of the resource or immediately
 *   the transport connection is closed, whichever comes first.
 * 
 *   `resource.responseEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseEnd`
 */
performance.PerformanceResourceTiming.set_response_end_BANG_ = (function performance$PerformanceResourceTiming$set_response_end_BANG_(this$,val){
return (this$["responseEnd"] = val);
});
/**
 * Property.
 * 
 *   The responseStart read-only property returns a `web.timestamp`
 *   after the browser receives the first byte of the response from
 *   server, cache, or local resource.
 * 
 *   `resource.responseStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStart`
 */
performance.PerformanceResourceTiming.response_start = (function performance$PerformanceResourceTiming$response_start(this$){
return this$.responseStart();
});
/**
 * Property.
 * 
 *   The responseStart read-only property returns a `web.timestamp`
 *   after the browser receives the first byte of the response from
 *   server, cache, or local resource.
 * 
 *   `resource.responseStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStart`
 */
performance.PerformanceResourceTiming.set_response_start_BANG_ = (function performance$PerformanceResourceTiming$set_response_start_BANG_(this$,val){
return (this$["responseStart"] = val);
});
/**
 * Property.
 * 
 *   The secureConnectionStart read-only property returns a `web.timestamp`
 *   before the browser starts the handshake process to secure the
 *   connection. If a secure connection is not used, the property
 *   zero.
 * 
 *   `resource.secureConnectionStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/secureConnectionStart`
 */
performance.PerformanceResourceTiming.secure_connection_start = (function performance$PerformanceResourceTiming$secure_connection_start(this$){
return this$.secureConnectionStart();
});
/**
 * Property.
 * 
 *   The secureConnectionStart read-only property returns a `web.timestamp`
 *   before the browser starts the handshake process to secure the
 *   connection. If a secure connection is not used, the property
 *   zero.
 * 
 *   `resource.secureConnectionStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/secureConnectionStart`
 */
performance.PerformanceResourceTiming.set_secure_connection_start_BANG_ = (function performance$PerformanceResourceTiming$set_secure_connection_start_BANG_(this$,val){
return (this$["secureConnectionStart"] = val);
});
/**
 * Property.
 * 
 *   The serverTiming read-only property returns an array of `performance.PerformanceServerTiming`
 *   containing server timing metrics.
 * 
 *   `resource.serverTiming;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/serverTiming`
 */
performance.PerformanceResourceTiming.server_timing = (function performance$PerformanceResourceTiming$server_timing(this$){
return this$.serverTiming();
});
/**
 * Property.
 * 
 *   The serverTiming read-only property returns an array of `performance.PerformanceServerTiming`
 *   containing server timing metrics.
 * 
 *   `resource.serverTiming;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/serverTiming`
 */
performance.PerformanceResourceTiming.set_server_timing_BANG_ = (function performance$PerformanceResourceTiming$set_server_timing_BANG_(this$,val){
return (this$["serverTiming"] = val);
});
/**
 * Property.
 * 
 *   The transferSize read-only property represents the size (in octets)
 *   the fetched resource. The size includes the response header fields
 *   the response payload body (as defined by RFC7230).
 * 
 *   `resource.transferSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/transferSize`
 */
performance.PerformanceResourceTiming.transfer_size = (function performance$PerformanceResourceTiming$transfer_size(this$){
return this$.transferSize();
});
/**
 * Property.
 * 
 *   The transferSize read-only property represents the size (in octets)
 *   the fetched resource. The size includes the response header fields
 *   the response payload body (as defined by RFC7230).
 * 
 *   `resource.transferSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/transferSize`
 */
performance.PerformanceResourceTiming.set_transfer_size_BANG_ = (function performance$PerformanceResourceTiming$set_transfer_size_BANG_(this$,val){
return (this$["transferSize"] = val);
});
/**
 * Property.
 * 
 *   The workerStart read-only property of the `performance.PerformanceResourceTiming`
 *   returns a `dom.DOMHighResTimeStamp` immediately before dispatching
 *   `web.FetchEvent` if a Service Worker thread is already running,
 *   immediately before starting the Service Worker thread if it is
 *   already running. If the resource is not intercepted by a Service
 *   the property will always return 0.
 * 
 *   `resource.workerStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/workerStart`
 */
performance.PerformanceResourceTiming.worker_start = (function performance$PerformanceResourceTiming$worker_start(this$){
return this$.workerStart();
});
/**
 * Property.
 * 
 *   The workerStart read-only property of the `performance.PerformanceResourceTiming`
 *   returns a `dom.DOMHighResTimeStamp` immediately before dispatching
 *   `web.FetchEvent` if a Service Worker thread is already running,
 *   immediately before starting the Service Worker thread if it is
 *   already running. If the resource is not intercepted by a Service
 *   the property will always return 0.
 * 
 *   `resource.workerStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/workerStart`
 */
performance.PerformanceResourceTiming.set_worker_start_BANG_ = (function performance$PerformanceResourceTiming$set_worker_start_BANG_(this$,val){
return (this$["workerStart"] = val);
});
/**
 * Property.
 * 
 *   The entryType property returns a `dom.DOMString` representing
 *   type of performance metric such as, for example, \"mark\". This
 *   is read only.
 * 
 *   `var type = entry.entryType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`
 */
performance.PerformanceResourceTiming.entry_type = (function performance$PerformanceResourceTiming$entry_type(this$){
return this$.entryType();
});
/**
 * Property.
 * 
 *   The entryType property returns a `dom.DOMString` representing
 *   type of performance metric such as, for example, \"mark\". This
 *   is read only.
 * 
 *   `var type = entry.entryType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`
 */
performance.PerformanceResourceTiming.set_entry_type_BANG_ = (function performance$PerformanceResourceTiming$set_entry_type_BANG_(this$,val){
return (this$["entryType"] = val);
});
/**
 * Property.
 * 
 *   The name property of the `performance.PerformanceEntry` interface
 *   a value that further specifies the value returned by the `performance.PerformanceEntry.entryType`
 *   This property is read only.
 * 
 *   `var name = entry.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`
 */
performance.PerformanceResourceTiming.name = (function performance$PerformanceResourceTiming$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name property of the `performance.PerformanceEntry` interface
 *   a value that further specifies the value returned by the `performance.PerformanceEntry.entryType`
 *   This property is read only.
 * 
 *   `var name = entry.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`
 */
performance.PerformanceResourceTiming.set_name_BANG_ = (function performance$PerformanceResourceTiming$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The startTime property returns the first recorded `web.timestamp`
 *   the `web.performance entry`.
 * 
 *   `entry.startTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`
 */
performance.PerformanceResourceTiming.start_time = (function performance$PerformanceResourceTiming$start_time(this$){
return this$.startTime();
});
/**
 * Property.
 * 
 *   The startTime property returns the first recorded `web.timestamp`
 *   the `web.performance entry`.
 * 
 *   `entry.startTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`
 */
performance.PerformanceResourceTiming.set_start_time_BANG_ = (function performance$PerformanceResourceTiming$set_start_time_BANG_(this$,val){
return (this$["startTime"] = val);
});
/**
 * Property.
 * 
 *   The duration property returns a `web.timestamp` that is the duration
 *   the `web.performance entry`.
 * 
 *   `entry.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`
 */
performance.PerformanceResourceTiming.duration = (function performance$PerformanceResourceTiming$duration(this$){
return this$.duration();
});
/**
 * Property.
 * 
 *   The duration property returns a `web.timestamp` that is the duration
 *   the `web.performance entry`.
 * 
 *   `entry.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`
 */
performance.PerformanceResourceTiming.set_duration_BANG_ = (function performance$PerformanceResourceTiming$set_duration_BANG_(this$,val){
return (this$["duration"] = val);
});

//# sourceMappingURL=PerformanceResourceTiming.js.map?rel=1565798837541
