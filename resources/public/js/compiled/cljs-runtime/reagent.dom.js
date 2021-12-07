goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__42831 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42832 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42832);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__42833 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42834 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42834);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42833);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42831);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__42836 = arguments.length;
switch (G__42836) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__42837 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42837,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42837,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__42840_42870 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__42841_42871 = null;
var count__42842_42872 = (0);
var i__42843_42873 = (0);
while(true){
if((i__42843_42873 < count__42842_42872)){
var vec__42863_42874 = chunk__42841_42871.cljs$core$IIndexed$_nth$arity$2(null,i__42843_42873);
var container_42875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42863_42874,(0),null);
var comp_42876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42863_42874,(1),null);
reagent.dom.re_render_component(comp_42876,container_42875);


var G__42877 = seq__42840_42870;
var G__42878 = chunk__42841_42871;
var G__42879 = count__42842_42872;
var G__42880 = (i__42843_42873 + (1));
seq__42840_42870 = G__42877;
chunk__42841_42871 = G__42878;
count__42842_42872 = G__42879;
i__42843_42873 = G__42880;
continue;
} else {
var temp__5753__auto___42881 = cljs.core.seq(seq__42840_42870);
if(temp__5753__auto___42881){
var seq__42840_42886__$1 = temp__5753__auto___42881;
if(cljs.core.chunked_seq_QMARK_(seq__42840_42886__$1)){
var c__4638__auto___42887 = cljs.core.chunk_first(seq__42840_42886__$1);
var G__42888 = cljs.core.chunk_rest(seq__42840_42886__$1);
var G__42889 = c__4638__auto___42887;
var G__42890 = cljs.core.count(c__4638__auto___42887);
var G__42891 = (0);
seq__42840_42870 = G__42888;
chunk__42841_42871 = G__42889;
count__42842_42872 = G__42890;
i__42843_42873 = G__42891;
continue;
} else {
var vec__42866_42892 = cljs.core.first(seq__42840_42886__$1);
var container_42893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42866_42892,(0),null);
var comp_42894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42866_42892,(1),null);
reagent.dom.re_render_component(comp_42894,container_42893);


var G__42895 = cljs.core.next(seq__42840_42886__$1);
var G__42896 = null;
var G__42897 = (0);
var G__42898 = (0);
seq__42840_42870 = G__42895;
chunk__42841_42871 = G__42896;
count__42842_42872 = G__42897;
i__42843_42873 = G__42898;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
