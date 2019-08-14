// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Coordinates');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The Coordinates.accuracy read-only property is a strictly positive
 *   representing the accuracy, with a 95% confidence level, of the
 *   and `web.Coordinates.longitude` properties expressed in meters.
 * 
 *   `acc = coordinates.accuracy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/accuracy`
 */
web.Coordinates.accuracy = (function web$Coordinates$accuracy(this$){
return this$.accuracy();
});
/**
 * Property.
 * 
 *   The Coordinates.accuracy read-only property is a strictly positive
 *   representing the accuracy, with a 95% confidence level, of the
 *   and `web.Coordinates.longitude` properties expressed in meters.
 * 
 *   `acc = coordinates.accuracy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/accuracy`
 */
web.Coordinates.set_accuracy_BANG_ = (function web$Coordinates$set_accuracy_BANG_(this$,val){
return (this$["accuracy"] = val);
});
/**
 * Property.
 * 
 *   The Coordinates.altitude read-only property is a double representing
 *   altitude of the position in meters, relative to sea level. This
 *   is null if the implementation cannot provide this data.
 * 
 *   `alt = coordinates.altitude`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitude`
 */
web.Coordinates.altitude = (function web$Coordinates$altitude(this$){
return this$.altitude();
});
/**
 * Property.
 * 
 *   The Coordinates.altitude read-only property is a double representing
 *   altitude of the position in meters, relative to sea level. This
 *   is null if the implementation cannot provide this data.
 * 
 *   `alt = coordinates.altitude`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitude`
 */
web.Coordinates.set_altitude_BANG_ = (function web$Coordinates$set_altitude_BANG_(this$,val){
return (this$["altitude"] = val);
});
/**
 * Property.
 * 
 *   The Coordinates.altitudeAccuracy read-only property is a strictly
 *   double representing the accuracy, with a 95% confidence level,
 *   the altitude expressed in meters. This value is null if the implementation
 *   support measuring altitude.
 * 
 *   `altAcc = coordinates.altitudeAccuracy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitudeAccuracy`
 */
web.Coordinates.altitude_accuracy = (function web$Coordinates$altitude_accuracy(this$){
return this$.altitudeAccuracy();
});
/**
 * Property.
 * 
 *   The Coordinates.altitudeAccuracy read-only property is a strictly
 *   double representing the accuracy, with a 95% confidence level,
 *   the altitude expressed in meters. This value is null if the implementation
 *   support measuring altitude.
 * 
 *   `altAcc = coordinates.altitudeAccuracy`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/altitudeAccuracy`
 */
web.Coordinates.set_altitude_accuracy_BANG_ = (function web$Coordinates$set_altitude_accuracy_BANG_(this$,val){
return (this$["altitudeAccuracy"] = val);
});
/**
 * Property.
 * 
 *   The Coordinates.heading read-only property is a double representing
 *   direction in which the device is traveling. This value, specified
 *   degrees, indicates how far off from heading due north the device
 *   Zero degrees represents true true north, and the direction is
 *   clockwise (which means that east is 90 degrees and west is 270
 *   If `web.Coordinates.speed` is 0, heading is NaN. If the device
 *   not able to provide heading information, this value is null.
 * 
 *   `heading = coordinates.heading`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/heading`
 */
web.Coordinates.heading = (function web$Coordinates$heading(this$){
return this$.heading();
});
/**
 * Property.
 * 
 *   The Coordinates.heading read-only property is a double representing
 *   direction in which the device is traveling. This value, specified
 *   degrees, indicates how far off from heading due north the device
 *   Zero degrees represents true true north, and the direction is
 *   clockwise (which means that east is 90 degrees and west is 270
 *   If `web.Coordinates.speed` is 0, heading is NaN. If the device
 *   not able to provide heading information, this value is null.
 * 
 *   `heading = coordinates.heading`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/heading`
 */
web.Coordinates.set_heading_BANG_ = (function web$Coordinates$set_heading_BANG_(this$,val){
return (this$["heading"] = val);
});
/**
 * Property.
 * 
 *   The Coordinates.latitude read-only property is a double representing
 *   latitude of the position in decimal degrees.
 * 
 *   `lat = coordinates.latitude`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/latitude`
 */
web.Coordinates.latitude = (function web$Coordinates$latitude(this$){
return this$.latitude();
});
/**
 * Property.
 * 
 *   The Coordinates.latitude read-only property is a double representing
 *   latitude of the position in decimal degrees.
 * 
 *   `lat = coordinates.latitude`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/latitude`
 */
web.Coordinates.set_latitude_BANG_ = (function web$Coordinates$set_latitude_BANG_(this$,val){
return (this$["latitude"] = val);
});
/**
 * Property.
 * 
 *   The `web.Coordinates` interface's read-only longitude property
 *   a double-precision floating point value which represents the
 *   of a geographical position, specified in decimal degrees. Together
 *   a `dom.DOMTimeStamp` indicating a time of measurement, the Coordinates
 *   is part of the `web.Position` interface which is the object type
 *   by Geolocation API functions that obtain and return a geographical
 * 
 *   `longitude = coordinates.longitude`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/longitude`
 */
web.Coordinates.longitude = (function web$Coordinates$longitude(this$){
return this$.longitude();
});
/**
 * Property.
 * 
 *   The Coordinates.speed read-only property is a double representing
 *   velocity of the device in meters per second. This value is null
 *   the implementation is not able to measure it.
 * 
 *   `speed = coordinates.speed`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/speed`
 */
web.Coordinates.speed = (function web$Coordinates$speed(this$){
return this$.speed();
});
/**
 * Property.
 * 
 *   The Coordinates.speed read-only property is a double representing
 *   velocity of the device in meters per second. This value is null
 *   the implementation is not able to measure it.
 * 
 *   `speed = coordinates.speed`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Coordinates/speed`
 */
web.Coordinates.set_speed_BANG_ = (function web$Coordinates$set_speed_BANG_(this$,val){
return (this$["speed"] = val);
});

//# sourceMappingURL=Coordinates.js.map?rel=1565798806237
