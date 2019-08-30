(ns web.other.PageTransitionEvent
  "The PageTransitionEvent is fired when a document is being loaded
  unloaded."
  (:refer-clojure :exclude []))

(defn persisted
  "Property.

  [Read Only]

  The persisted read-only property indicates if a webpage is loading
  a cache.

  `window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
  console.log('Page was loaded from cache.');
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent/persisted`"
  [this]
  (-> this (.-persisted)))

