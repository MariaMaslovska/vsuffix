(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c69380d"],{"291b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("ArticlesBaner"),r("section",[r("div",{staticClass:"container"},[r("router-link",{staticClass:"block__btn",attrs:{to:"/articles"}},[r("p",[t._v("see all")])]),t._l(t.tags,(function(e){return r("router-link",{key:e.id,staticClass:"block__btn",attrs:{to:{path:"articles?tag="+e.data.tag,query:{tag:e.data.tag}}}},[r("p",{domProps:{innerHTML:t._s(e.data.name)}})])})),t.loading?r("Loader"):r("div",{staticClass:"block__wrap"},[r("ul",{staticClass:"block__list"},t._l(t.filteredArticles,(function(e){return r("ArticleItem",t._b({key:e.id},"ArticleItem",e,!1))})),1)])],2)])],1)},a=[],i=(r("a4d3"),r("4de4"),r("7db0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),c=r("2f62"),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"articles-baner"},[r("div",{staticClass:"articles-baner__wrap"},[r("h1",{staticClass:"articles-baner__title"},[r("p",[t._v("articles")])])])])}],o=(r("6c91"),r("2877")),u={},d=Object(o["a"])(u,s,l,!1,null,null,null),b=d.exports,f=r("ffe4");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"articles",data:function(){return{loading:!0}},metaInfo:function(){return{title:this.$title("Articles")}},computed:p({},Object(c["d"])("blog",["tags","filteredArticles"])),methods:p({},Object(c["b"])("blog",["getArticlesByTag"])),beforeRouteUpdate:function(t,e,r){var n=this;this.loading=!0,this.getArticlesByTag().then((function(){var e=n.tags.find((function(e){return e.data.tag===t.query.tag})),a=e&&e.id?e.id:null;n.getArticlesByTag(a),n.loading=!1,r()}))},created:function(){var t=this;this.loading=!0,this.getArticlesByTag().then((function(){var e=t.tags.find((function(e){return e.data.tag===t.$route.query.tag})),r=e&&e.id?e.id:null;r&&t.getArticlesByTag(r),t.loading=!1}))},components:{ArticlesBaner:b,ArticleItem:f["a"]}},O=_,h=Object(o["a"])(O,n,a,!1,null,null,null);e["default"]=h.exports},"6c91":function(t,e,r){"use strict";var n=r("a13d"),a=r.n(n);a.a},a13d:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5c69380d.052166c9.js.map