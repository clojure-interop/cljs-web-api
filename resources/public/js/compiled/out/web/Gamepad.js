// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Gamepad');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The Gamepad.axes property of the `web.Gamepad` interface returns
 *   array representing the controls with axes present on the device
 *   analog thumb sticks).-
 * 
 *   `readonly    attribute double[]            axes;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/axes`
 */
web.Gamepad.axes = (function web$Gamepad$axes(this$){
return this$.axes();
});
/**
 * Property.
 * 
 *   The Gamepad.axes property of the `web.Gamepad` interface returns
 *   array representing the controls with axes present on the device
 *   analog thumb sticks).-
 * 
 *   `readonly    attribute double[]            axes;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/axes`
 */
web.Gamepad.set_axes_BANG_ = (function web$Gamepad$set_axes_BANG_(this$,val){
return (this$["axes"] = val);
});
/**
 * Property.
 * 
 *   The Gamepad.buttons property of the `web.Gamepad` interface returns
 *   array of `web.gamepadButton` objects representing the buttons
 *   on the device.
 * 
 *   `readonly    attribute GamepadButton[]     buttons;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/buttons`
 */
web.Gamepad.buttons = (function web$Gamepad$buttons(this$){
return this$.buttons();
});
/**
 * Property.
 * 
 *   The Gamepad.buttons property of the `web.Gamepad` interface returns
 *   array of `web.gamepadButton` objects representing the buttons
 *   on the device.
 * 
 *   `readonly    attribute GamepadButton[]     buttons;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/buttons`
 */
web.Gamepad.set_buttons_BANG_ = (function web$Gamepad$set_buttons_BANG_(this$,val){
return (this$["buttons"] = val);
});
/**
 * Property.
 * 
 *   The Gamepad.connected property of the `web.Gamepad` interface
 *   a boolean indicating whether the gamepad is still connected to
 *   system.
 * 
 *   `readonly    attribute boolean             connected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/connected`
 */
web.Gamepad.connected = (function web$Gamepad$connected(this$){
return this$.connected();
});
/**
 * Property.
 * 
 *   The Gamepad.connected property of the `web.Gamepad` interface
 *   a boolean indicating whether the gamepad is still connected to
 *   system.
 * 
 *   `readonly    attribute boolean             connected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/connected`
 */
web.Gamepad.set_connected_BANG_ = (function web$Gamepad$set_connected_BANG_(this$,val){
return (this$["connected"] = val);
});
/**
 * Property.
 * 
 *   The displayId read-only property of the `web.Gamepad` interface
 *   the `vr.VRDisplay.displayId` of the associated `vr.VRDisplay`
 *   the VRDisplay that the gamepad is controlling the displayed scene
 * 
 *   `var myDisplayId = gamepadInstance.displayId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/displayId`
 */
web.Gamepad.display_id = (function web$Gamepad$display_id(this$){
return this$.displayId();
});
/**
 * Property.
 * 
 *   The displayId read-only property of the `web.Gamepad` interface
 *   the `vr.VRDisplay.displayId` of the associated `vr.VRDisplay`
 *   the VRDisplay that the gamepad is controlling the displayed scene
 * 
 *   `var myDisplayId = gamepadInstance.displayId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/displayId`
 */
web.Gamepad.set_display_id_BANG_ = (function web$Gamepad$set_display_id_BANG_(this$,val){
return (this$["displayId"] = val);
});
/**
 * Property.
 * 
 *   The hand read-only property of the `web.Gamepad` interface returns
 *   enum defining what hand the controller is being held in, or is
 *   likely to be held in.
 * 
 *   `var myHand = gamepadInstance.hand;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hand`
 */
web.Gamepad.hand = (function web$Gamepad$hand(this$){
return this$.hand();
});
/**
 * Property.
 * 
 *   The hand read-only property of the `web.Gamepad` interface returns
 *   enum defining what hand the controller is being held in, or is
 *   likely to be held in.
 * 
 *   `var myHand = gamepadInstance.hand;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hand`
 */
web.Gamepad.set_hand_BANG_ = (function web$Gamepad$set_hand_BANG_(this$,val){
return (this$["hand"] = val);
});
/**
 * Property.
 * 
 *   The hapticActuators read-only property of the `web.Gamepad` interface
 *   an array containing `web.GamepadHapticActuator` objects, each
 *   which represents haptic feedback hardware available on the controller.
 * 
 *   `var myHapticActuators = gamepadInstance.hapticActuators;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hapticActuators`
 */
