goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__30270 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30271 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30271);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___30381 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___30381)){
var new_db_30382 = temp__5753__auto___30381;
var fexpr__30273_30383 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30273_30383.cljs$core$IFn$_invoke$arity$1 ? fexpr__30273_30383.cljs$core$IFn$_invoke$arity$1(new_db_30382) : fexpr__30273_30383.call(null,new_db_30382));
} else {
}

var seq__30274 = cljs.core.seq(effects_without_db);
var chunk__30275 = null;
var count__30276 = (0);
var i__30277 = (0);
while(true){
if((i__30277 < count__30276)){
var vec__30285 = chunk__30275.cljs$core$IIndexed$_nth$arity$2(null,i__30277);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(1),null);
var temp__5751__auto___30387 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30387)){
var effect_fn_30388 = temp__5751__auto___30387;
(effect_fn_30388.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30388.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30388.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30389 = seq__30274;
var G__30390 = chunk__30275;
var G__30391 = count__30276;
var G__30392 = (i__30277 + (1));
seq__30274 = G__30389;
chunk__30275 = G__30390;
count__30276 = G__30391;
i__30277 = G__30392;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30274);
if(temp__5753__auto__){
var seq__30274__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30274__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30274__$1);
var G__30394 = cljs.core.chunk_rest(seq__30274__$1);
var G__30395 = c__4638__auto__;
var G__30396 = cljs.core.count(c__4638__auto__);
var G__30397 = (0);
seq__30274 = G__30394;
chunk__30275 = G__30395;
count__30276 = G__30396;
i__30277 = G__30397;
continue;
} else {
var vec__30289 = cljs.core.first(seq__30274__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30289,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30289,(1),null);
var temp__5751__auto___30398 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30398)){
var effect_fn_30399 = temp__5751__auto___30398;
(effect_fn_30399.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30399.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30399.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30400 = cljs.core.next(seq__30274__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__30274 = G__30400;
chunk__30275 = G__30401;
count__30276 = G__30402;
i__30277 = G__30403;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__29600__auto___30404 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__29601__auto___30405 = (end__29600__auto___30404 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29601__auto___30405,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__29600__auto___30404);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30270);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___30409 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___30409)){
var new_db_30410 = temp__5753__auto___30409;
var fexpr__30292_30411 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30292_30411.cljs$core$IFn$_invoke$arity$1 ? fexpr__30292_30411.cljs$core$IFn$_invoke$arity$1(new_db_30410) : fexpr__30292_30411.call(null,new_db_30410));
} else {
}

