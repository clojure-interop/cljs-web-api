// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.NavigatorPlugins');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   This method indicates whether the current browser is Java-enabled
 *   not.
 * 
 *   `result = window.navigator.javaEnabled()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/javaEnabled`
 */
web.NavigatorPlugins.java_enabled = (function web$NavigatorPlugins$java_enabled(this$){
return this$.javaEnabled();
});
/**
 * Property.
 * 
 *   Returns a `web.MimeTypeArray` object, which contains a list of
 *   objects representing the MIME types recognized by the browser.
 * 
 *   `var mimeTypes[] = navigator.mimeTypes;
 * 
 *   mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`
 */
web.NavigatorPlugins.mime_types = (function web$NavigatorPlugins$mime_types(this$){
return this$.mimeTypes();
});
/**
 * Property.
 * 
 *   Returns a `web.MimeTypeArray` object, which contains a list of
 *   objects representing the MIME types recognized by the browser.
 * 
 *   `var mimeTypes[] = navigator.mimeTypes;
 * 
 *   mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`
 */
web.NavigatorPlugins.set_mime_types_BANG_ = (function web$NavigatorPlugins$set_mime_types_BANG_(this$,val){
return (this$["mimeTypes"] = val);
});
/**
 * Property.
 * 
 *   Returns a `web.PluginArray` object, listing the `web.Plugin`
 *   describing the plugins installed in the application.
 * 
 *   `var plugins = navigator.plugins;
 * 
 *   plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.
 * 
 *   The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\"name\") methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`
 */
web.NavigatorPlugins.plugins = (function web$NavigatorPlugins$plugins(this$){
return this$.plugins();
});
/**
 * Property.
 * 
 *   Returns a `web.PluginArray` object, listing the `web.Plugin`
 *   describing the plugins installed in the application.
 * 
 *   `var plugins = navigator.plugins;
 * 
 *   plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.
 * 
 *   The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\"name\") methods.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`
 */
web.NavigatorPlugins.set_plugins_BANG_ = (function web$NavigatorPlugins$set_plugins_BANG_(this$,val){
return (this$["plugins"] = val);
});

//# sourceMappingURL=NavigatorPlugins.js.map?rel=1565798853583
