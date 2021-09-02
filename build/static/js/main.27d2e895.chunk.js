(this.webpackJsonpcelebration=this.webpackJsonpcelebration||[]).push([[0],{17:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(6),r=s.n(a),o=(s(17),s(2)),i=s(0),l=function(e){var t=e.resetBlocks;return Object(i.jsxs)("div",{className:"game_row",children:[Object(i.jsx)("h2",{className:"game_status",children:"Blocks"}),Object(i.jsx)("input",{className:"game_checkbox",type:"checkbox",defaultChecked:!0,onChange:t})]})},u=s(3),b=function(e){var t=e.resetGame,s=e.resetBlocksDiv;return Object(i.jsxs)("div",{className:"game_row",children:[Object(i.jsx)("button",{onClick:t,className:"game_reset_button",children:Object(i.jsxs)("span",{className:"game_reset_icon_container",children:["Game",Object(i.jsx)(u.e,{className:"game_reset_icon"})]})}),Object(i.jsx)("button",{onClick:s,className:"game_reset_button",children:Object(i.jsxs)("span",{className:"game_reset_icon_container",children:["Blocks",Object(i.jsx)(u.e,{className:"game_reset_icon"})]})})]})},m=function(e){var t=e.game,s=e.changeGame;return Object(i.jsxs)("div",{className:"game_row",children:[Object(i.jsxs)("h2",{className:"game_status",children:["You are Now Playing Game ",t]}),Array(3).fill(1).map((function(e,c){return Object(i.jsxs)("button",{onClick:function(){return s(c+1)},className:t===c+1?"game_button_active":"game_button",children:["Game ",c+1]})}))]})},j=function(e){var t=e.game,s=e.changeGame,c=e.resetGame,n=e.resetBlocks,a=e.resetBlocksDiv;return Object(i.jsxs)("div",{className:"game_selector",children:[Object(i.jsx)("img",{className:"game_logo",src:"/logo.png",alt:"logo"}),Object(i.jsx)(m,{game:t,changeGame:s}),Object(i.jsx)(b,{resetGame:c,resetBlocksDiv:a}),Object(i.jsx)(l,{resetBlocks:n})]})},d="https://akkuakhil.github.io/celebration-images/images/",_=function(e){var t=e.game,s=e.number,c=e.setImage,n=e.resetBlocksDiv;return Object(i.jsx)("button",{className:"number_button",onClick:function(e){return function(e,s){n(),e.target.classList.add("number_button_closed"),e.target.classList.remove("number_button"),c("".concat(d,"game").concat(t,"/").concat(s,".jpeg"))}(e,s)},children:s})},O=function(e){var t=e.game,s=e.setImage,c=e.resetBlocksDiv;return Object(i.jsx)("div",{className:"number_button_row",children:Array(16).fill(1).map((function(e,n){return Object(i.jsx)(_,{number:n+1,setImage:s,game:t,resetBlocksDiv:c},n+1)}))})},g=s(11),x=function(){var e=Object(c.useState)(60),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(g.useTimer)({expiryTimestamp:new Date}),r=a.seconds,l=a.minutes,b=a.pause,m=a.resume,j=a.restart;return Object(i.jsx)("div",{className:"timer_container",children:Object(i.jsxs)("div",{className:"timer_sub_container",children:[Object(i.jsxs)("div",{className:"timer_row",children:[Object(i.jsx)("input",{onChange:function(e){return n(Number(e.target.value))},value:s,className:"timer_input"}),"Sec"]}),Object(i.jsxs)("div",{className:"timer_number",children:[Object(i.jsx)("span",{children:l}),":",Object(i.jsx)("span",{children:r})]}),Object(i.jsxs)("div",{className:"timer_row",children:[Object(i.jsx)("button",{onClick:function(){var e=new Date,t=e.getSeconds()+s;e.setSeconds(t),j(e)},className:"timer_button timer_button_play",children:Object(i.jsx)(u.c,{})}),Object(i.jsx)("button",{onClick:b,className:"timer_button timer_button_pause",children:Object(i.jsx)(u.b,{})}),Object(i.jsx)("button",{onClick:m,className:"timer_button timer_button_resume",children:Object(i.jsx)(u.d,{})})]})]})})},h=function(e){var t=e.image,s=e.blocks;return Object(i.jsx)("div",{className:"image_row",children:Object(i.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t,")")},children:s&&Array(80).fill(1).map((function(e,t){return Object(i.jsx)("button",{className:"image_button",onClick:function(e){return function(e){e.target.classList.add("image_button_closed"),e.target.classList.remove("image_button")}(e)},children:t+1},t+1)}))})})},v=function(e){var t=e.game,s=e.image,c=e.setImage,n=e.blocks,a=e.resetBlocksDiv;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(O,{game:t,setImage:c,resetBlocksDiv:a}),Object(i.jsx)(x,{}),Object(i.jsx)(h,{image:s,blocks:n})]})},f=s(12),N=s.n(f),p=function(e){var t=e.isOpen,s=e.setIsOpen,c=e.team1Score,n=e.team2Score,a=e.team1,r=e.team2;return Object(i.jsx)(N.a,{isOpen:t,onRequestClose:function(){s(!1)},ariaHideApp:!1,closeTimeoutMS:200,className:"result_modal",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Result"}),Object(i.jsx)("h1",{className:"result_status",children:c===n?"Game is Draw":"".concat(c>n?a:r," Won")})]})})},k=function(){var e=Object(c.useState)("Team 1"),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)("Team 2"),r=Object(o.a)(a,2),l=r[0],b=r[1],m=Object(c.useState)(0),j=Object(o.a)(m,2),d=j[0],_=j[1],O=Object(c.useState)(0),g=Object(o.a)(O,2),x=g[0],h=g[1],v=Object(c.useState)(!1),f=Object(o.a)(v,2),N=f[0],k=f[1];return Object(i.jsxs)("div",{className:"score_board",children:[Object(i.jsx)("h2",{className:"score_status",children:"ScoreBoard"}),Object(i.jsxs)("div",{className:"score_board_row",children:[Object(i.jsx)("input",{type:"text",className:"score_input",value:s,onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){return _(d+1)},className:d===x?"score_button":d>x?"score_button score_button_win":"score_button score_button_lose",children:d})]}),Object(i.jsxs)("div",{className:"score_board_row",children:[Object(i.jsx)("input",{type:"text",className:"score_input",value:l,onChange:function(e){return b(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){return h(x+1)},className:d===x?"score_button":x>d?"score_button score_button_win":"score_button score_button_lose",children:x})]}),Object(i.jsxs)("div",{className:"score_board_row",children:[Object(i.jsx)("button",{onClick:function(){k(!0)},className:"score_new_button",children:"Result"}),Object(i.jsx)(p,{isOpen:N,setIsOpen:k,team1Score:d,team2Score:x,team1:s,team2:l}),Object(i.jsx)("button",{onClick:function(){_(0),h(0)},className:"score_new_button",children:Object(i.jsxs)("span",{className:"score_new_icon_container",children:["New",Object(i.jsx)(u.a,{className:"score_new_icon"})]})})]})]})},w=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(!0),r=Object(o.a)(a,2),l=r[0],u=r[1],b=Object(c.useState)("".concat(d,"/default.png")),m=Object(o.a)(b,2),_=m[0],O=m[1],g=function(){document.querySelectorAll(".image_button_closed").forEach((function(e){e.classList.remove("image_button_closed"),e.classList.add("image_button")}))},x=function(){return O("".concat(d,"/default.png"))},h=function(){g(),x(),document.querySelectorAll(".number_button_closed").forEach((function(e){e.classList.remove("number_button_closed"),e.classList.add("number_button")}))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{game:s,changeGame:function(e){n(e),h()},setGame:n,resetGame:h,resetImage:x,resetBlocks:function(){return u(!l)},resetBlocksDiv:g}),Object(i.jsx)(v,{game:s,image:_,setImage:O,blocks:l,resetBlocksDiv:g}),Object(i.jsx)(k,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,31)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.27d2e895.chunk.js.map