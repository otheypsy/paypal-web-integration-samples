import{a as s,j as n}from"./index-5183357d.js";import{P as e}from"./vendor-d2c1d7ba.js";const o="_label_1trjd_1",u="_input_1trjd_5",l={label:o,input:u},i=t=>{const r=a=>{t.onChange.length===2?t.onChange(t.identifier,a.target.value):t.onChange(a.target.value)};return s("div",{className:"form-floating my-2",children:[n("input",{id:t.identifier,className:"form-control "+l.input,type:t.type,placeholder:"-- input here --",value:t.value,onChange:r}),n("label",{className:l.label,children:t.label})]})};i.propTypes={id:e.oneOfType([e.string,e.number]),type:e.oneOf(["text","password","datetime-local","date","month","time","week","number","email","url","search","tel","color"]),label:e.string,value:e.oneOfType([e.string,e.number]).isRequired,onChange:e.func.isRequired};i.defaultProps={identifier:null,type:"text"};export{i as I,l as c};
//# sourceMappingURL=InputText.component-62651ba0.js.map