(ns web.dom.HTMLTemplateElement
  "The HTMLTemplateElement interface enables access to the contents
  an HTML `<template>` element."
  (:refer-clojure :exclude []))

(defn content
  "Property.

  The HTMLTemplateElement.content property returns a <template>
  template contents (a `web.web-components.DocumentFragment`).

  `var documentFragment = templateElement.content`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content`"
  [this]
  (-> this (.-content)))

(defn set-content!
  "Property.

  The HTMLTemplateElement.content property returns a <template>
  template contents (a `web.web-components.DocumentFragment`).

  `var documentFragment = templateElement.content`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content`"
  [this val]
  (aset this "content" val))

