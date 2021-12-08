goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42695){
var map__42696 = p__42695;
var map__42696__$1 = cljs.core.__destructure_map(map__42696);
var m = map__42696__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42700_42874 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42701_42875 = null;
var count__42702_42876 = (0);
var i__42703_42877 = (0);
while(true){
if((i__42703_42877 < count__42702_42876)){
var f_42878 = chunk__42701_42875.cljs$core$IIndexed$_nth$arity$2(null,i__42703_42877);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42878], 0));


var G__42879 = seq__42700_42874;
var G__42880 = chunk__42701_42875;
var G__42881 = count__42702_42876;
var G__42882 = (i__42703_42877 + (1));
seq__42700_42874 = G__42879;
chunk__42701_42875 = G__42880;
count__42702_42876 = G__42881;
i__42703_42877 = G__42882;
continue;
} else {
var temp__5753__auto___42883 = cljs.core.seq(seq__42700_42874);
if(temp__5753__auto___42883){
var seq__42700_42884__$1 = temp__5753__auto___42883;
if(cljs.core.chunked_seq_QMARK_(seq__42700_42884__$1)){
var c__4638__auto___42885 = cljs.core.chunk_first(seq__42700_42884__$1);
var G__42886 = cljs.core.chunk_rest(seq__42700_42884__$1);
var G__42887 = c__4638__auto___42885;
var G__42888 = cljs.core.count(c__4638__auto___42885);
var G__42889 = (0);
seq__42700_42874 = G__42886;
chunk__42701_42875 = G__42887;
count__42702_42876 = G__42888;
i__42703_42877 = G__42889;
continue;
} else {
var f_42890 = cljs.core.first(seq__42700_42884__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42890], 0));


var G__42891 = cljs.core.next(seq__42700_42884__$1);
var G__42892 = null;
var G__42893 = (0);
var G__42894 = (0);
seq__42700_42874 = G__42891;
chunk__42701_42875 = G__42892;
count__42702_42876 = G__42893;
i__42703_42877 = G__42894;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42896 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42896], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42896)))?cljs.core.second(arglists_42896):arglists_42896)], 0));
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
var seq__42714_42905 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42715_42906 = null;
var count__42716_42907 = (0);
var i__42717_42908 = (0);
while(true){
if((i__42717_42908 < count__42716_42907)){
var vec__42732_42911 = chunk__42715_42906.cljs$core$IIndexed$_nth$arity$2(null,i__42717_42908);
var name_42912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42732_42911,(0),null);
var map__42735_42913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42732_42911,(1),null);
var map__42735_42914__$1 = cljs.core.__destructure_map(map__42735_42913);
var doc_42915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42735_42914__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42735_42914__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42912], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42916], 0));

if(cljs.core.truth_(doc_42915)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42915], 0));
} else {
}


var G__42918 = seq__42714_42905;
var G__42919 = chunk__42715_42906;
var G__42920 = count__42716_42907;
var G__42921 = (i__42717_42908 + (1));
seq__42714_42905 = G__42918;
chunk__42715_42906 = G__42919;
count__42716_42907 = G__42920;
i__42717_42908 = G__42921;
continue;
} else {
var temp__5753__auto___42922 = cljs.core.seq(seq__42714_42905);
if(temp__5753__auto___42922){
var seq__42714_42923__$1 = temp__5753__auto___42922;
if(cljs.core.chunked_seq_QMARK_(seq__42714_42923__$1)){
var c__4638__auto___42924 = cljs.core.chunk_first(seq__42714_42923__$1);
var G__42925 = cljs.core.chunk_rest(seq__42714_42923__$1);
var G__42926 = c__4638__auto___42924;
var G__42927 = cljs.core.count(c__4638__auto___42924);
var G__42928 = (0);
seq__42714_42905 = G__42925;
chunk__42715_42906 = G__42926;
count__42716_42907 = G__42927;
i__42717_42908 = G__42928;
continue;
} else {
var vec__42740_42929 = cljs.core.first(seq__42714_42923__$1);
var name_42930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42740_42929,(0),null);
var map__42743_42931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42740_42929,(1),null);
var map__42743_42932__$1 = cljs.core.__destructure_map(map__42743_42931);
var doc_42933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42743_42932__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42743_42932__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42930], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42934], 0));

if(cljs.core.truth_(doc_42933)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42933], 0));
} else {
}


var G__42940 = cljs.core.next(seq__42714_42923__$1);
var G__42941 = null;
var G__42942 = (0);
var G__42943 = (0);
seq__42714_42905 = G__42940;
chunk__42715_42906 = G__42941;
count__42716_42907 = G__42942;
i__42717_42908 = G__42943;
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

var seq__42748 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42749 = null;
var count__42750 = (0);
var i__42751 = (0);
while(true){
if((i__42751 < count__42750)){
var role = chunk__42749.cljs$core$IIndexed$_nth$arity$2(null,i__42751);
var temp__5753__auto___42946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___42946__$1)){
var spec_42947 = temp__5753__auto___42946__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42947)], 0));
} else {
}


