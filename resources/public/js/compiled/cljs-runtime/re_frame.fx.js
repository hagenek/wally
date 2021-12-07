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
var _STAR_current_trace_STAR__orig_val__41126 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41127 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41127);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___41235 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___41235)){
var new_db_41236 = temp__5753__auto___41235;
var fexpr__41131_41237 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41131_41237.cljs$core$IFn$_invoke$arity$1 ? fexpr__41131_41237.cljs$core$IFn$_invoke$arity$1(new_db_41236) : fexpr__41131_41237.call(null,new_db_41236));
} else {
}

var seq__41132 = cljs.core.seq(effects_without_db);
var chunk__41133 = null;
var count__41134 = (0);
var i__41135 = (0);
while(true){
if((i__41135 < count__41134)){
var vec__41147 = chunk__41133.cljs$core$IIndexed$_nth$arity$2(null,i__41135);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41147,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41147,(1),null);
var temp__5751__auto___41238 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41238)){
var effect_fn_41239 = temp__5751__auto___41238;
(effect_fn_41239.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41239.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41239.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41240 = seq__41132;
var G__41241 = chunk__41133;
var G__41242 = count__41134;
var G__41243 = (i__41135 + (1));
seq__41132 = G__41240;
chunk__41133 = G__41241;
count__41134 = G__41242;
i__41135 = G__41243;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41132);
if(temp__5753__auto__){
var seq__41132__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41132__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41132__$1);
var G__41244 = cljs.core.chunk_rest(seq__41132__$1);
var G__41245 = c__4638__auto__;
var G__41246 = cljs.core.count(c__4638__auto__);
var G__41247 = (0);
seq__41132 = G__41244;
chunk__41133 = G__41245;
count__41134 = G__41246;
i__41135 = G__41247;
continue;
} else {
var vec__41155 = cljs.core.first(seq__41132__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41155,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41155,(1),null);
var temp__5751__auto___41248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41248)){
var effect_fn_41249 = temp__5751__auto___41248;
(effect_fn_41249.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41249.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41249.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41250 = cljs.core.next(seq__41132__$1);
var G__41251 = null;
var G__41252 = (0);
var G__41253 = (0);
seq__41132 = G__41250;
chunk__41133 = G__41251;
count__41134 = G__41252;
i__41135 = G__41253;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40822__auto___41254 = re_frame.interop.now();
var duration__40823__auto___41255 = (end__40822__auto___41254 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40823__auto___41255,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40822__auto___41254);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41126);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___41256 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___41256)){
var new_db_41257 = temp__5753__auto___41256;
var fexpr__41161_41258 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41161_41258.cljs$core$IFn$_invoke$arity$1 ? fexpr__41161_41258.cljs$core$IFn$_invoke$arity$1(new_db_41257) : fexpr__41161_41258.call(null,new_db_41257));
} else {
}

