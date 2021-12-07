goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40842){
var map__40843 = p__40842;
var map__40843__$1 = cljs.core.__destructure_map(map__40843);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40843__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40843__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40843__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40843__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__40844_40882 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__40845_40883 = null;
var count__40846_40884 = (0);
var i__40847_40885 = (0);
while(true){
if((i__40847_40885 < count__40846_40884)){
var vec__40858_40886 = chunk__40845_40883.cljs$core$IIndexed$_nth$arity$2(null,i__40847_40885);
var k_40887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40858_40886,(0),null);
var cb_40888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40858_40886,(1),null);
try{var G__40862_40889 = cljs.core.deref(re_frame.trace.traces);
(cb_40888.cljs$core$IFn$_invoke$arity$1 ? cb_40888.cljs$core$IFn$_invoke$arity$1(G__40862_40889) : cb_40888.call(null,G__40862_40889));
}catch (e40861){var e_40890 = e40861;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40887,"while storing",cljs.core.deref(re_frame.trace.traces),e_40890], 0));
}

var G__40891 = seq__40844_40882;
var G__40892 = chunk__40845_40883;
var G__40893 = count__40846_40884;
var G__40894 = (i__40847_40885 + (1));
seq__40844_40882 = G__40891;
chunk__40845_40883 = G__40892;
count__40846_40884 = G__40893;
i__40847_40885 = G__40894;
continue;
} else {
var temp__5753__auto___40909 = cljs.core.seq(seq__40844_40882);
if(temp__5753__auto___40909){
var seq__40844_40910__$1 = temp__5753__auto___40909;
if(cljs.core.chunked_seq_QMARK_(seq__40844_40910__$1)){
var c__4638__auto___40911 = cljs.core.chunk_first(seq__40844_40910__$1);
var G__40912 = cljs.core.chunk_rest(seq__40844_40910__$1);
var G__40913 = c__4638__auto___40911;
var G__40914 = cljs.core.count(c__4638__auto___40911);
var G__40915 = (0);
seq__40844_40882 = G__40912;
chunk__40845_40883 = G__40913;
count__40846_40884 = G__40914;
i__40847_40885 = G__40915;
continue;
} else {
var vec__40863_40916 = cljs.core.first(seq__40844_40910__$1);
var k_40917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40863_40916,(0),null);
var cb_40918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40863_40916,(1),null);
try{var G__40867_40921 = cljs.core.deref(re_frame.trace.traces);
(cb_40918.cljs$core$IFn$_invoke$arity$1 ? cb_40918.cljs$core$IFn$_invoke$arity$1(G__40867_40921) : cb_40918.call(null,G__40867_40921));
}catch (e40866){var e_40923 = e40866;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40917,"while storing",cljs.core.deref(re_frame.trace.traces),e_40923], 0));
}

var G__40924 = cljs.core.next(seq__40844_40910__$1);
var G__40925 = null;
var G__40926 = (0);
var G__40927 = (0);
seq__40844_40882 = G__40924;
chunk__40845_40883 = G__40925;
count__40846_40884 = G__40926;
i__40847_40885 = G__40927;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
