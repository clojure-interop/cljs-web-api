(ns css.CSSPseudoElement
  "The CSSPseudoElement interface represents a pseudo-element that
  be the target of an event or animated using the Web Animations
  Instances of this interface may be obtained by calling `web.Element.pseudo()`."
  (:refer-clojure :exclude [type]))

(defn add-event-listener
  "Method.

  The `web.EventTarget` method addEventListener() sets up a function
  will be called whenever the specified event is delivered to the

  `target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`"
  [this & args]
  (apply (-> this .-addEventListener) (concat [this] args)))

(defn dispatch-event
  "Method.

  Dispatches an `web.Event` at the specified `web.EventTarget`,
  invoking the affected `web.EventListener`s in the appropriate
  The normal event processing rules (including the capturing and
  bubbling phase) also apply to events dispatched manually with

  `cancelled = !target.dispatchEvent(event)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`"
  [this event]
  (-> this (.dispatchEvent event)))

(defn remove-event-listener
  "Method.

  The EventTarget.removeEventListener() method removes from the
  an event listener previously registered with `web.EventTarget.addEventListener()`.
  event listener to be removed is identified using a combination
  the event type, the event listener function itself, and various
  options that may affect the matching process; see Matching event
  for removal

  `target.removeEventListener(type, listener[, options]);
  target.removeEventListener(type, listener[, useCapture]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`"
  [this & args]
  (apply (-> this .-removeEventListener) (concat [this] args)))

(defn element
  "Property.

  The element read-only property of the `css.CSSPseudoElement`
  returns a reference to the originating element of the pseudo-element,
  other words its parent element.

  `var originatingElement = cssPseudoElement.element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/element`"
  [this]
  (-> this (.element)))

(defn set-element!
  "Property.

  The element read-only property of the `css.CSSPseudoElement`
  returns a reference to the originating element of the pseudo-element,
  other words its parent element.

  `var originatingElement = cssPseudoElement.element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/element`"
  [this val]
  (aset this "element" val))

(defn type
  "Property.

  The type read-only property of the `css.CSSPseudoElement` interface
  the type of the pseudo-element as a string, represented in the
  of a CSS selector.

  `var typeOfPseudoElement = cssPseudoElement.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `css.CSSPseudoElement` interface
  the type of the pseudo-element as a string, represented in the
  of a CSS selector.

  `var typeOfPseudoElement = cssPseudoElement.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/type`"
  [this val]
  (aset this "type" val))

