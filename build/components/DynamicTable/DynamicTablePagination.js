import{jsxs as e,jsx as t,Fragment as i}from"react/jsx-runtime";import{Select as o}from"../Select/Select.js";import{Pagination as a}from"../Pagination/Pagination.js";import{s as r}from"../../style-inject.es-1f59c1d0.js";import{translation as s}from"../../utils/i18n/index.js";import"../Select/reactSelectComponents.js";import"react";import"../../index.es-62933797.js";import"../../utils/dom.js";import"../../index-4bd03571.esm-c6c7bc70.js";import"../../unitless.esm-d94354fa.js";import"../../index-6397c7e4.js";import"../../index-dd80248b.js";import"../../Select-88ab4bd9.js";import"../../react-select.esm-0cc0aa17.js";import"../../stateManager-845a3300.esm-fae60197.js";import"../../memoize-one.esm-8827f1ac.js";import"../../createSelect-18088ba9.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../index-6ea95111.js";import"../../fa_icons-aa14317c.js";import"../../nonIterableRest-e93b6547.js";import"../../utils/i18n/loadLanguages.js";r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.dynamic-table-pagination{align-items:center;display:flex;justify-content:space-between;padding:16px}.dynamic-table-pagination .per-page-dropdown-wrapper{align-items:center;color:#687792;display:flex;font-size:14px}.dynamic-table-pagination .per-page-dropdown-wrapper .per-page-dropdown{margin:0 16px;width:64px}');const p=r=>{const{perPage:p,perPageOptions:n,onChangePerPage:m,...c}=r;return e("div",{className:"dynamic-table-pagination",children:[t("div",{className:"per-page-dropdown-wrapper",children:!!p&&!!n&&!!m&&e(i,{children:[t("span",{children:s("dynamicTablePagination.perPage.prefix")}),t(o,{options:n,value:p,onChange:m,className:"per-page-dropdown"}),t("span",{children:s("dynamicTablePagination.perPage.suffix")})]})}),t(a,{...c})]})};export{p as default};
