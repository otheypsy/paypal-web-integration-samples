import{P as e,c as s,j as a}from"./main-db23e68b.js";const o="_label_10ixt_1",u="_input_10ixt_7",l={label:o,input:u},i=t=>{const r=n=>{t.onChange.length===2?t.onChange(t.identifier,n.target.value):t.onChange(n.target.value)};return s("div",{className:"form-floating my-2",children:[a("input",{id:t.identifier,className:"form-control "+l.input,type:t.type,placeholder:"-- input here --",value:t.value,onChange:r}),a("label",{className:l.label,children:t.label})]})};i.propTypes={id:e.oneOfType([e.string,e.number]),type:e.oneOf(["text","password","datetime-local","date","month","time","week","number","email","url","search","tel","color"]),label:e.string,value:e.oneOfType([e.string,e.number]).isRequired,onChange:e.func.isRequired};i.defaultProps={identifier:null,type:"text"};export{i as I};
