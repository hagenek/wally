goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__36267 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__36267) : zthing_QMARK_.call(null,G__36267));
})())){
return i;
} else {
var G__36484 = cljs.core.next(sloc);
var G__36485 = (i + (1));
sloc = G__36484;
i = G__36485;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return (x instanceof cljs.core.Atom);
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__36311 = arguments.length;
switch (G__36311) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (((typeof x === 'string') || (((typeof x === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))))))))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__36323,pair_seq,ns){
var map__36326 = p__36323;
var map__36326__$1 = cljs.core.__destructure_map(map__36326);
var map_options = map__36326__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36326__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36326__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36326__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36326__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4210__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4210__auto__;
}
})())){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__36332 = cljs.core.first(pair_seq__$1);
var seq__36333 = cljs.core.seq(vec__36332);
var first__36334 = cljs.core.first(seq__36333);
var seq__36333__$1 = cljs.core.next(seq__36333);
var k = first__36334;
var rest_of_pair = seq__36333__$1;
var pair = vec__36332;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__36500 = ns__$1;
var G__36501 = cljs.core.next(pair_seq__$1);
var G__36502 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__36500;
pair_seq__$1 = G__36501;
out = G__36502;
continue;
} else {
return null;
}
} else {
var G__36503 = current_ns;
var G__36504 = cljs.core.next(pair_seq__$1);
var G__36505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__36503;
pair_seq__$1 = G__36504;
out = G__36505;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__36506 = ns__$1;
var G__36507 = cljs.core.next(pair_seq__$1);
var G__36508 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__36506;
pair_seq__$1 = G__36507;
out = G__36508;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__36336 = zprint.zfns.zstring;
var znumstr_orig_val__36337 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__36338 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__36339 = zprint.zfns.zsexpr;
var zseqnws_orig_val__36340 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__36341 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__36342 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__36343 = zprint.zfns.zfocus_style;
var zstart_orig_val__36344 = zprint.zfns.zstart;
var zfirst_orig_val__36345 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__36346 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__36347 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__36348 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__36349 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__36350 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__36351 = zprint.zfns.zfourth;
var znextnws_orig_val__36352 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__36353 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__36354 = zprint.zfns.znthnext;
var zcount_orig_val__36355 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__36356 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__36357 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__36358 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__36359 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__36360 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__36361 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__36362 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__36363 = zprint.zfns.zfocus;
var zfind_path_orig_val__36364 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__36365 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__36366 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__36367 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__36368 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__36369 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__36370 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__36371 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__36372 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__36373 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__36374 = zprint.zfns.ztag;
var zlast_orig_val__36375 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__36376 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__36377 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__36378 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__36379 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__36380 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__36381 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__36382 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__36383 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__36384 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__36385 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__36386 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__36387 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__36388 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__36389 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__36390 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__36391 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__36392 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__36393 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__36394 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__36395 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__36396 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__36398 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__36399 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__36400 = zprint.zfns.zlift_ns;
var zfind_orig_val__36401 = zprint.zfns.zfind;
var ztake_append_orig_val__36402 = zprint.zfns.ztake_append;
var zstring_temp_val__36403 = zprint.sutil.sstring;
var znumstr_temp_val__36404 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__36405 = cljs.core.constantly(false);
var zsexpr_temp_val__36406 = cljs.core.identity;
var zseqnws_temp_val__36407 = zprint.sutil.sseqnws;
var zseqnws_w_nl_temp_val__36408 = zprint.sutil.sseqnws;
var zseqnws_w_bl_temp_val__36409 = zprint.sutil.sseqnws;
var zfocus_style_temp_val__36410 = zprint.sutil.sfocus_style;
var zstart_temp_val__36411 = zprint.sutil.sfirst;
var zfirst_temp_val__36412 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__36413 = zprint.sutil.sfirst;
var zsecond_temp_val__36414 = zprint.sutil.ssecond;
var zsecond_no_comment_temp_val__36415 = zprint.sutil.ssecond;
var zthird_temp_val__36416 = zprint.sutil.sthird;
var zthird_no_comment_temp_val__36417 = zprint.sutil.sthird;
var zfourth_temp_val__36418 = zprint.sutil.sfourth;
var znextnws_temp_val__36419 = cljs.core.next;
var znextnws_w_nl_temp_val__36420 = cljs.core.next;
var znthnext_temp_val__36421 = zprint.sutil.snthnext;
var zcount_temp_val__36422 = zprint.sutil.scount;
var zcount_zloc_seq_nc_nws_temp_val__36423 = zprint.sutil.scount;
var zmap_temp_val__36424 = zprint.sutil.smap;
var zmap_w_nl_temp_val__36425 = zprint.sutil.smap;
var zmap_w_bl_temp_val__36426 = zprint.sutil.smap;
var zmap_w_nl_comma_temp_val__36427 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__36428 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__36429 = cljs.core.fn_QMARK_;
var zfocus_temp_val__36430 = zprint.sutil.sfocus;
var zfind_path_temp_val__36431 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__36432 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__36433 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__36434 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__36435 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__36436 = cljs.core.constantly(false);
var zset_QMARK__temp_val__36437 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__36438 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__36439 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__36440 = cljs.core.constantly(false);
var ztag_temp_val__36441 = cljs.core.constantly(null);
var zlast_temp_val__36442 = zprint.sutil.slast;
var zarray_QMARK__temp_val__36443 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__36444 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__36445 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__36446 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__36447 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__36448 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__36449 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__36450 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__36451 = cljs.core.constantly(false);
var zmap_all_temp_val__36452 = cljs.core.map;
var zfuture_QMARK__temp_val__36453 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__36454 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__36455 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__36456 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__36457 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__36458 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__36459 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__36460 = null;
var zdotdotdot_temp_val__36461 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__36462 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__36463 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__36464 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__36465 = cljs.core.constantly(false);
var zlift_ns_temp_val__36466 = zprint.sutil.slift_ns;
var zfind_temp_val__36467 = zprint.sutil.sfind;
var ztake_append_temp_val__36468 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__36403);

