"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[364],{6364:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(9434),a=t(6916),o=function(e){return e.contacts.items},i=function(e){return e.filter.filter},s=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},l=(0,a.P1)([i,o],(function(e,n){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)})).sort((function(e,n){return e.name.localeCompare(n.name)}))})),u=t(8349),m=t(5861),d=t(4687),x=t.n(d),f=t(3634),h=t(5218),p=t(1614),b=t(4554),v=t(232),j=t(3736),g=t(184),Z=function(){var e=(0,r.I0)(),n=(0,r.v9)(o),t=(0,r.v9)(s),a=function(){var t=(0,m.Z)(x().mark((function t(r){var a,o,i;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a=r.currentTarget,o=a.elements.name.value,i=a.elements.number.value,!n.some((function(e){return e.name.toLowerCase()===o.toLowerCase()}))){t.next=8;break}return h.Am.error("".concat(o," is already in contacts")),t.abrupt("return");case 8:if(""!==o&&""!==i){t.next=11;break}return h.Am.error("Fields cannot be empty. Enter some data!"),t.abrupt("return");case 11:return t.prev=11,t.next=14,e((0,f.uK)({name:o,number:i})).unwrap();case 14:h.Am.success("".concat(o," is added to contacts")),a.reset(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[11,18]])})));return function(e){return t.apply(this,arguments)}}();return(0,g.jsx)(p.Z,{maxWidth:"xs",sx:{p:4,mb:4,bgcolor:"#ffffff",borderRadius:"10px",boxShadow:3},children:(0,g.jsxs)(b.Z,{component:"form",autoComplete:"off",noValidate:!0,onSubmit:a,children:[(0,g.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",size:"small"}),(0,g.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,type:"tel",id:"number",label:"Phone Number",name:"number",size:"small"}),(0,g.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},size:"medium",children:"add"===t?(0,g.jsx)(u.DC,{}):(0,g.jsx)(g.Fragment,{children:"Add contact"})})]})})},w=t(1634),C=t(890),y=function(){var e=(0,r.v9)(i),n=(0,r.I0)();return(0,g.jsxs)(p.Z,{maxWidth:"sm",children:[(0,g.jsx)(C.Z,{sx:{mb:1},fontSize:"22px",color:"#212121",paragraph:!0,children:"Find contacts by name:"}),(0,g.jsx)(v.Z,{sx:{my:.5},margin:"normal",fullWidth:!0,name:"filter",value:e,size:"small",onChange:function(e){n((0,w.a)(e.currentTarget.value))}})]})},k=t(9439),z=t(7247),S=t(1286),W=t(1889),A=t(2791),P=t(1413),L=t(7004),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4},I=function(e){var n=e.isOpen,t=e.id,a=e.name,i=e.number,c=e.onClose,l=A.useState(a),d=(0,k.Z)(l,2),p=d[0],Z=d[1],w=A.useState(i),C=(0,k.Z)(w,2),y=C[0],z=C[1],S=(0,r.I0)(),I=(0,r.v9)(s),D=(0,r.v9)(o),E=function(){var e=(0,m.Z)(x().mark((function e(n){var r,o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=D.some((function(e){return e.name.toLowerCase()===p.toLowerCase()})),o=D.some((function(e){return e.number===y})),!r||!o){e.next=6;break}return h.Am.error("".concat(p," is already in contacts")),e.abrupt("return");case 6:if(""!==p&&""!==y){e.next=9;break}return h.Am.error("Fields cannot be empty. Enter some data!"),e.abrupt("return");case 9:return e.prev=9,e.next=12,S((0,f.Tk)({name:p,number:y,contactId:t})).unwrap();case 12:h.Am.success("".concat(a," contact was changed")),c(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(9),console.log(e.t0),h.Am.error("Oooops!..Something went wrong:( Please try later");case 20:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{children:(0,g.jsx)(L.Z,{open:n,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,g.jsx)(b.Z,{sx:(0,P.Z)((0,P.Z)({},F),{},{width:{xs:240,sm:400}}),children:(0,g.jsxs)(b.Z,{component:"form",autoComplete:"off",noValidate:!0,onSubmit:E,children:[(0,g.jsx)(v.Z,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:p,onChange:function(e){var n=e.target.value;return Z(n)}}),(0,g.jsx)(v.Z,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,type:"tel",id:"number",label:"Phone Number",name:"number",value:y,onChange:function(e){var n=e.target.value;return z(n)}}),(0,g.jsxs)(W.ZP,{container:!0,justifyContent:"center",children:[(0,g.jsx)(j.Z,{type:"submit",variant:"contained",sx:{mt:2,mb:2,mr:2},children:"update"===I?(0,g.jsx)(u.DC,{}):(0,g.jsx)(g.Fragment,{children:"Save"})}),(0,g.jsx)(j.Z,{type:"button",size:"medium",variant:"outlined",sx:{mt:2,mb:2},onClick:c,children:"Cancel"})]})]})})})})},D=function(e){var n=e.id,t=e.name,a=e.number,o=(0,r.I0)(),i=(0,A.useState)(!1),c=(0,k.Z)(i,2),l=c[0],d=c[1],p=(0,r.v9)(s),b=function(){var e=(0,m.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o((0,f.GK)(n)).unwrap();case 3:h.Am.success("".concat(t," was deleted from contacts")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),v=function(){return d((function(e){return!e}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(W.ZP,{container:!0,sx:{mb:{xs:4,sm:4,md:1}},spacing:1,columns:{xs:12,sm:12,md:16},children:[(0,g.jsx)(W.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,g.jsx)(C.Z,{paragraph:!0,sx:{fontSize:{xs:"16px",sm:"18px"},textAlign:{xs:"center",md:"left"}},fontWeight:"500",color:"#212121",children:t})}),(0,g.jsx)(W.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,g.jsx)(C.Z,{sx:{fontSize:{xs:"16px",sm:"18px"},textAlign:{xs:"center",md:"left"}},color:"#757575",paragraph:!0,children:a})}),(0,g.jsx)(W.ZP,{item:!0,xs:6,md:!0,children:(0,g.jsx)(j.Z,{type:"button",variant:"outlined","aria-label":"delete",size:"small",color:"primary",startIcon:p===n?(0,g.jsx)(u.zF,{}):(0,g.jsx)(z.Z,{}),onClick:b,children:p===n?"Deleting...":"Delete"})}),(0,g.jsx)(W.ZP,{item:!0,xs:6,md:!0,children:(0,g.jsx)(j.Z,{type:"button",variant:"contained","aria-label":"edit",size:"small",color:"primary",startIcon:(0,g.jsx)(S.Z,{}),onClick:v,children:"Edit"})})]}),l&&(0,g.jsx)(I,{onClose:v,id:n,name:t,number:a,isOpen:l})]})},E=function(){var e=(0,r.v9)(l);return(0,g.jsx)(p.Z,{maxWidth:"md",sx:{p:4,mt:4,bgcolor:"#ffffff",borderRadius:"10px",boxShadow:3},component:"ul",children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,g.jsx)(D,{id:n,name:t,number:r},n)}))})},q=t(4270),T=function(){var e=(0,r.v9)(c),n=(0,r.v9)(l),t=(0,r.I0)(),a=(0,r.v9)(s);return(0,A.useEffect)((function(){t((0,f.yF)())}),[t]),(0,g.jsxs)(p.Z,{component:"main",maxWidth:"md",sx:{marginTop:3,marginBottom:3,minHeight:"80vh",textAlign:"center"},children:[(0,g.jsx)(q.q,{children:(0,g.jsx)("title",{children:"Contacts"})}),(0,g.jsx)(C.Z,{sx:{mb:3},variant:"h1",fontSize:"44px",fontWeight:"700",gutterBottom:!0,children:"Phonebook"}),(0,g.jsx)(Z,{}),(0,g.jsx)(C.Z,{sx:{mb:3},variant:"h2",fontSize:"34px",fontWeight:"500",gutterBottom:!0,children:"Contacts"}),(0,g.jsx)(y,{}),"fetch"===a&&!e&&(0,g.jsx)(u.sE,{}),0===n.length?(0,g.jsx)(C.Z,{sx:{my:2},fontSize:"18px",color:"#212121",fontWeight:"700",paragraph:!0,align:"center",children:"There are no contacts yet"}):(0,g.jsx)(E,{})]})}},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},1286:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=i}}]);
//# sourceMappingURL=364.7499438a.chunk.js.map