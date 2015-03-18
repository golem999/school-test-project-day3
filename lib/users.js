/**
 * Created by zvs on 3/18/15.
 */

var userList = [];

var User = function (name, mail, description, age) {
    var i = 0;
    for (i = 0; i < arguments.length; i++)
        if (!arguments[i])  arguments[i] = "";

    return {
        username: name,
        mail: mail,
        description: description,
        age: age
    };
};
var addUser = function (User) {
    userList[userList.length] = User;
};

var parseUser = function (obj) {
    var user = new User(obj["user"], obj["e-mail"], obj["description"], obj["age"]);
    console.log(user);
    return user;
};

module.exports = {
    User: User,
    addUser: addUser,
    parse: parseUser,
    parseJSON: function (jsonString) {
        return parseUser(JSON.parse(jsonString));
    },
    getAllUsers: userList
};