goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43431,p__43432){
var map__43433 = p__43431;
var map__43433__$1 = cljs.core.__destructure_map(map__43433);
var svc = map__43433__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43434 = p__43432;
var map__43434__$1 = cljs.core.__destructure_map(map__43434);
var msg = map__43434__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43434__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43434__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43434__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43434__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43453,p__43454){
var map__43456 = p__43453;
var map__43456__$1 = cljs.core.__destructure_map(map__43456);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43456__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43457 = p__43454;
var map__43457__$1 = cljs.core.__destructure_map(map__43457);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43457__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43467,p__43468){
var map__43471 = p__43467;
var map__43471__$1 = cljs.core.__destructure_map(map__43471);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43471__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43472 = p__43468;
var map__43472__$1 = cljs.core.__destructure_map(map__43472);
var msg = map__43472__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43472__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43479,tid){
var map__43481 = p__43479;
var map__43481__$1 = cljs.core.__destructure_map(map__43481);
var svc = map__43481__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43494 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43495 = null;
var count__43496 = (0);
var i__43497 = (0);
while(true){
if((i__43497 < count__43496)){
var vec__43520 = chunk__43495.cljs$core$IIndexed$_nth$arity$2(null,i__43497);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43520,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43520,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43559 = seq__43494;
var G__43560 = chunk__43495;
var G__43561 = count__43496;
var G__43562 = (i__43497 + (1));
seq__43494 = G__43559;
chunk__43495 = G__43560;
count__43496 = G__43561;
i__43497 = G__43562;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43494);
if(temp__5753__auto__){
var seq__43494__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43494__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43494__$1);
var G__43564 = cljs.core.chunk_rest(seq__43494__$1);
var G__43565 = c__4638__auto__;
var G__43566 = cljs.core.count(c__4638__auto__);
var G__43567 = (0);
seq__43494 = G__43564;
chunk__43495 = G__43565;
count__43496 = G__43566;
i__43497 = G__43567;
continue;
} else {
var vec__43528 = cljs.core.first(seq__43494__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43528,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43528,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43569 = cljs.core.next(seq__43494__$1);
var G__43570 = null;
var G__43571 = (0);
var G__43572 = (0);
seq__43494 = G__43569;
chunk__43495 = G__43570;
count__43496 = G__43571;
i__43497 = G__43572;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43484_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43484_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43486_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43486_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43490_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43490_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43491_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43491_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43540){
var map__43542 = p__43540;
var map__43542__$1 = cljs.core.__destructure_map(map__43542);
var svc = map__43542__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43542__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43542__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
