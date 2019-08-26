(ns web.other.NotificationAction
  "The NotificationAction interface of the Notifications API is
  to represent action buttons the user can click to interact with"
  (:refer-clojure :exclude []))

(defn action
  "Property.

  The name of the action, which can be used to identify the clicked
  similar to input names."
  [this]
  (-> this (.-action)))

(defn set-action!
  "Property.

  The name of the action, which can be used to identify the clicked
  similar to input names."
  [this val]
  (aset this "action" val))

(defn title
  "Property.

  The string describing the action that is displayed to the user."
  [this]
  (-> this (.-title)))

(defn set-title!
  "Property.

  The string describing the action that is displayed to the user."
  [this val]
  (aset this "title" val))

(defn icon
  "Property.

  The URL of the image used to represent the notification when
  is not enough space to display the notification itself."
  [this]
  (-> this (.-icon)))

(defn set-icon!
  "Property.

  The URL of the image used to represent the notification when
  is not enough space to display the notification itself."
  [this val]
  (aset this "icon" val))

