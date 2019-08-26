(ns web.idb.IDBTransactionSync
  "The IDBTransactionSync interface of the IndexedDB API provides
  synchronous transaction on a database. When an application creates
  IDBTransactionSync object, it blocks until the browser is able
  reserve the require database objects."
  (:refer-clojure :exclude []))

(defn non-transient-err
  "Method.

  If this transaction has already been committed or aborted."
  [this & args]
  (apply (-> this .-NON_TRANSIENT_ERR) (concat [this] args)))

(defn recoverable-err
  "Method.

  If this transaction's scope is dynamic, and the browser cannot
  all of the changes due to another transaction."
  [this & args]
  (apply (-> this .-RECOVERABLE_ERR) (concat [this] args)))

(defn idb-object-store-sync
  "Method.

  An object for accessing the requested object store."
  [this & args]
  (apply (-> this .-IDBObjectStoreSync) (concat [this] args)))

(defn not-found-err
  "Method.

  If the requested object store is not in this transaction's scope."
  [this & args]
  (apply (-> this .-NOT_FOUND_ERR) (concat [this] args)))

