const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  midterm: {
    type: Number
  },
  final: {
    type: Number
  }
});
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;