"use strict";(self.webpackChunkverify360_react=self.webpackChunkverify360_react||[]).push([[324],{99324:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var l=a(74599),i=a(72791),n=a(25180),o=a(4170),r=a(57621),s=a(25801),d=a(89891),c=a(93006),u=a(4567),h=a(30439),p=a(81153),x=a(9585),v=a(39504),m=a(13034),f=a(17563),g=a(82626),j=a(73766),k=a(64554),y=a(42419),Z=a(35585),b=a(763),C=(a(16579),a(57689)),S=a(80184);function P(){var e;const t=(0,C.s0)(),[a,f]=(0,i.useState)([]),[g,j]=(0,i.useState)(null),[P,N]=(0,i.useState)(0),[E,M]=(0,i.useState)([]),[D,O]=(0,i.useState)([]),[H,R]=(0,i.useState)(null),[A,G]=(0,i.useState)(null),[I,J]=(0,i.useState)([]),[z,L]=(0,i.useState)([]),[T,U]=(0,i.useState)([]),[F,V]=(0,i.useState)(0),[B,W]=(0,i.useState)(!1),q=JSON.parse(null===(e=localStorage)||void 0===e?void 0:e.getItem("user")),[Q,$]=(0,i.useState)([]);let K=[],X=[];(0,i.useEffect)((()=>{A&&(()=>{try{K=l.Z.ListChecksByClientPackage(H,A),K.then((e=>{let t=JSON.parse(e.data.data),a=[],l=[],i={};t.map((e=>{X.push(e.check_id),l=[],l=e.price,n.Jm.map(((e,t)=>{i.id=t,i.country=e,null===n.Zo||void 0===n.Zo||n.Zo.map((e=>{var a;i[e]=null!==(a=l)&&void 0!==a&&a.length?l[t][e]:0})),a[t]=i,i={},t++})),e.price=a,a=[]})),f(t),M(t),J(X)}))}catch(e){console.error("Error fetching data:",e)}})()}),[A]),(0,i.useEffect)((()=>{A&&(()=>{try{K=[],K=l.Z.ListExChecks(I),K.then((e=>{let t=JSON.parse(e.data.data),a=[],l=[],i={};t.map((e=>{l=[],l=e.price,n.Jm.map(((e,t)=>{i.id=t,i.country=e,null===n.Zo||void 0===n.Zo||n.Zo.map((e=>{i[e]=l.length?l[t][e]:0})),a[t]=i,i={},t++})),e.price=a,a=[]})),O(t)}))}catch(e){console.error("Error fetching data:",e)}})()}),[I]);const Y=(e,t,i)=>{const n=a.find((t=>t.id===e));n.price=t,n.tat=i;l.Z.UpdateClientChecksPrices({id:e,data:{price:t,tat:parseInt(i)}})};(0,i.useEffect)((()=>{(0,b.includes)(n._8,null===q||void 0===q?void 0:q.role)&&R(null===q||void 0===q?void 0:q.client_id)}),[]);return(0,S.jsxs)(k.Z,{sx:{width:"100%","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary",fontSize:"10px"},"& .MuiDataGrid-cellContent":{color:"text.primary",fontSize:"10px"},"& .MuiDataGrid-columnHeaderTitle":{color:"text.primary",fontSize:"10px",fontWeight:"bold"},"& .MuiDataGrid-columnHeaders":{bgcolor:"#a8d6f8"}},children:[(0,S.jsx)(r.Z,{children:(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2rem"},children:[(0,S.jsx)(_,{handleClientChange:e=>{f([]),j(null),N(0),M([]),O([]),G(null),J([]),L([]),R(e.target.value)},selectedClient:H,setSelectedClient:R,clientsList:T,setClientsList:U}),(0,S.jsx)(w,{selectedClient:H,selectedPackage:A,setSelectedPackage:G,handlePackageChange:(e,t)=>{const a=(0,b.find)(Q,{package_name:t});G(t),N(null===a||void 0===a?void 0:a.discount),W(null===a||void 0===a?void 0:a.isAlaCarte),V(null===a||void 0===a?void 0:a.price)},packagesList:Q,setPackagesList:$}),(0,S.jsx)("div",{children:(0,S.jsx)(s.Z,{control:(0,S.jsx)(d.Z,{checked:B,onChange:e=>{var t,a;if(W(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.checked),null!==e&&void 0!==e&&null!==(a=e.target)&&void 0!==a&&a.checked){const e=(0,b.map)(D,(e=>{if(null!==e&&void 0!==e&&e.check_fields&&!(0,b.isEmpty)(JSON.parse(null===e||void 0===e?void 0:e.check_fields)))return{id:null===e||void 0===e?void 0:e.id,name:e.check_name}}));M((0,b.compact)((0,b.map)(D,(e=>{if(null!==e&&void 0!==e&&e.check_fields&&!(0,b.isEmpty)(JSON.parse(null===e||void 0===e?void 0:e.check_fields)))return e})))),L((t=>[...t,...(0,b.compact)(e)]))}}}),label:"A LA Carte?"})}),(0,S.jsx)(c.Z,{sx:{width:100,float:"left"},type:"number",defaultValue:0,onChange:e=>{let t=e.target.value||0,l=t<=30?t:30;const i=JSON.parse(JSON.stringify(a));i.map((e=>{e.price.map((e=>{null===n.Zo||void 0===n.Zo||n.Zo.map((t=>{e[t]=e[t]?e[t]-e[t]*(l/100):0}))}))})),M(i),N(parseFloat(l)),j(null)},placeholder:"Overall Discount %",label:"Overall Discount %"}),(0,S.jsxs)(k.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,S.jsx)(c.Z,{sx:{width:100,float:"left"},type:"number",defaultValue:0,value:F,onChange:e=>{var t;V(parseInt(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value))},placeholder:"Package Price",label:"Package Price"}),!B&&H&&(0,S.jsx)(u.Z,{sx:{color:"#bf1e2e",fontSize:"0.65rem!important"},children:(0,b.isNumber)(F)?F<=0&&"Package price > 0":"Package price is required"})]}),(0,S.jsx)(h.Z,{onClick:()=>{let e=T.filter((e=>e.id===H))[0].client_name,t={client_id:H,client_name:e,package_name:A,discount:P,isAlaCarte:B,active:!0,price:F},a=[];null===z||void 0===z||z.map((t=>a.push({check_id:t.id,check_name:t.name,client_id:H,client_name:e,package_name:A,overall_discount:P,active:!0})));let i=l.Z.AddUpdateClientPackage({packagedata:t,checksdata:a});null===i||void 0===i||i.then((e=>{200===(null===e||void 0===e?void 0:e.status)&&((0,n.OD)("Package updated successfully"),R(""),G(""),N(""),V(""),O([]),M([]))}))},variant:"contained",style:{height:"49px"},disabled:!B&&(!(0,b.isNumber)(F)||F<=0),children:"Add/Update Package"})]})}),(0,S.jsx)(p.ZP,{container:!0,spacing:2,children:(0,S.jsxs)(p.ZP,{item:!0,xs:12,sx:{width:"100%",padding:0,"& .MuiCardHeader-root":{padding:"16px !important"},"& .MuiCardContent-root":{padding:"5px !important"}},children:[(0,S.jsx)("p",{}),E.map((e=>(0,S.jsxs)(i.Fragment,{children:[(0,S.jsxs)(r.Z,{sx:{border:"6px solid #fff"},children:[(0,S.jsx)(x.Z,{sx:{background:"#B7C0D0"},title:e.check_name,action:g===e.id?(0,S.jsx)(Z.default,{onClick:()=>j(null),sx:{cursor:"pointer"}}):(0,S.jsx)(y.Z,{onClick:()=>{return t=e.id,void j(t);var t},sx:{cursor:"pointer"}})}),g===e.id&&(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(v.Z,{children:(0,S.jsx)(o.Z,{data:e.price,onSave:Y,rowId:e.id,isClientChecksPrice:!0,tat:(null===e||void 0===e?void 0:e.tat)||14})})})]}),(0,S.jsx)("p",{})]},e.id))),(0,S.jsx)("p",{children:"\xa0"}),(0,S.jsx)("p",{children:"\xa0"}),A&&E&&(0,S.jsx)(r.Z,{sx:{background:"#2152a1",color:"white"},children:(0,S.jsx)(x.Z,{title:(0,S.jsx)(u.Z,{sx:{background:"#2152a1",color:"white",fontWeight:"bold"},children:"Checks included in Package"})})}),(0,S.jsx)("p",{}),(0,S.jsx)(p.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:E.map(((e,t)=>(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(p.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,S.jsx)(r.Z,{children:(0,S.jsx)(v.Z,{children:(0,S.jsx)(s.Z,{control:(0,S.jsx)(m.Z,{checked:!0,onClick:()=>(e=>{let t={table_name:"client_checks",field_to_update:"active",new_value:!1,table_id:e};try{const a=l.Z.UpdateData(t);null===a||void 0===a||a.then((t=>{if(200===(null===t||void 0===t?void 0:t.status)){const t=(0,b.filter)(E,(t=>(null===t||void 0===t?void 0:t.id)===e));M((0,b.filter)(E,(t=>(null===t||void 0===t?void 0:t.id)!==e))),O((0,b.concat)(D,t))}}))}catch(a){console.error("Error fetching checks:",a)}})(null===e||void 0===e?void 0:e.id)}),label:e.check_name})})})},t),(0,S.jsx)("p",{})]},e.id)))}),(0,S.jsx)("p",{children:"\xa0"}),(0,S.jsx)("p",{children:"\xa0"}),A&&D&&(0,S.jsx)(r.Z,{sx:{background:"#2152a1",color:"white"},children:(0,S.jsx)(x.Z,{title:(0,S.jsx)(u.Z,{sx:{background:"#2152a1",color:"white",fontWeight:"bold"},children:"Checks not included in Package"})})}),(0,S.jsx)("p",{}),(0,S.jsx)(p.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:D.map(((e,a)=>(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(p.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,S.jsx)(r.Z,{children:(0,S.jsxs)(v.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,S.jsx)(s.Z,{control:(0,S.jsx)(m.Z,{disabled:!(null!==e&&void 0!==e&&e.check_fields)||(null===e||void 0===e?void 0:e.check_fields)&&(0,b.isEmpty)(JSON.parse(null===e||void 0===e?void 0:e.check_fields)),onClick:t=>((e,t,a)=>{var l;null!==e&&void 0!==e&&null!==(l=e.target)&&void 0!==l&&l.checked?L((e=>[...e,{id:t,name:a}])):L((e=>e.filter((e=>e.id!==t))))})(t,e.id,e.check_name)}),label:e.check_name}),(!(null!==e&&void 0!==e&&e.check_fields)||(null===e||void 0===e?void 0:e.check_fields)&&(0,b.isEmpty)(JSON.parse(null===e||void 0===e?void 0:e.check_fields)))&&(0,S.jsx)(h.Z,{onClick:()=>t("/master/checks/".concat(null===e||void 0===e?void 0:e.id)),children:"Add Form"})]})})},a),(0,S.jsx)("p",{})]},e.id)))})]})})]})}const _=e=>{var t;let{handleClientChange:a,selectedClient:o,clientsList:r,setClientsList:s}=e;const d=JSON.parse(null===(t=localStorage)||void 0===t?void 0:t.getItem("user")),c=localStorage.getItem("clients")?JSON.parse(localStorage.getItem("clients")):"";return(0,i.useEffect)((()=>{var e;const t=null===(e=c[0])||void 0===e?void 0:e.allClient;c&&(t||(null===d||void 0===d?void 0:d.role)===(null===n.G7||void 0===n.G7?void 0:n.G7.ADMIN)?(()=>{try{let e=[];e=l.Z.ListClients(),e.then((e=>{s(JSON.parse(e.data.data))}))}catch(e){console.error("Error fetching data:",e)}})():s(c))}),[]),(0,S.jsxs)(f.Z,{name:"client_id",id:"client_id",label:"Select Client",sx:{width:"350px",float:"left"},className:"selectfield",value:o||0,onChange:a,disabled:(0,b.includes)(n._8,null===d||void 0===d?void 0:d.role),children:[(0,S.jsx)(g.Z,{value:"0",children:"Select Client"}),r.map(((e,t)=>(0,S.jsx)(g.Z,{value:e.id,children:e.client_name},t)))]})},w=e=>{let{selectedClient:t,selectedPackage:a,setSelectedPackage:n,handlePackageChange:o,packagesList:r,setPackagesList:s}=e;const[d,u]=(0,i.useState)(""),[p,x]=(0,i.useState)(!1);let v=[];(0,i.useEffect)((()=>{t&&(u(""),(()=>{try{v=l.Z.ListPackagesByClient(t),v.then((e=>{s(JSON.parse(e.data.data))}))}catch(e){console.error("Error fetching data:",e)}})())}),[t]);return(0,S.jsxs)("div",{children:[(0,S.jsx)(j.Z,{freeSolo:!0,value:a,onChange:o,inputValue:d,onInputChange:(e,t)=>{u(t),t&&!r.includes(t)&&x(!0)},id:"autocomplete",options:(0,b.map)(r,"package_name"),style:{width:"350px",float:"left"},renderInput:e=>(0,S.jsx)(c.Z,{...e,label:"Add New/Select Package",variant:"outlined"})}),p&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("br",{}),!a&&(0,S.jsx)(h.Z,{onClick:e=>{d&&(r.push(d),n(d),u(""),x(!1))},variant:"undefined",children:!(0,b.find)(r,{package_name:d})&&(0,S.jsxs)("div",{children:[(0,S.jsx)("span",{style:{color:"gray"},children:"Add "}),"\xa0\xa0\xa0",(0,S.jsxs)("span",{children:[" ",d]})]})})]})]})}},4170:(e,t,a)=>{a.d(t,{Z:()=>j});var l=a(72791),i=a(5936),n=a(94515),o=a(41973),r=a(96846),s=a(61731),d=a(64554),c=a(29464),u=a(30439),h=a(16856),p=a(90503),x=a(53329),v=a(29823),m=a(763),f=a(14651),g=a(80184);const j=e=>{let{data:t,onSave:a,rowId:j,isClientChecksPrice:k=!1,tat:y=14}=e;const[Z,b]=(0,l.useState)(t),[C,S]=l.useState({}),[P,_]=(0,l.useState)(14),w=[{field:"country",headerName:"Country",width:250,editable:!1},{field:"INR",headerName:"INR",flex:1,editable:!0,sortable:!1,filterable:!1},{field:"USD",headerName:"USD",flex:1,editable:!0,sortable:!1,filterable:!1},{field:"GBP",headerName:"GBP",flex:1,editable:!0,sortable:!1,filterable:!1},{field:"EUR",headerName:"EUR",flex:1,editable:!0,sortable:!1,filterable:!1},{field:"AED",headerName:"AED",flex:1,editable:!0,sortable:!1,filterable:!1},{field:"SGD",headerName:"SGD",flex:1,editable:!0,sortable:!1,filterable:!1},{field:"actions",type:"actions",headerName:"",cellClassName:"actions",getActions:e=>{var t;let{id:a}=e;return(null===(t=C[a])||void 0===t?void 0:t.mode)===i.se.Edit?[(0,g.jsx)(n.u,{icon:(0,g.jsx)(x.Z,{}),label:"Save",sx:{color:"primary.main"},onClick:M(a)}),(0,g.jsx)(n.u,{icon:(0,g.jsx)(v.default,{}),label:"Cancel",className:"textPrimary",onClick:O(a),color:"inherit"})]:[(0,g.jsx)(n.u,{icon:(0,g.jsx)(f.TDG,{size:20,style:{display:0==a?"flex":"none"}}),sx:{color:"primary.main",padding:0==a?"0":"9px"},label:"Replace",onClick:R}),(0,g.jsx)(n.u,{icon:(0,g.jsx)(h.mM_,{size:22}),label:"Edit",className:"textPrimary",onClick:E(a),color:"inherit"}),(0,g.jsx)(n.u,{icon:(0,g.jsx)(p.Z,{}),label:"Delete",sx:{color:"primary.main"},onClick:D(a),color:"inherit"})]}}],N=()=>{a(j,Z,P)};(0,l.useEffect)((()=>{k&&_(y)}),[k]);const E=e=>()=>{S({...C,[e]:{mode:i.se.Edit}})},M=e=>()=>{S({...C,[e]:{mode:i.se.View}})},D=e=>()=>{b(Z.filter((t=>t.id!==e)))},O=e=>()=>{S({...C,[e]:{mode:i.se.View,ignoreModifications:!0}});Z.find((t=>t.id===e)).isNew&&b(Z.filter((t=>t.id!==e)))},H=e=>{S(e)},R=()=>{const e=(0,m.map)(Z,(e=>{const t=(0,m.map)((0,m.filter)(w,(e=>"actions"!==(null===e||void 0===e?void 0:e.field)&&"country"!==(null===e||void 0===e?void 0:e.field))),(e=>null===e||void 0===e?void 0:e.field)),a=(0,m.mapValues)((0,m.keyBy)(t),(e=>Z[0][e]));return{...e,...a}}));b(e)};return(0,g.jsx)(d.Z,{sx:{height:"500px",width:"100%","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary",fontSize:"10px",color:"primary.main"},"& .MuiDataGrid-cellContent":{color:"text.primary",fontSize:"10px"},"& .MuiDataGrid-columnHeaderTitle":{color:"#fff",fontSize:"10px",fontWeight:"bold"},"& .MuiDataGrid-columnHeader":{bgcolor:"#2152a1",height:"40px",minHeight:"45px",padding:"0"},"& .MuiDataGrid-row":{"&:nth-of-type(even)":{backgroundColor:"#DDE1E9"}}},children:(0,g.jsx)(r._$,{rows:Z,columns:w,rowHeight:25,autoPageSize:!0,slots:{toolbar:()=>(0,g.jsxs)(c.Z,{variant:"dense",children:[(0,g.jsx)(s.n,{showQuickFilter:!0}),(0,g.jsx)("div",{style:{flexGrow:1}}),k&&(0,g.jsxs)("label",{style:{width:"11%"},children:[(0,g.jsx)("span",{style:{fontSize:"0.8rem"},children:"TAT: "}),(0,g.jsx)("input",{type:"number",value:P,autoFocus:!0,style:{width:"45%"},onChange:e=>{var t;return _(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),P&&(0,g.jsx)("span",{style:{fontSize:"0.8rem"},children:" days"})]}),(0,g.jsx)(u.Z,{variant:"contained",onClick:N,children:"Update Prices"})]})},editMode:"row",rowModesModel:C,onRowModesModelChange:H,onRowEditStop:(e,t)=>{e.reason===o.U.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:e=>{const t={...e,isNew:!1};return b(Z.map((a=>a.id===e.id?t:a))),t},onSelectionModelChange:H,onProcessRowUpdateError:e=>console.log("error",e),onEditCellChange:(e,t)=>{e.field,t.target.value}})})}},90503:(e,t,a)=>{var l=a(64836);t.Z=void 0;var i=l(a(45649)),n=a(80184),o=(0,i.default)((0,n.jsx)("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"}),"DeleteOutlined");t.Z=o},9585:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(63366),i=a(87462),n=a(72791),o=a(28182),r=a(94419),s=a(4567),d=a(31402),c=a(66934),u=a(75878),h=a(21217);function p(e){return(0,h.Z)("MuiCardHeader",e)}const x=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var v=a(80184);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,i.Z)({["& .".concat(x.title)]:t.title,["& .".concat(x.subheader)]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),k=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),y=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:c,className:u,component:h="div",disableTypography:x=!1,subheader:y,subheaderTypographyProps:Z,title:b,titleTypographyProps:C}=a,S=(0,l.Z)(a,m),P=(0,i.Z)({},a,{component:h,disableTypography:x}),_=(e=>{const{classes:t}=e;return(0,r.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(P);let w=b;null==w||w.type===s.Z||x||(w=(0,v.jsx)(s.Z,(0,i.Z)({variant:c?"body2":"h5",className:_.title,component:"span",display:"block"},C,{children:w})));let N=y;return null==N||N.type===s.Z||x||(N=(0,v.jsx)(s.Z,(0,i.Z)({variant:c?"body2":"body1",className:_.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:N}))),(0,v.jsxs)(f,(0,i.Z)({className:(0,o.default)(_.root,u),as:h,ref:t,ownerState:P},S,{children:[c&&(0,v.jsx)(g,{className:_.avatar,ownerState:P,children:c}),(0,v.jsxs)(k,{className:_.content,ownerState:P,children:[w,N]}),n&&(0,v.jsx)(j,{className:_.action,ownerState:P,children:n})]}))}))}}]);
//# sourceMappingURL=324.ab26f66b.chunk.js.map