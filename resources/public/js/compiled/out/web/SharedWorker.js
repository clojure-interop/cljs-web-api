// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SharedWorker');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SharedWorker() constructor creates a `web.SharedWorker` object that executes the script at the specified URL. This script must obey the same-origin policy.
 * 
 *   aURL
 *   A `dom.DOMString` representing the URL of the script the worker will execute. It must obey the same-origin policy.
 *   name Optional
 *   A `dom.DOMString` specifying an identifying name for the `web.SharedWorkerGlobalScope` representing the scope of the worker, which is mainly useful for debugging purposes.
 *   options Optional
 *   An object containing option properties that can set when creating the object instance. Available properties are as follows:
 * 
 *   type: A `dom.DOMString` specifying the type of worker to create. The value can be classic or module. If not specified, the default used is classic.
 *   credentials: A `dom.DOMString` specifying the type of credentials to use for the worker. The value can be omit, same-origin, or include. If not specified, or if type is classic, the default used is omit (no credentials required).
 *   name: A `dom.DOMString` specifying an identifying name for the `web.SharedWorkerGlobalScope` representing the scope of the worker, which is mainly useful for debugging purposes.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/SharedWorker`
 */
web.SharedWorker.constructor$ = SharedWorker;
/**
 * Property.
 * 
 *   The AbstractWorker.onerror property of the `web.AbstractWorker`
 *   represents an `web.EventHandler`, that is a function to be called
 *   the error event occurs and bubbles through the `web.Worker`.
 * 
 *   `myWorker.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`
 */
web.SharedWorker.onerror = (function web$SharedWorker$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The AbstractWorker.onerror property of the `web.AbstractWorker`
 *   represents an `web.EventHandler`, that is a function to be called
 *   the error event occurs and bubbles through the `web.Worker`.
 * 
 *   `myWorker.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`
 */
web.SharedWorker.set_onerror_BANG_ = (function web$SharedWorker$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The port property of the `web.SharedWorker` interface returns
 *   `web.MessagePort` object used to communicate and control the
 *   worker.
 * 
 *   `myWorker.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/port`
 */
web.SharedWorker.port = (function web$SharedWorker$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The port property of the `web.SharedWorker` interface returns
 *   `web.MessagePort` object used to communicate and control the
 *   worker.
 * 
 *   `myWorker.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/port`
 */
web.SharedWorker.set_port_BANG_ = (function web$SharedWorker$set_port_BANG_(this$,val){
return (this$["port"] = val);
});

//# sourceMappingURL=SharedWorker.js.map?rel=1565798842122
