(this.webpackJsonpcelebration=this.webpackJsonpcelebration||[]).push([[0],{17:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),r=c.n(a),o=(c(17),c(2)),i=c(0),l=function(e){var t=e.resetBlocks;return Object(i.jsxs)("div",{className:"game_row",children:[Object(i.jsx)("h2",{className:"game_status",children:"Blocks"}),Object(i.jsx)("input",{className:"game_checkbox",type:"checkbox",defaultChecked:!0,onChange:t})]})},u=c(3),m=function(e){var t=e.resetGame,c=e.resetBlocksDiv;return Object(i.jsxs)("div",{className:"game_row",children:[Object(i.jsx)("button",{onClick:t,className:"game_reset_button",children:Object(i.jsxs)("span",{className:"game_reset_icon_container",children:["Game",Object(i.jsx)(u.e,{className:"game_reset_icon"})]})}),Object(i.jsx)("button",{onClick:c,className:"game_reset_button",children:Object(i.jsxs)("span",{className:"game_reset_icon_container",children:["Blocks",Object(i.jsx)(u.e,{className:"game_reset_icon"})]})})]})},b=function(e){var t=e.game,c=e.changeGame;return Object(i.jsxs)("div",{className:"game_row",children:[Object(i.jsxs)("h2",{className:"game_status",children:["Now Playing Game ",t]}),Array(4).fill(1).map((function(e,s){return Object(i.jsx)("button",{onClick:function(){return c(s+1)},className:t===s+1?"game_button_active":"game_button",children:Object(i.jsxs)("span",{className:"game_icon_container",children:[Object(i.jsx)(u.a,{className:"game_icon"})," ",s+1]})},s+1)}))]})},j=function(e){var t=e.game,c=e.changeGame,s=e.resetGame,n=e.resetBlocks,a=e.resetBlocksDiv;return Object(i.jsxs)("div",{className:"game_selector",children:[Object(i.jsx)("img",{className:"game_logo",src:"/logo.png",alt:"logo"}),Object(i.jsx)(b,{game:t,changeGame:c}),Object(i.jsx)(m,{resetGame:s,resetBlocksDiv:a}),Object(i.jsx)(l,{resetBlocks:n})]})},d="https://akkuakhil.github.io/celebration-images/images/",_=function(e){var t=e.game,c=e.number,s=e.setImage,n=e.resetBlocksDiv;return Object(i.jsx)("button",{className:"number_button",onClick:function(e){return function(e,c){n(),e.target.classList.add("number_button_closed"),e.target.classList.remove("number_button"),s("".concat(d,"game").concat(t,"/").concat(c,".jpeg"))}(e,c)},children:c})},g=function(e){var t=e.game,c=e.setImage,s=e.resetBlocksDiv;return Object(i.jsx)("div",{className:"number_button_row",children:Array(16).fill(1).map((function(e,n){return Object(i.jsx)(_,{number:n+1,setImage:c,game:t,resetBlocksDiv:s},n+1)}))})},O=c(11),x=function(){var e=Object(s.useState)(60),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(O.useTimer)({expiryTimestamp:new Date}),r=a.seconds,l=a.minutes,m=a.pause,b=a.resume,j=a.restart;return Object(i.jsx)("div",{className:"timer_container",children:Object(i.jsxs)("div",{className:"timer_sub_container",children:[Object(i.jsxs)("div",{className:"timer_row",children:[Object(i.jsx)("input",{onChange:function(e){return n(Number(e.target.value))},value:c,className:"timer_input"}),"Sec"]}),Object(i.jsxs)("div",{className:"timer_number",children:[Object(i.jsx)("span",{children:l}),":",Object(i.jsx)("span",{children:r})]}),Object(i.jsxs)("div",{className:"timer_row",children:[Object(i.jsx)("button",{onClick:function(){var e=new Date,t=e.getSeconds()+c;e.setSeconds(t),j(e)},className:"timer_button timer_button_play",children:Object(i.jsx)(u.c,{})}),Object(i.jsx)("button",{onClick:m,className:"timer_button timer_button_pause",children:Object(i.jsx)(u.b,{})}),Object(i.jsx)("button",{onClick:b,className:"timer_button timer_button_resume",children:Object(i.jsx)(u.d,{})})]})]})})},h=function(e){var t=e.game,c=e.image,s=e.blocks;return Object(i.jsx)("div",{className:"image_row",children:Object(i.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")},onClick:function(){if(3===t||4===t){var e;3===t&&(e=c.replace("game3","game5")),4===t&&(e=c.replace("game4","game6"));var s=document.getElementsByClassName("image");Object(o.a)(s,1)[0].style.backgroundImage="url(".concat(e,")")}},children:s&&Array(80).fill(1).map((function(e,t){return Object(i.jsx)("button",{className:"image_button",onClick:function(e){return function(e){e.target.classList.add("image_button_closed"),e.target.classList.remove("image_button")}(e)},children:t+1},t+1)}))})})},v=function(e){var t=e.game,c=e.image,s=e.setImage,n=e.blocks,a=e.resetBlocksDiv;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(g,{game:t,setImage:s,resetBlocksDiv:a}),Object(i.jsx)(x,{}),Object(i.jsx)(h,{game:t,image:c,blocks:n})]})},N=c(12),f=c.n(N),p=function(e){var t=e.isOpen,c=e.setIsOpen,s=e.team1Score,n=e.team2Score,a=e.team1,r=e.team2;return Object(i.jsx)(f.a,{isOpen:t,onRequestClose:function(){c(!1)},ariaHideApp:!1,closeTimeoutMS:200,className:"result_modal",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Result"}),Object(i.jsx)("h1",{className:"result_status",children:s===n?"Game is Draw":"".concat(s>n?a:r," Won")})]})})},k=function(){var e=Object(s.useState)("Team 1"),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("Team 2"),r=Object(o.a)(a,2),l=r[0],m=r[1],b=Object(s.useState)(0),j=Object(o.a)(b,2),d=j[0],_=j[1],g=Object(s.useState)(0),O=Object(o.a)(g,2),x=O[0],h=O[1],v=Object(s.useState)(!1),N=Object(o.a)(v,2),f=N[0],k=N[1];return Object(i.jsxs)("div",{className:"score_board",children:[Object(i.jsx)("h2",{className:"score_status",children:"ScoreBoard"}),Object(i.jsxs)("div",{className:"score_board_row",children:[Object(i.jsx)("input",{type:"text",className:"score_input",value:c,onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){return _(d+1)},className:d===x?"score_button":d>x?"score_button score_button_win":"score_button score_button_lose",children:d})]}),Object(i.jsxs)("div",{className:"score_board_row",children:[Object(i.jsx)("input",{type:"text",className:"score_input",value:l,onChange:function(e){return m(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){return h(x+1)},className:d===x?"score_button":x>d?"score_button score_button_win":"score_button score_button_lose",children:x})]}),Object(i.jsxs)("div",{className:"score_board_row",children:[Object(i.jsx)("button",{onClick:function(){k(!0)},className:"score_new_button",children:"Result"}),Object(i.jsx)(p,{isOpen:f,setIsOpen:k,team1Score:d,team2Score:x,team1:c,team2:l}),Object(i.jsx)("button",{onClick:function(){_(0),h(0)},className:"score_new_button",children:Object(i.jsxs)("span",{className:"score_new_icon_container",children:["New",Object(i.jsx)(u.a,{className:"score_new_icon"})]})})]})]})},w=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(o.a)(a,2),l=r[0],u=r[1],m=Object(s.useState)("".concat(d,"/default.png")),b=Object(o.a)(m,2),_=b[0],g=b[1],O=function(){document.querySelectorAll(".image_button_closed").forEach((function(e){e.classList.remove("image_button_closed"),e.classList.add("image_button")}))},x=function(){return g("".concat(d,"/default.png"))},h=function(){O(),x(),document.querySelectorAll(".number_button_closed").forEach((function(e){e.classList.remove("number_button_closed"),e.classList.add("number_button")}))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{game:c,changeGame:function(e){n(e),h()},setGame:n,resetGame:h,resetImage:x,resetBlocks:function(){return u(!l)},resetBlocksDiv:O}),Object(i.jsx)(v,{game:c,image:_,setImage:g,blocks:l,resetBlocksDiv:O}),Object(i.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),C()}},[[30,1,2]]]);
//# sourceMappingURL=main.0573b231.chunk.js.map