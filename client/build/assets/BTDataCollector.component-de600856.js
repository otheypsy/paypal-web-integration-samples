import{d as p,e as d,h as C,f as u,k as D,i as m,r as f,j as I}from"./index-0012b4da.js";import{w as x}from"./withOperations.component-67facef3.js";import{c as y}from"./bt.service-81d9e687.js";import{c as E}from"./logger.utils-ababba19.js";import"./InputText.component-59d8abb9.js";import"./http.utils-58ed8dbd.js";const{log:A,error:B}=E("BTDataCollector.component.jsx"),c={createDataCollector:{label:"braintree-web.dataCollector.create()",type:"client",data:{options:{client:"CLIENT_INSTANCE_HERE",paypal:!0}}}},b=e=>{const n=p(),r=d(),s=C(),l=u(),a=D(),i=m();return f.useEffect(()=>{const t=()=>{if(e.operations.createDataCollector.data.options.client!==c.createDataCollector.data.options.client)return null;const o=e.operations.createDataCollector.data;o.options.client=a.clientInstance,e.updateOperation("createDataCollector",o)};a.clientInstance&&t()},[e,a.clientInstance]),I("button",{className:"btn btn-outline-success",onClick:async()=>{n();try{console.log(e.operations.createDataCollector.data.options);const t=await y("DataCollector",e.operations.createDataCollector.data.options);A("createDataCollector",t),s("DataCollector",t),t&&i("dcInstance",t)}catch(t){l(),B(t)}r()},children:"Create DC Instance"})},j=x(b,c,["clientInstance"]);export{j as default};
//# sourceMappingURL=BTDataCollector.component-de600856.js.map
