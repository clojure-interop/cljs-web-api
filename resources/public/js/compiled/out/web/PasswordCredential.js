// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PasswordCredential');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PasswordCredential constructor creates a new `web.PasswordCredential` object.
 * 
 *   Either of the following:
 * 
 * 
 *   passwordCredentialData
 *   A PasswordCredentialData dictionary containing the following fields:
 * 
 *   iconURL: (Optional) the URL of a user's avatar image.
 *   id: The ID of the user signing in.
 *   name: (Optional) The name of the user signing in.
 *   password: The password of the user signing in.
 * 
 * 
 *   htmlFormElement
 *   A reference to an `html.HTMLFormElement` with appropriate input fields. The form should, at the very least, contain an id and password. It could also require a CSRF token.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/PasswordCredential`
 */
web.PasswordCredential.constructor$ = PasswordCredential;
/**
 * Property.
 * 
 *   The additionalData property of the `web.PasswordCredential` interface
 *   one of a `web.FormData` instance, a `web.URLSearchParams` instance,
 *   null.
 * 
 *   `passwordCredential.additionalData = formData
 *   formData = passwordCredential.additionalData
 *   passwordCredential.additionalData = urlSearchParams
 *   ulrSearchParams = passwordCredential.additionalData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/additionalData`
 */
web.PasswordCredential.additional_data = (function web$PasswordCredential$additional_data(this$){
return this$.additionalData();
});
/**
 * Property.
 * 
 *   The additionalData property of the `web.PasswordCredential` interface
 *   one of a `web.FormData` instance, a `web.URLSearchParams` instance,
 *   null.
 * 
 *   `passwordCredential.additionalData = formData
 *   formData = passwordCredential.additionalData
 *   passwordCredential.additionalData = urlSearchParams
 *   ulrSearchParams = passwordCredential.additionalData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/additionalData`
 */
web.PasswordCredential.set_additional_data_BANG_ = (function web$PasswordCredential$set_additional_data_BANG_(this$,val){
return (this$["additionalData"] = val);
});
/**
 * Property.
 * 
 *   The iconURL read-only property of the `web.PasswordCredential`
 *   returns a `web.USVString` containing a URL pointing to an image
 *   an icon. This image is intended for display in a credential chooser.
 *   URL must be accessible without authentication.
 * 
 *   `url =passwordCredential.iconURL`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/iconURL`
 */
web.PasswordCredential.icon_url = (function web$PasswordCredential$icon_url(this$){
return this$.iconURL();
});
/**
 * Property.
 * 
 *   The iconURL read-only property of the `web.PasswordCredential`
 *   returns a `web.USVString` containing a URL pointing to an image
 *   an icon. This image is intended for display in a credential chooser.
 *   URL must be accessible without authentication.
 * 
 *   `url =passwordCredential.iconURL`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/iconURL`
 */
web.PasswordCredential.set_icon_url_BANG_ = (function web$PasswordCredential$set_icon_url_BANG_(this$,val){
return (this$["iconURL"] = val);
});
/**
 * Property.
 * 
 *   The idName property of the `web.PasswordCredential` interface
 *   a `web.USVString`, representing the name that will be used for
 *   ID field
 * 
 *   `var idName = PasswordCredential.idName
 *   PasswordCredential.idName = \"userID\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/idName`
 */
web.PasswordCredential.id_name = (function web$PasswordCredential$id_name(this$){
return this$.idName();
});
/**
 * Property.
 * 
 *   The idName property of the `web.PasswordCredential` interface
 *   a `web.USVString`, representing the name that will be used for
 *   ID field
 * 
 *   `var idName = PasswordCredential.idName
 *   PasswordCredential.idName = \"userID\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/idName`
 */
web.PasswordCredential.set_id_name_BANG_ = (function web$PasswordCredential$set_id_name_BANG_(this$,val){
return (this$["idName"] = val);
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.PasswordCredential` interface
 *   a `web.USVSTring` containing a human-readable public name for
 *   in a credential chooser.
 * 
 *   `name =passwordCredential.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/name`
 */
web.PasswordCredential.name = (function web$PasswordCredential$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.PasswordCredential` interface
 *   a `web.USVSTring` containing a human-readable public name for
 *   in a credential chooser.
 * 
 *   `name =passwordCredential.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/name`
 */
web.PasswordCredential.set_name_BANG_ = (function web$PasswordCredential$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The password read-only property of the `web.PasswordCredential`
 *   returns a `web.USVString` containing the password of the credential.
 * 
 *   `password =passwordCredential.password`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/password`
 */
web.PasswordCredential.password = (function web$PasswordCredential$password(this$){
return this$.password();
});
/**
 * Property.
 * 
 *   The password read-only property of the `web.PasswordCredential`
 *   returns a `web.USVString` containing the password of the credential.
 * 
 *   `password =passwordCredential.password`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/password`
 */
web.PasswordCredential.set_password_BANG_ = (function web$PasswordCredential$set_password_BANG_(this$,val){
return (this$["password"] = val);
});
/**
 * Property.
 * 
 *   The passwordName property of the `web.PasswordCredential` interface
 *   a `web.USVString`, depicting the name used by the password field
 * 
 *   `var passwordName = PasswordCredential.passwordName
 *   PasswordCredential.passwordName = \"passcode\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/passwordName`
 */
web.PasswordCredential.password_name = (function web$PasswordCredential$password_name(this$){
return this$.passwordName();
});
/**
 * Property.
 * 
 *   The passwordName property of the `web.PasswordCredential` interface
 *   a `web.USVString`, depicting the name used by the password field
 * 
 *   `var passwordName = PasswordCredential.passwordName
 *   PasswordCredential.passwordName = \"passcode\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/passwordName`
 */
web.PasswordCredential.set_password_name_BANG_ = (function web$PasswordCredential$set_password_name_BANG_(this$,val){
return (this$["passwordName"] = val);
});

//# sourceMappingURL=PasswordCredential.js.map?rel=1565798814350
