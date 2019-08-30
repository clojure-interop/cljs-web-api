(ns web.permissions.Permissions
  "The Permissions interface of the Permissions API provides the
  Permission API functionality, such as methods for querying and
  permissions"
  (:refer-clojure :exclude []))

(defn query
  "Method.

  [Experimental]

  The Permissions.query() method of the `web.permissions.Permissions`
  returns the state of a user permission on the global scope.

  `navigator.permissions.query(PermissionDescriptor).then(function(permissionStatus) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query`"
  [this permission-descriptor]
  (-> this (.query permission-descriptor)))

(defn request
  "Method.

  Requests permission to use a given API. This is not currently
  in any browser."
  [this & args]
  (-> this .-request (.apply this (clj->js args))))

(defn revoke
  "Method.

  [Experimental]

  The Permissions.revoke() method of the `web.permissions.Permissions`
  reverts a currently set permission back to its default state,
  is usually prompt.

  `This method is called on the global `web.permissions.Permissions` object `navigator.permissions`.



  var revokePromise = navigator.permissions.revoke(descriptor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke`"
  [this & args]
  (-> this .-revoke (.apply this (clj->js args))))

