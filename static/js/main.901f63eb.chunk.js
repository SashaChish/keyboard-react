(this.webpackJsonpkeyboard=this.webpackJsonpkeyboard||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var c,r,a,o,i,s,p,l,b,j,d,O=t(0),u=t.n(O),x=t(8),f=t.n(x),h=t(5),m=["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","~",1,2,3,4,5,6,7,8,9,0,"-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","|","caps lock","a","s","d","f","g","h","j","k","l",";",'"',"enter","shift","z","x","c","v","b","n","m","<",">","/","ctrl","fn","win","alt","space","alt","fn","ctrl"],g="ONCHANGE_THEME",y="ONCHANGE_COLOR",v="ONCHANGE_ACTIVE_PRESET",w="ONCHANGE_PRESETS",E="SET_THEME",_=function(e){return{type:v,payload:e}},k=function(e){var n=e.name,t=e.theme;return{type:w,payload:{name:n,theme:t}}},N=function(e){return e.app},S=t(3),C=t(4),T="#ffffff",H="#000000",I=C.a.div(c||(c=Object(S.a)(["\n  border: 1px solid ",";\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px 3px ",";\n  background-color: ",";\n  padding: 25px;\n  width: 920px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  margin-top: 10px;\n"])),H,H,T),P=C.a.div(r||(r=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  row-gap: 10px;\n"]))),A=C.a.div(a||(a=Object(S.a)(["\n  color: ",";\n  background: ",";\n  border: 1px solid #9a9a9a;\n  border-radius: 6px;\n  padding: 0 25px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: box-shadow 0.3s;\n  text-transform: uppercase;\n  box-shadow: 0 0 0 1px;\n\n  &:nth-child(69) {\n    flex: 1;\n  }\n"])),(function(e){return e.color||"#ff0000"}),H),R=t(1),z=function(){var e=Object(h.c)(N),n=e.theme,t=e.color,c=Object(h.b)(),r=function(e){c(function(e){var n=e.id,t=e.color;return{type:g,payload:{id:n,color:t}}}({id:e.target.id,color:t}))};return Object(R.jsx)(I,{children:Object(R.jsx)(P,{children:m.map((function(e,t){var c="".concat(e,"-").concat(t);return Object(R.jsx)(A,{id:c,color:n[c],onClick:r,children:e},c)}))})})},D=t(6),G=t(2),J=C.a.button(o||(o=Object(S.a)(["\n  min-width: 150px;\n  margin: 20px 15px 0 0;\n  padding: 5px 10px;\n  letter-spacing: 2px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  text-transform: uppercase;\n  background-color: ",";\n  ","\n"])),H,T,(function(e){return!e.disabled&&"\n    &:hover {\n      cursor: pointer;\n      color: #0081ff;\n      transition: color ease-in-out 0.3s;\n    }\n  "})),M=C.a.div(i||(i=Object(S.a)(["\n  min-width: 350px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),X=function(){var e=Object(h.c)(N),n=e.presets,t=e.theme,c=e.activePreset,r=Object(h.b)(),a=function(e){localStorage.setItem("presets",JSON.stringify(e))};return Object(R.jsxs)(M,{children:[Object(R.jsx)(J,{onClick:function(){var e="preset-".concat(Object.keys(n).length||0);r(k({name:e,theme:t})),r(_(e)),a(Object(G.a)(Object(G.a)({},n),{},Object(D.a)({},e,t)))},children:"Save"}),Object(R.jsx)(J,{onClick:function(){r(k({name:c,theme:t})),a(Object(G.a)(Object(G.a)({},n),{},Object(D.a)({},c,t)))},disabled:!c,children:"Update"})]})},L=C.a.div(s||(s=Object(S.a)(["\n  margin-top: 10px;\n  font-size: 22px;\n  letter-spacing: 2px;\n  color: ",";\n"])),H),U=C.a.h3(p||(p=Object(S.a)(["\n  color: ",";\n  letter-spacing: 2px;\n  font-size: 20px;\n"])),H),V=C.a.select(l||(l=Object(S.a)(["\n  height: 28px;\n  font-size: 16px;\n  border-radius: 10px;\n  padding: 0px 15px;\n"]))),q=C.a.div(b||(b=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),B=C.a.div(j||(j=Object(S.a)(["\n  min-width: 380px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),F=function(){var e=Object(h.c)(N),n=e.color,t=e.activePreset,c=e.presets,r=Object(h.b)(),a=Object(O.useMemo)((function(){return Object.keys(c)}),[c]);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(B,{children:[a.length&&Object(R.jsxs)(q,{children:[Object(R.jsx)(U,{children:"Choose preset"}),Object(R.jsx)(V,{value:t,onChange:function(e){var n,t=e.target.value;r(_(t)),r((n=c[t],{type:E,payload:n}))},children:a.map((function(e,n){return Object(R.jsx)("option",{children:e},e+n)}))})]}),Object(R.jsxs)(q,{children:[Object(R.jsx)(U,{children:"Choose color"}),Object(R.jsx)("input",{type:"color",onChange:function(e){r(function(e){return{type:y,payload:e}}(e.target.value))},value:n})]})]}),Object(R.jsx)(L,{children:t||"preset-".concat(Object.keys(c).length||0)})]})},K=C.a.main(d||(d=Object(S.a)(["\n  background-color: ",";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n"])),T,T);function Q(){return Object(R.jsxs)(K,{children:[Object(R.jsx)(z,{}),Object(R.jsx)(F,{}),Object(R.jsx)(X,{})]})}var W=t(10),Y={theme:"",presets:JSON.parse(localStorage.getItem("presets"))||{},activePreset:"",color:T},Z=Object(W.a)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0,t=n.type,c=n.payload;switch(t){case g:return Object(G.a)(Object(G.a)({},e),{},{theme:Object(G.a)(Object(G.a)({},e.theme),{},Object(D.a)({},c.id,c.color))});case E:return Object(G.a)(Object(G.a)({},e),{},{theme:c});case y:return Object(G.a)(Object(G.a)({},e),{},{color:c});case v:return Object(G.a)(Object(G.a)({},e),{},{activePreset:c});case w:return Object(G.a)(Object(G.a)({},e),{},{presets:Object(G.a)(Object(G.a)({},e.presets),{},Object(D.a)({},c.name,c.theme))});default:return e}}}),$=Object(W.c)(Z,Object(W.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));t(28);f.a.render(Object(R.jsx)(h.a,{store:$,children:Object(R.jsx)(u.a.StrictMode,{children:Object(R.jsx)(Q,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.901f63eb.chunk.js.map