$(document).ready(function () {
    var expression = '';

    $('.clear').click(function () {
        $('.input').text('');
        expression = '';
        result = '';
        $('h3').text("Resultado = " + result);
    });

    $('.equal').click(function () {
        expression = $('.input').text();
        try {
            var result = eval(expression);
            $('h3').text("Resultado = " + result);
        } catch (error) {
            alert('Expressão inválida');
        }
    });

    $('.multiply, .divide, .minus, .plus').click(function () {
        expression += $(this).text();
        $('.input').text(expression);
    });

    $('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero, .decimal').click(function () {
        expression += $(this).text();
        $('.input').text(expression);
    });

});