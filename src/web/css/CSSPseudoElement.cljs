(ns web.css.CSSPseudoElement
  "The CSSPseudoElement interface represents a pseudo-element that
  be the target of an event or animated using the Web Animations
  Instances of this interface may be obtained by calling `Element.pseudo()`."
  (:refer-clojure :exclude [type]))

(defn animate
  "Method.

  A shortcut method to create and run an animation on a pseudo-element.
  the created Animation object instance."
  [this & args]
  (apply (-> this .-animate) (concat [this] args)))

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

(defn element
  "Property.

  The element read-only property of the `web.css.CSSPseudoElement`
  returns a reference to the originating element of the pseudo-element,
  other words its parent element.

  `var originatingElement = cssPseudoElement.element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/element`"
  [this]
  (-> this (.element)))

(defn set-element!
  "Property.

  The element read-only property of the `web.css.CSSPseudoElement`
  returns a reference to the originating element of the pseudo-element,
  other words its parent element.

  `var originatingElement = cssPseudoElement.element;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/element`"
  [this val]
  (aset this "element" val))

(defn type
  "Property.

  The type read-only property of the `web.css.CSSPseudoElement`
  returns the type of the pseudo-element as a string, represented
  the form of a CSS selector.

  `var typeOfPseudoElement = cssPseudoElement.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.css.CSSPseudoElement`
  returns the type of the pseudo-element as a string, represented
  the form of a CSS selector.

  `var typeOfPseudoElement = cssPseudoElement.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/type`"
  [this val]
  (aset this "type" val))

