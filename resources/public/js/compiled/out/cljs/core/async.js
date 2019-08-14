// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45954 = arguments.length;
switch (G__45954) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45955 = (function (f,blockable,meta45956){
this.f = f;
this.blockable = blockable;
this.meta45956 = meta45956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45957,meta45956__$1){
var self__ = this;
var _45957__$1 = this;
return (new cljs.core.async.t_cljs$core$async45955(self__.f,self__.blockable,meta45956__$1));
});

cljs.core.async.t_cljs$core$async45955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45957){
var self__ = this;
var _45957__$1 = this;
return self__.meta45956;
});

cljs.core.async.t_cljs$core$async45955.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45956","meta45956",374910385,null)], null);
});

cljs.core.async.t_cljs$core$async45955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45955";

cljs.core.async.t_cljs$core$async45955.cljs$lang$ctorPrWriter = (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async45955");
});

cljs.core.async.__GT_t_cljs$core$async45955 = (function cljs$core$async$__GT_t_cljs$core$async45955(f__$1,blockable__$1,meta45956){
return (new cljs.core.async.t_cljs$core$async45955(f__$1,blockable__$1,meta45956));
});

}

return (new cljs.core.async.t_cljs$core$async45955(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45961 = arguments.length;
switch (G__45961) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45964 = arguments.length;
switch (G__45964) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45967 = arguments.length;
switch (G__45967) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45969 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45969);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45969,ret){
return (function (){
return fn1.call(null,val_45969);
});})(val_45969,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45971 = arguments.length;
switch (G__45971) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__42332__auto___45973 = n;
var x_45974 = (0);
while(true){
if((x_45974 < n__42332__auto___45973)){
(a[x_45974] = (0));

var G__45975 = (x_45974 + (1));
x_45974 = G__45975;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45976 = (i + (1));
i = G__45976;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45977 = (function (flag,meta45978){
this.flag = flag;
this.meta45978 = meta45978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45979,meta45978__$1){
var self__ = this;
var _45979__$1 = this;
return (new cljs.core.async.t_cljs$core$async45977(self__.flag,meta45978__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45979){
var self__ = this;
var _45979__$1 = this;
return self__.meta45978;
});})(flag))
;

cljs.core.async.t_cljs$core$async45977.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45977.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45978","meta45978",-1670230785,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45977";

cljs.core.async.t_cljs$core$async45977.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async45977");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45977 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45977(flag__$1,meta45978){
return (new cljs.core.async.t_cljs$core$async45977(flag__$1,meta45978));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45977(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45980 = (function (flag,cb,meta45981){
this.flag = flag;
this.cb = cb;
this.meta45981 = meta45981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45982,meta45981__$1){
var self__ = this;
var _45982__$1 = this;
return (new cljs.core.async.t_cljs$core$async45980(self__.flag,self__.cb,meta45981__$1));
});

cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45982){
var self__ = this;
var _45982__$1 = this;
return self__.meta45981;
});

cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45981","meta45981",1662951861,null)], null);
});

cljs.core.async.t_cljs$core$async45980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45980";

cljs.core.async.t_cljs$core$async45980.cljs$lang$ctorPrWriter = (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async45980");
});

cljs.core.async.__GT_t_cljs$core$async45980 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45980(flag__$1,cb__$1,meta45981){
return (new cljs.core.async.t_cljs$core$async45980(flag__$1,cb__$1,meta45981));
});

}

