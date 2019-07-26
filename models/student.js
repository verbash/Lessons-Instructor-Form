var orm = require("../config/orm.js");

var student = {
  all: function(cb) {
    orm.all("students", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("students", [
      "student_name", "activated"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("students", {
      activated: true
    }, condition, cb);
  }
};

module.exports = student;
