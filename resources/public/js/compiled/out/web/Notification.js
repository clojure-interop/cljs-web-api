// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Notification');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Notification() constructor creates a new `web.Notification` object instance, which represents a user notification.
 * 
 *   title
 *   Defines a title for the notification, which is shown at the top of the notification window.
 *   options Optional
 *   An options object containing any custom settings that you want to apply to the notification. The possible options are:
 * 
 *   dir: The direction in which to display the notification. It defaults to auto, which just adopts the browser's language setting behavior, but you can override that behaviour by setting values of ltr and rtl (although most browsers seem to ignore these settings.)
 *   lang: The notification's language, as specified using a `dom.DOMString` representing a BCP 47 language tag. See the Sitepoint ISO 2 letter language codes page for a simple reference.
 *   badge: A `web.USVString` containing the URL of the image used to represent the notification when there isn't enough space to display the notification itself.
 *   body: A `dom.DOMString` representing the body text of the notification, which is displayed below the title.
 *   tag: A `dom.DOMString` representing an identifying tag for the notification.
 *   icon: A `web.USVString` containing the URL of an icon to be displayed in the notification.
 *   image: a `web.USVString` containing the URL of an image to be displayed in the notification.
 *   data: Arbitrary data that you want associated with the notification. This can be of any data type.
 *   vibrate: A vibration pattern for the device's vibration hardware to emit with the notification.
 *   renotify: A `web.Boolean` specifying whether the user should be notified after a new notification replaces an old one. The default is false, which means they won't be notified.
 *   requireInteraction: Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. The default value is false.
 *   actions: An array of `web.NotificationAction`s representing the actions available to the user when the notification is presented. These are options the user can choose among in order to act on the action within the context of the notification itself. The action's name is sent to the service worker notification handler to let it know the action was selected by the user.
 * 
 * 
 *   The following options are listed in the most up-to-date specification, but aren 't supported in any browsers yet. It's advisable to keep checking back regularly to see if the status of these has updated, and let us know if you find any out-of-date information.
 * 
 * 
 *   silent: A `web.Boolean` specifying whether the notification is silent  (no sounds or vibrations  issued), regardless of the device settings. The default is false, which means it won't be silent.
 *   noscreen: A `web.Boolean` specifying whether the notification firing enable the device's screen or not. The default is false, which means it enables the screen.
 *   sticky: A `web.Boolean` specifying whether the notification is \"sticky\", i.e. not easily clearable by the user. The default is false, which means it won't be sticky.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification`
 */
web.Notification.constructor$ = Notification;
/**
 * Method.
 * 
 *   The close() method of the `web.Notification` interface is used
 *   close a previously displayed notification.
 * 
 *   `Notification.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/close`
 */
