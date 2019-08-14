(ns web.BeforeInstallPromptEvent
  "The BeforeInstallPromptEvent is fired at the `web.Window.onbeforeinstallprompt`
  before a user is prompted to \\\"install\\\" a web site to a home
  on mobile."
  (:refer-clojure :exclude []))

(defn prompt
  "Method.

  The prompt() method of the `web.BeforeInstallPromptEvent` interface
  a developer to show the install prompt at a time of their own

  `BeforeInstallPromptEvent.prompt()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent/prompt`"
  [this ]
  (-> this (.prompt)))

