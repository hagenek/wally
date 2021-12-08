goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__42315,res){
var map__42318 = p__42315;
var map__42318__$1 = cljs.core.__destructure_map(map__42318);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42318__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42318__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__42337 = res;
var G__42337__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42337,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__42337);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42337__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__42337__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__42380 = arguments.length;
switch (G__42380) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__42383,msg,handlers,timeout_after_ms){
var map__42384 = p__42383;
var map__42384__$1 = cljs.core.__destructure_map(map__42384);
var runtime = map__42384__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42536 = arguments.length;
var i__4819__auto___42537 = (0);
while(true){
if((i__4819__auto___42537 < len__4818__auto___42536)){
args__4824__auto__.push((arguments[i__4819__auto___42537]));

var G__42538 = (i__4819__auto___42537 + (1));
i__4819__auto___42537 = G__42538;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42399,ev,args){
var map__42400 = p__42399;
var map__42400__$1 = cljs.core.__destructure_map(map__42400);
var runtime = map__42400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__42402 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42405 = null;
var count__42406 = (0);
var i__42407 = (0);
while(true){
if((i__42407 < count__42406)){
var ext = chunk__42405.cljs$core$IIndexed$_nth$arity$2(null,i__42407);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42540 = seq__42402;
var G__42541 = chunk__42405;
var G__42542 = count__42406;
var G__42543 = (i__42407 + (1));
seq__42402 = G__42540;
chunk__42405 = G__42541;
count__42406 = G__42542;
i__42407 = G__42543;
continue;
} else {
var G__42544 = seq__42402;
var G__42545 = chunk__42405;
var G__42546 = count__42406;
var G__42547 = (i__42407 + (1));
seq__42402 = G__42544;
chunk__42405 = G__42545;
count__42406 = G__42546;
i__42407 = G__42547;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42402);
if(temp__5753__auto__){
var seq__42402__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42402__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42402__$1);
var G__42548 = cljs.core.chunk_rest(seq__42402__$1);
var G__42549 = c__4638__auto__;
var G__42550 = cljs.core.count(c__4638__auto__);
var G__42551 = (0);
seq__42402 = G__42548;
chunk__42405 = G__42549;
count__42406 = G__42550;
i__42407 = G__42551;
continue;
} else {
var ext = cljs.core.first(seq__42402__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42553 = cljs.core.next(seq__42402__$1);
var G__42554 = null;
var G__42555 = (0);
var G__42556 = (0);
seq__42402 = G__42553;
chunk__42405 = G__42554;
count__42406 = G__42555;
i__42407 = G__42556;
continue;
} else {
var G__42558 = cljs.core.next(seq__42402__$1);
var G__42559 = null;
var G__42560 = (0);
var G__42561 = (0);
seq__42402 = G__42558;
chunk__42405 = G__42559;
count__42406 = G__42560;
i__42407 = G__42561;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq42388){
var G__42389 = cljs.core.first(seq42388);
var seq42388__$1 = cljs.core.next(seq42388);
var G__42391 = cljs.core.first(seq42388__$1);
var seq42388__$2 = cljs.core.next(seq42388__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42389,G__42391,seq42388__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__42418,p__42419){
var map__42420 = p__42418;
var map__42420__$1 = cljs.core.__destructure_map(map__42420);
var runtime = map__42420__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42420__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42421 = p__42419;
var map__42421__$1 = cljs.core.__destructure_map(map__42421);
var msg = map__42421__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42421__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__42423 = cljs.core.deref(state_ref);
var map__42423__$1 = cljs.core.__destructure_map(map__42423);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__42433){
var map__42435 = p__42433;
var map__42435__$1 = cljs.core.__destructure_map(map__42435);
var runtime = map__42435__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__42440,msg){
var map__42441 = p__42440;
var map__42441__$1 = cljs.core.__destructure_map(map__42441);
var runtime = map__42441__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42441__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__42449,key,p__42450){
var map__42452 = p__42449;
var map__42452__$1 = cljs.core.__destructure_map(map__42452);
var state = map__42452__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42452__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__42453 = p__42450;
var map__42453__$1 = cljs.core.__destructure_map(map__42453);
var spec = map__42453__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42453__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__42458,key,spec){
var map__42459 = p__42458;
var map__42459__$1 = cljs.core.__destructure_map(map__42459);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__42461_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__42461_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__42463_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__42463_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__42464_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__42464_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__42465_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__42465_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__42466_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__42466_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__42469,key){
var map__42470 = p__42469;
var map__42470__$1 = cljs.core.__destructure_map(map__42470);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42470__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__42472,msg){
var map__42474 = p__42472;
var map__42474__$1 = cljs.core.__destructure_map(map__42474);
var runtime = map__42474__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42474__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__42475,p__42476){
var map__42477 = p__42475;
var map__42477__$1 = cljs.core.__destructure_map(map__42477);
var runtime = map__42477__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42477__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42478 = p__42476;
var map__42478__$1 = cljs.core.__destructure_map(map__42478);
var msg = map__42478__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__42504 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42506 = null;
var count__42507 = (0);
var i__42508 = (0);
while(true){
if((i__42508 < count__42507)){
var map__42518 = chunk__42506.cljs$core$IIndexed$_nth$arity$2(null,i__42508);
var map__42518__$1 = cljs.core.__destructure_map(map__42518);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42518__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42611 = seq__42504;
var G__42612 = chunk__42506;
var G__42613 = count__42507;
var G__42614 = (i__42508 + (1));
seq__42504 = G__42611;
chunk__42506 = G__42612;
count__42507 = G__42613;
i__42508 = G__42614;
continue;
} else {
var G__42615 = seq__42504;
var G__42616 = chunk__42506;
var G__42617 = count__42507;
var G__42618 = (i__42508 + (1));
seq__42504 = G__42615;
chunk__42506 = G__42616;
count__42507 = G__42617;
i__42508 = G__42618;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42504);
if(temp__5753__auto__){
var seq__42504__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42504__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42504__$1);
var G__42619 = cljs.core.chunk_rest(seq__42504__$1);
var G__42620 = c__4638__auto__;
var G__42621 = cljs.core.count(c__4638__auto__);
var G__42622 = (0);
seq__42504 = G__42619;
chunk__42506 = G__42620;
count__42507 = G__42621;
i__42508 = G__42622;
continue;
} else {
var map__42520 = cljs.core.first(seq__42504__$1);
var map__42520__$1 = cljs.core.__destructure_map(map__42520);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42624 = cljs.core.next(seq__42504__$1);
var G__42625 = null;
var G__42626 = (0);
var G__42627 = (0);
seq__42504 = G__42624;
chunk__42506 = G__42625;
count__42507 = G__42626;
i__42508 = G__42627;
continue;
} else {
var G__42628 = cljs.core.next(seq__42504__$1);
var G__42629 = null;
var G__42630 = (0);
var G__42631 = (0);
seq__42504 = G__42628;
chunk__42506 = G__42629;
count__42507 = G__42630;
i__42508 = G__42631;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
