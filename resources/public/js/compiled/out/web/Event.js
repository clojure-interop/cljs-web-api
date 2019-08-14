// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Event');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Event() constructor creates a new `web.Event`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/Event`
 */
web.Event.constructor$ = Event;
/**
 * Method.
 * 
 *   The composedPath() method of the `web.Event` interface returns
 *   event’s path which is an array of the objects on which listeners
 *   be invoked. This does not include nodes in shadow trees if the
 *   root was created with its `web.ShadowRoot.mode` closed.
 * 
 *   `var composed = Event.composedPath();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`
 */
web.Event.composed_path = (function web$Event$composed_path(this$){
return this$.composedPath();
});
/**
 * Method.
 * 
 *   Creates a new event, which must then be initialized by calling
 *   initEvent() method.
 * 
 *   `document.createEvent(type)
 * 
 * 
 *   type
 *   A string indicating the event type to create.
 * 
 * 
 *   This method returns a new DOM `web.Event` object of the specified type, which must be initialized before use.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/createEvent`
 */
web.Event.create_event = (function web$Event$create_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47832 = arguments.length;
var i__42557__auto___47833 = (0);
while(true){
if((i__42557__auto___47833 < len__42556__auto___47832)){
args__42563__auto__.push((arguments[i__42557__auto___47833]));

var G__47834 = (i__42557__auto___47833 + (1));
i__42557__auto___47833 = G__47834;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Event.create_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Event.create_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Event.create_event.cljs$lang$maxFixedArity = (1);

web.Event.create_event.cljs$lang$applyTo = (function (seq47830){
var G__47831 = cljs.core.first.call(null,seq47830);
var seq47830__$1 = cljs.core.next.call(null,seq47830);
return web.Event.create_event.cljs$core$IFn$_invoke$arity$variadic(G__47831,seq47830__$1);
});

/**
 * Method.
 * 
 *   The Event.initEvent() method is used to initialize the value
 *   an `web.event` created using `web.Document.createEvent()`.
 * 
 *   `event.initEvent(type, bubbles, cancelable);
 * 
 * 
 *   type
 *   Is a `dom.DOMString` defining the type of event.
 *   bubbles
 *   Is a `web.Boolean` deciding whether the event should bubble up through the event chain or not. Once set, the read-only property `web.Event.bubbles` will give its value.
 *   cancelable
 *   Is a `web.Boolean` defining whether the event can be canceled. Once set, the read-only property `web.Event.cancelable` will give its value.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent`
 */
web.Event.init_event = (function web$Event$init_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47837 = arguments.length;
var i__42557__auto___47838 = (0);
while(true){
if((i__42557__auto___47838 < len__42556__auto___47837)){
args__42563__auto__.push((arguments[i__42557__auto___47838]));

var G__47839 = (i__42557__auto___47838 + (1));
i__42557__auto___47838 = G__47839;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Event.init_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Event.init_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.initEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Event.init_event.cljs$lang$maxFixedArity = (1);

web.Event.init_event.cljs$lang$applyTo = (function (seq47835){
var G__47836 = cljs.core.first.call(null,seq47835);
var seq47835__$1 = cljs.core.next.call(null,seq47835);
return web.Event.init_event.cljs$core$IFn$_invoke$arity$variadic(G__47836,seq47835__$1);
});

/**
 * Method.
 * 
 *   The msConvertURL method instructs the HTML paste operation on
 *   to modify the src attribute that corresponds to each file in
 *   clipboardData.files collection, allowing otherwise inaccessible
 *   to be converted to blob or data URIs.
 * 
 *   `var retVal = DragEvent.msConvertURL(file, targetType, targetURL);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/msConvertURL`
 */
web.Event.ms_convert_url = (function web$Event$ms_convert_url(this$,file__$1,target_type,target_url){
return this$.msConvertURL(file__$1,target_type,target_url);
});
/**
 * Method.
 * 
 *   The `web.Event` interface's preventDefault() method tells the
 *   agent that if the event does not get explicitly handled, its
 *   action should not be taken as it normally would be.
 * 
 *   `event.preventDefault();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`
 */
web.Event.prevent_default = (function web$Event$prevent_default(this$){
return this$.preventDefault();
});
/**
 * Method.
 * 
 *   The stopImmediatePropagation() method of the `web.Event` interface
 *   other listeners of the same event from being called.
 * 
 *   `event.stopImmediatePropagation();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation`
 */
web.Event.stop_immediate_propagation = (function web$Event$stop_immediate_propagation(this$){
return this$.stopImmediatePropagation();
});
/**
 * Method.
 * 
 *   The stopPropagation() method of the `web.Event` interface prevents
 *   propagation of the current event in the capturing and bubbling
 * 
 *   `event.stopPropagation();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation`
 */
web.Event.stop_propagation = (function web$Event$stop_propagation(this$){
return this$.stopPropagation();
});
/**
 * Property.
 * 
 *   The bubbles read-only property of the `web.Event` interface indicates
 *   the event bubbles up through the DOM or not.
 * 
 *   `var doesItBubble = event.bubbles;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles`
 */
web.Event.bubbles = (function web$Event$bubbles(this$){
return this$.bubbles();
});
/**
 * Property.
 * 
 *   The cancelable read-only property of the `web.Event` interface
 *   whether the event can be canceled, and therefore prevented as
 *   the event never happened.
 * 
 *   `bool = event.cancelable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable`
 */
web.Event.cancelable = (function web$Event$cancelable(this$){
return this$.cancelable();
});
/**
 * Property.
 * 
 *   The cancelBubble property of the `web.Event` interface is a historical
 *   to `web.Event.stopPropagation()`. Setting its value to true before
 *   from an event handler prevents propagation of the event. In later
 *   setting this to false does nothing. See Browser compatibility
 *   details.
 * 
 *   `event.cancelBubble = bool;
 *   var bool = event.cancelBubble;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble`
 */
web.Event.cancel_bubble = (function web$Event$cancel_bubble(this$){
return this$.cancelBubble();
});
/**
 * Property.
 * 
 *   The cancelBubble property of the `web.Event` interface is a historical
 *   to `web.Event.stopPropagation()`. Setting its value to true before
 *   from an event handler prevents propagation of the event. In later
 *   setting this to false does nothing. See Browser compatibility
 *   details.
 * 
 *   `event.cancelBubble = bool;
 *   var bool = event.cancelBubble;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble`
 */
web.Event.set_cancel_bubble_BANG_ = (function web$Event$set_cancel_bubble_BANG_(this$,val){
return (this$["cancelBubble"] = val);
});
/**
 * Property.
 * 
 *   The read-only composed property of the `web.Event` interface
 *   a `web.Boolean` which indicates whether or not the event will
 *   across the shadow DOM boundary into the standard DOM.
 * 
 *   `var composed = Event.composed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`
 */
web.Event.composed = (function web$Event$composed(this$){
return this$.composed();
});
/**
 * Property.
 * 
 *   The currentTarget read-only property of the `web.Event` interface
 *   the current target for the event, as the event traverses the
 *   It always refers to the element to which the event handler has
 *   attached, as opposed to `web.Event.target`, which identifies
 *   element on which the event occurred and which may be its direct
 * 
 *   `var currentEventTarget = event.currentTarget;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget`
 */
web.Event.current_target = (function web$Event$current_target(this$){
return this$.currentTarget();
});
/**
 * Property.
 * 
 *   The defaultPrevented read-only property of the `web.Event` interface
 *   a `web.Boolean` indicating whether or not `web.Event.preventDefault()`
 *   called on the event.
 * 
 *   `var defaultWasPrevented = event.defaultPrevented;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented`
 */
web.Event.default_prevented = (function web$Event$default_prevented(this$){
return this$.defaultPrevented();
});
/**
 * Property.
 * 
 *   The eventPhase read-only property of the `web.Event` interface
 *   which phase of the event flow is currently being evaluated.
 * 
 *   `var phase = event.eventPhase;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase`
 */
web.Event.event_phase = (function web$Event$event_phase(this$){
return this$.eventPhase();
});
/**
 * Property.
 * 
 *   The explicit original target of the event. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget`
 */
web.Event.explicit_original_target = (function web$Event$explicit_original_target(this$){
return this$.explicitOriginalTarget();
});
/**
 * Property.
 * 
 *   The explicit original target of the event. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget`
 */
web.Event.set_explicit_original_target_BANG_ = (function web$Event$set_explicit_original_target_BANG_(this$,val){
return (this$["explicitOriginalTarget"] = val);
});
/**
 * Property.
 * 
 *   The isTrusted read-only property of the `web.Event` interface
 *   a `web.Boolean` that is true when the event was generated by
 *   user action, and false when the event was created or modified
 *   a script or dispatched via `web.EventTarget.dispatchEvent()`.
 * 
 *   `var eventIsTrusted = event.isTrusted;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted`
 */
web.Event.is_trusted = (function web$Event$is_trusted(this$){
return this$.isTrusted();
});
/**
 * Property.
 * 
 *   The original target of the event before any retargetings. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget`
 */
web.Event.original_target = (function web$Event$original_target(this$){
return this$.originalTarget();
});
/**
 * Property.
 * 
 *   The original target of the event before any retargetings. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget`
 */
web.Event.set_original_target_BANG_ = (function web$Event$set_original_target_BANG_(this$,val){
return (this$["originalTarget"] = val);
});
/**
 * Property.
 * 
 *   The `web.Event` property returnValue indicates whether the default
 *   for this event has been prevented or not.
 * 
 *   `event.returnValue = bool;
 * 
 *   var bool = event.returnValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue`
 */
web.Event.return_value = (function web$Event$return_value(this$){
return this$.returnValue();
});
/**
 * Property.
 * 
 *   The `web.Event` property returnValue indicates whether the default
 *   for this event has been prevented or not.
 * 
 *   `event.returnValue = bool;
 * 
 *   var bool = event.returnValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue`
 */
web.Event.set_return_value_BANG_ = (function web$Event$set_return_value_BANG_(this$,val){
return (this$["returnValue"] = val);
});
/**
 * Property.
 * 
 *   Event.srcElement is a proprietary alias (implemented in Internet
 *   for the standard `web.Event.target` property, which is supported
 *   some other browsers for web compatibility purposes.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement`
 */
web.Event.src_element = (function web$Event$src_element(this$){
return this$.srcElement();
});
/**
 * Property.
 * 
 *   Event.srcElement is a proprietary alias (implemented in Internet
 *   for the standard `web.Event.target` property, which is supported
 *   some other browsers for web compatibility purposes.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement`
 */
web.Event.set_src_element_BANG_ = (function web$Event$set_src_element_BANG_(this$,val){
return (this$["srcElement"] = val);
});
/**
 * Property.
 * 
 *   The target property of the `web.Event` interface is a reference
 *   the object that dispatched the event. It is different from `web.Event.currentTarget`
 *   the event handler is called during the bubbling or capturing
 *   of the event.
 * 
 *   `var theTarget = event.target;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`
 */
web.Event.target = (function web$Event$target(this$){
return this$.target();
});
/**
 * Property.
 * 
 *   The target property of the `web.Event` interface is a reference
 *   the object that dispatched the event. It is different from `web.Event.currentTarget`
 *   the event handler is called during the bubbling or capturing
 *   of the event.
 * 
 *   `var theTarget = event.target;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`
 */
web.Event.set_target_BANG_ = (function web$Event$set_target_BANG_(this$,val){
return (this$["target"] = val);
});
/**
 * Property.
 * 
 *   The timeStamp read-only property of the `web.Event` interface
 *   the time (in milliseconds) at which the event was created.
 * 
 *   `var time = event.timeStamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp`
 */
web.Event.time_stamp = (function web$Event$time_stamp(this$){
return this$.timeStamp();
});
/**
 * Property.
 * 
 *   The timeStamp read-only property of the `web.Event` interface
 *   the time (in milliseconds) at which the event was created.
 * 
 *   `var time = event.timeStamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp`
 */
web.Event.set_time_stamp_BANG_ = (function web$Event$set_time_stamp_BANG_(this$,val){
return (this$["timeStamp"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Event` interface returns
 *   string containing the event's type. It is set when the event
 *   constructed and is the name commonly used to refer to the specific
 *   such as click, load, or error.
 * 
 *   `let eventType = event.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/type`
 */
web.Event.type = (function web$Event$type(this$){
return this$.type();
});

//# sourceMappingURL=Event.js.map?rel=1565798823439
