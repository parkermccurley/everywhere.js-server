var Mock;
var mongoose = require('mongoose');
var MockSchema = new mongoose.Schema({
  title: String
});

Mock = mongoose.model('Mock', MockSchema);

module.exports = Mock;
