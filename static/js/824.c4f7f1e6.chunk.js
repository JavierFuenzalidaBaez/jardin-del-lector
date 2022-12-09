"use strict";(self.webpackChunkjardin_del_lector=self.webpackChunkjardin_del_lector||[]).push([[824],{5863:function(e,n,r){r.d(n,{NI:function(){return q},Q6:function(){return S},Yp:function(){return C},lX:function(){return O}});var t=r(1413),a=r(4925),l=r(9439),i=r(2791),o=r(2680),d=r(1507),s=r(8379),u=r(2965),c=r(9894),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],m=["getRootProps","htmlProps"],v=["isDisabled","isInvalid","isReadOnly","isRequired"],f=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"],h=["className","children","requiredIndicator","optionalIndicator"],Z=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter(Boolean).join(" ")},g=function(e){return e?"":void 0},I=function(e){return!!e||void 0};function y(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){n.some((function(n){return null==n||n(e),null==e?void 0:e.defaultPrevented}))}}var b=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),E=(0,l.Z)(b,2),N=E[0],_=E[1],R=(0,o.k)({strict:!1,name:"FormControlContext"}),x=(0,l.Z)(R,2),k=x[0],F=x[1];var q=(0,s.Gp)((function(e,n){var r=(0,s.jC)("Form",e),o=function(e){var n=e.id,r=e.isRequired,o=e.isInvalid,s=e.isDisabled,u=e.isReadOnly,c=(0,a.Z)(e,p),m=(0,i.useId)(),v=n||"field-".concat(m),f="".concat(v,"-label"),h="".concat(v,"-feedback"),Z="".concat(v,"-helptext"),I=(0,i.useState)(!1),y=(0,l.Z)(I,2),b=y[0],E=y[1],N=(0,i.useState)(!1),_=(0,l.Z)(N,2),R=_[0],x=_[1],k=(0,i.useState)(!1),F=(0,l.Z)(k,2),q=F[0],S=F[1],C=(0,i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:Z},e),{},{ref:(0,d.lq)(n,(function(e){e&&x(!0)}))})}),[Z]),G=(0,i.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},r),{},{ref:a,"data-focus":g(q),"data-disabled":g(s),"data-invalid":g(o),"data-readonly":g(u),id:null!==(e=r.id)&&void 0!==e?e:f,htmlFor:null!==(n=r.htmlFor)&&void 0!==n?n:v})}),[v,s,q,o,u,f]),A=(0,i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:h},e),{},{ref:(0,d.lq)(n,(function(e){e&&E(!0)})),"aria-live":"polite"})}),[h]),L=(0,i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),P=(0,i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!o,isReadOnly:!!u,isDisabled:!!s,isFocused:!!q,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},hasFeedbackText:b,setHasFeedbackText:E,hasHelpText:R,setHasHelpText:x,id:v,labelId:f,feedbackId:h,helpTextId:Z,htmlProps:c,getHelpTextProps:C,getErrorMessageProps:A,getRootProps:L,getLabelProps:G,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),c=o.getRootProps,v=(o.htmlProps,(0,a.Z)(o,m)),f=Z("chakra-form-control",e.className);return i.createElement(k,{value:v},i.createElement(N,{value:r},i.createElement(s.m$.div,(0,t.Z)((0,t.Z)({},c({},n)),{},{className:f,__css:r.container}))))}));q.displayName="FormControl";var S=(0,s.Gp)((function(e,n){var r=F(),a=_(),l=Z("chakra-form__helper-text",e.className);return i.createElement(s.m$.div,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:l}))}));function C(e){var n=function(e){var n,r,l,i=F(),o=e.id,d=e.disabled,s=e.readOnly,u=e.required,c=e.isRequired,p=e.isInvalid,m=e.isReadOnly,v=e.isDisabled,h=e.onFocus,Z=e.onBlur,g=(0,a.Z)(e,f),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&I.push(i.feedbackId);(null==i?void 0:i.hasHelpText)&&I.push(i.helpTextId);return(0,t.Z)((0,t.Z)({},g),{},{"aria-describedby":I.join(" ")||void 0,id:null!==o&&void 0!==o?o:null==i?void 0:i.id,isDisabled:null!==(n=null!==d&&void 0!==d?d:v)&&void 0!==n?n:null==i?void 0:i.isDisabled,isReadOnly:null!==(r=null!==s&&void 0!==s?s:m)&&void 0!==r?r:null==i?void 0:i.isReadOnly,isRequired:null!==(l=null!==u&&void 0!==u?u:c)&&void 0!==l?l:null==i?void 0:i.isRequired,isInvalid:null!==p&&void 0!==p?p:null==i?void 0:i.isInvalid,onFocus:y(null==i?void 0:i.onFocus,h),onBlur:y(null==i?void 0:i.onBlur,Z)})}(e),r=n.isDisabled,l=n.isInvalid,i=n.isReadOnly,o=n.isRequired,d=(0,a.Z)(n,v);return(0,t.Z)((0,t.Z)({},d),{},{disabled:r,readOnly:i,required:o,"aria-invalid":I(l),"aria-required":I(o),"aria-readonly":I(i)})}S.displayName="FormHelperText";var G=(0,o.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),A=(0,l.Z)(G,2),L=A[0],P=A[1];(0,s.Gp)((function(e,n){var r=(0,s.jC)("FormError",e),a=(0,u.Lr)(e),l=F();return(null==l?void 0:l.isInvalid)?i.createElement(L,{value:r},i.createElement(s.m$.div,(0,t.Z)((0,t.Z)({},null==l?void 0:l.getErrorMessageProps(a,n)),{},{className:Z("chakra-form__error-message",e.className),__css:(0,t.Z)({display:"flex",alignItems:"center"},r.text)}))):null})).displayName="FormErrorMessage",(0,s.Gp)((function(e,n){var r=P(),a=F();if(!(null==a?void 0:a.isInvalid))return null;var l=Z("chakra-form__error-icon",e.className);return i.createElement(c.JO,(0,t.Z)((0,t.Z)({ref:n,"aria-hidden":!0},e),{},{__css:r.icon,className:l}),i.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))})).displayName="FormErrorIcon";var O=(0,s.Gp)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),o=(0,u.Lr)(e),d=(o.className,o.children),c=o.requiredIndicator,p=void 0===c?i.createElement(w,null):c,m=o.optionalIndicator,v=void 0===m?null:m,f=(0,a.Z)(o,h),g=F(),I=null!==(r=null==g?void 0:g.getLabelProps(f,n))&&void 0!==r?r:(0,t.Z)({ref:n},f);return i.createElement(s.m$.label,(0,t.Z)((0,t.Z)({},I),{},{className:Z("chakra-form__label",o.className),__css:(0,t.Z)({display:"block",textAlign:"start"},l)}),d,(null==g?void 0:g.isRequired)?p:v)}));O.displayName="FormLabel";var w=(0,s.Gp)((function(e,n){var r=F(),a=_();if(!(null==r?void 0:r.isRequired))return null;var l=Z("chakra-form__required-indicator",e.className);return i.createElement(s.m$.span,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:l}))}));w.displayName="RequiredIndicator"},824:function(e,n,r){r.d(n,{BZ:function(){return x},II:function(){return b},xH:function(){return P}});var t=r(4942),a=r(9439),l=r(1413),i=r(4925),o=r(2791),d=r(5863),s=r(8379),u=r(2965),c=r(4328),p=r(2680),m=r(7810),v=r(2300),f=["htmlSize"],h=["children","className"],Z=["placement"],g=["placement"],I=["className"],y=["className"],b=(0,s.Gp)((function(e,n){var r=e.htmlSize,t=(0,i.Z)(e,f),a=(0,s.jC)("Input",t),p=(0,u.Lr)(t),m=(0,d.Yp)(p),v=(0,c.cx)("chakra-input",e.className);return o.createElement(s.m$.input,(0,l.Z)((0,l.Z)({size:r},m),{},{__css:a.field,ref:n,className:v}))}));b.displayName="Input",b.id="Input";var E=(0,p.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),N=(0,a.Z)(E,2),_=N[0],R=N[1],x=(0,s.Gp)((function(e,n){var r=(0,s.jC)("Input",e),t=(0,u.Lr)(e),a=t.children,d=t.className,p=(0,i.Z)(t,h),f=(0,c.cx)("chakra-input__group",d),Z={},g=(0,m.W)(a),I=r.field;g.forEach((function(e){if(r){var n,t;if(I&&"InputLeftElement"===e.type.id)Z.paddingStart=null!==(n=I.height)&&void 0!==n?n:I.h;if(I&&"InputRightElement"===e.type.id)Z.paddingEnd=null!==(t=I.height)&&void 0!==t?t:I.h;"InputRightAddon"===e.type.id&&(Z.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(Z.borderStartRadius=0)}}));var y=g.map((function(n){var r,t,a=(0,v.oA)({size:(null==(r=n.props)?void 0:r.size)||e.size,variant:(null==(t=n.props)?void 0:t.variant)||e.variant});return"Input"!==n.type.id?(0,o.cloneElement)(n,a):(0,o.cloneElement)(n,Object.assign(a,Z,n.props))}));return o.createElement(s.m$.div,(0,l.Z)({className:f,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},p),o.createElement(_,{value:r},y))}));x.displayName="InputGroup";var k={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},F=(0,s.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),q=(0,s.Gp)((function(e,n){var r,t=e.placement,a=void 0===t?"left":t,d=(0,i.Z)(e,Z),s=null!==(r=k[a])&&void 0!==r?r:{},u=R();return o.createElement(F,(0,l.Z)((0,l.Z)({ref:n},d),{},{__css:(0,l.Z)((0,l.Z)({},u.addon),s)}))}));q.displayName="InputAddon";var S=(0,s.Gp)((function(e,n){return o.createElement(q,(0,l.Z)((0,l.Z)({ref:n,placement:"left"},e),{},{className:(0,c.cx)("chakra-input__left-addon",e.className)}))}));S.displayName="InputLeftAddon",S.id="InputLeftAddon";var C=(0,s.Gp)((function(e,n){return o.createElement(q,(0,l.Z)((0,l.Z)({ref:n,placement:"right"},e),{},{className:(0,c.cx)("chakra-input__right-addon",e.className)}))}));C.displayName="InputRightAddon",C.id="InputRightAddon";var G=(0,s.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),A=(0,s.Gp)((function(e,n){var r,a,d,s=e.placement,u=void 0===s?"left":s,c=(0,i.Z)(e,g),p=R(),m=p.field,v="left"===u?"insetStart":"insetEnd",f=(0,l.Z)((d={},(0,t.Z)(d,v,"0"),(0,t.Z)(d,"width",null!==(r=null==m?void 0:m.height)&&void 0!==r?r:null==m?void 0:m.h),(0,t.Z)(d,"height",null!==(a=null==m?void 0:m.height)&&void 0!==a?a:null==m?void 0:m.h),(0,t.Z)(d,"fontSize",null==m?void 0:m.fontSize),d),p.element);return o.createElement(G,(0,l.Z)({ref:n,__css:f},c))}));A.id="InputElement",A.displayName="InputElement";var L=(0,s.Gp)((function(e,n){var r=e.className,t=(0,i.Z)(e,I),a=(0,c.cx)("chakra-input__left-element",r);return o.createElement(A,(0,l.Z)({ref:n,placement:"left",className:a},t))}));L.id="InputLeftElement",L.displayName="InputLeftElement";var P=(0,s.Gp)((function(e,n){var r=e.className,t=(0,i.Z)(e,y),a=(0,c.cx)("chakra-input__right-element",r);return o.createElement(A,(0,l.Z)({ref:n,placement:"right",className:a},t))}));P.id="InputRightElement",P.displayName="InputRightElement"}}]);
//# sourceMappingURL=824.c4f7f1e6.chunk.js.map