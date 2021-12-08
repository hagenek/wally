goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40456 = arguments.length;
switch (G__40456) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40461 = (function (f,blockable,meta40462){
this.f = f;
this.blockable = blockable;
this.meta40462 = meta40462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40463,meta40462__$1){
var self__ = this;
var _40463__$1 = this;
return (new cljs.core.async.t_cljs$core$async40461(self__.f,self__.blockable,meta40462__$1));
}));

(cljs.core.async.t_cljs$core$async40461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40463){
var self__ = this;
var _40463__$1 = this;
return self__.meta40462;
}));

(cljs.core.async.t_cljs$core$async40461.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40462","meta40462",25913722,null)], null);
}));

(cljs.core.async.t_cljs$core$async40461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40461");

(cljs.core.async.t_cljs$core$async40461.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async40461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40461.
 */
cljs.core.async.__GT_t_cljs$core$async40461 = (function cljs$core$async$__GT_t_cljs$core$async40461(f__$1,blockable__$1,meta40462){
return (new cljs.core.async.t_cljs$core$async40461(f__$1,blockable__$1,meta40462));
});

}

return (new cljs.core.async.t_cljs$core$async40461(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40472 = arguments.length;
switch (G__40472) {
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
var G__40478 = arguments.length;
switch (G__40478) {
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
var G__40491 = arguments.length;
switch (G__40491) {
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
var val_42787 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42787) : fn1.call(null,val_42787));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42787) : fn1.call(null,val_42787));
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
var G__40502 = arguments.length;
switch (G__40502) {
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
var n__4695__auto___42802 = n;
var x_42804 = (0);
while(true){
if((x_42804 < n__4695__auto___42802)){
(a[x_42804] = x_42804);

var G__42805 = (x_42804 + (1));
x_42804 = G__42805;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40506 = (function (flag,meta40507){
this.flag = flag;
this.meta40507 = meta40507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40508,meta40507__$1){
var self__ = this;
var _40508__$1 = this;
return (new cljs.core.async.t_cljs$core$async40506(self__.flag,meta40507__$1));
}));

(cljs.core.async.t_cljs$core$async40506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40508){
var self__ = this;
var _40508__$1 = this;
return self__.meta40507;
}));

(cljs.core.async.t_cljs$core$async40506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40507","meta40507",-1190640624,null)], null);
}));

(cljs.core.async.t_cljs$core$async40506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40506");

(cljs.core.async.t_cljs$core$async40506.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async40506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40506.
 */
cljs.core.async.__GT_t_cljs$core$async40506 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40506(flag__$1,meta40507){
return (new cljs.core.async.t_cljs$core$async40506(flag__$1,meta40507));
});

}

