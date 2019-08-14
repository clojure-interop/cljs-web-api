// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Sensor');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The start method activates one of the sensors based on Sensor.
 * 
 *   `Sensor.start()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/start`
 */
web.Sensor.start = (function web$Sensor$start(this$){
return this$.start();
});
/**
 * Method.
 * 
 *   The stop method of the `web.Sensor` interface deactivates the
 *   sensor.
 * 
 *   `Sensor.stop()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/stop`
 */
web.Sensor.stop = (function web$Sensor$stop(this$){
return this$.stop();
});
/**
 * Property.
 * 
 *   The activated read-only property of the `web.Sensor` interface
 *   a `web.Boolean` indicating whether the sensor is active.
 * 
 *   `var boolean = sensorInstance.activated
 * 
 *   Because `web.Sensor` is a base class, activated may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/activated`
 */
web.Sensor.activated = (function web$Sensor$activated(this$){
return this$.activated();
});
/**
 * Property.
 * 
 *   The activated read-only property of the `web.Sensor` interface
 *   a `web.Boolean` indicating whether the sensor is active.
 * 
 *   `var boolean = sensorInstance.activated
 * 
 *   Because `web.Sensor` is a base class, activated may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/activated`
 */
web.Sensor.set_activated_BANG_ = (function web$Sensor$set_activated_BANG_(this$,val){
return (this$["activated"] = val);
});
/**
 * Property.
 * 
 *   The hasReading read-only property of the `web.Sensor` interface
 *   a `web.Boolean` indicating whether the sensor has a reading.
 * 
 *   `var boolean = sensorInstance.hasReading
 * 
 *   Because `web.Sensor` is a base class, hasReading may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/hasReading`
 */
web.Sensor.has_reading = (function web$Sensor$has_reading(this$){
return this$.hasReading();
});
/**
 * Property.
 * 
 *   The hasReading read-only property of the `web.Sensor` interface
 *   a `web.Boolean` indicating whether the sensor has a reading.
 * 
 *   `var boolean = sensorInstance.hasReading
 * 
 *   Because `web.Sensor` is a base class, hasReading may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/hasReading`
 */
web.Sensor.set_has_reading_BANG_ = (function web$Sensor$set_has_reading_BANG_(this$,val){
return (this$["hasReading"] = val);
});
/**
 * Property.
 * 
 *   The onactivate `web.EventHandler` is called when one of the Sensor
 *   child interfaces becomes active.
 * 
 *   `sensorInstance.onactivate = function
 *   sensorInstance.addEventListener('activate', function() { ... })
 * 
 *   Because `web.Sensor` is a base class, onactivate may only be used on one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onactivate`
 */
web.Sensor.onactivate = (function web$Sensor$onactivate(this$){
return this$.onactivate();
});
/**
 * Property.
 * 
 *   The onactivate `web.EventHandler` is called when one of the Sensor
 *   child interfaces becomes active.
 * 
 *   `sensorInstance.onactivate = function
 *   sensorInstance.addEventListener('activate', function() { ... })
 * 
 *   Because `web.Sensor` is a base class, onactivate may only be used on one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onactivate`
 */
web.Sensor.set_onactivate_BANG_ = (function web$Sensor$set_onactivate_BANG_(this$,val){
return (this$["onactivate"] = val);
});
/**
 * Property.
 * 
 *   The onerror `web.EventHandler` is called when an error occurs
 *   one of the child interfaces of the `web.Sensor` interface.
 * 
 *   `sensorInstance.onerror = function
 *   sensorInstance.addEventListener('error', function() { ... })
 * 
 *   Because `web.Sensor` is a base class, onerror may only be used on one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onerror`
 */
web.Sensor.onerror = (function web$Sensor$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror `web.EventHandler` is called when an error occurs
 *   one of the child interfaces of the `web.Sensor` interface.
 * 
 *   `sensorInstance.onerror = function
 *   sensorInstance.addEventListener('error', function() { ... })
 * 
 *   Because `web.Sensor` is a base class, onerror may only be used on one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onerror`
 */
web.Sensor.set_onerror_BANG_ = (function web$Sensor$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onreading `web.EventHandler` is called when a reading is
 *   on one of the child interfaces of the `web.Sensor` interface.
 * 
 *   `sensorInstance.onreading = function
 *   sensorInstance.addEventListener('reading', function() { ... })
 * 
 *   Because `web.Sensor` is a base class, onreading may only be used on one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onreading`
 */
web.Sensor.onreading = (function web$Sensor$onreading(this$){
return this$.onreading();
});
/**
 * Property.
 * 
 *   The onreading `web.EventHandler` is called when a reading is
 *   on one of the child interfaces of the `web.Sensor` interface.
 * 
 *   `sensorInstance.onreading = function
 *   sensorInstance.addEventListener('reading', function() { ... })
 * 
 *   Because `web.Sensor` is a base class, onreading may only be used on one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/onreading`
 */
web.Sensor.set_onreading_BANG_ = (function web$Sensor$set_onreading_BANG_(this$,val){
return (this$["onreading"] = val);
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `web.Sensor` interface
 *   the time stamp of the latest sensor reading.
 * 
 *   `var timestamp = sensorInstance.timestamp
 * 
 *   Because `web.Sensor` is a base class, timestamp may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/timestamp`
 */
web.Sensor.timestamp = (function web$Sensor$timestamp(this$){
return this$.timestamp();
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `web.Sensor` interface
 *   the time stamp of the latest sensor reading.
 * 
 *   `var timestamp = sensorInstance.timestamp
 * 
 *   Because `web.Sensor` is a base class, timestamp may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Sensor/timestamp`
 */
web.Sensor.set_timestamp_BANG_ = (function web$Sensor$set_timestamp_BANG_(this$,val){
return (this$["timestamp"] = val);
});

//# sourceMappingURL=Sensor.js.map?rel=1565798856029
