(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{65852:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mealDetails",function(){return t(18184)}])},38123:function(e,n,t){"use strict";t.d(n,{M:function(){return r}});var r,i=t(85893),s=(t(67294),t(11163));!function(e){e.HOME="home",e.ADD_FOOD="addFood"}(r||(r={}));n.Z=function(e){var n=e.activeTab,t=(0,s.useRouter)();return(0,i.jsxs)("nav",{className:"flex flex-row bg-teal-600 p-4",children:[(0,i.jsx)("div",{className:"text-white pl-2 pr-3 cursor-pointer ".concat(n===r.HOME&&"font-bold"),onClick:function(){return t.replace("/")},children:"Food"}),(0,i.jsx)("div",{className:"text-white pl-2 pr-3 cursor-pointer ".concat(n===r.ADD_FOOD&&"font-bold"),onClick:function(){return t.push("/addFood")},children:"Add food"})]})}},18184:function(e,n,t){"use strict";t.r(n);var r,i=t(85893),s=t(67294),c=t(38123),u=t(62709),o=t(48847);!function(e){e.CALORIES="calories",e.PROTEINS="proteins"}(r||(r={}));n.default=function(){var e=(0,s.useContext)(u.k),n=e.selectedMeal,t=e.setSelectedMeal,a=(0,s.useState)([]),l=a[0],d=a[1];(0,s.useEffect)((function(){return f(),function(){t([])}}),[]);var f=function(){d(n.map((function(e){return{id:e.id,size:Number.parseInt(e.attributes.portionSize)}})))},x=function(e){return n.reduce((function(t,r){var i=n.find((function(e){return e.id==r.id})),s=l.find((function(e){return e.id===r.id}));return i&&s?t+(i.attributes[e]/100*s.size||0):t}),0).toFixed(e===r.CALORIES?0:1)||0};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"sticky top-0",children:[(0,i.jsx)(c.Z,{activeTab:c.M.HOME}),(null===n||void 0===n?void 0:n.length)>1&&(0,i.jsxs)("div",{className:"w-full text-center p-4 bg-gray-200 text-gray-600",children:["Ukupno: ",(0,i.jsx)("span",{className:"font-bold",children:x(r.CALORIES)})," kcal,",(0,i.jsxs)("span",{className:"font-bold",children:[" ",x(r.PROTEINS)]})," p"]})]}),(0,i.jsx)("div",{className:"flex flex-col items-center mt-2",children:n.map((function(e){var n=l.find((function(n){return n.id===e.id}));return n?(0,i.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center mb-6 p-4 border-b",children:[(0,i.jsx)("p",{className:"flex items-center justify-center w-52 text-gray-600 mb-4 md:justify-start md:mb-0",children:e.attributes.name}),(0,i.jsx)("input",{className:"border p-2 rounded-xl focus:outline-none",value:n.size||0,onChange:function(n){return function(e,n){var t=l.map((function(t){return e===t.id&&(t.size=n),t}));d(t)}(e.id,Number.parseInt(n.target.value))}}),(0,i.jsx)("p",{className:"flex justify-center items-center w-24 h-12 p-2 bg-gray-100 rounded-xl m-4",children:"".concat((0,o.I)(e.attributes.calories,n.size).toFixed(0)," kcal")}),(0,i.jsx)("p",{className:"flex justify-center items-center w-24 h-12 p-2 bg-gray-100 rounded-xl",children:"".concat((0,o.I)(e.attributes.proteins,n.size).toFixed(1)," p")})]},e.id):null}))})]})}},48847:function(e,n,t){"use strict";t.d(n,{I:function(){return r},W:function(){return i}});var r=function(e,n){return e/100*n||0},i=function(e,n){return e.length>n?e.substring(0,n)+"...":e}},11163:function(e,n,t){e.exports=t(90387)}},function(e){e.O(0,[774,888,179],(function(){return n=65852,e(e.s=n);var n}));var n=e.O();_N_E=n}]);