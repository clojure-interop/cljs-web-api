// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ServiceWorkerRegistration');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getNotifications() method of the `web.ServiceWorkerRegistration`
 *   returns a list of the notifications in the order that they were
 *   from the current origin via the current service worker registration.
 *   can have many active but differently-scoped service worker registrations.
 *   created by one service worker on the same origin will not be
 *   to other active services workers on that same origin.
 * 
 *   `​ServiceWorkerRegistration.getNotifications(options)
 *   .then(function(NotificationsList) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/getNotifications`
 */
web.ServiceWorkerRegistration.get_notifications = (function web$ServiceWorkerRegistration$get_notifications(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52404 = arguments.length;
var i__42557__auto___52405 = (0);
while(true){
if((i__42557__auto___52405 < len__42556__auto___52404)){
args__42563__auto__.push((arguments[i__42557__auto___52405]));

var G__52406 = (i__42557__auto___52405 + (1));
i__42557__auto___52405 = G__52406;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ServiceWorkerRegistration.get_notifications.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ServiceWorkerRegistration.get_notifications.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getNotifications,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ServiceWorkerRegistration.get_notifications.cljs$lang$maxFixedArity = (1);

web.ServiceWorkerRegistration.get_notifications.cljs$lang$applyTo = (function (seq52402){
var G__52403 = cljs.core.first.call(null,seq52402);
var seq52402__$1 = cljs.core.next.call(null,seq52402);
return web.ServiceWorkerRegistration.get_notifications.cljs$core$IFn$_invoke$arity$variadic(G__52403,seq52402__$1);
});

/**
 * Method.
 * 
 *   The showNotification() method of the `web.ServiceWorkerRegistration`
 *   creates a notification on an active service worker.
 * 
 *   `​ServiceWorkerRegistration.showNotification(title, [options]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification`
 */
web.ServiceWorkerRegistration.show_notification = (function web$ServiceWorkerRegistration$show_notification(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52409 = arguments.length;
var i__42557__auto___52410 = (0);
while(true){
if((i__42557__auto___52410 < len__42556__auto___52409)){
args__42563__auto__.push((arguments[i__42557__auto___52410]));

var G__52411 = (i__42557__auto___52410 + (1));
i__42557__auto___52410 = G__52411;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ServiceWorkerRegistration.show_notification.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ServiceWorkerRegistration.show_notification.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.showNotification,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ServiceWorkerRegistration.show_notification.cljs$lang$maxFixedArity = (1);

web.ServiceWorkerRegistration.show_notification.cljs$lang$applyTo = (function (seq52407){
var G__52408 = cljs.core.first.call(null,seq52407);
var seq52407__$1 = cljs.core.next.call(null,seq52407);
return web.ServiceWorkerRegistration.show_notification.cljs$core$IFn$_invoke$arity$variadic(G__52408,seq52407__$1);
});

/**
 * Method.
 * 
 *   The unregister method of the `web.ServiceWorkerRegistration`
 *   unregisters the service worker registration and returns a `web.Promise`.
 *   promise will resolve to false if no registration was found, otherwise
 *   resolves to true irrespective of whether unregistration happened
 *   not (it may not unregister if someone else just called `web.ServiceWorkerContainer.register`
 *   the same scope.) The service worker will finish any ongoing operations
 *   it is unregistered.
 * 
 *   `ServiceWorkerRegistration.unregister().then(function(boolean) {
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister`
 */
web.ServiceWorkerRegistration.unregister = (function web$ServiceWorkerRegistration$unregister(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52414 = arguments.length;
var i__42557__auto___52415 = (0);
while(true){
if((i__42557__auto___52415 < len__42556__auto___52414)){
args__42563__auto__.push((arguments[i__42557__auto___52415]));

var G__52416 = (i__42557__auto___52415 + (1));
i__42557__auto___52415 = G__52416;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ServiceWorkerRegistration.unregister.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ServiceWorkerRegistration.unregister.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.unregister,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ServiceWorkerRegistration.unregister.cljs$lang$maxFixedArity = (1);

web.ServiceWorkerRegistration.unregister.cljs$lang$applyTo = (function (seq52412){
var G__52413 = cljs.core.first.call(null,seq52412);
var seq52412__$1 = cljs.core.next.call(null,seq52412);
return web.ServiceWorkerRegistration.unregister.cljs$core$IFn$_invoke$arity$variadic(G__52413,seq52412__$1);
});

/**
 * Method.
 * 
 *   The update method of the `web.ServiceWorkerRegistration` interface
 *   to update the service worker. It fetches the worker's script
 *   and if the new worker is not byte-by-byte identical to the current
 *   it installs the new worker. The fetch of the worker bypasses
 *   browser caches if the previous fetch occurred over 24 hours ago.
 * 
 *   `ServiceWorkerRegistration.update();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update`
 */
web.ServiceWorkerRegistration.update = (function web$ServiceWorkerRegistration$update(this$){
return this$.update();
});
/**
 * Property.
 * 
 *   The active property of the `web.ServiceWorkerRegistration` interface
 *   a service worker whose `web.ServiceWorker.state` is activating
 *   activated. This property is initially set to null.
 * 
 *   `sw = ServiceWorker.active`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/active`
 */
web.ServiceWorkerRegistration.active = (function web$ServiceWorkerRegistration$active(this$){
return this$.active();
});
/**
 * Property.
 * 
 *   The active property of the `web.ServiceWorkerRegistration` interface
 *   a service worker whose `web.ServiceWorker.state` is activating
 *   activated. This property is initially set to null.
 * 
 *   `sw = ServiceWorker.active`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/active`
 */
web.ServiceWorkerRegistration.set_active_BANG_ = (function web$ServiceWorkerRegistration$set_active_BANG_(this$,val){
return (this$["active"] = val);
});
/**
 * Property.
 * 
 *   The installing property of the `web.ServiceWorkerRegistration`
 *   returns a service worker whose `web.ServiceWorker.state` is installing.
 *   property is initially set to null.
 * 
 *   `sw = ServiceWorker.installing`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/installing`
 */
web.ServiceWorkerRegistration.installing = (function web$ServiceWorkerRegistration$installing(this$){
return this$.installing();
});
/**
 * Property.
 * 
 *   The installing property of the `web.ServiceWorkerRegistration`
 *   returns a service worker whose `web.ServiceWorker.state` is installing.
 *   property is initially set to null.
 * 
 *   `sw = ServiceWorker.installing`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/installing`
 */
web.ServiceWorkerRegistration.set_installing_BANG_ = (function web$ServiceWorkerRegistration$set_installing_BANG_(this$,val){
return (this$["installing"] = val);
});
/**
 * Property.
 * 
 *   The navigationPreload read-only property of the `web.ServiceWorkerRegistration`
 *   returns the `web.NavigationPreloadManager` associated with the
 *   service worker registration.
 * 
 *   `var navigationPreloadManager = serviceWorkerRegistration.navigationPreload`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/navigationPreload`
 */
web.ServiceWorkerRegistration.navigation_preload = (function web$ServiceWorkerRegistration$navigation_preload(this$){
return this$.navigationPreload();
});
/**
 * Property.
 * 
 *   The navigationPreload read-only property of the `web.ServiceWorkerRegistration`
 *   returns the `web.NavigationPreloadManager` associated with the
 *   service worker registration.
 * 
 *   `var navigationPreloadManager = serviceWorkerRegistration.navigationPreload`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/navigationPreload`
 */
web.ServiceWorkerRegistration.set_navigation_preload_BANG_ = (function web$ServiceWorkerRegistration$set_navigation_preload_BANG_(this$,val){
return (this$["navigationPreload"] = val);
});
/**
 * Property.
 * 
 *   The onupdatefound property of the `web.ServiceWorkerRegistration`
 *   is an EventListener property called whenever an event of type
 *   is fired; it is fired any time the ServiceWorkerRegistration.installing
 *   acquires a new service worker.
 * 
 *   `ServiceWorkerRegistration.onupdatefound = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/onupdatefound`
 */
web.ServiceWorkerRegistration.onupdatefound = (function web$ServiceWorkerRegistration$onupdatefound(this$){
return this$.onupdatefound();
});
/**
 * Property.
 * 
 *   The onupdatefound property of the `web.ServiceWorkerRegistration`
 *   is an EventListener property called whenever an event of type
 *   is fired; it is fired any time the ServiceWorkerRegistration.installing
 *   acquires a new service worker.
 * 
 *   `ServiceWorkerRegistration.onupdatefound = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/onupdatefound`
 */
web.ServiceWorkerRegistration.set_onupdatefound_BANG_ = (function web$ServiceWorkerRegistration$set_onupdatefound_BANG_(this$,val){
return (this$["onupdatefound"] = val);
});
/**
 * Property.
 * 
 *   The periodicSync read-only property of the `web.ServiceWorkerRegistration`
 *   returns a reference to the `web.PeriodicSyncManager` interface,
 *   manages periodic background synchronization processes.
 * 
 *   `myPeriodicSync = ServiceWorker.periodicSync`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/periodicSync`
 */
web.ServiceWorkerRegistration.periodic_sync = (function web$ServiceWorkerRegistration$periodic_sync(this$){
return this$.periodicSync();
});
/**
 * Property.
 * 
 *   The periodicSync read-only property of the `web.ServiceWorkerRegistration`
 *   returns a reference to the `web.PeriodicSyncManager` interface,
 *   manages periodic background synchronization processes.
 * 
 *   `myPeriodicSync = ServiceWorker.periodicSync`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/periodicSync`
 */
web.ServiceWorkerRegistration.set_periodic_sync_BANG_ = (function web$ServiceWorkerRegistration$set_periodic_sync_BANG_(this$,val){
return (this$["periodicSync"] = val);
});
/**
 * Property.
 * 
 *   The pushManager property of the `web.ServiceWorkerRegistration`
 *   returns a reference to the `web.PushManager` interface for managing
 *   subscriptions; this includes support for subscribing, getting
 *   active subscription, and accessing push permission status.
 * 
 *   `myPushManager = ServiceWorker.pushManager`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager`
 */
web.ServiceWorkerRegistration.push_manager = (function web$ServiceWorkerRegistration$push_manager(this$){
return this$.pushManager();
});
/**
 * Property.
 * 
 *   The pushManager property of the `web.ServiceWorkerRegistration`
 *   returns a reference to the `web.PushManager` interface for managing
 *   subscriptions; this includes support for subscribing, getting
 *   active subscription, and accessing push permission status.
 * 
 *   `myPushManager = ServiceWorker.pushManager`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager`
 */
web.ServiceWorkerRegistration.set_push_manager_BANG_ = (function web$ServiceWorkerRegistration$set_push_manager_BANG_(this$,val){
return (this$["pushManager"] = val);
});
/**
 * Property.
 * 
 *   The scope read-only property of the `web.ServiceWorkerRegistration`
 *   returns a unique identifier for a service worker registration.
 *   service worker must be on the same origin as the document that
 *   the ServiceWorker.
 * 
 *   `swScope = ServiceWorkerRegistration.scope;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope`
 */
web.ServiceWorkerRegistration.scope = (function web$ServiceWorkerRegistration$scope(this$){
return this$.scope();
});
/**
 * Property.
 * 
 *   The scope read-only property of the `web.ServiceWorkerRegistration`
 *   returns a unique identifier for a service worker registration.
 *   service worker must be on the same origin as the document that
 *   the ServiceWorker.
 * 
 *   `swScope = ServiceWorkerRegistration.scope;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope`
 */
web.ServiceWorkerRegistration.set_scope_BANG_ = (function web$ServiceWorkerRegistration$set_scope_BANG_(this$,val){
return (this$["scope"] = val);
});
/**
 * Property.
 * 
 *   The sync property of the `web.ServiceWorkerRegistration` interface
 *   a reference to the `web.SyncManager` interface, which manages
 *   synchronization processes.
 * 
 *   `mySyncManager = ServiceWorker.sync`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync`
 */
web.ServiceWorkerRegistration.sync = (function web$ServiceWorkerRegistration$sync(this$){
return this$.sync();
});
/**
 * Property.
 * 
 *   The sync property of the `web.ServiceWorkerRegistration` interface
 *   a reference to the `web.SyncManager` interface, which manages
 *   synchronization processes.
 * 
 *   `mySyncManager = ServiceWorker.sync`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync`
 */
web.ServiceWorkerRegistration.set_sync_BANG_ = (function web$ServiceWorkerRegistration$set_sync_BANG_(this$,val){
return (this$["sync"] = val);
});
/**
 * Property.
 * 
 *   The waiting property of the `web.ServiceWorkerRegistration` interface
 *   a service worker whose `web.ServiceWorker.state` is installed.
 *   property is initially set to null.
 * 
 *   `var serviceWorker = ServiceWorker.waiting`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/waiting`
 */
web.ServiceWorkerRegistration.waiting = (function web$ServiceWorkerRegistration$waiting(this$){
return this$.waiting();
});
/**
 * Property.
 * 
 *   The waiting property of the `web.ServiceWorkerRegistration` interface
 *   a service worker whose `web.ServiceWorker.state` is installed.
 *   property is initially set to null.
 * 
 *   `var serviceWorker = ServiceWorker.waiting`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/waiting`
 */
web.ServiceWorkerRegistration.set_waiting_BANG_ = (function web$ServiceWorkerRegistration$set_waiting_BANG_(this$,val){
return (this$["waiting"] = val);
});

//# sourceMappingURL=ServiceWorkerRegistration.js.map?rel=1565798852657