var seq__41162 = cljs.core.seq(effects_without_db);
var chunk__41163 = null;
var count__41164 = (0);
var i__41165 = (0);
while(true){
if((i__41165 < count__41164)){
var vec__41176 = chunk__41163.cljs$core$IIndexed$_nth$arity$2(null,i__41165);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41176,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41176,(1),null);
var temp__5751__auto___41259 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41259)){
var effect_fn_41260 = temp__5751__auto___41259;
(effect_fn_41260.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41260.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41260.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41261 = seq__41162;
var G__41262 = chunk__41163;
var G__41263 = count__41164;
var G__41264 = (i__41165 + (1));
seq__41162 = G__41261;
chunk__41163 = G__41262;
count__41164 = G__41263;
i__41165 = G__41264;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41162);
if(temp__5753__auto__){
var seq__41162__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41162__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41162__$1);
var G__41265 = cljs.core.chunk_rest(seq__41162__$1);
var G__41266 = c__4638__auto__;
var G__41267 = cljs.core.count(c__4638__auto__);
var G__41268 = (0);
seq__41162 = G__41265;
chunk__41163 = G__41266;
count__41164 = G__41267;
i__41165 = G__41268;
continue;
} else {
var vec__41181 = cljs.core.first(seq__41162__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41181,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41181,(1),null);
var temp__5751__auto___41269 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41269)){
var effect_fn_41270 = temp__5751__auto___41269;
(effect_fn_41270.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41270.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41270.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41271 = cljs.core.next(seq__41162__$1);
var G__41272 = null;
var G__41273 = (0);
var G__41274 = (0);
seq__41162 = G__41271;
chunk__41163 = G__41272;
count__41164 = G__41273;
i__41165 = G__41274;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__41190){
var map__41193 = p__41190;
var map__41193__$1 = cljs.core.__destructure_map(map__41193);
var effect = map__41193__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41193__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41193__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__41195 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41196 = null;
var count__41197 = (0);
var i__41198 = (0);
while(true){
if((i__41198 < count__41197)){
var effect = chunk__41196.cljs$core$IIndexed$_nth$arity$2(null,i__41198);
re_frame.fx.dispatch_later(effect);


var G__41287 = seq__41195;
var G__41288 = chunk__41196;
var G__41289 = count__41197;
var G__41290 = (i__41198 + (1));
seq__41195 = G__41287;
chunk__41196 = G__41288;
count__41197 = G__41289;
i__41198 = G__41290;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41195);
if(temp__5753__auto__){
var seq__41195__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41195__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41195__$1);
var G__41291 = cljs.core.chunk_rest(seq__41195__$1);
var G__41292 = c__4638__auto__;
var G__41293 = cljs.core.count(c__4638__auto__);
var G__41294 = (0);
seq__41195 = G__41291;
chunk__41196 = G__41292;
count__41197 = G__41293;
i__41198 = G__41294;
continue;
} else {
var effect = cljs.core.first(seq__41195__$1);
re_frame.fx.dispatch_later(effect);


var G__41295 = cljs.core.next(seq__41195__$1);
var G__41296 = null;
var G__41297 = (0);
var G__41298 = (0);
seq__41195 = G__41295;
chunk__41196 = G__41296;
count__41197 = G__41297;
i__41198 = G__41298;
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
var seq__41203 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__41204 = null;
var count__41205 = (0);
var i__41206 = (0);
while(true){
if((i__41206 < count__41205)){
var vec__41213 = chunk__41204.cljs$core$IIndexed$_nth$arity$2(null,i__41206);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41213,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41213,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___41299 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41299)){
var effect_fn_41300 = temp__5751__auto___41299;
(effect_fn_41300.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41300.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41300.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41301 = seq__41203;
var G__41302 = chunk__41204;
var G__41303 = count__41205;
var G__41304 = (i__41206 + (1));
seq__41203 = G__41301;
chunk__41204 = G__41302;
count__41205 = G__41303;
i__41206 = G__41304;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41203);
if(temp__5753__auto__){
var seq__41203__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41203__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41203__$1);
var G__41305 = cljs.core.chunk_rest(seq__41203__$1);
var G__41306 = c__4638__auto__;
var G__41307 = cljs.core.count(c__4638__auto__);
var G__41308 = (0);
seq__41203 = G__41305;
chunk__41204 = G__41306;
count__41205 = G__41307;
i__41206 = G__41308;
continue;
} else {
var vec__41217 = cljs.core.first(seq__41203__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___41309 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41309)){
var effect_fn_41310 = temp__5751__auto___41309;
(effect_fn_41310.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41310.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41310.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41311 = cljs.core.next(seq__41203__$1);
var G__41312 = null;
var G__41313 = (0);
var G__41314 = (0);
seq__41203 = G__41311;
chunk__41204 = G__41312;
count__41205 = G__41313;
i__41206 = G__41314;
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
var seq__41226 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41227 = null;
var count__41228 = (0);
var i__41229 = (0);
while(true){
if((i__41229 < count__41228)){
var event = chunk__41227.cljs$core$IIndexed$_nth$arity$2(null,i__41229);
re_frame.router.dispatch(event);


var G__41315 = seq__41226;
var G__41316 = chunk__41227;
var G__41317 = count__41228;
var G__41318 = (i__41229 + (1));
seq__41226 = G__41315;
chunk__41227 = G__41316;
count__41228 = G__41317;
i__41229 = G__41318;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41226);
if(temp__5753__auto__){
var seq__41226__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41226__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41226__$1);
var G__41319 = cljs.core.chunk_rest(seq__41226__$1);
var G__41320 = c__4638__auto__;
var G__41321 = cljs.core.count(c__4638__auto__);
var G__41322 = (0);
seq__41226 = G__41319;
chunk__41227 = G__41320;
count__41228 = G__41321;
i__41229 = G__41322;
continue;
} else {
var event = cljs.core.first(seq__41226__$1);
re_frame.router.dispatch(event);


var G__41323 = cljs.core.next(seq__41226__$1);
var G__41324 = null;
var G__41325 = (0);
var G__41326 = (0);
seq__41226 = G__41323;
chunk__41227 = G__41324;
count__41228 = G__41325;
i__41229 = G__41326;
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
var seq__41231 = cljs.core.seq(value);
var chunk__41232 = null;
var count__41233 = (0);
var i__41234 = (0);
while(true){
if((i__41234 < count__41233)){
var event = chunk__41232.cljs$core$IIndexed$_nth$arity$2(null,i__41234);
clear_event(event);


var G__41327 = seq__41231;
var G__41328 = chunk__41232;
var G__41329 = count__41233;
var G__41330 = (i__41234 + (1));
seq__41231 = G__41327;
chunk__41232 = G__41328;
count__41233 = G__41329;
i__41234 = G__41330;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41231);
if(temp__5753__auto__){
var seq__41231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41231__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41231__$1);
var G__41331 = cljs.core.chunk_rest(seq__41231__$1);
var G__41332 = c__4638__auto__;
var G__41333 = cljs.core.count(c__4638__auto__);
var G__41334 = (0);
seq__41231 = G__41331;
chunk__41232 = G__41332;
count__41233 = G__41333;
i__41234 = G__41334;
continue;
} else {
var event = cljs.core.first(seq__41231__$1);
clear_event(event);


var G__41335 = cljs.core.next(seq__41231__$1);
var G__41336 = null;
var G__41337 = (0);
var G__41338 = (0);
seq__41231 = G__41335;
chunk__41232 = G__41336;
count__41233 = G__41337;
i__41234 = G__41338;
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
