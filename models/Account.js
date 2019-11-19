// models/Account.js

var mongoose = require('mongoose');
var accounts_schema = new mongoose.Schema({
    name: String
  });

  module.exports = mongoose.model('account',accounts_schema);//tablename is account+s