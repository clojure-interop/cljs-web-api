// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Lock');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The mode read-only property of the `web.Lock` interface returns
 *   access mode passed to `web.LockManager.request()` when the lock
 *   requested. The mode is either \"exclusive\" (the default) or
 * 
 *   `var mode = Lock.mode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/mode`
 */
web.Lock.mode = (function web$Lock$mode(this$){
return this$.mode();
});
/**
 * Property.
 * 
 *   The mode read-only property of the `web.Lock` interface returns
 *   access mode passed to `web.LockManager.request()` when the lock
 *   requested. The mode is either \"exclusive\" (the default) or
 * 
 *   `var mode = Lock.mode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/mode`
 */
web.Lock.set_mode_BANG_ = (function web$Lock$set_mode_BANG_(this$,val){
return (this$["mode"] = val);
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.Lock` interface returns
 *   name passed to `web.LockManager.request` selected when the lock
 *   requested.
 * 
 *   `var name = Lock.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/name`
 */
web.Lock.name = (function web$Lock$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.Lock` interface returns
 *   name passed to `web.LockManager.request` selected when the lock
 *   requested.
 * 
 *   `var name = Lock.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/name`
 */
web.Lock.set_name_BANG_ = (function web$Lock$set_name_BANG_(this$,val){
return (this$["name"] = val);
});

//# sourceMappingURL=Lock.js.map?rel=1565798802750
