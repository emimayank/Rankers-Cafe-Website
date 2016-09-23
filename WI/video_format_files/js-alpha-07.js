/* ## JQuery */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();
 
/* ## Calc  */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(w($){z p=\'v\';w 2c(){q.1p=L;q.1A=[];q.1k=11;q.2d=11;q.1l={\'62\':[\'0\',q.V,L,\'\',\'0\',\'0\'],\'63\':[\'1\',q.V,L,\'\',\'1\',\'1\'],\'64\':[\'2\',q.V,L,\'\',\'2\',\'2\'],\'65\':[\'3\',q.V,L,\'\',\'3\',\'3\'],\'66\':[\'4\',q.V,L,\'\',\'4\',\'4\'],\'67\':[\'5\',q.V,L,\'\',\'5\',\'5\'],\'68\':[\'6\',q.V,L,\'\',\'6\',\'6\'],\'69\':[\'7\',q.V,L,\'\',\'7\',\'7\'],\'6a\':[\'8\',q.V,L,\'\',\'8\',\'8\'],\'6b\':[\'9\',q.V,L,\'\',\'9\',\'9\'],\'6c\':[\'A\',q.V,L,\'1U-V\',\'A\',\'a\'],\'6d\':[\'B\',q.V,L,\'1U-V\',\'B\',\'b\'],\'6e\':[\'C\',q.V,L,\'1U-V\',\'C\',\'c\'],\'6f\':[\'D\',q.V,L,\'1U-V\',\'D\',\'d\'],\'6g\':[\'E\',q.V,L,\'1U-V\',\'E\',\'e\'],\'6h\':[\'F\',q.V,L,\'1U-V\',\'F\',\'f\'],\'14.\':[\'.\',q.V,L,\'48\',\'6i\',\'.\'],\'14+\':[\'+\',q.1s,q.3e,\'1I 49\',\'6j\',\'+\'],\'14-\':[\'-\',q.1s,q.3f,\'1I 4a\',\'6k\',\'-\'],\'14*\':[\'*\',q.1s,q.3g,\'1I 6l\',\'6m\',\'*\'],\'14/\':[\'/\',q.1s,q.3h,\'1I 6n\',\'6o\',\'/\'],\'14%\':[\'%\',q.W,q.4b,\'1I 6p\',\'6q\',\'%\'],\'14=\':[\'=\',q.W,q.3i,\'1I 6r\',\'6s\',\'=\'],\'2e\':[\'4c\',q.W,q.4d,\'4c\',\'2e\',\'p\'],\'+-\':[\'Â±\',q.W,q.4e,\'1I 6t-6u\',\'6v\',\'#\'],\'1X\':[\'1/x\',q.W,q.4f,\'6w\',\'6x\',\'i\'],\'6y\':[\'2f\',q.W,q.4g,\'2f\',\'6z\',\'l\'],\'4h\':[\'4i\',q.W,q.4j,\'4i\',\'4h\',\'n\'],\'6A\':[\'eâ?¿\',q.W,q.4k,\'4l\',\'6B\',\'E\'],\'6C\':[\'xÂ²\',q.W,q.4m,\'6D\',\'6E\',\'@\'],\'6F\':[\'âˆš\',q.W,q.4n,\'4o\',\'6G\',\'!\'],\'6H\':[\'x^y\',q.1s,q.4p,\'6I\',\'6J\',\'^\'],\'6K\':[\'6L\',q.W,q.4q,\'4r\',\'6M\',\'?\'],\'6N\':[\'3j\',q.W,q.4s,\'1V 3j\',\'6O\',\'s\'],\'6P\':[\'3k\',q.W,q.4t,\'1V 3k\',\'6Q\',\'o\'],\'6R\':[\'3l\',q.W,q.4u,\'1V 3l\',\'6S\',\'t\'],\'6T\':[\'3m\',q.W,q.4v,\'1V 3m\',\'6U\',\'S\'],\'6V\':[\'3n\',q.W,q.4w,\'1V 3n\',\'6W\',\'O\'],\'6X\':[\'3o\',q.W,q.4x,\'1V 3o\',\'6Y\',\'T\'],\'4y\':[\'#6Z\',q.W,q.4z,\'15 1J-2g\',\'70\',\'x\'],\'4A\':[\'#71\',q.W,q.4B,\'15 1J-72\',\'73\',\'r\'],\'4C\':[\'#74\',q.W,q.4D,\'15 1J-75\',\'76\',\'m\'],\'M+\':[\'#77\',q.W,q.4E,\'15 1J-49\',\'78\',\'>\'],\'M-\':[\'#79\',q.W,q.4F,\'15 1J-4a\',\'7a\',\'<\'],\'7b\':[\'#4G\',q.1b,q.4H,\'1a 4G\',\'7c\',\'B\'],\'7d\':[\'#4I\',q.1b,q.4J,\'1a 4I\',\'7e\',\'C\'],\'7f\':[\'#4K\',q.1b,q.4L,\'1a 4K\',\'7g\',\'D\'],\'7h\':[\'#4M\',q.1b,q.4N,\'1a 4M\',\'7i\',\'H\'],\'7j\':[\'#2y\',q.1b,q.4O,\'2z 2y\',\'7k\',\'G\'],\'7l\':[\'#2A\',q.1b,q.4P,\'2z 2A\',\'7m\',\'R\'],\'4Q\':[\'#7n\',q.1b,q.4R,\'7o\',\'7p\',8,\'7q\'],\'4S\':[\'#7r\',q.1b,q.4T,\'2g-7s\',\'7t\',36,\'7u\'],\'4U\':[\'#2g\',q.1b,q.4V,\'2g\',\'7v\',35,\'7w\'],\'@X\':[\'#4W\',q.1b,q.3p,\'4W\',\'7x\',27,\'7y\'],\'@U\':[\'#4X\',q.1b,q.4Y,\'4X\',\'7z\',13,\'7A\'],\'@E\':[\'#4Z\',q.1b,q.3q,\'4Z\',\'7B\',46,\'7C\'],\'  \':[\'\',q.1W,L,\'1W\',\'7D\'],\'14 \':[\'\',q.1W,L,\'7E-1W\',\'7F\'],\'??\':[\'??\',q.W,q.1B]};q.2B={};q.2C={};2h(z a 3r q.1l){I(q.1l[a][4]){q[q.1l[a][4]]=a}I(q.1l[a][5]){I(2i q.1l[a][5]==\'3s\'){q.2B[q.1l[a][5]]=a}17{q.2C[q.1l[a][5]]=a}}}q.3t=[];q.3t[\'\']={1Y:\'.\',50:\'...\',51:\'7G 1q v\',7H:\'52\',7I:\'52 1q v\',7J:\'53\',7K:\'53 1q 7L 2D\',7M:\'2E\',7N:\'2E 1q 2D 3u 1q 7O\',7P:\'4Q\',7Q:\'2E 1q 3v V\',7R:\'4S\',7S:\'2E 1q 3v 3s\',7T:\'4U\',7U:\'7V 1q v\',7W:\'4y\',7X:\'54 1q 15\',7Y:\'4A\',7Z:\'55 1q 2D 3u 15\',80:\'4C\',81:\'82 1q 2D 3r 15\',83:\'M+\',84:\'85 1K 15\',86:\'M-\',87:\'88 3u 15\',89:\'8a\',8b:\'1Z 1K 1s\',8c:\'8d\',8e:\'1Z 1K 8f\',8g:\'8h\',8i:\'1Z 1K 48\',8j:\'8k\',8l:\'1Z 1K 8m\',8n:\'8o\',8p:\'1Z 1K 2y\',8q:\'8r\',8s:\'1Z 1K 2A\',2j:11};q.2F={3w:\'1t\',56:\'\',57:11,3x:\'2G\',3y:{},3z:\'8t\',58:\'\',59:\'\',3A:\'\',5a:q.5b,1a:10,5c:10,2k:11,5d:12,5e:L,5f:L};$.2H(q.2F,q.3t[\'\']);q.2I=$(\'<19 8u="\'+q.3B+\'" 3C="3D: 5g;"></19>\').1L(q.5h)}$.2H(2c.5i,{1C:\'8v\',V:\'d\',1s:\'b\',W:\'u\',1b:\'c\',1W:\'s\',3B:\'v-19\',2J:\'v-8w\',3E:\'v-2K\',1D:\'v-8x\',3F:\'v-1m\',2l:\'v-8y\',3G:\'v-5j\',2L:\'v-8z\',2M:\'v-20\',2N:\'v-8A\',5b:[\'  5k\',\'5l+@X\',\'5m-@U\',\'5n*@E\',\'5o.14=14/\'],8B:[\'@X@U@E  5k\',\'8C    14 8D 5n+\',\'8E 8F 5m-\',\'8G 8H 5l*\',\'8I M+14 5o.+-14/\',\'8J  14 M-14   14%14=\'],8K:w(a){3H(q.2F,a||{});N q},8L:w(a,b,c,d,e,f,g,h){q.1l[a]=[b,(2i c==\'8M\'?(c?q.1s:q.W):c),d,e,f,g,h];I(f){q[f]=a}I(g){I(2i g==\'3s\'){q.2B[g]=a}17{q.2C[g]=a}}N q},5p:w(a,b){z c=$(a);z d=a.3I.2O()!=\'2P\';z e=(!d?c:$(\'<2P 2m="2Q" 1g="\'+q.2l+\'"/>\'));z f={P:e,1i:d,Q:(d?$(\'<19 1g="\'+q.2J+\'"></19>\'):q.2I)};f.1M=$.2H({},b||{});q.5q(a,f);I(d){c.2K(e).2K(f.Q).3J(\'1L.v\',w(){e.1t()});q.2n(f,\'0\',12);q.1j(f)}},5q:w(d,e){z f=$(d);I(f.21(q.1C)){N}z g=q.K(e,\'58\');z h=q.K(e,\'2j\');I(g){f[h?\'5r\':\'5s\'](\'<1u 1g="\'+q.3E+\'">\'+g+\'</1u>\')}I(!e.1i){z i=q.K(e,\'3w\');I(i==\'1t\'||i==\'3K\'){f.1t(q.22)}I(i==\'1c\'||i==\'3K\'||i==\'5t\'){z j=q.K(e,\'50\');z k=q.K(e,\'51\');z l=q.K(e,\'56\');z m=$(q.K(e,\'57\')?$(\'<2R/>\').2o({3L:l,8N:k,3M:k}):$(\'<1c 2m="1c" 3M="\'+k+\'"></1c>\').5u(l==\'\'?j:$(\'<2R/>\').2o({3L:l})));f[h?\'5r\':\'5s\'](m);m.2p(q.1D).1L(w(){I($.v.1k&&$.v.2S==d){$.v.1N()}17{$.v.22(d)}N 11})}}e.P.3N(q.2T).3O(q.2U).3P(q.2V);I(e.1i){e.Q.3N(q.2T).3O(q.2U).3P(q.2V);e.P.1t(w(){I(!$.v.2q(f[0])){e.3Q=12;$(\'.\'+$.v.3G,e.Q).2p($.v.2L)}}).5v(w(){e.3Q=11;$(\'.\'+$.v.3G,e.Q).2r($.v.2L)})}f.2p(q.1C).3J("8O.v",w(a,b,c){e.1M[b]=c}).3J("8P.v",w(a,b){N q.K(e,b)});$.1x(d,p,e);$.1x(e.P[0],p,e)},8Q:w(a){z b=$(a);I(!b.21(q.1C)){N}z c=$.1x(a,p);c.P.2s(\'3N\',q.2T).2s(\'3O\',q.2U).2s(\'3P\',q.2V);b.23(\'.\'+q.3E).2W().1O().23(\'.\'+q.1D).2W().1O().8R(\'.\'+q.2l).2W().1O().2r(q.1C).2s(\'1t\',q.22).2s(\'1L.v\').5w();$.5x(c.P[0],p);$.5x(a,p)},8S:w(b){z c=$(b);I(!c.21(q.1C)){N}z d=b.3I.2O();I(d==\'2P\'){b.1m=11;c.23(\'1c.\'+q.1D).24(w(){q.1m=11}).1O().23(\'2R.\'+q.1D).1n({5y:\'1.0\',5z:\'\'})}17 I(d==\'19\'||d==\'1u\'){c.1E(\'.\'+q.2l+\',1c\').2o(\'1m\',\'\').1O().3R(\'.\'+q.3F).2W()}q.1A=$.5A(q.1A,w(a){N(a==b?L:a)})},8T:w(b){z c=$(b);I(!c.21(q.1C)){N}z d=b.3I.2O();I(d==\'2P\'){b.1m=12;c.23(\'1c.\'+q.1D).24(w(){q.1m=12}).1O().23(\'2R.\'+q.1D).1n({5y:\'0.5\',5z:\'8U\'})}17 I(d==\'19\'||d==\'1u\'){z e=c.3R(\'.\'+q.2J);z f=e.3S();z g={1h:0,1d:0};e.2X().24(w(){I($(q).1n(\'2Y\')==\'8V\'){g=$(q).3S();N 11}});c.1E(\'.\'+q.2l+\',1c\').2o(\'1m\',\'1m\').1O().8W(\'<19 1g="\'+q.3F+\'" 3C="1P: \'+e.25()+\'26; 3T: \'+e.2t()+\'26; 1h: \'+(f.1h-g.1h)+\'26; 1d: \'+(f.1d-g.1d)+\'26;"></19>\')}q.1A=$.5A(q.1A,w(a){N(a==b?L:a)});q.1A[q.1A.1Q]=b},2q:w(a){N(a&&$.8X(a,q.1A)>-1)},8Y:w(a,b,c){z d=b||{};I(2i b==\'5B\'){d={};d[b]=c}z e=$.1x(a,p);I(e){I(q.1p==e){q.1N()}3H(e.1M,d);q.1j(e)}},22:w(b){b=b.1R||b;I($.v.2q(b)||$.v.2S==b){N}z c=$.1x(b,p);$.v.1N(L,\'\');$.v.2S=b;$.v.1S=$.v.3U(b);$.v.1S[1]+=b.8Z;z d=11;$(b).2X().24(w(){d|=$(q).1n(\'2Y\')==\'5C\';N!d});I(d&&$.1v.2u){$.v.1S[0]-=1r.1F.2Z;$.v.1S[1]-=1r.1F.30}z e={1h:$.v.1S[0],1d:$.v.1S[1]};$.v.1S=L;c.Q.1n({2Y:\'5D\',3D:\'90\',1d:\'-5E\',1P:($.1v.2u?\'5E\':\'91\')});$.v.2n(c,c.P.1G(),12);$.v.1j(c);e=$.v.5F(c,e,d);c.Q.1n({2Y:(d?\'5C\':\'5D\'),3D:\'5g\',1h:e.1h+\'26\',1d:e.1d+\'26\'});z f=$.v.K(c,\'3x\')||\'2G\';z g=$.v.K(c,\'3z\');z h=w(){$.v.1k=12;z a=$.v.3V(c.Q);c.Q.1E(\'31.\'+$.v.2N).1n({1h:-a[0],1d:-a[1],1P:c.Q.25(),3T:c.Q.2t()})};I($.32&&$.32[f]){c.Q.2G(f,$.v.K(c,\'3y\'),g,h)}17{c.Q[f](g,h)}I(g==\'\'){h()}I(c.P[0].2m!=\'5G\'){c.P[0].1t()}$.v.1p=c},2n:w(a,b,c){z d=q.K(a,\'1a\');z e=q.K(a,\'1Y\');b=\'\'+(b||0);b=(e!=\'.\'?b.1e(1y 28(e),\'.\'):b);a.J=(d==10?1T(b):1H(b,d))||0;a.Y=q.29(a);a.1o=a.3W=0;a.15=(c?0:a.15);a.1f=a.2v=q.1B;a.1z=12},1j:w(a){z b=q.3V(a.Q);a.Q.5u(q.5H(a)).1E(\'31.\'+q.2N).1n({1h:-b[0],1d:-b[1],1P:a.Q.25(),3T:a.Q.2t()});a.Q.2r().2p(q.K(a,\'59\')+\' \'+(q.K(a,\'2j\')?\'v-92 \':\'\')+(a.1i?q.2J:\'\'));I(q.1p==a){a.P.1t()}},3V:w(c){z d=w(a){z b=($.1v.3X?1:0);N{93:1+b,94:3+b,95:5+b}[a]||a};N[1T(d(c.1n(\'5I-1h-1P\'))),1T(d(c.1n(\'5I-1d-1P\')))]},5F:w(a,b,c){z d=a.P?q.3U(a.P[0]):L;z e=5J.96||1r.1F.97;z f=5J.98||1r.1F.99;z g=1r.1F.2Z||1r.3Y.2Z;z h=1r.1F.30||1r.3Y.30;I(($.1v.3X&&1H($.1v.5K,10)<7)||$.1v.2u){z i=0;$(\'.v-5L\',a.Q).1E(\'1c:3v\').24(w(){i=Z.3Z(i,q.9a+q.9b+1H($(q).1n(\'9c-9d\'),10))});a.Q.1n(\'1P\',i)}I(q.K(a,\'2j\')||(b.1h+a.Q.25()-g)>e){b.1h=Z.3Z((c?0:g),d[0]+(a.P?a.P.25():0)-(c?g:0)-a.Q.25()-(c&&$.1v.2u?1r.1F.2Z:0))}17{b.1h-=(c?g:0)}I((b.1d+a.Q.2t()-h)>f){b.1d=Z.3Z((c?0:h),d[1]-(c?h:0)-a.Q.2t()-(c&&$.1v.2u?1r.1F.30:0))}17{b.1d-=(c?h:0)}N b},3U:w(a){9e(a&&(a.2m==\'5G\'||a.9f!=1)){a=a.9g}z b=$(a).3S();N[b.1h,b.1d]},1N:w(a,b){z c=q.1p;I(!c||(a&&c!=$.1x(a,p))){N}I(q.1k){b=(b!=L?b:q.K(c,\'3z\'));z d=q.K(c,\'3x\');I(b!=\'\'&&$.32&&$.32[d]){c.Q.33(d,q.K(c,\'3y\'),b)}17{c.Q[(b==\'\'?\'33\':(d==\'9h\'?\'9i\':(d==\'9j\'?\'9k\':\'33\')))](b)}}z e=q.K(c,\'5f\');I(e){e.2a((c.P?c.P[0]:L),[(c.1i?c.J:c.P.1G()),c])}I(q.1k){q.1k=11;q.2S=L}q.1p=L},5M:w(a){I(!$.v.1p){N}z b=$(a.1R);I(!b.2X().5N().9l(\'#\'+$.v.3B)&&!b.21($.v.1C)&&!b.2X().5N().21($.v.1D)&&$.v.1k){$.v.1N(L,\'\')}},5h:w(){I($.v.1p&&$.v.1p.P){$.v.1p.P.1t()}},2T:w(e){z a=11;z b=$.1x(e.1R,p);z c=(b&&b.1i?$(e.1R).5O()[0]:L);I(e.2w==9){$.v.2I.9m(12,12);$.v.1N(L,\'\');I(b&&b.1i){b.P.5v()}}17 I($.v.1k||(c&&!$.v.2q(c))){I(e.2w==18){I(!$.v.2d){b.Q.1E(\'.\'+$.v.2M).2G();$.v.2d=12}a=12}17{z d=$.v.2B[e.2w];I(d){$(\'1c[20=\'+d+\']\',b.Q).5P(\':1m\').1L();a=12}}}17 I(e.2w==36&&e.9n&&b&&!b.1i){$.v.22(q)}I(a){e.9o();e.9p()}N!a},2U:w(e){I($.v.2d){z a=$.1x(e.1R,p);a.Q.1E(\'.\'+$.v.2M).33();$.v.2d=11}},2V:w(e){z a=$.1x(e.1R,p);I(!a){N 12}z b=(a&&a.1i?$(e.1R).5O()[0]:L);z c=9q.9r(e.5Q==40?e.2w:e.5Q);z d=$.v.K(a,\'1a\');z f=$.v.K(a,\'1Y\');z g=$.v.K(a,\'3w\');I(!$.v.1k&&!b&&(g==\'9s\'||g==\'5t\')&&c>\' \'&&(\'9t\'.2b(0,d)+\'.\'+f).34(c.2O())==-1&&!(c==\'-\'&&a.P.1G()==\'\')){$.v.22(q);$.v.1k=12}I($.v.1k||(b&&!$.v.2q(b))){z h=$.v.2C[c==f?\'.\':c];I(h){$(\'1c[20=\'+h+\']\',a.Q).5P(\':1m\').1L()}N 11}I($.v.K(a,\'5d\')){z i=(a.P.1G()+c).1e(/^0(\\d)/,\'$1\').1e(1y 28(\'^(-?)([\\\\.\'+f+\'])\'),\'$10$2\');z j=(f!=\'.\'?i.1e(1y 28(f),\'.\'):i);j=(d==10?1T(j):1H(j,d));z k=j.5R(d).1e(/\\./,f)+(c==f&&a.P.1G().34(f)==-1?c:\'\');k=(i.37(0)==\'-\'&&k.37(0)!=\'-\'?\'-\':\'\')+k;N c!=\' \'&&(c<\' \'||i==k||(!a.P.1G()&&(f+\'.-\').34(c)>-1))}N 12},K:w(a,b){N a.1M[b]!==40?a.1M[b]:q.2F[b]},5H:w(a){z b=q.K(a,\'2j\');z c=q.K(a,\'3A\');z d=q.K(a,\'5a\');z e=q.K(a,\'1a\');z f=q.K(a,\'2k\');z g=(!c?\'\':\'<19 1g="v-3A">\'+c+\'</19>\')+\'<19 1g="v-5j\'+(a.3Q?\' \'+q.2L:\'\')+\'"><1u>\'+a.Y+\'</1u></19>\';2h(z i=0;i<d.1Q;i++){g+=\'<19 1g="v-5L">\';2h(z j=0;j<d[i].1Q;j+=2){z h=d[i].2b(j,2);z l=q.1l[h]||q.1l[\'??\'];z m=(l[0].37(0)==\'#\'?q.K(a,l[0].2b(1)+\'9u\'):l[0]);z n=(l[0].37(0)==\'#\'?q.K(a,l[0].2b(1)+\'9v\'):\'\');z o=(l[3]?l[3].9w(\' \'):[]);2h(z k=0;k<o.1Q;k++){o[k]=\'v-\'+o[k]}o=o.9x(\' \');g+=(l[1]==q.1W?\'<1u 1g="v-\'+l[3]+\'"></1u>\':(a.1i&&(l[2]==\'.3p\'||l[2]==\'.3q\')?\'\':\'<1c 2m="1c" 20="\'+h+\'"\'+(l[1]==q.1b?\' 1g="v-9y\'+(l[0].1e(/^#1a/,\'\')==e?\' v-1a-41\':\'\')+(l[0]==\'#2y\'&&f?\' v-2z-41\':\'\')+(l[0]==\'#2A\'&&!f?\' v-2z-41\':\'\'):(l[1]==q.V?(1H(l[0],16)>=e||(e!=10&&l[0]==\'.\')?\' 1m="1m"\':\'\')+\' 1g="v-V\':(l[1]==q.1s?\' 1g="v-5S\':\' 1g="v-5S\'+(l[0].9z(/^#1J(54|55)$/)&&!a.15?\' v-1J-5w\':\'\'))))+(o?\' \'+o:\'\')+\'" \'+(n?\'3M="\'+n+\'"\':\'\')+\'>\'+(h==\'14.\'?q.K(a,\'1Y\'):m)+(l[5]&&l[5]!=l[0]?\'<1u 1g="\'+q.2M+(l[6]?\' v-9A\':\'\')+\'">\'+(l[6]||l[5])+\'</1u>\':\'\')+\'</1c>\'))}g+=\'</19>\'}g+=\'<19 3C="2g: 3K;"></19>\'+(!a.1i&&$.1v.3X&&1H($.1v.5K,10)<7?\'<31 3L="9B:11;" 1g="\'+q.2N+\'"></31>\':\'\');g=$(g);g.1E(\'1c\').5T(w(){$(q).2p(\'v-42-43\')}).9C(w(){$(q).2r(\'v-42-43\')}).9D(w(){$(q).2r(\'v-42-43\')}).1L(w(){$.v.5U(a,$(q))});N g},29:w(a){z b=q.K(a,\'5c\');z c=1y 5V(a.J).5W(b).5X();z d=c.1e(/^.+(e.+)$/,\'$1\').1e(/^[^e].*$/,\'\');I(d){c=1y 5V(c.1e(/e.+$/,\'\')).5W(b).5X()}N 1T(c.1e(/0+$/,\'\')+d).5R(q.K(a,\'1a\')).9E().1e(/\\./,q.K(a,\'1Y\'))},1w:w(a,b){z c=q.K(a,\'5e\');I(c){c.2a((a.P?a.P[0]:L),[b,a.Y,a])}},5U:w(a,b){z c=q.1l[b.2o(\'20\')];I(!c){N}z d=b.2Q().2b(0,b.2Q().1Q-b.3R(\'.v-20\').2Q().1Q);9F(c[1]){38 q.1b:c[2].2a(q,[a,d]);39;38 q.V:q.5Y(a,d);39;38 q.1s:q.5Z(a,c[2],d);39;38 q.W:q.44(a,c[2],d);39}I($.v.1k||a.1i){a.P.1t()}},1B:w(a){},5Y:w(a,b){z c=q.K(a,\'1Y\');a.Y=(a.1z?\'\':a.Y);I(b==c&&a.Y.34(b)>-1){N}a.Y=(a.Y+b).1e(/^0(\\d)/,\'$1\').1e(1y 28(\'^(-?)([\\\\.\'+c+\'])\'),\'$10$2\');I(c!=\'.\'){a.Y=a.Y.1e(1y 28(\'^\'+c),\'0.\')}z d=q.K(a,\'1a\');z e=(c!=\'.\'?a.Y.1e(1y 28(c),\'.\'):a.Y);a.J=(d==10?1T(e):1H(e,d));a.1z=11;q.1w(a,b);q.1j(a)},5Z:w(a,b,c){I(!a.1z&&a.1f){a.1f(a);z d=q.K(a,\'1a\');a.J=(d==10?a.J:Z.45(a.J));a.Y=q.29(a)}a.1o=a.J;a.1z=12;a.1f=b;q.1w(a,c);q.1j(a)},3e:w(a){a.J=a.1o+a.J},3f:w(a){a.J=a.1o-a.J},3g:w(a){a.J=a.1o*a.J},3h:w(a){a.J=a.1o/a.J},4p:w(a){a.J=Z.9G(a.1o,a.J)},44:w(a,b,c){a.1z=12;b.2a(q,[a]);z d=q.K(a,\'1a\');a.J=(d==10?a.J:Z.45(a.J));a.Y=q.29(a);q.1w(a,c);q.1j(a)},4e:w(a){a.J=-1*a.J;a.Y=q.29(a);a.1z=11},4d:w(a){a.J=Z.2e},4b:w(a){I(a.1f==q.3e){a.J=a.1o*(1+a.J/3a)}17 I(a.1f==q.3f){a.J=a.1o*(1-a.J/3a)}17 I(a.1f==q.3g){a.J=a.1o*a.J/3a}17 I(a.1f==q.3h){a.J=a.1o/a.J*3a}a.2v=a.1f;a.1f=q.1B},3i:w(a){I(a.1f==q.1B){I(a.2v!=q.1B){a.1o=a.J;a.J=a.3W;a.2v(a)}}17{a.2v=a.1f;a.3W=a.J;a.1f(a);a.1f=q.1B}},4E:w(a){a.15+=a.J},4F:w(a){a.15-=a.J},4D:w(a){a.15=a.J},4B:w(a){a.J=a.15},4z:w(a){a.15=0},4s:w(a){q.3b(a,Z.3j)},4t:w(a){q.3b(a,Z.3k)},4u:w(a){q.3b(a,Z.3l)},3b:w(a,b){z c=q.K(a,\'2k\');a.J=b(a.J*(c?Z.2e/60:1))},4v:w(a){q.3c(a,Z.3m)},4w:w(a){q.3c(a,Z.3n)},4x:w(a){q.3c(a,Z.3o)},3c:w(a,b){a.J=b(a.J);I(q.K(a,\'2k\')){a.J=a.J/Z.2e*60}},4f:w(a){a.J=1/a.J},4g:w(a){a.J=Z.2f(a.J)/Z.2f(10)},4j:w(a){a.J=Z.2f(a.J)},4k:w(a){a.J=Z.4l(a.J)},4m:w(a){a.J*=a.J},4n:w(a){a.J=Z.4o(a.J)},4q:w(a){a.J=Z.4r()},4H:w(a,b){q.2x(a,b,2)},4J:w(a,b){q.2x(a,b,8)},4L:w(a,b){q.2x(a,b,10)},4N:w(a,b){q.2x(a,b,16)},2x:w(a,b,c){a.1M.1a=c;a.J=(c==10?a.J:Z.45(a.J));a.Y=q.29(a);a.1z=12;q.1w(a,b);q.1j(a)},4O:w(a,b){q.47(a,b,12)},4P:w(a,b){q.47(a,b,11)},47:w(a,b,c){a.1M.2k=c;q.1w(a,b);q.1j(a)},4R:w(a,b){a.Y=a.Y.2b(0,a.Y.1Q-1)||\'0\';z c=q.K(a,\'1a\');a.J=(c==10?1T(a.Y):1H(a.Y,c));q.1w(a,b);q.1j(a)},4T:w(a,b){a.Y=\'0\';a.J=0;a.1z=12;q.1w(a,b);q.1j(a)},4V:w(a,b){q.2n(a,0,11);q.1w(a,b);q.1j(a)},3p:w(a,b){q.3d(a,b,a.P.1G())},4Y:w(a,b){I(a.1f!=q.1B){q.44(a,q.3i,b)}q.3d(a,b,a.Y)},3q:w(a,b){q.2n(a,0,11);q.1j(a);q.3d(a,b,\'\')},3d:w(a,b,c){I(a.1i){q.1p=a}17{a.P.1G(c)}q.1w(a,b);q.1N(a.P[0])}});w 3H(a,b){$.2H(a,b);2h(z c 3r b){I(b[c]==L||b[c]==40){a[c]=b[c]}}N a};$.9H.v=w(a){z b=9I.5i.9J.9K(9L,1);I(a==\'9M\'){N $.v[\'14\'+a+\'2c\'].2a($.v,[q[0]].61(b))}N q.24(w(){2i a==\'5B\'?$.v[\'14\'+a+\'2c\'].2a($.v,[q].61(b)):$.v.5p(q,a)})};$.v=1y 2c();$(w(){$(1r.3Y).2K($.v.2I).5T($.v.5M)})})(9N);',62,608,'||||||||||||||||||||||||||this|||||calculator|function|||var|||||||||if|curValue|_get|null||return||_input|_mainDiv|||||digit|unary||dispValue|Math||false|true||_|memory||else||div|base|control|button|top|replace|_pendingOp|class|left|_inline|_updateCalculator|_showingCalculator|_keyDefs|disabled|css|prevValue|_curInst|the|document|binary|focus|span|browser|_sendButton|data|new|_newValue|_disabledFields|_noOp|markerClassName|_triggerClass|find|documentElement|val|parseInt|arith|mem|to|click|settings|_hideCalculator|end|width|length|target|_pos|parseFloat|hex|trig|space||decimalChar|Switch|keystroke|hasClass|_showCalculator|siblings|each|outerWidth|px||RegExp|_setDisplay|apply|substr|Calculator|_showingKeystrokes|PI|log|clear|for|typeof|isRTL|useDegrees|_inlineEntryClass|type|_reset|attr|addClass|_isDisabledCalculator|removeClass|unbind|outerHeight|opera|_savedOp|keyCode|_changeBase|degrees|angle|radians|_keyCodes|_keyChars|value|Erase|_defaults|show|extend|mainDiv|_inlineClass|append|_focussedClass|_keystrokeClass|_coverClass|toLowerCase|input|text|img|_lastInput|_doKeyDown|_doKeyUp|_doKeyPress|remove|parents|position|scrollLeft|scrollTop|iframe|effects|hide|indexOf|||charAt|case|break|100|_trig|_atrig|_finished|_add|_subtract|_multiply|_divide|_equals|sin|cos|tan|asin|acos|atan|_close|_erase|in|number|regional|from|last|showOn|showAnim|showOptions|duration|prompt|_mainDivId|style|display|_appendClass|_disableClass|_resultClass|extendRemove|nodeName|bind|both|src|title|keydown|keyup|keypress|_focussed|children|offset|height|_findPos|_getBorders|_savedValue|msie|body|max|undefined|active|key|down|_unaryOp|floor||_degreesRadians|decimal|add|subtract|_percent|pi|_pi|_plusMinus|_inverse|_log|LN|ln|_ln|_exp|exp|_sqr|_sqrt|sqrt|_power|_random|random|_sin|_cos|_tan|_asin|_acos|_atan|MC|_memClear|MR|_memRecall|MS|_memStore|_memAdd|_memSubtract|base2|_base2|base8|_base8|base10|_base10|base16|_base16|_degrees|_radians|BS|_undo|CE|_clearError|CA|_clear|close|use|_use|erase|buttonText|buttonStatus|Close|Use|Clear|Recall|buttonImage|buttonImageOnly|appendText|calculatorClass|layout|standardLayout|precision|constrainInput|onButton|onClose|none|_focusEntry|prototype|result|BSCECA|_1_2_3_|_4_5_6_|_7_8_9_|_0_|_attachCalculator|_connectCalculator|before|after|opbutton|html|blur|empty|removeData|opacity|cursor|map|string|fixed|absolute|1000px|_checkOffset|hidden|_generateHTML|border|window|version|row|_checkExternalClick|andSelf|parent|not|charCode|toString|oper|mousedown|_handleButton|Number|toFixed|valueOf|_digit|_binaryOp|180|concat|_0|_1|_2|_3|_4|_5|_6|_7|_8|_9|_A|_B|_C|_D|_E|_F|DECIMAL|ADD|SUBTRACT|multiply|MULTIPLY|divide|DIVIDE|percent|PERCENT|equals|EQUALS|plus|minus|PLUS_MINUS|inverse|INV|LG|LOG|EX|EXP|SQ|sqr|SQR|SR|SQRT|XY|power|POWER|RN|rnd|RANDOM|SN|SIN|CS|COS|TN|TAN|AS|ASIN|AC|ACOS|AT|ATAN|memClear|MEM_CLEAR|memRecall|recall|MEM_RECALL|memStore|store|MEM_STORE|memAdd|MEM_ADD|memSubtract|MEM_SUBTRACT|BB|BASE_2|BO|BASE_8|BD|BASE_10|BH|BASE_16|DG|DEGREES|RD|RADIANS|backspace|undo|UNDO|BSp|clearError|error|CLEAR_ERROR|Hom|CLEAR|End|CLOSE|Esc|USE|Ent|ERASE|Del|SPACE|half|HALF_SPACE|Open|closeText|closeStatus|useText|useStatus|current|eraseText|eraseStatus|field|backspaceText|backspaceStatus|clearErrorText|clearErrorStatus|clearText|clearStatus|Reset|memClearText|memClearStatus|memRecallText|memRecallStatus|memStoreText|memStoreStatus|Store|memAddText|memAddStatus|Add|memSubtractText|memSubtractStatus|Subtract|base2Text|Bin|base2Status|base8Text|Oct|base8Status|octal|base10Text|Dec|base10Status|base16Text|Hex|base16Status|hexadecimal|degreesText|Deg|degreesStatus|radiansText|Rad|radiansStatus|normal|id|hasCalculator|inline|trigger|keyentry|focussed|cover|scientificLayout|DGRD|MC_|SNASSRLG_|MR_|CSACSQLN_|MS_|TNATXYEX_|PIRN1X|setDefaults|addKeyDef|boolean|alt|setData|getData|_destroyCalculator|prev|_enableCalculator|_disableCalculator|default|relative|prepend|inArray|_changeCalculator|offsetHeight|block|auto|rtl|thin|medium|thick|innerWidth|clientWidth|innerHeight|clientHeight|offsetLeft|offsetWidth|margin|right|while|nodeType|nextSibling|slideDown|slideUp|fadeIn|fadeOut|is|stop|ctrlKey|preventDefault|stopPropagation|String|fromCharCode|operator|0123456789abcdef|Text|Status|split|join|ctrl|match|keyname|javascript|mouseup|mouseout|toUpperCase|switch|pow|fn|Array|slice|call|arguments|isDisabled|jQuery'.split('|'),0,{}));