var G__42948 = seq__42748;
var G__42949 = chunk__42749;
var G__42950 = count__42750;
var G__42951 = (i__42751 + (1));
seq__42748 = G__42948;
chunk__42749 = G__42949;
count__42750 = G__42950;
i__42751 = G__42951;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__42748);
if(temp__5753__auto____$1){
var seq__42748__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42748__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42748__$1);
var G__42954 = cljs.core.chunk_rest(seq__42748__$1);
var G__42955 = c__4638__auto__;
var G__42956 = cljs.core.count(c__4638__auto__);
var G__42957 = (0);
seq__42748 = G__42954;
chunk__42749 = G__42955;
count__42750 = G__42956;
i__42751 = G__42957;
continue;
} else {
var role = cljs.core.first(seq__42748__$1);
var temp__5753__auto___42959__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___42959__$2)){
var spec_42960 = temp__5753__auto___42959__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42960)], 0));
} else {
}


var G__42962 = cljs.core.next(seq__42748__$1);
var G__42963 = null;
var G__42964 = (0);
var G__42965 = (0);
seq__42748 = G__42962;
chunk__42749 = G__42963;
count__42750 = G__42964;
i__42751 = G__42965;
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
var G__42978 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42979 = cljs.core.ex_cause(t);
via = G__42978;
t = G__42979;
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
var map__42759 = datafied_throwable;
var map__42759__$1 = cljs.core.__destructure_map(map__42759);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42759__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42759__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42759__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42760 = cljs.core.last(via);
var map__42760__$1 = cljs.core.__destructure_map(map__42760);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42760__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42760__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42760__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42761 = data;
var map__42761__$1 = cljs.core.__destructure_map(map__42761);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42762 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42762__$1 = cljs.core.__destructure_map(map__42762);
var top_data = map__42762__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42766 = phase;
var G__42766__$1 = (((G__42766 instanceof cljs.core.Keyword))?G__42766.fqn:null);
switch (G__42766__$1) {
case "read-source":
var map__42768 = data;
var map__42768__$1 = cljs.core.__destructure_map(map__42768);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42768__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42768__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42770 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42770__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42770,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42770);
var G__42770__$2 = (cljs.core.truth_((function (){var fexpr__42773 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42773.cljs$core$IFn$_invoke$arity$1 ? fexpr__42773.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42773.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42770__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42770__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42770__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42774 = top_data;
var G__42774__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42774,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42774);
var G__42774__$2 = (cljs.core.truth_((function (){var fexpr__42776 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42776.cljs$core$IFn$_invoke$arity$1 ? fexpr__42776.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42776.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42774__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42774__$1);
var G__42774__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42774__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42774__$2);
var G__42774__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42774__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42774__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42774__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42774__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42780 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42780,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42780,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42780,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42780,(3),null);
var G__42785 = top_data;
var G__42785__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42785,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42785);
var G__42785__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42785__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42785__$1);
var G__42785__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42785__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42785__$2);
var G__42785__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42785__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42785__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42785__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42785__$4;
}

break;
case "execution":
var vec__42789 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42758_SHARP_){
var or__4212__auto__ = (p1__42758_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__42795 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42795.cljs$core$IFn$_invoke$arity$1 ? fexpr__42795.cljs$core$IFn$_invoke$arity$1(p1__42758_SHARP_) : fexpr__42795.call(null,p1__42758_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__42798 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42798__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42798,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42798);
var G__42798__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42798__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42798__$1);
var G__42798__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42798__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42798__$2);
var G__42798__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42798__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42798__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42798__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42798__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42766__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42808){
var map__42809 = p__42808;
var map__42809__$1 = cljs.core.__destructure_map(map__42809);
var triage_data = map__42809__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42809__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__42811 = phase;
var G__42811__$1 = (((G__42811 instanceof cljs.core.Keyword))?G__42811.fqn:null);
switch (G__42811__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42812 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42813 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42814 = loc;
var G__42815 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42818_43017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42819_43018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42820_43019 = true;
var _STAR_print_fn_STAR__temp_val__42821_43020 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42820_43019);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42821_43020);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42806_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42806_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42819_43018);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42818_43017);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42812,G__42813,G__42814,G__42815) : format.call(null,G__42812,G__42813,G__42814,G__42815));

break;
case "macroexpansion":
var G__42825 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42826 = cause_type;
var G__42827 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42828 = loc;
var G__42829 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42825,G__42826,G__42827,G__42828,G__42829) : format.call(null,G__42825,G__42826,G__42827,G__42828,G__42829));

break;
case "compile-syntax-check":
var G__42831 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42832 = cause_type;
var G__42833 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42834 = loc;
var G__42835 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42831,G__42832,G__42833,G__42834,G__42835) : format.call(null,G__42831,G__42832,G__42833,G__42834,G__42835));

break;
case "compilation":
var G__42837 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42838 = cause_type;
var G__42839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42840 = loc;
var G__42841 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42837,G__42838,G__42839,G__42840,G__42841) : format.call(null,G__42837,G__42838,G__42839,G__42840,G__42841));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42844 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42845 = symbol;
var G__42846 = loc;
var G__42847 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42849_43034 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42850_43035 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42851_43036 = true;
var _STAR_print_fn_STAR__temp_val__42852_43037 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42851_43036);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42852_43037);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42807_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42807_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42850_43035);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42849_43034);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42844,G__42845,G__42846,G__42847) : format.call(null,G__42844,G__42845,G__42846,G__42847));
} else {
var G__42860 = "Execution error%s at %s(%s).\n%s\n";
var G__42861 = cause_type;
var G__42862 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42863 = loc;
var G__42864 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42860,G__42861,G__42862,G__42863,G__42864) : format.call(null,G__42860,G__42861,G__42862,G__42863,G__42864));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42811__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
