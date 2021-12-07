goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52159){
var map__52160 = p__52159;
var map__52160__$1 = cljs.core.__destructure_map(map__52160);
var m = map__52160__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52161_52347 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52162_52348 = null;
var count__52163_52349 = (0);
var i__52164_52350 = (0);
while(true){
if((i__52164_52350 < count__52163_52349)){
var f_52351 = chunk__52162_52348.cljs$core$IIndexed$_nth$arity$2(null,i__52164_52350);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52351], 0));


var G__52352 = seq__52161_52347;
var G__52353 = chunk__52162_52348;
var G__52354 = count__52163_52349;
var G__52355 = (i__52164_52350 + (1));
seq__52161_52347 = G__52352;
chunk__52162_52348 = G__52353;
count__52163_52349 = G__52354;
i__52164_52350 = G__52355;
continue;
} else {
var temp__5753__auto___52356 = cljs.core.seq(seq__52161_52347);
if(temp__5753__auto___52356){
var seq__52161_52357__$1 = temp__5753__auto___52356;
if(cljs.core.chunked_seq_QMARK_(seq__52161_52357__$1)){
var c__4638__auto___52358 = cljs.core.chunk_first(seq__52161_52357__$1);
var G__52359 = cljs.core.chunk_rest(seq__52161_52357__$1);
var G__52360 = c__4638__auto___52358;
var G__52361 = cljs.core.count(c__4638__auto___52358);
var G__52362 = (0);
seq__52161_52347 = G__52359;
chunk__52162_52348 = G__52360;
count__52163_52349 = G__52361;
i__52164_52350 = G__52362;
continue;
} else {
var f_52363 = cljs.core.first(seq__52161_52357__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52363], 0));


var G__52364 = cljs.core.next(seq__52161_52357__$1);
var G__52365 = null;
var G__52366 = (0);
var G__52367 = (0);
seq__52161_52347 = G__52364;
chunk__52162_52348 = G__52365;
count__52163_52349 = G__52366;
i__52164_52350 = G__52367;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52368 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52368], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52368)))?cljs.core.second(arglists_52368):arglists_52368)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52188_52369 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52189_52370 = null;
var count__52190_52371 = (0);
var i__52191_52372 = (0);
while(true){
if((i__52191_52372 < count__52190_52371)){
var vec__52204_52373 = chunk__52189_52370.cljs$core$IIndexed$_nth$arity$2(null,i__52191_52372);
var name_52374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52204_52373,(0),null);
var map__52207_52375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52204_52373,(1),null);
var map__52207_52376__$1 = cljs.core.__destructure_map(map__52207_52375);
var doc_52377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52207_52376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52207_52376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52374], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52378], 0));

if(cljs.core.truth_(doc_52377)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52377], 0));
} else {
}


var G__52379 = seq__52188_52369;
var G__52380 = chunk__52189_52370;
var G__52381 = count__52190_52371;
var G__52382 = (i__52191_52372 + (1));
seq__52188_52369 = G__52379;
chunk__52189_52370 = G__52380;
count__52190_52371 = G__52381;
i__52191_52372 = G__52382;
continue;
} else {
var temp__5753__auto___52383 = cljs.core.seq(seq__52188_52369);
if(temp__5753__auto___52383){
var seq__52188_52384__$1 = temp__5753__auto___52383;
if(cljs.core.chunked_seq_QMARK_(seq__52188_52384__$1)){
var c__4638__auto___52385 = cljs.core.chunk_first(seq__52188_52384__$1);
var G__52386 = cljs.core.chunk_rest(seq__52188_52384__$1);
var G__52387 = c__4638__auto___52385;
var G__52388 = cljs.core.count(c__4638__auto___52385);
var G__52389 = (0);
seq__52188_52369 = G__52386;
chunk__52189_52370 = G__52387;
count__52190_52371 = G__52388;
i__52191_52372 = G__52389;
continue;
} else {
var vec__52210_52390 = cljs.core.first(seq__52188_52384__$1);
var name_52391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52210_52390,(0),null);
var map__52213_52392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52210_52390,(1),null);
var map__52213_52393__$1 = cljs.core.__destructure_map(map__52213_52392);
var doc_52394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52213_52393__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52213_52393__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52391], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52395], 0));

if(cljs.core.truth_(doc_52394)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52394], 0));
} else {
}


var G__52406 = cljs.core.next(seq__52188_52384__$1);
var G__52407 = null;
var G__52408 = (0);
var G__52409 = (0);
seq__52188_52369 = G__52406;
chunk__52189_52370 = G__52407;
count__52190_52371 = G__52408;
i__52191_52372 = G__52409;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52219 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52220 = null;
var count__52221 = (0);
var i__52222 = (0);
while(true){
if((i__52222 < count__52221)){
var role = chunk__52220.cljs$core$IIndexed$_nth$arity$2(null,i__52222);
var temp__5753__auto___52410__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52410__$1)){
var spec_52411 = temp__5753__auto___52410__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52411)], 0));
} else {
}