/* ## Facebox */
(function($) {
  $.facebox = function(data, klass) {
    $.facebox.init()
    $.facebox.loading()
    $.isFunction(data) ? data.call($) : $.facebox.reveal(data, klass)
  }

  $.facebox.settings = {
  loading_image: 'http://smartkeeda.com/images/loading.gif',
  close_image: 'http://smartkeeda.com/images/closelabel.gif',
    image_types   : [ 'png', 'jpg', 'jpeg', 'gif' ],
    facebox_html  : '\
  <div id="facebox" style="display:none;"> \
    <div class="popup"> \
      <table> \
        <tbody> \
          <tr> \
            <td class="tl"/><td class="b"/><td class="tr"/> \
          </tr> \
          <tr> \
            <td class="b"/> \
            <td class="body"> \
              <div class="content"> \
              </div> \
              <div class="footer"> \
                <a href="#" class="close"> \
                  <img src="/_files/images/website/closelabel.gif" title="close" class="close_image" /> \
                </a> \
              </div> \
            </td> \
            <td class="b"/> \
          </tr> \
          <tr> \
            <td class="bl"/><td class="b"/><td class="br"/> \
          </tr> \
        </tbody> \
      </table> \
    </div> \
  </div>'
  }

  $.facebox.loading = function() {
    if ($('#facebox .loading').length == 1) return true

    $('#facebox .content').empty()
    $('#facebox .body').children().hide().end().
      append('<div class="loading"><img src="'+$.facebox.settings.loading_image+'"/></div>')

    var pageScroll = $.facebox.getPageScroll()
    $('#facebox').css({
      top:    pageScroll[1] + ($.facebox.getPageHeight() / 10),
      left:    pageScroll[0]
    }).show()

    $(document).bind('keydown.facebox', function(e) {
      if (e.keyCode == 27) $.facebox.close()
    })
  }

  $.facebox.reveal = function(data, klass) {
    if (klass) $('#facebox .content').addClass(klass)
    $('#facebox .content').append(data)
    $('#facebox .loading').remove()
    $('#facebox .body').children().fadeIn('normal')
  }

  $.facebox.close = function() {
    $(document).trigger('close.facebox')
    return false
  }

  $(document).bind('close.facebox', function() {
    $(document).unbind('keydown.facebox')
    $('#facebox').fadeOut(function() {
      $('#facebox .content').removeClass().addClass('content')
    })
  })

  $.fn.facebox = function(settings) {
    $.facebox.init(settings)

    var image_types = $.facebox.settings.image_types.join('|')
    image_types = new RegExp('\.' + image_types + '$', 'i')

    function click_handler() {
      $.facebox.loading(true)

      // support for rel="facebox[.inline_popup]" syntax, to add a class
      var klass = this.rel.match(/facebox\[\.(\w+)\]/)
      if (klass) klass = klass[1]

      // div
      if (this.name.match(/#/)) {  
        var url    = window.location.href.split('#')[0];
        
        var target = this.name.replace(url,'');
        
        $.facebox.reveal($(target).clone().show(), klass)

      // image
      } else if (this.href.match(image_types)) {
        var image = new Image()
        image.onload = function() {
          $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
        }
        image.src = this.href

      // ajax
      } else {
        $.get(this.href, function(data) { $.facebox.reveal(data, klass) })
      }

      return false
    }

    this.click(click_handler)
    return this
  }

  $.facebox.init = function(settings) {
    if ($.facebox.settings.inited) {
      return true
    } else {
      $.facebox.settings.inited = true
    }

    if (settings) $.extend($.facebox.settings, settings)
    $('body').append($.facebox.settings.facebox_html)

    var preload = [ new Image(), new Image() ]
    preload[0].src = $.facebox.settings.close_image
    preload[1].src = $.facebox.settings.loading_image

    $('#facebox').find('.b:first, .bl, .br, .tl, .tr').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#facebox .close').click($.facebox.close)
    $('#facebox .close_image').attr('src', $.facebox.settings.close_image)
  }

  // getPageScroll() by quirksmode.com
  $.facebox.getPageScroll = function() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {     // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;    
    }
    return new Array(xScroll,yScroll+35) 
  }

  // adapter from getPageSize() by quirksmode.com
  $.facebox.getPageHeight = function() {
    var windowHeight
    if (self.innerHeight) {    // all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }    
    return windowHeight
  }
})(jQuery);

/* ## Code Highlight */
var hljs=new function(){var n={};var a={};function l(c){return c.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function j(q,p){if(!q){return false}for(var c=0;c<q.length;c++){if(q[c]==p){return true}}return false}function f(I,C){function J(N,M){N.sm=[];for(var L=0;L<N.c.length;L++){for(var r=0;r<M.m.length;r++){if(M.m[r].cN==N.c[L]){N.sm[N.sm.length]=M.m[r]}}}}function y(r,M){if(!M.c){return null}if(!M.sm){J(M,G)}for(var L=0;L<M.sm.length;L++){if(M.sm[L].bR.test(r)){return M.sm[L]}}return null}function v(L,r){if(B[L].e&&B[L].eR.test(r)){return 1}if(B[L].eW){var M=v(L-1,r);return M?M+1:0}return 0}function w(r,L){return L.iR&&L.iR.test(r)}function z(Q,O){var M=[];function P(R){if(!j(M,R)){M[M.length]=R}}if(Q.c){for(var L=0;L<O.m.length;L++){if(j(Q.c,O.m[L].cN)){P(O.m[L].b)}}}var r=B.length-1;do{if(B[r].e){P(B[r].e)}r--}while(B[r+1].eW);if(Q.i){P(Q.i)}var N="("+M[0];for(var L=0;L<M.length;L++){N+="|"+M[L]}N+=")";return d(O,N)}function q(M,L){var N=B[B.length-1];if(!N.t){N.t=z(N,G)}M=M.substr(L);var r=N.t.exec(M);if(!r){return[M,"",true]}if(r.index==0){return["",r[0],false]}else{return[M.substr(0,r.index),r[0],false]}}function p(O,r){var L=G.cI?r[0].toLowerCase():r[0];for(var N in O.keywordGroups){if(!O.keywordGroups.hasOwnProperty(N)){continue}var M=O.keywordGroups[N].hasOwnProperty(L);if(M){return[N,M]}}return false}function E(N,Q){if(!Q.k||!Q.l){return l(N)}if(!Q.lR){var P="("+Q.l[0];for(var M=1;M<Q.l.length;M++){P+="|"+Q.l[M]}P+=")";Q.lR=d(G,P,true)}var O="";var R=0;Q.lR.lastIndex=0;var L=Q.lR.exec(N);while(L){O+=l(N.substr(R,L.index-R));var r=p(Q,L);if(r){s+=r[1];O+='<span class="'+r[0]+'">'+l(L[0])+"</span>"}else{O+=l(L[0])}R=Q.lR.lastIndex;L=Q.lR.exec(N)}O+=l(N.substr(R,N.length-R));return O}function K(r,M){if(M.subLanguage&&a[M.subLanguage]){var L=f(M.subLanguage,r);s+=L.keyword_count;A+=L.r;return L.value}else{return E(r,M)}}function H(M,r){var L=M.nM?"":'<span class="'+M.cN+'">';if(M.rB){c+=L;M.buffer=""}else{if(M.eB){c+=l(r)+L;M.buffer=""}else{c+=L;M.buffer=r}}B[B.length]=M}function D(P,L,Q){var R=B[B.length-1];if(Q){c+=K(R.buffer+P,R);return false}var M=y(L,R);if(M){c+=K(R.buffer+P,R);H(M,L);A+=M.r;return M.rB}var r=v(B.length-1,L);if(r){var O=R.nM?"":"</span>";if(R.rE){c+=K(R.buffer+P,R)+O}else{if(R.eE){c+=K(R.buffer+P,R)+O+l(L)}else{c+=K(R.buffer+P+L,R)+O}}while(r>1){O=B[B.length-2].nM?"":"</span>";c+=O;r--;B.length--}B.length--;B[B.length-1].buffer="";if(R.starts){for(var N=0;N<G.m.length;N++){if(G.m[N].cN==R.starts){H(G.m[N],"");break}}}return R.rE}if(w(L,R)){throw"Illegal"}}var G=n[I];var B=[G.dM];var A=0;var s=0;var c="";try{var u=0;G.dM.buffer="";do{var x=q(C,u);var t=D(x[0],x[1],x[2]);u+=x[0].length;if(!t){u+=x[1].length}}while(!x[2]);if(B.length>1){throw"Illegal"}return{r:A,keyword_count:s,value:c}}catch(F){if(F=="Illegal"){return{r:0,keyword_count:0,value:l(C)}}else{throw F}}}function g(q){var p="";for(var c=0;c<q.childNodes.length;c++){if(q.childNodes[c].nodeType==3){p+=q.childNodes[c].nodeValue}else{if(q.childNodes[c].nodeName=="BR"){p+="\n"}else{throw"No highlight"}}}return p}function b(q){var p=q.className.split(/\s+/);for(var c=0;c<p.length;c++){if(p[c]=="no-highlight"){throw"No highlight"}if(n[p[c]]){return p[c]}}}function o(u,y){try{var B=g(u);var q=b(u)}catch(v){if(v=="No highlight"){return}}if(q){var x=f(q,B).value}else{var z=0;for(var A in a){if(!a.hasOwnProperty(A)){continue}var p=f(A,B);var c=p.keyword_count+p.r;if(c>z){z=c;var x=p.value;q=A}}}if(x){if(y){x=x.replace(/^(\t+)/gm,function(r,E,D,C){return E.replace(/\t/g,y)})}var t=u.className;if(!t.match(q)){t+=" "+q}var w=document.createElement("div");w.innerHTML='<pre class="code-pre"><code class="'+t+'">'+x+"</code></pre>";var s=u.parentNode.parentNode;s.replaceChild(w.firstChild,u.parentNode)}}function d(q,p,c){var r="m"+(q.cI?"i":"")+(c?"g":"");return new RegExp(p,r)}function i(){for(var p in n){if(!n.hasOwnProperty(p)){continue}var q=n[p];for(var c=0;c<q.m.length;c++){if(q.m[c].b){q.m[c].bR=d(q,"^"+q.m[c].b)}if(q.m[c].e){q.m[c].eR=d(q,"^"+q.m[c].e)}if(q.m[c].i){q.m[c].iR=d(q,"^(?:"+q.m[c].i+")")}q.dM.iR=d(q,"^(?:"+q.dM.i+")");if(q.m[c].r==undefined){q.m[c].r=1}}}}function e(){function q(t){if(!t.keywordGroups){for(var s in t.k){if(!t.k.hasOwnProperty(s)){continue}if(t.k[s] instanceof Object){t.keywordGroups=t.k}else{t.keywordGroups={keyword:t.k}}break}}}for(var p in n){if(!n.hasOwnProperty(p)){continue}var r=n[p];q(r.dM);for(var c=0;c<r.m.length;c++){q(r.m[c])}}}function h(p){for(var c=0;c<p.childNodes.length;c++){node=p.childNodes[c];if(node.nodeName=="CODE"){return node}if(!(node.nodeType==3&&node.nodeValue.match(/\s+/))){return null}}}function k(){if(k.called){return}k.called=true;i();e();if(arguments.length){for(var c=0;c<arguments.length;c++){if(n[arguments[c]]){a[arguments[c]]=n[arguments[c]]}}}else{a=n}var q=document.getElementsByTagName("pre");for(var c=0;c<q.length;c++){var p=h(q[c]);if(p){o(p,hljs.tabReplace)}}}function m(){var c=arguments;var p=function(){k.apply(null,c)};if(window.addEventListener){window.addEventListener("DOMContentLoaded",p,false);window.addEventListener("load",p,false)}else{if(window.attachEvent){window.attachEvent("onload",p)}else{window.onload=p}}}this.LANGUAGES=n;this.initHighlightingOnLoad=m;this.highlightBlock=o;this.initHighlighting=k;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:["escape"],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:["escape"],r:0};this.BE={cN:"escape",b:"\\\\.",e:"^",nM:true,r:0};this.CLCM={cN:"comment",b:"//",e:"$",r:0};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.CNM={cN:"number",b:this.CNR,e:"^",r:0}}();var initHighlightingOnLoad=hljs.initHighlightingOnLoad;hljs.LANGUAGES.cs={dM:{l:[hljs.UIR],c:["comment","string","number"],k:{"abstract":1,as:1,base:1,bool:1,"break":1,"byte":1,"case":1,"catch":1,"char":1,checked:1,"class":1,"const":1,"continue":1,decimal:1,"default":1,delegate:1,"do":1,"do":1,"double":1,"else":1,"enum":1,event:1,explicit:1,extern:1,"false":1,"finally":1,fixed:1,"float":1,"for":1,foreach:1,"goto":1,"if":1,implicit:1,"in":1,"int":1,"interface":1,internal:1,is:1,lock:1,"long":1,namespace:1,"new":1,"null":1,object:1,operator:1,out:1,override:1,params:1,"private":1,"protected":1,"public":1,readonly:1,ref:1,"return":1,sbyte:1,sealed:1,"short":1,sizeof:1,stackalloc:1,"static":1,string:1,struct:1,"switch":1,"this":1,"throw":1,"true":1,"try":1,"typeof":1,uint:1,ulong:1,unchecked:1,unsafe:1,ushort:1,using:1,virtual:1,"volatile":1,"void":1,"while":1,ascending:1,descending:1,from:1,get:1,group:1,into:1,join:1,let:1,orderby:1,partial:1,select:1,set:1,value:1,"var":1,where:1,yield:1}},m:[{cN:"comment",b:"///",e:"$",rB:true,c:["xmlDocTag"]},{cN:"xmlDocTag",b:"///|<!--|-->",e:"^"},{cN:"xmlDocTag",b:"</?",e:">"},{cN:"string",b:'@"',e:'"',c:["quoteQuote"]},{cN:"quoteQuote",b:'""',e:"^"},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,hljs.BE,hljs.CNM]};hljs.LANGUAGES.cpp=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1}};return{dM:{l:[hljs.UIR],i:"</",c:["comment","string","number","preprocessor","stl_container"],k:a},m:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.QSM,hljs.BE,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap)\\s*<",e:">",c:["stl_container"],l:[hljs.UIR],k:a,r:10}]}}();hljs.LANGUAGES.sql={cI:true,dM:{l:[hljs.IR],c:["string","number","comment"],k:{keyword:{all:1,partial:1,global:1,month:1,current_timestamp:1,using:1,go:1,revoke:1,smallint:1,indicator:1,"end-exec":1,disconnect:1,zone:1,"with":1,character:1,assertion:1,to:1,add:1,current_user:1,usage:1,input:1,local:1,alter:1,match:1,collate:1,real:1,then:1,rollback:1,get:1,read:1,timestamp:1,session_user:1,not:1,integer:1,bit:1,unique:1,day:1,minute:1,desc:1,insert:1,execute:1,like:1,ilike:2,level:1,decimal:1,drop:1,"continue":1,isolation:1,found:1,where:1,constraints:1,domain:1,right:1,national:1,some:1,module:1,transaction:1,relative:1,second:1,connect:1,escape:1,close:1,system_user:1,"for":1,deferred:1,section:1,cast:1,current:1,sqlstate:1,allocate:1,intersect:1,deallocate:1,numeric:1,"public":1,preserve:1,full:1,"goto":1,initially:1,asc:1,no:1,key:1,output:1,collation:1,group:1,by:1,union:1,session:1,both:1,last:1,language:1,constraint:1,column:1,of:1,space:1,foreign:1,deferrable:1,prior:1,connection:1,unknown:1,action:1,commit:1,view:1,or:1,first:1,into:1,"float":1,year:1,primary:1,cascaded:1,except:1,restrict:1,set:1,references:1,names:1,table:1,outer:1,open:1,select:1,size:1,are:1,rows:1,from:1,prepare:1,distinct:1,leading:1,create:1,only:1,next:1,inner:1,authorization:1,schema:1,corresponding:1,option:1,declare:1,precision:1,immediate:1,"else":1,timezone_minute:1,external:1,varying:1,translation:1,"true":1,"case":1,exception:1,join:1,hour:1,"default":1,"double":1,scroll:1,value:1,cursor:1,descriptor:1,values:1,dec:1,fetch:1,procedure:1,"delete":1,and:1,"false":1,"int":1,is:1,describe:1,"char":1,as:1,at:1,"in":1,varchar:1,"null":1,trailing:1,any:1,absolute:1,current_time:1,end:1,grant:1,privileges:1,when:1,cross:1,check:1,write:1,current_date:1,pad:1,begin:1,temporary:1,exec:1,time:1,update:1,catalog:1,user:1,sql:1,date:1,on:1,identity:1,timezone_hour:1,natural:1,whenever:1,interval:1,work:1,order:1,cascade:1,diagnostics:1,nchar:1,having:1,left:1},aggregate:{count:1,sum:1,min:1,max:1,avg:1}}},m:[hljs.CNM,hljs.CBLCLM,{cN:"comment",b:"--",e:"$"},{cN:"string",b:"'",e:"'",c:["escape","squote"],r:0},{cN:"squote",b:"''",e:"^",nM:true},{cN:"string",b:'"',e:'"',c:["escape","dquote"],r:0},{cN:"dquote",b:'""',e:"^",nM:true},{cN:"string",b:"`",e:"`",c:["escape"]},hljs.BE]};hljs.LANGUAGES.java={dM:{l:[hljs.UIR],c:["javadoc","comment","string","class","number","annotation"],k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1}},m:[{cN:"class",l:[hljs.UIR],b:"(class |interface )",e:"{",i:":",k:{"class":1,"interface":1},c:["inheritance","title"]},{cN:"inheritance",b:"(implements|extends)",e:"^",nM:true,l:[hljs.IR],k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR,e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string","annotation"]},hljs.CNM,hljs.ASM,hljs.QSM,hljs.BE,hljs.CLCM,{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:["javadoctag"],r:10},{cN:"javadoctag",b:"@[A-Za-z]+",e:"^"},hljs.CBLCLM,{cN:"annotation",b:"@[A-Za-z]+",e:"^"}]}; 
 
