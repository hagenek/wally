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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__32971){
var map__32972 = p__32971;
var map__32972__$1 = cljs.core.__destructure_map(map__32972);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__32973_33004 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__32974_33005 = null;
var count__32975_33006 = (0);
var i__32976_33007 = (0);
while(true){
if((i__32976_33007 < count__32975_33006)){
var vec__32989_33008 = chunk__32974_33005.cljs$core$IIndexed$_nth$arity$2(null,i__32976_33007);
var k_33009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989_33008,(0),null);
var cb_33010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989_33008,(1),null);
try{var G__32993_33011 = cljs.core.deref(re_frame.trace.traces);
(cb_33010.cljs$core$IFn$_invoke$arity$1 ? cb_33010.cljs$core$IFn$_invoke$arity$1(G__32993_33011) : cb_33010.call(null,G__32993_33011));
}catch (e32992){var e_33012 = e32992;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33009,"while storing",cljs.core.deref(re_frame.trace.traces),e_33012], 0));
}

var G__33013 = seq__32973_33004;
var G__33014 = chunk__32974_33005;
var G__33015 = count__32975_33006;
var G__33016 = (i__32976_33007 + (1));
seq__32973_33004 = G__33013;
chunk__32974_33005 = G__33014;
count__32975_33006 = G__33015;
i__32976_33007 = G__33016;
continue;
} else {
var temp__5753__auto___33017 = cljs.core.seq(seq__32973_33004);
if(temp__5753__auto___33017){
var seq__32973_33018__$1 = temp__5753__auto___33017;
if(cljs.core.chunked_seq_QMARK_(seq__32973_33018__$1)){
var c__4638__auto___33019 = cljs.core.chunk_first(seq__32973_33018__$1);
var G__33020 = cljs.core.chunk_rest(seq__32973_33018__$1);
var G__33021 = c__4638__auto___33019;
var G__33022 = cljs.core.count(c__4638__auto___33019);
var G__33023 = (0);
seq__32973_33004 = G__33020;
chunk__32974_33005 = G__33021;
count__32975_33006 = G__33022;
i__32976_33007 = G__33023;
continue;
} else {
var vec__32995_33027 = cljs.core.first(seq__32973_33018__$1);
var k_33028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995_33027,(0),null);
var cb_33029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995_33027,(1),null);
try{var G__32999_33032 = cljs.core.deref(re_frame.trace.traces);
(cb_33029.cljs$core$IFn$_invoke$arity$1 ? cb_33029.cljs$core$IFn$_invoke$arity$1(G__32999_33032) : cb_33029.call(null,G__32999_33032));
}catch (e32998){var e_33033 = e32998;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33028,"while storing",cljs.core.deref(re_frame.trace.traces),e_33033], 0));
}

var G__33034 = cljs.core.next(seq__32973_33018__$1);
var G__33035 = null;
var G__33036 = (0);
var G__33037 = (0);
seq__32973_33004 = G__33034;
chunk__32974_33005 = G__33035;
count__32975_33006 = G__33036;
i__32976_33007 = G__33037;
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
