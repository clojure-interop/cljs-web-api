(ns html.HTMLTimeElement
  "The HTMLTimeElement interface provides special properties (beyond
  regular `html.HTMLElement` interface it also has available to
  by inheritance) for manipulating `web.<time>` elements."
  (:refer-clojure :exclude []))

(defn date-time
  "Property.

  The HTMLTimeElement.dateTime property is a `dom.DOMString` that
  the datetime HTML attribute, containing a machine-readable form
  the element's date and time value.

  `dateTimeString = timeElt.dateTime;
  timeElt.dateTime = dateTimeString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement/dateTime`"
  [this]
  (-> this (.dateTime)))

(defn set-date-time!
  "Property.

  The HTMLTimeElement.dateTime property is a `dom.DOMString` that
  the datetime HTML attribute, containing a machine-readable form
  the element's date and time value.

  `dateTimeString = timeElt.dateTime;
  timeElt.dateTime = dateTimeString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement/dateTime`"
  [this val]
  (aset this "dateTime" val))

