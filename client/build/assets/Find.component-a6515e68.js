import{d as e,e as i,h as c,f as d,j as u}from"./index-00f27fa2.js";import{c as p}from"./logger.utils-ababba19.js";import{w as m}from"./withOperations.hoc-4e25aaba.js";import{s as f}from"./bt.service-06a51c60.js";import"./InputText.component-95098d29.js";import"./http.utils-2a9b74b8.js";const{log:l,error:y}=p("Find.component.jsx"),g={find:{label:"gateway.transaction.find()",type:"server",data:{args:["h6jqv0st"]}}},h=t=>{const n=e(),o=i(),a=c(),r=d();return u("button",{className:"btn btn-outline-success",onClick:async()=>{n();try{const s=await f("transaction","find",t.operations.find.data.args,{});l("findTransaction",s),a("FindTransaction",s)}catch(s){r(),y(s)}o()},children:"Find Transaction"})},x=m(h,g);export{x as default};
//# sourceMappingURL=Find.component-a6515e68.js.map
