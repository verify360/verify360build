"use strict";(self.webpackChunkverify360_react=self.webpackChunkverify360_react||[]).push([[657],{6657:(e,o,i)=>{i.r(o),i.d(o,{default:()=>G});var n=i(19129),l=i(4841),d=i(67414),r=i(94721),t=i(34729),a=i(13239),s=i(64554),c=i(4567),u=i(30439),h=i(17563),v=i(82626),p=i(20792),m=i(41473),x=i(55818),f=i(3721),y=i(15416),j=i(62155),g=i(9195),k=i(68745),b=i(66934),C=i(74599),_=i(763),Z=i(72426),S=i.n(Z),D=i(72791),w=i(91052),I=i(57689),O=i(25180),A=i(13034),E=i(81153),F=i(80184);const z=e=>{const[o,i]=(0,D.useState)([]),[n,l]=(0,D.useState)(!0),d=(o,i)=>{var n,l;const d={};return null===(n=(0,_.concat)((0,_.map)(null===e||void 0===e||null===(l=e.orderDetail)||void 0===l?void 0:l.subRows,"check"),o))||void 0===n||n.map((e=>(d[e]||(d[e]=0),d[e]++,"".concat(i,"-").concat(d[e])))),"".concat(i||o,"-").concat(d[o])};(0,D.useEffect)((()=>{var o,n;l(!0),C.Z.ListChecksByClientPackage(null===e||void 0===e||null===(o=e.orderDetail)||void 0===o?void 0:o.client_id,null===e||void 0===e||null===(n=e.orderDetail)||void 0===n?void 0:n.checks_package).then((e=>{const o=JSON.parse(e.data.data).map((e=>({category:e.category,check_name:e.check_name,check_alias:null===e||void 0===e?void 0:e.check_alias,isAdded:!1,qty:0})));i(o)})).catch((e=>{console.error("Error fetching data:",e)})).finally((()=>l(!1)))}),[null===e||void 0===e?void 0:e.orderDetail]);return(0,F.jsx)(F.Fragment,{children:n?(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,F.jsx)(a.Z,{color:"inherit",size:20})}):(0,F.jsxs)(F.Fragment,{children:[(0,_.map)(o,((o,i)=>{var n;return(0,F.jsxs)("div",{children:[(0,F.jsx)(A.Z,{name:"category",value:o.check_name,checked:!(0,_.isEmpty)(null===e||void 0===e?void 0:e.selectedChecks)&&(null===e||void 0===e||null===(n=e.selectedChecks)||void 0===n?void 0:n.some((e=>(null===e||void 0===e?void 0:e.check_name)===(null===o||void 0===o?void 0:o.check_name)))),onChange:()=>((o,i)=>{var n;let l;var r,t,a;l=(null===e||void 0===e||null===(n=e.selectedChecks)||void 0===n?void 0:n.some((e=>e.check_name===o)))?null===e||void 0===e?void 0:e.selectedChecks.filter((e=>e.check_name!==o)):[...null===e||void 0===e?void 0:e.selectedChecks,{order_id:null===e||void 0===e||null===(r=e.orderDetail)||void 0===r?void 0:r.order_id,check_name:o,package_included:!0,client_id:null===e||void 0===e||null===(t=e.orderDetail)||void 0===t?void 0:t.client_id,client_name:null===e||void 0===e||null===(a=e.orderDetail)||void 0===a?void 0:a.client_name,check_alias:d(o,i)}],null===e||void 0===e||e.setSelectedChecks(l)})(null===o||void 0===o?void 0:o.check_name,""),variant:"outlined"}),(0,F.jsx)("span",{children:null===o||void 0===o?void 0:o.check_name})]},i)})),(0,F.jsxs)(E.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"end"},children:[(0,F.jsx)(u.Z,{variant:"contained",color:"primary",sx:{marginRight:"0.7rem"},onClick:null===e||void 0===e?void 0:e.handleClose,children:"Cancel"}),(0,F.jsx)(u.Z,{variant:"contained",color:"primary",disabled:(0,_.isEmpty)(null===e||void 0===e?void 0:e.selectedChecks),type:"submit",onClick:null===e||void 0===e?void 0:e.handleNextClick,children:"Add"})]})]})})};var M=i(11254),N=i(93803),R=i(56355);function G(){var e,o,i,n;const[m,x]=(0,D.useState)([]),[f,y]=(0,D.useState)([]),[j,g]=(0,D.useState)(!1),[k,Z]=(0,D.useState)(!1),[w,A]=(0,D.useState)([]),[E,R]=(0,D.useState)({showModal:!1,checksId:[]}),G=(localStorage.getItem("user"),null===(e=localStorage)||void 0===e?void 0:e.getItem("role"));let T=(0,I.s0)();const{id:W}=(0,I.UO)(),[J,U]=D.useState(!1),Y=e=>(o,i)=>{U(!!i&&e)};const H=(0,b.ZP)(l.Z)((e=>{var o,i;let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,textAlign:"center",color:null===n||void 0===n||null===(o=n.palette)||void 0===o||null===(i=o.background)||void 0===i?void 0:i.paper,borderRadius:"0.5rem"}})),P=async()=>{g(!0);try{let e=await C.Z.OrderDetails({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbmFAc3RvcmUuY29tIiwiZXhwIjoxNjk1MTM2MzE0fQ.OexNPaFplvQdlZ1sydHYjUm1tujDtVWmC7048ue4b9M",id:W}),o=await e,i=JSON.parse(o.data.data).rowsData;x(i[0]),i.forEach((e=>{e.subRows.forEach((e=>{y((o=>(0,_.uniqBy)([...o,e],"order_checks_id")))}))}))}catch(e){console.error("Error fetching checks:",e)}finally{g(!1)}};(0,D.useEffect)((()=>{W&&P()}),[]);const X=()=>{Z(!1),A("")},V=()=>{R({showModal:!1,checksId:[]})},Q=f.filter(((e,o)=>o%2===0));f.filter(((e,o)=>o%2!==0)).length,Q.length;return(0,F.jsxs)(d.Z,{spacing:1,divider:(0,F.jsx)(r.Z,{orientation:"vertical",flexItem:!0}),style:{fontsize:"0.75rem",padding:"8px 12px"},children:[(0,F.jsx)(t.Z,{xs:6,md:12,sx:{borderRadius:"0.5rem"},children:(0,F.jsx)("span",{style:{fontWeight:600,display:"flex",justifyContent:"center",fontSize:"1.1rem",textTransform:"uppercase"},children:"Order Details"})}),j?(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,F.jsx)(a.Z,{color:"inherit",size:20})}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%",mx:2.5,pl:"1rem"},children:[(0,F.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:15},children:[(0,F.jsx)(c.Z,{sx:{fontSize:"1.3rem !important",fontWeight:450},children:"".concat(null===m||void 0===m?void 0:m.first_name," ").concat(null===m||void 0===m?void 0:m.last_name)}),(0,F.jsx)("li",{style:{color:"grey",fontSize:"0.875rem"},children:(0,F.jsx)("span",{style:{color:"black"},children:null===m||void 0===m?void 0:m.client_name})}),(0,F.jsx)("span",{children:(0,F.jsx)("li",{style:{color:"grey",fontSize:"0.875rem"},children:(0,F.jsx)("span",{style:{color:"black"},children:null===m||void 0===m?void 0:m.checks_package})})})]}),(0,F.jsxs)(c.Z,{sx:{fontSize:"0.875rem !important",display:"flex",gap:2},children:[(0,F.jsx)("span",{style:{border:"1px solid grey",borderRadius:"0.3rem",padding:"0px 7px",color:null===(o=(0,_.find)(O.XZ,{label:null===m||void 0===m?void 0:m.status}))||void 0===o?void 0:o.color,borderColor:null===(i=(0,_.find)(O.XZ,{label:null===m||void 0===m?void 0:m.status}))||void 0===i?void 0:i.color},children:null===m||void 0===m?void 0:m.status}),(0,F.jsx)("span",{children:(0,F.jsx)("li",{style:{color:"grey"},children:(0,F.jsxs)("span",{style:{color:"black"},children:["Order Created By - ",null===m||void 0===m?void 0:m.assignee]})})}),(0,F.jsx)("span",{children:(0,F.jsx)("li",{style:{color:"grey"},children:(0,F.jsxs)("span",{style:{color:"black"},children:["Order - ",null===m||void 0===m?void 0:m.order_id]})})}),(0,F.jsx)("span",{children:(0,F.jsx)("li",{style:{color:"grey"},children:(0,F.jsx)("span",{style:{color:"black"},children:null===(n=S()(null===m||void 0===m?void 0:m.date))||void 0===n?void 0:n.format("DD-MM-YYYY")})})})]})]}),(0,F.jsx)(s.Z,{children:(0,F.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",gap:4,paddingRight:11},children:["CLOSED"!==(null===m||void 0===m?void 0:m.status)&&(0,F.jsx)(u.Z,{variant:"contained",color:"primary",sx:{color:"#FFF",textTransform:"none",borderRadius:"5px",border:"none"},onClick:()=>T("/order/createorders/".concat(W)),children:"Fill/Edit Forms"}),"CLOSED"!==(null===m||void 0===m?void 0:m.status)&&(0,F.jsx)(u.Z,{variant:"contained",color:"primary",sx:{color:"#FFF",textTransform:"none",borderRadius:"5px",border:"none"},onClick:()=>Z(!0),children:"Add ".concat((0,_.includes)(O._8,G)?"Component":"Check")}),"CLOSED"===(null===m||void 0===m?void 0:m.status)&&(0,F.jsxs)(h.Z,{value:(null===m||void 0===m?void 0:m.score)||0,onChange:(e=>o=>{let i={table_name:"orders",field_to_update:"score",new_value:o.target.value,table_id:e};try{let e=C.Z.UpdateData(i);null===e||void 0===e||e.then((e=>{200===(null===e||void 0===e?void 0:e.status)&&P()}))}catch(n){console.error("Error fetching checks:",n)}})(W),disabled:(0,_.includes)(O._8,G),sx:{minWidth:120,backgroundColor:"primary",p:"3.5px 15px","& .MuiOutlinedInput-input":{p:"8.5px 14px !important",color:"#FFF"},"& .MuiSelect-icon":{color:"#FFF"}},children:[(0,F.jsx)(v.Z,{value:0,disabled:!0,children:"Select Desposition"}),null===O.zI||void 0===O.zI?void 0:O.zI.map(((e,o)=>(0,F.jsx)(v.Z,{value:null===e||void 0===e?void 0:e.label,sx:{color:null===e||void 0===e?void 0:e.color},children:null===e||void 0===e?void 0:e.label},o)))]}),"CLOSED"===(null===m||void 0===m?void 0:m.status)&&(0,F.jsx)(M.o,{orderDetail:m,fileName:"Order_".concat(W,".pdf"),id:W}),G!==(null===O.G7||void 0===O.G7?void 0:O.G7.VENDOR)&&G!==(null===O.G7||void 0===O.G7?void 0:O.G7.STAFF)&&(0,F.jsx)(u.Z,{variant:"contained",color:"primary",sx:{color:"#FFF",textTransform:"none",borderRadius:"5px",border:"none"},onClick:()=>R({showModal:!0,checksId:(0,_.map)(f,"order_checks_id")}),children:"Cancel Order"})]})})]}),(0,F.jsx)(t.Z,{container:!0,spacing:2,children:null===f||void 0===f?void 0:f.map(((e,o)=>(0,F.jsx)(t.Z,{item:!0,xs:12,sm:6,md:4,sx:{display:"flex",flexDirection:"column",gap:.8},children:B(e,o,Y,J,O.XZ,m,G,T,H,U)},o)))}),(0,F.jsx)(t.Z,{container:!0,spacing:2,children:(0,F.jsxs)(t.Z,{item:!0,xs:12,children:[(0,F.jsx)("div",{style:{fontSize:"0.9rem",marginBottom:10,fontWeight:600,paddingLeft:6},children:"Special Notice"}),(0,F.jsx)(L,{handleExpand:Y,expanded:J,handleDownload:()=>{const e=document.createElement("a");e.href="/special-notice.pdf",e.download="report.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)},subRowList:f,Item:H,setExpanded:U})]})})]}),(0,F.jsx)(p.Z,{open:k,onClose:X,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,F.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:700,maxHeight:"80vh",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflowY:"auto","& label":{lineHeight:"2em !important"}},children:(0,F.jsx)(z,{selectedChecks:w||[],setSelectedChecks:A,handleClose:X,handleNextClick:()=>{try{let e=C.Z.AddOrderchecks(w);null===e||void 0===e||e.then((e=>{if(200===(null===e||void 0===e?void 0:e.status)){const e=C.Z.updateOrder({status:"DRAFT"},W);null===e||void 0===e||e.then((e=>{200===(null===e||void 0===e?void 0:e.status)&&((0,O.OD)("Check added successfully"),X(),P())})).catch((e=>{console.error("Error updating record:",e)}))}}))}catch(e){console.error("Error fetching checks:",e)}},orderDetail:m,setOPenCheckBoxModal:Z})})}),(null===E||void 0===E?void 0:E.showModal)&&(0,F.jsx)(N.Y,{open:null===E||void 0===E?void 0:E.showModal,handleDialogClose:V,handleSubmit:e=>{let o={table_name:"order_checks",field_to_update:"check_status",new_value:"CANCELLED",table_id:null===E||void 0===E?void 0:E.checksId,column_to_match:"id"},i=C.Z.updateOrder(e,W);"CANCELLED"===(null===e||void 0===e?void 0:e.status)?null===i||void 0===i||i.then((i=>{var n;200===(null===i||void 0===i?void 0:i.status)&&(null===(n=C.Z.UpdateMultipleAssignee(o))||void 0===n||n.then((i=>{200===(null===i||void 0===i?void 0:i.status)&&C.Z.UpdateMultipleAssignee({...o,field_to_update:"check_cancel_reason",new_value:null===e||void 0===e?void 0:e.order_cancel_reason}).then((e=>{200===(null===e||void 0===e?void 0:e.status)&&((0,O.OD)(G===(null===O.G7||void 0===O.G7?void 0:O.G7.ADMIN)?"Order cancelled succesfully":"Approval for cancel order send succesfully"),V())}))})))})):null===i||void 0===i||i.then((e=>{200===(null===e||void 0===e?void 0:e.status)&&((0,O.OD)(G===(null===O.G7||void 0===O.G7?void 0:O.G7.ADMIN)?"Order cancelled succesfully":"Approval for cancel order send succesfully"),V())}))},object:{...m,order_cancel_reason:null!==m&&void 0!==m&&m.order_cancel_reason?JSON.parse(null===m||void 0===m?void 0:m.order_cancel_reason):""},cancel:"order"})]})}const B=(e,o,i,l,d,r,t,a,h,v)=>{var p,b;const C=null===e||void 0===e||null===(p=e.checksformdata)||void 0===p?void 0:p.replace(/\\/g,""),Z=C?null===JSON||void 0===JSON?void 0:JSON.parse(C):{},S=Object.entries((null===Z||void 0===Z?void 0:Z.AutoGenInfo)||{});return(0,F.jsx)(h,{children:(0,F.jsxs)(m.Z,{onChange:i(o),expanded:l===o,sx:{"& .MuiAccordionSummary-content.Mui-expanded":{minHeight:"47px !important"}},children:[(0,F.jsx)(x.Z,{sx:{background:"#8e8f91",borderRadius:"0.5rem",mx:0,minHeight:"50px !important","& .MuiAccordionSummary-content.Mui-expanded":{margin:"0 !important"}},expandIcon:l===o?(0,F.jsx)(n.kJj,{onClick:()=>v(!1),alt:"",size:18,color:"#fff",style:{marginLeft:"0.2rem",marginBottom:"0.1rem"}}):(0,F.jsx)(n.BHp,{onClick:()=>v(!0),alt:"",size:18,color:"#fff",style:{marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,F.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[(0,F.jsxs)("div",{style:{display:"flex",gap:12},children:[(0,F.jsx)("span",{style:{color:"#fff",fontWeight:500,fontSize:"0.875rem"},children:(null===e||void 0===e?void 0:e.check_alias)||(null===e||void 0===e?void 0:e.check)}),(0,F.jsx)(u.Z,{style:{background:(null===(b=(0,_.find)(d,{label:null===e||void 0===e?void 0:e.status}))||void 0===b?void 0:b.color)||"#2152A1",color:"#fff",padding:"0px 8px 0px 8px"},children:e.status})]}),(null===r||void 0===r?void 0:r.date_enabled)&&t!==(null===O.G7||void 0===O.G7?void 0:O.G7.STAFF)&&t!==(null===O.G7||void 0===O.G7?void 0:O.G7.VENDOR)&&"CANCELLED"!==(null===e||void 0===e?void 0:e.status)&&(0,F.jsx)("span",{onClick:()=>a("/orderchecks/checkDetails/".concat(null===e||void 0===e?void 0:e.order_checks_id)),children:(0,F.jsx)(R.fmQ,{size:18,color:"#fff",style:{marginTop:"0.2rem"}})})]})}),(0,F.jsx)(f.Z,{sx:{p:0},children:(0,_.isEmpty)(null===Z||void 0===Z?void 0:Z.AutoGenInfo)?(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:"No data found"}):(0,F.jsx)(y.Z,{width:"100%",border:"0",sx:{mt:"3px"},children:(0,F.jsx)(j.Z,{children:(0,F.jsx)(g.Z,{sx:{borderBottom:"none"},children:(0,F.jsx)(k.Z,{sx:{borderBottom:"none",p:0},children:(0,F.jsx)(y.Z,{children:(0,F.jsx)(j.Z,{children:null===S||void 0===S?void 0:S.map(((e,o)=>{let[i,n]=e;return(0,F.jsxs)(g.Z,{sx:{borderBottom:"none"},children:[(0,F.jsx)(k.Z,{component:"th",scope:"row",sx:{p:"10px",width:"30%",verticalAlign:"middle",borderBottom:"none"},children:(0,F.jsx)(c.Z,{variant:"subtitle1",sx:{fontWeight:500},children:"".concat(i,":")})}),(0,F.jsx)(k.Z,{sx:{p:"10px",verticalAlign:"middle",borderBottom:"none"},children:n?(0,_.isObject)(n)?"NA":(0,F.jsx)(w.Z,{componentDecorator:(e,o,i)=>(0,F.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{wordBreak:"break-all",whiteSpace:"pre-wrap",display:"inline-block",maxWidth:"100%"},children:o},i),children:n}):"-"})]},i)}))})})})})})})})]})},o)},L=e=>{let{handleExpand:o,expanded:i,handleDownload:l,subRowList:d,Item:r,setExpanded:t}=e;return(0,F.jsx)(r,{children:(0,F.jsxs)(m.Z,{onChange:o((0,_.size)(d)+1),expanded:i===(0,_.size)(d)+1,children:[(0,F.jsx)(x.Z,{sx:{background:"#8e8f91",borderRadius:"0.5rem",mx:0,minHeight:"50px !important","& .MuiAccordionSummary-content.Mui-expanded":{margin:"0 !important"}},expandIcon:i===(0,_.size)(d)+1?(0,F.jsx)(n.kJj,{onClick:()=>t(!1),alt:"",size:18,color:"#fff",style:{marginLeft:"0.2rem",marginBottom:"0.1rem"}}):(0,F.jsx)(n.BHp,{onClick:()=>t(!0),alt:"",size:18,color:"#fff",style:{marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,F.jsx)("span",{style:{color:"#fff",fontWeight:500,fontSize:"0.875rem"},children:"Special Notice"})}),(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",paddingTop:"1rem"},children:"** NOTICE **"}),(0,F.jsxs)("div",{style:{paddingTop:"1.5rem",display:"flex",flexDirection:"column",gap:40},children:[(0,F.jsx)("span",{children:"The information provided is a consumer report as defined in the federal Fair Credit Reporting Act [15 U.S.C. 1681-1681u]. It contains confidential information on the individual named. It is submitted to the conditions contained in your Subscriber Agreement with us and may be used solely as a factor in evaluating the named individual for property renting/leasing, employment, promotion, reassignment or retention as an employee. We maintain strict procedures designed to ensure that the information is complete and up to date. While the information furnished is from reliable sources, its accuracy is not guaranteed. Proper use of this report and final verification of the named individual's identity is your sole responsibility. If any adverse action is taken based in whole or in part on this consumer report, a copy of this report and a summary of the consumer's rights must be provided to the consumer prior to taking adverse action."}),(0,F.jsx)("span",{children:(0,F.jsx)("span",{onClick:l,style:{color:"#698FB5",background:"#fff",border:"none!important",fontWeight:500,fontSize:"0.875rem",cursor:"pointer"},children:"A Summary of Your Rights Under the Fair Credit Reporting Act"})})]})]})]})},"report")}}}]);
//# sourceMappingURL=657.f14efad2.chunk.js.map