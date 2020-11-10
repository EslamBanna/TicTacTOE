/* global document, alert, window */
var el = document.getElementsByTagName('TD'),
    who = 0, // 0=>x 1=>o
    row,
    col,
    pc1 = 0,
    pc2 = 0,
    dor = document.getElementById('nav'),
    a = window.localStorage.getItem('a'),
    b = window.localStorage.getItem('b');
dor.innerHTML = 'Player ' + a;
function play(ch) {
    'use strict';
    var num = parseInt(ch, 10);
    col = num % 10;
    row = num - col;
    row = row % 9;
    if (who === 0) {
        pc1 = pc1 + 1;
        if (row === 2) {
            col = col + 2;
            el[col].style.backgroundImage = 'url(../images/x.png)';
        } else if (row === 3) {
            col = col + 5;
            el[col].style.backgroundImage = 'url(../images/x.png)';
        } else {
            col = col - 1;
            el[col].style.backgroundImage = 'url(../images/x.png)';
        }
        if (pc1 >= 3) {
            if (el[0].style.backgroundImage === 'url("../images/x.png")' && el[1].style.backgroundImage === 'url("../images/x.png")' && el[2].style.backgroundImage === 'url("../images/x.png")' || el[3].style.backgroundImage === 'url("../images/x.png")' && el[4].style.backgroundImage === 'url("../images/x.png")' && el[5].style.backgroundImage === 'url("../images/x.png")' || el[6].style.backgroundImage === 'url("../images/x.png")' && el[7].style.backgroundImage === 'url("../images/x.png")' && el[8].style.backgroundImage === 'url("../images/x.png")' || el[0].style.backgroundImage === 'url("../images/x.png")' && el[4].style.backgroundImage === 'url("../images/x.png")' && el[8].style.backgroundImage === 'url("../images/x.png")' || el[2].style.backgroundImage === 'url("../images/x.png")' && el[4].style.backgroundImage === 'url("../images/x.png")' && el[6].style.backgroundImage === 'url("../images/x.png")' || el[0].style.backgroundImage === 'url("../images/x.png")' && el[3].style.backgroundImage === 'url("../images/x.png")' && el[6].style.backgroundImage === 'url("../images/x.png")' || el[2].style.backgroundImage === 'url("../images/x.png")' && el[5].style.backgroundImage === 'url("../images/x.png")' && el[8].style.backgroundImage === 'url("../images/x.png")' || el[1].style.backgroundImage === 'url("../images/x.png")' && el[4].style.backgroundImage === 'url("../images/x.png")' && el[7].style.backgroundImage === 'url("../images/x.png")') {
                alert('The Winner Is The Player ' + a);
                window.location.assign('index.html');
            }
        }
        who = 1;
        dor.innerHTML = 'Player ' + b;
    } else if (who === 1) {
        pc2 = pc2 + 1;
        if (row === 2) {
            col = col + 2;
            el[col].style.backgroundImage = 'url(../images/o.png)';
        } else if (row === 3) {
            col = col + 5;
            el[col].style.backgroundImage = 'url(../images/o.png)';
        } else {
            col = col - 1;
            el[col].style.backgroundImage = 'url(../images/o.png)';
        }
        who = 0;
        dor.innerHTML = 'Player ' + a;
        if (pc2 >= 3) {
            if (el[0].style.backgroundImage === 'url("../images/o.png")' && el[1].style.backgroundImage === 'url("../images/o.png")' && el[2].style.backgroundImage === 'url("../images/o.png")' || el[3].style.backgroundImage === 'url("../images/o.png")' && el[4].style.backgroundImage === 'url("../images/o.png")' && el[5].style.backgroundImage === 'url("../images/o.png")' || el[6].style.backgroundImage === 'url("../images/o.png")' && el[7].style.backgroundImage === 'url("../images/o.png")' && el[8].style.backgroundImage === 'url("../images/o.png")' || el[0].style.backgroundImage === 'url("../images/o.png")' && el[4].style.backgroundImage === 'url("../images/o.png")' && el[8].style.backgroundImage === 'url("../images/o.png")' || el[2].style.backgroundImage === 'url("../images/o.png")' && el[4].style.backgroundImage === 'url("../images/o.png")' && el[6].style.backgroundImage === 'url("../images/o.png")' || el[0].style.backgroundImage === 'url("../images/o.png")' && el[3].style.backgroundImage === 'url("../images/o.png")' && el[6].style.backgroundImage === 'url("../images/o.png")' || el[2].style.backgroundImage === 'url("../images/o.png")' && el[5].style.backgroundImage === 'url("../images/o.png")' && el[8].style.backgroundImage === 'url("../images/o.png")' || el[1].style.backgroundImage === 'url("../images/o.png")' && el[4].style.backgroundImage === 'url("../images/o.png")' && el[7].style.backgroundImage === 'url("../images/o.png")') {
                alert('The Winner Is The Player ' + b);
                window.location.assign('index.html');
            }
        }
    }
    if (pc1 === 5 && pc2 === 4) {
        alert('Draw!!');
        window.location.assign('../html/index.html');
    }
}