web.Gamepad.haptic_actuators = (function web$Gamepad$haptic_actuators(this$){
return this$.hapticActuators();
});
/**
 * Property.
 * 
 *   The hapticActuators read-only property of the `web.Gamepad` interface
 *   an array containing `web.GamepadHapticActuator` objects, each
 *   which represents haptic feedback hardware available on the controller.
 * 
 *   `var myHapticActuators = gamepadInstance.hapticActuators;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/hapticActuators`
 */
web.Gamepad.set_haptic_actuators_BANG_ = (function web$Gamepad$set_haptic_actuators_BANG_(this$,val){
return (this$["hapticActuators"] = val);
});
/**
 * Property.
 * 
 *   The Gamepad.id property of the `web.Gamepad` interface returns
 *   string containing some information about the controller.
 * 
 *   `readonly    attribute DOMString           id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id`
 */
web.Gamepad.id = (function web$Gamepad$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The Gamepad.id property of the `web.Gamepad` interface returns
 *   string containing some information about the controller.
 * 
 *   `readonly    attribute DOMString           id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id`
 */
web.Gamepad.set_id_BANG_ = (function web$Gamepad$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The Gamepad.index property of the `web.Gamepad` interface returns
 *   integer that is auto-incremented to be unique for each device
 *   connected to the system.
 * 
 *   `readonly    attribute long                index;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/index`
 */
web.Gamepad.index = (function web$Gamepad$index(this$){
return this$.index();
});
/**
 * Property.
 * 
 *   The Gamepad.index property of the `web.Gamepad` interface returns
 *   integer that is auto-incremented to be unique for each device
 *   connected to the system.
 * 
 *   `readonly    attribute long                index;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/index`
 */
web.Gamepad.set_index_BANG_ = (function web$Gamepad$set_index_BANG_(this$,val){
return (this$["index"] = val);
});
/**
 * Property.
 * 
 *   The Gamepad.mapping property of the `web.Gamepad` interface returns
 *   string indicating whether the browser has remapped the controls
 *   the device to a known layout.
 * 
 *   `readonly    attribute DOMString           mapping;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping`
 */
web.Gamepad.mapping = (function web$Gamepad$mapping(this$){
return this$.mapping();
});
/**
 * Property.
 * 
 *   The Gamepad.mapping property of the `web.Gamepad` interface returns
 *   string indicating whether the browser has remapped the controls
 *   the device to a known layout.
 * 
 *   `readonly    attribute DOMString           mapping;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping`
 */
web.Gamepad.set_mapping_BANG_ = (function web$Gamepad$set_mapping_BANG_(this$,val){
return (this$["mapping"] = val);
});
/**
 * Property.
 * 
 *   The pose read-only property of the `web.Gamepad` interface returns
 *   `web.GamepadPose` object representing the pose information associated
 *   a WebVR controller (e.g. its position and orientation in 3D space).
 * 
 *   `var myGamepadPose = gamepadInstance.pose;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/pose`
 */
web.Gamepad.pose = (function web$Gamepad$pose(this$){
return this$.pose();
});
/**
 * Property.
 * 
 *   The pose read-only property of the `web.Gamepad` interface returns
 *   `web.GamepadPose` object representing the pose information associated
 *   a WebVR controller (e.g. its position and orientation in 3D space).
 * 
 *   `var myGamepadPose = gamepadInstance.pose;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/pose`
 */
web.Gamepad.set_pose_BANG_ = (function web$Gamepad$set_pose_BANG_(this$,val){
return (this$["pose"] = val);
});
/**
 * Property.
 * 
 *   The Gamepad.timestamp property of the `web.Gamepad` interface
 *   a `dom.DOMHighResTimeStamp` representing the last time the data
 *   this gamepad was updated.
 * 
 *   `readonly    attribute DOMHighResTimeStamp timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/timestamp`
 */
web.Gamepad.timestamp = (function web$Gamepad$timestamp(this$){
return this$.timestamp();
});
/**
 * Property.
 * 
 *   The Gamepad.timestamp property of the `web.Gamepad` interface
 *   a `dom.DOMHighResTimeStamp` representing the last time the data
 *   this gamepad was updated.
 * 
 *   `readonly    attribute DOMHighResTimeStamp timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/timestamp`
 */
web.Gamepad.set_timestamp_BANG_ = (function web$Gamepad$set_timestamp_BANG_(this$,val){
return (this$["timestamp"] = val);
});

//# sourceMappingURL=Gamepad.js.map?rel=1565798807633
