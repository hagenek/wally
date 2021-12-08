goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___45893 = arguments.length;
var i__4819__auto___45894 = (0);
while(true){
if((i__4819__auto___45894 < len__4818__auto___45893)){
args__4824__auto__.push((arguments[i__4819__auto___45894]));

var G__45895 = (i__4819__auto___45894 + (1));
i__4819__auto___45894 = G__45895;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45637){
var G__45639 = cljs.core.first(seq45637);
var seq45637__$1 = cljs.core.next(seq45637);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45639,seq45637__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45644 = cljs.core.seq(sources);
var chunk__45645 = null;
var count__45646 = (0);
var i__45647 = (0);
while(true){
if((i__45647 < count__45646)){
var map__45661 = chunk__45645.cljs$core$IIndexed$_nth$arity$2(null,i__45647);
var map__45661__$1 = cljs.core.__destructure_map(map__45661);
var src = map__45661__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45665){var e_45896 = e45665;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45896);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45896.message)].join('')));
}

var G__45897 = seq__45644;
var G__45898 = chunk__45645;
var G__45899 = count__45646;
var G__45900 = (i__45647 + (1));
seq__45644 = G__45897;
chunk__45645 = G__45898;
count__45646 = G__45899;
i__45647 = G__45900;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45644);
if(temp__5753__auto__){
var seq__45644__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45644__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45644__$1);
var G__45901 = cljs.core.chunk_rest(seq__45644__$1);
var G__45902 = c__4638__auto__;
var G__45903 = cljs.core.count(c__4638__auto__);
var G__45904 = (0);
seq__45644 = G__45901;
chunk__45645 = G__45902;
count__45646 = G__45903;
i__45647 = G__45904;
continue;
} else {
var map__45670 = cljs.core.first(seq__45644__$1);
var map__45670__$1 = cljs.core.__destructure_map(map__45670);
var src = map__45670__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45672){var e_45905 = e45672;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45905);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45905.message)].join('')));
}

var G__45906 = cljs.core.next(seq__45644__$1);
var G__45907 = null;
var G__45908 = (0);
var G__45909 = (0);
seq__45644 = G__45906;
chunk__45645 = G__45907;
count__45646 = G__45908;
i__45647 = G__45909;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45681 = cljs.core.seq(js_requires);
var chunk__45682 = null;
var count__45683 = (0);
var i__45684 = (0);
while(true){
if((i__45684 < count__45683)){
var js_ns = chunk__45682.cljs$core$IIndexed$_nth$arity$2(null,i__45684);
var require_str_45910 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45910);


var G__45911 = seq__45681;
var G__45912 = chunk__45682;
var G__45913 = count__45683;
var G__45914 = (i__45684 + (1));
seq__45681 = G__45911;
chunk__45682 = G__45912;
count__45683 = G__45913;
i__45684 = G__45914;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45681);
if(temp__5753__auto__){
var seq__45681__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45681__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45681__$1);
var G__45915 = cljs.core.chunk_rest(seq__45681__$1);
var G__45916 = c__4638__auto__;
var G__45917 = cljs.core.count(c__4638__auto__);
var G__45918 = (0);
seq__45681 = G__45915;
chunk__45682 = G__45916;
count__45683 = G__45917;
i__45684 = G__45918;
continue;
} else {
var js_ns = cljs.core.first(seq__45681__$1);
var require_str_45919 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45919);


