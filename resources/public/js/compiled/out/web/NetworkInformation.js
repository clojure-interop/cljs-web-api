// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.NetworkInformation');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The downlink read-only property of the `web.NetworkInformation`
 *   returns the effective bandwidth estimate in megabits per second,
 *   to the nearest multiple of 25 kilobits per seconds. This value
 *   based on recently observed application layer throughput across
 *   active connections, excluding connections made to a private address
 *   In the absence of recent bandwidth measurement data, the attribute
 *   is determined by the properties of the underlying connection
 * 
 *   `var downLink = NetworkInformation.downlink`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink`
 */
web.NetworkInformation.downlink = (function web$NetworkInformation$downlink(this$){
return this$.downlink();
});
/**
 * Property.
 * 
 *   The downlink read-only property of the `web.NetworkInformation`
 *   returns the effective bandwidth estimate in megabits per second,
 *   to the nearest multiple of 25 kilobits per seconds. This value
 *   based on recently observed application layer throughput across
 *   active connections, excluding connections made to a private address
 *   In the absence of recent bandwidth measurement data, the attribute
 *   is determined by the properties of the underlying connection
 * 
 *   `var downLink = NetworkInformation.downlink`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink`
 */
web.NetworkInformation.set_downlink_BANG_ = (function web$NetworkInformation$set_downlink_BANG_(this$,val){
return (this$["downlink"] = val);
});
/**
 * Property.
 * 
 *   The NetworkInformation.downlinkMax read-only property returns
 *   maximum downlink speed, in megabits per second (Mbps), for the
 *   connection technology.
 * 
 *   `var max = NetworkInformation.downlinkMax`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlinkMax`
 */
web.NetworkInformation.downlink_max = (function web$NetworkInformation$downlink_max(this$){
return this$.downlinkMax();
});
/**
 * Property.
 * 
 *   The NetworkInformation.onchange event handler contains the code
 *   is fired when connection information changes, and the change
 *   received by the `web.NetworkInformation` object.
 * 
 *   `netInfo.onchange = function() { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/onchange`
 */
web.NetworkInformation.onchange = (function web$NetworkInformation$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The NetworkInformation.onchange event handler contains the code
 *   is fired when connection information changes, and the change
 *   received by the `web.NetworkInformation` object.
 * 
 *   `netInfo.onchange = function() { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/onchange`
 */
web.NetworkInformation.set_onchange_BANG_ = (function web$NetworkInformation$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The NetworkInformation.rtt read-only property returns the estimated
 *   round-trip time of the current connection, rounded to the nearest
 *   of 25 milliseconds. This value is based on recently observed
 *   RTT measurements across recently active connections. It excludes
 *   made to a private address space. If no recent measurement data
 *   available, the value is based on the properties of the underlying
 *   technology.
 * 
 *   `rtt = NetworkInformation.rtt`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/rtt`
 */
web.NetworkInformation.rtt = (function web$NetworkInformation$rtt(this$){
return this$.rtt();
});
/**
 * Property.
 * 
 *   The NetworkInformation.saveData read-only property of the `web.NetworkInformation`
 *   returns true if the user has set a reduced data usage option
 *   the user agent.
 * 
 *   `var saveData = NetworkInformation.saveData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData`
 */
web.NetworkInformation.save_data = (function web$NetworkInformation$save_data(this$){
return this$.saveData();
});
/**
 * Property.
 * 
 *   The NetworkInformation.type read-only property returns the type
 *   connection a device is using to communicate with the network.
 * 
 *   `var type = netInfo.type`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/type`
 */
web.NetworkInformation.type = (function web$NetworkInformation$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The effectiveType read-only property of the `web.NetworkInformation`
 *   returns the effective type of the connection meaning one of 'slow-2g',
 *   '3g', or '4g'. This value is determined using a combination of
 *   observed, round-trip time and downlink values.
 * 
 *   `var effectiveType = NetworkInformation.effectiveType`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType`
 */
web.NetworkInformation.effective_type = (function web$NetworkInformation$effective_type(this$){
return this$.effectiveType();
});
/**
 * Property.
 * 
 *   The effectiveType read-only property of the `web.NetworkInformation`
 *   returns the effective type of the connection meaning one of 'slow-2g',
 *   '3g', or '4g'. This value is determined using a combination of
 *   observed, round-trip time and downlink values.
 * 
 *   `var effectiveType = NetworkInformation.effectiveType`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType`
 */
web.NetworkInformation.set_effective_type_BANG_ = (function web$NetworkInformation$set_effective_type_BANG_(this$,val){
return (this$["effectiveType"] = val);
});

//# sourceMappingURL=NetworkInformation.js.map?rel=1565798851095
