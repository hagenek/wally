goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52918 = arguments.length;
var i__4819__auto___52919 = (0);
while(true){
if((i__4819__auto___52919 < len__4818__auto___52918)){
args__4824__auto__.push((arguments[i__4819__auto___52919]));

var G__52920 = (i__4819__auto___52919 + (1));
i__4819__auto___52919 = G__52920;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52757){
var G__52758 = cljs.core.first(seq52757);
var seq52757__$1 = cljs.core.next(seq52757);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52758,seq52757__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52767 = cljs.core.seq(sources);
var chunk__52768 = null;
var count__52769 = (0);
var i__52770 = (0);
while(true){
if((i__52770 < count__52769)){
var map__52775 = chunk__52768.cljs$core$IIndexed$_nth$arity$2(null,i__52770);
var map__52775__$1 = cljs.core.__destructure_map(map__52775);
var src = map__52775__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52777){var e_52922 = e52777;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52922);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52922.message)].join('')));
}

var G__52924 = seq__52767;
var G__52925 = chunk__52768;
var G__52926 = count__52769;
var G__52927 = (i__52770 + (1));
seq__52767 = G__52924;
chunk__52768 = G__52925;
count__52769 = G__52926;
i__52770 = G__52927;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52767);
if(temp__5753__auto__){
var seq__52767__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52767__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52767__$1);
var G__52928 = cljs.core.chunk_rest(seq__52767__$1);
var G__52929 = c__4638__auto__;
var G__52930 = cljs.core.count(c__4638__auto__);
var G__52931 = (0);
seq__52767 = G__52928;
chunk__52768 = G__52929;
count__52769 = G__52930;
i__52770 = G__52931;
continue;
} else {
var map__52779 = cljs.core.first(seq__52767__$1);
var map__52779__$1 = cljs.core.__destructure_map(map__52779);
var src = map__52779__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52780){var e_52932 = e52780;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52932);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52932.message)].join('')));
}

var G__52933 = cljs.core.next(seq__52767__$1);
var G__52934 = null;
var G__52935 = (0);
var G__52936 = (0);
seq__52767 = G__52933;
chunk__52768 = G__52934;
count__52769 = G__52935;
i__52770 = G__52936;
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
var seq__52782 = cljs.core.seq(js_requires);
var chunk__52783 = null;
var count__52784 = (0);
var i__52785 = (0);
while(true){
if((i__52785 < count__52784)){
var js_ns = chunk__52783.cljs$core$IIndexed$_nth$arity$2(null,i__52785);
var require_str_52937 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52937);


var G__52938 = seq__52782;
var G__52939 = chunk__52783;
var G__52940 = count__52784;
var G__52941 = (i__52785 + (1));
seq__52782 = G__52938;
chunk__52783 = G__52939;
count__52784 = G__52940;
i__52785 = G__52941;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52782);
if(temp__5753__auto__){
var seq__52782__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52782__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52782__$1);
var G__52942 = cljs.core.chunk_rest(seq__52782__$1);
var G__52943 = c__4638__auto__;
var G__52944 = cljs.core.count(c__4638__auto__);
var G__52945 = (0);
seq__52782 = G__52942;
chunk__52783 = G__52943;
count__52784 = G__52944;
i__52785 = G__52945;
continue;
} else {
var js_ns = cljs.core.first(seq__52782__$1);
var require_str_52946 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52946);