var G__45920 = cljs.core.next(seq__45681__$1);
var G__45921 = null;
var G__45922 = (0);
var G__45923 = (0);
seq__45681 = G__45920;
chunk__45682 = G__45921;
count__45683 = G__45922;
i__45684 = G__45923;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45688){
var map__45689 = p__45688;
var map__45689__$1 = cljs.core.__destructure_map(map__45689);
var msg = map__45689__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45693(s__45694){
return (new cljs.core.LazySeq(null,(function (){
var s__45694__$1 = s__45694;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45694__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__45702 = cljs.core.first(xs__6308__auto__);
var map__45702__$1 = cljs.core.__destructure_map(map__45702);
var src = map__45702__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45702__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__45694__$1,map__45702,map__45702__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45689,map__45689__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45693_$_iter__45695(s__45696){
return (new cljs.core.LazySeq(null,((function (s__45694__$1,map__45702,map__45702__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45689,map__45689__$1,msg,info,reload_info){
return (function (){
var s__45696__$1 = s__45696;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45696__$1);
if(temp__5753__auto____$1){
var s__45696__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45696__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__45696__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__45698 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__45697 = (0);
while(true){
if((i__45697 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__45697);
cljs.core.chunk_append(b__45698,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45924 = (i__45697 + (1));
i__45697 = G__45924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45698),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45693_$_iter__45695(cljs.core.chunk_rest(s__45696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45698),null);
}
} else {
var warning = cljs.core.first(s__45696__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45693_$_iter__45695(cljs.core.rest(s__45696__$2)));
}
} else {
return null;
}
break;
}
});})(s__45694__$1,map__45702,map__45702__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45689,map__45689__$1,msg,info,reload_info))
,null,null));
});})(s__45694__$1,map__45702,map__45702__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45689,map__45689__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45693(cljs.core.rest(s__45694__$1)));
} else {
var G__45925 = cljs.core.rest(s__45694__$1);
s__45694__$1 = G__45925;
continue;
}
} else {
var G__45926 = cljs.core.rest(s__45694__$1);
s__45694__$1 = G__45926;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45707_45927 = cljs.core.seq(warnings);
var chunk__45708_45928 = null;
var count__45709_45929 = (0);
var i__45710_45930 = (0);
while(true){
if((i__45710_45930 < count__45709_45929)){
var map__45716_45931 = chunk__45708_45928.cljs$core$IIndexed$_nth$arity$2(null,i__45710_45930);
var map__45716_45932__$1 = cljs.core.__destructure_map(map__45716_45931);
var w_45933 = map__45716_45932__$1;
var msg_45934__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716_45932__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716_45932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716_45932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716_45932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45937)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45935),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45936),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45934__$1)].join(''));


var G__45938 = seq__45707_45927;
var G__45939 = chunk__45708_45928;
var G__45940 = count__45709_45929;
var G__45941 = (i__45710_45930 + (1));
seq__45707_45927 = G__45938;
chunk__45708_45928 = G__45939;
count__45709_45929 = G__45940;
i__45710_45930 = G__45941;
continue;
} else {
var temp__5753__auto___45942 = cljs.core.seq(seq__45707_45927);
if(temp__5753__auto___45942){
var seq__45707_45943__$1 = temp__5753__auto___45942;
if(cljs.core.chunked_seq_QMARK_(seq__45707_45943__$1)){
var c__4638__auto___45944 = cljs.core.chunk_first(seq__45707_45943__$1);
var G__45945 = cljs.core.chunk_rest(seq__45707_45943__$1);
var G__45946 = c__4638__auto___45944;
var G__45947 = cljs.core.count(c__4638__auto___45944);
var G__45948 = (0);
seq__45707_45927 = G__45945;
chunk__45708_45928 = G__45946;
count__45709_45929 = G__45947;
i__45710_45930 = G__45948;
continue;
} else {
var map__45718_45949 = cljs.core.first(seq__45707_45943__$1);
var map__45718_45950__$1 = cljs.core.__destructure_map(map__45718_45949);
var w_45951 = map__45718_45950__$1;
var msg_45952__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45718_45950__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45718_45950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45718_45950__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45718_45950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45955)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45953),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45954),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45952__$1)].join(''));


