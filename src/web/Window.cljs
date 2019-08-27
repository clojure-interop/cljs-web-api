(ns web.Window
  "The Window interface represents a window containing a DOM document;
  document property points to the DOM document loaded in that window."
  (:refer-clojure :exclude [name find print load]))

(defn alert
  "Method.

  The Window.alert() method displays an alert dialog with the optional
  content and an OK button.

  `window.alert(message);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/alert`"
  [this message]
  (-> this (.alert message)))

(defn back
  "Method.

  The obsolete and non-standard method back() on the `window` interface
  the window to the previous item in the history. This was a Firefox-specific
  and was removed in Firefox 31.

  `window.back();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/back`"
  [this ]
  (-> this (.back)))

(defn blur
  "Method.

  Shifts focus away from the window.

  `window.blur()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/blur`"
  [this ]
  (-> this (.blur)))

(defn cancel-animation-frame
  "Method.

  The window.cancelAnimationFrame() method cancels an animation
  request previously scheduled through a call to `window.requestAnimationFrame()`.

  `window.cancelAnimationFrame(requestID);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame`"
  [this request-id]
  (-> this (.cancelAnimationFrame request-id)))

(defn cancel-idle-callback
  "Method.

  The window.cancelIdleCallback() method cancels a callback previously
  with `window.requestIdleCallback()`.

  `window.cancelIdleCallback(handle);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelIdleCallback`"
  [this handle]
  (-> this (.cancelIdleCallback handle)))

(defn capture-events
  "Method.

  The Window.captureEvents() method registers the window to capture
  events of the specified type.

  `window.captureEvents(eventType)

  eventType is a combination of the following values: Event.ABORT, Event.BLUR, Event.CLICK, Event.CHANGE, Event.DBLCLICK, Event.DRAGDDROP, Event.ERROR, Event.FOCUS, Event.KEYDOWN, Event.KEYPRESS, Event.KEYUP, Event.LOAD, Event.MOUSEDOWN, Event.MOUSEMOVE, Event.MOUSEOUT, Event.MOUSEOVER, Event.MOUSEUP, Event.MOVE, Event.RESET, Event.RESIZE, Event.SELECT, Event.SUBMIT, Event.UNLOAD.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents`"
  [this & args]
  (-> this .-captureEvents (.apply this (clj->js args))))

(defn clear-immediate
  "Method.

  This method clears the action specified by `window.setImmediate`.

  `window.clearImmediate(immediateID)

  where immediateID is a ID returned by `window.setImmediate`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/clearImmediate`"
  [this & args]
  (-> this .-clearImmediate (.apply this (clj->js args))))

(defn close
  "Method.

  The Window.close() method closes the current window, or the window
  which it was called.

  `window.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/close`"
  [this ]
  (-> this (.close)))

(defn confirm
  "Method.

  The Window.confirm() method displays a modal dialog with an optional
  and two buttons: OK and Cancel.

  `result = window.confirm(message);


  message is an optional string to display in the dialog.
  result is a boolean indicating whether OK (true) or Cancel (false) was selected. If a browser is ignoring in-page dialogs, then result is always false.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm`"
  [this & args]
  (-> this .-confirm (.apply this (clj->js args))))

(defn disable-external-capture
  "Method.

  FIXME: NeedsContents"
  [this & args]
  (-> this .-disableExternalCapture (.apply this (clj->js args))))

(defn dispatch-event
  "Method.

  Used to trigger an event."
  [this & args]
  (-> this .-dispatchEvent (.apply this (clj->js args))))

(defn dump
  "Method.

  Window.dump() prints messages to the (native) console.

  `window.dump(message);

  dump(message);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/dump`"
  [this & args]
  (-> this .-dump (.apply this (clj->js args))))

(defn enable-external-capture
  "Method.

  FIXME: NeedsContents"
  [this & args]
  (-> this .-enableExternalCapture (.apply this (clj->js args))))

(defn find
  "Method.

  The Window.find() method finds a string in a window.

  `window.find(aString, aCaseSensitive, aBackwards, aWrapAround,
  aWholeWord, aSearchInFrames, aShowDialog);


  aString
  The text string for which to search.
  aCaseSensitive
  `js.Boolean`. If true, specifies a case-sensitive search.
  aBackwards
  `js.Boolean`. If true, specifies a backward search.
  aWrapAround
  `js.Boolean`. If true, specifies a wrap around search.
  aWholeWord Unimplemented
  `js.Boolean`. If true, specifies a whole word search. This is not implemented; see bug 481513.
  aSearchInFrames
  `js.Boolean`. If true, specifies a search in frames.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/find`"
  [this & args]
  (-> this .-find (.apply this (clj->js args))))

(defn focus
  "Method.

  Makes a request to bring the window to the front. It may fail
  to user settings and the window isn't guaranteed to be frontmost
  this method returns.

  `window.focus()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/focus`"
  [this ]
  (-> this (.focus)))

(defn forward
  "Method.

  Moves the window one document forward in history. This was a
  method and was removed in Firefox 31.

  `window.forward();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/forward`"
  [this ]
  (-> this (.forward)))

(defn get-attention
  "Method.

  The Window.getAttention() method attempts to get the user's attention.
  mechanism for this happening depends on the specific operating
  and window manager.

  `window.getAttention();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getAttention`"
  [this ]
  (-> this (.getAttention)))

(defn get-attention-with-cycle-count
  "Method.

  FIXME: NeedsContents"
  [this & args]
  (-> this .-getAttentionWithCycleCount (.apply this (clj->js args))))

(defn get-computed-style
  "Method.

  The Window.getComputedStyle() method returns an object containing
  values of all CSS properties of an element, after applying active
  and resolving any basic computation those values may contain.

  `var style = window.getComputedStyle(element [, pseudoElt]);


  element
  The `web.Element` for which to get the computed style.
  pseudoEltOptional
  A string specifying the pseudo-element to match. Omitted (or null) for real elements.


  The returned style is a live `web.cssdom.CSSStyleDeclaration` object, which updates automatically when the element's styles are changed.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle`"
  [this & args]
  (-> this .-getComputedStyle (.apply this (clj->js args))))

(defn get-default-computed-style
  "Method.

  The getDefaultComputedStyle() method gives the default computed
  of all the CSS properties of an element, ignoring author styling.
  is, only user-agent and user styles are taken into account.

  `var style = window.getDefaultComputedStyle(element [, pseudoElt]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/window/getDefaultComputedStyle`"
  [this & args]
  (-> this .-getDefaultComputedStyle (.apply this (clj->js args))))

(defn get-selection
  "Method.

  The Window.getSelection() method returns a `web.other.Selection`
  representing the range of text selected by the user or the current
  of the caret.

  `selection = window.getSelection();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection`"
  [this ]
  (-> this (.getSelection)))

(defn home
  "Method.

  The Window.home() method returns the window to the home page.

  `window.home();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/home`"
  [this ]
  (-> this (.home)))

(defn match-media
  "Method.

  The `web.Window` interface's matchMedia() method returns a new
  object representing the parsed results of the specified media
  string. The returned MediaQueryList can then be used to determine
  the `web.Document` matches the media query, or to monitor a document
  detect when it matches or stops matching the media query.

  `mqList = window.matchMedia(mediaQueryString)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia`"
  [this media-query-string]
  (-> this (.matchMedia media-query-string)))

(defn maximize
  "Method.

  FIXME: NeedsContents"
  [this & args]
  (-> this .-maximize (.apply this (clj->js args))))

