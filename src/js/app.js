'use strict';

function getRes() {
    const n = parseFloat($('#n').val()),
        a = parseFloat($('#a').val()),
        b = parseFloat($('#b').val()),
        x = parseFloat($('#x').val()) / 100,
        y = parseFloat($('#y').val()) / 100;

    if (a > b) {
        alert(`А must be less than  B`);

    }
    if (n > a) {
        getPercentages(n, x);
    } else if (n > b) {
        getPercentages(n, y);
    } else {
        printRes(n);
    }


}


function getPercentages(n, discount) {
    return printRes(n - (discount * n));
}

function printRes(num) {
    $('#space-for-print').html(num);
}