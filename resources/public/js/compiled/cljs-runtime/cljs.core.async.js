goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48864 = arguments.length;
switch (G__48864) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48865 = (function (f,blockable,meta48866){
this.f = f;
this.blockable = blockable;
this.meta48866 = meta48866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48867,meta48866__$1){
var self__ = this;
var _48867__$1 = this;
return (new cljs.core.async.t_cljs$core$async48865(self__.f,self__.blockable,meta48866__$1));
}));

(cljs.core.async.t_cljs$core$async48865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48867){
var self__ = this;
var _48867__$1 = this;
return self__.meta48866;
}));

(cljs.core.async.t_cljs$core$async48865.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48866","meta48866",777131807,null)], null);
}));

(cljs.core.async.t_cljs$core$async48865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48865");

(cljs.core.async.t_cljs$core$async48865.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48865.
 */
cljs.core.async.__GT_t_cljs$core$async48865 = (function cljs$core$async$__GT_t_cljs$core$async48865(f__$1,blockable__$1,meta48866){
return (new cljs.core.async.t_cljs$core$async48865(f__$1,blockable__$1,meta48866));
});

}

return (new cljs.core.async.t_cljs$core$async48865(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__48900 = arguments.length;
switch (G__48900) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48911 = arguments.length;
switch (G__48911) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__48922 = arguments.length;
switch (G__48922) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50381 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50381) : fn1.call(null,val_50381));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50381) : fn1.call(null,val_50381));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48933 = arguments.length;
switch (G__48933) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___50387 = n;
var x_50388 = (0);
while(true){
if((x_50388 < n__4695__auto___50387)){
(a[x_50388] = x_50388);

var G__50389 = (x_50388 + (1));
x_50388 = G__50389;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48934 = (function (flag,meta48935){
this.flag = flag;
this.meta48935 = meta48935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48936,meta48935__$1){
var self__ = this;
var _48936__$1 = this;
return (new cljs.core.async.t_cljs$core$async48934(self__.flag,meta48935__$1));
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48936){
var self__ = this;
var _48936__$1 = this;
return self__.meta48935;
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48935","meta48935",-1451171242,null)], null);
}));

(cljs.core.async.t_cljs$core$async48934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48934");

(cljs.core.async.t_cljs$core$async48934.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48934.
 */
cljs.core.async.__GT_t_cljs$core$async48934 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48934(flag__$1,meta48935){
return (new cljs.core.async.t_cljs$core$async48934(flag__$1,meta48935));
});

}

return (new cljs.core.async.t_cljs$core$async48934(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48944 = (function (flag,cb,meta48945){
this.flag = flag;
this.cb = cb;
this.meta48945 = meta48945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48946,meta48945__$1){
var self__ = this;
var _48946__$1 = this;
return (new cljs.core.async.t_cljs$core$async48944(self__.flag,self__.cb,meta48945__$1));
}));

(cljs.core.async.t_cljs$core$async48944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48946){
var self__ = this;
var _48946__$1 = this;
return self__.meta48945;
}));

(cljs.core.async.t_cljs$core$async48944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48945","meta48945",-379135173,null)], null);
}));

(cljs.core.async.t_cljs$core$async48944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48944");

(cljs.core.async.t_cljs$core$async48944.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48944.
 */
cljs.core.async.__GT_t_cljs$core$async48944 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48944(flag__$1,cb__$1,meta48945){
return (new cljs.core.async.t_cljs$core$async48944(flag__$1,cb__$1,meta48945));
});

}

