const o={get:()=>{const e=new Date;return"["+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"]"}},t=(...e)=>console.log(o.get(),...e),n=(...e)=>console.error(o.get(),...e),s=(...e)=>console.warn(o.get(),...e);export{n as d,t as l,s as w};
//# sourceMappingURL=LoggerService-c6aefb93.js.map
