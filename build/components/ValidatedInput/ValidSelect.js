import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as s}from"../../index-6ea95111.js";import{FieldLabel as o,FieldErrorMessage as i,FieldHelperText as a}from"../Form/utility/index.js";import{s as r}from"../../style-inject.es-1f59c1d0.js";import{Enum as m}from"../../types/enum.js";import{Select as p}from"../Select/index.js";import"react";import"../../index.es-62933797.js";import"../../server-d796a789.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../Select-80601644.js";import"../../react-select.esm-f0e5f793.js";import"../../stateManager-845a3300.esm-b4e021da.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-3f17275b.js";import"../../createSelect-dfa42dfe.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-select-input .field-label{font-size:14px;padding-bottom:4px}');const l=m("LOADING","FAILED","SUCCESS"),n=({label:r,placeholder:m,options:l=[],name:n,value:d,onChange:c,errMessage:j,optionalLabel:f,isInvalid:b,isDisabled:u=!1,isRequired:x=!0,isClearable:g,tooltip:h,selectDataQa:y,selectDataQaProps:v,isMulti:L=!1,className:C,dataQa:D,helperText:S,...I})=>e("div",{className:s("valid-select-input",C),"data-qa-id":D,children:[!!r&&t(o,{label:r,optionalLabel:f,isRequired:x,tooltip:h}),t(p,{...I,options:l,placeholder:m,name:n,value:d,onChange:c,isDisabled:u,isClearable:g,isMulti:L,dataQa:y,dataQaProps:v}),b&&t(i,{message:j}),S&&t(a,{message:S})]});export{l as RELOADSTATUS,n as ValidSelect};
