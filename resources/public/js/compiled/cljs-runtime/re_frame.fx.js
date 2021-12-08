goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__33394 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33395 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33395);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___33514 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___33514)){
var new_db_33515 = temp__5753__auto___33514;
var fexpr__33399_33516 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33399_33516.cljs$core$IFn$_invoke$arity$1 ? fexpr__33399_33516.cljs$core$IFn$_invoke$arity$1(new_db_33515) : fexpr__33399_33516.call(null,new_db_33515));
} else {
}

var seq__33402 = cljs.core.seq(effects_without_db);
var chunk__33403 = null;
var count__33404 = (0);
var i__33405 = (0);
while(true){
if((i__33405 < count__33404)){
var vec__33418 = chunk__33403.cljs$core$IIndexed$_nth$arity$2(null,i__33405);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33418,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33418,(1),null);
var temp__5751__auto___33517 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33517)){
var effect_fn_33518 = temp__5751__auto___33517;
(effect_fn_33518.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33518.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33518.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33519 = seq__33402;
var G__33520 = chunk__33403;
var G__33521 = count__33404;
var G__33522 = (i__33405 + (1));
seq__33402 = G__33519;
chunk__33403 = G__33520;
count__33404 = G__33521;
i__33405 = G__33522;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33402);
if(temp__5753__auto__){
var seq__33402__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33402__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33402__$1);
var G__33523 = cljs.core.chunk_rest(seq__33402__$1);
var G__33524 = c__4638__auto__;
var G__33525 = cljs.core.count(c__4638__auto__);
var G__33526 = (0);
seq__33402 = G__33523;
chunk__33403 = G__33524;
count__33404 = G__33525;
i__33405 = G__33526;
continue;
} else {
var vec__33430 = cljs.core.first(seq__33402__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(1),null);
var temp__5751__auto___33527 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33527)){
var effect_fn_33528 = temp__5751__auto___33527;
(effect_fn_33528.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33528.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33528.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33529 = cljs.core.next(seq__33402__$1);
var G__33530 = null;
var G__33531 = (0);
var G__33532 = (0);
seq__33402 = G__33529;
chunk__33403 = G__33530;
count__33404 = G__33531;
i__33405 = G__33532;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32949__auto___33533 = re_frame.interop.now();
var duration__32950__auto___33534 = (end__32949__auto___33533 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32950__auto___33534,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32949__auto___33533);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33394);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___33535 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___33535)){
var new_db_33536 = temp__5753__auto___33535;
var fexpr__33433_33537 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33433_33537.cljs$core$IFn$_invoke$arity$1 ? fexpr__33433_33537.cljs$core$IFn$_invoke$arity$1(new_db_33536) : fexpr__33433_33537.call(null,new_db_33536));
} else {
}

