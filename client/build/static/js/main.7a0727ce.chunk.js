(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(55)},31:function(e,t,n){},32:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(22),r=n.n(l),i=(n(31),n(2)),s=n(3),c=n(5),u=n(4),h=n(6);n(32);var p=function(){return o.a.createElement("nav",null,o.a.createElement("h2",null," Google Books Search"),o.a.createElement("a",{href:"/"},"Search Books"),o.a.createElement("a",{href:"./saved"},"Saved Books"))};var d=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Books Search App"),o.a.createElement("p",null,"Search for your favorire books and save them here for later viewing."))};var m=function(e){return o.a.createElement("div",{id:"searchContainer"},o.a.createElement("h3",null,"Search books"),o.a.createElement("form",{id:"searchBooks"},o.a.createElement("label",{htmlFor:"bookInput",form:"searchBooks"},"Enter a book tittle to search:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bookInput",id:"bookInput",form:"searchBooks",onChange:function(t){return e.handleChange(t)},placeholder:"Insert Book Title here",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",onClick:function(t){return e.handleSearchClick(t)}},"Search")))},k=n(7),v=n(9),b=n.n(v),E={getBooks:function(){return b.a.get("/api/books")},searchBooks:function(e){return b.a.post("/search",{title:e})},saveBookToDB:function(e){return b.a.post("/api/books",e)},deleteBook:function(e){return b.a.delete("/api/books/".concat(e))}},f=(o.a.Component,n(25)),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSaveClick=function(e){this.setState({saved:!0});var t={title:this.props.title,authors:this.props.authors,link:this.props.link,img:this.props.img,description:this.props.description};e.preventDefault(),E.addBookToDB(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.state={saved:!1,deleted:!1},n.handleSaveClick=n.handleSaveClick.bind(Object(k.a)(n)),n.handleDeleteClick=n.handleDeleteClick.bind(Object(k.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleDeleteClick",value:function(e){var t=this;this.setState({deleted:!0}),e.preventDefault(),E.deleteBook(this.props.id).then(function(e){console.log(e),f.a.dispatch(t.props.location,null)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bookResult",id:this.props.id?this.props.id:null,style:{display:this.state.deleted?"none":"block"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutBook"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,"By: ",this.props.authors?this.props.authors.join(", "):"N/A")),o.a.createElement("div",{className:"btnDiv"},this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",name:"view"},"View")):null,"/"===this.props.path?o.a.createElement("button",{type:"button",name:"save",onClick:this.handleSaveClick,disabled:this.state.saved},this.state.saved?"Saved":"Save"):o.a.createElement("button",{type:"button",name:"Delete",onClick:this.handleDeleteClick,disabled:this.state.deleted},"Delete"))),o.a.createElement("div",{className:"row"},this.props.img?o.a.createElement("img",{src:this.props.img.smallThumbnail?this.props.img.smallThumbnail:this.props.img.thumbnail?this.props.img.thumbnail:"",alt:"book cover"}):null,o.a.createElement("p",null,this.props.description?this.props.description:"N/A")))}}]),t}(o.a.Component);var B=function(e){return"/"===e.path?o.a.createElement("div",{id:"Container"},o.a.createElement("h3",null,"Results Found"),e.bookData.map(function(t){var n=t.volumeInfo;return o.a.createElement(g,{title:n.title,authors:n.authors,description:n.description,link:n.canonicalVolumeLink,img:n.imageLinks,path:e.path,key:t.id})})):"/saved"===e.path?e.savedBooks.length>0?o.a.createElement("div",{id:"Container"},o.a.createElement("h3",null,"Saved Books"),e.savedBooks.map(function(t){return o.a.createElement(g,{title:t.title,authors:t.authors,description:t.description,link:t.link,img:t.img,id:t._id,path:e.path,key:t._id})})):o.a.createElement("div",{id:"Container"},o.a.createElement("h3",null,"Saved Books"),o.a.createElement("p",null,"No saved books.")):void 0},C=(o.a.Component,function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(d,null),o.a.createElement(m,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.7a0727ce.chunk.js.map