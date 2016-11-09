var mongoose = require('mongoose');

var Mock;
var MockSchema = new mongoose.Schema({
  title: String,
  message: {
    header: String,
    body: String
  }
});

Mock = mongoose.model('Mock', MockSchema);

module.exports = Mock;