var G__45966 = cljs.core.next(seq__45707_45943__$1);
var G__45967 = null;
var G__45968 = (0);
var G__45969 = (0);
seq__45707_45927 = G__45966;
chunk__45708_45928 = G__45967;
count__45709_45929 = G__45968;
i__45710_45930 = G__45969;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45686_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45686_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45727){
var map__45728 = p__45727;
var map__45728__$1 = cljs.core.__destructure_map(map__45728);
var msg = map__45728__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45729 = cljs.core.seq(updates);
var chunk__45731 = null;
var count__45732 = (0);
var i__45733 = (0);
while(true){
if((i__45733 < count__45732)){
var path = chunk__45731.cljs$core$IIndexed$_nth$arity$2(null,i__45733);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45773_45970 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45777_45971 = null;
var count__45778_45972 = (0);
var i__45779_45973 = (0);
while(true){
if((i__45779_45973 < count__45778_45972)){
var node_45974 = chunk__45777_45971.cljs$core$IIndexed$_nth$arity$2(null,i__45779_45973);
if(cljs.core.not(node_45974.shadow$old)){
var path_match_45975 = shadow.cljs.devtools.client.browser.match_paths(node_45974.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45975)){
var new_link_45976 = (function (){var G__45798 = node_45974.cloneNode(true);
G__45798.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45975),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45798;
})();
(node_45974.shadow$old = true);

(new_link_45976.onload = ((function (seq__45773_45970,chunk__45777_45971,count__45778_45972,i__45779_45973,seq__45729,chunk__45731,count__45732,i__45733,new_link_45976,path_match_45975,node_45974,path,map__45728,map__45728__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45974);
});})(seq__45773_45970,chunk__45777_45971,count__45778_45972,i__45779_45973,seq__45729,chunk__45731,count__45732,i__45733,new_link_45976,path_match_45975,node_45974,path,map__45728,map__45728__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45975], 0));

goog.dom.insertSiblingAfter(new_link_45976,node_45974);


var G__45978 = seq__45773_45970;
var G__45979 = chunk__45777_45971;
var G__45980 = count__45778_45972;
var G__45981 = (i__45779_45973 + (1));
seq__45773_45970 = G__45978;
chunk__45777_45971 = G__45979;
count__45778_45972 = G__45980;
i__45779_45973 = G__45981;
continue;
} else {
var G__45982 = seq__45773_45970;
var G__45983 = chunk__45777_45971;
var G__45984 = count__45778_45972;
var G__45985 = (i__45779_45973 + (1));
seq__45773_45970 = G__45982;
chunk__45777_45971 = G__45983;
count__45778_45972 = G__45984;
i__45779_45973 = G__45985;
continue;
}
} else {
var G__45986 = seq__45773_45970;
var G__45987 = chunk__45777_45971;
var G__45988 = count__45778_45972;
var G__45989 = (i__45779_45973 + (1));
seq__45773_45970 = G__45986;
chunk__45777_45971 = G__45987;
count__45778_45972 = G__45988;
i__45779_45973 = G__45989;
continue;
}
} else {
var temp__5753__auto___45990 = cljs.core.seq(seq__45773_45970);
if(temp__5753__auto___45990){
var seq__45773_45991__$1 = temp__5753__auto___45990;
if(cljs.core.chunked_seq_QMARK_(seq__45773_45991__$1)){
var c__4638__auto___45992 = cljs.core.chunk_first(seq__45773_45991__$1);
var G__45993 = cljs.core.chunk_rest(seq__45773_45991__$1);
var G__45994 = c__4638__auto___45992;
var G__45995 = cljs.core.count(c__4638__auto___45992);
var G__45996 = (0);
seq__45773_45970 = G__45993;
chunk__45777_45971 = G__45994;
count__45778_45972 = G__45995;
i__45779_45973 = G__45996;
continue;
} else {
var node_45997 = cljs.core.first(seq__45773_45991__$1);
if(cljs.core.not(node_45997.shadow$old)){
var path_match_45998 = shadow.cljs.devtools.client.browser.match_paths(node_45997.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45998)){
var new_link_45999 = (function (){var G__45809 = node_45997.cloneNode(true);
G__45809.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45998),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45809;
})();
(node_45997.shadow$old = true);

(new_link_45999.onload = ((function (seq__45773_45970,chunk__45777_45971,count__45778_45972,i__45779_45973,seq__45729,chunk__45731,count__45732,i__45733,new_link_45999,path_match_45998,node_45997,seq__45773_45991__$1,temp__5753__auto___45990,path,map__45728,map__45728__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45997);
});})(seq__45773_45970,chunk__45777_45971,count__45778_45972,i__45779_45973,seq__45729,chunk__45731,count__45732,i__45733,new_link_45999,path_match_45998,node_45997,seq__45773_45991__$1,temp__5753__auto___45990,path,map__45728,map__45728__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45998], 0));

goog.dom.insertSiblingAfter(new_link_45999,node_45997);


var G__46000 = cljs.core.next(seq__45773_45991__$1);
var G__46001 = null;
var G__46002 = (0);
var G__46003 = (0);
seq__45773_45970 = G__46000;
chunk__45777_45971 = G__46001;
count__45778_45972 = G__46002;
i__45779_45973 = G__46003;
continue;
} else {
var G__46004 = cljs.core.next(seq__45773_45991__$1);
var G__46005 = null;
var G__46006 = (0);
var G__46007 = (0);
seq__45773_45970 = G__46004;
chunk__45777_45971 = G__46005;
count__45778_45972 = G__46006;
i__45779_45973 = G__46007;
continue;
}
} else {
var G__46008 = cljs.core.next(seq__45773_45991__$1);
var G__46009 = null;
var G__46010 = (0);
var G__46011 = (0);
seq__45773_45970 = G__46008;
chunk__45777_45971 = G__46009;
count__45778_45972 = G__46010;
i__45779_45973 = G__46011;
continue;
}
}
} else {
}
}
break;
}


