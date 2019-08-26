(ns web.dom.NavigatorLanguage
  "NavigatorLanguage contains methods and properties related to
  language of the navigator."
  (:refer-clojure :exclude []))

(defn language
  "Property.

  The NavigatorLanguage.language read-only property returns a string
  the preferred language of the user, usually the language of the
  UI.

  `var lang = navigator.language`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language`"
  [this]
  (-> this (.-language)))

(defn languages
  "Property.

  The NavigatorLanguage.languages read-only property returns an
  of `web.dom.DOMString`s representing the user's preferred languages.
  language is described using BCP 47 language tags. In the returned
  they are ordered by preference with the most preferred language

  `preferredLanguages = globalObj.navigator.languages`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages`"
  [this]
  (-> this (.-languages)))

