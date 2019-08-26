(ns web.dom.RadioNodeList
  "The RadioNodeList interface represents a collection of radio
  in a `<form>` or a `<fieldset>` element."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  If the underlying element collection contains radio buttons,
  RadioNodeList.value property represents the checked radio button.
  retrieving the value property, the value of the currently checked
  button is returned as a string. If the collection does not contain
  radio buttons or none of the radio buttons in the collection
  in checked state, the empty string is returned. On setting the
  property, the first radio button input element whose value property
  equal to the new value will be set to checked.

  `value = radioNodeList.value;
  radioNodeList.value = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  If the underlying element collection contains radio buttons,
  RadioNodeList.value property represents the checked radio button.
  retrieving the value property, the value of the currently checked
  button is returned as a string. If the collection does not contain
  radio buttons or none of the radio buttons in the collection
  in checked state, the empty string is returned. On setting the
  property, the first radio button input element whose value property
  equal to the new value will be set to checked.

  `value = radioNodeList.value;
  radioNodeList.value = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value`"
  [this val]
  (aset this "value" val))

