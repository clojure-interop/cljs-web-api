// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaStreamTrack');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The applyConstraints() method of the `media.MediaStreamTrack`
 *   applies a set of constraints to the track; these constraints
 *   the Web site or app establish ideal values and acceptable ranges
 *   values for the constrainable properties of the track, such as
 *   rate, dimensions, echo cancelation, and so forth.
 * 
 *   `var appliedPromise = MediaStreamTrack.applyConstraints(constraints);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/applyConstraints`
 */
media.MediaStreamTrack.apply_constraints = (function media$MediaStreamTrack$apply_constraints(this$,constraints){
return this$.applyConstraints(constraints);
});
/**
 * Method.
 * 
 *   The clone() method of the `media.MediaStreamTrack` interface
 *   a duplicate of the MediaStreamTrack. This new MediaStreamTrack
 *   is identical except for its unique `web.id`.
 * 
 *   `var track = MediaStreamTrack.clone();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/clone`
 */
media.MediaStreamTrack.clone = (function media$MediaStreamTrack$clone(this$){
return this$.clone();
});
/**
 * Method.
 * 
 *   The getCapabilities() method of the `media.MediaStreamTrack`
 *   returns a `media.MediaTrackCapabilities` object which specifies
 *   values or range of values which each constrianable property,
 *   upon the platform and user agent.
 * 
 *   `var capabilities = MediaStreamTrack.getCapabilities();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getCapabilities`
 */
media.MediaStreamTrack.get_capabilities = (function media$MediaStreamTrack$get_capabilities(this$){
return this$.getCapabilities();
});
/**
 * Method.
 * 
 *   The getConstraints() method of the `media.MediaStreamTrack` interface
 *   a `media.MediaTrackConstraints` object containing the set of
 *   most recently established for the track using a prior call to
 *   These constraints indicate values and ranges of values that the
 *   site or application has specified are required or acceptable
 *   the included constrainable properties.
 * 
 *   `var constraints = MediaStreamTrack.getConstraints();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints`
 */
media.MediaStreamTrack.get_constraints = (function media$MediaStreamTrack$get_constraints(this$){
return this$.getConstraints();
});
/**
 * Method.
 * 
 *   The getSettings() method of the `media.MediaStreamTrack` interface
 *   a `media.MediaTrackSettings` object containing the current values
 *   each of the constrainable properties for the current MediaStreamTrack.
 * 
 *   `var settings = MediaStreamTrack.getSettings();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings`
 */
media.MediaStreamTrack.get_settings = (function media$MediaStreamTrack$get_settings(this$){
return this$.getSettings();
});
/**
 * Method.
 * 
 *   In short, the `media.MediaStreamTrack` method stop() method stops
 *   track.
 * 
 *   `MediaStreamTrack.stop();
 * 
 *   Calling stop() tells the user agent that the track's source—whatever that source may be, including files, network streams, or a local camera or microphone—is no longer needed by the MediaStreamTrack.  Since multiple tracks may use the same source (for example, if two tabs are using the device's microphone), the source itself isn't necessarily immediately stopped. It is instead disassociated from the track and the track object is stopped. Once no media tracks are using the source, the source may actually be completely stopped.
 * 
 *   Immediately after calling stop(), the `web.track` state is set to ended.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop`
 */
