(ns web.shadow-dom.Slotable
  "The Slotable mixin defines features that allow nodes to become
  contents of a `<slot>` element — the following features are included
  both `web.Element` and `web.Text`."
  (:refer-clojure :exclude []))

(defn assigned-slot
  "Property.

  The assignedSlot read-only property of the `web.shadow-dom.Slotable`
  returns an `web.shadow-dom.HTMLSlotElement` representing the
  element the node is inserted in.

  `var slotElement = elementInstance.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`"
  [this]
  (-> this (.-assignedSlot)))

(defn set-assigned-slot!
  "Property.

  The assignedSlot read-only property of the `web.shadow-dom.Slotable`
  returns an `web.shadow-dom.HTMLSlotElement` representing the
  element the node is inserted in.

  `var slotElement = elementInstance.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`"
  [this val]
  (aset this "assignedSlot" val))

