(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{41:function(t,e,c){"use strict";c.r(e),c.d(e,"CartContext",function(){return r});var a=c(20),n=c(11),o=c(9),i=c(0),r=Object(i.createContext)();e.default=function(t){var e=Object(i.useState)([]),c=Object(o.a)(e,2),u=c[0],d=c[1],s=Object(i.useState)(0),b=Object(o.a)(s,2),j=b[0],l=b[1];Object(i.useEffect)(function(){console.log(u),function(){var t=0;u.forEach(function(e){return t+=e.precio*e.cantidad}),l(t)}()},[u]);var O=function(t){return u.some(function(e){return e.id===t})},f=Object(i.useState)(""),m=Object(o.a)(f,2),p=m[0],S=m[1],v=Object(i.useState)(""),w=Object(o.a)(v,2),C=w[0],g=w[1],E=Object(i.useState)(""),h=Object(o.a)(E,2),P=h[0],k=h[1],x=Object(i.useState)(""),J=Object(o.a)(x,2),T=J[0],A=J[1],D=Object(i.useState)(""),I=Object(o.a)(D,2),L=I[0],N=I[1],U=Object(i.useState)(""),q=Object(o.a)(U,2),y=q[0],z=q[1],B=Object(i.useState)(""),F=Object(o.a)(B,2),G=F[0],H=F[1];return i.createElement(r.Provider,{value:{cart:u,addToCart:function(t,e){O(t.id)?u.map(function(c){c.id===t.id&&(c.cantidad=e+c.cantidad,console.log("cart",u),d(u))}):d([].concat(Object(n.a)(u),[Object(a.a)({},t,{cantidad:e})]))},borrarUnItem:function(t){var e=u.filter(function(e){return e.id!==t});d(e)},vaciarCarrito:function(){d([])},suma:j,nombre:p,setNombre:S,apellido:C,setApellido:g,email:P,setEmail:k,telefono:T,setTelefono:A,localidad:L,setDireccion:z,direccion:y,setLocalidad:N,codigoPostal:G,setCodigoPostal:H}},t.children)}}}]);
//# sourceMappingURL=14.d32072c7.chunk.js.map