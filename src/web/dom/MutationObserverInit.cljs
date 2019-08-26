(ns web.dom.MutationObserverInit
  "The MutationObserverInit dictionary describes the configuration
  a mutation observer. As such, it's primarily used as the type
  the options parameter on the `MutationObserver.observe()` method."
  (:refer-clojure :exclude []))

(defn attribute-filter
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional attributeFilter
  is an array of strings specifying the names of the attributes
  values are to be monitored for changes.

  `var options = {
  attributeFilter: [ \\\"list\\\", \\\"of\\\", \\\"attribute\\\", \\\"names\\\" ]
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeFilter`"
  [this]
  (-> this (.attributeFilter)))

(defn set-attribute-filter!
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional attributeFilter
  is an array of strings specifying the names of the attributes
  values are to be monitored for changes.

  `var options = {
  attributeFilter: [ \\\"list\\\", \\\"of\\\", \\\"attribute\\\", \\\"names\\\" ]
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeFilter`"
  [this val]
  (aset this "attributeFilter" val))

(defn attribute-old-value
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional attributeOldValue
  is used to specify whether or not to record the prior value of
  altered attribute in `web.dom.MutationRecord` objects denoting
  value changes.

  `var options = {
  attributeOldValue: true | false
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeOldValue`"
  [this]
  (-> this (.attributeOldValue)))

(defn set-attribute-old-value!
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional attributeOldValue
  is used to specify whether or not to record the prior value of
  altered attribute in `web.dom.MutationRecord` objects denoting
  value changes.

  `var options = {
  attributeOldValue: true | false
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeOldValue`"
  [this val]
  (aset this "attributeOldValue" val))

(defn attributes
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional attributes
  is used to specify whether or not to watch for attribute value
  on the node or nodes being observed.

  `var options = {
  attributes: true | false
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributes`"
  [this]
  (-> this (.attributes)))

(defn set-attributes!
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional attributes
  is used to specify whether or not to watch for attribute value
  on the node or nodes being observed.

  `var options = {
  attributes: true | false
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributes`"
  [this val]
  (aset this "attributes" val))

(defn character-data
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional characterData
  is used to specify whether or not to monitor the node or nodes
  observed for changes to their textual contents.

  `var options = {
  characterData: true | false
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterData`"
  [this]
  (-> this (.characterData)))

(defn set-character-data!
  "Property.

  The `web.dom.MutationObserverInit` dictionary's optional characterData
  is used to specify whether or not to monitor the node or nodes
  observed for changes to their textual contents.

  `var options = {
  characterData: true | false
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterData`"
  [this val]
  (aset this "characterData" val))

