(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);a(41),a(42);var n=a(1),r=a.n(n),c=a(17),o=a(16),i=a(35),l=a(29),s=a(14),p={products:[],shoppingCart:[],sort:{name:"Price High - Low",value:"price-desc"},loading:!1},u=Object(o.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(s.a)({},e,{products:t.payload.products.map(function(e){var t=e.id,a=e.title,n=e.images,r=e.variants;return{id:t,title:a,image:n[0].src,price:r[0].price,inCart:!1}}),loading:!1});case"SET_PRODUCT_IN_CART":return Object(s.a)({},e,{shoppingCart:e.shoppingCart.filter(function(e){return e.id===t.payload.id}).length?Object(l.a)(e.shoppingCart):[].concat(Object(l.a)(e.shoppingCart),[t.payload]),products:e.products.map(function(e){return e.id===t.payload.id&&(e.inCart=!0),e}),loading:!1});case"REMOVE_PRODUCT_FROM_CART":return Object(s.a)({},e,{shoppingCart:e.shoppingCart.filter(function(e){return e.id!==t.payload}),products:e.products.map(function(e){return e.id===t.payload&&(e.inCart=!1),e}),loading:!1});case"FILTER_PRODUCTS":return Object(s.a)({},e,{sort:t.payload,loading:!1});case"PRODUCTS_LOADING":return Object(s.a)({},e,{loading:!0});default:return e}}}),m=Object(o.e)(u,Object(o.d)(Object(o.a)(i.a))),d=a(11),h=a(8),g=a(9),C=a(12),f=a(10),b=a(13),E=a(63),O=a(77),j=a(78),v=a(21),y=a(26),T=function(){return{type:"PRODUCTS_LOADING"}},N=function(e,t){if(e.length){var a=[];return"price-desc"===t.value?a=e.sort(function(e,t){return t.price-e.price}):"price-asc"===t.value?a=e.sort(function(e,t){return e.price-t.price}):"title-desc"===t.value?a=e.sort(function(e,t){return e.title>t.title?1:-1}):"title-asc"===t.value&&(a=e.sort(function(e,t){return e.title<t.title?1:-1})),a}return[]},P=a(6),_=a(62),k=a(64),w=a(65),R=a(66),A=a(67),L=a(68),S=a(69),F=a(70),I=a(27),D=function(e){return e.length?e.reduce(function(e,t){return e+parseFloat(t.price)},0).toFixed(2):0},x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(C.a)(this,Object(f.a)(t).call(this,e))).toggle=a.toggle.bind(Object(P.a)(Object(P.a)(a))),a.state={isOpen:!1},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(_.a,{color:"light",light:!0,expand:"md"},r.a.createElement(E.a,null,r.a.createElement(k.a,{href:"/"},r.a.createElement("img",{width:"auto",height:"30",src:"https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png",alt:"logo",style:{opacity:.7}})),r.a.createElement(w.a,{onClick:this.toggle}),r.a.createElement(R.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(A.a,{className:"ml-auto",navbar:!0},r.a.createElement(L.a,null,r.a.createElement(S.a,{className:"text-red mr-5",href:""},r.a.createElement(I.a,{icon:"shopping-cart"}),r.a.createElement("span",{className:"ml-2 mr-2 text-secondary"},"\xa3",this.props.total),r.a.createElement(F.a,{className:"bg-red",pill:!0},this.props.shoppingCart.length))),r.a.createElement(L.a,null,r.a.createElement(S.a,{className:"text-red ml-5",href:""},r.a.createElement(I.a,{icon:"bars"})))))))}}]),t}(r.a.Component),U=Object(d.b)(function(e){return{shoppingCart:e.app.shoppingCart,total:D(e.app.shoppingCart)}},{})(x),H=a(71),M=function(){return r.a.createElement(H.a,{className:"banner"})},G=a(72),Z=a(73),V=a(74),z=a(75),J=a(76),q=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).productToProductItem=function(e){var t=e.id,a=e.title,n=e.price;return r.a.createElement(G.a,{key:t,className:"justify-content-between shopingCart__item"},r.a.createElement("span",{className:"shopingCart__itemName"},a),r.a.createElement("span",{className:"shopingCart__itemPrice"},"\xa3",n))},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(Z.a,{className:"shoppingCart"},r.a.createElement(V.a,null,r.a.createElement(z.a,null,"CART"," ",r.a.createElement(F.a,{className:"bg-red",pill:!0},this.props.shoppingCart.length)),r.a.createElement("hr",null),r.a.createElement(J.a,{className:"mb-5 shopingCart"},this.props.shoppingCart.length?this.props.shoppingCart.map(this.productToProductItem):r.a.createElement(G.a,{className:"justify-content-between"},"No items added")),r.a.createElement(H.a,{className:"total bg-grey mb-0 p-1"},r.a.createElement(O.a,null,r.a.createElement(j.a,{sm:"7"},r.a.createElement("div",{className:"font-weight-bold"},"Total"),r.a.createElement("span",{style:{fontSize:"0.7em"}},"Inc. \xa3",(.2*this.props.total).toFixed(2)," in taxes")),r.a.createElement(j.a,{sm:"5",className:"text-right"},r.a.createElement("span",{className:"font-weight-bold"},"\xa3",this.props.total))))))}}]),t}(r.a.Component),Q=Object(d.b)(function(e){return{shoppingCart:e.app.shoppingCart,total:D(e.app.shoppingCart)}},{})(q),B=a(83),K=a(79),W=a(80),X=a(81),Y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(C.a)(this,Object(f.a)(t).call(this,e))).onChangeSortClicked=function(e,t){var n={name:e,value:t};a.props.sortProducts(n)},a.toggle=a.toggle.bind(Object(P.a)(Object(P.a)(a))),a.state={dropdownOpen:!1},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement(B.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(K.a,{caret:!0,size:"sm",color:"link"},this.props.sort.name),r.a.createElement(W.a,null,r.a.createElement(X.a,{onClick:function(){return e.onChangeSortClicked("Price High - Low","price-desc")}},"Price High - Low"),r.a.createElement(X.a,{onClick:function(){return e.onChangeSortClicked("Price Low - High","price-asc")}},"Price Low - High"),r.a.createElement(X.a,{onClick:function(){return e.onChangeSortClicked("Title A - Z","title-desc")}},"Title A - Z"),r.a.createElement(X.a,{onClick:function(){return e.onChangeSortClicked("Title Z - A","title-asc")}},"Title Z - A")))}}]),t}(n.Component),$={sortProducts:function(e){return function(t){t(T()),t({type:"FILTER_PRODUCTS",payload:e})}}},ee=Object(d.b)(function(e){return{sort:e.app.sort}},$)(Y),te=a(82),ae=a(39),ne=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(C.a)(this,Object(f.a)(t).call(this))).onAddToCartClicked=function(t,a,n,r){e.props.addToCart(t,a,n,r)},e.onRemoveFromCartClicked=function(t){e.props.removeFromCart(t)},e}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,r=t.title,c=t.image,o=t.price,i=t.inCart;return n.createElement(j.a,{sm:"4"},n.createElement(Z.a,{className:"productListing"},n.createElement(te.a,{className:"productListing__image",top:!0,width:"100%",src:c,alt:"Card image cap"}),n.createElement(V.a,{className:"productListing__details"},n.createElement("span",{className:"productListing__name mb-2"},r),n.createElement("span",{className:"productListing__price"},"\xa3",o),n.createElement("div",{className:"productListing__actions"},i?n.createElement(ae.a,{className:"bg-red",onClick:function(){return e.onRemoveFromCartClicked(a)}},"Remove Item"):n.createElement(ae.a,{className:"bg-red",onClick:function(){return e.onAddToCartClicked(a,r,o,i)}},"Add Item"),n.createElement(ae.a,{className:"bg-grey"},"Quick View")))))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).addProductToCart=function(e,t,n,r){var c={id:e,title:t,price:n,inCart:r};a.props.setProductInCart(c)},a.removeProductFromCart=function(e){a.props.removeProductFromCart(e)},a.productToProductItem=function(e){var t=e.id,n=e.title,c=e.image,o=e.price,i=e.inCart;return r.a.createElement(ne,{key:t,id:t,title:n,image:c,price:o,inCart:i,addToCart:a.addProductToCart,removeFromCart:a.removeProductFromCart})},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,this.props.products.map(this.productToProductItem))}}]),t}(r.a.Component),ce={setProductInCart:function(e){return function(t){t({type:"SET_PRODUCT_IN_CART",payload:e})}},removeProductFromCart:function(e){return function(t){t({type:"REMOVE_PRODUCT_FROM_CART",payload:e})}}},oe=Object(d.b)(function(e){return{sort:e.app.sort,products:e.app.products,loading:e.app.loading}},ce)(re),ie=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).loadProductList=function(){return!0===a.props.loading?r.a.createElement("h3",null,"Loading ... "):a.props.products.length?r.a.createElement(oe,null):r.a.createElement("h3",null,"No results ... ")},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(M,null),r.a.createElement(E.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,{sm:"9",className:"text-right mb-4"},r.a.createElement(ee,null))),r.a.createElement(O.a,null,r.a.createElement(j.a,{sm:"9"},this.loadProductList()),r.a.createElement(j.a,{sm:"3"},r.a.createElement(Q,null)))))}}]),t}(n.Component);v.b.add(y.a,y.b);var le={getProducts:function(){return function(e){e(T()),fetch("https://j-parre.myshopify.com/products.json").then(function(e){return e.json()}).then(function(t){e({type:"GET_PRODUCTS",payload:t})})}}},se=Object(d.b)(function(e){return{products:N(e.app.products,e.app.sort),loading:e.app.loading}},le)(ie);Object(c.render)(r.a.createElement(d.a,{store:m},r.a.createElement(se,null)),document.querySelector("#app"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2f844f94.chunk.js.map