(ns web.event.BeforeInstallPromptEvent
  "The BeforeInstallPromptEvent is fired at the `Window.onbeforeinstallprompt`
  before a user is prompted to \\\"install\\\" a web site to a home
  on mobile."
  (:refer-clojure :exclude []))

(defn prompt
  "Method.

  The prompt() method of the `web.event.BeforeInstallPromptEvent`
  allows a developer to show the install prompt at a time of their
  choosing.

  `BeforeInstallPromptEvent.prompt()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent/prompt`"
  [this ]
  (-> this (.prompt)))

(defn platforms
  "Property.

  Returns an array of DOMString items containing the platforms
  which the event was dispatched. This is provided for user agents
  want to present a choice of versions to the user such as, for
  \"web\" or \"play\" which would allow the user to chose between a
  version or an Android version."
  [this]
  (-> this (.-platforms)))

(defn set-platforms!
  "Property.

  Returns an array of DOMString items containing the platforms
  which the event was dispatched. This is provided for user agents
  want to present a choice of versions to the user such as, for
  \"web\" or \"play\" which would allow the user to chose between a
  version or an Android version."
  [this val]
  (aset this "platforms" val))

(defn user-choice
  "Property.

  Returns a Promise that resolves to a DOMString containing either
  or \"dismissed\"."
  [this]
  (-> this (.-userChoice)))

(defn set-user-choice!
  "Property.

  Returns a Promise that resolves to a DOMString containing either
  or \"dismissed\"."
  [this val]
  (aset this "userChoice" val))

