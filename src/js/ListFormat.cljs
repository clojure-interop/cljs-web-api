(ns js.ListFormat
  "The Intl.ListFormat object is a constructor for objects that
  language-sensitive list formatting."
  (:refer-clojure :exclude []))

(defn supported-locales-of
  "Method.

  The Intl.ListFormat.supportedLocalesOf() method returns an array
  those of the provided locales that are supported in date and
  formatting without having to fall back to the runtime's default

  `Intl.ListFormat.supportedLocalesOf(locales[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat/supportedLocalesOf`"
  [this & args]
  (apply (-> this .-supportedLocalesOf) (concat [this] args)))

(defn intl
  "Method.

  The format() method returns a string that has been formatted
  on parameters provided in the Intl.ListFormat object. The locales
  options parameters customize the behavior of format() and let
  specify the language conventions that should be used to format
  list.

  `listFormat.format([list]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat/format`"
  [this & args]
  (apply (-> this .-Intl) (concat [this] args)))

(defn prototype
  "Property.

  See `js.ListFormat` for a description of Intl.ListFormat instances.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  See `js.ListFormat` for a description of Intl.ListFormat instances.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat/prototype`"
  [this val]
  (aset this "prototype" val))

