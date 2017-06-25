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
