// models/Account.js

var mongoose = require('mongoose');
var tests_schema = new mongoose.Schema({
    test: String
  });

  module.exports = mongoose.model('test',tests_schema);//tablename is account+s