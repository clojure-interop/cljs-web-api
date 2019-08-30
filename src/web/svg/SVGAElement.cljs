(ns web.svg.SVGAElement
  "The SVGAElement interface provides access to the properties of
  element, as well as methods to manipulate them."
  (:refer-clojure :exclude [type]))

(defn download
  "Property.

  See HTMLAnchorElement.download."
  [this]
  (-> this (.-download)))

(defn set-download!
  "Property.

  See HTMLAnchorElement.download."
  [this val]
  (aset this "download" val))

(defn href
  "Property.

  See HTMLAnchorElement.href."
  [this]
  (-> this (.-href)))

(defn set-href!
  "Property.

  See HTMLAnchorElement.href."
  [this val]
  (aset this "href" val))

(defn hreflang
  "Property.

  Is a DOMString that reflects the hreflang attribute, indicating
  language of the linked resource."
  [this]
  (-> this (.-hreflang)))

(defn set-hreflang!
  "Property.

  Is a DOMString that reflects the hreflang attribute, indicating
  language of the linked resource."
  [this val]
  (aset this "hreflang" val))

(defn ping
  "Property.

  Is a DOMString that reflects the ping attribute, containing a
  list of URLs to which, when the hyperlink is followed, POST requests
  the body PING will be sent by the browser (in the background).
  used for tracking."
  [this]
  (-> this (.-ping)))

(defn set-ping!
  "Property.

  Is a DOMString that reflects the ping attribute, containing a
  list of URLs to which, when the hyperlink is followed, POST requests
  the body PING will be sent by the browser (in the background).
  used for tracking."
  [this val]
  (aset this "ping" val))

(defn referrer-policy
  "Property.

  See HTMLAnchorElement.referrerPolicy."
  [this]
  (-> this (.-referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  See HTMLAnchorElement.referrerPolicy."
  [this val]
  (aset this "referrerPolicy" val))

(defn rel
  "Property.

  See HTMLAnchorElement.rel."
  [this]
  (-> this (.-rel)))

(defn set-rel!
  "Property.

  See HTMLAnchorElement.rel."
  [this val]
  (aset this "rel" val))

(defn rel-list
  "Property.

  See HTMLAnchorElement.relList."
  [this]
  (-> this (.-relList)))

(defn set-rel-list!
  "Property.

  See HTMLAnchorElement.relList."
  [this val]
  (aset this "relList" val))

(defn target
  "Property.

  [Read Only]
  [Experimental]

  The SVGAElement.target read-only property of `web.svg.SVGAElement`
  an `web.svg.SVGAnimatedString` object that specifies the portion
  a target window, frame, pane into which a document is to be opened
  a link is activated.

  `myLink.target = 'value';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAElement/target`"
  [this]
  (-> this (.-target)))

(defn text
  "Property.

  Is a DOMString being a synonym for the Node.textContent property."
  [this]
  (-> this (.-text)))

(defn set-text!
  "Property.

  Is a DOMString being a synonym for the Node.textContent property."
  [this val]
  (aset this "text" val))

(defn type
  "Property.

  Is a DOMString that reflects the type attribute, indicating the
  type of the linked resource."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString that reflects the type attribute, indicating the
  type of the linked resource."
  [this val]
  (aset this "type" val))

