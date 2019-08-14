// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.KeyboardEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The KeyboardEvent() constructor creates a new `web.KeyboardEvent`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent`
 */
web.KeyboardEvent.constructor$ = KeyboardEvent;
/**
 * Method.
 * 
 *   The KeyboardEvent.getModifierState() method returns the current
 *   of the specified modifier key: true if the modifier is active
 *   is the modifier key is pressed or locked), otherwise, false.
 * 
 *   `var active = event.getModifierState(keyArg);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState`
 */
web.KeyboardEvent.get_modifier_state = (function web$KeyboardEvent$get_modifier_state(this$,key_arg){
return this$.getModifierState(key_arg);
});
/**
 * Method.
 * 
 *   The KeyboardEvent.initKeyboardEvent() method initializes the
 *   of a keyboard event object. This method was introduced in draft
 *   DOM Level 3 Events, but deprecated in newer draft. Gecko won't
 *   this feature since implementing this method as experimental broke
 *   web apps (see bug 999645). Web applications should use constructor
 *   of this if it's available.
 * 
 *   `kbdEvent.initKeyboardEvent(typeArg, canBubbleArg, cancelableArg,
 *   viewArg, charArg, keyArg,
 *   locationArg, modifiersListArg, repeat)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/initKeyboardEvent`
 */
