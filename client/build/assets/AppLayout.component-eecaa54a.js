import{u as f,a as v,j as a,b as u,F as d,c as y,r as i,O as T,P as x}from"./index-bc6e35e4.js";import{I as F}from"./InputText.component-c228375d.js";const L=e=>{const l=f(e.to),n=v({path:l.pathname,end:!1,caseSensitive:!1}),r=()=>e.onClick(e.to);return e.isVisible||n?a("button",{className:"list-group-item list-group-item-action "+(n?"active":"text-secondary"),onClick:r,children:a("p",{className:"my-1",children:e.label})}):null},b=e=>{const l=()=>e.onClick(e.label);return a("button",{type:"button",className:"btn btn-sm m-1 px-3 badge-pill btn-"+e.btnColor,onClick:l,children:e.label})},N=e=>u(d,{children:[a(F,{label:"-- search --",value:e.text,onChange:e.onTextChange}),a(b,{label:"X",onClick:e.reset,btnColor:"danger"},"clearAll"),Object.keys(e.tags).map(l=>{const n=e.tags[l]?"primary":"secondary";return a(b,{label:l,onClick:e.onTagClick,btnColor:n},l)})]}),j=e=>{const l=y(),[n,r]=i.useState(""),[c,o]=i.useState([]);i.useEffect(()=>{const t={};e.links.forEach(s=>{s.data?.tags.forEach(k=>{t[k]=!1})}),r(""),o(t)},[e.links]);const g=()=>{const t={};for(const s in c)t[s]=!1;o(t)},h=t=>Object.keys(c).every(s=>!(c[s]&&!t.includes(s))),m=t=>t?.toLowerCase()?.includes(n.toLocaleLowerCase()),C=t=>l(t);return a(d,{children:u("div",{className:"row",children:[u("div",{className:"col-3",children:[a(N,{tags:c,onTagClick:t=>{o({...c,[t]:!c[t]})},text:n,onTextChange:r,reset:g}),a("br",{}),a("br",{}),a("div",{className:"list-group p-2",children:e.links.map(t=>{const s=h(t.data?.tags||[])&&m(t.label);return a(L,{to:t.path,label:t.label,isVisible:s,onClick:C},t.path)})})]}),a("div",{className:"col-9",children:a(T,{})})]})})};j.propTypes={links:x.array.isRequired};export{j as default};
//# sourceMappingURL=AppLayout.component-eecaa54a.js.map
