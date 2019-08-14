(ns web.Permissions
  "The Permissions interface of the Permissions API provides the
  Permission API functionality, such as methods for querying and
  permissions"
  (:refer-clojure :exclude []))

(defn query
  "Method.

  The Permissions.query() method of the `web.Permissions` interface
  the state of a user permission on the global scope.

  `navigator.permissions.query(PermissionDescriptor).then(function(permissionStatus) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query`"
  [this permission-descriptor]
  (-> this (.query permission-descriptor)))

(defn revoke
  "Method.

  The Permissions.revoke() method of the `web.Permissions` interface
  a currently set permission back to its default state, which is
  prompt.

  `This method is called on the global `web.Permissions` object `web.navigator.permissions`.



  var revokePromise = navigator.permissions.revoke(descriptor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke`"
  [this & args]
  (apply (-> this .-revoke) (concat [this] args)))

