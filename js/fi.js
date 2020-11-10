/* global window, document, alert */
document.getElementById('form').style.marginTop = window.innerHeight / 3 + 'px';
var a = document.getElementById('a'),
    b = document.getElementById('b'),
    sub = document.getElementById('sub');
sub.addEventListener('click', function () {
    'use strict';
    if (a.value === '' || b.value === '') {
        alert('Enter Vaild Name');
        a.style.borderBottomColor = 'red';
        b.style.borderBottomColor = 'red';
    } else {
        window.localStorage.setItem('a', a.value);
        window.localStorage.setItem('b', b.value);
        window.location.assign('../html/pro.html');
    }
});