return (new cljs.core.async.t_cljs$core$async45980(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45983_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45983_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45984_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41385__auto__ = wport;
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45985 = (i + (1));
i = G__45985;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41385__auto__ = ret;
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__41373__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41373__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41373__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___45991 = arguments.length;
var i__42557__auto___45992 = (0);
while(true){
if((i__42557__auto___45992 < len__42556__auto___45991)){
args__42563__auto__.push((arguments[i__42557__auto___45992]));

var G__45993 = (i__42557__auto___45992 + (1));
i__42557__auto___45992 = G__45993;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45988){
var map__45989 = p__45988;
var map__45989__$1 = ((((!((map__45989 == null)))?((((map__45989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45989):map__45989);
var opts = map__45989__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45986){
var G__45987 = cljs.core.first.call(null,seq45986);
var seq45986__$1 = cljs.core.next.call(null,seq45986);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45987,seq45986__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45995 = arguments.length;
switch (G__45995) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45908__auto___46041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___46041){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___46041){
return (function (state_46019){
var state_val_46020 = (state_46019[(1)]);
if((state_val_46020 === (7))){
var inst_46015 = (state_46019[(2)]);
var state_46019__$1 = state_46019;
var statearr_46021_46042 = state_46019__$1;
(statearr_46021_46042[(2)] = inst_46015);

(statearr_46021_46042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (1))){
var state_46019__$1 = state_46019;
var statearr_46022_46043 = state_46019__$1;
(statearr_46022_46043[(2)] = null);

(statearr_46022_46043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (4))){
var inst_45998 = (state_46019[(7)]);
var inst_45998__$1 = (state_46019[(2)]);
var inst_45999 = (inst_45998__$1 == null);
var state_46019__$1 = (function (){var statearr_46023 = state_46019;
(statearr_46023[(7)] = inst_45998__$1);

return statearr_46023;
})();
if(cljs.core.truth_(inst_45999)){
var statearr_46024_46044 = state_46019__$1;
(statearr_46024_46044[(1)] = (5));

} else {
var statearr_46025_46045 = state_46019__$1;
(statearr_46025_46045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (13))){
var state_46019__$1 = state_46019;
var statearr_46026_46046 = state_46019__$1;
(statearr_46026_46046[(2)] = null);

(statearr_46026_46046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (6))){
var inst_45998 = (state_46019[(7)]);
var state_46019__$1 = state_46019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46019__$1,(11),to,inst_45998);
} else {
if((state_val_46020 === (3))){
var inst_46017 = (state_46019[(2)]);
var state_46019__$1 = state_46019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46019__$1,inst_46017);
} else {
if((state_val_46020 === (12))){
var state_46019__$1 = state_46019;
var statearr_46027_46047 = state_46019__$1;
(statearr_46027_46047[(2)] = null);

(statearr_46027_46047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (2))){
var state_46019__$1 = state_46019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46019__$1,(4),from);
} else {
if((state_val_46020 === (11))){
var inst_46008 = (state_46019[(2)]);
var state_46019__$1 = state_46019;
if(cljs.core.truth_(inst_46008)){
var statearr_46028_46048 = state_46019__$1;
(statearr_46028_46048[(1)] = (12));

} else {
var statearr_46029_46049 = state_46019__$1;
(statearr_46029_46049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (9))){
var state_46019__$1 = state_46019;
var statearr_46030_46050 = state_46019__$1;
(statearr_46030_46050[(2)] = null);

(statearr_46030_46050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (5))){
var state_46019__$1 = state_46019;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46031_46051 = state_46019__$1;
(statearr_46031_46051[(1)] = (8));

} else {
var statearr_46032_46052 = state_46019__$1;
(statearr_46032_46052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (14))){
var inst_46013 = (state_46019[(2)]);
var state_46019__$1 = state_46019;
var statearr_46033_46053 = state_46019__$1;
(statearr_46033_46053[(2)] = inst_46013);

(statearr_46033_46053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (10))){
var inst_46005 = (state_46019[(2)]);
var state_46019__$1 = state_46019;
var statearr_46034_46054 = state_46019__$1;
(statearr_46034_46054[(2)] = inst_46005);

(statearr_46034_46054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46020 === (8))){
var inst_46002 = cljs.core.async.close_BANG_.call(null,to);
var state_46019__$1 = state_46019;
var statearr_46035_46055 = state_46019__$1;
(statearr_46035_46055[(2)] = inst_46002);

(statearr_46035_46055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___46041))
;
return ((function (switch__45820__auto__,c__45908__auto___46041){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_46036 = [null,null,null,null,null,null,null,null];
(statearr_46036[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_46036[(1)] = (1));

return statearr_46036;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_46019){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46037){if((e46037 instanceof Object)){
var ex__45824__auto__ = e46037;
var statearr_46038_46056 = state_46019;
(statearr_46038_46056[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46057 = state_46019;
state_46019 = G__46057;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_46019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_46019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___46041))
})();
var state__45910__auto__ = (function (){var statearr_46039 = f__45909__auto__.call(null);
(statearr_46039[(6)] = c__45908__auto___46041);

return statearr_46039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___46041))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46058){
var vec__46059 = p__46058;
var v = cljs.core.nth.call(null,vec__46059,(0),null);
var p = cljs.core.nth.call(null,vec__46059,(1),null);
var job = vec__46059;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45908__auto___46230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___46230,res,vec__46059,v,p,job,jobs,results){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___46230,res,vec__46059,v,p,job,jobs,results){
return (function (state_46066){
var state_val_46067 = (state_46066[(1)]);
if((state_val_46067 === (1))){
var state_46066__$1 = state_46066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46066__$1,(2),res,v);
} else {
if((state_val_46067 === (2))){
var inst_46063 = (state_46066[(2)]);
var inst_46064 = cljs.core.async.close_BANG_.call(null,res);
var state_46066__$1 = (function (){var statearr_46068 = state_46066;
(statearr_46068[(7)] = inst_46063);

return statearr_46068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46066__$1,inst_46064);
} else {
return null;
}
}
});})(c__45908__auto___46230,res,vec__46059,v,p,job,jobs,results))
;
return ((function (switch__45820__auto__,c__45908__auto___46230,res,vec__46059,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0 = (function (){
var statearr_46069 = [null,null,null,null,null,null,null,null];
(statearr_46069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__);

(statearr_46069[(1)] = (1));

return statearr_46069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1 = (function (state_46066){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46070){if((e46070 instanceof Object)){
var ex__45824__auto__ = e46070;
var statearr_46071_46231 = state_46066;
(statearr_46071_46231[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46232 = state_46066;
state_46066 = G__46232;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = function(state_46066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1.call(this,state_46066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___46230,res,vec__46059,v,p,job,jobs,results))
})();
var state__45910__auto__ = (function (){var statearr_46072 = f__45909__auto__.call(null);
(statearr_46072[(6)] = c__45908__auto___46230);

return statearr_46072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___46230,res,vec__46059,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46073){
var vec__46074 = p__46073;
var v = cljs.core.nth.call(null,vec__46074,(0),null);
var p = cljs.core.nth.call(null,vec__46074,(1),null);
var job = vec__46074;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__42332__auto___46233 = n;
var __46234 = (0);
while(true){
if((__46234 < n__42332__auto___46233)){
var G__46077_46235 = type;
var G__46077_46236__$1 = (((G__46077_46235 instanceof cljs.core.Keyword))?G__46077_46235.fqn:null);
switch (G__46077_46236__$1) {
case "compute":
var c__45908__auto___46238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46234,c__45908__auto___46238,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (__46234,c__45908__auto___46238,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async){
return (function (state_46090){
var state_val_46091 = (state_46090[(1)]);
if((state_val_46091 === (1))){
var state_46090__$1 = state_46090;
var statearr_46092_46239 = state_46090__$1;
(statearr_46092_46239[(2)] = null);

(statearr_46092_46239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46091 === (2))){
var state_46090__$1 = state_46090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46090__$1,(4),jobs);
} else {
if((state_val_46091 === (3))){
var inst_46088 = (state_46090[(2)]);
var state_46090__$1 = state_46090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46090__$1,inst_46088);
} else {
if((state_val_46091 === (4))){
var inst_46080 = (state_46090[(2)]);
var inst_46081 = process.call(null,inst_46080);
var state_46090__$1 = state_46090;
if(cljs.core.truth_(inst_46081)){
var statearr_46093_46240 = state_46090__$1;
(statearr_46093_46240[(1)] = (5));

} else {
var statearr_46094_46241 = state_46090__$1;
(statearr_46094_46241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46091 === (5))){
var state_46090__$1 = state_46090;
var statearr_46095_46242 = state_46090__$1;
(statearr_46095_46242[(2)] = null);

(statearr_46095_46242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46091 === (6))){
var state_46090__$1 = state_46090;
var statearr_46096_46243 = state_46090__$1;
(statearr_46096_46243[(2)] = null);

(statearr_46096_46243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46091 === (7))){
var inst_46086 = (state_46090[(2)]);
var state_46090__$1 = state_46090;
var statearr_46097_46244 = state_46090__$1;
(statearr_46097_46244[(2)] = inst_46086);

(statearr_46097_46244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46234,c__45908__auto___46238,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async))
;
return ((function (__46234,switch__45820__auto__,c__45908__auto___46238,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0 = (function (){
var statearr_46098 = [null,null,null,null,null,null,null];
(statearr_46098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__);

(statearr_46098[(1)] = (1));

return statearr_46098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1 = (function (state_46090){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46099){if((e46099 instanceof Object)){
var ex__45824__auto__ = e46099;
var statearr_46100_46245 = state_46090;
(statearr_46100_46245[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46246 = state_46090;
state_46090 = G__46246;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = function(state_46090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1.call(this,state_46090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__;
})()
;})(__46234,switch__45820__auto__,c__45908__auto___46238,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async))
})();
var state__45910__auto__ = (function (){var statearr_46101 = f__45909__auto__.call(null);
(statearr_46101[(6)] = c__45908__auto___46238);

return statearr_46101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(__46234,c__45908__auto___46238,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async))
);


break;
case "async":
var c__45908__auto___46247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46234,c__45908__auto___46247,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (__46234,c__45908__auto___46247,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async){
return (function (state_46114){
var state_val_46115 = (state_46114[(1)]);
if((state_val_46115 === (1))){
var state_46114__$1 = state_46114;
var statearr_46116_46248 = state_46114__$1;
(statearr_46116_46248[(2)] = null);

(statearr_46116_46248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46115 === (2))){
var state_46114__$1 = state_46114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46114__$1,(4),jobs);
} else {
if((state_val_46115 === (3))){
var inst_46112 = (state_46114[(2)]);
var state_46114__$1 = state_46114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46114__$1,inst_46112);
} else {
if((state_val_46115 === (4))){
var inst_46104 = (state_46114[(2)]);
var inst_46105 = async.call(null,inst_46104);
var state_46114__$1 = state_46114;
if(cljs.core.truth_(inst_46105)){
var statearr_46117_46249 = state_46114__$1;
(statearr_46117_46249[(1)] = (5));

} else {
var statearr_46118_46250 = state_46114__$1;
(statearr_46118_46250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46115 === (5))){
var state_46114__$1 = state_46114;
var statearr_46119_46251 = state_46114__$1;
(statearr_46119_46251[(2)] = null);

(statearr_46119_46251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46115 === (6))){
var state_46114__$1 = state_46114;
var statearr_46120_46252 = state_46114__$1;
(statearr_46120_46252[(2)] = null);

(statearr_46120_46252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46115 === (7))){
var inst_46110 = (state_46114[(2)]);
var state_46114__$1 = state_46114;
var statearr_46121_46253 = state_46114__$1;
(statearr_46121_46253[(2)] = inst_46110);

(statearr_46121_46253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46234,c__45908__auto___46247,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async))
;
return ((function (__46234,switch__45820__auto__,c__45908__auto___46247,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0 = (function (){
var statearr_46122 = [null,null,null,null,null,null,null];
(statearr_46122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__);

(statearr_46122[(1)] = (1));

return statearr_46122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1 = (function (state_46114){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46123){if((e46123 instanceof Object)){
var ex__45824__auto__ = e46123;
var statearr_46124_46254 = state_46114;
(statearr_46124_46254[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46255 = state_46114;
state_46114 = G__46255;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = function(state_46114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1.call(this,state_46114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__;
})()
;})(__46234,switch__45820__auto__,c__45908__auto___46247,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async))
})();
var state__45910__auto__ = (function (){var statearr_46125 = f__45909__auto__.call(null);
(statearr_46125[(6)] = c__45908__auto___46247);

return statearr_46125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(__46234,c__45908__auto___46247,G__46077_46235,G__46077_46236__$1,n__42332__auto___46233,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46077_46236__$1)].join('')));

}

var G__46256 = (__46234 + (1));
__46234 = G__46256;
continue;
} else {
}
break;
}

var c__45908__auto___46257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___46257,jobs,results,process,async){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___46257,jobs,results,process,async){
return (function (state_46147){
var state_val_46148 = (state_46147[(1)]);
if((state_val_46148 === (1))){
var state_46147__$1 = state_46147;
var statearr_46149_46258 = state_46147__$1;
(statearr_46149_46258[(2)] = null);

(statearr_46149_46258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46148 === (2))){
var state_46147__$1 = state_46147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46147__$1,(4),from);
} else {
if((state_val_46148 === (3))){
var inst_46145 = (state_46147[(2)]);
var state_46147__$1 = state_46147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46147__$1,inst_46145);
} else {
if((state_val_46148 === (4))){
var inst_46128 = (state_46147[(7)]);
var inst_46128__$1 = (state_46147[(2)]);
var inst_46129 = (inst_46128__$1 == null);
var state_46147__$1 = (function (){var statearr_46150 = state_46147;
(statearr_46150[(7)] = inst_46128__$1);

return statearr_46150;
})();
if(cljs.core.truth_(inst_46129)){
var statearr_46151_46259 = state_46147__$1;
(statearr_46151_46259[(1)] = (5));

} else {
var statearr_46152_46260 = state_46147__$1;
(statearr_46152_46260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46148 === (5))){
var inst_46131 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46147__$1 = state_46147;
var statearr_46153_46261 = state_46147__$1;
(statearr_46153_46261[(2)] = inst_46131);

(statearr_46153_46261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46148 === (6))){
var inst_46133 = (state_46147[(8)]);
var inst_46128 = (state_46147[(7)]);
var inst_46133__$1 = cljs.core.async.chan.call(null,(1));
var inst_46134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46135 = [inst_46128,inst_46133__$1];
var inst_46136 = (new cljs.core.PersistentVector(null,2,(5),inst_46134,inst_46135,null));
var state_46147__$1 = (function (){var statearr_46154 = state_46147;
(statearr_46154[(8)] = inst_46133__$1);

return statearr_46154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46147__$1,(8),jobs,inst_46136);
} else {
if((state_val_46148 === (7))){
var inst_46143 = (state_46147[(2)]);
var state_46147__$1 = state_46147;
var statearr_46155_46262 = state_46147__$1;
(statearr_46155_46262[(2)] = inst_46143);

(statearr_46155_46262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46148 === (8))){
var inst_46133 = (state_46147[(8)]);
var inst_46138 = (state_46147[(2)]);
var state_46147__$1 = (function (){var statearr_46156 = state_46147;
(statearr_46156[(9)] = inst_46138);

return statearr_46156;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46147__$1,(9),results,inst_46133);
} else {
if((state_val_46148 === (9))){
var inst_46140 = (state_46147[(2)]);
var state_46147__$1 = (function (){var statearr_46157 = state_46147;
(statearr_46157[(10)] = inst_46140);

return statearr_46157;
})();
var statearr_46158_46263 = state_46147__$1;
(statearr_46158_46263[(2)] = null);

(statearr_46158_46263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___46257,jobs,results,process,async))
;
return ((function (switch__45820__auto__,c__45908__auto___46257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0 = (function (){
var statearr_46159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__);

(statearr_46159[(1)] = (1));

return statearr_46159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1 = (function (state_46147){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46160){if((e46160 instanceof Object)){
var ex__45824__auto__ = e46160;
var statearr_46161_46264 = state_46147;
(statearr_46161_46264[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46265 = state_46147;
state_46147 = G__46265;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = function(state_46147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1.call(this,state_46147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___46257,jobs,results,process,async))
})();
var state__45910__auto__ = (function (){var statearr_46162 = f__45909__auto__.call(null);
(statearr_46162[(6)] = c__45908__auto___46257);

return statearr_46162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___46257,jobs,results,process,async))
);


var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__,jobs,results,process,async){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__,jobs,results,process,async){
return (function (state_46200){
var state_val_46201 = (state_46200[(1)]);
if((state_val_46201 === (7))){
var inst_46196 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
var statearr_46202_46266 = state_46200__$1;
(statearr_46202_46266[(2)] = inst_46196);

(statearr_46202_46266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (20))){
var state_46200__$1 = state_46200;
var statearr_46203_46267 = state_46200__$1;
(statearr_46203_46267[(2)] = null);

(statearr_46203_46267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (1))){
var state_46200__$1 = state_46200;
var statearr_46204_46268 = state_46200__$1;
(statearr_46204_46268[(2)] = null);

(statearr_46204_46268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (4))){
var inst_46165 = (state_46200[(7)]);
var inst_46165__$1 = (state_46200[(2)]);
var inst_46166 = (inst_46165__$1 == null);
var state_46200__$1 = (function (){var statearr_46205 = state_46200;
(statearr_46205[(7)] = inst_46165__$1);

return statearr_46205;
})();
if(cljs.core.truth_(inst_46166)){
var statearr_46206_46269 = state_46200__$1;
(statearr_46206_46269[(1)] = (5));

} else {
var statearr_46207_46270 = state_46200__$1;
(statearr_46207_46270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (15))){
var inst_46178 = (state_46200[(8)]);
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46200__$1,(18),to,inst_46178);
} else {
if((state_val_46201 === (21))){
var inst_46191 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
var statearr_46208_46271 = state_46200__$1;
(statearr_46208_46271[(2)] = inst_46191);

(statearr_46208_46271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (13))){
var inst_46193 = (state_46200[(2)]);
var state_46200__$1 = (function (){var statearr_46209 = state_46200;
(statearr_46209[(9)] = inst_46193);

return statearr_46209;
})();
var statearr_46210_46272 = state_46200__$1;
(statearr_46210_46272[(2)] = null);

(statearr_46210_46272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (6))){
var inst_46165 = (state_46200[(7)]);
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46200__$1,(11),inst_46165);
} else {
if((state_val_46201 === (17))){
var inst_46186 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
if(cljs.core.truth_(inst_46186)){
var statearr_46211_46273 = state_46200__$1;
(statearr_46211_46273[(1)] = (19));

} else {
var statearr_46212_46274 = state_46200__$1;
(statearr_46212_46274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (3))){
var inst_46198 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46200__$1,inst_46198);
} else {
if((state_val_46201 === (12))){
var inst_46175 = (state_46200[(10)]);
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46200__$1,(14),inst_46175);
} else {
if((state_val_46201 === (2))){
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46200__$1,(4),results);
} else {
if((state_val_46201 === (19))){
var state_46200__$1 = state_46200;
var statearr_46213_46275 = state_46200__$1;
(statearr_46213_46275[(2)] = null);

(statearr_46213_46275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (11))){
var inst_46175 = (state_46200[(2)]);
var state_46200__$1 = (function (){var statearr_46214 = state_46200;
(statearr_46214[(10)] = inst_46175);

return statearr_46214;
})();
var statearr_46215_46276 = state_46200__$1;
(statearr_46215_46276[(2)] = null);

(statearr_46215_46276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (9))){
var state_46200__$1 = state_46200;
var statearr_46216_46277 = state_46200__$1;
(statearr_46216_46277[(2)] = null);

(statearr_46216_46277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (5))){
var state_46200__$1 = state_46200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46217_46278 = state_46200__$1;
(statearr_46217_46278[(1)] = (8));

} else {
var statearr_46218_46279 = state_46200__$1;
(statearr_46218_46279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (14))){
var inst_46180 = (state_46200[(11)]);
var inst_46178 = (state_46200[(8)]);
var inst_46178__$1 = (state_46200[(2)]);
var inst_46179 = (inst_46178__$1 == null);
var inst_46180__$1 = cljs.core.not.call(null,inst_46179);
var state_46200__$1 = (function (){var statearr_46219 = state_46200;
(statearr_46219[(11)] = inst_46180__$1);

(statearr_46219[(8)] = inst_46178__$1);

return statearr_46219;
})();
if(inst_46180__$1){
var statearr_46220_46280 = state_46200__$1;
(statearr_46220_46280[(1)] = (15));

} else {
var statearr_46221_46281 = state_46200__$1;
(statearr_46221_46281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (16))){
var inst_46180 = (state_46200[(11)]);
var state_46200__$1 = state_46200;
var statearr_46222_46282 = state_46200__$1;
(statearr_46222_46282[(2)] = inst_46180);

(statearr_46222_46282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (10))){
var inst_46172 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
var statearr_46223_46283 = state_46200__$1;
(statearr_46223_46283[(2)] = inst_46172);

(statearr_46223_46283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (18))){
var inst_46183 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
var statearr_46224_46284 = state_46200__$1;
(statearr_46224_46284[(2)] = inst_46183);

(statearr_46224_46284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (8))){
var inst_46169 = cljs.core.async.close_BANG_.call(null,to);
var state_46200__$1 = state_46200;
var statearr_46225_46285 = state_46200__$1;
(statearr_46225_46285[(2)] = inst_46169);

(statearr_46225_46285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto__,jobs,results,process,async))
;
return ((function (switch__45820__auto__,c__45908__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0 = (function (){
var statearr_46226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__);

(statearr_46226[(1)] = (1));

return statearr_46226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1 = (function (state_46200){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46227){if((e46227 instanceof Object)){
var ex__45824__auto__ = e46227;
var statearr_46228_46286 = state_46200;
(statearr_46228_46286[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46287 = state_46200;
state_46200 = G__46287;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__ = function(state_46200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1.call(this,state_46200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__,jobs,results,process,async))
})();
var state__45910__auto__ = (function (){var statearr_46229 = f__45909__auto__.call(null);
(statearr_46229[(6)] = c__45908__auto__);

return statearr_46229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__,jobs,results,process,async))
);

return c__45908__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46289 = arguments.length;
switch (G__46289) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46292 = arguments.length;
switch (G__46292) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46295 = arguments.length;
switch (G__46295) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__45908__auto___46344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___46344,tc,fc){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___46344,tc,fc){
return (function (state_46321){
var state_val_46322 = (state_46321[(1)]);
if((state_val_46322 === (7))){
var inst_46317 = (state_46321[(2)]);
var state_46321__$1 = state_46321;
var statearr_46323_46345 = state_46321__$1;
(statearr_46323_46345[(2)] = inst_46317);

(statearr_46323_46345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (1))){
var state_46321__$1 = state_46321;
var statearr_46324_46346 = state_46321__$1;
(statearr_46324_46346[(2)] = null);

(statearr_46324_46346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (4))){
var inst_46298 = (state_46321[(7)]);
var inst_46298__$1 = (state_46321[(2)]);
var inst_46299 = (inst_46298__$1 == null);
var state_46321__$1 = (function (){var statearr_46325 = state_46321;
(statearr_46325[(7)] = inst_46298__$1);

return statearr_46325;
})();
if(cljs.core.truth_(inst_46299)){
var statearr_46326_46347 = state_46321__$1;
(statearr_46326_46347[(1)] = (5));

} else {
var statearr_46327_46348 = state_46321__$1;
(statearr_46327_46348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (13))){
var state_46321__$1 = state_46321;
var statearr_46328_46349 = state_46321__$1;
(statearr_46328_46349[(2)] = null);

(statearr_46328_46349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (6))){
var inst_46298 = (state_46321[(7)]);
var inst_46304 = p.call(null,inst_46298);
var state_46321__$1 = state_46321;
if(cljs.core.truth_(inst_46304)){
var statearr_46329_46350 = state_46321__$1;
(statearr_46329_46350[(1)] = (9));

} else {
var statearr_46330_46351 = state_46321__$1;
(statearr_46330_46351[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (3))){
var inst_46319 = (state_46321[(2)]);
var state_46321__$1 = state_46321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46321__$1,inst_46319);
} else {
if((state_val_46322 === (12))){
var state_46321__$1 = state_46321;
var statearr_46331_46352 = state_46321__$1;
(statearr_46331_46352[(2)] = null);

(statearr_46331_46352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (2))){
var state_46321__$1 = state_46321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46321__$1,(4),ch);
} else {
if((state_val_46322 === (11))){
var inst_46298 = (state_46321[(7)]);
var inst_46308 = (state_46321[(2)]);
var state_46321__$1 = state_46321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46321__$1,(8),inst_46308,inst_46298);
} else {
if((state_val_46322 === (9))){
var state_46321__$1 = state_46321;
var statearr_46332_46353 = state_46321__$1;
(statearr_46332_46353[(2)] = tc);

(statearr_46332_46353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (5))){
var inst_46301 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46302 = cljs.core.async.close_BANG_.call(null,fc);
var state_46321__$1 = (function (){var statearr_46333 = state_46321;
(statearr_46333[(8)] = inst_46301);

return statearr_46333;
})();
var statearr_46334_46354 = state_46321__$1;
(statearr_46334_46354[(2)] = inst_46302);

(statearr_46334_46354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (14))){
var inst_46315 = (state_46321[(2)]);
var state_46321__$1 = state_46321;
var statearr_46335_46355 = state_46321__$1;
(statearr_46335_46355[(2)] = inst_46315);

(statearr_46335_46355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (10))){
var state_46321__$1 = state_46321;
var statearr_46336_46356 = state_46321__$1;
(statearr_46336_46356[(2)] = fc);

(statearr_46336_46356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46322 === (8))){
var inst_46310 = (state_46321[(2)]);
var state_46321__$1 = state_46321;
if(cljs.core.truth_(inst_46310)){
var statearr_46337_46357 = state_46321__$1;
(statearr_46337_46357[(1)] = (12));

} else {
var statearr_46338_46358 = state_46321__$1;
(statearr_46338_46358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___46344,tc,fc))
;
return ((function (switch__45820__auto__,c__45908__auto___46344,tc,fc){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_46339 = [null,null,null,null,null,null,null,null,null];
(statearr_46339[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_46339[(1)] = (1));

return statearr_46339;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_46321){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46340){if((e46340 instanceof Object)){
var ex__45824__auto__ = e46340;
var statearr_46341_46359 = state_46321;
(statearr_46341_46359[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46360 = state_46321;
state_46321 = G__46360;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_46321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_46321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___46344,tc,fc))
})();
var state__45910__auto__ = (function (){var statearr_46342 = f__45909__auto__.call(null);
(statearr_46342[(6)] = c__45908__auto___46344);

return statearr_46342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___46344,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__){
return (function (state_46381){
var state_val_46382 = (state_46381[(1)]);
if((state_val_46382 === (7))){
var inst_46377 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
var statearr_46383_46401 = state_46381__$1;
(statearr_46383_46401[(2)] = inst_46377);

(statearr_46383_46401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (1))){
var inst_46361 = init;
var state_46381__$1 = (function (){var statearr_46384 = state_46381;
(statearr_46384[(7)] = inst_46361);

return statearr_46384;
})();
var statearr_46385_46402 = state_46381__$1;
(statearr_46385_46402[(2)] = null);

(statearr_46385_46402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (4))){
var inst_46364 = (state_46381[(8)]);
var inst_46364__$1 = (state_46381[(2)]);
var inst_46365 = (inst_46364__$1 == null);
var state_46381__$1 = (function (){var statearr_46386 = state_46381;
(statearr_46386[(8)] = inst_46364__$1);

return statearr_46386;
})();
if(cljs.core.truth_(inst_46365)){
var statearr_46387_46403 = state_46381__$1;
(statearr_46387_46403[(1)] = (5));

} else {
var statearr_46388_46404 = state_46381__$1;
(statearr_46388_46404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (6))){
var inst_46364 = (state_46381[(8)]);
var inst_46368 = (state_46381[(9)]);
var inst_46361 = (state_46381[(7)]);
var inst_46368__$1 = f.call(null,inst_46361,inst_46364);
var inst_46369 = cljs.core.reduced_QMARK_.call(null,inst_46368__$1);
var state_46381__$1 = (function (){var statearr_46389 = state_46381;
(statearr_46389[(9)] = inst_46368__$1);

return statearr_46389;
})();
if(inst_46369){
var statearr_46390_46405 = state_46381__$1;
(statearr_46390_46405[(1)] = (8));

} else {
var statearr_46391_46406 = state_46381__$1;
(statearr_46391_46406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (3))){
var inst_46379 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46381__$1,inst_46379);
} else {
if((state_val_46382 === (2))){
var state_46381__$1 = state_46381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46381__$1,(4),ch);
} else {
if((state_val_46382 === (9))){
var inst_46368 = (state_46381[(9)]);
var inst_46361 = inst_46368;
var state_46381__$1 = (function (){var statearr_46392 = state_46381;
(statearr_46392[(7)] = inst_46361);

return statearr_46392;
})();
var statearr_46393_46407 = state_46381__$1;
(statearr_46393_46407[(2)] = null);

(statearr_46393_46407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (5))){
var inst_46361 = (state_46381[(7)]);
var state_46381__$1 = state_46381;
var statearr_46394_46408 = state_46381__$1;
(statearr_46394_46408[(2)] = inst_46361);

(statearr_46394_46408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (10))){
var inst_46375 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
var statearr_46395_46409 = state_46381__$1;
(statearr_46395_46409[(2)] = inst_46375);

(statearr_46395_46409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46382 === (8))){
var inst_46368 = (state_46381[(9)]);
var inst_46371 = cljs.core.deref.call(null,inst_46368);
var state_46381__$1 = state_46381;
var statearr_46396_46410 = state_46381__$1;
(statearr_46396_46410[(2)] = inst_46371);

(statearr_46396_46410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto__))
;
return ((function (switch__45820__auto__,c__45908__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45821__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45821__auto____0 = (function (){
var statearr_46397 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46397[(0)] = cljs$core$async$reduce_$_state_machine__45821__auto__);

(statearr_46397[(1)] = (1));

return statearr_46397;
});
var cljs$core$async$reduce_$_state_machine__45821__auto____1 = (function (state_46381){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46398){if((e46398 instanceof Object)){
var ex__45824__auto__ = e46398;
var statearr_46399_46411 = state_46381;
(statearr_46399_46411[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46412 = state_46381;
state_46381 = G__46412;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45821__auto__ = function(state_46381){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45821__auto____1.call(this,state_46381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45821__auto____0;
cljs$core$async$reduce_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45821__auto____1;
return cljs$core$async$reduce_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__))
})();
var state__45910__auto__ = (function (){var statearr_46400 = f__45909__auto__.call(null);
(statearr_46400[(6)] = c__45908__auto__);

return statearr_46400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__))
);

return c__45908__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__,f__$1){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__,f__$1){
return (function (state_46418){
var state_val_46419 = (state_46418[(1)]);
if((state_val_46419 === (1))){
var inst_46413 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46418__$1 = state_46418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46418__$1,(2),inst_46413);
} else {
if((state_val_46419 === (2))){
var inst_46415 = (state_46418[(2)]);
var inst_46416 = f__$1.call(null,inst_46415);
var state_46418__$1 = state_46418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46418__$1,inst_46416);
} else {
return null;
}
}
});})(c__45908__auto__,f__$1))
;
return ((function (switch__45820__auto__,c__45908__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45821__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45821__auto____0 = (function (){
var statearr_46420 = [null,null,null,null,null,null,null];
(statearr_46420[(0)] = cljs$core$async$transduce_$_state_machine__45821__auto__);

(statearr_46420[(1)] = (1));

return statearr_46420;
});
var cljs$core$async$transduce_$_state_machine__45821__auto____1 = (function (state_46418){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46421){if((e46421 instanceof Object)){
var ex__45824__auto__ = e46421;
var statearr_46422_46424 = state_46418;
(statearr_46422_46424[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46425 = state_46418;
state_46418 = G__46425;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45821__auto__ = function(state_46418){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45821__auto____1.call(this,state_46418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45821__auto____0;
cljs$core$async$transduce_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45821__auto____1;
return cljs$core$async$transduce_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__,f__$1))
})();
var state__45910__auto__ = (function (){var statearr_46423 = f__45909__auto__.call(null);
(statearr_46423[(6)] = c__45908__auto__);

return statearr_46423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__,f__$1))
);

return c__45908__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46427 = arguments.length;
switch (G__46427) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__){
return (function (state_46452){
var state_val_46453 = (state_46452[(1)]);
if((state_val_46453 === (7))){
var inst_46434 = (state_46452[(2)]);
var state_46452__$1 = state_46452;
var statearr_46454_46475 = state_46452__$1;
(statearr_46454_46475[(2)] = inst_46434);

(statearr_46454_46475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (1))){
var inst_46428 = cljs.core.seq.call(null,coll);
var inst_46429 = inst_46428;
var state_46452__$1 = (function (){var statearr_46455 = state_46452;
(statearr_46455[(7)] = inst_46429);

return statearr_46455;
})();
var statearr_46456_46476 = state_46452__$1;
(statearr_46456_46476[(2)] = null);

(statearr_46456_46476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (4))){
var inst_46429 = (state_46452[(7)]);
var inst_46432 = cljs.core.first.call(null,inst_46429);
var state_46452__$1 = state_46452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46452__$1,(7),ch,inst_46432);
} else {
if((state_val_46453 === (13))){
var inst_46446 = (state_46452[(2)]);
var state_46452__$1 = state_46452;
var statearr_46457_46477 = state_46452__$1;
(statearr_46457_46477[(2)] = inst_46446);

(statearr_46457_46477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (6))){
var inst_46437 = (state_46452[(2)]);
var state_46452__$1 = state_46452;
if(cljs.core.truth_(inst_46437)){
var statearr_46458_46478 = state_46452__$1;
(statearr_46458_46478[(1)] = (8));

} else {
var statearr_46459_46479 = state_46452__$1;
(statearr_46459_46479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (3))){
var inst_46450 = (state_46452[(2)]);
var state_46452__$1 = state_46452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46452__$1,inst_46450);
} else {
if((state_val_46453 === (12))){
var state_46452__$1 = state_46452;
var statearr_46460_46480 = state_46452__$1;
(statearr_46460_46480[(2)] = null);

(statearr_46460_46480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (2))){
var inst_46429 = (state_46452[(7)]);
var state_46452__$1 = state_46452;
if(cljs.core.truth_(inst_46429)){
var statearr_46461_46481 = state_46452__$1;
(statearr_46461_46481[(1)] = (4));

} else {
var statearr_46462_46482 = state_46452__$1;
(statearr_46462_46482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (11))){
var inst_46443 = cljs.core.async.close_BANG_.call(null,ch);
var state_46452__$1 = state_46452;
var statearr_46463_46483 = state_46452__$1;
(statearr_46463_46483[(2)] = inst_46443);

(statearr_46463_46483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (9))){
var state_46452__$1 = state_46452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46464_46484 = state_46452__$1;
(statearr_46464_46484[(1)] = (11));

} else {
var statearr_46465_46485 = state_46452__$1;
(statearr_46465_46485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (5))){
var inst_46429 = (state_46452[(7)]);
var state_46452__$1 = state_46452;
var statearr_46466_46486 = state_46452__$1;
(statearr_46466_46486[(2)] = inst_46429);

(statearr_46466_46486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (10))){
var inst_46448 = (state_46452[(2)]);
var state_46452__$1 = state_46452;
var statearr_46467_46487 = state_46452__$1;
(statearr_46467_46487[(2)] = inst_46448);

(statearr_46467_46487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46453 === (8))){
var inst_46429 = (state_46452[(7)]);
var inst_46439 = cljs.core.next.call(null,inst_46429);
var inst_46429__$1 = inst_46439;
var state_46452__$1 = (function (){var statearr_46468 = state_46452;
(statearr_46468[(7)] = inst_46429__$1);

return statearr_46468;
})();
var statearr_46469_46488 = state_46452__$1;
(statearr_46469_46488[(2)] = null);

(statearr_46469_46488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto__))
;
return ((function (switch__45820__auto__,c__45908__auto__){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_46470 = [null,null,null,null,null,null,null,null];
(statearr_46470[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_46470[(1)] = (1));

return statearr_46470;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_46452){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46471){if((e46471 instanceof Object)){
var ex__45824__auto__ = e46471;
var statearr_46472_46489 = state_46452;
(statearr_46472_46489[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46490 = state_46452;
state_46452 = G__46490;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_46452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_46452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__))
})();
var state__45910__auto__ = (function (){var statearr_46473 = f__45909__auto__.call(null);
(statearr_46473[(6)] = c__45908__auto__);

return statearr_46473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__))
);

return c__45908__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42068__auto__ = (((_ == null))?null:_);
var m__42069__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,_);
} else {
var m__42069__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42069__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m,ch);
} else {
var m__42069__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m);
} else {
var m__42069__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46491 = (function (ch,cs,meta46492){
this.ch = ch;
this.cs = cs;
this.meta46492 = meta46492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46493,meta46492__$1){
var self__ = this;
var _46493__$1 = this;
return (new cljs.core.async.t_cljs$core$async46491(self__.ch,self__.cs,meta46492__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46493){
var self__ = this;
var _46493__$1 = this;
return self__.meta46492;
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46492","meta46492",98702380,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46491";

cljs.core.async.t_cljs$core$async46491.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async46491");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46491 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46491(ch__$1,cs__$1,meta46492){
return (new cljs.core.async.t_cljs$core$async46491(ch__$1,cs__$1,meta46492));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46491(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__45908__auto___46713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___46713,cs,m,dchan,dctr,done){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___46713,cs,m,dchan,dctr,done){
return (function (state_46628){
var state_val_46629 = (state_46628[(1)]);
if((state_val_46629 === (7))){
var inst_46624 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46630_46714 = state_46628__$1;
(statearr_46630_46714[(2)] = inst_46624);

(statearr_46630_46714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (20))){
var inst_46527 = (state_46628[(7)]);
var inst_46539 = cljs.core.first.call(null,inst_46527);
var inst_46540 = cljs.core.nth.call(null,inst_46539,(0),null);
var inst_46541 = cljs.core.nth.call(null,inst_46539,(1),null);
var state_46628__$1 = (function (){var statearr_46631 = state_46628;
(statearr_46631[(8)] = inst_46540);

return statearr_46631;
})();
if(cljs.core.truth_(inst_46541)){
var statearr_46632_46715 = state_46628__$1;
(statearr_46632_46715[(1)] = (22));

} else {
var statearr_46633_46716 = state_46628__$1;
(statearr_46633_46716[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (27))){
var inst_46571 = (state_46628[(9)]);
var inst_46569 = (state_46628[(10)]);
var inst_46576 = (state_46628[(11)]);
var inst_46496 = (state_46628[(12)]);
var inst_46576__$1 = cljs.core._nth.call(null,inst_46569,inst_46571);
var inst_46577 = cljs.core.async.put_BANG_.call(null,inst_46576__$1,inst_46496,done);
var state_46628__$1 = (function (){var statearr_46634 = state_46628;
(statearr_46634[(11)] = inst_46576__$1);

return statearr_46634;
})();
if(cljs.core.truth_(inst_46577)){
var statearr_46635_46717 = state_46628__$1;
(statearr_46635_46717[(1)] = (30));

} else {
var statearr_46636_46718 = state_46628__$1;
(statearr_46636_46718[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (1))){
var state_46628__$1 = state_46628;
var statearr_46637_46719 = state_46628__$1;
(statearr_46637_46719[(2)] = null);

(statearr_46637_46719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (24))){
var inst_46527 = (state_46628[(7)]);
var inst_46546 = (state_46628[(2)]);
var inst_46547 = cljs.core.next.call(null,inst_46527);
var inst_46505 = inst_46547;
var inst_46506 = null;
var inst_46507 = (0);
var inst_46508 = (0);
var state_46628__$1 = (function (){var statearr_46638 = state_46628;
(statearr_46638[(13)] = inst_46505);

(statearr_46638[(14)] = inst_46507);

(statearr_46638[(15)] = inst_46508);

(statearr_46638[(16)] = inst_46506);

(statearr_46638[(17)] = inst_46546);

return statearr_46638;
})();
var statearr_46639_46720 = state_46628__$1;
(statearr_46639_46720[(2)] = null);

(statearr_46639_46720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (39))){
var state_46628__$1 = state_46628;
var statearr_46643_46721 = state_46628__$1;
(statearr_46643_46721[(2)] = null);

(statearr_46643_46721[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (4))){
var inst_46496 = (state_46628[(12)]);
var inst_46496__$1 = (state_46628[(2)]);
var inst_46497 = (inst_46496__$1 == null);
var state_46628__$1 = (function (){var statearr_46644 = state_46628;
(statearr_46644[(12)] = inst_46496__$1);

return statearr_46644;
})();
if(cljs.core.truth_(inst_46497)){
var statearr_46645_46722 = state_46628__$1;
(statearr_46645_46722[(1)] = (5));

} else {
var statearr_46646_46723 = state_46628__$1;
(statearr_46646_46723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (15))){
var inst_46505 = (state_46628[(13)]);
var inst_46507 = (state_46628[(14)]);
var inst_46508 = (state_46628[(15)]);
var inst_46506 = (state_46628[(16)]);
var inst_46523 = (state_46628[(2)]);
var inst_46524 = (inst_46508 + (1));
var tmp46640 = inst_46505;
var tmp46641 = inst_46507;
var tmp46642 = inst_46506;
var inst_46505__$1 = tmp46640;
var inst_46506__$1 = tmp46642;
var inst_46507__$1 = tmp46641;
var inst_46508__$1 = inst_46524;
var state_46628__$1 = (function (){var statearr_46647 = state_46628;
(statearr_46647[(13)] = inst_46505__$1);

(statearr_46647[(14)] = inst_46507__$1);

(statearr_46647[(15)] = inst_46508__$1);

(statearr_46647[(18)] = inst_46523);

(statearr_46647[(16)] = inst_46506__$1);

return statearr_46647;
})();
var statearr_46648_46724 = state_46628__$1;
(statearr_46648_46724[(2)] = null);

(statearr_46648_46724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (21))){
var inst_46550 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46652_46725 = state_46628__$1;
(statearr_46652_46725[(2)] = inst_46550);

(statearr_46652_46725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (31))){
var inst_46576 = (state_46628[(11)]);
var inst_46580 = done.call(null,null);
var inst_46581 = cljs.core.async.untap_STAR_.call(null,m,inst_46576);
var state_46628__$1 = (function (){var statearr_46653 = state_46628;
(statearr_46653[(19)] = inst_46580);

return statearr_46653;
})();
var statearr_46654_46726 = state_46628__$1;
(statearr_46654_46726[(2)] = inst_46581);

(statearr_46654_46726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (32))){
var inst_46571 = (state_46628[(9)]);
var inst_46569 = (state_46628[(10)]);
var inst_46570 = (state_46628[(20)]);
var inst_46568 = (state_46628[(21)]);
var inst_46583 = (state_46628[(2)]);
var inst_46584 = (inst_46571 + (1));
var tmp46649 = inst_46569;
var tmp46650 = inst_46570;
var tmp46651 = inst_46568;
var inst_46568__$1 = tmp46651;
var inst_46569__$1 = tmp46649;
var inst_46570__$1 = tmp46650;
var inst_46571__$1 = inst_46584;
var state_46628__$1 = (function (){var statearr_46655 = state_46628;
(statearr_46655[(9)] = inst_46571__$1);

(statearr_46655[(10)] = inst_46569__$1);

(statearr_46655[(22)] = inst_46583);

(statearr_46655[(20)] = inst_46570__$1);

(statearr_46655[(21)] = inst_46568__$1);

return statearr_46655;
})();
var statearr_46656_46727 = state_46628__$1;
(statearr_46656_46727[(2)] = null);

(statearr_46656_46727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (40))){
var inst_46596 = (state_46628[(23)]);
var inst_46600 = done.call(null,null);
var inst_46601 = cljs.core.async.untap_STAR_.call(null,m,inst_46596);
var state_46628__$1 = (function (){var statearr_46657 = state_46628;
(statearr_46657[(24)] = inst_46600);

return statearr_46657;
})();
var statearr_46658_46728 = state_46628__$1;
(statearr_46658_46728[(2)] = inst_46601);

(statearr_46658_46728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (33))){
var inst_46587 = (state_46628[(25)]);
var inst_46589 = cljs.core.chunked_seq_QMARK_.call(null,inst_46587);
var state_46628__$1 = state_46628;
if(inst_46589){
var statearr_46659_46729 = state_46628__$1;
(statearr_46659_46729[(1)] = (36));

} else {
var statearr_46660_46730 = state_46628__$1;
(statearr_46660_46730[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (13))){
var inst_46517 = (state_46628[(26)]);
var inst_46520 = cljs.core.async.close_BANG_.call(null,inst_46517);
var state_46628__$1 = state_46628;
var statearr_46661_46731 = state_46628__$1;
(statearr_46661_46731[(2)] = inst_46520);

(statearr_46661_46731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (22))){
var inst_46540 = (state_46628[(8)]);
var inst_46543 = cljs.core.async.close_BANG_.call(null,inst_46540);
var state_46628__$1 = state_46628;
var statearr_46662_46732 = state_46628__$1;
(statearr_46662_46732[(2)] = inst_46543);

(statearr_46662_46732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (36))){
var inst_46587 = (state_46628[(25)]);
var inst_46591 = cljs.core.chunk_first.call(null,inst_46587);
var inst_46592 = cljs.core.chunk_rest.call(null,inst_46587);
var inst_46593 = cljs.core.count.call(null,inst_46591);
var inst_46568 = inst_46592;
var inst_46569 = inst_46591;
var inst_46570 = inst_46593;
var inst_46571 = (0);
var state_46628__$1 = (function (){var statearr_46663 = state_46628;
(statearr_46663[(9)] = inst_46571);

(statearr_46663[(10)] = inst_46569);

(statearr_46663[(20)] = inst_46570);

(statearr_46663[(21)] = inst_46568);

return statearr_46663;
})();
var statearr_46664_46733 = state_46628__$1;
(statearr_46664_46733[(2)] = null);

(statearr_46664_46733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (41))){
var inst_46587 = (state_46628[(25)]);
var inst_46603 = (state_46628[(2)]);
var inst_46604 = cljs.core.next.call(null,inst_46587);
var inst_46568 = inst_46604;
var inst_46569 = null;
var inst_46570 = (0);
var inst_46571 = (0);
var state_46628__$1 = (function (){var statearr_46665 = state_46628;
(statearr_46665[(27)] = inst_46603);

(statearr_46665[(9)] = inst_46571);

(statearr_46665[(10)] = inst_46569);

(statearr_46665[(20)] = inst_46570);

(statearr_46665[(21)] = inst_46568);

return statearr_46665;
})();
var statearr_46666_46734 = state_46628__$1;
(statearr_46666_46734[(2)] = null);

(statearr_46666_46734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (43))){
var state_46628__$1 = state_46628;
var statearr_46667_46735 = state_46628__$1;
(statearr_46667_46735[(2)] = null);

(statearr_46667_46735[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (29))){
var inst_46612 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46668_46736 = state_46628__$1;
(statearr_46668_46736[(2)] = inst_46612);

(statearr_46668_46736[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (44))){
var inst_46621 = (state_46628[(2)]);
var state_46628__$1 = (function (){var statearr_46669 = state_46628;
(statearr_46669[(28)] = inst_46621);

return statearr_46669;
})();
var statearr_46670_46737 = state_46628__$1;
(statearr_46670_46737[(2)] = null);

(statearr_46670_46737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (6))){
var inst_46560 = (state_46628[(29)]);
var inst_46559 = cljs.core.deref.call(null,cs);
var inst_46560__$1 = cljs.core.keys.call(null,inst_46559);
var inst_46561 = cljs.core.count.call(null,inst_46560__$1);
var inst_46562 = cljs.core.reset_BANG_.call(null,dctr,inst_46561);
var inst_46567 = cljs.core.seq.call(null,inst_46560__$1);
var inst_46568 = inst_46567;
var inst_46569 = null;
var inst_46570 = (0);
var inst_46571 = (0);
var state_46628__$1 = (function (){var statearr_46671 = state_46628;
(statearr_46671[(29)] = inst_46560__$1);

(statearr_46671[(9)] = inst_46571);

(statearr_46671[(10)] = inst_46569);

(statearr_46671[(20)] = inst_46570);

(statearr_46671[(21)] = inst_46568);

(statearr_46671[(30)] = inst_46562);

return statearr_46671;
})();
var statearr_46672_46738 = state_46628__$1;
(statearr_46672_46738[(2)] = null);

(statearr_46672_46738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (28))){
var inst_46568 = (state_46628[(21)]);
var inst_46587 = (state_46628[(25)]);
var inst_46587__$1 = cljs.core.seq.call(null,inst_46568);
var state_46628__$1 = (function (){var statearr_46673 = state_46628;
(statearr_46673[(25)] = inst_46587__$1);

return statearr_46673;
})();
if(inst_46587__$1){
var statearr_46674_46739 = state_46628__$1;
(statearr_46674_46739[(1)] = (33));

} else {
var statearr_46675_46740 = state_46628__$1;
(statearr_46675_46740[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (25))){
var inst_46571 = (state_46628[(9)]);
var inst_46570 = (state_46628[(20)]);
var inst_46573 = (inst_46571 < inst_46570);
var inst_46574 = inst_46573;
var state_46628__$1 = state_46628;
if(cljs.core.truth_(inst_46574)){
var statearr_46676_46741 = state_46628__$1;
(statearr_46676_46741[(1)] = (27));

} else {
var statearr_46677_46742 = state_46628__$1;
(statearr_46677_46742[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (34))){
var state_46628__$1 = state_46628;
var statearr_46678_46743 = state_46628__$1;
(statearr_46678_46743[(2)] = null);

(statearr_46678_46743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (17))){
var state_46628__$1 = state_46628;
var statearr_46679_46744 = state_46628__$1;
(statearr_46679_46744[(2)] = null);

(statearr_46679_46744[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (3))){
var inst_46626 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46628__$1,inst_46626);
} else {
if((state_val_46629 === (12))){
var inst_46555 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46680_46745 = state_46628__$1;
(statearr_46680_46745[(2)] = inst_46555);

(statearr_46680_46745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (2))){
var state_46628__$1 = state_46628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46628__$1,(4),ch);
} else {
if((state_val_46629 === (23))){
var state_46628__$1 = state_46628;
var statearr_46681_46746 = state_46628__$1;
(statearr_46681_46746[(2)] = null);

(statearr_46681_46746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (35))){
var inst_46610 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46682_46747 = state_46628__$1;
(statearr_46682_46747[(2)] = inst_46610);

(statearr_46682_46747[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (19))){
var inst_46527 = (state_46628[(7)]);
var inst_46531 = cljs.core.chunk_first.call(null,inst_46527);
var inst_46532 = cljs.core.chunk_rest.call(null,inst_46527);
var inst_46533 = cljs.core.count.call(null,inst_46531);
var inst_46505 = inst_46532;
var inst_46506 = inst_46531;
var inst_46507 = inst_46533;
var inst_46508 = (0);
var state_46628__$1 = (function (){var statearr_46683 = state_46628;
(statearr_46683[(13)] = inst_46505);

(statearr_46683[(14)] = inst_46507);

(statearr_46683[(15)] = inst_46508);

(statearr_46683[(16)] = inst_46506);

return statearr_46683;
})();
var statearr_46684_46748 = state_46628__$1;
(statearr_46684_46748[(2)] = null);

(statearr_46684_46748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (11))){
var inst_46505 = (state_46628[(13)]);
var inst_46527 = (state_46628[(7)]);
var inst_46527__$1 = cljs.core.seq.call(null,inst_46505);
var state_46628__$1 = (function (){var statearr_46685 = state_46628;
(statearr_46685[(7)] = inst_46527__$1);

return statearr_46685;
})();
if(inst_46527__$1){
var statearr_46686_46749 = state_46628__$1;
(statearr_46686_46749[(1)] = (16));

} else {
var statearr_46687_46750 = state_46628__$1;
(statearr_46687_46750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (9))){
var inst_46557 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46688_46751 = state_46628__$1;
(statearr_46688_46751[(2)] = inst_46557);

(statearr_46688_46751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (5))){
var inst_46503 = cljs.core.deref.call(null,cs);
var inst_46504 = cljs.core.seq.call(null,inst_46503);
var inst_46505 = inst_46504;
var inst_46506 = null;
var inst_46507 = (0);
var inst_46508 = (0);
var state_46628__$1 = (function (){var statearr_46689 = state_46628;
(statearr_46689[(13)] = inst_46505);

(statearr_46689[(14)] = inst_46507);

(statearr_46689[(15)] = inst_46508);

(statearr_46689[(16)] = inst_46506);

return statearr_46689;
})();
var statearr_46690_46752 = state_46628__$1;
(statearr_46690_46752[(2)] = null);

(statearr_46690_46752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (14))){
var state_46628__$1 = state_46628;
var statearr_46691_46753 = state_46628__$1;
(statearr_46691_46753[(2)] = null);

(statearr_46691_46753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (45))){
var inst_46618 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46692_46754 = state_46628__$1;
(statearr_46692_46754[(2)] = inst_46618);

(statearr_46692_46754[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (26))){
var inst_46560 = (state_46628[(29)]);
var inst_46614 = (state_46628[(2)]);
var inst_46615 = cljs.core.seq.call(null,inst_46560);
var state_46628__$1 = (function (){var statearr_46693 = state_46628;
(statearr_46693[(31)] = inst_46614);

return statearr_46693;
})();
if(inst_46615){
var statearr_46694_46755 = state_46628__$1;
(statearr_46694_46755[(1)] = (42));

} else {
var statearr_46695_46756 = state_46628__$1;
(statearr_46695_46756[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (16))){
var inst_46527 = (state_46628[(7)]);
var inst_46529 = cljs.core.chunked_seq_QMARK_.call(null,inst_46527);
var state_46628__$1 = state_46628;
if(inst_46529){
var statearr_46696_46757 = state_46628__$1;
(statearr_46696_46757[(1)] = (19));

} else {
var statearr_46697_46758 = state_46628__$1;
(statearr_46697_46758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (38))){
var inst_46607 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46698_46759 = state_46628__$1;
(statearr_46698_46759[(2)] = inst_46607);

(statearr_46698_46759[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (30))){
var state_46628__$1 = state_46628;
var statearr_46699_46760 = state_46628__$1;
(statearr_46699_46760[(2)] = null);

(statearr_46699_46760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (10))){
var inst_46508 = (state_46628[(15)]);
var inst_46506 = (state_46628[(16)]);
var inst_46516 = cljs.core._nth.call(null,inst_46506,inst_46508);
var inst_46517 = cljs.core.nth.call(null,inst_46516,(0),null);
var inst_46518 = cljs.core.nth.call(null,inst_46516,(1),null);
var state_46628__$1 = (function (){var statearr_46700 = state_46628;
(statearr_46700[(26)] = inst_46517);

return statearr_46700;
})();
if(cljs.core.truth_(inst_46518)){
var statearr_46701_46761 = state_46628__$1;
(statearr_46701_46761[(1)] = (13));

} else {
var statearr_46702_46762 = state_46628__$1;
(statearr_46702_46762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (18))){
var inst_46553 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46703_46763 = state_46628__$1;
(statearr_46703_46763[(2)] = inst_46553);

(statearr_46703_46763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (42))){
var state_46628__$1 = state_46628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46628__$1,(45),dchan);
} else {
if((state_val_46629 === (37))){
var inst_46596 = (state_46628[(23)]);
var inst_46496 = (state_46628[(12)]);
var inst_46587 = (state_46628[(25)]);
var inst_46596__$1 = cljs.core.first.call(null,inst_46587);
var inst_46597 = cljs.core.async.put_BANG_.call(null,inst_46596__$1,inst_46496,done);
var state_46628__$1 = (function (){var statearr_46704 = state_46628;
(statearr_46704[(23)] = inst_46596__$1);

return statearr_46704;
})();
if(cljs.core.truth_(inst_46597)){
var statearr_46705_46764 = state_46628__$1;
(statearr_46705_46764[(1)] = (39));

} else {
var statearr_46706_46765 = state_46628__$1;
(statearr_46706_46765[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46629 === (8))){
var inst_46507 = (state_46628[(14)]);
var inst_46508 = (state_46628[(15)]);
var inst_46510 = (inst_46508 < inst_46507);
var inst_46511 = inst_46510;
var state_46628__$1 = state_46628;
if(cljs.core.truth_(inst_46511)){
var statearr_46707_46766 = state_46628__$1;
(statearr_46707_46766[(1)] = (10));

} else {
var statearr_46708_46767 = state_46628__$1;
(statearr_46708_46767[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___46713,cs,m,dchan,dctr,done))
;
return ((function (switch__45820__auto__,c__45908__auto___46713,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45821__auto__ = null;
var cljs$core$async$mult_$_state_machine__45821__auto____0 = (function (){
var statearr_46709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46709[(0)] = cljs$core$async$mult_$_state_machine__45821__auto__);

(statearr_46709[(1)] = (1));

return statearr_46709;
});
var cljs$core$async$mult_$_state_machine__45821__auto____1 = (function (state_46628){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46710){if((e46710 instanceof Object)){
var ex__45824__auto__ = e46710;
var statearr_46711_46768 = state_46628;
(statearr_46711_46768[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46769 = state_46628;
state_46628 = G__46769;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45821__auto__ = function(state_46628){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45821__auto____1.call(this,state_46628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45821__auto____0;
cljs$core$async$mult_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45821__auto____1;
return cljs$core$async$mult_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___46713,cs,m,dchan,dctr,done))
})();
var state__45910__auto__ = (function (){var statearr_46712 = f__45909__auto__.call(null);
(statearr_46712[(6)] = c__45908__auto___46713);

return statearr_46712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___46713,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46771 = arguments.length;
switch (G__46771) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m,ch);
} else {
var m__42069__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m,ch);
} else {
var m__42069__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m);
} else {
var m__42069__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m,state_map);
} else {
var m__42069__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42068__auto__ = (((m == null))?null:m);
var m__42069__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,m,mode);
} else {
var m__42069__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42563__auto__ = [];
var len__42556__auto___46783 = arguments.length;
var i__42557__auto___46784 = (0);
while(true){
if((i__42557__auto___46784 < len__42556__auto___46783)){
args__42563__auto__.push((arguments[i__42557__auto___46784]));

var G__46785 = (i__42557__auto___46784 + (1));
i__42557__auto___46784 = G__46785;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((3) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42564__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46777){
var map__46778 = p__46777;
var map__46778__$1 = ((((!((map__46778 == null)))?((((map__46778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46778):map__46778);
var opts = map__46778__$1;
var statearr_46780_46786 = state;
(statearr_46780_46786[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46778,map__46778__$1,opts){
return (function (val){
var statearr_46781_46787 = state;
(statearr_46781_46787[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46778,map__46778__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46782_46788 = state;
(statearr_46782_46788[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46773){
var G__46774 = cljs.core.first.call(null,seq46773);
var seq46773__$1 = cljs.core.next.call(null,seq46773);
var G__46775 = cljs.core.first.call(null,seq46773__$1);
var seq46773__$2 = cljs.core.next.call(null,seq46773__$1);
var G__46776 = cljs.core.first.call(null,seq46773__$2);
var seq46773__$3 = cljs.core.next.call(null,seq46773__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46774,G__46775,G__46776,seq46773__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46789 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46790){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46790 = meta46790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46791,meta46790__$1){
var self__ = this;
var _46791__$1 = this;
return (new cljs.core.async.t_cljs$core$async46789(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46790__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46791){
var self__ = this;
var _46791__$1 = this;
return self__.meta46790;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46790","meta46790",-1989184880,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46789";

cljs.core.async.t_cljs$core$async46789.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async46789");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46789 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46789(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46790){
return (new cljs.core.async.t_cljs$core$async46789(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46790));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46789(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45908__auto___46953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___46953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___46953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46893){
var state_val_46894 = (state_46893[(1)]);
if((state_val_46894 === (7))){
var inst_46808 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46895_46954 = state_46893__$1;
(statearr_46895_46954[(2)] = inst_46808);

(statearr_46895_46954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (20))){
var inst_46820 = (state_46893[(7)]);
var state_46893__$1 = state_46893;
var statearr_46896_46955 = state_46893__$1;
(statearr_46896_46955[(2)] = inst_46820);

(statearr_46896_46955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (27))){
var state_46893__$1 = state_46893;
var statearr_46897_46956 = state_46893__$1;
(statearr_46897_46956[(2)] = null);

(statearr_46897_46956[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (1))){
var inst_46795 = (state_46893[(8)]);
var inst_46795__$1 = calc_state.call(null);
var inst_46797 = (inst_46795__$1 == null);
var inst_46798 = cljs.core.not.call(null,inst_46797);
var state_46893__$1 = (function (){var statearr_46898 = state_46893;
(statearr_46898[(8)] = inst_46795__$1);

return statearr_46898;
})();
if(inst_46798){
var statearr_46899_46957 = state_46893__$1;
(statearr_46899_46957[(1)] = (2));

} else {
var statearr_46900_46958 = state_46893__$1;
(statearr_46900_46958[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (24))){
var inst_46853 = (state_46893[(9)]);
var inst_46844 = (state_46893[(10)]);
var inst_46867 = (state_46893[(11)]);
var inst_46867__$1 = inst_46844.call(null,inst_46853);
var state_46893__$1 = (function (){var statearr_46901 = state_46893;
(statearr_46901[(11)] = inst_46867__$1);

return statearr_46901;
})();
if(cljs.core.truth_(inst_46867__$1)){
var statearr_46902_46959 = state_46893__$1;
(statearr_46902_46959[(1)] = (29));

} else {
var statearr_46903_46960 = state_46893__$1;
(statearr_46903_46960[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (4))){
var inst_46811 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46811)){
var statearr_46904_46961 = state_46893__$1;
(statearr_46904_46961[(1)] = (8));

} else {
var statearr_46905_46962 = state_46893__$1;
(statearr_46905_46962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (15))){
var inst_46838 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46838)){
var statearr_46906_46963 = state_46893__$1;
(statearr_46906_46963[(1)] = (19));

} else {
var statearr_46907_46964 = state_46893__$1;
(statearr_46907_46964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (21))){
var inst_46843 = (state_46893[(12)]);
var inst_46843__$1 = (state_46893[(2)]);
var inst_46844 = cljs.core.get.call(null,inst_46843__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46845 = cljs.core.get.call(null,inst_46843__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46846 = cljs.core.get.call(null,inst_46843__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46893__$1 = (function (){var statearr_46908 = state_46893;
(statearr_46908[(10)] = inst_46844);

(statearr_46908[(12)] = inst_46843__$1);

(statearr_46908[(13)] = inst_46845);

return statearr_46908;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46893__$1,(22),inst_46846);
} else {
if((state_val_46894 === (31))){
var inst_46875 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46875)){
var statearr_46909_46965 = state_46893__$1;
(statearr_46909_46965[(1)] = (32));

} else {
var statearr_46910_46966 = state_46893__$1;
(statearr_46910_46966[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (32))){
var inst_46852 = (state_46893[(14)]);
var state_46893__$1 = state_46893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46893__$1,(35),out,inst_46852);
} else {
if((state_val_46894 === (33))){
var inst_46843 = (state_46893[(12)]);
var inst_46820 = inst_46843;
var state_46893__$1 = (function (){var statearr_46911 = state_46893;
(statearr_46911[(7)] = inst_46820);

return statearr_46911;
})();
var statearr_46912_46967 = state_46893__$1;
(statearr_46912_46967[(2)] = null);

(statearr_46912_46967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (13))){
var inst_46820 = (state_46893[(7)]);
var inst_46827 = inst_46820.cljs$lang$protocol_mask$partition0$;
var inst_46828 = (inst_46827 & (64));
var inst_46829 = inst_46820.cljs$core$ISeq$;
var inst_46830 = (cljs.core.PROTOCOL_SENTINEL === inst_46829);
var inst_46831 = (inst_46828) || (inst_46830);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46831)){
var statearr_46913_46968 = state_46893__$1;
(statearr_46913_46968[(1)] = (16));

} else {
var statearr_46914_46969 = state_46893__$1;
(statearr_46914_46969[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (22))){
var inst_46852 = (state_46893[(14)]);
var inst_46853 = (state_46893[(9)]);
var inst_46851 = (state_46893[(2)]);
var inst_46852__$1 = cljs.core.nth.call(null,inst_46851,(0),null);
var inst_46853__$1 = cljs.core.nth.call(null,inst_46851,(1),null);
var inst_46854 = (inst_46852__$1 == null);
var inst_46855 = cljs.core._EQ_.call(null,inst_46853__$1,change);
var inst_46856 = (inst_46854) || (inst_46855);
var state_46893__$1 = (function (){var statearr_46915 = state_46893;
(statearr_46915[(14)] = inst_46852__$1);

(statearr_46915[(9)] = inst_46853__$1);

return statearr_46915;
})();
if(cljs.core.truth_(inst_46856)){
var statearr_46916_46970 = state_46893__$1;
(statearr_46916_46970[(1)] = (23));

} else {
var statearr_46917_46971 = state_46893__$1;
(statearr_46917_46971[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (36))){
var inst_46843 = (state_46893[(12)]);
var inst_46820 = inst_46843;
var state_46893__$1 = (function (){var statearr_46918 = state_46893;
(statearr_46918[(7)] = inst_46820);

return statearr_46918;
})();
var statearr_46919_46972 = state_46893__$1;
(statearr_46919_46972[(2)] = null);

(statearr_46919_46972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (29))){
var inst_46867 = (state_46893[(11)]);
var state_46893__$1 = state_46893;
var statearr_46920_46973 = state_46893__$1;
(statearr_46920_46973[(2)] = inst_46867);

(statearr_46920_46973[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (6))){
var state_46893__$1 = state_46893;
var statearr_46921_46974 = state_46893__$1;
(statearr_46921_46974[(2)] = false);

(statearr_46921_46974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (28))){
var inst_46863 = (state_46893[(2)]);
var inst_46864 = calc_state.call(null);
var inst_46820 = inst_46864;
var state_46893__$1 = (function (){var statearr_46922 = state_46893;
(statearr_46922[(15)] = inst_46863);

(statearr_46922[(7)] = inst_46820);

return statearr_46922;
})();
var statearr_46923_46975 = state_46893__$1;
(statearr_46923_46975[(2)] = null);

(statearr_46923_46975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (25))){
var inst_46889 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46924_46976 = state_46893__$1;
(statearr_46924_46976[(2)] = inst_46889);

(statearr_46924_46976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (34))){
var inst_46887 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46925_46977 = state_46893__$1;
(statearr_46925_46977[(2)] = inst_46887);

(statearr_46925_46977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (17))){
var state_46893__$1 = state_46893;
var statearr_46926_46978 = state_46893__$1;
(statearr_46926_46978[(2)] = false);

(statearr_46926_46978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (3))){
var state_46893__$1 = state_46893;
var statearr_46927_46979 = state_46893__$1;
(statearr_46927_46979[(2)] = false);

(statearr_46927_46979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (12))){
var inst_46891 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46893__$1,inst_46891);
} else {
if((state_val_46894 === (2))){
var inst_46795 = (state_46893[(8)]);
var inst_46800 = inst_46795.cljs$lang$protocol_mask$partition0$;
var inst_46801 = (inst_46800 & (64));
var inst_46802 = inst_46795.cljs$core$ISeq$;
var inst_46803 = (cljs.core.PROTOCOL_SENTINEL === inst_46802);
var inst_46804 = (inst_46801) || (inst_46803);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46804)){
var statearr_46928_46980 = state_46893__$1;
(statearr_46928_46980[(1)] = (5));

} else {
var statearr_46929_46981 = state_46893__$1;
(statearr_46929_46981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (23))){
var inst_46852 = (state_46893[(14)]);
var inst_46858 = (inst_46852 == null);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46858)){
var statearr_46930_46982 = state_46893__$1;
(statearr_46930_46982[(1)] = (26));

} else {
var statearr_46931_46983 = state_46893__$1;
(statearr_46931_46983[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (35))){
var inst_46878 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46878)){
var statearr_46932_46984 = state_46893__$1;
(statearr_46932_46984[(1)] = (36));

} else {
var statearr_46933_46985 = state_46893__$1;
(statearr_46933_46985[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (19))){
var inst_46820 = (state_46893[(7)]);
var inst_46840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46820);
var state_46893__$1 = state_46893;
var statearr_46934_46986 = state_46893__$1;
(statearr_46934_46986[(2)] = inst_46840);

(statearr_46934_46986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (11))){
var inst_46820 = (state_46893[(7)]);
var inst_46824 = (inst_46820 == null);
var inst_46825 = cljs.core.not.call(null,inst_46824);
var state_46893__$1 = state_46893;
if(inst_46825){
var statearr_46935_46987 = state_46893__$1;
(statearr_46935_46987[(1)] = (13));

} else {
var statearr_46936_46988 = state_46893__$1;
(statearr_46936_46988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (9))){
var inst_46795 = (state_46893[(8)]);
var state_46893__$1 = state_46893;
var statearr_46937_46989 = state_46893__$1;
(statearr_46937_46989[(2)] = inst_46795);

(statearr_46937_46989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (5))){
var state_46893__$1 = state_46893;
var statearr_46938_46990 = state_46893__$1;
(statearr_46938_46990[(2)] = true);

(statearr_46938_46990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (14))){
var state_46893__$1 = state_46893;
var statearr_46939_46991 = state_46893__$1;
(statearr_46939_46991[(2)] = false);

(statearr_46939_46991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (26))){
var inst_46853 = (state_46893[(9)]);
var inst_46860 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46853);
var state_46893__$1 = state_46893;
var statearr_46940_46992 = state_46893__$1;
(statearr_46940_46992[(2)] = inst_46860);

(statearr_46940_46992[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (16))){
var state_46893__$1 = state_46893;
var statearr_46941_46993 = state_46893__$1;
(statearr_46941_46993[(2)] = true);

(statearr_46941_46993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (38))){
var inst_46883 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46942_46994 = state_46893__$1;
(statearr_46942_46994[(2)] = inst_46883);

(statearr_46942_46994[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (30))){
var inst_46853 = (state_46893[(9)]);
var inst_46844 = (state_46893[(10)]);
var inst_46845 = (state_46893[(13)]);
var inst_46870 = cljs.core.empty_QMARK_.call(null,inst_46844);
var inst_46871 = inst_46845.call(null,inst_46853);
var inst_46872 = cljs.core.not.call(null,inst_46871);
var inst_46873 = (inst_46870) && (inst_46872);
var state_46893__$1 = state_46893;
var statearr_46943_46995 = state_46893__$1;
(statearr_46943_46995[(2)] = inst_46873);

(statearr_46943_46995[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (10))){
var inst_46795 = (state_46893[(8)]);
var inst_46816 = (state_46893[(2)]);
var inst_46817 = cljs.core.get.call(null,inst_46816,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46818 = cljs.core.get.call(null,inst_46816,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46819 = cljs.core.get.call(null,inst_46816,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46820 = inst_46795;
var state_46893__$1 = (function (){var statearr_46944 = state_46893;
(statearr_46944[(16)] = inst_46818);

(statearr_46944[(17)] = inst_46817);

(statearr_46944[(7)] = inst_46820);

(statearr_46944[(18)] = inst_46819);

return statearr_46944;
})();
var statearr_46945_46996 = state_46893__$1;
(statearr_46945_46996[(2)] = null);

(statearr_46945_46996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (18))){
var inst_46835 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46946_46997 = state_46893__$1;
(statearr_46946_46997[(2)] = inst_46835);

(statearr_46946_46997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (37))){
var state_46893__$1 = state_46893;
var statearr_46947_46998 = state_46893__$1;
(statearr_46947_46998[(2)] = null);

(statearr_46947_46998[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (8))){
var inst_46795 = (state_46893[(8)]);
var inst_46813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46795);
var state_46893__$1 = state_46893;
var statearr_46948_46999 = state_46893__$1;
(statearr_46948_46999[(2)] = inst_46813);

(statearr_46948_46999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___46953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45820__auto__,c__45908__auto___46953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45821__auto__ = null;
var cljs$core$async$mix_$_state_machine__45821__auto____0 = (function (){
var statearr_46949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46949[(0)] = cljs$core$async$mix_$_state_machine__45821__auto__);

(statearr_46949[(1)] = (1));

return statearr_46949;
});
var cljs$core$async$mix_$_state_machine__45821__auto____1 = (function (state_46893){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_46893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e46950){if((e46950 instanceof Object)){
var ex__45824__auto__ = e46950;
var statearr_46951_47000 = state_46893;
(statearr_46951_47000[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47001 = state_46893;
state_46893 = G__47001;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45821__auto__ = function(state_46893){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45821__auto____1.call(this,state_46893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45821__auto____0;
cljs$core$async$mix_$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45821__auto____1;
return cljs$core$async$mix_$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___46953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45910__auto__ = (function (){var statearr_46952 = f__45909__auto__.call(null);
(statearr_46952[(6)] = c__45908__auto___46953);

return statearr_46952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___46953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42068__auto__ = (((p == null))?null:p);
var m__42069__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42069__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42068__auto__ = (((p == null))?null:p);
var m__42069__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,p,v,ch);
} else {
var m__42069__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47003 = arguments.length;
switch (G__47003) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42068__auto__ = (((p == null))?null:p);
var m__42069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,p);
} else {
var m__42069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42068__auto__ = (((p == null))?null:p);
var m__42069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42068__auto__)]);
if(!((m__42069__auto__ == null))){
return m__42069__auto__.call(null,p,v);
} else {
var m__42069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42069__auto____$1 == null))){
return m__42069__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47007 = arguments.length;
switch (G__47007) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41385__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41385__auto__)){
return or__41385__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41385__auto__,mults){
return (function (p1__47005_SHARP_){
if(cljs.core.truth_(p1__47005_SHARP_.call(null,topic))){
return p1__47005_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47005_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41385__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47008 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47009){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47009 = meta47009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47010,meta47009__$1){
var self__ = this;
var _47010__$1 = this;
return (new cljs.core.async.t_cljs$core$async47008(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47009__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47010){
var self__ = this;
var _47010__$1 = this;
return self__.meta47009;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47009","meta47009",895875147,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47008";

cljs.core.async.t_cljs$core$async47008.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async47008");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47008 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47008(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47009){
return (new cljs.core.async.t_cljs$core$async47008(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47009));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47008(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45908__auto___47128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47128,mults,ensure_mult,p){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47128,mults,ensure_mult,p){
return (function (state_47082){
var state_val_47083 = (state_47082[(1)]);
if((state_val_47083 === (7))){
var inst_47078 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
var statearr_47084_47129 = state_47082__$1;
(statearr_47084_47129[(2)] = inst_47078);

(statearr_47084_47129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (20))){
var state_47082__$1 = state_47082;
var statearr_47085_47130 = state_47082__$1;
(statearr_47085_47130[(2)] = null);

(statearr_47085_47130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (1))){
var state_47082__$1 = state_47082;
var statearr_47086_47131 = state_47082__$1;
(statearr_47086_47131[(2)] = null);

(statearr_47086_47131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (24))){
var inst_47061 = (state_47082[(7)]);
var inst_47070 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47061);
var state_47082__$1 = state_47082;
var statearr_47087_47132 = state_47082__$1;
(statearr_47087_47132[(2)] = inst_47070);

(statearr_47087_47132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (4))){
var inst_47013 = (state_47082[(8)]);
var inst_47013__$1 = (state_47082[(2)]);
var inst_47014 = (inst_47013__$1 == null);
var state_47082__$1 = (function (){var statearr_47088 = state_47082;
(statearr_47088[(8)] = inst_47013__$1);

return statearr_47088;
})();
if(cljs.core.truth_(inst_47014)){
var statearr_47089_47133 = state_47082__$1;
(statearr_47089_47133[(1)] = (5));

} else {
var statearr_47090_47134 = state_47082__$1;
(statearr_47090_47134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (15))){
var inst_47055 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
var statearr_47091_47135 = state_47082__$1;
(statearr_47091_47135[(2)] = inst_47055);

(statearr_47091_47135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (21))){
var inst_47075 = (state_47082[(2)]);
var state_47082__$1 = (function (){var statearr_47092 = state_47082;
(statearr_47092[(9)] = inst_47075);

return statearr_47092;
})();
var statearr_47093_47136 = state_47082__$1;
(statearr_47093_47136[(2)] = null);

(statearr_47093_47136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (13))){
var inst_47037 = (state_47082[(10)]);
var inst_47039 = cljs.core.chunked_seq_QMARK_.call(null,inst_47037);
var state_47082__$1 = state_47082;
if(inst_47039){
var statearr_47094_47137 = state_47082__$1;
(statearr_47094_47137[(1)] = (16));

} else {
var statearr_47095_47138 = state_47082__$1;
(statearr_47095_47138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (22))){
var inst_47067 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
if(cljs.core.truth_(inst_47067)){
var statearr_47096_47139 = state_47082__$1;
(statearr_47096_47139[(1)] = (23));

} else {
var statearr_47097_47140 = state_47082__$1;
(statearr_47097_47140[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (6))){
var inst_47013 = (state_47082[(8)]);
var inst_47063 = (state_47082[(11)]);
var inst_47061 = (state_47082[(7)]);
var inst_47061__$1 = topic_fn.call(null,inst_47013);
var inst_47062 = cljs.core.deref.call(null,mults);
var inst_47063__$1 = cljs.core.get.call(null,inst_47062,inst_47061__$1);
var state_47082__$1 = (function (){var statearr_47098 = state_47082;
(statearr_47098[(11)] = inst_47063__$1);

(statearr_47098[(7)] = inst_47061__$1);

return statearr_47098;
})();
if(cljs.core.truth_(inst_47063__$1)){
var statearr_47099_47141 = state_47082__$1;
(statearr_47099_47141[(1)] = (19));

} else {
var statearr_47100_47142 = state_47082__$1;
(statearr_47100_47142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (25))){
var inst_47072 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
var statearr_47101_47143 = state_47082__$1;
(statearr_47101_47143[(2)] = inst_47072);

(statearr_47101_47143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (17))){
var inst_47037 = (state_47082[(10)]);
var inst_47046 = cljs.core.first.call(null,inst_47037);
var inst_47047 = cljs.core.async.muxch_STAR_.call(null,inst_47046);
var inst_47048 = cljs.core.async.close_BANG_.call(null,inst_47047);
var inst_47049 = cljs.core.next.call(null,inst_47037);
var inst_47023 = inst_47049;
var inst_47024 = null;
var inst_47025 = (0);
var inst_47026 = (0);
var state_47082__$1 = (function (){var statearr_47102 = state_47082;
(statearr_47102[(12)] = inst_47025);

(statearr_47102[(13)] = inst_47048);

(statearr_47102[(14)] = inst_47023);

(statearr_47102[(15)] = inst_47024);

(statearr_47102[(16)] = inst_47026);

return statearr_47102;
})();
var statearr_47103_47144 = state_47082__$1;
(statearr_47103_47144[(2)] = null);

(statearr_47103_47144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (3))){
var inst_47080 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47082__$1,inst_47080);
} else {
if((state_val_47083 === (12))){
var inst_47057 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
var statearr_47104_47145 = state_47082__$1;
(statearr_47104_47145[(2)] = inst_47057);

(statearr_47104_47145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (2))){
var state_47082__$1 = state_47082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47082__$1,(4),ch);
} else {
if((state_val_47083 === (23))){
var state_47082__$1 = state_47082;
var statearr_47105_47146 = state_47082__$1;
(statearr_47105_47146[(2)] = null);

(statearr_47105_47146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (19))){
var inst_47013 = (state_47082[(8)]);
var inst_47063 = (state_47082[(11)]);
var inst_47065 = cljs.core.async.muxch_STAR_.call(null,inst_47063);
var state_47082__$1 = state_47082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47082__$1,(22),inst_47065,inst_47013);
} else {
if((state_val_47083 === (11))){
var inst_47023 = (state_47082[(14)]);
var inst_47037 = (state_47082[(10)]);
var inst_47037__$1 = cljs.core.seq.call(null,inst_47023);
var state_47082__$1 = (function (){var statearr_47106 = state_47082;
(statearr_47106[(10)] = inst_47037__$1);

return statearr_47106;
})();
if(inst_47037__$1){
var statearr_47107_47147 = state_47082__$1;
(statearr_47107_47147[(1)] = (13));

} else {
var statearr_47108_47148 = state_47082__$1;
(statearr_47108_47148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (9))){
var inst_47059 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
var statearr_47109_47149 = state_47082__$1;
(statearr_47109_47149[(2)] = inst_47059);

(statearr_47109_47149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (5))){
var inst_47020 = cljs.core.deref.call(null,mults);
var inst_47021 = cljs.core.vals.call(null,inst_47020);
var inst_47022 = cljs.core.seq.call(null,inst_47021);
var inst_47023 = inst_47022;
var inst_47024 = null;
var inst_47025 = (0);
var inst_47026 = (0);
var state_47082__$1 = (function (){var statearr_47110 = state_47082;
(statearr_47110[(12)] = inst_47025);

(statearr_47110[(14)] = inst_47023);

(statearr_47110[(15)] = inst_47024);

(statearr_47110[(16)] = inst_47026);

return statearr_47110;
})();
var statearr_47111_47150 = state_47082__$1;
(statearr_47111_47150[(2)] = null);

(statearr_47111_47150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (14))){
var state_47082__$1 = state_47082;
var statearr_47115_47151 = state_47082__$1;
(statearr_47115_47151[(2)] = null);

(statearr_47115_47151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (16))){
var inst_47037 = (state_47082[(10)]);
var inst_47041 = cljs.core.chunk_first.call(null,inst_47037);
var inst_47042 = cljs.core.chunk_rest.call(null,inst_47037);
var inst_47043 = cljs.core.count.call(null,inst_47041);
var inst_47023 = inst_47042;
var inst_47024 = inst_47041;
var inst_47025 = inst_47043;
var inst_47026 = (0);
var state_47082__$1 = (function (){var statearr_47116 = state_47082;
(statearr_47116[(12)] = inst_47025);

(statearr_47116[(14)] = inst_47023);

(statearr_47116[(15)] = inst_47024);

(statearr_47116[(16)] = inst_47026);

return statearr_47116;
})();
var statearr_47117_47152 = state_47082__$1;
(statearr_47117_47152[(2)] = null);

(statearr_47117_47152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (10))){
var inst_47025 = (state_47082[(12)]);
var inst_47023 = (state_47082[(14)]);
var inst_47024 = (state_47082[(15)]);
var inst_47026 = (state_47082[(16)]);
var inst_47031 = cljs.core._nth.call(null,inst_47024,inst_47026);
var inst_47032 = cljs.core.async.muxch_STAR_.call(null,inst_47031);
var inst_47033 = cljs.core.async.close_BANG_.call(null,inst_47032);
var inst_47034 = (inst_47026 + (1));
var tmp47112 = inst_47025;
var tmp47113 = inst_47023;
var tmp47114 = inst_47024;
var inst_47023__$1 = tmp47113;
var inst_47024__$1 = tmp47114;
var inst_47025__$1 = tmp47112;
var inst_47026__$1 = inst_47034;
var state_47082__$1 = (function (){var statearr_47118 = state_47082;
(statearr_47118[(17)] = inst_47033);

(statearr_47118[(12)] = inst_47025__$1);

(statearr_47118[(14)] = inst_47023__$1);

(statearr_47118[(15)] = inst_47024__$1);

(statearr_47118[(16)] = inst_47026__$1);

return statearr_47118;
})();
var statearr_47119_47153 = state_47082__$1;
(statearr_47119_47153[(2)] = null);

(statearr_47119_47153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (18))){
var inst_47052 = (state_47082[(2)]);
var state_47082__$1 = state_47082;
var statearr_47120_47154 = state_47082__$1;
(statearr_47120_47154[(2)] = inst_47052);

(statearr_47120_47154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47083 === (8))){
var inst_47025 = (state_47082[(12)]);
var inst_47026 = (state_47082[(16)]);
var inst_47028 = (inst_47026 < inst_47025);
var inst_47029 = inst_47028;
var state_47082__$1 = state_47082;
if(cljs.core.truth_(inst_47029)){
var statearr_47121_47155 = state_47082__$1;
(statearr_47121_47155[(1)] = (10));

} else {
var statearr_47122_47156 = state_47082__$1;
(statearr_47122_47156[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47128,mults,ensure_mult,p))
;
return ((function (switch__45820__auto__,c__45908__auto___47128,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47123[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47123[(1)] = (1));

return statearr_47123;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47082){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47124){if((e47124 instanceof Object)){
var ex__45824__auto__ = e47124;
var statearr_47125_47157 = state_47082;
(statearr_47125_47157[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47158 = state_47082;
state_47082 = G__47158;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47082);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47128,mults,ensure_mult,p))
})();
var state__45910__auto__ = (function (){var statearr_47126 = f__45909__auto__.call(null);
(statearr_47126[(6)] = c__45908__auto___47128);

return statearr_47126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47128,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47160 = arguments.length;
switch (G__47160) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47163 = arguments.length;
switch (G__47163) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47166 = arguments.length;
switch (G__47166) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__45908__auto___47233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47205){
var state_val_47206 = (state_47205[(1)]);
if((state_val_47206 === (7))){
var state_47205__$1 = state_47205;
var statearr_47207_47234 = state_47205__$1;
(statearr_47207_47234[(2)] = null);

(statearr_47207_47234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (1))){
var state_47205__$1 = state_47205;
var statearr_47208_47235 = state_47205__$1;
(statearr_47208_47235[(2)] = null);

(statearr_47208_47235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (4))){
var inst_47169 = (state_47205[(7)]);
var inst_47171 = (inst_47169 < cnt);
var state_47205__$1 = state_47205;
if(cljs.core.truth_(inst_47171)){
var statearr_47209_47236 = state_47205__$1;
(statearr_47209_47236[(1)] = (6));

} else {
var statearr_47210_47237 = state_47205__$1;
(statearr_47210_47237[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (15))){
var inst_47201 = (state_47205[(2)]);
var state_47205__$1 = state_47205;
var statearr_47211_47238 = state_47205__$1;
(statearr_47211_47238[(2)] = inst_47201);

(statearr_47211_47238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (13))){
var inst_47194 = cljs.core.async.close_BANG_.call(null,out);
var state_47205__$1 = state_47205;
var statearr_47212_47239 = state_47205__$1;
(statearr_47212_47239[(2)] = inst_47194);

(statearr_47212_47239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (6))){
var state_47205__$1 = state_47205;
var statearr_47213_47240 = state_47205__$1;
(statearr_47213_47240[(2)] = null);

(statearr_47213_47240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (3))){
var inst_47203 = (state_47205[(2)]);
var state_47205__$1 = state_47205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47205__$1,inst_47203);
} else {
if((state_val_47206 === (12))){
var inst_47191 = (state_47205[(8)]);
var inst_47191__$1 = (state_47205[(2)]);
var inst_47192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47191__$1);
var state_47205__$1 = (function (){var statearr_47214 = state_47205;
(statearr_47214[(8)] = inst_47191__$1);

return statearr_47214;
})();
if(cljs.core.truth_(inst_47192)){
var statearr_47215_47241 = state_47205__$1;
(statearr_47215_47241[(1)] = (13));

} else {
var statearr_47216_47242 = state_47205__$1;
(statearr_47216_47242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (2))){
var inst_47168 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47169 = (0);
var state_47205__$1 = (function (){var statearr_47217 = state_47205;
(statearr_47217[(9)] = inst_47168);

(statearr_47217[(7)] = inst_47169);

return statearr_47217;
})();
var statearr_47218_47243 = state_47205__$1;
(statearr_47218_47243[(2)] = null);

(statearr_47218_47243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (11))){
var inst_47169 = (state_47205[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47205,(10),Object,null,(9));
var inst_47178 = chs__$1.call(null,inst_47169);
var inst_47179 = done.call(null,inst_47169);
var inst_47180 = cljs.core.async.take_BANG_.call(null,inst_47178,inst_47179);
var state_47205__$1 = state_47205;
var statearr_47219_47244 = state_47205__$1;
(statearr_47219_47244[(2)] = inst_47180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (9))){
var inst_47169 = (state_47205[(7)]);
var inst_47182 = (state_47205[(2)]);
var inst_47183 = (inst_47169 + (1));
var inst_47169__$1 = inst_47183;
var state_47205__$1 = (function (){var statearr_47220 = state_47205;
(statearr_47220[(10)] = inst_47182);

(statearr_47220[(7)] = inst_47169__$1);

return statearr_47220;
})();
var statearr_47221_47245 = state_47205__$1;
(statearr_47221_47245[(2)] = null);

(statearr_47221_47245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (5))){
var inst_47189 = (state_47205[(2)]);
var state_47205__$1 = (function (){var statearr_47222 = state_47205;
(statearr_47222[(11)] = inst_47189);

return statearr_47222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47205__$1,(12),dchan);
} else {
if((state_val_47206 === (14))){
var inst_47191 = (state_47205[(8)]);
var inst_47196 = cljs.core.apply.call(null,f,inst_47191);
var state_47205__$1 = state_47205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47205__$1,(16),out,inst_47196);
} else {
if((state_val_47206 === (16))){
var inst_47198 = (state_47205[(2)]);
var state_47205__$1 = (function (){var statearr_47223 = state_47205;
(statearr_47223[(12)] = inst_47198);

return statearr_47223;
})();
var statearr_47224_47246 = state_47205__$1;
(statearr_47224_47246[(2)] = null);

(statearr_47224_47246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (10))){
var inst_47173 = (state_47205[(2)]);
var inst_47174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47205__$1 = (function (){var statearr_47225 = state_47205;
(statearr_47225[(13)] = inst_47173);

return statearr_47225;
})();
var statearr_47226_47247 = state_47205__$1;
(statearr_47226_47247[(2)] = inst_47174);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47206 === (8))){
var inst_47187 = (state_47205[(2)]);
var state_47205__$1 = state_47205;
var statearr_47227_47248 = state_47205__$1;
(statearr_47227_47248[(2)] = inst_47187);

(statearr_47227_47248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47233,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45820__auto__,c__45908__auto___47233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47228[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47228[(1)] = (1));

return statearr_47228;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47205){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47229){if((e47229 instanceof Object)){
var ex__45824__auto__ = e47229;
var statearr_47230_47249 = state_47205;
(statearr_47230_47249[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47250 = state_47205;
state_47205 = G__47250;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47233,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45910__auto__ = (function (){var statearr_47231 = f__45909__auto__.call(null);
(statearr_47231[(6)] = c__45908__auto___47233);

return statearr_47231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47233,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47253 = arguments.length;
switch (G__47253) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45908__auto___47307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47307,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47307,out){
return (function (state_47285){
var state_val_47286 = (state_47285[(1)]);
if((state_val_47286 === (7))){
var inst_47264 = (state_47285[(7)]);
var inst_47265 = (state_47285[(8)]);
var inst_47264__$1 = (state_47285[(2)]);
var inst_47265__$1 = cljs.core.nth.call(null,inst_47264__$1,(0),null);
var inst_47266 = cljs.core.nth.call(null,inst_47264__$1,(1),null);
var inst_47267 = (inst_47265__$1 == null);
var state_47285__$1 = (function (){var statearr_47287 = state_47285;
(statearr_47287[(7)] = inst_47264__$1);

(statearr_47287[(9)] = inst_47266);

(statearr_47287[(8)] = inst_47265__$1);

return statearr_47287;
})();
if(cljs.core.truth_(inst_47267)){
var statearr_47288_47308 = state_47285__$1;
(statearr_47288_47308[(1)] = (8));

} else {
var statearr_47289_47309 = state_47285__$1;
(statearr_47289_47309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (1))){
var inst_47254 = cljs.core.vec.call(null,chs);
var inst_47255 = inst_47254;
var state_47285__$1 = (function (){var statearr_47290 = state_47285;
(statearr_47290[(10)] = inst_47255);

return statearr_47290;
})();
var statearr_47291_47310 = state_47285__$1;
(statearr_47291_47310[(2)] = null);

(statearr_47291_47310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (4))){
var inst_47255 = (state_47285[(10)]);
var state_47285__$1 = state_47285;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47285__$1,(7),inst_47255);
} else {
if((state_val_47286 === (6))){
var inst_47281 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47292_47311 = state_47285__$1;
(statearr_47292_47311[(2)] = inst_47281);

(statearr_47292_47311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (3))){
var inst_47283 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47285__$1,inst_47283);
} else {
if((state_val_47286 === (2))){
var inst_47255 = (state_47285[(10)]);
var inst_47257 = cljs.core.count.call(null,inst_47255);
var inst_47258 = (inst_47257 > (0));
var state_47285__$1 = state_47285;
if(cljs.core.truth_(inst_47258)){
var statearr_47294_47312 = state_47285__$1;
(statearr_47294_47312[(1)] = (4));

} else {
var statearr_47295_47313 = state_47285__$1;
(statearr_47295_47313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (11))){
var inst_47255 = (state_47285[(10)]);
var inst_47274 = (state_47285[(2)]);
var tmp47293 = inst_47255;
var inst_47255__$1 = tmp47293;
var state_47285__$1 = (function (){var statearr_47296 = state_47285;
(statearr_47296[(11)] = inst_47274);

(statearr_47296[(10)] = inst_47255__$1);

return statearr_47296;
})();
var statearr_47297_47314 = state_47285__$1;
(statearr_47297_47314[(2)] = null);

(statearr_47297_47314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (9))){
var inst_47265 = (state_47285[(8)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47285__$1,(11),out,inst_47265);
} else {
if((state_val_47286 === (5))){
var inst_47279 = cljs.core.async.close_BANG_.call(null,out);
var state_47285__$1 = state_47285;
var statearr_47298_47315 = state_47285__$1;
(statearr_47298_47315[(2)] = inst_47279);

(statearr_47298_47315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (10))){
var inst_47277 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47299_47316 = state_47285__$1;
(statearr_47299_47316[(2)] = inst_47277);

(statearr_47299_47316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (8))){
var inst_47264 = (state_47285[(7)]);
var inst_47266 = (state_47285[(9)]);
var inst_47255 = (state_47285[(10)]);
var inst_47265 = (state_47285[(8)]);
var inst_47269 = (function (){var cs = inst_47255;
var vec__47260 = inst_47264;
var v = inst_47265;
var c = inst_47266;
return ((function (cs,vec__47260,v,c,inst_47264,inst_47266,inst_47255,inst_47265,state_val_47286,c__45908__auto___47307,out){
return (function (p1__47251_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47251_SHARP_);
});
;})(cs,vec__47260,v,c,inst_47264,inst_47266,inst_47255,inst_47265,state_val_47286,c__45908__auto___47307,out))
})();
var inst_47270 = cljs.core.filterv.call(null,inst_47269,inst_47255);
var inst_47255__$1 = inst_47270;
var state_47285__$1 = (function (){var statearr_47300 = state_47285;
(statearr_47300[(10)] = inst_47255__$1);

return statearr_47300;
})();
var statearr_47301_47317 = state_47285__$1;
(statearr_47301_47317[(2)] = null);

(statearr_47301_47317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47307,out))
;
return ((function (switch__45820__auto__,c__45908__auto___47307,out){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47302[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47302[(1)] = (1));

return statearr_47302;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47285){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47303){if((e47303 instanceof Object)){
var ex__45824__auto__ = e47303;
var statearr_47304_47318 = state_47285;
(statearr_47304_47318[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47319 = state_47285;
state_47285 = G__47319;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47307,out))
})();
var state__45910__auto__ = (function (){var statearr_47305 = f__45909__auto__.call(null);
(statearr_47305[(6)] = c__45908__auto___47307);

return statearr_47305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47307,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47321 = arguments.length;
switch (G__47321) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45908__auto___47366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47366,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47366,out){
return (function (state_47345){
var state_val_47346 = (state_47345[(1)]);
if((state_val_47346 === (7))){
var inst_47327 = (state_47345[(7)]);
var inst_47327__$1 = (state_47345[(2)]);
var inst_47328 = (inst_47327__$1 == null);
var inst_47329 = cljs.core.not.call(null,inst_47328);
var state_47345__$1 = (function (){var statearr_47347 = state_47345;
(statearr_47347[(7)] = inst_47327__$1);

return statearr_47347;
})();
if(inst_47329){
var statearr_47348_47367 = state_47345__$1;
(statearr_47348_47367[(1)] = (8));

} else {
var statearr_47349_47368 = state_47345__$1;
(statearr_47349_47368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (1))){
var inst_47322 = (0);
var state_47345__$1 = (function (){var statearr_47350 = state_47345;
(statearr_47350[(8)] = inst_47322);

return statearr_47350;
})();
var statearr_47351_47369 = state_47345__$1;
(statearr_47351_47369[(2)] = null);

(statearr_47351_47369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (4))){
var state_47345__$1 = state_47345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47345__$1,(7),ch);
} else {
if((state_val_47346 === (6))){
var inst_47340 = (state_47345[(2)]);
var state_47345__$1 = state_47345;
var statearr_47352_47370 = state_47345__$1;
(statearr_47352_47370[(2)] = inst_47340);

(statearr_47352_47370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (3))){
var inst_47342 = (state_47345[(2)]);
var inst_47343 = cljs.core.async.close_BANG_.call(null,out);
var state_47345__$1 = (function (){var statearr_47353 = state_47345;
(statearr_47353[(9)] = inst_47342);

return statearr_47353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47345__$1,inst_47343);
} else {
if((state_val_47346 === (2))){
var inst_47322 = (state_47345[(8)]);
var inst_47324 = (inst_47322 < n);
var state_47345__$1 = state_47345;
if(cljs.core.truth_(inst_47324)){
var statearr_47354_47371 = state_47345__$1;
(statearr_47354_47371[(1)] = (4));

} else {
var statearr_47355_47372 = state_47345__$1;
(statearr_47355_47372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (11))){
var inst_47322 = (state_47345[(8)]);
var inst_47332 = (state_47345[(2)]);
var inst_47333 = (inst_47322 + (1));
var inst_47322__$1 = inst_47333;
var state_47345__$1 = (function (){var statearr_47356 = state_47345;
(statearr_47356[(10)] = inst_47332);

(statearr_47356[(8)] = inst_47322__$1);

return statearr_47356;
})();
var statearr_47357_47373 = state_47345__$1;
(statearr_47357_47373[(2)] = null);

(statearr_47357_47373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (9))){
var state_47345__$1 = state_47345;
var statearr_47358_47374 = state_47345__$1;
(statearr_47358_47374[(2)] = null);

(statearr_47358_47374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (5))){
var state_47345__$1 = state_47345;
var statearr_47359_47375 = state_47345__$1;
(statearr_47359_47375[(2)] = null);

(statearr_47359_47375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (10))){
var inst_47337 = (state_47345[(2)]);
var state_47345__$1 = state_47345;
var statearr_47360_47376 = state_47345__$1;
(statearr_47360_47376[(2)] = inst_47337);

(statearr_47360_47376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47346 === (8))){
var inst_47327 = (state_47345[(7)]);
var state_47345__$1 = state_47345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47345__$1,(11),out,inst_47327);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47366,out))
;
return ((function (switch__45820__auto__,c__45908__auto___47366,out){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47361[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47361[(1)] = (1));

return statearr_47361;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47345){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47362){if((e47362 instanceof Object)){
var ex__45824__auto__ = e47362;
var statearr_47363_47377 = state_47345;
(statearr_47363_47377[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47378 = state_47345;
state_47345 = G__47378;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47366,out))
})();
var state__45910__auto__ = (function (){var statearr_47364 = f__45909__auto__.call(null);
(statearr_47364[(6)] = c__45908__auto___47366);

return statearr_47364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47366,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47380 = (function (f,ch,meta47381){
this.f = f;
this.ch = ch;
this.meta47381 = meta47381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47382,meta47381__$1){
var self__ = this;
var _47382__$1 = this;
return (new cljs.core.async.t_cljs$core$async47380(self__.f,self__.ch,meta47381__$1));
});

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47382){
var self__ = this;
var _47382__$1 = this;
return self__.meta47381;
});

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47383 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47383 = (function (f,ch,meta47381,_,fn1,meta47384){
this.f = f;
this.ch = ch;
this.meta47381 = meta47381;
this._ = _;
this.fn1 = fn1;
this.meta47384 = meta47384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47385,meta47384__$1){
var self__ = this;
var _47385__$1 = this;
return (new cljs.core.async.t_cljs$core$async47383(self__.f,self__.ch,self__.meta47381,self__._,self__.fn1,meta47384__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47385){
var self__ = this;
var _47385__$1 = this;
return self__.meta47384;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47383.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47383.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47379_SHARP_){
return f1.call(null,(((p1__47379_SHARP_ == null))?null:self__.f.call(null,p1__47379_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47383.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47381","meta47381",-56916716,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47380","cljs.core.async/t_cljs$core$async47380",195157139,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47384","meta47384",-50178592,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47383.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47383";

cljs.core.async.t_cljs$core$async47383.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async47383");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47383 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47383(f__$1,ch__$1,meta47381__$1,___$2,fn1__$1,meta47384){
return (new cljs.core.async.t_cljs$core$async47383(f__$1,ch__$1,meta47381__$1,___$2,fn1__$1,meta47384));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47383(self__.f,self__.ch,self__.meta47381,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41373__auto__ = ret;
if(cljs.core.truth_(and__41373__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41373__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47381","meta47381",-56916716,null)], null);
});

cljs.core.async.t_cljs$core$async47380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47380";

cljs.core.async.t_cljs$core$async47380.cljs$lang$ctorPrWriter = (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async47380");
});

cljs.core.async.__GT_t_cljs$core$async47380 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47380(f__$1,ch__$1,meta47381){
return (new cljs.core.async.t_cljs$core$async47380(f__$1,ch__$1,meta47381));
});

}

return (new cljs.core.async.t_cljs$core$async47380(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47386 = (function (f,ch,meta47387){
this.f = f;
this.ch = ch;
this.meta47387 = meta47387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47388,meta47387__$1){
var self__ = this;
var _47388__$1 = this;
return (new cljs.core.async.t_cljs$core$async47386(self__.f,self__.ch,meta47387__$1));
});

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47388){
var self__ = this;
var _47388__$1 = this;
return self__.meta47387;
});

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47387","meta47387",930891608,null)], null);
});

cljs.core.async.t_cljs$core$async47386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47386";

cljs.core.async.t_cljs$core$async47386.cljs$lang$ctorPrWriter = (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async47386");
});

cljs.core.async.__GT_t_cljs$core$async47386 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47386(f__$1,ch__$1,meta47387){
return (new cljs.core.async.t_cljs$core$async47386(f__$1,ch__$1,meta47387));
});

}

return (new cljs.core.async.t_cljs$core$async47386(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47389 = (function (p,ch,meta47390){
this.p = p;
this.ch = ch;
this.meta47390 = meta47390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47391,meta47390__$1){
var self__ = this;
var _47391__$1 = this;
return (new cljs.core.async.t_cljs$core$async47389(self__.p,self__.ch,meta47390__$1));
});

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47391){
var self__ = this;
var _47391__$1 = this;
return self__.meta47390;
});

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47390","meta47390",1364980497,null)], null);
});

cljs.core.async.t_cljs$core$async47389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47389";

cljs.core.async.t_cljs$core$async47389.cljs$lang$ctorPrWriter = (function (this__42010__auto__,writer__42011__auto__,opt__42012__auto__){
return cljs.core._write.call(null,writer__42011__auto__,"cljs.core.async/t_cljs$core$async47389");
});

cljs.core.async.__GT_t_cljs$core$async47389 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47389(p__$1,ch__$1,meta47390){
return (new cljs.core.async.t_cljs$core$async47389(p__$1,ch__$1,meta47390));
});

}

return (new cljs.core.async.t_cljs$core$async47389(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47393 = arguments.length;
switch (G__47393) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45908__auto___47433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47433,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47433,out){
return (function (state_47414){
var state_val_47415 = (state_47414[(1)]);
if((state_val_47415 === (7))){
var inst_47410 = (state_47414[(2)]);
var state_47414__$1 = state_47414;
var statearr_47416_47434 = state_47414__$1;
(statearr_47416_47434[(2)] = inst_47410);

(statearr_47416_47434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (1))){
var state_47414__$1 = state_47414;
var statearr_47417_47435 = state_47414__$1;
(statearr_47417_47435[(2)] = null);

(statearr_47417_47435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (4))){
var inst_47396 = (state_47414[(7)]);
var inst_47396__$1 = (state_47414[(2)]);
var inst_47397 = (inst_47396__$1 == null);
var state_47414__$1 = (function (){var statearr_47418 = state_47414;
(statearr_47418[(7)] = inst_47396__$1);

return statearr_47418;
})();
if(cljs.core.truth_(inst_47397)){
var statearr_47419_47436 = state_47414__$1;
(statearr_47419_47436[(1)] = (5));

} else {
var statearr_47420_47437 = state_47414__$1;
(statearr_47420_47437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (6))){
var inst_47396 = (state_47414[(7)]);
var inst_47401 = p.call(null,inst_47396);
var state_47414__$1 = state_47414;
if(cljs.core.truth_(inst_47401)){
var statearr_47421_47438 = state_47414__$1;
(statearr_47421_47438[(1)] = (8));

} else {
var statearr_47422_47439 = state_47414__$1;
(statearr_47422_47439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (3))){
var inst_47412 = (state_47414[(2)]);
var state_47414__$1 = state_47414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47414__$1,inst_47412);
} else {
if((state_val_47415 === (2))){
var state_47414__$1 = state_47414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47414__$1,(4),ch);
} else {
if((state_val_47415 === (11))){
var inst_47404 = (state_47414[(2)]);
var state_47414__$1 = state_47414;
var statearr_47423_47440 = state_47414__$1;
(statearr_47423_47440[(2)] = inst_47404);

(statearr_47423_47440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (9))){
var state_47414__$1 = state_47414;
var statearr_47424_47441 = state_47414__$1;
(statearr_47424_47441[(2)] = null);

(statearr_47424_47441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (5))){
var inst_47399 = cljs.core.async.close_BANG_.call(null,out);
var state_47414__$1 = state_47414;
var statearr_47425_47442 = state_47414__$1;
(statearr_47425_47442[(2)] = inst_47399);

(statearr_47425_47442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (10))){
var inst_47407 = (state_47414[(2)]);
var state_47414__$1 = (function (){var statearr_47426 = state_47414;
(statearr_47426[(8)] = inst_47407);

return statearr_47426;
})();
var statearr_47427_47443 = state_47414__$1;
(statearr_47427_47443[(2)] = null);

(statearr_47427_47443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47415 === (8))){
var inst_47396 = (state_47414[(7)]);
var state_47414__$1 = state_47414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47414__$1,(11),out,inst_47396);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47433,out))
;
return ((function (switch__45820__auto__,c__45908__auto___47433,out){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47428 = [null,null,null,null,null,null,null,null,null];
(statearr_47428[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47428[(1)] = (1));

return statearr_47428;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47414){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47429){if((e47429 instanceof Object)){
var ex__45824__auto__ = e47429;
var statearr_47430_47444 = state_47414;
(statearr_47430_47444[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47445 = state_47414;
state_47414 = G__47445;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47433,out))
})();
var state__45910__auto__ = (function (){var statearr_47431 = f__45909__auto__.call(null);
(statearr_47431[(6)] = c__45908__auto___47433);

return statearr_47431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47433,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47447 = arguments.length;
switch (G__47447) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto__){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto__){
return (function (state_47510){
var state_val_47511 = (state_47510[(1)]);
if((state_val_47511 === (7))){
var inst_47506 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47512_47550 = state_47510__$1;
(statearr_47512_47550[(2)] = inst_47506);

(statearr_47512_47550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (20))){
var inst_47476 = (state_47510[(7)]);
var inst_47487 = (state_47510[(2)]);
var inst_47488 = cljs.core.next.call(null,inst_47476);
var inst_47462 = inst_47488;
var inst_47463 = null;
var inst_47464 = (0);
var inst_47465 = (0);
var state_47510__$1 = (function (){var statearr_47513 = state_47510;
(statearr_47513[(8)] = inst_47465);

(statearr_47513[(9)] = inst_47464);

(statearr_47513[(10)] = inst_47487);

(statearr_47513[(11)] = inst_47463);

(statearr_47513[(12)] = inst_47462);

return statearr_47513;
})();
var statearr_47514_47551 = state_47510__$1;
(statearr_47514_47551[(2)] = null);

(statearr_47514_47551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (1))){
var state_47510__$1 = state_47510;
var statearr_47515_47552 = state_47510__$1;
(statearr_47515_47552[(2)] = null);

(statearr_47515_47552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (4))){
var inst_47451 = (state_47510[(13)]);
var inst_47451__$1 = (state_47510[(2)]);
var inst_47452 = (inst_47451__$1 == null);
var state_47510__$1 = (function (){var statearr_47516 = state_47510;
(statearr_47516[(13)] = inst_47451__$1);

return statearr_47516;
})();
if(cljs.core.truth_(inst_47452)){
var statearr_47517_47553 = state_47510__$1;
(statearr_47517_47553[(1)] = (5));

} else {
var statearr_47518_47554 = state_47510__$1;
(statearr_47518_47554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (15))){
var state_47510__$1 = state_47510;
var statearr_47522_47555 = state_47510__$1;
(statearr_47522_47555[(2)] = null);

(statearr_47522_47555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (21))){
var state_47510__$1 = state_47510;
var statearr_47523_47556 = state_47510__$1;
(statearr_47523_47556[(2)] = null);

(statearr_47523_47556[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (13))){
var inst_47465 = (state_47510[(8)]);
var inst_47464 = (state_47510[(9)]);
var inst_47463 = (state_47510[(11)]);
var inst_47462 = (state_47510[(12)]);
var inst_47472 = (state_47510[(2)]);
var inst_47473 = (inst_47465 + (1));
var tmp47519 = inst_47464;
var tmp47520 = inst_47463;
var tmp47521 = inst_47462;
var inst_47462__$1 = tmp47521;
var inst_47463__$1 = tmp47520;
var inst_47464__$1 = tmp47519;
var inst_47465__$1 = inst_47473;
var state_47510__$1 = (function (){var statearr_47524 = state_47510;
(statearr_47524[(8)] = inst_47465__$1);

(statearr_47524[(9)] = inst_47464__$1);

(statearr_47524[(11)] = inst_47463__$1);

(statearr_47524[(12)] = inst_47462__$1);

(statearr_47524[(14)] = inst_47472);

return statearr_47524;
})();
var statearr_47525_47557 = state_47510__$1;
(statearr_47525_47557[(2)] = null);

(statearr_47525_47557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (22))){
var state_47510__$1 = state_47510;
var statearr_47526_47558 = state_47510__$1;
(statearr_47526_47558[(2)] = null);

(statearr_47526_47558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (6))){
var inst_47451 = (state_47510[(13)]);
var inst_47460 = f.call(null,inst_47451);
var inst_47461 = cljs.core.seq.call(null,inst_47460);
var inst_47462 = inst_47461;
var inst_47463 = null;
var inst_47464 = (0);
var inst_47465 = (0);
var state_47510__$1 = (function (){var statearr_47527 = state_47510;
(statearr_47527[(8)] = inst_47465);

(statearr_47527[(9)] = inst_47464);

(statearr_47527[(11)] = inst_47463);

(statearr_47527[(12)] = inst_47462);

return statearr_47527;
})();
var statearr_47528_47559 = state_47510__$1;
(statearr_47528_47559[(2)] = null);

(statearr_47528_47559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (17))){
var inst_47476 = (state_47510[(7)]);
var inst_47480 = cljs.core.chunk_first.call(null,inst_47476);
var inst_47481 = cljs.core.chunk_rest.call(null,inst_47476);
var inst_47482 = cljs.core.count.call(null,inst_47480);
var inst_47462 = inst_47481;
var inst_47463 = inst_47480;
var inst_47464 = inst_47482;
var inst_47465 = (0);
var state_47510__$1 = (function (){var statearr_47529 = state_47510;
(statearr_47529[(8)] = inst_47465);

(statearr_47529[(9)] = inst_47464);

(statearr_47529[(11)] = inst_47463);

(statearr_47529[(12)] = inst_47462);

return statearr_47529;
})();
var statearr_47530_47560 = state_47510__$1;
(statearr_47530_47560[(2)] = null);

(statearr_47530_47560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (3))){
var inst_47508 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47510__$1,inst_47508);
} else {
if((state_val_47511 === (12))){
var inst_47496 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47531_47561 = state_47510__$1;
(statearr_47531_47561[(2)] = inst_47496);

(statearr_47531_47561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (2))){
var state_47510__$1 = state_47510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47510__$1,(4),in$);
} else {
if((state_val_47511 === (23))){
var inst_47504 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47532_47562 = state_47510__$1;
(statearr_47532_47562[(2)] = inst_47504);

(statearr_47532_47562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (19))){
var inst_47491 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47533_47563 = state_47510__$1;
(statearr_47533_47563[(2)] = inst_47491);

(statearr_47533_47563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (11))){
var inst_47476 = (state_47510[(7)]);
var inst_47462 = (state_47510[(12)]);
var inst_47476__$1 = cljs.core.seq.call(null,inst_47462);
var state_47510__$1 = (function (){var statearr_47534 = state_47510;
(statearr_47534[(7)] = inst_47476__$1);

return statearr_47534;
})();
if(inst_47476__$1){
var statearr_47535_47564 = state_47510__$1;
(statearr_47535_47564[(1)] = (14));

} else {
var statearr_47536_47565 = state_47510__$1;
(statearr_47536_47565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (9))){
var inst_47498 = (state_47510[(2)]);
var inst_47499 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47510__$1 = (function (){var statearr_47537 = state_47510;
(statearr_47537[(15)] = inst_47498);

return statearr_47537;
})();
if(cljs.core.truth_(inst_47499)){
var statearr_47538_47566 = state_47510__$1;
(statearr_47538_47566[(1)] = (21));

} else {
var statearr_47539_47567 = state_47510__$1;
(statearr_47539_47567[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (5))){
var inst_47454 = cljs.core.async.close_BANG_.call(null,out);
var state_47510__$1 = state_47510;
var statearr_47540_47568 = state_47510__$1;
(statearr_47540_47568[(2)] = inst_47454);

(statearr_47540_47568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (14))){
var inst_47476 = (state_47510[(7)]);
var inst_47478 = cljs.core.chunked_seq_QMARK_.call(null,inst_47476);
var state_47510__$1 = state_47510;
if(inst_47478){
var statearr_47541_47569 = state_47510__$1;
(statearr_47541_47569[(1)] = (17));

} else {
var statearr_47542_47570 = state_47510__$1;
(statearr_47542_47570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (16))){
var inst_47494 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47543_47571 = state_47510__$1;
(statearr_47543_47571[(2)] = inst_47494);

(statearr_47543_47571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (10))){
var inst_47465 = (state_47510[(8)]);
var inst_47463 = (state_47510[(11)]);
var inst_47470 = cljs.core._nth.call(null,inst_47463,inst_47465);
var state_47510__$1 = state_47510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47510__$1,(13),out,inst_47470);
} else {
if((state_val_47511 === (18))){
var inst_47476 = (state_47510[(7)]);
var inst_47485 = cljs.core.first.call(null,inst_47476);
var state_47510__$1 = state_47510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47510__$1,(20),out,inst_47485);
} else {
if((state_val_47511 === (8))){
var inst_47465 = (state_47510[(8)]);
var inst_47464 = (state_47510[(9)]);
var inst_47467 = (inst_47465 < inst_47464);
var inst_47468 = inst_47467;
var state_47510__$1 = state_47510;
if(cljs.core.truth_(inst_47468)){
var statearr_47544_47572 = state_47510__$1;
(statearr_47544_47572[(1)] = (10));

} else {
var statearr_47545_47573 = state_47510__$1;
(statearr_47545_47573[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto__))
;
return ((function (switch__45820__auto__,c__45908__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45821__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45821__auto____0 = (function (){
var statearr_47546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45821__auto__);

(statearr_47546[(1)] = (1));

return statearr_47546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45821__auto____1 = (function (state_47510){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47547){if((e47547 instanceof Object)){
var ex__45824__auto__ = e47547;
var statearr_47548_47574 = state_47510;
(statearr_47548_47574[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47575 = state_47510;
state_47510 = G__47575;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45821__auto__ = function(state_47510){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45821__auto____1.call(this,state_47510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45821__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45821__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto__))
})();
var state__45910__auto__ = (function (){var statearr_47549 = f__45909__auto__.call(null);
(statearr_47549[(6)] = c__45908__auto__);

return statearr_47549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto__))
);

return c__45908__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47577 = arguments.length;
switch (G__47577) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47580 = arguments.length;
switch (G__47580) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47583 = arguments.length;
switch (G__47583) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45908__auto___47630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47630,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47630,out){
return (function (state_47607){
var state_val_47608 = (state_47607[(1)]);
if((state_val_47608 === (7))){
var inst_47602 = (state_47607[(2)]);
var state_47607__$1 = state_47607;
var statearr_47609_47631 = state_47607__$1;
(statearr_47609_47631[(2)] = inst_47602);

(statearr_47609_47631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (1))){
var inst_47584 = null;
var state_47607__$1 = (function (){var statearr_47610 = state_47607;
(statearr_47610[(7)] = inst_47584);

return statearr_47610;
})();
var statearr_47611_47632 = state_47607__$1;
(statearr_47611_47632[(2)] = null);

(statearr_47611_47632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (4))){
var inst_47587 = (state_47607[(8)]);
var inst_47587__$1 = (state_47607[(2)]);
var inst_47588 = (inst_47587__$1 == null);
var inst_47589 = cljs.core.not.call(null,inst_47588);
var state_47607__$1 = (function (){var statearr_47612 = state_47607;
(statearr_47612[(8)] = inst_47587__$1);

return statearr_47612;
})();
if(inst_47589){
var statearr_47613_47633 = state_47607__$1;
(statearr_47613_47633[(1)] = (5));

} else {
var statearr_47614_47634 = state_47607__$1;
(statearr_47614_47634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (6))){
var state_47607__$1 = state_47607;
var statearr_47615_47635 = state_47607__$1;
(statearr_47615_47635[(2)] = null);

(statearr_47615_47635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (3))){
var inst_47604 = (state_47607[(2)]);
var inst_47605 = cljs.core.async.close_BANG_.call(null,out);
var state_47607__$1 = (function (){var statearr_47616 = state_47607;
(statearr_47616[(9)] = inst_47604);

return statearr_47616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47607__$1,inst_47605);
} else {
if((state_val_47608 === (2))){
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47607__$1,(4),ch);
} else {
if((state_val_47608 === (11))){
var inst_47587 = (state_47607[(8)]);
var inst_47596 = (state_47607[(2)]);
var inst_47584 = inst_47587;
var state_47607__$1 = (function (){var statearr_47617 = state_47607;
(statearr_47617[(7)] = inst_47584);

(statearr_47617[(10)] = inst_47596);

return statearr_47617;
})();
var statearr_47618_47636 = state_47607__$1;
(statearr_47618_47636[(2)] = null);

(statearr_47618_47636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (9))){
var inst_47587 = (state_47607[(8)]);
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47607__$1,(11),out,inst_47587);
} else {
if((state_val_47608 === (5))){
var inst_47584 = (state_47607[(7)]);
var inst_47587 = (state_47607[(8)]);
var inst_47591 = cljs.core._EQ_.call(null,inst_47587,inst_47584);
var state_47607__$1 = state_47607;
if(inst_47591){
var statearr_47620_47637 = state_47607__$1;
(statearr_47620_47637[(1)] = (8));

} else {
var statearr_47621_47638 = state_47607__$1;
(statearr_47621_47638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (10))){
var inst_47599 = (state_47607[(2)]);
var state_47607__$1 = state_47607;
var statearr_47622_47639 = state_47607__$1;
(statearr_47622_47639[(2)] = inst_47599);

(statearr_47622_47639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (8))){
var inst_47584 = (state_47607[(7)]);
var tmp47619 = inst_47584;
var inst_47584__$1 = tmp47619;
var state_47607__$1 = (function (){var statearr_47623 = state_47607;
(statearr_47623[(7)] = inst_47584__$1);

return statearr_47623;
})();
var statearr_47624_47640 = state_47607__$1;
(statearr_47624_47640[(2)] = null);

(statearr_47624_47640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47630,out))
;
return ((function (switch__45820__auto__,c__45908__auto___47630,out){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47625[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47625[(1)] = (1));

return statearr_47625;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47607){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47626){if((e47626 instanceof Object)){
var ex__45824__auto__ = e47626;
var statearr_47627_47641 = state_47607;
(statearr_47627_47641[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47642 = state_47607;
state_47607 = G__47642;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47630,out))
})();
var state__45910__auto__ = (function (){var statearr_47628 = f__45909__auto__.call(null);
(statearr_47628[(6)] = c__45908__auto___47630);

return statearr_47628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47630,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47644 = arguments.length;
switch (G__47644) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45908__auto___47710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47710,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47710,out){
return (function (state_47682){
var state_val_47683 = (state_47682[(1)]);
if((state_val_47683 === (7))){
var inst_47678 = (state_47682[(2)]);
var state_47682__$1 = state_47682;
var statearr_47684_47711 = state_47682__$1;
(statearr_47684_47711[(2)] = inst_47678);

(statearr_47684_47711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (1))){
var inst_47645 = (new Array(n));
var inst_47646 = inst_47645;
var inst_47647 = (0);
var state_47682__$1 = (function (){var statearr_47685 = state_47682;
(statearr_47685[(7)] = inst_47646);

(statearr_47685[(8)] = inst_47647);

return statearr_47685;
})();
var statearr_47686_47712 = state_47682__$1;
(statearr_47686_47712[(2)] = null);

(statearr_47686_47712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (4))){
var inst_47650 = (state_47682[(9)]);
var inst_47650__$1 = (state_47682[(2)]);
var inst_47651 = (inst_47650__$1 == null);
var inst_47652 = cljs.core.not.call(null,inst_47651);
var state_47682__$1 = (function (){var statearr_47687 = state_47682;
(statearr_47687[(9)] = inst_47650__$1);

return statearr_47687;
})();
if(inst_47652){
var statearr_47688_47713 = state_47682__$1;
(statearr_47688_47713[(1)] = (5));

} else {
var statearr_47689_47714 = state_47682__$1;
(statearr_47689_47714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (15))){
var inst_47672 = (state_47682[(2)]);
var state_47682__$1 = state_47682;
var statearr_47690_47715 = state_47682__$1;
(statearr_47690_47715[(2)] = inst_47672);

(statearr_47690_47715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (13))){
var state_47682__$1 = state_47682;
var statearr_47691_47716 = state_47682__$1;
(statearr_47691_47716[(2)] = null);

(statearr_47691_47716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (6))){
var inst_47647 = (state_47682[(8)]);
var inst_47668 = (inst_47647 > (0));
var state_47682__$1 = state_47682;
if(cljs.core.truth_(inst_47668)){
var statearr_47692_47717 = state_47682__$1;
(statearr_47692_47717[(1)] = (12));

} else {
var statearr_47693_47718 = state_47682__$1;
(statearr_47693_47718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (3))){
var inst_47680 = (state_47682[(2)]);
var state_47682__$1 = state_47682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47682__$1,inst_47680);
} else {
if((state_val_47683 === (12))){
var inst_47646 = (state_47682[(7)]);
var inst_47670 = cljs.core.vec.call(null,inst_47646);
var state_47682__$1 = state_47682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47682__$1,(15),out,inst_47670);
} else {
if((state_val_47683 === (2))){
var state_47682__$1 = state_47682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47682__$1,(4),ch);
} else {
if((state_val_47683 === (11))){
var inst_47662 = (state_47682[(2)]);
var inst_47663 = (new Array(n));
var inst_47646 = inst_47663;
var inst_47647 = (0);
var state_47682__$1 = (function (){var statearr_47694 = state_47682;
(statearr_47694[(7)] = inst_47646);

(statearr_47694[(8)] = inst_47647);

(statearr_47694[(10)] = inst_47662);

return statearr_47694;
})();
var statearr_47695_47719 = state_47682__$1;
(statearr_47695_47719[(2)] = null);

(statearr_47695_47719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (9))){
var inst_47646 = (state_47682[(7)]);
var inst_47660 = cljs.core.vec.call(null,inst_47646);
var state_47682__$1 = state_47682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47682__$1,(11),out,inst_47660);
} else {
if((state_val_47683 === (5))){
var inst_47655 = (state_47682[(11)]);
var inst_47646 = (state_47682[(7)]);
var inst_47647 = (state_47682[(8)]);
var inst_47650 = (state_47682[(9)]);
var inst_47654 = (inst_47646[inst_47647] = inst_47650);
var inst_47655__$1 = (inst_47647 + (1));
var inst_47656 = (inst_47655__$1 < n);
var state_47682__$1 = (function (){var statearr_47696 = state_47682;
(statearr_47696[(11)] = inst_47655__$1);

(statearr_47696[(12)] = inst_47654);

return statearr_47696;
})();
if(cljs.core.truth_(inst_47656)){
var statearr_47697_47720 = state_47682__$1;
(statearr_47697_47720[(1)] = (8));

} else {
var statearr_47698_47721 = state_47682__$1;
(statearr_47698_47721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (14))){
var inst_47675 = (state_47682[(2)]);
var inst_47676 = cljs.core.async.close_BANG_.call(null,out);
var state_47682__$1 = (function (){var statearr_47700 = state_47682;
(statearr_47700[(13)] = inst_47675);

return statearr_47700;
})();
var statearr_47701_47722 = state_47682__$1;
(statearr_47701_47722[(2)] = inst_47676);

(statearr_47701_47722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (10))){
var inst_47666 = (state_47682[(2)]);
var state_47682__$1 = state_47682;
var statearr_47702_47723 = state_47682__$1;
(statearr_47702_47723[(2)] = inst_47666);

(statearr_47702_47723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47683 === (8))){
var inst_47655 = (state_47682[(11)]);
var inst_47646 = (state_47682[(7)]);
var tmp47699 = inst_47646;
var inst_47646__$1 = tmp47699;
var inst_47647 = inst_47655;
var state_47682__$1 = (function (){var statearr_47703 = state_47682;
(statearr_47703[(7)] = inst_47646__$1);

(statearr_47703[(8)] = inst_47647);

return statearr_47703;
})();
var statearr_47704_47724 = state_47682__$1;
(statearr_47704_47724[(2)] = null);

(statearr_47704_47724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47710,out))
;
return ((function (switch__45820__auto__,c__45908__auto___47710,out){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47705[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47705[(1)] = (1));

return statearr_47705;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47682){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47706){if((e47706 instanceof Object)){
var ex__45824__auto__ = e47706;
var statearr_47707_47725 = state_47682;
(statearr_47707_47725[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47726 = state_47682;
state_47682 = G__47726;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47710,out))
})();
var state__45910__auto__ = (function (){var statearr_47708 = f__45909__auto__.call(null);
(statearr_47708[(6)] = c__45908__auto___47710);

return statearr_47708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47710,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47728 = arguments.length;
switch (G__47728) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45908__auto___47798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45908__auto___47798,out){
return (function (){
var f__45909__auto__ = (function (){var switch__45820__auto__ = ((function (c__45908__auto___47798,out){
return (function (state_47770){
var state_val_47771 = (state_47770[(1)]);
if((state_val_47771 === (7))){
var inst_47766 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47772_47799 = state_47770__$1;
(statearr_47772_47799[(2)] = inst_47766);

(statearr_47772_47799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (1))){
var inst_47729 = [];
var inst_47730 = inst_47729;
var inst_47731 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47770__$1 = (function (){var statearr_47773 = state_47770;
(statearr_47773[(7)] = inst_47731);

(statearr_47773[(8)] = inst_47730);

return statearr_47773;
})();
var statearr_47774_47800 = state_47770__$1;
(statearr_47774_47800[(2)] = null);

(statearr_47774_47800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (4))){
var inst_47734 = (state_47770[(9)]);
var inst_47734__$1 = (state_47770[(2)]);
var inst_47735 = (inst_47734__$1 == null);
var inst_47736 = cljs.core.not.call(null,inst_47735);
var state_47770__$1 = (function (){var statearr_47775 = state_47770;
(statearr_47775[(9)] = inst_47734__$1);

return statearr_47775;
})();
if(inst_47736){
var statearr_47776_47801 = state_47770__$1;
(statearr_47776_47801[(1)] = (5));

} else {
var statearr_47777_47802 = state_47770__$1;
(statearr_47777_47802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (15))){
var inst_47760 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47778_47803 = state_47770__$1;
(statearr_47778_47803[(2)] = inst_47760);

(statearr_47778_47803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (13))){
var state_47770__$1 = state_47770;
var statearr_47779_47804 = state_47770__$1;
(statearr_47779_47804[(2)] = null);

(statearr_47779_47804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (6))){
var inst_47730 = (state_47770[(8)]);
var inst_47755 = inst_47730.length;
var inst_47756 = (inst_47755 > (0));
var state_47770__$1 = state_47770;
if(cljs.core.truth_(inst_47756)){
var statearr_47780_47805 = state_47770__$1;
(statearr_47780_47805[(1)] = (12));

} else {
var statearr_47781_47806 = state_47770__$1;
(statearr_47781_47806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (3))){
var inst_47768 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47770__$1,inst_47768);
} else {
if((state_val_47771 === (12))){
var inst_47730 = (state_47770[(8)]);
var inst_47758 = cljs.core.vec.call(null,inst_47730);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47770__$1,(15),out,inst_47758);
} else {
if((state_val_47771 === (2))){
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(4),ch);
} else {
if((state_val_47771 === (11))){
var inst_47734 = (state_47770[(9)]);
var inst_47738 = (state_47770[(10)]);
var inst_47748 = (state_47770[(2)]);
var inst_47749 = [];
var inst_47750 = inst_47749.push(inst_47734);
var inst_47730 = inst_47749;
var inst_47731 = inst_47738;
var state_47770__$1 = (function (){var statearr_47782 = state_47770;
(statearr_47782[(11)] = inst_47750);

(statearr_47782[(12)] = inst_47748);

(statearr_47782[(7)] = inst_47731);

(statearr_47782[(8)] = inst_47730);

return statearr_47782;
})();
var statearr_47783_47807 = state_47770__$1;
(statearr_47783_47807[(2)] = null);

(statearr_47783_47807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (9))){
var inst_47730 = (state_47770[(8)]);
var inst_47746 = cljs.core.vec.call(null,inst_47730);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47770__$1,(11),out,inst_47746);
} else {
if((state_val_47771 === (5))){
var inst_47734 = (state_47770[(9)]);
var inst_47738 = (state_47770[(10)]);
var inst_47731 = (state_47770[(7)]);
var inst_47738__$1 = f.call(null,inst_47734);
var inst_47739 = cljs.core._EQ_.call(null,inst_47738__$1,inst_47731);
var inst_47740 = cljs.core.keyword_identical_QMARK_.call(null,inst_47731,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47741 = (inst_47739) || (inst_47740);
var state_47770__$1 = (function (){var statearr_47784 = state_47770;
(statearr_47784[(10)] = inst_47738__$1);

return statearr_47784;
})();
if(cljs.core.truth_(inst_47741)){
var statearr_47785_47808 = state_47770__$1;
(statearr_47785_47808[(1)] = (8));

} else {
var statearr_47786_47809 = state_47770__$1;
(statearr_47786_47809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (14))){
var inst_47763 = (state_47770[(2)]);
var inst_47764 = cljs.core.async.close_BANG_.call(null,out);
var state_47770__$1 = (function (){var statearr_47788 = state_47770;
(statearr_47788[(13)] = inst_47763);

return statearr_47788;
})();
var statearr_47789_47810 = state_47770__$1;
(statearr_47789_47810[(2)] = inst_47764);

(statearr_47789_47810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (10))){
var inst_47753 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47790_47811 = state_47770__$1;
(statearr_47790_47811[(2)] = inst_47753);

(statearr_47790_47811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (8))){
var inst_47734 = (state_47770[(9)]);
var inst_47738 = (state_47770[(10)]);
var inst_47730 = (state_47770[(8)]);
var inst_47743 = inst_47730.push(inst_47734);
var tmp47787 = inst_47730;
var inst_47730__$1 = tmp47787;
var inst_47731 = inst_47738;
var state_47770__$1 = (function (){var statearr_47791 = state_47770;
(statearr_47791[(14)] = inst_47743);

(statearr_47791[(7)] = inst_47731);

(statearr_47791[(8)] = inst_47730__$1);

return statearr_47791;
})();
var statearr_47792_47812 = state_47770__$1;
(statearr_47792_47812[(2)] = null);

(statearr_47792_47812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45908__auto___47798,out))
;
return ((function (switch__45820__auto__,c__45908__auto___47798,out){
return (function() {
var cljs$core$async$state_machine__45821__auto__ = null;
var cljs$core$async$state_machine__45821__auto____0 = (function (){
var statearr_47793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47793[(0)] = cljs$core$async$state_machine__45821__auto__);

(statearr_47793[(1)] = (1));

return statearr_47793;
});
var cljs$core$async$state_machine__45821__auto____1 = (function (state_47770){
while(true){
var ret_value__45822__auto__ = (function (){try{while(true){
var result__45823__auto__ = switch__45820__auto__.call(null,state_47770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45823__auto__;
}
break;
}
}catch (e47794){if((e47794 instanceof Object)){
var ex__45824__auto__ = e47794;
var statearr_47795_47813 = state_47770;
(statearr_47795_47813[(5)] = ex__45824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47814 = state_47770;
state_47770 = G__47814;
continue;
} else {
return ret_value__45822__auto__;
}
break;
}
});
cljs$core$async$state_machine__45821__auto__ = function(state_47770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45821__auto____1.call(this,state_47770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45821__auto____0;
cljs$core$async$state_machine__45821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45821__auto____1;
return cljs$core$async$state_machine__45821__auto__;
})()
;})(switch__45820__auto__,c__45908__auto___47798,out))
})();
var state__45910__auto__ = (function (){var statearr_47796 = f__45909__auto__.call(null);
(statearr_47796[(6)] = c__45908__auto___47798);

return statearr_47796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45910__auto__);
});})(c__45908__auto___47798,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1565798822929
