var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');
var Schema = mongoose.Schema;

// create a schema
var StudentSchema = new Schema({
  _id: Number,
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  classes: Array,
  studypoints: Array
});

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;