/* ## Chrome Menu */
var cssdropdown={
disappeardelay: 250,      //set delay in miliseconds before menu disappears onmouseout
dropdownindicator: '<span style="font-size:9px;">&#9660;</span>', //specify full HTML to add to end of each menu item with a drop down menu
enablereveal: [true, 5],  //enable swipe effect? [true/false, steps (Number of animation steps. Integer between 1-20. Smaller=faster)]
enableiframeshim: 1,      //enable "iframe shim" in IE5.5 to IE7? (1=yes, 0=no)

dropmenuobj: null, asscmenuitem: null, domsupport: document.all || document.getElementById, standardbody: null, iframeshimadded: false, revealtimers: {},

getposOffset:function(what, offsettype){
    var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
    var parentEl=what.offsetParent;
    while (parentEl!=null){
        totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
        parentEl=parentEl.offsetParent;
    }
    return totaloffset;
},

css:function(el, targetclass, action){
    var needle=new RegExp("(^|\\s+)"+targetclass+"($|\\s+)", "ig")
    if (action=="check")
        return needle.test(el.className)
    else if (action=="remove")
        el.className=el.className.replace(needle, "")
    else if (action=="add" && !needle.test(el.className))
        el.className+=" "+targetclass
},

showmenu:function(dropmenu, e){
    if (this.enablereveal[0]){
        if (!dropmenu._trueheight || dropmenu._trueheight<10)
            dropmenu._trueheight=dropmenu.offsetHeight
        clearTimeout(this.revealtimers[dropmenu.id])
        dropmenu.style.height=dropmenu._curheight=0
        dropmenu.style.overflow="hidden"
        dropmenu.style.visibility="visible"
        this.revealtimers[dropmenu.id]=setInterval(function(){cssdropdown.revealmenu(dropmenu)}, 10)
    }
    else{
        dropmenu.style.visibility="visible"
    }
    this.css(this.asscmenuitem, "selected", "add")
},

revealmenu:function(dropmenu, dir){
    var curH=dropmenu._curheight, maxH=dropmenu._trueheight, steps=this.enablereveal[1]
    if (curH<maxH){
        var newH=Math.min(curH, maxH)
        dropmenu.style.height=newH+"px"
        dropmenu._curheight= newH + Math.round((maxH-newH)/steps) + 1
    }
    else{ //if done revealing menu
        dropmenu.style.height="auto"
        dropmenu.style.overflow="hidden"
        clearInterval(this.revealtimers[dropmenu.id])
    }
},

clearbrowseredge:function(obj, whichedge){
    var edgeoffset=0
    if (whichedge=="rightedge"){
        var windowedge=document.all && !window.opera? this.standardbody.scrollLeft+this.standardbody.clientWidth-15 : window.pageXOffset+window.innerWidth-15
        var dropmenuW=this.dropmenuobj.offsetWidth
        if (windowedge-this.dropmenuobj.x < dropmenuW)  //move menu to the left?
            edgeoffset=dropmenuW-obj.offsetWidth
    }
    else{
        var topedge=document.all && !window.opera? this.standardbody.scrollTop : window.pageYOffset
        var windowedge=document.all && !window.opera? this.standardbody.scrollTop+this.standardbody.clientHeight-15 : window.pageYOffset+window.innerHeight-18
        var dropmenuH=this.dropmenuobj._trueheight
        if (windowedge-this.dropmenuobj.y < dropmenuH){ //move up?
            edgeoffset=dropmenuH+obj.offsetHeight
            if ((this.dropmenuobj.y-topedge)<dropmenuH) //up no good either?
                edgeoffset=this.dropmenuobj.y+obj.offsetHeight-topedge
        }
    }
    return edgeoffset
},

dropit:function(obj, e, dropmenuID){
    if (this.dropmenuobj!=null) //hide previous menu
        this.hidemenu() //hide menu
    this.clearhidemenu()
    this.dropmenuobj=document.getElementById(dropmenuID) //reference drop down menu
    this.asscmenuitem=obj //reference associated menu item
    this.showmenu(this.dropmenuobj, e)
    this.dropmenuobj.x=this.getposOffset(obj, "left")
    this.dropmenuobj.y=this.getposOffset(obj, "top")
    this.dropmenuobj.style.left=this.dropmenuobj.x-this.clearbrowseredge(obj, "rightedge")+"px"
    this.dropmenuobj.style.top=this.dropmenuobj.y-this.clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+1+"px"
    this.positionshim() //call iframe shim function
},

positionshim:function(){ //display iframe shim function
    if (this.iframeshimadded){
        if (this.dropmenuobj.style.visibility=="visible"){
            this.shimobject.style.width=this.dropmenuobj.offsetWidth+"px"
            this.shimobject.style.height=this.dropmenuobj._trueheight+"px"
            this.shimobject.style.left=parseInt(this.dropmenuobj.style.left)+"px"
            this.shimobject.style.top=parseInt(this.dropmenuobj.style.top)+"px"
            this.shimobject.style.display="block"
        }
    }
},

hideshim:function(){
    if (this.iframeshimadded)
        this.shimobject.style.display='none'
},

isContained:function(m, e){
    var e=window.event || e
    var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
    while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
    if (c==m)
        return true
    else
        return false
},

dynamichide:function(m, e){
    if (!this.isContained(m, e)){
        this.delayhidemenu()
    }
},

delayhidemenu:function(){
    this.delayhide=setTimeout("cssdropdown.hidemenu()", this.disappeardelay) //hide menu
},

hidemenu:function(){
    this.css(this.asscmenuitem, "selected", "remove")
    this.dropmenuobj.style.visibility='hidden'
    this.dropmenuobj.style.left=this.dropmenuobj.style.top="-1000px"
    this.hideshim()
},

clearhidemenu:function(){
    if (this.delayhide!="undefined")
        clearTimeout(this.delayhide)
},

addEvent:function(target, functionref, tasktype){
    if (target.addEventListener)
        target.addEventListener(tasktype, functionref, false);
    else if (target.attachEvent)
        target.attachEvent('on'+tasktype, function(){return functionref.call(target, window.event)});
},

startchrome:function(){
    if (!this.domsupport)
        return
    this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body
    for (var ids=0; ids<arguments.length; ids++){
        var menuitems=document.getElementById(arguments[ids]).getElementsByTagName("a")
        for (var i=0; i<menuitems.length; i++){
            if (menuitems[i].getAttribute("rel")){
                var relvalue=menuitems[i].getAttribute("rel")
                var asscdropdownmenu=document.getElementById(relvalue)
                this.addEvent(asscdropdownmenu, function(){cssdropdown.clearhidemenu()}, "mouseover")
                this.addEvent(asscdropdownmenu, function(e){cssdropdown.dynamichide(this, e)}, "mouseout")
                this.addEvent(asscdropdownmenu, function(){cssdropdown.delayhidemenu()}, "click")
                try{
                    menuitems[i].innerHTML=menuitems[i].innerHTML+" "+this.dropdownindicator
                }catch(e){}
                this.addEvent(menuitems[i], function(e){ //show drop down menu when main menu items are mouse over-ed
                    if (!cssdropdown.isContained(this, e)){
                        var evtobj=window.event || e
                        cssdropdown.dropit(this, evtobj, this.getAttribute("rel"))
                    }
                }, "mouseover")
                this.addEvent(menuitems[i], function(e){cssdropdown.dynamichide(this, e)}, "mouseout") //hide drop down menu when main menu items are mouse out
                this.addEvent(menuitems[i], function(){cssdropdown.delayhidemenu()}, "click") //hide drop down menu when main menu items are clicked on
            }
        } //end inner for
    } //end outer for
    if (this.enableiframeshim && document.all && !window.XDomainRequest && !this.iframeshimadded){ //enable iframe shim in IE5.5 thru IE7?
        document.write('<IFRAME id="iframeshim" src="about:blank" frameBorder="0" scrolling="no" style="left:0; top:0; position:absolute; display:none;z-index:90; background: transparent;"></IFRAME>')
        this.shimobject=document.getElementById("iframeshim") //reference iframe object
        this.shimobject.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
        this.iframeshimadded=true
    }
} //end startchrome

}


