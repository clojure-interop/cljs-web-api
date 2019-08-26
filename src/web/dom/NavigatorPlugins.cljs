(ns web.dom.NavigatorPlugins
  "The NavigatorPlugins mixin adds to the `web.performance.Navigator`
  methods and properties for discovering and interacting with plugins
  into the browser."
  (:refer-clojure :exclude []))

(defn java-enabled
  "Method.

  This method indicates whether the current browser is Java-enabled
  not.

  `result = window.navigator.javaEnabled()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/javaEnabled`"
  [this ]
  (-> this (.javaEnabled)))

(defn mime-types
  "Property.

  Returns a `web.other.MimeTypeArray` object, which contains a
  of `web.other.MimeType` objects representing the MIME types recognized
  the browser.

  `var mimeTypes[] = navigator.mimeTypes;

  mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`"
  [this]
  (-> this (.mimeTypes)))

(defn set-mime-types!
  "Property.

  Returns a `web.other.MimeTypeArray` object, which contains a
  of `web.other.MimeType` objects representing the MIME types recognized
  the browser.

  `var mimeTypes[] = navigator.mimeTypes;

  mimeTypes is a MimeTypeArray object which has a length property as well as item(index) and namedItem(name) methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes`"
  [this val]
  (aset this "mimeTypes" val))

(defn plugins
  "Property.

  Returns a `web.PluginArray` object, listing the `web.Plugin`
  describing the plugins installed in the application.

  `var plugins = navigator.plugins;

  plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.

  The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\\\"name\\\") methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`"
  [this]
  (-> this (.plugins)))

(defn set-plugins!
  "Property.

  Returns a `web.PluginArray` object, listing the `web.Plugin`
  describing the plugins installed in the application.

  `var plugins = navigator.plugins;

  plugins is `web.PluginArray` object used to access `web.Plugin` objects either by name or as a list of items.

  The returned value is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem(\\\"name\\\") methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins`"
  [this val]
  (aset this "plugins" val))

