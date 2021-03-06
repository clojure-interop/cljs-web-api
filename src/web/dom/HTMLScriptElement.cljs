(ns web.dom.HTMLScriptElement
  "HTML `<script>` elements expose the HTMLScriptElement interface,
  provides special properties and methods for manipulating the
  and execution of <script> elements (beyond the inherited `web.dom.HTMLElement`"
  (:refer-clojure :exclude []))

(defn referrer-policy
  "Property.

  The referrerPolicy property of the `web.dom.HTMLScriptElement`
  reflects the HTML referrerpolicy of the `<script>` element and
  made by that script, defining which referrer is sent when fetching
  resource.

  `refStr = scriptElem.referrerPolicy;
  scriptElem.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The referrerPolicy property of the `web.dom.HTMLScriptElement`
  reflects the HTML referrerpolicy of the `<script>` element and
  made by that script, defining which referrer is sent when fetching
  resource.

  `refStr = scriptElem.referrerPolicy;
  scriptElem.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

