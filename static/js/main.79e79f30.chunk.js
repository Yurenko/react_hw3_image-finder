(this["webpackJsonpreact_hw_3_image-finder"]=this["webpackJsonpreact_hw_3_image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1PKS-",Modal:"Modal_Modal__2Zm9u",materialIconsBtn:"Modal_materialIconsBtn__2kKNv"}},22:function(e,t,a){e.exports={Button:"Button_Button__2DV8e"}},23:function(e,t,a){e.exports={App:"App_App__2r2Io"}},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3MvXg",SearchForm:"Searchbar_SearchForm__2IfsR",SearchFormButton:"Searchbar_SearchFormButton__22_4G",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__12DFY",SearchFormInput:"Searchbar_SearchFormInput__JXp-D"}},4:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3UsL6",ImageGalleryItem:"ImageGallery_ImageGalleryItem__3jYHU","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__3RW6U"}},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(21),c=a.n(r),o=a(9),l=a(5),s=a(6),i=a(8),u=a(7),m=a(4),h=a.n(m),p=a(0);var d=function(e){var t=e.item,a=e.onClick,n=t.webformatURL,r=t.tags,c=t.largeImageURL;return Object(p.jsx)("li",{className:h.a.ImageGalleryItem,children:Object(p.jsx)("a",{href:c,onClick:a,children:Object(p.jsx)("img",{src:n,alt:r,className:h.a.ImageGalleryItemImage,srcSet:c})})})};var b=function(e){var t=e.pages,a=e.onClick;return Object(p.jsx)("ul",{className:h.a.ImageGallery,children:t.map((function(e){return Object(p.jsx)(d,{item:e,onClick:a},e.id)}))})},f=a(3),g=a.n(f);var j=function(e){var t=e.onSubmit;return Object(p.jsx)("header",{className:g.a.Searchbar,children:Object(p.jsxs)("form",{className:g.a.SearchForm,onSubmit:t,children:[Object(p.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(p.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",placeholder:"Search images and photos",name:"search"})]})})},_=a(22),v=a.n(_);var O=function(e){var t=e.onLoadClick;return Object(p.jsx)("button",{type:"button",onClick:t,className:v.a.Button,children:"Load more"})},y=a(11),S=a.n(y),I="https://pixabay.com/api/",x="23038109-8e0e25503253e4f392237619f",k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return S.a.get("".concat(I,"?q=").concat(e,"&page=").concat(t,"&key=").concat(x,"&image_type=photo&orientation=horizontal&per_page=10")).then((function(e){return e.data})).then((function(e){return e.hits}))},C=a(23),w=a.n(C),B=a(12),F=a.n(B),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).modalRef=Object(n.createRef)(),e.handleEsc=function(t){var a=e.props.onClose;27===t.keyCode&&a()},e.handleClose=function(t){t.preventDefault();var a=e.props.onClose;t.target===e.modalRef.current&&a()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEsc)}},{key:"render",value:function(){var e=this.props.url;return Object(p.jsx)("div",{className:F.a.Overlay,onClick:this.handleClose,ref:this.modalRef,children:Object(p.jsx)("div",{className:F.a.Modal,children:Object(p.jsx)("img",{src:e,alt:e})})})}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pages:[],query:"",numberPage:1,modalImg:"",isOpen:!1},e.handleSubmit=function(t){t.preventDefault();var a=t.target.search.value;e.setState({query:a},(function(){k(e.state.query).then((function(t){return e.setState({pages:Object(o.a)(t)})})).catch(console.error)}))},e.handleLoading=function(t){t.preventDefault(),e.setState((function(e){return{numberPage:e.numberPage+1}}),(function(){k(e.state.query,e.state.numberPage).then((function(t){return e.setState((function(e){return{pages:[].concat(Object(o.a)(e.pages),Object(o.a)(t))}}))})).catch(console.error)}))},e.handleClick=function(t){t.preventDefault();var a=t.target.currentSrc;e.setState({modalImg:a,isOpen:!0})},e.handleClose=function(){e.setState({modalImg:"",isOpen:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.pages,a=e.modalImg,n=e.isOpen;return Object(p.jsxs)("div",{className:w.a.App,children:[Object(p.jsx)(j,{onSubmit:this.handleSubmit}),Object(p.jsx)(b,{pages:t,onClick:this.handleClick}),t.length>0&&Object(p.jsx)(O,{onLoadClick:this.handleLoading}),n&&Object(p.jsx)(G,{url:a,onClose:this.handleClose})]})}}]),a}(n.Component);a(47);c.a.render(Object(p.jsx)(L,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.79e79f30.chunk.js.map