/* ## Processors */    
function silentErrorHandler() { return true; }
window.onerror=silentErrorHandler;   
 
 function AllPageSpecificFunctionsLoad() 
 {
    $(".facebox").facebox();
    
    try
    {
       $('div#divTopShare').html( $('div#divShareCode').html().replace('<!--', '').replace('//-->', '') );
       // $("#lnkMail").text( $("#lnkMail").text().replace(/ /g, '') );   
    }
    catch(Err){}
   
    BixPageSpecificFunctionsLoad();
 }
 
function SendSuggestion(ctrlTextArea, btnSendSuggestion)
{
  var txtSuggestionURL  = window.location.href;
  var txtSuggestionText = escape( $(ctrlTextArea).val() );
  
  if(txtSuggestionText.length < 10)
  {
      alert('Please enter a valid suggestion.'); 
      return false;
  }
  
  $(btnSendSuggestion).attr('disabled' , 'disabled');
  
  txtSuggestionText = txtSuggestionText.replace(/\+/g,'%2B');
  
  var _paramData =  "SuggestionURL="   + txtSuggestionURL  +
                    "&SuggestionText=" + txtSuggestionText ;
                
  $.ajax({
        type: "POST",
        url: "/_ajax/add-suggestion.php",
        data: _paramData,
        cache: false,
        success:    function(msg){$(btnSendSuggestion).replaceWith(msg);}
  });
}
 
