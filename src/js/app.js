'use strict';

function getRes() {
    const n = parseFloat($('#n').val()),
        a = parseFloat($('#a').val()),
        b = parseFloat($('#b').val()),
        x = parseFloat($('#x').val()) / 100,
        y = +$('#y').val() / 100;


    if (a > b) {
        alert(`А must be less than  B`);

    }
    if (n > b) {
        getPercentages(n, y);
    } else if (n > a) {
        getPercentages(n, x);
    } else {
        printRes(n)
    }

}


function getPercentages(n, discount) {
    return printRes(n - n * discount);
}

function printRes(num) {
    $('#space-for-print').html(num);
}