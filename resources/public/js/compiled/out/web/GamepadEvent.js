// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.GamepadEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The GamepadEvent_ constructor creates a new `web.GamepadEvent` object.
 * 
 *   typeArg
 *   A `dom.DOMString` that must be one of gamepadconnected or gamepaddisconnected.
 *   options Optional
 *   Options are as follows:
 * 
 *   gamepad: An instance of `web.Gamepad` describing the gamepad associated with the event.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/GamepadEvent`
 */
web.GamepadEvent.constructor$ = GamepadEvent;
/**
 * Property.
 * 
 *   The GamepadEvent.gamepad property of the `web.GamepadEvent` interface
 *   a `web.Gamepad` object, providing access to the associated gamepad
 *   for fired gamepadconnected and gamepaddisconnected events.
 * 
 *   `readonly    attribute Gamepad gamepad;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`
 */
web.GamepadEvent.gamepad = (function web$GamepadEvent$gamepad(this$){
return this$.gamepad();
});
/**
 * Property.
 * 
 *   The GamepadEvent.gamepad property of the `web.GamepadEvent` interface
 *   a `web.Gamepad` object, providing access to the associated gamepad
 *   for fired gamepadconnected and gamepaddisconnected events.
 * 
 *   `readonly    attribute Gamepad gamepad;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent/gamepad`
 */
web.GamepadEvent.set_gamepad_BANG_ = (function web$GamepadEvent$set_gamepad_BANG_(this$,val){
return (this$["gamepad"] = val);
});

//# sourceMappingURL=GamepadEvent.js.map?rel=1565798838256