var G__52947 = cljs.core.next(seq__52782__$1);
var G__52948 = null;
var G__52949 = (0);
var G__52950 = (0);
seq__52782 = G__52947;
chunk__52783 = G__52948;
count__52784 = G__52949;
i__52785 = G__52950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52789){
var map__52790 = p__52789;
var map__52790__$1 = cljs.core.__destructure_map(map__52790);
var msg = map__52790__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52791(s__52792){
return (new cljs.core.LazySeq(null,(function (){
var s__52792__$1 = s__52792;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52792__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52797 = cljs.core.first(xs__6308__auto__);
var map__52797__$1 = cljs.core.__destructure_map(map__52797);
var src = map__52797__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52797__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52797__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52792__$1,map__52797,map__52797__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52790,map__52790__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52791_$_iter__52793(s__52794){
return (new cljs.core.LazySeq(null,((function (s__52792__$1,map__52797,map__52797__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52790,map__52790__$1,msg,info,reload_info){
return (function (){
var s__52794__$1 = s__52794;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52794__$1);
if(temp__5753__auto____$1){
var s__52794__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52794__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52794__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52796 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52795 = (0);
while(true){
if((i__52795 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52795);
cljs.core.chunk_append(b__52796,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52951 = (i__52795 + (1));
i__52795 = G__52951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52796),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52791_$_iter__52793(cljs.core.chunk_rest(s__52794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52796),null);
}
} else {
var warning = cljs.core.first(s__52794__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52791_$_iter__52793(cljs.core.rest(s__52794__$2)));
}
} else {
return null;
}
break;
}
});})(s__52792__$1,map__52797,map__52797__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52790,map__52790__$1,msg,info,reload_info))
,null,null));
});})(s__52792__$1,map__52797,map__52797__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52790,map__52790__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52791(cljs.core.rest(s__52792__$1)));
} else {
var G__52952 = cljs.core.rest(s__52792__$1);
s__52792__$1 = G__52952;
continue;
}
} else {
var G__52953 = cljs.core.rest(s__52792__$1);
s__52792__$1 = G__52953;
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
var seq__52798_52954 = cljs.core.seq(warnings);
var chunk__52799_52955 = null;
var count__52800_52956 = (0);
var i__52801_52957 = (0);
while(true){
if((i__52801_52957 < count__52800_52956)){
var map__52806_52958 = chunk__52799_52955.cljs$core$IIndexed$_nth$arity$2(null,i__52801_52957);
var map__52806_52959__$1 = cljs.core.__destructure_map(map__52806_52958);
var w_52960 = map__52806_52959__$1;
var msg_52961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806_52959__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806_52959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806_52959__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806_52959__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52964)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52962),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52963),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52961__$1)].join(''));


var G__52965 = seq__52798_52954;
var G__52966 = chunk__52799_52955;
var G__52967 = count__52800_52956;
var G__52968 = (i__52801_52957 + (1));
seq__52798_52954 = G__52965;
chunk__52799_52955 = G__52966;
count__52800_52956 = G__52967;
i__52801_52957 = G__52968;
continue;
} else {
var temp__5753__auto___52969 = cljs.core.seq(seq__52798_52954);
if(temp__5753__auto___52969){
var seq__52798_52970__$1 = temp__5753__auto___52969;
if(cljs.core.chunked_seq_QMARK_(seq__52798_52970__$1)){
var c__4638__auto___52971 = cljs.core.chunk_first(seq__52798_52970__$1);
var G__52972 = cljs.core.chunk_rest(seq__52798_52970__$1);
var G__52973 = c__4638__auto___52971;
var G__52974 = cljs.core.count(c__4638__auto___52971);
var G__52975 = (0);
seq__52798_52954 = G__52972;
chunk__52799_52955 = G__52973;
count__52800_52956 = G__52974;
i__52801_52957 = G__52975;
continue;
} else {
var map__52807_52976 = cljs.core.first(seq__52798_52970__$1);
var map__52807_52977__$1 = cljs.core.__destructure_map(map__52807_52976);
var w_52978 = map__52807_52977__$1;
var msg_52979__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807_52977__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807_52977__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807_52977__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807_52977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52982)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52980),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52981),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52979__$1)].join(''));


