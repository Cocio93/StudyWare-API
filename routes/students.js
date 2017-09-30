var express = require('express');
var router = express.Router();
var Student = require('../model/students');
var student_info = require('./student_info');

var new_id = 0;

router.get('/', function(req, res, next) {
    Student.find({}, function(err, students) {
        if (err) {
            res.send({err})
        } else {
            res.send(students);
        }
      });
  });

router.post('/', function(req, res, next) {
    console.log("ID: " + new_id);
    var student = new Student({
        _id: new_id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        classes: [],
        studypoints: []
      });

      console.log("STUDENT:" + student)

    student.save(function(err) {
        if (err) {
            res.send({ message: err.message})
        } else {
            new_id = new_id + 1;
            res.send({ message: 'Added a new student'});
        }
      });
});

// GET student/:id
router.use("/", student_info);
module.exports = router;