/* ## BIX Common */
function LocalTouchUp(txtData)  
{
    return txtData.replace(/\%/g,'%25').replace(/\&/g,'%26').replace(/\+/g,'%2B');
}
    
function BixPageSpecificFunctionsLoad()
{ 
   try
   {
   var tmpHeading = $("#bixHeading").html();
   tmpHeading = tmpHeading.replace('-', '[#]');
   tmpHeading =  tmpHeading.split('[#]')[0] + ' :: <span class="ib-green">' + tmpHeading.split('[#]')[1] + '</span>';
   $("#bixHeading").html(tmpHeading);
   }catch(Err){}
          
    $('.bix-td-option > a').click( function()
    {      
        var lnkName = this.id;               
        var optNo   = lnkName.split('_')[1];            /*lnkOptionLink_A_11*/ 
        var qusNo   = lnkName.split('_')[2];
        var ansNo   = $('#hdnAnswer_' + qusNo ).val(); 
        //alert(optNo);
		//alert(qusNo);
        if( optNo == ansNo ) // Show Answer & Description with Tick mark image..
        {
            var txtImageHtml = '<table border="0" cellpadding="0" cellspacing="0"><tr><td class="bix-inner-td-option">[XXX]</td><td valign="middle" style="padding-left:10px;"><img src="http://smartkeeda.com/images/accept.png" alt="@" /></td></tr></table>'
            var txtAnswerHtml = $("#tdOptionDt_" + ansNo + "_" + qusNo).html();
            //alert(txtAnswerHtml);
            if(txtAnswerHtml.indexOf('accept.png') == -1)
            {
                txtImageHtml = txtImageHtml.replace('[XXX]', txtAnswerHtml );
                $("#tdOptionDt_" + ansNo + "_" + qusNo).html( txtImageHtml );
                /* $("#tdAnswerIMG_" + qusNo).slideDown('slow'); */
            }
            
            $("#divAnswer_"  + qusNo).slideDown('slow');
        }
        else 
        {
			//alert(ansNo);
            var txtImageHtml = '<table border="0" cellpadding="0" cellspacing="0"><tr><td class="bix-inner-td-option">[XXX]</td><td valign="middle" style="padding-left:10px;"><img src="http://smartkeeda.com/images/wrong.png" alt="@" /></td></tr></table>'
			
            var txtAnswerHtml = $("#tdOptionDt_" + optNo + "_" + qusNo).html();
			if(txtAnswerHtml.indexOf('wrong.png') == -1)
            {
                txtImageHtml = txtImageHtml.replace('[XXX]', txtAnswerHtml );
				$("#tdOptionDt_" + optNo + "_" + qusNo).html( txtImageHtml );
            	/*$("#tdOptionNo_" + optNo + '_' + qusNo).fadeTo('slow', 0.2);*/
			}
        }
        
    });
    
     
    $(".calc-box").calculator({ 
        layout: $.calculator.scientificLayout,
        showOn: 'both', buttonImageOnly: true, buttonImage: 'http://smartkeeda.com/images/calculator.png'
    });
    
    /* Load Images Indirectly For Better User Experience */
    /* Local: */
    try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 5=$(\'3\'+\'#\'+\'1\'+\'s\'+\'p\'+\'9\'+\'j\').f().g(e).4(\'\').d().a(\'\').c().4(\'\');2 8=$(\'3\'+\'.\'+\'6\'+\'-\'+\'1\'+\'k\');2 7=$(\'b\'+\'.\'+\'6\'+\'-\'+\'1\'+\'o\'+\'l\');m.n(5,q(i,0){8[i].r=0;7[i].h=0});',29,29,'v|hdn|var|input|split|arrImageCount|jq|arrImageViews|arrImagePorts|Cache|join||toUpperCase|reverse|40|val|substr|innerHTML||Key|akq|qb|jQuery|each|ak|Image|function|value|Ajax'.split('|'),0,{})) }catch(Err){}
    /* Server:   */
    //try{eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0 5=k.j.h.2(\'\').a().8(\'\').l("m"+"."+"p"+"o"+"g");q(5>-1){0 7=$(\'4\'+\'#\'+\'3\'+\'f\'+\'e\'+\'d\'+\'n\').z().B(D).2(\'\').a().8(\'\').r().2(\'\');0 c=$(\'4\'+\'.\'+\'6\'+\'-\'+\'3\'+\'C\');0 9=$(\'b\'+\'.\'+\'6\'+\'-\'+\'3\'+\'A\'+\'t\');s.u(7,w(i,v){c[i].y=v;9[i].x=v})}',40,40,'var||split|hdn|input|intPos|jq|arrImageCount|join|arrImageViews|reverse||arrImagePorts|Cache|Image|Ajax|dni|href||location|window|indexOf|moc|Key|bai|xi|if|toUpperCase|jQuery|qb|each||function|innerHTML|value|val|ak|substr|akq|40'.split('|'))) }catch(Err){}
    
    /* Show Images */
    try
    {
        if($('input#hdnAjaxImageCacheKey').val().indexOf('x') > -1)
        $('a#lnkOptionLink_'+ $('input.jq-one-answer').val() + '_' + $('input.jq-one-answer').attr('id').split('_')[1].toString()).click();
    }catch(Err){}
    
    var txtTitleID  = $('#hdnTitleID').val();     
    if(txtTitleID == '2')  TechnicalCPageSpecificFunctionsLoad(); 
    if(txtTitleID == '12') TechnicalCPageSpecificFunctionsLoad(); 
    if(txtTitleID == '37') TechnicalCPageSpecificFunctionsLoad(); 
    if(txtTitleID == '13') TechnicalJavaPageSpecificFunctionsLoad();
    if(txtTitleID == '30') TechnicalCSharpPageSpecificFunctionsLoad();  
    
    /* Default topics opened for GD. */
    if(txtTitleID == '11')  $('div.jq-category-filter a#lnkEconomics').click();  
    
    /* Body Language Pages */
    if(txtTitleID == '7')  
    {
         try{ LoadTestPage(); }catch(Err){}
         
         /* Check for if Runner Page. */
         try
         {
            if( parseInt($('input#hdnTestTitleID').val()) > 0 )
            LoadTestRunnerPage();
            
         }catch(Err){}
    }
    
    /* Placement page */
    if(txtTitleID == '6')  
    {
         try{ LoadPlacementPage(); }catch(Err){}
    }
    
    /* Body Language Pages */
    if(txtTitleID == '8')  
    {
         try{ LoadBodyLanguage(); }catch(Err){}
    }
    
    /* Puzzles page */
    if(txtTitleID == '10')
    {
        try{ LoadSudoku(); }catch(Err){}
    }  
    
    /* ElectronicsCircuits page */
    if(txtTitleID == '16')  
    {
         try{ LoadElectronicsPage(); }catch(Err){}
    }

    /* ElectronicsCircuits page */
    if(txtTitleID == '27')  
    {
         try{ LoadMyAccountPage(); }catch(Err){}
    }
}

