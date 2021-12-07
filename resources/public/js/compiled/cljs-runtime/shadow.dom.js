goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51042 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_51042(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51045 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_51045(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50372 = coll;
var G__50373 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50372,G__50373) : shadow.dom.lazy_native_coll_seq.call(null,G__50372,G__50373));
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
var G__50378 = arguments.length;
switch (G__50378) {
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
var G__50383 = arguments.length;
switch (G__50383) {
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
var G__50386 = arguments.length;
switch (G__50386) {
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
var G__50391 = arguments.length;
switch (G__50391) {
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
var G__50393 = arguments.length;
switch (G__50393) {
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
var G__50401 = arguments.length;
switch (G__50401) {
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
}catch (e50406){if((e50406 instanceof Object)){
var e = e50406;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50406;

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
var seq__50417 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50418 = null;
var count__50419 = (0);
var i__50420 = (0);
while(true){
if((i__50420 < count__50419)){
var el = chunk__50418.cljs$core$IIndexed$_nth$arity$2(null,i__50420);
var handler_51078__$1 = ((function (seq__50417,chunk__50418,count__50419,i__50420,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50417,chunk__50418,count__50419,i__50420,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51078__$1);


var G__51081 = seq__50417;
var G__51082 = chunk__50418;
var G__51083 = count__50419;
var G__51084 = (i__50420 + (1));
seq__50417 = G__51081;
chunk__50418 = G__51082;
count__50419 = G__51083;
i__50420 = G__51084;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50417);
if(temp__5753__auto__){
var seq__50417__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50417__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50417__$1);
var G__51087 = cljs.core.chunk_rest(seq__50417__$1);
var G__51088 = c__4638__auto__;
var G__51089 = cljs.core.count(c__4638__auto__);
var G__51090 = (0);
seq__50417 = G__51087;
chunk__50418 = G__51088;
count__50419 = G__51089;
i__50420 = G__51090;
continue;
} else {
var el = cljs.core.first(seq__50417__$1);
var handler_51091__$1 = ((function (seq__50417,chunk__50418,count__50419,i__50420,el,seq__50417__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50417,chunk__50418,count__50419,i__50420,el,seq__50417__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51091__$1);


var G__51092 = cljs.core.next(seq__50417__$1);
var G__51093 = null;
var G__51094 = (0);
var G__51095 = (0);
seq__50417 = G__51092;
chunk__50418 = G__51093;
count__50419 = G__51094;
i__50420 = G__51095;
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
var G__50436 = arguments.length;
switch (G__50436) {
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
var seq__50446 = cljs.core.seq(events);
var chunk__50447 = null;
var count__50448 = (0);
var i__50449 = (0);
while(true){
if((i__50449 < count__50448)){
var vec__50457 = chunk__50447.cljs$core$IIndexed$_nth$arity$2(null,i__50449);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51098 = seq__50446;
var G__51099 = chunk__50447;
var G__51100 = count__50448;
var G__51101 = (i__50449 + (1));
seq__50446 = G__51098;
chunk__50447 = G__51099;
count__50448 = G__51100;
i__50449 = G__51101;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50446);
if(temp__5753__auto__){
var seq__50446__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50446__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50446__$1);
var G__51102 = cljs.core.chunk_rest(seq__50446__$1);
var G__51103 = c__4638__auto__;
var G__51104 = cljs.core.count(c__4638__auto__);
var G__51105 = (0);
seq__50446 = G__51102;
chunk__50447 = G__51103;
count__50448 = G__51104;
i__50449 = G__51105;
continue;
} else {
var vec__50464 = cljs.core.first(seq__50446__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50464,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51106 = cljs.core.next(seq__50446__$1);
var G__51107 = null;
var G__51108 = (0);
var G__51109 = (0);
seq__50446 = G__51106;
chunk__50447 = G__51107;
count__50448 = G__51108;
i__50449 = G__51109;
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
var seq__50468 = cljs.core.seq(styles);
var chunk__50469 = null;
var count__50470 = (0);
var i__50471 = (0);
while(true){
if((i__50471 < count__50470)){
var vec__50481 = chunk__50469.cljs$core$IIndexed$_nth$arity$2(null,i__50471);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51122 = seq__50468;
var G__51123 = chunk__50469;
var G__51124 = count__50470;
var G__51125 = (i__50471 + (1));
seq__50468 = G__51122;
chunk__50469 = G__51123;
count__50470 = G__51124;
i__50471 = G__51125;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50468);
if(temp__5753__auto__){
var seq__50468__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50468__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50468__$1);
var G__51127 = cljs.core.chunk_rest(seq__50468__$1);
var G__51128 = c__4638__auto__;
var G__51129 = cljs.core.count(c__4638__auto__);
var G__51130 = (0);
seq__50468 = G__51127;
chunk__50469 = G__51128;
count__50470 = G__51129;
i__50471 = G__51130;
continue;
} else {
var vec__50488 = cljs.core.first(seq__50468__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50488,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51135 = cljs.core.next(seq__50468__$1);
var G__51136 = null;
var G__51137 = (0);
var G__51138 = (0);
seq__50468 = G__51135;
chunk__50469 = G__51136;
count__50470 = G__51137;
i__50471 = G__51138;
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
var G__50495_51139 = key;
var G__50495_51140__$1 = (((G__50495_51139 instanceof cljs.core.Keyword))?G__50495_51139.fqn:null);
switch (G__50495_51140__$1) {
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
var ks_51145 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_51145,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_51145,"aria-");
}
})())){
el.setAttribute(ks_51145,value);
} else {
(el[ks_51145] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50513){
var map__50514 = p__50513;
var map__50514__$1 = cljs.core.__destructure_map(map__50514);
var props = map__50514__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50514__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50515 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50515,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50515,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50515,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50519 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50519,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50519;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50523 = arguments.length;
switch (G__50523) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50531){
var vec__50532 = p__50531;
var seq__50533 = cljs.core.seq(vec__50532);
var first__50534 = cljs.core.first(seq__50533);
var seq__50533__$1 = cljs.core.next(seq__50533);
var nn = first__50534;
var first__50534__$1 = cljs.core.first(seq__50533__$1);
var seq__50533__$2 = cljs.core.next(seq__50533__$1);
var np = first__50534__$1;
var nc = seq__50533__$2;
var node = vec__50532;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50535 = nn;
var G__50536 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50535,G__50536) : create_fn.call(null,G__50535,G__50536));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50537 = nn;
var G__50538 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50537,G__50538) : create_fn.call(null,G__50537,G__50538));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50539 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50539,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50539,(1),null);
var seq__50542_51158 = cljs.core.seq(node_children);
var chunk__50543_51159 = null;
var count__50544_51160 = (0);
var i__50545_51161 = (0);
while(true){
if((i__50545_51161 < count__50544_51160)){
var child_struct_51162 = chunk__50543_51159.cljs$core$IIndexed$_nth$arity$2(null,i__50545_51161);
var children_51163 = shadow.dom.dom_node(child_struct_51162);
if(cljs.core.seq_QMARK_(children_51163)){
var seq__50569_51164 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51163));
var chunk__50571_51165 = null;
var count__50572_51166 = (0);
var i__50573_51167 = (0);
while(true){
if((i__50573_51167 < count__50572_51166)){
var child_51174 = chunk__50571_51165.cljs$core$IIndexed$_nth$arity$2(null,i__50573_51167);
if(cljs.core.truth_(child_51174)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51174);


var G__51175 = seq__50569_51164;
var G__51176 = chunk__50571_51165;
var G__51177 = count__50572_51166;
var G__51178 = (i__50573_51167 + (1));
seq__50569_51164 = G__51175;
chunk__50571_51165 = G__51176;
count__50572_51166 = G__51177;
i__50573_51167 = G__51178;
continue;
} else {
var G__51179 = seq__50569_51164;
var G__51180 = chunk__50571_51165;
var G__51181 = count__50572_51166;
var G__51182 = (i__50573_51167 + (1));
seq__50569_51164 = G__51179;
chunk__50571_51165 = G__51180;
count__50572_51166 = G__51181;
i__50573_51167 = G__51182;
continue;
}
} else {
var temp__5753__auto___51183 = cljs.core.seq(seq__50569_51164);
if(temp__5753__auto___51183){
var seq__50569_51184__$1 = temp__5753__auto___51183;
if(cljs.core.chunked_seq_QMARK_(seq__50569_51184__$1)){
var c__4638__auto___51185 = cljs.core.chunk_first(seq__50569_51184__$1);
var G__51186 = cljs.core.chunk_rest(seq__50569_51184__$1);
var G__51187 = c__4638__auto___51185;
var G__51188 = cljs.core.count(c__4638__auto___51185);
var G__51189 = (0);
seq__50569_51164 = G__51186;
chunk__50571_51165 = G__51187;
count__50572_51166 = G__51188;
i__50573_51167 = G__51189;
continue;
} else {
var child_51190 = cljs.core.first(seq__50569_51184__$1);
if(cljs.core.truth_(child_51190)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51190);


var G__51191 = cljs.core.next(seq__50569_51184__$1);
var G__51192 = null;
var G__51193 = (0);
var G__51194 = (0);
seq__50569_51164 = G__51191;
chunk__50571_51165 = G__51192;
count__50572_51166 = G__51193;
i__50573_51167 = G__51194;
continue;
} else {
var G__51195 = cljs.core.next(seq__50569_51184__$1);
var G__51196 = null;
var G__51197 = (0);
var G__51198 = (0);
seq__50569_51164 = G__51195;
chunk__50571_51165 = G__51196;
count__50572_51166 = G__51197;
i__50573_51167 = G__51198;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51163);
}


var G__51199 = seq__50542_51158;
var G__51200 = chunk__50543_51159;
var G__51201 = count__50544_51160;
var G__51202 = (i__50545_51161 + (1));
seq__50542_51158 = G__51199;
chunk__50543_51159 = G__51200;
count__50544_51160 = G__51201;
i__50545_51161 = G__51202;
continue;
} else {
var temp__5753__auto___51203 = cljs.core.seq(seq__50542_51158);
if(temp__5753__auto___51203){
var seq__50542_51204__$1 = temp__5753__auto___51203;
if(cljs.core.chunked_seq_QMARK_(seq__50542_51204__$1)){
var c__4638__auto___51205 = cljs.core.chunk_first(seq__50542_51204__$1);
var G__51206 = cljs.core.chunk_rest(seq__50542_51204__$1);
var G__51207 = c__4638__auto___51205;
var G__51208 = cljs.core.count(c__4638__auto___51205);
var G__51209 = (0);
seq__50542_51158 = G__51206;
chunk__50543_51159 = G__51207;
count__50544_51160 = G__51208;
i__50545_51161 = G__51209;
continue;
} else {
var child_struct_51210 = cljs.core.first(seq__50542_51204__$1);
var children_51211 = shadow.dom.dom_node(child_struct_51210);
if(cljs.core.seq_QMARK_(children_51211)){
var seq__50588_51212 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51211));
var chunk__50590_51213 = null;
var count__50591_51214 = (0);
var i__50592_51215 = (0);
while(true){
if((i__50592_51215 < count__50591_51214)){
var child_51216 = chunk__50590_51213.cljs$core$IIndexed$_nth$arity$2(null,i__50592_51215);
if(cljs.core.truth_(child_51216)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51216);


var G__51217 = seq__50588_51212;
var G__51218 = chunk__50590_51213;
var G__51219 = count__50591_51214;
var G__51220 = (i__50592_51215 + (1));
seq__50588_51212 = G__51217;
chunk__50590_51213 = G__51218;
count__50591_51214 = G__51219;
i__50592_51215 = G__51220;
continue;
} else {
var G__51221 = seq__50588_51212;
var G__51222 = chunk__50590_51213;
var G__51223 = count__50591_51214;
var G__51224 = (i__50592_51215 + (1));
seq__50588_51212 = G__51221;
chunk__50590_51213 = G__51222;
count__50591_51214 = G__51223;
i__50592_51215 = G__51224;
continue;
}
} else {
var temp__5753__auto___51225__$1 = cljs.core.seq(seq__50588_51212);
if(temp__5753__auto___51225__$1){
var seq__50588_51226__$1 = temp__5753__auto___51225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50588_51226__$1)){
var c__4638__auto___51227 = cljs.core.chunk_first(seq__50588_51226__$1);
var G__51228 = cljs.core.chunk_rest(seq__50588_51226__$1);
var G__51229 = c__4638__auto___51227;
var G__51230 = cljs.core.count(c__4638__auto___51227);
var G__51231 = (0);
seq__50588_51212 = G__51228;
chunk__50590_51213 = G__51229;
count__50591_51214 = G__51230;
i__50592_51215 = G__51231;
continue;
} else {
var child_51232 = cljs.core.first(seq__50588_51226__$1);
if(cljs.core.truth_(child_51232)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51232);


var G__51233 = cljs.core.next(seq__50588_51226__$1);
var G__51234 = null;
var G__51235 = (0);
var G__51236 = (0);
seq__50588_51212 = G__51233;
chunk__50590_51213 = G__51234;
count__50591_51214 = G__51235;
i__50592_51215 = G__51236;
continue;
} else {
var G__51237 = cljs.core.next(seq__50588_51226__$1);
var G__51238 = null;
var G__51239 = (0);
var G__51240 = (0);
seq__50588_51212 = G__51237;
chunk__50590_51213 = G__51238;
count__50591_51214 = G__51239;
i__50592_51215 = G__51240;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51211);
}


var G__51241 = cljs.core.next(seq__50542_51204__$1);
var G__51242 = null;
var G__51243 = (0);
var G__51244 = (0);
seq__50542_51158 = G__51241;
chunk__50543_51159 = G__51242;
count__50544_51160 = G__51243;
i__50545_51161 = G__51244;
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
var seq__50621 = cljs.core.seq(node);
var chunk__50622 = null;
var count__50623 = (0);
var i__50624 = (0);
while(true){
if((i__50624 < count__50623)){
var n = chunk__50622.cljs$core$IIndexed$_nth$arity$2(null,i__50624);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51249 = seq__50621;
var G__51250 = chunk__50622;
var G__51251 = count__50623;
var G__51252 = (i__50624 + (1));
seq__50621 = G__51249;
chunk__50622 = G__51250;
count__50623 = G__51251;
i__50624 = G__51252;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50621);
if(temp__5753__auto__){
var seq__50621__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50621__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50621__$1);
var G__51253 = cljs.core.chunk_rest(seq__50621__$1);
var G__51254 = c__4638__auto__;
var G__51255 = cljs.core.count(c__4638__auto__);
var G__51256 = (0);
seq__50621 = G__51253;
chunk__50622 = G__51254;
count__50623 = G__51255;
i__50624 = G__51256;
continue;
} else {
var n = cljs.core.first(seq__50621__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51257 = cljs.core.next(seq__50621__$1);
var G__51258 = null;
var G__51259 = (0);
var G__51260 = (0);
seq__50621 = G__51257;
chunk__50622 = G__51258;
count__50623 = G__51259;
i__50624 = G__51260;
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
var G__50633 = arguments.length;
switch (G__50633) {
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
var G__50637 = arguments.length;
switch (G__50637) {
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
var G__50646 = arguments.length;
switch (G__50646) {
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
var len__4818__auto___51274 = arguments.length;
var i__4819__auto___51275 = (0);
while(true){
if((i__4819__auto___51275 < len__4818__auto___51274)){
args__4824__auto__.push((arguments[i__4819__auto___51275]));

var G__51276 = (i__4819__auto___51275 + (1));
i__4819__auto___51275 = G__51276;
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
var seq__50666_51277 = cljs.core.seq(nodes);
var chunk__50667_51278 = null;
var count__50668_51279 = (0);
var i__50669_51280 = (0);
while(true){
if((i__50669_51280 < count__50668_51279)){
var node_51281 = chunk__50667_51278.cljs$core$IIndexed$_nth$arity$2(null,i__50669_51280);
fragment.appendChild(shadow.dom._to_dom(node_51281));


var G__51282 = seq__50666_51277;
var G__51283 = chunk__50667_51278;
var G__51284 = count__50668_51279;
var G__51285 = (i__50669_51280 + (1));
seq__50666_51277 = G__51282;
chunk__50667_51278 = G__51283;
count__50668_51279 = G__51284;
i__50669_51280 = G__51285;
continue;
} else {
var temp__5753__auto___51286 = cljs.core.seq(seq__50666_51277);
if(temp__5753__auto___51286){
var seq__50666_51290__$1 = temp__5753__auto___51286;
if(cljs.core.chunked_seq_QMARK_(seq__50666_51290__$1)){
var c__4638__auto___51291 = cljs.core.chunk_first(seq__50666_51290__$1);
var G__51292 = cljs.core.chunk_rest(seq__50666_51290__$1);
var G__51293 = c__4638__auto___51291;
var G__51294 = cljs.core.count(c__4638__auto___51291);
var G__51295 = (0);
seq__50666_51277 = G__51292;
chunk__50667_51278 = G__51293;
count__50668_51279 = G__51294;
i__50669_51280 = G__51295;
continue;
} else {
var node_51296 = cljs.core.first(seq__50666_51290__$1);
fragment.appendChild(shadow.dom._to_dom(node_51296));


var G__51297 = cljs.core.next(seq__50666_51290__$1);
var G__51298 = null;
var G__51299 = (0);
var G__51300 = (0);
seq__50666_51277 = G__51297;
chunk__50667_51278 = G__51298;
count__50668_51279 = G__51299;
i__50669_51280 = G__51300;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50662){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50662));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50670_51301 = cljs.core.seq(scripts);
var chunk__50671_51302 = null;
var count__50672_51303 = (0);
var i__50673_51304 = (0);
while(true){
if((i__50673_51304 < count__50672_51303)){
var vec__50680_51305 = chunk__50671_51302.cljs$core$IIndexed$_nth$arity$2(null,i__50673_51304);
var script_tag_51306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50680_51305,(0),null);
var script_body_51307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50680_51305,(1),null);
eval(script_body_51307);


var G__51308 = seq__50670_51301;
var G__51309 = chunk__50671_51302;
var G__51310 = count__50672_51303;
var G__51311 = (i__50673_51304 + (1));
seq__50670_51301 = G__51308;
chunk__50671_51302 = G__51309;
count__50672_51303 = G__51310;
i__50673_51304 = G__51311;
continue;
} else {
var temp__5753__auto___51312 = cljs.core.seq(seq__50670_51301);
if(temp__5753__auto___51312){
var seq__50670_51313__$1 = temp__5753__auto___51312;
if(cljs.core.chunked_seq_QMARK_(seq__50670_51313__$1)){
var c__4638__auto___51314 = cljs.core.chunk_first(seq__50670_51313__$1);
var G__51315 = cljs.core.chunk_rest(seq__50670_51313__$1);
var G__51316 = c__4638__auto___51314;
var G__51317 = cljs.core.count(c__4638__auto___51314);
var G__51318 = (0);
seq__50670_51301 = G__51315;
chunk__50671_51302 = G__51316;
count__50672_51303 = G__51317;
i__50673_51304 = G__51318;
continue;
} else {
var vec__50683_51319 = cljs.core.first(seq__50670_51313__$1);
var script_tag_51320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50683_51319,(0),null);
var script_body_51321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50683_51319,(1),null);
eval(script_body_51321);


var G__51322 = cljs.core.next(seq__50670_51313__$1);
var G__51323 = null;
var G__51324 = (0);
var G__51325 = (0);
seq__50670_51301 = G__51322;
chunk__50671_51302 = G__51323;
count__50672_51303 = G__51324;
i__50673_51304 = G__51325;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50686){
var vec__50687 = p__50686;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50687,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50687,(1),null);
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
var G__50695 = arguments.length;
switch (G__50695) {
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
var seq__50718 = cljs.core.seq(style_keys);
var chunk__50719 = null;
var count__50720 = (0);
var i__50721 = (0);
while(true){
if((i__50721 < count__50720)){
var it = chunk__50719.cljs$core$IIndexed$_nth$arity$2(null,i__50721);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51330 = seq__50718;
var G__51331 = chunk__50719;
var G__51332 = count__50720;
var G__51333 = (i__50721 + (1));
seq__50718 = G__51330;
chunk__50719 = G__51331;
count__50720 = G__51332;
i__50721 = G__51333;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50718);
if(temp__5753__auto__){
var seq__50718__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50718__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50718__$1);
var G__51334 = cljs.core.chunk_rest(seq__50718__$1);
var G__51335 = c__4638__auto__;
var G__51336 = cljs.core.count(c__4638__auto__);
var G__51337 = (0);
seq__50718 = G__51334;
chunk__50719 = G__51335;
count__50720 = G__51336;
i__50721 = G__51337;
continue;
} else {
var it = cljs.core.first(seq__50718__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51338 = cljs.core.next(seq__50718__$1);
var G__51339 = null;
var G__51340 = (0);
var G__51341 = (0);
seq__50718 = G__51338;
chunk__50719 = G__51339;
count__50720 = G__51340;
i__50721 = G__51341;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50731,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50739 = k50731;
var G__50739__$1 = (((G__50739 instanceof cljs.core.Keyword))?G__50739.fqn:null);
switch (G__50739__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50731,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50741){
var vec__50742 = p__50741;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50730){
var self__ = this;
var G__50730__$1 = this;
return (new cljs.core.RecordIter((0),G__50730__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50732,other50733){
var self__ = this;
var this50732__$1 = this;
return (((!((other50733 == null)))) && ((((this50732__$1.constructor === other50733.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50732__$1.x,other50733.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50732__$1.y,other50733.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50732__$1.__extmap,other50733.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50731){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50751 = k50731;
var G__50751__$1 = (((G__50751 instanceof cljs.core.Keyword))?G__50751.fqn:null);
switch (G__50751__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50731);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50730){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50753 = cljs.core.keyword_identical_QMARK_;
var expr__50754 = k__4470__auto__;
if(cljs.core.truth_((pred__50753.cljs$core$IFn$_invoke$arity$2 ? pred__50753.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50754) : pred__50753.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50754)))){
return (new shadow.dom.Coordinate(G__50730,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50753.cljs$core$IFn$_invoke$arity$2 ? pred__50753.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50754) : pred__50753.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50754)))){
return (new shadow.dom.Coordinate(self__.x,G__50730,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50730),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50730){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50730,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50735){
var extmap__4501__auto__ = (function (){var G__50764 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50735,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50764);
} else {
return G__50764;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50735),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50735),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50773,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50784 = k50773;
var G__50784__$1 = (((G__50784 instanceof cljs.core.Keyword))?G__50784.fqn:null);
switch (G__50784__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50773,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50790){
var vec__50791 = p__50790;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50791,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50791,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50772){
var self__ = this;
var G__50772__$1 = this;
return (new cljs.core.RecordIter((0),G__50772__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50774,other50775){
var self__ = this;
var this50774__$1 = this;
return (((!((other50775 == null)))) && ((((this50774__$1.constructor === other50775.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50774__$1.w,other50775.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50774__$1.h,other50775.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50774__$1.__extmap,other50775.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50773){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50805 = k50773;
var G__50805__$1 = (((G__50805 instanceof cljs.core.Keyword))?G__50805.fqn:null);
switch (G__50805__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50773);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50772){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50807 = cljs.core.keyword_identical_QMARK_;
var expr__50808 = k__4470__auto__;
if(cljs.core.truth_((pred__50807.cljs$core$IFn$_invoke$arity$2 ? pred__50807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50808) : pred__50807.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50808)))){
return (new shadow.dom.Size(G__50772,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50807.cljs$core$IFn$_invoke$arity$2 ? pred__50807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50808) : pred__50807.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50808)))){
return (new shadow.dom.Size(self__.w,G__50772,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50772),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50772){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50772,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50776){
var extmap__4501__auto__ = (function (){var G__50813 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50776,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50776)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50813);
} else {
return G__50813;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50776),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50776),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__51366 = (i + (1));
var G__51367 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51366;
ret = G__51367;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50839){
var vec__50840 = p__50839;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50847 = arguments.length;
switch (G__50847) {
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
var G__51373 = ps;
var G__51374 = (i + (1));
el__$1 = G__51373;
i = G__51374;
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
var vec__50879 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50879,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50879,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50879,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50885_51377 = cljs.core.seq(props);
var chunk__50896_51378 = null;
var count__50897_51379 = (0);
var i__50898_51380 = (0);
while(true){
if((i__50898_51380 < count__50897_51379)){
var vec__50906_51381 = chunk__50896_51378.cljs$core$IIndexed$_nth$arity$2(null,i__50898_51380);
var k_51382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50906_51381,(0),null);
var v_51383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50906_51381,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51382);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51382),v_51383);


var G__51384 = seq__50885_51377;
var G__51385 = chunk__50896_51378;
var G__51386 = count__50897_51379;
var G__51387 = (i__50898_51380 + (1));
seq__50885_51377 = G__51384;
chunk__50896_51378 = G__51385;
count__50897_51379 = G__51386;
i__50898_51380 = G__51387;
continue;
} else {
var temp__5753__auto___51388 = cljs.core.seq(seq__50885_51377);
if(temp__5753__auto___51388){
var seq__50885_51389__$1 = temp__5753__auto___51388;
if(cljs.core.chunked_seq_QMARK_(seq__50885_51389__$1)){
var c__4638__auto___51390 = cljs.core.chunk_first(seq__50885_51389__$1);
var G__51391 = cljs.core.chunk_rest(seq__50885_51389__$1);
var G__51392 = c__4638__auto___51390;
var G__51393 = cljs.core.count(c__4638__auto___51390);
var G__51394 = (0);
seq__50885_51377 = G__51391;
chunk__50896_51378 = G__51392;
count__50897_51379 = G__51393;
i__50898_51380 = G__51394;
continue;
} else {
var vec__50911_51395 = cljs.core.first(seq__50885_51389__$1);
var k_51396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50911_51395,(0),null);
var v_51397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50911_51395,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51396);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51396),v_51397);


var G__51398 = cljs.core.next(seq__50885_51389__$1);
var G__51399 = null;
var G__51400 = (0);
var G__51401 = (0);
seq__50885_51377 = G__51398;
chunk__50896_51378 = G__51399;
count__50897_51379 = G__51400;
i__50898_51380 = G__51401;
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
var vec__50924 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50924,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50924,(1),null);
var seq__50927_51402 = cljs.core.seq(node_children);
var chunk__50931_51403 = null;
var count__50932_51404 = (0);
var i__50933_51405 = (0);
while(true){
if((i__50933_51405 < count__50932_51404)){
var child_struct_51406 = chunk__50931_51403.cljs$core$IIndexed$_nth$arity$2(null,i__50933_51405);
if((!((child_struct_51406 == null)))){
if(typeof child_struct_51406 === 'string'){
var text_51407 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51407),child_struct_51406].join(''));
} else {
var children_51408 = shadow.dom.svg_node(child_struct_51406);
if(cljs.core.seq_QMARK_(children_51408)){
var seq__50950_51409 = cljs.core.seq(children_51408);
var chunk__50952_51410 = null;
var count__50953_51411 = (0);
var i__50954_51412 = (0);
while(true){
if((i__50954_51412 < count__50953_51411)){
var child_51413 = chunk__50952_51410.cljs$core$IIndexed$_nth$arity$2(null,i__50954_51412);
if(cljs.core.truth_(child_51413)){
node.appendChild(child_51413);


var G__51414 = seq__50950_51409;
var G__51415 = chunk__50952_51410;
var G__51416 = count__50953_51411;
var G__51417 = (i__50954_51412 + (1));
seq__50950_51409 = G__51414;
chunk__50952_51410 = G__51415;
count__50953_51411 = G__51416;
i__50954_51412 = G__51417;
continue;
} else {
var G__51418 = seq__50950_51409;
var G__51419 = chunk__50952_51410;
var G__51420 = count__50953_51411;
var G__51421 = (i__50954_51412 + (1));
seq__50950_51409 = G__51418;
chunk__50952_51410 = G__51419;
count__50953_51411 = G__51420;
i__50954_51412 = G__51421;
continue;
}
} else {
var temp__5753__auto___51422 = cljs.core.seq(seq__50950_51409);
if(temp__5753__auto___51422){
var seq__50950_51423__$1 = temp__5753__auto___51422;
if(cljs.core.chunked_seq_QMARK_(seq__50950_51423__$1)){
var c__4638__auto___51424 = cljs.core.chunk_first(seq__50950_51423__$1);
var G__51425 = cljs.core.chunk_rest(seq__50950_51423__$1);
var G__51426 = c__4638__auto___51424;
var G__51427 = cljs.core.count(c__4638__auto___51424);
var G__51428 = (0);
seq__50950_51409 = G__51425;
chunk__50952_51410 = G__51426;
count__50953_51411 = G__51427;
i__50954_51412 = G__51428;
continue;
} else {
var child_51429 = cljs.core.first(seq__50950_51423__$1);
if(cljs.core.truth_(child_51429)){
node.appendChild(child_51429);


var G__51430 = cljs.core.next(seq__50950_51423__$1);
var G__51431 = null;
var G__51432 = (0);
var G__51433 = (0);
seq__50950_51409 = G__51430;
chunk__50952_51410 = G__51431;
count__50953_51411 = G__51432;
i__50954_51412 = G__51433;
continue;
} else {
var G__51434 = cljs.core.next(seq__50950_51423__$1);
var G__51435 = null;
var G__51436 = (0);
var G__51437 = (0);
seq__50950_51409 = G__51434;
chunk__50952_51410 = G__51435;
count__50953_51411 = G__51436;
i__50954_51412 = G__51437;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51408);
}
}


var G__51438 = seq__50927_51402;
var G__51439 = chunk__50931_51403;
var G__51440 = count__50932_51404;
var G__51441 = (i__50933_51405 + (1));
seq__50927_51402 = G__51438;
chunk__50931_51403 = G__51439;
count__50932_51404 = G__51440;
i__50933_51405 = G__51441;
continue;
} else {
var G__51442 = seq__50927_51402;
var G__51443 = chunk__50931_51403;
var G__51444 = count__50932_51404;
var G__51445 = (i__50933_51405 + (1));
seq__50927_51402 = G__51442;
chunk__50931_51403 = G__51443;
count__50932_51404 = G__51444;
i__50933_51405 = G__51445;
continue;
}
} else {
var temp__5753__auto___51446 = cljs.core.seq(seq__50927_51402);
if(temp__5753__auto___51446){
var seq__50927_51447__$1 = temp__5753__auto___51446;
if(cljs.core.chunked_seq_QMARK_(seq__50927_51447__$1)){
var c__4638__auto___51448 = cljs.core.chunk_first(seq__50927_51447__$1);
var G__51449 = cljs.core.chunk_rest(seq__50927_51447__$1);
var G__51450 = c__4638__auto___51448;
var G__51451 = cljs.core.count(c__4638__auto___51448);
var G__51452 = (0);
seq__50927_51402 = G__51449;
chunk__50931_51403 = G__51450;
count__50932_51404 = G__51451;
i__50933_51405 = G__51452;
continue;
} else {
var child_struct_51453 = cljs.core.first(seq__50927_51447__$1);
if((!((child_struct_51453 == null)))){
if(typeof child_struct_51453 === 'string'){
var text_51454 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51454),child_struct_51453].join(''));
} else {
var children_51455 = shadow.dom.svg_node(child_struct_51453);
if(cljs.core.seq_QMARK_(children_51455)){
var seq__50978_51456 = cljs.core.seq(children_51455);
var chunk__50980_51457 = null;
var count__50981_51458 = (0);
var i__50982_51459 = (0);
while(true){
if((i__50982_51459 < count__50981_51458)){
var child_51460 = chunk__50980_51457.cljs$core$IIndexed$_nth$arity$2(null,i__50982_51459);
if(cljs.core.truth_(child_51460)){
node.appendChild(child_51460);


var G__51461 = seq__50978_51456;
var G__51462 = chunk__50980_51457;
var G__51463 = count__50981_51458;
var G__51464 = (i__50982_51459 + (1));
seq__50978_51456 = G__51461;
chunk__50980_51457 = G__51462;
count__50981_51458 = G__51463;
i__50982_51459 = G__51464;
continue;
} else {
var G__51465 = seq__50978_51456;
var G__51466 = chunk__50980_51457;
var G__51467 = count__50981_51458;
var G__51468 = (i__50982_51459 + (1));
seq__50978_51456 = G__51465;
chunk__50980_51457 = G__51466;
count__50981_51458 = G__51467;
i__50982_51459 = G__51468;
continue;
}
} else {
var temp__5753__auto___51469__$1 = cljs.core.seq(seq__50978_51456);
if(temp__5753__auto___51469__$1){
var seq__50978_51470__$1 = temp__5753__auto___51469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50978_51470__$1)){
var c__4638__auto___51471 = cljs.core.chunk_first(seq__50978_51470__$1);
var G__51472 = cljs.core.chunk_rest(seq__50978_51470__$1);
var G__51473 = c__4638__auto___51471;
var G__51474 = cljs.core.count(c__4638__auto___51471);
var G__51475 = (0);
seq__50978_51456 = G__51472;
chunk__50980_51457 = G__51473;
count__50981_51458 = G__51474;
i__50982_51459 = G__51475;
continue;
} else {
var child_51480 = cljs.core.first(seq__50978_51470__$1);
if(cljs.core.truth_(child_51480)){
node.appendChild(child_51480);


var G__51481 = cljs.core.next(seq__50978_51470__$1);
var G__51482 = null;
var G__51483 = (0);
var G__51484 = (0);
seq__50978_51456 = G__51481;
chunk__50980_51457 = G__51482;
count__50981_51458 = G__51483;
i__50982_51459 = G__51484;
continue;
} else {
var G__51485 = cljs.core.next(seq__50978_51470__$1);
var G__51486 = null;
var G__51487 = (0);
var G__51488 = (0);
seq__50978_51456 = G__51485;
chunk__50980_51457 = G__51486;
count__50981_51458 = G__51487;
i__50982_51459 = G__51488;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51455);
}
}


var G__51490 = cljs.core.next(seq__50927_51447__$1);
var G__51491 = null;
var G__51492 = (0);
var G__51493 = (0);
seq__50927_51402 = G__51490;
chunk__50931_51403 = G__51491;
count__50932_51404 = G__51492;
i__50933_51405 = G__51493;
continue;
} else {
var G__51494 = cljs.core.next(seq__50927_51447__$1);
var G__51495 = null;
var G__51496 = (0);
var G__51497 = (0);
seq__50927_51402 = G__51494;
chunk__50931_51403 = G__51495;
count__50932_51404 = G__51496;
i__50933_51405 = G__51497;
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
var len__4818__auto___51499 = arguments.length;
var i__4819__auto___51500 = (0);
while(true){
if((i__4819__auto___51500 < len__4818__auto___51499)){
args__4824__auto__.push((arguments[i__4819__auto___51500]));

var G__51501 = (i__4819__auto___51500 + (1));
i__4819__auto___51500 = G__51501;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50989){
var G__50990 = cljs.core.first(seq50989);
var seq50989__$1 = cljs.core.next(seq50989);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50990,seq50989__$1);
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
var G__50992 = arguments.length;
switch (G__50992) {
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
var c__48806__auto___51505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48807__auto__ = (function (){var switch__48735__auto__ = (function (state_50998){
var state_val_50999 = (state_50998[(1)]);
if((state_val_50999 === (1))){
var state_50998__$1 = state_50998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50998__$1,(2),once_or_cleanup);
} else {
if((state_val_50999 === (2))){
var inst_50995 = (state_50998[(2)]);
var inst_50996 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50998__$1 = (function (){var statearr_51000 = state_50998;
(statearr_51000[(7)] = inst_50995);

return statearr_51000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50998__$1,inst_50996);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48736__auto__ = null;
var shadow$dom$state_machine__48736__auto____0 = (function (){
var statearr_51001 = [null,null,null,null,null,null,null,null];
(statearr_51001[(0)] = shadow$dom$state_machine__48736__auto__);

(statearr_51001[(1)] = (1));

return statearr_51001;
});
var shadow$dom$state_machine__48736__auto____1 = (function (state_50998){
while(true){
var ret_value__48737__auto__ = (function (){try{while(true){
var result__48738__auto__ = switch__48735__auto__(state_50998);
if(cljs.core.keyword_identical_QMARK_(result__48738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48738__auto__;
}
break;
}
}catch (e51002){var ex__48739__auto__ = e51002;
var statearr_51004_51510 = state_50998;
(statearr_51004_51510[(2)] = ex__48739__auto__);


if(cljs.core.seq((state_50998[(4)]))){
var statearr_51006_51511 = state_50998;
(statearr_51006_51511[(1)] = cljs.core.first((state_50998[(4)])));

} else {
throw ex__48739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51512 = state_50998;
state_50998 = G__51512;
continue;
} else {
return ret_value__48737__auto__;
}
break;
}
});
shadow$dom$state_machine__48736__auto__ = function(state_50998){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48736__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48736__auto____1.call(this,state_50998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48736__auto____0;
shadow$dom$state_machine__48736__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48736__auto____1;
return shadow$dom$state_machine__48736__auto__;
})()
})();
var state__48808__auto__ = (function (){var statearr_51010 = f__48807__auto__();
(statearr_51010[(6)] = c__48806__auto___51505);

return statearr_51010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48808__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
