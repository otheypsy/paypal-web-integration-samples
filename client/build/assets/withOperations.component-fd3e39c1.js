import{j as e,i as b,b as d,C as x,k as f,r as p}from"./index-bc6e35e4.js";import{I as w}from"./export-5fac481c.js";import{I as y}from"./InputText.component-c228375d.js";const O=t=>{const n=a=>t.onChange(t.dataId,a);switch(!0){case typeof t.data=="object":return e(b,{theme:"rjv-default",name:t.dataId,src:t.data,isEditable:!0,onChange:n});case(typeof t.data=="string"&&t.data.split(/\r\n|\r|\n/).length>1):{const a=t.data.split(/\r\n|\r|\n/).length;return console.log(a),e(w,{label:t.dataId,onChange:n,rows:30,value:t.data})}case typeof t.data=="string":return e(y,{label:t.dataId,onChange:n,value:t.data});default:return null}},v=t=>{const n=(a,s)=>{t.onChange(t.operationId,{...t.operation.data,[a]:s})};return d(x,{children:[e("div",{className:"bg-light p-2 text-muted fw-bold",children:t.operation.type+" --> "+t.operation.label}),e("br",{}),Object.keys(t.operation.data).map(a=>e(O,{dataId:a,data:t.operation.data[a],onChange:n},a)),e("br",{})]})},c={reducer:(t,n)=>({...t,[n.id]:{...t[n.id],data:n.value}}),init:t=>t},C=(t,n,a=[])=>{const s=l=>{const u=f(),[i,h]=p.useReducer(c.reducer,n,c.init),g=(r,o)=>{h({id:r,value:o})};return d("div",{className:"row",children:[e("br",{}),e("br",{}),(()=>a.length<1?null:e("div",{className:"col-12 px-2 py-4",children:a.map((r,o)=>{const m="m-1 px-3 py-2 rounded-3 app-text-regular "+(u[r]?"bg-success text-bg-success":"bg-warning text-bg-warning");return e("span",{className:m,children:r},r+o)})}))(),e("div",{className:"col-8",children:Object.keys(i).map(r=>e(v,{operationId:r,operation:i[r],onChange:g},r))}),e("div",{className:"col-4",children:e(t,{...l,operations:i})})]})};return s.displayName="WithSDKOperations",s},k=C;export{k as w};
//# sourceMappingURL=withOperations.component-fd3e39c1.js.map