return (new cljs.core.async.t_cljs$core$async48944(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48951_SHARP_){
var G__48953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48951_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48953) : fret.call(null,G__48953));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48952_SHARP_){
var G__48954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48952_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48954) : fret.call(null,G__48954));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50394 = (i + (1));
i = G__50394;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4824__auto__ = [];
var len__4818__auto___50395 = arguments.length;
var i__4819__auto___50396 = (0);
while(true){
if((i__4819__auto___50396 < len__4818__auto___50395)){
args__4824__auto__.push((arguments[i__4819__auto___50396]));

var G__50397 = (i__4819__auto___50396 + (1));
i__4819__auto___50396 = G__50397;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48957){
var map__48958 = p__48957;
var map__48958__$1 = cljs.core.__destructure_map(map__48958);
var opts = map__48958__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48955){
var G__48956 = cljs.core.first(seq48955);
var seq48955__$1 = cljs.core.next(seq48955);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48956,seq48955__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__48960 = arguments.length;
switch (G__48960) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48806__auto___50399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_48984){
var state_val_48985 = (state_48984[(1)]);
if((state_val_48985 === (7))){
var inst_48980 = (state_48984[(2)]);
var state_48984__$1 = state_48984;
var statearr_48986_50402 = state_48984__$1;
(statearr_48986_50402[(2)] = inst_48980);

(statearr_48986_50402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (1))){
var state_48984__$1 = state_48984;
var statearr_48987_50403 = state_48984__$1;
(statearr_48987_50403[(2)] = null);

(statearr_48987_50403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (4))){
var inst_48963 = (state_48984[(7)]);
var inst_48963__$1 = (state_48984[(2)]);
var inst_48964 = (inst_48963__$1 == null);
var state_48984__$1 = (function (){var statearr_48988 = state_48984;
(statearr_48988[(7)] = inst_48963__$1);

return statearr_48988;
})();
if(cljs.core.truth_(inst_48964)){
var statearr_48989_50404 = state_48984__$1;
(statearr_48989_50404[(1)] = (5));

} else {
var statearr_48990_50405 = state_48984__$1;
(statearr_48990_50405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (13))){
var state_48984__$1 = state_48984;
var statearr_48991_50407 = state_48984__$1;
(statearr_48991_50407[(2)] = null);

(statearr_48991_50407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (6))){
var inst_48963 = (state_48984[(7)]);
var state_48984__$1 = state_48984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48984__$1,(11),to,inst_48963);
} else {
if((state_val_48985 === (3))){
var inst_48982 = (state_48984[(2)]);
var state_48984__$1 = state_48984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48984__$1,inst_48982);
} else {
if((state_val_48985 === (12))){
var state_48984__$1 = state_48984;
var statearr_48992_50408 = state_48984__$1;
(statearr_48992_50408[(2)] = null);

(statearr_48992_50408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (2))){
var state_48984__$1 = state_48984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48984__$1,(4),from);
} else {
if((state_val_48985 === (11))){
var inst_48973 = (state_48984[(2)]);
var state_48984__$1 = state_48984;
if(cljs.core.truth_(inst_48973)){
var statearr_48993_50409 = state_48984__$1;
(statearr_48993_50409[(1)] = (12));

} else {
var statearr_48994_50410 = state_48984__$1;
(statearr_48994_50410[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (9))){
var state_48984__$1 = state_48984;
var statearr_48995_50411 = state_48984__$1;
(statearr_48995_50411[(2)] = null);

(statearr_48995_50411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (5))){
var state_48984__$1 = state_48984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48996_50412 = state_48984__$1;
(statearr_48996_50412[(1)] = (8));

} else {
var statearr_48997_50413 = state_48984__$1;
(statearr_48997_50413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (14))){
var inst_48978 = (state_48984[(2)]);
var state_48984__$1 = state_48984;
var statearr_48998_50414 = state_48984__$1;
(statearr_48998_50414[(2)] = inst_48978);

(statearr_48998_50414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (10))){
var inst_48970 = (state_48984[(2)]);
var state_48984__$1 = state_48984;
var statearr_48999_50415 = state_48984__$1;
(statearr_48999_50415[(2)] = inst_48970);

(statearr_48999_50415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48985 === (8))){
var inst_48967 = cljs.core.async.close_BANG_(to);
var state_48984__$1 = state_48984;
var statearr_49000_50416 = state_48984__$1;
(statearr_49000_50416[(2)] = inst_48967);

(statearr_49000_50416[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49001 = [null,null,null,null,null,null,null,null];
(statearr_49001[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49001[(1)] = (1));

return statearr_49001;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_48984){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_48984);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49002){var ex__48739__auto__ = e49002;
var statearr_49003_50421 = state_48984;
(statearr_49003_50421[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_48984[(4)]))){
var statearr_49004_50422 = state_48984;
(statearr_49004_50422[(1)] = cljs.core.first((state_48984[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50423 = state_48984;
state_48984 = G__50423;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_48984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_48984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49005 = f__48807__auto__();
(statearr_49005[(6)] = c__48806__auto___50399);

return statearr_49005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__49006){
var vec__49007 = p__49006;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49007,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49007,(1),null);
var job = vec__49007;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48806__auto___50424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49014){
var state_val_49015 = (state_49014[(1)]);
if((state_val_49015 === (1))){
var state_49014__$1 = state_49014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49014__$1,(2),res,v);
} else {
if((state_val_49015 === (2))){
var inst_49011 = (state_49014[(2)]);
var inst_49012 = cljs.core.async.close_BANG_(res);
var state_49014__$1 = (function (){var statearr_49016 = state_49014;
(statearr_49016[(7)] = inst_49011);

return statearr_49016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49014__$1,inst_49012);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0 = (function (){
var statearr_49017 = [null,null,null,null,null,null,null,null];
(statearr_49017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__);

(statearr_49017[(1)] = (1));

return statearr_49017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1 = (function (state_49014){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49014);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49018){var ex__48739__auto__ = e49018;
var statearr_49019_50425 = state_49014;
(statearr_49019_50425[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49014[(4)]))){
var statearr_49020_50426 = state_49014;
(statearr_49020_50426[(1)] = cljs.core.first((state_49014[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50427 = state_49014;
state_49014 = G__50427;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = function(state_49014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1.call(this,state_49014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49021 = f__48807__auto__();
(statearr_49021[(6)] = c__48806__auto___50424);

return statearr_49021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49022){
var vec__49023 = p__49022;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(1),null);
var job = vec__49023;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___50428 = n;
var __50429 = (0);
while(true){
if((__50429 < n__4695__auto___50428)){
var G__49026_50430 = type;
var G__49026_50431__$1 = (((G__49026_50430 instanceof cljs.core.Keyword))?G__49026_50430.fqn:null);
switch (G__49026_50431__$1) {
case "compute":
var c__48806__auto___50433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50429,c__48806__auto___50433,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async){
return (function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = ((function (__50429,c__48806__auto___50433,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async){
return (function (state_49039){
var state_val_49040 = (state_49039[(1)]);
if((state_val_49040 === (1))){
var state_49039__$1 = state_49039;
var statearr_49041_50434 = state_49039__$1;
(statearr_49041_50434[(2)] = null);

(statearr_49041_50434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (2))){
var state_49039__$1 = state_49039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49039__$1,(4),jobs);
} else {
if((state_val_49040 === (3))){
var inst_49037 = (state_49039[(2)]);
var state_49039__$1 = state_49039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49039__$1,inst_49037);
} else {
if((state_val_49040 === (4))){
var inst_49029 = (state_49039[(2)]);
var inst_49030 = process(inst_49029);
var state_49039__$1 = state_49039;
if(cljs.core.truth_(inst_49030)){
var statearr_49042_50437 = state_49039__$1;
(statearr_49042_50437[(1)] = (5));

} else {
var statearr_49043_50438 = state_49039__$1;
(statearr_49043_50438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (5))){
var state_49039__$1 = state_49039;
var statearr_49044_50439 = state_49039__$1;
(statearr_49044_50439[(2)] = null);

(statearr_49044_50439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (6))){
var state_49039__$1 = state_49039;
var statearr_49045_50440 = state_49039__$1;
(statearr_49045_50440[(2)] = null);

(statearr_49045_50440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (7))){
var inst_49035 = (state_49039[(2)]);
var state_49039__$1 = state_49039;
var statearr_49046_50441 = state_49039__$1;
(statearr_49046_50441[(2)] = inst_49035);

(statearr_49046_50441[(1)] = (3));


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
});})(__50429,c__48806__auto___50433,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async))
;
return ((function (__50429,switch__48735__auto__,c__48806__auto___50433,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0 = (function (){
var statearr_49047 = [null,null,null,null,null,null,null];
(statearr_49047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__);

(statearr_49047[(1)] = (1));

return statearr_49047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1 = (function (state_49039){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49039);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49048){var ex__48739__auto__ = e49048;
var statearr_49049_50442 = state_49039;
(statearr_49049_50442[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49039[(4)]))){
var statearr_49050_50443 = state_49039;
(statearr_49050_50443[(1)] = cljs.core.first((state_49039[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50444 = state_49039;
state_49039 = G__50444;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = function(state_49039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1.call(this,state_49039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__;
})()
;})(__50429,switch__48735__auto__,c__48806__auto___50433,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async))
})();
var state__48808__auto__ = (function (){var statearr_49051 = f__48807__auto__();
(statearr_49051[(6)] = c__48806__auto___50433);

return statearr_49051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
});})(__50429,c__48806__auto___50433,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async))
);


break;
case "async":
var c__48806__auto___50445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50429,c__48806__auto___50445,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async){
return (function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = ((function (__50429,c__48806__auto___50445,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async){
return (function (state_49064){
var state_val_49065 = (state_49064[(1)]);
if((state_val_49065 === (1))){
var state_49064__$1 = state_49064;
var statearr_49066_50453 = state_49064__$1;
(statearr_49066_50453[(2)] = null);

(statearr_49066_50453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49065 === (2))){
var state_49064__$1 = state_49064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49064__$1,(4),jobs);
} else {
if((state_val_49065 === (3))){
var inst_49062 = (state_49064[(2)]);
var state_49064__$1 = state_49064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49064__$1,inst_49062);
} else {
if((state_val_49065 === (4))){
var inst_49054 = (state_49064[(2)]);
var inst_49055 = async(inst_49054);
var state_49064__$1 = state_49064;
if(cljs.core.truth_(inst_49055)){
var statearr_49067_50460 = state_49064__$1;
(statearr_49067_50460[(1)] = (5));

} else {
var statearr_49068_50461 = state_49064__$1;
(statearr_49068_50461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49065 === (5))){
var state_49064__$1 = state_49064;
var statearr_49069_50462 = state_49064__$1;
(statearr_49069_50462[(2)] = null);

(statearr_49069_50462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49065 === (6))){
var state_49064__$1 = state_49064;
var statearr_49070_50463 = state_49064__$1;
(statearr_49070_50463[(2)] = null);

(statearr_49070_50463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49065 === (7))){
var inst_49060 = (state_49064[(2)]);
var state_49064__$1 = state_49064;
var statearr_49071_50467 = state_49064__$1;
(statearr_49071_50467[(2)] = inst_49060);

(statearr_49071_50467[(1)] = (3));


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
});})(__50429,c__48806__auto___50445,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async))
;
return ((function (__50429,switch__48735__auto__,c__48806__auto___50445,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0 = (function (){
var statearr_49072 = [null,null,null,null,null,null,null];
(statearr_49072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__);

(statearr_49072[(1)] = (1));

return statearr_49072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1 = (function (state_49064){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49064);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49073){var ex__48739__auto__ = e49073;
var statearr_49074_50478 = state_49064;
(statearr_49074_50478[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49064[(4)]))){
var statearr_49075_50479 = state_49064;
(statearr_49075_50479[(1)] = cljs.core.first((state_49064[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50480 = state_49064;
state_49064 = G__50480;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = function(state_49064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1.call(this,state_49064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__;
})()
;})(__50429,switch__48735__auto__,c__48806__auto___50445,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async))
})();
var state__48808__auto__ = (function (){var statearr_49076 = f__48807__auto__();
(statearr_49076[(6)] = c__48806__auto___50445);

return statearr_49076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
});})(__50429,c__48806__auto___50445,G__49026_50430,G__49026_50431__$1,n__4695__auto___50428,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49026_50431__$1)].join('')));

}

var G__50484 = (__50429 + (1));
__50429 = G__50484;
continue;
} else {
}
break;
}

var c__48806__auto___50485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49098){
var state_val_49099 = (state_49098[(1)]);
if((state_val_49099 === (7))){
var inst_49094 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
var statearr_49100_50486 = state_49098__$1;
(statearr_49100_50486[(2)] = inst_49094);

(statearr_49100_50486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (1))){
var state_49098__$1 = state_49098;
var statearr_49101_50487 = state_49098__$1;
(statearr_49101_50487[(2)] = null);

(statearr_49101_50487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (4))){
var inst_49079 = (state_49098[(7)]);
var inst_49079__$1 = (state_49098[(2)]);
var inst_49080 = (inst_49079__$1 == null);
var state_49098__$1 = (function (){var statearr_49102 = state_49098;
(statearr_49102[(7)] = inst_49079__$1);

return statearr_49102;
})();
if(cljs.core.truth_(inst_49080)){
var statearr_49103_50491 = state_49098__$1;
(statearr_49103_50491[(1)] = (5));

} else {
var statearr_49104_50492 = state_49098__$1;
(statearr_49104_50492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (6))){
var inst_49084 = (state_49098[(8)]);
var inst_49079 = (state_49098[(7)]);
var inst_49084__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49086 = [inst_49079,inst_49084__$1];
var inst_49087 = (new cljs.core.PersistentVector(null,2,(5),inst_49085,inst_49086,null));
var state_49098__$1 = (function (){var statearr_49105 = state_49098;
(statearr_49105[(8)] = inst_49084__$1);

return statearr_49105;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49098__$1,(8),jobs,inst_49087);
} else {
if((state_val_49099 === (3))){
var inst_49096 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49098__$1,inst_49096);
} else {
if((state_val_49099 === (2))){
var state_49098__$1 = state_49098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49098__$1,(4),from);
} else {
if((state_val_49099 === (9))){
var inst_49091 = (state_49098[(2)]);
var state_49098__$1 = (function (){var statearr_49106 = state_49098;
(statearr_49106[(9)] = inst_49091);

return statearr_49106;
})();
var statearr_49107_50493 = state_49098__$1;
(statearr_49107_50493[(2)] = null);

(statearr_49107_50493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (5))){
var inst_49082 = cljs.core.async.close_BANG_(jobs);
var state_49098__$1 = state_49098;
var statearr_49108_50494 = state_49098__$1;
(statearr_49108_50494[(2)] = inst_49082);

(statearr_49108_50494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (8))){
var inst_49084 = (state_49098[(8)]);
var inst_49089 = (state_49098[(2)]);
var state_49098__$1 = (function (){var statearr_49109 = state_49098;
(statearr_49109[(10)] = inst_49089);

return statearr_49109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49098__$1,(9),results,inst_49084);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0 = (function (){
var statearr_49110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__);

(statearr_49110[(1)] = (1));

return statearr_49110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1 = (function (state_49098){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49098);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49111){var ex__48739__auto__ = e49111;
var statearr_49112_50496 = state_49098;
(statearr_49112_50496[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49098[(4)]))){
var statearr_49113_50497 = state_49098;
(statearr_49113_50497[(1)] = cljs.core.first((state_49098[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50498 = state_49098;
state_49098 = G__50498;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = function(state_49098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1.call(this,state_49098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49114 = f__48807__auto__();
(statearr_49114[(6)] = c__48806__auto___50485);

return statearr_49114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


var c__48806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49152){
var state_val_49153 = (state_49152[(1)]);
if((state_val_49153 === (7))){
var inst_49148 = (state_49152[(2)]);
var state_49152__$1 = state_49152;
var statearr_49154_50499 = state_49152__$1;
(statearr_49154_50499[(2)] = inst_49148);

(statearr_49154_50499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (20))){
var state_49152__$1 = state_49152;
var statearr_49155_50500 = state_49152__$1;
(statearr_49155_50500[(2)] = null);

(statearr_49155_50500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (1))){
var state_49152__$1 = state_49152;
var statearr_49156_50501 = state_49152__$1;
(statearr_49156_50501[(2)] = null);

(statearr_49156_50501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (4))){
var inst_49117 = (state_49152[(7)]);
var inst_49117__$1 = (state_49152[(2)]);
var inst_49118 = (inst_49117__$1 == null);
var state_49152__$1 = (function (){var statearr_49157 = state_49152;
(statearr_49157[(7)] = inst_49117__$1);

return statearr_49157;
})();
if(cljs.core.truth_(inst_49118)){
var statearr_49158_50502 = state_49152__$1;
(statearr_49158_50502[(1)] = (5));

} else {
var statearr_49159_50503 = state_49152__$1;
(statearr_49159_50503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (15))){
var inst_49130 = (state_49152[(8)]);
var state_49152__$1 = state_49152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49152__$1,(18),to,inst_49130);
} else {
if((state_val_49153 === (21))){
var inst_49143 = (state_49152[(2)]);
var state_49152__$1 = state_49152;
var statearr_49160_50504 = state_49152__$1;
(statearr_49160_50504[(2)] = inst_49143);

(statearr_49160_50504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (13))){
var inst_49145 = (state_49152[(2)]);
var state_49152__$1 = (function (){var statearr_49161 = state_49152;
(statearr_49161[(9)] = inst_49145);

return statearr_49161;
})();
var statearr_49162_50505 = state_49152__$1;
(statearr_49162_50505[(2)] = null);

(statearr_49162_50505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (6))){
var inst_49117 = (state_49152[(7)]);
var state_49152__$1 = state_49152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49152__$1,(11),inst_49117);
} else {
if((state_val_49153 === (17))){
var inst_49138 = (state_49152[(2)]);
var state_49152__$1 = state_49152;
if(cljs.core.truth_(inst_49138)){
var statearr_49163_50506 = state_49152__$1;
(statearr_49163_50506[(1)] = (19));

} else {
var statearr_49164_50507 = state_49152__$1;
(statearr_49164_50507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (3))){
var inst_49150 = (state_49152[(2)]);
var state_49152__$1 = state_49152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49152__$1,inst_49150);
} else {
if((state_val_49153 === (12))){
var inst_49127 = (state_49152[(10)]);
var state_49152__$1 = state_49152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49152__$1,(14),inst_49127);
} else {
if((state_val_49153 === (2))){
var state_49152__$1 = state_49152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49152__$1,(4),results);
} else {
if((state_val_49153 === (19))){
var state_49152__$1 = state_49152;
var statearr_49165_50508 = state_49152__$1;
(statearr_49165_50508[(2)] = null);

(statearr_49165_50508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (11))){
var inst_49127 = (state_49152[(2)]);
var state_49152__$1 = (function (){var statearr_49166 = state_49152;
(statearr_49166[(10)] = inst_49127);

return statearr_49166;
})();
var statearr_49167_50509 = state_49152__$1;
(statearr_49167_50509[(2)] = null);

(statearr_49167_50509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (9))){
var state_49152__$1 = state_49152;
var statearr_49168_50510 = state_49152__$1;
(statearr_49168_50510[(2)] = null);

(statearr_49168_50510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (5))){
var state_49152__$1 = state_49152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49169_50511 = state_49152__$1;
(statearr_49169_50511[(1)] = (8));

} else {
var statearr_49170_50512 = state_49152__$1;
(statearr_49170_50512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (14))){
var inst_49132 = (state_49152[(11)]);
var inst_49130 = (state_49152[(8)]);
var inst_49130__$1 = (state_49152[(2)]);
var inst_49131 = (inst_49130__$1 == null);
var inst_49132__$1 = cljs.core.not(inst_49131);
var state_49152__$1 = (function (){var statearr_49171 = state_49152;
(statearr_49171[(11)] = inst_49132__$1);

(statearr_49171[(8)] = inst_49130__$1);

return statearr_49171;
})();
if(inst_49132__$1){
var statearr_49172_50518 = state_49152__$1;
(statearr_49172_50518[(1)] = (15));

} else {
var statearr_49173_50520 = state_49152__$1;
(statearr_49173_50520[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (16))){
var inst_49132 = (state_49152[(11)]);
var state_49152__$1 = state_49152;
var statearr_49174_50522 = state_49152__$1;
(statearr_49174_50522[(2)] = inst_49132);

(statearr_49174_50522[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (10))){
var inst_49124 = (state_49152[(2)]);
var state_49152__$1 = state_49152;
var statearr_49175_50524 = state_49152__$1;
(statearr_49175_50524[(2)] = inst_49124);

(statearr_49175_50524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (18))){
var inst_49135 = (state_49152[(2)]);
var state_49152__$1 = state_49152;
var statearr_49176_50525 = state_49152__$1;
(statearr_49176_50525[(2)] = inst_49135);

(statearr_49176_50525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49153 === (8))){
var inst_49121 = cljs.core.async.close_BANG_(to);
var state_49152__$1 = state_49152;
var statearr_49177_50526 = state_49152__$1;
(statearr_49177_50526[(2)] = inst_49121);

(statearr_49177_50526[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0 = (function (){
var statearr_49178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__);

(statearr_49178[(1)] = (1));

return statearr_49178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1 = (function (state_49152){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49152);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49179){var ex__48739__auto__ = e49179;
var statearr_49180_50527 = state_49152;
(statearr_49180_50527[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49152[(4)]))){
var statearr_49181_50528 = state_49152;
(statearr_49181_50528[(1)] = cljs.core.first((state_49152[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50529 = state_49152;
state_49152 = G__50529;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__ = function(state_49152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1.call(this,state_49152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49182 = f__48807__auto__();
(statearr_49182[(6)] = c__48806__auto__);

return statearr_49182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));

return c__48806__auto__;
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
var G__49184 = arguments.length;
switch (G__49184) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__49186 = arguments.length;
switch (G__49186) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__49188 = arguments.length;
switch (G__49188) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48806__auto___50560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49214){
var state_val_49215 = (state_49214[(1)]);
if((state_val_49215 === (7))){
var inst_49210 = (state_49214[(2)]);
var state_49214__$1 = state_49214;
var statearr_49216_50561 = state_49214__$1;
(statearr_49216_50561[(2)] = inst_49210);

(statearr_49216_50561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (1))){
var state_49214__$1 = state_49214;
var statearr_49217_50562 = state_49214__$1;
(statearr_49217_50562[(2)] = null);

(statearr_49217_50562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (4))){
var inst_49191 = (state_49214[(7)]);
var inst_49191__$1 = (state_49214[(2)]);
var inst_49192 = (inst_49191__$1 == null);
var state_49214__$1 = (function (){var statearr_49218 = state_49214;
(statearr_49218[(7)] = inst_49191__$1);

return statearr_49218;
})();
if(cljs.core.truth_(inst_49192)){
var statearr_49219_50563 = state_49214__$1;
(statearr_49219_50563[(1)] = (5));

} else {
var statearr_49220_50564 = state_49214__$1;
(statearr_49220_50564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (13))){
var state_49214__$1 = state_49214;
var statearr_49221_50565 = state_49214__$1;
(statearr_49221_50565[(2)] = null);

(statearr_49221_50565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (6))){
var inst_49191 = (state_49214[(7)]);
var inst_49197 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49191) : p.call(null,inst_49191));
var state_49214__$1 = state_49214;
if(cljs.core.truth_(inst_49197)){
var statearr_49222_50566 = state_49214__$1;
(statearr_49222_50566[(1)] = (9));

} else {
var statearr_49223_50567 = state_49214__$1;
(statearr_49223_50567[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (3))){
var inst_49212 = (state_49214[(2)]);
var state_49214__$1 = state_49214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49214__$1,inst_49212);
} else {
if((state_val_49215 === (12))){
var state_49214__$1 = state_49214;
var statearr_49224_50568 = state_49214__$1;
(statearr_49224_50568[(2)] = null);

(statearr_49224_50568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (2))){
var state_49214__$1 = state_49214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49214__$1,(4),ch);
} else {
if((state_val_49215 === (11))){
var inst_49191 = (state_49214[(7)]);
var inst_49201 = (state_49214[(2)]);
var state_49214__$1 = state_49214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49214__$1,(8),inst_49201,inst_49191);
} else {
if((state_val_49215 === (9))){
var state_49214__$1 = state_49214;
var statearr_49225_50575 = state_49214__$1;
(statearr_49225_50575[(2)] = tc);

(statearr_49225_50575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (5))){
var inst_49194 = cljs.core.async.close_BANG_(tc);
var inst_49195 = cljs.core.async.close_BANG_(fc);
var state_49214__$1 = (function (){var statearr_49226 = state_49214;
(statearr_49226[(8)] = inst_49194);

return statearr_49226;
})();
var statearr_49227_50576 = state_49214__$1;
(statearr_49227_50576[(2)] = inst_49195);

(statearr_49227_50576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (14))){
var inst_49208 = (state_49214[(2)]);
var state_49214__$1 = state_49214;
var statearr_49228_50577 = state_49214__$1;
(statearr_49228_50577[(2)] = inst_49208);

(statearr_49228_50577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (10))){
var state_49214__$1 = state_49214;
var statearr_49229_50578 = state_49214__$1;
(statearr_49229_50578[(2)] = fc);

(statearr_49229_50578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49215 === (8))){
var inst_49203 = (state_49214[(2)]);
var state_49214__$1 = state_49214;
if(cljs.core.truth_(inst_49203)){
var statearr_49230_50579 = state_49214__$1;
(statearr_49230_50579[(1)] = (12));

} else {
var statearr_49231_50580 = state_49214__$1;
(statearr_49231_50580[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49232 = [null,null,null,null,null,null,null,null,null];
(statearr_49232[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49232[(1)] = (1));

return statearr_49232;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_49214){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49214);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49233){var ex__48739__auto__ = e49233;
var statearr_49234_50581 = state_49214;
(statearr_49234_50581[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49214[(4)]))){
var statearr_49235_50582 = state_49214;
(statearr_49235_50582[(1)] = cljs.core.first((state_49214[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50583 = state_49214;
state_49214 = G__50583;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_49214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_49214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49236 = f__48807__auto__();
(statearr_49236[(6)] = c__48806__auto___50560);

return statearr_49236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49258){
var state_val_49259 = (state_49258[(1)]);
if((state_val_49259 === (7))){
var inst_49254 = (state_49258[(2)]);
var state_49258__$1 = state_49258;
var statearr_49260_50584 = state_49258__$1;
(statearr_49260_50584[(2)] = inst_49254);

(statearr_49260_50584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (1))){
var inst_49237 = init;
var inst_49238 = inst_49237;
var state_49258__$1 = (function (){var statearr_49261 = state_49258;
(statearr_49261[(7)] = inst_49238);

return statearr_49261;
})();
var statearr_49262_50585 = state_49258__$1;
(statearr_49262_50585[(2)] = null);

(statearr_49262_50585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (4))){
var inst_49241 = (state_49258[(8)]);
var inst_49241__$1 = (state_49258[(2)]);
var inst_49242 = (inst_49241__$1 == null);
var state_49258__$1 = (function (){var statearr_49263 = state_49258;
(statearr_49263[(8)] = inst_49241__$1);

return statearr_49263;
})();
if(cljs.core.truth_(inst_49242)){
var statearr_49264_50586 = state_49258__$1;
(statearr_49264_50586[(1)] = (5));

} else {
var statearr_49265_50587 = state_49258__$1;
(statearr_49265_50587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (6))){
var inst_49238 = (state_49258[(7)]);
var inst_49245 = (state_49258[(9)]);
var inst_49241 = (state_49258[(8)]);
var inst_49245__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49238,inst_49241) : f.call(null,inst_49238,inst_49241));
var inst_49246 = cljs.core.reduced_QMARK_(inst_49245__$1);
var state_49258__$1 = (function (){var statearr_49266 = state_49258;
(statearr_49266[(9)] = inst_49245__$1);

return statearr_49266;
})();
if(inst_49246){
var statearr_49267_50594 = state_49258__$1;
(statearr_49267_50594[(1)] = (8));

} else {
var statearr_49268_50595 = state_49258__$1;
(statearr_49268_50595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (3))){
var inst_49256 = (state_49258[(2)]);
var state_49258__$1 = state_49258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49258__$1,inst_49256);
} else {
if((state_val_49259 === (2))){
var state_49258__$1 = state_49258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49258__$1,(4),ch);
} else {
if((state_val_49259 === (9))){
var inst_49245 = (state_49258[(9)]);
var inst_49238 = inst_49245;
var state_49258__$1 = (function (){var statearr_49269 = state_49258;
(statearr_49269[(7)] = inst_49238);

return statearr_49269;
})();
var statearr_49270_50596 = state_49258__$1;
(statearr_49270_50596[(2)] = null);

(statearr_49270_50596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (5))){
var inst_49238 = (state_49258[(7)]);
var state_49258__$1 = state_49258;
var statearr_49271_50597 = state_49258__$1;
(statearr_49271_50597[(2)] = inst_49238);

(statearr_49271_50597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (10))){
var inst_49252 = (state_49258[(2)]);
var state_49258__$1 = state_49258;
var statearr_49272_50598 = state_49258__$1;
(statearr_49272_50598[(2)] = inst_49252);

(statearr_49272_50598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49259 === (8))){
var inst_49245 = (state_49258[(9)]);
var inst_49248 = cljs.core.deref(inst_49245);
var state_49258__$1 = state_49258;
var statearr_49273_50599 = state_49258__$1;
(statearr_49273_50599[(2)] = inst_49248);

(statearr_49273_50599[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48736__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48736__auto____0 = (function (){
var statearr_49274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49274[(0)] = cljs$core$async$reduce_$_state_machine__48736__auto__);

(statearr_49274[(1)] = (1));

return statearr_49274;
});
var cljs$core$async$reduce_$_state_machine__48736__auto____1 = (function (state_49258){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49258);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49275){var ex__48739__auto__ = e49275;
var statearr_49276_50600 = state_49258;
(statearr_49276_50600[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49258[(4)]))){
var statearr_49277_50601 = state_49258;
(statearr_49277_50601[(1)] = cljs.core.first((state_49258[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50602 = state_49258;
state_49258 = G__50602;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48736__auto__ = function(state_49258){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48736__auto____1.call(this,state_49258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48736__auto____0;
cljs$core$async$reduce_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48736__auto____1;
return cljs$core$async$reduce_$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49278 = f__48807__auto__();
(statearr_49278[(6)] = c__48806__auto__);

return statearr_49278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));

return c__48806__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49284){
var state_val_49285 = (state_49284[(1)]);
if((state_val_49285 === (1))){
var inst_49279 = cljs.core.async.reduce(f__$1,init,ch);
var state_49284__$1 = state_49284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49284__$1,(2),inst_49279);
} else {
if((state_val_49285 === (2))){
var inst_49281 = (state_49284[(2)]);
var inst_49282 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49281) : f__$1.call(null,inst_49281));
var state_49284__$1 = state_49284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49284__$1,inst_49282);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48736__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48736__auto____0 = (function (){
var statearr_49286 = [null,null,null,null,null,null,null];
(statearr_49286[(0)] = cljs$core$async$transduce_$_state_machine__48736__auto__);

(statearr_49286[(1)] = (1));

return statearr_49286;
});
var cljs$core$async$transduce_$_state_machine__48736__auto____1 = (function (state_49284){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49284);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49287){var ex__48739__auto__ = e49287;
var statearr_49288_50603 = state_49284;
(statearr_49288_50603[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49284[(4)]))){
var statearr_49289_50604 = state_49284;
(statearr_49289_50604[(1)] = cljs.core.first((state_49284[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50605 = state_49284;
state_49284 = G__50605;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48736__auto__ = function(state_49284){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48736__auto____1.call(this,state_49284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48736__auto____0;
cljs$core$async$transduce_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48736__auto____1;
return cljs$core$async$transduce_$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49290 = f__48807__auto__();
(statearr_49290[(6)] = c__48806__auto__);

return statearr_49290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));

return c__48806__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49292 = arguments.length;
switch (G__49292) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49317){
var state_val_49318 = (state_49317[(1)]);
if((state_val_49318 === (7))){
var inst_49299 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
var statearr_49319_50607 = state_49317__$1;
(statearr_49319_50607[(2)] = inst_49299);

(statearr_49319_50607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (1))){
var inst_49293 = cljs.core.seq(coll);
var inst_49294 = inst_49293;
var state_49317__$1 = (function (){var statearr_49320 = state_49317;
(statearr_49320[(7)] = inst_49294);

return statearr_49320;
})();
var statearr_49321_50608 = state_49317__$1;
(statearr_49321_50608[(2)] = null);

(statearr_49321_50608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (4))){
var inst_49294 = (state_49317[(7)]);
var inst_49297 = cljs.core.first(inst_49294);
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49317__$1,(7),ch,inst_49297);
} else {
if((state_val_49318 === (13))){
var inst_49311 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
var statearr_49322_50609 = state_49317__$1;
(statearr_49322_50609[(2)] = inst_49311);

(statearr_49322_50609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (6))){
var inst_49302 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
if(cljs.core.truth_(inst_49302)){
var statearr_49323_50610 = state_49317__$1;
(statearr_49323_50610[(1)] = (8));

} else {
var statearr_49324_50611 = state_49317__$1;
(statearr_49324_50611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (3))){
var inst_49315 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49317__$1,inst_49315);
} else {
if((state_val_49318 === (12))){
var state_49317__$1 = state_49317;
var statearr_49325_50612 = state_49317__$1;
(statearr_49325_50612[(2)] = null);

(statearr_49325_50612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (2))){
var inst_49294 = (state_49317[(7)]);
var state_49317__$1 = state_49317;
if(cljs.core.truth_(inst_49294)){
var statearr_49326_50613 = state_49317__$1;
(statearr_49326_50613[(1)] = (4));

} else {
var statearr_49327_50614 = state_49317__$1;
(statearr_49327_50614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (11))){
var inst_49308 = cljs.core.async.close_BANG_(ch);
var state_49317__$1 = state_49317;
var statearr_49328_50615 = state_49317__$1;
(statearr_49328_50615[(2)] = inst_49308);

(statearr_49328_50615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (9))){
var state_49317__$1 = state_49317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49329_50616 = state_49317__$1;
(statearr_49329_50616[(1)] = (11));

} else {
var statearr_49330_50617 = state_49317__$1;
(statearr_49330_50617[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (5))){
var inst_49294 = (state_49317[(7)]);
var state_49317__$1 = state_49317;
var statearr_49331_50619 = state_49317__$1;
(statearr_49331_50619[(2)] = inst_49294);

(statearr_49331_50619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (10))){
var inst_49313 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
var statearr_49332_50620 = state_49317__$1;
(statearr_49332_50620[(2)] = inst_49313);

(statearr_49332_50620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (8))){
var inst_49294 = (state_49317[(7)]);
var inst_49304 = cljs.core.next(inst_49294);
var inst_49294__$1 = inst_49304;
var state_49317__$1 = (function (){var statearr_49333 = state_49317;
(statearr_49333[(7)] = inst_49294__$1);

return statearr_49333;
})();
var statearr_49334_50625 = state_49317__$1;
(statearr_49334_50625[(2)] = null);

(statearr_49334_50625[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49335 = [null,null,null,null,null,null,null,null];
(statearr_49335[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49335[(1)] = (1));

return statearr_49335;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_49317){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49317);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49336){var ex__48739__auto__ = e49336;
var statearr_49337_50626 = state_49317;
(statearr_49337_50626[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49317[(4)]))){
var statearr_49338_50627 = state_49317;
(statearr_49338_50627[(1)] = cljs.core.first((state_49317[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50628 = state_49317;
state_49317 = G__50628;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_49317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_49317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49339 = f__48807__auto__();
(statearr_49339[(6)] = c__48806__auto__);

return statearr_49339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));

return c__48806__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49341 = arguments.length;
switch (G__49341) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50630 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50630(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50631 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50631(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50634 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50634(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50635 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50635(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49342 = (function (ch,cs,meta49343){
this.ch = ch;
this.cs = cs;
this.meta49343 = meta49343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49344,meta49343__$1){
var self__ = this;
var _49344__$1 = this;
return (new cljs.core.async.t_cljs$core$async49342(self__.ch,self__.cs,meta49343__$1));
}));

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49344){
var self__ = this;
var _49344__$1 = this;
return self__.meta49343;
}));

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49343","meta49343",464091084,null)], null);
}));

(cljs.core.async.t_cljs$core$async49342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49342");

(cljs.core.async.t_cljs$core$async49342.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49342.
 */
cljs.core.async.__GT_t_cljs$core$async49342 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49342(ch__$1,cs__$1,meta49343){
return (new cljs.core.async.t_cljs$core$async49342(ch__$1,cs__$1,meta49343));
});

}

return (new cljs.core.async.t_cljs$core$async49342(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48806__auto___50638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49477){
var state_val_49478 = (state_49477[(1)]);
if((state_val_49478 === (7))){
var inst_49473 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49479_50639 = state_49477__$1;
(statearr_49479_50639[(2)] = inst_49473);

(statearr_49479_50639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (20))){
var inst_49378 = (state_49477[(7)]);
var inst_49390 = cljs.core.first(inst_49378);
var inst_49391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49390,(0),null);
var inst_49392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49390,(1),null);
var state_49477__$1 = (function (){var statearr_49480 = state_49477;
(statearr_49480[(8)] = inst_49391);

return statearr_49480;
})();
if(cljs.core.truth_(inst_49392)){
var statearr_49481_50640 = state_49477__$1;
(statearr_49481_50640[(1)] = (22));

} else {
var statearr_49482_50641 = state_49477__$1;
(statearr_49482_50641[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (27))){
var inst_49420 = (state_49477[(9)]);
var inst_49427 = (state_49477[(10)]);
var inst_49347 = (state_49477[(11)]);
var inst_49422 = (state_49477[(12)]);
var inst_49427__$1 = cljs.core._nth(inst_49420,inst_49422);
var inst_49428 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49427__$1,inst_49347,done);
var state_49477__$1 = (function (){var statearr_49483 = state_49477;
(statearr_49483[(10)] = inst_49427__$1);

return statearr_49483;
})();
if(cljs.core.truth_(inst_49428)){
var statearr_49484_50642 = state_49477__$1;
(statearr_49484_50642[(1)] = (30));

} else {
var statearr_49485_50643 = state_49477__$1;
(statearr_49485_50643[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (1))){
var state_49477__$1 = state_49477;
var statearr_49486_50644 = state_49477__$1;
(statearr_49486_50644[(2)] = null);

(statearr_49486_50644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (24))){
var inst_49378 = (state_49477[(7)]);
var inst_49397 = (state_49477[(2)]);
var inst_49398 = cljs.core.next(inst_49378);
var inst_49356 = inst_49398;
var inst_49357 = null;
var inst_49358 = (0);
var inst_49359 = (0);
var state_49477__$1 = (function (){var statearr_49487 = state_49477;
(statearr_49487[(13)] = inst_49356);

(statearr_49487[(14)] = inst_49358);

(statearr_49487[(15)] = inst_49357);

(statearr_49487[(16)] = inst_49397);

(statearr_49487[(17)] = inst_49359);

return statearr_49487;
})();
var statearr_49488_50647 = state_49477__$1;
(statearr_49488_50647[(2)] = null);

(statearr_49488_50647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (39))){
var state_49477__$1 = state_49477;
var statearr_49492_50648 = state_49477__$1;
(statearr_49492_50648[(2)] = null);

(statearr_49492_50648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (4))){
var inst_49347 = (state_49477[(11)]);
var inst_49347__$1 = (state_49477[(2)]);
var inst_49348 = (inst_49347__$1 == null);
var state_49477__$1 = (function (){var statearr_49493 = state_49477;
(statearr_49493[(11)] = inst_49347__$1);

return statearr_49493;
})();
if(cljs.core.truth_(inst_49348)){
var statearr_49494_50649 = state_49477__$1;
(statearr_49494_50649[(1)] = (5));

} else {
var statearr_49495_50650 = state_49477__$1;
(statearr_49495_50650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (15))){
var inst_49356 = (state_49477[(13)]);
var inst_49358 = (state_49477[(14)]);
var inst_49357 = (state_49477[(15)]);
var inst_49359 = (state_49477[(17)]);
var inst_49374 = (state_49477[(2)]);
var inst_49375 = (inst_49359 + (1));
var tmp49489 = inst_49356;
var tmp49490 = inst_49358;
var tmp49491 = inst_49357;
var inst_49356__$1 = tmp49489;
var inst_49357__$1 = tmp49491;
var inst_49358__$1 = tmp49490;
var inst_49359__$1 = inst_49375;
var state_49477__$1 = (function (){var statearr_49496 = state_49477;
(statearr_49496[(13)] = inst_49356__$1);

(statearr_49496[(14)] = inst_49358__$1);

(statearr_49496[(15)] = inst_49357__$1);

(statearr_49496[(18)] = inst_49374);

(statearr_49496[(17)] = inst_49359__$1);

return statearr_49496;
})();
var statearr_49497_50651 = state_49477__$1;
(statearr_49497_50651[(2)] = null);

(statearr_49497_50651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (21))){
var inst_49401 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49501_50652 = state_49477__$1;
(statearr_49501_50652[(2)] = inst_49401);

(statearr_49501_50652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (31))){
var inst_49427 = (state_49477[(10)]);
var inst_49431 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49427);
var state_49477__$1 = state_49477;
var statearr_49502_50653 = state_49477__$1;
(statearr_49502_50653[(2)] = inst_49431);

(statearr_49502_50653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (32))){
var inst_49420 = (state_49477[(9)]);
var inst_49419 = (state_49477[(19)]);
var inst_49421 = (state_49477[(20)]);
var inst_49422 = (state_49477[(12)]);
var inst_49433 = (state_49477[(2)]);
var inst_49434 = (inst_49422 + (1));
var tmp49498 = inst_49420;
var tmp49499 = inst_49419;
var tmp49500 = inst_49421;
var inst_49419__$1 = tmp49499;
var inst_49420__$1 = tmp49498;
var inst_49421__$1 = tmp49500;
var inst_49422__$1 = inst_49434;
var state_49477__$1 = (function (){var statearr_49503 = state_49477;
(statearr_49503[(9)] = inst_49420__$1);

(statearr_49503[(19)] = inst_49419__$1);

(statearr_49503[(20)] = inst_49421__$1);

(statearr_49503[(12)] = inst_49422__$1);

(statearr_49503[(21)] = inst_49433);

return statearr_49503;
})();
var statearr_49504_50654 = state_49477__$1;
(statearr_49504_50654[(2)] = null);

(statearr_49504_50654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (40))){
var inst_49446 = (state_49477[(22)]);
var inst_49450 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49446);
var state_49477__$1 = state_49477;
var statearr_49505_50655 = state_49477__$1;
(statearr_49505_50655[(2)] = inst_49450);

(statearr_49505_50655[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (33))){
var inst_49437 = (state_49477[(23)]);
var inst_49439 = cljs.core.chunked_seq_QMARK_(inst_49437);
var state_49477__$1 = state_49477;
if(inst_49439){
var statearr_49506_50656 = state_49477__$1;
(statearr_49506_50656[(1)] = (36));

} else {
var statearr_49507_50657 = state_49477__$1;
(statearr_49507_50657[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (13))){
var inst_49368 = (state_49477[(24)]);
var inst_49371 = cljs.core.async.close_BANG_(inst_49368);
var state_49477__$1 = state_49477;
var statearr_49508_50658 = state_49477__$1;
(statearr_49508_50658[(2)] = inst_49371);

(statearr_49508_50658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (22))){
var inst_49391 = (state_49477[(8)]);
var inst_49394 = cljs.core.async.close_BANG_(inst_49391);
var state_49477__$1 = state_49477;
var statearr_49509_50659 = state_49477__$1;
(statearr_49509_50659[(2)] = inst_49394);

(statearr_49509_50659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (36))){
var inst_49437 = (state_49477[(23)]);
var inst_49441 = cljs.core.chunk_first(inst_49437);
var inst_49442 = cljs.core.chunk_rest(inst_49437);
var inst_49443 = cljs.core.count(inst_49441);
var inst_49419 = inst_49442;
var inst_49420 = inst_49441;
var inst_49421 = inst_49443;
var inst_49422 = (0);
var state_49477__$1 = (function (){var statearr_49510 = state_49477;
(statearr_49510[(9)] = inst_49420);

(statearr_49510[(19)] = inst_49419);

(statearr_49510[(20)] = inst_49421);

(statearr_49510[(12)] = inst_49422);

return statearr_49510;
})();
var statearr_49511_50660 = state_49477__$1;
(statearr_49511_50660[(2)] = null);

(statearr_49511_50660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (41))){
var inst_49437 = (state_49477[(23)]);
var inst_49452 = (state_49477[(2)]);
var inst_49453 = cljs.core.next(inst_49437);
var inst_49419 = inst_49453;
var inst_49420 = null;
var inst_49421 = (0);
var inst_49422 = (0);
var state_49477__$1 = (function (){var statearr_49512 = state_49477;
(statearr_49512[(9)] = inst_49420);

(statearr_49512[(19)] = inst_49419);

(statearr_49512[(20)] = inst_49421);

(statearr_49512[(12)] = inst_49422);

(statearr_49512[(25)] = inst_49452);

return statearr_49512;
})();
var statearr_49513_50661 = state_49477__$1;
(statearr_49513_50661[(2)] = null);

(statearr_49513_50661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (43))){
var state_49477__$1 = state_49477;
var statearr_49514_50663 = state_49477__$1;
(statearr_49514_50663[(2)] = null);

(statearr_49514_50663[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (29))){
var inst_49461 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49515_50664 = state_49477__$1;
(statearr_49515_50664[(2)] = inst_49461);

(statearr_49515_50664[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (44))){
var inst_49470 = (state_49477[(2)]);
var state_49477__$1 = (function (){var statearr_49516 = state_49477;
(statearr_49516[(26)] = inst_49470);

return statearr_49516;
})();
var statearr_49517_50665 = state_49477__$1;
(statearr_49517_50665[(2)] = null);

(statearr_49517_50665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (6))){
var inst_49411 = (state_49477[(27)]);
var inst_49410 = cljs.core.deref(cs);
var inst_49411__$1 = cljs.core.keys(inst_49410);
var inst_49412 = cljs.core.count(inst_49411__$1);
var inst_49413 = cljs.core.reset_BANG_(dctr,inst_49412);
var inst_49418 = cljs.core.seq(inst_49411__$1);
var inst_49419 = inst_49418;
var inst_49420 = null;
var inst_49421 = (0);
var inst_49422 = (0);
var state_49477__$1 = (function (){var statearr_49518 = state_49477;
(statearr_49518[(27)] = inst_49411__$1);

(statearr_49518[(9)] = inst_49420);

(statearr_49518[(19)] = inst_49419);

(statearr_49518[(28)] = inst_49413);

(statearr_49518[(20)] = inst_49421);

(statearr_49518[(12)] = inst_49422);

return statearr_49518;
})();
var statearr_49519_50690 = state_49477__$1;
(statearr_49519_50690[(2)] = null);

(statearr_49519_50690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (28))){
var inst_49419 = (state_49477[(19)]);
var inst_49437 = (state_49477[(23)]);
var inst_49437__$1 = cljs.core.seq(inst_49419);
var state_49477__$1 = (function (){var statearr_49520 = state_49477;
(statearr_49520[(23)] = inst_49437__$1);

return statearr_49520;
})();
if(inst_49437__$1){
var statearr_49521_50691 = state_49477__$1;
(statearr_49521_50691[(1)] = (33));

} else {
var statearr_49522_50692 = state_49477__$1;
(statearr_49522_50692[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (25))){
var inst_49421 = (state_49477[(20)]);
var inst_49422 = (state_49477[(12)]);
var inst_49424 = (inst_49422 < inst_49421);
var inst_49425 = inst_49424;
var state_49477__$1 = state_49477;
if(cljs.core.truth_(inst_49425)){
var statearr_49523_50694 = state_49477__$1;
(statearr_49523_50694[(1)] = (27));

} else {
var statearr_49524_50696 = state_49477__$1;
(statearr_49524_50696[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (34))){
var state_49477__$1 = state_49477;
var statearr_49525_50697 = state_49477__$1;
(statearr_49525_50697[(2)] = null);

(statearr_49525_50697[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (17))){
var state_49477__$1 = state_49477;
var statearr_49526_50698 = state_49477__$1;
(statearr_49526_50698[(2)] = null);

(statearr_49526_50698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (3))){
var inst_49475 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49477__$1,inst_49475);
} else {
if((state_val_49478 === (12))){
var inst_49406 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49527_50699 = state_49477__$1;
(statearr_49527_50699[(2)] = inst_49406);

(statearr_49527_50699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (2))){
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49477__$1,(4),ch);
} else {
if((state_val_49478 === (23))){
var state_49477__$1 = state_49477;
var statearr_49528_50700 = state_49477__$1;
(statearr_49528_50700[(2)] = null);

(statearr_49528_50700[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (35))){
var inst_49459 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49529_50701 = state_49477__$1;
(statearr_49529_50701[(2)] = inst_49459);

(statearr_49529_50701[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (19))){
var inst_49378 = (state_49477[(7)]);
var inst_49382 = cljs.core.chunk_first(inst_49378);
var inst_49383 = cljs.core.chunk_rest(inst_49378);
var inst_49384 = cljs.core.count(inst_49382);
var inst_49356 = inst_49383;
var inst_49357 = inst_49382;
var inst_49358 = inst_49384;
var inst_49359 = (0);
var state_49477__$1 = (function (){var statearr_49530 = state_49477;
(statearr_49530[(13)] = inst_49356);

(statearr_49530[(14)] = inst_49358);

(statearr_49530[(15)] = inst_49357);

(statearr_49530[(17)] = inst_49359);

return statearr_49530;
})();
var statearr_49531_50702 = state_49477__$1;
(statearr_49531_50702[(2)] = null);

(statearr_49531_50702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (11))){
var inst_49356 = (state_49477[(13)]);
var inst_49378 = (state_49477[(7)]);
var inst_49378__$1 = cljs.core.seq(inst_49356);
var state_49477__$1 = (function (){var statearr_49532 = state_49477;
(statearr_49532[(7)] = inst_49378__$1);

return statearr_49532;
})();
if(inst_49378__$1){
var statearr_49533_50703 = state_49477__$1;
(statearr_49533_50703[(1)] = (16));

} else {
var statearr_49534_50704 = state_49477__$1;
(statearr_49534_50704[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (9))){
var inst_49408 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49535_50705 = state_49477__$1;
(statearr_49535_50705[(2)] = inst_49408);

(statearr_49535_50705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (5))){
var inst_49354 = cljs.core.deref(cs);
var inst_49355 = cljs.core.seq(inst_49354);
var inst_49356 = inst_49355;
var inst_49357 = null;
var inst_49358 = (0);
var inst_49359 = (0);
var state_49477__$1 = (function (){var statearr_49536 = state_49477;
(statearr_49536[(13)] = inst_49356);

(statearr_49536[(14)] = inst_49358);

(statearr_49536[(15)] = inst_49357);

(statearr_49536[(17)] = inst_49359);

return statearr_49536;
})();
var statearr_49537_50706 = state_49477__$1;
(statearr_49537_50706[(2)] = null);

(statearr_49537_50706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (14))){
var state_49477__$1 = state_49477;
var statearr_49538_50707 = state_49477__$1;
(statearr_49538_50707[(2)] = null);

(statearr_49538_50707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (45))){
var inst_49467 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49539_50708 = state_49477__$1;
(statearr_49539_50708[(2)] = inst_49467);

(statearr_49539_50708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (26))){
var inst_49411 = (state_49477[(27)]);
var inst_49463 = (state_49477[(2)]);
var inst_49464 = cljs.core.seq(inst_49411);
var state_49477__$1 = (function (){var statearr_49540 = state_49477;
(statearr_49540[(29)] = inst_49463);

return statearr_49540;
})();
if(inst_49464){
var statearr_49541_50709 = state_49477__$1;
(statearr_49541_50709[(1)] = (42));

} else {
var statearr_49542_50710 = state_49477__$1;
(statearr_49542_50710[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (16))){
var inst_49378 = (state_49477[(7)]);
var inst_49380 = cljs.core.chunked_seq_QMARK_(inst_49378);
var state_49477__$1 = state_49477;
if(inst_49380){
var statearr_49543_50711 = state_49477__$1;
(statearr_49543_50711[(1)] = (19));

} else {
var statearr_49544_50712 = state_49477__$1;
(statearr_49544_50712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (38))){
var inst_49456 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49545_50713 = state_49477__$1;
(statearr_49545_50713[(2)] = inst_49456);

(statearr_49545_50713[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (30))){
var state_49477__$1 = state_49477;
var statearr_49546_50714 = state_49477__$1;
(statearr_49546_50714[(2)] = null);

(statearr_49546_50714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (10))){
var inst_49357 = (state_49477[(15)]);
var inst_49359 = (state_49477[(17)]);
var inst_49367 = cljs.core._nth(inst_49357,inst_49359);
var inst_49368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49367,(0),null);
var inst_49369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49367,(1),null);
var state_49477__$1 = (function (){var statearr_49547 = state_49477;
(statearr_49547[(24)] = inst_49368);

return statearr_49547;
})();
if(cljs.core.truth_(inst_49369)){
var statearr_49548_50715 = state_49477__$1;
(statearr_49548_50715[(1)] = (13));

} else {
var statearr_49549_50716 = state_49477__$1;
(statearr_49549_50716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (18))){
var inst_49404 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49550_50717 = state_49477__$1;
(statearr_49550_50717[(2)] = inst_49404);

(statearr_49550_50717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (42))){
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49477__$1,(45),dchan);
} else {
if((state_val_49478 === (37))){
var inst_49446 = (state_49477[(22)]);
var inst_49347 = (state_49477[(11)]);
var inst_49437 = (state_49477[(23)]);
var inst_49446__$1 = cljs.core.first(inst_49437);
var inst_49447 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49446__$1,inst_49347,done);
var state_49477__$1 = (function (){var statearr_49551 = state_49477;
(statearr_49551[(22)] = inst_49446__$1);

return statearr_49551;
})();
if(cljs.core.truth_(inst_49447)){
var statearr_49552_50722 = state_49477__$1;
(statearr_49552_50722[(1)] = (39));

} else {
var statearr_49553_50723 = state_49477__$1;
(statearr_49553_50723[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (8))){
var inst_49358 = (state_49477[(14)]);
var inst_49359 = (state_49477[(17)]);
var inst_49361 = (inst_49359 < inst_49358);
var inst_49362 = inst_49361;
var state_49477__$1 = state_49477;
if(cljs.core.truth_(inst_49362)){
var statearr_49554_50724 = state_49477__$1;
(statearr_49554_50724[(1)] = (10));

} else {
var statearr_49555_50725 = state_49477__$1;
(statearr_49555_50725[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__48736__auto__ = null;
var cljs$core$async$mult_$_state_machine__48736__auto____0 = (function (){
var statearr_49556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49556[(0)] = cljs$core$async$mult_$_state_machine__48736__auto__);

(statearr_49556[(1)] = (1));

return statearr_49556;
});
var cljs$core$async$mult_$_state_machine__48736__auto____1 = (function (state_49477){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49477);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49557){var ex__48739__auto__ = e49557;
var statearr_49558_50726 = state_49477;
(statearr_49558_50726[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49477[(4)]))){
var statearr_49559_50727 = state_49477;
(statearr_49559_50727[(1)] = cljs.core.first((state_49477[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50728 = state_49477;
state_49477 = G__50728;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48736__auto__ = function(state_49477){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48736__auto____1.call(this,state_49477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48736__auto____0;
cljs$core$async$mult_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48736__auto____1;
return cljs$core$async$mult_$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49560 = f__48807__auto__();
(statearr_49560[(6)] = c__48806__auto___50638);

return statearr_49560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49562 = arguments.length;
switch (G__49562) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50734 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50734(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50736 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50736(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50737 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50737(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50738 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50738(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50740 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50740(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50745 = arguments.length;
var i__4819__auto___50746 = (0);
while(true){
if((i__4819__auto___50746 < len__4818__auto___50745)){
args__4824__auto__.push((arguments[i__4819__auto___50746]));

var G__50747 = (i__4819__auto___50746 + (1));
i__4819__auto___50746 = G__50747;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49567){
var map__49568 = p__49567;
var map__49568__$1 = cljs.core.__destructure_map(map__49568);
var opts = map__49568__$1;
var statearr_49569_50748 = state;
(statearr_49569_50748[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49570_50749 = state;
(statearr_49570_50749[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_49571_50750 = state;
(statearr_49571_50750[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49563){
var G__49564 = cljs.core.first(seq49563);
var seq49563__$1 = cljs.core.next(seq49563);
var G__49565 = cljs.core.first(seq49563__$1);
var seq49563__$2 = cljs.core.next(seq49563__$1);
var G__49566 = cljs.core.first(seq49563__$2);
var seq49563__$3 = cljs.core.next(seq49563__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49564,G__49565,G__49566,seq49563__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49572 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49573){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49573 = meta49573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49574,meta49573__$1){
var self__ = this;
var _49574__$1 = this;
return (new cljs.core.async.t_cljs$core$async49572(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49573__$1));
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49574){
var self__ = this;
var _49574__$1 = this;
return self__.meta49573;
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49573","meta49573",-755996108,null)], null);
}));

(cljs.core.async.t_cljs$core$async49572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49572");

(cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49572.
 */
cljs.core.async.__GT_t_cljs$core$async49572 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49573){
return (new cljs.core.async.t_cljs$core$async49572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49573));
});

}

return (new cljs.core.async.t_cljs$core$async49572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48806__auto___50752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49642){
var state_val_49643 = (state_49642[(1)]);
if((state_val_49643 === (7))){
var inst_49602 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
if(cljs.core.truth_(inst_49602)){
var statearr_49644_50756 = state_49642__$1;
(statearr_49644_50756[(1)] = (8));

} else {
var statearr_49645_50757 = state_49642__$1;
(statearr_49645_50757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (20))){
var inst_49595 = (state_49642[(7)]);
var state_49642__$1 = state_49642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49642__$1,(23),out,inst_49595);
} else {
if((state_val_49643 === (1))){
var inst_49578 = calc_state();
var inst_49579 = cljs.core.__destructure_map(inst_49578);
var inst_49580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49579,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49579,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49579,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49583 = inst_49578;
var state_49642__$1 = (function (){var statearr_49646 = state_49642;
(statearr_49646[(8)] = inst_49582);

(statearr_49646[(9)] = inst_49583);

(statearr_49646[(10)] = inst_49581);

(statearr_49646[(11)] = inst_49580);

return statearr_49646;
})();
var statearr_49647_50758 = state_49642__$1;
(statearr_49647_50758[(2)] = null);

(statearr_49647_50758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (24))){
var inst_49586 = (state_49642[(12)]);
var inst_49583 = inst_49586;
var state_49642__$1 = (function (){var statearr_49648 = state_49642;
(statearr_49648[(9)] = inst_49583);

return statearr_49648;
})();
var statearr_49649_50759 = state_49642__$1;
(statearr_49649_50759[(2)] = null);

(statearr_49649_50759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (4))){
var inst_49595 = (state_49642[(7)]);
var inst_49597 = (state_49642[(13)]);
var inst_49594 = (state_49642[(2)]);
var inst_49595__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49594,(0),null);
var inst_49596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49594,(1),null);
var inst_49597__$1 = (inst_49595__$1 == null);
var state_49642__$1 = (function (){var statearr_49650 = state_49642;
(statearr_49650[(14)] = inst_49596);

(statearr_49650[(7)] = inst_49595__$1);

(statearr_49650[(13)] = inst_49597__$1);

return statearr_49650;
})();
if(cljs.core.truth_(inst_49597__$1)){
var statearr_49651_50760 = state_49642__$1;
(statearr_49651_50760[(1)] = (5));

} else {
var statearr_49652_50761 = state_49642__$1;
(statearr_49652_50761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (15))){
var inst_49616 = (state_49642[(15)]);
var inst_49587 = (state_49642[(16)]);
var inst_49616__$1 = cljs.core.empty_QMARK_(inst_49587);
var state_49642__$1 = (function (){var statearr_49653 = state_49642;
(statearr_49653[(15)] = inst_49616__$1);

return statearr_49653;
})();
if(inst_49616__$1){
var statearr_49654_50762 = state_49642__$1;
(statearr_49654_50762[(1)] = (17));

} else {
var statearr_49655_50763 = state_49642__$1;
(statearr_49655_50763[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (21))){
var inst_49586 = (state_49642[(12)]);
var inst_49583 = inst_49586;
var state_49642__$1 = (function (){var statearr_49656 = state_49642;
(statearr_49656[(9)] = inst_49583);

return statearr_49656;
})();
var statearr_49657_50765 = state_49642__$1;
(statearr_49657_50765[(2)] = null);

(statearr_49657_50765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (13))){
var inst_49609 = (state_49642[(2)]);
var inst_49610 = calc_state();
var inst_49583 = inst_49610;
var state_49642__$1 = (function (){var statearr_49658 = state_49642;
(statearr_49658[(17)] = inst_49609);

(statearr_49658[(9)] = inst_49583);

return statearr_49658;
})();
var statearr_49659_50766 = state_49642__$1;
(statearr_49659_50766[(2)] = null);

(statearr_49659_50766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (22))){
var inst_49636 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
var statearr_49660_50767 = state_49642__$1;
(statearr_49660_50767[(2)] = inst_49636);

(statearr_49660_50767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (6))){
var inst_49596 = (state_49642[(14)]);
var inst_49600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49596,change);
var state_49642__$1 = state_49642;
var statearr_49661_50768 = state_49642__$1;
(statearr_49661_50768[(2)] = inst_49600);

(statearr_49661_50768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (25))){
var state_49642__$1 = state_49642;
var statearr_49662_50769 = state_49642__$1;
(statearr_49662_50769[(2)] = null);

(statearr_49662_50769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (17))){
var inst_49596 = (state_49642[(14)]);
var inst_49588 = (state_49642[(18)]);
var inst_49618 = (inst_49588.cljs$core$IFn$_invoke$arity$1 ? inst_49588.cljs$core$IFn$_invoke$arity$1(inst_49596) : inst_49588.call(null,inst_49596));
var inst_49619 = cljs.core.not(inst_49618);
var state_49642__$1 = state_49642;
var statearr_49663_50770 = state_49642__$1;
(statearr_49663_50770[(2)] = inst_49619);

(statearr_49663_50770[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (3))){
var inst_49640 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49642__$1,inst_49640);
} else {
if((state_val_49643 === (12))){
var state_49642__$1 = state_49642;
var statearr_49664_50771 = state_49642__$1;
(statearr_49664_50771[(2)] = null);

(statearr_49664_50771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (2))){
var inst_49583 = (state_49642[(9)]);
var inst_49586 = (state_49642[(12)]);
var inst_49586__$1 = cljs.core.__destructure_map(inst_49583);
var inst_49587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49586__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49586__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49586__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49642__$1 = (function (){var statearr_49665 = state_49642;
(statearr_49665[(16)] = inst_49587);

(statearr_49665[(18)] = inst_49588);

(statearr_49665[(12)] = inst_49586__$1);

return statearr_49665;
})();
return cljs.core.async.ioc_alts_BANG_(state_49642__$1,(4),inst_49589);
} else {
if((state_val_49643 === (23))){
var inst_49627 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
if(cljs.core.truth_(inst_49627)){
var statearr_49666_50777 = state_49642__$1;
(statearr_49666_50777[(1)] = (24));

} else {
var statearr_49667_50778 = state_49642__$1;
(statearr_49667_50778[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (19))){
var inst_49622 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
var statearr_49668_50779 = state_49642__$1;
(statearr_49668_50779[(2)] = inst_49622);

(statearr_49668_50779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (11))){
var inst_49596 = (state_49642[(14)]);
var inst_49606 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49596);
var state_49642__$1 = state_49642;
var statearr_49669_50780 = state_49642__$1;
(statearr_49669_50780[(2)] = inst_49606);

(statearr_49669_50780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (9))){
var inst_49587 = (state_49642[(16)]);
var inst_49596 = (state_49642[(14)]);
var inst_49613 = (state_49642[(19)]);
var inst_49613__$1 = (inst_49587.cljs$core$IFn$_invoke$arity$1 ? inst_49587.cljs$core$IFn$_invoke$arity$1(inst_49596) : inst_49587.call(null,inst_49596));
var state_49642__$1 = (function (){var statearr_49670 = state_49642;
(statearr_49670[(19)] = inst_49613__$1);

return statearr_49670;
})();
if(cljs.core.truth_(inst_49613__$1)){
var statearr_49671_50781 = state_49642__$1;
(statearr_49671_50781[(1)] = (14));

} else {
var statearr_49672_50782 = state_49642__$1;
(statearr_49672_50782[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (5))){
var inst_49597 = (state_49642[(13)]);
var state_49642__$1 = state_49642;
var statearr_49673_50783 = state_49642__$1;
(statearr_49673_50783[(2)] = inst_49597);

(statearr_49673_50783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (14))){
var inst_49613 = (state_49642[(19)]);
var state_49642__$1 = state_49642;
var statearr_49674_50785 = state_49642__$1;
(statearr_49674_50785[(2)] = inst_49613);

(statearr_49674_50785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (26))){
var inst_49632 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
var statearr_49675_50786 = state_49642__$1;
(statearr_49675_50786[(2)] = inst_49632);

(statearr_49675_50786[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (16))){
var inst_49624 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
if(cljs.core.truth_(inst_49624)){
var statearr_49676_50787 = state_49642__$1;
(statearr_49676_50787[(1)] = (20));

} else {
var statearr_49677_50788 = state_49642__$1;
(statearr_49677_50788[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (10))){
var inst_49638 = (state_49642[(2)]);
var state_49642__$1 = state_49642;
var statearr_49678_50789 = state_49642__$1;
(statearr_49678_50789[(2)] = inst_49638);

(statearr_49678_50789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (18))){
var inst_49616 = (state_49642[(15)]);
var state_49642__$1 = state_49642;
var statearr_49679_50794 = state_49642__$1;
(statearr_49679_50794[(2)] = inst_49616);

(statearr_49679_50794[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49643 === (8))){
var inst_49595 = (state_49642[(7)]);
var inst_49604 = (inst_49595 == null);
var state_49642__$1 = state_49642;
if(cljs.core.truth_(inst_49604)){
var statearr_49680_50795 = state_49642__$1;
(statearr_49680_50795[(1)] = (11));

} else {
var statearr_49681_50796 = state_49642__$1;
(statearr_49681_50796[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__48736__auto__ = null;
var cljs$core$async$mix_$_state_machine__48736__auto____0 = (function (){
var statearr_49682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49682[(0)] = cljs$core$async$mix_$_state_machine__48736__auto__);

(statearr_49682[(1)] = (1));

return statearr_49682;
});
var cljs$core$async$mix_$_state_machine__48736__auto____1 = (function (state_49642){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49642);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49683){var ex__48739__auto__ = e49683;
var statearr_49684_50797 = state_49642;
(statearr_49684_50797[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49642[(4)]))){
var statearr_49685_50798 = state_49642;
(statearr_49685_50798[(1)] = cljs.core.first((state_49642[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50799 = state_49642;
state_49642 = G__50799;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48736__auto__ = function(state_49642){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48736__auto____1.call(this,state_49642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48736__auto____0;
cljs$core$async$mix_$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48736__auto____1;
return cljs$core$async$mix_$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49686 = f__48807__auto__();
(statearr_49686[(6)] = c__48806__auto___50752);

return statearr_49686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50800 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50800(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50801 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50801(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50802 = (function() {
var G__50803 = null;
var G__50803__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50803__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50803 = function(p,v){
switch(arguments.length){
case 1:
return G__50803__1.call(this,p);
case 2:
return G__50803__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50803.cljs$core$IFn$_invoke$arity$1 = G__50803__1;
G__50803.cljs$core$IFn$_invoke$arity$2 = G__50803__2;
return G__50803;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49688 = arguments.length;
switch (G__49688) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50802(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50802(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__49691 = arguments.length;
switch (G__49691) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49689_SHARP_){
if(cljs.core.truth_((p1__49689_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49689_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49689_SHARP_.call(null,topic)))){
return p1__49689_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49689_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49692 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49693){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49693 = meta49693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49694,meta49693__$1){
var self__ = this;
var _49694__$1 = this;
return (new cljs.core.async.t_cljs$core$async49692(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49693__$1));
}));

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49694){
var self__ = this;
var _49694__$1 = this;
return self__.meta49693;
}));

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49693","meta49693",-14459167,null)], null);
}));

(cljs.core.async.t_cljs$core$async49692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49692");

(cljs.core.async.t_cljs$core$async49692.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49692.
 */
cljs.core.async.__GT_t_cljs$core$async49692 = (function cljs$core$async$__GT_t_cljs$core$async49692(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49693){
return (new cljs.core.async.t_cljs$core$async49692(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49693));
});

}

return (new cljs.core.async.t_cljs$core$async49692(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48806__auto___50810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49766){
var state_val_49767 = (state_49766[(1)]);
if((state_val_49767 === (7))){
var inst_49762 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49768_50811 = state_49766__$1;
(statearr_49768_50811[(2)] = inst_49762);

(statearr_49768_50811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (20))){
var state_49766__$1 = state_49766;
var statearr_49769_50812 = state_49766__$1;
(statearr_49769_50812[(2)] = null);

(statearr_49769_50812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (1))){
var state_49766__$1 = state_49766;
var statearr_49770_50814 = state_49766__$1;
(statearr_49770_50814[(2)] = null);

(statearr_49770_50814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (24))){
var inst_49745 = (state_49766[(7)]);
var inst_49754 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49745);
var state_49766__$1 = state_49766;
var statearr_49771_50815 = state_49766__$1;
(statearr_49771_50815[(2)] = inst_49754);

(statearr_49771_50815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (4))){
var inst_49697 = (state_49766[(8)]);
var inst_49697__$1 = (state_49766[(2)]);
var inst_49698 = (inst_49697__$1 == null);
var state_49766__$1 = (function (){var statearr_49772 = state_49766;
(statearr_49772[(8)] = inst_49697__$1);

return statearr_49772;
})();
if(cljs.core.truth_(inst_49698)){
var statearr_49773_50816 = state_49766__$1;
(statearr_49773_50816[(1)] = (5));

} else {
var statearr_49774_50817 = state_49766__$1;
(statearr_49774_50817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (15))){
var inst_49739 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49775_50818 = state_49766__$1;
(statearr_49775_50818[(2)] = inst_49739);

(statearr_49775_50818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (21))){
var inst_49759 = (state_49766[(2)]);
var state_49766__$1 = (function (){var statearr_49776 = state_49766;
(statearr_49776[(9)] = inst_49759);

return statearr_49776;
})();
var statearr_49777_50819 = state_49766__$1;
(statearr_49777_50819[(2)] = null);

(statearr_49777_50819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (13))){
var inst_49721 = (state_49766[(10)]);
var inst_49723 = cljs.core.chunked_seq_QMARK_(inst_49721);
var state_49766__$1 = state_49766;
if(inst_49723){
var statearr_49778_50820 = state_49766__$1;
(statearr_49778_50820[(1)] = (16));

} else {
var statearr_49779_50821 = state_49766__$1;
(statearr_49779_50821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (22))){
var inst_49751 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
if(cljs.core.truth_(inst_49751)){
var statearr_49780_50822 = state_49766__$1;
(statearr_49780_50822[(1)] = (23));

} else {
var statearr_49781_50823 = state_49766__$1;
(statearr_49781_50823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (6))){
var inst_49745 = (state_49766[(7)]);
var inst_49747 = (state_49766[(11)]);
var inst_49697 = (state_49766[(8)]);
var inst_49745__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49697) : topic_fn.call(null,inst_49697));
var inst_49746 = cljs.core.deref(mults);
var inst_49747__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49746,inst_49745__$1);
var state_49766__$1 = (function (){var statearr_49782 = state_49766;
(statearr_49782[(7)] = inst_49745__$1);

(statearr_49782[(11)] = inst_49747__$1);

return statearr_49782;
})();
if(cljs.core.truth_(inst_49747__$1)){
var statearr_49783_50824 = state_49766__$1;
(statearr_49783_50824[(1)] = (19));

} else {
var statearr_49784_50825 = state_49766__$1;
(statearr_49784_50825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (25))){
var inst_49756 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49785_50826 = state_49766__$1;
(statearr_49785_50826[(2)] = inst_49756);

(statearr_49785_50826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (17))){
var inst_49721 = (state_49766[(10)]);
var inst_49730 = cljs.core.first(inst_49721);
var inst_49731 = cljs.core.async.muxch_STAR_(inst_49730);
var inst_49732 = cljs.core.async.close_BANG_(inst_49731);
var inst_49733 = cljs.core.next(inst_49721);
var inst_49707 = inst_49733;
var inst_49708 = null;
var inst_49709 = (0);
var inst_49710 = (0);
var state_49766__$1 = (function (){var statearr_49786 = state_49766;
(statearr_49786[(12)] = inst_49707);

(statearr_49786[(13)] = inst_49732);

(statearr_49786[(14)] = inst_49710);

(statearr_49786[(15)] = inst_49709);

(statearr_49786[(16)] = inst_49708);

return statearr_49786;
})();
var statearr_49787_50827 = state_49766__$1;
(statearr_49787_50827[(2)] = null);

(statearr_49787_50827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (3))){
var inst_49764 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49766__$1,inst_49764);
} else {
if((state_val_49767 === (12))){
var inst_49741 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49788_50828 = state_49766__$1;
(statearr_49788_50828[(2)] = inst_49741);

(statearr_49788_50828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (2))){
var state_49766__$1 = state_49766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49766__$1,(4),ch);
} else {
if((state_val_49767 === (23))){
var state_49766__$1 = state_49766;
var statearr_49789_50829 = state_49766__$1;
(statearr_49789_50829[(2)] = null);

(statearr_49789_50829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (19))){
var inst_49747 = (state_49766[(11)]);
var inst_49697 = (state_49766[(8)]);
var inst_49749 = cljs.core.async.muxch_STAR_(inst_49747);
var state_49766__$1 = state_49766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49766__$1,(22),inst_49749,inst_49697);
} else {
if((state_val_49767 === (11))){
var inst_49721 = (state_49766[(10)]);
var inst_49707 = (state_49766[(12)]);
var inst_49721__$1 = cljs.core.seq(inst_49707);
var state_49766__$1 = (function (){var statearr_49790 = state_49766;
(statearr_49790[(10)] = inst_49721__$1);

return statearr_49790;
})();
if(inst_49721__$1){
var statearr_49791_50830 = state_49766__$1;
(statearr_49791_50830[(1)] = (13));

} else {
var statearr_49792_50831 = state_49766__$1;
(statearr_49792_50831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (9))){
var inst_49743 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49793_50832 = state_49766__$1;
(statearr_49793_50832[(2)] = inst_49743);

(statearr_49793_50832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (5))){
var inst_49704 = cljs.core.deref(mults);
var inst_49705 = cljs.core.vals(inst_49704);
var inst_49706 = cljs.core.seq(inst_49705);
var inst_49707 = inst_49706;
var inst_49708 = null;
var inst_49709 = (0);
var inst_49710 = (0);
var state_49766__$1 = (function (){var statearr_49794 = state_49766;
(statearr_49794[(12)] = inst_49707);

(statearr_49794[(14)] = inst_49710);

(statearr_49794[(15)] = inst_49709);

(statearr_49794[(16)] = inst_49708);

return statearr_49794;
})();
var statearr_49795_50837 = state_49766__$1;
(statearr_49795_50837[(2)] = null);

(statearr_49795_50837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (14))){
var state_49766__$1 = state_49766;
var statearr_49799_50838 = state_49766__$1;
(statearr_49799_50838[(2)] = null);

(statearr_49799_50838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (16))){
var inst_49721 = (state_49766[(10)]);
var inst_49725 = cljs.core.chunk_first(inst_49721);
var inst_49726 = cljs.core.chunk_rest(inst_49721);
var inst_49727 = cljs.core.count(inst_49725);
var inst_49707 = inst_49726;
var inst_49708 = inst_49725;
var inst_49709 = inst_49727;
var inst_49710 = (0);
var state_49766__$1 = (function (){var statearr_49800 = state_49766;
(statearr_49800[(12)] = inst_49707);

(statearr_49800[(14)] = inst_49710);

(statearr_49800[(15)] = inst_49709);

(statearr_49800[(16)] = inst_49708);

return statearr_49800;
})();
var statearr_49801_50843 = state_49766__$1;
(statearr_49801_50843[(2)] = null);

(statearr_49801_50843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (10))){
var inst_49707 = (state_49766[(12)]);
var inst_49710 = (state_49766[(14)]);
var inst_49709 = (state_49766[(15)]);
var inst_49708 = (state_49766[(16)]);
var inst_49715 = cljs.core._nth(inst_49708,inst_49710);
var inst_49716 = cljs.core.async.muxch_STAR_(inst_49715);
var inst_49717 = cljs.core.async.close_BANG_(inst_49716);
var inst_49718 = (inst_49710 + (1));
var tmp49796 = inst_49707;
var tmp49797 = inst_49709;
var tmp49798 = inst_49708;
var inst_49707__$1 = tmp49796;
var inst_49708__$1 = tmp49798;
var inst_49709__$1 = tmp49797;
var inst_49710__$1 = inst_49718;
var state_49766__$1 = (function (){var statearr_49802 = state_49766;
(statearr_49802[(12)] = inst_49707__$1);

(statearr_49802[(14)] = inst_49710__$1);

(statearr_49802[(15)] = inst_49709__$1);

(statearr_49802[(16)] = inst_49708__$1);

(statearr_49802[(17)] = inst_49717);

return statearr_49802;
})();
var statearr_49803_50844 = state_49766__$1;
(statearr_49803_50844[(2)] = null);

(statearr_49803_50844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (18))){
var inst_49736 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49804_50846 = state_49766__$1;
(statearr_49804_50846[(2)] = inst_49736);

(statearr_49804_50846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (8))){
var inst_49710 = (state_49766[(14)]);
var inst_49709 = (state_49766[(15)]);
var inst_49712 = (inst_49710 < inst_49709);
var inst_49713 = inst_49712;
var state_49766__$1 = state_49766;
if(cljs.core.truth_(inst_49713)){
var statearr_49805_50848 = state_49766__$1;
(statearr_49805_50848[(1)] = (10));

} else {
var statearr_49806_50849 = state_49766__$1;
(statearr_49806_50849[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49807[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49807[(1)] = (1));

return statearr_49807;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_49766){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49766);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49808){var ex__48739__auto__ = e49808;
var statearr_49809_50850 = state_49766;
(statearr_49809_50850[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49766[(4)]))){
var statearr_49810_50851 = state_49766;
(statearr_49810_50851[(1)] = cljs.core.first((state_49766[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50852 = state_49766;
state_49766 = G__50852;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_49766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_49766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49811 = f__48807__auto__();
(statearr_49811[(6)] = c__48806__auto___50810);

return statearr_49811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49813 = arguments.length;
switch (G__49813) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49815 = arguments.length;
switch (G__49815) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__49817 = arguments.length;
switch (G__49817) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__48806__auto___50856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49860){
var state_val_49861 = (state_49860[(1)]);
if((state_val_49861 === (7))){
var state_49860__$1 = state_49860;
var statearr_49862_50857 = state_49860__$1;
(statearr_49862_50857[(2)] = null);

(statearr_49862_50857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (1))){
var state_49860__$1 = state_49860;
var statearr_49863_50858 = state_49860__$1;
(statearr_49863_50858[(2)] = null);

(statearr_49863_50858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (4))){
var inst_49821 = (state_49860[(7)]);
var inst_49820 = (state_49860[(8)]);
var inst_49823 = (inst_49821 < inst_49820);
var state_49860__$1 = state_49860;
if(cljs.core.truth_(inst_49823)){
var statearr_49864_50859 = state_49860__$1;
(statearr_49864_50859[(1)] = (6));

} else {
var statearr_49865_50860 = state_49860__$1;
(statearr_49865_50860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (15))){
var inst_49846 = (state_49860[(9)]);
var inst_49851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49846);
var state_49860__$1 = state_49860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49860__$1,(17),out,inst_49851);
} else {
if((state_val_49861 === (13))){
var inst_49846 = (state_49860[(9)]);
var inst_49846__$1 = (state_49860[(2)]);
var inst_49847 = cljs.core.some(cljs.core.nil_QMARK_,inst_49846__$1);
var state_49860__$1 = (function (){var statearr_49866 = state_49860;
(statearr_49866[(9)] = inst_49846__$1);

return statearr_49866;
})();
if(cljs.core.truth_(inst_49847)){
var statearr_49867_50861 = state_49860__$1;
(statearr_49867_50861[(1)] = (14));

} else {
var statearr_49868_50862 = state_49860__$1;
(statearr_49868_50862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (6))){
var state_49860__$1 = state_49860;
var statearr_49869_50863 = state_49860__$1;
(statearr_49869_50863[(2)] = null);

(statearr_49869_50863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (17))){
var inst_49853 = (state_49860[(2)]);
var state_49860__$1 = (function (){var statearr_49871 = state_49860;
(statearr_49871[(10)] = inst_49853);

return statearr_49871;
})();
var statearr_49872_50864 = state_49860__$1;
(statearr_49872_50864[(2)] = null);

(statearr_49872_50864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (3))){
var inst_49858 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49860__$1,inst_49858);
} else {
if((state_val_49861 === (12))){
var _ = (function (){var statearr_49873 = state_49860;
(statearr_49873[(4)] = cljs.core.rest((state_49860[(4)])));

return statearr_49873;
})();
var state_49860__$1 = state_49860;
var ex49870 = (state_49860__$1[(2)]);
var statearr_49874_50865 = state_49860__$1;
(statearr_49874_50865[(5)] = ex49870);


if((ex49870 instanceof Object)){
var statearr_49875_50866 = state_49860__$1;
(statearr_49875_50866[(1)] = (11));

(statearr_49875_50866[(5)] = null);

} else {
throw ex49870;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (2))){
var inst_49819 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49820 = cnt;
var inst_49821 = (0);
var state_49860__$1 = (function (){var statearr_49876 = state_49860;
(statearr_49876[(11)] = inst_49819);

(statearr_49876[(7)] = inst_49821);

(statearr_49876[(8)] = inst_49820);

return statearr_49876;
})();
var statearr_49877_50867 = state_49860__$1;
(statearr_49877_50867[(2)] = null);

(statearr_49877_50867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (11))){
var inst_49825 = (state_49860[(2)]);
var inst_49826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49860__$1 = (function (){var statearr_49878 = state_49860;
(statearr_49878[(12)] = inst_49825);

return statearr_49878;
})();
var statearr_49879_50868 = state_49860__$1;
(statearr_49879_50868[(2)] = inst_49826);

(statearr_49879_50868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (9))){
var inst_49821 = (state_49860[(7)]);
var _ = (function (){var statearr_49880 = state_49860;
(statearr_49880[(4)] = cljs.core.cons((12),(state_49860[(4)])));

return statearr_49880;
})();
var inst_49832 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49821) : chs__$1.call(null,inst_49821));
var inst_49833 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49821) : done.call(null,inst_49821));
var inst_49834 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49832,inst_49833);
var ___$1 = (function (){var statearr_49881 = state_49860;
(statearr_49881[(4)] = cljs.core.rest((state_49860[(4)])));

return statearr_49881;
})();
var state_49860__$1 = state_49860;
var statearr_49882_50869 = state_49860__$1;
(statearr_49882_50869[(2)] = inst_49834);

(statearr_49882_50869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (5))){
var inst_49844 = (state_49860[(2)]);
var state_49860__$1 = (function (){var statearr_49883 = state_49860;
(statearr_49883[(13)] = inst_49844);

return statearr_49883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49860__$1,(13),dchan);
} else {
if((state_val_49861 === (14))){
var inst_49849 = cljs.core.async.close_BANG_(out);
var state_49860__$1 = state_49860;
var statearr_49884_50870 = state_49860__$1;
(statearr_49884_50870[(2)] = inst_49849);

(statearr_49884_50870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (16))){
var inst_49856 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
var statearr_49885_50871 = state_49860__$1;
(statearr_49885_50871[(2)] = inst_49856);

(statearr_49885_50871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (10))){
var inst_49821 = (state_49860[(7)]);
var inst_49837 = (state_49860[(2)]);
var inst_49838 = (inst_49821 + (1));
var inst_49821__$1 = inst_49838;
var state_49860__$1 = (function (){var statearr_49886 = state_49860;
(statearr_49886[(7)] = inst_49821__$1);

(statearr_49886[(14)] = inst_49837);

return statearr_49886;
})();
var statearr_49887_50872 = state_49860__$1;
(statearr_49887_50872[(2)] = null);

(statearr_49887_50872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (8))){
var inst_49842 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
var statearr_49888_50873 = state_49860__$1;
(statearr_49888_50873[(2)] = inst_49842);

(statearr_49888_50873[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49889[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49889[(1)] = (1));

return statearr_49889;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_49860){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49860);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49890){var ex__48739__auto__ = e49890;
var statearr_49891_50874 = state_49860;
(statearr_49891_50874[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49860[(4)]))){
var statearr_49892_50875 = state_49860;
(statearr_49892_50875[(1)] = cljs.core.first((state_49860[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50876 = state_49860;
state_49860 = G__50876;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_49860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_49860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49893 = f__48807__auto__();
(statearr_49893[(6)] = c__48806__auto___50856);

return statearr_49893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49896 = arguments.length;
switch (G__49896) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48806__auto___50878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49928){
var state_val_49929 = (state_49928[(1)]);
if((state_val_49929 === (7))){
var inst_49908 = (state_49928[(7)]);
var inst_49907 = (state_49928[(8)]);
var inst_49907__$1 = (state_49928[(2)]);
var inst_49908__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49907__$1,(0),null);
var inst_49909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49907__$1,(1),null);
var inst_49910 = (inst_49908__$1 == null);
var state_49928__$1 = (function (){var statearr_49930 = state_49928;
(statearr_49930[(7)] = inst_49908__$1);

(statearr_49930[(9)] = inst_49909);

(statearr_49930[(8)] = inst_49907__$1);

return statearr_49930;
})();
if(cljs.core.truth_(inst_49910)){
var statearr_49931_50882 = state_49928__$1;
(statearr_49931_50882[(1)] = (8));

} else {
var statearr_49932_50883 = state_49928__$1;
(statearr_49932_50883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (1))){
var inst_49897 = cljs.core.vec(chs);
var inst_49898 = inst_49897;
var state_49928__$1 = (function (){var statearr_49933 = state_49928;
(statearr_49933[(10)] = inst_49898);

return statearr_49933;
})();
var statearr_49934_50884 = state_49928__$1;
(statearr_49934_50884[(2)] = null);

(statearr_49934_50884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (4))){
var inst_49898 = (state_49928[(10)]);
var state_49928__$1 = state_49928;
return cljs.core.async.ioc_alts_BANG_(state_49928__$1,(7),inst_49898);
} else {
if((state_val_49929 === (6))){
var inst_49924 = (state_49928[(2)]);
var state_49928__$1 = state_49928;
var statearr_49935_50886 = state_49928__$1;
(statearr_49935_50886[(2)] = inst_49924);

(statearr_49935_50886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (3))){
var inst_49926 = (state_49928[(2)]);
var state_49928__$1 = state_49928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49928__$1,inst_49926);
} else {
if((state_val_49929 === (2))){
var inst_49898 = (state_49928[(10)]);
var inst_49900 = cljs.core.count(inst_49898);
var inst_49901 = (inst_49900 > (0));
var state_49928__$1 = state_49928;
if(cljs.core.truth_(inst_49901)){
var statearr_49937_50887 = state_49928__$1;
(statearr_49937_50887[(1)] = (4));

} else {
var statearr_49938_50888 = state_49928__$1;
(statearr_49938_50888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (11))){
var inst_49898 = (state_49928[(10)]);
var inst_49917 = (state_49928[(2)]);
var tmp49936 = inst_49898;
var inst_49898__$1 = tmp49936;
var state_49928__$1 = (function (){var statearr_49939 = state_49928;
(statearr_49939[(11)] = inst_49917);

(statearr_49939[(10)] = inst_49898__$1);

return statearr_49939;
})();
var statearr_49940_50889 = state_49928__$1;
(statearr_49940_50889[(2)] = null);

(statearr_49940_50889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (9))){
var inst_49908 = (state_49928[(7)]);
var state_49928__$1 = state_49928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49928__$1,(11),out,inst_49908);
} else {
if((state_val_49929 === (5))){
var inst_49922 = cljs.core.async.close_BANG_(out);
var state_49928__$1 = state_49928;
var statearr_49941_50890 = state_49928__$1;
(statearr_49941_50890[(2)] = inst_49922);

(statearr_49941_50890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (10))){
var inst_49920 = (state_49928[(2)]);
var state_49928__$1 = state_49928;
var statearr_49942_50891 = state_49928__$1;
(statearr_49942_50891[(2)] = inst_49920);

(statearr_49942_50891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49929 === (8))){
var inst_49898 = (state_49928[(10)]);
var inst_49908 = (state_49928[(7)]);
var inst_49909 = (state_49928[(9)]);
var inst_49907 = (state_49928[(8)]);
var inst_49912 = (function (){var cs = inst_49898;
var vec__49903 = inst_49907;
var v = inst_49908;
var c = inst_49909;
return (function (p1__49894_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49894_SHARP_);
});
})();
var inst_49913 = cljs.core.filterv(inst_49912,inst_49898);
var inst_49898__$1 = inst_49913;
var state_49928__$1 = (function (){var statearr_49943 = state_49928;
(statearr_49943[(10)] = inst_49898__$1);

return statearr_49943;
})();
var statearr_49944_50892 = state_49928__$1;
(statearr_49944_50892[(2)] = null);

(statearr_49944_50892[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49945[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49945[(1)] = (1));

return statearr_49945;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_49928){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49928);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49946){var ex__48739__auto__ = e49946;
var statearr_49947_50893 = state_49928;
(statearr_49947_50893[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49928[(4)]))){
var statearr_49948_50894 = state_49928;
(statearr_49948_50894[(1)] = cljs.core.first((state_49928[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50895 = state_49928;
state_49928 = G__50895;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_49928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_49928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49949 = f__48807__auto__();
(statearr_49949[(6)] = c__48806__auto___50878);

return statearr_49949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49951 = arguments.length;
switch (G__49951) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48806__auto___50909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_49975){
var state_val_49976 = (state_49975[(1)]);
if((state_val_49976 === (7))){
var inst_49957 = (state_49975[(7)]);
var inst_49957__$1 = (state_49975[(2)]);
var inst_49958 = (inst_49957__$1 == null);
var inst_49959 = cljs.core.not(inst_49958);
var state_49975__$1 = (function (){var statearr_49977 = state_49975;
(statearr_49977[(7)] = inst_49957__$1);

return statearr_49977;
})();
if(inst_49959){
var statearr_49978_50910 = state_49975__$1;
(statearr_49978_50910[(1)] = (8));

} else {
var statearr_49979_50914 = state_49975__$1;
(statearr_49979_50914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (1))){
var inst_49952 = (0);
var state_49975__$1 = (function (){var statearr_49980 = state_49975;
(statearr_49980[(8)] = inst_49952);

return statearr_49980;
})();
var statearr_49981_50915 = state_49975__$1;
(statearr_49981_50915[(2)] = null);

(statearr_49981_50915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (4))){
var state_49975__$1 = state_49975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49975__$1,(7),ch);
} else {
if((state_val_49976 === (6))){
var inst_49970 = (state_49975[(2)]);
var state_49975__$1 = state_49975;
var statearr_49982_50916 = state_49975__$1;
(statearr_49982_50916[(2)] = inst_49970);

(statearr_49982_50916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (3))){
var inst_49972 = (state_49975[(2)]);
var inst_49973 = cljs.core.async.close_BANG_(out);
var state_49975__$1 = (function (){var statearr_49983 = state_49975;
(statearr_49983[(9)] = inst_49972);

return statearr_49983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49975__$1,inst_49973);
} else {
if((state_val_49976 === (2))){
var inst_49952 = (state_49975[(8)]);
var inst_49954 = (inst_49952 < n);
var state_49975__$1 = state_49975;
if(cljs.core.truth_(inst_49954)){
var statearr_49984_50917 = state_49975__$1;
(statearr_49984_50917[(1)] = (4));

} else {
var statearr_49985_50918 = state_49975__$1;
(statearr_49985_50918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (11))){
var inst_49952 = (state_49975[(8)]);
var inst_49962 = (state_49975[(2)]);
var inst_49963 = (inst_49952 + (1));
var inst_49952__$1 = inst_49963;
var state_49975__$1 = (function (){var statearr_49986 = state_49975;
(statearr_49986[(10)] = inst_49962);

(statearr_49986[(8)] = inst_49952__$1);

return statearr_49986;
})();
var statearr_49987_50919 = state_49975__$1;
(statearr_49987_50919[(2)] = null);

(statearr_49987_50919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (9))){
var state_49975__$1 = state_49975;
var statearr_49988_50921 = state_49975__$1;
(statearr_49988_50921[(2)] = null);

(statearr_49988_50921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (5))){
var state_49975__$1 = state_49975;
var statearr_49989_50922 = state_49975__$1;
(statearr_49989_50922[(2)] = null);

(statearr_49989_50922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (10))){
var inst_49967 = (state_49975[(2)]);
var state_49975__$1 = state_49975;
var statearr_49990_50923 = state_49975__$1;
(statearr_49990_50923[(2)] = inst_49967);

(statearr_49990_50923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49976 === (8))){
var inst_49957 = (state_49975[(7)]);
var state_49975__$1 = state_49975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49975__$1,(11),out,inst_49957);
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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_49991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49991[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_49991[(1)] = (1));

return statearr_49991;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_49975){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_49975);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e49992){var ex__48739__auto__ = e49992;
var statearr_49993_50928 = state_49975;
(statearr_49993_50928[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_49975[(4)]))){
var statearr_49994_50930 = state_49975;
(statearr_49994_50930[(1)] = cljs.core.first((state_49975[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50935 = state_49975;
state_49975 = G__50935;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_49975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_49975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_49995 = f__48807__auto__();
(statearr_49995[(6)] = c__48806__auto___50909);

return statearr_49995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49997 = (function (f,ch,meta49998){
this.f = f;
this.ch = ch;
this.meta49998 = meta49998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49999,meta49998__$1){
var self__ = this;
var _49999__$1 = this;
return (new cljs.core.async.t_cljs$core$async49997(self__.f,self__.ch,meta49998__$1));
}));

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49999){
var self__ = this;
var _49999__$1 = this;
return self__.meta49998;
}));

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50000 = (function (f,ch,meta49998,_,fn1,meta50001){
this.f = f;
this.ch = ch;
this.meta49998 = meta49998;
this._ = _;
this.fn1 = fn1;
this.meta50001 = meta50001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50002,meta50001__$1){
var self__ = this;
var _50002__$1 = this;
return (new cljs.core.async.t_cljs$core$async50000(self__.f,self__.ch,self__.meta49998,self__._,self__.fn1,meta50001__$1));
}));

(cljs.core.async.t_cljs$core$async50000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50002){
var self__ = this;
var _50002__$1 = this;
return self__.meta50001;
}));

(cljs.core.async.t_cljs$core$async50000.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49996_SHARP_){
var G__50003 = (((p1__49996_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49996_SHARP_) : self__.f.call(null,p1__49996_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50003) : f1.call(null,G__50003));
});
}));

(cljs.core.async.t_cljs$core$async50000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49998","meta49998",-1110899337,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49997","cljs.core.async/t_cljs$core$async49997",-648167065,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50001","meta50001",-598751399,null)], null);
}));

(cljs.core.async.t_cljs$core$async50000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50000");

(cljs.core.async.t_cljs$core$async50000.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50000.
 */
cljs.core.async.__GT_t_cljs$core$async50000 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50000(f__$1,ch__$1,meta49998__$1,___$2,fn1__$1,meta50001){
return (new cljs.core.async.t_cljs$core$async50000(f__$1,ch__$1,meta49998__$1,___$2,fn1__$1,meta50001));
});

}

return (new cljs.core.async.t_cljs$core$async50000(self__.f,self__.ch,self__.meta49998,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__50004 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__50004) : self__.f.call(null,G__50004));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49998","meta49998",-1110899337,null)], null);
}));

(cljs.core.async.t_cljs$core$async49997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49997");

(cljs.core.async.t_cljs$core$async49997.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49997.
 */
cljs.core.async.__GT_t_cljs$core$async49997 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49997(f__$1,ch__$1,meta49998){
return (new cljs.core.async.t_cljs$core$async49997(f__$1,ch__$1,meta49998));
});

}

return (new cljs.core.async.t_cljs$core$async49997(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50005 = (function (f,ch,meta50006){
this.f = f;
this.ch = ch;
this.meta50006 = meta50006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50007,meta50006__$1){
var self__ = this;
var _50007__$1 = this;
return (new cljs.core.async.t_cljs$core$async50005(self__.f,self__.ch,meta50006__$1));
}));

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50007){
var self__ = this;
var _50007__$1 = this;
return self__.meta50006;
}));

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async50005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50006","meta50006",-180515143,null)], null);
}));

(cljs.core.async.t_cljs$core$async50005.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50005");

(cljs.core.async.t_cljs$core$async50005.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50005");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50005.
 */
cljs.core.async.__GT_t_cljs$core$async50005 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50005(f__$1,ch__$1,meta50006){
return (new cljs.core.async.t_cljs$core$async50005(f__$1,ch__$1,meta50006));
});

}

return (new cljs.core.async.t_cljs$core$async50005(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50008 = (function (p,ch,meta50009){
this.p = p;
this.ch = ch;
this.meta50009 = meta50009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50010,meta50009__$1){
var self__ = this;
var _50010__$1 = this;
return (new cljs.core.async.t_cljs$core$async50008(self__.p,self__.ch,meta50009__$1));
}));

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50010){
var self__ = this;
var _50010__$1 = this;
return self__.meta50009;
}));

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async50008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50009","meta50009",402255259,null)], null);
}));

(cljs.core.async.t_cljs$core$async50008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50008");

(cljs.core.async.t_cljs$core$async50008.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50008.
 */
cljs.core.async.__GT_t_cljs$core$async50008 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50008(p__$1,ch__$1,meta50009){
return (new cljs.core.async.t_cljs$core$async50008(p__$1,ch__$1,meta50009));
});

}

return (new cljs.core.async.t_cljs$core$async50008(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50012 = arguments.length;
switch (G__50012) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48806__auto___50949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_50033){
var state_val_50034 = (state_50033[(1)]);
if((state_val_50034 === (7))){
var inst_50029 = (state_50033[(2)]);
var state_50033__$1 = state_50033;
var statearr_50035_50956 = state_50033__$1;
(statearr_50035_50956[(2)] = inst_50029);

(statearr_50035_50956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (1))){
var state_50033__$1 = state_50033;
var statearr_50036_50957 = state_50033__$1;
(statearr_50036_50957[(2)] = null);

(statearr_50036_50957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (4))){
var inst_50015 = (state_50033[(7)]);
var inst_50015__$1 = (state_50033[(2)]);
var inst_50016 = (inst_50015__$1 == null);
var state_50033__$1 = (function (){var statearr_50037 = state_50033;
(statearr_50037[(7)] = inst_50015__$1);

return statearr_50037;
})();
if(cljs.core.truth_(inst_50016)){
var statearr_50038_50958 = state_50033__$1;
(statearr_50038_50958[(1)] = (5));

} else {
var statearr_50039_50959 = state_50033__$1;
(statearr_50039_50959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (6))){
var inst_50015 = (state_50033[(7)]);
var inst_50020 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50015) : p.call(null,inst_50015));
var state_50033__$1 = state_50033;
if(cljs.core.truth_(inst_50020)){
var statearr_50040_50960 = state_50033__$1;
(statearr_50040_50960[(1)] = (8));

} else {
var statearr_50041_50961 = state_50033__$1;
(statearr_50041_50961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (3))){
var inst_50031 = (state_50033[(2)]);
var state_50033__$1 = state_50033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50033__$1,inst_50031);
} else {
if((state_val_50034 === (2))){
var state_50033__$1 = state_50033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50033__$1,(4),ch);
} else {
if((state_val_50034 === (11))){
var inst_50023 = (state_50033[(2)]);
var state_50033__$1 = state_50033;
var statearr_50042_50962 = state_50033__$1;
(statearr_50042_50962[(2)] = inst_50023);

(statearr_50042_50962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (9))){
var state_50033__$1 = state_50033;
var statearr_50043_50963 = state_50033__$1;
(statearr_50043_50963[(2)] = null);

(statearr_50043_50963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (5))){
var inst_50018 = cljs.core.async.close_BANG_(out);
var state_50033__$1 = state_50033;
var statearr_50044_50964 = state_50033__$1;
(statearr_50044_50964[(2)] = inst_50018);

(statearr_50044_50964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (10))){
var inst_50026 = (state_50033[(2)]);
var state_50033__$1 = (function (){var statearr_50045 = state_50033;
(statearr_50045[(8)] = inst_50026);

return statearr_50045;
})();
var statearr_50046_50965 = state_50033__$1;
(statearr_50046_50965[(2)] = null);

(statearr_50046_50965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50034 === (8))){
var inst_50015 = (state_50033[(7)]);
var state_50033__$1 = state_50033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50033__$1,(11),out,inst_50015);
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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_50047 = [null,null,null,null,null,null,null,null,null];
(statearr_50047[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_50047[(1)] = (1));

return statearr_50047;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_50033){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_50033);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e50048){var ex__48739__auto__ = e50048;
var statearr_50049_50966 = state_50033;
(statearr_50049_50966[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_50033[(4)]))){
var statearr_50050_50967 = state_50033;
(statearr_50050_50967[(1)] = cljs.core.first((state_50033[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50968 = state_50033;
state_50033 = G__50968;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_50033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_50033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_50051 = f__48807__auto__();
(statearr_50051[(6)] = c__48806__auto___50949);

return statearr_50051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50053 = arguments.length;
switch (G__50053) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_50115){
var state_val_50116 = (state_50115[(1)]);
if((state_val_50116 === (7))){
var inst_50111 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50117_50970 = state_50115__$1;
(statearr_50117_50970[(2)] = inst_50111);

(statearr_50117_50970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (20))){
var inst_50081 = (state_50115[(7)]);
var inst_50092 = (state_50115[(2)]);
var inst_50093 = cljs.core.next(inst_50081);
var inst_50067 = inst_50093;
var inst_50068 = null;
var inst_50069 = (0);
var inst_50070 = (0);
var state_50115__$1 = (function (){var statearr_50118 = state_50115;
(statearr_50118[(8)] = inst_50069);

(statearr_50118[(9)] = inst_50070);

(statearr_50118[(10)] = inst_50067);

(statearr_50118[(11)] = inst_50092);

(statearr_50118[(12)] = inst_50068);

return statearr_50118;
})();
var statearr_50119_50971 = state_50115__$1;
(statearr_50119_50971[(2)] = null);

(statearr_50119_50971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (1))){
var state_50115__$1 = state_50115;
var statearr_50120_50972 = state_50115__$1;
(statearr_50120_50972[(2)] = null);

(statearr_50120_50972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (4))){
var inst_50056 = (state_50115[(13)]);
var inst_50056__$1 = (state_50115[(2)]);
var inst_50057 = (inst_50056__$1 == null);
var state_50115__$1 = (function (){var statearr_50121 = state_50115;
(statearr_50121[(13)] = inst_50056__$1);

return statearr_50121;
})();
if(cljs.core.truth_(inst_50057)){
var statearr_50122_50973 = state_50115__$1;
(statearr_50122_50973[(1)] = (5));

} else {
var statearr_50123_50974 = state_50115__$1;
(statearr_50123_50974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (15))){
var state_50115__$1 = state_50115;
var statearr_50127_50975 = state_50115__$1;
(statearr_50127_50975[(2)] = null);

(statearr_50127_50975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (21))){
var state_50115__$1 = state_50115;
var statearr_50128_50976 = state_50115__$1;
(statearr_50128_50976[(2)] = null);

(statearr_50128_50976[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (13))){
var inst_50069 = (state_50115[(8)]);
var inst_50070 = (state_50115[(9)]);
var inst_50067 = (state_50115[(10)]);
var inst_50068 = (state_50115[(12)]);
var inst_50077 = (state_50115[(2)]);
var inst_50078 = (inst_50070 + (1));
var tmp50124 = inst_50069;
var tmp50125 = inst_50067;
var tmp50126 = inst_50068;
var inst_50067__$1 = tmp50125;
var inst_50068__$1 = tmp50126;
var inst_50069__$1 = tmp50124;
var inst_50070__$1 = inst_50078;
var state_50115__$1 = (function (){var statearr_50129 = state_50115;
(statearr_50129[(8)] = inst_50069__$1);

(statearr_50129[(9)] = inst_50070__$1);

(statearr_50129[(10)] = inst_50067__$1);

(statearr_50129[(14)] = inst_50077);

(statearr_50129[(12)] = inst_50068__$1);

return statearr_50129;
})();
var statearr_50130_50977 = state_50115__$1;
(statearr_50130_50977[(2)] = null);

(statearr_50130_50977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (22))){
var state_50115__$1 = state_50115;
var statearr_50131_50984 = state_50115__$1;
(statearr_50131_50984[(2)] = null);

(statearr_50131_50984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (6))){
var inst_50056 = (state_50115[(13)]);
var inst_50065 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50056) : f.call(null,inst_50056));
var inst_50066 = cljs.core.seq(inst_50065);
var inst_50067 = inst_50066;
var inst_50068 = null;
var inst_50069 = (0);
var inst_50070 = (0);
var state_50115__$1 = (function (){var statearr_50132 = state_50115;
(statearr_50132[(8)] = inst_50069);

(statearr_50132[(9)] = inst_50070);

(statearr_50132[(10)] = inst_50067);

(statearr_50132[(12)] = inst_50068);

return statearr_50132;
})();
var statearr_50133_50985 = state_50115__$1;
(statearr_50133_50985[(2)] = null);

(statearr_50133_50985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (17))){
var inst_50081 = (state_50115[(7)]);
var inst_50085 = cljs.core.chunk_first(inst_50081);
var inst_50086 = cljs.core.chunk_rest(inst_50081);
var inst_50087 = cljs.core.count(inst_50085);
var inst_50067 = inst_50086;
var inst_50068 = inst_50085;
var inst_50069 = inst_50087;
var inst_50070 = (0);
var state_50115__$1 = (function (){var statearr_50134 = state_50115;
(statearr_50134[(8)] = inst_50069);

(statearr_50134[(9)] = inst_50070);

(statearr_50134[(10)] = inst_50067);

(statearr_50134[(12)] = inst_50068);

return statearr_50134;
})();
var statearr_50135_50986 = state_50115__$1;
(statearr_50135_50986[(2)] = null);

(statearr_50135_50986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (3))){
var inst_50113 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50115__$1,inst_50113);
} else {
if((state_val_50116 === (12))){
var inst_50101 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50136_50987 = state_50115__$1;
(statearr_50136_50987[(2)] = inst_50101);

(statearr_50136_50987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (2))){
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50115__$1,(4),in$);
} else {
if((state_val_50116 === (23))){
var inst_50109 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50137_50988 = state_50115__$1;
(statearr_50137_50988[(2)] = inst_50109);

(statearr_50137_50988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (19))){
var inst_50096 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50138_50993 = state_50115__$1;
(statearr_50138_50993[(2)] = inst_50096);

(statearr_50138_50993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (11))){
var inst_50067 = (state_50115[(10)]);
var inst_50081 = (state_50115[(7)]);
var inst_50081__$1 = cljs.core.seq(inst_50067);
var state_50115__$1 = (function (){var statearr_50139 = state_50115;
(statearr_50139[(7)] = inst_50081__$1);

return statearr_50139;
})();
if(inst_50081__$1){
var statearr_50140_51003 = state_50115__$1;
(statearr_50140_51003[(1)] = (14));

} else {
var statearr_50141_51005 = state_50115__$1;
(statearr_50141_51005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (9))){
var inst_50103 = (state_50115[(2)]);
var inst_50104 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50115__$1 = (function (){var statearr_50142 = state_50115;
(statearr_50142[(15)] = inst_50103);

return statearr_50142;
})();
if(cljs.core.truth_(inst_50104)){
var statearr_50143_51007 = state_50115__$1;
(statearr_50143_51007[(1)] = (21));

} else {
var statearr_50144_51008 = state_50115__$1;
(statearr_50144_51008[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (5))){
var inst_50059 = cljs.core.async.close_BANG_(out);
var state_50115__$1 = state_50115;
var statearr_50145_51009 = state_50115__$1;
(statearr_50145_51009[(2)] = inst_50059);

(statearr_50145_51009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (14))){
var inst_50081 = (state_50115[(7)]);
var inst_50083 = cljs.core.chunked_seq_QMARK_(inst_50081);
var state_50115__$1 = state_50115;
if(inst_50083){
var statearr_50146_51011 = state_50115__$1;
(statearr_50146_51011[(1)] = (17));

} else {
var statearr_50147_51012 = state_50115__$1;
(statearr_50147_51012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (16))){
var inst_50099 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50148_51013 = state_50115__$1;
(statearr_50148_51013[(2)] = inst_50099);

(statearr_50148_51013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (10))){
var inst_50070 = (state_50115[(9)]);
var inst_50068 = (state_50115[(12)]);
var inst_50075 = cljs.core._nth(inst_50068,inst_50070);
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50115__$1,(13),out,inst_50075);
} else {
if((state_val_50116 === (18))){
var inst_50081 = (state_50115[(7)]);
var inst_50090 = cljs.core.first(inst_50081);
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50115__$1,(20),out,inst_50090);
} else {
if((state_val_50116 === (8))){
var inst_50069 = (state_50115[(8)]);
var inst_50070 = (state_50115[(9)]);
var inst_50072 = (inst_50070 < inst_50069);
var inst_50073 = inst_50072;
var state_50115__$1 = state_50115;
if(cljs.core.truth_(inst_50073)){
var statearr_50149_51014 = state_50115__$1;
(statearr_50149_51014[(1)] = (10));

} else {
var statearr_50150_51015 = state_50115__$1;
(statearr_50150_51015[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48736__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48736__auto____0 = (function (){
var statearr_50151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50151[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48736__auto__);

(statearr_50151[(1)] = (1));

return statearr_50151;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48736__auto____1 = (function (state_50115){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_50115);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e50152){var ex__48739__auto__ = e50152;
var statearr_50153_51016 = state_50115;
(statearr_50153_51016[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_50115[(4)]))){
var statearr_50154_51017 = state_50115;
(statearr_50154_51017[(1)] = cljs.core.first((state_50115[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51018 = state_50115;
state_50115 = G__51018;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48736__auto__ = function(state_50115){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48736__auto____1.call(this,state_50115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48736__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48736__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_50155 = f__48807__auto__();
(statearr_50155[(6)] = c__48806__auto__);

return statearr_50155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));

return c__48806__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50157 = arguments.length;
switch (G__50157) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50159 = arguments.length;
switch (G__50159) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50161 = arguments.length;
switch (G__50161) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48806__auto___51022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_50185){
var state_val_50186 = (state_50185[(1)]);
if((state_val_50186 === (7))){
var inst_50180 = (state_50185[(2)]);
var state_50185__$1 = state_50185;
var statearr_50187_51023 = state_50185__$1;
(statearr_50187_51023[(2)] = inst_50180);

(statearr_50187_51023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (1))){
var inst_50162 = null;
var state_50185__$1 = (function (){var statearr_50188 = state_50185;
(statearr_50188[(7)] = inst_50162);

return statearr_50188;
})();
var statearr_50189_51024 = state_50185__$1;
(statearr_50189_51024[(2)] = null);

(statearr_50189_51024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (4))){
var inst_50165 = (state_50185[(8)]);
var inst_50165__$1 = (state_50185[(2)]);
var inst_50166 = (inst_50165__$1 == null);
var inst_50167 = cljs.core.not(inst_50166);
var state_50185__$1 = (function (){var statearr_50190 = state_50185;
(statearr_50190[(8)] = inst_50165__$1);

return statearr_50190;
})();
if(inst_50167){
var statearr_50191_51025 = state_50185__$1;
(statearr_50191_51025[(1)] = (5));

} else {
var statearr_50192_51026 = state_50185__$1;
(statearr_50192_51026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (6))){
var state_50185__$1 = state_50185;
var statearr_50193_51027 = state_50185__$1;
(statearr_50193_51027[(2)] = null);

(statearr_50193_51027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (3))){
var inst_50182 = (state_50185[(2)]);
var inst_50183 = cljs.core.async.close_BANG_(out);
var state_50185__$1 = (function (){var statearr_50194 = state_50185;
(statearr_50194[(9)] = inst_50182);

return statearr_50194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50185__$1,inst_50183);
} else {
if((state_val_50186 === (2))){
var state_50185__$1 = state_50185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50185__$1,(4),ch);
} else {
if((state_val_50186 === (11))){
var inst_50165 = (state_50185[(8)]);
var inst_50174 = (state_50185[(2)]);
var inst_50162 = inst_50165;
var state_50185__$1 = (function (){var statearr_50195 = state_50185;
(statearr_50195[(10)] = inst_50174);

(statearr_50195[(7)] = inst_50162);

return statearr_50195;
})();
var statearr_50196_51028 = state_50185__$1;
(statearr_50196_51028[(2)] = null);

(statearr_50196_51028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (9))){
var inst_50165 = (state_50185[(8)]);
var state_50185__$1 = state_50185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50185__$1,(11),out,inst_50165);
} else {
if((state_val_50186 === (5))){
var inst_50165 = (state_50185[(8)]);
var inst_50162 = (state_50185[(7)]);
var inst_50169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50165,inst_50162);
var state_50185__$1 = state_50185;
if(inst_50169){
var statearr_50198_51029 = state_50185__$1;
(statearr_50198_51029[(1)] = (8));

} else {
var statearr_50199_51030 = state_50185__$1;
(statearr_50199_51030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (10))){
var inst_50177 = (state_50185[(2)]);
var state_50185__$1 = state_50185;
var statearr_50200_51031 = state_50185__$1;
(statearr_50200_51031[(2)] = inst_50177);

(statearr_50200_51031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50186 === (8))){
var inst_50162 = (state_50185[(7)]);
var tmp50197 = inst_50162;
var inst_50162__$1 = tmp50197;
var state_50185__$1 = (function (){var statearr_50201 = state_50185;
(statearr_50201[(7)] = inst_50162__$1);

return statearr_50201;
})();
var statearr_50202_51032 = state_50185__$1;
(statearr_50202_51032[(2)] = null);

(statearr_50202_51032[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_50203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50203[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_50203[(1)] = (1));

return statearr_50203;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_50185){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_50185);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e50204){var ex__48739__auto__ = e50204;
var statearr_50205_51033 = state_50185;
(statearr_50205_51033[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_50185[(4)]))){
var statearr_50206_51034 = state_50185;
(statearr_50206_51034[(1)] = cljs.core.first((state_50185[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51035 = state_50185;
state_50185 = G__51035;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_50185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_50185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_50207 = f__48807__auto__();
(statearr_50207[(6)] = c__48806__auto___51022);

return statearr_50207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50209 = arguments.length;
switch (G__50209) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48806__auto___51037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_50247){
var state_val_50248 = (state_50247[(1)]);
if((state_val_50248 === (7))){
var inst_50243 = (state_50247[(2)]);
var state_50247__$1 = state_50247;
var statearr_50249_51038 = state_50247__$1;
(statearr_50249_51038[(2)] = inst_50243);

(statearr_50249_51038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (1))){
var inst_50210 = (new Array(n));
var inst_50211 = inst_50210;
var inst_50212 = (0);
var state_50247__$1 = (function (){var statearr_50250 = state_50247;
(statearr_50250[(7)] = inst_50212);

(statearr_50250[(8)] = inst_50211);

return statearr_50250;
})();
var statearr_50251_51039 = state_50247__$1;
(statearr_50251_51039[(2)] = null);

(statearr_50251_51039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (4))){
var inst_50215 = (state_50247[(9)]);
var inst_50215__$1 = (state_50247[(2)]);
var inst_50216 = (inst_50215__$1 == null);
var inst_50217 = cljs.core.not(inst_50216);
var state_50247__$1 = (function (){var statearr_50252 = state_50247;
(statearr_50252[(9)] = inst_50215__$1);

return statearr_50252;
})();
if(inst_50217){
var statearr_50253_51040 = state_50247__$1;
(statearr_50253_51040[(1)] = (5));

} else {
var statearr_50254_51041 = state_50247__$1;
(statearr_50254_51041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (15))){
var inst_50237 = (state_50247[(2)]);
var state_50247__$1 = state_50247;
var statearr_50255_51043 = state_50247__$1;
(statearr_50255_51043[(2)] = inst_50237);

(statearr_50255_51043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (13))){
var state_50247__$1 = state_50247;
var statearr_50256_51044 = state_50247__$1;
(statearr_50256_51044[(2)] = null);

(statearr_50256_51044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (6))){
var inst_50212 = (state_50247[(7)]);
var inst_50233 = (inst_50212 > (0));
var state_50247__$1 = state_50247;
if(cljs.core.truth_(inst_50233)){
var statearr_50257_51046 = state_50247__$1;
(statearr_50257_51046[(1)] = (12));

} else {
var statearr_50258_51047 = state_50247__$1;
(statearr_50258_51047[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (3))){
var inst_50245 = (state_50247[(2)]);
var state_50247__$1 = state_50247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50247__$1,inst_50245);
} else {
if((state_val_50248 === (12))){
var inst_50211 = (state_50247[(8)]);
var inst_50235 = cljs.core.vec(inst_50211);
var state_50247__$1 = state_50247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50247__$1,(15),out,inst_50235);
} else {
if((state_val_50248 === (2))){
var state_50247__$1 = state_50247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50247__$1,(4),ch);
} else {
if((state_val_50248 === (11))){
var inst_50227 = (state_50247[(2)]);
var inst_50228 = (new Array(n));
var inst_50211 = inst_50228;
var inst_50212 = (0);
var state_50247__$1 = (function (){var statearr_50259 = state_50247;
(statearr_50259[(10)] = inst_50227);

(statearr_50259[(7)] = inst_50212);

(statearr_50259[(8)] = inst_50211);

return statearr_50259;
})();
var statearr_50260_51048 = state_50247__$1;
(statearr_50260_51048[(2)] = null);

(statearr_50260_51048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (9))){
var inst_50211 = (state_50247[(8)]);
var inst_50225 = cljs.core.vec(inst_50211);
var state_50247__$1 = state_50247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50247__$1,(11),out,inst_50225);
} else {
if((state_val_50248 === (5))){
var inst_50215 = (state_50247[(9)]);
var inst_50212 = (state_50247[(7)]);
var inst_50220 = (state_50247[(11)]);
var inst_50211 = (state_50247[(8)]);
var inst_50219 = (inst_50211[inst_50212] = inst_50215);
var inst_50220__$1 = (inst_50212 + (1));
var inst_50221 = (inst_50220__$1 < n);
var state_50247__$1 = (function (){var statearr_50261 = state_50247;
(statearr_50261[(11)] = inst_50220__$1);

(statearr_50261[(12)] = inst_50219);

return statearr_50261;
})();
if(cljs.core.truth_(inst_50221)){
var statearr_50262_51049 = state_50247__$1;
(statearr_50262_51049[(1)] = (8));

} else {
var statearr_50263_51050 = state_50247__$1;
(statearr_50263_51050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (14))){
var inst_50240 = (state_50247[(2)]);
var inst_50241 = cljs.core.async.close_BANG_(out);
var state_50247__$1 = (function (){var statearr_50265 = state_50247;
(statearr_50265[(13)] = inst_50240);

return statearr_50265;
})();
var statearr_50266_51052 = state_50247__$1;
(statearr_50266_51052[(2)] = inst_50241);

(statearr_50266_51052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (10))){
var inst_50231 = (state_50247[(2)]);
var state_50247__$1 = state_50247;
var statearr_50267_51056 = state_50247__$1;
(statearr_50267_51056[(2)] = inst_50231);

(statearr_50267_51056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50248 === (8))){
var inst_50220 = (state_50247[(11)]);
var inst_50211 = (state_50247[(8)]);
var tmp50264 = inst_50211;
var inst_50211__$1 = tmp50264;
var inst_50212 = inst_50220;
var state_50247__$1 = (function (){var statearr_50268 = state_50247;
(statearr_50268[(7)] = inst_50212);

(statearr_50268[(8)] = inst_50211__$1);

return statearr_50268;
})();
var statearr_50269_51057 = state_50247__$1;
(statearr_50269_51057[(2)] = null);

(statearr_50269_51057[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_50270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50270[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_50270[(1)] = (1));

return statearr_50270;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_50247){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_50247);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e50271){var ex__48739__auto__ = e50271;
var statearr_50272_51060 = state_50247;
(statearr_50272_51060[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_50247[(4)]))){
var statearr_50273_51062 = state_50247;
(statearr_50273_51062[(1)] = cljs.core.first((state_50247[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51063 = state_50247;
state_50247 = G__51063;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_50247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_50247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_50274 = f__48807__auto__();
(statearr_50274[(6)] = c__48806__auto___51037);

return statearr_50274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50276 = arguments.length;
switch (G__50276) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48806__auto___51066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_50321){
var state_val_50322 = (state_50321[(1)]);
if((state_val_50322 === (7))){
var inst_50317 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50323_51067 = state_50321__$1;
(statearr_50323_51067[(2)] = inst_50317);

(statearr_50323_51067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (1))){
var inst_50277 = [];
var inst_50278 = inst_50277;
var inst_50279 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50321__$1 = (function (){var statearr_50324 = state_50321;
(statearr_50324[(7)] = inst_50278);

(statearr_50324[(8)] = inst_50279);

return statearr_50324;
})();
var statearr_50325_51068 = state_50321__$1;
(statearr_50325_51068[(2)] = null);

(statearr_50325_51068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (4))){
var inst_50282 = (state_50321[(9)]);
var inst_50282__$1 = (state_50321[(2)]);
var inst_50283 = (inst_50282__$1 == null);
var inst_50284 = cljs.core.not(inst_50283);
var state_50321__$1 = (function (){var statearr_50326 = state_50321;
(statearr_50326[(9)] = inst_50282__$1);

return statearr_50326;
})();
if(inst_50284){
var statearr_50327_51069 = state_50321__$1;
(statearr_50327_51069[(1)] = (5));

} else {
var statearr_50328_51070 = state_50321__$1;
(statearr_50328_51070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (15))){
var inst_50278 = (state_50321[(7)]);
var inst_50309 = cljs.core.vec(inst_50278);
var state_50321__$1 = state_50321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50321__$1,(18),out,inst_50309);
} else {
if((state_val_50322 === (13))){
var inst_50304 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50329_51071 = state_50321__$1;
(statearr_50329_51071[(2)] = inst_50304);

(statearr_50329_51071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (6))){
var inst_50278 = (state_50321[(7)]);
var inst_50306 = inst_50278.length;
var inst_50307 = (inst_50306 > (0));
var state_50321__$1 = state_50321;
if(cljs.core.truth_(inst_50307)){
var statearr_50330_51072 = state_50321__$1;
(statearr_50330_51072[(1)] = (15));

} else {
var statearr_50331_51073 = state_50321__$1;
(statearr_50331_51073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (17))){
var inst_50314 = (state_50321[(2)]);
var inst_50315 = cljs.core.async.close_BANG_(out);
var state_50321__$1 = (function (){var statearr_50332 = state_50321;
(statearr_50332[(10)] = inst_50314);

return statearr_50332;
})();
var statearr_50333_51074 = state_50321__$1;
(statearr_50333_51074[(2)] = inst_50315);

(statearr_50333_51074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (3))){
var inst_50319 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50321__$1,inst_50319);
} else {
if((state_val_50322 === (12))){
var inst_50278 = (state_50321[(7)]);
var inst_50297 = cljs.core.vec(inst_50278);
var state_50321__$1 = state_50321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50321__$1,(14),out,inst_50297);
} else {
if((state_val_50322 === (2))){
var state_50321__$1 = state_50321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50321__$1,(4),ch);
} else {
if((state_val_50322 === (11))){
var inst_50286 = (state_50321[(11)]);
var inst_50282 = (state_50321[(9)]);
var inst_50278 = (state_50321[(7)]);
var inst_50294 = inst_50278.push(inst_50282);
var tmp50334 = inst_50278;
var inst_50278__$1 = tmp50334;
var inst_50279 = inst_50286;
var state_50321__$1 = (function (){var statearr_50335 = state_50321;
(statearr_50335[(12)] = inst_50294);

(statearr_50335[(7)] = inst_50278__$1);

(statearr_50335[(8)] = inst_50279);

return statearr_50335;
})();
var statearr_50336_51076 = state_50321__$1;
(statearr_50336_51076[(2)] = null);

(statearr_50336_51076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (9))){
var inst_50279 = (state_50321[(8)]);
var inst_50290 = cljs.core.keyword_identical_QMARK_(inst_50279,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50321__$1 = state_50321;
var statearr_50337_51077 = state_50321__$1;
(statearr_50337_51077[(2)] = inst_50290);

(statearr_50337_51077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (5))){
var inst_50286 = (state_50321[(11)]);
var inst_50287 = (state_50321[(13)]);
var inst_50282 = (state_50321[(9)]);
var inst_50279 = (state_50321[(8)]);
var inst_50286__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50282) : f.call(null,inst_50282));
var inst_50287__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50286__$1,inst_50279);
var state_50321__$1 = (function (){var statearr_50338 = state_50321;
(statearr_50338[(11)] = inst_50286__$1);

(statearr_50338[(13)] = inst_50287__$1);

return statearr_50338;
})();
if(inst_50287__$1){
var statearr_50339_51080 = state_50321__$1;
(statearr_50339_51080[(1)] = (8));

} else {
var statearr_50340_51085 = state_50321__$1;
(statearr_50340_51085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (14))){
var inst_50286 = (state_50321[(11)]);
var inst_50282 = (state_50321[(9)]);
var inst_50299 = (state_50321[(2)]);
var inst_50300 = [];
var inst_50301 = inst_50300.push(inst_50282);
var inst_50278 = inst_50300;
var inst_50279 = inst_50286;
var state_50321__$1 = (function (){var statearr_50341 = state_50321;
(statearr_50341[(14)] = inst_50299);

(statearr_50341[(15)] = inst_50301);

(statearr_50341[(7)] = inst_50278);

(statearr_50341[(8)] = inst_50279);

return statearr_50341;
})();
var statearr_50342_51112 = state_50321__$1;
(statearr_50342_51112[(2)] = null);

(statearr_50342_51112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (16))){
var state_50321__$1 = state_50321;
var statearr_50343_51113 = state_50321__$1;
(statearr_50343_51113[(2)] = null);

(statearr_50343_51113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (10))){
var inst_50292 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
if(cljs.core.truth_(inst_50292)){
var statearr_50344_51115 = state_50321__$1;
(statearr_50344_51115[(1)] = (11));

} else {
var statearr_50345_51116 = state_50321__$1;
(statearr_50345_51116[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (18))){
var inst_50311 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50346_51117 = state_50321__$1;
(statearr_50346_51117[(2)] = inst_50311);

(statearr_50346_51117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (8))){
var inst_50287 = (state_50321[(13)]);
var state_50321__$1 = state_50321;
var statearr_50347_51118 = state_50321__$1;
(statearr_50347_51118[(2)] = inst_50287);

(statearr_50347_51118[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__48736__auto__ = null;
var cljs$core$async$state_machine__48736__auto____0 = (function (){
var statearr_50348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50348[(0)] = cljs$core$async$state_machine__48736__auto__);

(statearr_50348[(1)] = (1));

return statearr_50348;
});
var cljs$core$async$state_machine__48736__auto____1 = (function (state_50321){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_50321);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e50349){var ex__48739__auto__ = e50349;
var statearr_50350_51132 = state_50321;
(statearr_50350_51132[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_50321[(4)]))){
var statearr_50351_51133 = state_50321;
(statearr_50351_51133[(1)] = cljs.core.first((state_50321[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51134 = state_50321;
state_50321 = G__51134;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
cljs$core$async$state_machine__48736__auto__ = function(state_50321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48736__auto____1.call(this,state_50321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48736__auto____0;
cljs$core$async$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48736__auto____1;
return cljs$core$async$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_50352 = f__48807__auto__();
(statearr_50352[(6)] = c__48806__auto___51066);

return statearr_50352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
