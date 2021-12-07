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
var _STAR_current_trace_STAR__orig_val__37780 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37781 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37781);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37882 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37882)){
var new_db_37883 = temp__5753__auto___37882;
var fexpr__37783_37884 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37783_37884.cljs$core$IFn$_invoke$arity$1 ? fexpr__37783_37884.cljs$core$IFn$_invoke$arity$1(new_db_37883) : fexpr__37783_37884.call(null,new_db_37883));
} else {
}

var seq__37785 = cljs.core.seq(effects_without_db);
var chunk__37786 = null;
var count__37787 = (0);
var i__37788 = (0);
while(true){
if((i__37788 < count__37787)){
var vec__37798 = chunk__37786.cljs$core$IIndexed$_nth$arity$2(null,i__37788);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37798,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37798,(1),null);
var temp__5751__auto___37885 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37885)){
var effect_fn_37886 = temp__5751__auto___37885;
(effect_fn_37886.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37886.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37886.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37887 = seq__37785;
var G__37888 = chunk__37786;
var G__37889 = count__37787;
var G__37890 = (i__37788 + (1));
seq__37785 = G__37887;
chunk__37786 = G__37888;
count__37787 = G__37889;
i__37788 = G__37890;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37785);
if(temp__5753__auto__){
var seq__37785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37785__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37785__$1);
var G__37891 = cljs.core.chunk_rest(seq__37785__$1);
var G__37892 = c__4638__auto__;
var G__37893 = cljs.core.count(c__4638__auto__);
var G__37894 = (0);
seq__37785 = G__37891;
chunk__37786 = G__37892;
count__37787 = G__37893;
i__37788 = G__37894;
continue;
} else {
var vec__37802 = cljs.core.first(seq__37785__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37802,(1),null);
var temp__5751__auto___37895 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37895)){
var effect_fn_37896 = temp__5751__auto___37895;
(effect_fn_37896.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37896.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37896.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37897 = cljs.core.next(seq__37785__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37785 = G__37897;
chunk__37786 = G__37898;
count__37787 = G__37899;
i__37788 = G__37900;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__37507__auto___37901 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__37508__auto___37902 = (end__37507__auto___37901 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37508__auto___37902,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__37507__auto___37901);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37780);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37903 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37903)){
var new_db_37904 = temp__5753__auto___37903;
var fexpr__37805_37905 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37805_37905.cljs$core$IFn$_invoke$arity$1 ? fexpr__37805_37905.cljs$core$IFn$_invoke$arity$1(new_db_37904) : fexpr__37805_37905.call(null,new_db_37904));
} else {
}

