"use strict";

var http = require("http");
var controller = require("./controllers/helloController");



function requestHandler(request, response){


    var method = request.method;

    var callback = function (error) {
    };
    switch (method) {
        case "GET":
            controller.GET(request, response, callback);
            break;
        case "POST":
            controller.POST(request, response, callback);
            break;
        default :
            break;

    }

};


var server  = http.createServer(requestHandler);
server.listen(3000);
