(function(){var t={1658:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"topic-item"},[e("router-link",{attrs:{to:`/user/${t.author.loginname}`}},[e("img",{staticClass:"avatar_url",attrs:{src:t.author.avatar_url,alt:""}})]),t.isUser?t._e():e("span",{staticClass:"count"},[e("span",[t._v(t._s(t.reply_count))]),t._v(" / "),e("span",{staticClass:"visit"},[t._v(t._s(t.visit_count))])]),t.top||t.good?e("el-tag",{staticClass:"tag",attrs:{size:"mini",effect:"dark",type:"success"}},[t._v(t._s(t.top?"置顶":"精华"))]):t.isUser?t._e():e("el-tag",{staticClass:"tag",attrs:{size:"mini",type:"info"}},[t._v(t._s(t._f("tabTextTransform")(t.tab)))]),e("router-link",{staticClass:"title",attrs:{to:`/topic/${t.id}`}},[e("h4",[t._v(t._s(t.title))])]),e("span",{staticClass:"iconfont icon-riqi"}),e("span",{staticClass:"time"},[t._v(t._s(t._f("fromNow")(t.last_reply_at)))])],1)},a=[],r={props:["isUser","author","good","last_reply_at","reply_count","tab","title","top","visit_count","id"]},o=r,i=s(1001),u=(0,i.Z)(o,n,a,!1,null,null,null),c=u.exports},5572:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-panel"},[e("div",{staticClass:"panel-head"},[t._t("panel-head")],2),e("div",{staticClass:"panel-content"},[t._t("panel-content")],2)])},a=[],r={},o=r,i=s(1001),u=(0,i.Z)(o,n,a,!1,null,null,null),c=u.exports},6700:function(t,e,s){var n={"./af":3906,"./af.js":3906,"./ar":902,"./ar-dz":3853,"./ar-dz.js":3853,"./ar-kw":299,"./ar-kw.js":299,"./ar-ly":6825,"./ar-ly.js":6825,"./ar-ma":6379,"./ar-ma.js":6379,"./ar-sa":7700,"./ar-sa.js":7700,"./ar-tn":2059,"./ar-tn.js":2059,"./ar.js":902,"./az":6043,"./az.js":6043,"./be":7936,"./be.js":7936,"./bg":4078,"./bg.js":4078,"./bm":4014,"./bm.js":4014,"./bn":9554,"./bn-bd":7114,"./bn-bd.js":7114,"./bn.js":9554,"./bo":6529,"./bo.js":6529,"./br":5437,"./br.js":5437,"./bs":9647,"./bs.js":9647,"./ca":9951,"./ca.js":9951,"./cs":6113,"./cs.js":6113,"./cv":7965,"./cv.js":7965,"./cy":5858,"./cy.js":5858,"./da":3515,"./da.js":3515,"./de":2831,"./de-at":6263,"./de-at.js":6263,"./de-ch":1127,"./de-ch.js":1127,"./de.js":2831,"./dv":6714,"./dv.js":6714,"./el":8616,"./el.js":8616,"./en-au":4595,"./en-au.js":4595,"./en-ca":3545,"./en-ca.js":3545,"./en-gb":9609,"./en-gb.js":9609,"./en-ie":3727,"./en-ie.js":3727,"./en-il":3302,"./en-il.js":3302,"./en-in":6305,"./en-in.js":6305,"./en-nz":9128,"./en-nz.js":9128,"./en-sg":4569,"./en-sg.js":4569,"./eo":650,"./eo.js":650,"./es":6358,"./es-do":4214,"./es-do.js":4214,"./es-mx":8639,"./es-mx.js":8639,"./es-us":232,"./es-us.js":232,"./es.js":6358,"./et":7279,"./et.js":7279,"./eu":5515,"./eu.js":5515,"./fa":7981,"./fa.js":7981,"./fi":7090,"./fi.js":7090,"./fil":9208,"./fil.js":9208,"./fo":2799,"./fo.js":2799,"./fr":3463,"./fr-ca":2213,"./fr-ca.js":2213,"./fr-ch":2848,"./fr-ch.js":2848,"./fr.js":3463,"./fy":1468,"./fy.js":1468,"./ga":8163,"./ga.js":8163,"./gd":2898,"./gd.js":2898,"./gl":6312,"./gl.js":6312,"./gom-deva":682,"./gom-deva.js":682,"./gom-latn":9178,"./gom-latn.js":9178,"./gu":5009,"./gu.js":5009,"./he":2795,"./he.js":2795,"./hi":7009,"./hi.js":7009,"./hr":6506,"./hr.js":6506,"./hu":9565,"./hu.js":9565,"./hy-am":3864,"./hy-am.js":3864,"./id":5626,"./id.js":5626,"./is":6649,"./is.js":6649,"./it":151,"./it-ch":5348,"./it-ch.js":5348,"./it.js":151,"./ja":9830,"./ja.js":9830,"./jv":3751,"./jv.js":3751,"./ka":3365,"./ka.js":3365,"./kk":5980,"./kk.js":5980,"./km":9571,"./km.js":9571,"./kn":5880,"./kn.js":5880,"./ko":6809,"./ko.js":6809,"./ku":6773,"./ku.js":6773,"./ky":5505,"./ky.js":5505,"./lb":553,"./lb.js":553,"./lo":1237,"./lo.js":1237,"./lt":1563,"./lt.js":1563,"./lv":1057,"./lv.js":1057,"./me":6495,"./me.js":6495,"./mi":3096,"./mi.js":3096,"./mk":3874,"./mk.js":3874,"./ml":6055,"./ml.js":6055,"./mn":7747,"./mn.js":7747,"./mr":7113,"./mr.js":7113,"./ms":8687,"./ms-my":7948,"./ms-my.js":7948,"./ms.js":8687,"./mt":4532,"./mt.js":4532,"./my":4655,"./my.js":4655,"./nb":6961,"./nb.js":6961,"./ne":2512,"./ne.js":2512,"./nl":8448,"./nl-be":2936,"./nl-be.js":2936,"./nl.js":8448,"./nn":9031,"./nn.js":9031,"./oc-lnc":5174,"./oc-lnc.js":5174,"./pa-in":118,"./pa-in.js":118,"./pl":3448,"./pl.js":3448,"./pt":3518,"./pt-br":2447,"./pt-br.js":2447,"./pt.js":3518,"./ro":817,"./ro.js":817,"./ru":262,"./ru.js":262,"./sd":8990,"./sd.js":8990,"./se":3842,"./se.js":3842,"./si":7711,"./si.js":7711,"./sk":756,"./sk.js":756,"./sl":3772,"./sl.js":3772,"./sq":6187,"./sq.js":6187,"./sr":732,"./sr-cyrl":5713,"./sr-cyrl.js":5713,"./sr.js":732,"./ss":9455,"./ss.js":9455,"./sv":9770,"./sv.js":9770,"./sw":959,"./sw.js":959,"./ta":6459,"./ta.js":6459,"./te":5302,"./te.js":5302,"./tet":7975,"./tet.js":7975,"./tg":1294,"./tg.js":1294,"./th":2385,"./th.js":2385,"./tk":4613,"./tk.js":4613,"./tl-ph":8668,"./tl-ph.js":8668,"./tlh":8190,"./tlh.js":8190,"./tr":4506,"./tr.js":4506,"./tzl":3440,"./tzl.js":3440,"./tzm":9852,"./tzm-latn":2350,"./tzm-latn.js":2350,"./tzm.js":9852,"./ug-cn":730,"./ug-cn.js":730,"./uk":99,"./uk.js":99,"./ur":2100,"./ur.js":2100,"./uz":6002,"./uz-latn":6322,"./uz-latn.js":6322,"./uz.js":6002,"./vi":4207,"./vi.js":4207,"./x-pseudo":4674,"./x-pseudo.js":4674,"./yo":570,"./yo.js":570,"./zh-cn":3644,"./zh-cn.js":3644,"./zh-hk":2591,"./zh-hk.js":2591,"./zh-mo":9503,"./zh-mo.js":9503,"./zh-tw":8080,"./zh-tw.js":8080};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id=6700},5955:function(t,e,s){"use strict";var n=s(6369),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("TopHeader"),e("router-view")],1)},r=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"inner"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:s(3791),alt:""}}),e("h2",[t._v("catForum")])]),e("div",{staticClass:"header-right"},[e("router-link",{staticClass:"home-link",attrs:{to:"/"}},[t._v("首页")]),e("el-badge",{attrs:{hidden:0===t.messageCount,value:t.messageCount}},[t.userInfo?e("router-link",{attrs:{to:"/my/message"}},[t._v("未读消息")]):t._e()],1),t.userInfo?e("router-link",{attrs:{to:"/topic/create"}},[e("el-button",{attrs:{type:"success",round:""}},[t._v("发布话题")])],1):t._e(),t.userInfo?t._e():e("router-link",{attrs:{to:"/login"}},[e("el-button",{attrs:{type:"primary",circle:""}},[t._v("登录")])],1),t.userInfo?e("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}):t._e(),t.userInfo?e("el-button",{attrs:{type:"success",circle:""},on:{click:t.logout}},[t._v("退出")]):t._e()],1)],1)])},i=[],u=(s(7658),s(3150)),c={data(){return{userInfo:null,messageCount:0}},watch:{"$route.path":{async handler(t){const e=sessionStorage.getItem("userInfo");if("/"===t&&!this.userInfo&&e){this.userInfo=JSON.parse(e);const t=await(0,u.qU)(sessionStorage.getItem("accesstoken"));this.messageCount=t.data}},immediate:!0}},methods:{logout(){sessionStorage.removeItem("userInfo"),sessionStorage.removeItem("accesstoken"),this.userInfo=null,"/"!==this.$route.path&&this.$router.push("/")}}},l=c,f=s(1001),d=(0,f.Z)(l,o,i,!1,null,null,null),p=d.exports,m={components:{TopHeader:p}},j=m,h=(0,f.Z)(j,a,r,!1,null,null,null),v=h.exports,g=s(2631),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("base-panel",{scopedSlots:t._u([{key:"panel-head",fn:function(){return[e("div",{staticClass:"nav"},[e("router-link",{class:{active:["/","/all"].includes(t.$route.path)},attrs:{to:"/all"}},[t._v("综合")]),e("router-link",{attrs:{"active-class":"active",to:"/good"}},[t._v("推荐")]),e("router-link",{attrs:{"active-class":"active",to:"/share"}},[t._v("分享")]),e("router-link",{attrs:{"active-class":"active",to:"/ask"}},[t._v("问答")]),e("router-link",{attrs:{"active-class":"active",to:"/job"}},[t._v("招聘")]),e("router-link",{attrs:{"active-class":"active",to:"/dev"}},[t._v("测试")])],1)]},proxy:!0},{key:"panel-content",fn:function(){return[e("router-view")]},proxy:!0}])})],1)},k=[],_=s(5572),y={components:{BasePanel:_.Z}},C=y,w=(0,f.Z)(C,b,k,!1,null,null,null),z=w.exports,x=function(){var t=this,e=t._self._c;return t.loading?e("el-skeleton",{attrs:{rows:25,animated:""}}):e("div",{staticClass:"topicItem"},[t._l(t.topics,(function(s){return e("TopicItem",t._b({key:s.id},"TopicItem",s,!1))})),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":40,total:t.pageInfo[t.tab||"all"].total,"current-page":t.page},on:{"current-change":t.changePage}}),e("el-backtop")],2)},I=[],O=s(1658),T={components:{TopicItem:O.Z},props:["tab"],data(){return{topics:[],loading:!1,page:1,pageInfo:{all:{total:240},good:{total:720},share:{total:160},ask:{total:80},job:{total:80},dev:{total:210}}}},watch:{tab:{async handler(t){this.loading=!0;const e=this.$route.query.page,s=await(0,u.BB)({tab:t||"all",page:e||1});this.page=1*e||1,this.loading=!1,this.topics=s.data},immediate:!0}},methods:{async changePage(t){this.page=t,this.loading=!0;const e=await(0,u.BB)({tab:this.tab||"all",page:t});this.loading=!1,this.topics=e.data,this.$router.push(this.$route.path+`?page=${t}`)}}},S=T,$=(0,f.Z)(S,x,I,!1,null,null,null),N=$.exports;n["default"].use(g.ZP);const Z=[{path:"/login",component:()=>s.e(976).then(s.bind(s,5976))},{path:"/",component:z,children:[{path:"",name:"home",component:N},{path:":tab",component:N,props:!0}]},{path:"/topic/create",component:()=>s.e(111).then(s.bind(s,1111))},{path:"/topic/:topicId",component:()=>s.e(26).then(s.bind(s,1026)),props:!0},{path:"/user/:loginname",component:()=>s.e(221).then(s.bind(s,4221)),props:!0},{path:"/my/message",component:()=>s.e(513).then(s.bind(s,5513))}],P=new g.ZP({mode:"hash",base:"/forum/",routes:Z});var E=P,B=s(3822);n["default"].use(B.ZP);var A=new B.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),U=s(7934),q=s.n(U),F=s(5034),L=s.n(F),D=s(2163),M=s.n(D),H=s(6830),G=s.n(H),J=s(8109),K=s.n(J),R=s(7342),Q=s.n(R),V=s(2572),W=s.n(V),X=s(5981),Y=s.n(X),tt=s(1168),et=s.n(tt),st=s(8319),nt=s.n(st),at=s(5697),rt=s.n(at),ot=s(6020),it=s.n(ot),ut=s(3256),ct=s.n(ut),lt=s(1540),ft=s.n(lt);n["default"].use(ft()),n["default"].use(ct()),n["default"].use(it()),n["default"].use(rt()),n["default"].use(nt()),n["default"].use(et()),n["default"].use(Y()),n["default"].use(W()),n["default"].use(Q()),n["default"].use(K()),n["default"].use(G()),n["default"].use(M()),n["default"].use(L()),n["default"].prototype.$message=q();var dt=s(6797),pt=s.n(dt);s(3644);pt().locale("zh-cn"),n["default"].filter("fromNow",(t=>pt()(t).fromNow())),n["default"].filter("tabTextTransform",(t=>"share"===t?"分享":"ask"===t?"问答":"job"===t?"招聘":"客户端测试")),n["default"].config.productionTip=!1,new n["default"]({router:E,store:A,render:t=>t(v)}).$mount("#app")},3150:function(t,e,s){"use strict";s.d(e,{dA:function(){return l},Ue:function(){return m},uk:function(){return f},FC:function(){return h},qU:function(){return j},BN:function(){return i},BB:function(){return o},bG:function(){return u},lr:function(){return d},x4:function(){return c},At:function(){return v},ts:function(){return p}});var n=s(4311);const a=n.Z.create({baseURL:"https://cnodejs.org/api/v1",timeout:2e3});a.interceptors.request.use((t=>t)),a.interceptors.response.use((t=>t.data));var r=a;const o=({tab:t,page:e=1,limit:s=40})=>r.get("/topics",{params:{tab:t,page:e,limit:s}}),i=(t,e)=>r.get(`/topic/${t}`,e?{params:{accesstoken:e}}:{}),u=t=>r.get(`/user/${t}`),c=t=>r.post("/accesstoken",{accesstoken:t}),l=(t,e)=>r.post("/topic_collect/collect",{topic_id:t,accesstoken:e}),f=(t,e)=>r.post("/topic_collect/de_collect",{topic_id:t,accesstoken:e}),d=(t,e)=>r.post(`/reply/${t}/ups`,{accesstoken:e}),p=(t,e,s)=>r.post(`/topic/${t}/replies`,{accesstoken:e,content:s}),m=(t,e,s,n)=>r.post("/topics",{accesstoken:t,tab:e,title:s,content:n}),j=t=>r.get("/message/count",{params:{accesstoken:t}}),h=t=>r.get("/messages",{params:{accesstoken:t}}),v=t=>r.post("/message/mark_all",{accesstoken:t})},3791:function(t,e,s){"use strict";t.exports=s.p+"img/forum.29e0da8c.webp"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],r=t[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(i=!1,r<o&&(o=r));if(i){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{26:"4e388a53",111:"e5dd6bd5",221:"e0c36d03",513:"53f9adb1",976:"3ad44da2"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{26:"a86aba27",111:"89e40be5",221:"ea2f125f",513:"a5d3ad26",976:"9cba5702"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-forum:";s.l=function(n,a,r,o){if(t[n])t[n].push(a);else{var i,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==e+r){i=f;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",e+r),i.src=n),t[n]=[a];var d=function(e,s){i.onerror=i.onload=null,clearTimeout(p);var a=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/forum/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,s,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=i,r.parentNode.removeChild(r),a(u)}};return r.onerror=r.onload=o,r.href=e,s?s.parentNode.insertBefore(r,s.nextSibling):document.head.appendChild(r),r},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var a=s[n],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===t||r===e))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){a=o[n],r=a.getAttribute("data-href");if(r===t||r===e)return a}},n=function(n){return new Promise((function(a,r){var o=s.miniCssF(n),i=s.p+o;if(e(o,i))return a();t(n,i,null,a,r)}))},a={143:0};s.f.miniCss=function(t,e){var s={26:1,111:1,221:1,513:1,976:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={143:0};s.f.j=function(e,n){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(s,n){a=t[e]=[s,n]}));n.push(a[2]=r);var o=s.p+s.u(e),i=new Error,u=function(n){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}};s.l(o,u,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,o=n[0],i=n[1],u=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(u)var l=u(s)}for(e&&e(n);c<o.length;c++)r=o[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},n=self["webpackChunkvue_forum"]=self["webpackChunkvue_forum"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(5955)}));n=s.O(n)})();
//# sourceMappingURL=app.13a27fa3.js.map