(defn minimize
  "Method.

  The Window.minimize() method sets the window to a minimized state.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/minimize`"
  [this & args]
  (-> this .-minimize (.apply this (clj->js args))))

(defn move-by
  "Method.

  The moveBy() method of the `web.Window` interface moves the current
  by a specified amount.

  `window.moveBy(deltaX, deltaY)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/moveBy`"
  [this delta-x delta-y]
  (-> this (.moveBy delta-x delta-y)))

(defn move-to
  "Method.

  The moveTo() method of the `web.Window` interface moves the current
  to the specified coordinates.

  `window.moveTo(x, y)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/moveTo`"
  [this x y]
  (-> this (.moveTo x y)))

(defn open
  "Method.

  The `web.Window` interface's open() method loads the specified
  into the browsing context (window, `<iframe>` or tab) with the
  name. If the name doesn't exist, then a new window is opened
  the specified resource is loaded into its browsing context.

  `var window = window.open(url, windowName, [windowFeatures]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/open`"
  [this & args]
  (-> this .-open (.apply this (clj->js args))))

(defn open-dialog
  "Method.

  window.openDialog() is an extension to `window.open()`. It behaves
  same, except that it can optionally take one or more parameters
  windowFeatures, and windowFeatures itself is treated a little

  `newWindow = openDialog(url, name, features, arg1, arg2, ...)


  newWindow
  The opened window
  url
  The URL to be loaded in the newly opened window.
  name
  The window name (optional). See `window.open()` description for detailed information.
  features
  See `window.open()` for details.
  arg1, arg2, ...
  The arguments to be passed to the new window (optional).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/openDialog`"
  [this & args]
  (-> this .-openDialog (.apply this (clj->js args))))

(defn post-message
  "Method.

  The window.postMessage() method safely enables cross-origin communication
  `web.Window` objects; e.g., between a page and a pop-up that
  spawned, or between a page and an iframe embedded within it.

  `targetWindow.postMessage(message, targetOrigin, [transfer]);


  targetWindow
  A reference to the window that will receive the message. Methods for obtaining such a reference include:

  `window.open` (to spawn a new window and then reference it),
  `window.opener` (to reference the window that spawned this one),
  `HTMLIFrameElement.contentWindow` (to reference an embedded `<iframe>` from its parent window),
  `window.parent` (to reference the parent window from within an embedded `<iframe>`), or
  `window.frames`  an index value (named or numeric).


  message
  Data to be sent to the other window. The data is serialized using the structured clone algorithm. This means you can pass a broad variety of data objects safely to the destination window without having to serialize them yourself. [1]
  targetOrigin
  Specifies what the origin of targetWindow must be for the event to be dispatched, either as the literal string \\\"*\\\" (indicating no preference) or as a URI. If at the time the event is scheduled to be dispatched the scheme, hostname, or port of targetWindow's document does not match that provided in targetOrigin, the event will not be dispatched; only if all three match will the event be dispatched. This mechanism provides control over where messages are sent; for example, if postMessage() was used to transmit a password, it would be absolutely critical that this argument be a URI whose origin is the same as the intended receiver of the message containing the password, to prevent interception of the password by a malicious third party. Always provide a specific targetOrigin, not *, if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site.
  transfer Optional
  Is a sequence of `web.workers.Transferable` objects that are transferred with the message. The ownership of these objects is given to the destination side and they are no longer usable on the sending side.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage`"
  [this & args]
  (-> this .-postMessage (.apply this (clj->js args))))

(defn print
  "Method.

  Opens the Print Dialog to print the current document.

  `window.print()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/print`"
  [this ]
  (-> this (.print)))

(defn prompt
  "Method.

  The Window.prompt() displays a dialog with an optional message
  the user to input some text.

  `result = window.prompt(message, default);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt`"
  [this message default]
  (-> this (.prompt message default)))

(defn release-events
  "Method.

  Releases the window from trapping events of a specific type.

  `window.releaseEvents(eventType)

  eventType is a combination of the following values: Event.ABORT, Event.BLUR, Event.CLICK, Event.CHANGE, Event.DBLCLICK, Event.DRAGDDROP, Event.ERROR, Event.FOCUS, Event.KEYDOWN, Event.KEYPRESS, Event.KEYUP, Event.LOAD, Event.MOUSEDOWN, Event.MOUSEMOVE, Event.MOUSEOUT, Event.MOUSEOVER, Event.MOUSEUP, Event.MOVE, Event.RESET, Event.RESIZE, Event.SELECT, Event.SUBMIT, Event.UNLOAD.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/releaseEvents`"
  [this & args]
  (-> this .-releaseEvents (.apply this (clj->js args))))

(defn request-animation-frame
  "Method.

  The window.requestAnimationFrame() method tells the browser that
  wish to perform an animation and requests that the browser call
  specified function to update an animation before the next repaint.
  method takes a callback as an argument to be invoked before the

  `window.requestAnimationFrame(callback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame`"
  [this callback]
  (-> this (.requestAnimationFrame callback)))

(defn request-idle-callback
  "Method.

  The window.requestIdleCallback() method queues a function to
  called during a browser's idle periods. This enables developers
  perform background and low priority work on the main event loop,
  impacting latency-critical events such as animation and input
  Functions are generally called in first-in-first-out order; however,
  which have a timeout specified may be called out-of-order if
  in order to run them before the timeout elapses.

  `var handle = window.requestIdleCallback(callback[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback`"
  [this & args]
  (-> this .-requestIdleCallback (.apply this (clj->js args))))

(defn resize-by
  "Method.

  The Window.resizeBy() method resizes the current window by a
  amount.

  `window.resizeBy(xDelta, yDelta)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy`"
  [this x-delta y-delta]
  (-> this (.resizeBy x-delta y-delta)))

(defn resize-to
  "Method.

  The Window.resizeTo() method dynamically resizes the window.

  `window.resizeTo(aWidth, aHeight)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo`"
  [this a-width a-height]
  (-> this (.resizeTo a-width a-height)))

(defn restore
  "Method.

  This method is currently not working, but you can use:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/restore`"
  [this & args]
  (-> this .-restore (.apply this (clj->js args))))

(defn route-event
  "Method.

  The `web.Window` method routeEvent(), which is obsolete and no
  available, used to be called to forward an event to the next
  that has asked to capture events.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/routeEvent`"
  [this & args]
  (-> this .-routeEvent (.apply this (clj->js args))))

(defn scroll
  "Method.

  The Window.scroll() method scrolls the window to a particular
  in the document.

  `window.scroll(x-coord, y-coord)
  window.scroll(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll`"
  [this & args]
  (-> this .-scroll (.apply this (clj->js args))))

(defn scroll-by
  "Method.

  The Window.scrollBy() method scrolls the document in the window
  the given amount.

  `window.scrollBy(x-coord, y-coord);
  window.scrollBy(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy`"
  [this & args]
  (-> this .-scrollBy (.apply this (clj->js args))))

(defn scroll-by-lines
  "Method.

  The Window.scrollByLines() method scrolls the document by the
  number of lines.

  `window.scrollByLines(lines)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByLines`"
  [this lines]
  (-> this (.scrollByLines lines)))

(defn scroll-by-pages
  "Method.

  The Window.scrollByPages() method scrolls the current document
  the specified number of pages.

  `window.scrollByPages(pages)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages`"
  [this pages]
  (-> this (.scrollByPages pages)))

(defn scroll-to
  "Method.

  Window.scrollTo() scrolls to a particular set of coordinates
  the document.

  `window.scrollTo(x-coord, y-coord)
  window.scrollTo(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`"
  [this & args]
  (-> this .-scrollTo (.apply this (clj->js args))))

(defn set-cursor
  "Method.

  The Window.setCursor() method sets the cursor for the current

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/setCursor`"
  [this & args]
  (-> this .-setCursor (.apply this (clj->js args))))

(defn set-immediate
  "Method.

  This method is used to break up long running operations and run
  callback function immediately after the browser has completed
  operations such as events and display updates.

  `var immediateID = setImmediate(func, [param1, param2, ...]);
  var immediateID = setImmediate(func);


  where immediateID is the ID of the immediate which can be used later with `window.clearImmediate`.
  func is the function you wish to call.


  All parameters will be passed directly to your function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate`"
  [this & args]
  (-> this .-setImmediate (.apply this (clj->js args))))

(defn set-resizable
  "Method.

  Toggles a user's ability to resize a window."
  [this & args]
  (-> this .-setResizable (.apply this (clj->js args))))

(defn size-to-content
  "Method.

  The Window.sizeToContent() method sizes the window according
  its content. In order for it to work, the DOM content should
  loaded when this function is called—for example, once the DOMContentLoaded
  has been thrown.

  `window.sizeToContent()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sizeToContent`"
  [this ]
  (-> this (.sizeToContent)))

(defn stop
  "Method.

  The window.stop() stops further resource loading in the current
  context, equivalent to the stop button in the browser.

  `window.stop()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/stop`"
  [this ]
  (-> this (.stop)))

(defn update-commands
  "Method.

  Updates the state of commands of the current chrome window (UI).

  `window.updateCommands(\\\"sCommandName\\\")`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/updateCommands`"
  [this & args]
  (-> this .-updateCommands (.apply this (clj->js args))))

(defn add-event-listener
  "Method.

  The `web.EventTarget` method addEventListener() sets up a function
  will be called whenever the specified event is delivered to the

  `target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`"
  [this & args]
  (-> this .-addEventListener (.apply this (clj->js args))))

(defn atob
  "Method.

  The WindowOrWorkerGlobalScope.atob() function decodes a string
  data which has been encoded using base-64 encoding. You can use
  `btoa()` method to encode and transmit data which may otherwise
  communication problems, then transmit it and use the atob() method
  decode the data again. For example, you can encode, transmit,
  decode control characters such as ASCII values 0 through 31.

  `var decodedData = scope.atob(encodedData);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob`"
  [this encoded-data]
  (-> this (.atob encoded-data)))

(defn btoa
  "Method.

  The WindowOrWorkerGlobalScope.btoa() method creates a base-64
  ASCII string from a binary string (i.e., a `js.String` object
  which each character in the string is treated as a byte of binary

  `var encodedData = scope.btoa(stringToEncode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa`"
  [this string-to-encode]
  (-> this (.btoa string-to-encode)))

(defn clear-interval
  "Method.

  The clearInterval() method of the `web.WindowOrWorkerGlobalScope`
  cancels a timed, repeating action which was previously established
  a call to `setInterval()`.

  `scope.clearInterval(intervalID)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval`"
  [this interval-id]
  (-> this (.clearInterval interval-id)))

(defn clear-timeout
  "Method.

  The clearTimeout() method of the `web.WindowOrWorkerGlobalScope`
  cancels a timeout previously established by calling `setTimeout()`.

  `scope.clearTimeout(timeoutID)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout`"
  [this timeout-id]
  (-> this (.clearTimeout timeout-id)))

(defn create-image-bitmap
  "Method.

  The createImageBitmap() method creates a bitmap from a given
  optionally cropped to contain only a portion of that source.
  method exists on the global scope in both windows and workers.
  accepts a variety of different image sources, and returns a `js.Promise`
  resolves to an `web.canvas.ImageBitmap`.

  `createImageBitmap(image[, options]).then(function(response) { ... });
  createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap`"
  [this & args]
  (-> this .-createImageBitmap (.apply this (clj->js args))))

(defn fetch
  "Method.

  The fetch() method of the `web.WindowOrWorkerGlobalScope` mixin
  the process of fetching a resource from the network, returning
  promise which is fulfilled once the response is available.

  `fetchResponsePromise = fetch(resource, init);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch`"
  [this resource init]
  (-> this (.fetch resource init)))

(defn remove-event-listener
  "Method.

  The EventTarget.removeEventListener() method removes from the
  an event listener previously registered with `EventTarget.addEventListener()`.
  event listener to be removed is identified using a combination
  the event type, the event listener function itself, and various
  options that may affect the matching process; see Matching event
  for removal

  `target.removeEventListener(type, listener[, options]);
  target.removeEventListener(type, listener[, useCapture]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`"
  [this & args]
  (-> this .-removeEventListener (.apply this (clj->js args))))

(defn set-interval
  "Method.

  The setInterval() method, offered on the `web.Window` and `web.workers.Worker`
  repeatedly calls a function or executes a code snippet, with
  fixed time delay between each call.

  `var intervalID = scope.setInterval(func, delay[, arg1, arg2, ...]);
  var intervalID = scope.setInterval(code, delay);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval`"
  [this & args]
  (-> this .-setInterval (.apply this (clj->js args))))

(defn set-timeout
  "Method.

  The setTimeout() method of the `web.WindowOrWorkerGlobalScope`
  (and successor to Window.setTimeout()) sets a timer which executes
  function or specified piece of code once the timer expires.

  `var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
  var timeoutID = scope.setTimeout(function[, delay]);
  var timeoutID = scope.setTimeout(code[, delay]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout`"
  [this & args]
  (-> this .-setTimeout (.apply this (clj->js args))))

(defn show-modal-dialog
  "Method.

  The Window.showModalDialog() creates and displays a modal dialog
  containing a specified HTML document.

  `returnVal = window.showModalDialog(uri[, arguments][, options]);

  where


  returnVal is a variant, indicating the returnValue property as set by the window of the document specified by uri.
  uri is the URI of the document to display in the dialog box.
  arguments is an optional variant that contains values that should be passed to the dialog box; these are made available in the window object's window.dialogArguments property.
  options an optional string that specifies window ornamentation for the dialog box, using one or more semicolon delimited values:





  Syntax
  Description


  center: {on | off | yes | no | 1 | 0 }
  If this argument's value is on, yes, or 1, the dialog window is centered on the desktop; otherwise it's hidden. The default value is yes.


  dialogheight: height
  Specifies the height of the dialog box; by default, the size is specified in pixels.


  dialogleft: left
  Specifies the horizontal position of the dialog box in relation to the upper-left corner of the desktop.


  dialogwidth: width
  Specifies the width of the dialog box; by default, the size is specified in pixels.


  dialogtop: top
  Specifies the vertical position of the dialog box in relation to the upper-left corner of the desktop.


  resizable: {on | off | yes | no | 1 | 0 }
  If this argument's value is on, yes, or 1, the dialog window can be resized by the user; otherwise its size is fixed. The default value is no.


  scroll: {on | off | yes | no | 1 | 0 }
  If this argument's value is on, yes, or 1, the dialog window has scroll bars; otherwise its size is fixed. The default value is no.




  Note: Firefox does not implement the dialogHide, edge, status, or unadorned arguments.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/showModalDialog`"
  [this & args]
  (-> this .-showModalDialog (.apply this (clj->js args))))

(defn convert-point-from-node-to-page
  "Method.

  Given a `web.css.Point` specified in a particular DOM `web.Node`'s
  system, the `web.Window` method convertPointFromNodeToPage()
  a Point which specifies the same position in the page's coordinate
  This method is non-standard and should not be used.

  `Point = Window.convertPointFromNodeToPage(node, nodePoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/convertPointFromNodeToPage`"
  [this node node-point]
  (-> this (.convertPointFromNodeToPage node node-point)))

(defn convert-point-from-page-to-node
  "Method.

  Given a `web.css.Point` specified in the page's coordinate system,
  `web.Window` method convertPointFromPageToNode() returns a Point
  specifying the same location in the coordinate system of the
  DOM `web.Node`.

  `Point = Window.convertPointFromPageToNode(node, pagePoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/convertPointFromPageToNode`"
  [this node page-point]
  (-> this (.convertPointFromPageToNode node page-point)))

(defn queue-microtask
  "Method.

  The queueMicrotask() method of the `web.WindowOrWorkerGlobalScope`
  queues a microtask.

  `scope.queueMicrotask(function);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask`"
  [this function]
  (-> this (.queueMicrotask function)))

(defn request-file-system
  "Method.

  The non-standard `web.Window` method requestFileSystem() method
  a Google Chrome-specific method which lets a web site or app
  access to a sandboxed file system for its own use. The returned
  is then available for use with the other file system APIs.

  `This method is prefixed with webkit in all browsers that implement it (that is, Google Chrome).




  window.requestFileSystem(type, size, successCallback[, errorCallback]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/requestFileSystem`"
  [this & args]
  (-> this .-requestFileSystem (.apply this (clj->js args))))

(defn closed
  "Property.

  The Window.closed read-only property indicates whether the referenced
  is closed or not.

  `isClosed = windowRef.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/closed`"
  [this]
  (-> this (.-closed)))

(defn set-closed!
  "Property.

  The Window.closed read-only property indicates whether the referenced
  is closed or not.

  `isClosed = windowRef.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/closed`"
  [this val]
  (aset this "closed" val))

(defn console
  "Property.

  The Window.console property returns a reference to the `Console`
  which provides methods for logging information to the browser's
  These methods are intended for debugging purposes only and should
  be relied on for presenting information to end users.

  `var consoleObj = window.console;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/console`"
  [this]
  (-> this (.-console)))

(defn content
  "Property.

  Returns a Window object for the primary content window. This
  useful in XUL windows that have a <browser> (or tabbrowser or
  with type=\\\"content-primary\\\" attribute on it — the most famous
  is Firefox main window, browser.xul. In such cases, content returns
  reference to the Window object for the document currently displayed
  the browser. It is a shortcut for browserRef.contentWindow.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/content`"
  [this]
  (-> this (.-content)))

(defn set-content!
  "Property.

  Returns a Window object for the primary content window. This
  useful in XUL windows that have a <browser> (or tabbrowser or
  with type=\\\"content-primary\\\" attribute on it — the most famous
  is Firefox main window, browser.xul. In such cases, content returns
  reference to the Window object for the document currently displayed
  the browser. It is a shortcut for browserRef.contentWindow.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/content`"
  [this val]
  (aset this "content" val))

(defn controllers
  "Property.

  The controllers property of the `web.Window` interface returns
  XUL controllers of the chrome window.

  `controllers = window.controllers


  controllers is an object of type `XULControllers` (`nsIControllers`).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/controllers`"
  [this]
  (-> this (.-controllers)))

(defn set-controllers!
  "Property.

  The controllers property of the `web.Window` interface returns
  XUL controllers of the chrome window.

  `controllers = window.controllers


  controllers is an object of type `XULControllers` (`nsIControllers`).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/controllers`"
  [this val]
  (aset this "controllers" val))

(defn custom-elements
  "Property.

  The customElements read-only property of the `web.Window` interface
  a reference to the `web.web-components.CustomElementRegistry`
  which can be used to register new custom elements and get information
  previously registered custom elements.

  `let customElementRegistry = window.customElements;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`"
  [this]
  (-> this (.-customElements)))

(defn set-custom-elements!
  "Property.

  The customElements read-only property of the `web.Window` interface
  a reference to the `web.web-components.CustomElementRegistry`
  which can be used to register new custom elements and get information
  previously registered custom elements.

  `let customElementRegistry = window.customElements;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`"
  [this val]
  (aset this "customElements" val))

(defn crypto
  "Property.

  The `Window.crypto` property returns the `web.crypto.Crypto`
  associated to the global object. This object allows web pages
  to certain cryptographic related services. Although the `Window.crypto`
  iteself is read-only, all of its methods (and the methods of
  child object, `web.crypto.SubtleCrypto`) are not read-only, and
  vulnerable to attack by polyfill.

  `var cryptoObj = window.crypto || window.msCrypto; // for IE 11`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto`"
  [this]
  (-> this (.-crypto)))

(defn set-crypto!
  "Property.

  The `Window.crypto` property returns the `web.crypto.Crypto`
  associated to the global object. This object allows web pages
  to certain cryptographic related services. Although the `Window.crypto`
  iteself is read-only, all of its methods (and the methods of
  child object, `web.crypto.SubtleCrypto`) are not read-only, and
  vulnerable to attack by polyfill.

  `var cryptoObj = window.crypto || window.msCrypto; // for IE 11`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto`"
  [this val]
  (aset this "crypto" val))

(defn default-status
  "Property.

  Gets/sets the status bar text for the given window.

  `var sMsg = window.defaultStatus;
  window.defaultStatus = sMsg;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/defaultStatus`"
  [this]
  (-> this (.-defaultStatus)))

(defn set-default-status!
  "Property.

  Gets/sets the status bar text for the given window.

  `var sMsg = window.defaultStatus;
  window.defaultStatus = sMsg;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/defaultStatus`"
  [this val]
  (aset this "defaultStatus" val))

(defn device-pixel-ratio
  "Property.

  The `web.Window` property devicePixelRatio returns the ratio
  the resolution in physical pixels to the resolution in CSS pixels
  the current display device.

  `value = window.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio`"
  [this]
  (-> this (.-devicePixelRatio)))

(defn dialog-arguments
  "Property.

  The dialogArguments property returns the parameters that were
  into the `window.showModalDialog()` method.

  `value = window.dialogArguments;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/dialogArguments`"
  [this]
  (-> this (.-dialogArguments)))

(defn set-dialog-arguments!
  "Property.

  The dialogArguments property returns the parameters that were
  into the `window.showModalDialog()` method.

  `value = window.dialogArguments;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/dialogArguments`"
  [this val]
  (aset this "dialogArguments" val))

(defn directories
  "Property.

  Returned the window personalbar toolbar object. Use the `window.personalbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/directories`"
  [this]
  (-> this (.-directories)))

(defn set-directories!
  "Property.

  Returned the window personalbar toolbar object. Use the `window.personalbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/directories`"
  [this val]
  (aset this "directories" val))

(defn document
  "Property.

  window.document returns a reference to the document contained
  the window.

  `doc = window.document`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/document`"
  [this]
  (-> this (.-document)))

(defn set-document!
  "Property.

  window.document returns a reference to the document contained
  the window.

  `doc = window.document`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/document`"
  [this val]
  (aset this "document" val))

(defn dom-matrix
  "Property.

  Returns a reference to a DOMMatrix object, which represents 4x4
  suitable for 2D and 3D operations."
  [this]
  (-> this (.-DOMMatrix)))

(defn set-dom-matrix!
  "Property.

  Returns a reference to a DOMMatrix object, which represents 4x4
  suitable for 2D and 3D operations."
  [this val]
  (aset this "DOMMatrix" val))

(defn dom-matrix-read-only
  "Property.

  Returns a reference to a DOMMatrixReadOnly object, which represents
  matrices, suitable for 2D and 3D operations."
  [this]
  (-> this (.-DOMMatrixReadOnly)))

(defn set-dom-matrix-read-only!
  "Property.

  Returns a reference to a DOMMatrixReadOnly object, which represents
  matrices, suitable for 2D and 3D operations."
  [this val]
  (aset this "DOMMatrixReadOnly" val))

(defn dom-point
  "Property.

  Returns a reference to a DOMPoint object, which represents a
  or 3D point in a coordinate system."
  [this]
  (-> this (.-DOMPoint)))

(defn set-dom-point!
  "Property.

  Returns a reference to a DOMPoint object, which represents a
  or 3D point in a coordinate system."
  [this val]
  (aset this "DOMPoint" val))

(defn dom-point-read-only
  "Property.

  Returns a reference to a DOMPointReadOnly object, which represents
  2D or 3D point in a coordinate system."
  [this]
  (-> this (.-DOMPointReadOnly)))

(defn set-dom-point-read-only!
  "Property.

  Returns a reference to a DOMPointReadOnly object, which represents
  2D or 3D point in a coordinate system."
  [this val]
  (aset this "DOMPointReadOnly" val))

(defn dom-quad
  "Property.

  Returns a reference to a DOMQuad object, which provides represents
  quadrilaterial object, that is one having four corners and four"
  [this]
  (-> this (.-DOMQuad)))

(defn set-dom-quad!
  "Property.

  Returns a reference to a DOMQuad object, which provides represents
  quadrilaterial object, that is one having four corners and four"
  [this val]
  (aset this "DOMQuad" val))

(defn dom-rect
  "Property.

  Returns a reference to a DOMRect object, which represents a rectangle."
  [this]
  (-> this (.-DOMRect)))

(defn set-dom-rect!
  "Property.

  Returns a reference to a DOMRect object, which represents a rectangle."
  [this val]
  (aset this "DOMRect" val))

(defn dom-rect-read-only
  "Property.

  Returns a reference to a DOMRectReadOnly object, which represents
  rectangle."
  [this]
  (-> this (.-DOMRectReadOnly)))

(defn set-dom-rect-read-only!
  "Property.

  Returns a reference to a DOMRectReadOnly object, which represents
  rectangle."
  [this val]
  (aset this "DOMRectReadOnly" val))

(defn event
  "Property.

  The read-only `web.Window` property event returns the `web.event.Event`
  is currently being handled by the site's code. Outside the context
  an event handler, the value is always undefined.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/event`"
  [this]
  (-> this (.-event)))

(defn frame-element
  "Property.

  Returns the element (such as `<iframe>` or `<object>`) in which
  window is embedded, or null if the element is either top-level
  is embedded into a document with a different script origin; that
  in cross-origin situations.

  `frameEl = window.frameElement;


  frameEl is the element which the window is embedded into. If the window isn't embedded into another document, or if the document into which it's embedded has a different origin (such as having been located from a different domain), this is null.



  Despite this property's name, it works for documents embedded within any embedding point, including `<object>`, `<iframe>`, or `<embed>`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement`"
  [this]
  (-> this (.-frameElement)))

(defn set-frame-element!
  "Property.

  Returns the element (such as `<iframe>` or `<object>`) in which
  window is embedded, or null if the element is either top-level
  is embedded into a document with a different script origin; that
  in cross-origin situations.

  `frameEl = window.frameElement;


  frameEl is the element which the window is embedded into. If the window isn't embedded into another document, or if the document into which it's embedded has a different origin (such as having been located from a different domain), this is null.



  Despite this property's name, it works for documents embedded within any embedding point, including `<object>`, `<iframe>`, or `<embed>`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement`"
  [this val]
  (aset this "frameElement" val))

(defn frames
  "Property.

  Returns the window itself, which is an array-like object, listing
  direct sub-frames of the current window.

  `frameList = window.frames;


  frameList is a list of frame objects. It is similar to an array in that it has a length property and its items can be accessed using the [i] notation.
  frameList === window evaluates to true.
  Each item in the window.frames pseudo-array represents the window object corresponding to the given <frame>'s or <iframe>'s content, not the (i)frame DOM element (i.e., window.frames[0] is the same thing as document.getElementsByTagName(\\\"iframe\\\")[0].contentWindow).
  For more details about the returned value, refer to this thread on mozilla.dev.platform [dead link].`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frames`"
  [this]
  (-> this (.-frames)))

(defn set-frames!
  "Property.

  Returns the window itself, which is an array-like object, listing
  direct sub-frames of the current window.

  `frameList = window.frames;


  frameList is a list of frame objects. It is similar to an array in that it has a length property and its items can be accessed using the [i] notation.
  frameList === window evaluates to true.
  Each item in the window.frames pseudo-array represents the window object corresponding to the given <frame>'s or <iframe>'s content, not the (i)frame DOM element (i.e., window.frames[0] is the same thing as document.getElementsByTagName(\\\"iframe\\\")[0].contentWindow).
  For more details about the returned value, refer to this thread on mozilla.dev.platform [dead link].`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frames`"
  [this val]
  (aset this "frames" val))

(defn full-screen
  "Property.

  The fullScreen property of the Window interface indicates whether
  window is displayed in full screen mode or not. It is only reliable
  Gecko 1.9 (Firefox 3) and later; see the Notes below.

  `isInFullScreen = windowRef.fullScreen;

  With chrome privileges, the property is read-write, otherwise it is read-only. Bear in mind that if you try to set this property without chrome privileges, it will not throw an exception and instead just silently fail. This is to prevent scripts designed to set this property in Internet Explorer from breaking.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/fullScreen`"
  [this]
  (-> this (.-fullScreen)))

(defn set-full-screen!
  "Property.

  The fullScreen property of the Window interface indicates whether
  window is displayed in full screen mode or not. It is only reliable
  Gecko 1.9 (Firefox 3) and later; see the Notes below.

  `isInFullScreen = windowRef.fullScreen;

  With chrome privileges, the property is read-write, otherwise it is read-only. Bear in mind that if you try to set this property without chrome privileges, it will not throw an exception and instead just silently fail. This is to prevent scripts designed to set this property in Internet Explorer from breaking.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/fullScreen`"
  [this val]
  (aset this "fullScreen" val))

(defn global-storage
  "Property.

  Unsupported since Gecko 13 (Firefox 13). Use Window.localStorage
  Was: Multiple storage objects that are used for storing data
  multiple pages."
  [this]
  (-> this (.-globalStorage)))

(defn set-global-storage!
  "Property.

  Unsupported since Gecko 13 (Firefox 13). Use Window.localStorage
  Was: Multiple storage objects that are used for storing data
  multiple pages."
  [this val]
  (aset this "globalStorage" val))

(defn history
  "Property.

  The Window.history read-only property returns a reference to
  `web.dom.History` object, which provides an interface for manipulating
  browser session history (pages visited in the tab or frame that
  current page is loaded in).

  `var historyObj = window.history;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/history`"
  [this]
  (-> this (.-history)))

(defn set-history!
  "Property.

  The Window.history read-only property returns a reference to
  `web.dom.History` object, which provides an interface for manipulating
  browser session history (pages visited in the tab or frame that
  current page is loaded in).

  `var historyObj = window.history;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/history`"
  [this val]
  (aset this "history" val))

(defn inner-height
  "Property.

  Height (in pixels) of the browser window viewport including,
  rendered, the horizontal scrollbar.

  `var intViewportHeight = window.innerHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight`"
  [this]
  (-> this (.-innerHeight)))

(defn set-inner-height!
  "Property.

  Height (in pixels) of the browser window viewport including,
  rendered, the horizontal scrollbar.

  `var intViewportHeight = window.innerHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight`"
  [this val]
  (aset this "innerHeight" val))

(defn inner-width
  "Property.

  Width (in pixels) of the browser window viewport including, if
  the vertical scrollbar.

  `var intViewportWidth = window.innerWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth`"
  [this]
  (-> this (.-innerWidth)))

(defn set-inner-width!
  "Property.

  Width (in pixels) of the browser window viewport including, if
  the vertical scrollbar.

  `var intViewportWidth = window.innerWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth`"
  [this val]
  (aset this "innerWidth" val))

(defn is-secure-context
  "Property.

  The window.isSecureContext read-only property indicates whether
  context is capable of using features that require secure contexts.

  `var isSecure = window.isSecureContext`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext`"
  [this]
  (-> this (.-isSecureContext)))

(defn set-is-secure-context!
  "Property.

  The window.isSecureContext read-only property indicates whether
  context is capable of using features that require secure contexts.

  `var isSecure = window.isSecureContext`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext`"
  [this val]
  (aset this "isSecureContext" val))

(defn length
  "Property.

  Returns the number of frames (either `<frame>` or `<iframe>`
  in the window.

  `framesCount = window.length;


  framesCount is the number of frames.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Returns the number of frames (either `<frame>` or `<iframe>`
  in the window.

  `framesCount = window.length;


  framesCount is the number of frames.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/length`"
  [this val]
  (aset this "length" val))

(defn location
  "Property.

  The Window.location read-only property returns a `web.dom.Location`
  with information about the current location of the document.

  `var oldLocation = location;
  location = newLocation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`"
  [this]
  (-> this (.-location)))

(defn set-location!
  "Property.

  The Window.location read-only property returns a `web.dom.Location`
  with information about the current location of the document.

  `var oldLocation = location;
  location = newLocation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`"
  [this val]
  (aset this "location" val))

(defn locationbar
  "Property.

  Returns the locationbar object, whose visibility can be checked.

  `objRef = window.locationbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/locationbar`"
  [this]
  (-> this (.-locationbar)))

(defn set-locationbar!
  "Property.

  Returns the locationbar object, whose visibility can be checked.

  `objRef = window.locationbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/locationbar`"
  [this val]
  (aset this "locationbar" val))

(defn local-storage
  "Property.

  The read-only localStorage property allows you to access a `web.storage.Storage`
  for the `web.Document`'s origin; the stored data is saved across
  sessions.

  `myStorage = window.localStorage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage`"
  [this]
  (-> this (.-localStorage)))

(defn menubar
  "Property.

  The Window.menubar property returns the menubar object, whose
  can be checked.

  `objRef = window.menubar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/menubar`"
  [this]
  (-> this (.-menubar)))

(defn set-menubar!
  "Property.

  The Window.menubar property returns the menubar object, whose
  can be checked.

  `objRef = window.menubar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/menubar`"
  [this val]
  (aset this "menubar" val))

(defn message-manager
  "Property.

  Returns the message manager object for this window."
  [this]
  (-> this (.-messageManager)))

(defn set-message-manager!
  "Property.

  Returns the message manager object for this window."
  [this val]
  (aset this "messageManager" val))

(defn moz-animation-start-time
  "Property.

  Returns the time, in milliseconds since the epoch, at which animations
  now should be considered to have started. This value should be
  instead of, for example, Date.now(), because this value will
  the same for all animations started in this window during this
  interval, allowing them to remain in sync with one another.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozAnimationStartTime`"
  [this]
  (-> this (.-mozAnimationStartTime)))

(defn set-moz-animation-start-time!
  "Property.

  Returns the time, in milliseconds since the epoch, at which animations
  now should be considered to have started. This value should be
  instead of, for example, Date.now(), because this value will
  the same for all animations started in this window during this
  interval, allowing them to remain in sync with one another.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozAnimationStartTime`"
  [this val]
  (aset this "mozAnimationStartTime" val))

(defn moz-inner-screen-x
  "Property.

  Gets the X coordinate of the top-left corner of the window's
  in screen coordinates.

  `screenX = window.mozInnerScreenX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenX`"
  [this]
  (-> this (.-mozInnerScreenX)))

(defn set-moz-inner-screen-x!
  "Property.

  Gets the X coordinate of the top-left corner of the window's
  in screen coordinates.

  `screenX = window.mozInnerScreenX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenX`"
  [this val]
  (aset this "mozInnerScreenX" val))

(defn moz-inner-screen-y
  "Property.

  Gets the Y coordinate of the top-left corner of the window's
  in screen coordinates.

  `screenY = window.mozInnerScreenY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenY`"
  [this]
  (-> this (.-mozInnerScreenY)))

(defn set-moz-inner-screen-y!
  "Property.

  Gets the Y coordinate of the top-left corner of the window's
  in screen coordinates.

  `screenY = window.mozInnerScreenY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenY`"
  [this val]
  (aset this "mozInnerScreenY" val))

(defn moz-paint-count
  "Property.

  Returns the number of times the current document has been painted
  the screen in this window.

  `var paintCount = window.mozPaintCount;


  paintCount stores the window.mozPaintCount property value.
  The window.mozPaintCount value is a long long, and starts at zero when the document is first created, incrementing by one each time the document is painted.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozPaintCount`"
  [this]
  (-> this (.-mozPaintCount)))

(defn set-moz-paint-count!
  "Property.

  Returns the number of times the current document has been painted
  the screen in this window.

  `var paintCount = window.mozPaintCount;


  paintCount stores the window.mozPaintCount property value.
  The window.mozPaintCount value is a long long, and starts at zero when the document is first created, incrementing by one each time the document is painted.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozPaintCount`"
  [this val]
  (aset this "mozPaintCount" val))

(defn name
  "Property.

  Gets/sets the name of the window.

  `string = window.name;
  window.name = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Gets/sets the name of the window.

  `string = window.name;
  window.name = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/name`"
  [this val]
  (aset this "name" val))

(defn navigator
  "Property.

  The Window.navigator read-only property returns a reference to
  `web.performance.Navigator` object, which can be queried for
  about the application running the script.

  `navigatorObject = window.navigator`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator`"
  [this]
  (-> this (.-navigator)))

(defn opener
  "Property.

  The `web.Window` interface's opener property returns a reference
  the window that opened the window using `open()`.

  `openerWindow = window.opener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/opener`"
  [this]
  (-> this (.-opener)))

(defn set-opener!
  "Property.

  The `web.Window` interface's opener property returns a reference
  the window that opened the window using `open()`.

  `openerWindow = window.opener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/opener`"
  [this val]
  (aset this "opener" val))

(defn orientation
  "Property.

  Returns the orientation in degrees (in 90-degree increments)
  the viewport relative to the device's natural orientation.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation`"
  [this]
  (-> this (.-orientation)))

(defn set-orientation!
  "Property.

  Returns the orientation in degrees (in 90-degree increments)
  the viewport relative to the device's natural orientation.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation`"
  [this val]
  (aset this "orientation" val))

(defn outer-height
  "Property.

  The Window.outerHeight read-only property returns the height
  pixels of the whole browser window, including any sidebar, window
  and window-resizing borders/handles.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight`"
  [this]
  (-> this (.-outerHeight)))

(defn set-outer-height!
  "Property.

  The Window.outerHeight read-only property returns the height
  pixels of the whole browser window, including any sidebar, window
  and window-resizing borders/handles.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight`"
  [this val]
  (aset this "outerHeight" val))

(defn outer-width
  "Property.

  Window.outerWidth read-only property returns the width of the
  of the browser window. It represents the width of the whole browser
  including sidebar (if expanded), window chrome and window resizing

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth`"
  [this]
  (-> this (.-outerWidth)))

(defn set-outer-width!
  "Property.

  Window.outerWidth read-only property returns the width of the
  of the browser window. It represents the width of the whole browser
  including sidebar (if expanded), window chrome and window resizing

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth`"
  [this val]
  (aset this "outerWidth" val))

(defn scroll-x
  "Property.

  The read-only scrollX property of the `web.Window` interface
  the number of pixels that the document is currently scrolled
  This value is subpixel precise in modern browsers, meaning that
  isn't necessarily a whole number. You can get the number of pixels
  document is scrolled vertically from the `scrollY` property.

  `var x = window.scrollX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX`"
  [this]
  (-> this (.-scrollX)))

(defn set-scroll-x!
  "Property.

  The read-only scrollX property of the `web.Window` interface
  the number of pixels that the document is currently scrolled
  This value is subpixel precise in modern browsers, meaning that
  isn't necessarily a whole number. You can get the number of pixels
  document is scrolled vertically from the `scrollY` property.

  `var x = window.scrollX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX`"
  [this val]
  (aset this "scrollX" val))

(defn scroll-y
  "Property.

  The read-only scrollY property of the `web.Window` interface
  the number of pixels that the document is currently scrolled

  `var y = window.scrollY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY`"
  [this]
  (-> this (.-scrollY)))

(defn set-scroll-y!
  "Property.

  The read-only scrollY property of the `web.Window` interface
  the number of pixels that the document is currently scrolled

  `var y = window.scrollY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY`"
  [this val]
  (aset this "scrollY" val))

(defn parent
  "Property.

  The Window.parent property is a reference to the parent of the
  window or subframe.

  `var parentWindow = window.parent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/parent`"
  [this]
  (-> this (.-parent)))

(defn set-parent!
  "Property.

  The Window.parent property is a reference to the parent of the
  window or subframe.

  `var parentWindow = window.parent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/parent`"
  [this val]
  (aset this "parent" val))

(defn performance
  "Property.

  The `web.Window` interface's performance property returns a `web.performance.Performance`
  which can be used to gather performance information about the
  document. It serves as the point of exposure for the Performance
  API, the High Resolution Time API, the Navigation Timing API,
  User Timing API, and the Resource Timing API.

  `performanceData = window.performance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/performance`"
  [this]
  (-> this (.-performance)))

(defn set-performance!
  "Property.

  The `web.Window` interface's performance property returns a `web.performance.Performance`
  which can be used to gather performance information about the
  document. It serves as the point of exposure for the Performance
  API, the High Resolution Time API, the Navigation Timing API,
  User Timing API, and the Resource Timing API.

  `performanceData = window.performance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/performance`"
  [this val]
  (aset this "performance" val))

(defn personalbar
  "Property.

  Returns the personalbar object, whose visibility can be toggled
  the window.

  `objRef =window.personalbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/personalbar`"
  [this]
  (-> this (.-personalbar)))

(defn set-personalbar!
  "Property.

  Returns the personalbar object, whose visibility can be toggled
  the window.

  `objRef =window.personalbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/personalbar`"
  [this val]
  (aset this "personalbar" val))

(defn pkcs11
  "Property.

  Returns the pkcs11 object, which is used to install drivers and
  software associated with the pkcs11 protocol. If pkcs11 isn't
  this property returns null.

  `objRef = window.pkcs11`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pkcs11`"
  [this]
  (-> this (.-pkcs11)))

(defn set-pkcs11!
  "Property.

  Returns the pkcs11 object, which is used to install drivers and
  software associated with the pkcs11 protocol. If pkcs11 isn't
  this property returns null.

  `objRef = window.pkcs11`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pkcs11`"
  [this val]
  (aset this "pkcs11" val))

(defn return-value
  "Property.

  The return value to be returned to the function that called window.showModalDialog()
  display the window as a modal dialog."
  [this]
  (-> this (.-returnValue)))

(defn set-return-value!
  "Property.

  The return value to be returned to the function that called window.showModalDialog()
  display the window as a modal dialog."
  [this val]
  (aset this "returnValue" val))

(defn screen
  "Property.

  The `web.Window` property screen returns a reference to the screen
  associated with the window. The screen object, implementing the
  interface, is a special object for inspecting properties of the
  on which the current window is being rendered.

  `let screenObj = window.screen;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screen`"
  [this]
  (-> this (.-screen)))

(defn set-screen!
  "Property.

  The `web.Window` property screen returns a reference to the screen
  associated with the window. The screen object, implementing the
  interface, is a special object for inspecting properties of the
  on which the current window is being rendered.

  `let screenObj = window.screen;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screen`"
  [this val]
  (aset this "screen" val))

(defn screen-x
  "Property.

  The Window.screenX read-only property returns the horizontal
  in CSS pixels, of the left border of the user's browser viewport
  the left side of the screen.

  `leftWindowPos = window.screenX`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenX`"
  [this]
  (-> this (.-screenX)))

(defn screen-y
  "Property.

  The Window.screenY read-only property returns the vertical distance,
  CSS pixels, of the top border of the user's browser viewport
  the top edge of the screen.

  `topWindowPos = window.screenY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenY`"
  [this]
  (-> this (.-screenY)))

(defn scrollbars
  "Property.

  The Window.scrollbars property returns the scrollbars object,
  visibility can be checked.

  `objRef = window.scrollbars`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollbars`"
  [this]
  (-> this (.-scrollbars)))

(defn set-scrollbars!
  "Property.

  The Window.scrollbars property returns the scrollbars object,
  visibility can be checked.

  `objRef = window.scrollbars`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollbars`"
  [this val]
  (aset this "scrollbars" val))

(defn scroll-max-x
  "Property.

  The Window.scrollMaxX read-only property returns the maximum
  of pixels that the document can be scrolled horizontally.

  `xMax = window.scrollMaxX


  xMax is the number of pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxX`"
  [this]
  (-> this (.-scrollMaxX)))

(defn set-scroll-max-x!
  "Property.

  The Window.scrollMaxX read-only property returns the maximum
  of pixels that the document can be scrolled horizontally.

  `xMax = window.scrollMaxX


  xMax is the number of pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxX`"
  [this val]
  (aset this "scrollMaxX" val))

(defn scroll-max-y
  "Property.

  The Window.scrollMaxY read-only property returns the maximum
  of pixels that the document can be scrolled vertically.

  `yMax = window.scrollMaxY


  yMax is the number of pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxY`"
  [this]
  (-> this (.-scrollMaxY)))

(defn set-scroll-max-y!
  "Property.

  The Window.scrollMaxY read-only property returns the maximum
  of pixels that the document can be scrolled vertically.

  `yMax = window.scrollMaxY


  yMax is the number of pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxY`"
  [this val]
  (aset this "scrollMaxY" val))

(defn self
  "Property.

  The Window.self read-only property returns the window itself,
  a `WindowProxy`. It can be used with dot notation on a window
  (that is, window.self) or standalone (self). The advantage of
  standalone notation is that a similar notation exists for non-window
  such as in Web Workers. By using self, you can refer to the global
  in a way that will work not only in a window context (self will
  to window.self) but also in a worker context (self will then
  to `WorkerGlobalScope.self`).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/self`"
  [this]
  (-> this (.-self)))

(defn session-storage
  "Property.

  The sessionStorage property accesses a session `web.storage.Storage`
  for the current origin. sessionStorage is similar to `localStorage`;
  difference is that while data in localStorage doesn't expire,
  in sessionStorage is cleared when the page session ends.

  `// Save data to sessionStorage
  sessionStorage.setItem('key', 'value');

  // Get saved data from sessionStorage
  let data = sessionStorage.getItem('key');

  // Remove saved data from sessionStorage
  sessionStorage.removeItem('key');

  // Remove all saved data from sessionStorage
  sessionStorage.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage`"
  [this]
  (-> this (.-sessionStorage)))

(defn set-session-storage!
  "Property.

  The sessionStorage property accesses a session `web.storage.Storage`
  for the current origin. sessionStorage is similar to `localStorage`;
  difference is that while data in localStorage doesn't expire,
  in sessionStorage is cleared when the page session ends.

  `// Save data to sessionStorage
  sessionStorage.setItem('key', 'value');

  // Get saved data from sessionStorage
  let data = sessionStorage.getItem('key');

  // Remove saved data from sessionStorage
  sessionStorage.removeItem('key');

  // Remove all saved data from sessionStorage
  sessionStorage.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage`"
  [this val]
  (aset this "sessionStorage" val))

(defn sidebar
  "Property.

  Returns a sidebar object, which contains several methods for
  add-ons with the browser.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sidebar`"
  [this]
  (-> this (.-sidebar)))

(defn set-sidebar!
  "Property.

  Returns a sidebar object, which contains several methods for
  add-ons with the browser.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sidebar`"
  [this val]
  (aset this "sidebar" val))

(defn speech-synthesis
  "Property.

  The speechSynthesis read-only property of the Window object returns
  `web.speech.SpeechSynthesis` object, which is the entry point
  using Web Speech API speech synthesis functionality.

  `var synth = window.speechSynthesis;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis`"
  [this]
  (-> this (.-speechSynthesis)))

(defn set-speech-synthesis!
  "Property.

  The speechSynthesis read-only property of the Window object returns
  `web.speech.SpeechSynthesis` object, which is the entry point
  using Web Speech API speech synthesis functionality.

  `var synth = window.speechSynthesis;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis`"
  [this val]
  (aset this "speechSynthesis" val))

(defn status
  "Property.

  The status property of the `web.Window` interface sets the text
  the status bar at the bottom of the browser or returns the previously
  text.

  `window.status = string;
  var value = window.status;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/status`"
  [this]
  (-> this (.-status)))

(defn set-status!
  "Property.

  The status property of the `web.Window` interface sets the text
  the status bar at the bottom of the browser or returns the previously
  text.

  `window.status = string;
  var value = window.status;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/status`"
  [this val]
  (aset this "status" val))

(defn statusbar
  "Property.

  The Window.statusbar property returns the statusbar object, whose
  can be toggled in the window.

  `objRef = window.statusbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/statusbar`"
  [this]
  (-> this (.-statusbar)))

(defn set-statusbar!
  "Property.

  The Window.statusbar property returns the statusbar object, whose
  can be toggled in the window.

  `objRef = window.statusbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/statusbar`"
  [this val]
  (aset this "statusbar" val))

(defn toolbar
  "Property.

  The Window.toolbar property returns the toolbar object, whose
  can be toggled in the window.

  `objRef = window.toolbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/toolbar`"
  [this]
  (-> this (.-toolbar)))

(defn set-toolbar!
  "Property.

  The Window.toolbar property returns the toolbar object, whose
  can be toggled in the window.

  `objRef = window.toolbar`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/toolbar`"
  [this val]
  (aset this "toolbar" val))

(defn top
  "Property.

  Returns a reference to the topmost window in the window hierarchy.

  `var topWindow = window.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/top`"
  [this]
  (-> this (.-top)))

(defn set-top!
  "Property.

  Returns a reference to the topmost window in the window hierarchy.

  `var topWindow = window.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/top`"
  [this val]
  (aset this "top" val))

(defn visual-viewport
  "Property.

  The visualViewport read-only property of the `web.Window` interface
  a `web.viewport.VisualViewport` object representing the visual
  for a given window.

  `var visualViewport = Window.visualViewport`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/visualViewport`"
  [this]
  (-> this (.-visualViewport)))

(defn set-visual-viewport!
  "Property.

  The visualViewport read-only property of the `web.Window` interface
  a `web.viewport.VisualViewport` object representing the visual
  for a given window.

  `var visualViewport = Window.visualViewport`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/visualViewport`"
  [this val]
  (aset this "visualViewport" val))

(defn window
  "Property.

  The window property of a `web.Window` object points to the window
  itself.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/window`"
  [this]
  (-> this (.-window)))

(defn set-window!
  "Property.

  The window property of a `web.Window` object points to the window
  itself.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/window`"
  [this val]
  (aset this "window" val))

(defn caches
  "Property.

  The caches read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the `web.service-workers.CacheStorage` object associated
  the current context. This object enables functionality such as
  assets for offline use, and generating custom responses to requests.

  `var myCacheStorage = self.caches; // or just caches`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches`"
  [this]
  (-> this (.-caches)))

(defn indexed-db
  "Property.

  The indexedDB read-only property of the `web.WindowOrWorkerGlobalScope`
  provides a mechanism for applications to asynchronously access
  capabilities of indexed databases.

  `var IDBFactory = self.indexedDB;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/indexedDB`"
  [this]
  (-> this (.-indexedDB)))

(defn origin
  "Property.

  The origin read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the origin of the global scope, serialized as a string.

  `var myOrigin = self.origin; // or just origin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`"
  [this]
  (-> this (.-origin)))

(defn set-origin!
  "Property.

  The origin read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the origin of the global scope, serialized as a string.

  `var myOrigin = self.origin; // or just origin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`"
  [this val]
  (aset this "origin" val))

(defn application-cache
  "Property.

  Returns a reference to the application cache object for the window.

  `cache = window.applicationCache`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache`"
  [this]
  (-> this (.-applicationCache)))

(defn set-application-cache!
  "Property.

  Returns a reference to the application cache object for the window.

  `cache = window.applicationCache`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache`"
  [this val]
  (aset this "applicationCache" val))

(defn onabort
  "Property.

  The onabort property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  The onabort property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onafterprint
  "Property.

  The onafterprint property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing afterprint events for the
  window. These events are raised after the user prints, or if
  abort the print dialog.

  `window.addEventListener(\\\"afterprint\\\", function(event) { ... });
  window.onafterprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint`"
  [this]
  (-> this (.-onafterprint)))

(defn set-onafterprint!
  "Property.

  The onafterprint property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing afterprint events for the
  window. These events are raised after the user prints, or if
  abort the print dialog.

  `window.addEventListener(\\\"afterprint\\\", function(event) { ... });
  window.onafterprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint`"
  [this val]
  (aset this "onafterprint" val))

(defn onanimationcancel
  "Property.

  The onanimationcancel property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationcancel events.

  `var animCancelHandler = target.onanimationcancel;

  target.onanimationcancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`"
  [this]
  (-> this (.-onanimationcancel)))

(defn set-onanimationcancel!
  "Property.

  The onanimationcancel property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationcancel events.

  `var animCancelHandler = target.onanimationcancel;

  target.onanimationcancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`"
  [this val]
  (aset this "onanimationcancel" val))

(defn onanimationend
  "Property.

  The onanimationend property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationend events.

  `var animEndHandler = target.onanimationend;

  target.onanimationend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`"
  [this]
  (-> this (.-onanimationend)))

(defn set-onanimationend!
  "Property.

  The onanimationend property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationend events.

  `var animEndHandler = target.onanimationend;

  target.onanimationend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`"
  [this val]
  (aset this "onanimationend" val))

(defn onanimationiteration
  "Property.

  The onanimationiteration property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this]
  (-> this (.-onanimationiteration)))

(defn set-onanimationiteration!
  "Property.

  The onanimationiteration property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this val]
  (aset this "onanimationiteration" val))

(defn onappinstalled
  "Property.

  The onappinstalled attribute of the `web.Window` object serves
  an event handler for the appinstalled event, which is dispatched
  the web application is successfully installed as a progressive
  app. The event that is fired is a \\\"simple event\\\" that implements
  `web.event.Event` interface.

  `window.onappinstalled = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onappinstalled`"
  [this]
  (-> this (.-onappinstalled)))

(defn set-onappinstalled!
  "Property.

  The onappinstalled attribute of the `web.Window` object serves
  an event handler for the appinstalled event, which is dispatched
  the web application is successfully installed as a progressive
  app. The event that is fired is a \\\"simple event\\\" that implements
  `web.event.Event` interface.

  `window.onappinstalled = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onappinstalled`"
  [this val]
  (aset this "onappinstalled" val))

(defn onauxclick
  "Property.

  The onauxclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this]
  (-> this (.-onauxclick)))

(defn set-onauxclick!
  "Property.

  The onauxclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this val]
  (aset this "onauxclick" val))

(defn onbeforeinstallprompt
  "Property.

  The Window.onbeforeinstallprompt property is an event handler
  processing a beforeinstallprompt, which is dispatched on devices
  a user is about to be prompted to \\\"install\\\" a web application.
  associated event may be saved for later and used to prompt the
  at a more suitable time.

  `window.addEventListener(\\\"beforeinstallprompt\\\", function(event) { ... });
  window.onbeforeinstallprompt = function(event) { ...};`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onbeforeinstallprompt`"
  [this]
  (-> this (.-onbeforeinstallprompt)))

(defn set-onbeforeinstallprompt!
  "Property.

  The Window.onbeforeinstallprompt property is an event handler
  processing a beforeinstallprompt, which is dispatched on devices
  a user is about to be prompted to \\\"install\\\" a web application.
  associated event may be saved for later and used to prompt the
  at a more suitable time.

  `window.addEventListener(\\\"beforeinstallprompt\\\", function(event) { ... });
  window.onbeforeinstallprompt = function(event) { ...};`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onbeforeinstallprompt`"
  [this val]
  (aset this "onbeforeinstallprompt" val))

(defn onbeforeprint
  "Property.

  The onbeforeprint property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing beforeprint events for the
  window. These events are raised before the print dialog window
  opened.

  `window.addEventListener(\\\"beforeprint\\\", function(event) { ... });
  window.onbeforeprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint`"
  [this]
  (-> this (.-onbeforeprint)))

(defn set-onbeforeprint!
  "Property.

  The onbeforeprint property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing beforeprint events for the
  window. These events are raised before the print dialog window
  opened.

  `window.addEventListener(\\\"beforeprint\\\", function(event) { ... });
  window.onbeforeprint = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint`"
  [this val]
  (aset this "onbeforeprint" val))

(defn onbeforeunload
  "Property.

  The onbeforeunload property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing beforeunload events. These
  fire when a window is about to unload its resources. At this
  the document is still visible and the event is still cancelable.

  `window.addEventListener(\\\"beforeunload\\\", function(event) { ... });
  window.onbeforeunload = function(event) { ... };

  Typically, it is better to use `window.addEventListener()` and the beforeunload event, instead of onbeforeunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload`"
  [this]
  (-> this (.-onbeforeunload)))

(defn set-onbeforeunload!
  "Property.

  The onbeforeunload property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing beforeunload events. These
  fire when a window is about to unload its resources. At this
  the document is still visible and the event is still cancelable.

  `window.addEventListener(\\\"beforeunload\\\", function(event) { ... });
  window.onbeforeunload = function(event) { ... };

  Typically, it is better to use `window.addEventListener()` and the beforeunload event, instead of onbeforeunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload`"
  [this val]
  (aset this "onbeforeunload" val))

(defn onblur
  "Property.

  The onblur property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing blur events. It's available
  `web.Element`, `web.Document`, and `web.Window`.

  `target.onblur = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`"
  [this]
  (-> this (.-onblur)))

(defn set-onblur!
  "Property.

  The onblur property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing blur events. It's available
  `web.Element`, `web.Document`, and `web.Window`.

  `target.onblur = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`"
  [this val]
  (aset this "onblur" val))

(defn oncancel
  "Property.

  The oncancel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing cancel events sent to a `<dialog>`

  `target.oncancel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`"
  [this]
  (-> this (.-oncancel)))

(defn set-oncancel!
  "Property.

  The oncancel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing cancel events sent to a `<dialog>`

  `target.oncancel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`"
  [this val]
  (aset this "oncancel" val))

(defn oncanplay
  "Property.

  The oncanplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing canplay events.

  `element.oncanplay = handlerFunction;
  var handlerFunction = element.oncanplay;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`"
  [this]
  (-> this (.-oncanplay)))

(defn set-oncanplay!
  "Property.

  The oncanplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing canplay events.

  `element.oncanplay = handlerFunction;
  var handlerFunction = element.oncanplay;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`"
  [this val]
  (aset this "oncanplay" val))

(defn oncanplaythrough
  "Property.

  The oncanplaythrough property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing canplaythrough events.

  `element.oncanplaythrough = handlerFunction;
  var handlerFunction = element.oncanplaythrough;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`"
  [this]
  (-> this (.-oncanplaythrough)))

(defn set-oncanplaythrough!
  "Property.

  The oncanplaythrough property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing canplaythrough events.

  `element.oncanplaythrough = handlerFunction;
  var handlerFunction = element.oncanplaythrough;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`"
  [this val]
  (aset this "oncanplaythrough" val))

(defn onchange
  "Property.

  The onchange property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing change events.

  `target.onchange = functionRef;

  functionRef is a function name or a function expression. The function receives an `web.event.Event` object as its sole argument.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  The onchange property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing change events.

  `target.onchange = functionRef;

  functionRef is a function name or a function expression. The function receives an `web.event.Event` object as its sole argument.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onclick
  "Property.

  The onclick property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing click events on a given element.

  `target.onclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`"
  [this]
  (-> this (.-onclick)))

(defn set-onclick!
  "Property.

  The onclick property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing click events on a given element.

  `target.onclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`"
  [this val]
  (aset this "onclick" val))

(defn onclose
  "Property.

  The onclose property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing close events sent to a `<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this]
  (-> this (.-onclose)))

(defn set-onclose!
  "Property.

  The onclose property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing close events sent to a `<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this val]
  (aset this "onclose" val))

(defn oncontextmenu
  "Property.

  The oncontextmenu property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes contextmenu events.

  `target.oncontextmenu = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`"
  [this]
  (-> this (.-oncontextmenu)))

(defn set-oncontextmenu!
  "Property.

  The oncontextmenu property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes contextmenu events.

  `target.oncontextmenu = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`"
  [this val]
  (aset this "oncontextmenu" val))

(defn oncuechange
  "Property.

  The oncuechange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing cuechange events.

  `element.oncuechange = handlerFunction;
  var handlerFunction = element.oncuechange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`"
  [this]
  (-> this (.-oncuechange)))

(defn set-oncuechange!
  "Property.

  The oncuechange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing cuechange events.

  `element.oncuechange = handlerFunction;
  var handlerFunction = element.oncuechange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`"
  [this val]
  (aset this "oncuechange" val))

(defn ondblclick
  "Property.

  The ondblclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes dblclick events on the given

  `target.ondblclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`"
  [this]
  (-> this (.-ondblclick)))

(defn set-ondblclick!
  "Property.

  The ondblclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes dblclick events on the given

  `target.ondblclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`"
  [this val]
  (aset this "ondblclick" val))

(defn ondevicelight
  "Property.

  Specifies an event listener to receive devicelight events. These
  occur when the device's light level sensor detects a change in
  intensity of the ambient light level.

  `window.ondevicelight = funcRef

  Where funcRef is a function to be called when the devicelight event occurs. These events are of type `web.ambient.DeviceLightEvent`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicelight`"
  [this]
  (-> this (.-ondevicelight)))

(defn set-ondevicelight!
  "Property.

  Specifies an event listener to receive devicelight events. These
  occur when the device's light level sensor detects a change in
  intensity of the ambient light level.

  `window.ondevicelight = funcRef

  Where funcRef is a function to be called when the devicelight event occurs. These events are of type `web.ambient.DeviceLightEvent`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicelight`"
  [this val]
  (aset this "ondevicelight" val))

(defn ondevicemotion
  "Property.

  An event handler for the devicemotion events sent to the window.

  `window.ondevicemotion = funcRef;

  Where funcRef is a reference to a function. This function receives a `web.mobile.DeviceMotionEvent` object describing the motion that occurred.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicemotion`"
  [this]
  (-> this (.-ondevicemotion)))

(defn set-ondevicemotion!
  "Property.

  An event handler for the devicemotion events sent to the window.

  `window.ondevicemotion = funcRef;

  Where funcRef is a reference to a function. This function receives a `web.mobile.DeviceMotionEvent` object describing the motion that occurred.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicemotion`"
  [this val]
  (aset this "ondevicemotion" val))

(defn ondeviceorientation
  "Property.

  An event handler for the deviceorientation event, which contains
  about a relative device orientation change.

  `window.ondeviceorientation = function(event) { ... };
  window.addEventListener('deviceorientation', function(event) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientation`"
  [this]
  (-> this (.-ondeviceorientation)))

(defn set-ondeviceorientation!
  "Property.

  An event handler for the deviceorientation event, which contains
  about a relative device orientation change.

  `window.ondeviceorientation = function(event) { ... };
  window.addEventListener('deviceorientation', function(event) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientation`"
  [this val]
  (aset this "ondeviceorientation" val))

(defn ondeviceorientationabsolute
  "Property.

  An event handler for the deviceorientationabsolute event containing
  about an absolute device orientation change.

  `window.ondeviceorientationabsolute = function(event) { ... };
  window.addEventListener('deviceorientationabsolute', function(event) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientationabsolute`"
  [this]
  (-> this (.-ondeviceorientationabsolute)))

(defn set-ondeviceorientationabsolute!
  "Property.

  An event handler for the deviceorientationabsolute event containing
  about an absolute device orientation change.

  `window.ondeviceorientationabsolute = function(event) { ... };
  window.addEventListener('deviceorientationabsolute', function(event) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientationabsolute`"
  [this val]
  (aset this "ondeviceorientationabsolute" val))

(defn ondeviceproximity
  "Property.

  The ondeviceproximity property of the `web.Window` interface
  an `EventHandler` to receive deviceproximity events. These events
  when the device sensor detects that an object becomes closer
  or farther from the device.

  `window.onuserproximity = funcRef

  Where funcRef is a function to be called when the deviceproximity event occurs. These events are of type `web.divice.DeviceProximityEvent`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceproximity`"
  [this]
  (-> this (.-ondeviceproximity)))

(defn set-ondeviceproximity!
  "Property.

  The ondeviceproximity property of the `web.Window` interface
  an `EventHandler` to receive deviceproximity events. These events
  when the device sensor detects that an object becomes closer
  or farther from the device.

  `window.onuserproximity = funcRef

  Where funcRef is a function to be called when the deviceproximity event occurs. These events are of type `web.divice.DeviceProximityEvent`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceproximity`"
  [this val]
  (aset this "ondeviceproximity" val))

(defn ondragdrop
  "Property.

  An event handler for drag and drop events sent to the window.

  `window.ondragdrop = funcRef;
  window.addEventListener(\\\"dragdrop\\\", funcRef, useCapturing);


  funcRef
  The event handler function to be registered.


  The window.ondragdrop property and the ondragdrop attribute are not implemented in Gecko (bug 112288), you have to use addEventListener. See addEventListener for details.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondragdrop`"
  [this]
  (-> this (.-ondragdrop)))

(defn set-ondragdrop!
  "Property.

  An event handler for drag and drop events sent to the window.

  `window.ondragdrop = funcRef;
  window.addEventListener(\\\"dragdrop\\\", funcRef, useCapturing);


  funcRef
  The event handler function to be registered.


  The window.ondragdrop property and the ondragdrop attribute are not implemented in Gecko (bug 112288), you have to use addEventListener. See addEventListener for details.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondragdrop`"
  [this val]
  (aset this "ondragdrop" val))

(defn ondurationchange
  "Property.

  The ondurationchange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing durationchange events.

  `element.ondurationchange = handlerFunction;
  var handlerFunction = element.ondurationchange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`"
  [this]
  (-> this (.-ondurationchange)))

(defn set-ondurationchange!
  "Property.

  The ondurationchange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing durationchange events.

  `element.ondurationchange = handlerFunction;
  var handlerFunction = element.ondurationchange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`"
  [this val]
  (aset this "ondurationchange" val))

(defn onended
  "Property.

  The onended property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing ended events.

  `element.onended = handlerFunction;
  var handlerFunction = element.onended;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`"
  [this]
  (-> this (.-onended)))

(defn set-onended!
  "Property.

  The onended property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing ended events.

  `element.onended = handlerFunction;
  var handlerFunction = element.onended;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`"
  [this val]
  (aset this "onended" val))

(defn onerror
  "Property.

  The onerror property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes error events.

  `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `window.addEventListener` handlers).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes error events.

  `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `window.addEventListener` handlers).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onfocus
  "Property.

  The onfocus property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes focus events on the given element.

  `target.onfocus = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`"
  [this]
  (-> this (.-onfocus)))

(defn set-onfocus!
  "Property.

  The onfocus property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes focus events on the given element.

  `target.onfocus = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`"
  [this val]
  (aset this "onfocus" val))

(defn ongamepadconnected
  "Property.

  The ongamepadconnected property of the `web.Window` interface
  an event handler that will run when a gamepad is connected (when
  gamepadconnected event fires).

  `window.ongamepadconnected = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepadconnected`"
  [this]
  (-> this (.-ongamepadconnected)))

(defn set-ongamepadconnected!
  "Property.

  The ongamepadconnected property of the `web.Window` interface
  an event handler that will run when a gamepad is connected (when
  gamepadconnected event fires).

  `window.ongamepadconnected = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepadconnected`"
  [this val]
  (aset this "ongamepadconnected" val))

(defn ongamepaddisconnected
  "Property.

  The ongamepaddisconnected property of the `web.Window` interface
  an event handler that will run when a gamepad is disconnected
  the gamepaddisconnected event fires).

  `window.ongamepaddisconnected = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepaddisconnected`"
  [this]
  (-> this (.-ongamepaddisconnected)))

(defn set-ongamepaddisconnected!
  "Property.

  The ongamepaddisconnected property of the `web.Window` interface
  an event handler that will run when a gamepad is disconnected
  the gamepaddisconnected event fires).

  `window.ongamepaddisconnected = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepaddisconnected`"
  [this val]
  (aset this "ongamepaddisconnected" val))

(defn ongotpointercapture
  "Property.

  The ongotpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes gotpointercapture events.

  `target.ongotpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`"
  [this]
  (-> this (.-ongotpointercapture)))

(defn set-ongotpointercapture!
  "Property.

  The ongotpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes gotpointercapture events.

  `target.ongotpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`"
  [this val]
  (aset this "ongotpointercapture" val))

(defn onhashchange
  "Property.

  The WindowEventHandlers.onhashchange property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing hashchange events.

  `Using an event handler:



  window.onhashchange = funcRef;

  Using an HTML event handler:



  <body onhashchange=\\\"funcRef();\\\">

  Using an event listener:

  To add an event listener, use `addEventListener()`:



  window.addEventListener(\\\"hashchange\\\", funcRef, false);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange`"
  [this]
  (-> this (.-onhashchange)))

(defn set-onhashchange!
  "Property.

  The WindowEventHandlers.onhashchange property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing hashchange events.

  `Using an event handler:



  window.onhashchange = funcRef;

  Using an HTML event handler:



  <body onhashchange=\\\"funcRef();\\\">

  Using an event listener:

  To add an event listener, use `addEventListener()`:



  window.addEventListener(\\\"hashchange\\\", funcRef, false);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange`"
  [this val]
  (aset this "onhashchange" val))

(defn oninput
  "Property.

  The oninput property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes input events on the `<input>`,
  and `<textarea>` elements. It also handles these events on elements
  `contenteditable` or `designMode` are turned on.

  `target.oninput = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`"
  [this]
  (-> this (.-oninput)))

(defn set-oninput!
  "Property.

  The oninput property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes input events on the `<input>`,
  and `<textarea>` elements. It also handles these events on elements
  `contenteditable` or `designMode` are turned on.

  `target.oninput = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`"
  [this val]
  (aset this "oninput" val))

(defn oninvalid
  "Property.

  The oninvalid property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes invalid events.

  `target.oninvalid = functionRef;
  var functionRef = target.oninvalid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`"
  [this]
  (-> this (.-oninvalid)))

(defn set-oninvalid!
  "Property.

  The oninvalid property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes invalid events.

  `target.oninvalid = functionRef;
  var functionRef = target.oninvalid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`"
  [this val]
  (aset this "oninvalid" val))

(defn onkeydown
  "Property.

  The onkeydown property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keydown events.

  `target.onkeydown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`"
  [this]
  (-> this (.-onkeydown)))

(defn set-onkeydown!
  "Property.

  The onkeydown property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keydown events.

  `target.onkeydown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`"
  [this val]
  (aset this "onkeydown" val))

(defn onkeypress
  "Property.

  The onkeypress property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this]
  (-> this (.-onkeypress)))

(defn set-onkeypress!
  "Property.

  The onkeypress property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this val]
  (aset this "onkeypress" val))

(defn onkeyup
  "Property.

  The onkeyup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keyup events.

  `target.onkeyup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`"
  [this]
  (-> this (.-onkeyup)))

(defn set-onkeyup!
  "Property.

  The onkeyup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keyup events.

  `target.onkeyup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`"
  [this val]
  (aset this "onkeyup" val))

(defn onlanguagechange
  "Property.

  The onlanguagechange property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing languagechange events.

  `object.onlanguagechange = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange`"
  [this]
  (-> this (.-onlanguagechange)))

(defn set-onlanguagechange!
  "Property.

  The onlanguagechange property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing languagechange events.

  `object.onlanguagechange = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange`"
  [this val]
  (aset this "onlanguagechange" val))

(defn onload
  "Property.

  The onload property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes load events on a `web.Window`,
  `<img>` element, etc.

  `target.onload = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`"
  [this]
  (-> this (.-onload)))

(defn set-onload!
  "Property.

  The onload property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes load events on a `web.Window`,
  `<img>` element, etc.

  `target.onload = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`"
  [this val]
  (aset this "onload" val))

(defn onloadeddata
  "Property.

  The onloadeddata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadeddata events.

  `element.onloadeddata = handlerFunction;
  var handlerFunction = element.onloadeddata;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`"
  [this]
  (-> this (.-onloadeddata)))

(defn set-onloadeddata!
  "Property.

  The onloadeddata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadeddata events.

  `element.onloadeddata = handlerFunction;
  var handlerFunction = element.onloadeddata;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`"
  [this val]
  (aset this "onloadeddata" val))

(defn onloadedmetadata
  "Property.

  The onloadedmetadata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadedmetadata events.

  `element.onloadedmetadata = handlerFunction;
  var handlerFunction = element.onloadedmetadata;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`"
  [this]
  (-> this (.-onloadedmetadata)))

(defn set-onloadedmetadata!
  "Property.

  The onloadedmetadata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadedmetadata events.

  `element.onloadedmetadata = handlerFunction;
  var handlerFunction = element.onloadedmetadata;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`"
  [this val]
  (aset this "onloadedmetadata" val))

(defn onloadend
  "Property.

  The onloadend property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` representing the code to be called when the
  event is raised (when progress has stopped on the loading of
  resource.)

  `img.onloadend = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`"
  [this]
  (-> this (.-onloadend)))

(defn set-onloadend!
  "Property.

  The onloadend property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` representing the code to be called when the
  event is raised (when progress has stopped on the loading of
  resource.)

  `img.onloadend = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`"
  [this val]
  (aset this "onloadend" val))

(defn onloadstart
  "Property.

  The onloadstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` representing the code to be called when
  loadstart event is raised (when progress has begun on the loading
  a resource.)

  `img.onloadstart = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`"
  [this]
  (-> this (.-onloadstart)))

(defn set-onloadstart!
  "Property.

  The onloadstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` representing the code to be called when
  loadstart event is raised (when progress has begun on the loading
  a resource.)

  `img.onloadstart = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`"
  [this val]
  (aset this "onloadstart" val))

(defn onlostpointercapture
  "Property.

  The onlostpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes lostpointercapture events.

  `target.onlostpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`"
  [this]
  (-> this (.-onlostpointercapture)))

(defn set-onlostpointercapture!
  "Property.

  The onlostpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes lostpointercapture events.

  `target.onlostpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`"
  [this val]
  (aset this "onlostpointercapture" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.dom.WindowEventHandlers` mixin
  the `EventHandler` called whenever an object receives a message

  `window.addEventListener('message', function(event) { ... })
  window.onmessage = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.dom.WindowEventHandlers` mixin
  the `EventHandler` called whenever an object receives a message

  `window.addEventListener('message', function(event) { ... })
  window.onmessage = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.dom.WindowEventHandlers`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on a window—that is, when it receives
  message that cannot be deserialized.

  `window.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessageerror`"
  [this]
  (-> this (.-onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.dom.WindowEventHandlers`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on a window—that is, when it receives
  message that cannot be deserialized.

  `window.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

(defn onmousedown
  "Property.

  The onmousedown property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousedown events.

  `target.onmousedown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`"
  [this]
  (-> this (.-onmousedown)))

(defn set-onmousedown!
  "Property.

  The onmousedown property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousedown events.

  `target.onmousedown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`"
  [this val]
  (aset this "onmousedown" val))

(defn onmouseenter
  "Property.

  The onmouseenter property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseenter events.

  `element.onmouseenter = handlerFunction;
  var handlerFunction = element.onmouseenter;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`"
  [this]
  (-> this (.-onmouseenter)))

(defn set-onmouseenter!
  "Property.

  The onmouseenter property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseenter events.

  `element.onmouseenter = handlerFunction;
  var handlerFunction = element.onmouseenter;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`"
  [this val]
  (aset this "onmouseenter" val))

(defn onmouseleave
  "Property.

  The onmouseleave property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseleave events.

  `element.onmouseleave = handlerFunction;
  var handlerFunction = element.onmouseleave;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`"
  [this]
  (-> this (.-onmouseleave)))

(defn set-onmouseleave!
  "Property.

  The onmouseleave property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseleave events.

  `element.onmouseleave = handlerFunction;
  var handlerFunction = element.onmouseleave;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`"
  [this val]
  (aset this "onmouseleave" val))

(defn onmousemove
  "Property.

  The onmousemove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousemove events.

  `target.onmousemove = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`"
  [this]
  (-> this (.-onmousemove)))

(defn set-onmousemove!
  "Property.

  The onmousemove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousemove events.

  `target.onmousemove = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`"
  [this val]
  (aset this "onmousemove" val))

(defn onmouseout
  "Property.

  The onmouseout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseout events.

  `element.onmouseout = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`"
  [this]
  (-> this (.-onmouseout)))

(defn set-onmouseout!
  "Property.

  The onmouseout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseout events.

  `element.onmouseout = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`"
  [this val]
  (aset this "onmouseout" val))

(defn onmouseover
  "Property.

  The onmouseover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseover events.

  `element.onmouseover = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`"
  [this]
  (-> this (.-onmouseover)))

(defn set-onmouseover!
  "Property.

  The onmouseover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseover events.

  `element.onmouseover = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`"
  [this val]
  (aset this "onmouseover" val))

(defn onmouseup
  "Property.

  The onmouseup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes mouseup events.

  `target.onmouseup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`"
  [this]
  (-> this (.-onmouseup)))

(defn set-onmouseup!
  "Property.

  The onmouseup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes mouseup events.

  `target.onmouseup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`"
  [this val]
  (aset this "onmouseup" val))

(defn onmozbeforepaint
  "Property.

  An event handler for the MozBeforePaint event. This is used in
  with the `window.mozRequestAnimationFrame()` method to perform
  synchronized animations from JavaScript code.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onmozbeforepaint`"
  [this]
  (-> this (.-onmozbeforepaint)))

(defn set-onmozbeforepaint!
  "Property.

  An event handler for the MozBeforePaint event. This is used in
  with the `window.mozRequestAnimationFrame()` method to perform
  synchronized animations from JavaScript code.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onmozbeforepaint`"
  [this val]
  (aset this "onmozbeforepaint" val))

(defn onpaint
  "Property.

  Window.onpaint is an event handler for the paint event on the

  `window.onpaint = funcRef;


  funcRef is a handler function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onpaint`"
  [this]
  (-> this (.-onpaint)))

(defn set-onpaint!
  "Property.

  Window.onpaint is an event handler for the paint event on the

  `window.onpaint = funcRef;


  funcRef is a handler function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onpaint`"
  [this val]
  (aset this "onpaint" val))

(defn onpause
  "Property.

  The onpause property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing pause events.

  `element.onpause = handlerFunction;
  var handlerFunction = element.onpause;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`"
  [this]
  (-> this (.-onpause)))

(defn set-onpause!
  "Property.

  The onpause property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing pause events.

  `element.onpause = handlerFunction;
  var handlerFunction = element.onpause;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`"
  [this val]
  (aset this "onpause" val))

(defn onplay
  "Property.

  The onplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing play events.

  `element.onplay = handlerFunction;
  var handlerFunction = element.onplay;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`"
  [this]
  (-> this (.-onplay)))

(defn set-onplay!
  "Property.

  The onplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing play events.

  `element.onplay = handlerFunction;
  var handlerFunction = element.onplay;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`"
  [this val]
  (aset this "onplay" val))

(defn onpointercancel
  "Property.

  The onpointercancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointercancel events.

  `targetElement.onpointercancel = cancelHandler;

  var cancelHandler = targetElement.onpointercancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`"
  [this]
  (-> this (.-onpointercancel)))

(defn set-onpointercancel!
  "Property.

  The onpointercancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointercancel events.

  `targetElement.onpointercancel = cancelHandler;

  var cancelHandler = targetElement.onpointercancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`"
  [this val]
  (aset this "onpointercancel" val))

(defn onpointerdown
  "Property.

  The `web.dom.GlobalEventHandlers` event handler onpointerdown
  used to specify the event handler for the pointerdown event,
  is fired when the pointing device is initially pressed. This
  can be sent to `web.Window`, `web.Document`, and `web.Element`

  `target.onpointerdown = downHandler;

  var downHandler = target.onpointerdown;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`"
  [this]
  (-> this (.-onpointerdown)))

(defn set-onpointerdown!
  "Property.

  The `web.dom.GlobalEventHandlers` event handler onpointerdown
  used to specify the event handler for the pointerdown event,
  is fired when the pointing device is initially pressed. This
  can be sent to `web.Window`, `web.Document`, and `web.Element`

  `target.onpointerdown = downHandler;

  var downHandler = target.onpointerdown;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`"
  [this val]
  (aset this "onpointerdown" val))

(defn onpointerenter
  "Property.

  The onpointerenter property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerenter events.

  `targetElement.onpointerenter = enterHandler;

  var enterHandler = targetElement.onpointerenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`"
  [this]
  (-> this (.-onpointerenter)))

(defn set-onpointerenter!
  "Property.

  The onpointerenter property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerenter events.

  `targetElement.onpointerenter = enterHandler;

  var enterHandler = targetElement.onpointerenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`"
  [this val]
  (aset this "onpointerenter" val))

(defn onpointerleave
  "Property.

  The global event handler for the pointerleave event, which is
  to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
  its hit test area (for example, if the cursor exits an `web.Element`
  `web.Window`'s content area). This event is part of the Pointer
  API.

  `EventTarget.onpointerleave = leaveHandler;

  var leaveHandler = EventTarget.onpointerleave;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`"
  [this]
  (-> this (.-onpointerleave)))

(defn set-onpointerleave!
  "Property.

  The global event handler for the pointerleave event, which is
  to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
  its hit test area (for example, if the cursor exits an `web.Element`
  `web.Window`'s content area). This event is part of the Pointer
  API.

  `EventTarget.onpointerleave = leaveHandler;

  var leaveHandler = EventTarget.onpointerleave;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`"
  [this val]
  (aset this "onpointerleave" val))

(defn onpointermove
  "Property.

  The onpointermove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointermove events.

  `targetElement.onpointermove = moveHandler;

  var moveHandler = targetElement.onpointermove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`"
  [this]
  (-> this (.-onpointermove)))

(defn set-onpointermove!
  "Property.

  The onpointermove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointermove events.

  `targetElement.onpointermove = moveHandler;

  var moveHandler = targetElement.onpointermove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`"
  [this val]
  (aset this "onpointermove" val))

(defn onpointerout
  "Property.

  The onpointerout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerout events.

  `targetElement.onpointerout = outHandler;

  var outHandler = targetElement.onpointerout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`"
  [this]
  (-> this (.-onpointerout)))

(defn set-onpointerout!
  "Property.

  The onpointerout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerout events.

  `targetElement.onpointerout = outHandler;

  var outHandler = targetElement.onpointerout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`"
  [this val]
  (aset this "onpointerout" val))

(defn onpointerover
  "Property.

  The onpointerover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerover events.

  `targetElement.onpointerover = overHandler;

  var overHandler = targetElement.onpointerover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`"
  [this]
  (-> this (.-onpointerover)))

(defn set-onpointerover!
  "Property.

  The onpointerover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerover events.

  `targetElement.onpointerover = overHandler;

  var overHandler = targetElement.onpointerover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`"
  [this val]
  (aset this "onpointerover" val))

(defn onpointerup
  "Property.

  The onpointerup property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerup events.

  `targetElement.onpointerup = upHandler;

  var upHandler = targetElement.onpointerup;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`"
  [this]
  (-> this (.-onpointerup)))

(defn set-onpointerup!
  "Property.

  The onpointerup property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerup events.

  `targetElement.onpointerup = upHandler;

  var upHandler = targetElement.onpointerup;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`"
  [this val]
  (aset this "onpointerup" val))

(defn onpopstate
  "Property.

  The onpopstate property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing popstate events on the window.

  `window.onpopstate = funcRef;


  funcRef is a handler function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate`"
  [this]
  (-> this (.-onpopstate)))

(defn set-onpopstate!
  "Property.

  The onpopstate property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing popstate events on the window.

  `window.onpopstate = funcRef;


  funcRef is a handler function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate`"
  [this val]
  (aset this "onpopstate" val))

(defn onrejectionhandled
  "Property.

  The onrejectionhandled property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing rejectionhandled events.
  events are raised when `js.Promise`s are rejected.

  `window.addEventListener(\\\"rejectionhandled\\\", function(event) { ... });
  window.onrejectionhandled = function(event) { ...};`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled`"
  [this]
  (-> this (.-onrejectionhandled)))

(defn set-onrejectionhandled!
  "Property.

  The onrejectionhandled property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing rejectionhandled events.
  events are raised when `js.Promise`s are rejected.

  `window.addEventListener(\\\"rejectionhandled\\\", function(event) { ... });
  window.onrejectionhandled = function(event) { ...};`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled`"
  [this val]
  (aset this "onrejectionhandled" val))

(defn onreset
  "Property.

  The onreset property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes reset events.

  `target.onreset = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`"
  [this]
  (-> this (.-onreset)))

(defn set-onreset!
  "Property.

  The onreset property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes reset events.

  `target.onreset = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`"
  [this val]
  (aset this "onreset" val))

(defn onresize
  "Property.

  The onresize property of the `web.dom.GlobalEventHandlers` interface
  an `EventHandler` that processes resize events.

  `window.onresize = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`"
  [this]
  (-> this (.-onresize)))

(defn set-onresize!
  "Property.

  The onresize property of the `web.dom.GlobalEventHandlers` interface
  an `EventHandler` that processes resize events.

  `window.onresize = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`"
  [this val]
  (aset this "onresize" val))

(defn onscroll
  "Property.

  The onscroll property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes scroll events.

  `target.onscroll = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`"
  [this]
  (-> this (.-onscroll)))

(defn set-onscroll!
  "Property.

  The onscroll property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes scroll events.

  `target.onscroll = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`"
  [this val]
  (aset this "onscroll" val))

(defn onselect
  "Property.

  The onselect property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes `select`.

  `target.onselect = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`"
  [this]
  (-> this (.-onselect)))

(defn set-onselect!
  "Property.

  The onselect property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes `select`.

  `target.onselect = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`"
  [this val]
  (aset this "onselect" val))

(defn onselectionchange
  "Property.

  The onselectionchange property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectionchange events.

  `object.onselectionchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`"
  [this]
  (-> this (.-onselectionchange)))

(defn set-onselectionchange!
  "Property.

  The onselectionchange property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectionchange events.

  `object.onselectionchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`"
  [this val]
  (aset this "onselectionchange" val))

(defn onselectstart
  "Property.

  The onselectstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this]
  (-> this (.-onselectstart)))

(defn set-onselectstart!
  "Property.

  The onselectstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this val]
  (aset this "onselectstart" val))

(defn onstorage
  "Property.

  The onstorage property of the `web.dom.WindowEventHandlers` mixin
  an `EventHandler` for processing storage events.

  `window.onstorage = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onstorage`"
  [this]
  (-> this (.-onstorage)))

(defn set-onstorage!
  "Property.

  The onstorage property of the `web.dom.WindowEventHandlers` mixin
  an `EventHandler` for processing storage events.

  `window.onstorage = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onstorage`"
  [this val]
  (aset this "onstorage" val))

(defn onsubmit
  "Property.

  The onsubmit property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes submit events.

  `target.onsubmit = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`"
  [this]
  (-> this (.-onsubmit)))

(defn set-onsubmit!
  "Property.

  The onsubmit property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes submit events.

  `target.onsubmit = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`"
  [this val]
  (aset this "onsubmit" val))

(defn ontouchcancel
  "Property.

  The ontouchcancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this]
  (-> this (.-ontouchcancel)))

(defn set-ontouchcancel!
  "Property.

  The ontouchcancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this val]
  (aset this "ontouchcancel" val))

(defn ontouchstart
  "Property.

  The ontouchstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this]
  (-> this (.-ontouchstart)))

(defn set-ontouchstart!
  "Property.

  The ontouchstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this val]
  (aset this "ontouchstart" val))

(defn ontransitioncancel
  "Property.

  The ontransitioncancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitioncancel events.

  `var transitionCancelHandler = target.ontransitioncancel;

  target.ontransitioncancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`"
  [this]
  (-> this (.-ontransitioncancel)))

(defn set-ontransitioncancel!
  "Property.

  The ontransitioncancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitioncancel events.

  `var transitionCancelHandler = target.ontransitioncancel;

  target.ontransitioncancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`"
  [this val]
  (aset this "ontransitioncancel" val))

(defn ontransitionend
  "Property.

  The ontransitionend property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitionend events.

  `var transitionEndHandler = target.ontransitionend;

  target.ontransitionend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`"
  [this]
  (-> this (.-ontransitionend)))

(defn set-ontransitionend!
  "Property.

  The ontransitionend property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitionend events.

  `var transitionEndHandler = target.ontransitionend;

  target.ontransitionend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`"
  [this val]
  (aset this "ontransitionend" val))

(defn onunhandledrejection
  "Property.

  The onunhandledrejection property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing unhandledrejection events.
  events are raised for unhandled `js.Promise` rejections.

  `window.onunhandledrejection = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection`"
  [this]
  (-> this (.-onunhandledrejection)))

(defn set-onunhandledrejection!
  "Property.

  The onunhandledrejection property of the `web.dom.WindowEventHandlers`
  is the `EventHandler` for processing unhandledrejection events.
  events are raised for unhandled `js.Promise` rejections.

  `window.onunhandledrejection = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection`"
  [this val]
  (aset this "onunhandledrejection" val))

(defn onunload
  "Property.

  The onunload property of the `web.dom.WindowEventHandlers` mixin
  the `EventHandler` for processing unload events. These events
  when the window is unloading its content and resources. The resource
  is processed after the unload event occurs.

  `window.addEventListener(\\\"unload\\\", function(event) { ... });
  window.onunload = function(event) { ... };

  Typically, it is better to use `window.addEventListener()` and the unload event, instead of onunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunload`"
  [this]
  (-> this (.-onunload)))

(defn set-onunload!
  "Property.

  The onunload property of the `web.dom.WindowEventHandlers` mixin
  the `EventHandler` for processing unload events. These events
  when the window is unloading its content and resources. The resource
  is processed after the unload event occurs.

  `window.addEventListener(\\\"unload\\\", function(event) { ... });
  window.onunload = function(event) { ... };

  Typically, it is better to use `window.addEventListener()` and the unload event, instead of onunload.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunload`"
  [this val]
  (aset this "onunload" val))

(defn onuserproximity
  "Property.

  The Window.onuserproxymity property represents an `EventHandler`,
  is a function to be called when the userproximity event occurs.
  events are of type `web.other.UserProximityEvent` and occur when
  the device sensor detects that an object becomes nearby.

  `window.onuserproximity = eventHandler`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onuserproximity`"
  [this]
  (-> this (.-onuserproximity)))

(defn set-onuserproximity!
  "Property.

  The Window.onuserproxymity property represents an `EventHandler`,
  is a function to be called when the userproximity event occurs.
  events are of type `web.other.UserProximityEvent` and occur when
  the device sensor detects that an object becomes nearby.

  `window.onuserproximity = eventHandler`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onuserproximity`"
  [this val]
  (aset this "onuserproximity" val))

(defn onvrdisplayactivate
  "Property.

  The onvrdisplayactivate property of the `web.Window` interface
  an event handler that will run when a display is able to be presented
  (when the vrdisplayactivate event fires), for example if an HMD
  been moved to bring it out of standby, or woken up by being put

  `window.onvrdisplayactivate = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayactivate`"
  [this]
  (-> this (.-onvrdisplayactivate)))

(defn set-onvrdisplayactivate!
  "Property.

  The onvrdisplayactivate property of the `web.Window` interface
  an event handler that will run when a display is able to be presented
  (when the vrdisplayactivate event fires), for example if an HMD
  been moved to bring it out of standby, or woken up by being put

  `window.onvrdisplayactivate = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayactivate`"
  [this val]
  (aset this "onvrdisplayactivate" val))

(defn onvrdisplayblur
  "Property.

  The onvrdisplayblur property of the `web.Window` interface represents
  event handler that will run when presentation to a display has
  paused for some reason by the browser, OS, or VR hardware (when
  vrdisplayblur event fires) — for example, while the user is interacting
  a system menu or browser, to prevent tracking or loss of experience.

  `window.onvrdisplayblur = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayblur`"
  [this]
  (-> this (.-onvrdisplayblur)))

(defn set-onvrdisplayblur!
  "Property.

  The onvrdisplayblur property of the `web.Window` interface represents
  event handler that will run when presentation to a display has
  paused for some reason by the browser, OS, or VR hardware (when
  vrdisplayblur event fires) — for example, while the user is interacting
  a system menu or browser, to prevent tracking or loss of experience.

  `window.onvrdisplayblur = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayblur`"
  [this val]
  (aset this "onvrdisplayblur" val))

(defn onvrdisplayconnect
  "Property.

  The onvrdisplayconnect property of the `web.Window` interface
  an event handler that will run when a compatible VR display has
  connected to the computer (when the vrdisplayconnect event fires).

  `window.onvrdisplayconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayconnect`"
  [this]
  (-> this (.-onvrdisplayconnect)))

(defn set-onvrdisplayconnect!
  "Property.

  The onvrdisplayconnect property of the `web.Window` interface
  an event handler that will run when a compatible VR display has
  connected to the computer (when the vrdisplayconnect event fires).

  `window.onvrdisplayconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayconnect`"
  [this val]
  (aset this "onvrdisplayconnect" val))

(defn onvrdisplaydeactivate
  "Property.

  The onvrdisplaydeactivate property of the `web.Window` interface
  an event handler that will run when a display can no longer be
  to (when the vrdisplaydeactivate event fires), for example if
  HMD has gone into standby or sleep mode due to a period of inactivity.

  `window.onvrdisplaydeactivate = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydeactivate`"
  [this]
  (-> this (.-onvrdisplaydeactivate)))

(defn set-onvrdisplaydeactivate!
  "Property.

  The onvrdisplaydeactivate property of the `web.Window` interface
  an event handler that will run when a display can no longer be
  to (when the vrdisplaydeactivate event fires), for example if
  HMD has gone into standby or sleep mode due to a period of inactivity.

  `window.onvrdisplaydeactivate = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydeactivate`"
  [this val]
  (aset this "onvrdisplaydeactivate" val))

(defn onvrdisplaydisconnect
  "Property.

  The onvrdisplaydisconnect event handler property of the `web.Window`
  is called when a compatible VR display has been disconnected
  the computer (when the vrdisplaydisconnect event fires).

  `window.onvrdisplaydisconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydisconnect`"
  [this]
  (-> this (.-onvrdisplaydisconnect)))

(defn set-onvrdisplaydisconnect!
  "Property.

  The onvrdisplaydisconnect event handler property of the `web.Window`
  is called when a compatible VR display has been disconnected
  the computer (when the vrdisplaydisconnect event fires).

  `window.onvrdisplaydisconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydisconnect`"
  [this val]
  (aset this "onvrdisplaydisconnect" val))

(defn onvrdisplayfocus
  "Property.

  The onvrdisplayfocus property of the `web.Window` interface represents
  event handler that will run when presentation to a display has
  after being blurred (when the vrdisplayfocus event fires).

  `window.onvrdisplayfocus = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayfocus`"
  [this]
  (-> this (.-onvrdisplayfocus)))

(defn set-onvrdisplayfocus!
  "Property.

  The onvrdisplayfocus property of the `web.Window` interface represents
  event handler that will run when presentation to a display has
  after being blurred (when the vrdisplayfocus event fires).

  `window.onvrdisplayfocus = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayfocus`"
  [this val]
  (aset this "onvrdisplayfocus" val))

(defn onvrdisplaypointerrestricted
  "Property.

  The onvrdisplaypointerrestricted property of the `web.Window`
  represents an event handler that will run when the VR display's
  input is restricted to consumption via a pointerlocked element.

  `window.onvrdisplaypointerrestricted = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerrestricted`"
  [this]
  (-> this (.-onvrdisplaypointerrestricted)))

(defn set-onvrdisplaypointerrestricted!
  "Property.

  The onvrdisplaypointerrestricted property of the `web.Window`
  represents an event handler that will run when the VR display's
  input is restricted to consumption via a pointerlocked element.

  `window.onvrdisplaypointerrestricted = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerrestricted`"
  [this val]
  (aset this "onvrdisplaypointerrestricted" val))

(defn onvrdisplaypointerunrestricted
  "Property.

  The onvrdisplaypointerunrestricted property of the `web.Window`
  represents an event handler that will run when the VR display's
  input is no longer restricted to consumption via a pointerlocked

  `window.onvrdisplaypointerunrestricted = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerunrestricted`"
  [this]
  (-> this (.-onvrdisplaypointerunrestricted)))

(defn set-onvrdisplaypointerunrestricted!
  "Property.

  The onvrdisplaypointerunrestricted property of the `web.Window`
  represents an event handler that will run when the VR display's
  input is no longer restricted to consumption via a pointerlocked

  `window.onvrdisplaypointerunrestricted = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerunrestricted`"
  [this val]
  (aset this "onvrdisplaypointerunrestricted" val))

(defn onvrdisplaypresentchange
  "Property.

  The onvrdisplaypresentchange property of the `web.Window` interface
  an event handler that will run when the presenting state of a
  display changes — i.e. goes from presenting to not presenting,
  vice versa (when the vrdisplaypresentchange event fires).

  `window.onvrdisplaypresentchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypresentchange`"
  [this]
  (-> this (.-onvrdisplaypresentchange)))

(defn set-onvrdisplaypresentchange!
  "Property.

  The onvrdisplaypresentchange property of the `web.Window` interface
  an event handler that will run when the presenting state of a
  display changes — i.e. goes from presenting to not presenting,
  vice versa (when the vrdisplaypresentchange event fires).

  `window.onvrdisplaypresentchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypresentchange`"
  [this val]
  (aset this "onvrdisplaypresentchange" val))

(defn onwheel
  "Property.

  The onwheel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes wheel events.

  `target.onwheel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`"
  [this]
  (-> this (.-onwheel)))

(defn set-onwheel!
  "Property.

  The onwheel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes wheel events.

  `target.onwheel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`"
  [this val]
  (aset this "onwheel" val))

(defn page-x-offset
  "Property.

  The read-only `web.Window` property pageXOffset is an alias for

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageXOffset`"
  [this]
  (-> this (.-pageXOffset)))

(defn set-page-x-offset!
  "Property.

  The read-only `web.Window` property pageXOffset is an alias for

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageXOffset`"
  [this val]
  (aset this "pageXOffset" val))

(defn page-y-offset
  "Property.

  The read-only `web.Window` property pageYOffset is an alias for
  as such, it returns the number of pixels the document is currently
  along the vertical axis (that is, up or down) with a value of
  indicating that the top edge of the `web.Document` is currently
  with the top edge of the window's content area.

  `yOffset = window.pageYOffset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset`"
  [this]
  (-> this (.-pageYOffset)))

(defn set-page-y-offset!
  "Property.

  The read-only `web.Window` property pageYOffset is an alias for
  as such, it returns the number of pixels the document is currently
  along the vertical axis (that is, up or down) with a value of
  indicating that the top edge of the `web.Document` is currently
  with the top edge of the window's content area.

  `yOffset = window.pageYOffset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset`"
  [this val]
  (aset this "pageYOffset" val))

(defn screen-left
  "Property.

  The Window.screenLeft read-only property returns the horizontal
  in CSS pixels, from the left border of the user's browser viewport
  the left side of the screen.

  `leftWindowPos = window.screenLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenLeft`"
  [this]
  (-> this (.-screenLeft)))

(defn screen-top
  "Property.

  The Window.screenTop read-only property returns the vertical
  in CSS pixels, from the top border of the user's browser viewport
  the top side of the screen.

  `topWindowPos = window.screenTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenTop`"
  [this]
  (-> this (.-screenTop)))

(defn window-state
  "Property.

  The windowState read-only property of the Window interface returns
  window's current state."
  [this]
  (-> this (.-windowState)))

(defn set-window-state!
  "Property.

  The windowState read-only property of the Window interface returns
  window's current state."
  [this val]
  (aset this "windowState" val))

