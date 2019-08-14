// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PointerEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PointerEvent() constructor creates a new synthetic and untrusted `web.PointerEvent` object instance.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent`
 */
web.PointerEvent.constructor$ = PointerEvent;
/**
 * Method.
 * 
 *   The getCoalescedEvents() method of the `web.PointerEvent` interface
 *   a sequence of all PointerEvent instances that were coalesced
 *   the dispatched pointermove event.
 * 
 *   `var pointerEvents[] = PointerEvent.getCoalescedEvents()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents`
 */
web.PointerEvent.get_coalesced_events = (function web$PointerEvent$get_coalesced_events(this$){
return this$.getCoalescedEvents();
});
/**
 * Property.
 * 
 *   The height read-only property of the `web.PointerEvent` interface
 *   the height of the pointer's contact geometry, along the y-axis
 *   CSS pixels). Depending on the source of the pointer device (for
 *   a finger), for a given pointer, each event may produce a different
 * 
 *   `var contactHeight = pointerEvent.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height`
 */
web.PointerEvent.height = (function web$PointerEvent$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The height read-only property of the `web.PointerEvent` interface
 *   the height of the pointer's contact geometry, along the y-axis
 *   CSS pixels). Depending on the source of the pointer device (for
 *   a finger), for a given pointer, each event may produce a different
 * 
 *   `var contactHeight = pointerEvent.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height`
 */