var G__52983 = cljs.core.next(seq__52798_52970__$1);
var G__52984 = null;
var G__52985 = (0);
var G__52986 = (0);
seq__52798_52954 = G__52983;
chunk__52799_52955 = G__52984;
count__52800_52956 = G__52985;
i__52801_52957 = G__52986;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52788_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52788_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52816){
var map__52817 = p__52816;
var map__52817__$1 = cljs.core.__destructure_map(map__52817);
var msg = map__52817__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52817__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52819 = cljs.core.seq(updates);
var chunk__52821 = null;
var count__52822 = (0);
var i__52823 = (0);
while(true){
if((i__52823 < count__52822)){
var path = chunk__52821.cljs$core$IIndexed$_nth$arity$2(null,i__52823);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52853_52987 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52857_52988 = null;
var count__52858_52989 = (0);
var i__52859_52990 = (0);
while(true){
if((i__52859_52990 < count__52858_52989)){
var node_52991 = chunk__52857_52988.cljs$core$IIndexed$_nth$arity$2(null,i__52859_52990);
if(cljs.core.not(node_52991.shadow$old)){
var path_match_52992 = shadow.cljs.devtools.client.browser.match_paths(node_52991.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52992)){
var new_link_52993 = (function (){var G__52865 = node_52991.cloneNode(true);
G__52865.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52992),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52865;
})();
(node_52991.shadow$old = true);

(new_link_52993.onload = ((function (seq__52853_52987,chunk__52857_52988,count__52858_52989,i__52859_52990,seq__52819,chunk__52821,count__52822,i__52823,new_link_52993,path_match_52992,node_52991,path,map__52817,map__52817__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52991);
});})(seq__52853_52987,chunk__52857_52988,count__52858_52989,i__52859_52990,seq__52819,chunk__52821,count__52822,i__52823,new_link_52993,path_match_52992,node_52991,path,map__52817,map__52817__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52992], 0));

goog.dom.insertSiblingAfter(new_link_52993,node_52991);


var G__52994 = seq__52853_52987;
var G__52995 = chunk__52857_52988;
var G__52996 = count__52858_52989;
var G__52997 = (i__52859_52990 + (1));
seq__52853_52987 = G__52994;
chunk__52857_52988 = G__52995;
count__52858_52989 = G__52996;
i__52859_52990 = G__52997;
continue;
} else {
var G__52998 = seq__52853_52987;
var G__52999 = chunk__52857_52988;
var G__53000 = count__52858_52989;
var G__53001 = (i__52859_52990 + (1));
seq__52853_52987 = G__52998;
chunk__52857_52988 = G__52999;
count__52858_52989 = G__53000;
i__52859_52990 = G__53001;
continue;
}
} else {
var G__53002 = seq__52853_52987;
var G__53003 = chunk__52857_52988;
var G__53004 = count__52858_52989;
var G__53005 = (i__52859_52990 + (1));
seq__52853_52987 = G__53002;
chunk__52857_52988 = G__53003;
count__52858_52989 = G__53004;
i__52859_52990 = G__53005;
continue;
}
} else {
var temp__5753__auto___53006 = cljs.core.seq(seq__52853_52987);
if(temp__5753__auto___53006){
var seq__52853_53007__$1 = temp__5753__auto___53006;
if(cljs.core.chunked_seq_QMARK_(seq__52853_53007__$1)){
var c__4638__auto___53008 = cljs.core.chunk_first(seq__52853_53007__$1);
var G__53009 = cljs.core.chunk_rest(seq__52853_53007__$1);
var G__53010 = c__4638__auto___53008;
var G__53011 = cljs.core.count(c__4638__auto___53008);
var G__53012 = (0);
seq__52853_52987 = G__53009;
chunk__52857_52988 = G__53010;
count__52858_52989 = G__53011;
i__52859_52990 = G__53012;
continue;
} else {
var node_53013 = cljs.core.first(seq__52853_53007__$1);
if(cljs.core.not(node_53013.shadow$old)){
var path_match_53014 = shadow.cljs.devtools.client.browser.match_paths(node_53013.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53014)){
var new_link_53015 = (function (){var G__52871 = node_53013.cloneNode(true);
G__52871.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53014),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52871;
})();
(node_53013.shadow$old = true);

(new_link_53015.onload = ((function (seq__52853_52987,chunk__52857_52988,count__52858_52989,i__52859_52990,seq__52819,chunk__52821,count__52822,i__52823,new_link_53015,path_match_53014,node_53013,seq__52853_53007__$1,temp__5753__auto___53006,path,map__52817,map__52817__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53013);
});})(seq__52853_52987,chunk__52857_52988,count__52858_52989,i__52859_52990,seq__52819,chunk__52821,count__52822,i__52823,new_link_53015,path_match_53014,node_53013,seq__52853_53007__$1,temp__5753__auto___53006,path,map__52817,map__52817__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53014], 0));

goog.dom.insertSiblingAfter(new_link_53015,node_53013);


var G__53016 = cljs.core.next(seq__52853_53007__$1);
var G__53017 = null;
var G__53018 = (0);
var G__53019 = (0);
seq__52853_52987 = G__53016;
chunk__52857_52988 = G__53017;
count__52858_52989 = G__53018;
i__52859_52990 = G__53019;
continue;
} else {
var G__53020 = cljs.core.next(seq__52853_53007__$1);
var G__53021 = null;
var G__53022 = (0);
var G__53023 = (0);
seq__52853_52987 = G__53020;
chunk__52857_52988 = G__53021;
count__52858_52989 = G__53022;
i__52859_52990 = G__53023;
continue;
}
} else {
var G__53024 = cljs.core.next(seq__52853_53007__$1);
var G__53025 = null;
var G__53026 = (0);
var G__53027 = (0);
seq__52853_52987 = G__53024;
chunk__52857_52988 = G__53025;
count__52858_52989 = G__53026;
i__52859_52990 = G__53027;
continue;
}
}
} else {
}
}
break;
}