var G__52412 = seq__52219;
var G__52413 = chunk__52220;
var G__52414 = count__52221;
var G__52415 = (i__52222 + (1));
seq__52219 = G__52412;
chunk__52220 = G__52413;
count__52221 = G__52414;
i__52222 = G__52415;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52219);
if(temp__5753__auto____$1){
var seq__52219__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52219__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52219__$1);
var G__52416 = cljs.core.chunk_rest(seq__52219__$1);
var G__52417 = c__4638__auto__;
var G__52418 = cljs.core.count(c__4638__auto__);
var G__52419 = (0);
seq__52219 = G__52416;
chunk__52220 = G__52417;
count__52221 = G__52418;
i__52222 = G__52419;
continue;
} else {
var role = cljs.core.first(seq__52219__$1);
var temp__5753__auto___52420__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52420__$2)){
var spec_52421 = temp__5753__auto___52420__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52421)], 0));
} else {
}


var G__52422 = cljs.core.next(seq__52219__$1);
var G__52423 = null;
var G__52424 = (0);
var G__52425 = (0);
seq__52219 = G__52422;
chunk__52220 = G__52423;
count__52221 = G__52424;
i__52222 = G__52425;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__52426 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52427 = cljs.core.ex_cause(t);
via = G__52426;
t = G__52427;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52243 = datafied_throwable;
var map__52243__$1 = cljs.core.__destructure_map(map__52243);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52243__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52243__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52243__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52244 = cljs.core.last(via);
var map__52244__$1 = cljs.core.__destructure_map(map__52244);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52245 = data;
var map__52245__$1 = cljs.core.__destructure_map(map__52245);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52246 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52246__$1 = cljs.core.__destructure_map(map__52246);
var top_data = map__52246__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52247 = phase;
var G__52247__$1 = (((G__52247 instanceof cljs.core.Keyword))?G__52247.fqn:null);
switch (G__52247__$1) {
case "read-source":
var map__52248 = data;
var map__52248__$1 = cljs.core.__destructure_map(map__52248);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52248__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52248__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52250 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52250__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52250,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52250);
var G__52250__$2 = (cljs.core.truth_((function (){var fexpr__52251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52251.cljs$core$IFn$_invoke$arity$1 ? fexpr__52251.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52251.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52250__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52250__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52250__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52252 = top_data;
var G__52252__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52252,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52252);
var G__52252__$2 = (cljs.core.truth_((function (){var fexpr__52253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52253.cljs$core$IFn$_invoke$arity$1 ? fexpr__52253.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52253.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52252__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52252__$1);
var G__52252__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52252__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52252__$2);
var G__52252__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52252__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52252__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52252__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52252__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52257 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52257,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52257,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52257,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52257,(3),null);
var G__52260 = top_data;
var G__52260__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52260,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52260);
var G__52260__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52260__$1);
var G__52260__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52260__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52260__$2);
var G__52260__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52260__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52260__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52260__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52260__$4;
}

break;
case "execution":
var vec__52281 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52281,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52281,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52281,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52281,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52242_SHARP_){
var or__4212__auto__ = (p1__52242_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__52284 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52284.cljs$core$IFn$_invoke$arity$1 ? fexpr__52284.cljs$core$IFn$_invoke$arity$1(p1__52242_SHARP_) : fexpr__52284.call(null,p1__52242_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__52285 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52285__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52285,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52285);
var G__52285__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52285__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52285__$1);
var G__52285__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52285__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52285__$2);
var G__52285__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52285__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52285__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52285__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52285__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52247__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52296){
var map__52297 = p__52296;
var map__52297__$1 = cljs.core.__destructure_map(map__52297);
var triage_data = map__52297__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52310 = phase;
var G__52310__$1 = (((G__52310 instanceof cljs.core.Keyword))?G__52310.fqn:null);
switch (G__52310__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52311 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52312 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52313 = loc;
var G__52314 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52315_52440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52316_52441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52317_52442 = true;
var _STAR_print_fn_STAR__temp_val__52318_52443 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52317_52442);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52318_52443);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52286_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52286_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52316_52441);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52315_52440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52311,G__52312,G__52313,G__52314) : format.call(null,G__52311,G__52312,G__52313,G__52314));

break;
case "macroexpansion":
var G__52319 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52320 = cause_type;
var G__52321 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52322 = loc;
var G__52323 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52319,G__52320,G__52321,G__52322,G__52323) : format.call(null,G__52319,G__52320,G__52321,G__52322,G__52323));

break;
case "compile-syntax-check":
var G__52324 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52325 = cause_type;
var G__52326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52327 = loc;
var G__52328 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52324,G__52325,G__52326,G__52327,G__52328) : format.call(null,G__52324,G__52325,G__52326,G__52327,G__52328));

break;
case "compilation":
var G__52329 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52330 = cause_type;
var G__52331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52332 = loc;
var G__52333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52329,G__52330,G__52331,G__52332,G__52333) : format.call(null,G__52329,G__52330,G__52331,G__52332,G__52333));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52334 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52335 = symbol;
var G__52336 = loc;
var G__52337 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52338_52448 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52339_52449 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52340_52450 = true;
var _STAR_print_fn_STAR__temp_val__52341_52451 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52340_52450);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52341_52451);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52287_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52287_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52339_52449);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52338_52448);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52334,G__52335,G__52336,G__52337) : format.call(null,G__52334,G__52335,G__52336,G__52337));
} else {
var G__52342 = "Execution error%s at %s(%s).\n%s\n";
var G__52343 = cause_type;
var G__52344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52345 = loc;
var G__52346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52342,G__52343,G__52344,G__52345,G__52346) : format.call(null,G__52342,G__52343,G__52344,G__52345,G__52346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52310__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
