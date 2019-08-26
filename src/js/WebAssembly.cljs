(ns js.WebAssembly
  "The WebAssembly JavaScript object acts as the namespace for all
  functionality."
  (:refer-clojure :exclude []))

(defn instantiate
  "Method.

  The WebAssembly.instantiate() function allows you to compile
  instantiate WebAssembly code. This function has two overloads:

  ``

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate`"
  [this ]
  (-> this (.instantiate)))

(defn instantiate-streaming
  "Method.

  The WebAssembly.instantiateStreaming() function compiles and
  a WebAssembly module directly from a streamed underlying source.
  is the most efficient, optimized way to load wasm code.

  `Promise<ResultObject> WebAssembly.instantiateStreaming(source, importObject);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming`"
  [this source import-object]
  (-> this (.instantiateStreaming source import-object)))

(defn compile
  "Method.

  The WebAssembly.compile() function compiles a `WebAssembly.Module`
  WebAssembly binary code. This function is useful if it is necessary
  a compile a module before it can be instantiated (otherwise,
  `WebAssembly.instantiate()` function should be used).

  `Promise<WebAssembly.Module> WebAssembly.compile(bufferSource);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile`"
  [this buffer-source]
  (-> this (.compile buffer-source)))

(defn compile-streaming
  "Method.

  The WebAssembly.compileStreaming() function compiles a `WebAssembly.Module`
  from a streamed underlying source. This function is useful if
  is necessary to a compile a module before it can be instantiated
  the `WebAssembly.instantiateStreaming()` function should be used).

  `Promise<WebAssembly.Module> WebAssembly.compileStreaming(source);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming`"
  [this source]
  (-> this (.compileStreaming source)))

(defn validate
  "Method.

  The WebAssembly.validate() function validates a given typed array
  WebAssembly binary code, returning whether the bytes form a valid
  module (true) or not (false).

  `WebAssembly.validate(bufferSource);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate`"
  [this buffer-source]
  (-> this (.validate buffer-source)))