var G__46012 = seq__45729;
var G__46013 = chunk__45731;
var G__46014 = count__45732;
var G__46015 = (i__45733 + (1));
seq__45729 = G__46012;
chunk__45731 = G__46013;
count__45732 = G__46014;
i__45733 = G__46015;
continue;
} else {
var G__46016 = seq__45729;
var G__46017 = chunk__45731;
var G__46018 = count__45732;
var G__46019 = (i__45733 + (1));
seq__45729 = G__46016;
chunk__45731 = G__46017;
count__45732 = G__46018;
i__45733 = G__46019;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45729);
if(temp__5753__auto__){
var seq__45729__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45729__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45729__$1);
var G__46020 = cljs.core.chunk_rest(seq__45729__$1);
var G__46021 = c__4638__auto__;
var G__46022 = cljs.core.count(c__4638__auto__);
var G__46023 = (0);
seq__45729 = G__46020;
chunk__45731 = G__46021;
count__45732 = G__46022;
i__45733 = G__46023;
continue;
} else {
var path = cljs.core.first(seq__45729__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45816_46024 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45820_46025 = null;
var count__45821_46026 = (0);
var i__45822_46027 = (0);
while(true){
if((i__45822_46027 < count__45821_46026)){
var node_46029 = chunk__45820_46025.cljs$core$IIndexed$_nth$arity$2(null,i__45822_46027);
if(cljs.core.not(node_46029.shadow$old)){
var path_match_46033 = shadow.cljs.devtools.client.browser.match_paths(node_46029.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46033)){
var new_link_46034 = (function (){var G__45840 = node_46029.cloneNode(true);
G__45840.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46033),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45840;
})();
(node_46029.shadow$old = true);

(new_link_46034.onload = ((function (seq__45816_46024,chunk__45820_46025,count__45821_46026,i__45822_46027,seq__45729,chunk__45731,count__45732,i__45733,new_link_46034,path_match_46033,node_46029,path,seq__45729__$1,temp__5753__auto__,map__45728,map__45728__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46029);
});})(seq__45816_46024,chunk__45820_46025,count__45821_46026,i__45822_46027,seq__45729,chunk__45731,count__45732,i__45733,new_link_46034,path_match_46033,node_46029,path,seq__45729__$1,temp__5753__auto__,map__45728,map__45728__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46033], 0));

goog.dom.insertSiblingAfter(new_link_46034,node_46029);


var G__46035 = seq__45816_46024;
var G__46036 = chunk__45820_46025;
var G__46037 = count__45821_46026;
var G__46038 = (i__45822_46027 + (1));
seq__45816_46024 = G__46035;
chunk__45820_46025 = G__46036;
count__45821_46026 = G__46037;
i__45822_46027 = G__46038;
continue;
} else {
var G__46039 = seq__45816_46024;
var G__46040 = chunk__45820_46025;
var G__46041 = count__45821_46026;
var G__46042 = (i__45822_46027 + (1));
seq__45816_46024 = G__46039;
chunk__45820_46025 = G__46040;
count__45821_46026 = G__46041;
i__45822_46027 = G__46042;
continue;
}
} else {
var G__46043 = seq__45816_46024;
var G__46044 = chunk__45820_46025;
var G__46045 = count__45821_46026;
var G__46046 = (i__45822_46027 + (1));
seq__45816_46024 = G__46043;
chunk__45820_46025 = G__46044;
count__45821_46026 = G__46045;
i__45822_46027 = G__46046;
continue;
}
} else {
var temp__5753__auto___46047__$1 = cljs.core.seq(seq__45816_46024);
if(temp__5753__auto___46047__$1){
var seq__45816_46048__$1 = temp__5753__auto___46047__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45816_46048__$1)){
var c__4638__auto___46050 = cljs.core.chunk_first(seq__45816_46048__$1);
var G__46051 = cljs.core.chunk_rest(seq__45816_46048__$1);
var G__46052 = c__4638__auto___46050;
var G__46053 = cljs.core.count(c__4638__auto___46050);
var G__46054 = (0);
seq__45816_46024 = G__46051;
chunk__45820_46025 = G__46052;
count__45821_46026 = G__46053;
i__45822_46027 = G__46054;
continue;
} else {
var node_46055 = cljs.core.first(seq__45816_46048__$1);
if(cljs.core.not(node_46055.shadow$old)){
var path_match_46056 = shadow.cljs.devtools.client.browser.match_paths(node_46055.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46056)){
var new_link_46057 = (function (){var G__45847 = node_46055.cloneNode(true);
G__45847.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46056),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45847;
})();
(node_46055.shadow$old = true);

(new_link_46057.onload = ((function (seq__45816_46024,chunk__45820_46025,count__45821_46026,i__45822_46027,seq__45729,chunk__45731,count__45732,i__45733,new_link_46057,path_match_46056,node_46055,seq__45816_46048__$1,temp__5753__auto___46047__$1,path,seq__45729__$1,temp__5753__auto__,map__45728,map__45728__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46055);
});})(seq__45816_46024,chunk__45820_46025,count__45821_46026,i__45822_46027,seq__45729,chunk__45731,count__45732,i__45733,new_link_46057,path_match_46056,node_46055,seq__45816_46048__$1,temp__5753__auto___46047__$1,path,seq__45729__$1,temp__5753__auto__,map__45728,map__45728__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46056], 0));

