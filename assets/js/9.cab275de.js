(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"cljs中普通与瞬态数据结构性能对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cljs中普通与瞬态数据结构性能对比","aria-hidden":"true"}},[t._v("#")]),t._v(" cljs中普通与瞬态数据结构性能对比")]),t._v(" "),n("p",[t._v("chrome 67；\nCPU：2.2 GHz Intel Core i7\n内存：16 GB 1600 MHz DDR3")]),t._v(" "),n("p",[t._v("官方的例子:")]),t._v(" "),n("div",{staticClass:"language-clj extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("(defn vrange [n]\n  (loop [i 0 v []]\n    (if (< i n)\n      (recur (inc i) (conj v i))\n      v)))\n\n(defn vrange2 [n]\n  (loop [i 0 v (transient [])]\n    (if (< i n)\n      (recur (inc i) (conj! v i))\n      (persistent! v))))\n\n(def v (vrange 1000000))    ;; 409 ms\n(def v2 (vrange2 1000000))  ;; 115 ms\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 纯js 28.4ms")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="cljs-transient-performance.md";s.default=e.exports}}]);