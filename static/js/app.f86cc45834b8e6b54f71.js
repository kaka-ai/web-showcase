webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("7KzD"),i={name:"App",created:function(){Object(s.loadProgressBar)({showSpinner:!1,easing:"ease",speed:500})}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(t){n("m6yr")},null,null).exports,l=n("/ocq"),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card hoverable",class:t.customClass},[n("div",{staticClass:"card-content"},[n("span",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.content))])]),t._v(" "),n("div",{staticClass:"card-action"},[n("a",{staticClass:"m-link1 blue-text",attrs:{target:"_blank",href:t.link1}},[t._v(t._s(t.link1Title))]),t._v(" "),t.link2?n("a",{staticClass:"m-link2 blue-text",attrs:{target:"_blank",href:t.link2}},[t._v(t._s(t.link2Title))]):t._e()])])},staticRenderFns:[]};var u={components:{BasicCard:n("VU/8")({name:"HelloWorld",props:{customClass:{default:"animated fadeInDown"},title:{default:"Title"},content:{default:"Content"},link1:{default:"#"},link1Title:{default:"link1Title"},link2:{default:"#"},link2Title:{default:"link2Title"}},data:function(){return{}}},c,!1,function(t){n("QLQD")},"data-v-91c20186",null).exports},name:"HomePage",data:function(){return{}},created:function(){this.$store.dispatch("project/getProjects")},computed:{projects:function(){return this.$store.getters["project/getProjects"]}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-home row"},this._l(this.projects,function(t,n){return e("div",{key:n,staticClass:"col s12 m4 l3"},[e("BasicCard",{attrs:{title:t.title,content:t.content,link1:t.link1,link1Title:t.link1Title,link2:t.link2,link2Title:t.link2Title,customClass:t.customClass}})],1)}))},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(t){n("eaJd")},"data-v-28f71111",null).exports;a.a.use(l.a);var p=new l.a({mode:"history",routes:[{path:"/",name:"HomePage",component:f}]}),v=n("NYxO"),m=n("//Fk"),h=n.n(m),g=function(t,e,n){return"https://sheets.googleapis.com/v4/spreadsheets/12sXWKhIzEIgDmiaX2PYWMfTXufWXPWm2vK21hKNg8Lo/values/"+t+"!"+e+"%3A"+n+"?key=AIzaSyBOleQ2kbi9QTAgREHqLUFXaDdJv0xTvug"},k=n("mtWM"),_=n.n(k),j=function(t){for(var e=[],n=t.values[0],a=1;a<t.values.length;a++){for(var s={},i=t.values[a],o=0;o<i.length;o++)s[n[o]]=i[o];e.push(s)}return e},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"project",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"L80",a=g(t,e,n);return new h.a(function(t,e){_.a.get(a).then(function(e){var n=j(e.data);t(n)}).catch(function(t){e(t)})})},T={namespaced:!0,state:{projects:[]},getters:{getProjects:function(t){return t.projects}},mutations:{getProjects:function(t){C().then(function(e){t.projects=e},function(t){console.log(t)})},loadDefaultData:function(t){t.projects=[]}},actions:{loadDefaultData:function(t){t.commit("loadDefaultData")},getProjects:function(t){t.commit("getProjects")}}};a.a.use(v.a);var D=new v.a.Store({modules:{project:T},state:{},getters:{},mutations:{},actions:{}});a.a.config.productionTip=!1,new a.a({el:"#app",store:D,router:p,components:{App:r},template:"<App/>"})},QLQD:function(t,e){},eaJd:function(t,e){},m6yr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f86cc45834b8e6b54f71.js.map