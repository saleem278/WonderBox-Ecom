"use strict";(self.webpackChunkwonderbox_ecom=self.webpackChunkwonderbox_ecom||[]).push([[116],{8116:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});t(2791);var i,r,c,a,d,s,o,l,h,p,x=t(364),u=t(6916),m=t(8210),f=t(4569),j=t.n(f),g=t(7394),w=t(6837),y=t(3329),Z=(0,u.zB)({cartItems:w.D1,total:w.ej}),v=(0,x.$j)(Z,(function(n){return{clearCart:function(){return n((0,g.LL)())}}}))((function(n){var e=n.price,t=n.clearCart,i=100*e;return(0,y.jsx)(m.Z,{label:"Pay Now",name:"WonderBox ECOM",billingAddress:!0,shippingAddress:!0,image:"https://www.logopik.com/wp-content/uploads/edd/2018/07/Ecommerce-Logo-Vector.png",description:"Your total is \u20b9".concat(e),amount:i,panelLabel:"Pay Now",token:function(n){j()({url:"payment",method:"post",data:{amount:i,token:n}}).then((function(n){alert("Payment Successful"),t()})).catch((function(n){console.log("Payment Error: ",JSON.parse(n)),alert("Issue with payment, use only test card.")}))},currency:"INR",stripeKey:"pk_test_51HCbm5LrJBbThTdEEcoYKnJCs76XKQm6Z48lYqqf2MYVFLiNld24kL3gI6DCNdrxhGfRCgyivBI6RYIM8y4kOqU600fQCI1Tvj"})})),C=t(168),b=t(5751),I=b.ZP.div(i||(i=(0,C.Z)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid #f8cab4;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]))),P=b.ZP.div(r||(r=(0,C.Z)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),k=b.ZP.span(c||(c=(0,C.Z)(["\n  width: 23%;\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]))),L=(0,b.ZP)(k)(a||(a=(0,C.Z)(["\n  display: flex;\n  color: #ff5100;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]))),z=b.ZP.div(d||(d=(0,C.Z)(["\n  padding-left: 12px;\n  cursor: pointer;\n  color: red;\n  font-size: 25px;\n  font-weight: bolder;\n"]))),E=(0,x.$j)(null,(function(n){return{clearItem:function(e){return n((0,g.X_)(e))},addItem:function(e){return n((0,g.jX)(e))},removeItem:function(e){return n((0,g.cl)(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,i=n.addItem,r=n.removeItem,c=e.name,a=e.imageUrl,d=e.price,s=e.quantity;return(0,y.jsxs)(I,{children:[(0,y.jsx)(P,{children:(0,y.jsx)("img",{src:a,alt:"item"})}),(0,y.jsx)(k,{children:c}),(0,y.jsxs)(L,{children:[(0,y.jsx)("div",{onClick:function(){return r(e)},children:"\u276e"}),(0,y.jsx)("span",{style:{color:"black"},children:s}),(0,y.jsx)("div",{onClick:function(){return i(e)},children:"\u276f"})]}),(0,y.jsxs)(k,{children:["\u20b9",d]}),(0,y.jsx)(z,{onClick:function(){return t(e)},children:"\u2715"})]})})),N=b.ZP.div(s||(s=(0,C.Z)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]))),Y=b.ZP.div(o||(o=(0,C.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),M=b.ZP.div(l||(l=(0,C.Z)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 22%;\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),B=b.ZP.div(h||(h=(0,C.Z)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),O=b.ZP.div(p||(p=(0,C.Z)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]))),T=t(6399),_=(0,u.zB)({cartItems:w.D1,total:w.ej}),q=(0,x.$j)(_,(function(n){return{clearCart:function(){return n((0,g.LL)())}}}))((function(n){var e=n.cartItems,t=n.total,i=n.clearCart;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{style:0===e.length?{display:"none"}:{display:"flex",justifyContent:"flex-end"},children:(0,y.jsx)(T.Z,{type:"button",onClick:i,children:"Clear Cart"})}),(0,y.jsxs)(N,{children:[(0,y.jsxs)(Y,{children:[(0,y.jsx)(M,{children:(0,y.jsx)("span",{children:"Product"})}),(0,y.jsx)(M,{children:(0,y.jsx)("span",{children:"Description"})}),(0,y.jsx)(M,{children:(0,y.jsx)("span",{children:"Quantity"})}),(0,y.jsx)(M,{children:(0,y.jsx)("span",{children:"Price"})}),(0,y.jsx)(M,{children:(0,y.jsx)("span",{children:"Remove"})})]}),e.length>0?e.map((function(n){return(0,y.jsx)(E,{cartItem:n},n.id)})):(0,y.jsx)(O,{children:"Cart is Empty"}),e.length>0?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(B,{children:["TOTAL: \u20b9",t]}),(0,y.jsxs)(O,{children:["*Please use the following test credit card for payments*",(0,y.jsx)("br",{}),"4242 4242 4242 4242 - Exp: UPCOMING MM/YY - CVV: 123"]}),(0,y.jsx)(v,{price:t})]}):""]})]})}))}}]);
//# sourceMappingURL=116.08ed39bb.chunk.js.map