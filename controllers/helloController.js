var users = require("../lib/users");
var url = require("url");

module.exports = {
    "GET": function (request, response, callback) {

        var parsedUrl = url.parse(request.url, true);

        parsedUrl = parsedUrl.href.replace("/", "");
        if (parsedUrl === "users" || parsedUrl === "users.html") {
            var userList = users.getAllUsers;
            var i = 0;
            response.write("users:\n");
            for (i = 0; i < userList.length; i++) {
                response.write(
                    "User" + (i + 1) + ": {" +
                    "username: " + userList[i].username +
                    ", e-mail: " + userList[i].mail +
                    ", description: " + userList[i].description +
                    ", age: " + userList[i].age +
                    "}\n");

            }
            response.statusCode = 200;
            response.end("");
        }
        else {
            response.statusCode = 404;
            response.end("404 page not found");
        }


    },

    "POST": function (request, response, callback) {

        var query = "";
        request.on('data', function (data) {
            query += data;
        });
        request.on('end', function () {
            var newUser = users.parseJSON(query);
            users.addUser(newUser);
            response.end();
        });

    }


};