function SendBixReport(pQuesNo, pQuesID)
{
  var txtTitleID      = $('#hdnTitleID').val();
  var txtQuesNo       = pQuesNo;                /* '15' , '2351' */
  var txtQuesID       = pQuesID;         
  var txtReportedURL  = window.location.href;
  var txtReportedText = LocalTouchUp( $('#txtReport_' + pQuesID).val() );
   
  if((txtReportedText.length < 10) || ($('#txtReport_' + pQuesID).attr('name').indexOf('txtReport') == -1))
  {
      alert('Please enter the details about the bug/error that you have found.');
      return false;
  }

  $('#txtReport_'  + pQuesID).attr('readonly' , true);
  $('#btnReport_'  + pQuesID).attr('disabled' , 'disabled');
  $('#btnReport_'  + pQuesID).val('Please wait...'); 
  
  var _paramData =  "TitleID="          + txtTitleID      + 
                    "&ReportedQuesNo="  + txtQuesNo       +
                    "&QuesID="          + txtQuesID       +
                    "&ReportedURL="     + txtReportedURL  +
                    "&ReportedText="    + txtReportedText ;  
                      
  $.ajax({
        type: "POST",
        url: "/_ajax/add-bix-report.php",
        data: _paramData,
        cache: false,
        success:    function(msg)
        {
             $('input#btnReport_'  + pQuesID).replaceWith($.trim(msg));
        }
  });
  
}

