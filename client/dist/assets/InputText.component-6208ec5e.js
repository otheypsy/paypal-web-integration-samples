import{P as e}from"./index-20ef1387.js";const r="_label_10ixt_1",o="_input_10ixt_7",n={label:r,input:o},l=t=>{const i=a=>{t.onChange.length===2?t.onChange(t.identifier,a.target.value):t.onChange(a.target.value)};return React.createElement("div",{className:"form-floating my-2"},React.createElement("input",{id:t.identifier,className:"form-control "+n.input,type:t.type,placeholder:"-- input here --",value:t.value,onChange:i}),React.createElement("label",{className:n.label},t.label))};l.propTypes={id:e.oneOfType([e.string,e.number]),type:e.oneOf(["text","password","datetime-local","date","month","time","week","number","email","url","search","tel","color"]),label:e.string,value:e.oneOfType([e.string,e.number]).isRequired,onChange:e.func.isRequired};l.defaultProps={identifier:null,type:"text"};export{l as I};