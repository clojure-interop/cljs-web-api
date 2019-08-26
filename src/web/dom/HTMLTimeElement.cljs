(ns web.dom.HTMLTimeElement
  "The HTMLTimeElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<time>` elements."
  (:refer-clojure :exclude []))

(defn date-time
  "Property.

  The HTMLTimeElement.dateTime property is a `web.dom.DOMString`
  reflects the datetime HTML attribute, containing a machine-readable
  of the element's date and time value.

  `dateTimeString = timeElt.dateTime;
  timeElt.dateTime = dateTimeString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement/dateTime`"
  [this]
  (-> this (.dateTime)))

(defn set-date-time!
  "Property.

  The HTMLTimeElement.dateTime property is a `web.dom.DOMString`
  reflects the datetime HTML attribute, containing a machine-readable
  of the element's date and time value.

  `dateTimeString = timeElt.dateTime;
  timeElt.dateTime = dateTimeString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement/dateTime`"
  [this val]
  (aset this "dateTime" val))

