(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[735],{2735:function(ct){ct.exports=function(){"use strict";function D(r){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function B(r,n){return(B=Object.setPrototypeOf||function(s,f){return s.__proto__=f,s})(r,n)}function mt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function X(r,n,o){return(X=mt()?Reflect.construct:function(f,R,M){var O=[null];O.push.apply(O,R);var $=new(Function.bind.apply(f,O));return M&&B($,M.prototype),$}).apply(null,arguments)}function y(r){return function pt(r){if(Array.isArray(r))return se(r)}(r)||function dt(r){if(typeof Symbol<"u"&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function vt(r,n){if(r){if("string"==typeof r)return se(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return se(r,n)}}(r)||function ht(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}var Tt=Object.hasOwnProperty,xe=Object.setPrototypeOf,_t=Object.isFrozen,At=Object.getPrototypeOf,Et=Object.getOwnPropertyDescriptor,_=Object.freeze,S=Object.seal,yt=Object.create,ke=typeof Reflect<"u"&&Reflect,K=ke.apply,ue=ke.construct;K||(K=function(n,o,s){return n.apply(o,s)}),_||(_=function(n){return n}),S||(S=function(n){return n}),ue||(ue=function(n,o){return X(n,y(o))});var gt=g(Array.prototype.forEach),Pe=g(Array.prototype.pop),W=g(Array.prototype.push),Z=g(String.prototype.toLowerCase),bt=g(String.prototype.match),I=g(String.prototype.replace),St=g(String.prototype.indexOf),Rt=g(String.prototype.trim),A=g(RegExp.prototype.test),fe=function Ot(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return ue(r,o)}}(TypeError);function g(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),f=1;f<o;f++)s[f-1]=arguments[f];return K(r,n,s)}}function l(r,n,o){o=o||Z,xe&&xe(r,null);for(var s=n.length;s--;){var f=n[s];if("string"==typeof f){var R=o(f);R!==f&&(_t(n)||(n[s]=R),f=R)}r[f]=!0}return r}function x(r){var o,n=yt(null);for(o in r)K(Tt,r,[o])&&(n[o]=r[o]);return n}function J(r,n){for(;null!==r;){var o=Et(r,n);if(o){if(o.get)return g(o.get);if("function"==typeof o.value)return g(o.value)}r=At(r)}return function s(f){return console.warn("fallback value for",f),null}}var Fe=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ce=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),me=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Nt=_(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),pe=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Dt=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ue=_(["#text"]),He=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),de=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ze=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Q=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Mt=S(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Lt=S(/<%[\w\W]*|[\w\W]*%>/gm),wt=S(/^data-[\-\w.\u00B7-\uFFFF]/),It=S(/^aria-[\-\w]+$/),Ct=S(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xt=S(/^(?:\w+script|data):/i),kt=S(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Pt=S(/^html$/i),Ft=function(){return typeof window>"u"?null:window},Ut=function(n,o){if("object"!==D(n)||"function"!=typeof n.createPolicy)return null;var s=null,f="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(f)&&(s=o.currentScript.getAttribute(f));var R="dompurify"+(s?"#"+s:"");try{return n.createPolicy(R,{createHTML:function(O){return O},createScriptURL:function(O){return O}})}catch{return console.warn("TrustedTypes policy "+R+" could not be created."),null}};return function Ge(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft(),n=function(e){return Ge(e)};if(n.version="2.4.0",n.removed=[],!r||!r.document||9!==r.document.nodeType)return n.isSupported=!1,n;var o=r.document,s=r.document,f=r.DocumentFragment,R=r.HTMLTemplateElement,M=r.Node,O=r.Element,j=r.NodeFilter,$=r.NamedNodeMap,zt=void 0===$?r.NamedNodeMap||r.MozNamedAttrMap:$,Gt=r.HTMLFormElement,Bt=r.DOMParser,ee=r.trustedTypes,te=O.prototype,Wt=J(te,"cloneNode"),jt=J(te,"nextSibling"),$t=J(te,"childNodes"),ve=J(te,"parentNode");if("function"==typeof R){var he=s.createElement("template");he.content&&he.content.ownerDocument&&(s=he.content.ownerDocument)}var b=Ut(ee,o),Be=b?b.createHTML(""):"",Te=s.implementation,Yt=s.createNodeIterator,Vt=s.createDocumentFragment,qt=s.getElementsByTagName,Xt=o.importNode,We={};try{We=x(s).documentMode?s.documentMode:{}}catch{}var N={};n.isSupported="function"==typeof ve&&Te&&typeof Te.createHTMLDocument<"u"&&9!==We;var z,p,_e=Mt,Ae=Lt,Kt=wt,Zt=It,Jt=xt,je=kt,Ee=Ct,m=null,$e=l({},[].concat(y(Fe),y(ce),y(me),y(pe),y(Ue))),d=null,Ye=l({},[].concat(y(He),y(de),y(ze),y(Q))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Y=null,ye=null,Ve=!0,ge=!0,qe=!1,P=!1,k=!1,be=!1,Se=!1,F=!1,ae=!1,ne=!1,Xe=!0,Ke=!1,Qt="user-content-",Re=!0,V=!1,U={},H=null,Ze=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Je=null,Qe=l({},["audio","video","img","source","image","track"]),Oe=null,et=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ne="http://www.w3.org/1998/Math/MathML",De="http://www.w3.org/2000/svg",C="http://www.w3.org/1999/xhtml",ie=C,Me=!1,er=["application/xhtml+xml","text/html"],tr="text/html",G=null,rr=s.createElement("form"),tt=function(e){return e instanceof RegExp||e instanceof Function},Le=function(e){G&&G===e||((!e||"object"!==D(e))&&(e={}),e=x(e),z=z=-1===er.indexOf(e.PARSER_MEDIA_TYPE)?tr:e.PARSER_MEDIA_TYPE,p="application/xhtml+xml"===z?function(t){return t}:Z,m="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,p):$e,d="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,p):Ye,Oe="ADD_URI_SAFE_ATTR"in e?l(x(et),e.ADD_URI_SAFE_ATTR,p):et,Je="ADD_DATA_URI_TAGS"in e?l(x(Qe),e.ADD_DATA_URI_TAGS,p):Qe,H="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,p):Ze,Y="FORBID_TAGS"in e?l({},e.FORBID_TAGS,p):{},ye="FORBID_ATTR"in e?l({},e.FORBID_ATTR,p):{},U="USE_PROFILES"in e&&e.USE_PROFILES,Ve=!1!==e.ALLOW_ARIA_ATTR,ge=!1!==e.ALLOW_DATA_ATTR,qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,P=e.SAFE_FOR_TEMPLATES||!1,k=e.WHOLE_DOCUMENT||!1,F=e.RETURN_DOM||!1,ae=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,Se=e.FORCE_BODY||!1,Xe=!1!==e.SANITIZE_DOM,Ke=e.SANITIZE_NAMED_PROPS||!1,Re=!1!==e.KEEP_CONTENT,V=e.IN_PLACE||!1,Ee=e.ALLOWED_URI_REGEXP||Ee,ie=e.NAMESPACE||C,e.CUSTOM_ELEMENT_HANDLING&&tt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&tt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),P&&(ge=!1),ae&&(F=!0),U&&(m=l({},y(Ue)),d=[],!0===U.html&&(l(m,Fe),l(d,He)),!0===U.svg&&(l(m,ce),l(d,de),l(d,Q)),!0===U.svgFilters&&(l(m,me),l(d,de),l(d,Q)),!0===U.mathMl&&(l(m,pe),l(d,ze),l(d,Q))),e.ADD_TAGS&&(m===$e&&(m=x(m)),l(m,e.ADD_TAGS,p)),e.ADD_ATTR&&(d===Ye&&(d=x(d)),l(d,e.ADD_ATTR,p)),e.ADD_URI_SAFE_ATTR&&l(Oe,e.ADD_URI_SAFE_ATTR,p),e.FORBID_CONTENTS&&(H===Ze&&(H=x(H)),l(H,e.FORBID_CONTENTS,p)),Re&&(m["#text"]=!0),k&&l(m,["html","head","body"]),m.table&&(l(m,["tbody"]),delete Y.tbody),_&&_(e),G=e)},rt=l({},["mi","mo","mn","ms","mtext"]),at=l({},["foreignobject","desc","title","annotation-xml"]),ar=l({},["title","style","font","a","script"]),oe=l({},ce);l(oe,me),l(oe,Nt);var we=l({},pe);l(we,Dt);var nr=function(e){var t=ve(e);(!t||!t.tagName)&&(t={namespaceURI:C,tagName:"template"});var a=Z(e.tagName),u=Z(t.tagName);return e.namespaceURI===De?t.namespaceURI===C?"svg"===a:t.namespaceURI===Ne?"svg"===a&&("annotation-xml"===u||rt[u]):Boolean(oe[a]):e.namespaceURI===Ne?t.namespaceURI===C?"math"===a:t.namespaceURI===De?"math"===a&&at[u]:Boolean(we[a]):e.namespaceURI===C&&!(t.namespaceURI===De&&!at[u]||t.namespaceURI===Ne&&!rt[u])&&!we[a]&&(ar[a]||!oe[a])},L=function(e){W(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Be}catch{e.remove()}}},Ie=function(e,t){try{W(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{W(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!d[e])if(F||ae)try{L(t)}catch{}else try{t.setAttribute(e,"")}catch{}},nt=function(e){var t,a;if(Se)e="<remove></remove>"+e;else{var u=bt(e,/^[\r\n\t ]+/);a=u&&u[0]}"application/xhtml+xml"===z&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var E=b?b.createHTML(e):e;if(ie===C)try{t=(new Bt).parseFromString(E,z)}catch{}if(!t||!t.documentElement){t=Te.createDocument(ie,"template",null);try{t.documentElement.innerHTML=Me?"":E}catch{}}var h=t.body||t.documentElement;return e&&a&&h.insertBefore(s.createTextNode(a),h.childNodes[0]||null),ie===C?qt.call(t,k?"html":"body")[0]:k?t.documentElement:h},it=function(e){return Yt.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,null,!1)},ir=function(e){return e instanceof Gt&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof zt)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},q=function(e){return"object"===D(M)?e instanceof M:e&&"object"===D(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},w=function(e,t,a){!N[e]||gt(N[e],function(u){u.call(n,t,a,G)})},ot=function(e){var t;if(w("beforeSanitizeElements",e,null),ir(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return L(e),!0;var a=p(e.nodeName);if(w("uponSanitizeElement",e,{tagName:a,allowedTags:m}),e.hasChildNodes()&&!q(e.firstElementChild)&&(!q(e.content)||!q(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||"select"===a&&A(/<template/i,e.innerHTML))return L(e),!0;if(!m[a]||Y[a]){if(!Y[a]&&st(a)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a)))return!1;if(Re&&!H[a]){var u=ve(e)||e.parentNode,E=$t(e)||e.childNodes;if(E&&u)for(var v=E.length-1;v>=0;--v)u.insertBefore(Wt(E[v],!0),jt(e))}return L(e),!0}return e instanceof O&&!nr(e)||("noscript"===a||"noembed"===a)&&A(/<\/no(script|embed)/i,e.innerHTML)?(L(e),!0):(P&&3===e.nodeType&&(t=I(t=e.textContent,_e," "),t=I(t,Ae," "),e.textContent!==t&&(W(n.removed,{element:e.cloneNode()}),e.textContent=t)),w("afterSanitizeElements",e,null),!1)},lt=function(e,t,a){if(Xe&&("id"===t||"name"===t)&&(a in s||a in rr))return!1;if((!ge||ye[t]||!A(Kt,t))&&(!Ve||!A(Zt,t)))if(!d[t]||ye[t]){if(!(st(e)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&A(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||"is"===t&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a))))return!1}else if(!Oe[t]&&!A(Ee,I(a,je,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==St(a,"data:")||!Je[e])&&(!qe||A(Jt,I(a,je,"")))&&a)return!1;return!0},st=function(e){return e.indexOf("-")>0},ut=function(e){var t,a,u,E;w("beforeSanitizeAttributes",e,null);var h=e.attributes;if(h){var v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d};for(E=h.length;E--;){var T=(t=h[E]).name,Ce=t.namespaceURI;if(a="value"===T?t.value:Rt(t.value),u=p(T),v.attrName=u,v.attrValue=a,v.keepAttr=!0,v.forceKeepAttr=void 0,w("uponSanitizeAttribute",e,v),a=v.attrValue,!v.forceKeepAttr&&(Ie(T,e),v.keepAttr)){if(A(/\/>/i,a)){Ie(T,e);continue}P&&(a=I(a,_e," "),a=I(a,Ae," "));var ft=p(e.nodeName);if(lt(ft,u,a)){if(Ke&&("id"===u||"name"===u)&&(Ie(T,e),a=Qt+a),b&&"object"===D(ee)&&"function"==typeof ee.getAttributeType&&!Ce)switch(ee.getAttributeType(ft,u)){case"TrustedHTML":a=b.createHTML(a);break;case"TrustedScriptURL":a=b.createScriptURL(a)}try{Ce?e.setAttributeNS(Ce,T,a):e.setAttribute(T,a),Pe(n.removed)}catch{}}}}w("afterSanitizeAttributes",e,null)}},or=function i(e){var t,a=it(e);for(w("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)w("uponSanitizeShadowNode",t,null),!ot(t)&&(t.content instanceof f&&i(t.content),ut(t));w("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var t,a,u,E,h,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Me=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!q(i)){if("function"!=typeof i.toString)throw fe("toString is not a function");if("string"!=typeof(i=i.toString()))throw fe("dirty is not a string, aborting")}if(!n.isSupported){if("object"===D(r.toStaticHTML)||"function"==typeof r.toStaticHTML){if("string"==typeof i)return r.toStaticHTML(i);if(q(i))return r.toStaticHTML(i.outerHTML)}return i}if(be||Le(e),n.removed=[],"string"==typeof i&&(V=!1),V){if(i.nodeName){var v=p(i.nodeName);if(!m[v]||Y[v])throw fe("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof M)1===(a=(t=nt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?t=a:t.appendChild(a);else{if(!F&&!P&&!k&&-1===i.indexOf("<"))return b&&ne?b.createHTML(i):i;if(!(t=nt(i)))return F?null:ne?Be:""}t&&Se&&L(t.firstChild);for(var le=it(V?i:t);u=le.nextNode();)3===u.nodeType&&u===E||ot(u)||(u.content instanceof f&&or(u.content),ut(u),E=u);if(E=null,V)return i;if(F){if(ae)for(h=Vt.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return d.shadowroot&&(h=Xt.call(o,h,!0)),h}var T=k?t.outerHTML:t.innerHTML;return k&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(Pt,t.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+T),P&&(T=I(T,_e," "),T=I(T,Ae," ")),b&&ne?b.createHTML(T):T},n.setConfig=function(i){Le(i),be=!0},n.clearConfig=function(){G=null,be=!1},n.isValidAttribute=function(i,e,t){G||Le({});var a=p(i),u=p(e);return lt(a,u,t)},n.addHook=function(i,e){"function"==typeof e&&(N[i]=N[i]||[],W(N[i],e))},n.removeHook=function(i){if(N[i])return Pe(N[i])},n.removeHooks=function(i){N[i]&&(N[i]=[])},n.removeAllHooks=function(){N={}},n}()}()}}]);