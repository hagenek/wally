goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43963 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_43963(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43965 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_43965(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42823 = coll;
var G__42824 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42823,G__42824) : shadow.dom.lazy_native_coll_seq.call(null,G__42823,G__42824));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42900 = arguments.length;
switch (G__42900) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42944 = arguments.length;
switch (G__42944) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42972 = arguments.length;
switch (G__42972) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42985 = arguments.length;
switch (G__42985) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__43001 = arguments.length;
switch (G__43001) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__43013 = arguments.length;
switch (G__43013) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e43032){if((e43032 instanceof Object)){
var e = e43032;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43032;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__43044 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43045 = null;
var count__43046 = (0);
var i__43047 = (0);
while(true){
if((i__43047 < count__43046)){
var el = chunk__43045.cljs$core$IIndexed$_nth$arity$2(null,i__43047);
var handler_43997__$1 = ((function (seq__43044,chunk__43045,count__43046,i__43047,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43044,chunk__43045,count__43046,i__43047,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43997__$1);


var G__44000 = seq__43044;
var G__44001 = chunk__43045;
var G__44002 = count__43046;
var G__44003 = (i__43047 + (1));
seq__43044 = G__44000;
chunk__43045 = G__44001;
count__43046 = G__44002;
i__43047 = G__44003;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43044);
if(temp__5753__auto__){
var seq__43044__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43044__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43044__$1);
var G__44004 = cljs.core.chunk_rest(seq__43044__$1);
var G__44005 = c__4638__auto__;
var G__44006 = cljs.core.count(c__4638__auto__);
var G__44007 = (0);
seq__43044 = G__44004;
chunk__43045 = G__44005;
count__43046 = G__44006;
i__43047 = G__44007;
continue;
} else {
var el = cljs.core.first(seq__43044__$1);
var handler_44008__$1 = ((function (seq__43044,chunk__43045,count__43046,i__43047,el,seq__43044__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43044,chunk__43045,count__43046,i__43047,el,seq__43044__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44008__$1);


var G__44010 = cljs.core.next(seq__43044__$1);
var G__44011 = null;
var G__44012 = (0);
var G__44013 = (0);
seq__43044 = G__44010;
chunk__43045 = G__44011;
count__43046 = G__44012;
i__43047 = G__44013;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__43061 = arguments.length;
switch (G__43061) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__43075 = cljs.core.seq(events);
var chunk__43076 = null;
var count__43077 = (0);
var i__43078 = (0);
while(true){
if((i__43078 < count__43077)){
var vec__43096 = chunk__43076.cljs$core$IIndexed$_nth$arity$2(null,i__43078);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43096,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44020 = seq__43075;
var G__44021 = chunk__43076;
var G__44022 = count__43077;
var G__44023 = (i__43078 + (1));
seq__43075 = G__44020;
chunk__43076 = G__44021;
count__43077 = G__44022;
i__43078 = G__44023;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43075);
if(temp__5753__auto__){
var seq__43075__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43075__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43075__$1);
var G__44024 = cljs.core.chunk_rest(seq__43075__$1);
var G__44025 = c__4638__auto__;
var G__44026 = cljs.core.count(c__4638__auto__);
var G__44027 = (0);
seq__43075 = G__44024;
chunk__43076 = G__44025;
count__43077 = G__44026;
i__43078 = G__44027;
continue;
} else {
var vec__43104 = cljs.core.first(seq__43075__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43104,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44028 = cljs.core.next(seq__43075__$1);
var G__44029 = null;
var G__44030 = (0);
var G__44031 = (0);
seq__43075 = G__44028;
chunk__43076 = G__44029;
count__43077 = G__44030;
i__43078 = G__44031;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__43110 = cljs.core.seq(styles);
var chunk__43111 = null;
var count__43112 = (0);
var i__43113 = (0);
while(true){
if((i__43113 < count__43112)){
var vec__43125 = chunk__43111.cljs$core$IIndexed$_nth$arity$2(null,i__43113);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43125,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44036 = seq__43110;
var G__44037 = chunk__43111;
var G__44038 = count__43112;
var G__44039 = (i__43113 + (1));
seq__43110 = G__44036;
chunk__43111 = G__44037;
count__43112 = G__44038;
i__43113 = G__44039;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43110);
if(temp__5753__auto__){
var seq__43110__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43110__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43110__$1);
var G__44040 = cljs.core.chunk_rest(seq__43110__$1);
var G__44041 = c__4638__auto__;
var G__44042 = cljs.core.count(c__4638__auto__);
var G__44043 = (0);
seq__43110 = G__44040;
chunk__43111 = G__44041;
count__43112 = G__44042;
i__43113 = G__44043;
continue;
} else {
var vec__43131 = cljs.core.first(seq__43110__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43131,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44044 = cljs.core.next(seq__43110__$1);
var G__44045 = null;
var G__44046 = (0);
var G__44047 = (0);
seq__43110 = G__44044;
chunk__43111 = G__44045;
count__43112 = G__44046;
i__43113 = G__44047;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__43150_44048 = key;
var G__43150_44049__$1 = (((G__43150_44048 instanceof cljs.core.Keyword))?G__43150_44048.fqn:null);
switch (G__43150_44049__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_44051 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_44051,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_44051,"aria-");
}
})())){
el.setAttribute(ks_44051,value);
} else {
(el[ks_44051] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__43175){
var map__43177 = p__43175;
var map__43177__$1 = cljs.core.__destructure_map(map__43177);
var props = map__43177__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__43178 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43178,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43178,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43178,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__43183 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__43183,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__43183;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__43189 = arguments.length;
switch (G__43189) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__43208){
var vec__43209 = p__43208;
var seq__43210 = cljs.core.seq(vec__43209);
var first__43211 = cljs.core.first(seq__43210);
var seq__43210__$1 = cljs.core.next(seq__43210);
var nn = first__43211;
var first__43211__$1 = cljs.core.first(seq__43210__$1);
var seq__43210__$2 = cljs.core.next(seq__43210__$1);
var np = first__43211__$1;
var nc = seq__43210__$2;
var node = vec__43209;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43216 = nn;
var G__43217 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43216,G__43217) : create_fn.call(null,G__43216,G__43217));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43218 = nn;
var G__43219 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43218,G__43219) : create_fn.call(null,G__43218,G__43219));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__43223 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43223,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43223,(1),null);
var seq__43227_44058 = cljs.core.seq(node_children);
var chunk__43228_44059 = null;
var count__43229_44060 = (0);
var i__43230_44061 = (0);
while(true){
if((i__43230_44061 < count__43229_44060)){
var child_struct_44062 = chunk__43228_44059.cljs$core$IIndexed$_nth$arity$2(null,i__43230_44061);
var children_44063 = shadow.dom.dom_node(child_struct_44062);
if(cljs.core.seq_QMARK_(children_44063)){
var seq__43278_44064 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44063));
var chunk__43280_44065 = null;
var count__43281_44066 = (0);
var i__43282_44067 = (0);
while(true){
if((i__43282_44067 < count__43281_44066)){
var child_44068 = chunk__43280_44065.cljs$core$IIndexed$_nth$arity$2(null,i__43282_44067);
if(cljs.core.truth_(child_44068)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44068);


var G__44069 = seq__43278_44064;
var G__44070 = chunk__43280_44065;
var G__44071 = count__43281_44066;
var G__44072 = (i__43282_44067 + (1));
seq__43278_44064 = G__44069;
chunk__43280_44065 = G__44070;
count__43281_44066 = G__44071;
i__43282_44067 = G__44072;
continue;
} else {
var G__44074 = seq__43278_44064;
var G__44075 = chunk__43280_44065;
var G__44076 = count__43281_44066;
var G__44077 = (i__43282_44067 + (1));
seq__43278_44064 = G__44074;
chunk__43280_44065 = G__44075;
count__43281_44066 = G__44076;
i__43282_44067 = G__44077;
continue;
}
} else {
var temp__5753__auto___44078 = cljs.core.seq(seq__43278_44064);
if(temp__5753__auto___44078){
var seq__43278_44079__$1 = temp__5753__auto___44078;
if(cljs.core.chunked_seq_QMARK_(seq__43278_44079__$1)){
var c__4638__auto___44080 = cljs.core.chunk_first(seq__43278_44079__$1);
var G__44082 = cljs.core.chunk_rest(seq__43278_44079__$1);
var G__44083 = c__4638__auto___44080;
var G__44084 = cljs.core.count(c__4638__auto___44080);
var G__44085 = (0);
seq__43278_44064 = G__44082;
chunk__43280_44065 = G__44083;
count__43281_44066 = G__44084;
i__43282_44067 = G__44085;
continue;
} else {
var child_44086 = cljs.core.first(seq__43278_44079__$1);
if(cljs.core.truth_(child_44086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44086);


var G__44087 = cljs.core.next(seq__43278_44079__$1);
var G__44088 = null;
var G__44089 = (0);
var G__44090 = (0);
seq__43278_44064 = G__44087;
chunk__43280_44065 = G__44088;
count__43281_44066 = G__44089;
i__43282_44067 = G__44090;
continue;
} else {
var G__44091 = cljs.core.next(seq__43278_44079__$1);
var G__44092 = null;
var G__44093 = (0);
var G__44094 = (0);
seq__43278_44064 = G__44091;
chunk__43280_44065 = G__44092;
count__43281_44066 = G__44093;
i__43282_44067 = G__44094;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44063);
}


var G__44095 = seq__43227_44058;
var G__44096 = chunk__43228_44059;
var G__44097 = count__43229_44060;
var G__44098 = (i__43230_44061 + (1));
seq__43227_44058 = G__44095;
chunk__43228_44059 = G__44096;
count__43229_44060 = G__44097;
i__43230_44061 = G__44098;
continue;
} else {
var temp__5753__auto___44099 = cljs.core.seq(seq__43227_44058);
if(temp__5753__auto___44099){
var seq__43227_44100__$1 = temp__5753__auto___44099;
if(cljs.core.chunked_seq_QMARK_(seq__43227_44100__$1)){
var c__4638__auto___44101 = cljs.core.chunk_first(seq__43227_44100__$1);
var G__44102 = cljs.core.chunk_rest(seq__43227_44100__$1);
var G__44103 = c__4638__auto___44101;
var G__44104 = cljs.core.count(c__4638__auto___44101);
var G__44105 = (0);
seq__43227_44058 = G__44102;
chunk__43228_44059 = G__44103;
count__43229_44060 = G__44104;
i__43230_44061 = G__44105;
continue;
} else {
var child_struct_44106 = cljs.core.first(seq__43227_44100__$1);
var children_44107 = shadow.dom.dom_node(child_struct_44106);
if(cljs.core.seq_QMARK_(children_44107)){
var seq__43298_44108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44107));
var chunk__43300_44109 = null;
var count__43301_44110 = (0);
var i__43302_44111 = (0);
while(true){
if((i__43302_44111 < count__43301_44110)){
var child_44112 = chunk__43300_44109.cljs$core$IIndexed$_nth$arity$2(null,i__43302_44111);
if(cljs.core.truth_(child_44112)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44112);


var G__44113 = seq__43298_44108;
var G__44114 = chunk__43300_44109;
var G__44115 = count__43301_44110;
var G__44116 = (i__43302_44111 + (1));
seq__43298_44108 = G__44113;
chunk__43300_44109 = G__44114;
count__43301_44110 = G__44115;
i__43302_44111 = G__44116;
continue;
} else {
var G__44117 = seq__43298_44108;
var G__44118 = chunk__43300_44109;
var G__44119 = count__43301_44110;
var G__44120 = (i__43302_44111 + (1));
seq__43298_44108 = G__44117;
chunk__43300_44109 = G__44118;
count__43301_44110 = G__44119;
i__43302_44111 = G__44120;
continue;
}
} else {
var temp__5753__auto___44121__$1 = cljs.core.seq(seq__43298_44108);
if(temp__5753__auto___44121__$1){
var seq__43298_44122__$1 = temp__5753__auto___44121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43298_44122__$1)){
var c__4638__auto___44123 = cljs.core.chunk_first(seq__43298_44122__$1);
var G__44124 = cljs.core.chunk_rest(seq__43298_44122__$1);
var G__44125 = c__4638__auto___44123;
var G__44126 = cljs.core.count(c__4638__auto___44123);
var G__44127 = (0);
seq__43298_44108 = G__44124;
chunk__43300_44109 = G__44125;
count__43301_44110 = G__44126;
i__43302_44111 = G__44127;
continue;
} else {
var child_44128 = cljs.core.first(seq__43298_44122__$1);
if(cljs.core.truth_(child_44128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44128);


var G__44129 = cljs.core.next(seq__43298_44122__$1);
var G__44130 = null;
var G__44131 = (0);
var G__44132 = (0);
seq__43298_44108 = G__44129;
chunk__43300_44109 = G__44130;
count__43301_44110 = G__44131;
i__43302_44111 = G__44132;
continue;
} else {
var G__44133 = cljs.core.next(seq__43298_44122__$1);
var G__44134 = null;
var G__44135 = (0);
var G__44136 = (0);
seq__43298_44108 = G__44133;
chunk__43300_44109 = G__44134;
count__43301_44110 = G__44135;
i__43302_44111 = G__44136;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44107);
}


var G__44137 = cljs.core.next(seq__43227_44100__$1);
var G__44138 = null;
var G__44139 = (0);
var G__44140 = (0);
seq__43227_44058 = G__44137;
chunk__43228_44059 = G__44138;
count__43229_44060 = G__44139;
i__43230_44061 = G__44140;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__43332 = cljs.core.seq(node);
var chunk__43333 = null;
var count__43334 = (0);
var i__43335 = (0);
while(true){
if((i__43335 < count__43334)){
var n = chunk__43333.cljs$core$IIndexed$_nth$arity$2(null,i__43335);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44141 = seq__43332;
var G__44142 = chunk__43333;
var G__44143 = count__43334;
var G__44144 = (i__43335 + (1));
seq__43332 = G__44141;
chunk__43333 = G__44142;
count__43334 = G__44143;
i__43335 = G__44144;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43332);
if(temp__5753__auto__){
var seq__43332__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43332__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43332__$1);
var G__44145 = cljs.core.chunk_rest(seq__43332__$1);
var G__44146 = c__4638__auto__;
var G__44147 = cljs.core.count(c__4638__auto__);
var G__44148 = (0);
seq__43332 = G__44145;
chunk__43333 = G__44146;
count__43334 = G__44147;
i__43335 = G__44148;
continue;
} else {
var n = cljs.core.first(seq__43332__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44149 = cljs.core.next(seq__43332__$1);
var G__44150 = null;
var G__44151 = (0);
var G__44152 = (0);
seq__43332 = G__44149;
chunk__43333 = G__44150;
count__43334 = G__44151;
i__43335 = G__44152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__43367 = arguments.length;
switch (G__43367) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__43384 = arguments.length;
switch (G__43384) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__43397 = arguments.length;
switch (G__43397) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44162 = arguments.length;
var i__4819__auto___44163 = (0);
while(true){
if((i__4819__auto___44163 < len__4818__auto___44162)){
args__4824__auto__.push((arguments[i__4819__auto___44163]));

var G__44164 = (i__4819__auto___44163 + (1));
i__4819__auto___44163 = G__44164;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__43414_44165 = cljs.core.seq(nodes);
var chunk__43415_44166 = null;
var count__43416_44167 = (0);
var i__43417_44168 = (0);
while(true){
if((i__43417_44168 < count__43416_44167)){
var node_44169 = chunk__43415_44166.cljs$core$IIndexed$_nth$arity$2(null,i__43417_44168);
fragment.appendChild(shadow.dom._to_dom(node_44169));


var G__44170 = seq__43414_44165;
var G__44171 = chunk__43415_44166;
var G__44172 = count__43416_44167;
var G__44173 = (i__43417_44168 + (1));
seq__43414_44165 = G__44170;
chunk__43415_44166 = G__44171;
count__43416_44167 = G__44172;
i__43417_44168 = G__44173;
continue;
} else {
var temp__5753__auto___44174 = cljs.core.seq(seq__43414_44165);
if(temp__5753__auto___44174){
var seq__43414_44176__$1 = temp__5753__auto___44174;
if(cljs.core.chunked_seq_QMARK_(seq__43414_44176__$1)){
var c__4638__auto___44177 = cljs.core.chunk_first(seq__43414_44176__$1);
var G__44181 = cljs.core.chunk_rest(seq__43414_44176__$1);
var G__44182 = c__4638__auto___44177;
var G__44183 = cljs.core.count(c__4638__auto___44177);
var G__44184 = (0);
seq__43414_44165 = G__44181;
chunk__43415_44166 = G__44182;
count__43416_44167 = G__44183;
i__43417_44168 = G__44184;
continue;
} else {
var node_44185 = cljs.core.first(seq__43414_44176__$1);
fragment.appendChild(shadow.dom._to_dom(node_44185));


var G__44186 = cljs.core.next(seq__43414_44176__$1);
var G__44187 = null;
var G__44188 = (0);
var G__44189 = (0);
seq__43414_44165 = G__44186;
chunk__43415_44166 = G__44187;
count__43416_44167 = G__44188;
i__43417_44168 = G__44189;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq43404){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43404));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__43435_44190 = cljs.core.seq(scripts);
var chunk__43436_44191 = null;
var count__43437_44192 = (0);
var i__43438_44193 = (0);
while(true){
if((i__43438_44193 < count__43437_44192)){
var vec__43463_44194 = chunk__43436_44191.cljs$core$IIndexed$_nth$arity$2(null,i__43438_44193);
var script_tag_44195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463_44194,(0),null);
var script_body_44196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463_44194,(1),null);
eval(script_body_44196);


var G__44197 = seq__43435_44190;
var G__44198 = chunk__43436_44191;
var G__44199 = count__43437_44192;
var G__44200 = (i__43438_44193 + (1));
seq__43435_44190 = G__44197;
chunk__43436_44191 = G__44198;
count__43437_44192 = G__44199;
i__43438_44193 = G__44200;
continue;
} else {
var temp__5753__auto___44201 = cljs.core.seq(seq__43435_44190);
if(temp__5753__auto___44201){
var seq__43435_44202__$1 = temp__5753__auto___44201;
if(cljs.core.chunked_seq_QMARK_(seq__43435_44202__$1)){
var c__4638__auto___44203 = cljs.core.chunk_first(seq__43435_44202__$1);
var G__44204 = cljs.core.chunk_rest(seq__43435_44202__$1);
var G__44205 = c__4638__auto___44203;
var G__44206 = cljs.core.count(c__4638__auto___44203);
var G__44207 = (0);
seq__43435_44190 = G__44204;
chunk__43436_44191 = G__44205;
count__43437_44192 = G__44206;
i__43438_44193 = G__44207;
continue;
} else {
var vec__43476_44208 = cljs.core.first(seq__43435_44202__$1);
var script_tag_44209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43476_44208,(0),null);
var script_body_44210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43476_44208,(1),null);
eval(script_body_44210);


var G__44211 = cljs.core.next(seq__43435_44202__$1);
var G__44212 = null;
var G__44213 = (0);
var G__44214 = (0);
seq__43435_44190 = G__44211;
chunk__43436_44191 = G__44212;
count__43437_44192 = G__44213;
i__43438_44193 = G__44214;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__43483){
var vec__43487 = p__43483;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43487,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43487,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__43525 = arguments.length;
switch (G__43525) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__43555 = cljs.core.seq(style_keys);
var chunk__43556 = null;
var count__43557 = (0);
var i__43558 = (0);
while(true){
if((i__43558 < count__43557)){
var it = chunk__43556.cljs$core$IIndexed$_nth$arity$2(null,i__43558);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44227 = seq__43555;
var G__44228 = chunk__43556;
var G__44229 = count__43557;
var G__44230 = (i__43558 + (1));
seq__43555 = G__44227;
chunk__43556 = G__44228;
count__43557 = G__44229;
i__43558 = G__44230;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43555);
if(temp__5753__auto__){
var seq__43555__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43555__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43555__$1);
var G__44232 = cljs.core.chunk_rest(seq__43555__$1);
var G__44233 = c__4638__auto__;
var G__44234 = cljs.core.count(c__4638__auto__);
var G__44235 = (0);
seq__43555 = G__44232;
chunk__43556 = G__44233;
count__43557 = G__44234;
i__43558 = G__44235;
continue;
} else {
var it = cljs.core.first(seq__43555__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44236 = cljs.core.next(seq__43555__$1);
var G__44237 = null;
var G__44238 = (0);
var G__44239 = (0);
seq__43555 = G__44236;
chunk__43556 = G__44237;
count__43557 = G__44238;
i__43558 = G__44239;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k43576,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__43585 = k43576;
var G__43585__$1 = (((G__43585 instanceof cljs.core.Keyword))?G__43585.fqn:null);
switch (G__43585__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43576,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__43590){
var vec__43593 = p__43590;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43593,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43593,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43575){
var self__ = this;
var G__43575__$1 = this;
return (new cljs.core.RecordIter((0),G__43575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43577,other43578){
var self__ = this;
var this43577__$1 = this;
return (((!((other43578 == null)))) && ((((this43577__$1.constructor === other43578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43577__$1.x,other43578.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43577__$1.y,other43578.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43577__$1.__extmap,other43578.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k43576){
var self__ = this;
var this__4468__auto____$1 = this;
var G__43603 = k43576;
var G__43603__$1 = (((G__43603 instanceof cljs.core.Keyword))?G__43603.fqn:null);
switch (G__43603__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43576);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__43575){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__43604 = cljs.core.keyword_identical_QMARK_;
var expr__43605 = k__4470__auto__;
if(cljs.core.truth_((pred__43604.cljs$core$IFn$_invoke$arity$2 ? pred__43604.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__43605) : pred__43604.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__43605)))){
return (new shadow.dom.Coordinate(G__43575,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43604.cljs$core$IFn$_invoke$arity$2 ? pred__43604.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__43605) : pred__43604.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__43605)))){
return (new shadow.dom.Coordinate(self__.x,G__43575,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__43575),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__43575){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__43575,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__43580){
var extmap__4501__auto__ = (function (){var G__43609 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43580,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__43580)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43609);
} else {
return G__43609;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__43580),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__43580),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k43621,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__43631 = k43621;
var G__43631__$1 = (((G__43631 instanceof cljs.core.Keyword))?G__43631.fqn:null);
switch (G__43631__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43621,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__43635){
var vec__43636 = p__43635;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43620){
var self__ = this;
var G__43620__$1 = this;
return (new cljs.core.RecordIter((0),G__43620__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43622,other43623){
var self__ = this;
var this43622__$1 = this;
return (((!((other43623 == null)))) && ((((this43622__$1.constructor === other43623.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43622__$1.w,other43623.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43622__$1.h,other43623.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43622__$1.__extmap,other43623.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k43621){
var self__ = this;
var this__4468__auto____$1 = this;
var G__43675 = k43621;
var G__43675__$1 = (((G__43675 instanceof cljs.core.Keyword))?G__43675.fqn:null);
switch (G__43675__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43621);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__43620){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__43681 = cljs.core.keyword_identical_QMARK_;
var expr__43682 = k__4470__auto__;
if(cljs.core.truth_((pred__43681.cljs$core$IFn$_invoke$arity$2 ? pred__43681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__43682) : pred__43681.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__43682)))){
return (new shadow.dom.Size(G__43620,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43681.cljs$core$IFn$_invoke$arity$2 ? pred__43681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__43682) : pred__43681.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__43682)))){
return (new shadow.dom.Size(self__.w,G__43620,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__43620),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__43620){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__43620,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__43626){
var extmap__4501__auto__ = (function (){var G__43691 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43626,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__43626)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43691);
} else {
return G__43691;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__43626),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__43626),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__44270 = (i + (1));
var G__44271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__44270;
ret = G__44271;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43736){
var vec__43737 = p__43736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43749 = arguments.length;
switch (G__43749) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__44277 = ps;
var G__44278 = (i + (1));
el__$1 = G__44277;
i = G__44278;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43798 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43805_44279 = cljs.core.seq(props);
var chunk__43806_44280 = null;
var count__43807_44281 = (0);
var i__43808_44282 = (0);
while(true){
if((i__43808_44282 < count__43807_44281)){
var vec__43818_44283 = chunk__43806_44280.cljs$core$IIndexed$_nth$arity$2(null,i__43808_44282);
var k_44284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818_44283,(0),null);
var v_44285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818_44283,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_44284);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44284),v_44285);


var G__44286 = seq__43805_44279;
var G__44287 = chunk__43806_44280;
var G__44288 = count__43807_44281;
var G__44289 = (i__43808_44282 + (1));
seq__43805_44279 = G__44286;
chunk__43806_44280 = G__44287;
count__43807_44281 = G__44288;
i__43808_44282 = G__44289;
continue;
} else {
var temp__5753__auto___44290 = cljs.core.seq(seq__43805_44279);
if(temp__5753__auto___44290){
var seq__43805_44291__$1 = temp__5753__auto___44290;
if(cljs.core.chunked_seq_QMARK_(seq__43805_44291__$1)){
var c__4638__auto___44292 = cljs.core.chunk_first(seq__43805_44291__$1);
var G__44293 = cljs.core.chunk_rest(seq__43805_44291__$1);
var G__44294 = c__4638__auto___44292;
var G__44295 = cljs.core.count(c__4638__auto___44292);
var G__44296 = (0);
seq__43805_44279 = G__44293;
chunk__43806_44280 = G__44294;
count__43807_44281 = G__44295;
i__43808_44282 = G__44296;
continue;
} else {
var vec__43824_44301 = cljs.core.first(seq__43805_44291__$1);
var k_44302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43824_44301,(0),null);
var v_44303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43824_44301,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_44302);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44302),v_44303);


var G__44304 = cljs.core.next(seq__43805_44291__$1);
var G__44305 = null;
var G__44306 = (0);
var G__44307 = (0);
seq__43805_44279 = G__44304;
chunk__43806_44280 = G__44305;
count__43807_44281 = G__44306;
i__43808_44282 = G__44307;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43832 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43832,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43832,(1),null);
var seq__43835_44308 = cljs.core.seq(node_children);
var chunk__43837_44309 = null;
var count__43838_44310 = (0);
var i__43839_44311 = (0);
while(true){
if((i__43839_44311 < count__43838_44310)){
var child_struct_44312 = chunk__43837_44309.cljs$core$IIndexed$_nth$arity$2(null,i__43839_44311);
if((!((child_struct_44312 == null)))){
if(typeof child_struct_44312 === 'string'){
var text_44313 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44313),child_struct_44312].join(''));
} else {
var children_44314 = shadow.dom.svg_node(child_struct_44312);
if(cljs.core.seq_QMARK_(children_44314)){
var seq__43860_44315 = cljs.core.seq(children_44314);
var chunk__43862_44316 = null;
var count__43863_44317 = (0);
var i__43864_44318 = (0);
while(true){
if((i__43864_44318 < count__43863_44317)){
var child_44319 = chunk__43862_44316.cljs$core$IIndexed$_nth$arity$2(null,i__43864_44318);
if(cljs.core.truth_(child_44319)){
node.appendChild(child_44319);


var G__44320 = seq__43860_44315;
var G__44321 = chunk__43862_44316;
var G__44322 = count__43863_44317;
var G__44323 = (i__43864_44318 + (1));
seq__43860_44315 = G__44320;
chunk__43862_44316 = G__44321;
count__43863_44317 = G__44322;
i__43864_44318 = G__44323;
continue;
} else {
var G__44324 = seq__43860_44315;
var G__44325 = chunk__43862_44316;
var G__44326 = count__43863_44317;
var G__44327 = (i__43864_44318 + (1));
seq__43860_44315 = G__44324;
chunk__43862_44316 = G__44325;
count__43863_44317 = G__44326;
i__43864_44318 = G__44327;
continue;
}
} else {
var temp__5753__auto___44328 = cljs.core.seq(seq__43860_44315);
if(temp__5753__auto___44328){
var seq__43860_44329__$1 = temp__5753__auto___44328;
if(cljs.core.chunked_seq_QMARK_(seq__43860_44329__$1)){
var c__4638__auto___44330 = cljs.core.chunk_first(seq__43860_44329__$1);
var G__44331 = cljs.core.chunk_rest(seq__43860_44329__$1);
var G__44332 = c__4638__auto___44330;
var G__44333 = cljs.core.count(c__4638__auto___44330);
var G__44334 = (0);
seq__43860_44315 = G__44331;
chunk__43862_44316 = G__44332;
count__43863_44317 = G__44333;
i__43864_44318 = G__44334;
continue;
} else {
var child_44335 = cljs.core.first(seq__43860_44329__$1);
if(cljs.core.truth_(child_44335)){
node.appendChild(child_44335);


var G__44339 = cljs.core.next(seq__43860_44329__$1);
var G__44340 = null;
var G__44341 = (0);
var G__44342 = (0);
seq__43860_44315 = G__44339;
chunk__43862_44316 = G__44340;
count__43863_44317 = G__44341;
i__43864_44318 = G__44342;
continue;
} else {
var G__44343 = cljs.core.next(seq__43860_44329__$1);
var G__44344 = null;
var G__44345 = (0);
var G__44346 = (0);
seq__43860_44315 = G__44343;
chunk__43862_44316 = G__44344;
count__43863_44317 = G__44345;
i__43864_44318 = G__44346;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44314);
}
}


var G__44347 = seq__43835_44308;
var G__44348 = chunk__43837_44309;
var G__44349 = count__43838_44310;
var G__44350 = (i__43839_44311 + (1));
seq__43835_44308 = G__44347;
chunk__43837_44309 = G__44348;
count__43838_44310 = G__44349;
i__43839_44311 = G__44350;
continue;
} else {
var G__44351 = seq__43835_44308;
var G__44352 = chunk__43837_44309;
var G__44353 = count__43838_44310;
var G__44354 = (i__43839_44311 + (1));
seq__43835_44308 = G__44351;
chunk__43837_44309 = G__44352;
count__43838_44310 = G__44353;
i__43839_44311 = G__44354;
continue;
}
} else {
var temp__5753__auto___44355 = cljs.core.seq(seq__43835_44308);
if(temp__5753__auto___44355){
var seq__43835_44356__$1 = temp__5753__auto___44355;
if(cljs.core.chunked_seq_QMARK_(seq__43835_44356__$1)){
var c__4638__auto___44357 = cljs.core.chunk_first(seq__43835_44356__$1);
var G__44358 = cljs.core.chunk_rest(seq__43835_44356__$1);
var G__44359 = c__4638__auto___44357;
var G__44360 = cljs.core.count(c__4638__auto___44357);
var G__44361 = (0);
seq__43835_44308 = G__44358;
chunk__43837_44309 = G__44359;
count__43838_44310 = G__44360;
i__43839_44311 = G__44361;
continue;
} else {
var child_struct_44362 = cljs.core.first(seq__43835_44356__$1);
if((!((child_struct_44362 == null)))){
if(typeof child_struct_44362 === 'string'){
var text_44363 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44363),child_struct_44362].join(''));
} else {
var children_44364 = shadow.dom.svg_node(child_struct_44362);
if(cljs.core.seq_QMARK_(children_44364)){
var seq__43871_44365 = cljs.core.seq(children_44364);
var chunk__43873_44366 = null;
var count__43874_44367 = (0);
var i__43875_44368 = (0);
while(true){
if((i__43875_44368 < count__43874_44367)){
var child_44369 = chunk__43873_44366.cljs$core$IIndexed$_nth$arity$2(null,i__43875_44368);
if(cljs.core.truth_(child_44369)){
node.appendChild(child_44369);


var G__44370 = seq__43871_44365;
var G__44371 = chunk__43873_44366;
var G__44372 = count__43874_44367;
var G__44373 = (i__43875_44368 + (1));
seq__43871_44365 = G__44370;
chunk__43873_44366 = G__44371;
count__43874_44367 = G__44372;
i__43875_44368 = G__44373;
continue;
} else {
var G__44374 = seq__43871_44365;
var G__44375 = chunk__43873_44366;
var G__44376 = count__43874_44367;
var G__44377 = (i__43875_44368 + (1));
seq__43871_44365 = G__44374;
chunk__43873_44366 = G__44375;
count__43874_44367 = G__44376;
i__43875_44368 = G__44377;
continue;
}
} else {
var temp__5753__auto___44378__$1 = cljs.core.seq(seq__43871_44365);
if(temp__5753__auto___44378__$1){
var seq__43871_44379__$1 = temp__5753__auto___44378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43871_44379__$1)){
var c__4638__auto___44380 = cljs.core.chunk_first(seq__43871_44379__$1);
var G__44381 = cljs.core.chunk_rest(seq__43871_44379__$1);
var G__44382 = c__4638__auto___44380;
var G__44383 = cljs.core.count(c__4638__auto___44380);
var G__44384 = (0);
seq__43871_44365 = G__44381;
chunk__43873_44366 = G__44382;
count__43874_44367 = G__44383;
i__43875_44368 = G__44384;
continue;
} else {
var child_44385 = cljs.core.first(seq__43871_44379__$1);
if(cljs.core.truth_(child_44385)){
node.appendChild(child_44385);


var G__44386 = cljs.core.next(seq__43871_44379__$1);
var G__44387 = null;
var G__44388 = (0);
var G__44389 = (0);
seq__43871_44365 = G__44386;
chunk__43873_44366 = G__44387;
count__43874_44367 = G__44388;
i__43875_44368 = G__44389;
continue;
} else {
var G__44390 = cljs.core.next(seq__43871_44379__$1);
var G__44391 = null;
var G__44392 = (0);
var G__44393 = (0);
seq__43871_44365 = G__44390;
chunk__43873_44366 = G__44391;
count__43874_44367 = G__44392;
i__43875_44368 = G__44393;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44364);
}
}


var G__44394 = cljs.core.next(seq__43835_44356__$1);
var G__44395 = null;
var G__44396 = (0);
var G__44397 = (0);
seq__43835_44308 = G__44394;
chunk__43837_44309 = G__44395;
count__43838_44310 = G__44396;
i__43839_44311 = G__44397;
continue;
} else {
var G__44398 = cljs.core.next(seq__43835_44356__$1);
var G__44399 = null;
var G__44400 = (0);
var G__44401 = (0);
seq__43835_44308 = G__44398;
chunk__43837_44309 = G__44399;
count__43838_44310 = G__44400;
i__43839_44311 = G__44401;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44405 = arguments.length;
var i__4819__auto___44406 = (0);
while(true){
if((i__4819__auto___44406 < len__4818__auto___44405)){
args__4824__auto__.push((arguments[i__4819__auto___44406]));

var G__44407 = (i__4819__auto___44406 + (1));
i__4819__auto___44406 = G__44407;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43891){
var G__43892 = cljs.core.first(seq43891);
var seq43891__$1 = cljs.core.next(seq43891);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43892,seq43891__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43909 = arguments.length;
switch (G__43909) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__40370__auto___44410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40371__auto__ = (function (){var switch__40202__auto__ = (function (state_43919){
var state_val_43920 = (state_43919[(1)]);
if((state_val_43920 === (1))){
var state_43919__$1 = state_43919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43919__$1,(2),once_or_cleanup);
} else {
if((state_val_43920 === (2))){
var inst_43916 = (state_43919[(2)]);
var inst_43917 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43919__$1 = (function (){var statearr_43926 = state_43919;
(statearr_43926[(7)] = inst_43916);

return statearr_43926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43919__$1,inst_43917);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40203__auto__ = null;
var shadow$dom$state_machine__40203__auto____0 = (function (){
var statearr_43930 = [null,null,null,null,null,null,null,null];
(statearr_43930[(0)] = shadow$dom$state_machine__40203__auto__);

(statearr_43930[(1)] = (1));

return statearr_43930;
});
var shadow$dom$state_machine__40203__auto____1 = (function (state_43919){
while(true){
var ret_value__40204__auto__ = (function (){try{while(true){
var result__40205__auto__ = switch__40202__auto__(state_43919);
if(cljs.core.keyword_identical_QMARK_(result__40205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40205__auto__;
}
break;
}
}catch (e43932){var ex__40206__auto__ = e43932;
var statearr_43934_44413 = state_43919;
(statearr_43934_44413[(2)] = ex__40206__auto__);


if(cljs.core.seq((state_43919[(4)]))){
var statearr_43936_44414 = state_43919;
(statearr_43936_44414[(1)] = cljs.core.first((state_43919[(4)])));

} else {
throw ex__40206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44418 = state_43919;
state_43919 = G__44418;
continue;
} else {
return ret_value__40204__auto__;
}
break;
}
});
shadow$dom$state_machine__40203__auto__ = function(state_43919){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40203__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40203__auto____1.call(this,state_43919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40203__auto____0;
shadow$dom$state_machine__40203__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40203__auto____1;
return shadow$dom$state_machine__40203__auto__;
})()
})();
var state__40372__auto__ = (function (){var statearr_43942 = f__40371__auto__();
(statearr_43942[(6)] = c__40370__auto___44410);

return statearr_43942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40372__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
