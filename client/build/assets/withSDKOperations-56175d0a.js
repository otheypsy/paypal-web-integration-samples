import{j as e,m as p,r as d,b as l,C as x,l as C}from"./index-346127e2.js";import{I as O}from"./InputText.component-ca15f820.js";const f=t=>{const a=n=>t.onChange(t.dataId,n);return typeof t.data=="object"&&t.data!==null?e(p,{theme:"rjv-default",name:t.dataId,src:t.data,isEditable:!0,onChange:a}):e(O,{label:t.dataId,onChange:a,value:t.data})},v=t=>{const a=d.useCallback((n,s)=>{t.onChange(t.operationId,{...t.operation.data,[n]:s})},[]);return l(x,{children:[e("div",{className:"bg-light p-2 text-muted fw-bold",children:t.operation.type+" --> "+t.operation.label}),Object.keys(t.operation.data).map(n=>e(f,{dataId:n,data:t.operation.data[n],onChange:a},n)),e("br",{})]})},o={reducer:(t,a)=>({...t,[a.id]:{...t[a.id],data:a.value}}),init:t=>t},j=(t,a,n=[])=>{const s=u=>{const h=C(),[c,m]=d.useReducer(o.reducer,a,o.init),b=(r,i)=>{m({id:r,value:i})};return l("div",{className:"row",children:[e("br",{}),e("br",{}),(()=>n.length<1?null:e("div",{className:"col-12 px-2 py-4",children:n.map((r,i)=>{const g="m-1 px-3 py-2 rounded-3 app-text-regular "+(h[r]?"bg-success text-bg-success":"bg-warning text-bg-warning");return e("span",{className:g,children:r},r+i)})}))(),e("div",{className:"col-8",children:Object.keys(c).map(r=>e(v,{operationId:r,operation:c[r],onChange:b},r))}),e("div",{className:"col-4",children:e(t,{...u,operations:c})})]})};return s.displayName="WithSDKOperations",s},E=j;export{E as w};
//# sourceMappingURL=withSDKOperations-56175d0a.js.map