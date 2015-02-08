$(function () {
    $('#form').submit(function () {
        var arg1 = $('#arg1').val();
        var arg2 = $('#arg2').val();
        client.calculator.add.get(arg1, arg2, function (result) {
            $('#result').text(result.value);
        });
        return false;
    });
});
