(this.webpackJsonphbrwebclient=this.webpackJsonphbrwebclient||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(13),n(3)),s=n(4),l=n(7),p=n(6),u=n(5),h=n.n(u),m=(n(14),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={apiResponse:""},a}return Object(s.a)(n,[{key:"callAPI",value:function(){var e=this;fetch("https://api.jsonbin.io/b/5f4cb60e4d8ce411138582b6").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",{className:"App-intro"},";",this.state.apiResponse),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.646a0d53.chunk.js.map