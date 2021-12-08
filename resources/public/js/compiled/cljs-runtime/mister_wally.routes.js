goog.provide('mister_wally.routes');
if((typeof mister_wally !== 'undefined') && (typeof mister_wally.routes !== 'undefined') && (typeof mister_wally.routes.panels !== 'undefined')){
} else {
mister_wally.routes.panels = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47341 = cljs.core.get_global_hierarchy;
return (fexpr__47341.cljs$core$IFn$_invoke$arity$0 ? fexpr__47341.cljs$core$IFn$_invoke$arity$0() : fexpr__47341.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("mister-wally.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
mister_wally.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
mister_wally.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543),"login",new cljs.core.Keyword(null,"login","login",55217519)], null)], null));
mister_wally.routes.parse = (function mister_wally$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(mister_wally.routes.routes),url);
});
mister_wally.routes.url_for = (function mister_wally$routes$url_for(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47343 = arguments.length;
var i__4819__auto___47344 = (0);
while(true){
if((i__4819__auto___47344 < len__4818__auto___47343)){
args__4824__auto__.push((arguments[i__4819__auto___47344]));

var G__47345 = (i__4819__auto___47344 + (1));
i__4819__auto___47344 = G__47345;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return mister_wally.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(mister_wally.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(mister_wally.routes.routes)], null),args));
}));

(mister_wally.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mister_wally.routes.url_for.cljs$lang$applyTo = (function (seq47342){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47342));
}));

mister_wally.routes.dispatch = (function mister_wally$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mister-wally.events","set-active-panel","mister-wally.events/set-active-panel",1230923879),panel], null));
});
if((typeof mister_wally !== 'undefined') && (typeof mister_wally.routes !== 'undefined') && (typeof mister_wally.routes.history !== 'undefined')){
} else {
mister_wally.routes.history = pushy.core.pushy(mister_wally.routes.dispatch,mister_wally.routes.parse);
}
mister_wally.routes.navigate_BANG_ = (function mister_wally$routes$navigate_BANG_(handler){
return mister_wally.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,mister_wally.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
mister_wally.routes.start_BANG_ = (function mister_wally$routes$start_BANG_(){
return mister_wally.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return mister_wally.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=mister_wally.routes.js.map