return (new cljs.core.async.t_cljs$core$async40506(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40515 = (function (flag,cb,meta40516){
this.flag = flag;
this.cb = cb;
this.meta40516 = meta40516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40517,meta40516__$1){
var self__ = this;
var _40517__$1 = this;
return (new cljs.core.async.t_cljs$core$async40515(self__.flag,self__.cb,meta40516__$1));
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40517){
var self__ = this;
var _40517__$1 = this;
return self__.meta40516;
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40516","meta40516",-2119723913,null)], null);
}));

(cljs.core.async.t_cljs$core$async40515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40515");

(cljs.core.async.t_cljs$core$async40515.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async40515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40515.
 */
cljs.core.async.__GT_t_cljs$core$async40515 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40515(flag__$1,cb__$1,meta40516){
return (new cljs.core.async.t_cljs$core$async40515(flag__$1,cb__$1,meta40516));
});

}

return (new cljs.core.async.t_cljs$core$async40515(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40525_SHARP_){
var G__40531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40525_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40531) : fret.call(null,G__40531));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40526_SHARP_){
var G__40532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40526_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40532) : fret.call(null,G__40532));
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
var G__42810 = (i + (1));
i = G__42810;
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
var len__4818__auto___42816 = arguments.length;
var i__4819__auto___42817 = (0);
while(true){
if((i__4819__auto___42817 < len__4818__auto___42816)){
args__4824__auto__.push((arguments[i__4819__auto___42817]));

var G__42822 = (i__4819__auto___42817 + (1));
i__4819__auto___42817 = G__42822;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40537){
var map__40541 = p__40537;
var map__40541__$1 = cljs.core.__destructure_map(map__40541);
var opts = map__40541__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40534){
var G__40535 = cljs.core.first(seq40534);
var seq40534__$1 = cljs.core.next(seq40534);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40535,seq40534__$1);
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
var G__40546 = arguments.length;
switch (G__40546) {
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
var c__40370__auto___42836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40572){
var state_val_40573 = (state_40572[(1)]);
if((state_val_40573 === (7))){
var inst_40568 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40580_42842 = state_40572__$1;
(statearr_40580_42842[(2)] = inst_40568);

(statearr_40580_42842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (1))){
var state_40572__$1 = state_40572;
var statearr_40581_42843 = state_40572__$1;
(statearr_40581_42843[(2)] = null);

(statearr_40581_42843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (4))){
var inst_40551 = (state_40572[(7)]);
var inst_40551__$1 = (state_40572[(2)]);
var inst_40552 = (inst_40551__$1 == null);
var state_40572__$1 = (function (){var statearr_40586 = state_40572;
(statearr_40586[(7)] = inst_40551__$1);

return statearr_40586;
})();
if(cljs.core.truth_(inst_40552)){
var statearr_40587_42848 = state_40572__$1;
(statearr_40587_42848[(1)] = (5));

} else {
var statearr_40588_42853 = state_40572__$1;
(statearr_40588_42853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (13))){
var state_40572__$1 = state_40572;
var statearr_40589_42854 = state_40572__$1;
(statearr_40589_42854[(2)] = null);

(statearr_40589_42854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (6))){
var inst_40551 = (state_40572[(7)]);
var state_40572__$1 = state_40572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40572__$1,(11),to,inst_40551);
} else {
if((state_val_40573 === (3))){
var inst_40570 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40572__$1,inst_40570);
} else {
if((state_val_40573 === (12))){
var state_40572__$1 = state_40572;
var statearr_40590_42855 = state_40572__$1;
(statearr_40590_42855[(2)] = null);

(statearr_40590_42855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (2))){
var state_40572__$1 = state_40572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40572__$1,(4),from);
} else {
if((state_val_40573 === (11))){
var inst_40561 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40561)){
var statearr_40591_42856 = state_40572__$1;
(statearr_40591_42856[(1)] = (12));

} else {
var statearr_40592_42857 = state_40572__$1;
(statearr_40592_42857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (9))){
var state_40572__$1 = state_40572;
var statearr_40593_42858 = state_40572__$1;
(statearr_40593_42858[(2)] = null);

(statearr_40593_42858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (5))){
var state_40572__$1 = state_40572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40594_42859 = state_40572__$1;
(statearr_40594_42859[(1)] = (8));

} else {
var statearr_40595_42865 = state_40572__$1;
(statearr_40595_42865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (14))){
var inst_40566 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40596_42866 = state_40572__$1;
(statearr_40596_42866[(2)] = inst_40566);

(statearr_40596_42866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (10))){
var inst_40558 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40597_42867 = state_40572__$1;
(statearr_40597_42867[(2)] = inst_40558);

(statearr_40597_42867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (8))){
var inst_40555 = cljs.core.async.close_BANG_(to);
var state_40572__$1 = state_40572;
var statearr_40598_42868 = state_40572__$1;
(statearr_40598_42868[(2)] = inst_40555);

(statearr_40598_42868[(1)] = (10));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_40599 = [null,null,null,null,null,null,null,null];
(statearr_40599[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_40599[(1)] = (1));

return statearr_40599;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_40572){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40572);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40601){var ex__40206__auto__ = e40601;
var statearr_40602_42869 = state_40572;
(statearr_40602_42869[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40572[(4)]))){
var statearr_40603_42870 = state_40572;
(statearr_40603_42870[(1)] = cljs.core.first((state_40572[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42871 = state_40572;
state_40572 = G__42871;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_40572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_40572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40607 = f__40371__auto__();
(statearr_40607[(6)] = c__40370__auto___42836);

return statearr_40607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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
var process = (function (p__40608){
var vec__40609 = p__40608;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40609,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40609,(1),null);
var job = vec__40609;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40370__auto___42873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40617){
var state_val_40618 = (state_40617[(1)]);
if((state_val_40618 === (1))){
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40617__$1,(2),res,v);
} else {
if((state_val_40618 === (2))){
var inst_40614 = (state_40617[(2)]);
var inst_40615 = cljs.core.async.close_BANG_(res);
var state_40617__$1 = (function (){var statearr_40619 = state_40617;
(statearr_40619[(7)] = inst_40614);

return statearr_40619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40617__$1,inst_40615);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0 = (function (){
var statearr_40620 = [null,null,null,null,null,null,null,null];
(statearr_40620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__);

(statearr_40620[(1)] = (1));

return statearr_40620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1 = (function (state_40617){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40617);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40621){var ex__40206__auto__ = e40621;
var statearr_40622_42895 = state_40617;
(statearr_40622_42895[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40617[(4)]))){
var statearr_40623_42897 = state_40617;
(statearr_40623_42897[(1)] = cljs.core.first((state_40617[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42899 = state_40617;
state_40617 = G__42899;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = function(state_40617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1.call(this,state_40617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40624 = f__40371__auto__();
(statearr_40624[(6)] = c__40370__auto___42873);

return statearr_40624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40625){
var vec__40626 = p__40625;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40626,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40626,(1),null);
var job = vec__40626;
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
var n__4695__auto___42901 = n;
var __42902 = (0);
while(true){
if((__42902 < n__4695__auto___42901)){
var G__40629_42903 = type;
var G__40629_42904__$1 = (((G__40629_42903 instanceof cljs.core.Keyword))?G__40629_42903.fqn:null);
switch (G__40629_42904__$1) {
case "compute":
var c__40370__auto___42910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42902,c__40370__auto___42910,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async){
return (function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = ((function (__42902,c__40370__auto___42910,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async){
return (function (state_40642){
var state_val_40643 = (state_40642[(1)]);
if((state_val_40643 === (1))){
var state_40642__$1 = state_40642;
var statearr_40644_42917 = state_40642__$1;
(statearr_40644_42917[(2)] = null);

(statearr_40644_42917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (2))){
var state_40642__$1 = state_40642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40642__$1,(4),jobs);
} else {
if((state_val_40643 === (3))){
var inst_40640 = (state_40642[(2)]);
var state_40642__$1 = state_40642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40642__$1,inst_40640);
} else {
if((state_val_40643 === (4))){
var inst_40632 = (state_40642[(2)]);
var inst_40633 = process(inst_40632);
var state_40642__$1 = state_40642;
if(cljs.core.truth_(inst_40633)){
var statearr_40645_42935 = state_40642__$1;
(statearr_40645_42935[(1)] = (5));

} else {
var statearr_40646_42936 = state_40642__$1;
(statearr_40646_42936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (5))){
var state_40642__$1 = state_40642;
var statearr_40647_42937 = state_40642__$1;
(statearr_40647_42937[(2)] = null);

(statearr_40647_42937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (6))){
var state_40642__$1 = state_40642;
var statearr_40648_42939 = state_40642__$1;
(statearr_40648_42939[(2)] = null);

(statearr_40648_42939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (7))){
var inst_40638 = (state_40642[(2)]);
var state_40642__$1 = state_40642;
var statearr_40649_42945 = state_40642__$1;
(statearr_40649_42945[(2)] = inst_40638);

(statearr_40649_42945[(1)] = (3));


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
});})(__42902,c__40370__auto___42910,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async))
;
return ((function (__42902,switch__40202__auto__,c__40370__auto___42910,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0 = (function (){
var statearr_40650 = [null,null,null,null,null,null,null];
(statearr_40650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__);

(statearr_40650[(1)] = (1));

return statearr_40650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1 = (function (state_40642){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40642);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40651){var ex__40206__auto__ = e40651;
var statearr_40652_42952 = state_40642;
(statearr_40652_42952[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40642[(4)]))){
var statearr_40653_42953 = state_40642;
(statearr_40653_42953[(1)] = cljs.core.first((state_40642[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42958 = state_40642;
state_40642 = G__42958;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = function(state_40642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1.call(this,state_40642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__;
})()
;})(__42902,switch__40202__auto__,c__40370__auto___42910,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async))
})();
var state__40372__auto__ = (function (){var statearr_40654 = f__40371__auto__();
(statearr_40654[(6)] = c__40370__auto___42910);

return statearr_40654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
});})(__42902,c__40370__auto___42910,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async))
);


break;
case "async":
var c__40370__auto___42961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42902,c__40370__auto___42961,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async){
return (function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = ((function (__42902,c__40370__auto___42961,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async){
return (function (state_40667){
var state_val_40668 = (state_40667[(1)]);
if((state_val_40668 === (1))){
var state_40667__$1 = state_40667;
var statearr_40669_42967 = state_40667__$1;
(statearr_40669_42967[(2)] = null);

(statearr_40669_42967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (2))){
var state_40667__$1 = state_40667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40667__$1,(4),jobs);
} else {
if((state_val_40668 === (3))){
var inst_40665 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40667__$1,inst_40665);
} else {
if((state_val_40668 === (4))){
var inst_40657 = (state_40667[(2)]);
var inst_40658 = async(inst_40657);
var state_40667__$1 = state_40667;
if(cljs.core.truth_(inst_40658)){
var statearr_40670_42973 = state_40667__$1;
(statearr_40670_42973[(1)] = (5));

} else {
var statearr_40671_42974 = state_40667__$1;
(statearr_40671_42974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (5))){
var state_40667__$1 = state_40667;
var statearr_40675_42976 = state_40667__$1;
(statearr_40675_42976[(2)] = null);

(statearr_40675_42976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (6))){
var state_40667__$1 = state_40667;
var statearr_40678_42977 = state_40667__$1;
(statearr_40678_42977[(2)] = null);

(statearr_40678_42977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (7))){
var inst_40663 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
var statearr_40682_42980 = state_40667__$1;
(statearr_40682_42980[(2)] = inst_40663);

(statearr_40682_42980[(1)] = (3));


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
});})(__42902,c__40370__auto___42961,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async))
;
return ((function (__42902,switch__40202__auto__,c__40370__auto___42961,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0 = (function (){
var statearr_40685 = [null,null,null,null,null,null,null];
(statearr_40685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__);

(statearr_40685[(1)] = (1));

return statearr_40685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1 = (function (state_40667){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40667);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40686){var ex__40206__auto__ = e40686;
var statearr_40687_42981 = state_40667;
(statearr_40687_42981[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40667[(4)]))){
var statearr_40688_42982 = state_40667;
(statearr_40688_42982[(1)] = cljs.core.first((state_40667[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42983 = state_40667;
state_40667 = G__42983;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = function(state_40667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1.call(this,state_40667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__;
})()
;})(__42902,switch__40202__auto__,c__40370__auto___42961,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async))
})();
var state__40372__auto__ = (function (){var statearr_40689 = f__40371__auto__();
(statearr_40689[(6)] = c__40370__auto___42961);

return statearr_40689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
});})(__42902,c__40370__auto___42961,G__40629_42903,G__40629_42904__$1,n__4695__auto___42901,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40629_42904__$1)].join('')));

}

var G__42986 = (__42902 + (1));
__42902 = G__42986;
continue;
} else {
}
break;
}

var c__40370__auto___42988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40711){
var state_val_40712 = (state_40711[(1)]);
if((state_val_40712 === (7))){
var inst_40707 = (state_40711[(2)]);
var state_40711__$1 = state_40711;
var statearr_40713_42990 = state_40711__$1;
(statearr_40713_42990[(2)] = inst_40707);

(statearr_40713_42990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (1))){
var state_40711__$1 = state_40711;
var statearr_40714_42991 = state_40711__$1;
(statearr_40714_42991[(2)] = null);

(statearr_40714_42991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (4))){
var inst_40692 = (state_40711[(7)]);
var inst_40692__$1 = (state_40711[(2)]);
var inst_40693 = (inst_40692__$1 == null);
var state_40711__$1 = (function (){var statearr_40718 = state_40711;
(statearr_40718[(7)] = inst_40692__$1);

return statearr_40718;
})();
if(cljs.core.truth_(inst_40693)){
var statearr_40719_42992 = state_40711__$1;
(statearr_40719_42992[(1)] = (5));

} else {
var statearr_40720_42994 = state_40711__$1;
(statearr_40720_42994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (6))){
var inst_40692 = (state_40711[(7)]);
var inst_40697 = (state_40711[(8)]);
var inst_40697__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40699 = [inst_40692,inst_40697__$1];
var inst_40700 = (new cljs.core.PersistentVector(null,2,(5),inst_40698,inst_40699,null));
var state_40711__$1 = (function (){var statearr_40726 = state_40711;
(statearr_40726[(8)] = inst_40697__$1);

return statearr_40726;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40711__$1,(8),jobs,inst_40700);
} else {
if((state_val_40712 === (3))){
var inst_40709 = (state_40711[(2)]);
var state_40711__$1 = state_40711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40711__$1,inst_40709);
} else {
if((state_val_40712 === (2))){
var state_40711__$1 = state_40711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40711__$1,(4),from);
} else {
if((state_val_40712 === (9))){
var inst_40704 = (state_40711[(2)]);
var state_40711__$1 = (function (){var statearr_40730 = state_40711;
(statearr_40730[(9)] = inst_40704);

return statearr_40730;
})();
var statearr_40731_42998 = state_40711__$1;
(statearr_40731_42998[(2)] = null);

(statearr_40731_42998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (5))){
var inst_40695 = cljs.core.async.close_BANG_(jobs);
var state_40711__$1 = state_40711;
var statearr_40735_43000 = state_40711__$1;
(statearr_40735_43000[(2)] = inst_40695);

(statearr_40735_43000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (8))){
var inst_40697 = (state_40711[(8)]);
var inst_40702 = (state_40711[(2)]);
var state_40711__$1 = (function (){var statearr_40736 = state_40711;
(statearr_40736[(10)] = inst_40702);

return statearr_40736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40711__$1,(9),results,inst_40697);
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
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0 = (function (){
var statearr_40742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__);

(statearr_40742[(1)] = (1));

return statearr_40742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1 = (function (state_40711){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40711);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40744){var ex__40206__auto__ = e40744;
var statearr_40745_43002 = state_40711;
(statearr_40745_43002[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40711[(4)]))){
var statearr_40746_43003 = state_40711;
(statearr_40746_43003[(1)] = cljs.core.first((state_40711[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43004 = state_40711;
state_40711 = G__43004;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = function(state_40711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1.call(this,state_40711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40747 = f__40371__auto__();
(statearr_40747[(6)] = c__40370__auto___42988);

return statearr_40747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


var c__40370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40792){
var state_val_40794 = (state_40792[(1)]);
if((state_val_40794 === (7))){
var inst_40785 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40795_43005 = state_40792__$1;
(statearr_40795_43005[(2)] = inst_40785);

(statearr_40795_43005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (20))){
var state_40792__$1 = state_40792;
var statearr_40796_43006 = state_40792__$1;
(statearr_40796_43006[(2)] = null);

(statearr_40796_43006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (1))){
var state_40792__$1 = state_40792;
var statearr_40797_43007 = state_40792__$1;
(statearr_40797_43007[(2)] = null);

(statearr_40797_43007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (4))){
var inst_40750 = (state_40792[(7)]);
var inst_40750__$1 = (state_40792[(2)]);
var inst_40751 = (inst_40750__$1 == null);
var state_40792__$1 = (function (){var statearr_40798 = state_40792;
(statearr_40798[(7)] = inst_40750__$1);

return statearr_40798;
})();
if(cljs.core.truth_(inst_40751)){
var statearr_40799_43008 = state_40792__$1;
(statearr_40799_43008[(1)] = (5));

} else {
var statearr_40800_43009 = state_40792__$1;
(statearr_40800_43009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (15))){
var inst_40764 = (state_40792[(8)]);
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40792__$1,(18),to,inst_40764);
} else {
if((state_val_40794 === (21))){
var inst_40780 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40806_43010 = state_40792__$1;
(statearr_40806_43010[(2)] = inst_40780);

(statearr_40806_43010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (13))){
var inst_40782 = (state_40792[(2)]);
var state_40792__$1 = (function (){var statearr_40807 = state_40792;
(statearr_40807[(9)] = inst_40782);

return statearr_40807;
})();
var statearr_40808_43012 = state_40792__$1;
(statearr_40808_43012[(2)] = null);

(statearr_40808_43012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (6))){
var inst_40750 = (state_40792[(7)]);
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40792__$1,(11),inst_40750);
} else {
if((state_val_40794 === (17))){
var inst_40775 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
if(cljs.core.truth_(inst_40775)){
var statearr_40809_43014 = state_40792__$1;
(statearr_40809_43014[(1)] = (19));

} else {
var statearr_40810_43015 = state_40792__$1;
(statearr_40810_43015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (3))){
var inst_40787 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40792__$1,inst_40787);
} else {
if((state_val_40794 === (12))){
var inst_40760 = (state_40792[(10)]);
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40792__$1,(14),inst_40760);
} else {
if((state_val_40794 === (2))){
var state_40792__$1 = state_40792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40792__$1,(4),results);
} else {
if((state_val_40794 === (19))){
var state_40792__$1 = state_40792;
var statearr_40818_43021 = state_40792__$1;
(statearr_40818_43021[(2)] = null);

(statearr_40818_43021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (11))){
var inst_40760 = (state_40792[(2)]);
var state_40792__$1 = (function (){var statearr_40819 = state_40792;
(statearr_40819[(10)] = inst_40760);

return statearr_40819;
})();
var statearr_40820_43022 = state_40792__$1;
(statearr_40820_43022[(2)] = null);

(statearr_40820_43022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (9))){
var state_40792__$1 = state_40792;
var statearr_40821_43023 = state_40792__$1;
(statearr_40821_43023[(2)] = null);

(statearr_40821_43023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (5))){
var state_40792__$1 = state_40792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40822_43025 = state_40792__$1;
(statearr_40822_43025[(1)] = (8));

} else {
var statearr_40824_43026 = state_40792__$1;
(statearr_40824_43026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (14))){
var inst_40764 = (state_40792[(8)]);
var inst_40769 = (state_40792[(11)]);
var inst_40764__$1 = (state_40792[(2)]);
var inst_40768 = (inst_40764__$1 == null);
var inst_40769__$1 = cljs.core.not(inst_40768);
var state_40792__$1 = (function (){var statearr_40825 = state_40792;
(statearr_40825[(8)] = inst_40764__$1);

(statearr_40825[(11)] = inst_40769__$1);

return statearr_40825;
})();
if(inst_40769__$1){
var statearr_40826_43030 = state_40792__$1;
(statearr_40826_43030[(1)] = (15));

} else {
var statearr_40827_43031 = state_40792__$1;
(statearr_40827_43031[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (16))){
var inst_40769 = (state_40792[(11)]);
var state_40792__$1 = state_40792;
var statearr_40828_43033 = state_40792__$1;
(statearr_40828_43033[(2)] = inst_40769);

(statearr_40828_43033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (10))){
var inst_40757 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40829_43038 = state_40792__$1;
(statearr_40829_43038[(2)] = inst_40757);

(statearr_40829_43038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (18))){
var inst_40772 = (state_40792[(2)]);
var state_40792__$1 = state_40792;
var statearr_40830_43039 = state_40792__$1;
(statearr_40830_43039[(2)] = inst_40772);

(statearr_40830_43039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40794 === (8))){
var inst_40754 = cljs.core.async.close_BANG_(to);
var state_40792__$1 = state_40792;
var statearr_40831_43040 = state_40792__$1;
(statearr_40831_43040[(2)] = inst_40754);

(statearr_40831_43040[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0 = (function (){
var statearr_40833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__);

(statearr_40833[(1)] = (1));

return statearr_40833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1 = (function (state_40792){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40792);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40837){var ex__40206__auto__ = e40837;
var statearr_40838_43041 = state_40792;
(statearr_40838_43041[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40792[(4)]))){
var statearr_40839_43042 = state_40792;
(statearr_40839_43042[(1)] = cljs.core.first((state_40792[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43043 = state_40792;
state_40792 = G__43043;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__ = function(state_40792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1.call(this,state_40792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40843 = f__40371__auto__();
(statearr_40843[(6)] = c__40370__auto__);

return statearr_40843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));

return c__40370__auto__;
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
var G__40845 = arguments.length;
switch (G__40845) {
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
var G__40847 = arguments.length;
switch (G__40847) {
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
var G__40852 = arguments.length;
switch (G__40852) {
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
var c__40370__auto___43052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40884){
var state_val_40885 = (state_40884[(1)]);
if((state_val_40885 === (7))){
var inst_40877 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40886_43053 = state_40884__$1;
(statearr_40886_43053[(2)] = inst_40877);

(statearr_40886_43053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (1))){
var state_40884__$1 = state_40884;
var statearr_40887_43054 = state_40884__$1;
(statearr_40887_43054[(2)] = null);

(statearr_40887_43054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (4))){
var inst_40858 = (state_40884[(7)]);
var inst_40858__$1 = (state_40884[(2)]);
var inst_40859 = (inst_40858__$1 == null);
var state_40884__$1 = (function (){var statearr_40891 = state_40884;
(statearr_40891[(7)] = inst_40858__$1);

return statearr_40891;
})();
if(cljs.core.truth_(inst_40859)){
var statearr_40892_43055 = state_40884__$1;
(statearr_40892_43055[(1)] = (5));

} else {
var statearr_40897_43056 = state_40884__$1;
(statearr_40897_43056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (13))){
var state_40884__$1 = state_40884;
var statearr_40899_43057 = state_40884__$1;
(statearr_40899_43057[(2)] = null);

(statearr_40899_43057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (6))){
var inst_40858 = (state_40884[(7)]);
var inst_40864 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40858) : p.call(null,inst_40858));
var state_40884__$1 = state_40884;
if(cljs.core.truth_(inst_40864)){
var statearr_40900_43058 = state_40884__$1;
(statearr_40900_43058[(1)] = (9));

} else {
var statearr_40901_43060 = state_40884__$1;
(statearr_40901_43060[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (3))){
var inst_40880 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40884__$1,inst_40880);
} else {
if((state_val_40885 === (12))){
var state_40884__$1 = state_40884;
var statearr_40905_43062 = state_40884__$1;
(statearr_40905_43062[(2)] = null);

(statearr_40905_43062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (2))){
var state_40884__$1 = state_40884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40884__$1,(4),ch);
} else {
if((state_val_40885 === (11))){
var inst_40858 = (state_40884[(7)]);
var inst_40868 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40884__$1,(8),inst_40868,inst_40858);
} else {
if((state_val_40885 === (9))){
var state_40884__$1 = state_40884;
var statearr_40907_43063 = state_40884__$1;
(statearr_40907_43063[(2)] = tc);

(statearr_40907_43063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (5))){
var inst_40861 = cljs.core.async.close_BANG_(tc);
var inst_40862 = cljs.core.async.close_BANG_(fc);
var state_40884__$1 = (function (){var statearr_40908 = state_40884;
(statearr_40908[(8)] = inst_40861);

return statearr_40908;
})();
var statearr_40909_43064 = state_40884__$1;
(statearr_40909_43064[(2)] = inst_40862);

(statearr_40909_43064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (14))){
var inst_40875 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40910_43065 = state_40884__$1;
(statearr_40910_43065[(2)] = inst_40875);

(statearr_40910_43065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (10))){
var state_40884__$1 = state_40884;
var statearr_40911_43067 = state_40884__$1;
(statearr_40911_43067[(2)] = fc);

(statearr_40911_43067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (8))){
var inst_40870 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
if(cljs.core.truth_(inst_40870)){
var statearr_40912_43068 = state_40884__$1;
(statearr_40912_43068[(1)] = (12));

} else {
var statearr_40913_43069 = state_40884__$1;
(statearr_40913_43069[(1)] = (13));

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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_40915 = [null,null,null,null,null,null,null,null,null];
(statearr_40915[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_40915[(1)] = (1));

return statearr_40915;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_40884){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40884);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40916){var ex__40206__auto__ = e40916;
var statearr_40917_43070 = state_40884;
(statearr_40917_43070[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40884[(4)]))){
var statearr_40918_43072 = state_40884;
(statearr_40918_43072[(1)] = cljs.core.first((state_40884[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43074 = state_40884;
state_40884 = G__43074;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_40884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_40884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40923 = f__40371__auto__();
(statearr_40923[(6)] = c__40370__auto___43052);

return statearr_40923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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
var c__40370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40947){
var state_val_40948 = (state_40947[(1)]);
if((state_val_40948 === (7))){
var inst_40943 = (state_40947[(2)]);
var state_40947__$1 = state_40947;
var statearr_40949_43079 = state_40947__$1;
(statearr_40949_43079[(2)] = inst_40943);

(statearr_40949_43079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (1))){
var inst_40924 = init;
var inst_40925 = inst_40924;
var state_40947__$1 = (function (){var statearr_40950 = state_40947;
(statearr_40950[(7)] = inst_40925);

return statearr_40950;
})();
var statearr_40951_43084 = state_40947__$1;
(statearr_40951_43084[(2)] = null);

(statearr_40951_43084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (4))){
var inst_40928 = (state_40947[(8)]);
var inst_40928__$1 = (state_40947[(2)]);
var inst_40931 = (inst_40928__$1 == null);
var state_40947__$1 = (function (){var statearr_40954 = state_40947;
(statearr_40954[(8)] = inst_40928__$1);

return statearr_40954;
})();
if(cljs.core.truth_(inst_40931)){
var statearr_40955_43086 = state_40947__$1;
(statearr_40955_43086[(1)] = (5));

} else {
var statearr_40956_43087 = state_40947__$1;
(statearr_40956_43087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (6))){
var inst_40928 = (state_40947[(8)]);
var inst_40925 = (state_40947[(7)]);
var inst_40934 = (state_40947[(9)]);
var inst_40934__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40925,inst_40928) : f.call(null,inst_40925,inst_40928));
var inst_40935 = cljs.core.reduced_QMARK_(inst_40934__$1);
var state_40947__$1 = (function (){var statearr_40957 = state_40947;
(statearr_40957[(9)] = inst_40934__$1);

return statearr_40957;
})();
if(inst_40935){
var statearr_40958_43088 = state_40947__$1;
(statearr_40958_43088[(1)] = (8));

} else {
var statearr_40959_43092 = state_40947__$1;
(statearr_40959_43092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (3))){
var inst_40945 = (state_40947[(2)]);
var state_40947__$1 = state_40947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40947__$1,inst_40945);
} else {
if((state_val_40948 === (2))){
var state_40947__$1 = state_40947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40947__$1,(4),ch);
} else {
if((state_val_40948 === (9))){
var inst_40934 = (state_40947[(9)]);
var inst_40925 = inst_40934;
var state_40947__$1 = (function (){var statearr_40962 = state_40947;
(statearr_40962[(7)] = inst_40925);

return statearr_40962;
})();
var statearr_40963_43095 = state_40947__$1;
(statearr_40963_43095[(2)] = null);

(statearr_40963_43095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (5))){
var inst_40925 = (state_40947[(7)]);
var state_40947__$1 = state_40947;
var statearr_40964_43099 = state_40947__$1;
(statearr_40964_43099[(2)] = inst_40925);

(statearr_40964_43099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (10))){
var inst_40941 = (state_40947[(2)]);
var state_40947__$1 = state_40947;
var statearr_40969_43100 = state_40947__$1;
(statearr_40969_43100[(2)] = inst_40941);

(statearr_40969_43100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40948 === (8))){
var inst_40934 = (state_40947[(9)]);
var inst_40937 = cljs.core.deref(inst_40934);
var state_40947__$1 = state_40947;
var statearr_40970_43101 = state_40947__$1;
(statearr_40970_43101[(2)] = inst_40937);

(statearr_40970_43101[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__40203__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40203__auto____0 = (function (){
var statearr_40971 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40971[(0)] = cljs$core$async$reduce_$_state_machine__40203__auto__);

(statearr_40971[(1)] = (1));

return statearr_40971;
});
var cljs$core$async$reduce_$_state_machine__40203__auto____1 = (function (state_40947){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40947);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40972){var ex__40206__auto__ = e40972;
var statearr_40973_43107 = state_40947;
(statearr_40973_43107[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40947[(4)]))){
var statearr_40974_43108 = state_40947;
(statearr_40974_43108[(1)] = cljs.core.first((state_40947[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43109 = state_40947;
state_40947 = G__43109;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40203__auto__ = function(state_40947){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40203__auto____1.call(this,state_40947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40203__auto____0;
cljs$core$async$reduce_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40203__auto____1;
return cljs$core$async$reduce_$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40975 = f__40371__auto__();
(statearr_40975[(6)] = c__40370__auto__);

return statearr_40975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));

return c__40370__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_40982){
var state_val_40983 = (state_40982[(1)]);
if((state_val_40983 === (1))){
var inst_40977 = cljs.core.async.reduce(f__$1,init,ch);
var state_40982__$1 = state_40982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40982__$1,(2),inst_40977);
} else {
if((state_val_40983 === (2))){
var inst_40979 = (state_40982[(2)]);
var inst_40980 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40979) : f__$1.call(null,inst_40979));
var state_40982__$1 = state_40982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40982__$1,inst_40980);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40203__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40203__auto____0 = (function (){
var statearr_40986 = [null,null,null,null,null,null,null];
(statearr_40986[(0)] = cljs$core$async$transduce_$_state_machine__40203__auto__);

(statearr_40986[(1)] = (1));

return statearr_40986;
});
var cljs$core$async$transduce_$_state_machine__40203__auto____1 = (function (state_40982){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_40982);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e40988){var ex__40206__auto__ = e40988;
var statearr_40989_43117 = state_40982;
(statearr_40989_43117[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_40982[(4)]))){
var statearr_40990_43118 = state_40982;
(statearr_40990_43118[(1)] = cljs.core.first((state_40982[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43119 = state_40982;
state_40982 = G__43119;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40203__auto__ = function(state_40982){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40203__auto____1.call(this,state_40982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40203__auto____0;
cljs$core$async$transduce_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40203__auto____1;
return cljs$core$async$transduce_$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_40995 = f__40371__auto__();
(statearr_40995[(6)] = c__40370__auto__);

return statearr_40995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));

return c__40370__auto__;
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
var G__41000 = arguments.length;
switch (G__41000) {
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
var c__40370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_41025){
var state_val_41026 = (state_41025[(1)]);
if((state_val_41026 === (7))){
var inst_41007 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41027_43128 = state_41025__$1;
(statearr_41027_43128[(2)] = inst_41007);

(statearr_41027_43128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (1))){
var inst_41001 = cljs.core.seq(coll);
var inst_41002 = inst_41001;
var state_41025__$1 = (function (){var statearr_41028 = state_41025;
(statearr_41028[(7)] = inst_41002);

return statearr_41028;
})();
var statearr_41029_43129 = state_41025__$1;
(statearr_41029_43129[(2)] = null);

(statearr_41029_43129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (4))){
var inst_41002 = (state_41025[(7)]);
var inst_41005 = cljs.core.first(inst_41002);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41025__$1,(7),ch,inst_41005);
} else {
if((state_val_41026 === (13))){
var inst_41019 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41033_43130 = state_41025__$1;
(statearr_41033_43130[(2)] = inst_41019);

(statearr_41033_43130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (6))){
var inst_41010 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
if(cljs.core.truth_(inst_41010)){
var statearr_41038_43135 = state_41025__$1;
(statearr_41038_43135[(1)] = (8));

} else {
var statearr_41039_43136 = state_41025__$1;
(statearr_41039_43136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (3))){
var inst_41023 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41025__$1,inst_41023);
} else {
if((state_val_41026 === (12))){
var state_41025__$1 = state_41025;
var statearr_41040_43138 = state_41025__$1;
(statearr_41040_43138[(2)] = null);

(statearr_41040_43138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (2))){
var inst_41002 = (state_41025[(7)]);
var state_41025__$1 = state_41025;
if(cljs.core.truth_(inst_41002)){
var statearr_41041_43140 = state_41025__$1;
(statearr_41041_43140[(1)] = (4));

} else {
var statearr_41042_43142 = state_41025__$1;
(statearr_41042_43142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (11))){
var inst_41016 = cljs.core.async.close_BANG_(ch);
var state_41025__$1 = state_41025;
var statearr_41043_43143 = state_41025__$1;
(statearr_41043_43143[(2)] = inst_41016);

(statearr_41043_43143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (9))){
var state_41025__$1 = state_41025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41048_43144 = state_41025__$1;
(statearr_41048_43144[(1)] = (11));

} else {
var statearr_41049_43145 = state_41025__$1;
(statearr_41049_43145[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (5))){
var inst_41002 = (state_41025[(7)]);
var state_41025__$1 = state_41025;
var statearr_41050_43146 = state_41025__$1;
(statearr_41050_43146[(2)] = inst_41002);

(statearr_41050_43146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (10))){
var inst_41021 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41051_43149 = state_41025__$1;
(statearr_41051_43149[(2)] = inst_41021);

(statearr_41051_43149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (8))){
var inst_41002 = (state_41025[(7)]);
var inst_41012 = cljs.core.next(inst_41002);
var inst_41002__$1 = inst_41012;
var state_41025__$1 = (function (){var statearr_41052 = state_41025;
(statearr_41052[(7)] = inst_41002__$1);

return statearr_41052;
})();
var statearr_41053_43151 = state_41025__$1;
(statearr_41053_43151[(2)] = null);

(statearr_41053_43151[(1)] = (2));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_41055 = [null,null,null,null,null,null,null,null];
(statearr_41055[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_41055[(1)] = (1));

return statearr_41055;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_41025){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_41025);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e41056){var ex__40206__auto__ = e41056;
var statearr_41057_43152 = state_41025;
(statearr_41057_43152[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_41025[(4)]))){
var statearr_41058_43153 = state_41025;
(statearr_41058_43153[(1)] = cljs.core.first((state_41025[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43155 = state_41025;
state_41025 = G__43155;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_41025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_41025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_41059 = f__40371__auto__();
(statearr_41059[(6)] = c__40370__auto__);

return statearr_41059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));

return c__40370__auto__;
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
var G__41063 = arguments.length;
switch (G__41063) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_43158 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_43158(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43162 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_43162(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43166 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_43166(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43167 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_43167(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41081 = (function (ch,cs,meta41082){
this.ch = ch;
this.cs = cs;
this.meta41082 = meta41082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41083,meta41082__$1){
var self__ = this;
var _41083__$1 = this;
return (new cljs.core.async.t_cljs$core$async41081(self__.ch,self__.cs,meta41082__$1));
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41083){
var self__ = this;
var _41083__$1 = this;
return self__.meta41082;
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41082","meta41082",-1072889,null)], null);
}));

(cljs.core.async.t_cljs$core$async41081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41081");

(cljs.core.async.t_cljs$core$async41081.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41081.
 */
cljs.core.async.__GT_t_cljs$core$async41081 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41081(ch__$1,cs__$1,meta41082){
return (new cljs.core.async.t_cljs$core$async41081(ch__$1,cs__$1,meta41082));
});

}

return (new cljs.core.async.t_cljs$core$async41081(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40370__auto___43173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_41246){
var state_val_41247 = (state_41246[(1)]);
if((state_val_41247 === (7))){
var inst_41236 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41249_43176 = state_41246__$1;
(statearr_41249_43176[(2)] = inst_41236);

(statearr_41249_43176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (20))){
var inst_41130 = (state_41246[(7)]);
var inst_41145 = cljs.core.first(inst_41130);
var inst_41146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41145,(0),null);
var inst_41147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41145,(1),null);
var state_41246__$1 = (function (){var statearr_41251 = state_41246;
(statearr_41251[(8)] = inst_41146);

return statearr_41251;
})();
if(cljs.core.truth_(inst_41147)){
var statearr_41252_43181 = state_41246__$1;
(statearr_41252_43181[(1)] = (22));

} else {
var statearr_41253_43182 = state_41246__$1;
(statearr_41253_43182[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (27))){
var inst_41176 = (state_41246[(9)]);
var inst_41183 = (state_41246[(10)]);
var inst_41178 = (state_41246[(11)]);
var inst_41097 = (state_41246[(12)]);
var inst_41183__$1 = cljs.core._nth(inst_41176,inst_41178);
var inst_41184 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41183__$1,inst_41097,done);
var state_41246__$1 = (function (){var statearr_41258 = state_41246;
(statearr_41258[(10)] = inst_41183__$1);

return statearr_41258;
})();
if(cljs.core.truth_(inst_41184)){
var statearr_41259_43184 = state_41246__$1;
(statearr_41259_43184[(1)] = (30));

} else {
var statearr_41260_43185 = state_41246__$1;
(statearr_41260_43185[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (1))){
var state_41246__$1 = state_41246;
var statearr_41263_43186 = state_41246__$1;
(statearr_41263_43186[(2)] = null);

(statearr_41263_43186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (24))){
var inst_41130 = (state_41246[(7)]);
var inst_41153 = (state_41246[(2)]);
var inst_41154 = cljs.core.next(inst_41130);
var inst_41108 = inst_41154;
var inst_41109 = null;
var inst_41110 = (0);
var inst_41111 = (0);
var state_41246__$1 = (function (){var statearr_41265 = state_41246;
(statearr_41265[(13)] = inst_41111);

(statearr_41265[(14)] = inst_41153);

(statearr_41265[(15)] = inst_41109);

(statearr_41265[(16)] = inst_41110);

(statearr_41265[(17)] = inst_41108);

return statearr_41265;
})();
var statearr_41269_43188 = state_41246__$1;
(statearr_41269_43188[(2)] = null);

(statearr_41269_43188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (39))){
var state_41246__$1 = state_41246;
var statearr_41281_43190 = state_41246__$1;
(statearr_41281_43190[(2)] = null);

(statearr_41281_43190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (4))){
var inst_41097 = (state_41246[(12)]);
var inst_41097__$1 = (state_41246[(2)]);
var inst_41098 = (inst_41097__$1 == null);
var state_41246__$1 = (function (){var statearr_41282 = state_41246;
(statearr_41282[(12)] = inst_41097__$1);

return statearr_41282;
})();
if(cljs.core.truth_(inst_41098)){
var statearr_41283_43193 = state_41246__$1;
(statearr_41283_43193[(1)] = (5));

} else {
var statearr_41284_43194 = state_41246__$1;
(statearr_41284_43194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (15))){
var inst_41111 = (state_41246[(13)]);
var inst_41109 = (state_41246[(15)]);
var inst_41110 = (state_41246[(16)]);
var inst_41108 = (state_41246[(17)]);
var inst_41126 = (state_41246[(2)]);
var inst_41127 = (inst_41111 + (1));
var tmp41271 = inst_41109;
var tmp41272 = inst_41110;
var tmp41273 = inst_41108;
var inst_41108__$1 = tmp41273;
var inst_41109__$1 = tmp41271;
var inst_41110__$1 = tmp41272;
var inst_41111__$1 = inst_41127;
var state_41246__$1 = (function (){var statearr_41289 = state_41246;
(statearr_41289[(13)] = inst_41111__$1);

(statearr_41289[(15)] = inst_41109__$1);

(statearr_41289[(16)] = inst_41110__$1);

(statearr_41289[(18)] = inst_41126);

(statearr_41289[(17)] = inst_41108__$1);

return statearr_41289;
})();
var statearr_41292_43197 = state_41246__$1;
(statearr_41292_43197[(2)] = null);

(statearr_41292_43197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (21))){
var inst_41157 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41296_43198 = state_41246__$1;
(statearr_41296_43198[(2)] = inst_41157);

(statearr_41296_43198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (31))){
var inst_41183 = (state_41246[(10)]);
var inst_41191 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41183);
var state_41246__$1 = state_41246;
var statearr_41297_43200 = state_41246__$1;
(statearr_41297_43200[(2)] = inst_41191);

(statearr_41297_43200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (32))){
var inst_41175 = (state_41246[(19)]);
var inst_41176 = (state_41246[(9)]);
var inst_41178 = (state_41246[(11)]);
var inst_41177 = (state_41246[(20)]);
var inst_41193 = (state_41246[(2)]);
var inst_41194 = (inst_41178 + (1));
var tmp41293 = inst_41175;
var tmp41294 = inst_41176;
var tmp41295 = inst_41177;
var inst_41175__$1 = tmp41293;
var inst_41176__$1 = tmp41294;
var inst_41177__$1 = tmp41295;
var inst_41178__$1 = inst_41194;
var state_41246__$1 = (function (){var statearr_41300 = state_41246;
(statearr_41300[(19)] = inst_41175__$1);

(statearr_41300[(9)] = inst_41176__$1);

(statearr_41300[(21)] = inst_41193);

(statearr_41300[(11)] = inst_41178__$1);

(statearr_41300[(20)] = inst_41177__$1);

return statearr_41300;
})();
var statearr_41301_43206 = state_41246__$1;
(statearr_41301_43206[(2)] = null);

(statearr_41301_43206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (40))){
var inst_41209 = (state_41246[(22)]);
var inst_41213 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41209);
var state_41246__$1 = state_41246;
var statearr_41304_43207 = state_41246__$1;
(statearr_41304_43207[(2)] = inst_41213);

(statearr_41304_43207[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (33))){
var inst_41200 = (state_41246[(23)]);
var inst_41202 = cljs.core.chunked_seq_QMARK_(inst_41200);
var state_41246__$1 = state_41246;
if(inst_41202){
var statearr_41307_43212 = state_41246__$1;
(statearr_41307_43212[(1)] = (36));

} else {
var statearr_41308_43213 = state_41246__$1;
(statearr_41308_43213[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (13))){
var inst_41120 = (state_41246[(24)]);
var inst_41123 = cljs.core.async.close_BANG_(inst_41120);
var state_41246__$1 = state_41246;
var statearr_41315_43214 = state_41246__$1;
(statearr_41315_43214[(2)] = inst_41123);

(statearr_41315_43214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (22))){
var inst_41146 = (state_41246[(8)]);
var inst_41150 = cljs.core.async.close_BANG_(inst_41146);
var state_41246__$1 = state_41246;
var statearr_41316_43215 = state_41246__$1;
(statearr_41316_43215[(2)] = inst_41150);

(statearr_41316_43215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (36))){
var inst_41200 = (state_41246[(23)]);
var inst_41204 = cljs.core.chunk_first(inst_41200);
var inst_41205 = cljs.core.chunk_rest(inst_41200);
var inst_41206 = cljs.core.count(inst_41204);
var inst_41175 = inst_41205;
var inst_41176 = inst_41204;
var inst_41177 = inst_41206;
var inst_41178 = (0);
var state_41246__$1 = (function (){var statearr_41317 = state_41246;
(statearr_41317[(19)] = inst_41175);

(statearr_41317[(9)] = inst_41176);

(statearr_41317[(11)] = inst_41178);

(statearr_41317[(20)] = inst_41177);

return statearr_41317;
})();
var statearr_41319_43220 = state_41246__$1;
(statearr_41319_43220[(2)] = null);

(statearr_41319_43220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (41))){
var inst_41200 = (state_41246[(23)]);
var inst_41215 = (state_41246[(2)]);
var inst_41216 = cljs.core.next(inst_41200);
var inst_41175 = inst_41216;
var inst_41176 = null;
var inst_41177 = (0);
var inst_41178 = (0);
var state_41246__$1 = (function (){var statearr_41324 = state_41246;
(statearr_41324[(19)] = inst_41175);

(statearr_41324[(25)] = inst_41215);

(statearr_41324[(9)] = inst_41176);

(statearr_41324[(11)] = inst_41178);

(statearr_41324[(20)] = inst_41177);

return statearr_41324;
})();
var statearr_41325_43221 = state_41246__$1;
(statearr_41325_43221[(2)] = null);

(statearr_41325_43221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (43))){
var state_41246__$1 = state_41246;
var statearr_41326_43222 = state_41246__$1;
(statearr_41326_43222[(2)] = null);

(statearr_41326_43222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (29))){
var inst_41224 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41327_43226 = state_41246__$1;
(statearr_41327_43226[(2)] = inst_41224);

(statearr_41327_43226[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (44))){
var inst_41233 = (state_41246[(2)]);
var state_41246__$1 = (function (){var statearr_41328 = state_41246;
(statearr_41328[(26)] = inst_41233);

return statearr_41328;
})();
var statearr_41329_43231 = state_41246__$1;
(statearr_41329_43231[(2)] = null);

(statearr_41329_43231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (6))){
var inst_41167 = (state_41246[(27)]);
var inst_41166 = cljs.core.deref(cs);
var inst_41167__$1 = cljs.core.keys(inst_41166);
var inst_41168 = cljs.core.count(inst_41167__$1);
var inst_41169 = cljs.core.reset_BANG_(dctr,inst_41168);
var inst_41174 = cljs.core.seq(inst_41167__$1);
var inst_41175 = inst_41174;
var inst_41176 = null;
var inst_41177 = (0);
var inst_41178 = (0);
var state_41246__$1 = (function (){var statearr_41330 = state_41246;
(statearr_41330[(19)] = inst_41175);

(statearr_41330[(9)] = inst_41176);

(statearr_41330[(28)] = inst_41169);

(statearr_41330[(11)] = inst_41178);

(statearr_41330[(20)] = inst_41177);

(statearr_41330[(27)] = inst_41167__$1);

return statearr_41330;
})();
var statearr_41331_43238 = state_41246__$1;
(statearr_41331_43238[(2)] = null);

(statearr_41331_43238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (28))){
var inst_41175 = (state_41246[(19)]);
var inst_41200 = (state_41246[(23)]);
var inst_41200__$1 = cljs.core.seq(inst_41175);
var state_41246__$1 = (function (){var statearr_41332 = state_41246;
(statearr_41332[(23)] = inst_41200__$1);

return statearr_41332;
})();
if(inst_41200__$1){
var statearr_41333_43239 = state_41246__$1;
(statearr_41333_43239[(1)] = (33));

} else {
var statearr_41334_43240 = state_41246__$1;
(statearr_41334_43240[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (25))){
var inst_41178 = (state_41246[(11)]);
var inst_41177 = (state_41246[(20)]);
var inst_41180 = (inst_41178 < inst_41177);
var inst_41181 = inst_41180;
var state_41246__$1 = state_41246;
if(cljs.core.truth_(inst_41181)){
var statearr_41335_43243 = state_41246__$1;
(statearr_41335_43243[(1)] = (27));

} else {
var statearr_41336_43244 = state_41246__$1;
(statearr_41336_43244[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (34))){
var state_41246__$1 = state_41246;
var statearr_41337_43246 = state_41246__$1;
(statearr_41337_43246[(2)] = null);

(statearr_41337_43246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (17))){
var state_41246__$1 = state_41246;
var statearr_41338_43247 = state_41246__$1;
(statearr_41338_43247[(2)] = null);

(statearr_41338_43247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (3))){
var inst_41238 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41246__$1,inst_41238);
} else {
if((state_val_41247 === (12))){
var inst_41162 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41339_43248 = state_41246__$1;
(statearr_41339_43248[(2)] = inst_41162);

(statearr_41339_43248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (2))){
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41246__$1,(4),ch);
} else {
if((state_val_41247 === (23))){
var state_41246__$1 = state_41246;
var statearr_41340_43249 = state_41246__$1;
(statearr_41340_43249[(2)] = null);

(statearr_41340_43249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (35))){
var inst_41222 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41341_43250 = state_41246__$1;
(statearr_41341_43250[(2)] = inst_41222);

(statearr_41341_43250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (19))){
var inst_41130 = (state_41246[(7)]);
var inst_41134 = cljs.core.chunk_first(inst_41130);
var inst_41135 = cljs.core.chunk_rest(inst_41130);
var inst_41136 = cljs.core.count(inst_41134);
var inst_41108 = inst_41135;
var inst_41109 = inst_41134;
var inst_41110 = inst_41136;
var inst_41111 = (0);
var state_41246__$1 = (function (){var statearr_41342 = state_41246;
(statearr_41342[(13)] = inst_41111);

(statearr_41342[(15)] = inst_41109);

(statearr_41342[(16)] = inst_41110);

(statearr_41342[(17)] = inst_41108);

return statearr_41342;
})();
var statearr_41343_43251 = state_41246__$1;
(statearr_41343_43251[(2)] = null);

(statearr_41343_43251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (11))){
var inst_41130 = (state_41246[(7)]);
var inst_41108 = (state_41246[(17)]);
var inst_41130__$1 = cljs.core.seq(inst_41108);
var state_41246__$1 = (function (){var statearr_41344 = state_41246;
(statearr_41344[(7)] = inst_41130__$1);

return statearr_41344;
})();
if(inst_41130__$1){
var statearr_41345_43252 = state_41246__$1;
(statearr_41345_43252[(1)] = (16));

} else {
var statearr_41346_43253 = state_41246__$1;
(statearr_41346_43253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (9))){
var inst_41164 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41347_43260 = state_41246__$1;
(statearr_41347_43260[(2)] = inst_41164);

(statearr_41347_43260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (5))){
var inst_41105 = cljs.core.deref(cs);
var inst_41107 = cljs.core.seq(inst_41105);
var inst_41108 = inst_41107;
var inst_41109 = null;
var inst_41110 = (0);
var inst_41111 = (0);
var state_41246__$1 = (function (){var statearr_41348 = state_41246;
(statearr_41348[(13)] = inst_41111);

(statearr_41348[(15)] = inst_41109);

(statearr_41348[(16)] = inst_41110);

(statearr_41348[(17)] = inst_41108);

return statearr_41348;
})();
var statearr_41349_43261 = state_41246__$1;
(statearr_41349_43261[(2)] = null);

(statearr_41349_43261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (14))){
var state_41246__$1 = state_41246;
var statearr_41350_43262 = state_41246__$1;
(statearr_41350_43262[(2)] = null);

(statearr_41350_43262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (45))){
var inst_41230 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41351_43263 = state_41246__$1;
(statearr_41351_43263[(2)] = inst_41230);

(statearr_41351_43263[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (26))){
var inst_41167 = (state_41246[(27)]);
var inst_41226 = (state_41246[(2)]);
var inst_41227 = cljs.core.seq(inst_41167);
var state_41246__$1 = (function (){var statearr_41352 = state_41246;
(statearr_41352[(29)] = inst_41226);

return statearr_41352;
})();
if(inst_41227){
var statearr_41353_43264 = state_41246__$1;
(statearr_41353_43264[(1)] = (42));

} else {
var statearr_41354_43265 = state_41246__$1;
(statearr_41354_43265[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (16))){
var inst_41130 = (state_41246[(7)]);
var inst_41132 = cljs.core.chunked_seq_QMARK_(inst_41130);
var state_41246__$1 = state_41246;
if(inst_41132){
var statearr_41355_43266 = state_41246__$1;
(statearr_41355_43266[(1)] = (19));

} else {
var statearr_41356_43267 = state_41246__$1;
(statearr_41356_43267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (38))){
var inst_41219 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41357_43268 = state_41246__$1;
(statearr_41357_43268[(2)] = inst_41219);

(statearr_41357_43268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (30))){
var state_41246__$1 = state_41246;
var statearr_41358_43269 = state_41246__$1;
(statearr_41358_43269[(2)] = null);

(statearr_41358_43269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (10))){
var inst_41111 = (state_41246[(13)]);
var inst_41109 = (state_41246[(15)]);
var inst_41119 = cljs.core._nth(inst_41109,inst_41111);
var inst_41120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41119,(0),null);
var inst_41121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41119,(1),null);
var state_41246__$1 = (function (){var statearr_41359 = state_41246;
(statearr_41359[(24)] = inst_41120);

return statearr_41359;
})();
if(cljs.core.truth_(inst_41121)){
var statearr_41360_43270 = state_41246__$1;
(statearr_41360_43270[(1)] = (13));

} else {
var statearr_41361_43271 = state_41246__$1;
(statearr_41361_43271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (18))){
var inst_41160 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41362_43272 = state_41246__$1;
(statearr_41362_43272[(2)] = inst_41160);

(statearr_41362_43272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (42))){
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41246__$1,(45),dchan);
} else {
if((state_val_41247 === (37))){
var inst_41209 = (state_41246[(22)]);
var inst_41200 = (state_41246[(23)]);
var inst_41097 = (state_41246[(12)]);
var inst_41209__$1 = cljs.core.first(inst_41200);
var inst_41210 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41209__$1,inst_41097,done);
var state_41246__$1 = (function (){var statearr_41363 = state_41246;
(statearr_41363[(22)] = inst_41209__$1);

return statearr_41363;
})();
if(cljs.core.truth_(inst_41210)){
var statearr_41364_43273 = state_41246__$1;
(statearr_41364_43273[(1)] = (39));

} else {
var statearr_41365_43276 = state_41246__$1;
(statearr_41365_43276[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (8))){
var inst_41111 = (state_41246[(13)]);
var inst_41110 = (state_41246[(16)]);
var inst_41113 = (inst_41111 < inst_41110);
var inst_41114 = inst_41113;
var state_41246__$1 = state_41246;
if(cljs.core.truth_(inst_41114)){
var statearr_41366_43277 = state_41246__$1;
(statearr_41366_43277[(1)] = (10));

} else {
var statearr_41367_43284 = state_41246__$1;
(statearr_41367_43284[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__40203__auto__ = null;
var cljs$core$async$mult_$_state_machine__40203__auto____0 = (function (){
var statearr_41368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41368[(0)] = cljs$core$async$mult_$_state_machine__40203__auto__);

(statearr_41368[(1)] = (1));

return statearr_41368;
});
var cljs$core$async$mult_$_state_machine__40203__auto____1 = (function (state_41246){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_41246);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e41369){var ex__40206__auto__ = e41369;
var statearr_41370_43290 = state_41246;
(statearr_41370_43290[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_41246[(4)]))){
var statearr_41371_43291 = state_41246;
(statearr_41371_43291[(1)] = cljs.core.first((state_41246[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43293 = state_41246;
state_41246 = G__43293;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40203__auto__ = function(state_41246){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40203__auto____1.call(this,state_41246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40203__auto____0;
cljs$core$async$mult_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40203__auto____1;
return cljs$core$async$mult_$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_41372 = f__40371__auto__();
(statearr_41372[(6)] = c__40370__auto___43173);

return statearr_41372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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
var G__41374 = arguments.length;
switch (G__41374) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_43295 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_43295(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43296 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_43296(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43297 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43297(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43304 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_43304(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43307 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43307(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43308 = arguments.length;
var i__4819__auto___43309 = (0);
while(true){
if((i__4819__auto___43309 < len__4818__auto___43308)){
args__4824__auto__.push((arguments[i__4819__auto___43309]));

var G__43311 = (i__4819__auto___43309 + (1));
i__4819__auto___43309 = G__43311;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41385){
var map__41386 = p__41385;
var map__41386__$1 = cljs.core.__destructure_map(map__41386);
var opts = map__41386__$1;
var statearr_41388_43313 = state;
(statearr_41388_43313[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41389_43314 = state;
(statearr_41389_43314[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_41390_43315 = state;
(statearr_41390_43315[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41380){
var G__41381 = cljs.core.first(seq41380);
var seq41380__$1 = cljs.core.next(seq41380);
var G__41382 = cljs.core.first(seq41380__$1);
var seq41380__$2 = cljs.core.next(seq41380__$1);
var G__41383 = cljs.core.first(seq41380__$2);
var seq41380__$3 = cljs.core.next(seq41380__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41381,G__41382,G__41383,seq41380__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41398 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41399){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41399 = meta41399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41400,meta41399__$1){
var self__ = this;
var _41400__$1 = this;
return (new cljs.core.async.t_cljs$core$async41398(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41399__$1));
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41400){
var self__ = this;
var _41400__$1 = this;
return self__.meta41399;
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41398.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41399","meta41399",-1926829857,null)], null);
}));

(cljs.core.async.t_cljs$core$async41398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41398");

(cljs.core.async.t_cljs$core$async41398.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41398.
 */
cljs.core.async.__GT_t_cljs$core$async41398 = (function cljs$core$async$mix_$___GT_t_cljs$core$async41398(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41399){
return (new cljs.core.async.t_cljs$core$async41398(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41399));
});

}

return (new cljs.core.async.t_cljs$core$async41398(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40370__auto___43326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_41501){
var state_val_41502 = (state_41501[(1)]);
if((state_val_41502 === (7))){
var inst_41461 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
if(cljs.core.truth_(inst_41461)){
var statearr_41506_43327 = state_41501__$1;
(statearr_41506_43327[(1)] = (8));

} else {
var statearr_41507_43328 = state_41501__$1;
(statearr_41507_43328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (20))){
var inst_41454 = (state_41501[(7)]);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41501__$1,(23),out,inst_41454);
} else {
if((state_val_41502 === (1))){
var inst_41436 = calc_state();
var inst_41437 = cljs.core.__destructure_map(inst_41436);
var inst_41438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41437,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41437,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41437,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41442 = inst_41436;
var state_41501__$1 = (function (){var statearr_41508 = state_41501;
(statearr_41508[(8)] = inst_41442);

(statearr_41508[(9)] = inst_41438);

(statearr_41508[(10)] = inst_41441);

(statearr_41508[(11)] = inst_41439);

return statearr_41508;
})();
var statearr_41512_43336 = state_41501__$1;
(statearr_41512_43336[(2)] = null);

(statearr_41512_43336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (24))){
var inst_41445 = (state_41501[(12)]);
var inst_41442 = inst_41445;
var state_41501__$1 = (function (){var statearr_41516 = state_41501;
(statearr_41516[(8)] = inst_41442);

return statearr_41516;
})();
var statearr_41517_43339 = state_41501__$1;
(statearr_41517_43339[(2)] = null);

(statearr_41517_43339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (4))){
var inst_41456 = (state_41501[(13)]);
var inst_41454 = (state_41501[(7)]);
var inst_41453 = (state_41501[(2)]);
var inst_41454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41453,(0),null);
var inst_41455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41453,(1),null);
var inst_41456__$1 = (inst_41454__$1 == null);
var state_41501__$1 = (function (){var statearr_41518 = state_41501;
(statearr_41518[(13)] = inst_41456__$1);

(statearr_41518[(7)] = inst_41454__$1);

(statearr_41518[(14)] = inst_41455);

return statearr_41518;
})();
if(cljs.core.truth_(inst_41456__$1)){
var statearr_41519_43340 = state_41501__$1;
(statearr_41519_43340[(1)] = (5));

} else {
var statearr_41521_43341 = state_41501__$1;
(statearr_41521_43341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (15))){
var inst_41446 = (state_41501[(15)]);
var inst_41475 = (state_41501[(16)]);
var inst_41475__$1 = cljs.core.empty_QMARK_(inst_41446);
var state_41501__$1 = (function (){var statearr_41522 = state_41501;
(statearr_41522[(16)] = inst_41475__$1);

return statearr_41522;
})();
if(inst_41475__$1){
var statearr_41523_43342 = state_41501__$1;
(statearr_41523_43342[(1)] = (17));

} else {
var statearr_41524_43343 = state_41501__$1;
(statearr_41524_43343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (21))){
var inst_41445 = (state_41501[(12)]);
var inst_41442 = inst_41445;
var state_41501__$1 = (function (){var statearr_41526 = state_41501;
(statearr_41526[(8)] = inst_41442);

return statearr_41526;
})();
var statearr_41527_43345 = state_41501__$1;
(statearr_41527_43345[(2)] = null);

(statearr_41527_43345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (13))){
var inst_41468 = (state_41501[(2)]);
var inst_41469 = calc_state();
var inst_41442 = inst_41469;
var state_41501__$1 = (function (){var statearr_41528 = state_41501;
(statearr_41528[(8)] = inst_41442);

(statearr_41528[(17)] = inst_41468);

return statearr_41528;
})();
var statearr_41529_43349 = state_41501__$1;
(statearr_41529_43349[(2)] = null);

(statearr_41529_43349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (22))){
var inst_41495 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41530_43350 = state_41501__$1;
(statearr_41530_43350[(2)] = inst_41495);

(statearr_41530_43350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (6))){
var inst_41455 = (state_41501[(14)]);
var inst_41459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41455,change);
var state_41501__$1 = state_41501;
var statearr_41537_43351 = state_41501__$1;
(statearr_41537_43351[(2)] = inst_41459);

(statearr_41537_43351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (25))){
var state_41501__$1 = state_41501;
var statearr_41538_43353 = state_41501__$1;
(statearr_41538_43353[(2)] = null);

(statearr_41538_43353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (17))){
var inst_41447 = (state_41501[(18)]);
var inst_41455 = (state_41501[(14)]);
var inst_41477 = (inst_41447.cljs$core$IFn$_invoke$arity$1 ? inst_41447.cljs$core$IFn$_invoke$arity$1(inst_41455) : inst_41447.call(null,inst_41455));
var inst_41478 = cljs.core.not(inst_41477);
var state_41501__$1 = state_41501;
var statearr_41540_43354 = state_41501__$1;
(statearr_41540_43354[(2)] = inst_41478);

(statearr_41540_43354[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (3))){
var inst_41499 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41501__$1,inst_41499);
} else {
if((state_val_41502 === (12))){
var state_41501__$1 = state_41501;
var statearr_41542_43355 = state_41501__$1;
(statearr_41542_43355[(2)] = null);

(statearr_41542_43355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (2))){
var inst_41442 = (state_41501[(8)]);
var inst_41445 = (state_41501[(12)]);
var inst_41445__$1 = cljs.core.__destructure_map(inst_41442);
var inst_41446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41445__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41445__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41445__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41501__$1 = (function (){var statearr_41544 = state_41501;
(statearr_41544[(18)] = inst_41447);

(statearr_41544[(12)] = inst_41445__$1);

(statearr_41544[(15)] = inst_41446);

return statearr_41544;
})();
return cljs.core.async.ioc_alts_BANG_(state_41501__$1,(4),inst_41448);
} else {
if((state_val_41502 === (23))){
var inst_41486 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
if(cljs.core.truth_(inst_41486)){
var statearr_41551_43358 = state_41501__$1;
(statearr_41551_43358[(1)] = (24));

} else {
var statearr_41552_43359 = state_41501__$1;
(statearr_41552_43359[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (19))){
var inst_41481 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41553_43362 = state_41501__$1;
(statearr_41553_43362[(2)] = inst_41481);

(statearr_41553_43362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (11))){
var inst_41455 = (state_41501[(14)]);
var inst_41465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41455);
var state_41501__$1 = state_41501;
var statearr_41555_43363 = state_41501__$1;
(statearr_41555_43363[(2)] = inst_41465);

(statearr_41555_43363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (9))){
var inst_41446 = (state_41501[(15)]);
var inst_41472 = (state_41501[(19)]);
var inst_41455 = (state_41501[(14)]);
var inst_41472__$1 = (inst_41446.cljs$core$IFn$_invoke$arity$1 ? inst_41446.cljs$core$IFn$_invoke$arity$1(inst_41455) : inst_41446.call(null,inst_41455));
var state_41501__$1 = (function (){var statearr_41556 = state_41501;
(statearr_41556[(19)] = inst_41472__$1);

return statearr_41556;
})();
if(cljs.core.truth_(inst_41472__$1)){
var statearr_41557_43366 = state_41501__$1;
(statearr_41557_43366[(1)] = (14));

} else {
var statearr_41558_43369 = state_41501__$1;
(statearr_41558_43369[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (5))){
var inst_41456 = (state_41501[(13)]);
var state_41501__$1 = state_41501;
var statearr_41559_43370 = state_41501__$1;
(statearr_41559_43370[(2)] = inst_41456);

(statearr_41559_43370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (14))){
var inst_41472 = (state_41501[(19)]);
var state_41501__$1 = state_41501;
var statearr_41560_43371 = state_41501__$1;
(statearr_41560_43371[(2)] = inst_41472);

(statearr_41560_43371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (26))){
var inst_41491 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41561_43372 = state_41501__$1;
(statearr_41561_43372[(2)] = inst_41491);

(statearr_41561_43372[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (16))){
var inst_41483 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
if(cljs.core.truth_(inst_41483)){
var statearr_41562_43373 = state_41501__$1;
(statearr_41562_43373[(1)] = (20));

} else {
var statearr_41563_43374 = state_41501__$1;
(statearr_41563_43374[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (10))){
var inst_41497 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41564_43375 = state_41501__$1;
(statearr_41564_43375[(2)] = inst_41497);

(statearr_41564_43375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (18))){
var inst_41475 = (state_41501[(16)]);
var state_41501__$1 = state_41501;
var statearr_41565_43376 = state_41501__$1;
(statearr_41565_43376[(2)] = inst_41475);

(statearr_41565_43376[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (8))){
var inst_41454 = (state_41501[(7)]);
var inst_41463 = (inst_41454 == null);
var state_41501__$1 = state_41501;
if(cljs.core.truth_(inst_41463)){
var statearr_41566_43377 = state_41501__$1;
(statearr_41566_43377[(1)] = (11));

} else {
var statearr_41567_43381 = state_41501__$1;
(statearr_41567_43381[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__40203__auto__ = null;
var cljs$core$async$mix_$_state_machine__40203__auto____0 = (function (){
var statearr_41574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41574[(0)] = cljs$core$async$mix_$_state_machine__40203__auto__);

(statearr_41574[(1)] = (1));

return statearr_41574;
});
var cljs$core$async$mix_$_state_machine__40203__auto____1 = (function (state_41501){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_41501);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e41575){var ex__40206__auto__ = e41575;
var statearr_41576_43385 = state_41501;
(statearr_41576_43385[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_41501[(4)]))){
var statearr_41577_43386 = state_41501;
(statearr_41577_43386[(1)] = cljs.core.first((state_41501[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43387 = state_41501;
state_41501 = G__43387;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40203__auto__ = function(state_41501){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40203__auto____1.call(this,state_41501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40203__auto____0;
cljs$core$async$mix_$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40203__auto____1;
return cljs$core$async$mix_$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_41578 = f__40371__auto__();
(statearr_41578[(6)] = c__40370__auto___43326);

return statearr_41578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_43388 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_43388(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43391 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_43391(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43392 = (function() {
var G__43393 = null;
var G__43393__1 = (function (p){
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
var G__43393__2 = (function (p,v){
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
G__43393 = function(p,v){
switch(arguments.length){
case 1:
return G__43393__1.call(this,p);
case 2:
return G__43393__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43393.cljs$core$IFn$_invoke$arity$1 = G__43393__1;
G__43393.cljs$core$IFn$_invoke$arity$2 = G__43393__2;
return G__43393;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41598 = arguments.length;
switch (G__41598) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43392(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43392(p,v);
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
var G__41608 = arguments.length;
switch (G__41608) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41605_SHARP_){
if(cljs.core.truth_((p1__41605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41605_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41605_SHARP_.call(null,topic)))){
return p1__41605_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41613 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41614){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41614 = meta41614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41615,meta41614__$1){
var self__ = this;
var _41615__$1 = this;
return (new cljs.core.async.t_cljs$core$async41613(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41614__$1));
}));

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41615){
var self__ = this;
var _41615__$1 = this;
return self__.meta41614;
}));

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41614","meta41614",-369187816,null)], null);
}));

(cljs.core.async.t_cljs$core$async41613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41613");

(cljs.core.async.t_cljs$core$async41613.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41613.
 */
cljs.core.async.__GT_t_cljs$core$async41613 = (function cljs$core$async$__GT_t_cljs$core$async41613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41614){
return (new cljs.core.async.t_cljs$core$async41613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41614));
});

}

return (new cljs.core.async.t_cljs$core$async41613(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40370__auto___43403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_41718){
var state_val_41719 = (state_41718[(1)]);
if((state_val_41719 === (7))){
var inst_41712 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
var statearr_41725_43406 = state_41718__$1;
(statearr_41725_43406[(2)] = inst_41712);

(statearr_41725_43406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (20))){
var state_41718__$1 = state_41718;
var statearr_41727_43407 = state_41718__$1;
(statearr_41727_43407[(2)] = null);

(statearr_41727_43407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (1))){
var state_41718__$1 = state_41718;
var statearr_41728_43408 = state_41718__$1;
(statearr_41728_43408[(2)] = null);

(statearr_41728_43408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (24))){
var inst_41695 = (state_41718[(7)]);
var inst_41704 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41695);
var state_41718__$1 = state_41718;
var statearr_41733_43409 = state_41718__$1;
(statearr_41733_43409[(2)] = inst_41704);

(statearr_41733_43409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (4))){
var inst_41637 = (state_41718[(8)]);
var inst_41637__$1 = (state_41718[(2)]);
var inst_41638 = (inst_41637__$1 == null);
var state_41718__$1 = (function (){var statearr_41738 = state_41718;
(statearr_41738[(8)] = inst_41637__$1);

return statearr_41738;
})();
if(cljs.core.truth_(inst_41638)){
var statearr_41739_43410 = state_41718__$1;
(statearr_41739_43410[(1)] = (5));

} else {
var statearr_41740_43411 = state_41718__$1;
(statearr_41740_43411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (15))){
var inst_41689 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
var statearr_41741_43412 = state_41718__$1;
(statearr_41741_43412[(2)] = inst_41689);

(statearr_41741_43412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (21))){
var inst_41709 = (state_41718[(2)]);
var state_41718__$1 = (function (){var statearr_41750 = state_41718;
(statearr_41750[(9)] = inst_41709);

return statearr_41750;
})();
var statearr_41758_43413 = state_41718__$1;
(statearr_41758_43413[(2)] = null);

(statearr_41758_43413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (13))){
var inst_41669 = (state_41718[(10)]);
var inst_41671 = cljs.core.chunked_seq_QMARK_(inst_41669);
var state_41718__$1 = state_41718;
if(inst_41671){
var statearr_41766_43418 = state_41718__$1;
(statearr_41766_43418[(1)] = (16));

} else {
var statearr_41769_43419 = state_41718__$1;
(statearr_41769_43419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (22))){
var inst_41701 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
if(cljs.core.truth_(inst_41701)){
var statearr_41782_43420 = state_41718__$1;
(statearr_41782_43420[(1)] = (23));

} else {
var statearr_41783_43421 = state_41718__$1;
(statearr_41783_43421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (6))){
var inst_41695 = (state_41718[(7)]);
var inst_41697 = (state_41718[(11)]);
var inst_41637 = (state_41718[(8)]);
var inst_41695__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41637) : topic_fn.call(null,inst_41637));
var inst_41696 = cljs.core.deref(mults);
var inst_41697__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41696,inst_41695__$1);
var state_41718__$1 = (function (){var statearr_41789 = state_41718;
(statearr_41789[(7)] = inst_41695__$1);

(statearr_41789[(11)] = inst_41697__$1);

return statearr_41789;
})();
if(cljs.core.truth_(inst_41697__$1)){
var statearr_41790_43422 = state_41718__$1;
(statearr_41790_43422[(1)] = (19));

} else {
var statearr_41796_43423 = state_41718__$1;
(statearr_41796_43423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (25))){
var inst_41706 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
var statearr_41802_43424 = state_41718__$1;
(statearr_41802_43424[(2)] = inst_41706);

(statearr_41802_43424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (17))){
var inst_41669 = (state_41718[(10)]);
var inst_41680 = cljs.core.first(inst_41669);
var inst_41681 = cljs.core.async.muxch_STAR_(inst_41680);
var inst_41682 = cljs.core.async.close_BANG_(inst_41681);
var inst_41683 = cljs.core.next(inst_41669);
var inst_41647 = inst_41683;
var inst_41648 = null;
var inst_41649 = (0);
var inst_41650 = (0);
var state_41718__$1 = (function (){var statearr_41803 = state_41718;
(statearr_41803[(12)] = inst_41682);

(statearr_41803[(13)] = inst_41649);

(statearr_41803[(14)] = inst_41650);

(statearr_41803[(15)] = inst_41648);

(statearr_41803[(16)] = inst_41647);

return statearr_41803;
})();
var statearr_41806_43425 = state_41718__$1;
(statearr_41806_43425[(2)] = null);

(statearr_41806_43425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (3))){
var inst_41715 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41718__$1,inst_41715);
} else {
if((state_val_41719 === (12))){
var inst_41691 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
var statearr_41811_43426 = state_41718__$1;
(statearr_41811_43426[(2)] = inst_41691);

(statearr_41811_43426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (2))){
var state_41718__$1 = state_41718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41718__$1,(4),ch);
} else {
if((state_val_41719 === (23))){
var state_41718__$1 = state_41718;
var statearr_41813_43427 = state_41718__$1;
(statearr_41813_43427[(2)] = null);

(statearr_41813_43427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (19))){
var inst_41697 = (state_41718[(11)]);
var inst_41637 = (state_41718[(8)]);
var inst_41699 = cljs.core.async.muxch_STAR_(inst_41697);
var state_41718__$1 = state_41718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41718__$1,(22),inst_41699,inst_41637);
} else {
if((state_val_41719 === (11))){
var inst_41669 = (state_41718[(10)]);
var inst_41647 = (state_41718[(16)]);
var inst_41669__$1 = cljs.core.seq(inst_41647);
var state_41718__$1 = (function (){var statearr_41814 = state_41718;
(statearr_41814[(10)] = inst_41669__$1);

return statearr_41814;
})();
if(inst_41669__$1){
var statearr_41815_43428 = state_41718__$1;
(statearr_41815_43428[(1)] = (13));

} else {
var statearr_41819_43429 = state_41718__$1;
(statearr_41819_43429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (9))){
var inst_41693 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
var statearr_41823_43430 = state_41718__$1;
(statearr_41823_43430[(2)] = inst_41693);

(statearr_41823_43430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (5))){
var inst_41644 = cljs.core.deref(mults);
var inst_41645 = cljs.core.vals(inst_41644);
var inst_41646 = cljs.core.seq(inst_41645);
var inst_41647 = inst_41646;
var inst_41648 = null;
var inst_41649 = (0);
var inst_41650 = (0);
var state_41718__$1 = (function (){var statearr_41825 = state_41718;
(statearr_41825[(13)] = inst_41649);

(statearr_41825[(14)] = inst_41650);

(statearr_41825[(15)] = inst_41648);

(statearr_41825[(16)] = inst_41647);

return statearr_41825;
})();
var statearr_41829_43439 = state_41718__$1;
(statearr_41829_43439[(2)] = null);

(statearr_41829_43439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (14))){
var state_41718__$1 = state_41718;
var statearr_41833_43440 = state_41718__$1;
(statearr_41833_43440[(2)] = null);

(statearr_41833_43440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (16))){
var inst_41669 = (state_41718[(10)]);
var inst_41674 = cljs.core.chunk_first(inst_41669);
var inst_41675 = cljs.core.chunk_rest(inst_41669);
var inst_41676 = cljs.core.count(inst_41674);
var inst_41647 = inst_41675;
var inst_41648 = inst_41674;
var inst_41649 = inst_41676;
var inst_41650 = (0);
var state_41718__$1 = (function (){var statearr_41835 = state_41718;
(statearr_41835[(13)] = inst_41649);

(statearr_41835[(14)] = inst_41650);

(statearr_41835[(15)] = inst_41648);

(statearr_41835[(16)] = inst_41647);

return statearr_41835;
})();
var statearr_41837_43444 = state_41718__$1;
(statearr_41837_43444[(2)] = null);

(statearr_41837_43444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (10))){
var inst_41649 = (state_41718[(13)]);
var inst_41650 = (state_41718[(14)]);
var inst_41648 = (state_41718[(15)]);
var inst_41647 = (state_41718[(16)]);
var inst_41658 = cljs.core._nth(inst_41648,inst_41650);
var inst_41662 = cljs.core.async.muxch_STAR_(inst_41658);
var inst_41663 = cljs.core.async.close_BANG_(inst_41662);
var inst_41664 = (inst_41650 + (1));
var tmp41830 = inst_41649;
var tmp41831 = inst_41648;
var tmp41832 = inst_41647;
var inst_41647__$1 = tmp41832;
var inst_41648__$1 = tmp41831;
var inst_41649__$1 = tmp41830;
var inst_41650__$1 = inst_41664;
var state_41718__$1 = (function (){var statearr_41838 = state_41718;
(statearr_41838[(17)] = inst_41663);

(statearr_41838[(13)] = inst_41649__$1);

(statearr_41838[(14)] = inst_41650__$1);

(statearr_41838[(15)] = inst_41648__$1);

(statearr_41838[(16)] = inst_41647__$1);

return statearr_41838;
})();
var statearr_41839_43449 = state_41718__$1;
(statearr_41839_43449[(2)] = null);

(statearr_41839_43449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (18))){
var inst_41686 = (state_41718[(2)]);
var state_41718__$1 = state_41718;
var statearr_41840_43455 = state_41718__$1;
(statearr_41840_43455[(2)] = inst_41686);

(statearr_41840_43455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41719 === (8))){
var inst_41649 = (state_41718[(13)]);
var inst_41650 = (state_41718[(14)]);
var inst_41652 = (inst_41650 < inst_41649);
var inst_41653 = inst_41652;
var state_41718__$1 = state_41718;
if(cljs.core.truth_(inst_41653)){
var statearr_41842_43459 = state_41718__$1;
(statearr_41842_43459[(1)] = (10));

} else {
var statearr_41843_43461 = state_41718__$1;
(statearr_41843_43461[(1)] = (11));

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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_41844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41844[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_41844[(1)] = (1));

return statearr_41844;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_41718){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_41718);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e41845){var ex__40206__auto__ = e41845;
var statearr_41846_43466 = state_41718;
(statearr_41846_43466[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_41718[(4)]))){
var statearr_41847_43469 = state_41718;
(statearr_41847_43469[(1)] = cljs.core.first((state_41718[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43473 = state_41718;
state_41718 = G__43473;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_41718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_41718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_41853 = f__40371__auto__();
(statearr_41853[(6)] = c__40370__auto___43403);

return statearr_41853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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
var G__41855 = arguments.length;
switch (G__41855) {
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
var G__41859 = arguments.length;
switch (G__41859) {
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
var G__41862 = arguments.length;
switch (G__41862) {
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
var c__40370__auto___43493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_41909){
var state_val_41910 = (state_41909[(1)]);
if((state_val_41910 === (7))){
var state_41909__$1 = state_41909;
var statearr_41911_43498 = state_41909__$1;
(statearr_41911_43498[(2)] = null);

(statearr_41911_43498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (1))){
var state_41909__$1 = state_41909;
var statearr_41912_43504 = state_41909__$1;
(statearr_41912_43504[(2)] = null);

(statearr_41912_43504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (4))){
var inst_41866 = (state_41909[(7)]);
var inst_41867 = (state_41909[(8)]);
var inst_41869 = (inst_41867 < inst_41866);
var state_41909__$1 = state_41909;
if(cljs.core.truth_(inst_41869)){
var statearr_41914_43507 = state_41909__$1;
(statearr_41914_43507[(1)] = (6));

} else {
var statearr_41916_43508 = state_41909__$1;
(statearr_41916_43508[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (15))){
var inst_41895 = (state_41909[(9)]);
var inst_41900 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41895);
var state_41909__$1 = state_41909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41909__$1,(17),out,inst_41900);
} else {
if((state_val_41910 === (13))){
var inst_41895 = (state_41909[(9)]);
var inst_41895__$1 = (state_41909[(2)]);
var inst_41896 = cljs.core.some(cljs.core.nil_QMARK_,inst_41895__$1);
var state_41909__$1 = (function (){var statearr_41922 = state_41909;
(statearr_41922[(9)] = inst_41895__$1);

return statearr_41922;
})();
if(cljs.core.truth_(inst_41896)){
var statearr_41923_43510 = state_41909__$1;
(statearr_41923_43510[(1)] = (14));

} else {
var statearr_41927_43511 = state_41909__$1;
(statearr_41927_43511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (6))){
var state_41909__$1 = state_41909;
var statearr_41929_43515 = state_41909__$1;
(statearr_41929_43515[(2)] = null);

(statearr_41929_43515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (17))){
var inst_41902 = (state_41909[(2)]);
var state_41909__$1 = (function (){var statearr_41940 = state_41909;
(statearr_41940[(10)] = inst_41902);

return statearr_41940;
})();
var statearr_41941_43516 = state_41909__$1;
(statearr_41941_43516[(2)] = null);

(statearr_41941_43516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (3))){
var inst_41907 = (state_41909[(2)]);
var state_41909__$1 = state_41909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41909__$1,inst_41907);
} else {
if((state_val_41910 === (12))){
var _ = (function (){var statearr_41944 = state_41909;
(statearr_41944[(4)] = cljs.core.rest((state_41909[(4)])));

return statearr_41944;
})();
var state_41909__$1 = state_41909;
var ex41936 = (state_41909__$1[(2)]);
var statearr_41945_43523 = state_41909__$1;
(statearr_41945_43523[(5)] = ex41936);


if((ex41936 instanceof Object)){
var statearr_41947_43524 = state_41909__$1;
(statearr_41947_43524[(1)] = (11));

(statearr_41947_43524[(5)] = null);

} else {
throw ex41936;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (2))){
var inst_41865 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41866 = cnt;
var inst_41867 = (0);
var state_41909__$1 = (function (){var statearr_41949 = state_41909;
(statearr_41949[(11)] = inst_41865);

(statearr_41949[(7)] = inst_41866);

(statearr_41949[(8)] = inst_41867);

return statearr_41949;
})();
var statearr_41951_43526 = state_41909__$1;
(statearr_41951_43526[(2)] = null);

(statearr_41951_43526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (11))){
var inst_41874 = (state_41909[(2)]);
var inst_41875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41909__$1 = (function (){var statearr_41953 = state_41909;
(statearr_41953[(12)] = inst_41874);

return statearr_41953;
})();
var statearr_41954_43527 = state_41909__$1;
(statearr_41954_43527[(2)] = inst_41875);

(statearr_41954_43527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (9))){
var inst_41867 = (state_41909[(8)]);
var _ = (function (){var statearr_41955 = state_41909;
(statearr_41955[(4)] = cljs.core.cons((12),(state_41909[(4)])));

return statearr_41955;
})();
var inst_41881 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41867) : chs__$1.call(null,inst_41867));
var inst_41882 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41867) : done.call(null,inst_41867));
var inst_41883 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41881,inst_41882);
var ___$1 = (function (){var statearr_41956 = state_41909;
(statearr_41956[(4)] = cljs.core.rest((state_41909[(4)])));

return statearr_41956;
})();
var state_41909__$1 = state_41909;
var statearr_41957_43531 = state_41909__$1;
(statearr_41957_43531[(2)] = inst_41883);

(statearr_41957_43531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (5))){
var inst_41893 = (state_41909[(2)]);
var state_41909__$1 = (function (){var statearr_41958 = state_41909;
(statearr_41958[(13)] = inst_41893);

return statearr_41958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41909__$1,(13),dchan);
} else {
if((state_val_41910 === (14))){
var inst_41898 = cljs.core.async.close_BANG_(out);
var state_41909__$1 = state_41909;
var statearr_41968_43537 = state_41909__$1;
(statearr_41968_43537[(2)] = inst_41898);

(statearr_41968_43537[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (16))){
var inst_41905 = (state_41909[(2)]);
var state_41909__$1 = state_41909;
var statearr_41969_43538 = state_41909__$1;
(statearr_41969_43538[(2)] = inst_41905);

(statearr_41969_43538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (10))){
var inst_41867 = (state_41909[(8)]);
var inst_41886 = (state_41909[(2)]);
var inst_41887 = (inst_41867 + (1));
var inst_41867__$1 = inst_41887;
var state_41909__$1 = (function (){var statearr_41970 = state_41909;
(statearr_41970[(8)] = inst_41867__$1);

(statearr_41970[(14)] = inst_41886);

return statearr_41970;
})();
var statearr_41971_43539 = state_41909__$1;
(statearr_41971_43539[(2)] = null);

(statearr_41971_43539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41910 === (8))){
var inst_41891 = (state_41909[(2)]);
var state_41909__$1 = state_41909;
var statearr_41972_43541 = state_41909__$1;
(statearr_41972_43541[(2)] = inst_41891);

(statearr_41972_43541[(1)] = (5));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_41974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41974[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_41974[(1)] = (1));

return statearr_41974;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_41909){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_41909);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e41975){var ex__40206__auto__ = e41975;
var statearr_41976_43543 = state_41909;
(statearr_41976_43543[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_41909[(4)]))){
var statearr_41977_43544 = state_41909;
(statearr_41977_43544[(1)] = cljs.core.first((state_41909[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43545 = state_41909;
state_41909 = G__43545;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_41909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_41909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_41978 = f__40371__auto__();
(statearr_41978[(6)] = c__40370__auto___43493);

return statearr_41978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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
var G__41987 = arguments.length;
switch (G__41987) {
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
var c__40370__auto___43548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42026){
var state_val_42027 = (state_42026[(1)]);
if((state_val_42027 === (7))){
var inst_42000 = (state_42026[(7)]);
var inst_41999 = (state_42026[(8)]);
var inst_41999__$1 = (state_42026[(2)]);
var inst_42000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41999__$1,(0),null);
var inst_42001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41999__$1,(1),null);
var inst_42002 = (inst_42000__$1 == null);
var state_42026__$1 = (function (){var statearr_42029 = state_42026;
(statearr_42029[(7)] = inst_42000__$1);

(statearr_42029[(8)] = inst_41999__$1);

(statearr_42029[(9)] = inst_42001);

return statearr_42029;
})();
if(cljs.core.truth_(inst_42002)){
var statearr_42030_43549 = state_42026__$1;
(statearr_42030_43549[(1)] = (8));

} else {
var statearr_42031_43550 = state_42026__$1;
(statearr_42031_43550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (1))){
var inst_41989 = cljs.core.vec(chs);
var inst_41990 = inst_41989;
var state_42026__$1 = (function (){var statearr_42032 = state_42026;
(statearr_42032[(10)] = inst_41990);

return statearr_42032;
})();
var statearr_42033_43551 = state_42026__$1;
(statearr_42033_43551[(2)] = null);

(statearr_42033_43551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (4))){
var inst_41990 = (state_42026[(10)]);
var state_42026__$1 = state_42026;
return cljs.core.async.ioc_alts_BANG_(state_42026__$1,(7),inst_41990);
} else {
if((state_val_42027 === (6))){
var inst_42022 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42034_43552 = state_42026__$1;
(statearr_42034_43552[(2)] = inst_42022);

(statearr_42034_43552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (3))){
var inst_42024 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42026__$1,inst_42024);
} else {
if((state_val_42027 === (2))){
var inst_41990 = (state_42026[(10)]);
var inst_41992 = cljs.core.count(inst_41990);
var inst_41993 = (inst_41992 > (0));
var state_42026__$1 = state_42026;
if(cljs.core.truth_(inst_41993)){
var statearr_42038_43553 = state_42026__$1;
(statearr_42038_43553[(1)] = (4));

} else {
var statearr_42043_43554 = state_42026__$1;
(statearr_42043_43554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (11))){
var inst_41990 = (state_42026[(10)]);
var inst_42015 = (state_42026[(2)]);
var tmp42036 = inst_41990;
var inst_41990__$1 = tmp42036;
var state_42026__$1 = (function (){var statearr_42046 = state_42026;
(statearr_42046[(10)] = inst_41990__$1);

(statearr_42046[(11)] = inst_42015);

return statearr_42046;
})();
var statearr_42047_43563 = state_42026__$1;
(statearr_42047_43563[(2)] = null);

(statearr_42047_43563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (9))){
var inst_42000 = (state_42026[(7)]);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42026__$1,(11),out,inst_42000);
} else {
if((state_val_42027 === (5))){
var inst_42020 = cljs.core.async.close_BANG_(out);
var state_42026__$1 = state_42026;
var statearr_42051_43568 = state_42026__$1;
(statearr_42051_43568[(2)] = inst_42020);

(statearr_42051_43568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (10))){
var inst_42018 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42052_43573 = state_42026__$1;
(statearr_42052_43573[(2)] = inst_42018);

(statearr_42052_43573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (8))){
var inst_42000 = (state_42026[(7)]);
var inst_41990 = (state_42026[(10)]);
var inst_41999 = (state_42026[(8)]);
var inst_42001 = (state_42026[(9)]);
var inst_42008 = (function (){var cs = inst_41990;
var vec__41995 = inst_41999;
var v = inst_42000;
var c = inst_42001;
return (function (p1__41985_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41985_SHARP_);
});
})();
var inst_42011 = cljs.core.filterv(inst_42008,inst_41990);
var inst_41990__$1 = inst_42011;
var state_42026__$1 = (function (){var statearr_42053 = state_42026;
(statearr_42053[(10)] = inst_41990__$1);

return statearr_42053;
})();
var statearr_42054_43574 = state_42026__$1;
(statearr_42054_43574[(2)] = null);

(statearr_42054_43574[(1)] = (2));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_42061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42061[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_42061[(1)] = (1));

return statearr_42061;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_42026){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42026);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42062){var ex__40206__auto__ = e42062;
var statearr_42063_43579 = state_42026;
(statearr_42063_43579[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42026[(4)]))){
var statearr_42064_43581 = state_42026;
(statearr_42064_43581[(1)] = cljs.core.first((state_42026[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43582 = state_42026;
state_42026 = G__43582;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_42026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_42026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42066 = f__40371__auto__();
(statearr_42066[(6)] = c__40370__auto___43548);

return statearr_42066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
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
var G__42087 = arguments.length;
switch (G__42087) {
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
var c__40370__auto___43584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42122){
var state_val_42124 = (state_42122[(1)]);
if((state_val_42124 === (7))){
var inst_42103 = (state_42122[(7)]);
var inst_42103__$1 = (state_42122[(2)]);
var inst_42104 = (inst_42103__$1 == null);
var inst_42105 = cljs.core.not(inst_42104);
var state_42122__$1 = (function (){var statearr_42127 = state_42122;
(statearr_42127[(7)] = inst_42103__$1);

return statearr_42127;
})();
if(inst_42105){
var statearr_42128_43586 = state_42122__$1;
(statearr_42128_43586[(1)] = (8));

} else {
var statearr_42129_43587 = state_42122__$1;
(statearr_42129_43587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (1))){
var inst_42098 = (0);
var state_42122__$1 = (function (){var statearr_42130 = state_42122;
(statearr_42130[(8)] = inst_42098);

return statearr_42130;
})();
var statearr_42131_43588 = state_42122__$1;
(statearr_42131_43588[(2)] = null);

(statearr_42131_43588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (4))){
var state_42122__$1 = state_42122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42122__$1,(7),ch);
} else {
if((state_val_42124 === (6))){
var inst_42116 = (state_42122[(2)]);
var state_42122__$1 = state_42122;
var statearr_42133_43589 = state_42122__$1;
(statearr_42133_43589[(2)] = inst_42116);

(statearr_42133_43589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (3))){
var inst_42118 = (state_42122[(2)]);
var inst_42119 = cljs.core.async.close_BANG_(out);
var state_42122__$1 = (function (){var statearr_42134 = state_42122;
(statearr_42134[(9)] = inst_42118);

return statearr_42134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42122__$1,inst_42119);
} else {
if((state_val_42124 === (2))){
var inst_42098 = (state_42122[(8)]);
var inst_42100 = (inst_42098 < n);
var state_42122__$1 = state_42122;
if(cljs.core.truth_(inst_42100)){
var statearr_42139_43591 = state_42122__$1;
(statearr_42139_43591[(1)] = (4));

} else {
var statearr_42141_43592 = state_42122__$1;
(statearr_42141_43592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (11))){
var inst_42098 = (state_42122[(8)]);
var inst_42108 = (state_42122[(2)]);
var inst_42109 = (inst_42098 + (1));
var inst_42098__$1 = inst_42109;
var state_42122__$1 = (function (){var statearr_42153 = state_42122;
(statearr_42153[(10)] = inst_42108);

(statearr_42153[(8)] = inst_42098__$1);

return statearr_42153;
})();
var statearr_42159_43596 = state_42122__$1;
(statearr_42159_43596[(2)] = null);

(statearr_42159_43596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (9))){
var state_42122__$1 = state_42122;
var statearr_42166_43597 = state_42122__$1;
(statearr_42166_43597[(2)] = null);

(statearr_42166_43597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (5))){
var state_42122__$1 = state_42122;
var statearr_42167_43598 = state_42122__$1;
(statearr_42167_43598[(2)] = null);

(statearr_42167_43598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (10))){
var inst_42113 = (state_42122[(2)]);
var state_42122__$1 = state_42122;
var statearr_42168_43599 = state_42122__$1;
(statearr_42168_43599[(2)] = inst_42113);

(statearr_42168_43599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (8))){
var inst_42103 = (state_42122[(7)]);
var state_42122__$1 = state_42122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42122__$1,(11),out,inst_42103);
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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_42179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42179[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_42179[(1)] = (1));

return statearr_42179;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_42122){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42122);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42187){var ex__40206__auto__ = e42187;
var statearr_42189_43600 = state_42122;
(statearr_42189_43600[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42122[(4)]))){
var statearr_42194_43601 = state_42122;
(statearr_42194_43601[(1)] = cljs.core.first((state_42122[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43602 = state_42122;
state_42122 = G__43602;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_42122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_42122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42210 = f__40371__auto__();
(statearr_42210[(6)] = c__40370__auto___43584);

return statearr_42210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42225 = (function (f,ch,meta42226){
this.f = f;
this.ch = ch;
this.meta42226 = meta42226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42227,meta42226__$1){
var self__ = this;
var _42227__$1 = this;
return (new cljs.core.async.t_cljs$core$async42225(self__.f,self__.ch,meta42226__$1));
}));

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42227){
var self__ = this;
var _42227__$1 = this;
return self__.meta42226;
}));

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42231 = (function (f,ch,meta42226,_,fn1,meta42232){
this.f = f;
this.ch = ch;
this.meta42226 = meta42226;
this._ = _;
this.fn1 = fn1;
this.meta42232 = meta42232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42233,meta42232__$1){
var self__ = this;
var _42233__$1 = this;
return (new cljs.core.async.t_cljs$core$async42231(self__.f,self__.ch,self__.meta42226,self__._,self__.fn1,meta42232__$1));
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42233){
var self__ = this;
var _42233__$1 = this;
return self__.meta42232;
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42224_SHARP_){
var G__42246 = (((p1__42224_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42224_SHARP_) : self__.f.call(null,p1__42224_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42246) : f1.call(null,G__42246));
});
}));

(cljs.core.async.t_cljs$core$async42231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42226","meta42226",1213169809,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42225","cljs.core.async/t_cljs$core$async42225",-1937473548,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42232","meta42232",1690258714,null)], null);
}));

(cljs.core.async.t_cljs$core$async42231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42231");

(cljs.core.async.t_cljs$core$async42231.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async42231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42231.
 */
cljs.core.async.__GT_t_cljs$core$async42231 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42231(f__$1,ch__$1,meta42226__$1,___$2,fn1__$1,meta42232){
return (new cljs.core.async.t_cljs$core$async42231(f__$1,ch__$1,meta42226__$1,___$2,fn1__$1,meta42232));
});

}

return (new cljs.core.async.t_cljs$core$async42231(self__.f,self__.ch,self__.meta42226,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42250 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42250) : self__.f.call(null,G__42250));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42226","meta42226",1213169809,null)], null);
}));

(cljs.core.async.t_cljs$core$async42225.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42225");

(cljs.core.async.t_cljs$core$async42225.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async42225");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42225.
 */
cljs.core.async.__GT_t_cljs$core$async42225 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42225(f__$1,ch__$1,meta42226){
return (new cljs.core.async.t_cljs$core$async42225(f__$1,ch__$1,meta42226));
});

}

return (new cljs.core.async.t_cljs$core$async42225(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42253 = (function (f,ch,meta42254){
this.f = f;
this.ch = ch;
this.meta42254 = meta42254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42255,meta42254__$1){
var self__ = this;
var _42255__$1 = this;
return (new cljs.core.async.t_cljs$core$async42253(self__.f,self__.ch,meta42254__$1));
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42255){
var self__ = this;
var _42255__$1 = this;
return self__.meta42254;
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42254","meta42254",717162054,null)], null);
}));

(cljs.core.async.t_cljs$core$async42253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42253");

(cljs.core.async.t_cljs$core$async42253.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async42253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42253.
 */
cljs.core.async.__GT_t_cljs$core$async42253 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42253(f__$1,ch__$1,meta42254){
return (new cljs.core.async.t_cljs$core$async42253(f__$1,ch__$1,meta42254));
});

}

return (new cljs.core.async.t_cljs$core$async42253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42257 = (function (p,ch,meta42258){
this.p = p;
this.ch = ch;
this.meta42258 = meta42258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42259,meta42258__$1){
var self__ = this;
var _42259__$1 = this;
return (new cljs.core.async.t_cljs$core$async42257(self__.p,self__.ch,meta42258__$1));
}));

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42259){
var self__ = this;
var _42259__$1 = this;
return self__.meta42258;
}));

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42258","meta42258",1411392074,null)], null);
}));

(cljs.core.async.t_cljs$core$async42257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42257");

(cljs.core.async.t_cljs$core$async42257.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async42257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42257.
 */
cljs.core.async.__GT_t_cljs$core$async42257 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42257(p__$1,ch__$1,meta42258){
return (new cljs.core.async.t_cljs$core$async42257(p__$1,ch__$1,meta42258));
});

}

return (new cljs.core.async.t_cljs$core$async42257(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42264 = arguments.length;
switch (G__42264) {
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
var c__40370__auto___43608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42286){
var state_val_42287 = (state_42286[(1)]);
if((state_val_42287 === (7))){
var inst_42282 = (state_42286[(2)]);
var state_42286__$1 = state_42286;
var statearr_42288_43610 = state_42286__$1;
(statearr_42288_43610[(2)] = inst_42282);

(statearr_42288_43610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (1))){
var state_42286__$1 = state_42286;
var statearr_42289_43611 = state_42286__$1;
(statearr_42289_43611[(2)] = null);

(statearr_42289_43611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (4))){
var inst_42268 = (state_42286[(7)]);
var inst_42268__$1 = (state_42286[(2)]);
var inst_42269 = (inst_42268__$1 == null);
var state_42286__$1 = (function (){var statearr_42290 = state_42286;
(statearr_42290[(7)] = inst_42268__$1);

return statearr_42290;
})();
if(cljs.core.truth_(inst_42269)){
var statearr_42292_43612 = state_42286__$1;
(statearr_42292_43612[(1)] = (5));

} else {
var statearr_42293_43613 = state_42286__$1;
(statearr_42293_43613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (6))){
var inst_42268 = (state_42286[(7)]);
var inst_42273 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42268) : p.call(null,inst_42268));
var state_42286__$1 = state_42286;
if(cljs.core.truth_(inst_42273)){
var statearr_42294_43614 = state_42286__$1;
(statearr_42294_43614[(1)] = (8));

} else {
var statearr_42295_43615 = state_42286__$1;
(statearr_42295_43615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (3))){
var inst_42284 = (state_42286[(2)]);
var state_42286__$1 = state_42286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42286__$1,inst_42284);
} else {
if((state_val_42287 === (2))){
var state_42286__$1 = state_42286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42286__$1,(4),ch);
} else {
if((state_val_42287 === (11))){
var inst_42276 = (state_42286[(2)]);
var state_42286__$1 = state_42286;
var statearr_42297_43616 = state_42286__$1;
(statearr_42297_43616[(2)] = inst_42276);

(statearr_42297_43616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (9))){
var state_42286__$1 = state_42286;
var statearr_42298_43617 = state_42286__$1;
(statearr_42298_43617[(2)] = null);

(statearr_42298_43617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (5))){
var inst_42271 = cljs.core.async.close_BANG_(out);
var state_42286__$1 = state_42286;
var statearr_42299_43618 = state_42286__$1;
(statearr_42299_43618[(2)] = inst_42271);

(statearr_42299_43618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (10))){
var inst_42279 = (state_42286[(2)]);
var state_42286__$1 = (function (){var statearr_42300 = state_42286;
(statearr_42300[(8)] = inst_42279);

return statearr_42300;
})();
var statearr_42301_43619 = state_42286__$1;
(statearr_42301_43619[(2)] = null);

(statearr_42301_43619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42287 === (8))){
var inst_42268 = (state_42286[(7)]);
var state_42286__$1 = state_42286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42286__$1,(11),out,inst_42268);
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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_42302 = [null,null,null,null,null,null,null,null,null];
(statearr_42302[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_42302[(1)] = (1));

return statearr_42302;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_42286){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42286);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42304){var ex__40206__auto__ = e42304;
var statearr_42305_43624 = state_42286;
(statearr_42305_43624[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42286[(4)]))){
var statearr_42306_43625 = state_42286;
(statearr_42306_43625[(1)] = cljs.core.first((state_42286[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43627 = state_42286;
state_42286 = G__43627;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_42286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_42286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42308 = f__40371__auto__();
(statearr_42308[(6)] = c__40370__auto___43608);

return statearr_42308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42310 = arguments.length;
switch (G__42310) {
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
var c__40370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42381){
var state_val_42382 = (state_42381[(1)]);
if((state_val_42382 === (7))){
var inst_42376 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42385_43632 = state_42381__$1;
(statearr_42385_43632[(2)] = inst_42376);

(statearr_42385_43632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (20))){
var inst_42345 = (state_42381[(7)]);
var inst_42356 = (state_42381[(2)]);
var inst_42357 = cljs.core.next(inst_42345);
var inst_42329 = inst_42357;
var inst_42330 = null;
var inst_42331 = (0);
var inst_42332 = (0);
var state_42381__$1 = (function (){var statearr_42386 = state_42381;
(statearr_42386[(8)] = inst_42331);

(statearr_42386[(9)] = inst_42332);

(statearr_42386[(10)] = inst_42330);

(statearr_42386[(11)] = inst_42329);

(statearr_42386[(12)] = inst_42356);

return statearr_42386;
})();
var statearr_42387_43633 = state_42381__$1;
(statearr_42387_43633[(2)] = null);

(statearr_42387_43633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (1))){
var state_42381__$1 = state_42381;
var statearr_42390_43634 = state_42381__$1;
(statearr_42390_43634[(2)] = null);

(statearr_42390_43634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (4))){
var inst_42317 = (state_42381[(13)]);
var inst_42317__$1 = (state_42381[(2)]);
var inst_42319 = (inst_42317__$1 == null);
var state_42381__$1 = (function (){var statearr_42392 = state_42381;
(statearr_42392[(13)] = inst_42317__$1);

return statearr_42392;
})();
if(cljs.core.truth_(inst_42319)){
var statearr_42393_43640 = state_42381__$1;
(statearr_42393_43640[(1)] = (5));

} else {
var statearr_42394_43642 = state_42381__$1;
(statearr_42394_43642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (15))){
var state_42381__$1 = state_42381;
var statearr_42398_43643 = state_42381__$1;
(statearr_42398_43643[(2)] = null);

(statearr_42398_43643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (21))){
var state_42381__$1 = state_42381;
var statearr_42401_43644 = state_42381__$1;
(statearr_42401_43644[(2)] = null);

(statearr_42401_43644[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (13))){
var inst_42331 = (state_42381[(8)]);
var inst_42332 = (state_42381[(9)]);
var inst_42330 = (state_42381[(10)]);
var inst_42329 = (state_42381[(11)]);
var inst_42341 = (state_42381[(2)]);
var inst_42342 = (inst_42332 + (1));
var tmp42395 = inst_42331;
var tmp42396 = inst_42330;
var tmp42397 = inst_42329;
var inst_42329__$1 = tmp42397;
var inst_42330__$1 = tmp42396;
var inst_42331__$1 = tmp42395;
var inst_42332__$1 = inst_42342;
var state_42381__$1 = (function (){var statearr_42410 = state_42381;
(statearr_42410[(14)] = inst_42341);

(statearr_42410[(8)] = inst_42331__$1);

(statearr_42410[(9)] = inst_42332__$1);

(statearr_42410[(10)] = inst_42330__$1);

(statearr_42410[(11)] = inst_42329__$1);

return statearr_42410;
})();
var statearr_42411_43646 = state_42381__$1;
(statearr_42411_43646[(2)] = null);

(statearr_42411_43646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (22))){
var state_42381__$1 = state_42381;
var statearr_42412_43647 = state_42381__$1;
(statearr_42412_43647[(2)] = null);

(statearr_42412_43647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (6))){
var inst_42317 = (state_42381[(13)]);
var inst_42327 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42317) : f.call(null,inst_42317));
var inst_42328 = cljs.core.seq(inst_42327);
var inst_42329 = inst_42328;
var inst_42330 = null;
var inst_42331 = (0);
var inst_42332 = (0);
var state_42381__$1 = (function (){var statearr_42413 = state_42381;
(statearr_42413[(8)] = inst_42331);

(statearr_42413[(9)] = inst_42332);

(statearr_42413[(10)] = inst_42330);

(statearr_42413[(11)] = inst_42329);

return statearr_42413;
})();
var statearr_42414_43648 = state_42381__$1;
(statearr_42414_43648[(2)] = null);

(statearr_42414_43648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (17))){
var inst_42345 = (state_42381[(7)]);
var inst_42349 = cljs.core.chunk_first(inst_42345);
var inst_42350 = cljs.core.chunk_rest(inst_42345);
var inst_42351 = cljs.core.count(inst_42349);
var inst_42329 = inst_42350;
var inst_42330 = inst_42349;
var inst_42331 = inst_42351;
var inst_42332 = (0);
var state_42381__$1 = (function (){var statearr_42415 = state_42381;
(statearr_42415[(8)] = inst_42331);

(statearr_42415[(9)] = inst_42332);

(statearr_42415[(10)] = inst_42330);

(statearr_42415[(11)] = inst_42329);

return statearr_42415;
})();
var statearr_42416_43650 = state_42381__$1;
(statearr_42416_43650[(2)] = null);

(statearr_42416_43650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (3))){
var inst_42378 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42381__$1,inst_42378);
} else {
if((state_val_42382 === (12))){
var inst_42366 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42417_43651 = state_42381__$1;
(statearr_42417_43651[(2)] = inst_42366);

(statearr_42417_43651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (2))){
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42381__$1,(4),in$);
} else {
if((state_val_42382 === (23))){
var inst_42374 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42422_43652 = state_42381__$1;
(statearr_42422_43652[(2)] = inst_42374);

(statearr_42422_43652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (19))){
var inst_42361 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42424_43653 = state_42381__$1;
(statearr_42424_43653[(2)] = inst_42361);

(statearr_42424_43653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (11))){
var inst_42345 = (state_42381[(7)]);
var inst_42329 = (state_42381[(11)]);
var inst_42345__$1 = cljs.core.seq(inst_42329);
var state_42381__$1 = (function (){var statearr_42429 = state_42381;
(statearr_42429[(7)] = inst_42345__$1);

return statearr_42429;
})();
if(inst_42345__$1){
var statearr_42430_43655 = state_42381__$1;
(statearr_42430_43655[(1)] = (14));

} else {
var statearr_42431_43656 = state_42381__$1;
(statearr_42431_43656[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (9))){
var inst_42368 = (state_42381[(2)]);
var inst_42369 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42381__$1 = (function (){var statearr_42432 = state_42381;
(statearr_42432[(15)] = inst_42368);

return statearr_42432;
})();
if(cljs.core.truth_(inst_42369)){
var statearr_42434_43657 = state_42381__$1;
(statearr_42434_43657[(1)] = (21));

} else {
var statearr_42436_43658 = state_42381__$1;
(statearr_42436_43658[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (5))){
var inst_42321 = cljs.core.async.close_BANG_(out);
var state_42381__$1 = state_42381;
var statearr_42437_43659 = state_42381__$1;
(statearr_42437_43659[(2)] = inst_42321);

(statearr_42437_43659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (14))){
var inst_42345 = (state_42381[(7)]);
var inst_42347 = cljs.core.chunked_seq_QMARK_(inst_42345);
var state_42381__$1 = state_42381;
if(inst_42347){
var statearr_42438_43661 = state_42381__$1;
(statearr_42438_43661[(1)] = (17));

} else {
var statearr_42439_43663 = state_42381__$1;
(statearr_42439_43663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (16))){
var inst_42364 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42442_43665 = state_42381__$1;
(statearr_42442_43665[(2)] = inst_42364);

(statearr_42442_43665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (10))){
var inst_42332 = (state_42381[(9)]);
var inst_42330 = (state_42381[(10)]);
var inst_42339 = cljs.core._nth(inst_42330,inst_42332);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42381__$1,(13),out,inst_42339);
} else {
if((state_val_42382 === (18))){
var inst_42345 = (state_42381[(7)]);
var inst_42354 = cljs.core.first(inst_42345);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42381__$1,(20),out,inst_42354);
} else {
if((state_val_42382 === (8))){
var inst_42331 = (state_42381[(8)]);
var inst_42332 = (state_42381[(9)]);
var inst_42334 = (inst_42332 < inst_42331);
var inst_42335 = inst_42334;
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42335)){
var statearr_42447_43666 = state_42381__$1;
(statearr_42447_43666[(1)] = (10));

} else {
var statearr_42448_43667 = state_42381__$1;
(statearr_42448_43667[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__40203__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40203__auto____0 = (function (){
var statearr_42451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42451[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40203__auto__);

(statearr_42451[(1)] = (1));

return statearr_42451;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40203__auto____1 = (function (state_42381){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42381);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42454){var ex__40206__auto__ = e42454;
var statearr_42455_43677 = state_42381;
(statearr_42455_43677[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42381[(4)]))){
var statearr_42456_43678 = state_42381;
(statearr_42456_43678[(1)] = cljs.core.first((state_42381[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43680 = state_42381;
state_42381 = G__43680;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40203__auto__ = function(state_42381){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40203__auto____1.call(this,state_42381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40203__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40203__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42457 = f__40371__auto__();
(statearr_42457[(6)] = c__40370__auto__);

return statearr_42457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));

return c__40370__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42462 = arguments.length;
switch (G__42462) {
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
var G__42468 = arguments.length;
switch (G__42468) {
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
var G__42473 = arguments.length;
switch (G__42473) {
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
var c__40370__auto___43699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42502){
var state_val_42503 = (state_42502[(1)]);
if((state_val_42503 === (7))){
var inst_42497 = (state_42502[(2)]);
var state_42502__$1 = state_42502;
var statearr_42510_43701 = state_42502__$1;
(statearr_42510_43701[(2)] = inst_42497);

(statearr_42510_43701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (1))){
var inst_42479 = null;
var state_42502__$1 = (function (){var statearr_42512 = state_42502;
(statearr_42512[(7)] = inst_42479);

return statearr_42512;
})();
var statearr_42513_43702 = state_42502__$1;
(statearr_42513_43702[(2)] = null);

(statearr_42513_43702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (4))){
var inst_42482 = (state_42502[(8)]);
var inst_42482__$1 = (state_42502[(2)]);
var inst_42483 = (inst_42482__$1 == null);
var inst_42484 = cljs.core.not(inst_42483);
var state_42502__$1 = (function (){var statearr_42515 = state_42502;
(statearr_42515[(8)] = inst_42482__$1);

return statearr_42515;
})();
if(inst_42484){
var statearr_42516_43704 = state_42502__$1;
(statearr_42516_43704[(1)] = (5));

} else {
var statearr_42517_43705 = state_42502__$1;
(statearr_42517_43705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (6))){
var state_42502__$1 = state_42502;
var statearr_42519_43706 = state_42502__$1;
(statearr_42519_43706[(2)] = null);

(statearr_42519_43706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (3))){
var inst_42499 = (state_42502[(2)]);
var inst_42500 = cljs.core.async.close_BANG_(out);
var state_42502__$1 = (function (){var statearr_42521 = state_42502;
(statearr_42521[(9)] = inst_42499);

return statearr_42521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42502__$1,inst_42500);
} else {
if((state_val_42503 === (2))){
var state_42502__$1 = state_42502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42502__$1,(4),ch);
} else {
if((state_val_42503 === (11))){
var inst_42482 = (state_42502[(8)]);
var inst_42491 = (state_42502[(2)]);
var inst_42479 = inst_42482;
var state_42502__$1 = (function (){var statearr_42522 = state_42502;
(statearr_42522[(10)] = inst_42491);

(statearr_42522[(7)] = inst_42479);

return statearr_42522;
})();
var statearr_42523_43709 = state_42502__$1;
(statearr_42523_43709[(2)] = null);

(statearr_42523_43709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (9))){
var inst_42482 = (state_42502[(8)]);
var state_42502__$1 = state_42502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42502__$1,(11),out,inst_42482);
} else {
if((state_val_42503 === (5))){
var inst_42482 = (state_42502[(8)]);
var inst_42479 = (state_42502[(7)]);
var inst_42486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42482,inst_42479);
var state_42502__$1 = state_42502;
if(inst_42486){
var statearr_42525_43711 = state_42502__$1;
(statearr_42525_43711[(1)] = (8));

} else {
var statearr_42526_43712 = state_42502__$1;
(statearr_42526_43712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (10))){
var inst_42494 = (state_42502[(2)]);
var state_42502__$1 = state_42502;
var statearr_42527_43714 = state_42502__$1;
(statearr_42527_43714[(2)] = inst_42494);

(statearr_42527_43714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (8))){
var inst_42479 = (state_42502[(7)]);
var tmp42524 = inst_42479;
var inst_42479__$1 = tmp42524;
var state_42502__$1 = (function (){var statearr_42529 = state_42502;
(statearr_42529[(7)] = inst_42479__$1);

return statearr_42529;
})();
var statearr_42530_43715 = state_42502__$1;
(statearr_42530_43715[(2)] = null);

(statearr_42530_43715[(1)] = (2));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_42532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42532[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_42532[(1)] = (1));

return statearr_42532;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_42502){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42502);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42533){var ex__40206__auto__ = e42533;
var statearr_42534_43722 = state_42502;
(statearr_42534_43722[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42502[(4)]))){
var statearr_42535_43724 = state_42502;
(statearr_42535_43724[(1)] = cljs.core.first((state_42502[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43727 = state_42502;
state_42502 = G__43727;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_42502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_42502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42539 = f__40371__auto__();
(statearr_42539[(6)] = c__40370__auto___43699);

return statearr_42539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42557 = arguments.length;
switch (G__42557) {
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
var c__40370__auto___43735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42599){
var state_val_42600 = (state_42599[(1)]);
if((state_val_42600 === (7))){
var inst_42595 = (state_42599[(2)]);
var state_42599__$1 = state_42599;
var statearr_42601_43740 = state_42599__$1;
(statearr_42601_43740[(2)] = inst_42595);

(statearr_42601_43740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (1))){
var inst_42562 = (new Array(n));
var inst_42563 = inst_42562;
var inst_42564 = (0);
var state_42599__$1 = (function (){var statearr_42602 = state_42599;
(statearr_42602[(7)] = inst_42563);

(statearr_42602[(8)] = inst_42564);

return statearr_42602;
})();
var statearr_42603_43741 = state_42599__$1;
(statearr_42603_43741[(2)] = null);

(statearr_42603_43741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (4))){
var inst_42567 = (state_42599[(9)]);
var inst_42567__$1 = (state_42599[(2)]);
var inst_42568 = (inst_42567__$1 == null);
var inst_42569 = cljs.core.not(inst_42568);
var state_42599__$1 = (function (){var statearr_42604 = state_42599;
(statearr_42604[(9)] = inst_42567__$1);

return statearr_42604;
})();
if(inst_42569){
var statearr_42605_43744 = state_42599__$1;
(statearr_42605_43744[(1)] = (5));

} else {
var statearr_42606_43745 = state_42599__$1;
(statearr_42606_43745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (15))){
var inst_42589 = (state_42599[(2)]);
var state_42599__$1 = state_42599;
var statearr_42607_43747 = state_42599__$1;
(statearr_42607_43747[(2)] = inst_42589);

(statearr_42607_43747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (13))){
var state_42599__$1 = state_42599;
var statearr_42608_43748 = state_42599__$1;
(statearr_42608_43748[(2)] = null);

(statearr_42608_43748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (6))){
var inst_42564 = (state_42599[(8)]);
var inst_42585 = (inst_42564 > (0));
var state_42599__$1 = state_42599;
if(cljs.core.truth_(inst_42585)){
var statearr_42609_43750 = state_42599__$1;
(statearr_42609_43750[(1)] = (12));

} else {
var statearr_42610_43751 = state_42599__$1;
(statearr_42610_43751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (3))){
var inst_42597 = (state_42599[(2)]);
var state_42599__$1 = state_42599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42599__$1,inst_42597);
} else {
if((state_val_42600 === (12))){
var inst_42563 = (state_42599[(7)]);
var inst_42587 = cljs.core.vec(inst_42563);
var state_42599__$1 = state_42599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42599__$1,(15),out,inst_42587);
} else {
if((state_val_42600 === (2))){
var state_42599__$1 = state_42599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42599__$1,(4),ch);
} else {
if((state_val_42600 === (11))){
var inst_42579 = (state_42599[(2)]);
var inst_42580 = (new Array(n));
var inst_42563 = inst_42580;
var inst_42564 = (0);
var state_42599__$1 = (function (){var statearr_42623 = state_42599;
(statearr_42623[(7)] = inst_42563);

(statearr_42623[(8)] = inst_42564);

(statearr_42623[(10)] = inst_42579);

return statearr_42623;
})();
var statearr_42632_43752 = state_42599__$1;
(statearr_42632_43752[(2)] = null);

(statearr_42632_43752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (9))){
var inst_42563 = (state_42599[(7)]);
var inst_42577 = cljs.core.vec(inst_42563);
var state_42599__$1 = state_42599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42599__$1,(11),out,inst_42577);
} else {
if((state_val_42600 === (5))){
var inst_42572 = (state_42599[(11)]);
var inst_42563 = (state_42599[(7)]);
var inst_42567 = (state_42599[(9)]);
var inst_42564 = (state_42599[(8)]);
var inst_42571 = (inst_42563[inst_42564] = inst_42567);
var inst_42572__$1 = (inst_42564 + (1));
var inst_42573 = (inst_42572__$1 < n);
var state_42599__$1 = (function (){var statearr_42633 = state_42599;
(statearr_42633[(12)] = inst_42571);

(statearr_42633[(11)] = inst_42572__$1);

return statearr_42633;
})();
if(cljs.core.truth_(inst_42573)){
var statearr_42634_43758 = state_42599__$1;
(statearr_42634_43758[(1)] = (8));

} else {
var statearr_42635_43759 = state_42599__$1;
(statearr_42635_43759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (14))){
var inst_42592 = (state_42599[(2)]);
var inst_42593 = cljs.core.async.close_BANG_(out);
var state_42599__$1 = (function (){var statearr_42637 = state_42599;
(statearr_42637[(13)] = inst_42592);

return statearr_42637;
})();
var statearr_42638_43760 = state_42599__$1;
(statearr_42638_43760[(2)] = inst_42593);

(statearr_42638_43760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (10))){
var inst_42583 = (state_42599[(2)]);
var state_42599__$1 = state_42599;
var statearr_42639_43761 = state_42599__$1;
(statearr_42639_43761[(2)] = inst_42583);

(statearr_42639_43761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (8))){
var inst_42572 = (state_42599[(11)]);
var inst_42563 = (state_42599[(7)]);
var tmp42636 = inst_42563;
var inst_42563__$1 = tmp42636;
var inst_42564 = inst_42572;
var state_42599__$1 = (function (){var statearr_42640 = state_42599;
(statearr_42640[(7)] = inst_42563__$1);

(statearr_42640[(8)] = inst_42564);

return statearr_42640;
})();
var statearr_42641_43762 = state_42599__$1;
(statearr_42641_43762[(2)] = null);

(statearr_42641_43762[(1)] = (2));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_42642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42642[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_42642[(1)] = (1));

return statearr_42642;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_42599){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42599);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42643){var ex__40206__auto__ = e42643;
var statearr_42644_43764 = state_42599;
(statearr_42644_43764[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42599[(4)]))){
var statearr_42645_43765 = state_42599;
(statearr_42645_43765[(1)] = cljs.core.first((state_42599[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43766 = state_42599;
state_42599 = G__43766;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_42599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_42599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42646 = f__40371__auto__();
(statearr_42646[(6)] = c__40370__auto___43735);

return statearr_42646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42648 = arguments.length;
switch (G__42648) {
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
var c__40370__auto___43768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_42693){
var state_val_42694 = (state_42693[(1)]);
if((state_val_42694 === (7))){
var inst_42689 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
var statearr_42697_43769 = state_42693__$1;
(statearr_42697_43769[(2)] = inst_42689);

(statearr_42697_43769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (1))){
var inst_42649 = [];
var inst_42650 = inst_42649;
var inst_42651 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42693__$1 = (function (){var statearr_42698 = state_42693;
(statearr_42698[(7)] = inst_42651);

(statearr_42698[(8)] = inst_42650);

return statearr_42698;
})();
var statearr_42699_43770 = state_42693__$1;
(statearr_42699_43770[(2)] = null);

(statearr_42699_43770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (4))){
var inst_42654 = (state_42693[(9)]);
var inst_42654__$1 = (state_42693[(2)]);
var inst_42655 = (inst_42654__$1 == null);
var inst_42656 = cljs.core.not(inst_42655);
var state_42693__$1 = (function (){var statearr_42704 = state_42693;
(statearr_42704[(9)] = inst_42654__$1);

return statearr_42704;
})();
if(inst_42656){
var statearr_42706_43771 = state_42693__$1;
(statearr_42706_43771[(1)] = (5));

} else {
var statearr_42707_43773 = state_42693__$1;
(statearr_42707_43773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (15))){
var inst_42650 = (state_42693[(8)]);
var inst_42681 = cljs.core.vec(inst_42650);
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42693__$1,(18),out,inst_42681);
} else {
if((state_val_42694 === (13))){
var inst_42676 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
var statearr_42708_43775 = state_42693__$1;
(statearr_42708_43775[(2)] = inst_42676);

(statearr_42708_43775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (6))){
var inst_42650 = (state_42693[(8)]);
var inst_42678 = inst_42650.length;
var inst_42679 = (inst_42678 > (0));
var state_42693__$1 = state_42693;
if(cljs.core.truth_(inst_42679)){
var statearr_42709_43776 = state_42693__$1;
(statearr_42709_43776[(1)] = (15));

} else {
var statearr_42710_43777 = state_42693__$1;
(statearr_42710_43777[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (17))){
var inst_42686 = (state_42693[(2)]);
var inst_42687 = cljs.core.async.close_BANG_(out);
var state_42693__$1 = (function (){var statearr_42711 = state_42693;
(statearr_42711[(10)] = inst_42686);

return statearr_42711;
})();
var statearr_42712_43778 = state_42693__$1;
(statearr_42712_43778[(2)] = inst_42687);

(statearr_42712_43778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (3))){
var inst_42691 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42693__$1,inst_42691);
} else {
if((state_val_42694 === (12))){
var inst_42650 = (state_42693[(8)]);
var inst_42669 = cljs.core.vec(inst_42650);
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42693__$1,(14),out,inst_42669);
} else {
if((state_val_42694 === (2))){
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42693__$1,(4),ch);
} else {
if((state_val_42694 === (11))){
var inst_42654 = (state_42693[(9)]);
var inst_42650 = (state_42693[(8)]);
var inst_42658 = (state_42693[(11)]);
var inst_42666 = inst_42650.push(inst_42654);
var tmp42713 = inst_42650;
var inst_42650__$1 = tmp42713;
var inst_42651 = inst_42658;
var state_42693__$1 = (function (){var statearr_42722 = state_42693;
(statearr_42722[(12)] = inst_42666);

(statearr_42722[(7)] = inst_42651);

(statearr_42722[(8)] = inst_42650__$1);

return statearr_42722;
})();
var statearr_42723_43779 = state_42693__$1;
(statearr_42723_43779[(2)] = null);

(statearr_42723_43779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (9))){
var inst_42651 = (state_42693[(7)]);
var inst_42662 = cljs.core.keyword_identical_QMARK_(inst_42651,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42693__$1 = state_42693;
var statearr_42724_43780 = state_42693__$1;
(statearr_42724_43780[(2)] = inst_42662);

(statearr_42724_43780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (5))){
var inst_42659 = (state_42693[(13)]);
var inst_42651 = (state_42693[(7)]);
var inst_42654 = (state_42693[(9)]);
var inst_42658 = (state_42693[(11)]);
var inst_42658__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42654) : f.call(null,inst_42654));
var inst_42659__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42658__$1,inst_42651);
var state_42693__$1 = (function (){var statearr_42729 = state_42693;
(statearr_42729[(13)] = inst_42659__$1);

(statearr_42729[(11)] = inst_42658__$1);

return statearr_42729;
})();
if(inst_42659__$1){
var statearr_42730_43783 = state_42693__$1;
(statearr_42730_43783[(1)] = (8));

} else {
var statearr_42736_43784 = state_42693__$1;
(statearr_42736_43784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (14))){
var inst_42654 = (state_42693[(9)]);
var inst_42658 = (state_42693[(11)]);
var inst_42671 = (state_42693[(2)]);
var inst_42672 = [];
var inst_42673 = inst_42672.push(inst_42654);
var inst_42650 = inst_42672;
var inst_42651 = inst_42658;
var state_42693__$1 = (function (){var statearr_42737 = state_42693;
(statearr_42737[(14)] = inst_42671);

(statearr_42737[(7)] = inst_42651);

(statearr_42737[(8)] = inst_42650);

(statearr_42737[(15)] = inst_42673);

return statearr_42737;
})();
var statearr_42738_43785 = state_42693__$1;
(statearr_42738_43785[(2)] = null);

(statearr_42738_43785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (16))){
var state_42693__$1 = state_42693;
var statearr_42739_43786 = state_42693__$1;
(statearr_42739_43786[(2)] = null);

(statearr_42739_43786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (10))){
var inst_42664 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
if(cljs.core.truth_(inst_42664)){
var statearr_42744_43792 = state_42693__$1;
(statearr_42744_43792[(1)] = (11));

} else {
var statearr_42745_43794 = state_42693__$1;
(statearr_42745_43794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (18))){
var inst_42683 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
var statearr_42746_43795 = state_42693__$1;
(statearr_42746_43795[(2)] = inst_42683);

(statearr_42746_43795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (8))){
var inst_42659 = (state_42693[(13)]);
var state_42693__$1 = state_42693;
var statearr_42747_43797 = state_42693__$1;
(statearr_42747_43797[(2)] = inst_42659);

(statearr_42747_43797[(1)] = (10));


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
var cljs$core$async$state_machine__40203__auto__ = null;
var cljs$core$async$state_machine__40203__auto____0 = (function (){
var statearr_42752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42752[(0)] = cljs$core$async$state_machine__40203__auto__);

(statearr_42752[(1)] = (1));

return statearr_42752;
});
var cljs$core$async$state_machine__40203__auto____1 = (function (state_42693){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_42693);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e42753){var ex__40206__auto__ = e42753;
var statearr_42754_43801 = state_42693;
(statearr_42754_43801[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_42693[(4)]))){
var statearr_42755_43802 = state_42693;
(statearr_42755_43802[(1)] = cljs.core.first((state_42693[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43804 = state_42693;
state_42693 = G__43804;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
cljs$core$async$state_machine__40203__auto__ = function(state_42693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40203__auto____1.call(this,state_42693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40203__auto____0;
cljs$core$async$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40203__auto____1;
return cljs$core$async$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_42756 = f__40371__auto__();
(statearr_42756[(6)] = c__40370__auto___43768);

return statearr_42756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
