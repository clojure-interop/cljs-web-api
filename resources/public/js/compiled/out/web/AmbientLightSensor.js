// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AmbientLightSensor');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AmbinentLightSensor() constructor creates a new `web.AmbientLightSensor` object, which returns the current light level or illuminance of the ambient light around the hosting device.
 * 
 *   options Optional
 *   Currently only one option is supported:
 * 
 *   frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/AmbientLightSensor`
 */
web.AmbientLightSensor.constructor$ = AmbientLightSensor;
/**
 * Property.
 * 
 *   The illuminance property of the `web.AmbientLightSensor` interface
 *   the current light level in lux of the ambient light level around
 *   hosting device.
 * 
 *   `var level = AmbientLightSensor.illuminance`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/illuminance`
 */
web.AmbientLightSensor.illuminance = (function web$AmbientLightSensor$illuminance(this$){
return this$.illuminance();
});
/**
 * Property.
 * 
 *   The illuminance property of the `web.AmbientLightSensor` interface
 *   the current light level in lux of the ambient light level around
 *   hosting device.
 * 
 *   `var level = AmbientLightSensor.illuminance`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor/illuminance`
 */
web.AmbientLightSensor.set_illuminance_BANG_ = (function web$AmbientLightSensor$set_illuminance_BANG_(this$,val){
return (this$["illuminance"] = val);
});

//# sourceMappingURL=AmbientLightSensor.js.map?rel=1565798837240
