function n(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}const o={get:()=>{const e=new Date;return"["+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"]"}},r=(...e)=>console.log(o.get(),...e),t=(...e)=>console.error(o.get(),...e),s=(...e)=>console.warn(o.get(),...e);export{n as c,t as d,r as l,s as w};