goog.dom.insertSiblingAfter(new_link_46057,node_46055);


var G__46058 = cljs.core.next(seq__45816_46048__$1);
var G__46059 = null;
var G__46060 = (0);
var G__46061 = (0);
seq__45816_46024 = G__46058;
chunk__45820_46025 = G__46059;
count__45821_46026 = G__46060;
i__45822_46027 = G__46061;
continue;
} else {
var G__46062 = cljs.core.next(seq__45816_46048__$1);
var G__46063 = null;
var G__46064 = (0);
var G__46065 = (0);
seq__45816_46024 = G__46062;
chunk__45820_46025 = G__46063;
count__45821_46026 = G__46064;
i__45822_46027 = G__46065;
continue;
}
} else {
var G__46066 = cljs.core.next(seq__45816_46048__$1);
var G__46067 = null;
var G__46068 = (0);
var G__46069 = (0);
seq__45816_46024 = G__46066;
chunk__45820_46025 = G__46067;
count__45821_46026 = G__46068;
i__45822_46027 = G__46069;
continue;
}
}
} else {
}
}
break;
}


var G__46070 = cljs.core.next(seq__45729__$1);
var G__46071 = null;
var G__46072 = (0);
var G__46073 = (0);
seq__45729 = G__46070;
chunk__45731 = G__46071;
count__45732 = G__46072;
i__45733 = G__46073;
continue;
} else {
var G__46074 = cljs.core.next(seq__45729__$1);
var G__46075 = null;
var G__46076 = (0);
var G__46077 = (0);
seq__45729 = G__46074;
chunk__45731 = G__46075;
count__45732 = G__46076;
i__45733 = G__46077;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45856){
var map__45857 = p__45856;
var map__45857__$1 = cljs.core.__destructure_map(map__45857);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45857__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45863){
var map__45864 = p__45863;
var map__45864__$1 = cljs.core.__destructure_map(map__45864);
var _ = map__45864__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45865,done,error){
var map__45866 = p__45865;
var map__45866__$1 = cljs.core.__destructure_map(map__45866);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45867,done,error){
var map__45868 = p__45867;
var map__45868__$1 = cljs.core.__destructure_map(map__45868);
var msg = map__45868__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45868__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45868__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45868__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45869){
var map__45870 = p__45869;
var map__45870__$1 = cljs.core.__destructure_map(map__45870);
var src = map__45870__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45870__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45872 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45872) : done.call(null,G__45872));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45873){
var map__45874 = p__45873;
var map__45874__$1 = cljs.core.__destructure_map(map__45874);
var msg__$1 = map__45874__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45874__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45876){var ex = e45876;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45880){
var map__45881 = p__45880;
var map__45881__$1 = cljs.core.__destructure_map(map__45881);
var env = map__45881__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45881__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45882){
var map__45883 = p__45882;
var map__45883__$1 = cljs.core.__destructure_map(map__45883);
var msg = map__45883__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45883__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45884){
var map__45885 = p__45884;
var map__45885__$1 = cljs.core.__destructure_map(map__45885);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45885__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45885__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45886){
var map__45887 = p__45886;
var map__45887__$1 = cljs.core.__destructure_map(map__45887);
var svc = map__45887__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45887__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