function ValidateEmail(str) 
{
    var filter = /^[a-zA-Z0-9][a-zA-Z0-9_.-]*@(([a-zA-Z0-9-]+.){1,2})([a-zA-Z][a-zA-Z]+)$/;
    
    if (!filter.test(str)) return false;
    
    return true;
}
      
function SendBixDiscussion(pIntQuesAnsID)
{
  var intTitleID        = parseInt( $('input#hdnTitleID').val()   );
  var intQuesAnsID      = parseInt(pIntQuesAnsID); 
  var txtUserName       = LocalTouchUp( $.trim( $('input#txtUserName').val()            ));
  var txtEmailID        = LocalTouchUp( $.trim( $('input#txtEmailID').val()             ));        
  var txtDiscussionText = LocalTouchUp( $.trim( $('textarea#txtDiscussionText').val()   ));
  var intIsAlertMe      = $('input#chkAlertMe').attr('checked')? 1 : 0; 
  var txtPostedURL      = window.location.href;
  
  if(txtDiscussionText.length < 5)
  {
      alert('Please enter your comments.');
      $('textarea#txtDiscussionText').focus();
      return false;
  }
  
  if(txtUserName.length < 3)
  {
      alert('Please enter your Name.');
      $('input#txtUserName').focus();
      return false;
  }

  if(txtEmailID.length > 0)
  {
      if(!ValidateEmail(txtEmailID))
      {
          alert('Please enter a valid Email ID.'); 
          $('input#txtEmailID').focus();
          return false;
      }
  }
  
  if( (intIsAlertMe == 1) && (txtEmailID.length < 1) )
  {
      alert('Please enter your email-id if you want receive alert mail when new comments are posted.');
      $('input#txtEmailID').focus();
      return false;
  }
  
  if( !(intTitleID > 0) || !(intQuesAnsID > 0) )
  {
      alert('Invalid Title or Question details provided.');
      return false;
  }
  
  $('textarea#txtDiscussionText').attr('readonly', true);
  $('input#txtUserName').attr('disabled', 'disabled');
  $('input#txtEmailID').attr('disabled', 'disabled');
  $('input#chkAlertMe').attr('disabled', 'disabled');
  $('input#btnPostComment').attr('disabled', 'disabled'); 
  $('input#btnPostComment').val('Please wait...'); 
  
  var _paramData =  "TitleID="          + intTitleID        + 
                    "&QuesAnsID="       + intQuesAnsID      +
                    "&UserName="        + txtUserName       +
                    "&EmailID="         + txtEmailID        +
                    "&DiscussionText="  + txtDiscussionText +
                    "&IsReceiveAlert="  + intIsAlertMe      +
                    "&PostedURL="       + txtPostedURL      ;  
  
  $.ajax({
        type: "POST",
        url: "/_ajax/add-bix-discussion.php",
        data: _paramData,
        cache: false,
        success:    function(msg)
        { 
            $('input#btnPostComment').replaceWith($.trim(msg));
        }
  });
  
}

