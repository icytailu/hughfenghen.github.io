(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{188:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[s("a",{attrs:{href:"https://bugs.webkit.org/show_bug.cgi?id=171041",target:"_blank",rel:"noopener noreferrer"}},[t._v("bug详情"),s("OutboundLink")],1)]),t._v(" "),t._m(3),s("hr"),t._v(" "),s("p",[t._v("答案在上面了，看官如果还有兴趣的话请继续。。。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),s("ul",[s("li",[t._v("会议后，我们leader review PR，提醒“你这样改可能覆盖webpack 4.5 uglifyJS的默认配置，并且"),s("a",{attrs:{href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("uglifyJS插件官方文档"),s("OutboundLink")],1),t._v("中safari10与mangle是同级的”。")]),t._v(" "),s("li",[t._v("对比WebpackOptionsDefaulter文件，发现默认配置中还有sourcemap，cache相关。")]),t._v(" "),s("li",[t._v("检查构建文件，确认没有输出sourcemap文件。")]),t._v(" "),t._m(12),t._v(" "),s("li",[t._v("本地构建，检查sourcemap、变量命名，正常")]),t._v(" "),s("li",[t._v("结束，彻底解决。")])]),t._v(" "),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"bug-safari10-cannot-declare-a-let-variable-twice-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-safari10-cannot-declare-a-let-variable-twice-e","aria-hidden":"true"}},[this._v("#")]),this._v(" BUG: Safari10 Cannot declare a let variable twice: 'e'.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("上线后，吃饭、午休、会议，查看线上错误日志，吓一跳，300+个错误\n"),a("code",[this._v("SyntaxError: Cannot declare a let variable twice: 'e'.")]),this._v("\n于是拉上小伙伴（我刚接手C端业务）退出会议，着手定位问题。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方法")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改webpack(version: 4.5) 配置文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" UglifyJSPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uglifyjs-webpack-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  minimizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UglifyJSPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        parallel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sourceMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        uglifyOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          safari10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("由于日志中"),a("strong",[this._v("没有错误的行列信息")]),this._v("，无法使用sourcemap定位到源码位置。\n只能看到报错的文件路径：https://xxx/xxx/main.[hash].js。\n还好，错误信息非常明确，不就是一个作用域内"),a("code",[this._v("let e")]),this._v("两次嘛，没sourcemap我也能找到源码位置😎。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"第一回合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一回合","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一回合")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("将有文件的线上main.[hash].js文件下载下来。")]),t._v(" "),s("li",[t._v("搜索关键字"),s("code",[t._v("let e=")]),t._v("。   嗯，只有10个结果，很好")]),t._v(" "),s("li",[t._v("查看 同一个函数作用域下出现两次"),s("code",[t._v("let e=")]),t._v("的位置")]),t._v(" "),s("li",[t._v("嗯，只有一处"),s("code",[t._v("getLocationCity{let e='xx',if(...){let e='yy'}}")]),t._v("， 哇抓到bug了，so easy~")]),t._v(" "),s("li",[t._v("在源码中找到"),s("code",[t._v("getLocationCity")]),t._v("的位置，代码命名没问题，"),s("strong",[t._v("猜测uglifyJS压缩混淆代码时重命名出的问题")]),t._v("。")]),t._v(" "),s("li",[t._v("修改源码，本地编译，检查压缩混淆后"),s("code",[t._v("getLocationCity")]),t._v("下的变量命名没问题了。")]),t._v(" "),s("li",[t._v("提交代码，beta构建，product构建，准备发布。")]),t._v(" "),s("li",[t._v("不对，最近没改这块源码，有问题。。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"第二回合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二回合","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二回合")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("回头仔细分析日志")]),t._v(" "),s("li",[t._v("发现两条线索：  1、错误开始时间与最近一次发布时间吻合；2、所有错误的都是IOS10（userAgent）")]),t._v(" "),s("li",[s("strong",[t._v("猜测是最近一次发布导致的兼容性问题")])]),t._v(" "),s("li",[t._v("为对比新增的"),s("code",[t._v("let e=")]),t._v("，从Jenkins构建记录日志中找到上上次发布的main.[hash].js文件URL，下载、对比")]),t._v(" "),s("li",[t._v("发现新增的"),s("code",[t._v("let e=")]),t._v("位置，"),s("code",[t._v("h(e){for(let e='...'){...}}")]),t._v("并没有。（此时小伙伴用模拟器ios10重现了问题，错误会导致页面卡死，报错达500+次，心里开始慌了）")]),t._v(" "),s("li",[t._v("精简找到的h函数，在chrome console中执行无错误，"),s("strong",[t._v("确认是ios10兼容问题，与uglifyJS无关")]),t._v("（此时回头看前面找到的"),s("code",[t._v("getLocationCity{let e='xx',if(...){let e='yy'}}")]),t._v("并无语法问题，因为"),s("code",[t._v("let")]),t._v("作用范围是块级作用域，因代码压缩了没仔细分析，"),s("strong",[t._v("误以为是uglifyJS的bug")]),t._v("）")]),t._v(" "),s("li",[t._v("于是只好google "),s("code",[t._v("ios 10 SyntaxError: Cannot declare a let variable twice: 'e'.")])]),t._v(" "),s("li",[t._v("ヾ(｡｀Д´｡)我擦，google结果第一条就是相关内容，于是顺藤摸瓜找到解决方法（不完美）")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("minimizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UglifyJSPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          uglifyOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            mangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              safari10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("此时解决方法有两个：1、小伙伴的临时方法：将for改成foreach；2、如上修改uglify配置")]),t._v(" "),s("li",[t._v("最终决定修改配置，原因：解决根本问题，uglifyJS改动可以验证（大部分生产问题修复都会遇到这样的场景，方法1的风险往往更低）")]),t._v(" "),s("li",[t._v("修改配置后，本地构建，对比检查for中的变量e被重命名成a了")]),t._v(" "),s("li",[t._v("提交代码、PR、打包构建、发布。")]),t._v(" "),s("li",[t._v("观察日志系统，错误数量停止增长。问题解决。继续会议。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"第三回合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三回合","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三回合")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("copy默认配置，添加"),a("code",[this._v("safari10: true")]),this._v("(如上文答案)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考","aria-hidden":"true"}},[this._v("#")]),this._v(" 思考")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("直接google搜索错误信息可以更快地找到解决方法。（这次未及时搜索是因为错误信息实在太清晰，一看就明白，但它是有误导性的）")]),this._v(" "),a("li",[this._v("仔细分析日志可以提前预知到是兼容性问题，方便重现问题，搜索也可以提高精准度")]),this._v(" "),a("li",[this._v("修改代码/配置应该仔细分析影响范围及验证，这次覆盖配置项是因为项目刚升级到webpack 4.5（leader升级的），我和小伙伴都还不熟悉新的配置。不过还是仔细验证了编译输出的文件，配置不完美但并没有实际损失。")])])}],!1,null,null,null);n.options.__file="bug1-safari10.md";a.default=n.exports}}]);