(this["webpackJsonpmy-food-app"]=this["webpackJsonpmy-food-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=t(8),i=(t(26),t(11)),u=t(7),s=t(2),m=t(6);t(27);var p=function(){return r.a.createElement("div",{className:"row",id:"bottom"},r.a.createElement("div",null,r.a.createElement("h4",null,"Created by ",r.a.createElement("a",{href:"https://twitter.com/esschapman",target:"_blank",id:"footer-link"},"Sophie Chapman"))))};var f=function(){return r.a.createElement("div",{className:"row",id:"top"},r.a.createElement("div",null,r.a.createElement("h1",null,"Fooooooooooooooooooood!",r.a.createElement("span",{id:"working-title"},"(working title)"))))};var d=function(){return r.a.createElement("div",{className:"nav-row"},r.a.createElement(o.b,{to:"/profiles"},r.a.createElement("div",{className:"nav-button"},r.a.createElement("h2",null,"Profiles"))),r.a.createElement(o.b,{to:"/groups"},r.a.createElement("div",{className:"nav-button"},r.a.createElement("h2",null,"Groups"))),r.a.createElement(o.b,{to:"/food"},r.a.createElement("div",{className:"nav-button"},r.a.createElement("h2",null,"Food"))))};var h=function(){return r.a.createElement("div",{className:"welcome-container"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("h4",null,"To get started, use ",r.a.createElement("em",null,"Profiles")," create a record of your friends' eating preferences."),r.a.createElement("h4",null,"Then in ",r.a.createElement("em",null,"Groups"),", make up a list of who is coming to your next dinner party!"),r.a.createElement("h4",null,"When it comes to cooking up a storm, use ",r.a.createElement("em",null,"Food")," to check whether your chosen ingredients will suit everyone."),r.a.createElement("h4",null,"Happy cooking!"),r.a.createElement("h4",null,r.a.createElement("em",null,"Note: This project is in its early stages, so the diet/preferences options and ingredients list is limited. Also, I am not a dietician or nutritionist so don't rely on this app to decide what to feed your friends with allergies and whatnot.")))},E=t(10);var g=function(e){var a=[{name:"isVegetarian",checked:e.newProfile.isVegetarian,text:"Vegetarian"},{name:"isVegan",checked:e.newProfile.isVegan,text:"Vegan"},{name:"isGlutenFree",checked:e.newProfile.isGlutenFree,text:"Gluten Free"},{name:"hasNutAllergy",checked:e.newProfile.hasNutAllergy,text:"Nut Allergy"}];return r.a.createElement("div",{className:"component"},0==e.newProfile.name.length?r.a.createElement("h3",null,"Add Profile"):r.a.createElement("h3",null,"Edit Profile"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=e.profileData.findIndex((function(a){return a.id===e.newProfile.id}));e.setProfileData((function(a){if(-1===t)return[].concat(Object(E.a)(a),[e.newProfile]);var n=Object(E.a)(a);return n.splice(t,1,e.newProfile),n})),e.setNewProfile({id:e.profileData.length+2,name:"",isVegetarian:!1,isVegan:!1,isGlutenFree:!1,hasNutAllergy:!1}),e.setSelectedProfile("")}},r.a.createElement("input",{className:"text-input",placeholder:"Name",name:"name",value:e.newProfile.name,onChange:function(a){return e.handleChange(a,e.setNewProfile)}}),r.a.createElement("br",null),a.map((function(a){return r.a.createElement("div",{className:"checkbox",key:a.name},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:a.name,checked:a.checked,onChange:function(a){return e.handleChange(a,e.setNewProfile)}}),a.text),r.a.createElement("br",null))})),r.a.createElement("button",{className:"app-button"},"Save")))};var N=function(e){return r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,"Your Profiles"),e.profileData.map((function(a){return r.a.createElement("div",{key:a.name},r.a.createElement("p",null,a.name,r.a.createElement("button",{className:"icon-button",onClick:function(){return e.setSelectedProfile(a.name)}},r.a.createElement("i",{className:"fas fa-eye"})),r.a.createElement("button",{className:"icon-button",onClick:function(){return t=a.name,e.setSelectedProfile(t),void e.setNewProfile(e.profileData.find((function(e){return e.name===t})));var t}},r.a.createElement("i",{className:"fas fa-edit"}))))})))};var b=function(e){var a=e.profileData.find((function(a){return a.name===e.selectedProfile}));return r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,"Profile Display"),r.a.createElement("p",null,r.a.createElement("b",null,a.name)),r.a.createElement("p",null,"Vegetarian: ",a.isVegetarian?r.a.createElement("i",{className:"fas fa-check-circle"}):r.a.createElement("i",{className:"fas fa-times-circle"})),r.a.createElement("p",null,"Vegan: ",a.isVegan?r.a.createElement("i",{className:"fas fa-check-circle"}):r.a.createElement("i",{className:"fas fa-times-circle"})),r.a.createElement("p",null,"Gluten Free: ",a.isGlutenFree?r.a.createElement("i",{className:"fas fa-check-circle"}):r.a.createElement("i",{className:"fas fa-times-circle"})),r.a.createElement("p",null,"Nut Allergy: ",a.hasNutAllergy?r.a.createElement("i",{className:"fas fa-check-circle"}):r.a.createElement("i",{className:"fas fa-times-circle"})))};var v=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)({id:e.profileData.length+1,name:"",isVegetarian:!1,isVegan:!1,isGlutenFree:!1,hasNutAllergy:!1}),i=Object(s.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",{className:"component-container"},r.a.createElement(N,{profileData:e.profileData,setSelectedProfile:c,setNewProfile:m}),l.length>0?r.a.createElement(b,{selectedProfile:l,profileData:e.profileData}):null,r.a.createElement(g,{profileData:e.profileData,setProfileData:e.setProfileData,handleChange:e.handleChange,newProfile:u,setNewProfile:m,setSelectedProfile:c}))};var w=function(e){return r.a.createElement("div",{className:"component"},0===e.newGroup.groupName.length?r.a.createElement("h3",null,"Add Group"):r.a.createElement("h3",null,"Edit Group"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=e.groupData.findIndex((function(a){return a.groupName===e.newGroup.groupName}));e.setGroupData((function(a){if(-1===t)return[].concat(Object(E.a)(a),[e.newGroup]);var n=Object(E.a)(a);return n.splice(t,1,e.newGroup),n})),e.setNewGroup({groupName:"",members:[]})}},r.a.createElement("input",{className:"text-input",placeholder:"Group Name",name:"groupName",value:e.newGroup.groupName,onChange:function(a){return e.handleChange(a,e.setNewGroup)}}),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-display"},e.profileData.map((function(a){return r.a.createElement("li",{className:"list-display-item",key:a.name,onClick:function(){return function(a){e.setNewGroup((function(e){return Object(u.a)({},e,{members:[].concat(Object(E.a)(e.members),[a.id])})}))}(a)}},a.name)})))),r.a.createElement("button",{className:"app-button"},"Save Group")))};var y=function(e){var a=e.groupData.length>0?e.groupData.map((function(a){return r.a.createElement("p",{key:a.groupName},a.groupName,r.a.createElement("button",{className:"icon-button",onClick:function(){return e.setNewGroup(a)}},r.a.createElement("i",{className:"fas fa-edit"})))})):r.a.createElement("p",null,"No groups yet.");return r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,"Your Groups"),a)};var k=function(e){return r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,e.newGroup.groupName),e.newGroup.members.map((function(a){var t=e.profileData.find((function(e){return e.id===a}));return r.a.createElement("p",{key:t.id},t.name,r.a.createElement("button",{className:"icon-button",onClick:function(){return function(a){e.setNewGroup((function(e){return Object(u.a)({},e,{members:e.members.filter((function(e){return e!==a}))})}))}(t.id)}},r.a.createElement("i",{className:"fas fa-minus-circle"})))})))};var D=function(e){var a=Object(n.useState)({groupName:"",members:[]}),t=Object(s.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:"component-container"},r.a.createElement(y,{groupData:e.groupData,setNewGroup:c}),l.groupName.length>0?r.a.createElement(k,{newGroup:l,setNewGroup:c,profileData:e.profileData}):null,r.a.createElement(w,{newGroup:l,setNewGroup:c,profileData:e.profileData,addProfiletoGroup:e.addProfiletoGroup,handleChange:e.handleChange,groupData:e.groupData,setGroupData:e.setGroupData}))};var G=function(e){return r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,"Select Group"),r.a.createElement("ul",{className:"list-display"},e.groupData.map((function(a){return r.a.createElement("li",{className:"list-display-item",key:a.groupName,onClick:function(){return t=a.groupName,void e.setCurrentGroup(t);var t}},a.groupName)}))))},P=["Almond","Bacon","Beef","Beans","Bread","Butter","Cashews","Carrot","Calamari","Cheese","Chicken","Corn","Couscous","Crab","Cream","Duck","Egg","Fish","Flour","Hazelnut","Honey","Ice cream","Lamb","Lobster","Macadamia nuts","Meat","Milk","Mussels","Oysters","Pasta","Peanut","Pecans","Pine nuts","Pistachios","Pork","Potato","Prawns","Quinoa","Squid","Turkey","Veal","Walnuts","Xylophone","Yoghurt"];var C=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],m=i[1];function p(a){var t=a.toLowerCase(),n=u.toLowerCase();if(!0===t.startsWith(n))return r.a.createElement("li",{className:"list-display-item",key:a,onClick:function(){return function(a){e.setIngredient(a.toLowerCase()),m(""),c(!l)}(a)}},a)}return Object(n.useEffect)((function(){u.length>0?c(!0):c(!1)}),[u]),r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,"Search an ingredient"),r.a.createElement("input",{className:"text-input",placeholder:"Type Ingredient",name:"ingredientInput",value:u,onChange:function(e){return function(e){m(e.target.value)}(e)}}),l&&r.a.createElement("ul",{className:"list-display"},P.map((function(e){return p(e)}))))},j=["bacon","beef","calamari","chicken","crab","duck","fish","lamb","lobster","meat","mussels","oysters","pork","prawns","squid","turkey","veal","xylophone"],O=["bacon","beef","butter","calamari","cheese","chicken","crab","cream","duck","egg","fish","honey","ice cream","lamb","lobster","meat","milk","mussels","oysters","pork","prawns","squid","turkey","veal","xylophone","yoghurt"],x=["bread","couscous","flour","pasta","xylophone"],V=["almond","cashews","hazelnut","macadamia nuts","peanut","pecans","pine nuts","pistachios","walnuts","xylophone"];var S=function(e){function a(a){var t=e.profileData.find((function(e){return e.id===a}));return r.a.createElement("li",{key:t.id},t.name," ",function(a){return(!0!==a.isVegetarian||!0!==(t=e.ingredient,j.includes(t)))&&((!0!==a.isVegan||!0!==function(e){return O.includes(e)}(e.ingredient))&&((!0!==a.isGlutenFree||!0!==function(e){return x.includes(e)}(e.ingredient))&&(!0!==a.hasNutAllergy||!0!==function(e){return V.includes(e)}(e.ingredient))));var t}(t)?r.a.createElement("i",{className:"fas fa-check-circle"}):r.a.createElement("i",{className:"fas fa-times-circle"}))}var t,n=e.ingredient.length>0?e.ingredient[0].toUpperCase()+e.ingredient.slice(1):"";return r.a.createElement("div",{className:"component"},r.a.createElement("h3",null,"Who can eat it"),r.a.createElement("p",null,r.a.createElement("b",null,e.currentGroup)),r.a.createElement("p",null,"Ingredient: ",n),r.a.createElement("ul",{className:"list-display"},""===(t=e.currentGroup)?"No group chosen":e.groupData.find((function(e){return e.groupName===t})).members.map(a)))};var F=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",{className:"component-container"},r.a.createElement(G,{groupData:e.groupData,setCurrentGroup:c}),r.a.createElement(C,{setIngredient:m}),r.a.createElement(S,{currentGroup:l,profileData:e.profileData,groupData:e.groupData,ingredient:u}))},A=[{id:1,name:"Eleanor (example)",isVegetarian:!1,isVegan:!1,isGlutenFree:!1,hasNutAllergy:!1},{id:2,name:"Chidi (example)",isVegetarian:!0,isVegan:!0,isGlutenFree:!0,hasNutAllergy:!1},{id:3,name:"Tahani (example)",isVegetarian:!0,isVegan:!1,isGlutenFree:!0,hasNutAllergy:!1},{id:4,name:"Jason (example)",isVegetarian:!1,isVegan:!1,isGlutenFree:!1,hasNutAllergy:!0}];var I=function(){var e=Object(n.useState)(A),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([{groupName:"Dinner Party (example)",members:[1,2,3,4]},{groupName:"Breakfast (example)",members:[3,2,4]}]),o=Object(s.a)(c,2),E=o[0],g=o[1];function N(e,a){var t=e.target,n=t.name,r=t.value,l=t.type,c=t.checked;a("checkbox"===l?function(e){return Object(u.a)({},e,Object(i.a)({},n,c))}:function(e){return Object(u.a)({},e,Object(i.a)({},n,r))})}return r.a.createElement("div",{id:"app-container"},r.a.createElement(f,null),r.a.createElement(d,null),r.a.createElement("div",{id:"main"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(m.a,{path:"/profiles"},r.a.createElement(v,{profileData:t,setProfileData:l,handleChange:N})),r.a.createElement(m.a,{path:"/groups"},r.a.createElement(D,{profileData:t,handleChange:N,groupData:E,setGroupData:g})),r.a.createElement(m.a,{path:"/food"},r.a.createElement(F,Object(i.a)({groupData:E,profileData:t},"groupData",E))))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.aeaeb02b.chunk.js.map