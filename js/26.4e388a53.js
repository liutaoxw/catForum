"use strict";(self["webpackChunkvue_forum"]=self["webpackChunkvue_forum"]||[]).push([[26],{1026:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var i=function(){var t=this,s=t._self._c;return t.topic?s("div",{staticClass:"topic"},[s("div",{staticClass:"topic-head"},[s("div",{staticClass:"head-top"},[s("div",{staticClass:"top-rigth"},[t.topic.top||t.topic.good?s("el-tag",{attrs:{size:"mini",effect:"dark",type:"success"}},[t._v(t._s(t.topic.top?"置顶":"精华"))]):t._e(),s("h2",[t._v(t._s(t.topic.title))])],1),t.accesstoken?s("el-button",{attrs:{type:"success",size:"mini",round:""},on:{click:t.collect}},[t._v(t._s(t.topic.is_collect?"取消收藏":"收藏"))]):t._e()],1),s("span",[s("span",{staticClass:"iconfont icon-dian1"}),t._v("发布于"+t._s(t._f("fromNow")(t.topic.create_at)))]),s("span",[s("span",{staticClass:"iconfont icon-dian1"}),t._v("作者"+t._s(t.topic.author.loginname))]),s("span",[s("span",{staticClass:"iconfont icon-dian1"}),t._v(t._s(t.topic.visit_count)+"次浏览")]),s("span",[s("span",{staticClass:"iconfont icon-dian1"}),t._v("来自"+t._s(t._f("tabTextTransform")(t.topic.tab)))])]),s("div",{staticClass:"topic-content",domProps:{innerHTML:t._s(t.topic.content)}}),t.topic.replies.length?s("div",{staticClass:"comment-box"},[s("div",{staticClass:"comment-head"},[s("span",[t._v(t._s(t.topic.replies.length)+"回复")])]),s("div",{staticClass:"comment-list"},t._l(t.topic.replies,(function(e,i){return s("div",{key:e.id,class:["comment-item",{active:t.commentLikeMost.includes(e.id)}]},[s("router-link",{attrs:{to:`/user/${t.topic.author.loginname}`}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("div",{staticClass:"comment-content"},[s("div",{staticClass:"info"},[s("span",[s("span",[t._v(t._s(e.author.loginname))]),s("span",[t._v(t._s(i+1)+"楼")]),s("span",[t._v(t._s(t._f("fromNow")(e.create_at)))])]),e.ups.length||t.accesstoken?s("span",[s("span",{class:["iconfont","icon-icon",{up:e.is_uped}],on:{click:function(s){return t.like(e)}}}),e.ups.length?s("span",[t._v(t._s(e.ups.length))]):t._e()]):t._e()]),s("span",{staticClass:"text",domProps:{innerHTML:t._s(e.content)}})])],1)})),0)]):t._e(),t.accesstoken?s("BasePanel",{scopedSlots:t._u([{key:"panel-head",fn:function(){return[t._v(" 添加回复 ")]},proxy:!0},{key:"panel-content",fn:function(){return[s("div",{staticClass:"reply-wrap"},[s("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入回复内容",resize:"none"},model:{value:t.commentText,callback:function(s){t.commentText="string"===typeof s?s.trim():s},expression:"commentText"}}),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.replied}},[t._v("回复")])],1)]},proxy:!0}],null,!1,516264404)}):t._e()],1):t._e()},n=[],o=(e(7658),e(5572)),c=e(3150),a={components:{BasePanel:o.Z},props:["topicId"],data(){return{topic:null,accesstoken:"",commentText:""}},computed:{commentLikeMost(){if(0===this.topic.replies.length)return[];const t=this.topic.replies.slice(0).sort(((t,s)=>s.ups.length-t.ups.length)),s=[],e=t[0].ups.length;if(e>2){const i=t.filter((t=>t.ups.length===e));i.forEach((t=>{s.push(t.id)}));const n=t[i.length].ups.length;if(n>2){const e=t.filter((t=>t.ups.length===n));e.forEach((t=>{s.push(t.id)}))}}return s}},async created(){this.topic||(document.body.style.overflowY="scroll");const t=sessionStorage.getItem("accesstoken");t&&(this.accesstoken=t);const s=await(0,c.BN)(this.topicId,t||null);this.topic=s.data},methods:{async collect(){const t=this.accesstoken;this.topic.is_collect?(await(0,c.uk)(this.topic.id,t),this.topic.is_collect=!1):(await(0,c.dA)(this.topic.id,t),this.topic.is_collect=!0)},async like(t){const s=this.accesstoken;if(s){const e=await(0,c.lr)(t.id,s),i=JSON.parse(sessionStorage.getItem("userInfo")).id;"up"===e.action?(t.is_uped=!0,t.ups.push(i)):(t.is_uped=!1,t.ups.filter((t=>t!==i)))}},async replied(){const{topic:t,accesstoken:s,commentText:e}=this;if(e){await(0,c.ts)(t.id,s,e);const i=await(0,c.BN)(this.topicId,s);this.topic=i.data,this.commentText=""}}}},l=a,p=e(1001),r=(0,p.Z)(l,i,n,!1,null,null,null),u=r.exports}}]);
//# sourceMappingURL=26.4e388a53.js.map