(ns web.dom.HTMLDialogElement
  "The HTMLDialogElement interface provides methods to manipulate
  elements. It inherits properties and methods from the `web.dom.HTMLElement`"
  (:refer-clojure :exclude []))

(defn close
  "Method.

  [Experimental]

  Void.

  `dialogInstance.close(returnValue);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close`"
  [this return-value]
  (-> this (.close return-value)))

(defn show
  "Method.

  [Experimental]

  The show() method of the `web.dom.HTMLDialogElement` interface
  the dialog modelessly, i.e. still allowing interaction with content
  of the dialog.

  `dialogInstance.show();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show`"
  [this ]
  (-> this (.show)))

(defn show-modal
  "Method.

  [Experimental]

  The showModal() method of the `web.dom.HTMLDialogElement` interface
  the dialog as a modal, over the top of any other dialogs that
  be present. It displays into the top layer, along with a ::backdrop
  Interaction outside the dialog is blocked and the content outside
  is rendered inert.

  `dialogInstance.showModal();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal`"
  [this ]
  (-> this (.showModal)))

(defn open
  "Property.

  [Experimental]

  A `js.Boolean` representing the state of the open HTML attribute.
  means it is set, and therefore the dialog is shown. false means
  not set, and therefore the dialog is not shown.

  `dialogInstance.open = true;
  var myOpenValue = dialogInstance.open;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/open`"
  [this]
  (-> this (.-open)))

(defn set-open!
  "Property.

  [Experimental]

  A `js.Boolean` representing the state of the open HTML attribute.
  means it is set, and therefore the dialog is shown. false means
  not set, and therefore the dialog is not shown.

  `dialogInstance.open = true;
  var myOpenValue = dialogInstance.open;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/open`"
  [this val]
  (aset this "open" val))

(defn return-value
  "Property.

  [Experimental]

  The returnValue property of the `web.dom.HTMLDialogElement` interface
  or sets the return value for the <dialog>, usually to indicate
  button the user pressed to close it.

  `dialogInstance.returnValue = 'myReturnValue';
  var myReturnValue = dialogInstance.returnValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue`"
  [this]
  (-> this (.-returnValue)))

(defn set-return-value!
  "Property.

  [Experimental]

  The returnValue property of the `web.dom.HTMLDialogElement` interface
  or sets the return value for the <dialog>, usually to indicate
  button the user pressed to close it.

  `dialogInstance.returnValue = 'myReturnValue';
  var myReturnValue = dialogInstance.returnValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue`"
  [this val]
  (aset this "returnValue" val))

