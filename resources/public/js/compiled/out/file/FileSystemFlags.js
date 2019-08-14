// Compiled by ClojureScript 1.9.946 {}
goog.provide('file.FileSystemFlags');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The create property on the `file.FileSystemFlags` dictionary
 *   used to indicate whether or not the file should be created if
 *   missing. FileSystemFlags is only used when calling `file.FileSystemDirectoryEntry.getFile()`
 *   `file.FileSystemDirectoryEntry.getDirectory()`.
 * 
 *   `fileSystemFlags.create = booleanValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/create`
 */
file.FileSystemFlags.create = (function file$FileSystemFlags$create(this$){
return this$.create();
});
/**
 * Property.
 * 
 *   The create property on the `file.FileSystemFlags` dictionary
 *   used to indicate whether or not the file should be created if
 *   missing. FileSystemFlags is only used when calling `file.FileSystemDirectoryEntry.getFile()`
 *   `file.FileSystemDirectoryEntry.getDirectory()`.
 * 
 *   `fileSystemFlags.create = booleanValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/create`
 */
file.FileSystemFlags.set_create_BANG_ = (function file$FileSystemFlags$set_create_BANG_(this$,val){
return (this$["create"] = val);
});
/**
 * Property.
 * 
 *   The exclusive property on the `file.FileSystemFlags` dictionary
 *   used in tandem with the create property to determine whether
 *   not it's acceptable to require that the file not already exist
 *   the reference to it is created by calling `file.FileSystemDirectoryEntry.getFile()`
 *   `file.FileSystemDirectoryEntry.getDirectory()`.
 * 
 *   `fileSystemFlags.exclusive = booleanValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/exclusive`
 */
file.FileSystemFlags.exclusive = (function file$FileSystemFlags$exclusive(this$){
return this$.exclusive();
});
/**
 * Property.
 * 
 *   The exclusive property on the `file.FileSystemFlags` dictionary
 *   used in tandem with the create property to determine whether
 *   not it's acceptable to require that the file not already exist
 *   the reference to it is created by calling `file.FileSystemDirectoryEntry.getFile()`
 *   `file.FileSystemDirectoryEntry.getDirectory()`.
 * 
 *   `fileSystemFlags.exclusive = booleanValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags/exclusive`
 */
file.FileSystemFlags.set_exclusive_BANG_ = (function file$FileSystemFlags$set_exclusive_BANG_(this$,val){
return (this$["exclusive"] = val);
});

//# sourceMappingURL=FileSystemFlags.js.map?rel=1565798805230