web.KeyboardEvent.init_keyboard_event = (function web$KeyboardEvent$init_keyboard_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43798 = arguments.length;
var i__42557__auto___43799 = (0);
while(true){
if((i__42557__auto___43799 < len__42556__auto___43798)){
args__42563__auto__.push((arguments[i__42557__auto___43799]));

var G__43800 = (i__42557__auto___43799 + (1));
i__42557__auto___43799 = G__43800;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.KeyboardEvent.init_keyboard_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.KeyboardEvent.init_keyboard_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.initKeyboardEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.KeyboardEvent.init_keyboard_event.cljs$lang$maxFixedArity = (1);

web.KeyboardEvent.init_keyboard_event.cljs$lang$applyTo = (function (seq43796){
var G__43797 = cljs.core.first.call(null,seq43796);
var seq43796__$1 = cljs.core.next.call(null,seq43796);
return web.KeyboardEvent.init_keyboard_event.cljs$core$IFn$_invoke$arity$variadic(G__43797,seq43796__$1);
});

/**
 * Method.
 * 
 *   The KeyboardEvent.initKeyEvent() method is used to initialize
 *   value of an event created using `web.document.createEvent`(\"KeyboardEvent\").
 *   initialized in this way must have been created with the `web.document.createEvent`(\"KeyboardEvent\")
 *   initKeyEvent() must be called to set the event before it is dispatched.
 * 
 *   `event.initKeyEvent (type, bubbles, cancelable, viewArg,
 *   ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
 *   keyCodeArg, charCodeArg)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/initKeyEvent`
 */
web.KeyboardEvent.init_key_event = (function web$KeyboardEvent$init_key_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43803 = arguments.length;
var i__42557__auto___43804 = (0);
while(true){
if((i__42557__auto___43804 < len__42556__auto___43803)){
args__42563__auto__.push((arguments[i__42557__auto___43804]));

var G__43805 = (i__42557__auto___43804 + (1));
i__42557__auto___43804 = G__43805;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.KeyboardEvent.init_key_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.KeyboardEvent.init_key_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.initKeyEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.KeyboardEvent.init_key_event.cljs$lang$maxFixedArity = (1);

web.KeyboardEvent.init_key_event.cljs$lang$applyTo = (function (seq43801){
var G__43802 = cljs.core.first.call(null,seq43801);
var seq43801__$1 = cljs.core.next.call(null,seq43801);
return web.KeyboardEvent.init_key_event.cljs$core$IFn$_invoke$arity$variadic(G__43802,seq43801__$1);
});

/**
 * Property.
 * 
 *   The KeyboardEvent.altKey read-only property is a `web.Boolean`
 *   indicates if the alt key (Option or ⌥ on OS X) was pressed (true)
 *   not (false) when the event occured.
 * 
 *   `var altKeyPressed = instanceOfKeyboardEvent.altKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/altKey`
 */
web.KeyboardEvent.alt_key = (function web$KeyboardEvent$alt_key(this$){
return this$.altKey();
});
/**
 * Property.
 * 
 *   The charCode read-only property of the `web.KeyboardEvent` interface
 *   the Unicode value of a character key pressed during a keypress
 * 
 *   `var code = event.charCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/charCode`
 */
web.KeyboardEvent.char_code = (function web$KeyboardEvent$char_code(this$){
return this$.charCode();
});
/**
 * Property.
 * 
 *   The charCode read-only property of the `web.KeyboardEvent` interface
 *   the Unicode value of a character key pressed during a keypress
 * 
 *   `var code = event.charCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/charCode`
 */
web.KeyboardEvent.set_char_code_BANG_ = (function web$KeyboardEvent$set_char_code_BANG_(this$,val){
return (this$["charCode"] = val);
});
/**
 * Property.
 * 
 *   The KeyboardEvent.code property represents a physical key on
 *   keyboard (as opposed to the character generated by pressing the
 *   In other words, this property returns a value which isn't altered
 *   keyboard layout or the state of the modifier keys.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code`
 */
web.KeyboardEvent.code = (function web$KeyboardEvent$code(this$){
return this$.code();
});
/**
 * Property.
 * 
 *   The KeyboardEvent.ctrlKey read-only property returns a `web.Boolean`
 *   indicates if the control key was pressed (true) or not (false)
 *   the event occured.
 * 
 *   `var ctrlKeyPressed = instanceOfKeyboardEvent.ctrlKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey`
 */
web.KeyboardEvent.ctrl_key = (function web$KeyboardEvent$ctrl_key(this$){
return this$.ctrlKey();
});
/**
 * Property.
 * 
 *   The KeyboardEvent.isComposing read-only property returns a `web.Boolean`
 *   indicating if the event is fired after compositionstart and before
 * 
 *   `var bool = event.isComposing;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/isComposing`
 */
web.KeyboardEvent.is_composing = (function web$KeyboardEvent$is_composing(this$){
return this$.isComposing();
});
/**
 * Property.
 * 
 *   The `web.KeyboardEvent` interface's key read-only property returns
 *   value of the key pressed by the user, taking into consideration
 *   state of modifier keys such as Shift as well as the keyboard
 *   and layout.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key`
 */
web.KeyboardEvent.key = (function web$KeyboardEvent$key(this$){
return this$.key();
});
/**
 * Property.
 * 
 *   The deprecated KeyboardEvent.keyCode read-only property represents
 *   system and implementation dependent numerical code identifying
 *   unmodified value of the pressed key.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode`
 */
web.KeyboardEvent.key_code = (function web$KeyboardEvent$key_code(this$){
return this$.keyCode();
});
/**
 * Property.
 * 
 *   The deprecated KeyboardEvent.keyIdentifier read-only property
 *   a \"key identifier\" string that can be used to determine what
 *   was pressed. Its non-deprecated replacement is `web.KeyboardEvent.key`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyIdentifier`
 */
web.KeyboardEvent.key_identifier = (function web$KeyboardEvent$key_identifier(this$){
return this$.keyIdentifier();
});
/**
 * Property.
 * 
 *   The deprecated KeyboardEvent.keyIdentifier read-only property
 *   a \"key identifier\" string that can be used to determine what
 *   was pressed. Its non-deprecated replacement is `web.KeyboardEvent.key`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyIdentifier`
 */
web.KeyboardEvent.set_key_identifier_BANG_ = (function web$KeyboardEvent$set_key_identifier_BANG_(this$,val){
return (this$["keyIdentifier"] = val);
});
/**
 * Property.
 * 
 *   The KeyboardEvent.location read-only property returns an unsigned
 *   representing the location of the key on the keyboard or other
 *   device.
 * 
 *   `var location = event.location;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location`
 */
web.KeyboardEvent.location = (function web$KeyboardEvent$location(this$){
return this$.location();
});
/**
 * Property.
 * 
 *   The KeyboardEvent.metaKey read-only property returning a `web.Boolean`
 *   indicates if the Meta key was pressed (true) or not (false) when
 *   event occurred. Some operating systems may intercept the key
 *   it is never detected.
 * 
 *   `var metaKeyPressed = instanceOfKeyboardEvent.metaKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey`
 */
web.KeyboardEvent.meta_key = (function web$KeyboardEvent$meta_key(this$){
return this$.metaKey();
});
/**
 * Property.
 * 
 *   The repeat read-only property of the `web.KeyboardEvent` interface
 *   a `web.Boolean` that is true if the given key is being held down
 *   that it is automatically repeating.
 * 
 *   `var repeat = event.repeat;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat`
 */
web.KeyboardEvent.repeat = (function web$KeyboardEvent$repeat(this$){
return this$.repeat();
});
/**
 * Property.
 * 
 *   The KeyboardEvent.shiftKey read-only property is a `web.Boolean`
 *   indicates if the shift key was pressed (true) or not (false)
 *   the event occurred.
 * 
 *   `var shiftKeyPressed = instanceOfKeyboardEvent.shiftKey`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey`
 */
web.KeyboardEvent.shift_key = (function web$KeyboardEvent$shift_key(this$){
return this$.shiftKey();
});
/**
 * Property.
 * 
 *   The which read-only property of the `web.KeyboardEvent` interface
 *   the numeric keyCode of the key pressed, or the character code
 *   for an alphanumeric key pressed.
 * 
 *   `var keyResult = event.which;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which`
 */
web.KeyboardEvent.which = (function web$KeyboardEvent$which(this$){
return this$.which();
});

//# sourceMappingURL=KeyboardEvent.js.map?rel=1565798809590
