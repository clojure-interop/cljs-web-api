// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SubtleCrypto');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The decrypt() method of the `web.SubtleCrypto` interface decrypts
 *   encrypted data. It takes as arguments a key to decrypt with,
 *   optional extra parameters, and the data to decrypt (also known
 *   \"ciphertext\"). It returns a `web.Promise` which will be fulfilled
 *   the decrypted data (also known as \"plaintext\").
 * 
 *   `const result = crypto.subtle.decrypt(algorithm, key, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt`
 */
web.SubtleCrypto.decrypt = (function web$SubtleCrypto$decrypt(this$,algorithm,key,data){
return this$.decrypt(algorithm,key,data);
});
/**
 * Method.
 * 
 *   The deriveBits() method of the `web.SubtleCrypto` interface can
 *   used to derive an array of bits from a base key.
 * 
 *   `const result = crypto.subtle.deriveBits(
 *   algorithm,
 *   baseKey,
 *   length
 *   );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits`
 */
web.SubtleCrypto.derive_bits = (function web$SubtleCrypto$derive_bits(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44048 = arguments.length;
var i__42557__auto___44049 = (0);
while(true){
if((i__42557__auto___44049 < len__42556__auto___44048)){
args__42563__auto__.push((arguments[i__42557__auto___44049]));

var G__44050 = (i__42557__auto___44049 + (1));
i__42557__auto___44049 = G__44050;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SubtleCrypto.derive_bits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SubtleCrypto.derive_bits.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.deriveBits,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SubtleCrypto.derive_bits.cljs$lang$maxFixedArity = (1);

web.SubtleCrypto.derive_bits.cljs$lang$applyTo = (function (seq44046){
var G__44047 = cljs.core.first.call(null,seq44046);
var seq44046__$1 = cljs.core.next.call(null,seq44046);
return web.SubtleCrypto.derive_bits.cljs$core$IFn$_invoke$arity$variadic(G__44047,seq44046__$1);
});

/**
 * Method.
 * 
 *   The deriveKey() method of the `web.SubtleCrypto` interface can
 *   used to derive a secret key from a master key.
 * 
 *   `const result = crypto.subtle.deriveKey(
 *   algorithm,
 *   baseKey,
 *   derivedKeyAlgorithm,
 *   extractable,
 *   keyUsages
 *   );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey`
 */
web.SubtleCrypto.derive_key = (function web$SubtleCrypto$derive_key(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44053 = arguments.length;
var i__42557__auto___44054 = (0);
while(true){
if((i__42557__auto___44054 < len__42556__auto___44053)){
args__42563__auto__.push((arguments[i__42557__auto___44054]));

var G__44055 = (i__42557__auto___44054 + (1));
i__42557__auto___44054 = G__44055;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SubtleCrypto.derive_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SubtleCrypto.derive_key.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.deriveKey,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SubtleCrypto.derive_key.cljs$lang$maxFixedArity = (1);

web.SubtleCrypto.derive_key.cljs$lang$applyTo = (function (seq44051){
var G__44052 = cljs.core.first.call(null,seq44051);
var seq44051__$1 = cljs.core.next.call(null,seq44051);
return web.SubtleCrypto.derive_key.cljs$core$IFn$_invoke$arity$variadic(G__44052,seq44051__$1);
});

/**
 * Method.
 * 
 *   The digest() method of the `web.SubtleCrypto` interface generates
 *   digest of the given data. A digest is a short fixed-length value
 *   from some variable-length input. Cryptographic digests should
 *   collision-resistance, meaning that it's hard to come up with
 *   different inputs that have the same digest value.
 * 
 *   `const digest = crypto.subtle.digest(algorithm, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest`
 */
web.SubtleCrypto.digest = (function web$SubtleCrypto$digest(this$,algorithm,data){
return this$.digest(algorithm,data);
});
/**
 * Method.
 * 
 *   The encrypt() method of the `web.SubtleCrypto` interface encrypts
 * 
 *   `const result = crypto.subtle.encrypt(algorithm, key, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt`
 */
web.SubtleCrypto.encrypt = (function web$SubtleCrypto$encrypt(this$,algorithm,key,data){
return this$.encrypt(algorithm,key,data);
});
/**
 * Method.
 * 
 *   The exportKey() method of the `web.SubtleCrypto` interface exports
 *   key: that is, it takes as input a `web.CryptoKey` object and
 *   you the key in an external, portable format.
 * 
 *   `const result = crypto.subtle.exportKey(format, key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey`
 */
web.SubtleCrypto.export_key = (function web$SubtleCrypto$export_key(this$,format,key){
return this$.exportKey(format,key);
});
/**
 * Method.
 * 
 *   Use the generateKey() method of the `web.SubtleCrypto` interface
 *   generate a new key (for symmetric algorithms) or key pair (for
 *   algorithms).
 * 
 *   `const result = crypto.subtle.generateKey(algorithm, extractable, keyUsages);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey`
 */
web.SubtleCrypto.generate_key = (function web$SubtleCrypto$generate_key(this$,algorithm,extractable,key_usages){
return this$.generateKey(algorithm,extractable,key_usages);
});
/**
 * Method.
 * 
 *   The importKey() method of the `web.SubtleCrypto` interface imports
 *   key: that is, it takes as input a key in an external, portable
 *   and gives you a `web.CryptoKey` object that you can use in the
 *   Crypto API.
 * 
 *   `const result = crypto.subtle.importKey(
 *   format,
 *   keyData,
 *   algorithm,
 *   extractable,
 *   usages
 *   );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey`
 */
web.SubtleCrypto.import_key = (function web$SubtleCrypto$import_key(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44058 = arguments.length;
var i__42557__auto___44059 = (0);
while(true){
if((i__42557__auto___44059 < len__42556__auto___44058)){
args__42563__auto__.push((arguments[i__42557__auto___44059]));

var G__44060 = (i__42557__auto___44059 + (1));
i__42557__auto___44059 = G__44060;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SubtleCrypto.import_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SubtleCrypto.import_key.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.importKey,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SubtleCrypto.import_key.cljs$lang$maxFixedArity = (1);

web.SubtleCrypto.import_key.cljs$lang$applyTo = (function (seq44056){
var G__44057 = cljs.core.first.call(null,seq44056);
var seq44056__$1 = cljs.core.next.call(null,seq44056);
return web.SubtleCrypto.import_key.cljs$core$IFn$_invoke$arity$variadic(G__44057,seq44056__$1);
});

/**
 * Method.
 * 
 *   The sign() method of the `web.SubtleCrypto` interface generates
 *   digital signature.
 * 
 *   `const signature = crypto.subtle.sign(algorithm, key, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign`
 */
web.SubtleCrypto.sign = (function web$SubtleCrypto$sign(this$,algorithm,key,data){
return this$.sign(algorithm,key,data);
});
/**
 * Method.
 * 
 *   The unwrapKey() method of the `web.SubtleCrypto` interface \"unwraps\"
 *   key. This means that it takes as its input a key that has been
 *   and then encrypted (also called \"wrapped\"). It decrypts the
 *   and then imports it, returning a `web.CryptoKey` object that
 *   be used in the Web Crypto API.
 * 
 *   `const result = crypto.subtle.unwrapKey(
 *   format,
 *   wrappedKey,
 *   unwrappingKey,
 *   unwrapAlgo,
 *   unwrappedKeyAlgo,
 *   extractable,
 *   keyUsages
 *   );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/unwrapKey`
 */
web.SubtleCrypto.unwrap_key = (function web$SubtleCrypto$unwrap_key(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44063 = arguments.length;
var i__42557__auto___44064 = (0);
while(true){
if((i__42557__auto___44064 < len__42556__auto___44063)){
args__42563__auto__.push((arguments[i__42557__auto___44064]));

var G__44065 = (i__42557__auto___44064 + (1));
i__42557__auto___44064 = G__44065;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SubtleCrypto.unwrap_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SubtleCrypto.unwrap_key.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.unwrapKey,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SubtleCrypto.unwrap_key.cljs$lang$maxFixedArity = (1);

web.SubtleCrypto.unwrap_key.cljs$lang$applyTo = (function (seq44061){
var G__44062 = cljs.core.first.call(null,seq44061);
var seq44061__$1 = cljs.core.next.call(null,seq44061);
return web.SubtleCrypto.unwrap_key.cljs$core$IFn$_invoke$arity$variadic(G__44062,seq44061__$1);
});

/**
 * Method.
 * 
 *   The verify() method of the `web.SubtleCrypto` interface verifies
 *   digital signature.
 * 
 *   `const result = crypto.subtle.verify(algorithm, key, signature, data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/verify`
 */
web.SubtleCrypto.verify = (function web$SubtleCrypto$verify(this$,algorithm,key,signature,data){
return this$.verify(algorithm,key,signature,data);
});
/**
 * Method.
 * 
 *   The wrapKey() method of the `web.SubtleCrypto` interface \"wraps\"
 *   key. This means that it exports the key in an external, portable
 *   then encrypts the exported key. Wrapping a key helps protect
 *   in untrusted environments, such as inside an otherwise unprotected
 *   store or in transmission over an unprotected network.
 * 
 *   `const result = crypto.subtle.wrapKey(
 *   format,
 *   key,
 *   wrappingKey,
 *   wrapAlgo
 *   );`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/wrapKey`
 */
web.SubtleCrypto.wrap_key = (function web$SubtleCrypto$wrap_key(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44068 = arguments.length;
var i__42557__auto___44069 = (0);
while(true){
if((i__42557__auto___44069 < len__42556__auto___44068)){
args__42563__auto__.push((arguments[i__42557__auto___44069]));

var G__44070 = (i__42557__auto___44069 + (1));
i__42557__auto___44069 = G__44070;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SubtleCrypto.wrap_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SubtleCrypto.wrap_key.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.wrapKey,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SubtleCrypto.wrap_key.cljs$lang$maxFixedArity = (1);

web.SubtleCrypto.wrap_key.cljs$lang$applyTo = (function (seq44066){
var G__44067 = cljs.core.first.call(null,seq44066);
var seq44066__$1 = cljs.core.next.call(null,seq44066);
return web.SubtleCrypto.wrap_key.cljs$core$IFn$_invoke$arity$variadic(G__44067,seq44066__$1);
});


//# sourceMappingURL=SubtleCrypto.js.map?rel=1565798811141
