var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');
var Schema = mongoose.Schema;

// create a schema
var ClassSchema = new Schema({
  _id: Number,
  title: String,
  teachers: Array,
  students: Array,
  lessons: Array,
});

var Class = mongoose.model('Class', ClassSchema);
module.exports = Class;