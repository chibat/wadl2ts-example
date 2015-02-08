var client;
(function (client) {
    client.baseUri = 'http://localhost:8080/wadl2ts-example/rest/';
    client.x2js = new X2JS();
    var calculator;
    (function (calculator) {
        var add;
        (function (add) {
            function get(arg1, arg2, callback) {
                $.ajax({ dataType: 'xml', type: 'GET', url: client.baseUri + 'calculator/add', data: { arg1: arg1, arg2: arg2, }, success: function (res) {
                    callback((client.x2js.xml2json(res).result));
                } });
            }
            add.get = get;
        })(add = calculator.add || (calculator.add = {}));
    })(calculator = client.calculator || (client.calculator = {}));
})(client || (client = {}));
