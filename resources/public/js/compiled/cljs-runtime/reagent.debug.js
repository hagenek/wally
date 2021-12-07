goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40257__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40258__i = 0, G__40258__a = new Array(arguments.length -  0);
while (G__40258__i < G__40258__a.length) {G__40258__a[G__40258__i] = arguments[G__40258__i + 0]; ++G__40258__i;}
  args = new cljs.core.IndexedSeq(G__40258__a,0,null);
} 
return G__40257__delegate.call(this,args);};
G__40257.cljs$lang$maxFixedArity = 0;
G__40257.cljs$lang$applyTo = (function (arglist__40259){
var args = cljs.core.seq(arglist__40259);
return G__40257__delegate(args);
});
G__40257.cljs$core$IFn$_invoke$arity$variadic = G__40257__delegate;
return G__40257;
})()
);

(o.error = (function() { 
var G__40260__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40261__i = 0, G__40261__a = new Array(arguments.length -  0);
while (G__40261__i < G__40261__a.length) {G__40261__a[G__40261__i] = arguments[G__40261__i + 0]; ++G__40261__i;}
  args = new cljs.core.IndexedSeq(G__40261__a,0,null);
} 
return G__40260__delegate.call(this,args);};
G__40260.cljs$lang$maxFixedArity = 0;
G__40260.cljs$lang$applyTo = (function (arglist__40262){
var args = cljs.core.seq(arglist__40262);
return G__40260__delegate(args);
});
G__40260.cljs$core$IFn$_invoke$arity$variadic = G__40260__delegate;
return G__40260;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
