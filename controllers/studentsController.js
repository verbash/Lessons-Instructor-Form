var express = require("express");

var router = express.Router();
var student = require("../models/student.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/students");
});

router.get("/students", function(req, res) {
  // express callback response by calling student.selectAllstudent
  student.all(function(studentData) {
    // wrapper for orm.js that using MySQL query callback will return student_data, render to index with handlebar
    res.render("index", { student_data: studentData });
  });
});

// post route -> back to index
router.post("/students/create", function(req, res) {
  // takes the request object using it as input for student.addstudent
  student.create(req.body.student_name, function(result) {
    var id = req.body.id
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // need to redirect to students/:id instead
    res.redirect("/students/:"+ id);
  });
});


// put route -> back to index
router.put("/students/?id=:id", function(req, res) {
  student.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});


router.get("/students/:id", function(req, res) {
  // express callback response by calling student.selectAllstudent
  student.all(function(studentData) {
    var studentId = req.params.id;
    console.log("get from students/:id " + studentData[studentId]);

    // wrapper for orm.js that using MySQL query callback will return student_data, render to index with handlebar
    res.render("single-student", { student_data: studentData[studentId] });
    // console.log("student data " + student_data.student_name[0]);
  });
});

module.exports = router;