var seq__37806 = cljs.core.seq(effects_without_db);
var chunk__37807 = null;
var count__37808 = (0);
var i__37809 = (0);
while(true){
if((i__37809 < count__37808)){
var vec__37816 = chunk__37807.cljs$core$IIndexed$_nth$arity$2(null,i__37809);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37816,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37816,(1),null);
var temp__5751__auto___37906 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37906)){
var effect_fn_37907 = temp__5751__auto___37906;
(effect_fn_37907.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37907.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37907.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37908 = seq__37806;
var G__37909 = chunk__37807;
var G__37910 = count__37808;
var G__37911 = (i__37809 + (1));
seq__37806 = G__37908;
chunk__37807 = G__37909;
count__37808 = G__37910;
i__37809 = G__37911;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37806);
if(temp__5753__auto__){
var seq__37806__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37806__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37806__$1);
var G__37912 = cljs.core.chunk_rest(seq__37806__$1);
var G__37913 = c__4638__auto__;
var G__37914 = cljs.core.count(c__4638__auto__);
var G__37915 = (0);
seq__37806 = G__37912;
chunk__37807 = G__37913;
count__37808 = G__37914;
i__37809 = G__37915;
continue;
} else {
var vec__37822 = cljs.core.first(seq__37806__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37822,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37822,(1),null);
var temp__5751__auto___37916 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37916)){
var effect_fn_37917 = temp__5751__auto___37916;
(effect_fn_37917.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37917.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37917.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37918 = cljs.core.next(seq__37806__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__37806 = G__37918;
chunk__37807 = G__37919;
count__37808 = G__37920;
i__37809 = G__37921;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__37828){
var map__37829 = p__37828;
var map__37829__$1 = cljs.core.__destructure_map(map__37829);
var effect = map__37829__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37830 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37831 = null;
var count__37832 = (0);
var i__37833 = (0);
while(true){
if((i__37833 < count__37832)){
var effect = chunk__37831.cljs$core$IIndexed$_nth$arity$2(null,i__37833);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__37922 = seq__37830;
var G__37923 = chunk__37831;
var G__37924 = count__37832;
var G__37925 = (i__37833 + (1));
seq__37830 = G__37922;
chunk__37831 = G__37923;
count__37832 = G__37924;
i__37833 = G__37925;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37830);
if(temp__5753__auto__){
var seq__37830__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37830__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37830__$1);
var G__37926 = cljs.core.chunk_rest(seq__37830__$1);
var G__37927 = c__4638__auto__;
var G__37928 = cljs.core.count(c__4638__auto__);
var G__37929 = (0);
seq__37830 = G__37926;
chunk__37831 = G__37927;
count__37832 = G__37928;
i__37833 = G__37929;
continue;
} else {
var effect = cljs.core.first(seq__37830__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__37930 = cljs.core.next(seq__37830__$1);
var G__37931 = null;
var G__37932 = (0);
var G__37933 = (0);
seq__37830 = G__37930;
chunk__37831 = G__37931;
count__37832 = G__37932;
i__37833 = G__37933;
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
var seq__37837 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37838 = null;
var count__37839 = (0);
var i__37840 = (0);
while(true){
if((i__37840 < count__37839)){
var vec__37848 = chunk__37838.cljs$core$IIndexed$_nth$arity$2(null,i__37840);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37848,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37848,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___37934 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37934)){
var effect_fn_37935 = temp__5751__auto___37934;
(effect_fn_37935.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37935.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37935.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37936 = seq__37837;
var G__37937 = chunk__37838;
var G__37938 = count__37839;
var G__37939 = (i__37840 + (1));
seq__37837 = G__37936;
chunk__37838 = G__37937;
count__37839 = G__37938;
i__37840 = G__37939;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37837);
if(temp__5753__auto__){
var seq__37837__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37837__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37837__$1);
var G__37940 = cljs.core.chunk_rest(seq__37837__$1);
var G__37941 = c__4638__auto__;
var G__37942 = cljs.core.count(c__4638__auto__);
var G__37943 = (0);
seq__37837 = G__37940;
chunk__37838 = G__37941;
count__37839 = G__37942;
i__37840 = G__37943;
continue;
} else {
var vec__37853 = cljs.core.first(seq__37837__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37853,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37853,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___37944 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37944)){
var effect_fn_37945 = temp__5751__auto___37944;
(effect_fn_37945.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37945.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37945.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37946 = cljs.core.next(seq__37837__$1);
var G__37947 = null;
var G__37948 = (0);
var G__37949 = (0);
seq__37837 = G__37946;
chunk__37838 = G__37947;
count__37839 = G__37948;
i__37840 = G__37949;
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
var seq__37858 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37859 = null;
var count__37860 = (0);
var i__37861 = (0);
while(true){
if((i__37861 < count__37860)){
var event = chunk__37859.cljs$core$IIndexed$_nth$arity$2(null,i__37861);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__37950 = seq__37858;
var G__37951 = chunk__37859;
var G__37952 = count__37860;
var G__37953 = (i__37861 + (1));
seq__37858 = G__37950;
chunk__37859 = G__37951;
count__37860 = G__37952;
i__37861 = G__37953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37858);
if(temp__5753__auto__){
var seq__37858__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37858__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37858__$1);
var G__37954 = cljs.core.chunk_rest(seq__37858__$1);
var G__37955 = c__4638__auto__;
var G__37956 = cljs.core.count(c__4638__auto__);
var G__37957 = (0);
seq__37858 = G__37954;
chunk__37859 = G__37955;
count__37860 = G__37956;
i__37861 = G__37957;
continue;
} else {
var event = cljs.core.first(seq__37858__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__37958 = cljs.core.next(seq__37858__$1);
var G__37959 = null;
var G__37960 = (0);
var G__37961 = (0);
seq__37858 = G__37958;
chunk__37859 = G__37959;
count__37860 = G__37960;
i__37861 = G__37961;
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
var seq__37878 = cljs.core.seq(value);
var chunk__37879 = null;
var count__37880 = (0);
var i__37881 = (0);
while(true){
if((i__37881 < count__37880)){
var event = chunk__37879.cljs$core$IIndexed$_nth$arity$2(null,i__37881);
clear_event(event);


var G__37962 = seq__37878;
var G__37963 = chunk__37879;
var G__37964 = count__37880;
var G__37965 = (i__37881 + (1));
seq__37878 = G__37962;
chunk__37879 = G__37963;
count__37880 = G__37964;
i__37881 = G__37965;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37878);
if(temp__5753__auto__){
var seq__37878__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37878__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37878__$1);
var G__37966 = cljs.core.chunk_rest(seq__37878__$1);
var G__37967 = c__4638__auto__;
var G__37968 = cljs.core.count(c__4638__auto__);
var G__37969 = (0);
seq__37878 = G__37966;
chunk__37879 = G__37967;
count__37880 = G__37968;
i__37881 = G__37969;
continue;
} else {
var event = cljs.core.first(seq__37878__$1);
clear_event(event);


var G__37970 = cljs.core.next(seq__37878__$1);
var G__37971 = null;
var G__37972 = (0);
var G__37973 = (0);
seq__37878 = G__37970;
chunk__37879 = G__37971;
count__37880 = G__37972;
i__37881 = G__37973;
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