var seq__33434 = cljs.core.seq(effects_without_db);
var chunk__33435 = null;
var count__33436 = (0);
var i__33437 = (0);
while(true){
if((i__33437 < count__33436)){
var vec__33446 = chunk__33435.cljs$core$IIndexed$_nth$arity$2(null,i__33437);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33446,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33446,(1),null);
var temp__5751__auto___33538 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33538)){
var effect_fn_33539 = temp__5751__auto___33538;
(effect_fn_33539.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33539.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33539.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33542 = seq__33434;
var G__33543 = chunk__33435;
var G__33544 = count__33436;
var G__33545 = (i__33437 + (1));
seq__33434 = G__33542;
chunk__33435 = G__33543;
count__33436 = G__33544;
i__33437 = G__33545;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33434);
if(temp__5753__auto__){
var seq__33434__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33434__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33434__$1);
var G__33546 = cljs.core.chunk_rest(seq__33434__$1);
var G__33547 = c__4638__auto__;
var G__33548 = cljs.core.count(c__4638__auto__);
var G__33549 = (0);
seq__33434 = G__33546;
chunk__33435 = G__33547;
count__33436 = G__33548;
i__33437 = G__33549;
continue;
} else {
var vec__33449 = cljs.core.first(seq__33434__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33449,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33449,(1),null);
var temp__5751__auto___33552 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33552)){
var effect_fn_33554 = temp__5751__auto___33552;
(effect_fn_33554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33554.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33555 = cljs.core.next(seq__33434__$1);
var G__33557 = null;
var G__33558 = (0);
var G__33559 = (0);
seq__33434 = G__33555;
chunk__33435 = G__33557;
count__33436 = G__33558;
i__33437 = G__33559;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__33457){
var map__33459 = p__33457;
var map__33459__$1 = cljs.core.__destructure_map(map__33459);
var effect = map__33459__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__33466 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33467 = null;
var count__33468 = (0);
var i__33469 = (0);
while(true){
if((i__33469 < count__33468)){
var effect = chunk__33467.cljs$core$IIndexed$_nth$arity$2(null,i__33469);
re_frame.fx.dispatch_later(effect);


var G__33560 = seq__33466;
var G__33561 = chunk__33467;
var G__33562 = count__33468;
var G__33563 = (i__33469 + (1));
seq__33466 = G__33560;
chunk__33467 = G__33561;
count__33468 = G__33562;
i__33469 = G__33563;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33466);
if(temp__5753__auto__){
var seq__33466__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33466__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33466__$1);
var G__33564 = cljs.core.chunk_rest(seq__33466__$1);
var G__33565 = c__4638__auto__;
var G__33566 = cljs.core.count(c__4638__auto__);
var G__33567 = (0);
seq__33466 = G__33564;
chunk__33467 = G__33565;
count__33468 = G__33566;
i__33469 = G__33567;
continue;
} else {
var effect = cljs.core.first(seq__33466__$1);
re_frame.fx.dispatch_later(effect);


var G__33568 = cljs.core.next(seq__33466__$1);
var G__33569 = null;
var G__33570 = (0);
var G__33571 = (0);
seq__33466 = G__33568;
chunk__33467 = G__33569;
count__33468 = G__33570;
i__33469 = G__33571;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__33481 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__33482 = null;
var count__33483 = (0);
var i__33484 = (0);
while(true){
if((i__33484 < count__33483)){
var vec__33494 = chunk__33482.cljs$core$IIndexed$_nth$arity$2(null,i__33484);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33494,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33494,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___33576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33576)){
var effect_fn_33577 = temp__5751__auto___33576;
(effect_fn_33577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33579 = seq__33481;
var G__33580 = chunk__33482;
var G__33581 = count__33483;
var G__33582 = (i__33484 + (1));
seq__33481 = G__33579;
chunk__33482 = G__33580;
count__33483 = G__33581;
i__33484 = G__33582;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33481);
if(temp__5753__auto__){
var seq__33481__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33481__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33481__$1);
var G__33585 = cljs.core.chunk_rest(seq__33481__$1);
var G__33586 = c__4638__auto__;
var G__33587 = cljs.core.count(c__4638__auto__);
var G__33588 = (0);
seq__33481 = G__33585;
chunk__33482 = G__33586;
count__33483 = G__33587;
i__33484 = G__33588;
continue;
} else {
var vec__33497 = cljs.core.first(seq__33481__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___33590 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33590)){
var effect_fn_33591 = temp__5751__auto___33590;
(effect_fn_33591.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33591.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33591.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33592 = cljs.core.next(seq__33481__$1);
var G__33593 = null;
var G__33594 = (0);
var G__33595 = (0);
seq__33481 = G__33592;
chunk__33482 = G__33593;
count__33483 = G__33594;
i__33484 = G__33595;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__33500 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33501 = null;
var count__33502 = (0);
var i__33503 = (0);
while(true){
if((i__33503 < count__33502)){
var event = chunk__33501.cljs$core$IIndexed$_nth$arity$2(null,i__33503);
re_frame.router.dispatch(event);


var G__33599 = seq__33500;
var G__33600 = chunk__33501;
var G__33601 = count__33502;
var G__33602 = (i__33503 + (1));
seq__33500 = G__33599;
chunk__33501 = G__33600;
count__33502 = G__33601;
i__33503 = G__33602;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33500);
if(temp__5753__auto__){
var seq__33500__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33500__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33500__$1);
var G__33604 = cljs.core.chunk_rest(seq__33500__$1);
var G__33605 = c__4638__auto__;
var G__33606 = cljs.core.count(c__4638__auto__);
var G__33607 = (0);
seq__33500 = G__33604;
chunk__33501 = G__33605;
count__33502 = G__33606;
i__33503 = G__33607;
continue;
} else {
var event = cljs.core.first(seq__33500__$1);
re_frame.router.dispatch(event);


var G__33608 = cljs.core.next(seq__33500__$1);
var G__33609 = null;
var G__33610 = (0);
var G__33611 = (0);
seq__33500 = G__33608;
chunk__33501 = G__33609;
count__33502 = G__33610;
i__33503 = G__33611;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__33506 = cljs.core.seq(value);
var chunk__33507 = null;
var count__33508 = (0);
var i__33509 = (0);
while(true){
if((i__33509 < count__33508)){
var event = chunk__33507.cljs$core$IIndexed$_nth$arity$2(null,i__33509);
clear_event(event);


var G__33612 = seq__33506;
var G__33613 = chunk__33507;
var G__33614 = count__33508;
var G__33615 = (i__33509 + (1));
seq__33506 = G__33612;
chunk__33507 = G__33613;
count__33508 = G__33614;
i__33509 = G__33615;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33506);
if(temp__5753__auto__){
var seq__33506__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33506__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33506__$1);
var G__33616 = cljs.core.chunk_rest(seq__33506__$1);
var G__33617 = c__4638__auto__;
var G__33618 = cljs.core.count(c__4638__auto__);
var G__33619 = (0);
seq__33506 = G__33616;
chunk__33507 = G__33617;
count__33508 = G__33618;
i__33509 = G__33619;
continue;
} else {
var event = cljs.core.first(seq__33506__$1);
clear_event(event);


var G__33621 = cljs.core.next(seq__33506__$1);
var G__33622 = null;
var G__33623 = (0);
var G__33624 = (0);
seq__33506 = G__33621;
chunk__33507 = G__33622;
count__33508 = G__33623;
i__33509 = G__33624;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
