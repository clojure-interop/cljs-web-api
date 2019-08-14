// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CustomEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The CustomEvent() constructor creates a new `web.CustomEvent`.
 * 
 *   typeArg
 *   A `dom.DOMString` representing the name of the event.
 *   customEventInit Optional
 *   A CustomEventInit dictionary, having the following fields:
 * 
 *   \"detail\", optional and defaulting to null, of type any, that is an event-dependent value associated with the event.
 * 
 * 
 * 
 *   The CustomEventInit dictionary also accepts fields from the `web.EventInit` dictionary.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent`
 */
web.CustomEvent.constructor$ = CustomEvent;
/**
 * Method.
 * 
 *   The CustomEvent.initCustomEvent() method initializes a CustomEvent
 *   If the event has already been dispatched, this method does nothing.
 * 
 *   `event.initCustomEvent(type, canBubble, cancelable, detail);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/initCustomEvent`
 */
web.CustomEvent.init_custom_event = (function web$CustomEvent$init_custom_event(this$,type,can_bubble,cancelable,detail){
return this$.initCustomEvent(type,can_bubble,cancelable,detail);
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
web.CustomEvent.create_event = (function web$CustomEvent$create_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44906 = arguments.length;
var i__42557__auto___44907 = (0);
while(true){
if((i__42557__auto___44907 < len__42556__auto___44906)){
args__42563__auto__.push((arguments[i__42557__auto___44907]));

var G__44908 = (i__42557__auto___44907 + (1));
i__42557__auto___44907 = G__44908;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CustomEvent.create_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CustomEvent.create_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CustomEvent.create_event.cljs$lang$maxFixedArity = (1);

web.CustomEvent.create_event.cljs$lang$applyTo = (function (seq44904){
var G__44905 = cljs.core.first.call(null,seq44904);
var seq44904__$1 = cljs.core.next.call(null,seq44904);
return web.CustomEvent.create_event.cljs$core$IFn$_invoke$arity$variadic(G__44905,seq44904__$1);
});

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
web.CustomEvent.composed_path = (function web$CustomEvent$composed_path(this$){
return this$.composedPath();
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
web.CustomEvent.init_event = (function web$CustomEvent$init_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44911 = arguments.length;
var i__42557__auto___44912 = (0);
while(true){
if((i__42557__auto___44912 < len__42556__auto___44911)){
args__42563__auto__.push((arguments[i__42557__auto___44912]));

var G__44913 = (i__42557__auto___44912 + (1));
i__42557__auto___44912 = G__44913;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CustomEvent.init_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CustomEvent.init_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.initEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CustomEvent.init_event.cljs$lang$maxFixedArity = (1);

web.CustomEvent.init_event.cljs$lang$applyTo = (function (seq44909){
var G__44910 = cljs.core.first.call(null,seq44909);
var seq44909__$1 = cljs.core.next.call(null,seq44909);
return web.CustomEvent.init_event.cljs$core$IFn$_invoke$arity$variadic(G__44910,seq44909__$1);
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
web.CustomEvent.prevent_default = (function web$CustomEvent$prevent_default(this$){
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
web.CustomEvent.stop_immediate_propagation = (function web$CustomEvent$stop_immediate_propagation(this$){
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
web.CustomEvent.stop_propagation = (function web$CustomEvent$stop_propagation(this$){
return this$.stopPropagation();
});
/**
 * Property.
 * 
 *   The detail readonly property of the `web.CustomEvent` interface
 *   any data passed when initializing the event.
 * 
 *   `let myDetail = customEventInstance.detail;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail`
 */
web.CustomEvent.detail = (function web$CustomEvent$detail(this$){
return this$.detail();
});
/**
 * Property.
 * 
 *   The detail readonly property of the `web.CustomEvent` interface
 *   any data passed when initializing the event.
 * 
 *   `let myDetail = customEventInstance.detail;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail`
 */
web.CustomEvent.set_detail_BANG_ = (function web$CustomEvent$set_detail_BANG_(this$,val){
return (this$["detail"] = val);
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
web.CustomEvent.bubbles = (function web$CustomEvent$bubbles(this$){
return this$.bubbles();
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
web.CustomEvent.cancel_bubble = (function web$CustomEvent$cancel_bubble(this$){
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
web.CustomEvent.set_cancel_bubble_BANG_ = (function web$CustomEvent$set_cancel_bubble_BANG_(this$,val){
return (this$["cancelBubble"] = val);
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
web.CustomEvent.cancelable = (function web$CustomEvent$cancelable(this$){
return this$.cancelable();
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
web.CustomEvent.composed = (function web$CustomEvent$composed(this$){
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
web.CustomEvent.current_target = (function web$CustomEvent$current_target(this$){
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
web.CustomEvent.default_prevented = (function web$CustomEvent$default_prevented(this$){
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
web.CustomEvent.event_phase = (function web$CustomEvent$event_phase(this$){
return this$.eventPhase();
});
/**
 * Property.
 * 
 *   The explicit original target of the event. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget`
 */
web.CustomEvent.explicit_original_target = (function web$CustomEvent$explicit_original_target(this$){
return this$.explicitOriginalTarget();
});
/**
 * Property.
 * 
 *   The explicit original target of the event. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget`
 */
web.CustomEvent.set_explicit_original_target_BANG_ = (function web$CustomEvent$set_explicit_original_target_BANG_(this$,val){
return (this$["explicitOriginalTarget"] = val);
});
/**
 * Property.
 * 
 *   The original target of the event before any retargetings. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget`
 */
web.CustomEvent.original_target = (function web$CustomEvent$original_target(this$){
return this$.originalTarget();
});
/**
 * Property.
 * 
 *   The original target of the event before any retargetings. (Mozilla-specific)
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget`
 */
web.CustomEvent.set_original_target_BANG_ = (function web$CustomEvent$set_original_target_BANG_(this$,val){
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
web.CustomEvent.return_value = (function web$CustomEvent$return_value(this$){
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
web.CustomEvent.set_return_value_BANG_ = (function web$CustomEvent$set_return_value_BANG_(this$,val){
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
web.CustomEvent.src_element = (function web$CustomEvent$src_element(this$){
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
web.CustomEvent.set_src_element_BANG_ = (function web$CustomEvent$set_src_element_BANG_(this$,val){
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
web.CustomEvent.target = (function web$CustomEvent$target(this$){
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
web.CustomEvent.set_target_BANG_ = (function web$CustomEvent$set_target_BANG_(this$,val){
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
web.CustomEvent.time_stamp = (function web$CustomEvent$time_stamp(this$){
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
web.CustomEvent.set_time_stamp_BANG_ = (function web$CustomEvent$set_time_stamp_BANG_(this$,val){
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
web.CustomEvent.type = (function web$CustomEvent$type(this$){
return this$.type();
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
web.CustomEvent.is_trusted = (function web$CustomEvent$is_trusted(this$){
return this$.isTrusted();
});

//# sourceMappingURL=CustomEvent.js.map?rel=1565798817638
