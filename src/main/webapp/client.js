var client;
(function (client) {
    client.baseUri = 'http://localhost:8080/wadl2ts-example/rest/';
    client.x2js = new X2JS();
    var calculator;
    (function (calculator) {
        var add;
        (function (add) {
            function get(arg1, arg2, callback, options) {
                if (options === void 0) { options = {}; }
                var settings = options;
                settings.dataType = 'xml';
                settings.type = 'GET';
                settings.url = client.baseUri + 'calculator/add';
                settings.data = { arg1: arg1, arg2: arg2, };
                settings.success = function (res) {
                    callback((client.x2js.xml2json(res).result));
                };
                $.ajax(settings);
            }
            add.get = get;
        })(add = calculator.add || (calculator.add = {}));
    })(calculator = client.calculator || (client.calculator = {}));
})(client || (client = {}));
