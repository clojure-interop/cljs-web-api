(ns web.ValidityState
  "The ValidityState interface represents the validity states that
  element can be in, with respect to constraint validation. Together,
  help explain why an element's value fails to validate, if it's
  valid."
  (:refer-clojure :exclude []))

(defn bad-input
  "Property.

  The read-only badInput property of a ValidityState object indicates
  the user has provided input that the browser is unable to convert.
  example, if you have a number input element whose content is
  string. Note: While this is unsupported in Internet Explorer,
  non-numeric value will be dismissed from the field if it is a
  input.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/badInput`"
  [this]
  (-> this (.badInput)))

(defn too-long
  "Property.

  The read-only tooLong property of a ValidityState object indicates
  the value of an `web.<input>`, `web.<button>`, `web.<select>`,
  `web.<fieldset>` or `web.<textarea>`, after having been edited
  the user, exceeds the maximum code-unit length established by
  element's maxlength attribute.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooLong`"
  [this]
  (-> this (.tooLong)))

(defn set-too-long!
  "Property.

  The read-only tooLong property of a ValidityState object indicates
  the value of an `web.<input>`, `web.<button>`, `web.<select>`,
  `web.<fieldset>` or `web.<textarea>`, after having been edited
  the user, exceeds the maximum code-unit length established by
  element's maxlength attribute.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooLong`"
  [this val]
  (aset this "tooLong" val))

(defn too-short
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort`"
  [this]
  (-> this (.tooShort)))

(defn set-too-short!
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort`"
  [this val]
  (aset this "tooShort" val))

