(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{49:function(e,t,c){e.exports={comments:"Comments_comments__1CNYV"}},50:function(e,t,c){e.exports={item:"CommentItem_item__2vrKQ"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__kWV2U"}},52:function(e,t,c){e.exports={form:"NewCommentForm_form__3QUIc",loading:"NewCommentForm_loading__2ewjm",control:"NewCommentForm_control__VNYMU",actions:"NewCommentForm_actions__dihQ8"}},53:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__1Hxz-"}},54:function(e,t,c){"use strict";c.r(t);var n=c(14),s=c(1),o=c(2),a=c(8),m=c(19),r=c(18),j=c(20),i=c(49),d=c.n(i),l=c(50),u=c.n(l),b=c(0),O=function(e){return Object(b.jsx)("li",{className:u.a.item,children:Object(b.jsx)("p",{children:e.text})})},x=c(51),h=c.n(x),f=function(e){return console.log(e.comments),Object(b.jsx)("ul",{className:h.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(O,{text:e.text},e.id)}))})},p=c(52),N=c.n(p),_=function(e){var t=Object(o.j)(),c=Object(s.useRef)(),n=Object(m.a)(r.a),a=n.sendRequest,i=n.status,d=n.error,l=e.onAddComment;Object(s.useEffect)((function(){"completed"!==i||d||l()}),[l,d,i]);var u=function(e){e.preventDefault(),a({commentData:c.current.value,quoteId:t.quoteId})};return d?Object(b.jsx)("p",{className:"centered",children:d}):Object(b.jsxs)("form",{className:N.a.form,onSubmit:u,children:["pending"===i&&Object(b.jsx)(j.a,{className:"centered"}),Object(b.jsxs)("div",{className:N.a.control,onSubmit:u,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:c})]}),Object(b.jsx)("div",{className:N.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},C=function(){var e=Object(o.j)(),t=Object(s.useState)(!1),c=Object(n.a)(t,2),a=c[0],i=c[1],l=e.quoteId,u=Object(m.a)(r.c),O=u.sendRequest,x=u.status,h=u.data;Object(s.useEffect)((function(){O(l)}),[O,l]);var p,N=Object(s.useCallback)((function(){O(l)}),[O,l]);return"pending"===x&&(p=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})})),"completed"===x&&h&&h.length>0&&(p=Object(b.jsx)(f,{comments:h})),"completed"!==x||h&&0!==h.length||(p=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!a&&Object(b.jsx)("button",{className:"btn",onClick:function(){i(!0)},children:"Add a Comment"}),a&&Object(b.jsx)(_,{onAddComment:N}),p]})},g=c(53),v=c.n(g),q=function(e){return Object(b.jsxs)("figure",{className:v.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(o.j)(),t=Object(o.k)(),c=Object(m.a)(r.e,!0),i=c.sendRequest,d=c.status,l=c.error,u=c.data,O=Object(s.useState)({}),x=Object(n.a)(O,2),h=x[0],f=x[1];return Object(s.useEffect)((function(){i(e.quoteId)}),[i,e.quoteId]),Object(s.useEffect)((function(){"completed"===d&&f(u)}),[f,d,u]),"pending"===d?Object(b.jsx)(j.a,{className:"centered"}):l?Object(b.jsx)("p",{className:"centered",children:l}):h.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Quote Details"}),Object(b.jsx)(q,{text:h.text,author:h.author}),Object(b.jsxs)(o.e,{children:[Object(b.jsx)(o.c,{path:t.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(a.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(o.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(C,{})})]})]}):Object(b.jsx)("p",{children:"No Quote Found"})}}}]);
//# sourceMappingURL=3.64af9643.chunk.js.map