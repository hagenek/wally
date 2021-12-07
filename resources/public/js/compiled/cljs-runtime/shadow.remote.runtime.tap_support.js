goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__52545,p__52546){
var map__52547 = p__52545;
var map__52547__$1 = cljs.core.__destructure_map(map__52547);
var svc = map__52547__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52547__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52548 = p__52546;
var map__52548__$1 = cljs.core.__destructure_map(map__52548);
var msg = map__52548__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52548__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__52552,p__52553){
var map__52556 = p__52552;
var map__52556__$1 = cljs.core.__destructure_map(map__52556);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52556__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__52557 = p__52553;
var map__52557__$1 = cljs.core.__destructure_map(map__52557);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52557__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__52559,p__52560){
var map__52563 = p__52559;
var map__52563__$1 = cljs.core.__destructure_map(map__52563);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52563__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52564 = p__52560;
var map__52564__$1 = cljs.core.__destructure_map(map__52564);
var msg = map__52564__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52564__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__52565,tid){
var map__52567 = p__52565;
var map__52567__$1 = cljs.core.__destructure_map(map__52567);
var svc = map__52567__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52567__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__52573 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__52574 = null;
var count__52575 = (0);
var i__52576 = (0);
while(true){
if((i__52576 < count__52575)){
var vec__52584 = chunk__52574.cljs$core$IIndexed$_nth$arity$2(null,i__52576);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52584,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52584,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52595 = seq__52573;
var G__52596 = chunk__52574;
var G__52597 = count__52575;
var G__52598 = (i__52576 + (1));
seq__52573 = G__52595;
chunk__52574 = G__52596;
count__52575 = G__52597;
i__52576 = G__52598;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52573);
if(temp__5753__auto__){
var seq__52573__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52573__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52573__$1);
var G__52599 = cljs.core.chunk_rest(seq__52573__$1);
var G__52600 = c__4638__auto__;
var G__52601 = cljs.core.count(c__4638__auto__);
var G__52602 = (0);
seq__52573 = G__52599;
chunk__52574 = G__52600;
count__52575 = G__52601;
i__52576 = G__52602;
continue;
} else {
var vec__52587 = cljs.core.first(seq__52573__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52603 = cljs.core.next(seq__52573__$1);
var G__52604 = null;
var G__52605 = (0);
var G__52606 = (0);
seq__52573 = G__52603;
chunk__52574 = G__52604;
count__52575 = G__52605;
i__52576 = G__52606;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__52569_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__52569_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__52570_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__52570_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__52571_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__52571_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__52572_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__52572_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__52593){
var map__52594 = p__52593;
var map__52594__$1 = cljs.core.__destructure_map(map__52594);
var svc = map__52594__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
