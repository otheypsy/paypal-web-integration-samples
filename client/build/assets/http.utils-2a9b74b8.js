const i=async(e,t="GET",n=void 0,s={})=>{const r={method:t,headers:{"Content-Type":"application/json",...s},body:JSON.stringify(n),redirect:"follow"},o=await fetch(e,r);if(!o.ok)throw new Error("HTTP Fetch Failed",{cause:o});return o};export{i as j};
//# sourceMappingURL=http.utils-2a9b74b8.js.map
