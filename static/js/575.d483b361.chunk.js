"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[575],{9996:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(9474),r=n(4221),s=(n(1138),function(e){return e.contacts.items}),c=function(e){return e.contacts.isLoading},i=function(e){return e.contacts.error},o=function(e){return e.filter},l=n(9434),u=n(9439),m="contactForm_form__3ay0L",d="contactForm_input__wCtae",h="contactForm_label__WakW9",f="contactForm_btn__qtr3a",_=n(2791),p=n(7883),x=n(184);function j(){var e=(0,l.I0)(),t=(0,_.useState)(""),n=(0,u.Z)(t,2),a=n[0],c=n[1],i=(0,_.useState)(""),o=(0,u.Z)(i,2),j=o[0],v=o[1],b=(0,l.v9)(s),g=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":v(a)}};return(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b.some((function(e){return a===e.name}))?r.fn.info("Try again \ud83d\ude09","".concat(t.name," is already in contacts!"),3500):e((0,p.uK)({name:a,phone:j})),c(""),v("")},className:m,children:[(0,x.jsxs)("label",{className:h,children:["Name:",(0,x.jsx)("input",{className:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:g})]}),(0,x.jsxs)("label",{className:h,children:["Number:",(0,x.jsx)("input",{className:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:j,onChange:g})]}),(0,x.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})}var v="contactList_list__R0BG5",b="contactList_btn__D1sqk";function g(){var e=(0,l.I0)(),t=(0,l.v9)(o),n=(0,l.v9)(s);return(0,x.jsx)("ul",{children:function(){if(t){var e=t.trim().toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}return n}().map((function(t){var n=t.id,a=t.name,r=t.phone,s=t.avatar;return(0,x.jsxs)("li",{children:[(0,x.jsxs)("div",{className:v,id:n,children:[s&&(0,x.jsx)("img",{src:s,alt:a,width:"50px",style:{borderRadius:"30%"}}),(0,x.jsxs)("p",{style:{fontWeight:600,fontFamily:"sans-serif"},children:[a,":"]}),(0,x.jsx)("p",{style:{fontStyle:"italic"},children:r}),(0,x.jsx)("button",{className:b,onClick:function(){return e((0,p.GK)(n))},children:"Delete"})]}),(0,x.jsx)("hr",{style:{padding:0}})]},n)}))})}var y=n(6926),N="Filter_input__N7T3z";function C(){var e=(0,l.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("input",{className:N,type:"text",placeholder:"Find contacts by name...",onChange:function(t){e((0,y.W1)(t.currentTarget.value))}})})}var k="form_form__6MLiU",w="form_header__4xH6m",F="form_formBack__+a2GI",A={position:"fixed",top:"45%",left:"50%",transform:"translateX(-50%) translateY(-50%)"};function L(){var e=(0,l.v9)(s),t=(0,l.v9)(c),n=(0,l.v9)(i);return(0,x.jsxs)("div",{className:F,children:[(0,x.jsxs)("div",{className:k,children:[(0,x.jsx)("h1",{className:w,children:"My contacts"}),(0,x.jsx)(j,{}),t&&(0,x.jsx)(a.Z,{color:"hsla(175, 100%, 37%, 1)",height:27,margin:4,width:4,cssOverride:A}),n&&(0,x.jsx)("b",{style:{color:"#ab0009",textAlign:"center"},children:n}),(0,x.jsx)("h3",{children:"Contacts :"}),(0,x.jsx)(x.Fragment,{children:0===e.length?(0,x.jsx)("p",{children:"The contact list is empty"}):(0,x.jsx)(C,{})}),(0,x.jsx)(g,{})]}),(0,x.jsx)(r.mh,{})]})}}}]);
//# sourceMappingURL=575.d483b361.chunk.js.map