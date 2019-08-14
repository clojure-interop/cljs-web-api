// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaKeySession');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The MediaKeySession.close() method notifies that the current
 *   session is no longer needed, and that the content decryption
 *   should release any resources associated with this object and
 *   it. Then, it returns a `web.Promise`.
 * 
 *   `mediaKeySession.close().then(function() { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/close`
 */
media.MediaKeySession.close = (function media$MediaKeySession$close(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52520 = arguments.length;
var i__42557__auto___52521 = (0);
while(true){
if((i__42557__auto___52521 < len__42556__auto___52520)){
args__42563__auto__.push((arguments[i__42557__auto___52521]));

var G__52522 = (i__42557__auto___52521 + (1));
i__42557__auto___52521 = G__52522;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaKeySession.close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaKeySession.close.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.close,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaKeySession.close.cljs$lang$maxFixedArity = (1);

media.MediaKeySession.close.cljs$lang$applyTo = (function (seq52518){
var G__52519 = cljs.core.first.call(null,seq52518);
var seq52518__$1 = cljs.core.next.call(null,seq52518);
return media.MediaKeySession.close.cljs$core$IFn$_invoke$arity$variadic(G__52519,seq52518__$1);
});

/**
 * Method.
 * 
 *   The MediaKeySession.generateRequest() method returns a `web.Promise`
 *   generating a media request based on initialization data.
 * 
 *   `mediaKeySession.generateRequest().then(function) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/generateRequest`
 */
media.MediaKeySession.generate_request = (function media$MediaKeySession$generate_request(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52525 = arguments.length;
var i__42557__auto___52526 = (0);
while(true){
if((i__42557__auto___52526 < len__42556__auto___52525)){
args__42563__auto__.push((arguments[i__42557__auto___52526]));

var G__52527 = (i__42557__auto___52526 + (1));
i__42557__auto___52526 = G__52527;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaKeySession.generate_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaKeySession.generate_request.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.generateRequest,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaKeySession.generate_request.cljs$lang$maxFixedArity = (1);

media.MediaKeySession.generate_request.cljs$lang$applyTo = (function (seq52523){
var G__52524 = cljs.core.first.call(null,seq52523);
var seq52523__$1 = cljs.core.next.call(null,seq52523);
return media.MediaKeySession.generate_request.cljs$core$IFn$_invoke$arity$variadic(G__52524,seq52523__$1);
});

/**
 * Method.
 * 
 *   The MediaKeySession.load() method returns a `web.Promise` that
 *   to a boolean value after loading data for a specified session
 * 
 *   `mediaKeySession.load(sessionId).then(function(booleanValue) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/load`
 */
media.MediaKeySession.load = (function media$MediaKeySession$load(this$,session_id){
return this$.load(session_id);
});
/**
 * Method.
 * 
 *   The MediaKeySession.remove() method returns a `web.Promise` after
 *   any session data associated with the current object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/remove`
 */
media.MediaKeySession.remove = (function media$MediaKeySession$remove(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52530 = arguments.length;
var i__42557__auto___52531 = (0);
while(true){
if((i__42557__auto___52531 < len__42556__auto___52530)){
args__42563__auto__.push((arguments[i__42557__auto___52531]));

var G__52532 = (i__42557__auto___52531 + (1));
i__42557__auto___52531 = G__52532;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaKeySession.remove.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaKeySession.remove.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.remove,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaKeySession.remove.cljs$lang$maxFixedArity = (1);

media.MediaKeySession.remove.cljs$lang$applyTo = (function (seq52528){
var G__52529 = cljs.core.first.call(null,seq52528);
var seq52528__$1 = cljs.core.next.call(null,seq52528);
return media.MediaKeySession.remove.cljs$core$IFn$_invoke$arity$variadic(G__52529,seq52528__$1);
});

/**
 * Method.
 * 
 *   The MediaKeySession.update() method loads messages and licenses
 *   the CDM, and then returns a `web.Promise` .
 * 
 *   `mediaKeySession.update(response).then(function() { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/update`
 */
media.MediaKeySession.update = (function media$MediaKeySession$update(this$,response){
return this$.update(response);
});
/**
 * Property.
 * 
 *   The MediaKeySession.closed read-only property returns a `web.Promise`
 *   when a `media.MediaKeySession` closes. This promise can only
 *   fulfilled and is never rejected. Closing a session means that
 *   and keys associated with it are no longer valid for decrypting
 *   data.
 * 
 *   `var promise = mediaKeySessionObj.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/closed`
 */
media.MediaKeySession.closed = (function media$MediaKeySession$closed(this$){
return this$.closed();
});
/**
 * Property.
 * 
 *   The MediaKeySession.closed read-only property returns a `web.Promise`
 *   when a `media.MediaKeySession` closes. This promise can only
 *   fulfilled and is never rejected. Closing a session means that
 *   and keys associated with it are no longer valid for decrypting
 *   data.
 * 
 *   `var promise = mediaKeySessionObj.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/closed`
 */
media.MediaKeySession.set_closed_BANG_ = (function media$MediaKeySession$set_closed_BANG_(this$,val){
return (this$["closed"] = val);
});
/**
 * Property.
 * 
 *   The MediaKeySession.expiration read-only property returns the
 *   after which the keys in the current session can no longer be
 *   to decrypt media data, or NaN if no such time exists. This value
 *   determined by the CDM and measured in milliseconds since January
 *   1970, UTC. This value may change during a session lifetime, such
 *   when an action triggers the start of a window.
 * 
 *   `​var expirationTime = mediaKeySessionObj.expiration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/expiration`
 */
media.MediaKeySession.expiration = (function media$MediaKeySession$expiration(this$){
return this$.expiration();
});
/**
 * Property.
 * 
 *   The MediaKeySession.expiration read-only property returns the
 *   after which the keys in the current session can no longer be
 *   to decrypt media data, or NaN if no such time exists. This value
 *   determined by the CDM and measured in milliseconds since January
 *   1970, UTC. This value may change during a session lifetime, such
 *   when an action triggers the start of a window.
 * 
 *   `​var expirationTime = mediaKeySessionObj.expiration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/expiration`
 */
media.MediaKeySession.set_expiration_BANG_ = (function media$MediaKeySession$set_expiration_BANG_(this$,val){
return (this$["expiration"] = val);
});
/**
 * Property.
 * 
 *   The MediaKeySession.keyStatuses read-only property returns a
 *   to a read-only `media.MediaKeyStatusMap` of the current session's
 *   and their statuses.
 * 
 *   `var mediaKeyStatusMapObj = mediaKeySessionObj.keyStatuses;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/keyStatuses`
 */
media.MediaKeySession.key_statuses = (function media$MediaKeySession$key_statuses(this$){
return this$.keyStatuses();
});
/**
 * Property.
 * 
 *   The MediaKeySession.keyStatuses read-only property returns a
 *   to a read-only `media.MediaKeyStatusMap` of the current session's
 *   and their statuses.
 * 
 *   `var mediaKeyStatusMapObj = mediaKeySessionObj.keyStatuses;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/keyStatuses`
 */
media.MediaKeySession.set_key_statuses_BANG_ = (function media$MediaKeySession$set_key_statuses_BANG_(this$,val){
return (this$["keyStatuses"] = val);
});
/**
 * Property.
 * 
 *   The MediaKeySession.sessionId read-only property contains a unique
 *   generated by the CDM for the current media object and its associated
 *   or licenses.
 * 
 *   `​var sessionId = mediaKeySessionObj.sessionId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/sessionId`
 */
media.MediaKeySession.session_id = (function media$MediaKeySession$session_id(this$){
return this$.sessionId();
});
/**
 * Property.
 * 
 *   The MediaKeySession.sessionId read-only property contains a unique
 *   generated by the CDM for the current media object and its associated
 *   or licenses.
 * 
 *   `​var sessionId = mediaKeySessionObj.sessionId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/sessionId`
 */
media.MediaKeySession.set_session_id_BANG_ = (function media$MediaKeySession$set_session_id_BANG_(this$,val){
return (this$["sessionId"] = val);
});
/**
 * Property.
 * 
 *   The onkeystatuseschange property of the `media.MediaKeySession`
 *   an event handler, fired whenever a keystatuschange event ocurrs,
 *   there has been a change in the keys or their statuses within
 *   session.
 * 
 *   `MediaKeySession.onkeystatuseschange = function(keystatuschange) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onkeystatuseschange`
 */
media.MediaKeySession.onkeystatuseschange = (function media$MediaKeySession$onkeystatuseschange(this$){
return this$.onkeystatuseschange();
});
/**
 * Property.
 * 
 *   The onkeystatuseschange property of the `media.MediaKeySession`
 *   an event handler, fired whenever a keystatuschange event ocurrs,
 *   there has been a change in the keys or their statuses within
 *   session.
 * 
 *   `MediaKeySession.onkeystatuseschange = function(keystatuschange) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onkeystatuseschange`
 */
media.MediaKeySession.set_onkeystatuseschange_BANG_ = (function media$MediaKeySession$set_onkeystatuseschange_BANG_(this$,val){
return (this$["onkeystatuseschange"] = val);
});
/**
 * Property.
 * 
 *   The onmessage property of the `media.MediaKeySession` is an event
 *   fired whenever a `media.MediaKeyMessageEvent` occurs, denoting
 *   message is generated by the content decryption module.
 * 
 *   `MediaKeySession.onmessage = function(MediaKeyMessageEvent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onmessage`
 */
media.MediaKeySession.onmessage = (function media$MediaKeySession$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage property of the `media.MediaKeySession` is an event
 *   fired whenever a `media.MediaKeyMessageEvent` occurs, denoting
 *   message is generated by the content decryption module.
 * 
 *   `MediaKeySession.onmessage = function(MediaKeyMessageEvent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/onmessage`
 */
media.MediaKeySession.set_onmessage_BANG_ = (function media$MediaKeySession$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});

//# sourceMappingURL=MediaKeySession.js.map?rel=1565798855093
