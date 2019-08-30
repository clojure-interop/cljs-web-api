(ns web.dom.ValidityState
  "The ValidityState interface represents the validity states that
  element can be in, with respect to constraint validation. Together,
  help explain why an element's value fails to validate, if it's
  valid."
  (:refer-clojure :exclude []))

(defn bad-input
  "Property.

  [Read Only]

  The read-only badInput property of a ValidityState object indicates
  the user has provided input that the browser is unable to convert.
  example, if you have a number input element whose content is
  string. Note: While this is unsupported in Internet Explorer,
  non-numeric value will be dismissed from the field if it is a
  input.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/badInput`"
  [this]
  (-> this (.-badInput)))

(defn too-long
  "Property.

  [Read Only]

  The read-only tooLong property of a ValidityState object indicates
  the value of an `<input>`, `<button>`, `<select>`, `<output>`,
  or `<textarea>`, after having been edited by the user, exceeds
  maximum code-unit length established by the element's maxlength

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooLong`"
  [this]
  (-> this (.-tooLong)))

(defn too-short
  "Property.

  [Read Only]

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort`"
  [this]
  (-> this (.-tooShort)))

