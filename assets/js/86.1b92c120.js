(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{491:function(e,t,n){"use strict";n.r(t);var r=n(2),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本概念"}},[e._v("#")]),e._v(" 1.基本概念")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("名词：\n    Vuerouter：是一个插件库，专门实现SPA应用。\n    SPA： 只有1个完整页面index.html。点击导航链接不会刷新页面，局部刷新，\n    router: 包含1个routes\n    routes: 包含多个route\n    route: 路径 path:'/' =》Component:''\n种类：\n    Vuerouter有两种。\n    hash模式：\n        特点：对于一个url，has值。就是#后面的内容。\n        优点：1、兼容性好。2、hash值不会包含http请求。不会带给服务器。\n        缺点：1、带着#号键不美观。2、app分享，地址因为#标记不合法。\n    history模式：\n        优点：1、地址没有#美观。\n        缺点：1、兼容性较差。2、应用部署上线后需要后端支持，解决页面服务端404问题。\n原理：\n    1.切换原理：通过切换组件，隐藏的路由组件是会被销毁的，需要的时候重新挂载。\n    2.每个组件都有$route属性，存储自己的路由信息\n    3.整个应用只有一个router，可以使用组件的$router属性获取。\n")])])]),t("h2",{attrs:{id:"_2-创建和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建和使用"}},[e._v("#")]),e._v(" 2.创建和使用")]),e._v(" "),t("p",[e._v("一、创建路由router：pages.index.js:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.引入Vuerouter库、组件。\n    2.创建router: const router =new Router(routes)。router有1个routes。\n    router属性：\n        mode: \"history\",\n        base: process.env.BASE_URL,\n    3.创建routes：const routers = [{}]。\n    4.route的属性：\n        核心路径:\n            path:'', // 一级路由：path需要加/ 多级路由：path不需要加/\n        核心组件名:\n            component:Component //不需要加path\n        组件名称:\n            name: 'hello'。\n        路由元信息:\n            meta:\n        重定向: \n            redirect: '/'\n            redirect: { name: 'homepage' }\n            redirect:to => { return { path: '/search', query: { q: to.params.searchText } } },\n            redirect: to => { return 'profile'}\n        别名：\n            alias: '/home'\n            alias: ['/people', 'list']\n    5.导出：export default router\n")])])]),t("p",[e._v("二、挂载router：main.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    导入VueRouter和router：import VueRouter from 'vue-router'，import router from './router'\n    Vue全局使用Vuerouter库：Vue.use(Vue.router)\n    Vue实例挂载router路由：Vue({ router:router })\n")])])]),t("p",[e._v("三、路由跳转")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('一、声明式导航\n1.组件router-link创建链接。\n    属性1.to.\n        to:相当于href，后面跟的是组件。<a href= "www.baidu.com"/>\n        1、to+路径: \n            路由声明一级: path:\'/home\'\n            路由声明二级：children:{path:\'message\'} //不能写/message\n            跳转全写：:to="{path:"/home"}", \n            跳转简写：:to="/home/message"。\n        2、to+名字:\n            路由声明: name:\'hello\'\n            跳转字符串写法: :to="{name:\'hello\'}"。\n            跳转对象写法：:to="{name:\'title\'}"\n        3、to+query参数：\n            3.1、to的字符串写法\n            跳转全写：router-link :to="`home?id=${m.id}&title=${m.title}`"\n            接受参数：$route.query.id\n            3.2、to对象写法\n            跳转全写：router-link :to="{ path:\'/home\',query:{id:m.id, title:m.title}}\n            接受参数：$route.query.id\n        4、to+params参数：\n            4、1to的字符串写法：\n            路由声明： path:\'message/:id/:title\' 需要有占位符\n            跳转传递： router-link :to="`/home/message/666/你好`" \n            接受参数： '+e._s(e.$route.params.id)+" "+e._s(e.$route.params.id)+"\n            4、2to的对象写法:不允许使用path，必须使用name。\n            路由声明： path:'message/:id/:title' 需要有占位符\n            跳转传递：router-link :to=\"{ name:'',params:{id:m.id,title:m.title}}\"\n            接受参数： "+e._s(e.$route.params.id)+" "+e._s(e.$route.params.id)+"\n        5、路由的prop配置：(简化路由接受参数)\n            5.1 prop值为对象：\n            该对象中的所有key-value都会以prop传给改路由\n            Detail路由声明：{path:'/detail/:id/:title',component:'Detail',props:{a:1,b:'hello'} }\n            Detail组件接受：props:['a','b']\n            5.2 prop值为布尔：\n            若布尔值为真，会吧该路由组件接受到所有params参数，以props传给Detail组件\n            Detail路由声明：{path:'/detail',component:'Detail',props:true }\n            Detail组件接受：prop:['id','title']\n            5.3prop值为函数\n            props($route):{return {id:$route.query.id,title:$route.query}}\n            props({query}):{return {id:query.id,title:query}}\n    \n    属性2.激活属性\n        active-class=\"active\"\n\n    属性3.replace属性\n        浏览器的历史记录有2种。\n            push：追加历史记录，默认为push。\n            repalce：替换当前记录。\n        语法：\n            全写:replace='true'\n            简写：repalce\n    \n2.显示url对应的组件 router-view\n    将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。\n    \n    这里说明一下：跳转和嵌套没有直接关系。\n    更新一下意识，局部更新的内容，用组件跳转。组件显示用div。\n\n    router-link 就是链接。 route-view 是链接后的展示。\n    A组件内部，router-link 跳转到B组件。B组件在下方显示router-view。或者在A组件上方显示。\n    B组件内部，router-link 点击传入参数1,2,3转到C组件。B组件传什么。C组件展示什么。 多一个C需要接受。\n    \n    路由嵌套呢。只是使用路径的嵌套。按照显示来说。因为是vuerouter局部的，在哪里都可以显示。（和父子组件没有直接关系）\n    \n    说明一下：和a标签的区别。\n    之前是写 a标签，会进行跳转。会跳转到新页面。或者是页面上下。\n    现在是写router-link，点击后，进行路径切换 和 其他组件的显示。\n    其他组件想显示在哪就显示在哪。     \n\n二、编程式导航\n    1.原理：\n        在this.routers的原型对象上有很多方法。\n    2.方法语法：\n    methods:{\n        //跳转到指定路由\n        pushShow(params){\n            this.$router.push({\n                name:'xiang',\n                query:{id:m.id,title:m.title}\n        })},\n        //跳转到指定路由\n        repalceShow(params){\n            this.$router.repalce({\n                name:'xiang',\n                query:{id:m.id,title:m.title}\n        })},\n        //后退，前进，跳转到指定的\n        back(){\n            this.$router.back()\n        },\n        forward(){\n            this.$router.forward\n        },\n        go(){\n            this.$router.go(3)\n        },\n    }\n")])])]),t("h2",{attrs:{id:"_3-路由缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-路由缓存"}},[e._v("#")]),e._v(" 3.路由缓存")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1、作用：让不展示的路由保持挂载。生命周期不被销毁\n2、原理：\n3、语法： \n    <keep-alive> <router-view></router-view> </keep-alive> \n    <keep-alive include='Componentname'> <router-view></router-view> </keep-alive> \n    <keep-alive :include=['News','Message']> <router-view></router-view> </keep-alive> \n4、路由组件的生命周期钩子\n    作用：由于缓存路由组件，会保持状态，不会执行销毁流程。对于beforedestroy没有用。\n        因此路由组件独有的两个钩子。用于捕获有路由组件的 激活 状态。\n    具体名字：\n        activated(){ } 路由激活的时候触发。\n        deactivated(){ } 路由失效的时候触发。\n")])])]),t("h2",{attrs:{id:"_4-路由守卫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-路由守卫"}},[e._v("#")]),e._v(" 4.路由守卫")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1、全局前置路由守卫:\n    作用：\n    对路由权限的控制。初始化时候被调用，每次路由切换之前调用\n    语法：\n        router.beforeEach( (to,from,next) => { console.log('@') } )\n    其中，\n        第一个参数to：是要去的路由。有路径，hash，原信息，参数。\n        第二个参数from：是要来的路由。有路径，hash，原信息，参数。\n        第三个next(拦截)：是进行下一步。否则就要停住。\n    例子：\n        我们不会对所有的路由进行限制。我们只会要去路由的原信息进行校验，如果是真。那么通过。\n        只需要在需要权限的路由上加上 meta:isAuth:flase。\n        如果需要路由需要鉴权，那么进行判断。通过的话next展示，不通过不显示next。\n        如果当前路由没有鉴权，直接next展示无需权限的路由。\n\n2、全局后置守卫\n    作用：\n        对路由权限的控制。初始化时候被调用，每次路由切换之前调用\n    语法：\n        router.afterEach((to,from)=>{})\n    例子：\n        meta:{title:'详情'}\n        document.title = to.meta.title || 'caomei'\n        document.title = to.meta.title 修改网页的title\n3、全局解析守卫：\n    语法：router.beforeResolve( async to=>{})  \n\n4、路由独享守卫\n    作用：\n        对route内的当前路由进行判断。可以和全局后置路由配合使用。\n    语法：\n        route:[{ path:'/about',component:A,beforeEnter({to,from,next}) }]\n5、组件内守卫\n    直接在当前组件里面：\n    通过路由规则，进入这个路由：beforeRouteEnter( to, from ,next){ n()}\n    进入这个路由：beforeRouteUpdate( to, from ,next){}\n    通过路由规则，离开这个路由：beforeRouteLeave( to, from ,next){ n()}\n    \n    1、home-> about 前置路由守卫，后置路由守卫：调用两次。\n    2、home- > about ->text ：组件内守卫。每一次动作调用1次beforeRouteEnter -> beforeRouteLeave\n\n6、完整导航解析流程\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);