function getRes() {
    const n = parseFloat($('#n').val()),
        a = parseFloat($('#a').val()),
        b = parseFloat($('#b').val()),
        x = parseFloat($('#x').val()),
        y = parseFloat($('#y').val());

    if (a > b) {
        alert(`А должно быть меньше B`);

    }

}


function getPercentages(sum, discount) {
    return printRes(sum - ((sum / 100) * discount));
}

function printRes(num) {
    $('#space-for-print').html(num);
}