media.MediaStreamTrack.stop = (function media$MediaStreamTrack$stop(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43406 = arguments.length;
var i__42557__auto___43407 = (0);
while(true){
if((i__42557__auto___43407 < len__42556__auto___43406)){
args__42563__auto__.push((arguments[i__42557__auto___43407]));

var G__43408 = (i__42557__auto___43407 + (1));
i__42557__auto___43407 = G__43408;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaStreamTrack.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaStreamTrack.stop.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.stop,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaStreamTrack.stop.cljs$lang$maxFixedArity = (1);

media.MediaStreamTrack.stop.cljs$lang$applyTo = (function (seq43404){
var G__43405 = cljs.core.first.call(null,seq43404);
var seq43404__$1 = cljs.core.next.call(null,seq43404);
return media.MediaStreamTrack.stop.cljs$core$IFn$_invoke$arity$variadic(G__43405,seq43404__$1);
});

/**
 * Property.
 * 
 *   The enabled property on the `media.MediaStreamTrack` interface
 *   a Boolean value which is true if the track is allowed to render
 *   source stream or false if it is not. This can be used to intentionally
 *   a track.
 * 
 *   `var bool = track.enabled;
 *   track.enabled = [true | false];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled`
 */
media.MediaStreamTrack.enabled = (function media$MediaStreamTrack$enabled(this$){
return this$.enabled();
});
/**
 * Property.
 * 
 *   The enabled property on the `media.MediaStreamTrack` interface
 *   a Boolean value which is true if the track is allowed to render
 *   source stream or false if it is not. This can be used to intentionally
 *   a track.
 * 
 *   `var bool = track.enabled;
 *   track.enabled = [true | false];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled`
 */
media.MediaStreamTrack.set_enabled_BANG_ = (function media$MediaStreamTrack$set_enabled_BANG_(this$,val){
return (this$["enabled"] = val);
});
/**
 * Property.
 * 
 *   The read-only property MediaStreamTrack.id returns a `dom.DOMString`
 *   a unique identifier (GUID) for the track; it is generated by
 *   browser.
 * 
 *   `var id = track.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/id`
 */
media.MediaStreamTrack.id = (function media$MediaStreamTrack$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The read-only property MediaStreamTrack.kind returns a `dom.DOMString`
 *   to \"audio\" if the track is an audio track and to \"video\",
 *   it is a video track. It doesn't change if the track is deassociated
 *   its source.
 * 
 *   `var type = track.kind;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/kind`
 */
media.MediaStreamTrack.kind = (function media$MediaStreamTrack$kind(this$){
return this$.kind();
});
/**
 * Property.
 * 
 *   The read-only property MediaStreamTrack.label returns a `dom.DOMString`
 *   a user agent-assigned label that identifies the track source,
 *   in \"internal microphone\". The string may be left empty and
 *   empty as long as no source has been connected. When the track
 *   deassociated from its source, the label is not changed.
 * 
 *   `var name = track.label;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/label`
 */
media.MediaStreamTrack.label = (function media$MediaStreamTrack$label(this$){
return this$.label();
});
/**
 * Property.
 * 
 *   The muted read-only property of the `media.MediaStreamTrack`
 *   returns a `web.Boolean` value indicating whether or not the track
 *   currently unable to provide media output.
 * 
 *   `mutedFlag = MediaStreamTrack.muted;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/muted`
 */
media.MediaStreamTrack.muted = (function media$MediaStreamTrack$muted(this$){
return this$.muted();
});
/**
 * Property.
 * 
 *   The muted read-only property of the `media.MediaStreamTrack`
 *   returns a `web.Boolean` value indicating whether or not the track
 *   currently unable to provide media output.
 * 
 *   `mutedFlag = MediaStreamTrack.muted;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/muted`
 */
media.MediaStreamTrack.set_muted_BANG_ = (function media$MediaStreamTrack$set_muted_BANG_(this$,val){
return (this$["muted"] = val);
});
/**
 * Property.
 * 
 *   The MediaStreamTrack.onended event handler is used to specify
 *   function which serves as an `web.EventHandler` to be called when
 *   ended event occurs on the track. This event occurs when the track
 *   no longer provide data to the stream for any reason, including
 *   end of the media input being reached, the user revoking needed
 *   the source device being removed, or the remote peer ending a
 * 
 *   `MediaStreamTrack.onended = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onended`
 */
media.MediaStreamTrack.onended = (function media$MediaStreamTrack$onended(this$){
return this$.onended();
});
/**
 * Property.
 * 
 *   The MediaStreamTrack.onended event handler is used to specify
 *   function which serves as an `web.EventHandler` to be called when
 *   ended event occurs on the track. This event occurs when the track
 *   no longer provide data to the stream for any reason, including
 *   end of the media input being reached, the user revoking needed
 *   the source device being removed, or the remote peer ending a
 * 
 *   `MediaStreamTrack.onended = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onended`
 */
media.MediaStreamTrack.set_onended_BANG_ = (function media$MediaStreamTrack$set_onended_BANG_(this$,val){
return (this$["onended"] = val);
});
/**
 * Property.
 * 
 *   `media.MediaStreamTrack`'s onmute event handler is called when
 *   mute event is received.
 * 
 *   `track.onmute = muteHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onmute`
 */
media.MediaStreamTrack.onmute = (function media$MediaStreamTrack$onmute(this$){
return this$.onmute();
});
/**
 * Property.
 * 
 *   `media.MediaStreamTrack`'s onmute event handler is called when
 *   mute event is received.
 * 
 *   `track.onmute = muteHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onmute`
 */
media.MediaStreamTrack.set_onmute_BANG_ = (function media$MediaStreamTrack$set_onmute_BANG_(this$,val){
return (this$["onmute"] = val);
});
/**
 * Property.
 * 
 *   The MediaStreamTrack.onoverconstrained event handler is a property
 *   when the overconstrained event is received. Such an event is
 *   when the track is again able to send data.
 * 
 *   `track.onoverconstrained = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onoverconstrained`
 */
media.MediaStreamTrack.onoverconstrained = (function media$MediaStreamTrack$onoverconstrained(this$){
return this$.onoverconstrained();
});
/**
 * Property.
 * 
 *   The MediaStreamTrack.onoverconstrained event handler is a property
 *   when the overconstrained event is received. Such an event is
 *   when the track is again able to send data.
 * 
 *   `track.onoverconstrained = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onoverconstrained`
 */
media.MediaStreamTrack.set_onoverconstrained_BANG_ = (function media$MediaStreamTrack$set_onoverconstrained_BANG_(this$,val){
return (this$["onoverconstrained"] = val);
});
/**
 * Property.
 * 
 *   `media.MediaStreamTrack`'s onunmute event handler is called when
 *   unmute event is received. Such an event is sent when the track
 *   again able to send data.
 * 
 *   `track.onunmute = unmuteHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onunmute`
 */
media.MediaStreamTrack.onunmute = (function media$MediaStreamTrack$onunmute(this$){
return this$.onunmute();
});
/**
 * Property.
 * 
 *   `media.MediaStreamTrack`'s onunmute event handler is called when
 *   unmute event is received. Such an event is sent when the track
 *   again able to send data.
 * 
 *   `track.onunmute = unmuteHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/onunmute`
 */
media.MediaStreamTrack.set_onunmute_BANG_ = (function media$MediaStreamTrack$set_onunmute_BANG_(this$,val){
return (this$["onunmute"] = val);
});
/**
 * Property.
 * 
 *   The read-only property MediaStreamTrack.readyState returns an
 *   value giving the status of the track.
 * 
 *   `var state = track.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/readyState`
 */
media.MediaStreamTrack.ready_state = (function media$MediaStreamTrack$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The MediaStreamTrack.remote read-only property allows Javascript
 *   know whether a WebRTC MediaStreamTrack is from a remote source
 *   a local one. It returns a `web.Boolean` with a value of true
 *   the track is sourced remotely (that is, sourced by an RTCPeerConnection),
 *   false if it is sourced locally.
 * 
 *   `var bool ​= track.remote;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/remote`
 */
media.MediaStreamTrack.remote = (function media$MediaStreamTrack$remote(this$){
return this$.remote();
});

//# sourceMappingURL=MediaStreamTrack.js.map?rel=1565798806359
