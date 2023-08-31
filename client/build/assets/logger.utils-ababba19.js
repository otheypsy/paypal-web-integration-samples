const r=()=>{const o=new Date;return"["+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+"]"},c=o=>({log:(...e)=>console.log(r(),o,...e),warn:(...e)=>console.warn(r(),o,...e),error:(...e)=>console.error(r(),o,...e)});export{c};
//# sourceMappingURL=logger.utils-ababba19.js.map
