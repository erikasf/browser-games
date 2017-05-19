@import url(http://fonts.googleapis.com/css?family=Lato:100,900,300);
* {
  font-family: 'Lato', Arial, Helvetica, sans-serif !important;
  color:#2E313F;
}
html {
  overflow:none;
}
body {
  background-color:#d89454;
  overflow:none;
}
p#status-wrapper {
  background-color:#756563;
  width:100%;
  padding:1em;
  font-weight:900;
  font-size:1.125em;
  position:absolute;
  top:-18px;
  left:0;
  color:#fffffa;
}
p#pgn-wrapper {
  font-weight:900;
  font-size:1.25em;
  max-width:600px;
  margin:0 auto;

}
span#pgn{
  font-size:0.85em;
  font-weight:300;
  color:#FFF;
}
.btn-wrapper {
  width:100%;
  max-width:600px;
  min-width:320px;
  margin:0 auto;
}
#startBtn, #clearBtn, #colorBtn {
  text-align:center;
  position:relative;
  font-size:1.78em;
  background:#756563;
  color:#fffffa;
  font-weight:900;
  padding:0em;
  width:197px;
  max-width:197px;
}

#board {
  border
  width:100%;
  max-width:600px;
  min-width:320px;
  margin:3.75em auto 1.25em auto;
}
.board-b72b1 {
  border: 15px outset #756563;
}
/* white square */
.white-1e1d7 {
  background-color: #F2F4F1;
  color: #5a3336;
}
/* black square */
.black-3c85d {
  background-color: #5A3336;
  color: #f2f4f1;
}

/* highlighted square */
.highlight1-32417, .highlight2-9c5d2 {
  -webkit-box-shadow: inset 0 0 3px 3px rgba(209, 75, 45, 0.15);
  -moz-box-shadow: inset 0 0 3px 3px rgba(209, 75, 45, 0.15);
  box-shadow: inset 0 0 3px 3px rgba(209, 75, 45, 0.15);
}
*!
 * chessboard.js v0.3.0
 *
 * Copyright 2013 Chris Oakman
 * Released under the MIT license
 * https://github.com/oakmac/chessboardjs/blob/master/LICENSE
 *
 * Date: 10 Aug 2013
 */

/* clearfix */
.clearfix-7da63 {
  clear: both;
}

/* board */
.board-b72b1 {
  border: 2px solid #404040;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

/* square */
.square-55d63 {
  float: left;
  position: relative;

  /* disable any native browser highlighting */
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

/* white square */
.white-1e1d7 {
  background-color: #f0d9b5;
  color: #b58863;
}

/* black square */
.black-3c85d {
  background-color: #b58863;
  color: #f0d9b5;
}

/* highlighted square */
.highlight1-32417, .highlight2-9c5d2 {
  -webkit-box-shadow: inset 0 0 3px 3px yellow;
  -moz-box-shadow: inset 0 0 3px 3px yellow;
  box-shadow: inset 0 0 3px 3px yellow;
}

/* notation */
.notation-322f9 {
  cursor: default;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  position: absolute;
}
.alpha-d2270 {
  bottom: 1px;
  right: 3px;
}
.numeric-fc462 {
  top: 2px;
  left: 2px;
}