web.PointerEvent.set_height_BANG_ = (function web$PointerEvent$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The isPrimary read-only property of the `web.PointerEvent` interface
 *   whether or not the pointer device that created the event is the
 *   pointer. It returns true if the pointer that caused the event
 *   be fired is the primary device and returns false otherwise.
 * 
 *   `var isPrimary = pointerEvent.isPrimary;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary`
 */
web.PointerEvent.is_primary = (function web$PointerEvent$is_primary(this$){
return this$.isPrimary();
});
/**
 * Property.
 * 
 *   The isPrimary read-only property of the `web.PointerEvent` interface
 *   whether or not the pointer device that created the event is the
 *   pointer. It returns true if the pointer that caused the event
 *   be fired is the primary device and returns false otherwise.
 * 
 *   `var isPrimary = pointerEvent.isPrimary;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary`
 */
web.PointerEvent.set_is_primary_BANG_ = (function web$PointerEvent$set_is_primary_BANG_(this$,val){
return (this$["isPrimary"] = val);
});
/**
 * Property.
 * 
 *   The pointerId read-only property of the `web.PointerEvent` interface
 *   an identifier assigned to a given pointer event. The identifier
 *   unique, being different from the identifiers of all other active
 *   events. Since the value may be randomly generated, it is not
 *   to convey any particular meaning.
 * 
 *   `var id = pointerEvent.pointerId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId`
 */
web.PointerEvent.pointer_id = (function web$PointerEvent$pointer_id(this$){
return this$.pointerId();
});
/**
 * Property.
 * 
 *   The pointerId read-only property of the `web.PointerEvent` interface
 *   an identifier assigned to a given pointer event. The identifier
 *   unique, being different from the identifiers of all other active
 *   events. Since the value may be randomly generated, it is not
 *   to convey any particular meaning.
 * 
 *   `var id = pointerEvent.pointerId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId`
 */
web.PointerEvent.set_pointer_id_BANG_ = (function web$PointerEvent$set_pointer_id_BANG_(this$,val){
return (this$["pointerId"] = val);
});
/**
 * Property.
 * 
 *   The pointerType read-only property of the `web.PointerEvent`
 *   indicates the device type (mouse, pen, or touch) that caused
 *   given pointer event.
 * 
 *   `var pType = pointerEvent.pointerType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType`
 */
web.PointerEvent.pointer_type = (function web$PointerEvent$pointer_type(this$){
return this$.pointerType();
});
/**
 * Property.
 * 
 *   The pointerType read-only property of the `web.PointerEvent`
 *   indicates the device type (mouse, pen, or touch) that caused
 *   given pointer event.
 * 
 *   `var pType = pointerEvent.pointerType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType`
 */
web.PointerEvent.set_pointer_type_BANG_ = (function web$PointerEvent$set_pointer_type_BANG_(this$,val){
return (this$["pointerType"] = val);
});
/**
 * Property.
 * 
 *   The pressure read-only property of the `web.PointerEvent` interface
 *   the normalized pressure of the pointer input.
 * 
 *   `var pressure = pointerEvent.pressure;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure`
 */
web.PointerEvent.pressure = (function web$PointerEvent$pressure(this$){
return this$.pressure();
});
/**
 * Property.
 * 
 *   The pressure read-only property of the `web.PointerEvent` interface
 *   the normalized pressure of the pointer input.
 * 
 *   `var pressure = pointerEvent.pressure;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure`
 */
web.PointerEvent.set_pressure_BANG_ = (function web$PointerEvent$set_pressure_BANG_(this$,val){
return (this$["pressure"] = val);
});
/**
 * Property.
 * 
 *   The tangentialPressure read-only property of the `web.PointerEvent`
 *   represents the normalized tangential pressure of the pointer
 *   (also known as barrel pressure or cylinder stress).
 * 
 *   `var tanPressure = pointerEvent.tangentialPressure;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tangentialPressure`
 */
web.PointerEvent.tangential_pressure = (function web$PointerEvent$tangential_pressure(this$){
return this$.tangentialPressure();
});
/**
 * Property.
 * 
 *   The tangentialPressure read-only property of the `web.PointerEvent`
 *   represents the normalized tangential pressure of the pointer
 *   (also known as barrel pressure or cylinder stress).
 * 
 *   `var tanPressure = pointerEvent.tangentialPressure;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tangentialPressure`
 */
web.PointerEvent.set_tangential_pressure_BANG_ = (function web$PointerEvent$set_tangential_pressure_BANG_(this$,val){
return (this$["tangentialPressure"] = val);
});
/**
 * Property.
 * 
 *   The tiltX read-only property of the `web.PointerEvent` interface
 *   the angle (in degrees) between the Y-Z plane of the pointer and
 *   screen. This property is typically only useful for a pen/stylus
 *   type.
 * 
 *   `var tiltX = pointerEvent.tiltX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX`
 */
web.PointerEvent.tilt_x = (function web$PointerEvent$tilt_x(this$){
return this$.tiltX();
});
/**
 * Property.
 * 
 *   The tiltX read-only property of the `web.PointerEvent` interface
 *   the angle (in degrees) between the Y-Z plane of the pointer and
 *   screen. This property is typically only useful for a pen/stylus
 *   type.
 * 
 *   `var tiltX = pointerEvent.tiltX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX`
 */
web.PointerEvent.set_tilt_x_BANG_ = (function web$PointerEvent$set_tilt_x_BANG_(this$,val){
return (this$["tiltX"] = val);
});
/**
 * Property.
 * 
 *   The tiltY read-only property of the `web.PointerEvent` interface
 *   the angle (in degrees) between the X-Z plane of the pointer and
 *   screen. This property is typically only useful for a pen/stylus
 *   type.
 * 
 *   `var tiltY = pointerEvent.tiltY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY`
 */
web.PointerEvent.tilt_y = (function web$PointerEvent$tilt_y(this$){
return this$.tiltY();
});
/**
 * Property.
 * 
 *   The tiltY read-only property of the `web.PointerEvent` interface
 *   the angle (in degrees) between the X-Z plane of the pointer and
 *   screen. This property is typically only useful for a pen/stylus
 *   type.
 * 
 *   `var tiltY = pointerEvent.tiltY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY`
 */
web.PointerEvent.set_tilt_y_BANG_ = (function web$PointerEvent$set_tilt_y_BANG_(this$,val){
return (this$["tiltY"] = val);
});
/**
 * Property.
 * 
 *   The twist read-only property of the `web.PointerEvent` interface
 *   the clockwise rotation of the pointer (e.g., pen stylus) around
 *   major axis, in degrees.
 * 
 *   `var twist = pointerEvent.twist;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/twist`
 */
web.PointerEvent.twist = (function web$PointerEvent$twist(this$){
return this$.twist();
});
/**
 * Property.
 * 
 *   The twist read-only property of the `web.PointerEvent` interface
 *   the clockwise rotation of the pointer (e.g., pen stylus) around
 *   major axis, in degrees.
 * 
 *   `var twist = pointerEvent.twist;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/twist`
 */
web.PointerEvent.set_twist_BANG_ = (function web$PointerEvent$set_twist_BANG_(this$,val){
return (this$["twist"] = val);
});
/**
 * Property.
 * 
 *   The width read-only property of the `web.PointerEvent` interface
 *   the width of the pointer's contact geometry along the x-axis,
 *   in CSS pixels. Depending on the source of the pointer device
 *   as a finger), for a given pointer, each event may produce a different
 * 
 *   `var contactWidth = pointerEvent.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width`
 */
web.PointerEvent.width = (function web$PointerEvent$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The width read-only property of the `web.PointerEvent` interface
 *   the width of the pointer's contact geometry along the x-axis,
 *   in CSS pixels. Depending on the source of the pointer device
 *   as a finger), for a given pointer, each event may produce a different
 * 
 *   `var contactWidth = pointerEvent.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width`
 */
web.PointerEvent.set_width_BANG_ = (function web$PointerEvent$set_width_BANG_(this$,val){
return (this$["width"] = val);
});

//# sourceMappingURL=PointerEvent.js.map?rel=1565798860833
