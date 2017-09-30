var express = require('express');
var router = express.Router({mergeParams: true});
var Class = require('../model/classes');
var studentClass = require('./student_info_classes');

router.get('/', function(req, res, next) {
    res.send({message: "All Classes of student " + req.params.id});
});

module.exports = router;