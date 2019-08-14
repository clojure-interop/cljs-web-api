// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TrackDefault');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The TrackDefault() constructor of the `web.TrackDefault` interface constructs and returns a new TrackDefault object.
 * 
 *   type
 *   A `dom.DOMString` specifying a media segment data type for the `web.SourceBuffer` to contain. Can be audio, video, or text.
 *   language
 *   A `dom.DOMString` specifying a default language for the `web.SourceBuffer` to use when an initialization segment does not contain language information for a new track.
 *   label
 *   A `dom.DOMString` specifying a default label for the `web.SourceBuffer` to use when an initialization segment does not contain label information for a new track.
 *   kinds
 *   An array (sequence) of `dom.DOMString`s specifying default kinds for the `web.SourceBuffer` to use when an initialization segment does not contain kind information for a new track.
 *   byteStreamTrackID Optional
 *   A `dom.DOMString` specifying the ID of the specific track that the `web.SourceBuffer` should apply to. If not specified, this value will be an empty string and the SourceBuffer can contain any tracks of the specified type.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/TrackDefault`
 */
web.TrackDefault.constructor$ = TrackDefault;
/**
 * Property.
 * 
 *   The byteStreamTrackID read-only property of the `web.TrackDefault`
 *   returns the ID of the specific track that the `web.SourceBuffer`
 *   apply to.
 * 
 *   `var myID = TrackDefault.byteStreamTrackID;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`
 */
web.TrackDefault.byte_stream_track_id = (function web$TrackDefault$byte_stream_track_id(this$){
return this$.byteStreamTrackID();
});
/**
 * Property.
 * 
 *   The byteStreamTrackID read-only property of the `web.TrackDefault`
 *   returns the ID of the specific track that the `web.SourceBuffer`
 *   apply to.
 * 
 *   `var myID = TrackDefault.byteStreamTrackID;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/byteStreamTrackID`
 */
web.TrackDefault.set_byte_stream_track_id_BANG_ = (function web$TrackDefault$set_byte_stream_track_id_BANG_(this$,val){
return (this$["byteStreamTrackID"] = val);
});
/**
 * Property.
 * 
 *   The kinds read-only property of the `web.TrackDefault` interface
 *   default kinds for an associated `web.SourceBuffer` to use when
 *   initialization segment does not contain label information for
 *   new track.
 * 
 *   `var mykinds = TrackDefault.kinds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`
 */
web.TrackDefault.kinds = (function web$TrackDefault$kinds(this$){
return this$.kinds();
});
/**
 * Property.
 * 
 *   The kinds read-only property of the `web.TrackDefault` interface
 *   default kinds for an associated `web.SourceBuffer` to use when
 *   initialization segment does not contain label information for
 *   new track.
 * 
 *   `var mykinds = TrackDefault.kinds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/kinds`
 */
web.TrackDefault.set_kinds_BANG_ = (function web$TrackDefault$set_kinds_BANG_(this$,val){
return (this$["kinds"] = val);
});
/**
 * Property.
 * 
 *   The label read-only property of the `web.TrackDefault` interface
 *   the default label for an associated `web.SourceBuffer` to use
 *   an initialization segment does not contain label information
 *   a new track.
 * 
 *   `var mylabel = TrackDefault.label;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`
 */
web.TrackDefault.label = (function web$TrackDefault$label(this$){
return this$.label();
});
/**
 * Property.
 * 
 *   The label read-only property of the `web.TrackDefault` interface
 *   the default label for an associated `web.SourceBuffer` to use
 *   an initialization segment does not contain label information
 *   a new track.
 * 
 *   `var mylabel = TrackDefault.label;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/label`
 */
web.TrackDefault.set_label_BANG_ = (function web$TrackDefault$set_label_BANG_(this$,val){
return (this$["label"] = val);
});
/**
 * Property.
 * 
 *   The language read-only property of the `web.TrackDefault` interface
 *   a default language for an associated `web.SourceBuffer` to use
 *   an initialization segment does not contain language information
 *   a new track.
 * 
 *   `var mylanguage = TrackDefault.language;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`
 */
web.TrackDefault.language = (function web$TrackDefault$language(this$){
return this$.language();
});
/**
 * Property.
 * 
 *   The language read-only property of the `web.TrackDefault` interface
 *   a default language for an associated `web.SourceBuffer` to use
 *   an initialization segment does not contain language information
 *   a new track.
 * 
 *   `var mylanguage = TrackDefault.language;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/language`
 */
web.TrackDefault.set_language_BANG_ = (function web$TrackDefault$set_language_BANG_(this$,val){
return (this$["language"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.TrackDefault` interface
 *   the type of track that this `web.SourceBuffer`'s media segment
 *   relates to (i.e. audio, video, or text track.)
 * 
 *   `var myType = TrackDefault.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`
 */
web.TrackDefault.type = (function web$TrackDefault$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.TrackDefault` interface
 *   the type of track that this `web.SourceBuffer`'s media segment
 *   relates to (i.e. audio, video, or text track.)
 * 
 *   `var myType = TrackDefault.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TrackDefault/type`
 */
web.TrackDefault.set_type_BANG_ = (function web$TrackDefault$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=TrackDefault.js.map?rel=1565798807674