web.Notification.close = (function web$Notification$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The requestPermission() method of the `web.Notification` interface
 *   permission from the user for the current origin to display notifications.
 * 
 *   `The latest spec has updated this method to a promise-based syntax that works like this:
 * 
 * 
 * 
 *   Notification.requestPermission().then(function(permission) { ... });
 * 
 *   Previously, the syntax was based on a simple callback; this version is now deprecated:
 * 
 * 
 * 
 *   Notification.requestPermission(callback);
 * 
 *   Safari Version 12.0.3 still uses callback to get the permission.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission`
 */
web.Notification.request_permission = (function web$Notification$request_permission(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43234 = arguments.length;
var i__42557__auto___43235 = (0);
while(true){
if((i__42557__auto___43235 < len__42556__auto___43234)){
args__42563__auto__.push((arguments[i__42557__auto___43235]));

var G__43236 = (i__42557__auto___43235 + (1));
i__42557__auto___43235 = G__43236;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Notification.request_permission.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Notification.request_permission.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestPermission,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Notification.request_permission.cljs$lang$maxFixedArity = (1);

web.Notification.request_permission.cljs$lang$applyTo = (function (seq43232){
var G__43233 = cljs.core.first.call(null,seq43232);
var seq43232__$1 = cljs.core.next.call(null,seq43232);
return web.Notification.request_permission.cljs$core$IFn$_invoke$arity$variadic(G__43233,seq43232__$1);
});

/**
 * Property.
 * 
 *   The actions read-only property of the `web.Notification` interface
 *   the list of `web.NotificationAction` objects set using the actions
 *   when creating the notification using the `web.Notification()`
 * 
 *   `var actions[] = Notification.actions;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/actions`
 */
web.Notification.actions = (function web$Notification$actions(this$){
return this$.actions();
});
/**
 * Property.
 * 
 *   The actions read-only property of the `web.Notification` interface
 *   the list of `web.NotificationAction` objects set using the actions
 *   when creating the notification using the `web.Notification()`
 * 
 *   `var actions[] = Notification.actions;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/actions`
 */
web.Notification.set_actions_BANG_ = (function web$Notification$set_actions_BANG_(this$,val){
return (this$["actions"] = val);
});
/**
 * Property.
 * 
 *   The badge property of the `web.Notification` interface returns
 *   URL of the image used to represent the notification when there
 *   not enough space to display the notification itself.
 * 
 *   `var url = Notification.badge`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/badge`
 */
web.Notification.badge = (function web$Notification$badge(this$){
return this$.badge();
});
/**
 * Property.
 * 
 *   The badge property of the `web.Notification` interface returns
 *   URL of the image used to represent the notification when there
 *   not enough space to display the notification itself.
 * 
 *   `var url = Notification.badge`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/badge`
 */
web.Notification.set_badge_BANG_ = (function web$Notification$set_badge_BANG_(this$,val){
return (this$["badge"] = val);
});
/**
 * Property.
 * 
 *   The body read-only property of the `web.Notification` interface
 *   the body string of the notification, as specified in the body
 *   of the `web.Notification()` constructor.
 * 
 *   `var body = Notification.body;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/body`
 */
web.Notification.body = (function web$Notification$body(this$){
return this$.body();
});
/**
 * Property.
 * 
 *   The body read-only property of the `web.Notification` interface
 *   the body string of the notification, as specified in the body
 *   of the `web.Notification()` constructor.
 * 
 *   `var body = Notification.body;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/body`
 */
web.Notification.set_body_BANG_ = (function web$Notification$set_body_BANG_(this$,val){
return (this$["body"] = val);
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.Notification` interface
 *   a structured clone of the notification's data, as specified in
 *   data option of the `web.Notification()` constructor.
 * 
 *   `var data = Notification.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/data`
 */
web.Notification.data = (function web$Notification$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.Notification` interface
 *   a structured clone of the notification's data, as specified in
 *   data option of the `web.Notification()` constructor.
 * 
 *   `var data = Notification.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/data`
 */
web.Notification.set_data_BANG_ = (function web$Notification$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The dir read-only property of the `web.Notification` interface
 *   the text direction of the notification, as specified in the dir
 *   of the `web.Notification()` constructor.
 * 
 *   `var direction = Notification.dir;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/dir`
 */
web.Notification.dir = (function web$Notification$dir(this$){
return this$.dir();
});
/**
 * Property.
 * 
 *   The dir read-only property of the `web.Notification` interface
 *   the text direction of the notification, as specified in the dir
 *   of the `web.Notification()` constructor.
 * 
 *   `var direction = Notification.dir;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/dir`
 */
web.Notification.set_dir_BANG_ = (function web$Notification$set_dir_BANG_(this$,val){
return (this$["dir"] = val);
});
/**
 * Property.
 * 
 *   The icon read-only property of the `web.Notification` interface
 *   the URL of an icon to be displayed as part of the notification,
 *   specified in the icon option of the `web.Notification()` constructor.
 * 
 *   `var icon = Notification.icon;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/icon`
 */
web.Notification.icon = (function web$Notification$icon(this$){
return this$.icon();
});
/**
 * Property.
 * 
 *   The icon read-only property of the `web.Notification` interface
 *   the URL of an icon to be displayed as part of the notification,
 *   specified in the icon option of the `web.Notification()` constructor.
 * 
 *   `var icon = Notification.icon;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/icon`
 */
web.Notification.set_icon_BANG_ = (function web$Notification$set_icon_BANG_(this$,val){
return (this$["icon"] = val);
});
/**
 * Property.
 * 
 *   The image read-only property of the `web.Notification` interface
 *   the URL of an image to be displayed as part of the notification
 * 
 *   `var image = Notification.image;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/image`
 */
web.Notification.image = (function web$Notification$image(this$){
return this$.image();
});
/**
 * Property.
 * 
 *   The image read-only property of the `web.Notification` interface
 *   the URL of an image to be displayed as part of the notification
 * 
 *   `var image = Notification.image;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/image`
 */
web.Notification.set_image_BANG_ = (function web$Notification$set_image_BANG_(this$,val){
return (this$["image"] = val);
});
/**
 * Property.
 * 
 *   The lang read-only property of the `web.Notification` interface
 *   the text direction of the notification, as specified in the lang
 *   of the `web.Notification()` constructor.
 * 
 *   `var language = Notification.lang;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/lang`
 */
web.Notification.lang = (function web$Notification$lang(this$){
return this$.lang();
});
/**
 * Property.
 * 
 *   The lang read-only property of the `web.Notification` interface
 *   the text direction of the notification, as specified in the lang
 *   of the `web.Notification()` constructor.
 * 
 *   `var language = Notification.lang;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/lang`
 */
web.Notification.set_lang_BANG_ = (function web$Notification$set_lang_BANG_(this$,val){
return (this$["lang"] = val);
});
/**
 * Property.
 * 
 *   The onclick property of the `web.Notification` interface specifies
 *   event listener to receive click events. These events occur when
 *   user clicks on a displayed `web.Notification`.
 * 
 *   `Notification.onclick = function(event) { ... };
 * 
 *   The default behavior is to move the focus to the viewport of the notification's related browsing context. If you don't want that behaviour, call preventDefault() on the event object.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclick`
 */
web.Notification.onclick = (function web$Notification$onclick(this$){
return this$.onclick();
});
/**
 * Property.
 * 
 *   The onclick property of the `web.Notification` interface specifies
 *   event listener to receive click events. These events occur when
 *   user clicks on a displayed `web.Notification`.
 * 
 *   `Notification.onclick = function(event) { ... };
 * 
 *   The default behavior is to move the focus to the viewport of the notification's related browsing context. If you don't want that behaviour, call preventDefault() on the event object.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclick`
 */
web.Notification.set_onclick_BANG_ = (function web$Notification$set_onclick_BANG_(this$,val){
return (this$["onclick"] = val);
});
/**
 * Property.
 * 
 *   The onclose property of the `web.Notification` interface specifies
 *   event listener to receive close events. These events occur when
 *   `web.Notification` is closed.
 * 
 *   `Notification.onclose = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclose`
 */
web.Notification.onclose = (function web$Notification$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The onclose property of the `web.Notification` interface specifies
 *   event listener to receive close events. These events occur when
 *   `web.Notification` is closed.
 * 
 *   `Notification.onclose = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclose`
 */
web.Notification.set_onclose_BANG_ = (function web$Notification$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `web.Notification` interface specifies
 *   event listener to receive error events. These events occur when
 *   goes wrong with a `web.Notification` (in many cases an error
 *   the notification from being displayed.)
 * 
 *   `Notification.onerror = EventListener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onerror`
 */
web.Notification.onerror = (function web$Notification$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.Notification` interface specifies
 *   event listener to receive error events. These events occur when
 *   goes wrong with a `web.Notification` (in many cases an error
 *   the notification from being displayed.)
 * 
 *   `Notification.onerror = EventListener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onerror`
 */
web.Notification.set_onerror_BANG_ = (function web$Notification$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onshow property of the `web.Notification` interface specifies
 *   event listener to receive show events. These events occur when
 *   `web.Notification` is displayed.
 * 
 *   `Notification.onshow = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onshow`
 */
web.Notification.onshow = (function web$Notification$onshow(this$){
return this$.onshow();
});
/**
 * Property.
 * 
 *   The onshow property of the `web.Notification` interface specifies
 *   event listener to receive show events. These events occur when
 *   `web.Notification` is displayed.
 * 
 *   `Notification.onshow = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onshow`
 */
web.Notification.set_onshow_BANG_ = (function web$Notification$set_onshow_BANG_(this$,val){
return (this$["onshow"] = val);
});
/**
 * Property.
 * 
 *   The permission read-only property of the `web.Notification` interface
 *   the current permission granted by the user for the current origin
 *   display web notifications.
 * 
 *   `var permission = Notification.permission;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission`
 */
web.Notification.permission = (function web$Notification$permission(this$){
return this$.permission();
});
/**
 * Property.
 * 
 *   The permission read-only property of the `web.Notification` interface
 *   the current permission granted by the user for the current origin
 *   display web notifications.
 * 
 *   `var permission = Notification.permission;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission`
 */
web.Notification.set_permission_BANG_ = (function web$Notification$set_permission_BANG_(this$,val){
return (this$["permission"] = val);
});
/**
 * Property.
 * 
 *   The renotify read-only property of the `web.Notification` interface
 *   whether the user should be notified after a new notification
 *   an old one, as specified in the renotify option of the `web.Notification()`
 * 
 *   `var renotify = Notification.renotify;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/renotify`
 */
web.Notification.renotify = (function web$Notification$renotify(this$){
return this$.renotify();
});
/**
 * Property.
 * 
 *   The renotify read-only property of the `web.Notification` interface
 *   whether the user should be notified after a new notification
 *   an old one, as specified in the renotify option of the `web.Notification()`
 * 
 *   `var renotify = Notification.renotify;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/renotify`
 */
web.Notification.set_renotify_BANG_ = (function web$Notification$set_renotify_BANG_(this$,val){
return (this$["renotify"] = val);
});
/**
 * Property.
 * 
 *   The requireInteraction read-only property of the `web.Notification`
 *   returns a `web.Boolean` indicating that a notification should
 *   active until the user clicks or dismisses it, rather than closing
 * 
 *   `function spawnNotification(theTitle,theBody,shouldRequireInteraction) {
 *   var options = {
 *   body: theBody,
 *   requireInteraction: shouldRequireInteraction
 *   }
 *   var n = new Notification(theTitle,options);
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/requireInteraction`
 */
web.Notification.require_interaction = (function web$Notification$require_interaction(this$){
return this$.requireInteraction();
});
/**
 * Property.
 * 
 *   The requireInteraction read-only property of the `web.Notification`
 *   returns a `web.Boolean` indicating that a notification should
 *   active until the user clicks or dismisses it, rather than closing
 * 
 *   `function spawnNotification(theTitle,theBody,shouldRequireInteraction) {
 *   var options = {
 *   body: theBody,
 *   requireInteraction: shouldRequireInteraction
 *   }
 *   var n = new Notification(theTitle,options);
 *   }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/requireInteraction`
 */
web.Notification.set_require_interaction_BANG_ = (function web$Notification$set_require_interaction_BANG_(this$,val){
return (this$["requireInteraction"] = val);
});
/**
 * Property.
 * 
 *   The silent read-only property of the `web.Notification` interface
 *   whether the notification should be silent, i.e., no sounds or
 *   should be issued, regardless of the device settings. This is
 *   in the renotify option of the `web.Notification()` constructor.
 * 
 *   `var silent = Notification.silent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/silent`
 */
web.Notification.silent = (function web$Notification$silent(this$){
return this$.silent();
});
/**
 * Property.
 * 
 *   The silent read-only property of the `web.Notification` interface
 *   whether the notification should be silent, i.e., no sounds or
 *   should be issued, regardless of the device settings. This is
 *   in the renotify option of the `web.Notification()` constructor.
 * 
 *   `var silent = Notification.silent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/silent`
 */
web.Notification.set_silent_BANG_ = (function web$Notification$set_silent_BANG_(this$,val){
return (this$["silent"] = val);
});
/**
 * Property.
 * 
 *   The tag read-only property of the `web.Notification` interface
 *   an identifying tag for the notification, as specified in the
 *   option of the `web.Notification()` constructor.
 * 
 *   `var tag = Notification.tag;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/tag`
 */
web.Notification.tag = (function web$Notification$tag(this$){
return this$.tag();
});
/**
 * Property.
 * 
 *   The tag read-only property of the `web.Notification` interface
 *   an identifying tag for the notification, as specified in the
 *   option of the `web.Notification()` constructor.
 * 
 *   `var tag = Notification.tag;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/tag`
 */
web.Notification.set_tag_BANG_ = (function web$Notification$set_tag_BANG_(this$,val){
return (this$["tag"] = val);
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `web.Notification` interface
 *   a DOMTimeStamp, as specified in the timestamp option of the `web.Notification()`
 * 
 *   `var timestamp = Notification.timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp`
 */
web.Notification.timestamp = (function web$Notification$timestamp(this$){
return this$.timestamp();
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `web.Notification` interface
 *   a DOMTimeStamp, as specified in the timestamp option of the `web.Notification()`
 * 
 *   `var timestamp = Notification.timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp`
 */
web.Notification.set_timestamp_BANG_ = (function web$Notification$set_timestamp_BANG_(this$,val){
return (this$["timestamp"] = val);
});
/**
 * Property.
 * 
 *   The title read-only property of the `web.Notification` interface
 *   the title of the notification, as specified in the title parameter
 *   the `web.Notification()` constructor.
 * 
 *   `var title = Notification.title;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/title`
 */
web.Notification.title = (function web$Notification$title(this$){
return this$.title();
});
/**
 * Property.
 * 
 *   The title read-only property of the `web.Notification` interface
 *   the title of the notification, as specified in the title parameter
 *   the `web.Notification()` constructor.
 * 
 *   `var title = Notification.title;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/title`
 */
web.Notification.set_title_BANG_ = (function web$Notification$set_title_BANG_(this$,val){
return (this$["title"] = val);
});
/**
 * Property.
 * 
 *   The vibrate read-only property of the `web.Notification` interface
 *   a a vibration pattern for the device's vibration hardware to
 *   when the notification fires. This is specified in the vibrate
 *   of the `web.Notification()` constructor.
 * 
 *   `var vibrate = Notification.vibrate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/vibrate`
 */
web.Notification.vibrate = (function web$Notification$vibrate(this$){
return this$.vibrate();
});
/**
 * Property.
 * 
 *   The vibrate read-only property of the `web.Notification` interface
 *   a a vibration pattern for the device's vibration hardware to
 *   when the notification fires. This is specified in the vibrate
 *   of the `web.Notification()` constructor.
 * 
 *   `var vibrate = Notification.vibrate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/vibrate`
 */
web.Notification.set_vibrate_BANG_ = (function web$Notification$set_vibrate_BANG_(this$,val){
return (this$["vibrate"] = val);
});

//# sourceMappingURL=Notification.js.map?rel=1565798804879
