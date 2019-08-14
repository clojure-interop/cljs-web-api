(ns web.Slotable
  "The Slotable mixin defines features that allow nodes to become
  contents of a `web.<slot>` element — the following features are
  in both `web.Element` and `web.Text`."
  (:refer-clojure :exclude []))

(defn assigned-slot
  "Property.

  The assignedSlot read-only property of the `web.Slotable` interface
  an `html.HTMLSlotElement` representing the `web.<slot>` element
  node is inserted in.

  `var slotElement = elementInstance.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`"
  [this]
  (-> this (.assignedSlot)))

(defn set-assigned-slot!
  "Property.

  The assignedSlot read-only property of the `web.Slotable` interface
  an `html.HTMLSlotElement` representing the `web.<slot>` element
  node is inserted in.

  `var slotElement = elementInstance.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`"
  [this val]
  (aset this "assignedSlot" val))

