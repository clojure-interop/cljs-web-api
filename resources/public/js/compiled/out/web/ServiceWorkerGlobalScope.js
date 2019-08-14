// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ServiceWorkerGlobalScope');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The ServiceWorkerGlobalScope.skipWaiting() method of the `web.ServiceWorkerGlobalScope`
 *   the waiting service worker to become the active service worker.
 * 
 *   `ServiceWorkerGlobalScope.skipWaiting().then(function() {
 *   //Do something
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting`
 */
web.ServiceWorkerGlobalScope.skip_waiting = (function web$ServiceWorkerGlobalScope$skip_waiting(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42974 = arguments.length;
var i__42557__auto___42975 = (0);
while(true){
if((i__42557__auto___42975 < len__42556__auto___42974)){
args__42563__auto__.push((arguments[i__42557__auto___42975]));

var G__42976 = (i__42557__auto___42975 + (1));
i__42557__auto___42975 = G__42976;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ServiceWorkerGlobalScope.skip_waiting.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ServiceWorkerGlobalScope.skip_waiting.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.skipWaiting,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ServiceWorkerGlobalScope.skip_waiting.cljs$lang$maxFixedArity = (1);

web.ServiceWorkerGlobalScope.skip_waiting.cljs$lang$applyTo = (function (seq42972){
var G__42973 = cljs.core.first.call(null,seq42972);
var seq42972__$1 = cljs.core.next.call(null,seq42972);
return web.ServiceWorkerGlobalScope.skip_waiting.cljs$core$IFn$_invoke$arity$variadic(G__42973,seq42972__$1);
});

/**
 * Property.
 * 
 *   The `web.ServiceWorkerGlobalScope.caches` read-only property
 *   the `web.CacheStorage` object associated with the service worker.
 * 
 *   `var myCacheStorage = self.caches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/caches`
 */
web.ServiceWorkerGlobalScope.caches = (function web$ServiceWorkerGlobalScope$caches(this$){
return this$.caches();
});
/**
 * Property.
 * 
 *   The `web.ServiceWorkerGlobalScope.caches` read-only property
 *   the `web.CacheStorage` object associated with the service worker.
 * 
 *   `var myCacheStorage = self.caches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/caches`
 */
web.ServiceWorkerGlobalScope.set_caches_BANG_ = (function web$ServiceWorkerGlobalScope$set_caches_BANG_(this$,val){
return (this$["caches"] = val);
});
/**
 * Property.
 * 
 *   The clients read-only property of the `web.ServiceWorkerGlobalScope`
 *   returns the Clients object associated with the service worker.
 * 
 *   `swClients = self.clients`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/clients`
 */
web.ServiceWorkerGlobalScope.clients = (function web$ServiceWorkerGlobalScope$clients(this$){
return this$.clients();
});
/**
 * Property.
 * 
 *   The clients read-only property of the `web.ServiceWorkerGlobalScope`
 *   returns the Clients object associated with the service worker.
 * 
 *   `swClients = self.clients`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/clients`
 */
web.ServiceWorkerGlobalScope.set_clients_BANG_ = (function web$ServiceWorkerGlobalScope$set_clients_BANG_(this$,val){
return (this$["clients"] = val);
});
/**
 * Property.
 * 
 *   The onactivate property of the `web.ServiceWorkerGlobalScope`
 *   is an event handler fired whenever an activate event occurs (when
 *   service worker activates). This happens after installation, when
 *   page to be controlled by the service worker refreshes.
 * 
 *   `ServiceWorkerGlobalScope.onactivate = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onactivate`
 */
web.ServiceWorkerGlobalScope.onactivate = (function web$ServiceWorkerGlobalScope$onactivate(this$){
return this$.onactivate();
});
/**
 * Property.
 * 
 *   The onactivate property of the `web.ServiceWorkerGlobalScope`
 *   is an event handler fired whenever an activate event occurs (when
 *   service worker activates). This happens after installation, when
 *   page to be controlled by the service worker refreshes.
 * 
 *   `ServiceWorkerGlobalScope.onactivate = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onactivate`
 */
web.ServiceWorkerGlobalScope.set_onactivate_BANG_ = (function web$ServiceWorkerGlobalScope$set_onactivate_BANG_(this$,val){
return (this$["onactivate"] = val);
});
/**
 * Property.
 * 
 *   The onfetch property of the `web.ServiceWorkerGlobalScope` interface
 *   an event handler fired whenever a fetch event occurs (usually
 *   the `web.ServiceWorkerGlobalScope.fetch` method is called.)
 * 
 *   `ServiceWorkerGlobalScope.onfetch = function(FetchEvent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onfetch`
 */
web.ServiceWorkerGlobalScope.onfetch = (function web$ServiceWorkerGlobalScope$onfetch(this$){
return this$.onfetch();
});
/**
 * Property.
 * 
 *   The onfetch property of the `web.ServiceWorkerGlobalScope` interface
 *   an event handler fired whenever a fetch event occurs (usually
 *   the `web.ServiceWorkerGlobalScope.fetch` method is called.)
 * 
 *   `ServiceWorkerGlobalScope.onfetch = function(FetchEvent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onfetch`
 */
web.ServiceWorkerGlobalScope.set_onfetch_BANG_ = (function web$ServiceWorkerGlobalScope$set_onfetch_BANG_(this$,val){
return (this$["onfetch"] = val);
});
/**
 * Property.
 * 
 *   The oninstall property of the `web.ServiceWorkerGlobalScope`
 *   is an event handler fired whenever an install event occurs (when
 *   service worker installs). This happens before activation.
 * 
 *   `ServiceWorkerGlobalScope.oninstall = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/oninstall`
 */
web.ServiceWorkerGlobalScope.oninstall = (function web$ServiceWorkerGlobalScope$oninstall(this$){
return this$.oninstall();
});
/**
 * Property.
 * 
 *   The oninstall property of the `web.ServiceWorkerGlobalScope`
 *   is an event handler fired whenever an install event occurs (when
 *   service worker installs). This happens before activation.
 * 
 *   `ServiceWorkerGlobalScope.oninstall = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/oninstall`
 */
web.ServiceWorkerGlobalScope.set_oninstall_BANG_ = (function web$ServiceWorkerGlobalScope$set_oninstall_BANG_(this$,val){
return (this$["oninstall"] = val);
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onmessage event of the `web.ServiceWorkerGlobalScope`
 *   is called whenever incoming messages are received.
 * 
 *   `ServiceWorkerGlobalScope.onmessage = function(MessageEvent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onmessage`
 */
web.ServiceWorkerGlobalScope.onmessage = (function web$ServiceWorkerGlobalScope$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onmessage event of the `web.ServiceWorkerGlobalScope`
 *   is called whenever incoming messages are received.
 * 
 *   `ServiceWorkerGlobalScope.onmessage = function(MessageEvent) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onmessage`
 */
web.ServiceWorkerGlobalScope.set_onmessage_BANG_ = (function web$ServiceWorkerGlobalScope$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onnotificationclick property is
 *   event handler called whenever the notificationclick event is
 *   on the `web.ServiceWorkerGlobalScope` object, that is when a
 *   clicks on a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.
 * 
 *   `ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick`
 */
web.ServiceWorkerGlobalScope.onnotificationclick = (function web$ServiceWorkerGlobalScope$onnotificationclick(this$){
return this$.onnotificationclick();
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onnotificationclick property is
 *   event handler called whenever the notificationclick event is
 *   on the `web.ServiceWorkerGlobalScope` object, that is when a
 *   clicks on a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.
 * 
 *   `ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick`
 */
web.ServiceWorkerGlobalScope.set_onnotificationclick_BANG_ = (function web$ServiceWorkerGlobalScope$set_onnotificationclick_BANG_(this$,val){
return (this$["onnotificationclick"] = val);
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onnotificationclose property is
 *   event handler called whenever the notificationclose event is
 *   on the `web.ServiceWorkerGlobalScope` object, that is when a
 *   closes a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.
 * 
 *   `ServiceWorkerGlobalScope.onnotificationclose = function(NotificationEvent) { ... };
 *   ServiceWorkerGlobalScope.addEventListener('notificationclose', function(NotificationEvent) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclose`
 */
web.ServiceWorkerGlobalScope.onnotificationclose = (function web$ServiceWorkerGlobalScope$onnotificationclose(this$){
return this$.onnotificationclose();
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onnotificationclose property is
 *   event handler called whenever the notificationclose event is
 *   on the `web.ServiceWorkerGlobalScope` object, that is when a
 *   closes a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.
 * 
 *   `ServiceWorkerGlobalScope.onnotificationclose = function(NotificationEvent) { ... };
 *   ServiceWorkerGlobalScope.addEventListener('notificationclose', function(NotificationEvent) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclose`
 */
web.ServiceWorkerGlobalScope.set_onnotificationclose_BANG_ = (function web$ServiceWorkerGlobalScope$set_onnotificationclose_BANG_(this$,val){
return (this$["onnotificationclose"] = val);
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onpush event of the `web.ServiceWorkerGlobalScope`
 *   is fired whenever a push message is received by a service worker
 *   a push server.
 * 
 *   `ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
 *   self.addEventListener('push', function(PushEvent) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpush`
 */
web.ServiceWorkerGlobalScope.onpush = (function web$ServiceWorkerGlobalScope$onpush(this$){
return this$.onpush();
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onpush event of the `web.ServiceWorkerGlobalScope`
 *   is fired whenever a push message is received by a service worker
 *   a push server.
 * 
 *   `ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
 *   self.addEventListener('push', function(PushEvent) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpush`
 */
web.ServiceWorkerGlobalScope.set_onpush_BANG_ = (function web$ServiceWorkerGlobalScope$set_onpush_BANG_(this$,val){
return (this$["onpush"] = val);
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onpushsubscriptionchange event of
 *   `web.ServiceWorkerGlobalScope` interface is fired to indicate
 *   change in push subscription that was triggered outside the application's
 *   e.g. when browser refresh the push subscription.
 * 
 *   `ServiceWorkerGlobalScope.onpushsubscriptionchange = function() { ... }
 *   self.addEventListener('pushsubscriptionchange', function() { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange`
 */
web.ServiceWorkerGlobalScope.onpushsubscriptionchange = (function web$ServiceWorkerGlobalScope$onpushsubscriptionchange(this$){
return this$.onpushsubscriptionchange();
});
/**
 * Property.
 * 
 *   The ServiceWorkerGlobalScope.onpushsubscriptionchange event of
 *   `web.ServiceWorkerGlobalScope` interface is fired to indicate
 *   change in push subscription that was triggered outside the application's
 *   e.g. when browser refresh the push subscription.
 * 
 *   `ServiceWorkerGlobalScope.onpushsubscriptionchange = function() { ... }
 *   self.addEventListener('pushsubscriptionchange', function() { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange`
 */
web.ServiceWorkerGlobalScope.set_onpushsubscriptionchange_BANG_ = (function web$ServiceWorkerGlobalScope$set_onpushsubscriptionchange_BANG_(this$,val){
return (this$["onpushsubscriptionchange"] = val);
});
/**
 * Property.
 * 
 *   The registration read-only property of the `web.ServiceWorkerGlobalScope`
 *   returns a reference to the `web.ServiceWorkerRegistration` object,
 *   represents the service worker's registration.
 * 
 *   `serviceWorkerRegistration = self.registration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/registration`
 */
web.ServiceWorkerGlobalScope.registration = (function web$ServiceWorkerGlobalScope$registration(this$){
return this$.registration();
});
/**
 * Property.
 * 
 *   The registration read-only property of the `web.ServiceWorkerGlobalScope`
 *   returns a reference to the `web.ServiceWorkerRegistration` object,
 *   represents the service worker's registration.
 * 
 *   `serviceWorkerRegistration = self.registration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/registration`
 */
web.ServiceWorkerGlobalScope.set_registration_BANG_ = (function web$ServiceWorkerGlobalScope$set_registration_BANG_(this$,val){
return (this$["registration"] = val);
});

//# sourceMappingURL=ServiceWorkerGlobalScope.js.map?rel=1565798802908
