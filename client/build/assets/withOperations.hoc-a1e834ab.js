import{a as o,j as t,G as d,O as N,C as R,f as T}from"./index-5183357d.js";import{r as g,P as a,o as j,p as u,B as P}from"./vendor-d2c1d7ba.js";import{c as f,I as B}from"./InputText.component-62651ba0.js";const m=e=>{const n=s=>{e.onChange.length===2?e.onChange(e.id,s.target.value):e.onChange(s.target.value)},l=g.useMemo(()=>e.rows?{height:4+parseInt(e.rows)*1.2+"rem"}:{height:e.height},[e.height,e.rows]);return o("div",{className:"form-floating my-2",children:[t("textarea",{id:e.id,className:"form-control "+f.input,style:l,placeholder:"-- input here --",value:e.value,onChange:n}),t("label",{className:f.label,children:e.label})]})};m.propTypes={id:a.oneOfType([a.string,a.number]),label:a.string.isRequired,value:a.string.isRequired,onChange:a.func.isRequired,height:a.string,rows:a.oneOfType([a.string,a.number])};m.defaultProps={id:null,height:"200px",rows:null};const h=e=>t(g.Suspense,{fallback:t(d,{details:"Loading..."}),children:t(j,{children:o(u,{element:t(e.layout,{routes:e.routes}),children:[e.routes.map(n=>t(u,{path:n.path+"/*",element:t(n.element,{})},n.path)),t(u,{path:"*",element:t(e.notFound,{})})]})})});h.propTypes={layout:a.elementType,routes:a.array,notFound:a.elementType};const C=e=>e.isBase?t(P,{basename:e.basePath,children:t(h,{...e})}):t(h,{...e});C.propTypes={basePath:a.string,isBase:a.bool,routes:a.arrayOf(a.shape({path:a.string,component:a.oneOfType([a.func,a.object])})),layout:a.func,notFound:a.func};C.defaultProps={basePath:"/",isBase:!1,routes:[],layout:()=>t(d,{message:"Oops",details:"Layout not provided to `CustomerRouter`"}),notFound:()=>t(d,{message:"404",details:"Not Found"})};const F=e=>{const n=l=>e.onChange(e.dataId,l);switch(!0){case typeof e.data=="object":return t(N,{theme:"rjv-default",name:e.dataId,src:e.data,isEditable:!0,onChange:n});case(typeof e.data=="string"&&e.data.split(/\r\n|\r|\n/).length>1):{const l=e.data.split(/\r\n|\r|\n/).length;return t(m,{label:e.dataId,onChange:n,rows:l,value:e.data})}case typeof e.data=="string":return t(B,{label:e.dataId,onChange:n,value:e.data});default:return null}},I=e=>{const n=(l,s)=>{e.onChange(e.operationId,{...e.operation.data,[l]:s})};return o(R,{children:[t("div",{className:"bg-light p-2 text-muted fw-bold",children:e.operation.type+" --> "+e.operation.label}),t("br",{}),Object.keys(e.operation.data).map(l=>t(F,{dataId:l,data:e.operation.data[l],onChange:n},l)),t("br",{})]})},y={reducer:(e,n)=>({...e,[n.id]:{...e[n.id],data:n.data}}),init:e=>e},k=(e,n,l=[])=>{const s=v=>{const x=T(),[c,O]=g.useReducer(y.reducer,n,y.init),b=(r,i)=>{console.log(r,i),O({id:r,data:i})};return o("div",{className:"row",children:[t("br",{}),t("br",{}),(()=>l.length<1?null:t("div",{className:"col-12 px-2 py-4",children:l.map((r,i)=>{const w="m-1 px-3 py-2 rounded-3 app-text-regular "+(x[r]?"bg-success text-bg-success":"bg-warning text-bg-warning");return t("span",{className:w,children:r},r+i)})}))(),t("div",{className:"col-8",children:Object.keys(c).map(r=>t(I,{operationId:r,operation:c[r],onChange:b},r))}),t("div",{className:"col-4",children:t(e,{...v,operations:c,updateOperation:b})})]})};return s.displayName="WithSDKOperations",s},G=k;export{G as w};
//# sourceMappingURL=withOperations.hoc-a1e834ab.js.map