(zprint.zfns.znumstr = znumstr_temp_val__36404);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__36405);

(zprint.zfns.zsexpr = zsexpr_temp_val__36406);

(zprint.zfns.zseqnws = zseqnws_temp_val__36407);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__36408);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__36409);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__36410);

(zprint.zfns.zstart = zstart_temp_val__36411);

(zprint.zfns.zfirst = zfirst_temp_val__36412);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__36413);

(zprint.zfns.zsecond = zsecond_temp_val__36414);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__36415);

(zprint.zfns.zthird = zthird_temp_val__36416);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__36417);

(zprint.zfns.zfourth = zfourth_temp_val__36418);

(zprint.zfns.znextnws = znextnws_temp_val__36419);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__36420);

(zprint.zfns.znthnext = znthnext_temp_val__36421);

(zprint.zfns.zcount = zcount_temp_val__36422);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__36423);

(zprint.zfns.zmap = zmap_temp_val__36424);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__36425);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__36426);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__36427);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__36428);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__36429);

(zprint.zfns.zfocus = zfocus_temp_val__36430);

(zprint.zfns.zfind_path = zfind_path_temp_val__36431);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__36432);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__36433);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__36434);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__36435);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__36436);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__36437);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__36438);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__36439);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__36440);

(zprint.zfns.ztag = ztag_temp_val__36441);

(zprint.zfns.zlast = zlast_temp_val__36442);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__36443);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__36444);

(zprint.zfns.zderef = zderef_temp_val__36445);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__36446);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__36447);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__36448);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__36449);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__36450);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__36451);

(zprint.zfns.zmap_all = zmap_all_temp_val__36452);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__36453);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__36454);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__36455);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__36456);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__36457);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__36458);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__36459);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__36460);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__36461);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__36462);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__36463);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__36464);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__36465);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__36466);

(zprint.zfns.zfind = zfind_temp_val__36467);

(zprint.zfns.ztake_append = ztake_append_temp_val__36468);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__36402);

(zprint.zfns.zfind = zfind_orig_val__36401);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__36400);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__36399);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__36398);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__36396);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__36395);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__36394);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__36393);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__36392);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__36391);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__36390);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__36389);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__36388);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__36387);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__36386);

(zprint.zfns.zmap_all = zmap_all_orig_val__36385);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__36384);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__36383);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__36382);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__36381);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__36380);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__36379);

(zprint.zfns.zderef = zderef_orig_val__36378);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__36377);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__36376);

(zprint.zfns.zlast = zlast_orig_val__36375);

(zprint.zfns.ztag = ztag_orig_val__36374);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__36373);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__36372);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__36371);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__36370);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__36369);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__36368);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__36367);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__36366);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__36365);

(zprint.zfns.zfind_path = zfind_path_orig_val__36364);

(zprint.zfns.zfocus = zfocus_orig_val__36363);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__36362);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__36361);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__36360);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__36359);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__36358);

(zprint.zfns.zmap = zmap_orig_val__36357);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__36356);

(zprint.zfns.zcount = zcount_orig_val__36355);

(zprint.zfns.znthnext = znthnext_orig_val__36354);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__36353);

(zprint.zfns.znextnws = znextnws_orig_val__36352);

(zprint.zfns.zfourth = zfourth_orig_val__36351);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__36350);

(zprint.zfns.zthird = zthird_orig_val__36349);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__36348);

(zprint.zfns.zsecond = zsecond_orig_val__36347);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__36346);

(zprint.zfns.zfirst = zfirst_orig_val__36345);

(zprint.zfns.zstart = zstart_orig_val__36344);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__36343);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__36342);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__36341);

(zprint.zfns.zseqnws = zseqnws_orig_val__36340);

(zprint.zfns.zsexpr = zsexpr_orig_val__36339);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__36338);

(zprint.zfns.znumstr = znumstr_orig_val__36337);

(zprint.zfns.zstring = zstring_orig_val__36336);
}});

//# sourceMappingURL=zprint.sutil.js.map