var G__53028 = seq__52819;
var G__53029 = chunk__52821;
var G__53030 = count__52822;
var G__53031 = (i__52823 + (1));
seq__52819 = G__53028;
chunk__52821 = G__53029;
count__52822 = G__53030;
i__52823 = G__53031;
continue;
} else {
var G__53034 = seq__52819;
var G__53035 = chunk__52821;
var G__53036 = count__52822;
var G__53037 = (i__52823 + (1));
seq__52819 = G__53034;
chunk__52821 = G__53035;
count__52822 = G__53036;
i__52823 = G__53037;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52819);
if(temp__5753__auto__){
var seq__52819__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52819__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52819__$1);
var G__53038 = cljs.core.chunk_rest(seq__52819__$1);
var G__53039 = c__4638__auto__;
var G__53040 = cljs.core.count(c__4638__auto__);
var G__53041 = (0);
seq__52819 = G__53038;
chunk__52821 = G__53039;
count__52822 = G__53040;
i__52823 = G__53041;
continue;
} else {
var path = cljs.core.first(seq__52819__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52873_53042 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52877_53043 = null;
var count__52878_53044 = (0);
var i__52879_53045 = (0);
while(true){
if((i__52879_53045 < count__52878_53044)){
var node_53047 = chunk__52877_53043.cljs$core$IIndexed$_nth$arity$2(null,i__52879_53045);
if(cljs.core.not(node_53047.shadow$old)){
var path_match_53049 = shadow.cljs.devtools.client.browser.match_paths(node_53047.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53049)){
var new_link_53050 = (function (){var G__52885 = node_53047.cloneNode(true);
G__52885.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53049),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52885;
})();
(node_53047.shadow$old = true);

(new_link_53050.onload = ((function (seq__52873_53042,chunk__52877_53043,count__52878_53044,i__52879_53045,seq__52819,chunk__52821,count__52822,i__52823,new_link_53050,path_match_53049,node_53047,path,seq__52819__$1,temp__5753__auto__,map__52817,map__52817__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53047);
});})(seq__52873_53042,chunk__52877_53043,count__52878_53044,i__52879_53045,seq__52819,chunk__52821,count__52822,i__52823,new_link_53050,path_match_53049,node_53047,path,seq__52819__$1,temp__5753__auto__,map__52817,map__52817__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53049], 0));

goog.dom.insertSiblingAfter(new_link_53050,node_53047);


var G__53053 = seq__52873_53042;
var G__53054 = chunk__52877_53043;
var G__53055 = count__52878_53044;
var G__53056 = (i__52879_53045 + (1));
seq__52873_53042 = G__53053;
chunk__52877_53043 = G__53054;
count__52878_53044 = G__53055;
i__52879_53045 = G__53056;
continue;
} else {
var G__53057 = seq__52873_53042;
var G__53058 = chunk__52877_53043;
var G__53059 = count__52878_53044;
var G__53060 = (i__52879_53045 + (1));
seq__52873_53042 = G__53057;
chunk__52877_53043 = G__53058;
count__52878_53044 = G__53059;
i__52879_53045 = G__53060;
continue;
}
} else {
var G__53061 = seq__52873_53042;
var G__53062 = chunk__52877_53043;
var G__53063 = count__52878_53044;
var G__53064 = (i__52879_53045 + (1));
seq__52873_53042 = G__53061;
chunk__52877_53043 = G__53062;
count__52878_53044 = G__53063;
i__52879_53045 = G__53064;
continue;
}
} else {
var temp__5753__auto___53065__$1 = cljs.core.seq(seq__52873_53042);
if(temp__5753__auto___53065__$1){
var seq__52873_53066__$1 = temp__5753__auto___53065__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52873_53066__$1)){
var c__4638__auto___53067 = cljs.core.chunk_first(seq__52873_53066__$1);
var G__53068 = cljs.core.chunk_rest(seq__52873_53066__$1);
var G__53069 = c__4638__auto___53067;
var G__53070 = cljs.core.count(c__4638__auto___53067);
var G__53071 = (0);
seq__52873_53042 = G__53068;
chunk__52877_53043 = G__53069;
count__52878_53044 = G__53070;
i__52879_53045 = G__53071;
continue;
} else {
var node_53072 = cljs.core.first(seq__52873_53066__$1);
if(cljs.core.not(node_53072.shadow$old)){
var path_match_53073 = shadow.cljs.devtools.client.browser.match_paths(node_53072.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53073)){
var new_link_53074 = (function (){var G__52888 = node_53072.cloneNode(true);
G__52888.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53073),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52888;
})();
(node_53072.shadow$old = true);

(new_link_53074.onload = ((function (seq__52873_53042,chunk__52877_53043,count__52878_53044,i__52879_53045,seq__52819,chunk__52821,count__52822,i__52823,new_link_53074,path_match_53073,node_53072,seq__52873_53066__$1,temp__5753__auto___53065__$1,path,seq__52819__$1,temp__5753__auto__,map__52817,map__52817__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53072);
});})(seq__52873_53042,chunk__52877_53043,count__52878_53044,i__52879_53045,seq__52819,chunk__52821,count__52822,i__52823,new_link_53074,path_match_53073,node_53072,seq__52873_53066__$1,temp__5753__auto___53065__$1,path,seq__52819__$1,temp__5753__auto__,map__52817,map__52817__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53073], 0));

