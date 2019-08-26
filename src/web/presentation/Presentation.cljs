(ns web.presentation.Presentation
  "The Presentation can be defined as two possible user agents in
  context: Controlling user agent and Receiving user agent."
  (:refer-clojure :exclude []))

(defn default-request
  "Property.

  In a controlling user agent, the defaultRequest attribute MUST
  the default presentation request if any, otherwise null. In a
  browsing context, it MUST return null.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Presentation/defaultRequest`"
  [this]
  (-> this (.defaultRequest)))

(defn set-default-request!
  "Property.

  In a controlling user agent, the defaultRequest attribute MUST
  the default presentation request if any, otherwise null. In a
  browsing context, it MUST return null.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Presentation/defaultRequest`"
  [this val]
  (aset this "defaultRequest" val))

(defn receiver
  "Property.

  The read-only `web.presentation.Presentation` attribute receiver,
  is only available in browser contexts which are receiving a presentation,
  the `web.presentation.PresentationReceiver` object which can
  used to access and communicate with the browser context which
  the presentation. This property is always null when accessed
  outside a browser context which is receiving a presentation.

  `receiver = Presentation.receiver;

  receiver = navigator.presentation.receiver;

  Since the `web.presentation.Presentation` interface is typically accessed through `navigation.presentation`, the second form of the syntax shown above is the more commonly used.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Presentation/receiver`"
  [this]
  (-> this (.receiver)))

