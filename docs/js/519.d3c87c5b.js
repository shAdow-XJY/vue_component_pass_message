"use strict";(self["webpackChunkvue_pass_message"]=self["webpackChunkvue_pass_message"]||[]).push([[519],{2519:function(a,s,t){t.r(s),t.d(s,{default:function(){return b}});var e=t(3396);const n=a=>((0,e.dD)("data-v-1e39ef63"),a=a(),(0,e.Cn)(),a),r={class:"border"},p=n((()=>(0,e._)("h3",null,"父组件",-1)));function d(a,s,t,n,d,i){const o=(0,e.up)("childPage");return(0,e.wg)(),(0,e.iD)("div",r,[p,(0,e._)("h3",{onClick:s[0]||(s[0]=(...a)=>i.toChild&&i.toChild(...a))},"点击！！！父组件通过子组件的props 传给 子组件 信息: 我就是传过来的参数"),(0,e.Wm)(o,{passDataString:d.passData},null,8,["passDataString"])])}var i=t(7139);const o=a=>((0,e.dD)("data-v-46c8033b"),a=a(),(0,e.Cn)(),a),c={class:"border"},u=o((()=>(0,e._)("h3",null,"子组件",-1))),l=(0,e.Uk)(" 只需要父子组件中的变量名都是命名为passDataString一样就行, 父组件调用子组件中v-bind绑定该变量并赋值，子组件中props声明并直接调用即可. ");function h(a,s,t,n,r,p){return(0,e.wg)(),(0,e.iD)("div",c,[u,(0,e._)("h3",null,"获取父组件的参数为："+(0,i.zw)(t.passDataString),1),l])}var g={name:"childPage_props",props:{passDataString:{type:String,require:!0}}},v=t(89);const _=(0,v.Z)(g,[["render",h],["__scopeId","data-v-46c8033b"]]);var D=_,f={name:"parentPage_props",components:{childPage:D},data(){return{passData:""}},methods:{toChild(){this.passData="我就是传过来的参数"}}};const C=(0,v.Z)(f,[["render",d],["__scopeId","data-v-1e39ef63"]]);var b=C}}]);
//# sourceMappingURL=519.d3c87c5b.js.map