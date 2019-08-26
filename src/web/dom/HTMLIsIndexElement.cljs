(ns web.dom.HTMLIsIndexElement
  "The HTMLIsIndexElement interface provides special properties
  the regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<isindex>` elements."
  (:refer-clojure :exclude []))

(defn form
  "Property.

  Is a HTMLFormElement representing the <form> element it belongs
  It can have the null value, if <isindex> isn't part of any form."
  [this]
  (-> this (.-form)))

(defn set-form!
  "Property.

  Is a HTMLFormElement representing the <form> element it belongs
  It can have the null value, if <isindex> isn't part of any form."
  [this val]
  (aset this "form" val))

(defn prompt
  "Property.

  Is a DOMString representing a text to be prompted for the field."
  [this]
  (-> this (.-prompt)))

(defn set-prompt!
  "Property.

  Is a DOMString representing a text to be prompted for the field."
  [this val]
  (aset this "prompt" val))