goog.dom.insertSiblingAfter(new_link_53074,node_53072);


var G__53075 = cljs.core.next(seq__52873_53066__$1);
var G__53076 = null;
var G__53077 = (0);
var G__53078 = (0);
seq__52873_53042 = G__53075;
chunk__52877_53043 = G__53076;
count__52878_53044 = G__53077;
i__52879_53045 = G__53078;
continue;
} else {
var G__53079 = cljs.core.next(seq__52873_53066__$1);
var G__53080 = null;
var G__53081 = (0);
var G__53082 = (0);
seq__52873_53042 = G__53079;
chunk__52877_53043 = G__53080;
count__52878_53044 = G__53081;
i__52879_53045 = G__53082;
continue;
}
} else {
var G__53083 = cljs.core.next(seq__52873_53066__$1);
var G__53084 = null;
var G__53085 = (0);
var G__53086 = (0);
seq__52873_53042 = G__53083;
chunk__52877_53043 = G__53084;
count__52878_53044 = G__53085;
i__52879_53045 = G__53086;
continue;
}
}
} else {
}
}
break;
}


var G__53087 = cljs.core.next(seq__52819__$1);
var G__53088 = null;
var G__53089 = (0);
var G__53090 = (0);
seq__52819 = G__53087;
chunk__52821 = G__53088;
count__52822 = G__53089;
i__52823 = G__53090;
continue;
} else {
var G__53091 = cljs.core.next(seq__52819__$1);
var G__53092 = null;
var G__53093 = (0);
var G__53094 = (0);
seq__52819 = G__53091;
chunk__52821 = G__53092;
count__52822 = G__53093;
i__52823 = G__53094;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52892){
var map__52893 = p__52892;
var map__52893__$1 = cljs.core.__destructure_map(map__52893);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52893__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52894){
var map__52895 = p__52894;
var map__52895__$1 = cljs.core.__destructure_map(map__52895);
var _ = map__52895__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52896,done,error){
var map__52897 = p__52896;
var map__52897__$1 = cljs.core.__destructure_map(map__52897);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52897__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52898,done,error){
var map__52899 = p__52898;
var map__52899__$1 = cljs.core.__destructure_map(map__52899);
var msg = map__52899__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52900){
var map__52901 = p__52900;
var map__52901__$1 = cljs.core.__destructure_map(map__52901);
var src = map__52901__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52902 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52902) : done.call(null,G__52902));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52903){
var map__52904 = p__52903;
var map__52904__$1 = cljs.core.__destructure_map(map__52904);
var msg__$1 = map__52904__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52905){var ex = e52905;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52906){
var map__52908 = p__52906;
var map__52908__$1 = cljs.core.__destructure_map(map__52908);
var env = map__52908__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52908__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52909){
var map__52910 = p__52909;
var map__52910__$1 = cljs.core.__destructure_map(map__52910);
var msg = map__52910__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52913){
var map__52915 = p__52913;
var map__52915__$1 = cljs.core.__destructure_map(map__52915);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__52916){
var map__52917 = p__52916;
var map__52917__$1 = cljs.core.__destructure_map(map__52917);
var svc = map__52917__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52917__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
