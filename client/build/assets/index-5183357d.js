import{j as O,P as o,r as l,N as Q,C as Z,R as ee,a as te,b as v,c as m,d as y,u as ne,M as V,e as ae,f as le,g as se,O as re,S as oe,h as ie,q as ce,W as de,i as ue,k as me,l as he}from"./vendor-d2c1d7ba.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const _=O.Fragment,t=O.jsx,d=O.jsxs;const pe="modulepreload",_e=function(e){return"/"+e},$={},c=function(n,a,s){if(!a||a.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=_e(i,s),i in $)return;$[i]=!0;const u=i.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const b=r[f];if(b.href===i&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${g}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":pe,u||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),u)return new Promise((f,b)=>{h.addEventListener("load",f),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n()).catch(i=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=i,window.dispatchEvent(u),!u.defaultPrevented)throw i})},F="/assets/walking-4ac20d6b.png",fe="/assets/running-ecddcd22.png",ge="/assets/desk-d1c57df4.png",be="_images_bxez5_1",ve="_blink_bxez5_1",ye="_container_bxez5_31",Ce="_details_bxez5_37",P={images:be,blink:ve,container:ye,details:Ce},p=e=>d(_,{children:[e.hasImage?t(_,{children:d("div",{className:P.images,children:[t("img",{className:"img-fluid",alt:"Walking",src:F}),t("img",{className:"img-fluid",alt:"Running",src:fe}),t("img",{className:"img-fluid",alt:"Walking",src:F}),t("img",{className:"img-fluid",alt:"Desk",src:ge})]})}):t("div",{className:"py-5 my-5"}),d("div",{className:"py-2 "+P.container,children:[e.message&&t("h1",{className:"display-2",children:e.message}),e.details&&t("h4",{className:P.details,children:e.details})]}),e.children]});p.propTypes={message:o.oneOfType([o.string,o.object]),details:o.string,children:o.any,hasImage:o.bool};p.defaultProps={message:null,details:null,hasImage:!0};const q=e=>e.map(n=>({path:n.path,label:n.label,tag:n.tag})),H=(e,n="/")=>{const a=e.map(s=>{const i=n+(n==="/"?"":"/")+s.path,u={label:s.label,mountPath:i,links:void 0};let g;return s?.children?.length>0&&(u.links=q(s.children||[]),g=H(s.children||[],u.mountPath)),{...s,path:s.path+"/*",element:t(l.Suspense,{fallback:t(p,{details:"Loading..."}),children:t(s.element,{...u})}),errorElement:t(p,{hasImage:!1,message:t("i",{className:"fa-solid fa-circle-exclamation px-2 text-danger"}),details:"Something went wrong"}),children:g}});return a.push({index:!0,element:t(p,{hasImage:!1,message:t("i",{className:"fa-solid fa-gears p-2"}),details:"Choose an integration"})}),a.push({path:"*",element:t(Q,{to:e[0].path,replace:!0})}),a},k=(e,n)=>e.map(a=>({...a,tag:n})),Ee=[{path:"charge",label:"Charge",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"credit-card",label:"CreditCard",element:l.lazy(()=>c(()=>import("./ChargeCreditCard-43aa82ed.js"),["assets/ChargeCreditCard-43aa82ed.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))}]}],Ne=[{path:"vault",label:"Vault",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"credit-card",label:"CreditCard",element:l.lazy(()=>c(()=>import("./VaultCreditCard-4a754a2d.js"),["assets/VaultCreditCard-4a754a2d.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))}]}],Pe=[...Ee,...Ne],ke=[{path:"client-instance",label:"Client Instance",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"client-token",label:"Client Token",element:l.lazy(()=>c(()=>import("./ClientToken.component-eebc88e9.js"),["assets/ClientToken.component-eebc88e9.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))},{path:"tokenization-key",label:"Tokenization Key",element:l.lazy(()=>c(()=>import("./TokenizationKey.component-3f8bc768.js"),["assets/TokenizationKey.component-3f8bc768.js","assets/vendor-d2c1d7ba.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/logger.utils-ababba19.js","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))}]}],Re=[{path:"data-collector",label:"Data Collector",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"basic",label:"Basic",element:l.lazy(()=>c(()=>import("./BasicDataCollector.component-3572159f.js"),["assets/BasicDataCollector.component-3572159f.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js"]))}]}],xe=[{path:"pwpp-checkout",label:"PwPP - Checkout",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"Checkout",label:"Checkout",element:l.lazy(()=>c(()=>import("./Checkout-fe31e8b7.js"),["assets/Checkout-fe31e8b7.js","assets/vendor-d2c1d7ba.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js"]))}]}],Oe=[{path:"pwpp-checkout-vault",label:"PwPP - Checkout + Vault",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"new-customer",label:"New Customer",element:l.lazy(()=>c(()=>import("./NewCustomer-735c9ea5.js"),["assets/NewCustomer-735c9ea5.js","assets/vendor-d2c1d7ba.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js"]))},{label:"Returning Customer",path:"returning-customer",element:l.lazy(()=>c(()=>import("./ReturningCustomer-eb7dbab3.js"),["assets/ReturningCustomer-eb7dbab3.js","assets/vendor-d2c1d7ba.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js"]))},{label:"Merchant Initiated",path:"merchant-initiated",element:l.lazy(()=>c(()=>import("./MerchantInitiated-9fdede6b.js"),["assets/MerchantInitiated-9fdede6b.js","assets/vendor-d2c1d7ba.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js"]))}]}],we=[{path:"pwpp-vault",label:"PwPP - Vault",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"new-customer",label:"New Customer",element:l.lazy(()=>c(()=>import("./NewCustomer-03466747.js"),["assets/NewCustomer-03466747.js","assets/vendor-d2c1d7ba.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js"]))},{label:"Returning Customer",path:"returning-customer",element:l.lazy(()=>c(()=>import("./ReturningCustomer-1a44fd4a.js"),["assets/ReturningCustomer-1a44fd4a.js","assets/vendor-d2c1d7ba.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js"]))},{label:"Merchant Initiated",path:"merchant-initiated",element:l.lazy(()=>c(()=>import("./MerchantInitiated-d19234a0.js"),["assets/MerchantInitiated-d19234a0.js","assets/vendor-d2c1d7ba.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/LoggerService-c6aefb93.js","assets/bt.service-231e8587.js","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js"]))}]}],Te=[...ke,...Re,...xe,...Oe,...we],Ae=[{path:"transaction",label:"Transaction",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"sale",label:"Sale",element:l.lazy(()=>c(()=>import("./Sale.component-fa5b7c2d.js"),["assets/Sale.component-fa5b7c2d.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))},{path:"find",label:"Find",element:l.lazy(()=>c(()=>import("./Find.component-84ad3338.js"),["assets/Find.component-84ad3338.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))}]}],Ie=[{path:"customer",label:"Customer",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"create",label:"Create",element:l.lazy(()=>c(()=>import("./Create.component-b16682c9.js"),["assets/Create.component-b16682c9.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))},{path:"find",label:"Find",element:l.lazy(()=>c(()=>import("./Find.component-9f48cf9a.js"),["assets/Find.component-9f48cf9a.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))}]}],Le=[{path:"payment-method",label:"Payment Method",element:l.lazy(()=>c(()=>import("./PageLayout.component-b10005ff.js"),["assets/PageLayout.component-b10005ff.js","assets/vendor-d2c1d7ba.js"])),children:[{path:"create",label:"Create",element:l.lazy(()=>c(()=>import("./Create.component-bc4355b2.js"),["assets/Create.component-bc4355b2.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))},{path:"find",label:"Find",element:l.lazy(()=>c(()=>import("./Find.component-e883eabc.js"),["assets/Find.component-e883eabc.js","assets/logger.utils-ababba19.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/bt.service-231e8587.js","assets/http.utils-2a9b74b8.js"]))}]}],ze=[...Ae,...Ie,...Le],De=[...k(Te,"client"),...k(Pe,"gql"),...k(ze,"server")],Se=[{label:"PPCheckout",path:"pp-xo",element:l.lazy(()=>c(()=>import("./PPCheckout.component-b4fb3ea3.js"),["assets/PPCheckout.component-b4fb3ea3.js","assets/vendor-d2c1d7ba.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/logger.utils-ababba19.js","assets/http.utils-2a9b74b8.js"]))},{label:"PPHostedFields",path:"pp-hosted-fields",element:l.lazy(()=>c(()=>import("./PPHostedFields.component-9e7b93b4.js"),["assets/PPHostedFields.component-9e7b93b4.js","assets/vendor-d2c1d7ba.js","assets/withOperations.hoc-a1e834ab.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css","assets/logger.utils-ababba19.js"]))}],U=[{path:"braintree",label:"Braintree",element:l.lazy(()=>c(()=>import("./AppLayout.component-008cbd14.js"),["assets/AppLayout.component-008cbd14.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css"])),children:De},{path:"paypal",label:"PayPal",element:l.lazy(()=>c(()=>import("./AppLayout.component-008cbd14.js"),["assets/AppLayout.component-008cbd14.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css"])),children:Se},{label:"YOLO",path:"yolo",element:l.lazy(()=>c(()=>import("./Yolo-7b062c42.js"),["assets/Yolo-7b062c42.js","assets/withOperations.hoc-a1e834ab.js","assets/vendor-d2c1d7ba.js","assets/InputText.component-62651ba0.js","assets/InputText-359b5718.css"]))}],Ve=e=>l.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50.849px",height:"60px",viewBox:"0 0 50.849 60",enableBackground:"new 0 0 50.849 60",xmlSpace:"preserve",...e},l.createElement("g",null,l.createElement("path",{opacity:.68,fill:"#FFFFFF",d:"M45.823,15.244c0.732-4.667-0.005-7.843-2.529-10.72C40.514,1.357,35.493,0,29.068,0H10.42 C9.107,0,7.99,0.956,7.785,2.252L0.02,51.492c-0.153,0.972,0.598,1.851,1.581,1.851h11.513l-0.795,5.039 C12.185,59.231,12.842,60,13.702,60h9.704c1.148,0,2.126-0.835,2.305-1.97l0.096-0.493l1.828-11.592l0.118-0.641 c0.179-1.135,1.157-1.97,2.305-1.97h1.452c9.4,0,16.762-3.82,18.913-14.865c0.899-4.615,0.434-8.468-1.943-11.176 C47.76,16.474,46.866,15.796,45.823,15.244L45.823,15.244"}),l.createElement("path",{opacity:.7,fill:"#FFFFFF",d:"M45.823,15.244c0.732-4.667-0.005-7.843-2.529-10.72C40.514,1.357,35.493,0,29.068,0H10.42 C9.107,0,7.99,0.956,7.785,2.252L0.02,51.492c-0.153,0.972,0.598,1.851,1.581,1.851h11.513l2.892-18.338l-0.09,0.575 c0.205-1.297,1.313-2.252,2.626-2.252h5.472c10.746,0,19.16-4.366,21.619-16.992C45.705,15.962,45.767,15.6,45.823,15.244"}),l.createElement("path",{fill:"#FFFFFF",d:"M19.112,15.306c0.123-0.78,0.624-1.419,1.298-1.742c0.307-0.147,0.649-0.229,1.008-0.229h14.618 c1.732,0,3.346,0.113,4.822,0.351c0.422,0.068,0.833,0.146,1.231,0.234s0.786,0.188,1.161,0.297 c0.187,0.055,0.372,0.112,0.553,0.172c0.725,0.241,1.399,0.524,2.021,0.854c0.732-4.667-0.005-7.843-2.529-10.72 C40.514,1.357,35.493,0,29.068,0H10.42C9.107,0,7.99,0.956,7.785,2.252L0.02,51.492c-0.153,0.972,0.598,1.851,1.581,1.851h11.513 l2.892-18.338L19.112,15.306z"})));const $e="_logo_12ht3_1",Fe="_nav_12ht3_6",M={logo:$e,nav:Fe},w=e=>{const n=l.useRef(void 0),[a,s]=l.useState(void 0);l.useEffect(()=>{const u=new Z(n.current,{toggle:!1});s(u)},[n]);const r=async()=>a.toggle(),i=()=>e.onLink(e.logoPath);return t(_,{children:t("nav",{className:"navbar navbar-expand-lg "+M.nav,children:d("div",{className:"container-fluid",children:[d("span",{className:"navbar-brand text-white",onClick:i,onKeyUp:i,role:"button",tabIndex:"0",children:[t(Ve,{className:"d-inline-block "+M.logo}),t("span",{className:"fs-4 px-3 align-middle",children:e.title})]}),t("button",{className:"navbar-toggler btn btn-outline-light",type:"button",onClick:r,children:t("span",{className:"fa-solid fa-ellipsis-v"})}),d("div",{ref:n,className:"collapse navbar-collapse",children:[t("ul",{className:"navbar-nav mb-2 mb-lg-0",children:e.children}),t("div",{className:"d-flex"})]})]})})})};w.propTypes={title:o.string,logoPath:o.string,onLink:o.func,children:o.node};w.defaultProps={title:"PayPal Framework",logoPath:"/",links:[],onClick:()=>!0};const Me={fontFamily:'"Space Mono", monospace',fontSize:"0.9rem",padding:"1rem",borderRadius:"0.25rem",wordBreak:"break-all"},C=e=>{const n=l.useCallback(a=>{const s=e.onChange;s(a.updated_src)},[e.onChange]);return t(ee,{src:e.src,name:e.name,theme:e.theme,style:Me,sortKeys:e.isSorted,...e.onChange?{onEdit:n,onAdd:n,onDelete:n}:{},onAdd:n,onDelete:n,collapsed:e.isCollapsed})};C.propTypes={src:o.oneOfType([o.object,o.array]).isRequired,name:o.string,theme:o.string,isSorted:o.bool,isCollapsed:o.bool,onChange:o.func};C.defaultProps={name:"root",theme:"codeschool",isSorted:!1,isCollapsed:!1,onChange:void 0};const T=()=>{};T.propTypes={label:o.string.isRequired,children:o.any};const Be="_nav_15cgy_1",je={nav:Be},A=e=>t("ul",{className:"nav nav-tabs "+je.nav,children:e.children});A.propTypes={onClick:o.func};A.defaultProps={onClick:()=>null,children:[]};const qe="_item_1agb3_1",He="_link_1agb3_6",Ue="_active_1agb3_11",R={item:qe,link:He,active:Ue},E=e=>{const n=()=>e.onClick&&e.onClick(e.to),a="mx-3 "+R.link+" "+(e.isActive?R.active:"");return t("li",{className:R.item,children:t("span",{className:a,onClick:n,onKeyUp:n,role:"button",tabIndex:"0",children:e.label||e.children})})};E.propTypes={to:o.string.isRequired,isActive:o.bool.isRequired,onClick:o.func};E.defaultProps={isActive:!1};const We=(e,n)=>{switch(n.type){case"initialize":{let a=0;return e.forEach((s,r)=>{s.isActive&&(a=r)}),n.tabs.map((s,r)=>({path:r.toString(),label:s.props.label,isActive:a===r,children:s.props.children}))}case"changeActive":return e.map(a=>(a.isActive=a.path===n.key,a));default:return e}},I=e=>{const[n,a]=l.useReducer(We,[]);l.useEffect(()=>{a({type:"initialize",tabs:e.children})},[e.children]);const s=r=>{a({type:"changeActive",key:r}),e.onClick&&e.onClick(r)};return d("section",{className:"tab-set",children:[t(A,{links:n,onClick:s,children:n.map(r=>t(E,{to:r.path,isActive:r.isActive,onClick:s,children:r.label},r.path))}),t("div",{className:"tab-content px-3",children:n.map(r=>t("div",{className:"tab-pane fade "+(r.isActive?"active show":""),children:r.children},r.path))})]})};I.propTypes={onClick:o.func,children:(e,n,a)=>{const s=e[n];let r=null;return te.Children.forEach(s,i=>{i.type!==T&&(r=new Error("`"+a+"` children should be of type `Tab`."))}),r}};I.defaultProps={children:[]};const Ke=[],N=v({key:"OutputState",default:Ke}),W=()=>crypto.randomUUID()||Date.now(),Ge=(e,n="",a)=>e.startsWith(n+"/"+a),Je=(e,...n)=>n.reduce((a,s)=>s(a),e),wt={checkActiveLink:Ge,hocCompose:Je,uuid:W},Tt=()=>{const e=m(N);return(n,a)=>{e(s=>[...s,{outputId:W(),label:n,data:a}])}},Xe=()=>{const e=m(N);return n=>e(a=>a.filter(s=>s.outputId!==n))},Ye=()=>{const e=m(N);return()=>e([])},Qe=()=>y(N),Ze=()=>{const e=Qe(),n=Xe(),a=Ye();return d(_,{children:[t("h3",{children:"Output"}),t("hr",{}),t(I,{children:e.map(s=>d(T,{label:s.label,children:[t("br",{}),d("div",{className:"btn-group",role:"group",children:[t("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>n(s.outputId),children:"Clear"}),t("button",{type:"button",className:"btn btn-outline-danger",onClick:a,children:"Clear All"})]}),t("br",{}),t("br",{}),t(C,{theme:"rjv-default",src:s.data})]},s.outputId))})]})},et=[],L=v({key:"BusyState",default:et}),tt=()=>crypto.randomUUID()||Date.now(),nt=(e,n)=>e.filter(a=>a.id!==n),at=e=>{const n=[...e];return n.pop(),n},At=()=>{const e=m(L);return(n=void 0)=>{e(a=>[...a,{id:n||tt(),custom:!!n}])}},It=()=>{const e=m(L);return(n=void 0)=>{e(n?a=>nt(a,n):a=>at(a))}},lt=()=>y(L),st="_container_3bgp2_1",rt="_group_3bgp2_12",B={container:st,group:rt},ot=()=>t("div",{className:B.container,children:d("div",{className:B.group,children:[t("div",{className:"spinner-grow text-primary mx-2",role:"status"}),t("div",{className:"spinner-grow text-light mx-2",role:"status"}),t("div",{className:"spinner-grow text-success mx-2",role:"status"}),t("div",{className:"spinner-grow text-danger mx-2",role:"status"}),t("div",{className:"spinner-grow text-warning mx-2",role:"status"}),t("div",{className:"spinner-grow text-info mx-2",role:"status"}),t("div",{className:"spinner-grow text-dark mx-2",role:"status"})]})}),it=()=>{const e=ne();return lt().length>0||e==="loading"?t(ot,{}):null},z=e=>{const n=l.useRef(void 0);return l.useEffect(()=>{const a=n.current;return V.getOrCreateInstance(a),a.addEventListener("hidden.bs.modal",e.onClose),()=>{a.removeEventListener("hidden.bs.modal",e.onClose)}},[e.onClose]),l.useEffect(()=>{const a=V.getInstance(n.current);e.isOpen?a.show():a.hide()},[e.isOpen]),t(_,{children:t("div",{className:"modal fade",ref:n,tabIndex:"-1",children:t("div",{className:"modal-dialog modal-xl modal-fullscreen-xxl-down modal-dialog-centered modal-dialog-scrollable",children:d("div",{className:"modal-content",children:[d("div",{className:"modal-header",children:[t("h5",{className:"modal-title",children:e.title}),t("button",{className:"btn btn-outline-danger",type:"button",onClick:e.onClose,children:t("span",{className:"fas fa-times"})})]}),t("div",{className:"modal-body",children:e.children}),t("div",{className:"modal-footer",children:t("button",{type:"button",className:"btn btn-outline-secondary",onClick:e.onClose,children:"Close"})})]})})})})};z.propTypes={title:o.string,children:o.any,isOpen:o.bool.isRequired,onClose:o.func.isRequired};z.defaultProps={title:"Modal Title",content:null,isOpen:!1};const ct={},K=v({key:"AppContextState",default:ct}),Lt=()=>{const e=m(K);return(n,a)=>{e(s=>({...s,[n]:a}))}};const dt=()=>y(K),ut=!1,D=v({key:"ErrorState",default:ut}),zt=()=>{const e=m(D);return()=>e(!0)},mt=()=>{const e=m(D);return()=>e(!1)},ht=()=>y(D),pt=()=>{const e=dt();return Object.keys(e).map(n=>t(C,{name:n,isCollapsed:!0,theme:"rjv-default",src:e[n]},n))},_t=()=>{const e=ht(),n=mt(),[a,s]=l.useState(!1);return d(_,{children:[d("div",{className:"fixed-bottom",children:[t("nav",{className:"nav",children:d("div",{className:"bg-light p-2",children:[d("button",{className:"btn btn-sm m-1 btn-outline-success",onClick:()=>s(!0),children:[t("i",{className:"fa-solid fa-floppy-disk px-2"}),"Context"]}),d("button",{className:"btn btn-sm m-1 btn-outline-warning",children:[t("i",{className:"fa-solid fa-trash px-2"}),"Reset"]}),e&&t("button",{className:"btn btn-sm m-1 btn-outline-danger",onClick:n,children:t("i",{className:"fa-solid fa-bug fa-xl"})})]})}),t("br",{})]}),t(z,{title:"Application Context",isOpen:a,onClose:()=>s(!1),children:a&&t(pt,{})})]})},G=e=>{const n=ae(e.to),a=le({path:n.pathname,end:!1,caseSensitive:!1});return t(E,{to:e.to,isActive:!!a,label:e.label,onClick:e.onClick})};G.propTypes={to:o.string,label:o.string,onClick:o.func};const J=e=>{const n=se();return d(_,{children:[t(it,{}),t(_t,{}),t(w,{title:e.label,onLink:n,children:e.links.map(a=>t("div",{className:"lead",children:t(G,{to:a.path,label:a.label,onClick:n})},a.path))}),t("div",{className:"container-fluid",children:d("div",{className:"row",children:[t("div",{className:"col-8",children:t(re,{})}),t("div",{className:"col-4",children:t(Ze,{})})]})}),t(oe,{})]})};J.propTypes={label:o.string,links:o.array};const ft="_card_zov8i_1",gt="_title_zov8i_5",bt="_subTitle_zov8i_10",x={card:ft,title:gt,subTitle:bt},S=e=>t("div",{className:"card "+x.card,children:d("div",{className:"card-body",children:[e.title&&t("h4",{className:"card-title "+x.title,children:e.title}),e.subTitle&&t("h6",{className:"card-subtitle "+x.subTitle,children:e.subTitle}),(e.label||e.subTitle)&&t("hr",{}),e.children]})});S.propTypes={title:o.string,subTitle:o.string,children:o.any};S.defaultProps={title:null,subTitle:null,children:null};class X extends l.Component{constructor(n){super(n),this.state={error:null,errorInfo:null}}componentDidCatch(n,a){console.error(n,a),this.setState({error:n,errorInfo:a})}render(){return this.state.errorInfo?d("div",{className:"container-fluid",children:[t(p,{message:"Oops",details:"Something went wrong",children:t(S,{children:d("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),t("br",{}),this.state.errorInfo.componentStack]})})}),t("div",{className:"row",children:t("div",{className:"col"})})]}):this.props.children}}X.propTypes={children:o.node};const vt="Integration Samples",yt=q(U),Ct=H(U),Et=ie([{path:"/",element:t(J,{links:yt,label:vt}),children:Ct,errorElement:t(p,{message:"404",details:"Not Found"})}]),j=()=>t(l.StrictMode,{children:d(ce,{children:[d(de,{children:[t("meta",{charSet:"utf-8"}),t("title",{children:"Omkar Desai | PayPal Integration Samples"}),t("meta",{httpEquiv:"Content-Security-Policy",content:`
                            default-src 'self';
                            script-src 'self' 'unsafe-inline' https://*.paypal.com;
                            style-src 'self' 'unsafe-inline';
                            object-src 'self';
                            base-uri 'self';
                            connect-src 'self' https://*.paypal.com https://*.braintree-api.com https://*.braintreegateway.com;
                            font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com https://www.paypalobjects.com;
                            frame-src 'self' https://*.paypal.com;
                            img-src 'self' https://*.paypal.com https://www.paypalobjects.com/;
                            media-src 'self';
                            manifest-src 'self';
                        `})]}),t(X,{children:t(ue,{children:t(me,{router:Et})})})]})}),Nt=!1,Y=({children:e})=>{const n=(a,s,r,i)=>console.log(a,{phase:s,actualDuration:r,baseDuration:i});return t(l.Profiler,{id:"RootProfiler",onRender:n,children:e})};Y.propTypes={children:o.any};const Pt=Nt?t(Y,{children:t(j,{})}):t(j,{}),kt=document.getElementById("root"),Rt=he.createRoot(kt);Rt.render(Pt);export{wt as A,S as C,_ as F,p as G,G as L,A as N,C as O,d as a,It as b,zt as c,Tt as d,Lt as e,dt as f,t as j,At as u};
//# sourceMappingURL=index-5183357d.js.map