var seq__30294 = cljs.core.seq(effects_without_db);
var chunk__30295 = null;
var count__30296 = (0);
var i__30297 = (0);
while(true){
if((i__30297 < count__30296)){
var vec__30313 = chunk__30295.cljs$core$IIndexed$_nth$arity$2(null,i__30297);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30313,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30313,(1),null);
var temp__5751__auto___30414 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30414)){
var effect_fn_30415 = temp__5751__auto___30414;
(effect_fn_30415.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30415.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30415.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30417 = seq__30294;
var G__30418 = chunk__30295;
var G__30419 = count__30296;
var G__30420 = (i__30297 + (1));
seq__30294 = G__30417;
chunk__30295 = G__30418;
count__30296 = G__30419;
i__30297 = G__30420;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30294);
if(temp__5753__auto__){
var seq__30294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30294__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30294__$1);
var G__30422 = cljs.core.chunk_rest(seq__30294__$1);
var G__30423 = c__4638__auto__;
var G__30424 = cljs.core.count(c__4638__auto__);
var G__30425 = (0);
seq__30294 = G__30422;
chunk__30295 = G__30423;
count__30296 = G__30424;
i__30297 = G__30425;
continue;
} else {
var vec__30325 = cljs.core.first(seq__30294__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30325,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30325,(1),null);
var temp__5751__auto___30426 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30426)){
var effect_fn_30428 = temp__5751__auto___30426;
(effect_fn_30428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30428.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30431 = cljs.core.next(seq__30294__$1);
var G__30432 = null;
var G__30433 = (0);
var G__30434 = (0);
seq__30294 = G__30431;
chunk__30295 = G__30432;
count__30296 = G__30433;
i__30297 = G__30434;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__30333){
var map__30334 = p__30333;
var map__30334__$1 = cljs.core.__destructure_map(map__30334);
var effect = map__30334__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__30337 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30338 = null;
var count__30339 = (0);
var i__30340 = (0);
while(true){
if((i__30340 < count__30339)){
var effect = chunk__30338.cljs$core$IIndexed$_nth$arity$2(null,i__30340);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__30437 = seq__30337;
var G__30438 = chunk__30338;
var G__30439 = count__30339;
var G__30440 = (i__30340 + (1));
seq__30337 = G__30437;
chunk__30338 = G__30438;
count__30339 = G__30439;
i__30340 = G__30440;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30337);
if(temp__5753__auto__){
var seq__30337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30337__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30337__$1);
var G__30441 = cljs.core.chunk_rest(seq__30337__$1);
var G__30442 = c__4638__auto__;
var G__30443 = cljs.core.count(c__4638__auto__);
var G__30444 = (0);
seq__30337 = G__30441;
chunk__30338 = G__30442;
count__30339 = G__30443;
i__30340 = G__30444;
continue;
} else {
var effect = cljs.core.first(seq__30337__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__30445 = cljs.core.next(seq__30337__$1);
var G__30446 = null;
var G__30447 = (0);
var G__30448 = (0);
seq__30337 = G__30445;
chunk__30338 = G__30446;
count__30339 = G__30447;
i__30340 = G__30448;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__30345 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30346 = null;
var count__30347 = (0);
var i__30348 = (0);
while(true){
if((i__30348 < count__30347)){
var vec__30355 = chunk__30346.cljs$core$IIndexed$_nth$arity$2(null,i__30348);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___30450 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30450)){
var effect_fn_30451 = temp__5751__auto___30450;
(effect_fn_30451.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30451.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30451.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30452 = seq__30345;
var G__30453 = chunk__30346;
var G__30454 = count__30347;
var G__30455 = (i__30348 + (1));
seq__30345 = G__30452;
chunk__30346 = G__30453;
count__30347 = G__30454;
i__30348 = G__30455;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30345);
if(temp__5753__auto__){
var seq__30345__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30345__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30345__$1);
var G__30456 = cljs.core.chunk_rest(seq__30345__$1);
var G__30457 = c__4638__auto__;
var G__30458 = cljs.core.count(c__4638__auto__);
var G__30459 = (0);
seq__30345 = G__30456;
chunk__30346 = G__30457;
count__30347 = G__30458;
i__30348 = G__30459;
continue;
} else {
var vec__30362 = cljs.core.first(seq__30345__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30362,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30362,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___30462 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30462)){
var effect_fn_30463 = temp__5751__auto___30462;
(effect_fn_30463.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30463.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30463.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30466 = cljs.core.next(seq__30345__$1);
var G__30467 = null;
var G__30468 = (0);
var G__30469 = (0);
seq__30345 = G__30466;
chunk__30346 = G__30467;
count__30347 = G__30468;
i__30348 = G__30469;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__30366 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30367 = null;
var count__30368 = (0);
var i__30369 = (0);
while(true){
if((i__30369 < count__30368)){
var event = chunk__30367.cljs$core$IIndexed$_nth$arity$2(null,i__30369);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__30472 = seq__30366;
var G__30473 = chunk__30367;
var G__30474 = count__30368;
var G__30475 = (i__30369 + (1));
seq__30366 = G__30472;
chunk__30367 = G__30473;
count__30368 = G__30474;
i__30369 = G__30475;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30366);
if(temp__5753__auto__){
var seq__30366__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30366__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30366__$1);
var G__30478 = cljs.core.chunk_rest(seq__30366__$1);
var G__30479 = c__4638__auto__;
var G__30480 = cljs.core.count(c__4638__auto__);
var G__30481 = (0);
seq__30366 = G__30478;
chunk__30367 = G__30479;
count__30368 = G__30480;
i__30369 = G__30481;
continue;
} else {
var event = cljs.core.first(seq__30366__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__30482 = cljs.core.next(seq__30366__$1);
var G__30483 = null;
var G__30484 = (0);
var G__30485 = (0);
seq__30366 = G__30482;
chunk__30367 = G__30483;
count__30368 = G__30484;
i__30369 = G__30485;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__30376 = cljs.core.seq(value);
var chunk__30377 = null;
var count__30378 = (0);
var i__30379 = (0);
while(true){
if((i__30379 < count__30378)){
var event = chunk__30377.cljs$core$IIndexed$_nth$arity$2(null,i__30379);
clear_event(event);


var G__30488 = seq__30376;
var G__30489 = chunk__30377;
var G__30490 = count__30378;
var G__30491 = (i__30379 + (1));
seq__30376 = G__30488;
chunk__30377 = G__30489;
count__30378 = G__30490;
i__30379 = G__30491;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30376);
if(temp__5753__auto__){
var seq__30376__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30376__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30376__$1);
var G__30494 = cljs.core.chunk_rest(seq__30376__$1);
var G__30495 = c__4638__auto__;
var G__30496 = cljs.core.count(c__4638__auto__);
var G__30497 = (0);
seq__30376 = G__30494;
chunk__30377 = G__30495;
count__30378 = G__30496;
i__30379 = G__30497;
continue;
} else {
var event = cljs.core.first(seq__30376__$1);
clear_event(event);


var G__30499 = cljs.core.next(seq__30376__$1);
var G__30500 = null;
var G__30501 = (0);
var G__30502 = (0);
seq__30376 = G__30499;
chunk__30377 = G__30500;
count__30378 = G__30501;
i__30379 = G__30502;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
