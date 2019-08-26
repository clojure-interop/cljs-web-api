(ns web.other.MimeType
  "The MimeType interface provides contains information about a
  type associated with a particular plugin. `NavigatorPlugins.mimeTypes`
  an array of this object."
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  Returns the MIME type of the associated plugin."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Returns the MIME type of the associated plugin."
  [this val]
  (aset this "type" val))

(defn description
  "Property.

  Returns a description of the associated plugin or an empty string
  there is none."
  [this]
  (-> this (.-description)))

(defn set-description!
  "Property.

  Returns a description of the associated plugin or an empty string
  there is none."
  [this val]
  (aset this "description" val))

(defn suffixes
  "Property.

  A string containing valid file extensions for the data displayed
  the plugin, or an empty string if an extension is not valid for
  particular module. For example, a browser's content decryption
  may appear in the plugin list but support more file extensions
  can be anticipated. It might therefore return an empty string."
  [this]
  (-> this (.-suffixes)))

(defn set-suffixes!
  "Property.

  A string containing valid file extensions for the data displayed
  the plugin, or an empty string if an extension is not valid for
  particular module. For example, a browser's content decryption
  may appear in the plugin list but support more file extensions
  can be anticipated. It might therefore return an empty string."
  [this val]
  (aset this "suffixes" val))

(defn enabled-plugin
  "Property.

  Returns an instance of Plugin containing information about the
  itself."
  [this]
  (-> this (.-enabledPlugin)))

(defn set-enabled-plugin!
  "Property.

  Returns an instance of Plugin containing information about the
  itself."
  [this val]
  (aset this "enabledPlugin" val))

