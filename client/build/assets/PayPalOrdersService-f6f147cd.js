const c={base:""},d=(e,s)=>{e.setRequestHeader("Content-type","application/json"),s.forEach(r=>{e.setRequestHeader(r.name,r.value)})},p=(e,s)=>{e.onload=()=>{e.status>=200&&e.status<300?s([void 0,JSON.parse(e.response)]):s([JSON.parse(e.response),void 0]),window.isBusy=!1},e.onerror=()=>{s(["Client error",void 0]),window.isBusy=!1}},n=(e,s,r,o)=>new Promise(u=>{window.isBusy=!0;const t=new XMLHttpRequest,i=c.base+s;t.open(e,i,!0),d(t,o),p(t,u),t.send(JSON.stringify(r))}),a={get:(e,s=[])=>n("GET",e,null,s),post:(e,s={},r=[])=>n("POST",e,s,r),patch:(e,s={},r=[])=>n("PATCH",e,s,r),delete:(e,s={},r=[])=>n("DELETE",e,s,r)},l={create:async e=>{const s="/paypal/paypal/order/create",r=await a.post(s,e);return r.data?r.data:null},execute:async e=>{const s="/paypal/paypal/order/execute",r=await a.post(s,{orderID:e});return r.data?r.data:null}},y={orders:l};export{y as P};
//# sourceMappingURL=PayPalOrdersService-f6f147cd.js.map
