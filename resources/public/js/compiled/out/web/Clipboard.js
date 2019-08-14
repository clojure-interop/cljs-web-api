// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Clipboard');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The read() method of the `web.Clipboard` interface requests a
 *   of the clipboard's contents, delivering the data to the returned
 *   when the promise is resolved. Unlike `web.readText()`, the read()
 *   can return arbitrary data, such as images.
 * 
 *   `var promise = navigator.clipboard.read();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read`
 */
web.Clipboard.read = (function web$Clipboard$read(this$){
return this$.read();
});
/**
 * Method.
 * 
 *   The `web.Clipboard` interface's readText() method returns a `web.Promise`
 *   resolves with a copy of the textual contents of the system clipboard.
 * 
 *   `var promise = navigator.clipboard.readText()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText`
 */
web.Clipboard.read_text = (function web$Clipboard$read_text(this$){
return this$.readText();
});
/**
 * Method.
 * 
 *   The `web.Clipboard` method write() writes arbitrary data, such
 *   images, to the clipboard.
 * 
 *   `var promise = navigator.clipboard.write(dataTransfer)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write`
 */
web.Clipboard.write = (function web$Clipboard$write(this$,data_transfer){
return this$.write(data_transfer);
});
/**
 * Method.
 * 
 *   The `web.Clipboard` interface's writeText() property writes the
 *   text string to the system clipboard.
 * 
 *   `var promise = navigator.clipboard.writeText(newClipText)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText`
 */
web.Clipboard.write_text = (function web$Clipboard$write_text(this$,new_clip_text){
return this$.writeText(new_clip_text);
});

//# sourceMappingURL=Clipboard.js.map?rel=1565798851791
