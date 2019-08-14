// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.BatteryManager');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `web.EventTarget` method addEventListener() sets up a function
 *   will be called whenever the specified event is delivered to the
 * 
 *   `target.addEventListener(type, listener[, options]);
 *   target.addEventListener(type, listener[, useCapture]);
 *   target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`
 */
web.BatteryManager.add_event_listener = (function web$BatteryManager$add_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44400 = arguments.length;
var i__42557__auto___44401 = (0);
while(true){
if((i__42557__auto___44401 < len__42556__auto___44400)){
args__42563__auto__.push((arguments[i__42557__auto___44401]));

var G__44402 = (i__42557__auto___44401 + (1));
i__42557__auto___44401 = G__44402;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BatteryManager.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BatteryManager.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BatteryManager.add_event_listener.cljs$lang$maxFixedArity = (1);

web.BatteryManager.add_event_listener.cljs$lang$applyTo = (function (seq44398){
var G__44399 = cljs.core.first.call(null,seq44398);
var seq44398__$1 = cljs.core.next.call(null,seq44398);
return web.BatteryManager.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44399,seq44398__$1);
});

/**
 * Method.
 * 
 *   The EventTarget.removeEventListener() method removes from the
 *   an event listener previously registered with `web.EventTarget.addEventListener()`.
 *   event listener to be removed is identified using a combination
 *   the event type, the event listener function itself, and various
 *   options that may affect the matching process; see Matching event
 *   for removal
 * 
 *   `target.removeEventListener(type, listener[, options]);
 *   target.removeEventListener(type, listener[, useCapture]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`
 */
web.BatteryManager.remove_event_listener = (function web$BatteryManager$remove_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44405 = arguments.length;
var i__42557__auto___44406 = (0);
while(true){
if((i__42557__auto___44406 < len__42556__auto___44405)){
args__42563__auto__.push((arguments[i__42557__auto___44406]));

var G__44407 = (i__42557__auto___44406 + (1));
i__42557__auto___44406 = G__44407;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BatteryManager.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BatteryManager.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BatteryManager.remove_event_listener.cljs$lang$maxFixedArity = (1);

web.BatteryManager.remove_event_listener.cljs$lang$applyTo = (function (seq44403){
var G__44404 = cljs.core.first.call(null,seq44403);
var seq44403__$1 = cljs.core.next.call(null,seq44403);
return web.BatteryManager.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44404,seq44403__$1);
});

/**
 * Method.
 * 
 *   Dispatches an `web.Event` at the specified `web.EventTarget`,
 *   invoking the affected `web.EventListener`s in the appropriate
 *   The normal event processing rules (including the capturing and
 *   bubbling phase) also apply to events dispatched manually with
 * 
 *   `cancelled = !target.dispatchEvent(event)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`
 */
web.BatteryManager.dispatch_event = (function web$BatteryManager$dispatch_event(this$,event){
return this$.dispatchEvent(event);
});
/**
 * Property.
 * 
 *   A Boolean value indicating whether or not the device's battery
 *   currently being charged.
 * 
 *   `var charging = battery.charging
 * 
 *   On return, charging indicates whether or not the battery, which is a `web.BatteryManager` object, is currently being charged; if the battery is charging, this value is true. Otherwise, the value is false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/charging`
 */
web.BatteryManager.charging = (function web$BatteryManager$charging(this$){
return this$.charging();
});
/**
 * Property.
 * 
 *   A Boolean value indicating whether or not the device's battery
 *   currently being charged.
 * 
 *   `var charging = battery.charging
 * 
 *   On return, charging indicates whether or not the battery, which is a `web.BatteryManager` object, is currently being charged; if the battery is charging, this value is true. Otherwise, the value is false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/charging`
 */
web.BatteryManager.set_charging_BANG_ = (function web$BatteryManager$set_charging_BANG_(this$,val){
return (this$["charging"] = val);
});
/**
 * Property.
 * 
 *   Indicates the amount of time, in seconds, that remain until the
 *   is fully charged.
 * 
 *   `var time = battery.chargingTime
 * 
 *   On return, time is the remaining time in seconds until the battery, which is a `web.BatteryManager` object, is fully charged, or 0 if the battery is already fully charged. If the battery is currently discharging, this value is Infinity.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/chargingTime`
 */
web.BatteryManager.charging_time = (function web$BatteryManager$charging_time(this$){
return this$.chargingTime();
});
/**
 * Property.
 * 
 *   Indicates the amount of time, in seconds, that remain until the
 *   is fully charged.
 * 
 *   `var time = battery.chargingTime
 * 
 *   On return, time is the remaining time in seconds until the battery, which is a `web.BatteryManager` object, is fully charged, or 0 if the battery is already fully charged. If the battery is currently discharging, this value is Infinity.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/chargingTime`
 */
web.BatteryManager.set_charging_time_BANG_ = (function web$BatteryManager$set_charging_time_BANG_(this$,val){
return (this$["chargingTime"] = val);
});
/**
 * Property.
 * 
 *   Indicates the amount of time, in seconds, that remains until
 *   battery is fully discharged.
 * 
 *   `var time = battery.dischargingTime
 * 
 *   On return, time is the remaining time in seconds until the battery, which is a `web.BatteryManager` object, is fully discharged and the system will suspend. This value is Infinity if the battery is currently charging rather than discharging, or if the system is unable to report the remaining discharging time.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/dischargingTime`
 */
web.BatteryManager.discharging_time = (function web$BatteryManager$discharging_time(this$){
return this$.dischargingTime();
});
/**
 * Property.
 * 
 *   Indicates the amount of time, in seconds, that remains until
 *   battery is fully discharged.
 * 
 *   `var time = battery.dischargingTime
 * 
 *   On return, time is the remaining time in seconds until the battery, which is a `web.BatteryManager` object, is fully discharged and the system will suspend. This value is Infinity if the battery is currently charging rather than discharging, or if the system is unable to report the remaining discharging time.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/dischargingTime`
 */
web.BatteryManager.set_discharging_time_BANG_ = (function web$BatteryManager$set_discharging_time_BANG_(this$,val){
return (this$["dischargingTime"] = val);
});
/**
 * Property.
 * 
 *   Indicates the current battery charge level as a value between
 *   and 1.0.
 * 
 *   `var level = battery.level
 * 
 *   On return, level is a number representing the system's battery charge level scaled to a value between 0.0 and 1.0. A value of 0 means the battery, which is a `web.BatteryManager` object, is empty and the system is about to be suspended. A value of 1.0 means the battery is full. A value of 1.0 is also returned if the implementation isn't able to determine the battery charge level or if the system is not battery-powered.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/level`
 */
web.BatteryManager.level = (function web$BatteryManager$level(this$){
return this$.level();
});
/**
 * Property.
 * 
 *   Indicates the current battery charge level as a value between
 *   and 1.0.
 * 
 *   `var level = battery.level
 * 
 *   On return, level is a number representing the system's battery charge level scaled to a value between 0.0 and 1.0. A value of 0 means the battery, which is a `web.BatteryManager` object, is empty and the system is about to be suspended. A value of 1.0 means the battery is full. A value of 1.0 is also returned if the implementation isn't able to determine the battery charge level or if the system is not battery-powered.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/level`
 */
web.BatteryManager.set_level_BANG_ = (function web$BatteryManager$set_level_BANG_(this$,val){
return (this$["level"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive chargingchange events.
 *   events occur when the battery `web.charging` state is updated.
 * 
 *   `battery.onchargingchange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the chargingchange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingchange`
 */
web.BatteryManager.onchargingchange = (function web$BatteryManager$onchargingchange(this$){
return this$.onchargingchange();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive chargingchange events.
 *   events occur when the battery `web.charging` state is updated.
 * 
 *   `battery.onchargingchange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the chargingchange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingchange`
 */
web.BatteryManager.set_onchargingchange_BANG_ = (function web$BatteryManager$set_onchargingchange_BANG_(this$,val){
return (this$["onchargingchange"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive chargingtimechange events.
 *   events occur when the battery `web.chargingTime` is updated.
 * 
 *   `battery.onchargingtimechange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the chargingtimechange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingtimechange`
 */
web.BatteryManager.onchargingtimechange = (function web$BatteryManager$onchargingtimechange(this$){
return this$.onchargingtimechange();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive chargingtimechange events.
 *   events occur when the battery `web.chargingTime` is updated.
 * 
 *   `battery.onchargingtimechange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the chargingtimechange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingtimechange`
 */
web.BatteryManager.set_onchargingtimechange_BANG_ = (function web$BatteryManager$set_onchargingtimechange_BANG_(this$,val){
return (this$["onchargingtimechange"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive dischargingtimechange
 *   These events occur when the battery `web.dischargingTime` is
 * 
 *   `battery.ondischargingtimechange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the dischargingtimechange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/ondischargingtimechange`
 */
web.BatteryManager.ondischargingtimechange = (function web$BatteryManager$ondischargingtimechange(this$){
return this$.ondischargingtimechange();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive dischargingtimechange
 *   These events occur when the battery `web.dischargingTime` is
 * 
 *   `battery.ondischargingtimechange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the dischargingtimechange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/ondischargingtimechange`
 */
web.BatteryManager.set_ondischargingtimechange_BANG_ = (function web$BatteryManager$set_ondischargingtimechange_BANG_(this$,val){
return (this$["ondischargingtimechange"] = val);
});
/**
 * Property.
 * 
 *   The BatteryManager.onlevelchange property specifies an event
 *   to receive levelchange events. These events occur when the battery
 *   is updated.
 * 
 *   `navigator.battery.onlevelchange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the levelchange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onlevelchange`
 */
web.BatteryManager.onlevelchange = (function web$BatteryManager$onlevelchange(this$){
return this$.onlevelchange();
});
/**
 * Property.
 * 
 *   The BatteryManager.onlevelchange property specifies an event
 *   to receive levelchange events. These events occur when the battery
 *   is updated.
 * 
 *   `navigator.battery.onlevelchange = funcRef
 * 
 *   Where battery is a `web.BatteryManager` object, and funcRef is a function to be called when the levelchange event occurs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onlevelchange`
 */
web.BatteryManager.set_onlevelchange_BANG_ = (function web$BatteryManager$set_onlevelchange_BANG_(this$,val){
return (this$["onlevelchange"] = val);
});

//# sourceMappingURL=BatteryManager.js.map?rel=1565798813886