function OnlineCompiler(pQuesID)
{
  $('div#divCompilerOutput_' + pQuesID).hide();
  
  var txtCoding  = LocalTouchUp( $('#txtCompiler_' + pQuesID).val());
  var intTitleID = $('#hdnTitleID').val();
   
  if(txtCoding.length < 10)
  { 
      alert('Please enter your program.'); 
      return false; 
  }
  
  var _paramData =  "&ParamCoding=" + txtCoding     +
                    "&TitleID="     + intTitleID    + 
                    "&Random="      + Math.random() ; 
 
  $('input#btnCompiler_' + pQuesID).attr('disabled', true); 
  $('div#divCompilerOutput_' + pQuesID).html('<img src="http://smartkeeda.com/images/cprogress.gif" alt="Compilation in progress.." />');  
  $('div#divCompilerOutput_' + pQuesID).show(); 
                      
  $.ajax({
        type:  "POST",
        url:   "/_ajax/c-compiler.php",
        data:  _paramData,
        cache: false,
        success: function(msg)
        {
             $('div#divCompilerOutput_'  + pQuesID).html(msg);
             $('input#btnCompiler_' + pQuesID).attr('disabled', false);
        }
  });
  
}
 
/* ## C Page*/
function TechnicalCPageSpecificFunctionsLoad()
{
    StartCodeHighlight();
}

/* C# Page*/  
function TechnicalCSharpPageSpecificFunctionsLoad()
{
    StartCodeHighlight();
}
 
/* ## Java Page */
function TechnicalJavaPageSpecificFunctionsLoad()
{
    StartCodeHighlight();
}

function StartCodeHighlight()
{
    hljs.initHighlightingOnLoad();
    hljs.tabReplace = '    ';
}

/* ## Final Touch */
$(document).ready(function()
{
    AllPageSpecificFunctionsLoad();  
});