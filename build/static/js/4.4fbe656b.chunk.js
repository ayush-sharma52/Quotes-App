(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={card:"Card_card__1rCoF"}},48:function(e,t,c){e.exports={form:"QuoteForm_form__ocapW",loading:"QuoteForm_loading__3Xa_V",control:"QuoteForm_control__3Dx8V",actions:"QuoteForm_actions__35Z-Z"}},55:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c(9),o=c(1),a=c(2),s=c(14),u=c(47),i=c.n(u),l=c(0),d=function(e){return Object(l.jsx)("div",{className:i.a.card,children:e.children})},j=c(20),b=c(48),f=c.n(b),h=function(e){var t=Object(o.useRef)(),c=Object(o.useRef)(),n=Object(o.useState)(!1),r=Object(s.a)(n,2),u=r[0],i=r[1];return Object(l.jsxs)(d,{children:[Object(l.jsx)(a.a,{when:u,message:function(){return"Are you sure you want to leave? All your entered data will be lost.."}}),Object(l.jsxs)("form",{className:f.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value,o=c.current.value;e.onAddQuote({author:r,text:o})},onFocus:function(){i(!0)},children:[e.isLoading&&Object(l.jsx)("div",{className:f.a.loading,children:Object(l.jsx)(j.a,{})}),Object(l.jsxs)("div",{className:f.a.control,children:[Object(l.jsx)("label",{htmlFor:"author",children:"Author"}),Object(l.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(l.jsxs)("div",{className:f.a.control,children:[Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(l.jsx)("div",{className:f.a.actions,children:Object(l.jsx)("button",{className:"btn",onClick:function(){i(!1)},children:"Add Quote"})})]})]})},x=c(19),O=c(18);t.default=function(){var e=Object(a.h)(),t=Object(x.a)(O.b),c=t.sendRequest,s=t.status;Object(o.useEffect)((function(){"completed"===s&&e.push("/quotes")}),[s,e]);var u=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(h,{isLoading:"pending"===s,onAddQuote:u})}}}]);
//# sourceMappingURL=4.4fbe656b.chunk.js.map