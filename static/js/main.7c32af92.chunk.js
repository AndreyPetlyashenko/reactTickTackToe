(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(1),s=r(2),o=r(4),l=r(3),u=r(0),c=r.n(u),i=r(6),m=r.n(i),d=(r(14),function(e){var t=e.value,r=e.onClick,n=e.style;return c.a.createElement("button",{className:"square",onClick:r,style:n},t)}),h=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e){var t=this,r={},n=this.props.winnerCellsIndex;return(this.props.bolded===e||n&&n.includes(e))&&(r={color:"red",border:"3px solid black"}),c.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},key:e,style:r})}},{key:"render",value:function(){var e=this,t=Array(3).fill(null),r=Array(3).fill(null),n=0;return t=t.map((function(t,a){return c.a.createElement("div",{className:"board-row",key:a},r=r.map((function(){return e.renderSquare(n++)})))})),c.a.createElement("div",{className:"saver"},t)}}]),r}(c.a.Component),f=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).handleClick=function(e){var t=n.state.history.slice(0,n.state.stepNumber+1),r=t[t.length-1].squares.slice();if(!p(r)&&!r[e]){r[e]=n.state.xIsNext?"X":"O";var a=n.state.historyIndex.slice();a.length=n.state.stepNumber,a.push(e),n.setState((function(){return{history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!n.state.xIsNext,historyIndex:a,isSort:!1}}))}},n.jumpTo=function(e){var t=n.state.historyIndex.slice()[e-1];n.setState({stepNumber:e,xIsNext:e%2===0,bolded:t})},n.sort=function(){n.setState((function(){return{isSort:!n.state.isSort}}))},n.state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0,historyIndex:[],bolded:null},n}return Object(s.a)(r,[{key:"render",value:function(){var e=this,t=this.state.history,r=t[this.state.stepNumber],n=p(r.squares);console.log(r,"current");var a,s=t.map((function(t,r){var n=function(e){switch(e){case 0:return" row 1 col 1";case 1:return" row 1 col 2";case 2:return" row 1 col 3";case 3:return" row 2 col 1";case 4:return" row 2 col 2";case 5:return" row 2 col 3";case 6:return" row 3 col 1";case 7:return" row 3 col 2";case 8:return" row 3 col 3";default:return null}}(e.state.historyIndex[r-1]),a=r?"go to move number "+n:"go to start";return c.a.createElement("li",{key:r},c.a.createElement("button",{onClick:function(){return e.jumpTo(r)}},a))}));return this.state.isSort&&s.sort((function(e,t){return t.key-e.key})),a=n?"Winner: "+n[0]:r.squares.includes(null)?"Next player: "+(this.state.xIsNext?"X":"O"):"We end it in a draw",c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement("div",{className:"status"},a),c.a.createElement(h,{squares:r.squares,onClick:function(t){return e.handleClick(t)},bolded:this.state.bolded,winnerCellsIndex:n})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,a),c.a.createElement("button",{onClick:function(){e.sort()}},"push to sort"),c.a.createElement("ol",null,s)))}}]),r}(c.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(n.a)(t[r],3),s=a[0],o=a[1],l=a[2];if(e[s]&&e[s]===e[o]&&e[s]===e[l])return[e[s],s,o,l]}return null}m.a.render(c.a.createElement(f,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.7c32af92.chunk.js.map