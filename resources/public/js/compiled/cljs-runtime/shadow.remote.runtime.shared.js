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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__52075,res){
var map__52076 = p__52075;
var map__52076__$1 = cljs.core.__destructure_map(map__52076);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52076__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52076__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__52077 = res;
var G__52077__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52077,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__52077);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52077__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__52077__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__52079 = arguments.length;
switch (G__52079) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__52081,msg,handlers,timeout_after_ms){
var map__52082 = p__52081;
var map__52082__$1 = cljs.core.__destructure_map(map__52082);
var runtime = map__52082__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52254 = arguments.length;
var i__4819__auto___52255 = (0);
while(true){
if((i__4819__auto___52255 < len__4818__auto___52254)){
args__4824__auto__.push((arguments[i__4819__auto___52255]));

var G__52256 = (i__4819__auto___52255 + (1));
i__4819__auto___52255 = G__52256;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__52107,ev,args){
var map__52108 = p__52107;
var map__52108__$1 = cljs.core.__destructure_map(map__52108);
var runtime = map__52108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__52109 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52112 = null;
var count__52113 = (0);
var i__52114 = (0);
while(true){
if((i__52114 < count__52113)){
var ext = chunk__52112.cljs$core$IIndexed$_nth$arity$2(null,i__52114);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52261 = seq__52109;
var G__52262 = chunk__52112;
var G__52263 = count__52113;
var G__52264 = (i__52114 + (1));
seq__52109 = G__52261;
chunk__52112 = G__52262;
count__52113 = G__52263;
i__52114 = G__52264;
continue;
} else {
var G__52265 = seq__52109;
var G__52266 = chunk__52112;
var G__52267 = count__52113;
var G__52268 = (i__52114 + (1));
seq__52109 = G__52265;
chunk__52112 = G__52266;
count__52113 = G__52267;
i__52114 = G__52268;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52109);
if(temp__5753__auto__){
var seq__52109__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52109__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52109__$1);
var G__52269 = cljs.core.chunk_rest(seq__52109__$1);
var G__52270 = c__4638__auto__;
var G__52271 = cljs.core.count(c__4638__auto__);
var G__52272 = (0);
seq__52109 = G__52269;
chunk__52112 = G__52270;
count__52113 = G__52271;
i__52114 = G__52272;
continue;
} else {
var ext = cljs.core.first(seq__52109__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52273 = cljs.core.next(seq__52109__$1);
var G__52274 = null;
var G__52275 = (0);
var G__52276 = (0);
seq__52109 = G__52273;
chunk__52112 = G__52274;
count__52113 = G__52275;
i__52114 = G__52276;
continue;
} else {
var G__52277 = cljs.core.next(seq__52109__$1);
var G__52278 = null;
var G__52279 = (0);
var G__52280 = (0);
seq__52109 = G__52277;
chunk__52112 = G__52278;
count__52113 = G__52279;
i__52114 = G__52280;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq52083){
var G__52084 = cljs.core.first(seq52083);
var seq52083__$1 = cljs.core.next(seq52083);
var G__52085 = cljs.core.first(seq52083__$1);
var seq52083__$2 = cljs.core.next(seq52083__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52084,G__52085,seq52083__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__52166,p__52167){
var map__52168 = p__52166;
var map__52168__$1 = cljs.core.__destructure_map(map__52168);
var runtime = map__52168__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52169 = p__52167;
var map__52169__$1 = cljs.core.__destructure_map(map__52169);
var msg = map__52169__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52169__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__52170 = cljs.core.deref(state_ref);
var map__52170__$1 = cljs.core.__destructure_map(map__52170);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52170__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52170__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__52171){
var map__52172 = p__52171;
var map__52172__$1 = cljs.core.__destructure_map(map__52172);
var runtime = map__52172__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__52186,msg){
var map__52187 = p__52186;
var map__52187__$1 = cljs.core.__destructure_map(map__52187);
var runtime = map__52187__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__52196,key,p__52197){
var map__52198 = p__52196;
var map__52198__$1 = cljs.core.__destructure_map(map__52198);
var state = map__52198__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__52199 = p__52197;
var map__52199__$1 = cljs.core.__destructure_map(map__52199);
var spec = map__52199__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__52208,key,spec){
var map__52209 = p__52208;
var map__52209__$1 = cljs.core.__destructure_map(map__52209);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__52214_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__52214_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__52215_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__52215_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__52216_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__52216_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__52217_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__52217_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__52218_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__52218_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__52223,key){
var map__52224 = p__52223;
var map__52224__$1 = cljs.core.__destructure_map(map__52224);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52224__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__52225,msg){
var map__52226 = p__52225;
var map__52226__$1 = cljs.core.__destructure_map(map__52226);
var runtime = map__52226__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52226__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__52227,p__52228){
var map__52229 = p__52227;
var map__52229__$1 = cljs.core.__destructure_map(map__52229);
var runtime = map__52229__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52229__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52230 = p__52228;
var map__52230__$1 = cljs.core.__destructure_map(map__52230);
var msg = map__52230__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52230__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52230__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__52231 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52233 = null;
var count__52234 = (0);
var i__52235 = (0);
while(true){
if((i__52235 < count__52234)){
var map__52239 = chunk__52233.cljs$core$IIndexed$_nth$arity$2(null,i__52235);
var map__52239__$1 = cljs.core.__destructure_map(map__52239);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52239__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52288 = seq__52231;
var G__52289 = chunk__52233;
var G__52290 = count__52234;
var G__52291 = (i__52235 + (1));
seq__52231 = G__52288;
chunk__52233 = G__52289;
count__52234 = G__52290;
i__52235 = G__52291;
continue;
} else {
var G__52292 = seq__52231;
var G__52293 = chunk__52233;
var G__52294 = count__52234;
var G__52295 = (i__52235 + (1));
seq__52231 = G__52292;
chunk__52233 = G__52293;
count__52234 = G__52294;
i__52235 = G__52295;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52231);
if(temp__5753__auto__){
var seq__52231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52231__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52231__$1);
var G__52298 = cljs.core.chunk_rest(seq__52231__$1);
var G__52299 = c__4638__auto__;
var G__52300 = cljs.core.count(c__4638__auto__);
var G__52301 = (0);
seq__52231 = G__52298;
chunk__52233 = G__52299;
count__52234 = G__52300;
i__52235 = G__52301;
continue;
} else {
var map__52240 = cljs.core.first(seq__52231__$1);
var map__52240__$1 = cljs.core.__destructure_map(map__52240);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52302 = cljs.core.next(seq__52231__$1);
var G__52303 = null;
var G__52304 = (0);
var G__52305 = (0);
seq__52231 = G__52302;
chunk__52233 = G__52303;
count__52234 = G__52304;
i__52235 = G__52305;
continue;
} else {
var G__52306 = cljs.core.next(seq__52231__$1);
var G__52307 = null;
var G__52308 = (0);
var G__52309 = (0);
seq__52231 = G__52306;
chunk__52233 = G__52307;
count__52234 = G__52308;
i__52235 = G__52309;
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
